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

(defn angle [v]
  (let [[x y] v]
    (Math/atan2 y x)))

(defn from-polar[r a]
  [(* r (Math/cos a)) (* r (Math/sin a))])

(defn normalize [v]
  (let [l (length v)]
    (scal-mult (/ l) v)))

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

(comment
  (let [deg->rad (fn [deg] (* deg (/ tau 360)))
        u (from-polar 4 (deg->rad 82))
        v (from-polar 6 (deg->rad 62))]
    [u v (sub u v)])
  ;;=> [[0.5566924038402619 3.9610722749662814] [2.8168293767153454 5.297685557153561] [-2.2601369728750837 -1.3366132821872796]]

  (let [deg->rad (fn [deg] (* deg (/ tau 360)))
        u (from-polar 6 (deg->rad 310))
        v (from-polar 2 (deg->rad 45))]
    [u v (sub u v)])
  ;;=> [[3.8567256581192355 -4.596266658713869] [1.4142135623730951 1.414213562373095] [2.4425120957461406 -6.010480221086964]]


  (let [deg->rad (fn [deg] (* deg (/ tau 360)))
        u (from-polar 8 (deg->rad 44))
        v (from-polar 7 (deg->rad 200))
        w (from-polar 6 (deg->rad 20))
        lu (length u)
        lv (length v)
        lw (length w)]
    [[lu lv lw]
     [(+ lv lw) (length (sub w v)) (length (sub v w))]
     [(+ lu lv) (length (add (scal-mult -1 u) (scal-mult -1 v)))]
     [(+ lw lu) (length (sub w v))]])
  
  (defn deg->rad [deg] (* deg (/ tau 360)))
  (degrees (deg->rad 82))

  (let [v [4 1]
        w [0 3]
        wv (add v w)]
    [[v w wv]
     [(length wv) (angle wv) (degrees (angle wv))]]
    )

  (let [u (from-polar 8 269)
        v (from-polar 13 89)
        w (from-polar 6 224)
        uv (add u v)
        upv (add u v)
        wpv (add w v)
        wpu (add w u)
        wmu (sub w u)
        lu (length u)
        lv (length v)
        lw (length w)]
    [[u v w]
     [lu lv lw]])
  )
