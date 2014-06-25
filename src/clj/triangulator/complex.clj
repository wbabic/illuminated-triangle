(ns triangulator.complex
  (:require [triangulator.protocols :as p]
            [triangulator.geometry :as geom]))

;; inspired by Deux
;; introduction to the geometry of complex numbers

;; fundamental operations
;; fundamental transformations

(defrecord complex [x y]
   p/Complex
   (angle [z] (Math/atan2 (:x z) (:y z)))
   (length [z] (let [x (:x z)
                     y (:y z)]
                 (Math/sqrt (+ (* x x)
                               (* y y)))))
   (coords [z] [(:x z) (:y z)])
   (add [z w] (let [[x1 y1] [(:x z) (:y z)]
                    [x2 y2] (p/coords w)]
                (->complex (+ x1 x2) (+ y1 y2))))
   (scale-mult [z k] (let [[x1 y1] [(:x z) (:y z)]]
                       (->complex (* k x1) (* k y1))))
   (multiply [z w] (let [[x1 y1] [(:x z) (:y z)]
                         [x2 y2] (p/coords w)]
                     (->complex (- (* x1 x2) (* y1 y2))
                                (+ (* x1 y2) (* x2 y1)))))
   (minus [z] (let [[x y] [(:x z) (:y z)]]
                (->complex (- x) (- y))))
   (div [z] (let [[x y] [(:x z) (:y z)]
                  k (+ (* x x) (* y y))
                  ki (/ k)
                  b (->complex x (- y))]
              (p/scale-mult
               b
               ki)))
   (conjugate [z] (->complex (:x z) (- (:y z)))))

(defn make-rect [point]
  (->complex (first point) (second point)))

(comment
  (let [e1 (make-rect [1 0])
        e2 (make-rect [0 1])]
    [(p/length e1) (p/angle e1) (p/add e1 e2) (p/multiply e1 e2)])

  (p/coords (make-rect [1 0]))
  )

(defn mod-tau [x]
     (mod x geom/tau))

(defrecord polar [length angle]
  p/Complex
  (length [z] (:length z))
  (angle [z] (:angle z))
  (coords [z] (let [r (:length z)
                    c (Math/cos (:angle z))
                    s (Math/sin (:angle z))]
                [(* r c)
                 (* r s)]))
  (add [z w] (p/add (make-rect (p/coords z)) w))
  (scale-mult [z k] (let [r (:length z)
                          a (:angle z)]
                      (->polar (* k r) a)))
  (multiply [z w] (let [r1 (:length z)
                        a1 (:angle z)
                        r2 (p/length w)
                        a2 (p/angle w)]
                    (->polar (* r1 r2) (+ a1 a2))))
  (minus [z] (let [l (:length z)
                   a (:angle z)]
               (->polar l (mod-tau (+ a geom/pi)))))
  (div [z]
    (let [l (:length z)
          a (:angle z)]
      (->polar (/ l) (mod-tau (- a)))))
  (conjugate [z] (->polar (:length z) (- (:angle z)))))

(declare zero)

(defn make-polar [r a]
  (if (geom/almost-equals r 0 (/ 1e10))
    zero
    (->polar r a)))

(defn scalar-product [z w]
  (let [p1 (p/coords z)
        p2 (p/coords w)]
    (geom/dot p1 p2)))


(comment
  (let [e1 (make-polar 1 0)
        e2 (make-polar 1 (* (/ 4) geom/tau))]
    [(p/angle e1) (p/angle e2)])

  (p/multiply (make-rect [0 1]) (make-rect [0 1]))
  (p/multiply (make-polar 1 (* (/ 2) geom/tau)) (make-rect [0 1]))
  (let [z (make-rect [1 0])
        w (make-polar 1 (* (/ 4) geom/tau))]
    (geom/almost-equals 0 (scalar-product z w) (/ 1e10)))
  ;;=> true
  )

;; special complex numbers
(def one
  (reify
    p/Complex
    (length [_] 1)
    (angle [_] 0)
    (coords [_] [1 0])
    (add [_ z] (if (identical? z one)
                 (->complex 2 0)
                 (p/add z one)))
    (scale-mult [_ k] (->complex k 0))
    (multiply [_ w] w)
    (minus [_] (->complex -1 0))
    (div [_] one)
    (conjugate [_] one)))

(def infinity
  (reify
    p/Complex
    (div [_] zero)
    (multiply [_ _] infinity)
    (scale-mult [_ _] infinity)
    (add [_ _] infinity)))

(def zero
  (reify
    p/Complex
    (length [_] 0)
    (coords [_] [0 0])
    (add [_ w] w)
    (scale-mult [_ _] zero)
    (multiply [_ _] zero)
    (div [_] infinity)
    (conjugate [_] zero)))

