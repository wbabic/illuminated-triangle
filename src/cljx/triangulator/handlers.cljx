(ns triangulator.handlers)

(def init-tri-state
  {:step 0
   :p1 nil
   :p2 nil
   :p3 nil
   :complete false})

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
      2 (assoc state :step 3 :p3 value :complete true)
      3 {:step 0}))))

(def collectors
  {:triangle
   {:transition-fn triangle-transitioner
    :init-state init-tri-state
    :data-fn (fn [state]
               (vector (:p1 state)
                       (:p2 state)
                       (:p3 state)))
    :update-fn (fn [app data]
                 )}})

