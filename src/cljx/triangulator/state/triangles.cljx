(ns triangulator.state.triangles)

;; section triangles

;; entries
(def basic
  {:title "Basic geometric concepts"
   :text "A triangle has three vertices, edges, midpoints. Associated with each triangle are its perpendicular bisectors, altitudes and angle bisectors. These concepts are used to derive the properties to follow."
   :label "basic"

   ;; item data keyed by item-id
   ;; each item has title, text and label
   ;; label for nav-box, title and text for deefinition-box
   :perp-bisector
   {:title "Perpendicular Bisectors"
    :text "The perpendicular bisectors are the lines through the midpoints and perpendicular to the edges"
    :label "perpendicular bisectors"}
   :medians
   {:title "Medians"
    :text "A median is a line from a vertex to the midpoint of the opposite side."
    :label "medians"}
   :altitudes
   {:title "Altitudes"
    :text "An altitude is a line from a vertex to the opposite edge that is perpendicular to that edge. It is the shortest distance from a point to a line. The feet are the intersecions of the altitudes with the edges of the triangle."
    :label "altitudes"}
   :ang-bisector
   {:title "Angle Bisectors"
    :text "The angle bisectors are the lines bisecting the extended edges of a triangle.  Each vertex has an interior and an exterior angle bisector."
    :label "angle bisectors"}})

(def centroid
  {:title "Centroid"
   :text "The centroid of a triangle is the intersection of the medians where a median is a line from a vertex to the midpoint of the opposite side. It will be proved that the medians are concurrent and that the centroid trisects the medians."
   :label "centroid"

   ;; item data
   :medians (:medians basic)
   :centroid
   {:title "Centroid"
    :text "The centroid is the intersection of the medians."
    :label "centroid"}
   :midpoint-triangle
   {:title "Midpoint Triangle"
    :text "The midpoint triangle is the triangle consisting of the midpoints of a triangle. Its edges are parallel to and half the distance of the edges of the original triangle."
    :label "midpoint triangle"}
   :centroid-vertex-triangle
   {:title "Centroid-Vertex Midpoint Triangle"
    :text "The triangle consisting of the midpoints of centroid vertex line segments. Its edges are parallel to and half the distance of the edges of the original triangle, like the midpoint triangle."
    :label "centroid vertex midpoints triangle"}})

(def circumcircle
  {:title "Circumcircle"
   :text "The circumcircle of a triangle is the unique circle containing the vertices of the triangle. The center of the circumcircle is the intersection of the perpendidular bisectors, which are concurrent."
   :label "circumcircle"

   ;; item data
   :perp-bisector (:perp-bisector basic)
   :circumcenter
   {:title "Circumcenter"
    :text "The circumcenter is the intersection of the perpendicular bisectors."
    :label "circumcenter"}
   :circumradii
   {:title "Circumradius"
    :text "The radius of the circumcircle is distance from the circumcenter to any vertex."
    :label "circumradius"}
   :circumcircle
   {:title "Circumcircle"
    :text "The circumcircle is the circle centered at the circumcenter with radius equal to the distance between the circumcenter and the vertices."
    :label "circumcircle"}})

(def orthocenter
  {:title "Orthocenter"
   :text "The orthocenter of a triangle is the intersection of its altitudes. Every vertex of an orthocentric quadrangle is the orthocenter of the triangle formed by the remaining three vertices (for non right handed triangles). In a right handed triangle the orthocenter coincides with a vertex."
   :symbol "H"
   :label "orthocenter"

   ;; item data
   :altitudes (:altitudes basic)
   :orthocenter
   {:title "Orthocenter"
    :text "The orthocenter is the intersection of the altitudes of a triangle."
    :label "orthocenter"}
   :orthic-triangle
   {:title "Orthic Triangle"
    :text "The orthic triangle is the triangle consisting of the feet of the altitudes."
    :label "orthic triangle"}})

(def incircle
  {:title "Incircle and Excircles"
   :text "The incircle and excircles of a triangle have as centers the intersections of its angle bisectors. One lies inside the traingle and three lie outside. Each is tangent to the three extended edges of the triangle."
   :label "incircle and excircles"

   ;; item data
   :ang-bisector (:ang-bisector basic)
   :incircle
   {:title "Incircle"
    :text "The incenter is the intersection of the interior angle bisectors."
    :label "incenter"}
   :excircle
   {:title "Excircles"
    :text "The excenters are the three intersections of the exterior angle bisectors."
    :label "excenters"}})

(def euler-line
  {:title "Euler Line"
   :text "The Euler line of a triangle is the line from the circumcenter to the orthocenter. It contains the centroid and the nine point center. The line from the orthocenter to the nine point center is divided by centroid and orthocenter internally and externally in the ratio of two to one."
   :label "euler line"

   ;; item data
   :centroid (:centroid centroid)
   :orthocenter (:orthocenter orthocenter)
   :circumcenter (:circumcenter circumcircle)
   :euler
   {:title "Euler Line"
    :text "The euler line is the line from the circumcenter to the orthocenter."
    :label "euler line"}})

