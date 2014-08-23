(ns triangulator.routes
  (:require [goog.events :as gevents]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [triangulator.draw :as draw]
            [triangulator.definitions :as d]
            [triangulator.components :as c]
            [triangulator.state :as state])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(defroute "/" []
  (println "redirecting ...")
  (secretary/dispatch! "/centroid"))

(defroute "/:definition" {:as params}
  (let [item (:definition params)]
    (println "defroute: " item)
    (when item
      (println (str "route definition: " (keyword item)))
      (swap! state/app-state assoc :item (keyword item)))))

(def history (History.))

(gevents/listen history "navigate"
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

(comment
  (secretary/dispatch! "/perp-bisector"))
