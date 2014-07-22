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
  [{:id :median :label "medians and centroid"}
   {:id :circumcircle :label "perpendicular bisectors and circumcircle"}
   {:id :altitude :label "altitudes and orthocenter"}
   {:id :incircle :label "angular bisectors, incircle and excircles"}
   {:id :euler-line :label "euler line"}
   {:id :nine-pt-circle :label "nine point circle"}])

(def triangle-transformations
  [{:id :reflection :label "reflection"}
   {:id :translation :label "translation"}
   {:id :rotation :label "rotation"}
   {:id :homothety :label "homothety"}
   {:id :inversion :label "inversion"}
   {:id :mobius :label "mobius"}])

(comment
  (def ui
  [{:section-name "Geometric Objects"
    :data geometric-objects}
   {:section-name "Geometric Concepts"
    :data geometric-concepts}
   {:section-name "Special Triangles"
    :data special-triangles}
   {:section-name "Properties of Triangles"
    :data triangle-properties}
   {:section-name "Transformations of Triangles"
    :data triangle-transformations}])
  )

(def ui
  [{:section-name "Properties of Triangles"
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
    "Two taps to create a line of symmetry. Then see the image of the reflection in that line, of a point, a line and a triangle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :rotation
   ["Rotation about a point."
    "One point to determine center. Default to a twentyfourth of a tau. See the twenty four images of current point."]

   :inversion
   ["Reflection in a circle."
    "Two taps to create a circle. Then see the image of the inversion in that circle of a point, a line and a tringle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :homothety
   ["Homothety with center and ratio k."
    "One point to determine center. See the images of a line segment for k in [-2 -1 -1/2 1/2 2]. Notice that the images of a line segment are parallel and the ratio of lengths is k. "]

   :translation
   ["Translation by a vector."
    "Two points to determine a translation vector. See the image of the current point under the translation defined by the selected translation vector. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :circumcircle
   ["Circumcircle perspective"
    "Two taps to fix an edge with perpendicular bisector. Then see triangle with perpendicular bisectors, circumcenter (intersection of perpendicular bisectors) and circumcircle."]

   :median
   ["Median perspective"
    "Two taps to fix an edge with midpoint. Then see triangle with medians (line from vertex to midpoint) and centroid (intersection of medians)."]

   :incircle
   ["Incircle and excircles perspective."
    "Two taps to fix an edge. Then see triangle with angular bisectors. Their points of intersections are the incenter and excenters. Incircle and excircles are drawn with the incenter and excenters as center and radii equal to the distance from the centers to the sides of the triangle."]

   :altitude
   ["Altitude perspective"
    "Two taps to fix an edge. Then see the triangle with altitudes (line from vertex to opposite side, perpendicular to that side)) and the orthocenter (the intersection of altitudes)."]

   :euler-line
   ["Euler line of a triangle."
    "The line from the circumcenter to the orthocenter."]

   :nine-pt-circle
   ["Nine point circle of a triangle"
    "The circumcircle of the orthic triangle of the feet of the altitudes."]

})