(def nine-pt-circle
  {:title "Nine Point Circle"
   :text "The nine point circle of a triangle is the circumcircle of the orthic triangle. It also contains the three midpoints and the three vertex-orthocenter midpoints. The nine point circle and the circumcircle are related by two dilatations about the centroid and orthocenter with factor of plus and minus one half. The radius of the nine point circle is half the radius of the circumcircle. The centroid and orthocenter are centers of similtude of the nine point circle and the circumcircle. The details will be revealed in the transformations section."
   :label "nine point circle"

   ;; item data
   :orthic-triangle (:orthic-triangle orthocenter)
   :nine-pt-circle
   {:title "Nine Point Circle"
    :text "The circumcircle of the orthic triangle."
    :label "nine point circle"}
   :midpoint-triangle (:midpoint-triangle centroid)
   :orthocentric-midpoint-triangle
   {:title "Orthocnetric Midpoint Triangle"
    :text "The orthocentric midpoints triangle is the triangle consisting of the orthocentric midpoints."
    :label "orthocentric midpoints triangle"}
   :euler (:euler euler-line)
   :circumcircle (:circumcircle circumcircle)})

(def custom
  {:title "Custom Properties"
   :text "Select from all properties to customize your triangle. These will be persisted and used in the next section."
   :label "custom"
   :depends [:centroid :circumcircle :orthocenter :incircle :nine=pt-circle]})

;; geometric properties
(def line-options #{:line :endpoint1 :endpoint2})

;; entry level drawing props
;; settable 
(def entry-prop-map
  {:basic
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
               :midpoint-triangle false
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
               :midpoint-triangle false}}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :fill false
               :orthocentric-fill false
               :orthic-triangle false}}

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
               :midpoint-triangle false
               :orthocentric-midpoints false
               :orthocentric-midpoint-triangle false
               :orthocentric-fill false
               :nine-pt-center true
               :nine-pt-radii false
               :midpoints true
               :medians true
               :centroid true
               :euler true}}

   :custom
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
    :tri-opts {:altitudes true
               :feet true
               :perp-bisector true
               :orthocenter false
               :ang-bisector false
               :incircle false
               :excircle false
               :circumcenter false
               :circumcircle false
               :circumradii false
               :nine-pt-circle false
               :midpoints true
               :medians false
               :centroid false
               :euler false
               :fill false
               :extended true}}})

;; ordered item level properties
;; with [entry-id item-id] lookup path
(def item-prop-map
  {:basic
   {:perp-bisector [:midpoints :perp-bisector]
    :medians [:midpoints :medians]
    :altitudes [:altitudes :extended :feet]
    :ang-bisector [:ang-bisector :extended :fill]}

   :centroid
   {:medians [:midpoints :medians]
    :centroid [:midpoints :medians :centroid :centroid-fill]
    :midpoint-triangle [:midpoints :midpoint-triangle]
    :centroid-vertex-triangle [:centroid-vertex-midpoints :centroid-vertex-triangle]}

   :circumcircle
   {:perp-bisector [:midpoints :perp-bisector]
    :circumcenter [:midpoints :perp-bisector :circumcenter]
    :circumradii [:circumradii]
    :circumcircle [:circumradii :circumcircle]}

   :orthocenter
   {:altitudes [:altitudes :extended :feet]
    :orthocenter [:extended :altitudes :feet :orthocenter]
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

   :custom
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
   :title "Properties of a triangle"
   :new-text "First create a triangle by clicking vertices in the canvas or select from an arbitrary one of the types below."
   :existing-text "Now explore properties of your triangle. This section contains property definitions, animations and theorems for centroid, circumcircle, orthocenter, incircle, excircles, euler line and nine point circle. Some theorems will need to wait till the next section on transformations."

   ;; entires
   :basic basic
   :centroid centroid
   :circumcircle circumcircle
   :orthocenter orthocenter
   :incircle incircle
   :euler-line euler-line
   :nine-pt-circle nine-pt-circle
   :custom custom

   ;; map of ordered item-ids for each entry
   ;; ordered for nav bax
   ;; each item-id is used to look up its data in the entry
   :item-map
   {:basic
    [:perp-bisector :medians :altitudes :ang-bisector]
    :centroid
    [:medians :centroid :midpoint-triangle :centroid-vertex-triangle]
    :circumcircle
    [:perp-bisector :circumcenter :circumradii :circumcircle]
    :orthocenter
    [:altitudes :orthocenter :orthic-triangle]
    :incircle
    [:ang-bisector :incircle :excircle]
    :euler-line
    [:centroid :orthocenter :circumcenter :euler]
    :nine-pt-circle
    [:orthic-triangle :nine-pt-circle :midpoint-triangle :orthocentric-midpoint-triangle :circumcircle :euler]}

   :props {:entry entry-prop-map
           :item item-prop-map}})
