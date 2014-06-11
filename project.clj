(defproject fioritto "0.1.0-SNAPSHOT"
  :description "sketching with css garden and hiccup"
  :url "http://wbabic.github.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [hiccup "1.0.4"]
                 [garden "1.1.6"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.298.0-2a82a1-alpha"]
                 [om "0.6.2"]
                 [secretary "1.1.0"]
                 [net.mikera/core.matrix "0.18.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/core.match "0.2.1"]
                 [expresso "0.2.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj" "src/cljs"]
  
  :resource-paths ["resources"]

  :profiles
  {:dev
   {:source-paths [ "test/clj" "dev"]
    :dependencies [[org.clojure/tools.namespace "0.2.4"]
                   [org.clojure/java.classpath "0.2.0"]
                   [org.clojure/test.check "0.5.7"]]
    :plugins [[com.cemerick/austin "0.1.3"]]}}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
