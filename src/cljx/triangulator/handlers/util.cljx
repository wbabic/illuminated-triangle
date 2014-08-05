(ns triangulator.handlers.util
  (:require [triangulator.datatypes :as dt]
            [triangulator.render :as render]
            [triangulator.handlers :as handlers]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )


;; some code to exercise the event-handler from the repl

(defn collector
  "collect data from chan to a vector
and prints it with name attached"
  [in name]
  (go (loop []
        (println "collector: " name ": " (<! in))
        (recur))))

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
  (def event-chan (chan))

  (def return-chan (handlers/event-handler event-chan draw-chan))

  (def triangle-data [[:control :triangle]
                      [:click [0 0]]
                      [:click [1 0]]
                      [:click [0 1]]])
  
  (send-data-to-chan triangle-data event-chan)

  (collector draw-chan :draw-chan)
  (collector return-chan :return-chan)

  
  (collector (async/merge [draw-chan ret-chan]))
  (go (>! draw-chan [:click [1 2]]))
  (go (>! ret-chan [:move [1 2]]))

  )
