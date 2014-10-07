(ns triangulator.state.triangles)

;; section triangles

;; entries
(def triangle
  {:title "Basic geometric properties."
   :text "A triangle has three vertices, edges, midpoints. Associated with each triangle are its perpendicular bisectors, altitudes and angle bisectors."
   :label "triangle"
   :perp-bisector
   {:title "Perpendicular Bisector"
    :text "The perpendicular bisectors are the lines through the midpoints and perpendicular to the edges"
    :label "perpendicular bisectors"}
   :altitudes
   {:title "Altitude"
    :text "An altitude is a line from a vertex to the opposite edge that is perpendicular to that edge. It is the shortest distance from a point to a line. The feet are the intersecions of the altitudes with the edges of the triangle."
    :label "altitudes"}
   :ang-bisector
   {:title "Angle Bisector"
    :text "The angle bisectors are the lines bisecting the extended edges of a triangle.  Each vertex has an interior and an exterior angle bisector."
    :label "angle bisectors"}})

(def centroid
  {:text "The centroid of a triangle."
   :label "centroid"
   :medians
   {:text "A median is a line from a vertex to the midpoint of the opposite side."
    :label "medians"}
   :centroid
   {:text "The centroid is the intersection of the medians."
    :label "centroid"}
   :midpoint-triangle
   {:text "The midpoint triangle is the triangle consisting of the midpoints of a triangle."
    :label "midpoint triangle"}
   :centroid-vertex-midpoints
   {:text "The midpoints of the line segments form the cetroid to the vertices."
    :label "centroid vertex midpoints"}
   :centroid-vertex-triangle
   {:text "The triangle consisting of the midpoints of centroid vertex line segments."
    :label "centroid vertex midpoints triangle"}})

(def circumcircle
  {:text "The circumcircle of a triangle."
   :symbol "O"
   :label "circumcircle"
   :perp-bisector (:perp-bisector triangle)
   :circumcenter
   {:text "The circumcenter is the intersection of the perpendicular bisectors."
    :label "circumcenter"}
   :circumradii
   {:text "The radius of the circumcircle is distance from the circumcenter to any vertex is the circumradius. Three circumradii are shown."
    :label "circumradius"}
   :circumcircle
   {:text "The circumcircle is the circle centered at the circumcenter with radius equal to the distance between the circumcenter and the vertices. It is the unique circle containing the vertices of the triangle."
    :label "circumcircle"}
   :midpoint-triangle (:midpoint-triangle centroid)})

(def orthocenter
  {:text "The orthocenter of a triangle."
   :symbol "H"
   :label "orthocenter"
   :altitudes (:altitudes triangle)
   :feet
   {:text "The feet are the intersecions of the altitudes with the edges of the triangle."
    :label "feet of altitudes"
    :symbol "D E F"}
   :orthocenter
   {:text "The orthocenter is the intersection of the altitudes of a triangle."
    :label "orthocenter"
    :symbol "H"}
   :orthic-triangle
   {:text "The orthic triangle is the triangle consisting of the feet of the altitudes."
    :label "orthic triangle"
    :symbol "DEF"}})

(def incircle
  {:text "The incircle and excircles of a triangle."
   :symbol "I Ia Ib Ic"
   :label "incenter and excenters"
   :ang-bisector (:ang-bisector triangle)
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
   :circumcenter (:circumcenter circumcircle)
   :euler
   {:text "The euler line is the line from the circumcenter to the orthocenter."
    :label "euler line"
    :symbol "OH"}})

(def nine-pt-circle
  {:text "The nine point circle of a triangle."
   :symbol "N"
   :label "nine point circle"
   :orthic-triangle (:orthic-triangle orthocenter)
   :nine-pt-circle
   {:text "The circumcircle of the orthic triangle."
    :label "nine point circle"}
   :midpoint-triangle (:midpoint-triangle centroid)
   :orthocentric-midpoints
   {:text "The orthocentric midpoints are the midpoints of the line segments from the orthocenter to the vertices"
    :label "orthocentric midpoints"
    :symbol "A'' B'' C''"}
   :orthocentric-midpoint-triangle
   {:text "The orthocentric midpoints triangle is the triangle consisting of the orthocentric midpoints."
    :label "orthocentric midpoints triangle"
    :symbol "A''B''C''"}
   :euler (:euler euler-line)
   :circumcircle (:circumcircle circumcircle)})

