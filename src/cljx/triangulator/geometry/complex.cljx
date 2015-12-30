(ns triangulator.geometry.complex
  (:require [triangulator.geometry :as geom]))

;; inspired by Deux
;; introduction to the geometry of complex numbers

;; fundamental operations
;; fundamental transformations

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

(defrecord complex [x y]
   Complex
   (angle [z] (Math/atan2 (:x z) (:y z)))
   (length [z] (let [x (:x z)
                     y (:y z)]
                 (Math/sqrt (+ (* x x)
                               (* y y)))))
   (coords [z] [(:x z) (:y z)])
   (add [z w] (let [[x1 y1] [(:x z) (:y z)]
                    [x2 y2] (coords w)]
                (complex. (+ x1 x2) (+ y1 y2))))
   (scale-mult [z k] (let [[x1 y1] [(:x z) (:y z)]]
                       (complex. (* k x1) (* k y1))))
   (multiply [z w] (let [[x1 y1] [(:x z) (:y z)]
                         [x2 y2] (coords w)]
                     (complex. (- (* x1 x2) (* y1 y2))
                                (+ (* x1 y2) (* x2 y1)))))
   (minus [z] (let [[x y] [(:x z) (:y z)]]
                (complex. (- x) (- y))))
   (div [z] (let [[x y] [(:x z) (:y z)]
                  k (+ (* x x) (* y y))
                  ki (/ k)
                  b (complex. x (- y))]
              (scale-mult
               b
               ki)))
   (conjugate [z] (complex. (:x z) (- (:y z)))))

(defn make-rect [point]
  (complex. (first point) (second point)))

(comment
  (let [e1 (make-rect [1 0])
        e2 (make-rect [0 1])]
    [(length e1) (angle e1) (add e1 e2) (multiply e1 e2)])

  (coords (make-rect [1 0]))
  )

(defn mod-tau [x]
     (mod x geom/tau))

(defrecord polar [length angle]
  Complex
  (length [z] (:length z))
  (angle [z] (:angle z))
  (coords [z] (let [r (:length z)
                    c (Math/cos (:angle z))
                    s (Math/sin (:angle z))]
                [(* r c)
                 (* r s)]))
  (add [z w] (add (make-rect (coords z)) w))
  (scale-mult [z k] (let [r (:length z)
                          a (:angle z)]
                      (polar. (* k r) a)))
  (multiply [z w] (let [r1 (:length z)
                        a1 (:angle z)
                        r2 (length w)
                        a2 (angle w)]
                    (polar. (* r1 r2) (+ a1 a2))))
  (minus [z] (let [l (:length z)
                   a (:angle z)]
               (polar. l (mod-tau (+ a geom/pi)))))
  (div [z]
    (let [l (:length z)
          a (:angle z)]
      (polar. (/ l) (mod-tau (- a)))))
  (conjugate [z] (polar. (:length z) (- (:angle z)))))

(declare zero)

(defn make-polar [r a]
  (polar. r a))

(defn scalar-product [z w]
  (let [p1 (coords z)
        p2 (coords w)]
    (geom/dot p1 p2)))

(comment
  (let [e1 (make-polar 1 0)
        e2 (make-polar 1 (/ geom/tau 4) )]
    [(angle e1) (angle e2)])

  (multiply (make-rect [0 1]) (make-rect [0 1]))
  (multiply (make-polar 1 (/ geom/tau 2)) (make-rect [0 1]))
  (let [z (make-rect [1 0])
        w (make-polar 1 (* (/ 4) geom/tau))]
    (geom/almost-equals 0 (scalar-product z w) (/ 1e10)))
  ;;=> true
  )

;; special complex numbers
(def one
  (reify
    Complex
    (length [_] 1)
    (angle [_] 0)
    (coords [_] [1 0])
    (add [_ z] (add z (complex. 1 0)))
    (scale-mult [_ k] (complex. k 0))
    (multiply [_ w] w)
    (minus [_] (complex. -1 0))
    (div [this] this)
    (conjugate [this] this)))

(def infinity
  (reify
    Complex
    (div [_] zero)
    (multiply [this _] this)
    (scale-mult [this _] this)
    (add [this _] this)))

(def zero
  (reify
    Complex
    (length [_] 0)
    (coords [_] [0 0])
    (add [_ w] w)
    (scale-mult [this _] this)
    (multiply [this _] this)
    (div [_] infinity)
    (conjugate [_] zero)))

(comment
  (length one)
  (angle one)
  (multiply one (make-polar 4 0))
  (coords one)
  (minus one)
  (identical? (div one) one)
  (add one one)
  (add one (make-rect [4 0]))
  (add one (make-polar 4 0))

  (identical? infinity (div zero))
  (identical? zero (div infinity))
  (coords (multiply zero one))
  (coords (multiply one zero))
  (identical? zero (multiply zero (make-rect [100 200])))
  (geom/equals (coords zero) (coords (multiply (make-rect [100 200]) zero)))

  )


;; transformations
;; translation rotation homothety reflection inversion
;; product of two transformations

;; a transformation is a mapping of the complex plane

;; identity is already defined in clojure.core

(defn translation
  "returns the function that translates by given vector"
  [a]
  (fn [z] (let [z (make-rect z)
               a (make-rect a)
               res (add z a)]
           (coords res))))

(comment
  (let [t (translation (make-rect [1 1]))
        pi (make-rect [0 0])
        i (t pi)]
    [pi i])

  )

