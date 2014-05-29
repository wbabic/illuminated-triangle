(ns triangulator.geometry)

(defn plus [p1 p2]
  (let [p1x (p1 0)
        p1y (p1 1)
        p2x (p2 0)
        p2y (p2 1)]
    [(+ p1x p2x) (+ p1y p2y)]))

(defn scal-mul [t p]
  (let [[x y] p]
    [(* t x) (* t y)]))

(defn minus [p1 p2]
  (plus p1 (scal-mul -1 p2)))

(defn length [p1]
  (let [p1x (p1 0)
        p1y (p1 1)]
    (Math/sqrt (+ (* p1x p1x) (* p1y p1y)))))

(defn distance [p1 p2]
  (length (minus p1 p2)))

(defn midpoint [p1 p2]
  (scal-mul (/ 2) (plus p1 p2)))
