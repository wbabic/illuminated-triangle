(ns user
  (:require [clojure.repl :refer :all]
            [clojure.pprint :refer (pprint)]
            [triangulator.sketch :as sketch]
            [garden.repl]))

(def system nil)

(comment
  (println (sketch/page-css))
  (println (sketch/page))

  (spit "index.html" (sketch/page))
  (spit "index.html" (sketch/page-2))
  )
