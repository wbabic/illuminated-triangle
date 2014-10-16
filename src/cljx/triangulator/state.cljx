(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.state.triangles :as triangles]
            [triangulator.state.iterations :as iterations]
            [triangulator.state.transforms :as transforms]))

(def tri-style style/tri-style)

(def entry-prop-map triangles/entry-prop-map)

(defn selection->uri
  "convert selection to uri"
  [{:keys [section entry item] :as selection}]
  (if item
    (str "/" (name section) "/" (name entry) "/" (name item))
    (if entry
      (str "/" (name section) "/" (name entry))
      (if section
        (str "/" (name section))
        (str "")))))

(def sections
  ;; contains ordered section-ids
  ;; and ordered entry-ids for each section
  {:ids [:triangles :transforms :iterations]
   :entry-map
   {:triangles
    [:basic :centroid :circumcircle :orthocenter :incircle :euler-line :nine-pt-circle :custom]
    :transforms
    [:reflection :translation :rotation :dilatation :inversion]
    :iterations
    [:iteration1 :iteration2]}})

(def section-data
  {:triangles triangles/section
   :iterations iterations/section
   :transforms transforms/section})

(def initial-selection
  {:section :triangles
   :entry :triangle
   :item nil
   :redraw false})

(def ui
  {:selection initial-selection
   :sections sections
   :section-data section-data})

(def app-state
  (atom
   {:ui ui
    :geometry
    {:triangle nil
     :transforms nil}
    :style tri-style}))
