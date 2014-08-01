(ns triangulator.protocols)

;; define protocols for

;; complex numbers

(defprotocol Complex
  "A protocol for complex numbers"
  (length [z])
  (angle [z])
  (coords [z])
  (add [z w])
  (scale-mult [z k])
  (multiply [z w])
  (minus [z])
  (div [z])
  (conjugate [z]))
