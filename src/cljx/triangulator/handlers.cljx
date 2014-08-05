(ns triangulator.handlers
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
            [triangulator.render :as render]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

#+cljs (enable-console-print!)

(defn point-state-transitioner
  "handle event by using current state and event to transition to new state
send drawing events to draw-chan
send state changes to out
return new state"
  [[type value] current-state out draw-chan]
  (condp = type
    :move
    (do ;; clear-screen draw-state draw-point-coords
      (go (>! draw-chan render/clear)
          (>! out [:draw :point draw-chan]))
      (render/draw-point-coords value draw-chan)
      current-state)
    :click
    (do ;; add point to state; reset state
      (go (>! out (dt/point value))
          (>! out [:draw :point draw-chan]))
      {:step 0})))

(defn line-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan render/clear)
       (>! out [:draw :line draw-chan]))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (render/draw-line p1 value draw-chan #{:circles :midpoint} :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! out [:draw :line draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          (go (>! out line)
              (>! draw-chan render/clear)
              (>! out [:draw :line draw-chan]))
          {:step 0}))))

(defn tri-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan render/clear)
       (>! out [:draw :triangle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (render/draw-line p1 value draw-chan #{:circles} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                base (tri/altitude p1 p2 p3)]
            (render/draw-line p1 p2 draw-chan #{:circles :extended} :red)
            (render/draw-line p2 p3 draw-chan nil :blue)
            (render/draw-line p3 p1 draw-chan nil :green)
            (render/draw-line p3 base draw-chan nil :yellow)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! out [:draw :triangle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          (go (>! out [:draw :triangle draw-chan]))
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)
              triangle (dt/triangle p1 p2 value)]
          (go (>! out triangle)
              (>! out [:draw :triangle draw-chan]))
          {:step 0}))))

(defn orthocenter-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/fill-tri p1 p2 p3 draw-chan :lt-red)
            (render/draw-triangle p1 p2 p3 draw-chan #{:ang-bisector :orthocenter})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn nine-pt-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan #{:ang-bisector :nine-pt-circle})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn euler-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)
                p2 value]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 p2 draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/fill-tri p1 p2 p3 draw-chan :lt-red)
            (render/draw-triangle p1 p2 p3 draw-chan
                           #{:ang-bisector :perp-bisector :orthocenter :circumcenter :euler})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn circumcircle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 value draw-chan #{:perp-bisector :endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/fill-tri p1 p2 p3 draw-chan :lt-red)
            (render/draw-triangle p1 p2 p3 draw-chan #{:circumcenter :circumcircle :perp-bisector})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn centroid-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)
                p2 value]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 p2 draw-chan #{:midpoint :endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan #{:median})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2  (assoc current-state :step 3)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn incircle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 value draw-chan #{:endpoint} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan #{:incircle})
            current-state)
        3 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (assoc current-state :step 3 :p3 value)
      3 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(defn circle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan render/clear)
       (>! out [:draw :circle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (render/draw-circle p1 value draw-chan)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! out [:draw :circle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              circle (dt/circle p1 (geom/distance p1 value))]
          (go (>! out circle)
              (>! out [:draw :circle draw-chan]))
          {:step 0}))))

