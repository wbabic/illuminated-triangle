(ns triangulator.geometry)

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

