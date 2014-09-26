(ns triangulator.routes
  (:require [goog.events :as gevents]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [triangulator.state :as state])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(def history (History.))

(defroute "/" []
  (secretary/dispatch! "/triangles/triangle")
  (.setToken history "/triangles/triangle"))

(defroute "/:section" {:as params}
  (let [current-selection
        {:section (keyword (:section params))
         :entry nil
         :item nil}]
    (swap! state/app-state assoc-in [:ui :current-selection] current-selection)))

(defroute "/:section/:entry" {:as params}
  (let [current-selection
        {:section (keyword (:section params))
         :entry (keyword (:entry params))
         :item nil}]
    (swap! state/app-state assoc-in [:ui :current-selection] current-selection)))

(defroute "/:section/:entry/:item" {:as params}
  (let [current-selection
        {:section (keyword (:section params))
         :entry (keyword (:entry params))
         :item (keyword (:item params))}]
    (swap! state/app-state assoc-in [:ui :current-selection] current-selection)))

(gevents/listen history "navigate"
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

(defn dispatch
  "change url to given selection"
  [selection]
  (let [uri (state/selection->uri selection)
        _ (println "dispatching " selection " to uri " uri)]
    (secretary/dispatch! uri)
    (.setToken history uri)))
