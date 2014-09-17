(ns triangulator.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [put! chan]]
            [goog.dom :as gdom]
            [goog.events :as events]))

;; mouse event utils

(def event-map
  {:mouse-down goog.events.EventType.MOUSEDOWN
   :mouse-move goog.events.EventType.MOUSEMOVE
   :mouse-up goog.events.EventType.MOUSEUP
   :click goog.events.EventType.CLICK
   :dblclick goog.events.EventType.DBLCLICK
   :key-down goog.events.EventType.KEYDOWN})

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type #(put! out %))
    out))

(defn mouse-chan [element event-type key]
  (async/map
   (fn [e] (let [px (.-offsetX e)
                py (.-offsetY e)
                ;; _ (.log js/console e)
                ]
            [key [px py]]))
   [(listen element (event-type event-map))]))

