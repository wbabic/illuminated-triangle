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
  [{:id :centroid :label "centroid"}
   {:id :circumcircle :label "circumcircle"}
   {:id :orthocenter :label "orthocenter"}
   {:id :incircle :label "incircle and excircles"}
   {:id :euler-line :label "euler line"}
   {:id :nine-pt-circle :label "nine point circle"}])

(def triangle-transformations
  [{:id :reflection :label "reflection"}
   {:id :translation :label "translation"}
   {:id :rotation :label "rotation"}
   {:id :homothety :label "homothety"}
   {:id :inversion :label "inversion"}])

(def transformation-header
  "Transform a triangle. First create a transform then create a triangle and see its image under the transformation.")

(comment
  (def ui
  [{:section-name "Geometric Objects"
    :data geometric-objects}
   {:section-name "Geometric Concepts"
    :data geometric-concepts}
   {:section-name "Special Triangles"
    :data special-triangles}
   {:section-name "Triangular Properties"
    :data triangle-properties}
   {:section-name "Transformations"
    :data triangle-transformations}])
  )

(def ui
  [{:section-name "Properties"
    :data triangle-properties}
   {:section-name "Transforms"
    :data triangle-transformations
    ;; :header transformation-header
    }])

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
   ["Reflection in a line"
    "Two taps to create a line of symmetry. Then see the image of the reflection in that line, of a point, a line and a triangle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :rotation
   ["Rotation about a point."
    "One point to determine center. Default to a twentyfourth of a tau. See the twenty four images of current point."]

   :inversion
   ["Inversion in a circle"
    "Two taps to create a circle. Then see the image of the inversion in that circle of a point, a line and a tringle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :homothety
   ["Homothety with center and ratio k."
    "One point to determine center. See the images of a line segment for k in [-2 -1 -1/2 1/2 2]. Notice that the images of a line segment are parallel and the ratio of lengths is k. "]

   :translation
   ["Translation by a vector."
    "Two points to determine a translation vector. See the image of the current point under the translation defined by the selected translation vector. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :circumcircle
   ["Circumcircle"
    "The intersection of the three perpendicular bisectors meet in a point called the circumcenter. This point is equidistant from the vertices (why?) and is called the circumcenter. The distance between the circumcenter and a vertex is called the circumradius. The circle centered at the circumcenter with radius equal to the circumcradius is called the circumcircle. The circumcircle is the unique circle contiaining the three vertices of the triangle."]

   :centroid
   ["Centroid"
    "The intersection of the medians of a triangle meet in a point, called the centroid. A median is a line from a vertex to the midpoint of the opposite side. The medians are drawn in yellow. Midpoints of edges are drawn in grey. The centroid is also drawn in yellow. Why are the three medians concurrent?"]

   :incircle
   ["Incircle and excircles"
    "The angle bisectors of the (extended) edges of a triangle (interior and exterior) intersect in four points, one inside the triangle, called the incenter, and three outside, called excenters. These points are equidistant from the edges (extended) of the triangle. The incircle and excircles are circles centered at the incenter and excenters with radii equal to the distance from the centers to the sides of the triangle. The incircle is inside the triangle and the excircles are outside. The incircle and the excircles are tangent to the edges of the triangle."]

   :orthocenter
   ["Orthocenter"
    "The intersection of the altitudes of a triangle meet in a point called the orthocenter. An altitude is a line from a vertex perpendicular to the opposite edge. The altititudes and their feet are drawn in yellow and the orthocenter in pink. When the orthocenter coincides with the centroid, we have an equilateral triangle. When the orthocenter coincides with a vertex, we have a right triangle."]

   :euler-line
   ["Euler line"
    "The line from the circumcenter to the orthocenter is called the Euler line of a triangle. For an equilateral triangle, the circumcenter and orthocenter coincide the the line is a point. What happens for right triangles?"]

   :nine-pt-circle
   ["Nine point circle"
    "The circumcircle of the orthic triangle. The orthic triangle is the triangle made of the feet of the altitudes. This is also the circumcircle of the midpoints of the edges and the circumcircle of the midpoints from the orthocenter to the vertices. Why?"]

})
