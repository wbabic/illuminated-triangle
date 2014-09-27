(ns triangulator.state.triangles)

;; section triangles
;; entries and items

;; entries
(def triangle
  {:text "A triangle has three vertices, edges, midpoints."
   :symbol "ABC"
   :label "triangle"
   :vertices
   {:text "The vertices are the points of a triangle."
    :label "vertices"
    :symbol ["A" "B" "C"]}
   :edges
   {:text "The edges are the three line segments connecting the vertices of a triangle. May be extended."
    :label "edges"
    :symbol ["a" "b" "c"]}
   :midpoints
   {:text "The midpoints are the points of the edges equidistant from its endpoints"
    :label "midpoints"
    :symbol ["A'" "B'" "C'"]}})

(def centroid
  {:text "Centroid"
   :symbol "G"
   :label "centroid"
   :midpoints
   {:text "The midpoints of the edges."
    :label "midpoints"
    :symbol ["A'" "B'" "C'"]}
   :medians
   {:text "A median is a line from a vertex to the midpoint of the opposite side."
    :label "medians"
    :symbol ["AA'" "BB'" "CC'"]}
   :centroid
   {:text "The centroid is the intersection of the medians."
    :label "centroid"
    :symbol "G"}
   :midpoint-triangle
   {:text "The triangle consisting of the midpoints of a triangle."
    :label "midpoint triangle"
    :symbol "A'B'C'"}
   :centroid-vertex-midpoints
   {:text "The midpoints pf the line segments form the cetroid to the vertices."
    :label "centroid vertex midpoints"
    :symbol ["L" "M" "N"]}
   :centroid-vertex-triangle
   {:text "The triangle consisting of the midpoints of centroid vertex line segments."
    :label "centroid vertex midpoints triangle"
    :symbol "LMN"}})

(def circumcircle
  {:text "The circumcircle of a triangle"
   :symbol "O"
   :label "circumcenter"
   :midpoints
   {:text "The midpoints of the edges."
    :label "midpoints"}
   :perp-bisector
   {:text "The perpendicular bisectors are the lines through the midpoints and perpendicular to the edges"
    :label "perpendicular bisectors"}
   :circumcenter
   {:text "The circumcenter is the intersection of the perpendicular bisectors."
    :label "circumcenter"}
   :circumradii
   {:text "The radius of the circumcircle is distance from the circumcenter to any vertex is the circumradius. Three circumradii are shown."
    :label "circumradius"}
   :circumcircle
   {:text "The circumcircle is the circle centered at the circumcenter with radius equal to the distance between the circumcenter and the vertices. It is the unique circle containing the vertices of the triangle."
    :label "circumcircle"}
   :midpoint-triangle
   {:text "The midpoint triangle is the triangle consisting of the midpoints of a triangle."
    :label "midpoint triangle"}})

(def orthocenter
  {:text "The orthocenter of a triangle."
   :symbol "H"
   :label "orthocenter"
   :altitudes
   {:text "An altitude is a line from a vertex to the opposite edge that is perpendicular to that edge."
    :label "altitudes"}
   :feet
   {:text "The feet are the intersecions of the altitudes with the edges of the triangle."
    :label "feet of altitudes"}
   :orthocenter
   {:text "The orthocenter is the intersection of the altitudes of a triangle."
    :label "orthocenter"
    :symbol "H"}
   :orthic-triangle
   {:text "The orthic triangle is the triangle consisting of the feet of the altitudes."
    :label "orthic triangle"}})

(def incircle
  {:text "The incircle and excircles of a triangle."
   :symbol "I Ia Ib Ic"
   :label "incenter and excenters"
   :ang-bisector
   {:text "The angle bisectors are the lines bisecting the extended edges of a triangle.  Each vertex has an interior and an exterior angle bisector."
    :label "angle bisectors"}
   :incircle
   {:text "The incenter is the intersection of the interior angle bisectors."
    :label "incenter"}
   :excircle
   {:text "The excenters are the three intersections of the exterior angle bisectors."
    :label "excenters"}})

(def euler-line
  {:text "The Euler line of a triangle."
   :symbol "OH"
   :label "euler line"
   :centroid
   {:text "The centroid is the intersection of the medians."
    :label "centroid"
    :symbol "G"}
   :orthocenter
   {:text "The orthocenter is the intersection of the altitudes of a triangle."
    :label "orthocenter"
    :symbol "H"}
   :circumcenter
   {:text "The circumcenter is the intersection of the perpendicular bisectors."
    :label "circumcenter"}})

(def nine-pt-circle
  {:text "The nine point circle of a triangle."
   :symbol "N"
   :label "nine point center"
   :orthic-triangle
   {:text "The orthic triangle is the triangle consisting of the feet of the altitudes."
    :label "orthic triangle"}
   :midpoint-triangle
   {:text "The midpoint triangle is the triangle consisting of the midpoints of a triangle."
    :label "midpoints triangle"}
   :orthocentric-midpoints
   {:text "The orthocentric midpoints are the midpoints of the line segments from the orthocenter to the vertices"
    :label "orthocentric midpoints"}
   :orthocentric-midpoint-triangle
   {:text "The orthocentric midpoints triangle is the triangle consisting of the orthocentric midpoints."
    :label "orthocentric midpoints triangle"}})

;; triangles section
(def section
  {:name "Triangles"
   :text "Properties of a triangle."
   :triangle triangle
   :centroid centroid
   :circumcircle circumcircle
   :orthocenter orthocenter
   :incircle incircle
   :euler-line euler-line
   :nine-pt-circle nine-pt-circle
   :all
   {:text "Select from all properties to customize a view."
    :label "all"
    :depends [:centroid :circumcircle :orthocenter :incircle :nine=pt-circle]}
   :item-map
   {:triangle
    [:vertices :edges :midpoints]
    :centroid
    [:midpoints :medians :centroid  :midpoint-triangle :centroid-vertex-midpoints :centroid-vertex-triangle]
    :circumcircle
    [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle :midpoint-triangle]
    :orthocenter
    [:altitudes :feet :orthocenter :orthic-triangle]
    :incircle
    [:ang-bisector :incircle :excircle]
    :euler-line
    [:centroid :orthocenter :circumcenter]
    :nine-pt-circle
    [:orthic-triangle :midpoint-triangle :orthocentric-midpoints :orthocentric-midpoint-triangle]}})
