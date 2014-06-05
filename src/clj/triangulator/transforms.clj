(ns triangulator.transforms
  (:require [triangulator.geometry :as geom]))


;; projection reflection
;; rotation dilation
;; conjugate

;; 2x2 matrices

(def I [[1 0] [0 1]])

(comment
  (geom/mult I [3 4])
  ;;=> [3 4]
  (geom/add I I)
  ;;=> [[2 0] [0 2]]
  )

(defn projection
  "return matrix that projects along line through u"
  [u]
  (let [[x y] u
        ds (geom/dot u u)
        xs (* x x)
        ys (* y y)
        xy (* x y)
        m [[xs xy] [xy ys]]]
    (geom/scal-mult (/ ds) m)))

(comment
  (projection [1 1])
  (geom/mult (projection [1 1]) [1 0])
  ;;=> [1/2 1/2]
  )

(defn reflection
  "return matrix of reflection along line u"
  [u]
  (let [p (projection u)]
    (geom/add (geom/scal-mult 2 p) (geom/scal-mult -1 I))))


(comment
  (reflection [1 1])
  (geom/mult (reflection [1 1]) [1 0])
  ;;=> [0N 1N]

  )

(defn rotation
  "return matrix of roation about origin by alpha"
  [alpha]
  (let [c (Math/cos alpha)
        s (Math/sin alpha)]
    [[c s] [(- s) c]]))

(comment
  (rotation (/ geom/tau 4))
  (geom/mult (rotation (/ geom/tau 4)) [1 0])
  ;;=> [6.123233995736766E-17 -1.0]

  )
