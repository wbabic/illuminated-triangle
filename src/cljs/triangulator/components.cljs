(ns triangulator.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.handlers :as h]
            [triangulator.draw :as draw]
            [triangulator.render :as render]
            [triangulator.definitions :as d]
            [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.events :as events]
            [triangulator.state :as state]))

(enable-console-print!)

(defn entry [current-item owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "active"}
              (dom/a #js {:href (str "#/" (name (:id current-item)))}
                     (:label current-item))
              (when-let [s (:symbol current-item)]
                (str " " s))))))

(defn section [section owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "section"}
               (dom/h2 nil (:section-name section))
               (when-let [header (:header section)]
                 (dom/p nil header))
               (apply dom/ul nil (om/build-all entry (:data section)))))))

(defn nav-box [state owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil 
             (om/build-all section (:ui state))))))

(defn point-detail [point owner]
  (reify
    om/IRender
    (render [_]
      (let [[x y] point]
        (dom/span nil
                  (str "[" x  " " y "] "))))))

(defn item-detail [points owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/p nil (om/build-all point-detail points)))))

(defn item-controller [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:state :none})

    om/IWillMount
    (will-mount [_]
      (let [_ (println "mounting item-controller")
            event-chan (om/get-shared owner :event-chan)
            control-chan (om/get-shared owner :control-chan)]

        (go (loop [type :none state {:step 0}]
              (let [[event port] (alts! [event-chan control-chan])]
                (if (= port control-chan)
                  (recur event {:step 0})
                  (let [new-state (h/triangle-transitioner event state)]
                    (om/set-state! owner new-state)
                    (when (< (:step state) 3)
                        (recur type new-state)))))))))

    om/IRenderState
    (render-state [_ state]
      (let [draw-chan (om/get-shared owner :draw-chan)
            item (:item app)
            [p1 p2 p3] (:triangle app)
            tri-opts (get-in state/prop-map [item :tri-opts])
            line-opts (get-in state/prop-map [item :line-opts])
            tri-style state/tri-style]

        ;; render graphics from local state
        (let [step (:step state)]
          (condp = step
            0 (let [p1 (:p1 state)]
                (when p1
                  (render/clear draw-chan)
                  (render/draw-point-coords p1 draw-chan)))
            
            1 (let [{:keys [p1 p2]} state]
                (if p2
                  (do
                    (render/clear draw-chan)
                    (render/draw-edge p1 p2 draw-chan :e1 line-opts))
                  (do
                    (render/clear draw-chan)
                    (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red}))))
            
            2 (let [{:keys [p1 p2 p3] :as t} state]
                (if p3
                  (do
                    (render/clear draw-chan)
                    (render/draw-triangle [p1 p2 p3] draw-chan tri-opts tri-style))
                  (do
                    (render/clear draw-chan)
                    (render/draw-edge p1 p2 draw-chan :e1 line-opts))))

            3 (let [{:keys [p1 p2 p3] :as t} state]
                (render/clear draw-chan)
                (render/draw-triangle [p1 p2 p3] draw-chan tri-opts tri-style)
                (println "update app :triangle to " [p1 p2 p3])
                (om/update! app :triangle [p1 p2 p3]))
            
            :none))

        ;; render dom
        (dom/div #js {:className "definition"}
                 (dom/h3 nil (first (item d/definition-text)))
                 (dom/p nil (second (item d/definition-text)))
                 (om/build item-detail (get app :triangle))
                 )))))

(om/root
 item-controller
 state/app-state
 {:target (. js/document (getElementById "definition-box"))
  :shared (let [{:keys [canvas width height]} (draw/surface "graphics-box")
                click-chan (events/mouse-chan canvas :mouse-down :click)
                mouse-move-chan (events/mouse-chan canvas :mouse-move :move)
                draw-chan (draw/drawing-loop canvas width height)
                events (async/merge [mouse-move-chan click-chan])]
            {:event-chan events
             :draw-chan draw-chan
             :control-chan (chan)})})

(om/root
 nav-box
 state/app-state
 {:target (. js/document (getElementById "definition-list"))})
