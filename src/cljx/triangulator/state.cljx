(ns triangulator.state
  (:require [triangulator.style :as style]
            [triangulator.definitions :as definitions]
            [triangulator.state.triangles :as triangles]
            [triangulator.state.iterations :as iterations]
            [triangulator.state.transforms :as transforms]))

(def tri-style style/tri-style)

(def ui definitions/ui)

(def line-options #{:line :endpoint1 :endpoint2})

(def prop-map
  {:triangle
   {:line-opts line-options
    :tri-opts-keys [:fill]
    :tri-opts {:fill true}
    :open true}
   
   :centroid
   {:line-opts (conj line-options :midpoint)
    :tri-opts-keys [:midpoints :medians :centroid :centroid-fill :midpoint-triangle :centroid-vertex-midpoints :centroid-vertex-triangle]
    :tri-opts {:midpoints false
               :medians false
               :centroid false
               :centroid-fill false
               :midpoint-triangle false
               :centroid-vertex-midpoints false
               :centroid-vertex-triangle false}
    :open false}

   :circumcircle
   {:line-opts (conj line-options :perp-bisector :midpoint)
    :tri-opts-keys [:midpoints :perp-bisector :circumcenter :circumradii :circumcircle :fill :midpoint-triangle]
    :tri-opts {:midpoints true
               :perp-bisector true
               :circumcenter true
               :circumradii true
               :circumcircle true
               :fill true
               :midpoint-triangle true}
    :open true}

   :orthocenter
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :fill :orthic-triangle :orthocentric-fill]
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :fill true
               :orthocentric-fill true
               :orthic-triangle true}
    :open true}

   :incircle
   {:line-opts line-options
    :tri-opts-keys [:extended :ang-bisector :incircle :excircle :fill]
    :tri-opts {:extended true
               :ang-bisector true
               :incircle true
               :excircle true
               :fill true}
    :open true}

   :euler-line
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:extended :altitudes :feet :orthocenter :midpoints :perp-bisector
                    :circumcenter :euler :medians :centroid :centroid-fill]
    :tri-opts {:extended true
               :altitudes true
               :feet true
               :orthocenter true
               :midpoints true
               :perp-bisector true
               :circumcenter true
               :medians true
               :centroid true
               :euler true
               :centroid-fill true}
    :open true}

   :nine-pt-circle
   {:line-opts (conj line-options :extended)
    :tri-opts-keys [:altitudes :perp-bisector :orthocenter :feet :extended
                    :circumcenter :circumcircle :nine-pt-circle :midpoints :medians :centroid 
                    :euler :nine-pt-center :nine-pt-radii :orthocentric-midpoints
                    :orthic-triangle :midpoint-triangle :orthocentric-midpoint-triangle
                    :orthocentric-fill]
    :tri-opts {:altitudes true
               :perp-bisector true
               :orthocenter true
               :feet true
               :extended true
               :circumcenter true
               :circumcircle true
               :nine-pt-circle true
               :orthic-triangle true
               :midpoint-triangle true
               :orthocentric-midpoint-triangle true
               :orthocentric-fill true
               :nine-pt-center true
               :nine-pt-radii true
               :orthocentric-midpoints true
               :midpoints true
               :medians true
               :centroid true
               :euler true}
    :open true}

   :all
   {:line-opts (conj line-options :extended :midpoint :perp-bisector)
    :tri-opts-keys [:altitudes :feet :perp-bisector :orthocenter
                    :ang-bisector :incircle :excircle :extended
                    :circumcenter :circumcircle :circumradii :nine-pt-circle
                    :midpoints :medians :centroid :euler]
    :tri-opts {:altitudes true
               :feet true
               :perp-bisector true
               :orthocenter true
               :ang-bisector true
               :incircle true
               :excircle true
               :circumcenter true
               :circumcircle true
               :circumradii true
               :nine-pt-circle true
               :midpoints true
               :medians true
               :centroid true
               :euler true
               :fill true
               :extended true}
    :open false}})

(def section-list [:triangles :transforms :iterations])

(def entry-list
  [:triangle :centroid :circumcircle :orthocenter :incircle :euler-line :nine-pt-circle :all])

(def entry-item-map
  {:triangle [:vertices :edges :midpoints]
   :centroid [:midpoints :medians :centroid :centroid-fill :midpoint-triangle
              :centroid-vertex-midpoints :centroid-vertex-triangle]
   :circumcircle [:midpoints :perp-bisector :circumcenter :circumradii
                  :circumcircle :midpoint-triangle]
   :orthocenter [:altitudes :feet :orthocenter :orthic-triangle]
   :incircle [:ang-bisector :incircle :excircle]
   :euler-line [:centroid :orthocenter :circumcenter]
   :nine-pt-circle [:orthic-triangle :midpoint-triangle :orthocentric-midpoints
                    :orthocentric-midpoint-triangle]})

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

(defn next-section
  "returns next section for given sselection"
  [selection]
  (let [{:keys [section]} selection
        section-index-map (zipmap section-list (range))
        section-count (count section-list)
        section-index (section section-index-map)
        next-section (get section-list
                          (mod (inc section-index) section-count))]
    {:section next-section
     :entry nil
     :item nil}))

(defn prev-section
  "returns next section for given sselection"
  [selection]
  (let [{:keys [section]} selection
        section-index-map (zipmap section-list (range))
        section-count (count section-list)
        section-index (section section-index-map)
        next-section (get section-list
                          (mod (dec section-index) section-count))]
    {:section next-section
     :entry nil
     :item nil}))

(defn next-entry
  "return next entry of given selection
item is nil"
  [selection]
  (let [{:keys [section entry item]} selection
        entry-index-map (zipmap entry-list (range))
        entry-count (count entry-list)
        entry-index (entry entry-index-map)
        next-entry (get entry-list (mod (inc entry-index) entry-count))]
    (assoc selection :entry next-entry :item nil)))

