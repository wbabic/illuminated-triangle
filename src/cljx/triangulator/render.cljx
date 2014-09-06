(ns triangulator.render
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
            [triangulator.style :as style]
            [triangulator.state :as state]
     #+clj  [clojure.core.async :as async :refer [>! <! chan go]]
     #+cljs [cljs.core.async :as async :refer [>! <! chan]]
     )
#+cljs(:require-macros [cljs.core.async.macros :refer [go]])
)

#+cljs (enable-console-print!)

(def clear-style
  [(dt/style {:fill :grey-2}) (dt/rectangle
                               (dt/point [0 0])
                               (dt/point [600 600]))])

(defn project-x [p]
  (let [[x y] p]
    [0 y]))

(defn project-y [p]
  (let [[x y] p]
    [x 0]))

(defn draw-point
  "draw point with style"
  [value draw-chan style]
  (go (>! draw-chan [(dt/style style)
                     (dt/point value)])))

(defn draw-point-coords
  "draw point with coords"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey :fill :red})
                     (dt/line [value (project-x value)])
                     (dt/line [value (project-y value)])
                     (dt/point value)])))

(defn draw-line-data
  "data to draw line between p1 and p2
using style from options,
a pure function"
  [p1 p2 options style]
  (let [m (geom/midpoint p1 p2)
        l (geom/distance p1 p2)
        [q1 q2 s1 s2] (geom/perp-bisector [p1 p2])
        [p3 p4] (geom/extend-line p1 p2)]

    (cond-> []
            (contains? options :line)
            (conj (dt/style (:line style)) (dt/line [p1 p2]))

            (contains? options :endpoint1)
            (conj (dt/style (:endpoint1 style)) (dt/point p1))

            (contains? options :endpoint2)
            (conj (dt/style (:endpoint2 style)) (dt/point p2))

            (contains? options :midpoint)
            (conj (dt/style (:midpoint style)) (dt/point m))

            (contains? options :perp-bisector)
            (conj (dt/style (:perp-bisector style)) (dt/line (geom/extend-line s1 s2)))

            (contains? options :extended)
            (conj (dt/style (:extended style))
                  (dt/line [p1 p3])
                  (dt/line [p2 p4]))

            (contains? options :circles)
            (conj (dt/style (:circles style))
                  (dt/circle p1 l) (dt/circle p2 l) (dt/circle m (/ l 2))
                  (dt/style {:fill :grey-2})
                  (dt/line [s1 s2]) (dt/point q1) (dt/point q2) (dt/point s1) (dt/point s2)))))

(defn draw-edge-data
  "data to draw line between p1 and p2
using style from options,
a pure function"
  [p1 p2 side options]
  (let [style (get style/tri-style side)]
    (draw-line-data p1 p2 options style)))

(defn draw-edge
  "draw given edge with given options"
  [p1 p2 draw-chan side options]
  (let [data (draw-edge-data p1 p2 side options)]
    (go (>! draw-chan data))))

(defn draw-line
  "draw line from p1 to p2 using given style and options"
  [p1 p2 draw-chan options style]
  (let [data (draw-line-data p1 p2 options style)]
    (go (>! draw-chan data))))

(defn draw-circle
  "draw item draw point and coords of value"
  [p1 p2 draw-chan]
  (go (>! draw-chan
          [(dt/style {:stroke :red
                      :fill :grey-2})
           (dt/circle p1 (geom/distance p1 p2))
           (dt/point p1)
           (dt/point p2)
           (dt/line [p1 p2])])))

(defn draw-circle-2
  "clear-screen draw item draw point and coords of value"
  [center radius draw-chan style]
  (go (>! draw-chan
          [(dt/style style)
           (dt/circle center radius)
           (dt/point center)])))

(defn fill-tri
  "fill given triangle with given color"
  [p1 p2 p3 draw-chan color]
  (go (>! draw-chan
          [(dt/style {:fill color})
           (dt/triangle p1 p2 p3)])))

