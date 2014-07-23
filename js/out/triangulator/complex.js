// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.complex');
goog.require('cljs.core');
goog.require('triangulator.geometry');
goog.require('triangulator.geometry');
goog.require('triangulator.protocols');
goog.require('triangulator.protocols');

/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.complex.complex = (function (x,y,__meta,__extmap){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.complex.complex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.complex.complex.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.complex.complex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k13544,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k13544,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13544,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k13544,else__12689__auto__);
} else
{return null;
}
}
}
});
triangulator.complex.complex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__13543){var self__ = this;
var this__12693__auto____$1 = this;var pred__13546 = cljs.core.keyword_identical_QMARK_;var expr__13547 = k__12694__auto__;if(cljs.core.truth_(pred__13546.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__13547)))
{return (new triangulator.complex.complex(G__13543,self__.y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13546.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__13547)))
{return (new triangulator.complex.complex(self__.x,G__13543,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.complex.complex(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__13543),null));
}
}
});
triangulator.complex.complex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.complex.complex{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null))], null),self__.__extmap));
});
triangulator.complex.complex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.complex.complex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null))], null),self__.__extmap));
});
triangulator.complex.complex.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.complex.complex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
var this__12682__auto____$1 = this;if(cljs.core.truth_((function (){var and__12088__auto__ = other__12683__auto__;if(cljs.core.truth_(and__12088__auto__))
{return ((this__12682__auto____$1.constructor === other__12683__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12682__auto____$1,other__12683__auto__));
} else
{return and__12088__auto__;
}
})()))
{return true;
} else
{return false;
}
});
triangulator.complex.complex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__13543){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.complex.complex(self__.x,self__.y,G__13543,self__.__extmap,self__.__hash));
});
triangulator.complex.complex.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.complex.complex(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.complex.complex.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$ = true;
triangulator.complex.complex.prototype.triangulator$protocols$Complex$add$arity$2 = (function (z,w){var self__ = this;
var z__$1 = this;var vec__13549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);var x1 = cljs.core.nth.call(null,vec__13549,0,null);var y1 = cljs.core.nth.call(null,vec__13549,1,null);var vec__13550 = triangulator.protocols.coords.call(null,w);var x2 = cljs.core.nth.call(null,vec__13550,0,null);var y2 = cljs.core.nth.call(null,vec__13550,1,null);return (new triangulator.complex.complex((x1 + x2),(y1 + y2)));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$minus$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var vec__13551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);var x__$1 = cljs.core.nth.call(null,vec__13551,0,null);var y__$1 = cljs.core.nth.call(null,vec__13551,1,null);return (new triangulator.complex.complex((- x__$1),(- y__$1)));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$multiply$arity$2 = (function (z,w){var self__ = this;
var z__$1 = this;var vec__13552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);var x1 = cljs.core.nth.call(null,vec__13552,0,null);var y1 = cljs.core.nth.call(null,vec__13552,1,null);var vec__13553 = triangulator.protocols.coords.call(null,w);var x2 = cljs.core.nth.call(null,vec__13553,0,null);var y2 = cljs.core.nth.call(null,vec__13553,1,null);return (new triangulator.complex.complex(((x1 * x2) - (y1 * y2)),((x1 * y2) + (x2 * y1))));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$conjugate$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return (new triangulator.complex.complex(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),(- new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1))));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$div$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var vec__13554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);var x__$1 = cljs.core.nth.call(null,vec__13554,0,null);var y__$1 = cljs.core.nth.call(null,vec__13554,1,null);var k = ((x__$1 * x__$1) + (y__$1 * y__$1));var ki = (1 / k);var b = (new triangulator.complex.complex(x__$1,(- y__$1)));return b.triangulator$protocols$Complex$scale_mult$arity$2(null,ki);
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$length$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var x__$1 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1);var y__$1 = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1);return Math.sqrt.call(null,((x__$1 * x__$1) + (y__$1 * y__$1)));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$angle$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return Math.atan2.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1));
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$coords$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);
});
triangulator.complex.complex.prototype.triangulator$protocols$Complex$scale_mult$arity$2 = (function (z,k){var self__ = this;
var z__$1 = this;var vec__13555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(z__$1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(z__$1)], null);var x1 = cljs.core.nth.call(null,vec__13555,0,null);var y1 = cljs.core.nth.call(null,vec__13555,1,null);return (new triangulator.complex.complex((k * x1),(k * y1)));
});
triangulator.complex.complex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.complex.complex(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.complex.complex.cljs$lang$type = true;
triangulator.complex.complex.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.complex/complex");
});
triangulator.complex.complex.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.complex/complex");
});
triangulator.complex.__GT_complex = (function __GT_complex(x,y){return (new triangulator.complex.complex(x,y));
});
triangulator.complex.map__GT_complex = (function map__GT_complex(G__13545){return (new triangulator.complex.complex(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__13545),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__13545),null,cljs.core.dissoc.call(null,G__13545,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363))));
});
triangulator.complex.make_rect = (function make_rect(point){return (new triangulator.complex.complex(cljs.core.first.call(null,point),cljs.core.second.call(null,point)));
});
triangulator.complex.mod_tau = (function mod_tau(x){return cljs.core.mod.call(null,x,triangulator.geometry.tau);
});

