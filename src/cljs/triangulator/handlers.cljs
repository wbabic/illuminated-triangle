(ns triangulator.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.complex :as complex]))

(enable-console-print!)

(def clear
  [(dt/style {:fill :grey-2}) (dt/rectangle
                               (dt/point [0 0])
                               (dt/point [600 600]))])

(defn project-x [p]
  (let [[x y] p]
    [0 y]))

(defn project-y [p]
  (let [[x y] p]
    [x 0]))

(defn draw-point
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey
                                :fill :red})
                     (dt/point value)])))

(defn draw-point-coords
  "clear-screen draw item draw point and coords of value"
  [value draw-chan]
  (go (>! draw-chan [(dt/style {:stroke :lt-grey
                                :fill :red})
                     (dt/line [value (project-x value)])
                     (dt/line [value (project-y value)])
                     (dt/point value)])))

(defn draw-line
  "draw line between p1 and p2"
  [p1 p2 draw-chan options color]
  (let [m (geom/midpoint p1 p2)
        l (geom/distance p1 p2)
        [q1 q2 s1 s2] (geom/perp-bisector [p1 p2])]
    (go (>! draw-chan
            [(dt/style {:stroke color :fill :grey-2})
             (dt/point p1)
             (dt/point p2)
             (dt/line [p1 p2])])
        (when (contains? options :midpoint)
          (>! draw-chan
            [(dt/point m)]))
        (when (contains? options :perp-bisector)
          (let [[p3 p4] (geom/extend-line s1 s2)]
            (>! draw-chan
                [(dt/style {:stroke :lt-grey})
                 (dt/line [p3 p4])
                 (dt/style {:fill :lt-red})
                 (dt/point m)])))
        (when (contains? options :circles)
          (>! draw-chan
              [(dt/style {:stroke :lt-red
                          :fill :lt-blue})
               (dt/circle p1 l)
               (dt/circle p2 l)
               (dt/circle m (/ l 2))
               (dt/style {:fill :grey-2})

               (dt/line [s1 s2])
               (dt/point q1)
               (dt/point q2)
               (dt/point s1)
               (dt/point s2)]))
        (when (contains? options :extended)
          (let [[p3 p4] (geom/extend-line p1 p2)]
            (>! draw-chan
                [(dt/style {:stroke :lt-grey})
                 (dt/line [p1 p3])
                 (dt/line [p2 p4])]))))))

(defn draw-circle
  "clear-screen draw item draw point and coords of value"
  [p1 p2 draw-chan]
  (go (>! draw-chan
          [(dt/style {:stroke :red
                      :fill :grey-2})
           (dt/circle p1 (geom/distance p1 p2))
           (dt/point p1)
           (dt/point p2)
           (dt/line [p1 p2])])))

(defn draw-circle-2
  "clear-screen draw item draw point and coords of value"
  [center radius draw-chan style]
  (go (>! draw-chan
          [(dt/style style)
           (dt/circle center radius)
           (dt/point center)])))

