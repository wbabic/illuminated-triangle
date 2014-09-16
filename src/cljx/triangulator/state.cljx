(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.definitions :as def]))

(def tri-style style/tri-style)

(def ui def/ui)

(def line-options #{:line :endpoint1 :endpoint2})

(def prop-map
  {:triangle
   {:line-opts line-options
    :tri-opts-keys [:fill]
    :tri-opts {:fill true}}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts-keys [:midpoints :medians :centroid :centroid-fill :midpoint-triangle :centroid-vertex-midpoints :centroid-vertex-triangle]
    :tri-opts {:midpoints true
               :medians true
               :centroid true
               :centroid-fill true
               :midpoint-triangle true
               :centroid-vertex-midpoints true
               :centroid-vertex-triangle true}}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts-keys [:midpoints :perp-bisector:circumcenter :circumradii :circumcircle :fill]
    :tri-opts {:circumcenter true
               :circumcircle true
               :circumradii true
               :perp-bisector true
               :midpoints true
               :fill true}}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :fill :orthic-triangle]
    :tri-opts {:altitudes true
               :orthocenter true
               :fill true
               :extended true
               :feet true
               :orthic-triangle true}}

   :incircle
   {:line-opts line-options
    :tri-opts-keys [:ang-bisector :incircle :excircle :fill :extended ]
    :tri-opts {:ang-bisector true
               :incircle true
               :excircle true
               :fill true
               :extended true}}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :extended :feet
                    :circumcenter :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :extended true
               :feet true
               :circumcenter true
               :midpoints true
               :medians true
               :centroid true
               :euler true}}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :feet :extended
                    :circumcenter :nine-pt-circle :midpoints :medians :centroid :euler
                    :nine-pt-center :nine-pt-radii :orthocentric-midpoints]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :feet true
               :extended true
               :circumcenter true
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
               :euler true}}

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
               :extended true}}})

(def item-list [:triangle :centroid :circumcircle :orthocenter :incircle :euler-line :nine-pt-circle :all])

(def transform-list [:reflection :translation :rotation :dilataion :inversion])

(def app-state
  (atom
   {:item nil
    :triangle nil
    :transforms nil
    :tri-style tri-style
    :ui ui
    :prop-map prop-map}))
