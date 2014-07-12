(ns triangulator.geometry
  (:require [goog.math.Matrix :as m]
            [goog.math.Vec2 :as v]))

(def root2 (Math/sqrt 2))
(def root3 (Math/sqrt 3))

(def pi Math/PI)
(def tau (* 2 pi))

(defn plus [p1 p2]
  (let [p1x (p1 0)
        p1y (p1 1)
        p2x (p2 0)
        p2y (p2 1)]
    [(+ p1x p2x) (+ p1y p2y)]))

(defn scal-mul [t p]
  (let [[x y] p]
    [(* t x) (* t y)]))

(defn minus [p1 p2]
  (plus p1 (scal-mul -1 p2)))

(defn length [p1]
  (let [p1x (p1 0)
        p1y (p1 1)]
    (Math/sqrt (+ (* p1x p1x) (* p1y p1y)))))

(defn distance [p1 p2]
  (length (minus p1 p2)))

(defn midpoint [p1 p2]
  (scal-mul (/ 2) (plus p1 p2)))

(defn midpoints [segments]
  (mapv
   (fn [[P Q]] (midpoint P Q))
   segments))

(defn segments
  "return the segments of the given triangle"
  [t]
  (mapv
   vec
   (take 3
         (partition 2 1 (drop 1 (cycle t))))))


(defn perp [[x y]]
  [(- y) x])

(defn perp-bisector
  "return new line same distance as given line,
passing through midpoint of and perpendicular to
the given line"
  [[P Q]]
  (let [M (midpoint P Q)
        l (distance P Q)
        R (minus P M)
        Rp (perp R)
        Sp (scal-mul root3 Rp)]
    [(plus M Rp) (minus M Rp) (plus M Sp) (minus M Sp)]))

(defn dot [u v]
  (+ (* (u 0) (v 0))
     (* (u 1) (v 1))))

(defn altitude [A B C]
  (let [b (minus C A)
        c (minus B A)
        t (/ (dot b c) (dot c c))]
    (plus A (scal-mul t c))))

(defn reflection [A B]
  (fn [C]
    (let [D (altitude A B C)
          E (minus (scal-mul 2 D) C)]
      E)))

(defn parts [n] (map (fn [i] (/ i n)) (range 24)))

(defn param-line
  "given two endpoints return function
of parameteriezed line"
  [A B]
  (fn [t]
    (plus A (scal-mul t (minus B A)))))

(defn extend-line
  [p1 p2]
  (let [l (param-line p1 p2)
        p3 (l 2000)
        p4 (l -1000)]
    [p3 p4]))

(defn matrix
  "creates a 2x2 matrix with given rows"
  [r1 r2]
  (let [m (goog.math.Matrix. (goog.math.Size. 2 2))
        _ (.setValueAt m 0 0 (r1 0))
        _ (.setValueAt m 0 1 (r1 1))
        _ (.setValueAt m 1 0 (r2 0))
        _ (.setValueAt m 1 1 (r2 1))]
    m))

(defn column
  "creates a 2x1 matrix"
  [v]
  (let [m (goog.math.Matrix. (goog.math.Size. 1 2))
        _ (.setValueAt m 0 0 (v 0))
        _ (.setValueAt m 1 0 (v 1))]
    m))

(defn multiply [m c]
  (.multiply m c))

(defn inverse [[r1 r2]]
  (.getInverse (matrix r1 r2)))

(defn c->v
  "convert column to vector"
  [column]
  [(.getValueAt column 0 0)
   (.getValueAt column 1 0)])

(defn line-coords
  "given 2 points return [a b c]
where equation of line is ax + by = c"
  [p1 p2]
  (let [[x1 y1] p1
        [x2 y2] p2
        a (- y2 y1)
        b (- x1 x2)
        c (- (* x1 y2) (* x2 y1))]
    [a b c]))

(defn get-matrix [coords]
  (let [[A B C] coords
        segs (segments coords)
        [a b c] (mapv (fn [[P Q]] (minus Q P)) segs)
        [ma mb mc] (midpoints segs)
        [ap bp cp] (mapv (fn [[x y]] [(- y) x]) [a b c])
        [ap2 bp2 cp2] (mapv (fn [m p] (plus m p)) [ma mb mc] [ap bp cp])
        line-coords
        (mapv
         (fn [[p1 p2]] (line-coords p1 p2))
         [[ma ap2]
          [mb bp2]
          [mc cp2]])]
    line-coords))

(defn get-circumcenter [coords]
  (let [line-coords (get-matrix coords)]
    (let [[a b c] (line-coords 0)
          [d e f] (line-coords 1)
          [g h i] (line-coords 2)
          m1 (inverse [[a b] [d e]])
          c1 (column [c f])
          m2 (inverse [[d e] [g h]])
          c2 (column[f i])
          m3 (inverse [[g h] [a b]])
          c3 (column[i c])]
      (mapv
       (fn [[matrix column]]
         (multiply matrix column))
       [[m1 c1]
        [m2 c2]
        [m3 c3]]))))

(defn circumcenter [coords]
  (let [circumcenters (get-circumcenter coords)
        circumcenter (first circumcenters)
        p (c->v circumcenter)]
    p))
