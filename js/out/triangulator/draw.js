// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.draw');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('triangulator.datatypes');
goog.require('triangulator.datatypes');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
triangulator.draw.color_lookup = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lt-blue","lt-blue",1445620977),new cljs.core.Keyword(null,"orange","orange",4300020128),new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"grey","grey",1017085521),new cljs.core.Keyword(null,"blue","blue",1016931276),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"pink","pink",1017345256),new cljs.core.Keyword(null,"lt-red","lt-red",4214434366),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"cyan","cyan",1016972949),new cljs.core.Keyword(null,"lt-green","lt-green",1517002224)],["rgba(0,   0,   255, 0.1)","#FF8108","rgba(255, 0,   0,   0.8)","rgb(200,200,200)","rgba(200, 200, 200, 0.1)","rgba(0,   0,   255, 0.8)","rgba(0,   255, 0,   0.8)","rgba(100, 100, 100, 0.3)","#EF0BEE","rgba(255, 0,   0,   0.1)","#FFFB00","#02E6FB","rgba(0,   255, 0,   0.1)"]);
triangulator.draw.IRender = (function (){var obj39758 = {};return obj39758;
})();
triangulator.draw.render = (function render(object,context){if((function (){var and__12088__auto__ = object;if(and__12088__auto__)
{return object.triangulator$draw$IRender$render$arity$2;
} else
{return and__12088__auto__;
}
})())
{return object.triangulator$draw$IRender$render$arity$2(object,context);
} else
{var x__12727__auto__ = (((object == null))?null:object);return (function (){var or__12100__auto__ = (triangulator.draw.render[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (triangulator.draw.render["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",object);
}
}
})().call(null,object,context);
}
});
triangulator.datatypes.Point.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Point.prototype.triangulator$draw$IRender$render$arity$2 = (function (point,context){var point__$1 = this;var p = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(point__$1);var radius = 3;context.beginPath();
context.arc(p.call(null,0),p.call(null,1),radius,0,(2 * Math.PI),false);
context.stroke();
context.fill();
return context.closePath();
});
triangulator.datatypes.Style.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Style.prototype.triangulator$draw$IRender$render$arity$2 = (function (style,context){var style__$1 = this;var s = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(style__$1);var seq__39759 = cljs.core.seq.call(null,s);var chunk__39760 = null;var count__39761 = 0;var i__39762 = 0;while(true){
if((i__39762 < count__39761))
{var vec__39763 = cljs.core._nth.call(null,chunk__39760,i__39762);var k = cljs.core.nth.call(null,vec__39763,0,null);var v = cljs.core.nth.call(null,vec__39763,1,null);var G__39764_39767 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lineWidth","lineWidth",3505084836),G__39764_39767))
{context.lineWidth = v;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lineDash","lineDash",2202070296),G__39764_39767))
{context.setLineDash = v;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stroke","stroke",4416891306),G__39764_39767))
{context.strokeStyle = triangulator.draw.color_lookup.call(null,v);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fill","fill",1017047285),G__39764_39767))
{context.fillStyle = triangulator.draw.color_lookup.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(k)].join('')));
} else
{}
}
}
}
}
{
var G__39768 = seq__39759;
var G__39769 = chunk__39760;
var G__39770 = count__39761;
var G__39771 = (i__39762 + 1);
seq__39759 = G__39768;
chunk__39760 = G__39769;
count__39761 = G__39770;
i__39762 = G__39771;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39759);if(temp__4092__auto__)
{var seq__39759__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39759__$1))
{var c__12848__auto__ = cljs.core.chunk_first.call(null,seq__39759__$1);{
var G__39772 = cljs.core.chunk_rest.call(null,seq__39759__$1);
var G__39773 = c__12848__auto__;
var G__39774 = cljs.core.count.call(null,c__12848__auto__);
var G__39775 = 0;
seq__39759 = G__39772;
chunk__39760 = G__39773;
count__39761 = G__39774;
i__39762 = G__39775;
continue;
}
} else
{var vec__39765 = cljs.core.first.call(null,seq__39759__$1);var k = cljs.core.nth.call(null,vec__39765,0,null);var v = cljs.core.nth.call(null,vec__39765,1,null);var G__39766_39776 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lineWidth","lineWidth",3505084836),G__39766_39776))
{context.lineWidth = v;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lineDash","lineDash",2202070296),G__39766_39776))
{context.setLineDash = v;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stroke","stroke",4416891306),G__39766_39776))
{context.strokeStyle = triangulator.draw.color_lookup.call(null,v);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fill","fill",1017047285),G__39766_39776))
{context.fillStyle = triangulator.draw.color_lookup.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(k)].join('')));
} else
{}
}
}
}
}
{
var G__39777 = cljs.core.next.call(null,seq__39759__$1);
var G__39778 = null;
var G__39779 = 0;
var G__39780 = 0;
seq__39759 = G__39777;
chunk__39760 = G__39778;
count__39761 = G__39779;
i__39762 = G__39780;
continue;
}
}
} else
{return null;
}
}
break;
}
});
triangulator.datatypes.Rectangle.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Rectangle.prototype.triangulator$draw$IRender$render$arity$2 = (function (rect,context){var rect__$1 = this;var p1 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(rect__$1));var p2 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(rect__$1));return context.fillRect(0,0,600,600);
});
triangulator.datatypes.Line.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Line.prototype.triangulator$draw$IRender$render$arity$2 = (function (line,context){var line__$1 = this;var points = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(line__$1);var p1 = points.call(null,0);var p2 = points.call(null,1);var radius = 5;context.beginPath();
context.moveTo(p1.call(null,0),p1.call(null,1));
context.lineTo(p2.call(null,0),p2.call(null,1));
context.stroke();
return context.closePath();
});
triangulator.datatypes.Triangle.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Triangle.prototype.triangulator$draw$IRender$render$arity$2 = (function (triangle,context){var triangle__$1 = this;var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(triangle__$1);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(triangle__$1);var p3 = new cljs.core.Keyword(null,"p3","p3",1013907765).cljs$core$IFn$_invoke$arity$1(triangle__$1);context.beginPath();
context.moveTo(p1.call(null,0),p1.call(null,1));
context.lineTo(p2.call(null,0),p2.call(null,1));
context.lineTo(p3.call(null,0),p3.call(null,1));
context.fill();
return context.closePath();
});
triangulator.datatypes.Disk.prototype.triangulator$draw$IRender$ = true;
triangulator.datatypes.Disk.prototype.triangulator$draw$IRender$render$arity$2 = (function (circle,context){var circle__$1 = this;var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(circle__$1);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(circle__$1);context.beginPath();
context.arc(center.call(null,0),center.call(null,1),radius,0,(2 * Math.PI),false);
context.stroke();
context.fill();
context.closePath();
return triangulator.draw.render.call(null,triangulator.datatypes.point.call(null,center),context);
});
triangulator.draw.surface = (function surface(id){var canvas = document.getElementById(id);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas,new cljs.core.Keyword(null,"width","width",1127031096),canvas.width,new cljs.core.Keyword(null,"height","height",4087841945),canvas.height], null);
});
triangulator.draw.drawing_loop = (function drawing_loop(canvas,width,height){var draw_chan = cljs.core.async.chan.call(null);var context = canvas.getContext("2d");var c__15447__auto___39943 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___39943,draw_chan,context){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___39943,draw_chan,context){
return (function (state_39909){var state_val_39910 = (state_39909[1]);if((state_val_39910 === 1))
{var state_39909__$1 = state_39909;var statearr_39911_39944 = state_39909__$1;(statearr_39911_39944[2] = null);
(statearr_39911_39944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 2))
{var state_39909__$1 = state_39909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39909__$1,4,draw_chan);
} else
{if((state_val_39910 === 3))
{var inst_39907 = (state_39909[2]);var state_39909__$1 = state_39909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39909__$1,inst_39907);
} else
{if((state_val_39910 === 4))
{var inst_39864 = (state_39909[2]);var inst_39869 = cljs.core.seq.call(null,inst_39864);var inst_39870 = inst_39869;var inst_39871 = null;var inst_39872 = 0;var inst_39873 = 0;var state_39909__$1 = (function (){var statearr_39912 = state_39909;(statearr_39912[7] = inst_39872);
(statearr_39912[8] = inst_39873);
(statearr_39912[9] = inst_39871);
(statearr_39912[10] = inst_39870);
return statearr_39912;
})();var statearr_39913_39945 = state_39909__$1;(statearr_39913_39945[2] = null);
(statearr_39913_39945[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 5))
{var inst_39872 = (state_39909[7]);var inst_39873 = (state_39909[8]);var inst_39875 = (inst_39873 < inst_39872);var inst_39876 = inst_39875;var state_39909__$1 = state_39909;if(cljs.core.truth_(inst_39876))
{var statearr_39917_39946 = state_39909__$1;(statearr_39917_39946[1] = 7);
} else
{var statearr_39918_39947 = state_39909__$1;(statearr_39918_39947[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 6))
{var inst_39904 = (state_39909[2]);var state_39909__$1 = (function (){var statearr_39919 = state_39909;(statearr_39919[11] = inst_39904);
return statearr_39919;
})();var statearr_39920_39948 = state_39909__$1;(statearr_39920_39948[2] = null);
(statearr_39920_39948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 7))
{var inst_39872 = (state_39909[7]);var inst_39873 = (state_39909[8]);var inst_39871 = (state_39909[9]);var inst_39870 = (state_39909[10]);var inst_39878 = cljs.core._nth.call(null,inst_39871,inst_39873);var inst_39879 = triangulator.draw.render.call(null,inst_39878,context);var inst_39880 = (inst_39873 + 1);var tmp39914 = inst_39872;var tmp39915 = inst_39871;var tmp39916 = inst_39870;var inst_39870__$1 = tmp39916;var inst_39871__$1 = tmp39915;var inst_39872__$1 = tmp39914;var inst_39873__$1 = inst_39880;var state_39909__$1 = (function (){var statearr_39921 = state_39909;(statearr_39921[7] = inst_39872__$1);
(statearr_39921[8] = inst_39873__$1);
(statearr_39921[9] = inst_39871__$1);
(statearr_39921[10] = inst_39870__$1);
(statearr_39921[12] = inst_39879);
return statearr_39921;
})();var statearr_39922_39949 = state_39909__$1;(statearr_39922_39949[2] = null);
(statearr_39922_39949[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 8))
{var inst_39870 = (state_39909[10]);var inst_39883 = (state_39909[13]);var inst_39883__$1 = cljs.core.seq.call(null,inst_39870);var state_39909__$1 = (function (){var statearr_39923 = state_39909;(statearr_39923[13] = inst_39883__$1);
return statearr_39923;
})();if(inst_39883__$1)
{var statearr_39924_39950 = state_39909__$1;(statearr_39924_39950[1] = 10);
} else
{var statearr_39925_39951 = state_39909__$1;(statearr_39925_39951[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 9))
{var inst_39902 = (state_39909[2]);var state_39909__$1 = state_39909;var statearr_39926_39952 = state_39909__$1;(statearr_39926_39952[2] = inst_39902);
(statearr_39926_39952[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 10))
{var inst_39883 = (state_39909[13]);var inst_39885 = cljs.core.chunked_seq_QMARK_.call(null,inst_39883);var state_39909__$1 = state_39909;if(inst_39885)
{var statearr_39927_39953 = state_39909__$1;(statearr_39927_39953[1] = 13);
} else
{var statearr_39928_39954 = state_39909__$1;(statearr_39928_39954[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 11))
{var state_39909__$1 = state_39909;var statearr_39929_39955 = state_39909__$1;(statearr_39929_39955[2] = null);
(statearr_39929_39955[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 12))
{var inst_39900 = (state_39909[2]);var state_39909__$1 = state_39909;var statearr_39930_39956 = state_39909__$1;(statearr_39930_39956[2] = inst_39900);
(statearr_39930_39956[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 13))
{var inst_39883 = (state_39909[13]);var inst_39887 = cljs.core.chunk_first.call(null,inst_39883);var inst_39888 = cljs.core.chunk_rest.call(null,inst_39883);var inst_39889 = cljs.core.count.call(null,inst_39887);var inst_39870 = inst_39888;var inst_39871 = inst_39887;var inst_39872 = inst_39889;var inst_39873 = 0;var state_39909__$1 = (function (){var statearr_39931 = state_39909;(statearr_39931[7] = inst_39872);
(statearr_39931[8] = inst_39873);
(statearr_39931[9] = inst_39871);
(statearr_39931[10] = inst_39870);
return statearr_39931;
})();var statearr_39932_39957 = state_39909__$1;(statearr_39932_39957[2] = null);
(statearr_39932_39957[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 14))
{var inst_39883 = (state_39909[13]);var inst_39892 = cljs.core.first.call(null,inst_39883);var inst_39893 = triangulator.draw.render.call(null,inst_39892,context);var inst_39894 = cljs.core.next.call(null,inst_39883);var inst_39870 = inst_39894;var inst_39871 = null;var inst_39872 = 0;var inst_39873 = 0;var state_39909__$1 = (function (){var statearr_39933 = state_39909;(statearr_39933[14] = inst_39893);
(statearr_39933[7] = inst_39872);
(statearr_39933[8] = inst_39873);
(statearr_39933[9] = inst_39871);
(statearr_39933[10] = inst_39870);
return statearr_39933;
})();var statearr_39934_39958 = state_39909__$1;(statearr_39934_39958[2] = null);
(statearr_39934_39958[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39910 === 15))
{var inst_39897 = (state_39909[2]);var state_39909__$1 = state_39909;var statearr_39935_39959 = state_39909__$1;(statearr_39935_39959[2] = inst_39897);
(statearr_39935_39959[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15447__auto___39943,draw_chan,context))
;return ((function (switch__15432__auto__,c__15447__auto___39943,draw_chan,context){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_39939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39939[0] = state_machine__15433__auto__);
(statearr_39939[1] = 1);
return statearr_39939;
});
var state_machine__15433__auto____1 = (function (state_39909){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_39909);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e39940){if((e39940 instanceof Object))
{var ex__15436__auto__ = e39940;var statearr_39941_39960 = state_39909;(statearr_39941_39960[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39961 = state_39909;
state_39909 = G__39961;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_39909){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_39909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___39943,draw_chan,context))
})();var state__15449__auto__ = (function (){var statearr_39942 = f__15448__auto__.call(null);(statearr_39942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___39943);
return statearr_39942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___39943,draw_chan,context))
);
return draw_chan;
});

//# sourceMappingURL=draw.js.map