// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.geometry');
goog.require('cljs.core');
goog.require('goog.math.Vec2');
goog.require('goog.math.Vec2');
goog.require('goog.math.Matrix');
goog.require('goog.math.Matrix');
triangulator.geometry.root2 = Math.sqrt.call(null,2);
triangulator.geometry.root3 = Math.sqrt.call(null,3);
triangulator.geometry.pi = Math.PI;
triangulator.geometry.tau = (2 * triangulator.geometry.pi);
triangulator.geometry.plus = (function plus(p1,p2){var p1x = p1.call(null,0);var p1y = p1.call(null,1);var p2x = p2.call(null,0);var p2y = p2.call(null,1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p1x + p2x),(p1y + p2y)], null);
});
triangulator.geometry.scal_mul = (function scal_mul(t,p){var vec__69781 = p;var x = cljs.core.nth.call(null,vec__69781,0,null);var y = cljs.core.nth.call(null,vec__69781,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t * x),(t * y)], null);
});
triangulator.geometry.minus = (function minus(p1,p2){return triangulator.geometry.plus.call(null,p1,triangulator.geometry.scal_mul.call(null,-1,p2));
});
triangulator.geometry.length = (function length(p1){var p1x = p1.call(null,0);var p1y = p1.call(null,1);return Math.sqrt.call(null,((p1x * p1x) + (p1y * p1y)));
});
triangulator.geometry.distance = (function distance(p1,p2){return triangulator.geometry.length.call(null,triangulator.geometry.minus.call(null,p1,p2));
});
triangulator.geometry.midpoint = (function midpoint(p1,p2){return triangulator.geometry.scal_mul.call(null,(1 / 2),triangulator.geometry.plus.call(null,p1,p2));
});
triangulator.geometry.midpoints = (function midpoints(segments){return cljs.core.mapv.call(null,(function (p__69784){var vec__69785 = p__69784;var P = cljs.core.nth.call(null,vec__69785,0,null);var Q = cljs.core.nth.call(null,vec__69785,1,null);return triangulator.geometry.midpoint.call(null,P,Q);
}),segments);
});
/**
* return the segments of the given triangle
*/
triangulator.geometry.segments = (function segments(t){return cljs.core.mapv.call(null,cljs.core.vec,cljs.core.take.call(null,3,cljs.core.partition.call(null,2,1,cljs.core.drop.call(null,1,cljs.core.cycle.call(null,t)))));
});
triangulator.geometry.perp = (function perp(p__69786){var vec__69788 = p__69786;var x = cljs.core.nth.call(null,vec__69788,0,null);var y = cljs.core.nth.call(null,vec__69788,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
});
/**
* return new line same distance as given line,
* passing through midpoint of and perpendicular to
* the given line
*/
triangulator.geometry.perp_bisector = (function perp_bisector(p__69789){var vec__69791 = p__69789;var P = cljs.core.nth.call(null,vec__69791,0,null);var Q = cljs.core.nth.call(null,vec__69791,1,null);var M = triangulator.geometry.midpoint.call(null,P,Q);var l = triangulator.geometry.distance.call(null,P,Q);var R = triangulator.geometry.minus.call(null,P,M);var Rp = triangulator.geometry.perp.call(null,R);var Sp = triangulator.geometry.scal_mul.call(null,triangulator.geometry.root3,Rp);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangulator.geometry.plus.call(null,M,Rp),triangulator.geometry.minus.call(null,M,Rp),triangulator.geometry.plus.call(null,M,Sp),triangulator.geometry.minus.call(null,M,Sp)], null);
});
triangulator.geometry.dot = (function dot(u,v){return ((u.call(null,0) * v.call(null,0)) + (u.call(null,1) * v.call(null,1)));
});
/**
* return altitude from C to AB
*/
triangulator.geometry.altitude = (function altitude(A,B,C){var b = triangulator.geometry.minus.call(null,C,A);var c = triangulator.geometry.minus.call(null,B,A);var t = (triangulator.geometry.dot.call(null,b,c) / triangulator.geometry.dot.call(null,c,c));return triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,t,c));
});
triangulator.geometry.reflection = (function reflection(A,B){return (function (C){var D = triangulator.geometry.altitude.call(null,A,B,C);var E = triangulator.geometry.minus.call(null,triangulator.geometry.scal_mul.call(null,2,D),C);return E;
});
});
triangulator.geometry.parts = (function parts(n){return cljs.core.map.call(null,(function (i){return (i / n);
}),cljs.core.range.call(null,24));
});
/**
* given two endpoints return function
* of parameteriezed line
*/
triangulator.geometry.param_line = (function param_line(A,B){return (function (t){return triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,t,triangulator.geometry.minus.call(null,B,A)));
});
});
triangulator.geometry.extend_line = (function extend_line(p1,p2){var l = triangulator.geometry.param_line.call(null,p1,p2);var p3 = l.call(null,2000);var p4 = l.call(null,-1000);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p4], null);
});
/**
* creates a 2x2 matrix with given rows
*/
triangulator.geometry.matrix = (function matrix(r1,r2){var m = (new goog.math.Matrix((new goog.math.Size(2,2))));var _ = m.setValueAt(0,0,r1.call(null,0));var ___$1 = m.setValueAt(0,1,r1.call(null,1));var ___$2 = m.setValueAt(1,0,r2.call(null,0));var ___$3 = m.setValueAt(1,1,r2.call(null,1));return m;
});
/**
* creates a 2x1 matrix
*/
triangulator.geometry.column = (function column(v){var m = (new goog.math.Matrix((new goog.math.Size(1,2))));var _ = m.setValueAt(0,0,v.call(null,0));var ___$1 = m.setValueAt(1,0,v.call(null,1));return m;
});
triangulator.geometry.multiply = (function multiply(m,c){return m.multiply(c);
});
triangulator.geometry.inverse = (function inverse(p__69792){var vec__69794 = p__69792;var r1 = cljs.core.nth.call(null,vec__69794,0,null);var r2 = cljs.core.nth.call(null,vec__69794,1,null);return triangulator.geometry.matrix.call(null,r1,r2).getInverse();
});
/**
* convert column to vector
*/
triangulator.geometry.c__GT_v = (function c__GT_v(column){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column.getValueAt(0,0),column.getValueAt(1,0)], null);
});
/**
* given 2 points return [a b c]
* where equation of line is ax + by = c
*/
triangulator.geometry.line_coords = (function line_coords(p1,p2){var vec__69797 = p1;var x1 = cljs.core.nth.call(null,vec__69797,0,null);var y1 = cljs.core.nth.call(null,vec__69797,1,null);var vec__69798 = p2;var x2 = cljs.core.nth.call(null,vec__69798,0,null);var y2 = cljs.core.nth.call(null,vec__69798,1,null);var a = (y2 - y1);var b = (x1 - x2);var c = ((x1 * y2) - (x2 * y1));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
});
triangulator.geometry.get_matrix = (function get_matrix(coords){var vec__69810 = coords;var A = cljs.core.nth.call(null,vec__69810,0,null);var B = cljs.core.nth.call(null,vec__69810,1,null);var C = cljs.core.nth.call(null,vec__69810,2,null);var segs = triangulator.geometry.segments.call(null,coords);var vec__69811 = cljs.core.mapv.call(null,((function (vec__69810,A,B,C,segs){
return (function (p__69815){var vec__69816 = p__69815;var P = cljs.core.nth.call(null,vec__69816,0,null);var Q = cljs.core.nth.call(null,vec__69816,1,null);return triangulator.geometry.minus.call(null,Q,P);
});})(vec__69810,A,B,C,segs))
,segs);var a = cljs.core.nth.call(null,vec__69811,0,null);var b = cljs.core.nth.call(null,vec__69811,1,null);var c = cljs.core.nth.call(null,vec__69811,2,null);var vec__69812 = triangulator.geometry.midpoints.call(null,segs);var ma = cljs.core.nth.call(null,vec__69812,0,null);var mb = cljs.core.nth.call(null,vec__69812,1,null);var mc = cljs.core.nth.call(null,vec__69812,2,null);var vec__69813 = cljs.core.mapv.call(null,((function (vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc){
return (function (p__69817){var vec__69818 = p__69817;var x = cljs.core.nth.call(null,vec__69818,0,null);var y = cljs.core.nth.call(null,vec__69818,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
});})(vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));var ap = cljs.core.nth.call(null,vec__69813,0,null);var bp = cljs.core.nth.call(null,vec__69813,1,null);var cp = cljs.core.nth.call(null,vec__69813,2,null);var vec__69814 = cljs.core.mapv.call(null,((function (vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc,vec__69813,ap,bp,cp){
return (function (m,p){return triangulator.geometry.plus.call(null,m,p);
});})(vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc,vec__69813,ap,bp,cp))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ma,mb,mc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ap,bp,cp], null));var ap2 = cljs.core.nth.call(null,vec__69814,0,null);var bp2 = cljs.core.nth.call(null,vec__69814,1,null);var cp2 = cljs.core.nth.call(null,vec__69814,2,null);var line_coords = cljs.core.mapv.call(null,((function (vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc,vec__69813,ap,bp,cp,vec__69814,ap2,bp2,cp2){
return (function (p__69819){var vec__69820 = p__69819;var p1 = cljs.core.nth.call(null,vec__69820,0,null);var p2 = cljs.core.nth.call(null,vec__69820,1,null);return triangulator.geometry.line_coords.call(null,p1,p2);
});})(vec__69810,A,B,C,segs,vec__69811,a,b,c,vec__69812,ma,mb,mc,vec__69813,ap,bp,cp,vec__69814,ap2,bp2,cp2))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ma,ap2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mb,bp2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mc,cp2], null)], null));return line_coords;
});
triangulator.geometry.get_circumcenter = (function get_circumcenter(coords){var line_coords = triangulator.geometry.get_matrix.call(null,coords);var vec__69826 = line_coords.call(null,0);var a = cljs.core.nth.call(null,vec__69826,0,null);var b = cljs.core.nth.call(null,vec__69826,1,null);var c = cljs.core.nth.call(null,vec__69826,2,null);var vec__69827 = line_coords.call(null,1);var d = cljs.core.nth.call(null,vec__69827,0,null);var e = cljs.core.nth.call(null,vec__69827,1,null);var f = cljs.core.nth.call(null,vec__69827,2,null);var vec__69828 = line_coords.call(null,2);var g = cljs.core.nth.call(null,vec__69828,0,null);var h = cljs.core.nth.call(null,vec__69828,1,null);var i = cljs.core.nth.call(null,vec__69828,2,null);var m1 = triangulator.geometry.inverse.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e], null)], null));var c1 = triangulator.geometry.column.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,f], null));var m2 = triangulator.geometry.inverse.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null)], null));var c2 = triangulator.geometry.column.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,i], null));var m3 = triangulator.geometry.inverse.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)], null));var c3 = triangulator.geometry.column.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,c], null));return cljs.core.mapv.call(null,((function (vec__69826,a,b,c,vec__69827,d,e,f,vec__69828,g,h,i,m1,c1,m2,c2,m3,c3,line_coords){
return (function (p__69829){var vec__69830 = p__69829;var matrix = cljs.core.nth.call(null,vec__69830,0,null);var column = cljs.core.nth.call(null,vec__69830,1,null);return triangulator.geometry.multiply.call(null,matrix,column);
});})(vec__69826,a,b,c,vec__69827,d,e,f,vec__69828,g,h,i,m1,c1,m2,c2,m3,c3,line_coords))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m1,c1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,c2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m3,c3], null)], null));
});
triangulator.geometry.circumcenter = (function circumcenter(coords){var circumcenters = triangulator.geometry.get_circumcenter.call(null,coords);var circumcenter__$1 = cljs.core.first.call(null,circumcenters);var p = triangulator.geometry.c__GT_v.call(null,circumcenter__$1);return p;
});
triangulator.geometry.centroid = (function centroid(p__69831){var vec__69833 = p__69831;var A = cljs.core.nth.call(null,vec__69833,0,null);var B = cljs.core.nth.call(null,vec__69833,1,null);var C = cljs.core.nth.call(null,vec__69833,2,null);return triangulator.geometry.scal_mul.call(null,(1 / 3),triangulator.geometry.plus.call(null,A,triangulator.geometry.plus.call(null,B,C)));
});
/**
* intersection of two lines with each a pair of points
* l1 = [p1 p2] l2 = [p3 p4]
*/
triangulator.geometry.intersection = (function intersection(l1,l2){var vec__69838 = l1;var p1 = cljs.core.nth.call(null,vec__69838,0,null);var p2 = cljs.core.nth.call(null,vec__69838,1,null);var vec__69839 = l2;var p3 = cljs.core.nth.call(null,vec__69839,0,null);var p4 = cljs.core.nth.call(null,vec__69839,1,null);var vec__69840 = triangulator.geometry.line_coords.call(null,p1,p2);var a = cljs.core.nth.call(null,vec__69840,0,null);var b = cljs.core.nth.call(null,vec__69840,1,null);var c = cljs.core.nth.call(null,vec__69840,2,null);var vec__69841 = triangulator.geometry.line_coords.call(null,p3,p4);var d = cljs.core.nth.call(null,vec__69841,0,null);var e = cljs.core.nth.call(null,vec__69841,1,null);var f = cljs.core.nth.call(null,vec__69841,2,null);var m1 = triangulator.geometry.inverse.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e], null)], null));var c1 = triangulator.geometry.column.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,f], null));var res = triangulator.geometry.multiply.call(null,m1,c1);return triangulator.geometry.c__GT_v.call(null,res);
});
/**
* return agnular bisector segment at A
*/
triangulator.geometry.ang_bisector_segment = (function ang_bisector_segment(p__69842){var vec__69844 = p__69842;var A = cljs.core.nth.call(null,vec__69844,0,null);var B = cljs.core.nth.call(null,vec__69844,1,null);var C = cljs.core.nth.call(null,vec__69844,2,null);var c = triangulator.geometry.minus.call(null,B,A);var b = triangulator.geometry.minus.call(null,C,A);var lb = triangulator.geometry.length.call(null,b);var lc = triangulator.geometry.length.call(null,c);var B1 = triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,(1000 / lb),b));var C1 = triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,(1000 / lc),c));var B2 = triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,(-1000 / lb),b));var C2 = triangulator.geometry.plus.call(null,A,triangulator.geometry.scal_mul.call(null,(-1000 / lc),c));var M1 = triangulator.geometry.midpoint.call(null,B1,C1);var M2 = triangulator.geometry.midpoint.call(null,B2,C2);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [M1,M2], null);
});

//# sourceMappingURL=geometry.js.map