(ns triangulator.render
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
     )
#+cljs(:require-macros [cljs.core.async.macros :refer [go]])
)

(def colors [:red :blue :green])

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
    (let [circumcenter (tri/circumcenter [p1 p2 p3])]
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
