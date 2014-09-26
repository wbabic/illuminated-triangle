(ns triangulator.db
  (:require [datomic.api :as d]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [com.stuartsierra.component :as component])
  (:import datomic.Util))

;; db utils
(defn create-db [uri]
  (d/create-database uri))

(defn delete-db [uri]
  (d/delete-database uri))

(defn get-conn [uri]
  (d/connect uri))

(defn read-all [f]
  (Util/readAll (io/reader f)))

(defn transact-all [conn f]
  (doseq [txd (read-all f)]
    (d/transact conn txd))
  :done)

(defn load-schema [uri]
  (transact-all (get-conn uri) (io/resource "data/schema.edn")))

(defn load-data [uri]
  (transact-all (get-conn uri) (io/resource "data/initial.edn")))

(defn init-db [uri]
  (create-db uri)
  (load-schema uri)
  (load-data uri))

;; db for development and testing
(defrecord Datomic-db [uri]
  component/Lifecycle

  (start [this]
    (create-db uri)
    (load-schema uri)
    (load-data uri)
    (assoc this :conn (get-conn uri)))

  (stop [this]
    (delete-db uri)
    this))

;; constructor for dataomic database component
(defn db [uri]
  (map->Datomic-db {:uri uri}))

;; public API
;; takes db component as first arg and returns a db val
(defn get-db-val
  "given db component, returns db value"
  [db-comp]
  (d/db (:conn db-comp)))


(defn transact
  "use db component to transact given tx-data"
  [db-comp tx-data]
  (d/transact (:conn db-comp) tx-data))

;; takes db value as first arg
(defn get-classes [db]
  (->> (d/q '[:find ?class
              :where
              [?class :class/id]]
            db)
       (map #(d/touch (d/entity db (first %))))
       vec))

(defn update-class
  "generate tx-data for updating class with class-id to given title"
  [db class-id title]
  (let [eid (ffirst
             (d/q '[:find ?class
                    :in $ ?id
                    :where
                    [?class :class/id ?id]]
                  db class-id))]
    [[:db/add eid :class/title title]]))
