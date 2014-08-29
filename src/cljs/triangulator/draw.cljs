(ns triangulator.draw
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            [triangulator.datatypes :as dt]))

(enable-console-print!)

(def color-lookup
  {:red      "rgba(255, 0,   0,   0.8)"
   :green    "rgba(0,   255, 0,   0.8)"
   :blue     "rgba(0,   0,   255, 0.8)"
   :lt-red   "rgba(255, 0,   0,   0.2)"
   :lt-green "rgba(0,   255, 0,   0.2)"
   :lt-blue  "rgba(0,   0,   255, 0.2)"
   :grey     "rgba(200, 200, 200, 0.1)"
   :lt-grey  "rgba(100, 100, 100, 0.3)"
   :grey-2   "rgb(200,200,200)"
   :grey-3   "rgb(75,75,75)"
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
          radius 3]
      (.beginPath context)
      (.arc context (p 0) (p 1) radius 0 (* 2 Math/PI) false)
      (.stroke context)
      (.fill context)
      (.closePath context))))

(extend-type dt/Style
  IRender
  (render [style context]
    (let [s (:style style)]
      (doseq [[k v] s]
        (case k
          :fill (set! (. context -fillStyle) (color-lookup v))
          :stroke (set! (. context -strokeStyle) (color-lookup v))
          :lineDash (set! (. context -setLineDash) v)
          :lineWidth (set! (. context -lineWidth) v))))))

(extend-type dt/Rectangle
  IRender
  (render [rect context]
    (let [p1 (:point (:p1 rect))
          p2 (:point (:p2 rect))]
      (comment (.fillRect context (0 p1) (1 p1) (0 p2) (1 p2)))
      (.fillRect context 0 0 600 700))))

(extend-type dt/Line
  IRender
  (render [line context]
    (let [points (:points line)
          p1 (points 0)
          p2 (points 1)
          radius 5]
      (.beginPath context)
      (.moveTo context (p1 0) (p1 1))
      (.lineTo context (p2 0) (p2 1))
      (.stroke context)
      (. context (closePath)))))

(extend-type dt/Triangle
  IRender
  (render [triangle context]
    (let [p1 (:p1 triangle)
          p2 (:p2 triangle)
          p3 (:p3 triangle)]
      ;; fill the triangle
      ;; don't draw lines and points here
      (.beginPath context)
      (.moveTo context (p1 0) (p1 1))
      (.lineTo context (p2 0) (p2 1))
      (.lineTo context (p3 0) (p3 1))
      (.fill context)
      (. context (closePath)))))

(extend-type dt/Disk
  IRender
  (render [circle context]
    (let [center (:center circle)
          radius (:radius circle)]
      (.beginPath context)
      (.arc context (center 0) (center 1) radius 0 (* 2 Math/PI) false)
      (.stroke context)
      (.fill context)
      (.closePath context)
      (render (dt/point center) context))))

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
              (render draw-obj context))
            (recur))))
    draw-chan))
