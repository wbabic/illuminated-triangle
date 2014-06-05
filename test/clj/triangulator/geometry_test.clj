(ns triangulator.geometry-test
  (:require [clojure.test :refer :all])
  (:use [triangulator.geometry]))

(deftest test-fail
  (is (== 1.0 1)))