(defn draw-triangle
  "draw triangle p1 p2 p3 in draw-chan with options"
  [p1 p2 p3 draw-chan options]
  (let [circumcenter (geom/circumcenter [p1 p2 p3])
        _ (println "circumcenter: " circumcenter)]
    (when (contains? options :circumcircle)
      (draw-circle-2 circumcenter (geom/distance p1 circumcenter)
                     draw-chan {:stroke :blue :fill :lt-blue})
      (draw-line p1 circumcenter draw-chan #{} :lt-blue)
      (draw-line p2 circumcenter draw-chan #{} :lt-blue)
      (draw-line p3 circumcenter draw-chan #{} :lt-blue))
    (draw-line p1 p2 draw-chan #{:perp-bisector} :red)
    (draw-line p2 p3 draw-chan #{:perp-bisector} :red)
    (draw-line p3 p1 draw-chan #{:perp-bisector} :red)
    (when (contains? options :circumcenter)
      (draw-point circumcenter draw-chan))))

(defn point-state-transitioner
  "handle event by using current state and event to transition to new state
send drawing events to draw-chan
send state changes to out
return new state"
  [[type value] current-state out draw-chan]
  (condp = type
    :move
    (do ;; clear-screen draw-state draw-point-coords
      (go (>! draw-chan clear)
          (>! out [:draw :point draw-chan]))
      (draw-point-coords value draw-chan)
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
       (>! draw-chan clear)
       (>! out [:draw :line draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles :midpoint} :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :line draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])
              _ (println "line: " line)]
          (go (>! out line)
              (>! draw-chan clear)
              (>! out [:draw :line draw-chan]))
          {:step 0}))))

(defn tri-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :triangle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{:circles} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                base (geom/altitude p1 p2 value)]
            (draw-line p1 p2 draw-chan #{:circles :extended} :red)
            (draw-line p2 value draw-chan nil :red)
            (draw-line value p1 draw-chan nil :red)
            (draw-line value base draw-chan nil :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :triangle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])
              _ (println "line: " line)]
          (go (>! out [:draw :triangle draw-chan]))
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)
              triangle (dt/triangle p1 p2 value)
              _ (println "triangle: " triangle)]
          (go (>! out triangle)
              (>! out [:draw :triangle draw-chan]))
          {:step 0}))))

(defn altitude-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :triangle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                base (geom/altitude p1 p2 value)]
            (draw-line p1 p2 draw-chan #{:extended} :red)
            (draw-line p2 value draw-chan nil :red)
            (draw-line value p1 draw-chan nil :red)
            (draw-line value base draw-chan nil :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :triangle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])
              _ (println "line: " line)]
          (go (>! out [:draw :triangle draw-chan]))
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)
              triangle (dt/triangle p1 p2 value)
              _ (println "triangle: " triangle)]
          (go (>! out triangle)
              (>! out [:draw :triangle draw-chan]))
          {:step 0}))))

(defn circumcircle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan #{} :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                p3 value]
            (draw-triangle p1 p2 p3 draw-chan #{:circumcenter :circumcircle})
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              line (dt/line [p1 value])]
          {:step 2 :p1 p1 :p2 value})
      2 (let [p1 (:p1 current-state)
              p2 (:p2 current-state)]
          {:step 0}))))

(defn circle-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go
       (>! draw-chan clear)
       (>! out [:draw :circle draw-chan]))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-circle p1 value draw-chan)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! out [:draw :circle draw-chan])
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :p1 value}) 
      1 (let [p1 (:p1 current-state)
              circle (dt/circle p1 (geom/distance p1 value))
              _ (println "circle: " circle)]
          (go (>! out circle)
              (>! out [:draw :circle draw-chan]))
          {:step 0}))))

