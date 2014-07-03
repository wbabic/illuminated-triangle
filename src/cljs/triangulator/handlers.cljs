(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.complex :as complex]))

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

(defn draw-point
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey
                                :fill :red})
                     (dt/point value)])))

(defn draw-point-coords
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey
                                :fill :red})
                     (dt/line [value (project-x value)])
                     (dt/line [value (project-y value)])
                     (dt/point value)])))

(defn draw-line
  "clear screen draw item draw line between p1 and p2"
  [p1 p2 draw-chan options]
  (let [m (geom/midpoint p1 p2)
        l (geom/distance p1 p2)
        [q1 q2 s1 s2] (geom/perp-bisector [p1 p2])]
    (go (>! draw-chan
            [(dt/style {:fill :grey-2})
             (dt/point p1)
             (dt/point p2)
             (dt/line [p1 p2])])
        (when (contains? options :midpoint)
          (>! draw-chan
            [(dt/point m)]))
        (when (contains? options :circles)
          (>! draw-chan
              [(dt/style {:stroke :red
                          :fill :lt-blue})
               (dt/circle p1 l)
               (dt/circle p2 l)
               (dt/circle m (/ l 2))
               (dt/style {:fill :grey-2})
               ;; draw perpendicular bisector
               ;; and points on the perp-bisector
               ;; at +- 1 root3 units from the midpoint
               ;;(dt/style {:stroke :lt-green})
               (dt/line [s1 s2])
               (dt/point q1)
               (dt/point q2)
               (dt/point s1)
               (dt/point s2)]))
        (when (contains? options :extended)
          (let [[p3 p4] (geom/extend-line p1 p2)]
            (>! draw-chan
                [(dt/style {:stroke :lt-grey})
                 (dt/line [p1 p3])
                 (dt/line [p2 p4])
                 (dt/style {:stroke :red})]))))))

(defn draw-circle
  "clear-screen draw item draw point and coords of value"
  [p1 p2 draw-chan]
  (go (>! draw-chan
          [(dt/style {:stroke :red
                      :fill :grey-2})
           (dt/circle p1 (geom/distance p1 p2))
           (dt/point p1)
           (dt/point p2)
           (dt/line [p1 p2])])))

(defn draw-circle-2
  "clear-screen draw item draw point and coords of value"
  [center radius draw-chan]
  (go (>! draw-chan
          [(dt/style {:stroke :red
                      :fill :grey-2})
           (dt/circle center radius)
           (dt/point center)])))

(defn point-state-transitioner
  "handle event by using current state and event to transition to new state
send drawing events to draw-chan
send state changes to out
return new state"
  [[type value] current-state out draw-chan]
  (condp = type
    :move
    (do ;; clear-screen draw-state draw-point-coords
      (go (>! draw-chan clear)
          (>! out [:draw :point draw-chan]))
      (draw-point-coords value draw-chan)
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
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :line draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles :midpoint})
            current-state)))
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
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :triangle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles})
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                base (geom/altitude p1 p2 value)]
            (draw-line p1 p2 draw-chan #{:circles})
            (draw-line p2 value draw-chan nil)
            (draw-line value p1 draw-chan nil)
            (draw-line value base draw-chan nil)
            current-state)))
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

(defn circle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :circle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-circle p1 value draw-chan)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :circle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              circle (dt/circle p1 (geom/distance p1 value))
              _ (println "circle: " circle)]
          (go (>! out circle)
              (>! out [:draw :circle draw-chan]))
          {:step 0}))))

(defn reflection-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan nil)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                ref (geom/reflection p1 p2)
                image (ref value)]
            (draw-line p1 p2 draw-chan #{:extended})
            (draw-line value image draw-chan #{:midpoint})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear))
          (draw-point value draw-chan)
          {:step 1 :p1 value})
      1 (let [p1 (:p1 current-state)]
          {:step 2 :p1 p1 :p2 value})
      2 {:step 0})))

(defn inversion-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)]
            (draw-circle center value draw-chan)
            current-state)
        2 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                image (inversion value)]
            (draw-circle-2 center radius draw-chan)
            (draw-line center value draw-chan #{:extended})
            (draw-point image draw-chan)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :center value}) 
      1 (let [center (:center current-state)
              radius (geom/distance value center)
              _ (println "center: " center " radius: " radius)
              inversion (complex/inversion center radius)]
          {:step 2
           :center center
           :radius radius
           :inversion inversion})
      2 {:step 0})))

