(ns triangulator.state.transforms)

(def section
  {:name "Transformations"
   :title "Transformations in the plane"
   :text "A transformation is ..."

   ;; entries
   :reflection
   {:title "Refelction in a line"
    :text "A reflection is ..."
    :label "reflection"}
   :translation
   {:title "Translation by a vector"
    :text "A translation is ..."
    :label "translation"}
   :rotation
   {:title "Rotation about a point by an angle"
    :text "A rotation about a point by a given angle is ..."
    :label "rotation"}
   :dilatation
   {:title "Dilatation about center by a factor"
    :text "A dilatation about center by a factor is ..."
    :label "dilatation"}
   :inversion
   {:title "Inversion in a circle"
    :text "An inversion in a circle is ..."
    :label "inversion"}

   ;; map of ordered item-ids for each entry in this section
   :item-map
   {:reflection [] :translation [] :rotation [] :dilatation [] :inversion []}})
