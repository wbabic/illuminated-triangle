(ns triangulator.transforms-test
  (:require [clojure.test :refer :all])
  (:require [clojure.core.matrix :as m])
  (:require [clojure.core.matrix.operators :as o])
  (:use [triangulator.geometry])
  (:use [triangulator.geometry.transforms]))

(defn equals
  ([m n] (o/== m n))
  ([m n epsilon] (o/== m n epsilon)))

(defn almost-equals [x y epsilon]
  (< (Math/abs (- x y)) epsilon))

(deftest test-equals
  (is (equals [1 0] [1.0 0.0]))
  (is (equals [[1 0] [0 1]] [[1.0 0.0] [0.0 1.0]])))

(deftest test-projection
  (let [p [1 1]
        proj (projection p)]
    (is (equals [(/ 2) (/ 2)] (mvmult proj [1 0])))))

(comment
  (deftest test-reflection
    (let [r (reflection 1 1)
          _ (println r)
          e1 [1 0]
          e2 [0 1]]
      (is (equals e2 (mvmult r e1))))))

(deftest test-rotation
  (let [e1 [1 0]
        e2 [0 1]
        r (rotation (/ tau 4))
        result (mvmult r e2)
        [x y] result
        epsilon (/ 1e10)]
    (is (almost-equals x 1 epsilon))
    (is (almost-equals y 0 epsilon))))

(comment
  (let [e1 [1 0]
        e2 [0 1]
        [e1 e2]]))

(comment
  (run-tests 'triangulator.transforms-test)
  )