(defn style-circle
  "merge style and geometry of a circle into drawing commands
returned as a vector"
  [style circle]
  (let [i (:center circle)
        f1 (get-in circle [:feet 0])
        f2 (get-in circle [:feet 1])
        f3 (get-in circle [:feet 2])]
    [;; draw circle, center, radii and feet
     ;; circle
     (dt/style (:circle style))
     (dt/circle i (:radius circle))
     ;; center
     (dt/style (:center style))
     (dt/point (:center circle))
     ;; radii
     (dt/style (get-in style [:radii 0]))
     (dt/line [i f1])
     (dt/style (get-in style [:radii 1]))
     (dt/line [i f2])
     (dt/style (get-in style [:radii 2]))
     (dt/line [i f3])
     ;; feet
     (dt/style (get-in style [:feet 0]))
     (dt/point f1)
     (dt/style (get-in style [:feet 1]))
     (dt/point f2)
     (dt/style (get-in style [:feet 2]))
     (dt/point f3)]))

(defn expand
  "Returns a vector of rendering operations for given triangle geometry
and given set of options,
or returns empty vector if no options handled, ignoring any unkwown options.
Options handled: :orthocenter, :altitudes, fill,
:centroid :medians :circumcenter, :circumcircle.
Assumes the geometry in triangle has already been built.
Uses geometry styles found in style."
  [triangle options tri-style]
  (let [[A B C] (:vertices triangle)
        G (:centroid triangle)
        H (:orthocenter triangle)
        O (:circumcenter triangle)
        [A1 B1 C1 :as midpoints] (:midpoints triangle)
        [D E F :as feet] (:altitudes triangle)]
    (cond-> []
            (contains? options :fill)
            (conj (dt/style (:fill tri-style))
                  (dt/triangle A B C))

            (contains? options :centroid)
            (conj
             (dt/style (:centroid tri-style))
             (dt/point G))

            (contains? options :centroid-fill)
            (conj
             ;; fll sub triangles
             (dt/style (:centroid-fill-1 tri-style))
             (dt/triangle A G B)
             (dt/style (:centroid-fill-2 tri-style))
             (dt/triangle B G C)
             (dt/style (:centroid-fill-3 tri-style))
             (dt/triangle C G A))

            ;; orthocentric-fill
            (contains? options :orthocentric-fill)
            (conj
             ;; fll sub triangles
             (dt/style (:centroid-fill-1 tri-style))
             (dt/triangle A H B)
             (dt/style (:centroid-fill-2 tri-style))
             (dt/triangle B H C)
             (dt/style (:centroid-fill-3 tri-style))
             (dt/triangle C H A))

            ;; draw medians
            (contains? options :medians)
            (into
             (let [;; line options for medians
                   line-options #{:line}
                   style (:medians tri-style)]
               (concat (draw-line-data A A1 line-options style)
                       (draw-line-data B B1 line-options style)
                       (draw-line-data C C1 line-options style))))
            
            (contains? options :altitudes)
            (into
             (let [;; line options for altitudes
                   line-options #{:line :extended}
                   style (:altitudes tri-style)]
               (concat (draw-line-data A D line-options style)
                       (draw-line-data B E line-options style)
                       (draw-line-data C F line-options style))))

            (contains? options :feet)
            (conj (dt/style (:feet tri-style))
                  (dt/point D)
                  (dt/point E)
                  (dt/point F))
            
            (contains? options :orthocenter)
            (conj (dt/style (:orthocenter tri-style))
                  (dt/point H))

            (contains? options :circumcenter)
            (conj (dt/style (:circumcenter tri-style))
                  (dt/point O))

            (contains? options :circumcircle)
            (conj (dt/style (:circumcircle tri-style))
                  (dt/circle O (geom/distance A O)))

            (contains? options :circumradii)
            (conj (dt/style (:circumradii tri-style))
                  (dt/line [A O])
                  (dt/line [B O])
                  (dt/line [C O]))
            
            (contains? options :euler)
            (conj (dt/style (:euler tri-style))
                  (dt/line [O H]))

            (contains? options :nine-pt-circle)
            (into (let [orthic-center (:orthic-center triangle)
                        nine-pt-radius (geom/distance D orthic-center)]
                    [(dt/style (:nine-pt-circle tri-style))
                     (dt/circle orthic-center nine-pt-radius)]))

            ;; orthic-triangle
            (contains? options :orthic-triangle)
            (conj (dt/style (:orthic-triangle tri-style))
                  (dt/triangle D E F))

            ;; midpoint-triangle
            (contains? options :midpoint-triangle)
            (conj (dt/style (:midpoint-triangle tri-style))
                  (dt/triangle A1 B1 C1))

            ;; orthocentric-midpoint-triangle
            (contains? options :orthocentric-midpoint-triangle)
            (into (let [m1 (geom/midpoint A H)
                        m2 (geom/midpoint B H)
                        m3 (geom/midpoint C H)]
                    [(dt/style (:ortho-centric-midpoint-triangle tri-style))
                     (dt/triangle m1 m2 m3)]))

            ;; :nine-pt-center
            (contains? options :nine-pt-center)
            (into (let [;; circumcircle of orthic triangle
                        orthic-center (:orthic-center triangle)]
                    [(dt/style (:nine-pt-center tri-style))
                     (dt/point orthic-center)]))

            ;; :orthocentric-midpoints
            (contains? options :orthocentric-midpoints)
            (into (let [m1 (geom/midpoint A H)
                        m2 (geom/midpoint B H)
                        m3 (geom/midpoint C H)]
                    [(dt/style (:orthocentric-midpoints tri-style))
                     (dt/point m1)
                     (dt/point m2)
                     (dt/point m3)]))
            
            ;; :orthocentric-radii
            (contains? options :nine-pt-radii)
            (into (let [orthic-center (:orthic-center triangle)]
                    [(dt/style (:nine-pt-radii tri-style))
                     (dt/line [orthic-center D])
                     (dt/line [orthic-center E])
                     (dt/line [orthic-center F])]))
            
            (contains? options :ang-bisector)
            (into (let [ang-bi (:ang-bisector triangle)]
                    [(dt/style (:ang-bisector tri-style))
                     (dt/line (:i1 ang-bi))
                     (dt/line (:i2 ang-bi))
                     (dt/line (:i3 ang-bi))
                     (dt/line (:e1 ang-bi))
                     (dt/line (:e2 ang-bi))
                     (dt/line (:e3 ang-bi))]))

            (contains? options :incircle)
            (into (style-circle (:incircle tri-style) (:incircle triangle)))
            
            (contains? options :excircle)
            (into (concat
                   (style-circle (get-in tri-style [:excircle 0])
                                 (get-in triangle [:excircle 0]))
                   (style-circle (get-in tri-style [:excircle 1])
                                 (get-in triangle [:excircle 1]))
                   (style-circle (get-in tri-style [:excircle 2])
                                 (get-in triangle [:excircle 2])))))))

