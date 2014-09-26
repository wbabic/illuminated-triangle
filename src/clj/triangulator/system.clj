(ns triangulator.system
  (:require [com.stuartsierra.component :as component]
            [triangulator.db :as db]
            [triangulator.web :as web]))

(defn dev-system
  "dev system"
  []
  (component/system-map
   :db (db/db "datomic:mem://sketching")
   :web (web/web-server)))

;; a seeded test database
(def test-db-uri "datomic:mem://sketching-test")

;; test-system
(defn test-system
  "test system with no web component"
  []
  (component/system-map
   :db (db/db test-db-uri)))
