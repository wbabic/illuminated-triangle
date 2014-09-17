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
    :tri-opts {:fill true}
    :open true}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts-keys [:midpoints :medians :centroid :centroid-fill :midpoint-triangle :centroid-vertex-midpoints :centroid-vertex-triangle]
    :tri-opts {:midpoints true
               :medians true
               :centroid true
               :centroid-fill true
               :midpoint-triangle true
               :centroid-vertex-midpoints true
               :centroid-vertex-triangle true}
    :open true}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts-keys [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle :fill :midpoint-triangle]
    :tri-opts {:circumcenter true
               :circumcircle true
               :circumradii true
               :perp-bisector true
               :midpoints true
               :midpoint-triangle true
               :fill true}
    :open true}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :fill :orthic-triangle :orthocentric-fill]
    :tri-opts {:altitudes true
               :orthocenter true
               :fill true
               :extended true
               :feet true
               :orthic-triangle true
               :orthocentric-fill true}
    :open true}

   :incircle
   {:line-opts line-options
    :tri-opts-keys [:ang-bisector :incircle :excircle :fill :extended ]
    :tri-opts {:ang-bisector true
               :incircle true
               :excircle true
               :fill true
               :extended true}
    :open true}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :extended :feet
                    :circumcenter :midpoints :medians :centroid :euler :centroid-fill]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :extended true
               :feet true
               :circumcenter true
               :midpoints true
               :medians true
               :centroid true
               :euler true
               :centroid-fill true}
    :open true}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :feet :extended
                    :circumcenter :circumcircle :nine-pt-circle :midpoints :medians :centroid :euler
                    :nine-pt-center :nine-pt-radii :orthocentric-midpoints]
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

(def item-list [:triangle :centroid :circumcircle :orthocenter :incircle :euler-line :nine-pt-circle :all])

(def transform-list [:reflection :translation :rotation :dilataion :inversion])

(defn next-item
  "given an item-list keyword, return the next item, looping around to beginning if at end"
  [item]
  (let [item-index-map (zipmap item-list (range))
        count (count item-list)
        index (item item-index-map)
        next-index (mod (inc index) count)
        next-item (get item-list next-index)]
    next-item))

(defn previous-item
  "given an item-list keyword, return the next item, looping around to beginning if at end"
  [item]
  (let [item-index-map (zipmap item-list (range))
        count (count item-list)
        index (item item-index-map)
        next-index (mod (dec index) count)
        next-item (get item-list next-index)]
    next-item))

(def app-state
  (atom
   {:item nil
    :triangle nil
    :transforms nil
    :tri-style tri-style
    :ui ui
    :prop-map prop-map}))

