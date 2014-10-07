(ns triangulator.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.handlers :as h]
            [triangulator.draw :as draw]
            [triangulator.render :as render]
            [triangulator.events :as events]
            [triangulator.routes :as routes]
            [triangulator.state :as state]
            [triangulator.state.navigation :as nav]))

(enable-console-print!)

(defn items
  "display items for given entry id and current item id"
  [item-ids entry-data current-selection]
  (apply dom/ul #js {:className "items"}
         (map
          (fn [item-id]
            (let [{:keys [section entry item]} current-selection
                  active? (= item-id item)
                  class-name (if active? "active" "not-active")
                  item-data (item-id entry-data)]
              (dom/li #js {:className class-name}
                      (dom/a #js {:href
                                  (str "#/" (name section) "/" (name entry) "/" (name item-id))}
                             (:label item-data)))))
          item-ids)))

(defn entries
  "display entries for given section data and current entry id"
  [entry-ids section-data current-selection]
  (apply dom/ul #js {:className "entries"}
         (map
          (fn [entry-id]
            (let [{:keys [section entry item]} current-selection
                  active? (= entry-id entry)
                  class-name (if active? "active" "not-active")
                  entry-data (entry-id  section-data)]
              (dom/li #js {:className class-name}
                      (dom/a #js {:href (str "#/" (name section) "/" (name entry-id))}
                             (:label entry-data))
                      (when active?
                        (items (get-in section-data [:item-map entry])
                               entry-data
                               current-selection)))))
          entry-ids)))

(defn sections [ui owner]
  (reify
    om/IRender
    (render [this]
      (let [{:keys [section entry item] :as current-selection} (:selection ui)
            section-ids (get-in ui [:sections :ids])            
            sections-data (:section-data ui)]
        (apply dom/div #js {:className "sections"}
               (map
                (fn [section-id]
                  (let [section-data (section-id sections-data)
                        section-name (:name section-data)
                        open? (= section-id section)
                        class-name (if open? "section active" "section")]
                    (dom/div #js {:className class-name}
                             (dom/span #js {:className "section-header"}
                                       (dom/a #js {:href (str "#/" (name section-id))}
                                              section-name))
                             (when open?
                               (println "section " section-id " open? " open?)
                               (entries (get-in ui [:sections :entry-map section-id])
                                        section-data
                                        current-selection)))))
                section-ids))))))

(defn nav-box [app owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [_ (println "mounting nav-box")
            keys-chan (:keys-chan opts)]
        (go
          (loop []
            (let [command (<! keys-chan)
                  current-selection (get-in @app [:ui :selection])
                  next-selection (nav/next-selection command current-selection (:ui @app))]
              (routes/dispatch next-selection)
              (recur))))))
    
    om/IRender
    (render [this]
      (dom/div #js {:className "nav-box"}
               (om/build sections (:ui app))))))

(defn triangle-controls [triangle owner opts]
  (reify
    om/IRender
    (render [_]
      (let [control-chan (:control-chan opts)]
        (when triangle
          (dom/div #js {:className "triangle-controls"}
                   (dom/h2 nil "Triangle controls")
                   (dom/button #js {:className "button"
                                    :onClick #(do
                                                (om/update! triangle nil)
                                                (put! control-chan :triangle))}
                               "new triangle")
                   (dom/button #js {:onClick #(do
                                                (println "redraw triangle")
                                                (put! control-chan :redraw))}
                               "redraw triangle")))))))

