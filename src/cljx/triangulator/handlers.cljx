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
              (let [new-state
                    (condp = item
                      :none state
                      :triangle
                      (p/triangle
                       [type value]
                       state return-message-chan draw-chan)
                      :circumcircle
                      (p/circumcircle
                       [type value]
                       state return-message-chan draw-chan)
                      :orthocenter
                      (p/orthocenter [type value]
                       state return-message-chan draw-chan)
                      :euler-line
                      (p/euler [type value]
                       state return-message-chan draw-chan)
                      :nine-pt-circle
                      (p/nine-pt [type value]
                       state return-message-chan draw-chan)
                      :centroid
                      (p/centroid [type value]
                       state return-message-chan draw-chan)
                      :incircle
                      (p/incircle [type value]
                       state return-message-chan draw-chan)
                      :reflection
                      (t/reflection-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :inversion
                      (t/inversion-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :dilatation
                      (t/dilatation-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :rotation
                      (t/rotation-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :translation
                      (t/translation-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :iteration1
                      (t/dilatation1-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      :iteration2
                      (t/dilatation2-state-transitioner [type value]
                       state return-message-chan draw-chan)
                      (do
                        (println "warning: iten not handled: " item)
                        state))]
                (recur item new-state))))))
    return-message-chan))
