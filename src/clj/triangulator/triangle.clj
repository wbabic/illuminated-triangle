(ns triangulator.triangle
  (:use [triangulator.geometry]))

(defn midpoint [P Q]
  (scal-mult (/ 2) (add P Q)))

(defn centroid [[A B C]]
  (scal-mult
   (/ 3)
   (add A (add B C))))

(comment
  (midpoint [1 0] [0 1])
  ;;=> [1/2 1/2]
  (centroid [[0 0] [1 0] [0 1]])
  ;;=> [1/3 1/3]
  
  )

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
        p (fn [a b ch]
            (if (or (== 0 a) (== 0 b))
              ""
              " + "))
        [a b c] coords]
    (str (t a "x") (p a b) (t b "y") " = " c)))

(comment
  ;; [a b c]
  ;; ax + by = c
  
  (line-coords [[1 0] [0 0]])
  ;;=> [0 1 0]
  (line-eq [0 1 0])
  ;;=> "y = 0"
  
  (line-coords [0 0] [1 0])
  ;;=> [0 -1 0]
  (line-eq [0 -1 0])
  ;;=> "-y = 0"
  
  (line-coords [[0 0] [0 1]])
  ;;=> [1 0 0]
  (line-eq [1 0 0])
  ;;=> "x = 0"

  (line-coords [[0 0] [1 1]])
  ;;=> [1 -1 0]
  (line-eq [1 -1 0])
  ;;=> "x + -y = 0"
  
  (line-coords [[1 0] [1 1]])
  ;;=> [1 0 1]
  (line-eq [1 0 1])
  ;;=> "x = 1"

  (line-coords [[1 0] [0 1]])
  ;;=> [1 1 1]
  (line-eq [1 1 1])
  ;;=> "x + y = 1"

  (line-coords [[0 1] [1 0]])
  ;;=> [-1 -1 -1]
  (line-eq [-1 -1 -1])
  ;;=> "-x + -y = -1"
  )

(defn segments
  "return the segments of the given triangle"
  [t]
  (mapv
   vec
   (take 3
         (partition 2 1 (drop 1 (cycle t))))))

(comment
 (segments [[0 0] [1 0] [0 1]])
 ;;=> [[[1 0] [0 1]] [[0 1] [0 0]] [[0 0] [1 0]]]
 )

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

(comment
  (perp-bisector [[0 0] [1 0]])
  ;;=> [[1/2 -1/2] [1/2 1/2]]

  (perp-bisector [[-1 0] [1 0]])
  ;;=> [[0N -1N] [0N 1N]]

  (perp-bisector [[1 0] [0 1]])
  ;;=> [[1N 1N] [0N 0N]]

  (distance [1 0] [0 1])
  ;;=> 1.4142135623730951

  ;;=> perp-bisector preserves distance and midpoints
  (let [p1 [1 0]
        p2 [0 1]
        [q1 q2] (perp-bisector [p1 p2])]
    [(== (distance p1 p2)
         (distance q1 q2))
     (equals (midpoint p1 p2)
             (midpoint q1 q2))])
  )

(defn param-line
  "given two endpoints return function
of parameteriezed line"
  [[P Q]]
  (let []
    (fn [t]
      (add P (scal-mult t (sub Q P))))))

(comment
  (let [e1 [1 0]
        e2 [0 1]
        p-line (param-line [e1 e2])
        m (midpoint e1 e2)]
    [(equals e1 (p-line 0))
     (equals e2 (p-line 1))
     (equals m (p-line (/ 2)))
     (p-line 2)
     (p-line -2)])
  ;;=> [true true true [-1 2] [3 -2]]

  (let [e1 [0 0]
        e2 [1 0]
        p-line (param-line [e1 e2])
        m (midpoint e1 e2)]
    [(equals e1 (p-line 0))
     (equals e2 (p-line 1))
     (equals m (p-line (/ 2)))
     (p-line 2)
     (p-line -2)])
    ;;=> [true true true [2 0] [-2 0]]
    
  )
