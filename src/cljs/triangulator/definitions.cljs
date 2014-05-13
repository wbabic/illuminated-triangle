(ns triangulator.definitions
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

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

(defn item-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 #js {:className "definition"}
              (if-let [item (:current-item app)]
                (dom/div nil
                         (dom/h3 nil (first (item definition-text)))
                         (dom/p nil (second (item definition-text))))
                "no selection")))))