(defn reflection-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan render/clear))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (render/draw-line p1 value draw-chan #{:extended-full} :yellow)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                ref (trans/reflection p1 p2)
                image (ref p3)]
            (render/draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (render/draw-line p3 image draw-chan #{:midpoint} :lt-grey)
            current-state)
        3 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B value
                ref (trans/reflection p1 p2)
                imageA (ref A)
                imageB (ref B)]
            (render/draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (render/draw-line A imageA draw-chan #{:midpoint} :lt-grey)
            (render/draw-line B imageB draw-chan #{:midpoint} :lt-grey)
            (render/draw-line A B draw-chan #{} :red)
            (render/draw-line imageA imageB draw-chan #{} :red)
            current-state)
        4 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B (:B current-state)
                C value
                ref (trans/reflection p1 p2)
                imageA (ref A)
                imageB (ref B)
                imageC (ref C)]
            (render/draw-line p1 p2 draw-chan #{:extended-full} :yellow)
            (render/draw-line A B draw-chan #{} :red)
            (render/draw-line B C draw-chan #{} :green)
            (render/draw-line C A draw-chan #{} :blue)
            (render/draw-line imageA imageB draw-chan #{} :red)
            (render/draw-line imageB imageC draw-chan #{} :green)
            (render/draw-line imageC imageA draw-chan #{} :blue)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear))
          (render/draw-point value draw-chan {:stroke :lt-grey :fill :red})
          {:step 1 :p1 value})
      1 (assoc current-state :p2 value :step 2)
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 {:step 0})))

(defn inversion-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      
      (condp = (:step current-state)
        0 (do
            (go (>! draw-chan render/clear))
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                radius (geom/distance value center)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan {:stroke :yellow :fill :lt-grey})
            (render/draw-line center value draw-chan #{} :pink)
            current-state)
        2 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A value
                image (inversion A)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :lt-grey})
            (render/draw-line center A draw-chan #{:extended} :lt-grey)
            (render/draw-point image draw-chan {:stroke :lt-grey :fill :lt-red})
            (render/draw-point A draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A (:A current-state)
                B value
                imageA (inversion A)
                imageB (inversion B)
                line (geom/param-line A B)
                pre-image-points (map line (geom/parts 24))
                image-points (map inversion pre-image-points)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :grey-2})
            (render/draw-line center A draw-chan #{:extended} :lt-grey)
            (render/draw-line center B draw-chan #{:extended} :lt-grey)
            (render/draw-point imageA draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point imageB draw-chan {:stroke :lt-grey :fill :red})
            (doseq [p image-points]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p pre-image-points]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        4 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A (:A current-state)
                B (:B current-state)
                C value
                image1 (inversion A)
                image2 (inversion B)
                image3 (inversion C)
                line1 (geom/param-line A B)
                line2 (geom/param-line B C)
                line3 (geom/param-line C A)
                pre-image-points1 (map line1 (geom/parts 24))
                pre-image-points2 (map line2 (geom/parts 24))
                pre-image-points3 (map line3 (geom/parts 24))
                image-points1 (map inversion pre-image-points1)
                image-points2 (map inversion pre-image-points2)
                image-points3 (map inversion pre-image-points3)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :grey-2})
            (render/draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image2 draw-chan {:stroke :lt-grey :fill :red})
            (doseq [p image-points1]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p pre-image-points1]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))
            (doseq [p image-points2]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :green}))
            (doseq [p pre-image-points2]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :green}))
            (doseq [p image-points3]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :blue}))
            (doseq [p pre-image-points3]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :blue}))
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        5 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :center value}) 
      1 (let [center (:center current-state)
              radius (geom/distance value center)
              inversion (complex/inversion center radius)]
          {:step 2
           :center center
           :radius radius
           :inversion inversion})
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 (assoc current-state :step 5)
      5 {:step 0})))

