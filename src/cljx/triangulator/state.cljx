(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.definitions :as def]))

(def tri-style style/tri-style)

(def ui def/ui)

(def line-options #{:line :endpoint1 :endpoint2})

(def prop-map
  {:triangle
   {:line-opts line-options
    :tri-opts #{:fill}}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts #{:midpoints :medians :centroid}}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts #{:circumcenter :circumcircle :perp-bisector :fill}}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts #{:altitudes :orthocenter :fill}}

   :incircle
   {:line-opts line-options
    :tri-opts #{:ang-bisector :incircle :excircle :fill}}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts #{:altitudes :perp-bisector :orthocenter
                :circumcenter :midpoints :medians :centroid :euler}}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts #{:altitudes :perp-bisector :orthocenter
               :circumcenter :nine-pt-circle :midpoints :medians :centroid :euler}}

   :all
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
    :tri-opts #{:altitudes :perp-bisector :orthocenter
                :ang-bisector :incircle :excircle
                :circumcenter :circumcircle :nine-pt-circle :midpoints :medians :centroid :euler}}})

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
