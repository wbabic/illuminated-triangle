(ns triangulator.navigation-test
  (:require [clojure.test :refer :all]
            [triangulator.state :as state]
            [triangulator.state.navigation :as nav]
            [triangulator.state.triangles :as tri]))

(comment
  (run-tests)
  )

(deftest next-selection-test
  (let [sel state/initial-selection
        ui state/ui
        n-sel (nav/next-selection :next sel ui)
        expected-sel {:section :triangles :entry :centroid :item nil}]
    (is (= n-sel expected-sel))))

(deftest next-sel-test
  (let [sel state/initial-selection
        ui state/ui
        n-sel-fn #(nav/next-selection :next % ui)]
    (is (= (n-sel-fn nil) {:section :triangles}))
    (is (= (n-sel-fn {:section :triangles})
           {:section :transforms, :entry nil, :item nil}))
    (is (= (n-sel-fn {:section :triangles :entry :triangle})
           {:item nil, :section :triangles, :entry :centroid}))
    (is (= (n-sel-fn {:section :triangles :entry :triangle :item :vertices})
           {:section :triangles, :item :edges, :entry :triangle}))))

(deftest prev-sel-test
  (let [sel state/initial-selection
        ui state/ui
        p-sel-fn #(nav/next-selection :previous % ui)]
    (is (= (p-sel-fn nil)
           {:section :iterations}))
    (is (= (p-sel-fn {:section :triangles})
           {:section :iterations, :entry nil, :item nil}))
    (is (= (p-sel-fn {:section :triangles :entry :triangle})
           {:item nil, :section :triangles, :entry :all}))
    (is (= (p-sel-fn {:section :triangles :entry :triangle :item :vertices}))
        {:section :triangles, :item :edges, :entry :triangle})
    (is (= (p-sel-fn {:section :triangles, :item :edges, :entry :triangle}))
        {:section :triangles, :item :vertices, :entry :triangle})))

(deftest down-sel-test
  (let [sel state/initial-selection
        ui state/ui
        sel-fn #(nav/next-selection :down % ui)]
    (is (= (sel-fn nil)
           {:section :triangles}))
    (is (= (sel-fn {:section :triangles})
           {:section :triangles, :entry :triangle}))
    (is (= (sel-fn {:section :triangles :entry :triangle})
           {:item :vertices, :section :triangles, :entry :triangle}))
    (is (= (sel-fn {:section :triangles :entry :triangle :item :vertices})
           {:section :triangles, :item :vertices, :entry :triangle}))))

(deftest up-sel-test
  (let [sel state/initial-selection
        ui state/ui
        sel-fn #(nav/next-selection :up % ui)]
    (is (= (sel-fn {:section :triangles})
           nil))
    (is (= (sel-fn {:section :triangles :entry :triangle})
           {:section :triangles}))
    (is (= (sel-fn {:section :triangles :entry :triangle :item :vertices})
           {:section :triangles, :entry :triangle}))))
