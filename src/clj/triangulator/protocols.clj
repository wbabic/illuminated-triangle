(ns triangulator.protocols)

;; define protocols for

;; complex numbers

(defprotocol Complex
  "A protocol for complex numbers"
  (length [z])
  (angle [z])
  (coords [z])
  (add [z w])
  (scale-mult [z k])
  (multiply [z w])
  (minus [z])
  (div [z])
  (conjugate [z]))


;; geometric data structures
;; contain the info need to render itself
;; in a canvas
;; in a div
;; as text
;; as svg

;; able to be composed
(defrecord Point [geom style label])

(defrecord Line [geom style label])

(def p1 (Point. [1 0] {:color :red} "A"))
(def p2 (Point. [0 1] {:color :green} "B"))

(def l (Line. [p1 p2] {:color :blue} "l"))
(map :label (:geom l))

;; a vector space
;; a set with
;; addition, scalar multiplication
;; satisfying the following  properties ...
;; an optional inner product
;; derive length, angle, distance

;; group
;; matrix group
;; acting on a vector space

;; a field
;; 0 1 + *
;; properties
(comment 
  ;; vectors  have dimensionality 1 and shape 2 3 or 4
  (defprotocol Vector
    (dim this)
    (dot this other)
    (add this other)
    (scal-mult this scalar))

  ;; invertible 2x2 3x3 4x4 matrices
  ;; matrices have dimensionality 2
  ;; shape [2 2] [3 3] [4 4]
  (defprotocol Matrix
    (det this)
    (inverse this)
    (scal-mult this scalar)
    (m-mult this other-matrix)
    (v-mult this vector)
    )

  (defprotocol Geometry
    (matrix this r1 r2)
    (vector this x y)
    (mv-mul this m v)
    (mm-mul this m1 m2)
    (scal-mul this r)
    (dot this other))

  (defprotocol VectorSpace
    (vector-addition this v w)
    (scalar-multiplication this r v)
    (zero this)
    (inverse this v)
    (dot this v w))

  ;; field  of scalars
  ;; integers rationals doubles
  ;; complex number

  ;; addition scalar-mutiplication product
  ;; additive identity -> zero
  ;; multiplicative identity -> one
  (comment
    (== x (add zero x))
    (== z (mult one x))
    )

  ;; vector matrix
  ;; complex number


  (comment
    ;; properties of a vector space
    ;; set V
    ;; P,Q in V => (+ P Q) is in V
    (=  (+ (+ P Q) R)
        (+ P (+ Q R))) 

    ;; 0
    (=  (+ zero P)
        (+ P zero)
        P)
    (= (+ P Q)
       (+ Q P))
    ;; rP in V for all r in R P in V

    (=  (* (+ r s) P)
        (+ (* r P) (* s P)))

    (= (* r (+ P Q))
       (+ (* r P) (* r Q)))

    (= (* 1 P) P)

    ;; linerar combinatio of vectors
    )
  )
