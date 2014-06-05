(ns triangulator.geometry
  (:require [clojure.core.matrix :as m])
  (:require [clojure.core.matrix.operators :as o]))

(def pi Math/PI)
(def tau (* 2 pi))

;; implementation using PersistentVector
;; and core.matrix array programming

;; m for clojure.core.matrix
;; o for clojure.core.matrix operators

(defn dot
  "dot product of two vectors"
  [v w]
  (m/mmul v w))

(defn perp [[x y]]
  [(- y) x])

(defn scal-mult
  "scalar multiplication of scalar and vector"
  [scalar vector]
  (o/* vector scalar))

(defn length
  "length of a vector"
  [v]
  (Math/sqrt (dot v v)))

(defn add
  "add two matrices"
  [u v]
  (o/+ u v))

(defn mult
  "multiply a natrix and a vector (or matrix)"
  [m v]
  (m/mmul m v))

(defn inverse
  "return the invers of given matrix"
  [m]
  (m/inverse m))

(defn equals [m n] (o/== m n))
