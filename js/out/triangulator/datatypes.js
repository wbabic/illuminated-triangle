// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.datatypes');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);

/**
* @constructor
* @param {*} point
* @param {*} style
* @param {*} lable
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Point = (function (point,style,lable,__meta,__extmap){
this.point = point;
this.style = style;
this.lable = lable;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.datatypes.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21542,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21542,new cljs.core.Keyword(null,"point","point",1120749826)))
{return self__.point;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21542,new cljs.core.Keyword(null,"style","style",1123684643)))
{return self__.style;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21542,new cljs.core.Keyword(null,"lable","lable",1116631864)))
{return self__.lable;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21542,else__12689__auto__);
} else
{return null;
}
}
}
}
});
triangulator.datatypes.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21541){var self__ = this;
var this__12693__auto____$1 = this;var pred__21544 = cljs.core.keyword_identical_QMARK_;var expr__21545 = k__12694__auto__;if(cljs.core.truth_(pred__21544.call(null,new cljs.core.Keyword(null,"point","point",1120749826),expr__21545)))
{return (new triangulator.datatypes.Point(G__21541,self__.style,self__.lable,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21544.call(null,new cljs.core.Keyword(null,"style","style",1123684643),expr__21545)))
{return (new triangulator.datatypes.Point(self__.point,G__21541,self__.lable,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21544.call(null,new cljs.core.Keyword(null,"lable","lable",1116631864),expr__21545)))
{return (new triangulator.datatypes.Point(self__.point,self__.style,G__21541,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Point(self__.point,self__.style,self__.lable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21541),null));
}
}
}
});
triangulator.datatypes.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Point{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lable","lable",1116631864),self__.lable],null))], null),self__.__extmap));
});
triangulator.datatypes.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lable","lable",1116631864),self__.lable],null))], null),self__.__extmap));
});
triangulator.datatypes.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21541){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Point(self__.point,self__.style,self__.lable,G__21541,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Point(self__.point,self__.style,self__.lable,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lable","lable",1116631864),null,new cljs.core.Keyword(null,"point","point",1120749826),null,new cljs.core.Keyword(null,"style","style",1123684643),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Point(self__.point,self__.style,self__.lable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Point.cljs$lang$type = true;
triangulator.datatypes.Point.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Point");
});
triangulator.datatypes.Point.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Point");
});
triangulator.datatypes.__GT_Point = (function __GT_Point(point,style,lable){return (new triangulator.datatypes.Point(point,style,lable));
});
triangulator.datatypes.map__GT_Point = (function map__GT_Point(G__21543){return (new triangulator.datatypes.Point(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(G__21543),new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(G__21543),new cljs.core.Keyword(null,"lable","lable",1116631864).cljs$core$IFn$_invoke$arity$1(G__21543),null,cljs.core.dissoc.call(null,G__21543,new cljs.core.Keyword(null,"point","point",1120749826),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"lable","lable",1116631864))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Line = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.datatypes.Line.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21548,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21548,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21548,else__12689__auto__);
} else
{return null;
}
}
});
triangulator.datatypes.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21547){var self__ = this;
var this__12693__auto____$1 = this;var pred__21550 = cljs.core.keyword_identical_QMARK_;var expr__21551 = k__12694__auto__;if(cljs.core.truth_(pred__21550.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__21551)))
{return (new triangulator.datatypes.Line(G__21547,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Line(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21547),null));
}
});
triangulator.datatypes.Line.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Line{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
triangulator.datatypes.Line.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
triangulator.datatypes.Line.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Line.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21547){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Line(self__.points,G__21547,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Line.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Line(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Line.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Line.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Line(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Line.cljs$lang$type = true;
triangulator.datatypes.Line.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Line");
});
triangulator.datatypes.Line.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Line");
});
triangulator.datatypes.__GT_Line = (function __GT_Line(points){return (new triangulator.datatypes.Line(points));
});
triangulator.datatypes.map__GT_Line = (function map__GT_Line(G__21549){return (new triangulator.datatypes.Line(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__21549),null,cljs.core.dissoc.call(null,G__21549,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} center
* @param {*} radius
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Disk = (function (center,radius,__meta,__extmap){
this.center = center;
this.radius = radius;
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
triangulator.datatypes.Disk.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21554,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21554,new cljs.core.Keyword(null,"center","center",3944857543)))
{return self__.center;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21554,new cljs.core.Keyword(null,"radius","radius",4370292740)))
{return self__.radius;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21554,else__12689__auto__);
} else
{return null;
}
}
}
});
triangulator.datatypes.Disk.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21553){var self__ = this;
var this__12693__auto____$1 = this;var pred__21556 = cljs.core.keyword_identical_QMARK_;var expr__21557 = k__12694__auto__;if(cljs.core.truth_(pred__21556.call(null,new cljs.core.Keyword(null,"center","center",3944857543),expr__21557)))
{return (new triangulator.datatypes.Disk(G__21553,self__.radius,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21556.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740),expr__21557)))
{return (new triangulator.datatypes.Disk(self__.center,G__21553,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Disk(self__.center,self__.radius,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21553),null));
}
}
});
triangulator.datatypes.Disk.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Disk{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center","center",3944857543),self__.center],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
triangulator.datatypes.Disk.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Disk.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center","center",3944857543),self__.center],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
triangulator.datatypes.Disk.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Disk.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Disk.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21553){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Disk(self__.center,self__.radius,G__21553,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Disk.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Disk(self__.center,self__.radius,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Disk.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Disk.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",4370292740),null,new cljs.core.Keyword(null,"center","center",3944857543),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Disk(self__.center,self__.radius,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Disk.cljs$lang$type = true;
triangulator.datatypes.Disk.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Disk");
});
triangulator.datatypes.Disk.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Disk");
});
triangulator.datatypes.__GT_Disk = (function __GT_Disk(center,radius){return (new triangulator.datatypes.Disk(center,radius));
});
triangulator.datatypes.map__GT_Disk = (function map__GT_Disk(G__21555){return (new triangulator.datatypes.Disk(new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(G__21555),new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(G__21555),null,cljs.core.dissoc.call(null,G__21555,new cljs.core.Keyword(null,"center","center",3944857543),new cljs.core.Keyword(null,"radius","radius",4370292740))));
});

/**
* @constructor
* @param {*} p1
* @param {*} p2
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Rectangle = (function (p1,p2,__meta,__extmap){
this.p1 = p1;
this.p2 = p2;
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
triangulator.datatypes.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21560,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21560,new cljs.core.Keyword(null,"p1","p1",1013907763)))
{return self__.p1;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21560,new cljs.core.Keyword(null,"p2","p2",1013907764)))
{return self__.p2;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21560,else__12689__auto__);
} else
{return null;
}
}
}
});
triangulator.datatypes.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21559){var self__ = this;
var this__12693__auto____$1 = this;var pred__21562 = cljs.core.keyword_identical_QMARK_;var expr__21563 = k__12694__auto__;if(cljs.core.truth_(pred__21562.call(null,new cljs.core.Keyword(null,"p1","p1",1013907763),expr__21563)))
{return (new triangulator.datatypes.Rectangle(G__21559,self__.p2,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21562.call(null,new cljs.core.Keyword(null,"p2","p2",1013907764),expr__21563)))
{return (new triangulator.datatypes.Rectangle(self__.p1,G__21559,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21559),null));
}
}
});
triangulator.datatypes.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Rectangle{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21559){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Rectangle(self__.p1,self__.p2,G__21559,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",1013907763),null,new cljs.core.Keyword(null,"p2","p2",1013907764),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Rectangle.cljs$lang$type = true;
triangulator.datatypes.Rectangle.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Rectangle");
});
triangulator.datatypes.Rectangle.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Rectangle");
});
triangulator.datatypes.__GT_Rectangle = (function __GT_Rectangle(p1,p2){return (new triangulator.datatypes.Rectangle(p1,p2));
});
triangulator.datatypes.map__GT_Rectangle = (function map__GT_Rectangle(G__21561){return (new triangulator.datatypes.Rectangle(new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(G__21561),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(G__21561),null,cljs.core.dissoc.call(null,G__21561,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764))));
});

/**
* @constructor
* @param {*} p1
* @param {*} p2
* @param {*} p3
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Triangle = (function (p1,p2,p3,__meta,__extmap){
this.p1 = p1;
this.p2 = p2;
this.p3 = p3;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.datatypes.Triangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Triangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Triangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21566,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21566,new cljs.core.Keyword(null,"p1","p1",1013907763)))
{return self__.p1;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21566,new cljs.core.Keyword(null,"p2","p2",1013907764)))
{return self__.p2;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k21566,new cljs.core.Keyword(null,"p3","p3",1013907765)))
{return self__.p3;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21566,else__12689__auto__);
} else
{return null;
}
}
}
}
});
triangulator.datatypes.Triangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21565){var self__ = this;
var this__12693__auto____$1 = this;var pred__21568 = cljs.core.keyword_identical_QMARK_;var expr__21569 = k__12694__auto__;if(cljs.core.truth_(pred__21568.call(null,new cljs.core.Keyword(null,"p1","p1",1013907763),expr__21569)))
{return (new triangulator.datatypes.Triangle(G__21565,self__.p2,self__.p3,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21568.call(null,new cljs.core.Keyword(null,"p2","p2",1013907764),expr__21569)))
{return (new triangulator.datatypes.Triangle(self__.p1,G__21565,self__.p3,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21568.call(null,new cljs.core.Keyword(null,"p3","p3",1013907765),expr__21569)))
{return (new triangulator.datatypes.Triangle(self__.p1,self__.p2,G__21565,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Triangle(self__.p1,self__.p2,self__.p3,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21565),null));
}
}
}
});
triangulator.datatypes.Triangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Triangle{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p3","p3",1013907765),self__.p3],null))], null),self__.__extmap));
});
triangulator.datatypes.Triangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Triangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p3","p3",1013907765),self__.p3],null))], null),self__.__extmap));
});
triangulator.datatypes.Triangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Triangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Triangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21565){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Triangle(self__.p1,self__.p2,self__.p3,G__21565,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Triangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Triangle(self__.p1,self__.p2,self__.p3,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Triangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Triangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"p1","p1",1013907763),null,new cljs.core.Keyword(null,"p3","p3",1013907765),null,new cljs.core.Keyword(null,"p2","p2",1013907764),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Triangle(self__.p1,self__.p2,self__.p3,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Triangle.cljs$lang$type = true;
triangulator.datatypes.Triangle.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Triangle");
});
triangulator.datatypes.Triangle.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Triangle");
});
triangulator.datatypes.__GT_Triangle = (function __GT_Triangle(p1,p2,p3){return (new triangulator.datatypes.Triangle(p1,p2,p3));
});
triangulator.datatypes.map__GT_Triangle = (function map__GT_Triangle(G__21567){return (new triangulator.datatypes.Triangle(new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(G__21567),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(G__21567),new cljs.core.Keyword(null,"p3","p3",1013907765).cljs$core$IFn$_invoke$arity$1(G__21567),null,cljs.core.dissoc.call(null,G__21567,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764),new cljs.core.Keyword(null,"p3","p3",1013907765))));
});

/**
* @constructor
* @param {*} style
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
triangulator.datatypes.Style = (function (style,__meta,__extmap){
this.style = style;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
triangulator.datatypes.Style.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12681__auto__){var self__ = this;
var this__12681__auto____$1 = this;var h__12511__auto__ = self__.__hash;if(!((h__12511__auto__ == null)))
{return h__12511__auto__;
} else
{var h__12511__auto____$1 = cljs.core.hash_imap.call(null,this__12681__auto____$1);self__.__hash = h__12511__auto____$1;
return h__12511__auto____$1;
}
});
triangulator.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12686__auto__,k__12687__auto__){var self__ = this;
var this__12686__auto____$1 = this;return cljs.core._lookup.call(null,this__12686__auto____$1,k__12687__auto__,null);
});
triangulator.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12688__auto__,k21572,else__12689__auto__){var self__ = this;
var this__12688__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k21572,new cljs.core.Keyword(null,"style","style",1123684643)))
{return self__.style;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21572,else__12689__auto__);
} else
{return null;
}
}
});
triangulator.datatypes.Style.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12693__auto__,k__12694__auto__,G__21571){var self__ = this;
var this__12693__auto____$1 = this;var pred__21574 = cljs.core.keyword_identical_QMARK_;var expr__21575 = k__12694__auto__;if(cljs.core.truth_(pred__21574.call(null,new cljs.core.Keyword(null,"style","style",1123684643),expr__21575)))
{return (new triangulator.datatypes.Style(G__21571,self__.__meta,self__.__extmap,null));
} else
{return (new triangulator.datatypes.Style(self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12694__auto__,G__21571),null));
}
});
triangulator.datatypes.Style.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12700__auto__,writer__12701__auto__,opts__12702__auto__){var self__ = this;
var this__12700__auto____$1 = this;var pr_pair__12703__auto__ = ((function (this__12700__auto____$1){
return (function (keyval__12704__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,cljs.core.pr_writer,""," ","",opts__12702__auto__,keyval__12704__auto__);
});})(this__12700__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12701__auto__,pr_pair__12703__auto__,"#triangulator.datatypes.Style{",", ","}",opts__12702__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null))], null),self__.__extmap));
});
triangulator.datatypes.Style.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12691__auto__,entry__12692__auto__){var self__ = this;
var this__12691__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12692__auto__))
{return cljs.core._assoc.call(null,this__12691__auto____$1,cljs.core._nth.call(null,entry__12692__auto__,0),cljs.core._nth.call(null,entry__12692__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12691__auto____$1,entry__12692__auto__);
}
});
triangulator.datatypes.Style.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12698__auto__){var self__ = this;
var this__12698__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null))], null),self__.__extmap));
});
triangulator.datatypes.Style.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12690__auto__){var self__ = this;
var this__12690__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
triangulator.datatypes.Style.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12682__auto__,other__12683__auto__){var self__ = this;
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
triangulator.datatypes.Style.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12685__auto__,G__21571){var self__ = this;
var this__12685__auto____$1 = this;return (new triangulator.datatypes.Style(self__.style,G__21571,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Style.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12680__auto__){var self__ = this;
var this__12680__auto____$1 = this;return (new triangulator.datatypes.Style(self__.style,self__.__meta,self__.__extmap,self__.__hash));
});
triangulator.datatypes.Style.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12684__auto__){var self__ = this;
var this__12684__auto____$1 = this;return self__.__meta;
});
triangulator.datatypes.Style.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12695__auto__,k__12696__auto__){var self__ = this;
var this__12695__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),null], null), null),k__12696__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12695__auto____$1),self__.__meta),k__12696__auto__);
} else
{return (new triangulator.datatypes.Style(self__.style,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12696__auto__)),null));
}
});
triangulator.datatypes.Style.cljs$lang$type = true;
triangulator.datatypes.Style.cljs$lang$ctorPrSeq = (function (this__12720__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"triangulator.datatypes/Style");
});
triangulator.datatypes.Style.cljs$lang$ctorPrWriter = (function (this__12720__auto__,writer__12721__auto__){return cljs.core._write.call(null,writer__12721__auto__,"triangulator.datatypes/Style");
});
triangulator.datatypes.__GT_Style = (function __GT_Style(style){return (new triangulator.datatypes.Style(style));
});
triangulator.datatypes.map__GT_Style = (function map__GT_Style(G__21573){return (new triangulator.datatypes.Style(new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(G__21573),null,cljs.core.dissoc.call(null,G__21573,new cljs.core.Keyword(null,"style","style",1123684643))));
});
triangulator.datatypes.point = (function() {
var point = null;
var point__1 = (function (vector){return point.call(null,vector,null,null);
});
var point__3 = (function (vector,style,label){return triangulator.datatypes.__GT_Point.call(null,vector,style,label);
});
point = function(vector,style,label){
switch(arguments.length){
case 1:
return point__1.call(this,vector);
case 3:
return point__3.call(this,vector,style,label);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
point.cljs$core$IFn$_invoke$arity$1 = point__1;
point.cljs$core$IFn$_invoke$arity$3 = point__3;
return point;
})()
;
triangulator.datatypes.line = (function line(points){return triangulator.datatypes.__GT_Line.call(null,points);
});
triangulator.datatypes.circle = (function circle(center,radius){return triangulator.datatypes.__GT_Disk.call(null,center,radius);
});
triangulator.datatypes.rectangle = (function rectangle(p1,p2){return triangulator.datatypes.__GT_Rectangle.call(null,p1,p2);
});
triangulator.datatypes.triangle = (function triangle(p1,p2,p3){return triangulator.datatypes.__GT_Triangle.call(null,p1,p2,p3);
});
triangulator.datatypes.style = (function style(style__$1){return triangulator.datatypes.__GT_Style.call(null,style__$1);
});

//# sourceMappingURL=datatypes.js.map