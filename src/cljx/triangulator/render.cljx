(ns triangulator.render
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
     #+clj  [clojure.core.async :as async :refer [>! <! chan go]]
     #+cljs [cljs.core.async :as async :refer [>! <! chan]]
     )
#+cljs(:require-macros [cljs.core.async.macros :refer [go]])
)

#+cljs (enable-console-print!)
;; triangle styles

;; oject to color map
(def color
  {:p1 :red
   :p2 :green
   :p3 :blue
   :e1-ex :lt-blue
   :e2-ex :lt-red
   :e3-ex :lt-green
   })

;; edge style
(def common-edge
  {:midpoint {:stroke :grey-3 :fill :grey-2}
   :perp-bisector {:stroke :lt-grey}})

(def e1
  {:e1 (merge common-edge
              {:line {:stroke (:p3 color)}
               :endpoint1 {:stroke :grey-3 :fill (:p1 color)}
               :endpoint2 {:stroke :grey-3 :fill (:p2 color)}
               :extended {:stroke (:e1-ex color)}})})

(def e2
  {:e2 (merge common-edge
              {:line {:stroke (:p1 color)}
               :endpoint1 {:stroke :grey-3 :fill (:p2 color)}
               :endpoint2 {:stroke :grey-3 :fill (:p3 color)}
               :extended {:stroke (:e2-ex color)}})})

(def e3
  {:e3 (merge common-edge
              {:line {:stroke (:p2 color)}
               :endpoint1 {:stroke :grey-3 :fill (:p3 color)}
               :endpoint2 {:stroke :grey-3 :fill (:p1 color)}
               :extended {:stroke (:e3-ex color)}})})

;; triangle style
(def common-tri
  {:centroid {:stroke :grey-3 :fill :cyan}
   :centroid-fill-1 {:stroke :grey-3 :fill :lt-blue}
   :centroid-fill-2 {:stroke :grey-3 :fill :lt-red}
   :centroid-fill-3 {:stroke :grey-3 :fill :lt-green}
   :medians {:stroke :grey-3 :fill :cyan}
   :orthocenter {:stroke :grey-3 :fill :yellow}
   :orthocentric-midpoints {:stroke :grey-3 :fill :cyan}
   :nine-pt-circle {:stroke :orange :fill :lt-grey}
   :circumcenter {:stroke :cyan :fill :pink}
   :euler {:stroke :pink}
   :circumcircle {:stroke :pink :fill :lt-grey}
   :altitudes {:line {:stroke :yellow}
               :endpoint1 {:stroke :grey-3 :fill :lt-grey}
               :endpoint2 {:stroke :grey-3 :fill :lt-grey}
               :extended {:stroke :lt-grey}}
   :ang-bisector {:stroke :lt-grey}
   :fill {:fill :lt-blue}
   :incircle {:center {:stroke :grey-3 :fill :yellow}
              :circle {:stroke :yellow :fill :lt-grey}
              :radii [{:stroke :lt-blue}
                      {:stroke :lt-red}
                      {:stroke :lt-green}]
              :feet [{:stroke :grey-3 :fill :grey-3}
                     {:stroke :grey-3 :fill :grey-3}
                     {:stroke :grey-3 :fill :grey-3}]}
   :excircle [{:center {:stroke :grey-3 :fill :yellow}
               :circle {:stroke :yellow :fill :lt-grey}
               :radii [{:stroke :lt-blue}
                       {:stroke :lt-red}
                       {:stroke :lt-green}]
               :feet [{:stroke :grey-3 :fill :lt-blue}
                      {:stroke :grey-3 :fill :lt-red}
                      {:stroke :grey-3 :fill :lt-green}]}
              {:center {:stroke :grey-3 :fill :yellow}
               :circle {:stroke :yellow :fill :lt-grey}
               :radii [{:stroke :lt-blue}
                       {:stroke :lt-red}
                       {:stroke :lt-green}]
               :feet [{:stroke :grey-3 :fill :lt-blue}
                      {:stroke :grey-3 :fill :lt-red}
                      {:stroke :grey-3 :fill :lt-green}]}
              {:center {:stroke :grey-3 :fill :yellow}
               :circle {:stroke :yellow :fill :lt-grey}
               :radii [{:stroke :lt-blue}
                       {:stroke :lt-red}
                       {:stroke :lt-green}]
               :feet [{:stroke :grey-3 :fill :lt-blue}
                      {:stroke :grey-3 :fill :lt-red}
                      {:stroke :grey-3 :fill :lt-green}]}]})

(def tri-style (merge e1 e2 e3 common-tri))

(def colors [:red :blue :green])

