(ns triangulator.handlers
  (:require [triangulator.render :as render]
            [triangulator.transitioners.transforms :as t]
            [triangulator.transitioners.property :as p]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

#+cljs (enable-console-print!)

(def fn-map
  {:triangle p/triangle
   :circumcircle p/circumcircle
   :orthocenter p/orthocenter
   :euler-line p/euler
   :nine-pt-circle p/nine-pt
   :centroid p/cnetroid
   :incircle p/incircle
   :reflection t/reflection
   :inversion t/inversion
   :dilatation t/dilatation
   :translation t/translation
   :iteration1 t/dilatation1
   :iteration2 t/dilatation2})

(defn event-handler [event-chan draw-chan]
  (let [return-message-chan (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[type value] (<! event-chan)]
            (if (= type :control)
              (do
                (println "ctr-chan item: " value)
                (when-not (= item value)
                  (>! draw-chan render/clear)
                  (>! return-message-chan [:draw value draw-chan]))
                (recur value {:step 0}))
              (let [f (get fn-map item )
                    new-state (f [type value] state return-message-chan draw-chan)]
                (recur item new-state))))))
    return-message-chan))
