(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.triangle :as tri]
            [triangulator.transforms :as trans]
            [triangulator.complex :as complex]))

(enable-console-print!)

(def colors [:red :blue :green])

(defn mod3 [p] (mod p 3))

(def clear
  [(dt/style {:fill :grey-2}) (dt/rectangle
                               (dt/point [0 0])
                               (dt/point [600 600]))])

(defn project-x [p]
  (let [[x y] p]
    [0 y]))

(defn project-y [p]
  (let [[x y] p]
    [x 0]))

(defn draw-point
  "clear-screen draw item draw point and coords of value"
  [value draw-chan style]
  (go (>! draw-chan [(dt/style style)
                     (dt/point value)])))

(defn draw-point-coords
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey :fill (colors 0)})
                     (dt/line [value (project-x value)])
                     (dt/line [value (project-y value)])
                     (dt/point value)])))

(defn draw-line
  "draw line between p1 and p2"
  [p1 p2 draw-chan options color]
  (let [m (geom/midpoint p1 p2)
        l (geom/distance p1 p2)
        [q1 q2 s1 s2] (geom/perp-bisector [p1 p2])]
    (go (>! draw-chan
            [(dt/style {:stroke :grey-3 :fill color})
             (dt/point p1)
             (dt/style {:stroke color :fill :grey-2})
             (dt/line [p1 p2])])
        (when (contains? options :endpoint)
          (go (>! draw-chan
                  [(dt/point p2)])))
        (when (contains? options :midpoint)
          (>! draw-chan
            [(dt/style {:stroke :grey-3 :fill :grey-2})
             (dt/point m)]))
        (when (contains? options :perp-bisector)
          (let [[p3 p4] (geom/extend-line s1 s2)]
            (>! draw-chan
                [(dt/style {:stroke :lt-grey})
                 (dt/line [p3 p4])
                 (dt/style {:stroke :grey-3 :fill :grey-2})
                 (dt/point m)])))
        (when (contains? options :circles)
          (>! draw-chan
              [(dt/style {:stroke :lt-red
                          :fill :lt-blue})
               (dt/circle p1 l)
               (dt/circle p2 l)
               (dt/circle m (/ l 2))
               (dt/style {:fill :grey-2})

               (dt/line [s1 s2])
               (dt/point q1)
               (dt/point q2)
               (dt/point s1)
               (dt/point s2)]))
        (when (contains? options :extended)
          (let [[p3 p4] (geom/extend-line p1 p2)]
            (>! draw-chan
                [(dt/style {:stroke :lt-grey})
                 (dt/line [p1 p3])
                 (dt/line [p2 p4])])))
        (when (contains? options :extended-full)
          (let [[p3 p4] (geom/extend-line p1 p2)]
            (>! draw-chan
                [(dt/style {:stroke color})
                 (dt/line [p1 p3])
                 (dt/line [p2 p4])]))))))

(defn draw-circle
  "clear-screen draw item draw point and coords of value"
  [p1 p2 draw-chan]
  (go (>! draw-chan
          [(dt/style {:stroke :red
                      :fill :grey-2})
           (dt/circle p1 (geom/distance p1 p2))
           (dt/point p1)
           (dt/point p2)
           (dt/line [p1 p2])])))

(defn draw-circle-2
  "clear-screen draw item draw point and coords of value"
  [center radius draw-chan style]
  (go (>! draw-chan
          [(dt/style style)
           (dt/circle center radius)
           (dt/point center)])))

(defn fill-tri
  "fill given triangle with given color"
  [p1 p2 p3 draw-chan color]
  (go (>! draw-chan
          [(dt/style {:fill color})
           (dt/triangle p1 p2 p3)])))

