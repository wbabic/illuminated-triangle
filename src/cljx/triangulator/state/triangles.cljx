(ns triangulator.state.triangles)

;; section triangles
;; entries and items

;; entries
(def triangle
  {:text "Three vertices, edges, midpoints."
   :symbol "ABC"
   :label "triangle"
   :vertices
   {:text "The points of a triangle."
    :symbol ["A" "B" "C"]}
   :edges
   {:text "The three line segments connecting the vertices of a triangle. May be extended."
    :symbol ["a" "b" "c"]}
   :midpoints
   {:text "The midpoints of the edges."
    :symbol ["A'" "B'" "C'"]}})

(def centroid
  {:text "The centroid is the intersection of the medians."
   :symbol "G"
   :label "centroid"
   :midpoints
   {:text "The midpoints of the edges."
    :symbol ["A'" "B'" "C'"]}
   :medians
   {:text "The lines from a vertex to the midpoint of the opposite sides."
    :symbol ["AA'" "BB'" "CC'"]}
   :centroid
   {:text "The centroid is the intersection of the medians."
    :symbol "G"}
   :midpoint-triangle
   {:text "The triangle consisting of the midpoints of a triangle."
    :symbol "A'B'C'"}
   :centroid-vertex-midpoints
   {:text "The midpoints pf the line segments form the cetroid to the vertices."
    :symbol ["L" "M" "N"]}
   :centroid-vertex-triangle
   {:text "The triangle consisting of the midpoints of centroid vertex line segments."
    :symbol "LMN"}})

(def circumcircle
  {:text "The circumcircle of a triangle"
   :symbol "O"
   :label "circumcenter"
   :midpoints "The midpoints of the edges."
   :perp-bisector "The perpendicular bisectors are the lines through the midpoints and perpendicular to the edges"
   :circumcenter "The circumcenter is the intersection of the perpendicular bisectors."
   :circumradii "The distance from the circumcenter to any vertex is the circumradius. Three circumradii are shown."
   :circumcircle "The circumcircle is the circle centered at the circumcenter with radius equal to the distance between the circumcenter and the vertices. It is the unique circle containing the vertices of the triangle."
   :midpoint-triangle "The triangle consisting of the midpoints of a triangle."})

(def orthocenter
  {:text "The orthocenter of a triangle."
   :symbol "H"
   :label "orthocenter"
   :altitudes "The lines from the vertices to the opposite edges that are perpendicular to those edges."
   :feet "The intersecions of the altitudes with the edges of the triangle."
   :orthocenter "The intersection of the altitudes of a triangle."
   :orthic-triangle "The triangle consisting of the feet of the altitudes."})

(def incircle
  {:text "The incircle and excircles of a triangle."
   :symbol "I Ia Ib Ic"
   :label "incenter and excenters"
   :ang-bisector "The angle bisectors are the lines bisecting the extended edges of a triangle.  Each vertex has an interior and an exterior angle bisector."
   :incenter "The intersection of the interior anlge bisectors."
   :excenters "THe three intersections of the exterior angle bisectors."})

(def euler-line
  {:text "The Euler line of a triangle."
   :symbol "OH"
   :label "euler line"})

(def nine-pt-circle
  {:text "The nine point circle of a triangle."
   :symbol "N"
   :label "nine point center"
   :orthic-triangle "The triangle consisting of the feet of the altitudes."
   :midpoint-triangle "The triangle consisting of the midpoints of a triangle."
   :orthocentric-midpoints "The midpoints of the lines from the orthocenter to the vertices"
   :orthocentric-midpoint-triangle "The triangle consisting of the orthocentric midpoints."})

;; section
(def section
  {:name "Trinagles"
   :text "Proerties of a triangle."
   :triangle triangle
   :centroid centroid
   :circumcenter circumcircle
   :orthocenter orthocenter
   :incircle incircle
   :euler-line euler-line
   :nine-pt-circle nine-pt-circle
   :all
   {:text "Select from all properties to customize a view."
    :label "all"
    :depends [:centroid :circumcircle :orthocenter :incircle :nine=pt-circle]}})
