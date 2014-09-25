(ns triangulator.definitions)

(def triangles
  [{:id :triangle :label "triangle" :symbol "ABC"}
   {:id :centroid :label "centroid" :symbol "G"}
   {:id :circumcircle :label "circumcenter" :symbol "O"}
   {:id :orthocenter :label "orthocenter" :symbol "H"}
   {:id :incircle :label "inccenter and excenters" :symbol "I Ia Ib Ic"}
   {:id :euler-line :label "euler line" :symbol "OH"}
   {:id :nine-pt-circle :label "nine point center" :symbol "N"}
   {:id :all :label "all" :symbol ""}])

(def transformations
  [{:id :reflection :label "reflection"}
   {:id :translation :label "translation"}
   {:id :rotation :label "rotation"}
   {:id :dilatation :label "dilatation"}
   {:id :inversion :label "inversion"}])

(def iterations
  [{:id :iteration1 :label "G(-2) G(-1/2)"}
   {:id :iteration2 :label "H(2) H(1/2)"}])

(def ui
  {:current-selection {:section :triangles
                       :entry :triangle
                       :item :vertices}
   :sections {:triangles
              {:section-name "Triangles"
               :data triangles
               :open true}
              :transforms
              {:section-name "Transforms"
               :data transformations
               :open false}
              :iterations
              {:section-name "Iterations"
               :data iterations
               :open false}}})

(def definition-text
  {:triangle
   ["Triangle"
    "A triangle consists of three vertices and three edges connecting them. Create a triangle by clicking three times, once for each vertex."]

   :centroid
   ["Centroid"
    "A median is a line from a vertex to the midpoint of the opposite side. The intersection of the medians of a triangle meet in a point, called the centroid. The medians are concurrent and trisect each other. Why? Need: A line joining the midpoints of a triangle is parallel to and half the distance of the opposite side and perpendiculars of a rectangle bisect each other."]

   :circumcircle
   ["Circumcircle"
    "The intersection of the three perpendicular bisectors meet in a point called the circumcenter. This point is equidistant from the three vertices. The distance between the circumcenter and a vertex is called the circumradius. The circle centered at the circumcenter with radius equal to the circumcradius is called the circumcircle. The circumcircle is the unique circle contiaining the three vertices of the triangle."]

   :orthocenter
   ["Orthocenter"
    "An altitude is a line from a vertex perpendicular to the opposite edge. The intersection of the altitudes of a triangle meet in a point called the orthocenter. When the orthocenter coincides with the centroid, we have an equilateral triangle. When the orthocenter coincides with a vertex, we have a right triangle. The orthic triangle is the triangle consisting of the feet of the altitides."]

   :incircle
   ["Incircle and excircles"
    "The angle bisectors of the (extended) edges of a triangle (interior and exterior) intersect in four points, one inside the triangle, called the incenter, and three outside, called excenters. These points are equidistant from the edges (extended) of the triangle. The incircle and excircles are circles centered at the incenter and excenters with radii equal to the distance from the centers to the sides of the triangle. The incircle is inside the triangle and the excircles are outside. The incircle and the excircles are tangent to the edges of the triangle."]

   :euler-line
   ["Euler line"
    "The line from the circumcenter to the orthocenter is called the Euler line of a triangle. For an equilateral triangle, the circumcenter and orthocenter coincide the the line is a point. What happens for right triangles?"]

   :nine-pt-circle
   ["Nine point circle"
    "The circumcircle of the orthic triangle. The orthic triangle is the triangle made of the feet of the altitudes. This is also the circumcircle of the midpoints of the edges and the circumcircle of the midpoints from the orthocenter to the vertices. Why?"]

   :all
   ["All"
    "Show all items at once."]
      
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

   :iteration1 ["Dilatations about centroid" "Create a triangle and see the iterations of dilatations of triangle by factors of 1/2 and 2 about centroid G:  G(-1/2) G(2)."]

   :iteration2 ["Dilatation about orthocenter" "H(1/2)"]
})

(def sub-property-text
  {:triangle
   {:vertices "THe points of a triangle."
    :edges "The three line segments conneting the vertices of a triangle. May be extended."
    :midpoints "The midpoints of the edges."}

   :centroid
   {::midpoints "The midpoints of the edges."
    :medians "The lines from a vertex to the midpoint of the opposite sides."
    :centroid "The centroid is the intersection of the medians."
    :midpoint-triangle "The triangle consisting of the midpoints of a triangle."
    :centroid-vertex-midpoints "The midpoints pf the line segments form the cetroid to the vertices."
    :centroid-vertex-triangle "The triangle consisting of the midpoints of centroid vertex line segments."}

   :circumcircle
   {::midpoints "The midpoints of the edges."
    :perp-bisector "The perpendicular bisectors are the lines through the midpoints and perpendicular to the edges"
    :circumcenter "The circumcenter is the intersection of the perpendicular bisectors."
    :circumradii "The distance from the circumcenter to any vertex is the circumradius. Three circumradii are shown."
    :circumcircle "The circumcircle is the circle centered at the circumcenter with radius equal to the distance between the circumcenter and the vertices. It is the unique circle containing the vertices of the triangle."
    :midpoint-triangle "The triangle consisting of the midpoints of a triangle."}

   :orthocenter
   {:altitudes "The lines from the vertices to the opposite edges that are perpendicular to those edges."
    :feet "The intersecions of the altitudes with the edges of the triangle."
    :orthocenter "The intersection of the altitudes of a triangle."
    :orthic-triangle "The triangle consisting of the feet of the altitudes."}

   :incircle
   {:ang-bisector "The angle bisectors are the lines bisecting the extended edges of a triangle.  Each vertex has an interior and an exterior angle bisector."
    :incenter "The intersection of the interior anlge bisectors."
    :excenters "THe three intersections of the exterior angle bisectors."}

   :nine-pt-circle
   {:orthic-triangle "The triangle consisting of the feet of the altitudes."
    :midpoint-triangle "The triangle consisting of the midpoints of a triangle."
    :orthocentric-midpoints "The midpoints of the lines from the orthocenter to the vertices"
    :orthocentric-midpoint-triangle "The triangle consisting of the orthocentric midpoints."}})
