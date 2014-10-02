(ns triangulator.test
  (:require [triangulator.datatypes :as dt]
            [triangulator.render :as render]
            [triangulator.handlers :as handlers]
            [clojure.core.async :as async :refer [>! <! put! chan alts! go close! timeout]]))

;; some code to exercise the event-handler from the repl

(defn collector
  "collect data from chan, printing it with name attached"
  [in name]
  (go (loop []
        (let [v (<! in)]
          (if v
            (do
              (println "collector: " name ": " v)
              (recur))
            (println ":end"))))))

(defn send-data-to-chan
  "send a given vector of dato to the given channel
in a go loop"
  [data channel]
  (go
    (doseq [d data]
      (>! channel d))))

(comment
  ;; in a comment so as to be able to run from the repl
  
  ;; create a new drawing channel
  (def draw-chan (chan))

  (def triangle-data [[:control :triangle]
                      [:click [0 0]]
                      [:click [1 0]]
                      [:click [0 1]]])
  
  (send-data-to-chan triangle-data draw-chan)

  (collector draw-chan :draw-chan)

  (go (>! draw-chan [:click [1 2]]))

  (close! draw-chan)
  )

(defn event-handler [event-chan]
  (let [ret-chan (chan)
        init-state {:step 0 :complete false}
        transition-fn (fn [state event]
                        (condp = (:step state)
                          0 (assoc state :step 1 :p0 event )
                          1 (assoc state :step 2 :p1 event )
                          2 (assoc state :step 3 :p2 event :complete true)))]
    (go (loop [state init-state]
          (let [event (<! event-chan)
                new-state (transition-fn state event)]
            (>! ret-chan new-state)
            (if (:complete new-state)
              (close! ret-chan)
              (recur new-state)))))
    ret-chan))

(comment
  ;; exercise event-handler
  (let [event-chan (chan)
        ret-chan (event-handler event-chan)
        ]
    (println "event-handler started")
    (go
      (loop []
        (let [ret-state (<! ret-chan)]
          (if (:complete ret-state)
            (do
              (println ":complete " ret-state))
            (do
              (println ":not-complete " ret-state)
              (recur))))))
    
    (go (<! (timeout 1000))
        (>! event-chan [1 2])
        (<! (timeout 1000))
        (>! event-chan [3 4])
        (<! (timeout 1000))
        (>! event-chan [4 5])
        (<! (timeout 1000))
        (println ":done")))
  )
