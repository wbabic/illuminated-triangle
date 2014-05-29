(ns triangulator.datatypes)

(enable-console-print!)

(defrecord Point [point])
(defrecord Line [points])
(defrecord Disk [center radius])
(defrecord Rectangle [p1 p2])
(defrecord Triangle [p1 p2 p3])
(defrecord Style [style])

(defn point [point] (->Point point))
(defn line [points] (->Line points))
(defn circle [center radius] (->Disk center radius))
(defn rectangle [p1 p2] (->Rectangle p1 p2))
(defn triangle [p1 p2 p3] (->Triangle p1 p2 p3))
(defn style [style] (->Style style))


(comment
  (def p1
    (->Point [1 0]))
  (def p2
    (->Point [0 1]))
  ;;=> #om_async.protocols.Point{:point [1 0]}

  (def m (->Line [p1 p2]))
  ;;=> #om_async.protocols.Line{:points [#om_async.protocols.Point{:point [1 0]} #om_async.protocols.Point{:point [0 1]}]}
  (def unit-circle (circle [0 0] 1))

  (def style-map {:fill :blue :stroke :red})
  )
