(ns triangulator.transforms
  (:require [triangulator.geometry :as geom]
            [triangulator.triangle :as tri]))

;; 2x2 matrices

(def I [[1 0] [0 1]])

(defn projection
  "return matrix that projects along line through u"
  [u]
  (let [[x y] u
        ds (geom/dot u u)
        xs (* x x)
        ys (* y y)
        xy (* x y)]
    [(geom/scal-mul (/ ds) [xs xy])
     (geom/scal-mul (/ ds) [xy ys])]))

(comment
  (defn reflection
    "return matrix of reflection along line u"
    [u]
    (let [p (projection u)]
      (geom/plus (geom/scal-mul 2 p) ))))

(defn reflection [A B]
    (fn [C]
      (let [D (tri/altitude A B C)
            E (geom/minus (geom/scal-mul 2 D) C)]
        E)))

(defn rotation
  "return matrix of roation about origin by alpha"
  [alpha]
  (let [c (Math/cos alpha)
        s (Math/sin alpha)]
    [[c s] [(- s) c]]))

(comment

  
  )

