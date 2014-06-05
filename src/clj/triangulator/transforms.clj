(ns triangulator.transforms
  (:require [triangulator.geometry :as geom]))

;; projection reflection
;; rotation dilation
;; conjugate

;; 2x2 matrices

(def I [[1 0] [0 1]])

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

(defn reflection
  "return matrix of reflection along line u"
  [u]
  (let [p (projection u)]
    (geom/add (geom/scal-mult 2 p) (geom/scal-mult -1 I))))

(defn rotation
  "return matrix of roation about origin by alpha"
  [alpha]
  (let [c (Math/cos alpha)
        s (Math/sin alpha)]
    [[c s] [(- s) c]]))
