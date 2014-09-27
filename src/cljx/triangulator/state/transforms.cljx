(ns triangulator.state.transforms)

(def section
  {:name "Transforms"
   :text "Transforms in the plane."
   :reflection
   {:text "Refelction in a line." }
   :translation
   {:text "Translation by a vector."
    :label "translation"}
   :rotation
   {:text "Rotation about a point by ab angle."
    :label "rotation"}
   :dilatation
   {:text "Dilatation about center by a factor."
    :label "dilatation"}
   :inversion
   {:text "Inversion in a circle."
    :label "inversion"}
   :item-map
   {:reflection {} :translation {} :rotation {} :dilatation {} :inversion {}}})
