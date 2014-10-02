(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [triangulator.geometry :as geom]
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
      0 {:step 1 :p1 value}
      1 (assoc state :step 2 :p2 value)
      2 (assoc state :step 3 :p3 value :complete true)))))

(defn data-fn [state]
  (vector (:p1 state)
          (:p2 state)
          (:p3 state)))

(defn handle-event [owner event-chan ret-chan]
  (go (loop [state {:step 0 :complete false}]
        (let [event (<! event-chan)
              new-state (triangle-transitioner event state)]
          (if (:complete new-state)
            (>! ret-chan (data-fn new-state))
            (do (om/set-state! owner new-state)
                (recur new-state)))))))

(defn update-state [tri chan]
  (go
    (let [[p1 p2 p3] tri
          m1 (geom/midpoint p1 p2)
          m2 (geom/midpoint p2 p3)]
      (println "updating state p1 " p1)
      (>! chan [:click p1])
      (<! (timeout 500))
      (>! chan [:move m1])
      (println "updating state p2 " p2)
      (<! (timeout 500))
      (>! chan [:click p2])
      (<! (timeout 500))
      (>! chan [:move m2])
      (println "updating state p3 " p3)
      (<! (timeout 500))
      (>! chan [:click p3])
      (println "updated state"))))
