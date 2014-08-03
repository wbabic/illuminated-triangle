(ns user
  (:require [clojure.repl :refer :all]
            [clojure.pprint :refer (pprint)]
            [clojure.test :refer :all]
;;            [triangulator.geometry :as geom]
;;            [triangulator.geometry-test]
;;            [triangulator.transforms :as trans]
;;            [triangulator.transforms-test]
;;            [triangulator.triangle :as tri]
;;            [triangulator.triangle-test]
            ))

(defn quick-test []
  (run-tests 'triangulator.geometry-test))

(defn transforms-test []
  (run-tests 'triangulator.transforms-test))

(defn triangle-test []
  (run-tests 'triangulator.triangle-test))

(def system nil)

(comment
  (println (sketch/page-css))
  (println (sketch/page))

  (spit "index.html" (sketch/page))
  (spit "index.html" (sketch/page-2))
  )

(comment
  (require '[garden.core :refer [css]])
  (css [:h1 :h2 {:font-weight "none"}])
  
  (require '[garden.color :as color :refer [ hsl rgb]])
  (def red (hsl 0 100 50))
  (color/darken red 25)
  (color/lighten red 25)

  (require 'garden.repl)

  (def orange (color/hsl 30 100 50))
  (color/mix red orange)
  ;;=>  #ff4000

  (def green (hsl 120 100 50))
  (color/color+ red green)
  ;;=> #ffff00

  (color/analogous red)
  ;;=> (#ff0000 #ff8000 #ffff00)
  ;; color+ color- color* color-div
  ;; triads tetrads ...
  ;; invert mix
  ;; complement rotate hue by 180
  ;; analogous, returns 3 colors separated by 0 30 and 60 from given color
  ;; triad: returns three colors equidistant from given
  ;; shades 
  )
