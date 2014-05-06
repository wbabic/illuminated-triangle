(ns triangulator.routes
  (:require [goog.events :as events]
            [secretary.core :as secretary :include-macros true :refer [defroute]])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(println "hello walter")

(defroute "/:definition" {:as params}
  (println (str "definition: " (:definition params))))

(secretary/dispatch! "/perp-bisector")

(def history (History.))

(events/listen history EventType/NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)
