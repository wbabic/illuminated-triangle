(ns triangulator.transitioners.property
  (:require [triangulator.datatypes :as dt]
            [triangulator.render :as render]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

#+cljs (enable-console-print!)

(defn property-tranistionaer
  "returns a transitioner that creates triangles drawing given properties returning new state"
  [line-options tri-options]
  (fn [[type value] current-state out draw-chan]
    (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)
                p2 value]
            (go (>! draw-chan render/clear))
            (render/draw-edge p1 p2 draw-chan :e1 line-options)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan tri-options)
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0})))))

(def line-options #{:line :endpoint1 :endpoint2})

(def triangle
  (property-tranistionaer
   line-options
   #{:fill}))

(def orthocenter
  (property-tranistionaer
   (conj line-options :extended)
   #{:altitudes :orthocenter :fill}))

(def nine-pt
  (property-tranistionaer
   (conj line-options :extended :midpoint)
   #{:altitudes :perp-bisector :orthocenter
     :circumcenter :nine-pt-circle :fill}))

(def euler
  (property-tranistionaer
   (conj line-options :extended)
   #{:altitudes :perp-bisector :orthocenter
     :circumcenter :euler :fill}))

(def circumcircle
  (property-tranistionaer
   (conj line-options :perp-bisector :midpoint)
   #{:circumcenter :circumcircle :perp-bisector :fill}))

(def centroid
  (property-tranistionaer
   (conj line-options :midpoint)
   #{:midpoints :medians :centroid}))

(def incircle
  (property-tranistionaer
   line-options
   #{:ang-bisector :incircle :excircle :fill}))
