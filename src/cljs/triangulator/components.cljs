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

(defn item-detail [app owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className "item-detail"}
             "vertices "
             (om/build-all point-detail (:triangle app))))))

(defn item-props [props owner]
  (reify
    om/IRender
    (render [_]
      (let [tri-opts (:tri-opts props)
            _ (prn tri-opts)]
        (apply dom/div #js {:className "item-props"}
               (map #(dom/p nil (name %)) tri-opts))))))

(defn item-controller [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:state :none})

    om/IWillMount
    (will-mount [_]
      (let [_ (println "mounting item-controller")
            event-chan (:event-chan opts)
            control-chan (:control-chan opts)]

        (go (loop [type :none state {:step 0}]

              (let [[event port] (alts! [event-chan control-chan])]
                (if (= port control-chan)
                  (recur event {:step 0})
                  (let [new-state (h/triangle-transitioner event state)]
                    (if (= (:step new-state) 3)
                      (let [{:keys [p1 p2 p3]} new-state]
                        (om/set-state! owner {:step 4})
                        (om/update! app :triangle [p1 p2 p3]))
                      (do
                        (om/set-state! owner new-state)
                        (recur type new-state))))))))))

    om/IRenderState
    (render-state [_ state]
      (let [draw-chan (:draw-chan opts)
            item (:item app)
            tri (:triangle app)
            prop-map (:prop-map app)
            tri-opts (get-in prop-map [item :tri-opts])
            line-opts (get-in prop-map [item :line-opts])
            tri-style state/tri-style]

        ;; render graphics from local state
        (let [step (:step state)]
          (condp = step
            0 (let [p1 (:p1 state)]
                (when p1
                  (render/clear draw-chan)
                  (render/draw-point-coords p1 draw-chan)))
            1 (let [{:keys [p1 p2]} state]
                (render/clear draw-chan)
                (if p2
                  (render/draw-edge p1 p2 draw-chan :e1 line-opts)
                  (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})))
            2 (let [{:keys [p1 p2 p3] :as t} state]
                (render/clear draw-chan)
                (if p3
                  (render/draw-triangle [p1 p2 p3] draw-chan tri-opts tri-style)
                  (render/draw-edge p1 p2 draw-chan :e1 line-opts)))
            3 (let [{:keys [p1 p2 p3] :as t} state]
                (render/clear draw-chan)
                (render/draw-triangle [p1 p2 p3] draw-chan tri-opts tri-style))
            4 (let [[p1 p2 p3] tri
                    [p1x p1y] p1
                    [p2x p2y] p2
                    [p3x p3y] p3]
                (render/clear draw-chan)
                (println "draing tri :step :complete: " tri)
                (render/draw-triangle [[p1x p1y] [p2x p2y] [p3x p3y]]
                                      draw-chan tri-opts tri-style))
            :none))

        ;; render dom
        (dom/div #js {:className "definition"}
                 (dom/h3 nil (first (item d/definition-text)))
                 (dom/p nil (second (item d/definition-text)))
                 (om/build item-detail app)
                 (om/build item-props (get-in app [:prop-map (:item app)]))
                 )))))

(om/root
 item-controller
 state/app-state
 {:target (. js/document (getElementById "definition-box"))
  :opts
  (let [{:keys [canvas width height]} (draw/surface "graphics-box")
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
