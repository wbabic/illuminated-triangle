(ns user
  (:require [clojure.repl :refer (apropos dir doc find-doc pst source)]
            [clojure.pprint :refer (pprint)]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.test :refer :all]
            [clojure.tools.namespace.repl :refer (refresh refresh-all)]
            [com.stuartsierra.component :as component]
            [triangulator.system :as system]
            [triangulator.db :as db]))

(defn quick-test []
  (run-tests 'triangulator.geometry-test))

(defn transforms-test []
  (run-tests 'triangulator.transforms-test))

(defn triangle-test []
  (run-tests 'triangulator.triangle-test))

(def sys nil)

(defn init []
  (alter-var-root
   #'sys
   (constantly (system/dev-system))))

(defn start
  []
  (alter-var-root
   #'sys
   component/start))

(defn stop
  []
  (alter-var-root
   #'sys
   component/stop))

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (refresh :after 'user/go))

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

;; cljs repl
(comment
  (defonce repl-env (reset! cemerick.austin.repls/browser-repl-env
                            (cemerick.austin/repl-env)))

  (defn cljs!
    "Once you have started your Clojure REPL, enter the user namespace and run
   this function."
    []
    (cemerick.austin.repls/cljs-repl repl-env))
  )

(comment
  ;; get database component from system
  (def db-comp (:db sys))
  ;; get database value
  (def db-val (db/get-db-val db-comp))
  (first (db/get-classes db-val))
  {:class/title "The Structure and Interpretation of Computer Programs",
   :class/id "6001",
   :class/professor {:db/id 17592186045426},
   :class/students #{{:db/id 17592186045432}
                     {:db/id 17592186045430}
                     {:db/id 17592186045429}
                     {:db/id 17592186045428}},
   :db/id 17592186045422}

  (second (db/get-classes db-val))


  (db/get-classes db-val)
  ;; generate tx-data for class update
  (db/update-class db-val "1806" "new title")
  ;;=> [[:db/add 17592186045424 :class/title "new title"]]

  (db/transact
   db-comp
   (db/update-class db-val "1806" "new title"))
  
  ;; perform speculative transaction
  (let [db-after (->> (db/update-class db-val "6001" "new title")
                      (d/with db-val)
                      :db-after)
        new-title (-> (db/classes db-after)
                      first
                      :class/title)]
    new-title)
  
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
