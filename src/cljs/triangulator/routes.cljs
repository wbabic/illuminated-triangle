(ns triangulator.routes
  
  (:require [goog.events :as events]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [triangulator.definitions :as d])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(def app-state (atom {:current-item :perp-bisector
                      :current-step :none}))

(println "hello walter")

(defroute "/:definition" {:as params}
  (let [def (:definition params)]
    (println (str "definition: " (keyword def)))
    (swap! app-state assoc :current-item (keyword def))))

(def history (History.))

(events/listen history "navigate"
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

(om/root
  d/item-view
  app-state
  {:target (. js/document (getElementById "definition-box"))})


(om/root d/nav-box d/ui {:target (. js/document (getElementById "definition-list"))})

(comment
  (secretary/dispatch! "/perp-bisector"))