(defn tri-data
  "data to render triangle,
a merging of style and geometry
taking the three vertices as input and
a map of options to include"
  [A B C tri-opts tri-style]
  (let [selected-tri-opts (->> tri-opts
                               (filter (fn [[_ v]] v))
                               (map first)
                               set)
        tri-options (set (keys tri-opts))
        triangle (tri/triangle A B C)
        line-options #{:line :endpoint1}
        line-options (cond-> line-options
                             (contains? selected-tri-opts :perp-bisector)
                             (conj :perp-bisector)

                             (contains? selected-tri-opts :midpoints)
                             (conj :midpoint)

                             (contains? selected-tri-opts :extended)
                             (conj :extended))
        
        ;; build up any required geometric data into triangle
        triangle (tri/add-options triangle tri-options)
        triangle-data (expand triangle selected-tri-opts tri-style)]
    (concat
     (draw-edge-data A B :e1 line-options)
     (draw-edge-data B C :e2 line-options)
     (draw-edge-data C A :e3 line-options)
     triangle-data)))

(defn draw-triangle
  "new draw-tri"
  [[p1 p2 p3] draw-chan tri-options tri-style]
  (let [data (tri-data p1 p2 p3 tri-options tri-style)]
    (go (>! draw-chan data))))

(defn clear [draw-chan]
  (go (>! draw-chan clear-style)))

(comment
  (clojure.pprint/pprint style/tri-style)
  ;; here we can check the pure data before we even send it to a channel

    (clojure.pprint/pprint
     (tri-data [0 0] [1 0] [0 1]  (get-in state/prop-map [:centroid :tri-opts]) state/tri-style))

  
)
