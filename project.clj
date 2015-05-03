(defproject triangulator "0.1.0-SNAPSHOT"
  :description "sketching with css garden and hiccup"
  :url "http://wbabic.github.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "target/generated/src/clj"]

  :dependencies [[org.clojure/clojure "1.6.0"]

                 [org.clojure/clojurescript "0.0-3165"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.8"]
                 [secretary "1.2.3"]

                 [ring "1.3.2"]
                 [compojure "1.3.2"]
                 [enlive "1.1.5"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]

                 [com.stuartsierra/component "0.2.2"]
                 [com.datomic/datomic-free "0.9.5130"]
                 [com.velisco/herbert "0.6.6"]]

  :profiles
  {:dev
   {:source-paths ["src/clj" "test/clj" "dev"]
    :dependencies [[org.clojure/tools.namespace "0.2.8"]
                   [org.clojure/java.classpath "0.2.2"]]
    :plugins [[lein-cljsbuild "1.0.5"]
              [com.keminglabs/cljx "0.6.0"]]}}

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/generated/src/clj"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "target/generated/src/cljs"
                   :rules :cljs}]}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs" "target/generated/src/cljs"]
              :compiler {
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :main triangulator.components
                         :asset-path "js/out"
                         :optimizations :none
                         :source-map true
                         :source-map-timestamp true
                         :cache-analysis true}}
             {:id "demo"
              :source-paths ["src/cljs" "target/generated/src/cljs"]
              :compiler {
                         :output-to "demo/main.js"
                         :main triangulator.components
                         :optimizations :advanced
                         :pertty-print false}}]})
