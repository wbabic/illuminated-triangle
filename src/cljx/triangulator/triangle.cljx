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

(defn get-matrix [coords]
  (let [[A B C] coords
        segs (segments coords)
        [a b c] (mapv (fn [[P Q]] (geom/minus Q P)) segs)
        [ma mb mc] (midpoints segs)
        [ap bp cp] (mapv (fn [[x y]] [(- y) x]) [a b c])
        [ap2 bp2 cp2] (mapv (fn [m p] (geom/plus m p)) [ma mb mc] [ap bp cp])
        line-coords
        (mapv
         (fn [[p1 p2]] (geom/line-coords p1 p2))
         [[ma ap2]
          [mb bp2]
          [mc cp2]])]
    line-coords))

(defn get-circumcenter [coords]
  (let [line-coords (get-matrix (segments coords))]
    (let [[a b c] (line-coords 0)
          [d e f] (line-coords 1)
          [g h i] (line-coords 2)
          m1 (geom/inverse [[a b] [d e]])
          c1 [c f]
          m2 (geom/inverse [[d e] [g h]])
          c2 [f i]
          m3 (geom/inverse [[g h] [a b]])
          c3 [i c]]
      (mapv
       (fn [[matrix column]]
         (geom/mvmult matrix column))
       [[m1 c1]
        [m2 c2]
        [m3 c3]]))))

(defn circumcenter [coords]
  (let [circumcenters (get-circumcenter coords)
        circumcenter (first circumcenters)]
    circumcenter))

(defn centroid [[A B C]]
  (geom/scal-mul
   (/ 3)
   (geom/plus A (geom/plus B C))))


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
