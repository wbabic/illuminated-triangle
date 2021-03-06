(ns triangulator.style)

#+cljs (enable-console-print!)
;; triangle styles

;; oject to color map
(def color
  {:p1 :red
   :p2 :green
   :p3 :blue
   :e1-extended :blue
   :e2-extended :red
   :e3-extended :green
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
               :extended {:stroke (:e1-extended color)}})})

(def e2
  {:e2 (merge common-edge
              {:line {:stroke (:p1 color)}
               :endpoint1 {:stroke :grey-3 :fill (:p2 color)}
               :endpoint2 {:stroke :grey-3 :fill (:p3 color)}
               :extended {:stroke (:e2-extended color)}})})

(def e3
  {:e3 (merge common-edge
              {:line {:stroke (:p2 color)}
               :endpoint1 {:stroke :grey-3 :fill (:p3 color)}
               :endpoint2 {:stroke :grey-3 :fill (:p1 color)}
               :extended {:stroke (:e3-extended color)}})})

;; triangle style
(def common-tri
  {:centroid {:stroke :grey-3 :fill :cyan}
   :centroid-fill-1 {:stroke :grey-3 :fill :lt-blue}
   :centroid-fill-2 {:stroke :grey-3 :fill :lt-red}
   :centroid-fill-3 {:stroke :grey-3 :fill :lt-green}
   :medians {:line {:stroke :yellow}
             :extended {:stroke :lt-grey}}
   :midpoints {:stroke :grey-3 :fill :cyan}
   :orthocenter {:stroke :grey-3 :fill :yellow}
   :orthocentric-midpoints {:stroke :grey-3 :fill :cyan}
   :orthocentric-midpoint-triangle {:fill :lt-blue}
   :orthic-triangle {:fill :lt-green}
   :midpoint-triangle {:fill :lt-red}
   :nine-pt-circle {:stroke :orange :fill :lt-grey}
   :nine-pt-center {:stroke :orange :fill :lt-grey}
   :nine-pt-radii {:stroke :orange :fill :lt-grey}
   :circumcenter {:stroke :cyan :fill :pink}
   :euler {:stroke :pink}
   :circumcircle {:stroke :pink :fill :lt-grey}
   :circumradii {:stroke :pink :fill :lt-grey}
   :altitudes {:line {:stroke :yellow}
               :extended {:stroke :lt-grey}}
   :feet {:stroke :grey-3 :fill :lt-grey}
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