/**
* @constructor
* @param {*} length
* @param {*} angle
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.complex.polar = (function (length,angle,__meta,__extmap){
this.length = length;
this.angle = angle;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.complex.polar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.complex.polar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.complex.polar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k13557,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k13557,new cljs.core.Keyword(null,"length","length",4202507864)))
{return self__.length;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13557,new cljs.core.Keyword(null,"angle","angle",1106865221)))
{return self__.angle;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k13557,else__12689__auto__);
} else
{return null;
}
}
}
});
triangulator.complex.polar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__13556){var self__ = this;
var this__12693__auto____$1 = this;var pred__13559 = cljs.core.keyword_identical_QMARK_;var expr__13560 = k__12694__auto__;if(cljs.core.truth_(pred__13559.call(null,new cljs.core.Keyword(null,"length","length",4202507864),expr__13560)))
{return (new triangulator.complex.polar(G__13556,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13559.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),expr__13560)))
{return (new triangulator.complex.polar(self__.length,G__13556,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.complex.polar(self__.length,self__.angle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__13556),null));
}
}
});
triangulator.complex.polar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.complex.polar{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",4202507864),self__.length],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle],null))], null),self__.__extmap));
});
triangulator.complex.polar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.complex.polar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",4202507864),self__.length],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle],null))], null),self__.__extmap));
});
triangulator.complex.polar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.complex.polar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
var this__12682__auto____$1 = this;if(cljs.core.truth_((function (){var and__12088__auto__ = other__12683__auto__;if(cljs.core.truth_(and__12088__auto__))
{return ((this__12682__auto____$1.constructor === other__12683__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12682__auto____$1,other__12683__auto__));
} else
{return and__12088__auto__;
}
})()))
{return true;
} else
{return false;
}
});
triangulator.complex.polar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__13556){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.complex.polar(self__.length,self__.angle,G__13556,self__.__extmap,self__.__hash));
});
triangulator.complex.polar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.complex.polar(self__.length,self__.angle,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.complex.polar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$ = true;
triangulator.complex.polar.prototype.triangulator$protocols$Complex$add$arity$2 = (function (z,w){var self__ = this;
var z__$1 = this;return triangulator.complex.make_rect.call(null,triangulator.protocols.coords.call(null,z__$1)).triangulator$protocols$Complex$add$arity$2(null,w);
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$minus$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var l = new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);var a = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1);return (new triangulator.complex.polar(l,triangulator.complex.mod_tau.call(null,(a + triangulator.geometry.pi))));
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$multiply$arity$2 = (function (z,w){var self__ = this;
var z__$1 = this;var r1 = new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);var a1 = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1);var r2 = triangulator.protocols.length.call(null,w);var a2 = triangulator.protocols.angle.call(null,w);return (new triangulator.complex.polar((r1 * r2),(a1 + a2)));
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$conjugate$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return (new triangulator.complex.polar(new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1),(- new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1))));
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$div$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var l = new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);var a = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1);return (new triangulator.complex.polar((1 / l),triangulator.complex.mod_tau.call(null,(- a))));
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$length$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$angle$arity$1 = (function (z){var self__ = this;
var z__$1 = this;return new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1);
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$coords$arity$1 = (function (z){var self__ = this;
var z__$1 = this;var r = new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);var c = Math.cos.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1));var s = Math.sin.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * c),(r * s)], null);
});
triangulator.complex.polar.prototype.triangulator$protocols$Complex$scale_mult$arity$2 = (function (z,k){var self__ = this;
var z__$1 = this;var r = new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(z__$1);var a = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(z__$1);return (new triangulator.complex.polar((k * r),a));
});
triangulator.complex.polar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",4202507864),null,new cljs.core.Keyword(null,"angle","angle",1106865221),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.complex.polar(self__.length,self__.angle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.complex.polar.cljs$lang$type = true;
triangulator.complex.polar.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.complex/polar");
});
triangulator.complex.polar.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.complex/polar");
});
triangulator.complex.__GT_polar = (function __GT_polar(length,angle){return (new triangulator.complex.polar(length,angle));
});
triangulator.complex.map__GT_polar = (function map__GT_polar(G__13558){return (new triangulator.complex.polar(new cljs.core.Keyword(null,"length","length",4202507864).cljs$core$IFn$_invoke$arity$1(G__13558),new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(G__13558),null,cljs.core.dissoc.call(null,G__13558,new cljs.core.Keyword(null,"length","length",4202507864),new cljs.core.Keyword(null,"angle","angle",1106865221))));
});
triangulator.complex.make_polar = (function make_polar(r,a){return (new triangulator.complex.polar(r,a));
});
triangulator.complex.scalar_product = (function scalar_product(z,w){var p1 = triangulator.protocols.coords.call(null,z);var p2 = triangulator.protocols.coords.call(null,w);return triangulator.geometry.dot.call(null,p1,p2);
});
triangulator.complex.one = (function (){if(typeof triangulator.complex.t13562 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.complex.t13562 = (function (meta13563){
this.meta13563 = meta13563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.complex.t13562.cljs$lang$type = true;
triangulator.complex.t13562.cljs$lang$ctorStr = "triangulator.complex/t13562";
triangulator.complex.t13562.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.complex/t13562");
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$ = true;
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$add$arity$2 = (function (_,z){var self__ = this;
var ___$1 = this;return triangulator.protocols.add.call(null,z,(new triangulator.complex.complex(1,0)));
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$minus$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new triangulator.complex.complex(-1,0));
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$multiply$arity$2 = (function (_,w){var self__ = this;
var ___$1 = this;return w;
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$conjugate$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$div$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 1;
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$angle$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 0;
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$coords$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null);
});
triangulator.complex.t13562.prototype.triangulator$protocols$Complex$scale_mult$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new triangulator.complex.complex(k,0));
});
triangulator.complex.t13562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13564){var self__ = this;
var _13564__$1 = this;return self__.meta13563;
});
triangulator.complex.t13562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13564,meta13563__$1){var self__ = this;
var _13564__$1 = this;return (new triangulator.complex.t13562(meta13563__$1));
});
triangulator.complex.__GT_t13562 = (function __GT_t13562(meta13563){return (new triangulator.complex.t13562(meta13563));
});
}
return (new triangulator.complex.t13562(null));
})();
triangulator.complex.infinity = (function (){if(typeof triangulator.complex.t13565 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.complex.t13565 = (function (meta13566){
this.meta13566 = meta13566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.complex.t13565.cljs$lang$type = true;
triangulator.complex.t13565.cljs$lang$ctorStr = "triangulator.complex/t13565";
triangulator.complex.t13565.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.complex/t13565");
});
triangulator.complex.t13565.prototype.triangulator$protocols$Complex$ = true;
triangulator.complex.t13565.prototype.triangulator$protocols$Complex$div$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return triangulator.complex.zero;
});
triangulator.complex.t13565.prototype.triangulator$protocols$Complex$multiply$arity$2 = (function (this$,_){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13565.prototype.triangulator$protocols$Complex$scale_mult$arity$2 = (function (this$,_){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13565.prototype.triangulator$protocols$Complex$add$arity$2 = (function (this$,_){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13567){var self__ = this;
var _13567__$1 = this;return self__.meta13566;
});
triangulator.complex.t13565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13567,meta13566__$1){var self__ = this;
var _13567__$1 = this;return (new triangulator.complex.t13565(meta13566__$1));
});
triangulator.complex.__GT_t13565 = (function __GT_t13565(meta13566){return (new triangulator.complex.t13565(meta13566));
});
}
return (new triangulator.complex.t13565(null));
})();
triangulator.complex.zero = (function (){if(typeof triangulator.complex.t13568 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.complex.t13568 = (function (meta13569){
this.meta13569 = meta13569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.complex.t13568.cljs$lang$type = true;
triangulator.complex.t13568.cljs$lang$ctorStr = "triangulator.complex/t13568";
triangulator.complex.t13568.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.complex/t13568");
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$ = true;
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 0;
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$coords$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null);
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$add$arity$2 = (function (_,w){var self__ = this;
var ___$1 = this;return w;
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$scale_mult$arity$2 = (function (this$,_){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$multiply$arity$2 = (function (this$,_){var self__ = this;
var this$__$1 = this;return this$__$1;
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$div$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return triangulator.complex.infinity;
});
triangulator.complex.t13568.prototype.triangulator$protocols$Complex$conjugate$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return triangulator.complex.zero;
});
triangulator.complex.t13568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13570){var self__ = this;
var _13570__$1 = this;return self__.meta13569;
});
triangulator.complex.t13568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13570,meta13569__$1){var self__ = this;
var _13570__$1 = this;return (new triangulator.complex.t13568(meta13569__$1));
});
triangulator.complex.__GT_t13568 = (function __GT_t13568(meta13569){return (new triangulator.complex.t13568(meta13569));
});
}
return (new triangulator.complex.t13568(null));
})();
/**
* returns the function that translates by given vector
*/
triangulator.complex.translation = (function translation(a){return (function (z){var z__$1 = triangulator.complex.make_rect.call(null,z);var a__$1 = triangulator.complex.make_rect.call(null,a);var res = triangulator.protocols.add.call(null,z__$1,a__$1);return triangulator.protocols.coords.call(null,res);
});
});
/**
* return the function that rotates counter clockwise
* by given angle about given point
*/
triangulator.complex.rotation = (function rotation(point,angle){return (function (z){var r = triangulator.complex.make_polar.call(null,1,angle);var a = triangulator.complex.make_rect.call(null,point);var z__$1 = triangulator.complex.make_rect.call(null,z);var rz = triangulator.protocols.multiply.call(null,z__$1,r);var res = triangulator.protocols.add.call(null,rz,triangulator.protocols.multiply.call(null,a,triangulator.protocols.add.call(null,triangulator.complex.one,triangulator.protocols.minus.call(null,r))));return triangulator.protocols.coords.call(null,res);
});
});
/**
* return homothety about point by factor
*/
triangulator.complex.homothety = (function homothety(point,k){var a = triangulator.complex.make_rect.call(null,point);var ma = triangulator.protocols.minus.call(null,a);return ((function (a,ma){
return (function (z){var z__$1 = triangulator.complex.make_rect.call(null,z);var res = triangulator.protocols.add.call(null,a,triangulator.protocols.scale_mult.call(null,triangulator.protocols.add.call(null,z__$1,ma),k));return triangulator.protocols.coords.call(null,res);
});
;})(a,ma))
});
/**
* return reflection in line through a and b
*/
triangulator.complex.reflection = (function reflection(a,b){return (function (z){var ac = triangulator.protocols.conjugate.call(null,a);var bc = triangulator.protocols.conjugate.call(null,b);var denom = triangulator.protocols.div.call(null,triangulator.protocols.add.call(null,ac,triangulator.protocols.minus.call(null,bc)));var t1 = triangulator.protocols.add.call(null,a,triangulator.protocols.minus.call(null,b));var t2 = triangulator.protocols.add.call(null,triangulator.protocols.multiply.call(null,a,bc),triangulator.protocols.minus.call(null,triangulator.protocols.multiply.call(null,ac,b)));var zc = triangulator.protocols.conjugate.call(null,z);return triangulator.protocols.multiply.call(null,denom,triangulator.protocols.add.call(null,triangulator.protocols.multiply.call(null,t1,zc),triangulator.protocols.minus.call(null,t2)));
});
});
/**
* inversion in center with power
*/
triangulator.complex.inversion = (function inversion(center,power){return (function (z){var center__$1 = triangulator.complex.make_rect.call(null,center);var cbar = triangulator.protocols.conjugate.call(null,center__$1);var zbar = triangulator.protocols.conjugate.call(null,triangulator.complex.make_rect.call(null,z));var denom = triangulator.protocols.div.call(null,triangulator.protocols.add.call(null,zbar,triangulator.protocols.minus.call(null,cbar)));var term1 = triangulator.protocols.scale_mult.call(null,denom,(power * power));var res = triangulator.protocols.add.call(null,center__$1,term1);return triangulator.protocols.coords.call(null,res);
});
});

//# sourceMappingURL=complex.js.map