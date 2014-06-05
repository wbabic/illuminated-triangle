(ns user
  (:require [clojure.repl :refer :all]
            [clojure.pprint :refer (pprint)]
            [triangulator.sketch :as sketch]
            [garden.repl]
            [clojure.test :refer :all]
            [triangulator.geometry]
            [triangulator.geometry-test]))


(defn quick-test []
  (run-tests 'triangulator.geometry-test))

(def system nil)

(comment
  (println (sketch/page-css))
  (println (sketch/page))

  (spit "index.html" (sketch/page))
  (spit "index.html" (sketch/page-2))
  )