(defn rotation
  "return the function that rotates counter clockwise
by given angle about given point"
  [point angle]
  (fn [z]
    (let [r (make-polar 1 angle)
          a (make-rect point)
          z (make-rect z)
          rz (multiply z r)
          res (add rz (multiply a (add one (minus r))))]
      (coords res))))

(comment
  (multiply (make-polar 1 0) (make-rect [0 0]))
  (identical? zero (make-polar 0 geom/tau))
  (identical? zero (make-polar (/ 1e9) geom/tau))
  ;;=> false
  (identical? zero (make-polar (/ 1e10) geom/tau))
  ;;=> false
  (identical? zero (make-polar (/ 1e11) geom/tau))
  ;;=> true

  ((rotation [0 0] 0) (make-rect [1 0]))
  ;;=> #triangulator.complex.complex{:x 0.0, :y 0.0}

  ;; pure rotation about origin
  (let [point [0 0]
        angle (* (/ 4) geom/tau)
        rot (rotation point angle)
        res (rot (make-rect [1 0]))
        coords (coords res)]
    [(geom/equals [0 1] coords (/ 1e10))
     (geom/almost-equals 0  (first coords) (/ 1e16))
     (== 1 (second coords))])

  (let [point [(/ 2) (/ 2)]
        angle geom/pi
        rot (rotation point angle)
        res (rot (make-rect [1 0]))
        coords (coords (rot (make-rect [1 0])))]
    [res
     ;(geom/equals [0 1] coords (/ 1e10))
     (geom/almost-equals 0 (first coords) (/ 1e10))
     (geom/almost-equals 1 (second coords) (/ 1e10))])

  )

;; homothety
(defn homothety
  "return homothety about point by factor"
  [point k]
  (let [a (make-rect point)
        ma (minus a)]
    (fn [z] (let [z (make-rect z)
                 res (add a
                            (scale-mult
                             (add z ma)
                             k))]
             (coords res)))))

(comment
  (let [h (homothety [0 0] 1)
        p (make-rect [1 1])
        res (h p)
        coords (coords res)]
    coords)
  ;;=> [1 1]

  (let [h (homothety [0 0] 2)
        p (make-rect [1 1])
        res (h p)
        coords (coords res)]
    coords)
  ;;=> [2 2]

  (let [h (homothety [1 1] 2)
        p (make-rect [2 2])
        res (h p)
        coords (coords res)]
    coords)
  ;;=> [3 3]

  (let [h (homothety [1 1] -2)
        p (make-rect [2 2])
        res (h p)
        coords (coords res)]
    coords)
  ;;=> [-1 -1]

  )


;; reflection
;; symmetry in a line
(defn reflection
  "return reflection in line through a and b"
  [a b]
  (fn [z]
    (let [ac (conjugate a)
          bc (conjugate b)
          denom (div (add ac (minus bc)))
          t1 (add a (minus b))
          t2 (add (multiply a bc)
                    (minus (multiply ac b)))
          zc (conjugate z)]
      (multiply denom
                  (add (multiply t1 zc) (minus t2))))))


(comment
  (let [ref (reflection (make-rect [0 0]) (make-rect [1 0]))]
    (mapv coords [(ref (make-rect [1 -1]))
                    (ref (make-rect [1 0]))]))

  (let [ref (reflection (make-rect [0 0]) (make-rect [1 1]))]
    (mapv coords [(ref (make-rect [1 -1]))
                    (ref (make-rect [1 0]))]))

  )


;; inverion in a circle
;; center plus power over (zbar minus centerbar)
;; todo: put into latex for visual representation of equation
(defn inversion
  "inversion in center with power"
  [center power]
  (fn [z]
    (let [center (make-rect center)
          cbar (conjugate center)
          zbar (conjugate (make-rect z))
          ;; denom = one over (zbar minus mbar)
          denom (div (add zbar (minus cbar)))
          term1 (scale-mult denom (* power power))
          res (add center term1)]
      (coords res))))


(comment
  (clojure.pprint/pprint
   (let [inv (inversion (make-rect [1 1]) 1)
         f (fn [p] (coords
                   (inv (make-rect p))))
         pre-image [[1 -1] [1 (/ 2)] [1 0] [1 2] [2 2] [3 3] [0 0]]
         image (mapv f pre-image)]
     (zipmap pre-image image)))

  )

;; composition of transform
(comment
  ;; template
  (let [r1 ()
        r2 ()
        pre-image []
        f (comp coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))

  ;; two translations
  (let [r1 (translation (make-rect [1 1]))
        r2 (translation (make-rect [1 2]))
        pre-image [[0 0] [1 0] [0 1]]
        f (comp coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))
  ;;=> {[0 1] [2 4], [1 0] [3 3], [0 0] [2 3]}
  )

(comment
  ;; two rotations
  (let [r1 (rotation [1 1] (/ geom/tau 4))
        r2 (rotation [0 0] (/ geom/tau 4))
        pre-image [[0 0] [1 0] [0 1]]
        f (comp coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))
  ;;=>
{[0 1] [2.2204460492503128E-16 0.9999999999999998],
 [1 0] [-0.9999999999999997 1.9999999999999998],
 [0 0] [3.445092848397666E-16 1.9999999999999998]}

  )

(comment
  ;; two reflections
  (let [o (make-rect [0 0])
        e1 (make-rect [1 0])
        e2 (make-rect [0 1])
        r1 (reflection o e1)
        r2 (reflection o e2)
        pre-image [[1 0] [1 1]]
        f (comp coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))
  ;;=> {[1 1] [-1 -1], [1 0] [-1 0]}

)
