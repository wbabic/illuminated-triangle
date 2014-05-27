(ns triangulator.routes
  (:require [goog.events :as gevents]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [triangulator.draw :as draw]
            [triangulator.events :as events]
            [triangulator.definitions :as d]
            [triangulator.components :as c])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(def app-state (atom {:current-item :point}))

(println "hello walter")

(defroute "/:definition" {:as params}
  (let [def (:definition params)]
    (println (str "route definition: " (keyword def)))
    (swap! app-state assoc :current-item (keyword def))))

(def history (History.))

(gevents/listen history "navigate"
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

(om/root
  c/item-view
  app-state
  {:target (. js/document (getElementById "definition-box"))
   :shared (let [{:keys [canvas width height] :as surface} (draw/surface "graphics-box")
                 click-chan (events/mouse-chan canvas :mouse-down)
                 mouse-move-chan (events/mouse-chan canvas :mouse-move)
                 draw-chan (draw/drawing-loop canvas width height)]
             {:surface surface
              :click-chan click-chan
              :mouse-move-chan mouse-move-chan
              :draw-chan draw-chan})})

(om/root c/nav-box d/ui {:target (. js/document (getElementById "definition-list"))})

(comment
  (secretary/dispatch! "/perp-bisector"))