(defn homothety-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan render/clear))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                p1 value
                homothety (:homothety current-state)
                image (homothety p1)]
            (render/draw-line center p1 draw-chan nil :lt-grey)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        2 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 value
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety p2)]
            (render/draw-line center p1 draw-chan nil :lt-grey)
            (render/draw-line center p2 draw-chan nil :lt-grey)
            (render/draw-line p1 p2 draw-chan nil :red)
            (render/draw-line image1 image2 draw-chan nil :red)
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                homothety (:homothety current-state)
                image1 (homothety p1)
                image2 (homothety p2)
                image3 (homothety p3)]
            (render/draw-line center p1 draw-chan nil :lt-grey)
            (render/draw-line center p2 draw-chan nil :lt-grey)
            (render/draw-line center p3 draw-chan nil :lt-grey)
            (render/draw-line p1 p2 draw-chan nil :red)
            (render/draw-line p2 p3 draw-chan nil :green)
            (render/draw-line p3 p1 draw-chan nil :blue)
            (render/draw-line image1 image2 draw-chan nil :red)
            (render/draw-line image2 image3 draw-chan nil :green)
            (render/draw-line image3 image1 draw-chan nil :blue)
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [k (/ 2)
              center value
              homothety (complex/homothety center k)]
          (assoc current-state :step 1 :center center :homothety homothety))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn rotation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan render/clear))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 value
                images (take 3 (iterate rotation p1))]
            (doseq [pi images]
              (render/draw-line center pi draw-chan #{} :lt-grey)
              (render/draw-point pi draw-chan {:stroke :lt-grey :fill :red}))
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        2 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 (:p1 current-state)
                p2 value
                images1 (take 3 (iterate rotation p1))
                images2 (take 3 (iterate rotation p2))
                images (map vector images1 images2)]
            (doseq [[p1i p2i] images]
              (render/draw-line center p1i draw-chan #{} :lt-grey)
              (render/draw-line center p2i draw-chan #{} :lt-grey)
              (render/draw-line p1i p2i draw-chan #{} :red))
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                images1 (take 3 (iterate rotation p1))
                images2 (take 3 (iterate rotation p2))
                images3 (take 3 (iterate rotation p3))
                images (map vector images1 images2 images3 [:red :green :blue])]
            (doseq [[p1i p2i p3i color] images]
              (render/draw-line center p1i draw-chan #{} :lt-grey)
              (render/draw-line center p2i draw-chan #{} :lt-grey)
              (render/draw-line center p3i draw-chan #{} :lt-grey)
              (render/draw-line p1i p2i draw-chan #{} :red)
              (render/draw-line p2i p3i draw-chan #{} :green)
              (render/draw-line p3i p1i draw-chan #{} :blue))
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [angle  (/ geom/tau 3)
              ;; angle defaults to a twenty fourth of a tau
              rotation (complex/rotation value angle)]
          (assoc current-state
            :step 1
            :center value
            :rotation rotation))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn translation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan render/clear))
      (condp = (:step current-state)
        0 (do
            (render/draw-point-coords value draw-chan)
            current-state)
        1 (let [pi (:pi current-state)]
            (render/draw-line pi value draw-chan nil :yellow)
            current-state)
        2 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 value
                translation (:translation current-state)
                image (translation p1)]
            (render/draw-line pi pf draw-chan nil :yellow)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image draw-chan {:stroke :lt-grey :fill :red})
            current-state)
        3 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 (:p1 current-state)
                p2 value
                translation (:translation current-state)
                image1 (translation p1)
                image2 (translation p2)]
            (render/draw-line pi pf draw-chan nil :yellow)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point p2 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image2 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-line p1 p2 draw-chan nil :red)
            (render/draw-line image1 image2 draw-chan nil :red)
            current-state)
        4 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value
                translation (:translation current-state)
                image1 (translation p1)
                image2 (translation p2)
                image3 (translation p3)]
            (render/draw-line pi pf draw-chan nil :yellow)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point p2 draw-chan {:stroke :lt-grey :fill :green})
            (render/draw-point image2 draw-chan {:stroke :lt-grey :fill :green})
            (render/draw-point p3 draw-chan {:stroke :lt-grey :fill :blue})
            (render/draw-point image3 draw-chan {:stroke :lt-grey :fill :blue})
            (render/draw-line p1 p2 draw-chan nil :red)
            (render/draw-line image1 image2 draw-chan nil :red)
            (render/draw-line p2 p3 draw-chan nil :green)
            (render/draw-line image2 image3 draw-chan nil :green)
            (render/draw-line p3 p1 draw-chan nil :blue)
            (render/draw-line image3 image1 draw-chan nil :blue)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (assoc current-state :step 1 :pi value)
      1 (let [pi (:pi current-state)
              pf value
              v (geom/minus pf pi)
              translation (complex/translation v)]
          (assoc current-state
            :step 2
            :pf pf
            :vector v
            :translation translation))
      2 (assoc current-state :step 3 :p1 value)
      3 (assoc current-state :step 4 :p2 value)
      4 (assoc (dissoc current-state :p1 :p2) :step 2))))

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
                      :point
                      (point-state-transitioner [type value]
                                                state return-message-chan draw-chan)
                      :line
                      (line-state-transitioner [type value]
                                               state return-message-chan draw-chan)
                      :triangle
                      (tri-state-transitioner [type value]
                                              state return-message-chan draw-chan)
                      :circumcircle
                      (circumcircle-state-transitioner [type value]
                                                       state return-message-chan draw-chan)
                      :orthocenter
                      (orthocenter-state-transitioner [type value]
                                                      state return-message-chan draw-chan)
                      :euler-line
                      (euler-state-transitioner [type value]
                                                state return-message-chan draw-chan)
                      :nine-pt-circle
                      (nine-pt-state-transitioner [type value]
                                                  state return-message-chan draw-chan)
                      :centroid
                      (centroid-state-transitioner [type value]
                                                   state return-message-chan draw-chan)
                      :incircle
                      (incircle-state-transitioner [type value]
                                                   state return-message-chan draw-chan)
                      :circle
                      (circle-state-transitioner [type value]
                                                 state return-message-chan draw-chan)
                      :reflection
                      (reflection-state-transitioner [type value]
                                                     state return-message-chan draw-chan)
                      :inversion
                      (inversion-state-transitioner [type value]
                                                    state return-message-chan draw-chan)
                      :homothety
                      (homothety-state-transitioner [type value]
                                                    state return-message-chan draw-chan)
                      :rotation
                      (rotation-state-transitioner [type value]
                                                   state return-message-chan draw-chan)
                      :translation
                      (translation-state-transitioner [type value]
                                                      state return-message-chan draw-chan)
                      (do
                        (println "warning: iten not handled: " item)
                        state))]
                (recur item new-state))))))
    return-message-chan))
