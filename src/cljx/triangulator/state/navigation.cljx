(ns triangulator.state.navigation)

(defn section-ids [ui] (get-in ui [:sections :ids]))

(defn entry-ids [section ui] (get-in ui [:sections :entry-map section]))

(defn item-ids [entry section ui]
  (get-in ui [:section-data section :item-map entry]))

(defn next-section
  "returns next section for given sselection"
  [selection ui]
  (let [{:keys [section]} selection
        section-ids (section-ids ui)
        section-index-map (zipmap section-ids (range))
        section-count (count section-ids)
        section-index (section section-index-map)
        next-section (get section-ids
                          (mod (inc section-index) section-count))]
    {:section next-section
     :entry nil
     :item nil}))

(defn prev-section
  "returns next section for given sselection"
  [selection ui]
  (let [{:keys [section]} selection
        section-ids (section-ids ui)
        section-index-map (zipmap section-ids (range))
        section-count (count section-ids)
        section-index (section section-index-map)
        next-section (get section-ids
                          (mod (dec section-index) section-count))]
    {:section next-section
     :entry nil
     :item nil}))

(defn next-entry
  "return next entry of given selection
item is nil"
  [selection ui]
  (let [{:keys [section entry item]} selection
        entry-ids (entry-ids section ui)
        entry-index-map (zipmap entry-ids (range))
        entry-count (count entry-ids)
        entry-index (entry entry-index-map)
        next-entry (get entry-ids (mod (inc entry-index) entry-count))]
    (assoc selection :entry next-entry :item nil)))

(defn prev-entry
  "return next entry of given selection
item is nil"
  [selection ui]
  (let [{:keys [section entry item]} selection
        entry-ids (entry-ids section ui)
        entry-index-map (zipmap entry-ids (range))
        entry-count (count entry-ids)
        entry-index (entry entry-index-map)
        next-entry (get entry-ids (mod (dec entry-index) entry-count))]
    (assoc selection :entry next-entry :item nil)))

(defn next-item
  "return next item in given selection"
  [selection ui]
  (let [{:keys [section entry item]} selection
        item-ids (item-ids entry section ui)
        item-index-map (zipmap item-ids (range))
        item-index (item item-index-map)
        item-count (count item-ids)
        next-item (if item
                    (get item-ids (mod (inc item-index) item-count))
                    (first item-ids))]
    (assoc selection :item next-item)))

(defn prev-item
  "return previous item in given selection"
  [selection ui]
  (let [{:keys [section entry item]} selection
        item-ids (item-ids entry section ui)
        item-index-map (zipmap item-ids (range))
        item-index (item item-index-map)
        item-count (count item-ids)
        prev-item (if item
                    (get item-ids (mod (dec item-index) item-count))
                    (last item-ids))]
    (assoc selection :item prev-item)))

(defn next-sel
  "return the next selection for given selection"
  [{:keys [section entry item] :as selection} ui]
  (if (nil? section)
    {:section (first (section-ids ui))}
    (if (nil? entry)
      (next-section selection ui)
      (if (nil? item)
        (next-entry selection ui)
        (next-item selection ui)))))

(defn prev-sel
  "return the next selection for given selection"
  [{:keys [section entry item] :as selection} ui]
  (if (nil? section)
    {:section (last (section-ids ui))}
    (if (nil? entry)
      (prev-section selection ui)
      (if (nil? item)
        (prev-entry selection ui)
        (prev-item selection ui)))))

(defn into-sel
  "return selection one level deeper"
  [{:keys [section entry item] :as selection} ui]
  (if (nil? section)
    {:section (first (section-ids ui))}
    (if (nil? entry)
      {:section section :entry (first (entry-ids section ui))}
      (if (nil? item)
        (let [item-ids (item-ids entry section ui)]
          {:section section :entry entry :item (first item-ids)})
        selection))))

(defn outof-sel
  "return selection one level deeper"
  [{:keys [section entry item] :as selection} ui]
  (if (not (nil? item))
    {:section section :entry entry}
    (if (not (nil? entry))
      {:section section}
      (if (not (nil? section))
        nil
        nil))))

(defn next-selection
  "return next selection for given command,  selection and ui"
  [command selection ui]
  (let [{:keys [section entry item]} selection
        section-ids (section-ids ui)
        entry-ids (entry-ids section ui)
        item-ids (item-ids entry section ui)])
  (condp = command
    :next (next-sel selection ui)
    :down (into-sel selection ui)
    :previous (prev-sel selection ui)
    :up (outof-sel selection ui)))

(comment
  (mapv :section (take 4 (iterate next-sel {:section :triangles})))
  ;;=> [:triangles :transforms :iterations :triangles]
  (mapv :section (take 4 (iterate prev-sel {:section :triangles})))
  ;;=> [:triangles :iterations :transforms :triangles]

  (selection->uri nil)
  (selection->uri {:section :triangles})
  (selection->uri {:section :triangles :entry :triangle})
  (selection->uri {:section :triangles :entry :triangle :item :vertices})
  )
