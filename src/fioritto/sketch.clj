(ns fioritto.sketch
  (:require (hiccup [page :refer [html5 include-css include-js]]
                    [element :refer [link-to]]
                    [core :refer [html]])
            (garden [core :refer [css]]
                    [stylesheet :refer [at-media]]
                    [units :as u :refer [px pt em]]
                    [color :as color :refer [hsl rgb]]
                    [def :refer [defstyles]])))

(declare page-css)
(declare page-css-2)

(def palette (let [base-color (color/hsla 0 100 50 0.8)]
               (color/shades base-color)))

(defn page []
  (html5 [:head
          [:title "Demo"]
          [:link {:rel "stylesheet" :href "reset.css"}]
          [:style {:type "text/css"} (page-css)]]
         [:body
          [:div.flex
           [:header.box]
           [:article.box]
           [:aside.box]
           [:footer.box]]
          ]))

(defn page-2 []
  (html5 [:head
          [:title "Demo"]
          [:link {:rel "stylesheet" :href "reset.css"}]
          [:style {:type "text/css"} (page-css-2)]]
         [:body
          [:header.box "header"] 
          [:div.middle
           [:article.box "article"]
           [:aside.box "aside"]]
          [:footer.box "footer"]
          ]))

(defn page-css []
  (css [:.flex
        {:display "-webkit-flex"}
        {:-webkit-flex-flow "column"}
        ]
       [:.box
        {:height (px 100)}
        {:width (px 400)}
        ]
       [:header
        {:background-color (nth palette 0)}
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

(defn page-css-1 []
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

(defn page-css-2 []
  (css
   [:header :article :aside :footer
    {:display "-webkit-flex"}
    {:-webkit-justify-content "center"}
    {:-webkit-align-items "center"}]
   [:header
    {:background-color (nth palette 0)}
    {:height (px 100)}
    ]
   [:article
    {:background-color (nth palette 1)}
    {:-webkit-flex-flow "column"}
    {:-webkit-flex "3 0 0"}
    ]
   [:aside
    {:background-color (nth palette 2)}
    {:-webkit-flex "1 0 0"}
    ]
   [:footer
    {:background-color (nth palette 3)}
    {:height (px 100)}
    ]
   [:.middle
    {:display "-webkit-flex"}
    {:min-height (px 500)}
    ]
   ))


(def wrapper
  [:.wrapper {:disply :-webkit-flex}])

(defn flex [classname] [(str ":." classname)
                        {:display :-webkit-flex
                         :-webkit-flex-flow "row wrap"
                         :font-weight}])


(comment
  (flex "wrapper")


  )
