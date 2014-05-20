(ns triangulator.draw
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.datatypes :as dt]))

(enable-console-print!)

(def color-lookup
  {:red      "rgba(255, 0,   0,   0.6)"
   :green    "rgba(0,   255, 0,   0.6)"
   :blue     "rgba(0,   0,   255, 0.6)"
   :lt-red   "rgba(255, 0,   0,   0.1)"
   :lt-green "rgba(0,   255, 0,   0.1)"
   :lt-blue  "rgba(0,   0,   255, 0.1)"
   :grey     "rgba(200, 200, 200, 0.1)"
   :lt-grey  "rgba(100, 100, 100, 0.3)"
   :grey-2   "rgba(120,120,120,120)"
   :pink     "#EF0BEE"
   :cyan     "#02E6FB"
   :orange   "#FF8108"
   :yellow   "#FFFB00"})

(defprotocol IRender
  (render [object context]))

(extend-type dt/Point
  IRender
  (render [point context]
    (let [p (:point point)
          radius 5]
      (println "rendering: " (p 0) (p 1))
      (.beginPath context)
      (.arc context (p 0) (p 1) radius 0 (* 2 Math/PI) false)
      (.stroke context)
      (.fill context)
      (.closePath context))))

(extend-type dt/Style
  IRender
  (render [style context]
    (let [s (:style style)]
      (println "rendering: " s)
      (doseq [[k v] s]
        (case k
          :fill (set! (. context -fillStyle) (color-lookup v))
          :stroke (set! (. context -strokeStyle) (color-lookup v)))))))

(defn surface [id]
  (let [canvas (.getElementById js/document id)]
    {:canvas canvas
     :width (. canvas -width)
     :height (. canvas -height)}))

(defn drawing-loop [canvas width height]
  (let [draw-chan (chan)
        context (.getContext canvas "2d")]
    (go (loop []
          (let [draw-msgs (<! draw-chan)]
            (doseq [draw-obj draw-msgs]
              (println "drawing-loop: " draw-obj)
              (render draw-obj context))
            (recur))))
    draw-chan))

(defn clear [context width height]
  (set! (. context -fillStyle) "rgb(255,255,255)")
  (set! (. context -strokeStyle) "rgb(255,255,255)")
  (.fillRect context 0 0 width height))

(defn line
  ([P Q context] (line P Q :grey-2 context))
  ([P Q color context]
     (.beginPath context)
     (.moveTo context (P 0) (P 1))
     (.lineTo context (Q 0) (Q 1))
     (.stroke context)
     (. context (closePath))))
