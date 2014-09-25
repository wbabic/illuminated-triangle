(ns triangulator.triangle-test
  (:require [clojure.test :refer :all])
  (:require [clojure.core.matrix :as m])
  (:require [clojure.core.matrix.operators :as o])  
  (:use [triangulator.geometry])
  (:use [triangulator.geometry.transforms])
  (:use [triangulator.geometry.triangle]))

(defn equals
  ([m n] (o/== m n))
  ([m n epsilon] (o/== m n epsilon)))

(defn almost-equals [x y epsilon]
  (< (Math/abs (- x y)) epsilon))

(deftest test-migpoint
  (is (equals [(/ 2) (/ 2)] (midpoint [1 0] [0 1]))))

(deftest test-centroid
  (is (equals [(/ 3) (/ 3)] (centroid [[0 0] [1 0] [0 1]]))))

(deftest test-line-coords
  (is (equals [0 1 0] (line-coords e1 origin))
      "line through [0 0] [1 0] has coords [0 1 0]")
  (is (equals [1 0 0] (line-coords origin e2))
      "line through [0 0] [0 1] has coords [1 0 0]")
  (is (equals [1 1 1] (line-coords e1 e2))
      "line through [1 0] [0 1] has coords [1 1 1]")
  (is (equals [1 0 1] (line-coords e1 [1 1]))
      "line through [1 0] [1 1] has coords [1 0 1]"))

(deftest test-segments
  (is (equals
       [[[1 0] [0 1]] [[0 1] [0 0]] [[0 0] [1 0]]]
       (segments [[0 0] [1 0] [0 1]]))))

(comment
  
  (deftest test-perp-bisector
    (is (equals
         [[1/2 -1/2] [1/2 1/2]]
         (first (perp-bisector [[0 0] [1 0]]))))
    (is (equals
         [[0 -1] [0 1]]
         (first (perp-bisector [[-1 0] [1 0]]))))
    (is (equals
         [[1 1] [0 0]]
         (first (perp-bisector [[1 0] [0 1]])))))

  (deftest test-perp-bisector-dist
    (let [p1 [1 0]
          p2 [0 1]
          [q1 q2] (first (perp-bisector [p1 p2]))]
      (is (== (distance p1 p2)
              (distance q1 q2)))
      (is (equals (midpoint p1 p2)
                  (midpoint q1 q2))))))

(deftest test-param-line
  (let [e1 [1 0]
        e2 [0 1]
        p-line (param-line e1 e2)
        m (midpoint e1 e2)]
    (is (equals e1 (p-line 0)))
    (is (equals e2 (p-line 1)))
    (is (equals m (p-line (/ 2))))
    (is (equals [-1 2] (p-line 2)))
    (is (equals [3 -2] (p-line -2)))))

(deftest test-param-line2
  (let [e1 [0 0]
        e2 [1 0]
        p-line (param-line e1 e2)
        m (midpoint e1 e2)]
    (is (equals e1 (p-line 0)))
    (is (equals e2 (p-line 1)))
    (is (equals m (p-line (/ 2))))
    (is (equals [2 0] (p-line 2)))
    (is (equals [-2 0] (p-line -2)))))

(comment
  (run-tests 'triangulator.triangle-test)
  )