(defn reflection-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [p1 (:p1 current-state)]
            (draw-line p1 value draw-chan nil :red)
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                ref (geom/reflection p1 p2)
                image (ref value)]
            (draw-line p1 p2 draw-chan #{:extended} :red)
            (draw-line value image draw-chan #{:midpoint} :red)
            current-state)
        3 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B value
                ref (geom/reflection p1 p2)
                image1 (ref A)
                image2 (ref B)]
            (draw-line p1 p2 draw-chan #{:extended} :red)
            (draw-line A image1 draw-chan #{:midpoint} :red)
            (draw-line B image2 draw-chan #{:midpoint} :red)
            (draw-line A B draw-chan #{:extended} :red)
            (draw-line image1 image2 draw-chan #{:extended} :red)
            current-state)
        4 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A (:A current-state)
                B (:B current-state)
                C value
                ref (geom/reflection p1 p2)
                image1 (ref A)
                image2 (ref B)
                image3 (ref C)]
            (draw-line p1 p2 draw-chan #{:extended} :red)
            (draw-line A B draw-chan #{} :red)
            (draw-line B C draw-chan #{} :red)
            (draw-line C A draw-chan #{} :red)
            (draw-line image1 image2 draw-chan #{} :red)
            (draw-line image2 image3 draw-chan #{} :red)
            (draw-line image3 image1 draw-chan #{} :red)
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear))
          (draw-point value draw-chan)
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
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)]
            (draw-circle center value draw-chan)
            current-state)
        2 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A value
                image (inversion A)]
            (draw-circle-2 center radius draw-chan
                           {:stroke :red :fill :grey-2})
            (draw-line center A draw-chan #{:extended} :red)
            (draw-point image draw-chan)
            current-state)
        3 (let [center (:center current-state)
                radius (:radius current-state)
                inversion (:inversion current-state)
                A (:A current-state)
                B value
                image1 (inversion A)
                image2 (inversion B)
                line (geom/param-line A B)
                pre-image-points (map line (geom/parts 24))
                image-points (map inversion pre-image-points)]
            (draw-circle-2 center radius draw-chan
                           {:stroke :red :fill :grey-2})
            (draw-line center A draw-chan #{:extended} :red)
            (draw-line center B draw-chan #{:extended} :red)
            (draw-point image1 draw-chan)
            (draw-point image2 draw-chan)
            (doseq [p image-points]
              (draw-point p draw-chan))
            (doseq [p pre-image-points]
              (draw-point p draw-chan))
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
            (draw-circle-2 center radius draw-chan
                           {:stroke :red :fill :grey-2})
            (draw-point image1 draw-chan)
            (draw-point image2 draw-chan)
            (doseq [p image-points1]
              (draw-point p draw-chan))
            (doseq [p pre-image-points1]
              (draw-point p draw-chan))
            (doseq [p image-points2]
              (draw-point p draw-chan))
            (doseq [p pre-image-points2]
              (draw-point p draw-chan))
            (doseq [p image-points3]
              (draw-point p draw-chan))
            (doseq [p pre-image-points3]
              (draw-point p draw-chan))
            current-state)))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan clear)
              (>! draw-chan [(dt/style {:stroke :red
                                        :fill :grey-2})
                             (dt/point value)]))
          {:step 1 :center value}) 
      1 (let [center (:center current-state)
              radius (geom/distance value center)
              _ (println "center: " center " radius: " radius)
              inversion (complex/inversion center radius)]
          {:step 2
           :center center
           :radius radius
           :inversion inversion})
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 {:step 0})))

(defn homothety-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                p1 value
                homotheties (:homotheties current-state)
                images (map (fn [f] (f p1)) homotheties)]
            (draw-line (first images) (last images) draw-chan nil :red)
            (doseq [pi images]
              (draw-point pi draw-chan))
            (draw-point p1 draw-chan)
            (draw-point center draw-chan)
            current-state)
        2 (let [center (:center current-state)
                p1 (:p1 current-state)
                p2 value
                homotheties (:homotheties current-state)
                images1 (map (fn [f] (f p1)) homotheties)
                images2 (map (fn [f] (f p2)) homotheties)]

            (draw-line (first images1) (last images1) draw-chan nil :red)
            (draw-line (first images2) (last images2) draw-chan nil :red)
            
            (doseq [[i1 i2] (map vector images1 images2)]
              (draw-line i1 i2 draw-chan nil :red))
            
            (draw-point p1 draw-chan)
            (draw-point p2 draw-chan)
            (draw-line p1 p2 draw-chan nil :red)

            (draw-point center draw-chan)
            
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [k 2
              ;; ratio k defaults to 2 for now
              ks [-2  -1 (/ -2) (/ 2) 2]
              homotheties (mapv #(complex/homothety value %) ks)
              homothety (complex/homothety value k)]
          (assoc current-state :step 1 :center value :homothety homothety :homotheties homotheties))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc (dissoc current-state :p1 :p2) :step 1))))

