(ns triangulator.state)

(def app-state (atom
                {:current-item :centroid
                 :style
                 {:p1 :red
                  :p2 :green
                  :p3 :blue
                  :e1 :red
                  :e2 :green
                  :e3 :blue
                  :m1 :grey-2
                  :m2 :grey-2
                  :m3 :grey-2}}))