(comment
  (p/length one)
  (p/angle one)
  (p/multiply one (make-polar 4 0))
  (p/coords one)
  (p/minus one)
  (identical? (p/div one) one)
  (p/add one one)
  (p/add one (make-rect [4 0]))
  (p/add one (make-polar 4 0))

  (identical? infinity (p/div zero))
  (identical? zero (p/div infinity))
  (p/coords (p/multiply zero one))
  (p/coords (p/multiply one zero))
  (identical? zero (p/multiply zero (make-rect [100 200])))
  (geom/equals (p/coords zero) (p/coords (p/multiply (make-rect [100 200]) zero)))
  
  )


;; transformations
;; translation rotation homothety reflection inversion
;; product of two transformations

;; a transformation is a mapping of the complex plane

;; identity is already defined in clojure.core

(defn translation
  "returns the function tat translates by given vector"
  [a]
  (fn [z] (p/add z a)))

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
          rz (p/multiply z r)
          res (p/add rz (p/multiply a (p/add one (p/minus r))))]
      res)))

(comment
  (p/multiply (make-polar 1 0) (make-rect [0 0]))
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
        coords (p/coords res)]
    [(geom/equals [0 1] coords (/ 1e10))
     (geom/almost-equals 0  (first coords) (/ 1e16))
     (== 1 (second coords))])


  (let [point [(/ 2) (/ 2)]
        angle geom/pi
        rot (rotation point angle)
        res (rot (make-rect [1 0]))
        coords (p/coords (rot (make-rect [1 0])))]
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
        ma (p/minus a)
        _ (println ma)]
    (fn [z] (p/add a
                  (p/scale-mult
                   (p/add z ma)
                   k)))))

(comment
  (let [h (homothety [0 0] 1)
        p (make-rect [1 1])
        res (h p)
        coords (p/coords res)]
    coords)
  ;;=> [1 1]

  (let [h (homothety [0 0] 2)
        p (make-rect [1 1])
        res (h p)
        coords (p/coords res)]
    coords)
  ;;=> [2 2]

  (let [h (homothety [1 1] 2)
        p (make-rect [2 2])
        res (h p)
        coords (p/coords res)]
    coords)
  ;;=> [3 3]

  (let [h (homothety [1 1] -2)
        p (make-rect [2 2])
        res (h p)
        coords (p/coords res)]
    coords)
  ;;=> [-1 -1]
  
  )


;; reflection
;; symmetry in a line
(defn reflection
  "return reflection in line through a and b"
  [a b]
  (fn [z]
    (let [ac (p/conjugate a)
          bc (p/conjugate b)
          denom (p/div (p/add ac (p/minus bc)))
          t1 (p/add a (p/minus b))
          t2 (p/add (p/multiply a bc)
                    (p/minus (p/multiply ac b)))
          zc (p/conjugate z)]
      (p/multiply denom
                  (p/add (p/multiply t1 zc) (p/minus t2))))))


(comment
  (let [ref (reflection (make-rect [0 0]) (make-rect [1 0]))]
    (mapv p/coords [(ref (make-rect [1 -1]))
                    (ref (make-rect [1 0]))]))

  (let [ref (reflection (make-rect [0 0]) (make-rect [1 1]))]
    (mapv p/coords [(ref (make-rect [1 -1]))
                    (ref (make-rect [1 0]))]))
  
  )


;; inverion in a circle
;; center plus power over (zbar minus centerbar)
;; todo: put into latex for visual representation of equation
(defn inversion
  "inversion in center with power"
  [center power]
  (fn [z] 
    (let [cbar (p/conjugate center)
          zc (p/conjugate z)
          ;; denom = one over (zbar minus mbar)
          denom (p/div (p/add zc (p/minus cbar)))
          term1 (p/scale-mult denom power)
          res (p/add center term1)]
      res)))


(comment
  (clojure.pprint/pprint
   (let [inv (inversion (make-rect [1 1]) 1)
         f (fn [p] (p/coords
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
        f (comp p/coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))

  ;; two translations
  (let [r1 (translation (make-rect [1 1]))
        r2 (translation (make-rect [1 2]))
        pre-image [[0 0] [1 0] [0 1]]
        f (comp p/coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))
  ;;=> {[0 1] [2 4], [1 0] [3 3], [0 0] [2 3]}
  )

(comment
  ;; two rotations
  (let [r1 (rotation [1 1] (/ geom/tau 4))
        r2 (rotation [0 0] (/ geom/tau 4))
        pre-image [[0 0] [1 0] [0 1]]
        f (comp p/coords r2 r1 make-rect)
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
        f (comp p/coords r2 r1 make-rect)
        image (mapv f pre-image)]
    (zipmap pre-image image))
  ;;=> {[1 1] [-1 -1], [1 0] [-1 0]}
  
)