(defn rotation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [center (:center current-state)
                rotation (:rotation current-state)
                p1 value
                images (take 24 (iterate rotation p1))]
            
            (doseq [pi images]
              (draw-point pi draw-chan))
            current-state)))
    :click
    (condp = (:step current-state)
      0 (let [angle  (/ geom/tau 24)
              ;; angle defaults to a twenty fourth of a tau
              rotation (complex/rotation value angle)]
          (assoc current-state :step 1 :center value :rotation rotation))
      1 (assoc current-state :step 0))))

(defn translation-state-transitioner
  "see point-state-transitioner"
  [[type value] current-state out draw-chan]
  (case type
    :move
    (do
      (go (>! draw-chan clear))
      (condp = (:step current-state)
        0 (do
            (draw-point-coords value draw-chan)
            current-state)
        1 (let [pi (:pi current-state)]
            (draw-line pi value draw-chan nil :red)
            current-state)
        2 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 value
                translation (:translation current-state)
                image (translation p1)]
            (draw-line pi pf draw-chan nil :red)
            (draw-point p1 draw-chan)
            (draw-point image draw-chan)
            current-state)
        3 (let [pi (:pi current-state)
                pf (:pf current-state)
                p1 (:p1 current-state)
                p2 value
                translation (:translation current-state)
                image1 (translation p1)
                image2 (translation p2)]
            (draw-line pi pf draw-chan nil :red)
            (draw-point p1 draw-chan)
            (draw-point image1 draw-chan)
            (draw-point p2 draw-chan)
            (draw-point image2 draw-chan)
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line image1 image2 draw-chan nil :red)
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
            (draw-line pi pf draw-chan nil :red)
            (draw-point p1 draw-chan)
            (draw-point image1 draw-chan)
            (draw-point p2 draw-chan)
            (draw-point image2 draw-chan)
            (draw-point p3 draw-chan)
            (draw-point image3 draw-chan)
            (draw-line p1 p2 draw-chan nil :red)
            (draw-line image1 image2 draw-chan nil :red)
            (draw-line p2 p3 draw-chan nil :red)
            (draw-line image2 image3 draw-chan nil :red)
            (draw-line p3 p1 draw-chan nil :red)
            (draw-line image3 image1 draw-chan nil :red)
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

(defn mouse-handler [click move ctr-chan draw-chan]
  (let [return-message-chan (chan)]
    (go (loop [item :none state {:step 0}]
          (let [[value channel] (alts! [click move ctr-chan])
                type (condp = channel
                       click :click
                       move :move
                       ctr-chan :ctr-chan)]
            (when (= channel ctr-chan)
              (do
                (println "ctr-chan item: " value)
                (when-not (= item value)
                  (>! draw-chan clear)
                  (>! return-message-chan [:draw value draw-chan]))
                (recur value {:step 0})))

            (condp = item
              :none
              (recur item
                     state)
              :point
              (recur item
                     (point-state-transitioner [type value] state return-message-chan draw-chan))
              :line
              (recur item
                     (line-state-transitioner [type value] state return-message-chan draw-chan))
              :triangle
              (recur item
                     (tri-state-transitioner [type value] state return-message-chan draw-chan))

              :circumcircle
              (recur item
                     (circumcircle-state-transitioner [type value] state return-message-chan draw-chan))

              :altitude
              (recur item
                     (altitude-state-transitioner [type value] state return-message-chan draw-chan))

              :circle
              (recur item
                     (circle-state-transitioner [type value] state return-message-chan draw-chan))
              :reflection
              (recur item
                     (reflection-state-transitioner [type value] state return-message-chan draw-chan))
              :inversion
              (recur item
                     (inversion-state-transitioner [type value] state return-message-chan draw-chan))
              :homothety
              (recur item
                     (homothety-state-transitioner [type value] state return-message-chan draw-chan))
              :rotation
              (recur item
                     (rotation-state-transitioner [type value] state return-message-chan draw-chan))
              :translation
              (recur item
                    (translation-state-transitioner [type value] state return-message-chan draw-chan))
              (do
                (println "warning: iten not handled: " item)
                (recur item state))))))
    return-message-chan))
