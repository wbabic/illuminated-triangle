(ns triangulator.handlers.transitioners
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
            [triangulator.render :as render]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

#+cljs (enable-console-print!)

(defn property-tranistionaer
  "returns a transitioner that creates triangles drawing given properties returning new state"
  [line-props tri-props]
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
            (render/draw-line-2 p1 p2 draw-chan :e1 line-props)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan tri-props)
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

(def orthocenter
  (property-tranistionaer
   #{:line :endpoint1 :endpoint2 :extended }
   #{:altitudes :orthocenter :fill}))

(def nine-pt
  (property-tranistionaer
   #{:line :midpoint :extended :endpoint1 :endpoint2}
   #{:altitudes :perp-bisector :orthocenter
     :circumcenter :nine-pt-circle :fill}))

(def euler
  (property-tranistionaer
   #{:line :endpoint1 :endpoint2 :extended}
   #{:altitudes :perp-bisector :orthocenter
     :circumcenter :euler :fill}))

(def circumcircle
  (property-tranistionaer
   #{:line :perp-bisector :midpoint :endpoint1 :endpoint2}
   #{:circumcenter :circumcircle :perp-bisector :fill}))

(def centroid
  (property-tranistionaer
   #{:line :endpoint1 :endpoint2}
   #{:medians :centroid}))

(def incircle
  (property-tranistionaer
   #{:line :endpoint1 :endpoint2}
   #{:ang-bisector :incircle :excircle :fill}))
