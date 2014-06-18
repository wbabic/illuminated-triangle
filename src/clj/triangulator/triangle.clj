(ns triangulator.triangle
  (:use [triangulator.geometry])
  (:use [triangulator.transforms]))

(defn midpoint [P Q]
  (scal-mult (/ 2) (add P Q)))

(defn centroid [[A B C]]
  (scal-mult
   (/ 3)
   (add A (add B C))))

(defn area
  "Return the area of a triangle"
  [t]
  (* 0.5 (det (mapv #(conj % 1) t))))

(defn line-coords
  "given 2 points return [a b c]
where equation of line is ax + by = c"
  [points]
  (let [p1 (points 0)
        p2 (points 1)
        [x1 y1] p1
        [x2 y2] p2
        a (- y2 y1)
        b (- x1 x2)
        c (- (* x1 y2) (* x2 y1))]
    [a b c]))

(defn line-eq
  "given line-coords [a b c]
return equation string of the form ax + by = c"
  [coords]
  (let [t (fn [p ch]
            (condp == p
              0 ""
              1 ch
              -1 (str "-" ch)
              (str p ch)))
        p (fn [a b]
            (if (or (== 0 a) (== 0 b))
              ""
              " + "))
        [a b c] coords]
    (str (t a "x") (p a b) (t b "y") " = " c)))

(comment
  (let [lcs [[1 0 0] [0 1 0] [1 0 1] [1 1 1]]]
    (map line-eq lcs))
  ;;=> ("x = 0" "y = 0" "x = 1" "x + y = 1")
  )

(defn segments
  "return the segments of the given triangle"
  [t]
  (mapv
   vec
   (take 3
         (partition 2 1 (drop 1 (cycle t))))))

(defn perp-bisector
  "return new line same distance as given line,
passing through midpoint of and perpendicular to
the given line"
  [[P Q]]
  (let [M (midpoint P Q)
        l (distance P Q)
        R (sub P M)
        Rp (perp R)]
    [(add M Rp) (sub M Rp)]))

(defn param-line
  "given two endpoints return function
of parameteriezed line"
  [[P Q]]
  (let []
    (fn [t]
      (add P (scal-mult t (sub Q P))))))

(defn altitude [[A B C]]
  (let [b (sub B A)
        c (sub C A)
        t (/ (dot b c) (dot c c))]
    (add A (scal-mult t c))))

(defn altitudes [coords]
  (let [[A B C] coords
        a1 (altitude [A B C])
        a2 (altitude [B C A])
        a3 (altitude [C A B])]
    [[B a1]
     [C a2]
     [A a3]]))

;; special triangle makers
;; lets make an equilateral triangle
;; by placing the centroid at given position
;; tilting to given orientation
;; and exanding axis to given radius
(def v1 (scal-mult (/ 2) [-1 root3]))
(def v2 (scal-mult (/ -2) [1 root3]))

(def right-isoc [origin e1 e2])
(def eq-tri [e1 v1 v2])
(def isoc-eq [origin e1 v1])
(def scalene-eq [origin e1 (scal-mult (/ -2) v2)])

(defn eq-tri-make [position radius orientation]
  (let [[x y] position
        rot (rotation orientation)]
    (mapv (fn [p] (add position (scal-mult radius (mult rot p))))
          eq-tri)))

(defn make-tri [tri position radius orientation]
  (let [[x y] position
        rot (rotation orientation)]
    (mapv (fn [p] (add position (scal-mult radius (mult rot p))))
          tri)))

(comment
  (eq-tri-make [100 100] 100 0)
  ;;=> [[200.0 100.0] [50.0 186.60254037844385] [50.0 13.397459621556138]]
  (eq-tri-make [100 100] 100 (/ tau 6))
  ;;=> [[150.0 13.397459621556138] [150.0 186.60254037844388] [0.0 99.99999999999999]]
  (< (- (area (eq-tri-make [100 100] 100 (/ tau 6)))
        (* 100 100 (area eq-tri)))
     (/ 100000000))
  
  (equals (centroid (eq-tri-make [100 100] 100 0)) [100 100])

  right-isoc
  ;;=> [[0 0] [1 0] [0 1]]
  (make-tri right-isoc [100 100] 100 0)
  ;;=> [[100.0 100.0] [200.0 100.0] [100.0 200.0]]
  (area (make-tri right-isoc [100 100] 100 0))
  ;;=> 5000.000000000001
  (centroid (make-tri right-isoc [100 100] 100 0))
  (equals [(/ 3) (/ 3)] (centroid right-isoc))

  )

(comment
  (area eq-tri)
  ;;=> 1.299038105676658
  (equals (/ 2) (area right-isoc))
  (altitudes eq-tri)
  (altitudes right-isoc)
  [[[1 0] [0 0]] [[0 1] [0 0]] [[0 0] [1/2 1/2]]]
  )


;; is point on line?
;; how far is point from line?

(comment
  ;; aax + by = c, [a b c]
  ;; line equation: x + y = 1
  ;; line between two points [p1 p2]
  ;; [p1 p2] = [e1 e2]
  ;; line triple: [1 1 1]
  ;; p1 = [1 0] p2 = [0 1]
  
  (defn is-on-line [line-triple]
    (fn [point]
      (let [[x y] point
            [a b c] line-triple]
        (== (+ (* a x) (* b y)) c))))

  (let [m (param-line [e1 e2])
        chk-fn (is-on-line [1 1 1])
        ts [0 1 (/ 2) 2 -2]
        test-points (map m ts)]
    (every? true? (map chk-fn test-points)))
  )
