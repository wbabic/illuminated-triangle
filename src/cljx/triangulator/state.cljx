(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.definitions :as def]))

(def app-state (atom
                {:item :triangle
                 :triangle nil
                 :transforms nil
                 :ui def/ui}))

(def tri-style style/tri-style)

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
               :circumcenter :nine-pt-circle :fill}}})
