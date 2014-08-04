(ns triangulator.handlers.util
  (:require [triangulator.datatypes :as dt]
            [triangulator.render :as render]
            [triangulator.handlers :as handlers]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

(defn collector
  "collect data from chan to a vector
return when chan is closed"
  [chan])

(comment
  ;; create a new drawing channel
  (def draw-chan (chan))

  ;; create a return message channel
  (def ret (chan))

  ;; create a sequence of data
  (def)
  )
