(ns triangulator.handlers)

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
      2 (assoc state :step 3 :p3 value)
      3 {:step 0}))))
