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
  {:point ["Point" "A point represented by a vector of two coordinates. Move or tap around in the canvas and see the canvas coordinates. Click or double tap to add the points. Change label and color of the points."]
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

(defn mouse-handler [click-chan mouse-move-chan draw-chan]
  (go (loop [state :up point nil]
        (let [[mouse-point channel] (alts! [click-chan
                                            mouse-move-chan
                                           ])]
          (condp = channel
            click-chan
            (do
              (>! draw-chan [(dt/style {:fill :red}) (dt/point mouse-point)])
              (recur (toggle state) mouse-point))

            mouse-move-chan
            (do
              (when (= state :down)
                (>! draw-chan [(dt/style {:fill :green}) (dt/point mouse-point)]))
              (recur state point))

            )))))

(defn item-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [{:keys [canvas width height] :as surface} (draw/surface "graphics-box")
            click-chan (events/mouse-chan canvas :mouse-down)
            mouse-move-chan (events/mouse-chan canvas :mouse-move)
            draw-chan (draw/drawing-loop canvas width height)]
        {:surface surface
         :click-chan click-chan
         :mouse-move-chan mouse-move-chan
         :draw-chan draw-chan}))
    om/IWillMount
    (will-mount [_]
      (let [{:keys [:surface click-chan mouse-move-chan draw-chan]}
            (om/get-state owner)]
        (mouse-handler click-chan mouse-move-chan draw-chan)))
    om/IRender
    (render [this]
      (dom/h1 #js {:className "definition-heading"}
              (if-let [item (:current-item app)]
                (dom/div nil
                         (dom/h3 nil (first (item definition-text)))
                         (dom/p nil (second (item definition-text))))
                "No currently selected item. Select from item list.")))))
