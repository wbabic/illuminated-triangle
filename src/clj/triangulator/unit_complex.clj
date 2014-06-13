(ns triangulator.unit-complex
  (:require [triangulator.geometry :as geom]))

(def ratios (map (fn [i] (* (/ 24) i)) (range 24)))

(def angles (map (fn [i] (* geom/tau (/ 24) i)) ratios))

(defn plus-24 [a b]
  (mod (+ a b) 24))

(defn plus-1 [a b]
  (mod (+ a b) 1))

(defn add-24th [x] (plus-1 x (/ 1 24)))

(def twenty-fourths (vec (take 24 (iterate add-24th 0))))

(def ratio->int
  (zipmap twenty-fourths (range 24)))

(def int->ratio
  (zipmap (range 24) twenty-fourths))

(defn ratio->point [ratio]
  (let [angle (* geom/tau ratio)]
    (cond
     (= (/ 4) ratio) [0 1]
     (= (/ 2) ratio) [-1 0]
     (= (/ 3 4) ratio) [0 -1]
     :else
     [(Math/cos angle) (Math/sin angle)])))

(def ratio->point-map (zipmap (range 24) (map ratio->point ratios)))

(comment
  (ratio->int (/ 0 24))
  ;;=> 0
  (ratio->int (/ 1 24))
  ;;=> 1
  (ratio->int (/ 23 24))
  ;;=> 23
  (ratio->int (mod (/ 24 24) 1))
  ;;=> 0

  (int->ratio 3)
  ;;=> 1/8
  (int->ratio 5)
  ;;=> 5/24

  (ratio->point-map 0)
  (geom/equals [0 1] (ratio->point-map 6))

  (geom/almost-equals 0 (first (ratio->point-map 6)) (/ 10e15))

  (geom/almost-equals 0 (* (first (ratio->point-map 6)) 100) (/ 10e15)) 

  (ratio->point-map 0) 
  (ratio->point-map 6)
  (ratio->point-map 12)
  (ratio->point-map 18)
  )

(comment
  (plus-24 1 23)
  ;;=> 0
  (plus-24 2 24)
  ;;=>2

  (plus-1 (/ 8) (/ 8))
  ;;=> 1/4

  (add-24th 1)
  
  (take 6 (iterate add-24th 0))
  ;;=> (0 1/24 1/12 1/8 1/6 5/24)

  (twenty-fourths 5)
  ;;=> 5/24

  (twenty-fourths (plus-24 2 24))
  ;;=> 1/12
  
  (take 25 (iterate (fn [x] (plus-24 1 x)) 0))
  ;;=> (0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 0)

  )

(defprotocol Complex
  "A protocol for complex numbers"
  (length [x])
  (angle [x])
  (coords [x])
  (multiply [z w]))

(declare unit-complex-map)

(defrecord unit-complex [ratio]
  Complex
  (angle [this]
    (* geom/tau ratio))
  (coords [this]
    (let [i (ratio->int ratio)]
      (ratio->point-map i)))
  (multiply [this other]
    (let [other-ratio (:ratio other)
          new-ratio (plus-1 ratio other-ratio)]
      (unit-complex-map new-ratio)))
  (length [this] 1))

(defn unit [ratio]
  (->unit-complex ratio))

(def unit-complex-map
    (zipmap
     twenty-fourths
     (map unit twenty-fourths)))

(comment
  (def z1 (unit (/ 1 8)))
  (def z2 (unit (/ 1 4)))
  (== 45 (geom/degrees (angle z1)))
  (== 90 (geom/degrees (angle z2)))

  (:ratio z1)
  ;;  (geom/equals [(/ geom/root2 2) (/ geom/root2 2)] (coords z1) (/ 10e5))

  (:ratio (multiply z1 z2))

  (= z1 (get unit-complex-map (/ 8)))

  (identical? (get unit-complex-map (/ 3 8))
              (multiply z1 z2))

  (angle z1)
  (length z1)
  )

