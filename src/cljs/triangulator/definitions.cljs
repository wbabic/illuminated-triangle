(ns triangulator.definitions
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.events :as events]
            [triangulator.draw :as draw]
            [triangulator.datatypes :as dt]))

(enable-console-print!)

(def basic-definitions
  [{:id :point :label "point"}
   {:id :line :label "line"}
   {:id :midpoint :label "midpoint"}
   {:id :perp-bisector :label "perpendicualr bisector"}
   {:id :ang-bisector :label "angular bisector"}
   {:id :circle :label "circle"}
   {:id :triangle :label "triangle"}])

(def special-triangles
  [{:id :eq-tri :label "equilateral"}
   {:id :right :label "right"}
   {:id :isosc :label "isosceles"}
   {:id :golden :label "golden"}])

(def triangle-properties
  [{:id :median :label "median"}
   {:id :centroid :label "centroid"}
   {:id :circumcircle :label "circumcircle"}
   {:id :altitude :label "altitude"}
   {:id :orthocenter :label "orthocenter"}
   {:id :incircle :label "incircle"}
   {:id :excircles :label "excircles"}
   {:id :eulor-line :label "eulor line"}
   {:id :nine-pt-circle :label "nine point circle"}])

(def ui
  [{:section-name "Basic Definitions"
    :data basic-definitions}
   {:section-name "Special Triangles"
    :data special-triangles}
   {:section-name "Properties of Triangles"
    :data triangle-properties}])

(def definition-text
  {:point ["Point" "A point represented by a vector of two coordinates. Move around in the canvas and see the canvas coordinates. Click to add  points."]
   :line ["Line" "Two points connected together. Two clicks. One point, two point, a line between, can be extended in either direction. Click two times in the canvas to make a line. Give it a name and a color."]
   :midpoint ["Midpoint" "The point on a line equidistant from the the endpoints."]
   :perp-bisector ["Perpndicular Bisector of a line segment."
                   "The line through the midpoint and perpendicular to the line. Loci of points equidistant from two points. Make lines in the canvas and see the perpedicular bisector of it."]
   :ang-bisector ["Angular Bisector"
                  "Angle between two intersecting lines. Line that divides angle into equal parts. Loci of points equidistant from two lines."]
   :circle ["Circle" "Center and radius. Loci of points equidistant from one point."]
   :triangle ["Triangle" "Three non collinear points. Three vertces. Three edges. Click three times in the canvas to make a triangle."]})

;; app state is the currently selected definition or none

;; compoents
;; definition entry
;; definition list
;; section
;; definition box

;; a definition box contains sections
;; each section has a heading label and a list of definitions
;; each definition has a lable and a link

(defn definition-entry [current-item owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "active"}
              (dom/a #js {:href (str "#/" (name (:id current-item)))}
                     (:label current-item))))))

(defn section [section owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "section"}
               (dom/h2 nil (:section-name section))
               (apply dom/ul nil (om/build-all definition-entry (:data section)))))))

(defn nav-box [ui owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil 
             (om/build-all section ui)))))

(defn toggle [state]
  (if (= :up state)
    :down
    :up))

(defn project-x [p]
  (let [[x y] p]
    [0 y]))

(defn project-y [p]
  (let [[x y] p]
    [x 0]))

(def clear
  [(dt/style {:fill :grey-2}) (dt/rectangle
                               (dt/point [0 0])
                               (dt/point [600 600]))])

