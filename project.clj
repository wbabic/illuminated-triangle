(defproject triangulator "0.1.0-SNAPSHOT"
  :description "sketching with css garden and hiccup"
  :url "http://wbabic.github.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [hiccup "1.0.5"]
                 [garden "1.2.1"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/core.async "0.1.298.0-2a82a1-alpha"]
                 [om "0.6.5"]
                 [secretary "1.2.0"]
                 [net.mikera/core.matrix "0.18.0"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [org.clojure/core.match "0.2.1"]
                 [expresso "0.2.0"]]

  :source-paths ["target/classes" "src/cljs"]
  
  :resource-paths ["resources"]

  :profiles
  {:dev
   {:source-paths ["test/clj" "dev"]
    :dependencies [[org.clojure/tools.namespace "0.2.4"]
                   [org.clojure/java.classpath "0.2.0"]
                   [org.clojure/test.check "0.5.7"]
                   [com.cemerick/piggieback "0.1.3"]
                   [criterium "0.4.1"]]
    :plugins [[lein-cljsbuild "1.0.3"]
              [com.keminglabs/cljx "0.4.0"]]}}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs" "target/classes"]
              :compiler {
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :optimizations :none
                         :source-map true}}]}

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs}]}
  :hooks [cljx.hooks])
