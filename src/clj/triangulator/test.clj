(ns triangulator.test
  (:require [triangulator.datatypes :as dt]
            [triangulator.render :as render]
            [triangulator.geometry.triangle :as tri]
            [triangulator.state :as state]
            [clojure.core.async :as async :refer [>! <! put! chan alts! go close! timeout]]))

;; some code to exercise the event-handler from the repl

(defn collector
  "collect data from chan, printing it with name attached"
  [in name]
  (go (loop []
        (let [v (<! in)]
          (if v
            (do
              (println "collector: " name ": " v)
              (recur))
            (println ":end"))))))

(defn send-data-to-chan
  "send a given vector of dato to the given channel
in a go loop"
  [data channel]
  (go
    (doseq [d data]
      (>! channel d))))

(comment
  ;; in a comment so as to be able to run from the repl

  ;; create a new drawing channel
  (def draw-chan (chan))

  (def triangle-data [[:control :triangle]
                      [:click [0 0]]
                      [:click [1 0]]
                      [:click [0 1]]])

  (send-data-to-chan triangle-data draw-chan)

  (collector draw-chan :draw-chan)

  (go (>! draw-chan [:click [1 2]]))

  (close! draw-chan)
  )

(defn event-handler [event-chan]
  (let [ret-chan (chan)
        init-state {:step 0 :complete false}
        transition-fn (fn [state event]
                        (condp = (:step state)
                          0 (assoc state :step 1 :p0 event )
                          1 (assoc state :step 2 :p1 event )
                          2 (assoc state :step 3 :p2 event :complete true)))]
    (go (loop [state init-state]
          (let [event (<! event-chan)
                new-state (transition-fn state event)]
            (>! ret-chan new-state)
            (if (:complete new-state)
              (close! ret-chan)
              (recur new-state)))))
    ret-chan))

(comment
  ;; exercise event-handler
  (let [event-chan (chan)
        ret-chan (event-handler event-chan)
        ]
    (println "event-handler started")
    (go
      (loop []
        (let [ret-state (<! ret-chan)]
          (if (:complete ret-state)
            (do
              (println ":complete " ret-state))
            (do
              (println ":not-complete " ret-state)
              (recur))))))

    (go (<! (timeout 1000))
        (>! event-chan [1 2])
        (<! (timeout 1000))
        (>! event-chan [3 4])
        (<! (timeout 1000))
        (>! event-chan [4 5])
        (<! (timeout 1000))
        (println ":done")))
  )


(comment
 ;; exercise animate data sequence
  (def tri [[0 0] [1 0] [0 1]])
  (def tri-opts
    (get-in @state/app-state [:ui :section-data :triangles :props :entry :basic]))
  tri-opts
  {:line-opts #{:endpoint2 :endpoint1 :line},
   :tri-opts {:extended false, :midpoints false, :ang-bisector false,
              :fill false, :altitudes false, :feet false, :perp-bisector false}}

  (def tri-data
    (let [[p1 p2 p3] tri]
      (render/tri-data p1 p2 p3 tri-opts state/tri-style nil)))
  tri-data
  (#triangulator.datatypes.Style{:style {:stroke :blue}}
   #triangulator.datatypes.Line{:points [[0 0] [1 0]]}
   #triangulator.datatypes.Style{:style {:stroke :grey-3, :fill :red}}
   #triangulator.datatypes.Point{:point [0 0]}
   #triangulator.datatypes.Style{:style {:stroke :red}}
   #triangulator.datatypes.Line{:points [[1 0] [0 1]]}
   #triangulator.datatypes.Style{:style {:stroke :grey-3, :fill :green}}
   #triangulator.datatypes.Point{:point [1 0]}
   #triangulator.datatypes.Style{:style {:stroke :green}}
   #triangulator.datatypes.Line{:points [[0 1] [0 0]]}
   #triangulator.datatypes.Style{:style {:stroke :grey-3, :fill :blue}}
   #triangulator.datatypes.Point{:point [0 1]})

  (let [[p1 p2 p3] tri
        triangle (tri/triangle p1 p2 p3)
        tri-opts
        (get-in @state/app-state [:ui :section-data :triangles
                                  :props :entry :basic :tri-opts])
        tri-opts (set (keys tri-opts))
        triangle-opts (tri/add-options triangle tri-opts)]
    triangle-opts)
{:vertices [[0 0] [1 0] [0 1]],
 :segments [[[1 0] [0 1]] [[0 1] [0 0]] [[0 0] [1 0]]],
 :midpoints [[1/2 1/2] [0N 1/2] [1/2 0N]],
 :altitudes [[1/2 1/2] [0 0] [0 0]],
 :ang-bisector
 {:i1 [[500.0 500.0] [-500.0 -500.0]],
  :i2 [[-852.5533905932737 353.5533905932737] [854.5533905932737 -353.5533905932737]],
  :i3 [[353.5533905932737 -852.5533905932737] [-353.5533905932737 854.5533905932737]],
  :e1 [[-500.0 500.0] [500.0 -500.0] [-866.0254037844386 866.0254037844386]
       [866.0254037844386 -866.0254037844386]],
  :e2 [[-352.5533905932737 -853.5533905932737] [354.5533905932737 853.5533905932737]
       [-611.3724356957944 -1478.397839480233] [613.3724356957944 1478.397839480233]],
  :e3 [[853.5533905932737 354.5533905932737] [-853.5533905932737 -352.5533905932737]
       [1478.397839480233 613.3724356957944] [-1478.397839480233 -611.3724356957944]]}}

)