(defn mouse-handler [click-chan mouse-move-chan draw-chan owner]
  (go (loop []
        (let [[mouse-point channel] (alts! [click-chan mouse-move-chan])]
          (condp = channel
            click-chan
            (do
              (>! draw-chan clear)

              (let [points (om/get-state owner :point)]
                (>! draw-chan [(dt/style {:fill :red
                                          :stroke :grey-2})])
                (doseq [point points]
                  (>! draw-chan [point])))
              
              (>! draw-chan [(dt/style {:fill :red}) (dt/point mouse-point)])

              (println "adding point to local state: " mouse-point)
              (om/update-state! owner :point #(conj % (dt/point mouse-point)))
              (recur))

            mouse-move-chan
            (do
              (>! draw-chan clear)

              (let [points (om/get-state owner :point)]
                (>! draw-chan [(dt/style {:fill :red
                                          :stroke :grey-2})])
                (doseq [point points]
                  (>! draw-chan [point])))
              
              (>! draw-chan [(dt/style {:fill :lt-red
                                        :stroke :lt-grey
                                        :lineWidth 1})
                             (dt/line [mouse-point (project-x mouse-point)])
                             (dt/line [mouse-point (project-y mouse-point)])])
              (>! draw-chan [(dt/style {:fill :green
                                        :stroke :grey-2})
                             (dt/point mouse-point)])
              (recur))

            )))))

(comment
              (condp = item
                :none (let [item (<! ctr-chan)]
                        (recur item {}))
                :point (condp = channel
                         :move
                         (do ;; clear-screen draw-state draw-point-coords
                           (>! draw-chan clear)
                           (>! draw-chan [;; style
                                          (dt/line value (project-x value))
                                          (dt/line value (project-y value))])
                           (recur :point state))
                         :click
                         (do ;; add point to state; reset loop
                           (>! out (dt/point value))
                           (recur :point :none)))
                :line (condp = channel
                        :move
                        (condp = (:step state)
                          0 (do ;; clear-screen draw-state draw-point-coords
                              (>! draw-chan clear)
                              (>! draw-chan [;; style
                                             (dt/line value (project-x value))
                                             (dt/line value (project-y value))]))
                          1 (let [p1 (:p1 state)]
                              (>! draw-chan clear)
                              (>! draw-chan [;; style
                                             (dt/line p1 value)])))
                        :click
                        (condp = (:step state)
                          0 (recur :line {:step 1 :p1 value}) 
                          1 (let [p1 (:p1 state)]
                              (>! out (dt/line [p1 valu]))
                              (recur :line {:step 0}))))
                :triangle (condp = channel
                            :move
                            (condp = (:step state)
                              0 (do
                                  (>! draw-chan clear)
                                  (>! draw-chan [;; style
                                                 (dt/line value (project-x value))
                                                 (dt/line value (project-y value))]))
                              1 (let [p1 (:p1 state)]
                                  (>! draw-chan clear)
                                  (>! draw-chan [;; style
                                                 (dt/line p1 value)]))
                              
                              2 (let [p1 (:p1 state)
                                      p2 (:p2 state)]
                                  (>! draw-chan clear)
                                  (>! draw-chan [;; style
                                                 (dt/line p1 p2)
                                                 (dt/line p2 value)])))
                            :click
                            (condp = (:step state)
                              0 (recur :line {:step 1 :p1 value}) 
                              1 (let [p1 (:p1 state)]
                                  (recur :line {:step 2 :p1 p1 :p2 value}))
                              2 (let [p1 (:p1 state)
                                      p2 (:p2 state)]
                                  ;; snap to ... special triangle, if enabled
                                  (>! out (dt/line [p1 p2 value]))
                                  (recur :line {:step 0}))))))

(defn new-mouse-handler [click move ctr-chan draw-chan]
  (let [out (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[value channel] (alts! [click move ctr-chan])]
            (println "current-item: " item " state: " state)
            (println "mouse-handler: "
                     (condp = channel
                       click ":click"
                       move ":move"
                       ctr-chan "ctr-chan")
                     " value: " value)
            (when (= channel ctr-chan)
              (do
                (>! out (dt/point [20 20]))
                (println "changing to state: " value)
                (recur value state)))
            (condp = item
              :none (do
                      (println "item = :none state = " state)
                      (recur item state))
              :point (do
                      (println "item = :point state = " state)
                      (recur item state))
              :line (do
                      (println "item = :line state = " state)
                      (recur item state))
              :triangle (do
                      (println "item = :triangle state = " state)
                      (recur item state)))
            (recur item state)
            )))
    out))

(defn point [p owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil
             (str (:point p))))))

(defn point-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:point []
       :line []
       :triangle []
       :handler nil
       :control nil})
    om/IWillMount
    ;; set up event hanndler
    (will-mount [_]
      (let [_ (println "mounting point-veiw")
            {:keys [click-chan mouse-move-chan draw-chan]} (om/get-shared owner)
            ;; handler (mouse-handler click-chan mouse-move-chan draw-chan owner)
            control-chan (chan)
            handler-chan (new-mouse-handler click-chan
                                            mouse-move-chan
                                            control-chan
                                            draw-chan)]
        (om/set-state! owner :handler handler-chan)
        (om/set-state! owner :control control-chan)
        (go (loop []
              (let [h (<! handler-chan)]
                (println "handler-chan " h)
                (recur))))
        ))
    om/IWillUnmount
    (will-unmount [_]
      (println "unmounting ..."))
    om/IRenderState
    (render-state [_ state]
      (let [item (:current-item app)
            {:keys [control]} state
            _ (go (>! control item))]
        (dom/div #js {:className "definition"}
                 (dom/h3 nil (first (item definition-text)))
                 (dom/p nil (second (item definition-text)))
                 (apply dom/ul nil (om/build-all point (item state))))))))

(defn empty-view [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/p nil "no curently selected item"))))

(defn item-view [app owner]
  (reify
    om/IRender
    (render [_]
      (if-let [item (:current-item app)]
        ;; use item
        (do
          (om/build point-view app))))))
