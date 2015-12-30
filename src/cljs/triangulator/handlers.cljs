(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [triangulator.geometry :as geom]
   [triangulator.render :as render]
   [cljs.core.async :as async :refer [>! <! put! chan alts! close! timeout]]
   [om.core :as om :include-macros true]))

(defn triangle-transitioner
  "update state based on event"
  [event state]
  (let [[type value] event]
    (case type
    :move
    (do
      (condp = (:step state)
        0 (assoc state :p1 value)
        1 (assoc state :p2 value)
        2 (assoc state :p3 value)
        3 state))
    :click
    (condp = (:step state)
      0 (assoc state :step 1 :p1 value)
      1 (assoc state :step 2 :p2 value)
      2 (assoc state :step 3 :p3 value :complete true)))))

(defn data-fn [state]
  (vector (:p1 state)
          (:p2 state)
          (:p3 state)))

(defn handle-event
  "process move and click events from event-chan
  update local state till complete
  then return new triangle in ret-chan"
  [owner event-chan ret-chan]
  (go (loop [state {:step 0 :complete false}]
        (let [event (<! event-chan)
              new-state (triangle-transitioner event state)]
          (if (:complete new-state)
            (do
              ;; is complete, so do not recur
              (om/set-state! owner new-state)
              (>! ret-chan (data-fn new-state)))
            (do
              ;; not complete, keep going
              (om/set-state! owner new-state)
              (recur new-state)))))))

(defn handle-redraw
  "redraw item
  create a data sequence for item and send it to the draw channel"
  [owner tri tri-data draw-chan ret-chan]
  (go
    (println "handle-redraw")
    (>! draw-chan tri-data)
    (<! (timeout 1000))
    (render/clear draw-chan)
    (<! (timeout 1000))
    (>! ret-chan tri)))

(defn update-state
  "for given tri, send events to redraw it to given channel"
  [tri chan]
  (go
    (let [[p1 p2 p3] tri
          l1 (geom/param-line p1 p2)
          l2 (geom/param-line p2 p3)
          m1 (geom/midpoint p1 p2)
          m2 (geom/midpoint p2 p3)]

      (>! chan [:click p1])

      (doseq [t (range 25)]
        (let [t1 (* t (/ 24))
              p (l1 t1)]
          (<! (timeout 80))
          (>! chan [:move p])))

      (<! (timeout 80))
      (>! chan [:click p2])

      (doseq [t (range 25)]
        (let [t1 (* t (/ 24))
              p (l2 t1)]
          (<! (timeout 80))
          (>! chan [:move p])))

      (<! (timeout 80))
      (>! chan [:click p3]))))