;; geometric properties
(def line-options #{:line :endpoint1 :endpoint2})

(def entry-prop-map
  {:triangle
   {:line-opts line-options
    :tri-opts {:fill false
               :midpoints false
               :perp-bisector false
               :altitudes false
               :extended false
               :feet false
               :ang-bisector false}}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts {:midpoints true
               :medians true
               :centroid true
               :centroid-fill false
               :midpoint-triangle true
               :centroid-vertex-midpoints false
               :centroid-vertex-triangle false}}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts {:midpoints true
               :perp-bisector true
               :circumcenter true
               :circumradii true
               :circumcircle true
               :fill false
               :midpoint-triangle true}}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :fill false
               :orthocentric-fill false
               :orthic-triangle true}}

   :incircle
   {:line-opts line-options
    :tri-opts {:extended true
               :ang-bisector true
               :incircle true
               :excircle false
               :fill false}}

   :euler-line
   {:line-opts (conj line-options :extended)
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
               :centroid-fill false}}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :feet true
               :extended true
               :circumcenter true
               :circumcircle true
               :circumradii false
               :nine-pt-circle true
               :orthic-triangle true
               :midpoint-triangle true
               :orthocentric-midpoint-triangle true
               :orthocentric-fill false
               :nine-pt-center true
               :nine-pt-radii false
               :orthocentric-midpoints true
               :midpoints true
               :medians true
               :centroid true
               :euler true}}

   :all
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
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
               :extended true}}})

(def item-prop-map
  {:triangle
   {:perp-bisector [:midpoints :perp-bisector]
    :altitudes [:altitudes :extended :feet]
    :ang-bisector [:ang-bisector :extended :fill]}

   :centroid
   {:centroid [:midpoints :medians :centroid :centroid-fill]
    :midpoint-triangle [:midpoint-triangle]
    :centroid-vertex-triangle [:centroid-vertex-midpoints :centroid-vertex-triangle]}

   :circumcircle
   {:circumcenter [:midpoints :perp-bisector :circumcenter]
    :circumcircle [:circumradii :circumcircle]
    :midpoint-triangle [:midpoint-triangle]}

   :orthocenter
   {:orthocenter [:extended :altitudes :feet :orthocenter]
    :orthic-triangle [:orthic-triangle :orthocentric-fill]}

   :incircle
   {:ang-bisector [:extended :ang-bisector]
    :incircle [:incircle]
    :excircle [:excircle]}

   :euler-line
   {:centroid [:midpoints :medians :centroid :centroid-fill]
    :orthocenter [:extended :altitudes :feet :orthocenter]
    :circumcenter [:perp-bisector :circumcenter]
    :euler [:euler]}

   :nine-pt-circle
   {:orthic-triangle [:extended :altitudes :feet :orthic-triangle :orthocentric-fill]
    :nine-pt-circle [:nine-pt-circle :nine-pt-center :nine-pt-radii]
    :midpoint-triangle [:midpoints :midpoint-triangle]
    :orthocentric-midpoint-triangle
    [:midpoints :altitudes :feet :orthocenter :orthocentric-midpoints :orthocentric-midpoint-triangle]
    :euler [:centroid :orthocenter :circumcenter :nine-pt-center :euler]
    :circumcircle [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle]}

   :all
   {:orthic-triangle [:extended :altitudes :feet :orthic-triangle]
    :nine-pt-circle [:nine-pt-circle :nine-pt-center :nine-pt-radii]
    :midpoint-triangle [:midpoints :midpoint-triangle]
    :orthocentric-midpoint-triangle
    [:midpoints :altitudes :feet :orthocenter :orthocentric-midpoints :orthocentric-midpoint-triangle]
    :euler [:centroid :orthocenter :circumcenter :nine-pt-center :euler]
    :circumcircle [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle]
    :incircle [:incircle]
    :excircle [:excircle]}})

;; triangles section
(def section
  {:name "Triangles"
   :title "Properties of a triangle."
   :new-text "Create a triangle by clicking vertices in the canvas or select from an arbtrary one of the following typse:"
   :existing-text "Explore properties of your triangle."
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
    [:perp-bisector :altitudes :ang-bisector]
    :centroid
    [:centroid :midpoint-triangle :centroid-vertex-triangle]
    :circumcircle
    [:circumcenter :circumcircle :midpoint-triangle]
    :orthocenter
    [:orthocenter :orthic-triangle]
    :incircle
    [:ang-bisector :incircle :excircle]
    :euler-line
    [:centroid :orthocenter :circumcenter :euler]
    :nine-pt-circle
    [:orthic-triangle :nine-pt-circle :midpoint-triangle :orthocentric-midpoint-triangle :circumcircle :euler]}

   :props {:entry entry-prop-map
           :item item-prop-map}})
