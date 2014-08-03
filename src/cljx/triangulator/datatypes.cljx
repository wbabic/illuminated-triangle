(ns triangulator.datatypes)

(defrecord Point [point style lable])
(defrecord Line [points])
(defrecord Disk [center radius])
(defrecord Rectangle [p1 p2])
(defrecord Triangle [p1 p2 p3])
(defrecord Style [style])

(defn point
  ([vector] (point vector nil nil))
  ([vector style label] (->Point vector style label)))
(defn line [points] (->Line points))
(defn circle [center radius] (->Disk center radius))
(defn rectangle [p1 p2] (->Rectangle p1 p2))
(defn triangle [p1 p2 p3] (->Triangle p1 p2 p3))
(defn style [style] (->Style style))


