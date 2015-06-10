(ns triangulator.geometry)

(def root2 (Math/sqrt 2))
(def root3 (Math/sqrt 3))

(def pi Math/PI)
(def tau (* 2 pi))
(def origin [0 0])
(def e1 [1 0])
(def e2 [0 1])

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

(defn mmmult
  "multiply m, a 2x2 matrix by c
where c is a vector"
  [m c]
  (let [c00 (get-in c [0 0])
        c10 (get-in c [1 0])
        c01 (get-in c [0 1])
        c11 (get-in c [1 1])
        c1 [c00 c10]
        c2 [c01 c11]
        [r1 r2] m]
    [[(dot r1 c1) (dot r1 c2)]
     [(dot r2 c1) (dot r2 c2)]]))

(defn mvmult
  "multiply m, a 2x2 matrix by c
where c is a matrix "
  [m c]
  (let [[r1 r2] m]
    [(dot r1 c) (dot r2 c)]))

(defn inverse [[r1 r2]]
  (let [[a b] r1
        [c d] r2
        det (- (* a d) (* b c))
        res [(scal-mul (/ det) [d (- b)])
             (scal-mul (/ det) [(- c) a])]]
    res))

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

(defn intersection
  "intersection of two lines with each a pair of points
l1 = [p1 p2] l2 = [p3 p4]"
  [l1 l2]
  (let [[p1 p2] l1
        [p3 p4] l2
        [a b c] (line-coords p1 p2)
        [d e f] (line-coords p3 p4)
        m1 (inverse [[a b] [d e]])
        res (mvmult m1 [c f])]
    res))
