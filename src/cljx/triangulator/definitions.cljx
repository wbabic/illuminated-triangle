(ns triangulator.definitions)

(def triangle-properties
  [{:id :centroid :label "centroid" :symbol "G"}
   {:id :circumcircle :label "circumcenter" :symbol "O"}
   {:id :orthocenter :label "orthocenter" :symbol "H"}
   {:id :incircle :label "inccenter and excenters" :symbol "I Ia Ib Ic"}
   {:id :euler-line :label "euler line" :symbol "OH"}
   {:id :nine-pt-circle :label "nine point center" :symbol "N"}
   {:id :all :label "all" :symbol ""}])

(def triangle-transformations
  [{:id :reflection :label "reflection"}
   {:id :translation :label "translation"}
   {:id :rotation :label "rotation"}
   {:id :dilatation :label "dilatation"}
   {:id :inversion :label "inversion"}])

(def triangle-iterations
  [{:id :iteration1 :label "G(-2) G(-1/2)"}
   {:id :iteration2 :label "H(2) H(1/2)"}])

(def triangle
  [{:id :triangle :label "Create a triangle" :symbol "ABC"}])

(def ui
  [{:section-name "Triangle"
    :data triangle}
   {:section-name "Properties"
    :data triangle-properties}
   {:section-name "Transforms"
    :data triangle-transformations}
   {:section-name "Iterations"
    :data triangle-iterations}])

(def definition-text
  {:triangle
   ["Create a triangle"
    "Click to create a point. Three clicks make a triangle."]
   
   :reflection
   ["Reflection in a line"
    "Two taps to create a line of symmetry. Then see the image of the reflection in that line, of a point, a line and a triangle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :rotation
   ["Rotation about a point."
    "One point to determine center. Default to a twentyfourth of a tau. See the twenty four images of current point."]

   :inversion
   ["Inversion in a circle"
    "Two taps to create a circle. Then see the image of the inversion in that circle of a point, a line and a tringle. Move mouse to see image move. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :dilatation
   ["Dilatation"
    "Dilatation with center and ratio k. One point to determine center. See the images of a line segment for k in -2. Notice that the images of a line segment are parallel and the ratio of lengths is |k|, in this case, 2."]

   :translation
   ["Translation by a vector."
    "Two points to determine a translation vector. See the image of the current point under the translation defined by the selected translation vector. Tap once to fix a point, twice to fix a line. Once line is fixed, moving mouse creates triangles and their images. Additional tap will reset."]

   :circumcircle
   ["Circumcircle"
    "The intersection of the three perpendicular bisectors meet in a point called the circumcenter. This point is equidistant from the three vertices. The distance between the circumcenter and a vertex is called the circumradius. The circle centered at the circumcenter with radius equal to the circumcradius is called the circumcircle. The circumcircle is the unique circle contiaining the three vertices of the triangle."]

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
   :all
   ["All"
    "Show all items at once."]
   
   :iteration1 ["Dilatations about centroid" "Create a triangle and see the iterations of dilatations of triangle by factors of 1/2 and 2 about centroid G:  G(-1/2) G(2)."]

   :iteration2 ["Dilatation about orthocenter" "H(1/2)"]
})
