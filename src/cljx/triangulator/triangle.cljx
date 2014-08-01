(ns triangulator.triangle
  (:require [triangulator.geometry :as geom]))

(defn segments
  "return the segments of the given triangle
given as a vector of vertices"
  [t]
  (mapv
   vec
   (take 3
         (partition 2 1 (drop 1 (cycle t))))))

(defn midpoints [segments]
  (mapv
   (fn [[P Q]] (geom/midpoint P Q))
   segments))

(defn altitude
  "return altitude from C to AB"
  [A B C]
  (let [b (geom/minus C A)
        c (geom/minus B A)
        t (/ (geom/dot b c) (geom/dot c c))]
    (geom/plus A (geom/scal-mul t c))))

(defn centroid
  "return the centroid of the three given points"
  [[A B C]]
  (geom/scal-mul
   (/ 3)
   (geom/plus A (geom/plus B C))))

(defn circumcenter
  "return the circumcenter of the three given points"
  [[A B C]]
  (let [[p1 p2] (geom/perp-bisector [A B])
        [q1 q2] (geom/perp-bisector [A C])]
    (geom/intersection [p1 p2] [q1 q2])))

(defn ang-bisector-segment
  "return agnular bisector segment at A"
  [[A B C]]
  (let [c (geom/minus B A)
        b (geom/minus C A)
        lb (geom/length b)
        lc (geom/length c)
        B1 (geom/plus A (geom/scal-mul (/ 1000 lb) b))
        C1 (geom/plus A (geom/scal-mul (/ 1000 lc) c))
        B2 (geom/plus A (geom/scal-mul (/ -1000 lb) b))
        C2 (geom/plus A (geom/scal-mul (/ -1000 lc) c))
        M1 (geom/midpoint B1 C1)
        M2 (geom/midpoint B2 C2)]
    [M1 M2]))
