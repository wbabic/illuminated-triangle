(ns triangulator.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [>! <! put! chan alts! sliding-buffer]]
            [triangulator.handlers :as handlers]
            [triangulator.draw :as draw]
            [triangulator.definitions :as d]
            [triangulator.datatypes :as dt]))

;; app state is the currently selected definition or none

;; compoents
;; definition entry
;; definition list
;; section
;; definition box

;; a definition box contains sections
;; each section has a heading label and a list of definitions
;; each definition has a label and a link

(enable-console-print!)

(defn definition-entry [current-item owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "active"}
              (dom/a #js {:href (str "#/" (name (:id current-item)))}
                     (:label current-item))))))

(defn section [section owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "section"}
               (dom/h2 nil (:section-name section))
               (apply dom/ul nil (om/build-all definition-entry (:data section)))))))

(defn nav-box [ui owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil 
             (om/build-all section ui)))))

(defn item-detail [p owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil
              (condp instance? p
                dt/Point (str (:point p))
                dt/Line (str (:points p))
                dt/Triangle (let [p1 (:p1 p)
                                  p2 (:p2 p)
                                  p3 (:p3 p)]
                              (str "[" p1 " " p2 " " p3 "]"))
                (str "new value: " p))))))

(defn item-controller [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:point []
       :line []
       :triangle []
       :handler nil
       :control nil})
    om/IWillMount
    ;; set up event hanndler
    (will-mount [_]
      (let [_ (println "mounting item-controller")
            {:keys [click-chan mouse-move-chan draw-chan]} (om/get-shared owner)
            control-chan (chan)
            handler-chan (handlers/mouse-handler
                          click-chan
                          mouse-move-chan
                          control-chan
                          draw-chan)]
        (om/set-state! owner :handler handler-chan)
        (om/set-state! owner :control control-chan)
        (go (loop []
              (let [h (<! handler-chan)]
                (println "handler-chan " h)
                (condp instance? h
                  dt/Point
                  (do
                    (om/update-state! owner :point #(conj % h))
                    (recur))
                  dt/Line
                  (do
                    (om/update-state! owner :line #(conj % h))
                    (recur))
                  dt/Triangle
                  (do
                    (om/update-state! owner :triangle #(conj % h))
                    (recur))
                  (do
                    (let [[command item d-chan] h]
                      (case item
                        :point
                        (do
                          (let [points (om/get-state owner :point)]
                            (>! d-chan [(dt/style {:fill :green
                                                   :stroke :grey-2})])
                            (doseq [point points]
                              (>! d-chan [point]))))
                        :line
                        (do
                          (let [lines (om/get-state owner :line)]
                            (>! d-chan [(dt/style {:fill :green
                                                   :stroke :red})])
                            (doseq [line lines]
                              (let [[p1 p2] (:points line)]
                                (println "drawing line: " line)
                                (println "p1: " p1 "p2: " p2)
                                (>! d-chan [line (dt/point p1) (dt/point p2)])))))
                        :triangle
                        (do
                          (let [triangles (om/get-state owner :triangle)]
                            (>! d-chan [(dt/style {:fill :green
                                                   :stroke :red})])
                            (doseq [triangle triangles]
                              (println "drawing triangle: " triangle)
                              (>! d-chan [triangle]))))))
                    (recur))))))))
    om/IWillUnmount
    (will-unmount [_]
      (println "unmounting ..."))
    om/IRenderState
    (render-state [_ state]
      (let [item (:current-item app)
            {:keys [control]} state
            _ (go (>! control item))]
        (dom/div #js {:className "definition"}
                 (dom/h3 nil (first (item d/definition-text)))
                 (dom/p nil (second (item d/definition-text)))
                 (apply dom/ul nil (om/build-all item-detail (item state))))))))

(defn item-view [app owner]
  (reify
    om/IRender
    (render [_]
      (if-let [item (:current-item app)]
        ;; use item
        (do
          (om/build item-controller app))))))