(defn prev-entry
  "return next entry of given selection
item is nil"
  [selection]
  (let [{:keys [section entry item]} selection
        entry-index-map (zipmap entry-list (range))
        entry-count (count entry-list)
        entry-index (entry entry-index-map)
        next-entry (get entry-list (mod (dec entry-index) entry-count))]
    (assoc selection :entry next-entry :item nil)))

(defn next-item
  "return next item in given selection"
  [selection]
  (let [{:keys [section entry item]} selection
        item-list (entry entry-item-map)
        item-index-map (zipmap item-list (range))
        item-index (item item-index-map)
        item-count (count item-list)
        next-item (if item
                    (get item-list (mod (inc item-index) item-count))
                    (first item-list))]
    (assoc selection :item next-item)))

(defn prev-item
  "return previous item in given selection"
  [selection]
  (let [{:keys [section entry item]} selection
        item-list (entry entry-item-map)
        item-index-map (zipmap item-list (range))
        item-index (item item-index-map)
        item-count (count item-list)
        prev-item (if item
                    (get item-list (mod (dec item-index) item-count))
                    (last item-list))]
    (assoc selection :item prev-item)))

(defn next-sel
  "return the next selection for given selection"
  [{:keys [section entry item] :as selection}]
  (if (nil? section)
    {:section (first section-list)}
    (if (nil? entry)
      (next-section selection)
      (if (nil? item)
        (next-entry selection)
        (next-item selection)))))

(defn prev-sel
  "return the next selection for given selection"
  [{:keys [section entry item] :as selection}]
  (if (nil? section)
    {:section (last section-list)}
    (if (nil? entry)
      (prev-section selection)
      (if (nil? item)
        (prev-entry selection)
        (prev-item selection)))))

(defn into-sel
  "return selection one level deeper"
  [{:keys [section entry item] :as selection}]
  (if (nil? section)
    {:section (first section-list)}
    (if (nil? entry)
      {:section section :entry (first entry-list)}
      (if (nil? item)
        (let [item-list (entry-item-map entry)]
          {:section section :entry entry :item (first item-list)})
        selection))))

(defn outof-sel
  "return selection one level deeper"
  [{:keys [section entry item] :as selection}]
  (if (not (nil? item))
    {:section section :entry entry}
    (if (not (nil? entry))
      {:section section}
      (if (not (nil? section))
        nil
        nil))))

(defn next-selection
  "return next selection for given command and selection"
  [command selection]
  (condp = command
    :next (next-sel selection)
    :down (into-sel selection)
    :previous (prev-sel selection)
    :up (outof-sel selection)))

(def sections
  {:ids [:triangles :transforms :iterations]
   :entry-map
   {:triangles
    [:triangle :centroid :circumcircle :orthocenter :incircle :euler-line :nine-pt-circle :all]
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
   :item nil})

(def uin
  {:selection initial-selection
   :sections sections
   :section-data section-data})

(def app-state
  (atom
   {:uinew uin
    :ui ui
    :geometry
    {:triangle nil
     :transforms nil
     :prop-map prop-map}
    :style tri-style}))

(comment
  (next-sel nil)
  ;;=> {:section :triangles}

  (next-sel {:section :triangles})
  ;;=> {:section :transforms, :entry nil, :item nil}

  (mapv :section (take 4 (iterate next-sel {:section :triangles})))
  ;;=> [:triangles :transforms :iterations :triangles]

  (next-sel {:section :triangles :entry :triangle})
  ;;=> {:item nil, :section :triangles, :entry :centroid}

  (next-sel {:section :triangles :entry :triangle :item :vertices})
  ;;=> {:section :triangles, :item :edges, :entry :triangle}

  (next-sel {:section :triangles, :item :edges, :entry :triangle})
  ;;=> {:section :triangles, :item :vertices, :entry :triangle}

  ;; previous selection
  (prev-sel nil)
  ;;=> {:section :iterations}

  (prev-sel {:section :triangles})
  ;;=> {:section :iterations, :entry nil, :item nil}

  (mapv :section (take 4 (iterate prev-sel {:section :triangles})))
  ;;=> [:triangles :iterations :transforms :triangles]

  (prev-sel {:section :triangles :entry :triangle})
  ;;=> {:item nil, :section :triangles, :entry :all}

  (prev-sel {:section :triangles :entry :triangle :item :vertices})
  ;;=> {:section :triangles, :item :edges, :entry :triangle}

  (prev-sel {:section :triangles, :item :edges, :entry :triangle})
  ;;=> {:section :triangles, :item :vertices, :entry :triangle}


  ;; into selection
  (into-sel nil)
  ;;=> {:section :triangles}
  
  (into-sel {:section :triangles})
  ;;=> {:section :triangles, :entry :triangle

  (into-sel {:section :triangles :entry :triangle})
  ;;=> {:item :vertices, :section :triangles, :entry :centroid}

  (into-sel {:section :triangles :entry :triangle :item :vertices})
  ;;=> {:section :triangles, :item :vertices, :entry :triangle}

  ;; out of
  (outof-sel nil)
  ;;=> nil
  
  (outof-sel {:section :triangles})
  ;;=> nil

  (outof-sel {:section :triangles :entry :triangle})
  ;;=> {:section :triangles}

  (outof-sel {:section :triangles :entry :triangle :item :vertices})
  ;;=> {:section :triangles, :entry :triangle}

  (selection->uri nil)
  (selection->uri {:section :triangles})
  (selection->uri {:section :triangles :entry :triangle})
  (selection->uri {:section :triangles :entry :triangle :item :vertices})
  )
