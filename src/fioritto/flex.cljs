(ns fioritto.flex
  (:require (garden [core :refer [css]]
                    [stylesheet :refer [at-media]]
                    [units :as u :refer [px pt em]]
                    [color :as color :refer [hsl rgb]]
                    [def :refer [defstyles]])))

(def palette (let [base-color (color/hsla 0 100 50 0.7)]
               (color/shades base-color)))

(defn page-css []
  (css [:.flex
        {:display "-webkit-flex"}
        {:-webkit-align-items "flex-start"}
        ]
       [:.box 
        {:min-height (px 100)}
        
        {:-webkit-flex-grow 1}
        {:-webkit-flex-shrink 0}
        {:-webkit-flex-basis 0}
        ]
       [:header.box
        {:background-color (nth palette 0)}
        {:-webkit-flex-grow 3}
        ]
       [:article         
        {:background-color (nth palette 1)}
        ]
       [:aside 
        {:background-color (nth palette 2)}
        ]
       [:footer 
        {:background-color (nth palette 3)}
        ]
       ))