(defn homothety-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                homothety (:homothety current-state)
                image (homothety value)]
            (draw-line center image draw-chan nil)
            (draw-point value draw-chan)
            current-state)
        2 (let [center (:center current-state)
                p1 (:p1 current-state)
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety value)]
            (draw-line center image1 draw-chan nil)
            (draw-line center image2 draw-chan nil)
            (draw-point p1 draw-chan)
            (draw-point value draw-chan)
            (draw-line p1 value draw-chan nil)
            (draw-line image1 image2 draw-chan nil)
            current-state)
        3 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety p2)
                image3 (homothety value)]
            (draw-line center image1 draw-chan nil)
            (draw-line center image2 draw-chan nil)
            (draw-line center image3 draw-chan nil)
            (draw-point p1 draw-chan)
            (draw-point p2 draw-chan)
            (draw-point value draw-chan)
            (draw-line p1 p2 draw-chan nil)
            (draw-line p2 p3 draw-chan nil)
            (draw-line p3 p1 draw-chan nil)
            (draw-line image1 image2 draw-chan nil)
            (draw-line image2 image3 draw-chan nil)
            (draw-line image3 image1 draw-chan nil)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [k 2
              ;; ratio k defaults to 2 for now
              homothety (complex/homothety value k)]
          (assoc current-state :step 1 :center value :homothety homothety))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn rotation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                rotation (:rotation current-state)
                image (rotation value)]
            (draw-line center image draw-chan nil)
            (draw-point value draw-chan)
            current-state)
        2 (let [center (:center current-state)
                p1 (:p1 current-state)
                rotation (:rotation current-state)
                image1 (rotation p1)
                image2 (rotation value)]
            (draw-line center image1 draw-chan nil)
            (draw-line center image2 draw-chan nil)
            (draw-point p1 draw-chan)
            (draw-point value draw-chan)
            (draw-line p1 value draw-chan nil)
            (draw-line image1 image2 draw-chan nil)
            current-state)
        3 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                rotation (:rotation current-state)
                image1 (rotation p1)
                image2 (rotation p2)
                image3 (rotation value)]
            (draw-line center image1 draw-chan nil)
            (draw-line center image2 draw-chan nil)
            (draw-line center image3 draw-chan nil)
            (draw-point p1 draw-chan)
            (draw-point p2 draw-chan)
            (draw-point value draw-chan)
            (draw-line p1 p2 draw-chan nil)
            (draw-line p2 p3 draw-chan nil)
            (draw-line p3 p1 draw-chan nil)
            (draw-line image1 image2 draw-chan nil)
            (draw-line image2 image3 draw-chan nil)
            (draw-line image3 image1 draw-chan nil)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [angle  (/ geom/tau 24)
              ;; angle defaults to a twenty fourth of a tau
              rotation (complex/rotation value angle)]
          (assoc current-state :step 1 :center value :rotation rotation))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn mouse-handler [click move ctr-chan draw-chan]
  (let [return-message-chan (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[value channel] (alts! [click move ctr-chan])
                type (condp = channel
                       click :click
                       move :move
                       ctr-chan :ctr-chan)]
            (when (= channel ctr-chan)
              (do
                (println "ctr-chan item: " value)
                (when-not (= item value)
                  (>! draw-chan clear)
                  (>! return-message-chan [:draw value draw-chan]))
                (recur value {:step 0})))

            (condp = item
              :none
              (recur item
                     state)
              :point
              (recur item
                     (point-state-transitioner [type value] state return-message-chan draw-chan))
              :line
              (recur item
                     (line-state-transitioner [type value] state return-message-chan draw-chan))
              :triangle
              (recur item
                     (tri-state-transitioner [type value] state return-message-chan draw-chan))
              :circle
              (recur item
                     (circle-state-transitioner [type value] state return-message-chan draw-chan))
              :reflection
              (recur item
                     (reflection-state-transitioner [type value] state return-message-chan draw-chan))
              :inversion
              (recur item
                     (inversion-state-transitioner [type value] state return-message-chan draw-chan))
              :homothety
              (recur item
                     (homothety-state-transitioner [type value] state return-message-chan draw-chan))
              :rotation
              (recur item
                     (rotation-state-transitioner [type value] state return-message-chan draw-chan))
              
              (do
                (println "warning: iten not handled: " item)
                (recur item state))))))
    return-message-chan))
