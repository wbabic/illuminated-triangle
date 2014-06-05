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


(comment
  (def v [1 2])
  (perp v)
  (== 0 (dot v (perp v)))
  ;; test for any 2d vector d

  )


(defn dim
  "dimension of a vector"
  [v]
  (count v))

(defn scal-mult
  "scalar multiplication of scalar and vector"
  [scalar vector]
  (o/* vector scalar))

(comment
  (scal-mult 2 v)
  ;;=> [2 4]
  (scal-mult 2 [v v])
  ;;=> [[2 4] [2 4]]
  )

(comment

  (dim v)
  ;;=> 2
  (dim [v v])
  )

(defn length
  "length of a vector"
  [v]
  (Math/sqrt (dot v v)))

(comment
  (dot v v)
  ;;=> 5
  (length v)
  ;;=> 2.23606797749979
  (* (length v) (length v))
  ;;=> 5.000000000000001
  
  (length [1 0])
  ;;=> 1.0
  
  )

(defn add
  "add two matrices"
  [u v]
  (o/+ u v))

(defn mult
  "multiply a natrix and a vector (or matrix)"
  [m v]
  (m/mmul m v))


(comment
  (def m [[1 2] [3 4]])

  (mult m v)
  ;;=> [5 11]
  (mult m m)
  ;;=> [[7 10] [15 22]]
  )

(defn inverse
  "return the invers of given matrix"
  [m]
  (m/inverse m))
