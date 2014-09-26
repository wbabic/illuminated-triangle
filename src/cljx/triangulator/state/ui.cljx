(ns triangulator.state.ui
  (:require [triangulator.state.triangles :as triangles]
            [triangulator.state.transforms :as transforms]
            [triangulator.state.iterations :as iterations]))

(def sections
  [{:id :triangles
    :entries
    [:triangle :centroid :circumcenter :orthocenter :incircle :euler-line :nine-pt-circle :all]}
   {:id :transforms
    :entries
    [:reflection :translation :rotation :dilatation :inversion]}
   {:id :iterations
    :entries
    [:iteration1 :iteration2]}])

(def section-data
  {:triangles triangles/section
   :transforms transforms/section
   :iterations iterations/section})

(def initial-selection
  {:section :triangles
   :entry :triangle
   :item nil})

(def ui
  {:selection initial-selection
   :sections sections
   :section-data section-data})
