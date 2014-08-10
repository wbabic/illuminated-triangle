(ns triangulator.handlers
  (:require [triangulator.datatypes :as dt]
            [triangulator.geometry :as geom]
            [triangulator.geometry.triangle :as tri]
            [triangulator.geometry.transforms :as trans]
            [triangulator.geometry.complex :as complex]
            [triangulator.render :as render]
            [triangulator.handlers.transitioners :as t]
     #+clj  [clojure.core.async :as async :refer [>! <! put! chan alts! go]]
     #+cljs [cljs.core.async :as async :refer [>! <! put! chan alts!]]
            )
  #+cljs  (:require-macros [cljs.core.async.macros :refer [go]])
  )

#+cljs (enable-console-print!)

(defn reflection-state-transitioner
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
            (render/draw-line p1 p2 draw-chan
                                #{:line :extended}
                                {:line {:stroke :yellow}})
            current-state)
        2 (let [p1 (:p1 current-state)
                p2 (:p2 current-state)
                A value
                ref (:ref current-state)
                imageA (ref A)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 p2 draw-chan #{:line :extended}
                                {:line {:stroke :yellow}})
            (render/draw-line A imageA draw-chan
                                #{:midpoint :endpoint1 :endpoint2 :line}
                                {:line {:stroke :lt-grey}
                                 :endpoint1 {:stroke :grey-3 :fill :red}
                                 :endpoint2 {:stroke :grey-3 :fill :red}
                                 :midpoint {:stroke :grey-3 :fill :lt-grey}})
            current-state)
        3 (let [{:keys [p1 p2 A]} current-state
                B value
                ref (:ref current-state)
                A' (ref A)
                B' (ref B)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 p2 draw-chan #{:line :extended}
                                {:line {:stroke :yellow}})
            (render/draw-edge A  B  draw-chan :e1 #{:line :endpoint1 :endpoint2})
            (render/draw-edge A' B' draw-chan :e1 #{:line :endpoint1 :endpoint2})
            current-state)
        4 (let [{:keys [p1 p2 A B ref]} current-state
                C value
                A' (ref A)
                B' (ref B)
                C' (ref C)]
            (go (>! draw-chan render/clear))
            (render/draw-line p1 p2 draw-chan #{:line :extended}
                                {:line {:stroke :yellow}})
            (render/draw-triangle A  B  C  draw-chan #{:fill})
            (render/draw-triangle A' B' C' draw-chan #{:fill})
            current-state)
        5 current-state))
    :click
    (condp = (:step current-state)
      0 (do
          (go (>! draw-chan render/clear))
          (render/draw-point value draw-chan {:stroke :lt-grey :fill :red})
          {:step 1 :p1 value})
      1 (let [p1 (:p1 current-state)
              p2 value
              ref (trans/reflection p1 p2)]
          (assoc current-state :p2 p2 :step 2 :ref ref))
      2 (assoc current-state :A value :step 3)
      3 (assoc current-state :B value :step 4)
      4 (assoc current-state :step 5)
      5 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

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

            (render/draw-line center value draw-chan #{:line :endpoint2}
                                {:line {:stroke :pink}
                                 :endpoint2 {:stroke :grey-3  :fill :pink}})

            current-state)
        2 (let [{:keys [center radius inversion]} current-state
                A value
                image (inversion A)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :lt-grey})

            (render/draw-line center A draw-chan #{:line :extended}
                                {:line {:stroke :lt-grey}
                                 :extended {:stroke :lt-grey}})

            (render/draw-point image draw-chan {:stroke :lt-grey :fill :lt-red})
            (render/draw-point A draw-chan {:stroke :lt-grey :fill :red})

            current-state)
        3 (let [{:keys [A center radius inversion]} current-state
                B value
                imageA (inversion A)
                imageB (inversion B)
                line (geom/param-line A B)
                pre-image-points (map line (geom/parts 24))
                image-points (map inversion pre-image-points)]
            (go (>! draw-chan render/clear))
            (render/draw-circle-2 center radius draw-chan
                           {:stroke :yellow :fill :lt-grey})

            (render/draw-line center A draw-chan #{:line :extended}
                                {:line {:stroke :lt-grey}
                                 :extended {:stroke :lt-grey}})
            (render/draw-line center B draw-chan #{:line :extended}
                                {:line {:stroke :lt-grey}
                                 :extended {:stroke :lt-grey}})

            (render/draw-point imageA draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point imageB draw-chan {:stroke :lt-grey :fill :red})

            (doseq [p image-points]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))

            (doseq [p pre-image-points]
              (render/draw-point p draw-chan {:stroke :lt-grey :fill :red}))

            current-state)
        4 (let [{:keys [A B center radius inversion]} current-state
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
                           {:stroke :yellow :fill :lt-grey})
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
      5 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(def hom-line-style {:line {:stroke :lt-grey}})

(defn homothety-state-transitioner
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
        1 (let [{:keys [center homothety]} current-state
                p1 value
                i1 (homothety p1)]
            (go (>! draw-chan render/clear))
            (render/draw-line center p1 draw-chan #{:line} hom-line-style)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point i1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        2 (let [{:keys [p1 center homothety]} current-state
                p2 value
                i1 (homothety p1)
                i2 (homothety p2)]
            (go (>! draw-chan render/clear))
            (render/draw-line center p1 draw-chan #{:line} hom-line-style)
            (render/draw-line center p2 draw-chan #{:line} hom-line-style)
            (render/draw-edge p1 p2 draw-chan :e1 #{:line :endpoint1 :endpoint2})
            (render/draw-edge i1 i2 draw-chan :e1 #{:line :endpoint1 :endpoint2})
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        3 (let [{:keys [p1 p2 center homothety]} current-state
                p3 value
                i1 (homothety p1)
                i2 (homothety p2)
                i3 (homothety p3)]
            (go (>! draw-chan render/clear))
            (render/draw-triangle p1 p2 p3 draw-chan #{:fill})
            (render/draw-triangle i1 i2 i3 draw-chan #{:fill})
            (render/draw-point center draw-chan {:stroke :lt-grey :fill :yellow})
            current-state)
        4 current-state))
    :click
    (condp = (:step current-state)
      0 (let [k (/ 2)
              center value
              homothety (complex/homothety center k)]
          (assoc current-state :step 1 :center center :homothety homothety))
      1 (assoc current-state :step 2 :p1 value)
      2 (assoc current-state :step 3 :p2 value)
      3 (assoc current-state :step 4)
      4 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))


;; rotation specific style
(def rot-line-style {:line {:stroke :lt-grey}
                     :endpoint2 {:stroke :lt-grey :fill :red}})

(def rot-point-style {:stroke :lt-grey :fill :yellow})

(defn rotation-state-transitioner
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
        1 (let [{:keys [center rotation]} current-state
                p1 value
                images (take 3 (iterate rotation p1))]
            (go (>! draw-chan render/clear))
            (doseq [pi images]
              (render/draw-line center pi draw-chan #{:line :endpoint2} rot-line-style))
            (render/draw-point center draw-chan rot-point-style)
            current-state)
        2 (let [{:keys [p1 center rotation]} current-state
                p2 value
                i1 (take 3 (iterate rotation p1))
                i2 (take 3 (iterate rotation p2))
                images (map vector i1 i2)]
            (go (>! draw-chan render/clear))
            (doseq [[i1 i2] images]
              (render/draw-line center i1 draw-chan #{:line :endpoint2} rot-line-style)
              (render/draw-line center i2 draw-chan #{:line :endpoint2} rot-line-style)
              (render/draw-edge i1 i2 draw-chan :e1 #{:line :endpoint1 :endpoint2}))
            (render/draw-point center draw-chan rot-point-style )
            current-state)
        3 (let [{:keys [p1 p2 center rotation]} current-state
                p3 value
                images1 (take 3 (iterate rotation p1))
                images2 (take 3 (iterate rotation p2))
                images3 (take 3 (iterate rotation p3))
                images (map vector images1 images2 images3)]
            (go (>! draw-chan render/clear))
            (doseq [[i1 i2 i3] images]
              (render/draw-triangle i1 i2 i3 draw-chan #{:fill}))
            (render/draw-point center draw-chan rot-point-style)
            current-state)
        4 current-state))
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
      3 (assoc current-state :step 4)
      4 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

(def trans-line-style {:line {:stroke :yellow}
                      :endpoint1 {:stroke :grey-3 :fill :lt-grey}
                      :endpoint2 {:stroke :grey-3 :fill :lt-grey}})

(defn translation-state-transitioner
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
        1 (let [pi (:pi current-state)
                pf value]
            (go (>! draw-chan render/clear))
            (render/draw-line pi pf draw-chan #{:line :endpoint1 :endpoint2} trans-line-style)
            current-state)
        2 (let [{:keys [pi pf translation]} current-state
                p1 value
                image (translation p1)]
            (go (>! draw-chan render/clear))
            (render/draw-line pi pf draw-chan #{:line :endpoint1 :endpoint2} trans-line-style)
            (render/draw-point p1 draw-chan {:stroke :lt-grey :fill :red})
            (render/draw-point image draw-chan {:stroke :lt-grey :fill :red})
            current-state)
        3 (let [{:keys [pi pf p1 translation]} current-state
                p2 value
                i1 (translation p1)
                i2 (translation p2)]
            (go (>! draw-chan render/clear))
            (render/draw-line pi pf draw-chan #{:line :endpoint1 :endpoint2} trans-line-style)
            (render/draw-edge p1 p2 draw-chan :e1 #{:line :endpoint1 :endpoint2})
            (render/draw-edge i1 i2 draw-chan :e1 #{:line :endpoint1 :endpoint2})
            current-state)
        4 (let [{:keys [pi pf p1 p2 translation]} current-state
                p3 value
                i1 (translation p1)
                i2 (translation p2)
                i3 (translation p3)]
            (go (>! draw-chan render/clear))
            (render/draw-line pi pf draw-chan #{:line :endpoint1 :endpoint2} trans-line-style)
            (render/draw-triangle p1 p2 p3  draw-chan #{:fill})
            (render/draw-triangle i1 i2 i3 draw-chan #{:fill})
            current-state)
        5 current-state))
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
      4 (assoc current-state :step 5)
      5 (do
          (go (>! draw-chan render/clear))
          {:step 0}))))

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
                      :circumcircle
                      (t/circumcircle
                       [type value]
                       state return-message-chan draw-chan)
                      :orthocenter
                      (t/orthocenter [type value]
                       state return-message-chan draw-chan)
                      :euler-line
                      (t/euler [type value]
                       state return-message-chan draw-chan)
                      :nine-pt-circle
                      (t/nine-pt [type value]
                       state return-message-chan draw-chan)
                      :centroid
                      (t/centroid [type value]
                       state return-message-chan draw-chan)
                      :incircle
                      (t/incircle [type value]
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
