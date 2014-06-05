(ns triangulator.geometry-test
  (:require [clojure.test :refer :all])
  (:use [triangulator.geometry]))

(deftest test-equals
  (is (equals [1 0] [1.0 0.0]))
  (is (equals [[1 0] [0 1]] [[1.0 0.0] [0.0 1.0]])))

(deftest test-dot
  (let [v [2 3]
        w [4 5]]
    (is (== (dot v w) 23))
    (is (== 0 (dot v (perp v))))))

(deftest test-scal-mult
  (let [v [1 2]]
    (is (equals [2 4] (scal-mult 2 v)))
    (is (equals [[2 4] [2 4]] (scal-mult 2 [v v])))))

(deftest test-length
  (let [v [1 2]]
    (is (== 5 (dot v v)))
    (is (== (Math/sqrt 5) (length v)))
    (is (== 1 (length [1 0])))))

(deftest test-add
  (let [v [1 2]
        w [3 4]
        m [v w]]
    (is (equals [4 6] (add v w)))
    (is (equals [[2 4] [6 8]] (add m m)))))

(deftest test-mult
  (let [v [1 2]
        w [3 4]
        m [v w]]
    (is (equals [5 11] (mult m v)))
    (is (equals [[7 10] [15 22]] (mult m m)))))

(deftest test-distance
  (let [e1 [1 0]
        e2 [0 1]
        root2 (Math/sqrt 2)]
    (is (== root2 (distance e1 e2)))))
