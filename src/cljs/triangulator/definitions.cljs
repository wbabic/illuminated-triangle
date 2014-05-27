(ns triangulator.definitions)

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

(def triangle-transformations
  [{:id :reflection :label "reflection"}
   {:id :translation :label "translation"}
   {:id :rotation :label "rotation"}
   {:id :dilation :label "dilation"}
   {:id :inversion :label "inversion"}
   {:id :mobius :label "mobius"}])

(def ui
  [{:section-name "Basic Definitions"
    :data basic-definitions}
   {:section-name "Special Triangles"
    :data special-triangles}
   {:section-name "Properties of Triangles"
    :data triangle-properties}
   {:section-name "Transformations of Triangles"
    :data triangle-transformations}])

(def definition-text
  {:point ["Point" "A point represented by a vector of two coordinates. Move around in the canvas and see the canvas coordinates. Click to add  points."]
   :line ["Line" "Two points connected together. Two clicks. One point, two point, a line between, can be extended in either direction. Click two times in the canvas to make a line."]
   :midpoint ["Midpoint" "The point on a line equidistant from the the endpoints."]
   :perp-bisector ["Perpndicular Bisector of a line segment."
                   "The line through the midpoint and perpendicular to the line. Loci of points equidistant from two points. Make lines in the canvas and see the perpedicular bisector of it."]
   :ang-bisector ["Angular Bisector"
                  "Angle between two intersecting lines. Line that divides angle into equal parts. Loci of points equidistant from two lines."]
   :circle ["Circle" "Center and radius. Loci of points equidistant from one point."]
   :triangle ["Triangle" "Three non collinear points. Three vertces. Three edges. Click three times in the canvas to make a triangle."]})

