(ns triangulator.definitions)

(def geometric-objects
  [{:id :point :label "point"}
   {:id :line :label "line"}
   {:id :triangle :label "triangle"}
   {:id :circle :label "circle"}])

(def geometric-concepts
  [{:id :midpoint :label "midpoint"}
   {:id :perp-bisector :label "perpendicualr bisector"}
   {:id :ang-bisector :label "angular bisector"}])

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
   {:id :homothety :label "homothety"}
   {:id :inversion :label "inversion"}
   {:id :mobius :label "mobius"}])

(def ui
  [{:section-name "Geometri Objects"
    :data geometric-objects}
   {:section-name "Geometric Concepts"
    :data geometric-concepts}
   {:section-name "Special Triangles"
    :data special-triangles}
   {:section-name "Properties of Triangles"
    :data triangle-properties}
   {:section-name "Transformations of Triangles"
    :data triangle-transformations}])

(def definition-text
  {:point
   ["Point"
    "A point represented by a vector of two coordinates. Move around in the canvas and see the canvas coordinates. Click to add  points."]

   :line
   ["Line"
    "A line is a vector of two points. Click two times in the canvas to make a line, first click to set first point and second click to set second point. A line has a midpoint and a perpendicular bisector. Two intersecting lines have an angle between them and angle bisectors."]

   :triangle
   ["Triangle"
    "Three non collinear points. Three vertices. Three edges. Click three times in the canvas to make a triangle."]

   :circle
   ["Circle"
    "Center and radius. Loci of points equidistant from one point. First click sets center and second click sets radius."]

   :midpoint
   ["Midpoint"
    "The point on a line equidistant from the the endpoints."]

   :perp-bisector
   ["Perpndicular Bisector of a line segment."
    "The line through the midpoint and perpendicular to the line. Loci of points equidistant from two points. Make lines in the canvas and see the perpedicular bisector of it."]

   :ang-bisector
   ["Angular Bisector"
    "Angle between two intersecting lines. Line that divides angle into equal parts. Loci of points equidistant from two lines."]

   :reflection
   ["Reflection in a line of symmetry."
    "Two points to create a line. Then see the image of the reflection in that line."]

   :rotation
   ["Rotation about a point."
    "One point to determine center. Default to a twentyfourth of a tau. See the twenty four images of current point."]

   :inversion
   ["Reflection in a circle."
    "Two points two create a circle. Then see the image of the inversion in that circle."]

   :homothety
   ["Homothety with center and ratio k."
    "One point to determine center. See the images of a line segment for k in [-2 -1 -1/2 1/2 2]. Notice that the images of a line segment are parallel and the ratio of lengths is k. "]

   :translation
   ["Translation by a vector."
    "Two points to determine vector. See the image of the current point under the translation defined by the selected translation vector."]
})