(defn section-detail [app owner]
  (reify
    om/IRender
    (render [_]
      (let [ui (:ui app)
            tri (get-in app [:geometry :triangle])
            {:keys [section entry item] :as current-selection} (:selection ui)
            section-data (get-in ui [:section-data section])]
        (if (not (nil? item))
          (do
            ;; display item
            (println "displaying item")
            (dom/div #js {:className "item-definition"}
                     (dom/h2 nil (get-in section-data [entry item :title]))
                     (dom/p nil (get-in section-data [entry item :text]))))
          (if (not (nil? entry))
            (let [entry-data (get-in section-data [entry])]
              ;; display entry
              (println "displaying entry: " entry)
              (prn entry)
              (dom/div #js {:className "entry-definition"}
                       (dom/h2 nil (get-in section-data [entry :title]))
                       (dom/p nil (get-in section-data [entry :text]))))
            (do
              ;; display section
              (println "displaying section")
              (dom/div #js {:className "section-definition"}
                       (dom/h2 nil (get-in section-data [:title]))
                       
                       (when (= section :triangles)
                         ;; triangles section
                         (if tri
                           (dom/div nil
                                    (dom/p nil (get-in section-data [:existing-text])))
                           (dom/div nil
                                    (dom/p nil (get-in section-data [:new-text]))
                                    (dom/ul nil
                                            (dom/li nil (dom/a #js {:href (str "#/" )}
                                                               "Equilateral"))
                                            (dom/li nil "Isosceles")
                                            (dom/li nil "Right")
                                            (dom/li nil "Right Isoceles")
                                            (dom/li nil "Scalene")))))))))))))

(defn section-props [ui owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [section entry item] :as current-selection} (get-in ui [:selection])
            section-data (get-in ui [:section-data section])
            entry-opts (get-in section-data [:props :entry entry :tri-opts])
            item-props (get-in section-data [:props :item entry item])]
        (dom/div nil
                 (apply dom/ul #js {:className "item-props"}
                        (map
                         (fn [prop-key]
                           (let [checked (prop-key entry-opts)
                                 prop-name (name prop-key)]
                             (dom/li nil
                                     (dom/input #js {:type "checkbox"
                                                     :autoFocus "autofocus"
                                                     :checked checked
                                                     :onChange
                                                     (fn [_]
                                                       (om/transact! entry-opts [prop-key]
                                                                     (fn [v] (not v))))})
                                     prop-name)))
                         item-props)))))))

(defn item-controller [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:state :none})

    om/IWillMount
    (will-mount [_]
      (let [event-chan (:event-chan opts)
            control-chan (:control-chan opts)
            draw-chan (:draw-chan opts)
            ret-chan (chan)
            redraw-chan (chan)]
        (go
          (loop []
            (let [control-type (<! control-chan)]
              (condp = control-type
                :triangle
                (h/handle-event owner event-chan ret-chan)
                :redraw
                (let [tri (get-in @app [:geometry :triangle])]
                  (render/clear draw-chan)
                  (om/update! app [:ui :selection :redraw] true)
                  (om/update! app [:geometry :triangle] nil)
                  (h/handle-event owner redraw-chan ret-chan)
                  (h/update-state tri redraw-chan)))

              ;; wait for return value from return channel
              (let [ret-val (<! ret-chan)]
                (om/set-state! owner nil)
                (if (= :redraw control-type)
                  (om/update! app [:ui :selection :redraw] false))
                (om/update! app [:geometry :triangle] ret-val)
                (recur)))))
        ;; start off with a control-type of :triangle
        (go (>! control-chan :triangle))))

    om/IRenderState
    (render-state [_ state]
      (let [draw-chan (:draw-chan opts)
            tri (get-in app [:geometry :triangle])
            tri-style state/tri-style

            section (get-in app [:ui :selection :section])
            entry   (get-in app [:ui :selection :entry])
            item    (get-in app [:ui :selection :item])
            redraw? (get-in app [:ui :selection :redraw])

            prop-map (get-in app [:ui :section-data :triangles :props :entry])

            tri-opts (get-in prop-map [entry :tri-opts])
            line-opts (get-in prop-map [entry :line-opts])]

        ;; render graphics from local state when not complete
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

        ;; render app-state triangle to draw-chan, when it exists
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
                 (om/build section-detail app)
                 (when item
                   (om/build section-props (:ui app)))
                 (when (and (= section :triangles) (not redraw?))
                   (om/build triangle-controls
                             (get-in app [:geometry :triangle])
                             {:opts opts})))))))

(defn by-id [id]
  (. js/document (getElementById id)))

(let [{:keys [canvas width height]} (draw/surface "graphics-box")
      click-chan (events/mouse-chan canvas :mouse-down :click)
      mouse-move-chan (events/mouse-chan canvas :mouse-move :move)
      events (async/merge [mouse-move-chan click-chan])
      keys-chan (events/keys-chan)
      draw-chan (draw/drawing-loop canvas width height)]

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
