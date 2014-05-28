(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.datatypes :as dt]))

(enable-console-print!)

(def clear
  [(dt/style {:fill :grey-2}) (dt/rectangle
                               (dt/point [0 0])
                               (dt/point [600 600]))])

(defn project-x [p]
  (let [[x y] p]
    [0 y]))

(defn project-y [p]
  (let [[x y] p]
    [x 0]))


(comment
  (condp = item
    :triangle (condp = channel
                :move
                (condp = (:step state)
                  0 (do
                      (>! draw-chan clear)
                      (>! draw-chan [;; style
                                     (dt/line value (project-x value))
                                     (dt/line value (project-y value))]))
                  1 (let [p1 (:p1 state)]
                      (>! draw-chan clear)
                      (>! draw-chan [;; style
                                     (dt/line p1 value)]))
                              
                  2 (let [p1 (:p1 state)
                          p2 (:p2 state)]
                      (>! draw-chan clear)
                      (>! draw-chan [;; style
                                     (dt/line p1 p2)
                                     (dt/line p2 value)])))
                :click
                (condp = (:step state)
                  0 (recur :line {:step 1 :p1 value}) 
                  1 (let [p1 (:p1 state)]
                      (recur :line {:step 2 :p1 p1 :p2 value}))
                  2 (let [p1 (:p1 state)
                          p2 (:p2 state)]
                      ;; snap to ... special triangle, if enabled
                      (>! out (dt/line [p1 p2 value]))
                      (recur :line {:step 0}))))))

(defn draw-point-coords
  "clear-screen draw item draw point and coords of value"
  [value item draw-chan out]
  (go (>! draw-chan clear)
      (>! out [:draw item draw-chan])
      (>! draw-chan [(dt/style {:stroke :lt-grey
                                :fill :red})
                     (dt/line [value (project-x value)])
                     (dt/line [value (project-y value)])
                     (dt/point value)])))

(defn draw-line
  "clear screen draw item draw line between p1 and p2"
  [p1 p2 item draw-chan out clear?]
  (go (when clear? (>! draw-chan clear))
      (>! out [:draw item draw-chan])
      (>! draw-chan [(dt/style {:stroke :red
                                :fill :grey-2})
                     (dt/point p1)
                     (dt/point p2)
                     (dt/line [p1 p2])])))

(defn point-state-transitioner
  "handle event by using current state and event to transition to new state
send drawing events to draw-chan
send state changes to out
return new state"
  [[type value] current-state out draw-chan]
  (condp = type
    :move
    (do ;; clear-screen draw-state draw-point-coords
      (draw-point-coords value :point draw-chan out)
      current-state)
    :click
    (do ;; add point to state; reset state
      (go (>! out (dt/point value))
          (>! out [:draw :point draw-chan]))
      {:step 0})))

(defn line-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (condp = (:step current-state)
      0 (do
          (draw-point-coords value :line draw-chan out)
          current-state)
      1 (let [p1 (:p1 current-state)]
          (draw-line p1 value :line draw-chan out true)
          current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :line draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])
              _ (println "line: " line)]
          (go (>! out line)
              (>! draw-chan clear)
              (>! out [:draw :line draw-chan]))
          {:step 0}))))

(defn tri-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (condp = (:step current-state)
      0 (do
          (draw-point-coords value :triangle draw-chan out)
          current-state)
      1 (let [p1 (:p1 current-state)]
          (draw-line p1 value :triangle draw-chan out true)
          current-state)
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)]
          (draw-line p1 p2 :triangle draw-chan out true)
          (draw-line p2 value :triangle draw-chan out false)
          (draw-line value p1 :triangle draw-chan out false)
          current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :triangle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])
              _ (println "line: " line)]
          (go (>! out [:draw :triangle draw-chan]))
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)
              triangle (dt/triangle p1 p2 value)
              _ (println "triangle: " triangle)]
          (go (>! out triangle)
              (>! out [:draw :triangle draw-chan]))
          {:step 0}))))

(defn mouse-handler [click move ctr-chan draw-chan]
  (let [out (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[value channel] (alts! [click move ctr-chan])
                type (condp = channel
                       click :click
                       move :move
                       ctr-chan :ctr-chan)]
            (println item " : " state)
            (when (= type :click) (println type " : " value))
            (when (= channel ctr-chan)
              (do
                (println "new item: " value)
                (when-not (= item value)
                  (>! draw-chan clear)
                  (>! out [:draw value draw-chan]))
                (recur value state)))

            (condp = item
              :none
              (recur item
                     state)
              :point
              (recur item
                     (point-state-transitioner [type value] state out draw-chan))
              :line
              (recur item
                     (line-state-transitioner [type value] state out draw-chan))
              :triangle
              (recur item
                     (tri-state-transitioner [type value] state out draw-chan))
              (do
                (println "warning: iten not handled: " item)
                (recur item state))))))
    out))
