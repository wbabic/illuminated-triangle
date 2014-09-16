(ns triangulator.geometry.triangle
  (:require [triangulator.geometry :as geom]))

(defn segments
  "return the segments of the given triangle
given as a vector of vertices"
  [t]
  (mapv
   vec
   (take 3
         (partition 2 1 (drop 1 (cycle t))))))

(defn midpoints [segments]
  (mapv
   (fn [[P Q]] (geom/midpoint P Q))
   segments))

(defn altitude
  "return altitude from C to AB"
  [A B C]
  (let [b (geom/minus C A)
        c (geom/minus B A)
        t (/ (geom/dot b c) (geom/dot c c))]
    (geom/plus A (geom/scal-mul t c))))

(defn altitudes
  "return the feet altitudes of the triangle A B C
where the altitudes will be AD BE CF"
  [[A B C]]
  (let [D (altitude B C A)
        E (altitude C A B)
        F (altitude A B C)]
    [ D E F]))

(defn centroid
  "return the centroid of the three given points"
  [[A B C]]
  (geom/scal-mul
   (/ 3)
   (geom/plus A (geom/plus B C))))

(defn circumcenter
  "return the circumcenter of the three given points"
  [[A B C]]
  (let [[p1 p2] (geom/perp-bisector [A B])
        [q1 q2] (geom/perp-bisector [A C])]
    (geom/intersection [p1 p2] [q1 q2])))

(defn ang-bisector-segment
  "return agnular bisector segment at A"
  [[A B C]]
  (let [c (geom/minus B A)
        b (geom/minus C A)
        lb (geom/length b)
        lc (geom/length c)
        B1 (geom/plus A (geom/scal-mul (/ 1000 lb) b))
        C1 (geom/plus A (geom/scal-mul (/ 1000 lc) c))
        B2 (geom/plus A (geom/scal-mul (/ -1000 lb) b))
        C2 (geom/plus A (geom/scal-mul (/ -1000 lc) c))
        M1 (geom/midpoint B1 C1)
        M2 (geom/midpoint B2 C2)]
    [M1 M2]))

(defn ang-bisectors
  "return the angle bisectors for the given triangle
three interior with keys :i1 :i2 :i3
three exteriot with keys :e1 :e2 :e3"
  [[A B C]]
  (let [i1 (ang-bisector-segment [A B C])
        i2 (ang-bisector-segment [B C A])
        i3 (ang-bisector-segment [C A B])
        e1 (geom/perp-bisector i1)
        e2 (geom/perp-bisector i2)
        e3 (geom/perp-bisector i3)]
    {:i1 i1
     :i2 i2
     :i3 i3
     :e1 e1
     :e2 e2
     :e3 e3}))

;; now lets build up a map of triangle geometric data
;; containing the following keys
;; vertices midpoints centroid
;; altitudes, orthocenter
;; nine-pt-circle
;; :ang-bisector :incenter :excenter
(defn triangle
  "return map of basic geometric data
for the given three points"
  [p1 p2 p3]
  (let [t [p1 p2 p3]
        segments (segments t)]
    {:vertices t
     :segments segments}))

(defn extract-incircle
  [t l1 l2]
  (let [[A B C] t 
        i (geom/intersection l1 l2)
        d (altitude A B i)
        e (altitude B C i)
        f (altitude C A i)
        r (geom/distance i d)]
    {:center i :radius r :feet [d e f]}))

(defn incircle
  "return incircle of given angular bisectors"
  [t ang-bi]
  (let [i1 (:i1 ang-bi)
        i2 (:i2 ang-bi)]
    (extract-incircle t i1 i2)))

(defn excircles
  "return vector of excircles of given angular bisectors"
  [t ang-bi]
  [(extract-incircle t (:i1 ang-bi) (:e2 ang-bi))
   (extract-incircle t (:i2 ang-bi) (:e3 ang-bi))
   (extract-incircle t (:i3 ang-bi) (:e1 ang-bi))])

(defn add-options
  "returns a new map with added geommetric options to the existing triangle,
assuming the vertices and segments have been added"
  [tri options]
  (let [[A B C :as t] (:vertices tri)
        tri
        (cond-> tri
                (contains? options :centroid)
                (assoc :centroid (centroid t))

                (contains? options :centroid)
                (assoc :centroid-vertex-midpoints
                  (let [G (centroid t)]
                    (midpoints [[A G] [B G] [C G]])))

                (contains? options :midpoints)
                (assoc :midpoints (midpoints (:segments tri)))

                (contains? options :circumcenter)
                (assoc :circumcenter (circumcenter t))

                ;; :orthocenter and :nine-pt-circle require :altitudes
                (or (contains? options :altitudes)
                    (contains? options :orthocenter)
                    (contains? options :nine-pt-circle))
                (assoc :altitudes (altitudes t))

                ;; :incircle and :excircle require :ang-bisector
                (or (contains? options :ang-bisector)
                    (contains? options :incircle)
                    (contains? options :excircle))
                (assoc :ang-bisector (ang-bisectors t)))
        tri
        (cond-> tri
                (contains? options :orthocenter)
                (assoc :orthocenter
                  (let [[D E F :as feet] (:altitudes tri)
                        orthocenter (geom/intersection [A D] [B E])]
                    orthocenter))

                (contains? options :nine-pt-circle)
                (assoc :nine-pt-center (try (circumcenter (:altitudes tri))
                                            #+clj  (catch Exception e nil)
                                            #+cljs (catch js/Object e nil)
                                            ))

                (contains? options :incircle)
                (assoc :incircle
                  (incircle t (:ang-bisector tri)))

                (contains? options :excircle)
                (assoc :excircle
                  (excircles t (:ang-bisector tri)))
                )]
    tri))

(comment
  (def t [[0 0] [1 0] [0 1]])
  (def tri (apply triangle t))
  (clojure.pprint/pprint tri)

  (def tri-1 (add-options tri #{:circumcenter :orthocenter :altitudes :centroid :nine-pt-circle}))
  (clojure.pprint/pprint tri-1)

  (def tri-2 (add-options tri #{:midpoints :medians :centroid}))
  (clojure.pprint/pprint tri-2)

  (ang-bisector-segment t)
  (ang-bisectors t)
  (clojure.pprint/pprint (add-options tri #{:ang-bisector}))

  (keys (add-options tri #{:ang-bisector}))

  (clojure.pprint/pprint (add-options tri #{:incircle :excircle}))
  )
