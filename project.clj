(defproject triangulator "0.1.0-SNAPSHOT"
  :description "sketching with css garden and hiccup"
  :url "http://wbabic.github.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]

                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.1"]
                 [secretary "1.2.1"]

                 [net.mikera/core.matrix "0.18.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/core.match "0.2.1"]
                 [expresso "0.2.0"]

                 [ring "1.3.1"]
                 [compojure "1.1.9"]
                 [enlive "1.1.5"]
                 [hiccup "1.0.5"]
                 [garden "1.2.1"]

                 [com.stuartsierra/component "0.2.2"]]

  :source-paths ["src/cljs" "target/classes"]
  
  :resource-paths ["resources"]

  :profiles
  {:dev
   {:source-paths ["test/clj" "dev"]
    :dependencies [[org.clojure/tools.namespace "0.2.6"]
                   [org.clojure/java.classpath "0.2.0"]
                   [org.clojure/test.check "0.5.7"]
                   [criterium "0.4.1"]]
    :plugins [[lein-cljsbuild "1.0.3"]
              [com.keminglabs/cljx "0.4.0"]
              [com.cemerick/austin "0.1.5"]]}}

  :hooks [cljx.hooks]
    
  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}]}
  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs" "target/classes"]
              :compiler {
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :optimizations :none
                         :source-map true}}
             {:id "release"
              :source-paths ["src/cljs" "target/classes"]
              :compiler {
                         :output-to "demo/main.js"
                         :optimizations :advanced
                         :pertty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]})