(def clear
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
  "clear-screen draw item draw point and coords of value"
  [value draw-chan style]
  (go (>! draw-chan [(dt/style style)
                     (dt/point value)])))

(defn draw-point-coords
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey :fill (colors 0)})
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
  (let [style (get tri-style side)]
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

            (contains? options :medians)
            (conj
             ;; fll sub triangles
             (dt/style (:centroid-fill-1 tri-style))
             (dt/triangle A G B)
             (dt/style (:centroid-fill-2 tri-style))
             (dt/triangle B G C)
             (dt/style (:centroid-fill-3 tri-style))
             (dt/triangle C G A))

            ;; draw medians
            (contains? options :medians)
            (into
             (let [;; line options for medians
                   line-options #{:line :endpoint2}
                   style (:medians tri-style)]
               (concat (draw-line-data A A1 line-options style)
                       (draw-line-data B B1 line-options style)
                       (draw-line-data C C1 line-options style))))
            
            (contains? options :altitudes)
            (into
             (let [;; line options for altitudes
                   line-options #{:line :endpoint2 :extended}
                   style (:altitudes tri-style)]
               (concat (draw-line-data A D line-options style)
                       (draw-line-data B E line-options style)
                       (draw-line-data C F line-options style))))

            (contains? options :orthocenter)
            (conj (dt/style (:orthocenter tri-style))
                  (dt/point H))

            (contains? options :circumcenter)
            (conj (dt/style (:circumcenter tri-style))
                  (dt/point O))

            (contains? options :circumcircle)
            (conj (dt/style (:circumcircle tri-style))
                  (dt/circle O (geom/distance A O))
                  (dt/line [A O])
                  (dt/line [B O])
                  (dt/line [C O]))

            (contains? options :euler)
            (conj (dt/style (:euler tri-style))
                  (dt/line [O H]))

            (and (contains? options :nine-pt-circle)
                 (:orthic-center triangle))
            (into (let [;; midpoints from vertices to orthocenter H
                        m1 (geom/midpoint A H)
                        m2 (geom/midpoint B H)
                        m3 (geom/midpoint C H)
                        ;; circumcircle of orthic triangle
                        orthic-center (:orthic-center triangle)
                        [D E F :as feet] (:altitudes triangle)]
                    [(dt/style (:orthocentric-midpoints tri-style))
                     (dt/point m1)
                     (dt/point m2)
                     (dt/point m3)
                     
                     (dt/point orthic-center)
                     (dt/style (:nine-pt-circle tri-style))
                     (dt/circle orthic-center (geom/distance D orthic-center))
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
  [A B C tri-options]
  (let [triangle (tri/triangle A B C)
        line-options #{:line :endpoint1}
        line-options (cond-> line-options
                             (contains? tri-options :perp-bisector)
                             (conj :perp-bisector :midpoint)

                             (or (contains? tri-options :orthocenter)
                                 (contains? tri-options :incircle)
                                 (contains? tri-options :excircle))
                             (conj :extended)
                             )
        ;; build up any required geometric data into triangle
        triangle (tri/add-options triangle tri-options)
        triangle-data (expand triangle tri-options tri-style)]
    (concat
     triangle-data
     (draw-edge-data A B :e1 line-options)
     (draw-edge-data B C :e2 line-options)
     (draw-edge-data C A :e3 line-options))))

(defn draw-triangle
  "new draw-tri"
  [p1 p2 p3 draw-chan tri-options]
  (let [data (tri-data p1 p2 p3 tri-options)]
    (go (>! draw-chan data))))

(comment
  (clojure.pprint/pprint tri-style)
  ;; here we can check the pure data before we even send it to a channel

  (clojure.pprint/pprint (:altitudes tri-style))
  (clojure.pprint/pprint
   (tri-data [0 0] [1 0] [0 1] #{:orthocenter :altitudes :centroid :fill}))

  (clojure.pprint/pprint
   (tri-data [0 0] [1 0] [0 1] #{:midpoints :medians :centroid}))
  
  (tri-data [0 0] [1 0] [0 1] #{:orthocenter :altitudes :centroid})

  (clojure.pprint/pprint
   (tri-data [0 0] [1 0] [0 1] #{:altitudes :perp-bisector :orthocenter :circumcenter :nine-pt-circle :fill}))

  (clojure.pprint/pprint
   (tri-data [0 0] [1 0] [0 1] #{:ang-bisector :incircle :excircle}))

  (clojure.pprint/pprint
   (expand (tri/add-options (tri/triangle [0 0] [1 0] [0 1]) #{:incircle})
           #{:incircle} tri-style))

  (clojure.pprint/pprint
   (expand (tri/add-options (tri/triangle [0 0] [1 0] [0 1]) #{:excircle})
           #{:excircle} tri-style))
)
