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
  {:text "The centroid of a triangle."
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
   {:text "The midpoint triangle is the triangle consisting of the midpoints of a triangle."
    :label "midpoint triangle"
    :symbol "A'B'C'"}
   :centroid-vertex-midpoints
   {:text "The midpoints of the line segments form the cetroid to the vertices."
    :label "centroid vertex midpoints"
    :symbol ["L" "M" "N"]}
   :centroid-vertex-triangle
   {:text "The triangle consisting of the midpoints of centroid vertex line segments."
    :label "centroid vertex midpoints triangle"
    :symbol "LMN"}})

(def circumcircle
  {:text "The circumcircle of a triangle."
   :symbol "O"
   :label "circumcircle"
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
    :label "circumcenter"
    :symbol "O"}
   :euler
   {:text "The euler line is the line from the circumcenter to the orthocenter."
    :label "euler line"}})

(def nine-pt-circle
  {:text "The nine point circle of a triangle."
   :symbol "N"
   :label "nine point circle"
   :orthic-triangle
   {:text "The orthic triangle is the triangle consisting of the feet of the altitudes."
    :label "orthic triangle"}
   :nine-pt-circle
   {:text "The circumcircle of the orthic triangle."
    :label "nine point circle"}
   :midpoint-triangle
   {:text "The midpoint triangle is the triangle consisting of the midpoints of a triangle."
    :label "midpoints triangle"}
   :orthocentric-midpoints
   {:text "The orthocentric midpoints are the midpoints of the line segments from the orthocenter to the vertices"
    :label "orthocentric midpoints"}
   :orthocentric-midpoint-triangle
   {:text "The orthocentric midpoints triangle is the triangle consisting of the orthocentric midpoints."
    :label "orthocentric midpoints triangle"}
   :euler
   {:text "The euler line."
    :label "euler line"}
   :circumcircle
   {:text "The circumcircle"
    :label "circumcircle"}})

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
    [:centroid :orthocenter :circumcenter :euler]
    :nine-pt-circle
    [:orthic-triangle :nine-pt-circle :midpoint-triangle :orthocentric-midpoint-triangle :circumcircle :euler]}})

;; geometric properties
(def line-options #{:line :endpoint1 :endpoint2})

(def entry-prop-map
  {:triangle
   {:line-opts line-options
    :tri-opts-keys [:fill]
    :tri-opts {:fill true}
    :open true}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts-keys [:midpoints :medians :centroid :centroid-fill :midpoint-triangle :centroid-vertex-midpoints :centroid-vertex-triangle]
    :tri-opts {:midpoints false
               :medians false
               :centroid false
               :centroid-fill false
               :midpoint-triangle false
               :centroid-vertex-midpoints false
               :centroid-vertex-triangle false}
    :open false}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts-keys [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle :fill :midpoint-triangle]
    :tri-opts {:midpoints true
               :perp-bisector true
               :circumcenter true
               :circumradii true
               :circumcircle true
               :fill true
               :midpoint-triangle true}
    :open true}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :fill :orthic-triangle :orthocentric-fill]
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :fill true
               :orthocentric-fill true
               :orthic-triangle true}
    :open true}

   :incircle
   {:line-opts line-options
    :tri-opts-keys [:extended :ang-bisector :incircle :excircle :fill]
    :tri-opts {:extended true
               :ang-bisector true
               :incircle true
               :excircle true
               :fill true}
    :open true}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :midpoints :perp-bisector
                    :circumcenter :euler :medians :centroid :centroid-fill]
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :midpoints true
               :perp-bisector true
               :circumcenter true
               :medians true
               :centroid true
               :euler true
               :centroid-fill true}
    :open true}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :feet :extended
                    :circumcenter :circumcircle :nine-pt-circle :midpoints :medians :centroid 
                    :euler :nine-pt-center :nine-pt-radii :orthocentric-midpoints
                    :orthic-triangle :midpoint-triangle :orthocentric-midpoint-triangle
                    :orthocentric-fill]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :feet true
               :extended true
               :circumcenter true
               :circumcircle true
               :nine-pt-circle true
               :orthic-triangle true
               :midpoint-triangle true
               :orthocentric-midpoint-triangle true
               :orthocentric-fill true
               :nine-pt-center true
               :nine-pt-radii true
               :orthocentric-midpoints true
               :midpoints true
               :medians true
               :centroid true
               :euler true}
    :open true}

   :all
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
    :tri-opts-keys [:altitudes :feet :perp-bisector :orthocenter
                    :ang-bisector :incircle :excircle :extended
                    :circumcenter :circumcircle :circumradii :nine-pt-circle
                    :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :feet true
               :perp-bisector true
               :orthocenter true
               :ang-bisector true
               :incircle true
               :excircle true
               :circumcenter true
               :circumcircle true
               :circumradii true
               :nine-pt-circle true
               :midpoints true
               :medians true
               :centroid true
               :euler true
               :fill true
               :extended true}
    :open false}})

(def item-prop-map
  {:triangle
   {:vertices []
    :edges []
    :midpoints []}

   :centroid
   {:midpoints [:midpoints]
    :medians [:medians]
    :centroid [:centroid :centroid-fill]
    :midpoint-triangle [:midpoint-triangle]
    :centroid-vertex-midpoints [ :centroid-vertex-midpoints]
    :centroid-vertex-triangle [:centroid-vertex-triangle]}

   :circumcircle
   {:midpoints [:midpoints]
    :perp-bisector [:perp-bisector]
    :circumcenter [:circumcenter]
    :circumradii [:circumradii]
    :circumcircle [:circumcircle]
    :midpoint-triangle [:midpoint-triangle]}

   :orthocenter
   {:altitudes [:extended :altitudes]
    :feet [:feet]
    :orthocenter [:orthocenter]
    :orthic-triangle [:orthic-triangle :orthocentric-fill]}

   :incircle
   {:ang-bisector [:ang-bisector :extended :fill]
    :incircle [:incircle]
    :excircle [:excircle]}

   :euler-line
   {:centroid [:midpoints :medians :centroid :centroid-fill]
    :orthocenter [:extended :altitudes :feet :orthocenter]
    :circumcenter [:perp-bisector :circumcenter]
    :euler [:euler]}

   :nine-pt-circle
   {:orthic-triangle [:extended :altitudes :feet :orthic-triangle]
    :nine-pt-circle [:nine-pt-circle :nine-pt-center :nine-pt-radii]
    :midpoint-triangle [:midpoints :midpoint-triangle]
    :orthocentric-midpoint-triangle
    [:midpoints :altitudes :feet :orthocenter :orthocentric-midpoints]
    :euler-line [:centroid :orthocenter :circumcenter :nine-pt-center :euler]
    :circumcircle [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle]}
   :all
   {}})