(defn draw-triangle
  "draw triangle p1 p2 p3 in draw-chan with options"
  [p1 p2 p3 draw-chan options]
  (when (or (contains? options :circumcircle)
            (contains? options :circumcenter))
    (let[circumcenter (tri/circumcenter [p1 p2 p3])]
      ;; circumradii
      (when (contains? options :circumcircle)
        (draw-circle-2 circumcenter (geom/distance p1 circumcenter)
                       draw-chan {:stroke :yellow :fill :lt-grey})
        (draw-line p1 circumcenter draw-chan #{} :yellow)
        (draw-line p2 circumcenter draw-chan #{} :yellow)
        (draw-line p3 circumcenter draw-chan #{} :yellow))
      ;; circumcenter
      (when (contains? options :circumcenter)
        (draw-point circumcenter draw-chan {:stroke :grey-3 :fill :yellow}))))

  (when (contains? options :median)
    (let [centroid (tri/centroid [p1 p2 p3])
          [m1 m2 m3] (tri/midpoints (tri/segments [p1 p2 p3]))]
      ;; fll sub triangles
      (fill-tri p1 centroid p2 draw-chan :lt-red)
      (fill-tri p2 centroid p3 draw-chan :lt-blue)
      (fill-tri p3 centroid p1 draw-chan :lt-green)
      ;; draw medians
      (draw-line p1 m1 draw-chan #{} :yellow)
      (draw-line p2 m2 draw-chan #{} :yellow)
      (draw-line p3 m3 draw-chan #{} :yellow)
      (draw-point centroid draw-chan {:stroke :grey-3 :fill :yellow})))

  (when (contains? options :incircle)
    ;; draw angular biscetors extended
    (fill-tri p1 p2 p3 draw-chan :lt-red)
    (doseq [perm [[p1 p2 p3] [p2 p3 p1] [p3 p1 p2]]]
      (let [[M1 M2] (tri/ang-bisector-segment perm)
            [M1P M2P] (geom/perp-bisector [M1 M2])]
        (draw-line M1 M2 draw-chan #{} :lt-grew)
        (draw-line M1P M2P draw-chan #{} :lt-grey)))
    ;; draw incircle
    (let [l1 (tri/ang-bisector-segment [p1 p2 p3])
          l2 (tri/ang-bisector-segment [p2 p3 p1])
          i (geom/intersection l1 l2)
          d (tri/altitude p1 p2 i)
          e (tri/altitude p2 p3 i)
          f (tri/altitude p3 p1 i)
          r (geom/distance i d)]
      ;; incenter
      (draw-point i draw-chan {:stroke :grey-3 :fill :yellow})
      ;; inradii
      (draw-line i d draw-chan #{} :yellow)
      (draw-line i e draw-chan #{} :yellow)
      (draw-line i f draw-chan #{} :yellow)
      ;; incircle
      (draw-circle-2 i r draw-chan {:stroke :yellow :fill :lt-grey}))
    ;; draw excircles
    (let [l1 (tri/ang-bisector-segment [p1 p2 p3])
          l2 (tri/ang-bisector-segment [p2 p3 p1])
          l3 (tri/ang-bisector-segment [p3 p1 p2])
          l1p (geom/perp-bisector l1)
          l2p (geom/perp-bisector l2)
          l3p (geom/perp-bisector l3)
          i1 (geom/intersection l1p l2p)
          i2 (geom/intersection l2p l3p)
          i3 (geom/intersection l3p l1p)
          d1 (tri/altitude p1 p2 i1)
          d2 (tri/altitude p2 p3 i1)
          d3 (tri/altitude p3 p1 i1)
          e1 (tri/altitude p1 p2 i2)
          e2 (tri/altitude p2 p3 i2)
          e3 (tri/altitude p3 p1 i2)
          f1 (tri/altitude p1 p2 i3)
          f2 (tri/altitude p2 p3 i3)
          f3 (tri/altitude p3 p1 i3)
          r1 (geom/distance i1 d1)
          r2 (geom/distance i2 e1)
          r3 (geom/distance i3 f1)]
      ;; excenters
      (draw-point i1 draw-chan {:stroke :grey-3 :fill :yellow})
      (draw-point i2 draw-chan {:stroke :grey-3 :fill :yellow})
      (draw-point i3 draw-chan {:stroke :grey-3 :fill :yellow})
      ;; exradii
      (draw-line i1 d1 draw-chan #{} :yellow)
      (draw-line i1 d2 draw-chan #{} :yellow)
      (draw-line i1 d3 draw-chan #{} :yellow)
      (draw-line i2 e1 draw-chan #{} :yellow)
      (draw-line i2 e2 draw-chan #{} :yellow)
      (draw-line i2 e3 draw-chan #{} :yellow)
      (draw-line i3 f1 draw-chan #{} :yellow)
      (draw-line i3 f2 draw-chan #{} :yellow)
      (draw-line i3 f3 draw-chan #{} :yellow)
      
      ;; excircles
      (draw-circle-2 i1 r1 draw-chan {:stroke :yellow :fill :lt-grey})
      (draw-circle-2 i2 r2 draw-chan {:stroke :yellow :fill :lt-grey})
      (draw-circle-2 i3 r3 draw-chan {:stroke :yellow :fill :lt-grey})))

  ;; angle bisectors or orthocenter
  (when (or (contains? options :ang-bisector)
            (contains? options :orthocenter)
            (contains? options :nine-pt-circle))
    (let [b3 (tri/altitude p1 p2 p3)
          b1 (tri/altitude p2 p3 p1)
          b2 (tri/altitude p3 p1 p2)
          orthocenter (geom/intersection [p1 b1] [p2 b2])]
      ;; ang bisectors
      (when (contains? options :ang-bisector)
        (draw-line b1 p1 draw-chan #{:extended} :yellow)
        (draw-line b2 p2 draw-chan #{:extended} :yellow)
        (draw-line b3 p3 draw-chan #{:extended} :yellow))
      ;; orthocenter
      (when (contains? options :orthocenter)
        (draw-point orthocenter draw-chan {:stroke :lt-grey :fill :pink}))
      (when (contains? options :euler)
        (let [circumcenter (tri/circumcenter [p1 p2 p3])]
          ;; TODO DRY circumcenter
          (draw-line orthocenter circumcenter draw-chan #{} :pink)))
      (when (contains? options :nine-pt-circle)
        (let [orthic-circumcenter (tri/circumcenter [b1 b2 b3])
              r (geom/distance b1 orthic-circumcenter)]
          ;; midpoints of vertices to orthocenter
          (let [m1 (geom/midpoint orthocenter p1)
                m2 (geom/midpoint orthocenter p2)
                m3 (geom/midpoint orthocenter p3)]
            (draw-point m1 draw-chan {:stroke :lt-grey :fill :pink})
            (draw-point m2 draw-chan {:stroke :lt-grey :fill :pink})
            (draw-point m3 draw-chan {:stroke :lt-grey :fill :pink}))
          ;; feets of atltitudes to orthic-circumcenter
          (draw-line orthic-circumcenter b1 draw-chan #{} :yellow)
          (draw-line orthic-circumcenter b2 draw-chan #{} :yellow)
          (draw-line orthic-circumcenter b3 draw-chan #{} :yellow)
          ;; nine point circle
          (draw-circle-2 orthic-circumcenter r draw-chan {:stroke :yellow :fill :lt-grey})))))
  
  (let [line-options (cond->
                      #{}
                      (contains? options :perp-bisector) (conj :perp-bisector)
                      (contains? options :median) (conj :midpoint)
                      (contains? options :incircle) (conj :extended)
                      (contains? options :ang-bisector) (conj :extended)
                      (contains? options :nine-pt-circle) (conj :midpoint))]
    (draw-line p1 p2 draw-chan line-options :red)
    (draw-line p2 p3 draw-chan line-options :blue)
    (draw-line p3 p1 draw-chan line-options :green)))

(defn point-state-transitioner
  "handle event by using current state and event to transition to new state
send drawing events to draw-chan
send state changes to out
return new state"
  [[type value] current-state out draw-chan]
  (condp = type
    :move
    (do ;; clear-screen draw-state draw-point-coords
      (go (>! draw-chan clear)
          (>! out [:draw :point draw-chan]))
      (draw-point-coords value draw-chan)
      current-state)
    :click
    (do ;; add point to state; reset state
      (go (>! out (dt/point value))
          (>! out [:draw :point draw-chan]))
      {:step 0})))

(defn line-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :line draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles :midpoint} :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :line draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          (go (>! out line)
              (>! draw-chan clear)
              (>! out [:draw :line draw-chan]))
          {:step 0}))))

(defn tri-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :triangle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                base (tri/altitude p1 p2 p3)]
            (draw-line p1 p2 draw-chan #{:circles :extended} :red)
            (draw-line p2 p3 draw-chan nil :blue)
            (draw-line p3 p1 draw-chan nil :green)
            (draw-line p3 base draw-chan nil :yellow)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :triangle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          (go (>! out [:draw :triangle draw-chan]))
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)
              triangle (dt/triangle p1 p2 value)]
          (go (>! out triangle)
              (>! out [:draw :triangle draw-chan]))
          {:step 0}))))

(defn orthocenter-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan clear))
            (draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (fill-tri p1 p2 p3 draw-chan :lt-red)
            (draw-triangle p1 p2 p3 draw-chan #{:ang-bisector :orthocenter})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 {:step 0})))

(defn nine-pt-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan clear))
            (draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (draw-triangle p1 p2 p3 draw-chan #{:ang-bisector :nine-pt-circle})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 {:step 0})))

(defn euler-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan clear))
            (draw-line p1 value draw-chan #{} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (fill-tri p1 p2 p3 draw-chan :lt-red)
            (draw-triangle p1 p2 p3 draw-chan #{:ang-bisector :perp-bisector :orthocenter :circumcenter :euler})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 {:step 0})))

(defn circumcircle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan clear))
            (draw-line p1 value draw-chan #{:perp-bisector :endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (fill-tri p1 p2 p3 draw-chan :lt-red)
            (draw-triangle p1 p2 p3 draw-chan #{:circumcenter :circumcircle :perp-bisector})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 {:step 0})))

(defn centroid-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)
                p2 value]
            (go (>! draw-chan clear))
            (draw-line p1 p2 draw-chan #{:midpoint :endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (draw-triangle p1 p2 p3 draw-chan #{:median})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2  (assoc current-state :step 3)
      3 {:step 0})))

(defn incircle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan clear))
            (draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan clear))
            (draw-triangle p1 p2 p3 draw-chan #{:incircle})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3 :p3 value)
      3 {:step 0})))

(defn circle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :circle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-circle p1 value draw-chan)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :circle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              circle (dt/circle p1 (geom/distance p1 value))]
          (go (>! out circle)
              (>! out [:draw :circle draw-chan]))
          {:step 0}))))

(defn reflection-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:extended-full} :yellow)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                ref (trans/reflection p1 p2)
                image (ref p3)]
            (draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (draw-line p3 image draw-chan #{:midpoint} :lt-grey)
            current-state)
        3 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B value
                ref (trans/reflection p1 p2)
                imageA (ref A)
                imageB (ref B)]
            (draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (draw-line A imageA draw-chan #{:midpoint} :lt-grey)
            (draw-line B imageB draw-chan #{:midpoint} :lt-grey)
            (draw-line A B draw-chan #{} :red)
            (draw-line imageA imageB draw-chan #{} :red)
            current-state)
        4 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B (:B current-state)
                C value
                ref (trans/reflection p1 p2)
                imageA (ref A)
                imageB (ref B)
                imageC (ref C)]
            (draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (draw-line A B draw-chan #{} :red)
            (draw-line B C draw-chan #{} :green)
            (draw-line C A draw-chan #{} :blue)
            (draw-line imageA imageB draw-chan #{} :red)
            (draw-line imageB imageC draw-chan #{} :green)
            (draw-line imageC imageA draw-chan #{} :blue)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear))
          (draw-point value draw-chan {:stroke :lt-grey :fill :red})
          {:step 1 :p1 value})
      1 (assoc current-state :p2 value :step 2)
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 {:step 0})))

(defn inversion-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan clear))
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                radius (geom/distance value center)]
            (go (>! draw-chan clear))
            (draw-circle-2 center radius draw-chan {:stroke :yellow :fill :lt-grey})
            (draw-line center value draw-chan #{} :pink)
            current-state)
        2 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A value
                image (inversion A)]
            (go (>! draw-chan clear))
            (draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :lt-grey})
            (draw-line center A draw-chan #{:extended} :lt-grey)
            (draw-point image draw-chan {:stroke :lt-grey :fill :lt-red})
            (draw-point A draw-chan {:stroke :lt-grey :fill :red})
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A (:A current-state)
                B value
                imageA (inversion A)
                imageB (inversion B)
                line (geom/param-line A B)
                pre-image-points (map line (geom/parts 24))
                image-points (map inversion pre-image-points)]
            (go (>! draw-chan clear))
            (draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :grey-2})
            (draw-line center A draw-chan #{:extended} :lt-grey)
            (draw-line center B draw-chan #{:extended} :lt-grey)
            (draw-point imageA draw-chan {:stroke :lt-grey :fill :red})
            (draw-point imageB draw-chan {:stroke :lt-grey :fill :red})
            (doseq [p image-points]
              (draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p pre-image-points]
              (draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        4 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A (:A current-state)
                B (:B current-state)
                C value
                image1 (inversion A)
                image2 (inversion B)
                image3 (inversion C)
                line1 (geom/param-line A B)
                line2 (geom/param-line B C)
                line3 (geom/param-line C A)
                pre-image-points1 (map line1 (geom/parts 24))
                pre-image-points2 (map line2 (geom/parts 24))
                pre-image-points3 (map line3 (geom/parts 24))
                image-points1 (map inversion pre-image-points1)
                image-points2 (map inversion pre-image-points2)
                image-points3 (map inversion pre-image-points3)]
            (go (>! draw-chan clear))
            (draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :grey-2})
            (draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image2 draw-chan {:stroke :lt-grey :fill :red})
            (doseq [p image-points1]
              (draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p pre-image-points1]
              (draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p image-points2]
              (draw-point p draw-chan {:stroke :lt-grey :fill :green}))
            (doseq [p pre-image-points2]
              (draw-point p draw-chan {:stroke :lt-grey :fill :green}))
            (doseq [p image-points3]
              (draw-point p draw-chan {:stroke :lt-grey :fill :blue}))
            (doseq [p pre-image-points3]
              (draw-point p draw-chan {:stroke :lt-grey :fill :blue}))
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        5 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :center value}) 
      1 (let [center (:center current-state)
              radius (geom/distance value center)
              inversion (complex/inversion center radius)]
          {:step 2
           :center center
           :radius radius
           :inversion inversion})
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 (assoc current-state :step 5)
      5 {:step 0})))

(defn homothety-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                p1 value
                homothety (:homothety current-state)
                image (homothety p1)]
            (draw-line center p1 draw-chan nil :lt-grey)
            (draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image draw-chan {:stroke :lt-grey :fill :red})
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        2 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 value
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety p2)]
            (draw-line center p1 draw-chan nil :lt-grey)
            (draw-line center p2 draw-chan nil :lt-grey)
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line image1 image2 draw-chan nil :red)
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety p2)
                image3 (homothety p3)]
            (draw-line center p1 draw-chan nil :lt-grey)
            (draw-line center p2 draw-chan nil :lt-grey)
            (draw-line center p3 draw-chan nil :lt-grey)
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line p2 p3 draw-chan nil :green)
            (draw-line p3 p1 draw-chan nil :blue)
            (draw-line image1 image2 draw-chan nil :red)
            (draw-line image2 image3 draw-chan nil :green)
            (draw-line image3 image1 draw-chan nil :blue)
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [k (/ 2)
              center value
              homothety (complex/homothety center k)]
          (assoc current-state :step 1 :center center :homothety homothety))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn rotation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 value
                images (take 3 (iterate rotation p1))]
            (doseq [pi images]
              (draw-line center pi draw-chan #{} :lt-grey)
              (draw-point pi draw-chan {:stroke :lt-grey :fill :red}))
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        2 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 (:p1 current-state)
                p2 value
                images1 (take 3 (iterate rotation p1))
                images2 (take 3 (iterate rotation p2))
                images (map vector images1 images2)]
            (doseq [[p1i p2i] images]
              (draw-line center p1i draw-chan #{} :lt-grey)
              (draw-line center p2i draw-chan #{} :lt-grey)
              (draw-line p1i p2i draw-chan #{} :red))
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                images1 (take 3 (iterate rotation p1))
                images2 (take 3 (iterate rotation p2))
                images3 (take 3 (iterate rotation p3))
                images (map vector images1 images2 images3 [:red :green :blue])]
            (doseq [[p1i p2i p3i color] images]
              (draw-line center p1i draw-chan #{} :lt-grey)
              (draw-line center p2i draw-chan #{} :lt-grey)
              (draw-line center p3i draw-chan #{} :lt-grey)
              (draw-line p1i p2i draw-chan #{} :red)
              (draw-line p2i p3i draw-chan #{} :green)
              (draw-line p3i p1i draw-chan #{} :blue))
            (draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [angle  (/ geom/tau 3)
              ;; angle defaults to a twenty fourth of a tau
              rotation (complex/rotation value angle)]
          (assoc current-state
            :step 1
            :center value
            :rotation rotation))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn translation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [pi (:pi current-state)]
            (draw-line pi value draw-chan nil :yellow)
            current-state)
        2 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 value
                translation (:translation current-state)
                image (translation p1)]
            (draw-line pi pf draw-chan nil :yellow)
            (draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image draw-chan {:stroke :lt-grey :fill :red})
            current-state)
        3 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 (:p1 current-state)
                p2 value
                translation (:translation current-state)
                image1 (translation p1)
                image2 (translation p2)]
            (draw-line pi pf draw-chan nil :yellow)
            (draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point p2 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image2 draw-chan {:stroke :lt-grey :fill :red})
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line image1 image2 draw-chan nil :red)
            current-state)
        4 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                translation (:translation current-state)
                image1 (translation p1)
                image2 (translation p2)
                image3 (translation p3)]
            (draw-line pi pf draw-chan nil :yellow)
            (draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (draw-point p2 draw-chan {:stroke :lt-grey :fill :green})
            (draw-point image2 draw-chan {:stroke :lt-grey :fill :green})
            (draw-point p3 draw-chan {:stroke :lt-grey :fill :blue})
            (draw-point image3 draw-chan {:stroke :lt-grey :fill :blue})
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line image1 image2 draw-chan nil :red)
            (draw-line p2 p3 draw-chan nil :green)
            (draw-line image2 image3 draw-chan nil :green)
            (draw-line p3 p1 draw-chan nil :blue)
            (draw-line image3 image1 draw-chan nil :blue)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (assoc current-state :step 1 :pi value)
      1 (let [pi (:pi current-state)
              pf value
              v (geom/minus pf pi)
              translation (complex/translation v)]
          (assoc current-state
            :step 2
            :pf pf
            :vector v
            :translation translation))
      2 (assoc current-state :step 3 :p1 value)
      3 (assoc current-state :step 4 :p2 value)
      4 (assoc (dissoc current-state :p1 :p2) :step 2))))

(defn mouse-handler [click move ctr-chan draw-chan]
  (let [return-message-chan (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[value channel] (alts! [click move ctr-chan])
                type (condp = channel
                       click :click
                       move :move
                       ctr-chan :ctr-chan)]
            (when (= channel ctr-chan)
              (do
                (println "ctr-chan item: " value)
                (when-not (= item value)
                  (>! draw-chan clear)
                  (>! return-message-chan [:draw value draw-chan]))
                (recur value {:step 0})))

            (condp = item
              :none
              (recur item
                     state)
              :point
              (recur item
                     (point-state-transitioner [type value] state return-message-chan draw-chan))
              :line
              (recur item
                     (line-state-transitioner [type value] state return-message-chan draw-chan))
              :triangle
              (recur item
                     (tri-state-transitioner [type value] state return-message-chan draw-chan))
              :circumcircle
              (recur item
                     (circumcircle-state-transitioner [type value] state return-message-chan draw-chan))
              :orthocenter
              (recur item
                     (orthocenter-state-transitioner [type value] state return-message-chan draw-chan))
              :euler-line
              (recur item
                     (euler-state-transitioner [type value] state return-message-chan draw-chan))
              :nine-pt-circle
              (recur item
                     (nine-pt-state-transitioner [type value] state return-message-chan draw-chan))
              :centroid
              (recur item
                     (centroid-state-transitioner [type value] state return-message-chan draw-chan))
              :incircle
              (recur item
                     (incircle-state-transitioner [type value] state return-message-chan draw-chan))
              :circle
              (recur item
                     (circle-state-transitioner [type value] state return-message-chan draw-chan))
              :reflection
              (recur item
                     (reflection-state-transitioner [type value] state return-message-chan draw-chan))
              :inversion
              (recur item
                     (inversion-state-transitioner [type value] state return-message-chan draw-chan))
              :homothety
              (recur item
                     (homothety-state-transitioner [type value] state return-message-chan draw-chan))
              :rotation
              (recur item
                     (rotation-state-transitioner [type value] state return-message-chan draw-chan))
              :translation
              (recur item
                    (translation-state-transitioner [type value] state return-message-chan draw-chan))
              (do
                (println "warning: iten not handled: " item)
                (recur item state))))))
    return-message-chan))
