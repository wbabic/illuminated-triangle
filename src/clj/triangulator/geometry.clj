(ns triangulator.geometry
  (:require [clojure.core.matrix :as m])
  (:require [clojure.core.matrix.operators :as o]))

(def pi Math/PI)
(def tau (* 2 pi))
(def origin [0 0])
(def e1 [1 0])
(def e2 [0 1])

(def root2 (Math/sqrt 2))
(def root3 (Math/sqrt 3))

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

(defn degrees [rad]
  (* (/ 180 pi) rad))

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

(defn sub
  "difference of two vectors"
  [P Q]
  (add P (scal-mult (- 1) Q)))

(defn distance
  "distance between two points"
  [P Q]
  (length (sub P Q)))

(defn mult
  "multiply a natrix and a vector (or matrix)"
  [m v]
  (m/mmul m v))

(defn inverse
  "return the invers of given matrix"
  [m]
  (m/inverse m))

(defn equals
  ([m n] (o/== m n))
  ([m n epsilon] (o/== m n epsilon)))

(defn almost-equals [x y epsilon]
  (< (Math/abs (- x y)) epsilon))

(defn det [t]
  (m/det t))
