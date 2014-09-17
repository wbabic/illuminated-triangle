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
      (let [open? (:open section)
            name (:section-name section)]
        (dom/div #js {:className "section"}
                 (dom/input #js {:type "checkbox"
                                 :checked open?
                                 :onChange #(om/transact! section [:open] (fn [o] (not o)))})
                 (dom/span #js {:className "section-header"} name)
                 (when-let [header (:header section)]
                   (dom/p nil header))
                 (when open?
                   (apply dom/ul nil (om/build-all entry (:data section)))))))))

(defn nav-box [app owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [_ (println "mounting nav-box")
            keys-chan (:keys-chan opts)]
        (go
          (loop []
            (let [command (<! keys-chan)
                  current-item (:item @app)
                  next-item (if (= command :next)
                              (state/next-item current-item)
                              (state/previous-item current-item))]
              (om/update! app :item next-item)
              (recur))))))
    
    om/IRender
    (render [this]
      (apply dom/div nil
             (println "nav-box: item " (:item app))
             (om/build-all section (:ui app))))))

(defn point [p]
  (let [[x y] p]
    (str " [" x " " y "]")))

(defn points [points owner]
  (reify
    om/IRender
    (render [_]
      (let [[p1 p2 p3] points]
        (dom/span nil
                  (str "[" (point p1)  (point p2) (point p3) "]"))))))

(defn triangle-detail [triangle owner opts]
  (reify
    om/IRender
    (render [_]
      (let [control-chan (:control-chan opts)]
        (when triangle
          (dom/div #js {:className "triangle-detail"}
                   (om/build points triangle)
                   (dom/button #js {:className "button"
                                    :onClick #(do
                                                (om/update! triangle nil)
                                                (put! control-chan :triangle))}
                               "new triangle")
                   (dom/button #js {:onClick #(println "redraw triangle")}
                               "redraw triangle")))))))

(defn item-detail [item owner]
  (reify
    om/IRender
    (render [_]
      (println "item-detail: " item)
      (when item
        (dom/div #js {:className "definition"}
                 (dom/h3 nil (first (item d/definition-text)))
                 (dom/p nil (second (item d/definition-text))))))))

(defn item-props [props owner]
  (reify
    om/IRender
    (render [_]
      (let [tri-opts (:tri-opts props)]
        (apply dom/ul #js {:className "item-props"}
               (map
                (fn [[opt checked]]
                  (let [name (name opt)]
                    (dom/li nil
                            (dom/input #js {:type "checkbox"
                                            :checked checked
                                            :onChange
                                            (fn [_]
                                              (om/transact! props [:tri-opts opt]
                                                            (fn [v] (not v))))})
                            name)))
                tri-opts))))))

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
        (go
          ;; wait for item from control-chan
          (let [item (<! control-chan)
                _ (println "recieved from control-chan: " item)
                collector (get h/collectors item)
                trans-fn (:transition-fn collector)
                data-fn (:data-fn collector)
                init-state (:init-state collector)]

            (loop [type item]
              (loop [state init-state]
                (let [event (<! event-chan)]
                  (let [new-state (trans-fn event state)]
                    (if (:complete new-state)
                      (do
                        ;; we are done
                        ;; update app state
                        ;; reset local state
                        (om/set-state! owner nil)
                        ;; todo handle triangles and transform
                        (om/update! app item (data-fn new-state)))
                      (do
                        ;; keep going, not done yet
                        (om/set-state! owner new-state)
                        (recur new-state))))))
              ;; wait for item form control-chan, again
              (let [_ (println "waiting for next item from control-chan")
                    item (<! control-chan)
                    _ (println "recieved from control-chan: " item)]
                (recur item)))))
        ;; start off with :triangle
        (go (>! control-chan :triangle))
        ))

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
        (let [step (:step state)
              complete (:complete state)]
          (if-not complete
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
              :none)))
        
        (when tri
          (let [[p1 p2 p3] tri
                [p1x p1y] p1
                [p2x p2y] p2
                [p3x p3y] p3]
            (render/clear draw-chan)
            (render/draw-triangle [[p1x p1y] [p2x p2y] [p3x p3y]]
                                  draw-chan tri-opts tri-style)))
        
        ;; render dom
        (dom/div nil
                 (om/build item-detail item)
                 (let [item-properties (get-in app [:prop-map (:item app)])
                       open? (:open item-properties)]
                   (dom/div nil
                            (dom/input #js {:type "checkbox"
                                            :checked open?
                                            :onChange #(om/transact! item-properties [:open] (fn [o] (not o)))})
                            (dom/span nil "Selected properties")
                            (when open? (om/build item-props item-properties))))
                 (dom/div nil
                          (dom/h3 nil "Vertices")
                          (om/build triangle-detail (:triangle app) {:opts opts})))))))

(defn by-id [id]
  (. js/document (getElementById id)))

(let [{:keys [canvas width height]} (draw/surface "graphics-box")
      click-chan (events/mouse-chan canvas :mouse-down :click)
      keys-chan (events/keys-chan)
      mouse-move-chan (events/mouse-chan canvas :mouse-move :move)
      draw-chan (draw/drawing-loop canvas width height)
      events (async/merge [mouse-move-chan click-chan])]

  (om/root
   item-controller
   state/app-state
   {:target (by-id "definition-box")
    :opts {:event-chan events
           :draw-chan draw-chan
           :control-chan (chan)}})

  (om/root
   nav-box
   state/app-state
   {:target (by-id "definition-list")
    :opts {:keys-chan keys-chan}}))
