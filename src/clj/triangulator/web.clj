(ns triangulator.web
  (:require [clojure.java.io :as io]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET PUT POST defroutes)]
            [compojure.handler :as handler]
            [ring.adapter.jetty :refer [run-jetty]]
            [com.stuartsierra.component :as component]
            [triangulator.db :as db]))

(defn page
  "In order to have a REPL connected to our app, we need to add a script tag
   that includes the client-side part of the REPL that talks to the REPL server."
  [file-name]
  (enlive/sniptest (slurp (io/resource (str file-name ".html")))
                   ))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn classes [req]
  (let [db-comp (::web-app req)
        db-val (db/get-db-val db-comp)
        class-list (db/get-classes db-val)]
    (generate-response class-list)))

(defn update-class [req]
  (let [db-comp (::web-app req)
        db-val (db/get-db-val db-comp)
        edn-params (:edn-params req)
        class-id (:class/id edn-params)
        title (:class/title edn-params)
        tx-data (db/update-class db-val class-id title)
        _ (prn tx-data)]
    (db/transact db-comp tx-data)
    (generate-response {:status :ok})))

(defn create-class [params]
  (generate-response {:status 500}))

;; Serve all files from resources/public as is. Serve the index page with the
;; REPL connected. In order to connect a REPL to any page, you must make sure the
;; script is added to all HTML files.
(defroutes routes
  (resources "/")
  (GET "/" req (page "index"))
  (GET "/classes" req (classes req))
  (PUT "/classes" req (update-class req))
  (POST "/classes" req (create-class req)))

(defn wrap-app-component [f db]
  (fn [req]
    (f (assoc req ::web-app db))))

(defn make-handler [db]
  (-> routes
      (wrap-app-component db)
      ;; wrap-edn-params
      ))

;; web server component
(defrecord WebServer [db jetty]
  component/Lifecycle
  (start [this]
    (if jetty
      this
      (assoc this :jetty
             (run-jetty (make-handler db) {:port 8080 :join? false}))))
  (stop [this]
    (if jetty
      (do
        (.stop jetty)
        (assoc this :jetty nil))
      this)))

(defn web-server []
  (component/using (map->WebServer {})
                   [:db]))
