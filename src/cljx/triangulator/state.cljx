(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.definitions :as def]))

(def app-state (atom
                {:current-item :triangle
                 :ui def/ui
                 :style style/tri-style}))
