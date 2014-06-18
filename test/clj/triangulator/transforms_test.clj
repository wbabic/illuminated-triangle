(ns triangulator.transforms-test
  (:require [clojure.test :refer :all])
  (:use [triangulator.geometry])
  (:use [triangulator.transforms]))

(deftest test-equals
  (is (equals [1 0] [1.0 0.0]))
  (is (equals [[1 0] [0 1]] [[1.0 0.0] [0.0 1.0]])))

(deftest test-projection
  (let [p [1 1]
        proj (projection p)]
    (is (equals [(/ 2) (/ 2)] (mult proj [1 0])))))

(deftest test-reflection
  (let [r (reflection [1 1])
        e1 [1 0]
        e2 [0 1]]
    (is (equals e2 (mult r e1)))))

(deftest test-rotation
  (let [e1 [1 0]
        e2 [0 1]
        r (rotation (/ tau 4))
        result (mult r e2)
        [x y] result
        epsilon (/ 1e10)]
    (is (almost-equals x 1 epsilon))
    (is (almost-equals y 0 epsilon))))

(comment
  (let [e1 [1 0]
        e2 [0 1]
        [e1 e2]]))
