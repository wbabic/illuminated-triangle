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
    :tri-opts-keys [:midpoints :medians :centroid]
    :tri-opts {:midpoints true
               :medians true
               :centroid true}}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts-keys [:circumcenter :circumcircle :perp-bisector :fill]
    :tri-opts {:circumcenter true
               :circumcircle true
               :perp-bisector true
               :fill true}}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :orthocenter :fill]
    :tri-opts {:altitudes true
               :orthocenter true
               :fill true}}

   :incircle
   {:line-opts line-options
    :tri-opts-keys [:ang-bisector :incircle :excircle :fill]
    :tri-opts {:ang-bisector true
               :incircle true
               :excircle true
               :fill true}}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter
                    :circumcenter :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :circumcenter true
               :midpoints true
               :medians true
               :centroid true
               :euler true}}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter
                    :circumcenter :nine-pt-circle :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :circumcenter true
               :nine-pt-circle true
               :midpoints true
               :medians true
               :centroid true
               :euler true}}

   :all
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter
                    :ang-bisector :incircle :excircle
                    :circumcenter :circumcircle :nine-pt-circle
                    :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :ang-bisector true
               :incircle true
               :excircle true
               :circumcenter true
               :circumcircle true
               :nine-pt-circle true
               :midpoints true
               :medians true
               :centroid true
               :euler true
               :fill true}}})

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
