// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.handlers');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('triangulator.geometry');
goog.require('om.dom');
goog.require('om.core');
goog.require('triangulator.datatypes');
goog.require('om.core');
goog.require('triangulator.geometry');
goog.require('triangulator.complex');
goog.require('triangulator.complex');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('triangulator.datatypes');
cljs.core.enable_console_print_BANG_.call(null);
triangulator.handlers.clear = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangulator.datatypes.style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)], null)),triangulator.datatypes.rectangle.call(null,triangulator.datatypes.point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)),triangulator.datatypes.point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [600,600], null)))], null);
triangulator.handlers.project_x = (function project_x(p){var vec__76829 = p;var x = cljs.core.nth.call(null,vec__76829,0,null);var y = cljs.core.nth.call(null,vec__76829,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y], null);
});
triangulator.handlers.project_y = (function project_y(p){var vec__76831 = p;var x = cljs.core.nth.call(null,vec__76831,0,null);var y = cljs.core.nth.call(null,vec__76831,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,0], null);
});
/**
* clear-screen draw item draw point and coords of value
*/
triangulator.handlers.draw_point = (function draw_point(value,draw_chan,style){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_76855){var state_val_76856 = (state_76855[1]);if((state_val_76856 === 2))
{var inst_76853 = (state_76855[2]);var state_76855__$1 = state_76855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76855__$1,inst_76853);
} else
{if((state_val_76856 === 1))
{var inst_76848 = triangulator.datatypes.style.call(null,style);var inst_76849 = triangulator.datatypes.point.call(null,value);var inst_76850 = [inst_76848,inst_76849];var inst_76851 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76850,null));var state_76855__$1 = state_76855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76855__$1,2,draw_chan,inst_76851);
} else
{return null;
}
}
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_76860 = [null,null,null,null,null,null,null];(statearr_76860[0] = state_machine__15433__auto__);
(statearr_76860[1] = 1);
return statearr_76860;
});
var state_machine__15433__auto____1 = (function (state_76855){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_76855);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e76861){if((e76861 instanceof Object))
{var ex__15436__auto__ = e76861;var statearr_76862_76864 = state_76855;(statearr_76862_76864[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76865 = state_76855;
state_76855 = G__76865;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_76855){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_76855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_76863 = f__15448__auto__.call(null);(statearr_76863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_76863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* clear-screen draw item draw point and coords of value
*/
triangulator.handlers.draw_point_coords = (function draw_point_coords(value,draw_chan,style){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_76905){var state_val_76906 = (state_76905[1]);if((state_val_76906 === 2))
{var inst_76903 = (state_76905[2]);var state_76905__$1 = state_76905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76905__$1,inst_76903);
} else
{if((state_val_76906 === 1))
{var inst_76890 = triangulator.datatypes.style.call(null,style);var inst_76891 = triangulator.handlers.project_x.call(null,value);var inst_76892 = [value,inst_76891];var inst_76893 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76892,null));var inst_76894 = triangulator.datatypes.line.call(null,inst_76893);var inst_76895 = triangulator.handlers.project_y.call(null,value);var inst_76896 = [value,inst_76895];var inst_76897 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76896,null));var inst_76898 = triangulator.datatypes.line.call(null,inst_76897);var inst_76899 = triangulator.datatypes.point.call(null,value);var inst_76900 = [inst_76890,inst_76894,inst_76898,inst_76899];var inst_76901 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76900,null));var state_76905__$1 = state_76905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76905__$1,2,draw_chan,inst_76901);
} else
{return null;
}
}
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_76910 = [null,null,null,null,null,null,null];(statearr_76910[0] = state_machine__15433__auto__);
(statearr_76910[1] = 1);
return statearr_76910;
});
var state_machine__15433__auto____1 = (function (state_76905){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_76905);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e76911){if((e76911 instanceof Object))
{var ex__15436__auto__ = e76911;var statearr_76912_76914 = state_76905;(statearr_76912_76914[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76915 = state_76905;
state_76905 = G__76915;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_76905){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_76905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_76913 = f__15448__auto__.call(null);(statearr_76913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_76913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* draw line between p1 and p2
*/
triangulator.handlers.draw_line = (function draw_line(p1,p2,draw_chan,options,color){var m = triangulator.geometry.midpoint.call(null,p1,p2);var l = triangulator.geometry.distance.call(null,p1,p2);var vec__77074 = triangulator.geometry.perp_bisector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));var q1 = cljs.core.nth.call(null,vec__77074,0,null);var q2 = cljs.core.nth.call(null,vec__77074,1,null);var s1 = cljs.core.nth.call(null,vec__77074,2,null);var s2 = cljs.core.nth.call(null,vec__77074,3,null);var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2){
return (function (state_77198){var state_val_77199 = (state_77198[1]);if((state_val_77199 === 1))
{var inst_77075 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77076 = [color,new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77077 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77075,inst_77076);var inst_77078 = triangulator.datatypes.style.call(null,inst_77077);var inst_77079 = triangulator.datatypes.point.call(null,p1);var inst_77080 = triangulator.datatypes.point.call(null,p2);var inst_77081 = [p1,p2];var inst_77082 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77081,null));var inst_77083 = triangulator.datatypes.line.call(null,inst_77082);var inst_77084 = [inst_77078,inst_77079,inst_77080,inst_77083];var inst_77085 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77084,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,2,draw_chan,inst_77085);
} else
{if((state_val_77199 === 2))
{var inst_77087 = (state_77198[2]);var inst_77088 = cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"midpoint","midpoint",3670036410));var state_77198__$1 = (function (){var statearr_77200 = state_77198;(statearr_77200[7] = inst_77087);
return statearr_77200;
})();if(inst_77088)
{var statearr_77201_77232 = state_77198__$1;(statearr_77201_77232[1] = 3);
} else
{var statearr_77202_77233 = state_77198__$1;(statearr_77202_77233[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 3))
{var inst_77090 = triangulator.datatypes.point.call(null,m);var inst_77091 = [inst_77090];var inst_77092 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77091,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,6,draw_chan,inst_77092);
} else
{if((state_val_77199 === 4))
{var state_77198__$1 = state_77198;var statearr_77203_77234 = state_77198__$1;(statearr_77203_77234[2] = null);
(statearr_77203_77234[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 5))
{var inst_77097 = (state_77198[2]);var inst_77098 = cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857));var state_77198__$1 = (function (){var statearr_77204 = state_77198;(statearr_77204[8] = inst_77097);
return statearr_77204;
})();if(inst_77098)
{var statearr_77205_77235 = state_77198__$1;(statearr_77205_77235[1] = 7);
} else
{var statearr_77206_77236 = state_77198__$1;(statearr_77206_77236[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 6))
{var inst_77094 = (state_77198[2]);var state_77198__$1 = state_77198;var statearr_77207_77237 = state_77198__$1;(statearr_77207_77237[2] = inst_77094);
(statearr_77207_77237[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 7))
{var inst_77101 = triangulator.geometry.extend_line.call(null,s1,s2);var inst_77102 = cljs.core.nth.call(null,inst_77101,0,null);var inst_77103 = cljs.core.nth.call(null,inst_77101,1,null);var inst_77104 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_77105 = [new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)];var inst_77106 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77104,inst_77105);var inst_77107 = triangulator.datatypes.style.call(null,inst_77106);var inst_77108 = [inst_77102,inst_77103];var inst_77109 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77108,null));var inst_77110 = triangulator.datatypes.line.call(null,inst_77109);var inst_77111 = [new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77112 = [new cljs.core.Keyword(null,"lt-red","lt-red",4214434366)];var inst_77113 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77111,inst_77112);var inst_77114 = triangulator.datatypes.style.call(null,inst_77113);var inst_77115 = triangulator.datatypes.point.call(null,m);var inst_77116 = [inst_77107,inst_77110,inst_77114,inst_77115];var inst_77117 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77116,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,10,draw_chan,inst_77117);
} else
{if((state_val_77199 === 8))
{var state_77198__$1 = state_77198;var statearr_77208_77238 = state_77198__$1;(statearr_77208_77238[2] = null);
(statearr_77208_77238[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 9))
{var inst_77122 = (state_77198[2]);var inst_77123 = cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"circles","circles",1796854037));var state_77198__$1 = (function (){var statearr_77209 = state_77198;(statearr_77209[9] = inst_77122);
return statearr_77209;
})();if(inst_77123)
{var statearr_77210_77239 = state_77198__$1;(statearr_77210_77239[1] = 11);
} else
{var statearr_77211_77240 = state_77198__$1;(statearr_77211_77240[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 10))
{var inst_77119 = (state_77198[2]);var state_77198__$1 = state_77198;var statearr_77212_77241 = state_77198__$1;(statearr_77212_77241[2] = inst_77119);
(statearr_77212_77241[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 11))
{var inst_77125 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77126 = [new cljs.core.Keyword(null,"lt-red","lt-red",4214434366),new cljs.core.Keyword(null,"lt-blue","lt-blue",1445620977)];var inst_77127 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77125,inst_77126);var inst_77128 = triangulator.datatypes.style.call(null,inst_77127);var inst_77129 = triangulator.datatypes.circle.call(null,p1,l);var inst_77130 = triangulator.datatypes.circle.call(null,p2,l);var inst_77131 = (l / 2);var inst_77132 = triangulator.datatypes.circle.call(null,m,inst_77131);var inst_77133 = [new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77134 = [new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77135 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77133,inst_77134);var inst_77136 = triangulator.datatypes.style.call(null,inst_77135);var inst_77137 = [s1,s2];var inst_77138 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77137,null));var inst_77139 = triangulator.datatypes.line.call(null,inst_77138);var inst_77140 = triangulator.datatypes.point.call(null,q1);var inst_77141 = triangulator.datatypes.point.call(null,q2);var inst_77142 = triangulator.datatypes.point.call(null,s1);var inst_77143 = triangulator.datatypes.point.call(null,s2);var inst_77144 = [inst_77128,inst_77129,inst_77130,inst_77132,inst_77136,inst_77139,inst_77140,inst_77141,inst_77142,inst_77143];var inst_77145 = (new cljs.core.PersistentVector(null,10,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77144,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,14,draw_chan,inst_77145);
} else
{if((state_val_77199 === 12))
{var state_77198__$1 = state_77198;var statearr_77213_77242 = state_77198__$1;(statearr_77213_77242[2] = null);
(statearr_77213_77242[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 13))
{var inst_77150 = (state_77198[2]);var inst_77151 = cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"extended","extended",3487981739));var state_77198__$1 = (function (){var statearr_77214 = state_77198;(statearr_77214[10] = inst_77150);
return statearr_77214;
})();if(inst_77151)
{var statearr_77215_77243 = state_77198__$1;(statearr_77215_77243[1] = 15);
} else
{var statearr_77216_77244 = state_77198__$1;(statearr_77216_77244[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 14))
{var inst_77147 = (state_77198[2]);var state_77198__$1 = state_77198;var statearr_77217_77245 = state_77198__$1;(statearr_77217_77245[2] = inst_77147);
(statearr_77217_77245[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 15))
{var inst_77154 = triangulator.geometry.extend_line.call(null,p1,p2);var inst_77155 = cljs.core.nth.call(null,inst_77154,0,null);var inst_77156 = cljs.core.nth.call(null,inst_77154,1,null);var inst_77157 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_77158 = [new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)];var inst_77159 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77157,inst_77158);var inst_77160 = triangulator.datatypes.style.call(null,inst_77159);var inst_77161 = [p1,inst_77155];var inst_77162 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77161,null));var inst_77163 = triangulator.datatypes.line.call(null,inst_77162);var inst_77164 = [p2,inst_77156];var inst_77165 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77164,null));var inst_77166 = triangulator.datatypes.line.call(null,inst_77165);var inst_77167 = [inst_77160,inst_77163,inst_77166];var inst_77168 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77167,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,18,draw_chan,inst_77168);
} else
{if((state_val_77199 === 16))
{var state_77198__$1 = state_77198;var statearr_77218_77246 = state_77198__$1;(statearr_77218_77246[2] = null);
(statearr_77218_77246[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 17))
{var inst_77173 = (state_77198[2]);var inst_77174 = cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"extended-full","extended-full",2676106773));var state_77198__$1 = (function (){var statearr_77219 = state_77198;(statearr_77219[11] = inst_77173);
return statearr_77219;
})();if(inst_77174)
{var statearr_77220_77247 = state_77198__$1;(statearr_77220_77247[1] = 19);
} else
{var statearr_77221_77248 = state_77198__$1;(statearr_77221_77248[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 18))
{var inst_77170 = (state_77198[2]);var state_77198__$1 = state_77198;var statearr_77222_77249 = state_77198__$1;(statearr_77222_77249[2] = inst_77170);
(statearr_77222_77249[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 19))
{var inst_77177 = triangulator.geometry.extend_line.call(null,p1,p2);var inst_77178 = cljs.core.nth.call(null,inst_77177,0,null);var inst_77179 = cljs.core.nth.call(null,inst_77177,1,null);var inst_77180 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_77181 = [color];var inst_77182 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77180,inst_77181);var inst_77183 = triangulator.datatypes.style.call(null,inst_77182);var inst_77184 = [p1,inst_77178];var inst_77185 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77184,null));var inst_77186 = triangulator.datatypes.line.call(null,inst_77185);var inst_77187 = [p2,inst_77179];var inst_77188 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77187,null));var inst_77189 = triangulator.datatypes.line.call(null,inst_77188);var inst_77190 = [inst_77183,inst_77186,inst_77189];var inst_77191 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77190,null));var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77198__$1,22,draw_chan,inst_77191);
} else
{if((state_val_77199 === 20))
{var state_77198__$1 = state_77198;var statearr_77223_77250 = state_77198__$1;(statearr_77223_77250[2] = null);
(statearr_77223_77250[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77199 === 21))
{var inst_77196 = (state_77198[2]);var state_77198__$1 = state_77198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77198__$1,inst_77196);
} else
{if((state_val_77199 === 22))
{var inst_77193 = (state_77198[2]);var state_77198__$1 = state_77198;var statearr_77224_77251 = state_77198__$1;(statearr_77224_77251[2] = inst_77193);
(statearr_77224_77251[1] = 21);
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
}
}
}
}
}
}
}
});})(c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2))
;return ((function (switch__15432__auto__,c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77228 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77228[0] = state_machine__15433__auto__);
(statearr_77228[1] = 1);
return statearr_77228;
});
var state_machine__15433__auto____1 = (function (state_77198){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77198);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77229){if((e77229 instanceof Object))
{var ex__15436__auto__ = e77229;var statearr_77230_77252 = state_77198;(statearr_77230_77252[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77253 = state_77198;
state_77198 = G__77253;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77198){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2))
})();var state__15449__auto__ = (function (){var statearr_77231 = f__15448__auto__.call(null);(statearr_77231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_77231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__,m,l,vec__77074,q1,q2,s1,s2))
);
return c__15447__auto__;
});
/**
* clear-screen draw item draw point and coords of value
*/
triangulator.handlers.draw_circle = (function draw_circle(p1,p2,draw_chan){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_77295){var state_val_77296 = (state_77295[1]);if((state_val_77296 === 2))
{var inst_77293 = (state_77295[2]);var state_77295__$1 = state_77295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77295__$1,inst_77293);
} else
{if((state_val_77296 === 1))
{var inst_77279 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77280 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77281 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77279,inst_77280);var inst_77282 = triangulator.datatypes.style.call(null,inst_77281);var inst_77283 = triangulator.geometry.distance.call(null,p1,p2);var inst_77284 = triangulator.datatypes.circle.call(null,p1,inst_77283);var inst_77285 = triangulator.datatypes.point.call(null,p1);var inst_77286 = triangulator.datatypes.point.call(null,p2);var inst_77287 = [p1,p2];var inst_77288 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77287,null));var inst_77289 = triangulator.datatypes.line.call(null,inst_77288);var inst_77290 = [inst_77282,inst_77284,inst_77285,inst_77286,inst_77289];var inst_77291 = (new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77290,null));var state_77295__$1 = state_77295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77295__$1,2,draw_chan,inst_77291);
} else
{return null;
}
}
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77300 = [null,null,null,null,null,null,null];(statearr_77300[0] = state_machine__15433__auto__);
(statearr_77300[1] = 1);
return statearr_77300;
});
var state_machine__15433__auto____1 = (function (state_77295){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77295);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77301){if((e77301 instanceof Object))
{var ex__15436__auto__ = e77301;var statearr_77302_77304 = state_77295;(statearr_77302_77304[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77295);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77305 = state_77295;
state_77295 = G__77305;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77295){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_77303 = f__15448__auto__.call(null);(statearr_77303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_77303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* clear-screen draw item draw point and coords of value
*/
triangulator.handlers.draw_circle_2 = (function draw_circle_2(center,radius,draw_chan,style){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_77331){var state_val_77332 = (state_77331[1]);if((state_val_77332 === 2))
{var inst_77329 = (state_77331[2]);var state_77331__$1 = state_77331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77331__$1,inst_77329);
} else
{if((state_val_77332 === 1))
{var inst_77323 = triangulator.datatypes.style.call(null,style);var inst_77324 = triangulator.datatypes.circle.call(null,center,radius);var inst_77325 = triangulator.datatypes.point.call(null,center);var inst_77326 = [inst_77323,inst_77324,inst_77325];var inst_77327 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77326,null));var state_77331__$1 = state_77331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77331__$1,2,draw_chan,inst_77327);
} else
{return null;
}
}
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77336 = [null,null,null,null,null,null,null];(statearr_77336[0] = state_machine__15433__auto__);
(statearr_77336[1] = 1);
return statearr_77336;
});
var state_machine__15433__auto____1 = (function (state_77331){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77331);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77337){if((e77337 instanceof Object))
{var ex__15436__auto__ = e77337;var statearr_77338_77340 = state_77331;(statearr_77338_77340[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77341 = state_77331;
state_77331 = G__77341;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77331){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_77339 = f__15448__auto__.call(null);(statearr_77339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_77339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* fill given triangle with given color
*/
triangulator.handlers.fill_tri = (function fill_tri(p1,p2,p3,draw_chan,color){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_77371){var state_val_77372 = (state_77371[1]);if((state_val_77372 === 2))
{var inst_77369 = (state_77371[2]);var state_77371__$1 = state_77371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77371__$1,inst_77369);
} else
{if((state_val_77372 === 1))
{var inst_77361 = [new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77362 = [color];var inst_77363 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77361,inst_77362);var inst_77364 = triangulator.datatypes.style.call(null,inst_77363);var inst_77365 = triangulator.datatypes.triangle.call(null,p1,p2,p3);var inst_77366 = [inst_77364,inst_77365];var inst_77367 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77366,null));var state_77371__$1 = state_77371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77371__$1,2,draw_chan,inst_77367);
} else
{return null;
}
}
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77376 = [null,null,null,null,null,null,null];(statearr_77376[0] = state_machine__15433__auto__);
(statearr_77376[1] = 1);
return statearr_77376;
});
var state_machine__15433__auto____1 = (function (state_77371){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77371);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77377){if((e77377 instanceof Object))
{var ex__15436__auto__ = e77377;var statearr_77378_77380 = state_77371;(statearr_77378_77380[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77381 = state_77371;
state_77371 = G__77381;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77371){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_77379 = f__15448__auto__.call(null);(statearr_77379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_77379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* draw triangle p1 p2 p3 in draw-chan with options
*/
triangulator.handlers.draw_triangle = (function draw_triangle(p1,p2,p3,draw_chan,options){if((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"circumcircle","circumcircle",4663541489))) || (cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"circumcenter","circumcenter",4659744374))))
{var circumcenter_77402 = triangulator.geometry.circumcenter.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null));if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"circumcircle","circumcircle",4663541489)))
{triangulator.handlers.draw_circle_2.call(null,circumcenter_77402,triangulator.geometry.distance.call(null,p1,circumcenter_77402),draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
triangulator.handlers.draw_line.call(null,p1,circumcenter_77402,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,p2,circumcenter_77402,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,p3,circumcenter_77402,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"circumcenter","circumcenter",4659744374)))
{triangulator.handlers.draw_point.call(null,circumcenter_77402,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
} else
{}
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"median","median",4230840444)))
{var centroid_77403 = triangulator.geometry.centroid.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null));var vec__77392_77404 = triangulator.geometry.midpoints.call(null,triangulator.geometry.segments.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null)));var m1_77405 = cljs.core.nth.call(null,vec__77392_77404,0,null);var m2_77406 = cljs.core.nth.call(null,vec__77392_77404,1,null);var m3_77407 = cljs.core.nth.call(null,vec__77392_77404,2,null);triangulator.handlers.fill_tri.call(null,p1,centroid_77403,p2,draw_chan,new cljs.core.Keyword(null,"lt-red","lt-red",4214434366));
triangulator.handlers.fill_tri.call(null,p2,centroid_77403,p3,draw_chan,new cljs.core.Keyword(null,"lt-blue","lt-blue",1445620977));
triangulator.handlers.fill_tri.call(null,p3,centroid_77403,p1,draw_chan,new cljs.core.Keyword(null,"lt-green","lt-green",1517002224));
triangulator.handlers.draw_line.call(null,p1,m1_77405,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,p2,m2_77406,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,p3,m3_77407,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_point.call(null,centroid_77403,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"incircle","incircle",1101303207)))
{triangulator.handlers.fill_tri.call(null,p1,p2,p3,draw_chan,new cljs.core.Keyword(null,"lt-red","lt-red",4214434366));
var seq__77393_77408 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p3,p1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p1,p2], null)], null));var chunk__77394_77409 = null;var count__77395_77410 = 0;var i__77396_77411 = 0;while(true){
if((i__77396_77411 < count__77395_77410))
{var perm_77412 = cljs.core._nth.call(null,chunk__77394_77409,i__77396_77411);var vec__77397_77413 = triangulator.geometry.ang_bisector_segment.call(null,perm_77412);var M1_77414 = cljs.core.nth.call(null,vec__77397_77413,0,null);var M2_77415 = cljs.core.nth.call(null,vec__77397_77413,1,null);var vec__77398_77416 = triangulator.geometry.perp_bisector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [M1_77414,M2_77415], null));var M1P_77417 = cljs.core.nth.call(null,vec__77398_77416,0,null);var M2P_77418 = cljs.core.nth.call(null,vec__77398_77416,1,null);triangulator.handlers.draw_line.call(null,M1_77414,M2_77415,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grew","lt-grew",1445775220));
triangulator.handlers.draw_line.call(null,M1P_77417,M2P_77418,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
{
var G__77419 = seq__77393_77408;
var G__77420 = chunk__77394_77409;
var G__77421 = count__77395_77410;
var G__77422 = (i__77396_77411 + 1);
seq__77393_77408 = G__77419;
chunk__77394_77409 = G__77420;
count__77395_77410 = G__77421;
i__77396_77411 = G__77422;
continue;
}
} else
{var temp__4092__auto___77423 = cljs.core.seq.call(null,seq__77393_77408);if(temp__4092__auto___77423)
{var seq__77393_77424__$1 = temp__4092__auto___77423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__77393_77424__$1))
{var c__12848__auto___77425 = cljs.core.chunk_first.call(null,seq__77393_77424__$1);{
var G__77426 = cljs.core.chunk_rest.call(null,seq__77393_77424__$1);
var G__77427 = c__12848__auto___77425;
var G__77428 = cljs.core.count.call(null,c__12848__auto___77425);
var G__77429 = 0;
seq__77393_77408 = G__77426;
chunk__77394_77409 = G__77427;
count__77395_77410 = G__77428;
i__77396_77411 = G__77429;
continue;
}
} else
{var perm_77430 = cljs.core.first.call(null,seq__77393_77424__$1);var vec__77399_77431 = triangulator.geometry.ang_bisector_segment.call(null,perm_77430);var M1_77432 = cljs.core.nth.call(null,vec__77399_77431,0,null);var M2_77433 = cljs.core.nth.call(null,vec__77399_77431,1,null);var vec__77400_77434 = triangulator.geometry.perp_bisector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [M1_77432,M2_77433], null));var M1P_77435 = cljs.core.nth.call(null,vec__77400_77434,0,null);var M2P_77436 = cljs.core.nth.call(null,vec__77400_77434,1,null);triangulator.handlers.draw_line.call(null,M1_77432,M2_77433,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grew","lt-grew",1445775220));
triangulator.handlers.draw_line.call(null,M1P_77435,M2P_77436,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
{
var G__77437 = cljs.core.next.call(null,seq__77393_77424__$1);
var G__77438 = null;
var G__77439 = 0;
var G__77440 = 0;
seq__77393_77408 = G__77437;
chunk__77394_77409 = G__77438;
count__77395_77410 = G__77439;
i__77396_77411 = G__77440;
continue;
}
}
} else
{}
}
break;
}
var l1_77441 = triangulator.geometry.ang_bisector_segment.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null));var l2_77442 = triangulator.geometry.ang_bisector_segment.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p3,p1], null));var i_77443 = triangulator.geometry.intersection.call(null,l1_77441,l2_77442);var d_77444 = triangulator.geometry.altitude.call(null,p1,p2,i_77443);var e_77445 = triangulator.geometry.altitude.call(null,p2,p3,i_77443);var f_77446 = triangulator.geometry.altitude.call(null,p3,p1,i_77443);var r_77447 = triangulator.geometry.distance.call(null,i_77443,d_77444);triangulator.handlers.draw_point.call(null,i_77443,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
triangulator.handlers.draw_line.call(null,i_77443,d_77444,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i_77443,e_77445,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i_77443,f_77446,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_circle_2.call(null,i_77443,r_77447,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
var l1_77448 = triangulator.geometry.ang_bisector_segment.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null));var l2_77449 = triangulator.geometry.ang_bisector_segment.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p3,p1], null));var l3_77450 = triangulator.geometry.ang_bisector_segment.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p1,p2], null));var l1p_77451 = triangulator.geometry.perp_bisector.call(null,l1_77448);var l2p_77452 = triangulator.geometry.perp_bisector.call(null,l2_77449);var l3p_77453 = triangulator.geometry.perp_bisector.call(null,l3_77450);var i1_77454 = triangulator.geometry.intersection.call(null,l1p_77451,l2p_77452);var i2_77455 = triangulator.geometry.intersection.call(null,l2p_77452,l3p_77453);var i3_77456 = triangulator.geometry.intersection.call(null,l3p_77453,l1p_77451);var d1_77457 = triangulator.geometry.altitude.call(null,p1,p2,i1_77454);var d2_77458 = triangulator.geometry.altitude.call(null,p2,p3,i1_77454);var d3_77459 = triangulator.geometry.altitude.call(null,p3,p1,i1_77454);var e1_77460 = triangulator.geometry.altitude.call(null,p1,p2,i2_77455);var e2_77461 = triangulator.geometry.altitude.call(null,p2,p3,i2_77455);var e3_77462 = triangulator.geometry.altitude.call(null,p3,p1,i2_77455);var f1_77463 = triangulator.geometry.altitude.call(null,p1,p2,i3_77456);var f2_77464 = triangulator.geometry.altitude.call(null,p2,p3,i3_77456);var f3_77465 = triangulator.geometry.altitude.call(null,p3,p1,i3_77456);var r1_77466 = triangulator.geometry.distance.call(null,i1_77454,d1_77457);var r2_77467 = triangulator.geometry.distance.call(null,i2_77455,e1_77460);var r3_77468 = triangulator.geometry.distance.call(null,i3_77456,f1_77463);triangulator.handlers.draw_point.call(null,i1_77454,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
triangulator.handlers.draw_point.call(null,i2_77455,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
triangulator.handlers.draw_point.call(null,i3_77456,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
triangulator.handlers.draw_line.call(null,i1_77454,d1_77457,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i1_77454,d2_77458,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i1_77454,d3_77459,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i2_77455,e1_77460,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i2_77455,e2_77461,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i2_77455,e3_77462,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i3_77456,f1_77463,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i3_77456,f2_77464,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,i3_77456,f3_77465,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_circle_2.call(null,i1_77454,r1_77466,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
triangulator.handlers.draw_circle_2.call(null,i2_77455,r2_77467,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
triangulator.handlers.draw_circle_2.call(null,i3_77456,r3_77468,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
} else
{}
if((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786))) || (cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"orthocenter","orthocenter",2505038207))) || (cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"nine-pt-circle","nine-pt-circle",4400858320))))
{var b3_77469 = triangulator.geometry.altitude.call(null,p1,p2,p3);var b1_77470 = triangulator.geometry.altitude.call(null,p2,p3,p1);var b2_77471 = triangulator.geometry.altitude.call(null,p3,p1,p2);var orthocenter_77472 = triangulator.geometry.intersection.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,b1_77470], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,b2_77471], null));if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786)))
{triangulator.handlers.draw_line.call(null,b1_77470,p1,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,b2_77471,p2,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,b3_77469,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"orthocenter","orthocenter",2505038207)))
{triangulator.handlers.draw_point.call(null,orthocenter_77472,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"pink","pink",1017345256)], null));
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"euler","euler",1110772443)))
{var circumcenter_77473 = triangulator.geometry.circumcenter.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3], null));triangulator.handlers.draw_line.call(null,orthocenter_77472,circumcenter_77473,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"pink","pink",1017345256));
} else
{}
if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"nine-pt-circle","nine-pt-circle",4400858320)))
{var orthic_circumcenter_77474 = triangulator.geometry.circumcenter.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1_77470,b2_77471,b3_77469], null));var r_77475 = triangulator.geometry.distance.call(null,b1_77470,orthic_circumcenter_77474);var m1_77476 = triangulator.geometry.midpoint.call(null,orthocenter_77472,p1);var m2_77477 = triangulator.geometry.midpoint.call(null,orthocenter_77472,p2);var m3_77478 = triangulator.geometry.midpoint.call(null,orthocenter_77472,p3);triangulator.handlers.draw_point.call(null,m1_77476,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"pink","pink",1017345256)], null));
triangulator.handlers.draw_point.call(null,m2_77477,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"pink","pink",1017345256)], null));
triangulator.handlers.draw_point.call(null,m3_77478,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"pink","pink",1017345256)], null));
triangulator.handlers.draw_line.call(null,orthic_circumcenter_77474,b1_77470,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,orthic_circumcenter_77474,b2_77471,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,orthic_circumcenter_77474,b3_77469,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_circle_2.call(null,orthic_circumcenter_77474,r_77475,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222)], null));
} else
{}
} else
{}
var line_options = (function (){var G__77401 = cljs.core.PersistentHashSet.EMPTY;var G__77401__$1 = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857)))?cljs.core.conj.call(null,G__77401,new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857)):G__77401);var G__77401__$2 = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"median","median",4230840444)))?cljs.core.conj.call(null,G__77401__$1,new cljs.core.Keyword(null,"midpoint","midpoint",3670036410)):G__77401__$1);var G__77401__$3 = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"incircle","incircle",1101303207)))?cljs.core.conj.call(null,G__77401__$2,new cljs.core.Keyword(null,"extended","extended",3487981739)):G__77401__$2);var G__77401__$4 = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786)))?cljs.core.conj.call(null,G__77401__$3,new cljs.core.Keyword(null,"extended","extended",3487981739)):G__77401__$3);var G__77401__$5 = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"nine-pt-circle","nine-pt-circle",4400858320)))?cljs.core.conj.call(null,G__77401__$4,new cljs.core.Keyword(null,"midpoint","midpoint",3670036410)):G__77401__$4);return G__77401__$5;
})();triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,line_options,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2,p3,draw_chan,line_options,new cljs.core.Keyword(null,"blue","blue",1016931276));
return triangulator.handlers.draw_line.call(null,p3,p1,draw_chan,line_options,new cljs.core.Keyword(null,"green","green",1112523381));
});
/**
* handle event by using current state and event to transition to new state
* send drawing events to draw-chan
* send state changes to out
* return new state
*/
triangulator.handlers.point_state_transitioner = (function point_state_transitioner(p__77479,current_state,out,draw_chan){var vec__77519 = p__77479;var type = cljs.core.nth.call(null,vec__77519,0,null);var value = cljs.core.nth.call(null,vec__77519,1,null);var pred__77520 = cljs.core._EQ_;var expr__77521 = type;if(cljs.core.truth_(pred__77520.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__77521)))
{var c__15447__auto___77558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value){
return (function (state_77530){var state_val_77531 = (state_77530[1]);if((state_val_77531 === 3))
{var inst_77528 = (state_77530[2]);var state_77530__$1 = state_77530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77530__$1,inst_77528);
} else
{if((state_val_77531 === 2))
{var inst_77524 = (state_77530[2]);var inst_77525 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"point","point",1120749826),draw_chan];var inst_77526 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77525,null));var state_77530__$1 = (function (){var statearr_77532 = state_77530;(statearr_77532[7] = inst_77524);
return statearr_77532;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77530__$1,3,out,inst_77526);
} else
{if((state_val_77531 === 1))
{var state_77530__$1 = state_77530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77530__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77536 = [null,null,null,null,null,null,null,null];(statearr_77536[0] = state_machine__15433__auto__);
(statearr_77536[1] = 1);
return statearr_77536;
});
var state_machine__15433__auto____1 = (function (state_77530){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77530);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77537){if((e77537 instanceof Object))
{var ex__15436__auto__ = e77537;var statearr_77538_77559 = state_77530;(statearr_77538_77559[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77560 = state_77530;
state_77530 = G__77560;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77530){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value))
})();var state__15449__auto__ = (function (){var statearr_77539 = f__15448__auto__.call(null);(statearr_77539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77558);
return statearr_77539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77558,pred__77520,expr__77521,vec__77519,type,value))
);
triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__77520.call(null,new cljs.core.Keyword(null,"click","click",1108654330),expr__77521)))
{var c__15447__auto___77561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value){
return (function (state_77548){var state_val_77549 = (state_77548[1]);if((state_val_77549 === 3))
{var inst_77546 = (state_77548[2]);var state_77548__$1 = state_77548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77548__$1,inst_77546);
} else
{if((state_val_77549 === 2))
{var inst_77542 = (state_77548[2]);var inst_77543 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"point","point",1120749826),draw_chan];var inst_77544 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77543,null));var state_77548__$1 = (function (){var statearr_77550 = state_77548;(statearr_77550[7] = inst_77542);
return statearr_77550;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77548__$1,3,out,inst_77544);
} else
{if((state_val_77549 === 1))
{var inst_77540 = triangulator.datatypes.point.call(null,value);var state_77548__$1 = state_77548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77548__$1,2,out,inst_77540);
} else
{return null;
}
}
}
});})(c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77554 = [null,null,null,null,null,null,null,null];(statearr_77554[0] = state_machine__15433__auto__);
(statearr_77554[1] = 1);
return statearr_77554;
});
var state_machine__15433__auto____1 = (function (state_77548){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77548);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77555){if((e77555 instanceof Object))
{var ex__15436__auto__ = e77555;var statearr_77556_77562 = state_77548;(statearr_77556_77562[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77563 = state_77548;
state_77548 = G__77563;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77548){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value))
})();var state__15449__auto__ = (function (){var statearr_77557 = f__15448__auto__.call(null);(statearr_77557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77561);
return statearr_77557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77561,pred__77520,expr__77521,vec__77519,type,value))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77521)].join('')));
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.line_state_transitioner = (function line_state_transitioner(p__77564,current_state,out,draw_chan){var vec__77637 = p__77564;var type = cljs.core.nth.call(null,vec__77637,0,null);var value = cljs.core.nth.call(null,vec__77637,1,null);var G__77638 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__77638))
{var pred__77639 = cljs.core._EQ_;var expr__77640 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77639.call(null,0,expr__77640)))
{var c__15447__auto___77709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function (state_77658){var state_val_77659 = (state_77658[1]);if((state_val_77659 === 4))
{var inst_77656 = (state_77658[2]);var state_77658__$1 = state_77658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77658__$1,inst_77656);
} else
{if((state_val_77659 === 3))
{var inst_77647 = (state_77658[2]);var inst_77648 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77649 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77650 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77648,inst_77649);var inst_77651 = triangulator.datatypes.style.call(null,inst_77650);var inst_77652 = triangulator.datatypes.point.call(null,value);var inst_77653 = [inst_77651,inst_77652];var inst_77654 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77653,null));var state_77658__$1 = (function (){var statearr_77660 = state_77658;(statearr_77660[7] = inst_77647);
return statearr_77660;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77658__$1,4,draw_chan,inst_77654);
} else
{if((state_val_77659 === 2))
{var inst_77643 = (state_77658[2]);var inst_77644 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"line","line",1017226086),draw_chan];var inst_77645 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77644,null));var state_77658__$1 = (function (){var statearr_77661 = state_77658;(statearr_77661[8] = inst_77643);
return statearr_77661;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77658__$1,3,out,inst_77645);
} else
{if((state_val_77659 === 1))
{var state_77658__$1 = state_77658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77658__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
}
});})(c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77665 = [null,null,null,null,null,null,null,null,null];(statearr_77665[0] = state_machine__15433__auto__);
(statearr_77665[1] = 1);
return statearr_77665;
});
var state_machine__15433__auto____1 = (function (state_77658){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77658);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77666){if((e77666 instanceof Object))
{var ex__15436__auto__ = e77666;var statearr_77667_77710 = state_77658;(statearr_77667_77710[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77711 = state_77658;
state_77658 = G__77711;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77658){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value))
})();var state__15449__auto__ = (function (){var statearr_77668 = f__15448__auto__.call(null);(statearr_77668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77709);
return statearr_77668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77709,pred__77639,expr__77640,G__77638,vec__77637,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__77639.call(null,1,expr__77640)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));var c__15447__auto___77712 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function (state_77678){var state_val_77679 = (state_77678[1]);if((state_val_77679 === 4))
{var inst_77676 = (state_77678[2]);var state_77678__$1 = state_77678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77678__$1,inst_77676);
} else
{if((state_val_77679 === 3))
{var inst_77672 = (state_77678[2]);var inst_77673 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"line","line",1017226086),draw_chan];var inst_77674 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77673,null));var state_77678__$1 = (function (){var statearr_77680 = state_77678;(statearr_77680[7] = inst_77672);
return statearr_77680;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77678__$1,4,out,inst_77674);
} else
{if((state_val_77679 === 2))
{var inst_77670 = (state_77678[2]);var state_77678__$1 = (function (){var statearr_77681 = state_77678;(statearr_77681[8] = inst_77670);
return statearr_77681;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77678__$1,3,draw_chan,triangulator.handlers.clear);
} else
{if((state_val_77679 === 1))
{var state_77678__$1 = state_77678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77678__$1,2,out,line);
} else
{return null;
}
}
}
}
});})(c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77685 = [null,null,null,null,null,null,null,null,null];(statearr_77685[0] = state_machine__15433__auto__);
(statearr_77685[1] = 1);
return statearr_77685;
});
var state_machine__15433__auto____1 = (function (state_77678){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77678);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77686){if((e77686 instanceof Object))
{var ex__15436__auto__ = e77686;var statearr_77687_77713 = state_77678;(statearr_77687_77713[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77714 = state_77678;
state_77678 = G__77714;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77678){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value))
})();var state__15449__auto__ = (function (){var statearr_77688 = f__15448__auto__.call(null);(statearr_77688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77712);
return statearr_77688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77712,p1,line,pred__77639,expr__77640,G__77638,vec__77637,type,value))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77640)].join('')));
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__77638))
{var c__15447__auto___77715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77715,G__77638,vec__77637,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77715,G__77638,vec__77637,type,value){
return (function (state_77696){var state_val_77697 = (state_77696[1]);if((state_val_77697 === 3))
{var inst_77694 = (state_77696[2]);var state_77696__$1 = state_77696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77696__$1,inst_77694);
} else
{if((state_val_77697 === 2))
{var inst_77690 = (state_77696[2]);var inst_77691 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"line","line",1017226086),draw_chan];var inst_77692 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77691,null));var state_77696__$1 = (function (){var statearr_77698 = state_77696;(statearr_77698[7] = inst_77690);
return statearr_77698;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77696__$1,3,out,inst_77692);
} else
{if((state_val_77697 === 1))
{var state_77696__$1 = state_77696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77696__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___77715,G__77638,vec__77637,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77715,G__77638,vec__77637,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77702 = [null,null,null,null,null,null,null,null];(statearr_77702[0] = state_machine__15433__auto__);
(statearr_77702[1] = 1);
return statearr_77702;
});
var state_machine__15433__auto____1 = (function (state_77696){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77696);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77703){if((e77703 instanceof Object))
{var ex__15436__auto__ = e77703;var statearr_77704_77716 = state_77696;(statearr_77704_77716[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77717 = state_77696;
state_77696 = G__77717;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77696){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77715,G__77638,vec__77637,type,value))
})();var state__15449__auto__ = (function (){var statearr_77705 = f__15448__auto__.call(null);(statearr_77705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77715);
return statearr_77705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77715,G__77638,vec__77637,type,value))
);
var pred__77706 = cljs.core._EQ_;var expr__77707 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77706.call(null,0,expr__77707)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__77706.call(null,1,expr__77707)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circles","circles",1796854037),null,new cljs.core.Keyword(null,"midpoint","midpoint",3670036410),null], null), null),new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77707)].join('')));
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.tri_state_transitioner = (function tri_state_transitioner(p__77718,current_state,out,draw_chan){var vec__77802 = p__77718;var type = cljs.core.nth.call(null,vec__77802,0,null);var value = cljs.core.nth.call(null,vec__77802,1,null);var G__77803 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__77803))
{var pred__77804 = cljs.core._EQ_;var expr__77805 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77804.call(null,0,expr__77805)))
{var c__15447__auto___77885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (state_77823){var state_val_77824 = (state_77823[1]);if((state_val_77824 === 4))
{var inst_77821 = (state_77823[2]);var state_77823__$1 = state_77823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77823__$1,inst_77821);
} else
{if((state_val_77824 === 3))
{var inst_77812 = (state_77823[2]);var inst_77813 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77814 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77815 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77813,inst_77814);var inst_77816 = triangulator.datatypes.style.call(null,inst_77815);var inst_77817 = triangulator.datatypes.point.call(null,value);var inst_77818 = [inst_77816,inst_77817];var inst_77819 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77818,null));var state_77823__$1 = (function (){var statearr_77825 = state_77823;(statearr_77825[7] = inst_77812);
return statearr_77825;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77823__$1,4,draw_chan,inst_77819);
} else
{if((state_val_77824 === 2))
{var inst_77808 = (state_77823[2]);var inst_77809 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_77810 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77809,null));var state_77823__$1 = (function (){var statearr_77826 = state_77823;(statearr_77826[8] = inst_77808);
return statearr_77826;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77823__$1,3,out,inst_77810);
} else
{if((state_val_77824 === 1))
{var state_77823__$1 = state_77823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77823__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
}
});})(c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77830 = [null,null,null,null,null,null,null,null,null];(statearr_77830[0] = state_machine__15433__auto__);
(statearr_77830[1] = 1);
return statearr_77830;
});
var state_machine__15433__auto____1 = (function (state_77823){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77823);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77831){if((e77831 instanceof Object))
{var ex__15436__auto__ = e77831;var statearr_77832_77886 = state_77823;(statearr_77832_77886[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77887 = state_77823;
state_77823 = G__77887;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77823){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value))
})();var state__15449__auto__ = (function (){var statearr_77833 = f__15448__auto__.call(null);(statearr_77833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77885);
return statearr_77833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77885,pred__77804,expr__77805,G__77803,vec__77802,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__77804.call(null,1,expr__77805)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));var c__15447__auto___77888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (state_77839){var state_val_77840 = (state_77839[1]);if((state_val_77840 === 2))
{var inst_77837 = (state_77839[2]);var state_77839__$1 = state_77839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77839__$1,inst_77837);
} else
{if((state_val_77840 === 1))
{var inst_77834 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_77835 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77834,null));var state_77839__$1 = state_77839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77839__$1,2,out,inst_77835);
} else
{return null;
}
}
});})(c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77844 = [null,null,null,null,null,null,null];(statearr_77844[0] = state_machine__15433__auto__);
(statearr_77844[1] = 1);
return statearr_77844;
});
var state_machine__15433__auto____1 = (function (state_77839){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77839);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77845){if((e77845 instanceof Object))
{var ex__15436__auto__ = e77845;var statearr_77846_77889 = state_77839;(statearr_77846_77889[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77890 = state_77839;
state_77839 = G__77890;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77839){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value))
})();var state__15449__auto__ = (function (){var statearr_77847 = f__15448__auto__.call(null);(statearr_77847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77888);
return statearr_77847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77888,p1,line,pred__77804,expr__77805,G__77803,vec__77802,type,value))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__77804.call(null,2,expr__77805)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var triangle = triangulator.datatypes.triangle.call(null,p1,p2,value);var c__15447__auto___77891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function (state_77855){var state_val_77856 = (state_77855[1]);if((state_val_77856 === 3))
{var inst_77853 = (state_77855[2]);var state_77855__$1 = state_77855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77855__$1,inst_77853);
} else
{if((state_val_77856 === 2))
{var inst_77849 = (state_77855[2]);var inst_77850 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_77851 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77850,null));var state_77855__$1 = (function (){var statearr_77857 = state_77855;(statearr_77857[7] = inst_77849);
return statearr_77857;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77855__$1,3,out,inst_77851);
} else
{if((state_val_77856 === 1))
{var state_77855__$1 = state_77855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77855__$1,2,out,triangle);
} else
{return null;
}
}
}
});})(c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77861 = [null,null,null,null,null,null,null,null];(statearr_77861[0] = state_machine__15433__auto__);
(statearr_77861[1] = 1);
return statearr_77861;
});
var state_machine__15433__auto____1 = (function (state_77855){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77855);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77862){if((e77862 instanceof Object))
{var ex__15436__auto__ = e77862;var statearr_77863_77892 = state_77855;(statearr_77863_77892[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77893 = state_77855;
state_77855 = G__77893;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77855){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value))
})();var state__15449__auto__ = (function (){var statearr_77864 = f__15448__auto__.call(null);(statearr_77864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77891);
return statearr_77864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77891,p1,p2,triangle,pred__77804,expr__77805,G__77803,vec__77802,type,value))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77805)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__77803))
{var c__15447__auto___77894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77894,G__77803,vec__77802,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77894,G__77803,vec__77802,type,value){
return (function (state_77872){var state_val_77873 = (state_77872[1]);if((state_val_77873 === 3))
{var inst_77870 = (state_77872[2]);var state_77872__$1 = state_77872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77872__$1,inst_77870);
} else
{if((state_val_77873 === 2))
{var inst_77866 = (state_77872[2]);var inst_77867 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_77868 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77867,null));var state_77872__$1 = (function (){var statearr_77874 = state_77872;(statearr_77874[7] = inst_77866);
return statearr_77874;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77872__$1,3,out,inst_77868);
} else
{if((state_val_77873 === 1))
{var state_77872__$1 = state_77872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77872__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___77894,G__77803,vec__77802,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77894,G__77803,vec__77802,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77878 = [null,null,null,null,null,null,null,null];(statearr_77878[0] = state_machine__15433__auto__);
(statearr_77878[1] = 1);
return statearr_77878;
});
var state_machine__15433__auto____1 = (function (state_77872){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77872);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77879){if((e77879 instanceof Object))
{var ex__15436__auto__ = e77879;var statearr_77880_77895 = state_77872;(statearr_77880_77895[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77896 = state_77872;
state_77872 = G__77896;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77872){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77894,G__77803,vec__77802,type,value))
})();var state__15449__auto__ = (function (){var statearr_77881 = f__15448__auto__.call(null);(statearr_77881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77894);
return statearr_77881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77894,G__77803,vec__77802,type,value))
);
var pred__77882 = cljs.core._EQ_;var expr__77883 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77882.call(null,0,expr__77883)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__77882.call(null,1,expr__77883)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"circles","circles",1796854037),null], null), null),new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__77882.call(null,2,expr__77883)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;var base = triangulator.geometry.altitude.call(null,p1,p2,p3);triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extended","extended",3487981739),null,new cljs.core.Keyword(null,"circles","circles",1796854037),null], null), null),new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2,p3,draw_chan,null,new cljs.core.Keyword(null,"blue","blue",1016931276));
triangulator.handlers.draw_line.call(null,p3,p1,draw_chan,null,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,p3,base,draw_chan,null,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77883)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.altitude_state_transitioner = (function altitude_state_transitioner(p__77897,current_state,out,draw_chan){var vec__77945 = p__77897;var type = cljs.core.nth.call(null,vec__77945,0,null);var value = cljs.core.nth.call(null,vec__77945,1,null);var G__77946 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__77946))
{var pred__77947 = cljs.core._EQ_;var expr__77948 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77947.call(null,0,expr__77948)))
{var c__15447__auto___77992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value){
return (function (state_77962){var state_val_77963 = (state_77962[1]);if((state_val_77963 === 3))
{var inst_77960 = (state_77962[2]);var state_77962__$1 = state_77962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77962__$1,inst_77960);
} else
{if((state_val_77963 === 2))
{var inst_77951 = (state_77962[2]);var inst_77952 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_77953 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_77954 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77952,inst_77953);var inst_77955 = triangulator.datatypes.style.call(null,inst_77954);var inst_77956 = triangulator.datatypes.point.call(null,value);var inst_77957 = [inst_77955,inst_77956];var inst_77958 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77957,null));var state_77962__$1 = (function (){var statearr_77964 = state_77962;(statearr_77964[7] = inst_77951);
return statearr_77964;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77962__$1,3,draw_chan,inst_77958);
} else
{if((state_val_77963 === 1))
{var state_77962__$1 = state_77962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77962__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77968 = [null,null,null,null,null,null,null,null];(statearr_77968[0] = state_machine__15433__auto__);
(statearr_77968[1] = 1);
return statearr_77968;
});
var state_machine__15433__auto____1 = (function (state_77962){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77962);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77969){if((e77969 instanceof Object))
{var ex__15436__auto__ = e77969;var statearr_77970_77993 = state_77962;(statearr_77970_77993[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77994 = state_77962;
state_77962 = G__77994;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77962){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value))
})();var state__15449__auto__ = (function (){var statearr_77971 = f__15448__auto__.call(null);(statearr_77971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77992);
return statearr_77971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77992,pred__77947,expr__77948,G__77946,vec__77945,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__77947.call(null,1,expr__77948)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__77947.call(null,2,expr__77948)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var triangle = triangulator.datatypes.triangle.call(null,p1,p2,value);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77948)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__77946))
{var c__15447__auto___77995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___77995,G__77946,vec__77945,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___77995,G__77946,vec__77945,type,value){
return (function (state_77979){var state_val_77980 = (state_77979[1]);if((state_val_77980 === 3))
{var inst_77977 = (state_77979[2]);var state_77979__$1 = state_77979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77979__$1,inst_77977);
} else
{if((state_val_77980 === 2))
{var inst_77973 = (state_77979[2]);var inst_77974 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_77975 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_77974,null));var state_77979__$1 = (function (){var statearr_77981 = state_77979;(statearr_77981[7] = inst_77973);
return statearr_77981;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77979__$1,3,out,inst_77975);
} else
{if((state_val_77980 === 1))
{var state_77979__$1 = state_77979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77979__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___77995,G__77946,vec__77945,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___77995,G__77946,vec__77945,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_77985 = [null,null,null,null,null,null,null,null];(statearr_77985[0] = state_machine__15433__auto__);
(statearr_77985[1] = 1);
return statearr_77985;
});
var state_machine__15433__auto____1 = (function (state_77979){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_77979);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e77986){if((e77986 instanceof Object))
{var ex__15436__auto__ = e77986;var statearr_77987_77996 = state_77979;(statearr_77987_77996[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77997 = state_77979;
state_77979 = G__77997;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_77979){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_77979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___77995,G__77946,vec__77945,type,value))
})();var state__15449__auto__ = (function (){var statearr_77988 = f__15448__auto__.call(null);(statearr_77988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___77995);
return statearr_77988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___77995,G__77946,vec__77945,type,value))
);
var pred__77989 = cljs.core._EQ_;var expr__77990 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__77989.call(null,0,expr__77990)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__77989.call(null,1,expr__77990)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__77989.call(null,2,expr__77990)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.fill_tri.call(null,p1,p2,p3,draw_chan,new cljs.core.Keyword(null,"lt-red","lt-red",4214434366));
triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orthocenter","orthocenter",2505038207),null,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77990)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.nine_pt_state_transitioner = (function nine_pt_state_transitioner(p__77998,current_state,out,draw_chan){var vec__78046 = p__77998;var type = cljs.core.nth.call(null,vec__78046,0,null);var value = cljs.core.nth.call(null,vec__78046,1,null);var G__78047 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78047))
{var pred__78048 = cljs.core._EQ_;var expr__78049 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78048.call(null,0,expr__78049)))
{var c__15447__auto___78093 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value){
return (function (state_78063){var state_val_78064 = (state_78063[1]);if((state_val_78064 === 3))
{var inst_78061 = (state_78063[2]);var state_78063__$1 = state_78063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78063__$1,inst_78061);
} else
{if((state_val_78064 === 2))
{var inst_78052 = (state_78063[2]);var inst_78053 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78054 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78055 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78053,inst_78054);var inst_78056 = triangulator.datatypes.style.call(null,inst_78055);var inst_78057 = triangulator.datatypes.point.call(null,value);var inst_78058 = [inst_78056,inst_78057];var inst_78059 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78058,null));var state_78063__$1 = (function (){var statearr_78065 = state_78063;(statearr_78065[7] = inst_78052);
return statearr_78065;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78063__$1,3,draw_chan,inst_78059);
} else
{if((state_val_78064 === 1))
{var state_78063__$1 = state_78063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78063__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78069 = [null,null,null,null,null,null,null,null];(statearr_78069[0] = state_machine__15433__auto__);
(statearr_78069[1] = 1);
return statearr_78069;
});
var state_machine__15433__auto____1 = (function (state_78063){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78063);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78070){if((e78070 instanceof Object))
{var ex__15436__auto__ = e78070;var statearr_78071_78094 = state_78063;(statearr_78071_78094[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78095 = state_78063;
state_78063 = G__78095;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78063){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value))
})();var state__15449__auto__ = (function (){var statearr_78072 = f__15448__auto__.call(null);(statearr_78072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78093);
return statearr_78072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78093,pred__78048,expr__78049,G__78047,vec__78046,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78048.call(null,1,expr__78049)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__78048.call(null,2,expr__78049)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var triangle = triangulator.datatypes.triangle.call(null,p1,p2,value);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78049)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78047))
{var c__15447__auto___78096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78096,G__78047,vec__78046,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78096,G__78047,vec__78046,type,value){
return (function (state_78080){var state_val_78081 = (state_78080[1]);if((state_val_78081 === 3))
{var inst_78078 = (state_78080[2]);var state_78080__$1 = state_78080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78080__$1,inst_78078);
} else
{if((state_val_78081 === 2))
{var inst_78074 = (state_78080[2]);var inst_78075 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"triangle","triangle",2511666554),draw_chan];var inst_78076 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78075,null));var state_78080__$1 = (function (){var statearr_78082 = state_78080;(statearr_78082[7] = inst_78074);
return statearr_78082;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78080__$1,3,out,inst_78076);
} else
{if((state_val_78081 === 1))
{var state_78080__$1 = state_78080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78080__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78096,G__78047,vec__78046,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78096,G__78047,vec__78046,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78086 = [null,null,null,null,null,null,null,null];(statearr_78086[0] = state_machine__15433__auto__);
(statearr_78086[1] = 1);
return statearr_78086;
});
var state_machine__15433__auto____1 = (function (state_78080){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78080);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78087){if((e78087 instanceof Object))
{var ex__15436__auto__ = e78087;var statearr_78088_78097 = state_78080;(statearr_78088_78097[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78098 = state_78080;
state_78080 = G__78098;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78080){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78096,G__78047,vec__78046,type,value))
})();var state__15449__auto__ = (function (){var statearr_78089 = f__15448__auto__.call(null);(statearr_78089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78096);
return statearr_78089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78096,G__78047,vec__78046,type,value))
);
var pred__78090 = cljs.core._EQ_;var expr__78091 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78090.call(null,0,expr__78091)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78090.call(null,1,expr__78091)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78090.call(null,2,expr__78091)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nine-pt-circle","nine-pt-circle",4400858320),null,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78091)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.euler_state_transitioner = (function euler_state_transitioner(p__78099,current_state,out,draw_chan){var vec__78142 = p__78099;var type = cljs.core.nth.call(null,vec__78142,0,null);var value = cljs.core.nth.call(null,vec__78142,1,null);var G__78143 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78143))
{var pred__78144 = cljs.core._EQ_;var expr__78145 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78144.call(null,0,expr__78145)))
{var c__15447__auto___78184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value){
return (function (state_78159){var state_val_78160 = (state_78159[1]);if((state_val_78160 === 3))
{var inst_78157 = (state_78159[2]);var state_78159__$1 = state_78159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78159__$1,inst_78157);
} else
{if((state_val_78160 === 2))
{var inst_78148 = (state_78159[2]);var inst_78149 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78150 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78151 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78149,inst_78150);var inst_78152 = triangulator.datatypes.style.call(null,inst_78151);var inst_78153 = triangulator.datatypes.point.call(null,value);var inst_78154 = [inst_78152,inst_78153];var inst_78155 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78154,null));var state_78159__$1 = (function (){var statearr_78161 = state_78159;(statearr_78161[7] = inst_78148);
return statearr_78161;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78159__$1,3,draw_chan,inst_78155);
} else
{if((state_val_78160 === 1))
{var state_78159__$1 = state_78159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78159__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78165 = [null,null,null,null,null,null,null,null];(statearr_78165[0] = state_machine__15433__auto__);
(statearr_78165[1] = 1);
return statearr_78165;
});
var state_machine__15433__auto____1 = (function (state_78159){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78159);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78166){if((e78166 instanceof Object))
{var ex__15436__auto__ = e78166;var statearr_78167_78185 = state_78159;(statearr_78167_78185[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78186 = state_78159;
state_78159 = G__78186;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78159){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value))
})();var state__15449__auto__ = (function (){var statearr_78168 = f__15448__auto__.call(null);(statearr_78168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78184);
return statearr_78168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78184,pred__78144,expr__78145,G__78143,vec__78142,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78144.call(null,1,expr__78145)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__78144.call(null,2,expr__78145)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78145)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78143))
{var c__15447__auto___78187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78187,G__78143,vec__78142,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78187,G__78143,vec__78142,type,value){
return (function (state_78172){var state_val_78173 = (state_78172[1]);if((state_val_78173 === 2))
{var inst_78170 = (state_78172[2]);var state_78172__$1 = state_78172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78172__$1,inst_78170);
} else
{if((state_val_78173 === 1))
{var state_78172__$1 = state_78172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78172__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78187,G__78143,vec__78142,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78187,G__78143,vec__78142,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78177 = [null,null,null,null,null,null,null];(statearr_78177[0] = state_machine__15433__auto__);
(statearr_78177[1] = 1);
return statearr_78177;
});
var state_machine__15433__auto____1 = (function (state_78172){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78172);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78178){if((e78178 instanceof Object))
{var ex__15436__auto__ = e78178;var statearr_78179_78188 = state_78172;(statearr_78179_78188[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78189 = state_78172;
state_78172 = G__78189;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78172){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78187,G__78143,vec__78142,type,value))
})();var state__15449__auto__ = (function (){var statearr_78180 = f__15448__auto__.call(null);(statearr_78180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78187);
return statearr_78180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78187,G__78143,vec__78142,type,value))
);
var pred__78181 = cljs.core._EQ_;var expr__78182 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78181.call(null,0,expr__78182)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78181.call(null,1,expr__78182)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78181.call(null,2,expr__78182)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.fill_tri.call(null,p1,p2,p3,draw_chan,new cljs.core.Keyword(null,"lt-red","lt-red",4214434366));
triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orthocenter","orthocenter",2505038207),null,new cljs.core.Keyword(null,"ang-bisector","ang-bisector",3140764786),null,new cljs.core.Keyword(null,"euler","euler",1110772443),null,new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857),null,new cljs.core.Keyword(null,"circumcenter","circumcenter",4659744374),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78182)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.circumcircle_state_transitioner = (function circumcircle_state_transitioner(p__78190,current_state,out,draw_chan){var vec__78233 = p__78190;var type = cljs.core.nth.call(null,vec__78233,0,null);var value = cljs.core.nth.call(null,vec__78233,1,null);var G__78234 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78234))
{var pred__78235 = cljs.core._EQ_;var expr__78236 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78235.call(null,0,expr__78236)))
{var c__15447__auto___78275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value){
return (function (state_78250){var state_val_78251 = (state_78250[1]);if((state_val_78251 === 3))
{var inst_78248 = (state_78250[2]);var state_78250__$1 = state_78250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78250__$1,inst_78248);
} else
{if((state_val_78251 === 2))
{var inst_78239 = (state_78250[2]);var inst_78240 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78241 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78242 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78240,inst_78241);var inst_78243 = triangulator.datatypes.style.call(null,inst_78242);var inst_78244 = triangulator.datatypes.point.call(null,value);var inst_78245 = [inst_78243,inst_78244];var inst_78246 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78245,null));var state_78250__$1 = (function (){var statearr_78252 = state_78250;(statearr_78252[7] = inst_78239);
return statearr_78252;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78250__$1,3,draw_chan,inst_78246);
} else
{if((state_val_78251 === 1))
{var state_78250__$1 = state_78250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78250__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78256 = [null,null,null,null,null,null,null,null];(statearr_78256[0] = state_machine__15433__auto__);
(statearr_78256[1] = 1);
return statearr_78256;
});
var state_machine__15433__auto____1 = (function (state_78250){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78250);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78257){if((e78257 instanceof Object))
{var ex__15436__auto__ = e78257;var statearr_78258_78276 = state_78250;(statearr_78258_78276[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78257;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78277 = state_78250;
state_78250 = G__78277;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78250){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value))
})();var state__15449__auto__ = (function (){var statearr_78259 = f__15448__auto__.call(null);(statearr_78259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78275);
return statearr_78259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78275,pred__78235,expr__78236,G__78234,vec__78233,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78235.call(null,1,expr__78236)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__78235.call(null,2,expr__78236)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78236)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78234))
{var c__15447__auto___78278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78278,G__78234,vec__78233,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78278,G__78234,vec__78233,type,value){
return (function (state_78263){var state_val_78264 = (state_78263[1]);if((state_val_78264 === 2))
{var inst_78261 = (state_78263[2]);var state_78263__$1 = state_78263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78263__$1,inst_78261);
} else
{if((state_val_78264 === 1))
{var state_78263__$1 = state_78263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78263__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78278,G__78234,vec__78233,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78278,G__78234,vec__78233,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78268 = [null,null,null,null,null,null,null];(statearr_78268[0] = state_machine__15433__auto__);
(statearr_78268[1] = 1);
return statearr_78268;
});
var state_machine__15433__auto____1 = (function (state_78263){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78263);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78269){if((e78269 instanceof Object))
{var ex__15436__auto__ = e78269;var statearr_78270_78279 = state_78263;(statearr_78270_78279[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78280 = state_78263;
state_78263 = G__78280;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78263){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78278,G__78234,vec__78233,type,value))
})();var state__15449__auto__ = (function (){var statearr_78271 = f__15448__auto__.call(null);(statearr_78271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78278);
return statearr_78271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78278,G__78234,vec__78233,type,value))
);
var pred__78272 = cljs.core._EQ_;var expr__78273 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78272.call(null,0,expr__78273)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78272.call(null,1,expr__78273)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857),null], null), null),new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78272.call(null,2,expr__78273)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.fill_tri.call(null,p1,p2,p3,draw_chan,new cljs.core.Keyword(null,"lt-red","lt-red",4214434366));
triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"circumcircle","circumcircle",4663541489),null,new cljs.core.Keyword(null,"perp-bisector","perp-bisector",4789204857),null,new cljs.core.Keyword(null,"circumcenter","circumcenter",4659744374),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78273)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.median_state_transitioner = (function median_state_transitioner(p__78281,current_state,out,draw_chan){var vec__78324 = p__78281;var type = cljs.core.nth.call(null,vec__78324,0,null);var value = cljs.core.nth.call(null,vec__78324,1,null);var G__78325 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78325))
{var pred__78326 = cljs.core._EQ_;var expr__78327 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78326.call(null,0,expr__78327)))
{var c__15447__auto___78366 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value){
return (function (state_78341){var state_val_78342 = (state_78341[1]);if((state_val_78342 === 3))
{var inst_78339 = (state_78341[2]);var state_78341__$1 = state_78341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78341__$1,inst_78339);
} else
{if((state_val_78342 === 2))
{var inst_78330 = (state_78341[2]);var inst_78331 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78332 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78333 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78331,inst_78332);var inst_78334 = triangulator.datatypes.style.call(null,inst_78333);var inst_78335 = triangulator.datatypes.point.call(null,value);var inst_78336 = [inst_78334,inst_78335];var inst_78337 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78336,null));var state_78341__$1 = (function (){var statearr_78343 = state_78341;(statearr_78343[7] = inst_78330);
return statearr_78343;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78341__$1,3,draw_chan,inst_78337);
} else
{if((state_val_78342 === 1))
{var state_78341__$1 = state_78341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78341__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78347 = [null,null,null,null,null,null,null,null];(statearr_78347[0] = state_machine__15433__auto__);
(statearr_78347[1] = 1);
return statearr_78347;
});
var state_machine__15433__auto____1 = (function (state_78341){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78341);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78348){if((e78348 instanceof Object))
{var ex__15436__auto__ = e78348;var statearr_78349_78367 = state_78341;(statearr_78349_78367[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78368 = state_78341;
state_78341 = G__78368;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78341){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value))
})();var state__15449__auto__ = (function (){var statearr_78350 = f__15448__auto__.call(null);(statearr_78350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78366);
return statearr_78350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78366,pred__78326,expr__78327,G__78325,vec__78324,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78326.call(null,1,expr__78327)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__78326.call(null,2,expr__78327)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78327)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78325))
{var c__15447__auto___78369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78369,G__78325,vec__78324,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78369,G__78325,vec__78324,type,value){
return (function (state_78354){var state_val_78355 = (state_78354[1]);if((state_val_78355 === 2))
{var inst_78352 = (state_78354[2]);var state_78354__$1 = state_78354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78354__$1,inst_78352);
} else
{if((state_val_78355 === 1))
{var state_78354__$1 = state_78354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78354__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78369,G__78325,vec__78324,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78369,G__78325,vec__78324,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78359 = [null,null,null,null,null,null,null];(statearr_78359[0] = state_machine__15433__auto__);
(statearr_78359[1] = 1);
return statearr_78359;
});
var state_machine__15433__auto____1 = (function (state_78354){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78354);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78360){if((e78360 instanceof Object))
{var ex__15436__auto__ = e78360;var statearr_78361_78370 = state_78354;(statearr_78361_78370[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78371 = state_78354;
state_78354 = G__78371;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78354){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78369,G__78325,vec__78324,type,value))
})();var state__15449__auto__ = (function (){var statearr_78362 = f__15448__auto__.call(null);(statearr_78362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78369);
return statearr_78362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78369,G__78325,vec__78324,type,value))
);
var pred__78363 = cljs.core._EQ_;var expr__78364 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78363.call(null,0,expr__78364)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78363.call(null,1,expr__78364)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midpoint","midpoint",3670036410),null], null), null),new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78363.call(null,2,expr__78364)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"median","median",4230840444),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78364)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.incircle_state_transitioner = (function incircle_state_transitioner(p__78372,current_state,out,draw_chan){var vec__78415 = p__78372;var type = cljs.core.nth.call(null,vec__78415,0,null);var value = cljs.core.nth.call(null,vec__78415,1,null);var G__78416 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78416))
{var pred__78417 = cljs.core._EQ_;var expr__78418 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78417.call(null,0,expr__78418)))
{var c__15447__auto___78457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value){
return (function (state_78432){var state_val_78433 = (state_78432[1]);if((state_val_78433 === 3))
{var inst_78430 = (state_78432[2]);var state_78432__$1 = state_78432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78432__$1,inst_78430);
} else
{if((state_val_78433 === 2))
{var inst_78421 = (state_78432[2]);var inst_78422 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78423 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78424 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78422,inst_78423);var inst_78425 = triangulator.datatypes.style.call(null,inst_78424);var inst_78426 = triangulator.datatypes.point.call(null,value);var inst_78427 = [inst_78425,inst_78426];var inst_78428 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78427,null));var state_78432__$1 = (function (){var statearr_78434 = state_78432;(statearr_78434[7] = inst_78421);
return statearr_78434;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78432__$1,3,draw_chan,inst_78428);
} else
{if((state_val_78433 === 1))
{var state_78432__$1 = state_78432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78432__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78438 = [null,null,null,null,null,null,null,null];(statearr_78438[0] = state_machine__15433__auto__);
(statearr_78438[1] = 1);
return statearr_78438;
});
var state_machine__15433__auto____1 = (function (state_78432){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78432);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78439){if((e78439 instanceof Object))
{var ex__15436__auto__ = e78439;var statearr_78440_78458 = state_78432;(statearr_78440_78458[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78459 = state_78432;
state_78432 = G__78459;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78432){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value))
})();var state__15449__auto__ = (function (){var statearr_78441 = f__15448__auto__.call(null);(statearr_78441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78457);
return statearr_78441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78457,pred__78417,expr__78418,G__78416,vec__78415,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78417.call(null,1,expr__78418)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var line = triangulator.datatypes.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,value], null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),p1,new cljs.core.Keyword(null,"p2","p2",1013907764),value], null);
} else
{if(cljs.core.truth_(pred__78417.call(null,2,expr__78418)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78418)].join('')));
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78416))
{var c__15447__auto___78460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78460,G__78416,vec__78415,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78460,G__78416,vec__78415,type,value){
return (function (state_78445){var state_val_78446 = (state_78445[1]);if((state_val_78446 === 2))
{var inst_78443 = (state_78445[2]);var state_78445__$1 = state_78445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78445__$1,inst_78443);
} else
{if((state_val_78446 === 1))
{var state_78445__$1 = state_78445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78445__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78460,G__78416,vec__78415,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78460,G__78416,vec__78415,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78450 = [null,null,null,null,null,null,null];(statearr_78450[0] = state_machine__15433__auto__);
(statearr_78450[1] = 1);
return statearr_78450;
});
var state_machine__15433__auto____1 = (function (state_78445){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78445);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78451){if((e78451 instanceof Object))
{var ex__15436__auto__ = e78451;var statearr_78452_78461 = state_78445;(statearr_78452_78461[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78462 = state_78445;
state_78445 = G__78462;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78445){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78460,G__78416,vec__78415,type,value))
})();var state__15449__auto__ = (function (){var statearr_78453 = f__15448__auto__.call(null);(statearr_78453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78460);
return statearr_78453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78460,G__78416,vec__78415,type,value))
);
var pred__78454 = cljs.core._EQ_;var expr__78455 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78454.call(null,0,expr__78455)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78454.call(null,1,expr__78455)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78454.call(null,2,expr__78455)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;triangulator.handlers.draw_triangle.call(null,p1,p2,p3,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"incircle","incircle",1101303207),null], null), null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78455)].join('')));
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.circle_state_transitioner = (function circle_state_transitioner(p__78463,current_state,out,draw_chan){var vec__78533 = p__78463;var type = cljs.core.nth.call(null,vec__78533,0,null);var value = cljs.core.nth.call(null,vec__78533,1,null);var G__78534 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78534))
{var pred__78535 = cljs.core._EQ_;var expr__78536 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78535.call(null,0,expr__78536)))
{var c__15447__auto___78602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function (state_78554){var state_val_78555 = (state_78554[1]);if((state_val_78555 === 4))
{var inst_78552 = (state_78554[2]);var state_78554__$1 = state_78554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78554__$1,inst_78552);
} else
{if((state_val_78555 === 3))
{var inst_78543 = (state_78554[2]);var inst_78544 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78545 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78546 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78544,inst_78545);var inst_78547 = triangulator.datatypes.style.call(null,inst_78546);var inst_78548 = triangulator.datatypes.point.call(null,value);var inst_78549 = [inst_78547,inst_78548];var inst_78550 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78549,null));var state_78554__$1 = (function (){var statearr_78556 = state_78554;(statearr_78556[7] = inst_78543);
return statearr_78556;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78554__$1,4,draw_chan,inst_78550);
} else
{if((state_val_78555 === 2))
{var inst_78539 = (state_78554[2]);var inst_78540 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"circle","circle",3948654658),draw_chan];var inst_78541 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78540,null));var state_78554__$1 = (function (){var statearr_78557 = state_78554;(statearr_78557[8] = inst_78539);
return statearr_78557;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78554__$1,3,out,inst_78541);
} else
{if((state_val_78555 === 1))
{var state_78554__$1 = state_78554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78554__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
}
});})(c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78561 = [null,null,null,null,null,null,null,null,null];(statearr_78561[0] = state_machine__15433__auto__);
(statearr_78561[1] = 1);
return statearr_78561;
});
var state_machine__15433__auto____1 = (function (state_78554){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78554);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78562){if((e78562 instanceof Object))
{var ex__15436__auto__ = e78562;var statearr_78563_78603 = state_78554;(statearr_78563_78603[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78604 = state_78554;
state_78554 = G__78604;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78554){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value))
})();var state__15449__auto__ = (function (){var statearr_78564 = f__15448__auto__.call(null);(statearr_78564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78602);
return statearr_78564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78602,pred__78535,expr__78536,G__78534,vec__78533,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78535.call(null,1,expr__78536)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var circle = triangulator.datatypes.circle.call(null,p1,triangulator.geometry.distance.call(null,p1,value));var c__15447__auto___78605 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function (state_78572){var state_val_78573 = (state_78572[1]);if((state_val_78573 === 3))
{var inst_78570 = (state_78572[2]);var state_78572__$1 = state_78572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78572__$1,inst_78570);
} else
{if((state_val_78573 === 2))
{var inst_78566 = (state_78572[2]);var inst_78567 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"circle","circle",3948654658),draw_chan];var inst_78568 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78567,null));var state_78572__$1 = (function (){var statearr_78574 = state_78572;(statearr_78574[7] = inst_78566);
return statearr_78574;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78572__$1,3,out,inst_78568);
} else
{if((state_val_78573 === 1))
{var state_78572__$1 = state_78572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78572__$1,2,out,circle);
} else
{return null;
}
}
}
});})(c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78578 = [null,null,null,null,null,null,null,null];(statearr_78578[0] = state_machine__15433__auto__);
(statearr_78578[1] = 1);
return statearr_78578;
});
var state_machine__15433__auto____1 = (function (state_78572){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78572);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78579){if((e78579 instanceof Object))
{var ex__15436__auto__ = e78579;var statearr_78580_78606 = state_78572;(statearr_78580_78606[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78607 = state_78572;
state_78572 = G__78607;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78572){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value))
})();var state__15449__auto__ = (function (){var statearr_78581 = f__15448__auto__.call(null);(statearr_78581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78605);
return statearr_78581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78605,p1,circle,pred__78535,expr__78536,G__78534,vec__78533,type,value))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78536)].join('')));
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78534))
{var c__15447__auto___78608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78608,G__78534,vec__78533,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78608,G__78534,vec__78533,type,value){
return (function (state_78589){var state_val_78590 = (state_78589[1]);if((state_val_78590 === 3))
{var inst_78587 = (state_78589[2]);var state_78589__$1 = state_78589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78589__$1,inst_78587);
} else
{if((state_val_78590 === 2))
{var inst_78583 = (state_78589[2]);var inst_78584 = [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"circle","circle",3948654658),draw_chan];var inst_78585 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78584,null));var state_78589__$1 = (function (){var statearr_78591 = state_78589;(statearr_78591[7] = inst_78583);
return statearr_78591;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78589__$1,3,out,inst_78585);
} else
{if((state_val_78590 === 1))
{var state_78589__$1 = state_78589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78589__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78608,G__78534,vec__78533,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78608,G__78534,vec__78533,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78595 = [null,null,null,null,null,null,null,null];(statearr_78595[0] = state_machine__15433__auto__);
(statearr_78595[1] = 1);
return statearr_78595;
});
var state_machine__15433__auto____1 = (function (state_78589){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78589);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78596){if((e78596 instanceof Object))
{var ex__15436__auto__ = e78596;var statearr_78597_78609 = state_78589;(statearr_78597_78609[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78610 = state_78589;
state_78589 = G__78610;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78589){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78608,G__78534,vec__78533,type,value))
})();var state__15449__auto__ = (function (){var statearr_78598 = f__15448__auto__.call(null);(statearr_78598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78608);
return statearr_78598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78608,G__78534,vec__78533,type,value))
);
var pred__78599 = cljs.core._EQ_;var expr__78600 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78599.call(null,0,expr__78600)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78599.call(null,1,expr__78600)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_circle.call(null,p1,value,draw_chan);
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78600)].join('')));
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.reflection_state_transitioner = (function reflection_state_transitioner(p__78611,current_state,out,draw_chan){var vec__78644 = p__78611;var type = cljs.core.nth.call(null,vec__78644,0,null);var value = cljs.core.nth.call(null,vec__78644,1,null);var G__78645 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78645))
{var pred__78646 = cljs.core._EQ_;var expr__78647 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78646.call(null,0,expr__78647)))
{var c__15447__auto___78676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value){
return (function (state_78652){var state_val_78653 = (state_78652[1]);if((state_val_78653 === 2))
{var inst_78650 = (state_78652[2]);var state_78652__$1 = state_78652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78652__$1,inst_78650);
} else
{if((state_val_78653 === 1))
{var state_78652__$1 = state_78652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78652__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78657 = [null,null,null,null,null,null,null];(statearr_78657[0] = state_machine__15433__auto__);
(statearr_78657[1] = 1);
return statearr_78657;
});
var state_machine__15433__auto____1 = (function (state_78652){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78652);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78658){if((e78658 instanceof Object))
{var ex__15436__auto__ = e78658;var statearr_78659_78677 = state_78652;(statearr_78659_78677[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78678 = state_78652;
state_78652 = G__78678;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78652){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value))
})();var state__15449__auto__ = (function (){var statearr_78660 = f__15448__auto__.call(null);(statearr_78660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78676);
return statearr_78660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78676,pred__78646,expr__78647,G__78645,vec__78644,type,value))
);
triangulator.handlers.draw_point.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"p1","p1",1013907763),value], null);
} else
{if(cljs.core.truth_(pred__78646.call(null,1,expr__78647)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"p2","p2",1013907764),value,new cljs.core.Keyword(null,"step","step",1017444926),2);
} else
{if(cljs.core.truth_(pred__78646.call(null,2,expr__78647)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"A","A",1013904307),value,new cljs.core.Keyword(null,"step","step",1017444926),3);
} else
{if(cljs.core.truth_(pred__78646.call(null,3,expr__78647)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"B","B",1013904308),value,new cljs.core.Keyword(null,"step","step",1017444926),4);
} else
{if(cljs.core.truth_(pred__78646.call(null,4,expr__78647)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78647)].join('')));
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78645))
{var c__15447__auto___78679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78679,G__78645,vec__78644,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78679,G__78645,vec__78644,type,value){
return (function (state_78664){var state_val_78665 = (state_78664[1]);if((state_val_78665 === 2))
{var inst_78662 = (state_78664[2]);var state_78664__$1 = state_78664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78664__$1,inst_78662);
} else
{if((state_val_78665 === 1))
{var state_78664__$1 = state_78664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78664__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78679,G__78645,vec__78644,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78679,G__78645,vec__78644,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78669 = [null,null,null,null,null,null,null];(statearr_78669[0] = state_machine__15433__auto__);
(statearr_78669[1] = 1);
return statearr_78669;
});
var state_machine__15433__auto____1 = (function (state_78664){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78664);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78670){if((e78670 instanceof Object))
{var ex__15436__auto__ = e78670;var statearr_78671_78680 = state_78664;(statearr_78671_78680[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78681 = state_78664;
state_78664 = G__78681;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78664){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78679,G__78645,vec__78644,type,value))
})();var state__15449__auto__ = (function (){var statearr_78672 = f__15448__auto__.call(null);(statearr_78672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78679);
return statearr_78672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78679,G__78645,vec__78644,type,value))
);
var pred__78673 = cljs.core._EQ_;var expr__78674 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78673.call(null,0,expr__78674)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78673.call(null,1,expr__78674)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,p1,value,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended-full","extended-full",2676106773),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
return current_state;
} else
{if(cljs.core.truth_(pred__78673.call(null,2,expr__78674)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;var ref = triangulator.geometry.reflection.call(null,p1,p2);var image = ref.call(null,p3);triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended-full","extended-full",2676106773),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,p3,image,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midpoint","midpoint",3670036410),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
return current_state;
} else
{if(cljs.core.truth_(pred__78673.call(null,3,expr__78674)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var A = new cljs.core.Keyword(null,"A","A",1013904307).cljs$core$IFn$_invoke$arity$1(current_state);var B = value;var ref = triangulator.geometry.reflection.call(null,p1,p2);var imageA = ref.call(null,A);var imageB = ref.call(null,B);triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended-full","extended-full",2676106773),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,A,imageA,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midpoint","midpoint",3670036410),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,B,imageB,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midpoint","midpoint",3670036410),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,A,B,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,imageA,imageB,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__78673.call(null,4,expr__78674)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var A = new cljs.core.Keyword(null,"A","A",1013904307).cljs$core$IFn$_invoke$arity$1(current_state);var B = new cljs.core.Keyword(null,"B","B",1013904308).cljs$core$IFn$_invoke$arity$1(current_state);var C = value;var ref = triangulator.geometry.reflection.call(null,p1,p2);var imageA = ref.call(null,A);var imageB = ref.call(null,B);var imageC = ref.call(null,C);triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended-full","extended-full",2676106773),null], null), null),new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_line.call(null,A,B,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,B,C,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,C,A,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blue","blue",1016931276));
triangulator.handlers.draw_line.call(null,imageA,imageB,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,imageB,imageC,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,imageC,imageA,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blue","blue",1016931276));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78674)].join('')));
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.inversion_state_transitioner = (function inversion_state_transitioner(p__78682,current_state,out,draw_chan){var vec__78757 = p__78682;var type = cljs.core.nth.call(null,vec__78757,0,null);var value = cljs.core.nth.call(null,vec__78757,1,null);var G__78758 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__78758))
{var pred__78759 = cljs.core._EQ_;var expr__78760 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78759.call(null,0,expr__78760)))
{var c__15447__auto___78831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value){
return (function (state_78774){var state_val_78775 = (state_78774[1]);if((state_val_78775 === 3))
{var inst_78772 = (state_78774[2]);var state_78774__$1 = state_78774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78774__$1,inst_78772);
} else
{if((state_val_78775 === 2))
{var inst_78763 = (state_78774[2]);var inst_78764 = [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"fill","fill",1017047285)];var inst_78765 = [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)];var inst_78766 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_78764,inst_78765);var inst_78767 = triangulator.datatypes.style.call(null,inst_78766);var inst_78768 = triangulator.datatypes.point.call(null,value);var inst_78769 = [inst_78767,inst_78768];var inst_78770 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_78769,null));var state_78774__$1 = (function (){var statearr_78776 = state_78774;(statearr_78776[7] = inst_78763);
return statearr_78776;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78774__$1,3,draw_chan,inst_78770);
} else
{if((state_val_78775 === 1))
{var state_78774__$1 = state_78774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78774__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
}
});})(c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78780 = [null,null,null,null,null,null,null,null];(statearr_78780[0] = state_machine__15433__auto__);
(statearr_78780[1] = 1);
return statearr_78780;
});
var state_machine__15433__auto____1 = (function (state_78774){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78774);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78781){if((e78781 instanceof Object))
{var ex__15436__auto__ = e78781;var statearr_78782_78832 = state_78774;(statearr_78782_78832[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78833 = state_78774;
state_78774 = G__78833;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78774){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value))
})();var state__15449__auto__ = (function (){var statearr_78783 = f__15448__auto__.call(null);(statearr_78783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78831);
return statearr_78783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78831,pred__78759,expr__78760,G__78758,vec__78757,type,value))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"center","center",3944857543),value], null);
} else
{if(cljs.core.truth_(pred__78759.call(null,1,expr__78760)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var radius = triangulator.geometry.distance.call(null,value,center);var inversion = triangulator.complex.inversion.call(null,center,radius);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"center","center",3944857543),center,new cljs.core.Keyword(null,"radius","radius",4370292740),radius,new cljs.core.Keyword(null,"inversion","inversion",3291930501),inversion], null);
} else
{if(cljs.core.truth_(pred__78759.call(null,2,expr__78760)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"A","A",1013904307),value,new cljs.core.Keyword(null,"step","step",1017444926),3);
} else
{if(cljs.core.truth_(pred__78759.call(null,3,expr__78760)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"B","B",1013904308),value,new cljs.core.Keyword(null,"step","step",1017444926),4);
} else
{if(cljs.core.truth_(pred__78759.call(null,4,expr__78760)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1017444926),0], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78760)].join('')));
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__78758))
{var c__15447__auto___78834 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___78834,G__78758,vec__78757,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___78834,G__78758,vec__78757,type,value){
return (function (state_78787){var state_val_78788 = (state_78787[1]);if((state_val_78788 === 2))
{var inst_78785 = (state_78787[2]);var state_78787__$1 = state_78787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78787__$1,inst_78785);
} else
{if((state_val_78788 === 1))
{var state_78787__$1 = state_78787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78787__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___78834,G__78758,vec__78757,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___78834,G__78758,vec__78757,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_78792 = [null,null,null,null,null,null,null];(statearr_78792[0] = state_machine__15433__auto__);
(statearr_78792[1] = 1);
return statearr_78792;
});
var state_machine__15433__auto____1 = (function (state_78787){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_78787);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e78793){if((e78793 instanceof Object))
{var ex__15436__auto__ = e78793;var statearr_78794_78835 = state_78787;(statearr_78794_78835[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78836 = state_78787;
state_78787 = G__78836;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_78787){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_78787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___78834,G__78758,vec__78757,type,value))
})();var state__15449__auto__ = (function (){var statearr_78795 = f__15448__auto__.call(null);(statearr_78795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___78834);
return statearr_78795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___78834,G__78758,vec__78757,type,value))
);
var pred__78796 = cljs.core._EQ_;var expr__78797 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__78796.call(null,0,expr__78797)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78796.call(null,1,expr__78797)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var radius = triangulator.geometry.distance.call(null,value,center);triangulator.handlers.draw_circle_2.call(null,center,radius,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)], null));
triangulator.handlers.draw_line.call(null,center,value,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"pink","pink",1017345256));
return current_state;
} else
{if(cljs.core.truth_(pred__78796.call(null,2,expr__78797)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(current_state);var inversion = new cljs.core.Keyword(null,"inversion","inversion",3291930501).cljs$core$IFn$_invoke$arity$1(current_state);var A = value;var image = inversion.call(null,A);triangulator.handlers.draw_circle_2.call(null,center,radius,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)], null));
triangulator.handlers.draw_line.call(null,center,A,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_point.call(null,image,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,A,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78796.call(null,3,expr__78797)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(current_state);var inversion = new cljs.core.Keyword(null,"inversion","inversion",3291930501).cljs$core$IFn$_invoke$arity$1(current_state);var A = new cljs.core.Keyword(null,"A","A",1013904307).cljs$core$IFn$_invoke$arity$1(current_state);var B = value;var imageA = inversion.call(null,A);var imageB = inversion.call(null,B);var line = triangulator.geometry.param_line.call(null,A,B);var pre_image_points = cljs.core.map.call(null,line,triangulator.geometry.parts.call(null,24));var image_points = cljs.core.map.call(null,inversion,pre_image_points);triangulator.handlers.draw_circle_2.call(null,center,radius,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)], null));
triangulator.handlers.draw_line.call(null,center,A,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,B,draw_chan,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extended","extended",3487981739),null], null), null),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_point.call(null,imageA,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,imageB,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
var seq__78799_78837 = cljs.core.seq.call(null,image_points);var chunk__78800_78838 = null;var count__78801_78839 = 0;var i__78802_78840 = 0;while(true){
if((i__78802_78840 < count__78801_78839))
{var p_78841 = cljs.core._nth.call(null,chunk__78800_78838,i__78802_78840);triangulator.handlers.draw_point.call(null,p_78841,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78842 = seq__78799_78837;
var G__78843 = chunk__78800_78838;
var G__78844 = count__78801_78839;
var G__78845 = (i__78802_78840 + 1);
seq__78799_78837 = G__78842;
chunk__78800_78838 = G__78843;
count__78801_78839 = G__78844;
i__78802_78840 = G__78845;
continue;
}
} else
{var temp__4092__auto___78846 = cljs.core.seq.call(null,seq__78799_78837);if(temp__4092__auto___78846)
{var seq__78799_78847__$1 = temp__4092__auto___78846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78799_78847__$1))
{var c__12848__auto___78848 = cljs.core.chunk_first.call(null,seq__78799_78847__$1);{
var G__78849 = cljs.core.chunk_rest.call(null,seq__78799_78847__$1);
var G__78850 = c__12848__auto___78848;
var G__78851 = cljs.core.count.call(null,c__12848__auto___78848);
var G__78852 = 0;
seq__78799_78837 = G__78849;
chunk__78800_78838 = G__78850;
count__78801_78839 = G__78851;
i__78802_78840 = G__78852;
continue;
}
} else
{var p_78853 = cljs.core.first.call(null,seq__78799_78847__$1);triangulator.handlers.draw_point.call(null,p_78853,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78854 = cljs.core.next.call(null,seq__78799_78847__$1);
var G__78855 = null;
var G__78856 = 0;
var G__78857 = 0;
seq__78799_78837 = G__78854;
chunk__78800_78838 = G__78855;
count__78801_78839 = G__78856;
i__78802_78840 = G__78857;
continue;
}
}
} else
{}
}
break;
}
var seq__78803_78858 = cljs.core.seq.call(null,pre_image_points);var chunk__78804_78859 = null;var count__78805_78860 = 0;var i__78806_78861 = 0;while(true){
if((i__78806_78861 < count__78805_78860))
{var p_78862 = cljs.core._nth.call(null,chunk__78804_78859,i__78806_78861);triangulator.handlers.draw_point.call(null,p_78862,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78863 = seq__78803_78858;
var G__78864 = chunk__78804_78859;
var G__78865 = count__78805_78860;
var G__78866 = (i__78806_78861 + 1);
seq__78803_78858 = G__78863;
chunk__78804_78859 = G__78864;
count__78805_78860 = G__78865;
i__78806_78861 = G__78866;
continue;
}
} else
{var temp__4092__auto___78867 = cljs.core.seq.call(null,seq__78803_78858);if(temp__4092__auto___78867)
{var seq__78803_78868__$1 = temp__4092__auto___78867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78803_78868__$1))
{var c__12848__auto___78869 = cljs.core.chunk_first.call(null,seq__78803_78868__$1);{
var G__78870 = cljs.core.chunk_rest.call(null,seq__78803_78868__$1);
var G__78871 = c__12848__auto___78869;
var G__78872 = cljs.core.count.call(null,c__12848__auto___78869);
var G__78873 = 0;
seq__78803_78858 = G__78870;
chunk__78804_78859 = G__78871;
count__78805_78860 = G__78872;
i__78806_78861 = G__78873;
continue;
}
} else
{var p_78874 = cljs.core.first.call(null,seq__78803_78868__$1);triangulator.handlers.draw_point.call(null,p_78874,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78875 = cljs.core.next.call(null,seq__78803_78868__$1);
var G__78876 = null;
var G__78877 = 0;
var G__78878 = 0;
seq__78803_78858 = G__78875;
chunk__78804_78859 = G__78876;
count__78805_78860 = G__78877;
i__78806_78861 = G__78878;
continue;
}
}
} else
{}
}
break;
}
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__78796.call(null,4,expr__78797)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(current_state);var inversion = new cljs.core.Keyword(null,"inversion","inversion",3291930501).cljs$core$IFn$_invoke$arity$1(current_state);var A = new cljs.core.Keyword(null,"A","A",1013904307).cljs$core$IFn$_invoke$arity$1(current_state);var B = new cljs.core.Keyword(null,"B","B",1013904308).cljs$core$IFn$_invoke$arity$1(current_state);var C = value;var image1 = inversion.call(null,A);var image2 = inversion.call(null,B);var image3 = inversion.call(null,C);var line1 = triangulator.geometry.param_line.call(null,A,B);var line2 = triangulator.geometry.param_line.call(null,B,C);var line3 = triangulator.geometry.param_line.call(null,C,A);var pre_image_points1 = cljs.core.map.call(null,line1,triangulator.geometry.parts.call(null,24));var pre_image_points2 = cljs.core.map.call(null,line2,triangulator.geometry.parts.call(null,24));var pre_image_points3 = cljs.core.map.call(null,line3,triangulator.geometry.parts.call(null,24));var image_points1 = cljs.core.map.call(null,inversion,pre_image_points1);var image_points2 = cljs.core.map.call(null,inversion,pre_image_points2);var image_points3 = cljs.core.map.call(null,inversion,pre_image_points3);triangulator.handlers.draw_circle_2.call(null,center,radius,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"yellow","yellow",4574631910),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"grey-2","grey-2",4071114806)], null));
triangulator.handlers.draw_point.call(null,image1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image2,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
var seq__78807_78879 = cljs.core.seq.call(null,image_points1);var chunk__78808_78880 = null;var count__78809_78881 = 0;var i__78810_78882 = 0;while(true){
if((i__78810_78882 < count__78809_78881))
{var p_78883 = cljs.core._nth.call(null,chunk__78808_78880,i__78810_78882);triangulator.handlers.draw_point.call(null,p_78883,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78884 = seq__78807_78879;
var G__78885 = chunk__78808_78880;
var G__78886 = count__78809_78881;
var G__78887 = (i__78810_78882 + 1);
seq__78807_78879 = G__78884;
chunk__78808_78880 = G__78885;
count__78809_78881 = G__78886;
i__78810_78882 = G__78887;
continue;
}
} else
{var temp__4092__auto___78888 = cljs.core.seq.call(null,seq__78807_78879);if(temp__4092__auto___78888)
{var seq__78807_78889__$1 = temp__4092__auto___78888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78807_78889__$1))
{var c__12848__auto___78890 = cljs.core.chunk_first.call(null,seq__78807_78889__$1);{
var G__78891 = cljs.core.chunk_rest.call(null,seq__78807_78889__$1);
var G__78892 = c__12848__auto___78890;
var G__78893 = cljs.core.count.call(null,c__12848__auto___78890);
var G__78894 = 0;
seq__78807_78879 = G__78891;
chunk__78808_78880 = G__78892;
count__78809_78881 = G__78893;
i__78810_78882 = G__78894;
continue;
}
} else
{var p_78895 = cljs.core.first.call(null,seq__78807_78889__$1);triangulator.handlers.draw_point.call(null,p_78895,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78896 = cljs.core.next.call(null,seq__78807_78889__$1);
var G__78897 = null;
var G__78898 = 0;
var G__78899 = 0;
seq__78807_78879 = G__78896;
chunk__78808_78880 = G__78897;
count__78809_78881 = G__78898;
i__78810_78882 = G__78899;
continue;
}
}
} else
{}
}
break;
}
var seq__78811_78900 = cljs.core.seq.call(null,pre_image_points1);var chunk__78812_78901 = null;var count__78813_78902 = 0;var i__78814_78903 = 0;while(true){
if((i__78814_78903 < count__78813_78902))
{var p_78904 = cljs.core._nth.call(null,chunk__78812_78901,i__78814_78903);triangulator.handlers.draw_point.call(null,p_78904,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78905 = seq__78811_78900;
var G__78906 = chunk__78812_78901;
var G__78907 = count__78813_78902;
var G__78908 = (i__78814_78903 + 1);
seq__78811_78900 = G__78905;
chunk__78812_78901 = G__78906;
count__78813_78902 = G__78907;
i__78814_78903 = G__78908;
continue;
}
} else
{var temp__4092__auto___78909 = cljs.core.seq.call(null,seq__78811_78900);if(temp__4092__auto___78909)
{var seq__78811_78910__$1 = temp__4092__auto___78909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78811_78910__$1))
{var c__12848__auto___78911 = cljs.core.chunk_first.call(null,seq__78811_78910__$1);{
var G__78912 = cljs.core.chunk_rest.call(null,seq__78811_78910__$1);
var G__78913 = c__12848__auto___78911;
var G__78914 = cljs.core.count.call(null,c__12848__auto___78911);
var G__78915 = 0;
seq__78811_78900 = G__78912;
chunk__78812_78901 = G__78913;
count__78813_78902 = G__78914;
i__78814_78903 = G__78915;
continue;
}
} else
{var p_78916 = cljs.core.first.call(null,seq__78811_78910__$1);triangulator.handlers.draw_point.call(null,p_78916,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__78917 = cljs.core.next.call(null,seq__78811_78910__$1);
var G__78918 = null;
var G__78919 = 0;
var G__78920 = 0;
seq__78811_78900 = G__78917;
chunk__78812_78901 = G__78918;
count__78813_78902 = G__78919;
i__78814_78903 = G__78920;
continue;
}
}
} else
{}
}
break;
}
var seq__78815_78921 = cljs.core.seq.call(null,image_points2);var chunk__78816_78922 = null;var count__78817_78923 = 0;var i__78818_78924 = 0;while(true){
if((i__78818_78924 < count__78817_78923))
{var p_78925 = cljs.core._nth.call(null,chunk__78816_78922,i__78818_78924);triangulator.handlers.draw_point.call(null,p_78925,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
{
var G__78926 = seq__78815_78921;
var G__78927 = chunk__78816_78922;
var G__78928 = count__78817_78923;
var G__78929 = (i__78818_78924 + 1);
seq__78815_78921 = G__78926;
chunk__78816_78922 = G__78927;
count__78817_78923 = G__78928;
i__78818_78924 = G__78929;
continue;
}
} else
{var temp__4092__auto___78930 = cljs.core.seq.call(null,seq__78815_78921);if(temp__4092__auto___78930)
{var seq__78815_78931__$1 = temp__4092__auto___78930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78815_78931__$1))
{var c__12848__auto___78932 = cljs.core.chunk_first.call(null,seq__78815_78931__$1);{
var G__78933 = cljs.core.chunk_rest.call(null,seq__78815_78931__$1);
var G__78934 = c__12848__auto___78932;
var G__78935 = cljs.core.count.call(null,c__12848__auto___78932);
var G__78936 = 0;
seq__78815_78921 = G__78933;
chunk__78816_78922 = G__78934;
count__78817_78923 = G__78935;
i__78818_78924 = G__78936;
continue;
}
} else
{var p_78937 = cljs.core.first.call(null,seq__78815_78931__$1);triangulator.handlers.draw_point.call(null,p_78937,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
{
var G__78938 = cljs.core.next.call(null,seq__78815_78931__$1);
var G__78939 = null;
var G__78940 = 0;
var G__78941 = 0;
seq__78815_78921 = G__78938;
chunk__78816_78922 = G__78939;
count__78817_78923 = G__78940;
i__78818_78924 = G__78941;
continue;
}
}
} else
{}
}
break;
}
var seq__78819_78942 = cljs.core.seq.call(null,pre_image_points2);var chunk__78820_78943 = null;var count__78821_78944 = 0;var i__78822_78945 = 0;while(true){
if((i__78822_78945 < count__78821_78944))
{var p_78946 = cljs.core._nth.call(null,chunk__78820_78943,i__78822_78945);triangulator.handlers.draw_point.call(null,p_78946,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
{
var G__78947 = seq__78819_78942;
var G__78948 = chunk__78820_78943;
var G__78949 = count__78821_78944;
var G__78950 = (i__78822_78945 + 1);
seq__78819_78942 = G__78947;
chunk__78820_78943 = G__78948;
count__78821_78944 = G__78949;
i__78822_78945 = G__78950;
continue;
}
} else
{var temp__4092__auto___78951 = cljs.core.seq.call(null,seq__78819_78942);if(temp__4092__auto___78951)
{var seq__78819_78952__$1 = temp__4092__auto___78951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78819_78952__$1))
{var c__12848__auto___78953 = cljs.core.chunk_first.call(null,seq__78819_78952__$1);{
var G__78954 = cljs.core.chunk_rest.call(null,seq__78819_78952__$1);
var G__78955 = c__12848__auto___78953;
var G__78956 = cljs.core.count.call(null,c__12848__auto___78953);
var G__78957 = 0;
seq__78819_78942 = G__78954;
chunk__78820_78943 = G__78955;
count__78821_78944 = G__78956;
i__78822_78945 = G__78957;
continue;
}
} else
{var p_78958 = cljs.core.first.call(null,seq__78819_78952__$1);triangulator.handlers.draw_point.call(null,p_78958,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
{
var G__78959 = cljs.core.next.call(null,seq__78819_78952__$1);
var G__78960 = null;
var G__78961 = 0;
var G__78962 = 0;
seq__78819_78942 = G__78959;
chunk__78820_78943 = G__78960;
count__78821_78944 = G__78961;
i__78822_78945 = G__78962;
continue;
}
}
} else
{}
}
break;
}
var seq__78823_78963 = cljs.core.seq.call(null,image_points3);var chunk__78824_78964 = null;var count__78825_78965 = 0;var i__78826_78966 = 0;while(true){
if((i__78826_78966 < count__78825_78965))
{var p_78967 = cljs.core._nth.call(null,chunk__78824_78964,i__78826_78966);triangulator.handlers.draw_point.call(null,p_78967,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
{
var G__78968 = seq__78823_78963;
var G__78969 = chunk__78824_78964;
var G__78970 = count__78825_78965;
var G__78971 = (i__78826_78966 + 1);
seq__78823_78963 = G__78968;
chunk__78824_78964 = G__78969;
count__78825_78965 = G__78970;
i__78826_78966 = G__78971;
continue;
}
} else
{var temp__4092__auto___78972 = cljs.core.seq.call(null,seq__78823_78963);if(temp__4092__auto___78972)
{var seq__78823_78973__$1 = temp__4092__auto___78972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78823_78973__$1))
{var c__12848__auto___78974 = cljs.core.chunk_first.call(null,seq__78823_78973__$1);{
var G__78975 = cljs.core.chunk_rest.call(null,seq__78823_78973__$1);
var G__78976 = c__12848__auto___78974;
var G__78977 = cljs.core.count.call(null,c__12848__auto___78974);
var G__78978 = 0;
seq__78823_78963 = G__78975;
chunk__78824_78964 = G__78976;
count__78825_78965 = G__78977;
i__78826_78966 = G__78978;
continue;
}
} else
{var p_78979 = cljs.core.first.call(null,seq__78823_78973__$1);triangulator.handlers.draw_point.call(null,p_78979,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
{
var G__78980 = cljs.core.next.call(null,seq__78823_78973__$1);
var G__78981 = null;
var G__78982 = 0;
var G__78983 = 0;
seq__78823_78963 = G__78980;
chunk__78824_78964 = G__78981;
count__78825_78965 = G__78982;
i__78826_78966 = G__78983;
continue;
}
}
} else
{}
}
break;
}
var seq__78827_78984 = cljs.core.seq.call(null,pre_image_points3);var chunk__78828_78985 = null;var count__78829_78986 = 0;var i__78830_78987 = 0;while(true){
if((i__78830_78987 < count__78829_78986))
{var p_78988 = cljs.core._nth.call(null,chunk__78828_78985,i__78830_78987);triangulator.handlers.draw_point.call(null,p_78988,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
{
var G__78989 = seq__78827_78984;
var G__78990 = chunk__78828_78985;
var G__78991 = count__78829_78986;
var G__78992 = (i__78830_78987 + 1);
seq__78827_78984 = G__78989;
chunk__78828_78985 = G__78990;
count__78829_78986 = G__78991;
i__78830_78987 = G__78992;
continue;
}
} else
{var temp__4092__auto___78993 = cljs.core.seq.call(null,seq__78827_78984);if(temp__4092__auto___78993)
{var seq__78827_78994__$1 = temp__4092__auto___78993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__78827_78994__$1))
{var c__12848__auto___78995 = cljs.core.chunk_first.call(null,seq__78827_78994__$1);{
var G__78996 = cljs.core.chunk_rest.call(null,seq__78827_78994__$1);
var G__78997 = c__12848__auto___78995;
var G__78998 = cljs.core.count.call(null,c__12848__auto___78995);
var G__78999 = 0;
seq__78827_78984 = G__78996;
chunk__78828_78985 = G__78997;
count__78829_78986 = G__78998;
i__78830_78987 = G__78999;
continue;
}
} else
{var p_79000 = cljs.core.first.call(null,seq__78827_78994__$1);triangulator.handlers.draw_point.call(null,p_79000,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
{
var G__79001 = cljs.core.next.call(null,seq__78827_78994__$1);
var G__79002 = null;
var G__79003 = 0;
var G__79004 = 0;
seq__78827_78984 = G__79001;
chunk__78828_78985 = G__79002;
count__78829_78986 = G__79003;
i__78830_78987 = G__79004;
continue;
}
}
} else
{}
}
break;
}
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__78797)].join('')));
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.homothety_state_transitioner = (function homothety_state_transitioner(p__79005,current_state,out,draw_chan){var vec__79026 = p__79005;var type = cljs.core.nth.call(null,vec__79026,0,null);var value = cljs.core.nth.call(null,vec__79026,1,null);var G__79027 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__79027))
{var pred__79028 = cljs.core._EQ_;var expr__79029 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79028.call(null,0,expr__79029)))
{var k = (1 / 2);var center = value;var homothety = triangulator.complex.homothety.call(null,center,k);return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"center","center",3944857543),center,new cljs.core.Keyword(null,"homothety","homothety",3437436639),homothety);
} else
{if(cljs.core.truth_(pred__79028.call(null,1,expr__79029)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),value);
} else
{if(cljs.core.truth_(pred__79028.call(null,2,expr__79029)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),3,new cljs.core.Keyword(null,"p2","p2",1013907764),value);
} else
{if(cljs.core.truth_(pred__79028.call(null,3,expr__79029)))
{return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764)),new cljs.core.Keyword(null,"step","step",1017444926),1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79029)].join('')));
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__79027))
{var c__15447__auto___79046 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___79046,G__79027,vec__79026,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___79046,G__79027,vec__79026,type,value){
return (function (state_79034){var state_val_79035 = (state_79034[1]);if((state_val_79035 === 2))
{var inst_79032 = (state_79034[2]);var state_79034__$1 = state_79034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79034__$1,inst_79032);
} else
{if((state_val_79035 === 1))
{var state_79034__$1 = state_79034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79034__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___79046,G__79027,vec__79026,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___79046,G__79027,vec__79026,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_79039 = [null,null,null,null,null,null,null];(statearr_79039[0] = state_machine__15433__auto__);
(statearr_79039[1] = 1);
return statearr_79039;
});
var state_machine__15433__auto____1 = (function (state_79034){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_79034);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e79040){if((e79040 instanceof Object))
{var ex__15436__auto__ = e79040;var statearr_79041_79047 = state_79034;(statearr_79041_79047[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e79040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__79048 = state_79034;
state_79034 = G__79048;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_79034){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_79034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___79046,G__79027,vec__79026,type,value))
})();var state__15449__auto__ = (function (){var statearr_79042 = f__15448__auto__.call(null);(statearr_79042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___79046);
return statearr_79042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___79046,G__79027,vec__79026,type,value))
);
var pred__79043 = cljs.core._EQ_;var expr__79044 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79043.call(null,0,expr__79044)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79043.call(null,1,expr__79044)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = value;var homothety = new cljs.core.Keyword(null,"homothety","homothety",3437436639).cljs$core$IFn$_invoke$arity$1(current_state);var image = homothety.call(null,p1);triangulator.handlers.draw_line.call(null,center,p1,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_point.call(null,p1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79043.call(null,2,expr__79044)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = value;var homothety = new cljs.core.Keyword(null,"homothety","homothety",3437436639).cljs$core$IFn$_invoke$arity$1(current_state);var image1 = homothety.call(null,p1);var image2 = homothety.call(null,p2);triangulator.handlers.draw_line.call(null,center,p1,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,image1,image2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79043.call(null,3,expr__79044)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;var homothety = new cljs.core.Keyword(null,"homothety","homothety",3437436639).cljs$core$IFn$_invoke$arity$1(current_state);var image1 = homothety.call(null,p1);var image2 = homothety.call(null,p2);var image3 = homothety.call(null,p3);triangulator.handlers.draw_line.call(null,center,p1,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p3,draw_chan,null,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2,p3,draw_chan,null,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,p3,p1,draw_chan,null,new cljs.core.Keyword(null,"blue","blue",1016931276));
triangulator.handlers.draw_line.call(null,image1,image2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,image2,image3,draw_chan,null,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,image3,image1,draw_chan,null,new cljs.core.Keyword(null,"blue","blue",1016931276));
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79044)].join('')));
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.rotation_state_transitioner = (function rotation_state_transitioner(p__79049,current_state,out,draw_chan){var vec__79086 = p__79049;var type = cljs.core.nth.call(null,vec__79086,0,null);var value = cljs.core.nth.call(null,vec__79086,1,null);var G__79087 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__79087))
{var pred__79088 = cljs.core._EQ_;var expr__79089 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79088.call(null,0,expr__79089)))
{var angle = (triangulator.geometry.tau / 3);var rotation = triangulator.complex.rotation.call(null,value,angle);return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"center","center",3944857543),value,new cljs.core.Keyword(null,"rotation","rotation",973603568),rotation);
} else
{if(cljs.core.truth_(pred__79088.call(null,1,expr__79089)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"p1","p1",1013907763),value);
} else
{if(cljs.core.truth_(pred__79088.call(null,2,expr__79089)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),3,new cljs.core.Keyword(null,"p2","p2",1013907764),value);
} else
{if(cljs.core.truth_(pred__79088.call(null,3,expr__79089)))
{return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764)),new cljs.core.Keyword(null,"step","step",1017444926),1);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79089)].join('')));
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__79087))
{var c__15447__auto___79122 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___79122,G__79087,vec__79086,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___79122,G__79087,vec__79086,type,value){
return (function (state_79094){var state_val_79095 = (state_79094[1]);if((state_val_79095 === 2))
{var inst_79092 = (state_79094[2]);var state_79094__$1 = state_79094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79094__$1,inst_79092);
} else
{if((state_val_79095 === 1))
{var state_79094__$1 = state_79094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79094__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___79122,G__79087,vec__79086,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___79122,G__79087,vec__79086,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_79099 = [null,null,null,null,null,null,null];(statearr_79099[0] = state_machine__15433__auto__);
(statearr_79099[1] = 1);
return statearr_79099;
});
var state_machine__15433__auto____1 = (function (state_79094){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_79094);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e79100){if((e79100 instanceof Object))
{var ex__15436__auto__ = e79100;var statearr_79101_79123 = state_79094;(statearr_79101_79123[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e79100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__79124 = state_79094;
state_79094 = G__79124;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_79094){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_79094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___79122,G__79087,vec__79086,type,value))
})();var state__15449__auto__ = (function (){var statearr_79102 = f__15448__auto__.call(null);(statearr_79102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___79122);
return statearr_79102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___79122,G__79087,vec__79086,type,value))
);
var pred__79103 = cljs.core._EQ_;var expr__79104 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79103.call(null,0,expr__79104)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79103.call(null,1,expr__79104)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var rotation = new cljs.core.Keyword(null,"rotation","rotation",973603568).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = value;var images = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p1));var seq__79106_79125 = cljs.core.seq.call(null,images);var chunk__79107_79126 = null;var count__79108_79127 = 0;var i__79109_79128 = 0;while(true){
if((i__79109_79128 < count__79108_79127))
{var pi_79129 = cljs.core._nth.call(null,chunk__79107_79126,i__79109_79128);triangulator.handlers.draw_line.call(null,center,pi_79129,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_point.call(null,pi_79129,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__79130 = seq__79106_79125;
var G__79131 = chunk__79107_79126;
var G__79132 = count__79108_79127;
var G__79133 = (i__79109_79128 + 1);
seq__79106_79125 = G__79130;
chunk__79107_79126 = G__79131;
count__79108_79127 = G__79132;
i__79109_79128 = G__79133;
continue;
}
} else
{var temp__4092__auto___79134 = cljs.core.seq.call(null,seq__79106_79125);if(temp__4092__auto___79134)
{var seq__79106_79135__$1 = temp__4092__auto___79134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79106_79135__$1))
{var c__12848__auto___79136 = cljs.core.chunk_first.call(null,seq__79106_79135__$1);{
var G__79137 = cljs.core.chunk_rest.call(null,seq__79106_79135__$1);
var G__79138 = c__12848__auto___79136;
var G__79139 = cljs.core.count.call(null,c__12848__auto___79136);
var G__79140 = 0;
seq__79106_79125 = G__79137;
chunk__79107_79126 = G__79138;
count__79108_79127 = G__79139;
i__79109_79128 = G__79140;
continue;
}
} else
{var pi_79141 = cljs.core.first.call(null,seq__79106_79135__$1);triangulator.handlers.draw_line.call(null,center,pi_79141,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_point.call(null,pi_79141,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
{
var G__79142 = cljs.core.next.call(null,seq__79106_79135__$1);
var G__79143 = null;
var G__79144 = 0;
var G__79145 = 0;
seq__79106_79125 = G__79142;
chunk__79107_79126 = G__79143;
count__79108_79127 = G__79144;
i__79109_79128 = G__79145;
continue;
}
}
} else
{}
}
break;
}
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79103.call(null,2,expr__79104)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var rotation = new cljs.core.Keyword(null,"rotation","rotation",973603568).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = value;var images1 = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p1));var images2 = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p2));var images = cljs.core.map.call(null,cljs.core.vector,images1,images2);var seq__79110_79146 = cljs.core.seq.call(null,images);var chunk__79111_79147 = null;var count__79112_79148 = 0;var i__79113_79149 = 0;while(true){
if((i__79113_79149 < count__79112_79148))
{var vec__79114_79150 = cljs.core._nth.call(null,chunk__79111_79147,i__79113_79149);var p1i_79151 = cljs.core.nth.call(null,vec__79114_79150,0,null);var p2i_79152 = cljs.core.nth.call(null,vec__79114_79150,1,null);triangulator.handlers.draw_line.call(null,center,p1i_79151,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2i_79152,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1i_79151,p2i_79152,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
{
var G__79153 = seq__79110_79146;
var G__79154 = chunk__79111_79147;
var G__79155 = count__79112_79148;
var G__79156 = (i__79113_79149 + 1);
seq__79110_79146 = G__79153;
chunk__79111_79147 = G__79154;
count__79112_79148 = G__79155;
i__79113_79149 = G__79156;
continue;
}
} else
{var temp__4092__auto___79157 = cljs.core.seq.call(null,seq__79110_79146);if(temp__4092__auto___79157)
{var seq__79110_79158__$1 = temp__4092__auto___79157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79110_79158__$1))
{var c__12848__auto___79159 = cljs.core.chunk_first.call(null,seq__79110_79158__$1);{
var G__79160 = cljs.core.chunk_rest.call(null,seq__79110_79158__$1);
var G__79161 = c__12848__auto___79159;
var G__79162 = cljs.core.count.call(null,c__12848__auto___79159);
var G__79163 = 0;
seq__79110_79146 = G__79160;
chunk__79111_79147 = G__79161;
count__79112_79148 = G__79162;
i__79113_79149 = G__79163;
continue;
}
} else
{var vec__79115_79164 = cljs.core.first.call(null,seq__79110_79158__$1);var p1i_79165 = cljs.core.nth.call(null,vec__79115_79164,0,null);var p2i_79166 = cljs.core.nth.call(null,vec__79115_79164,1,null);triangulator.handlers.draw_line.call(null,center,p1i_79165,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2i_79166,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1i_79165,p2i_79166,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
{
var G__79167 = cljs.core.next.call(null,seq__79110_79158__$1);
var G__79168 = null;
var G__79169 = 0;
var G__79170 = 0;
seq__79110_79146 = G__79167;
chunk__79111_79147 = G__79168;
count__79112_79148 = G__79169;
i__79113_79149 = G__79170;
continue;
}
}
} else
{}
}
break;
}
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79103.call(null,3,expr__79104)))
{var center = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(current_state);var rotation = new cljs.core.Keyword(null,"rotation","rotation",973603568).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;var images1 = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p1));var images2 = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p2));var images3 = cljs.core.take.call(null,3,cljs.core.iterate.call(null,rotation,p3));var images = cljs.core.map.call(null,cljs.core.vector,images1,images2,images3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));var seq__79116_79171 = cljs.core.seq.call(null,images);var chunk__79117_79172 = null;var count__79118_79173 = 0;var i__79119_79174 = 0;while(true){
if((i__79119_79174 < count__79118_79173))
{var vec__79120_79175 = cljs.core._nth.call(null,chunk__79117_79172,i__79119_79174);var p1i_79176 = cljs.core.nth.call(null,vec__79120_79175,0,null);var p2i_79177 = cljs.core.nth.call(null,vec__79120_79175,1,null);var p3i_79178 = cljs.core.nth.call(null,vec__79120_79175,2,null);var color_79179 = cljs.core.nth.call(null,vec__79120_79175,3,null);triangulator.handlers.draw_line.call(null,center,p1i_79176,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2i_79177,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p3i_79178,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1i_79176,p2i_79177,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2i_79177,p3i_79178,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,p3i_79178,p1i_79176,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blue","blue",1016931276));
{
var G__79180 = seq__79116_79171;
var G__79181 = chunk__79117_79172;
var G__79182 = count__79118_79173;
var G__79183 = (i__79119_79174 + 1);
seq__79116_79171 = G__79180;
chunk__79117_79172 = G__79181;
count__79118_79173 = G__79182;
i__79119_79174 = G__79183;
continue;
}
} else
{var temp__4092__auto___79184 = cljs.core.seq.call(null,seq__79116_79171);if(temp__4092__auto___79184)
{var seq__79116_79185__$1 = temp__4092__auto___79184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79116_79185__$1))
{var c__12848__auto___79186 = cljs.core.chunk_first.call(null,seq__79116_79185__$1);{
var G__79187 = cljs.core.chunk_rest.call(null,seq__79116_79185__$1);
var G__79188 = c__12848__auto___79186;
var G__79189 = cljs.core.count.call(null,c__12848__auto___79186);
var G__79190 = 0;
seq__79116_79171 = G__79187;
chunk__79117_79172 = G__79188;
count__79118_79173 = G__79189;
i__79119_79174 = G__79190;
continue;
}
} else
{var vec__79121_79191 = cljs.core.first.call(null,seq__79116_79185__$1);var p1i_79192 = cljs.core.nth.call(null,vec__79121_79191,0,null);var p2i_79193 = cljs.core.nth.call(null,vec__79121_79191,1,null);var p3i_79194 = cljs.core.nth.call(null,vec__79121_79191,2,null);var color_79195 = cljs.core.nth.call(null,vec__79121_79191,3,null);triangulator.handlers.draw_line.call(null,center,p1i_79192,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p2i_79193,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,center,p3i_79194,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222));
triangulator.handlers.draw_line.call(null,p1i_79192,p2i_79193,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2i_79193,p3i_79194,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,p3i_79194,p1i_79192,draw_chan,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"blue","blue",1016931276));
{
var G__79196 = cljs.core.next.call(null,seq__79116_79185__$1);
var G__79197 = null;
var G__79198 = 0;
var G__79199 = 0;
seq__79116_79171 = G__79196;
chunk__79117_79172 = G__79197;
count__79118_79173 = G__79198;
i__79119_79174 = G__79199;
continue;
}
}
} else
{}
}
break;
}
triangulator.handlers.draw_point.call(null,center,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"yellow","yellow",4574631910)], null));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79104)].join('')));
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
/**
* see point-state-transitioner
*/
triangulator.handlers.translation_state_transitioner = (function translation_state_transitioner(p__79200,current_state,out,draw_chan){var vec__79221 = p__79200;var type = cljs.core.nth.call(null,vec__79221,0,null);var value = cljs.core.nth.call(null,vec__79221,1,null);var G__79222 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),G__79222))
{var pred__79223 = cljs.core._EQ_;var expr__79224 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79223.call(null,0,expr__79224)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),1,new cljs.core.Keyword(null,"pi","pi",1013907819),value);
} else
{if(cljs.core.truth_(pred__79223.call(null,1,expr__79224)))
{var pi = new cljs.core.Keyword(null,"pi","pi",1013907819).cljs$core$IFn$_invoke$arity$1(current_state);var pf = value;var v = triangulator.geometry.minus.call(null,pf,pi);var translation = triangulator.complex.translation.call(null,v);return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),2,new cljs.core.Keyword(null,"pf","pf",1013907816),pf,new cljs.core.Keyword(null,"vector","vector",4488484021),v,new cljs.core.Keyword(null,"translation","translation",3468224035),translation);
} else
{if(cljs.core.truth_(pred__79223.call(null,2,expr__79224)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),3,new cljs.core.Keyword(null,"p1","p1",1013907763),value);
} else
{if(cljs.core.truth_(pred__79223.call(null,3,expr__79224)))
{return cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"step","step",1017444926),4,new cljs.core.Keyword(null,"p2","p2",1013907764),value);
} else
{if(cljs.core.truth_(pred__79223.call(null,4,expr__79224)))
{return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764)),new cljs.core.Keyword(null,"step","step",1017444926),2);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79224)].join('')));
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),G__79222))
{var c__15447__auto___79241 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___79241,G__79222,vec__79221,type,value){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___79241,G__79222,vec__79221,type,value){
return (function (state_79229){var state_val_79230 = (state_79229[1]);if((state_val_79230 === 2))
{var inst_79227 = (state_79229[2]);var state_79229__$1 = state_79229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79229__$1,inst_79227);
} else
{if((state_val_79230 === 1))
{var state_79229__$1 = state_79229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79229__$1,2,draw_chan,triangulator.handlers.clear);
} else
{return null;
}
}
});})(c__15447__auto___79241,G__79222,vec__79221,type,value))
;return ((function (switch__15432__auto__,c__15447__auto___79241,G__79222,vec__79221,type,value){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_79234 = [null,null,null,null,null,null,null];(statearr_79234[0] = state_machine__15433__auto__);
(statearr_79234[1] = 1);
return statearr_79234;
});
var state_machine__15433__auto____1 = (function (state_79229){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_79229);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e79235){if((e79235 instanceof Object))
{var ex__15436__auto__ = e79235;var statearr_79236_79242 = state_79229;(statearr_79236_79242[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e79235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__79243 = state_79229;
state_79229 = G__79243;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_79229){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_79229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___79241,G__79222,vec__79221,type,value))
})();var state__15449__auto__ = (function (){var statearr_79237 = f__15448__auto__.call(null);(statearr_79237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___79241);
return statearr_79237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___79241,G__79222,vec__79221,type,value))
);
var pred__79238 = cljs.core._EQ_;var expr__79239 = new cljs.core.Keyword(null,"step","step",1017444926).cljs$core$IFn$_invoke$arity$1(current_state);if(cljs.core.truth_(pred__79238.call(null,0,expr__79239)))
{triangulator.handlers.draw_point_coords.call(null,value,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79238.call(null,1,expr__79239)))
{var pi = new cljs.core.Keyword(null,"pi","pi",1013907819).cljs$core$IFn$_invoke$arity$1(current_state);triangulator.handlers.draw_line.call(null,pi,value,draw_chan,null,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
return current_state;
} else
{if(cljs.core.truth_(pred__79238.call(null,2,expr__79239)))
{var pi = new cljs.core.Keyword(null,"pi","pi",1013907819).cljs$core$IFn$_invoke$arity$1(current_state);var pf = new cljs.core.Keyword(null,"pf","pf",1013907816).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = value;var translation = new cljs.core.Keyword(null,"translation","translation",3468224035).cljs$core$IFn$_invoke$arity$1(current_state);var image = translation.call(null,p1);triangulator.handlers.draw_line.call(null,pi,pf,draw_chan,null,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_point.call(null,p1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
return current_state;
} else
{if(cljs.core.truth_(pred__79238.call(null,3,expr__79239)))
{var pi = new cljs.core.Keyword(null,"pi","pi",1013907819).cljs$core$IFn$_invoke$arity$1(current_state);var pf = new cljs.core.Keyword(null,"pf","pf",1013907816).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = value;var translation = new cljs.core.Keyword(null,"translation","translation",3468224035).cljs$core$IFn$_invoke$arity$1(current_state);var image1 = translation.call(null,p1);var image2 = translation.call(null,p2);triangulator.handlers.draw_line.call(null,pi,pf,draw_chan,null,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_point.call(null,p1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,p2,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image2,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,image1,image2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
return current_state;
} else
{if(cljs.core.truth_(pred__79238.call(null,4,expr__79239)))
{var pi = new cljs.core.Keyword(null,"pi","pi",1013907819).cljs$core$IFn$_invoke$arity$1(current_state);var pf = new cljs.core.Keyword(null,"pf","pf",1013907816).cljs$core$IFn$_invoke$arity$1(current_state);var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(current_state);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(current_state);var p3 = value;var translation = new cljs.core.Keyword(null,"translation","translation",3468224035).cljs$core$IFn$_invoke$arity$1(current_state);var image1 = translation.call(null,p1);var image2 = translation.call(null,p2);var image3 = translation.call(null,p3);triangulator.handlers.draw_line.call(null,pi,pf,draw_chan,null,new cljs.core.Keyword(null,"yellow","yellow",4574631910));
triangulator.handlers.draw_point.call(null,p1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,image1,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"red","red",1014017027)], null));
triangulator.handlers.draw_point.call(null,p2,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
triangulator.handlers.draw_point.call(null,image2,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"green","green",1112523381)], null));
triangulator.handlers.draw_point.call(null,p3,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
triangulator.handlers.draw_point.call(null,image3,draw_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"lt-grey","lt-grey",1445775222),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"blue","blue",1016931276)], null));
triangulator.handlers.draw_line.call(null,p1,p2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,image1,image2,draw_chan,null,new cljs.core.Keyword(null,"red","red",1014017027));
triangulator.handlers.draw_line.call(null,p2,p3,draw_chan,null,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,image2,image3,draw_chan,null,new cljs.core.Keyword(null,"green","green",1112523381));
triangulator.handlers.draw_line.call(null,p3,p1,draw_chan,null,new cljs.core.Keyword(null,"blue","blue",1016931276));
triangulator.handlers.draw_line.call(null,image3,image1,draw_chan,null,new cljs.core.Keyword(null,"blue","blue",1016931276));
return current_state;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__79239)].join('')));
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
}
});
triangulator.handlers.mouse_handler = (function mouse_handler(click,move,ctr_chan,draw_chan){var return_message_chan = cljs.core.async.chan.call(null);var c__15447__auto___79928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___79928,return_message_chan){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___79928,return_message_chan){
return (function (state_79790){var state_val_79791 = (state_79790[1]);if((state_val_79791 === 32))
{var inst_79589 = (state_79790[7]);var inst_79669 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"circumcircle","circumcircle",4663541489),inst_79589);var state_79790__$1 = state_79790;if(inst_79669)
{var statearr_79793_79929 = state_79790__$1;(statearr_79793_79929[1] = 34);
} else
{var statearr_79794_79930 = state_79790__$1;(statearr_79794_79930[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 64))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79741 = [inst_79619,inst_79597];var inst_79742 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79741,null));var inst_79743 = triangulator.handlers.rotation_state_transitioner.call(null,inst_79742,inst_79590,return_message_chan,draw_chan);var tmp79792 = inst_79589;var inst_79589__$1 = tmp79792;var inst_79590__$1 = inst_79743;var state_79790__$1 = (function (){var statearr_79795 = state_79790;(statearr_79795[7] = inst_79589__$1);
(statearr_79795[8] = inst_79590__$1);
return statearr_79795;
})();var statearr_79796_79931 = state_79790__$1;(statearr_79796_79931[2] = null);
(statearr_79796_79931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 1))
{var inst_79586 = [new cljs.core.Keyword(null,"step","step",1017444926)];var inst_79587 = [0];var inst_79588 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_79586,inst_79587);var inst_79589 = new cljs.core.Keyword(null,"none","none",1017291434);var inst_79590 = inst_79588;var state_79790__$1 = (function (){var statearr_79797 = state_79790;(statearr_79797[7] = inst_79589);
(statearr_79797[8] = inst_79590);
return statearr_79797;
})();var statearr_79798_79932 = state_79790__$1;(statearr_79798_79932[2] = null);
(statearr_79798_79932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 33))
{var inst_79780 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79799_79933 = state_79790__$1;(statearr_79799_79933[2] = inst_79780);
(statearr_79799_79933[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 65))
{var inst_79589 = (state_79790[7]);var inst_79746 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"translation","translation",3468224035),inst_79589);var state_79790__$1 = state_79790;if(inst_79746)
{var statearr_79801_79934 = state_79790__$1;(statearr_79801_79934[1] = 67);
} else
{var statearr_79802_79935 = state_79790__$1;(statearr_79802_79935[1] = 68);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 2))
{var inst_79593 = [click,move,ctr_chan];var inst_79594 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79593,null));var state_79790__$1 = state_79790;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_79790__$1,4,inst_79594);
} else
{if((state_val_79791 === 34))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79671 = [inst_79619,inst_79597];var inst_79672 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79671,null));var inst_79673 = triangulator.handlers.circumcircle_state_transitioner.call(null,inst_79672,inst_79590,return_message_chan,draw_chan);var tmp79800 = inst_79589;var inst_79589__$1 = tmp79800;var inst_79590__$1 = inst_79673;var state_79790__$1 = (function (){var statearr_79803 = state_79790;(statearr_79803[7] = inst_79589__$1);
(statearr_79803[8] = inst_79590__$1);
return statearr_79803;
})();var statearr_79804_79936 = state_79790__$1;(statearr_79804_79936[2] = null);
(statearr_79804_79936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 66))
{var inst_79758 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79805_79937 = state_79790__$1;(statearr_79805_79937[2] = inst_79758);
(statearr_79805_79937[1] = 63);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 3))
{var inst_79788 = (state_79790[2]);var state_79790__$1 = state_79790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79790__$1,inst_79788);
} else
{if((state_val_79791 === 35))
{var inst_79589 = (state_79790[7]);var inst_79676 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"altitude","altitude",3050454548),inst_79589);var state_79790__$1 = state_79790;if(inst_79676)
{var statearr_79807_79938 = state_79790__$1;(statearr_79807_79938[1] = 37);
} else
{var statearr_79808_79939 = state_79790__$1;(statearr_79808_79939[1] = 38);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 67))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79748 = [inst_79619,inst_79597];var inst_79749 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79748,null));var inst_79750 = triangulator.handlers.translation_state_transitioner.call(null,inst_79749,inst_79590,return_message_chan,draw_chan);var tmp79806 = inst_79589;var inst_79589__$1 = tmp79806;var inst_79590__$1 = inst_79750;var state_79790__$1 = (function (){var statearr_79809 = state_79790;(statearr_79809[7] = inst_79589__$1);
(statearr_79809[8] = inst_79590__$1);
return statearr_79809;
})();var statearr_79810_79940 = state_79790__$1;(statearr_79810_79940[2] = null);
(statearr_79810_79940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 4))
{var inst_79598 = (state_79790[11]);var inst_79596 = (state_79790[2]);var inst_79597 = cljs.core.nth.call(null,inst_79596,0,null);var inst_79598__$1 = cljs.core.nth.call(null,inst_79596,1,null);var inst_79602 = cljs.core._EQ_.call(null,click,inst_79598__$1);var state_79790__$1 = (function (){var statearr_79813 = state_79790;(statearr_79813[11] = inst_79598__$1);
(statearr_79813[10] = inst_79597);
return statearr_79813;
})();if(inst_79602)
{var statearr_79814_79941 = state_79790__$1;(statearr_79814_79941[1] = 5);
} else
{var statearr_79815_79942 = state_79790__$1;(statearr_79815_79942[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 36))
{var inst_79778 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79816_79943 = state_79790__$1;(statearr_79816_79943[2] = inst_79778);
(statearr_79816_79943[1] = 33);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 68))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79753 = cljs.core.println.call(null,"warning: iten not handled: ",inst_79589);var tmp79811 = inst_79589;var tmp79812 = inst_79590;var inst_79589__$1 = tmp79811;var inst_79590__$1 = tmp79812;var state_79790__$1 = (function (){var statearr_79818 = state_79790;(statearr_79818[7] = inst_79589__$1);
(statearr_79818[8] = inst_79590__$1);
(statearr_79818[12] = inst_79753);
return statearr_79818;
})();var statearr_79819_79944 = state_79790__$1;(statearr_79819_79944[2] = null);
(statearr_79819_79944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 5))
{var state_79790__$1 = state_79790;var statearr_79820_79945 = state_79790__$1;(statearr_79820_79945[2] = new cljs.core.Keyword(null,"click","click",1108654330));
(statearr_79820_79945[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 37))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79678 = [inst_79619,inst_79597];var inst_79679 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79678,null));var inst_79680 = triangulator.handlers.altitude_state_transitioner.call(null,inst_79679,inst_79590,return_message_chan,draw_chan);var tmp79817 = inst_79589;var inst_79589__$1 = tmp79817;var inst_79590__$1 = inst_79680;var state_79790__$1 = (function (){var statearr_79821 = state_79790;(statearr_79821[7] = inst_79589__$1);
(statearr_79821[8] = inst_79590__$1);
return statearr_79821;
})();var statearr_79822_79946 = state_79790__$1;(statearr_79822_79946[2] = null);
(statearr_79822_79946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 69))
{var inst_79756 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79823_79947 = state_79790__$1;(statearr_79823_79947[2] = inst_79756);
(statearr_79823_79947[1] = 66);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 6))
{var inst_79598 = (state_79790[11]);var inst_79605 = cljs.core._EQ_.call(null,move,inst_79598);var state_79790__$1 = state_79790;if(inst_79605)
{var statearr_79824_79948 = state_79790__$1;(statearr_79824_79948[1] = 8);
} else
{var statearr_79825_79949 = state_79790__$1;(statearr_79825_79949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 38))
{var inst_79589 = (state_79790[7]);var inst_79683 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"euler-line","euler-line",3619219274),inst_79589);var state_79790__$1 = state_79790;if(inst_79683)
{var statearr_79826_79950 = state_79790__$1;(statearr_79826_79950[1] = 40);
} else
{var statearr_79827_79951 = state_79790__$1;(statearr_79827_79951[1] = 41);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 7))
{var inst_79598 = (state_79790[11]);var inst_79619 = (state_79790[2]);var inst_79620 = cljs.core._EQ_.call(null,inst_79598,ctr_chan);var state_79790__$1 = (function (){var statearr_79828 = state_79790;(statearr_79828[9] = inst_79619);
return statearr_79828;
})();if(inst_79620)
{var statearr_79829_79952 = state_79790__$1;(statearr_79829_79952[1] = 14);
} else
{var statearr_79830_79953 = state_79790__$1;(statearr_79830_79953[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 39))
{var inst_79776 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79832_79954 = state_79790__$1;(statearr_79832_79954[2] = inst_79776);
(statearr_79832_79954[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 8))
{var state_79790__$1 = state_79790;var statearr_79833_79955 = state_79790__$1;(statearr_79833_79955[2] = new cljs.core.Keyword(null,"move","move",1017261891));
(statearr_79833_79955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 40))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79685 = [inst_79619,inst_79597];var inst_79686 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79685,null));var inst_79687 = triangulator.handlers.euler_state_transitioner.call(null,inst_79686,inst_79590,return_message_chan,draw_chan);var tmp79831 = inst_79589;var inst_79589__$1 = tmp79831;var inst_79590__$1 = inst_79687;var state_79790__$1 = (function (){var statearr_79834 = state_79790;(statearr_79834[7] = inst_79589__$1);
(statearr_79834[8] = inst_79590__$1);
return statearr_79834;
})();var statearr_79835_79956 = state_79790__$1;(statearr_79835_79956[2] = null);
(statearr_79835_79956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 9))
{var inst_79598 = (state_79790[11]);var inst_79608 = cljs.core._EQ_.call(null,ctr_chan,inst_79598);var state_79790__$1 = state_79790;if(inst_79608)
{var statearr_79836_79957 = state_79790__$1;(statearr_79836_79957[1] = 11);
} else
{var statearr_79837_79958 = state_79790__$1;(statearr_79837_79958[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 41))
{var inst_79589 = (state_79790[7]);var inst_79690 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nine-pt-circle","nine-pt-circle",4400858320),inst_79589);var state_79790__$1 = state_79790;if(inst_79690)
{var statearr_79838_79959 = state_79790__$1;(statearr_79838_79959[1] = 43);
} else
{var statearr_79839_79960 = state_79790__$1;(statearr_79839_79960[1] = 44);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 10))
{var inst_79617 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79840_79961 = state_79790__$1;(statearr_79840_79961[2] = inst_79617);
(statearr_79840_79961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 42))
{var inst_79774 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79842_79962 = state_79790__$1;(statearr_79842_79962[2] = inst_79774);
(statearr_79842_79962[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 11))
{var state_79790__$1 = state_79790;var statearr_79843_79963 = state_79790__$1;(statearr_79843_79963[2] = new cljs.core.Keyword(null,"ctr-chan","ctr-chan",638014192));
(statearr_79843_79963[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 43))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79692 = [inst_79619,inst_79597];var inst_79693 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79692,null));var inst_79694 = triangulator.handlers.nine_pt_state_transitioner.call(null,inst_79693,inst_79590,return_message_chan,draw_chan);var tmp79841 = inst_79589;var inst_79589__$1 = tmp79841;var inst_79590__$1 = inst_79694;var state_79790__$1 = (function (){var statearr_79844 = state_79790;(statearr_79844[7] = inst_79589__$1);
(statearr_79844[8] = inst_79590__$1);
return statearr_79844;
})();var statearr_79845_79964 = state_79790__$1;(statearr_79845_79964[2] = null);
(statearr_79845_79964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 12))
{var inst_79598 = (state_79790[11]);var inst_79611 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_79598)].join('');var inst_79612 = (new Error(inst_79611));var inst_79613 = (function(){throw inst_79612})();var state_79790__$1 = state_79790;var statearr_79846_79965 = state_79790__$1;(statearr_79846_79965[2] = inst_79613);
(statearr_79846_79965[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 44))
{var inst_79589 = (state_79790[7]);var inst_79697 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"median","median",4230840444),inst_79589);var state_79790__$1 = state_79790;if(inst_79697)
{var statearr_79847_79966 = state_79790__$1;(statearr_79847_79966[1] = 46);
} else
{var statearr_79848_79967 = state_79790__$1;(statearr_79848_79967[1] = 47);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 13))
{var inst_79615 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79849_79968 = state_79790__$1;(statearr_79849_79968[2] = inst_79615);
(statearr_79849_79968[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 45))
{var inst_79772 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79851_79969 = state_79790__$1;(statearr_79851_79969[2] = inst_79772);
(statearr_79851_79969[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 14))
{var inst_79589 = (state_79790[7]);var inst_79597 = (state_79790[10]);var inst_79622 = cljs.core.println.call(null,"ctr-chan item: ",inst_79597);var inst_79623 = cljs.core._EQ_.call(null,inst_79589,inst_79597);var state_79790__$1 = (function (){var statearr_79852 = state_79790;(statearr_79852[13] = inst_79622);
return statearr_79852;
})();if(inst_79623)
{var statearr_79853_79970 = state_79790__$1;(statearr_79853_79970[1] = 17);
} else
{var statearr_79854_79971 = state_79790__$1;(statearr_79854_79971[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 46))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79699 = [inst_79619,inst_79597];var inst_79700 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79699,null));var inst_79701 = triangulator.handlers.median_state_transitioner.call(null,inst_79700,inst_79590,return_message_chan,draw_chan);var tmp79850 = inst_79589;var inst_79589__$1 = tmp79850;var inst_79590__$1 = inst_79701;var state_79790__$1 = (function (){var statearr_79855 = state_79790;(statearr_79855[7] = inst_79589__$1);
(statearr_79855[8] = inst_79590__$1);
return statearr_79855;
})();var statearr_79856_79972 = state_79790__$1;(statearr_79856_79972[2] = null);
(statearr_79856_79972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 15))
{var state_79790__$1 = state_79790;var statearr_79857_79973 = state_79790__$1;(statearr_79857_79973[2] = null);
(statearr_79857_79973[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 47))
{var inst_79589 = (state_79790[7]);var inst_79704 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"incircle","incircle",1101303207),inst_79589);var state_79790__$1 = state_79790;if(inst_79704)
{var statearr_79858_79974 = state_79790__$1;(statearr_79858_79974[1] = 49);
} else
{var statearr_79859_79975 = state_79790__$1;(statearr_79859_79975[1] = 50);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 16))
{var inst_79589 = (state_79790[7]);var inst_79640 = (state_79790[2]);var inst_79644 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1017291434),inst_79589);var state_79790__$1 = (function (){var statearr_79860 = state_79790;(statearr_79860[14] = inst_79640);
return statearr_79860;
})();if(inst_79644)
{var statearr_79861_79976 = state_79790__$1;(statearr_79861_79976[1] = 22);
} else
{var statearr_79862_79977 = state_79790__$1;(statearr_79862_79977[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 48))
{var inst_79770 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79864_79978 = state_79790__$1;(statearr_79864_79978[2] = inst_79770);
(statearr_79864_79978[1] = 45);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 17))
{var state_79790__$1 = state_79790;var statearr_79865_79979 = state_79790__$1;(statearr_79865_79979[2] = null);
(statearr_79865_79979[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 49))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79706 = [inst_79619,inst_79597];var inst_79707 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79706,null));var inst_79708 = triangulator.handlers.incircle_state_transitioner.call(null,inst_79707,inst_79590,return_message_chan,draw_chan);var tmp79863 = inst_79589;var inst_79589__$1 = tmp79863;var inst_79590__$1 = inst_79708;var state_79790__$1 = (function (){var statearr_79866 = state_79790;(statearr_79866[7] = inst_79589__$1);
(statearr_79866[8] = inst_79590__$1);
return statearr_79866;
})();var statearr_79867_79980 = state_79790__$1;(statearr_79867_79980[2] = null);
(statearr_79867_79980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 18))
{var state_79790__$1 = state_79790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79790__$1,20,draw_chan,triangulator.handlers.clear);
} else
{if((state_val_79791 === 50))
{var inst_79589 = (state_79790[7]);var inst_79711 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),inst_79589);var state_79790__$1 = state_79790;if(inst_79711)
{var statearr_79868_79981 = state_79790__$1;(statearr_79868_79981[1] = 52);
} else
{var statearr_79869_79982 = state_79790__$1;(statearr_79869_79982[1] = 53);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 19))
{var inst_79597 = (state_79790[10]);var inst_79633 = (state_79790[2]);var inst_79634 = [new cljs.core.Keyword(null,"step","step",1017444926)];var inst_79635 = [0];var inst_79636 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_79634,inst_79635);var inst_79589 = inst_79597;var inst_79590 = inst_79636;var state_79790__$1 = (function (){var statearr_79870 = state_79790;(statearr_79870[7] = inst_79589);
(statearr_79870[8] = inst_79590);
(statearr_79870[15] = inst_79633);
return statearr_79870;
})();var statearr_79871_79983 = state_79790__$1;(statearr_79871_79983[2] = null);
(statearr_79871_79983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 51))
{var inst_79768 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79873_79984 = state_79790__$1;(statearr_79873_79984[2] = inst_79768);
(statearr_79873_79984[1] = 48);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 20))
{var inst_79597 = (state_79790[10]);var inst_79627 = (state_79790[2]);var inst_79628 = [new cljs.core.Keyword(null,"draw","draw",1016996022),inst_79597,draw_chan];var inst_79629 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79628,null));var state_79790__$1 = (function (){var statearr_79874 = state_79790;(statearr_79874[16] = inst_79627);
return statearr_79874;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79790__$1,21,return_message_chan,inst_79629);
} else
{if((state_val_79791 === 52))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79713 = [inst_79619,inst_79597];var inst_79714 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79713,null));var inst_79715 = triangulator.handlers.circle_state_transitioner.call(null,inst_79714,inst_79590,return_message_chan,draw_chan);var tmp79872 = inst_79589;var inst_79589__$1 = tmp79872;var inst_79590__$1 = inst_79715;var state_79790__$1 = (function (){var statearr_79875 = state_79790;(statearr_79875[7] = inst_79589__$1);
(statearr_79875[8] = inst_79590__$1);
return statearr_79875;
})();var statearr_79876_79985 = state_79790__$1;(statearr_79876_79985[2] = null);
(statearr_79876_79985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 21))
{var inst_79631 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79879_79986 = state_79790__$1;(statearr_79879_79986[2] = inst_79631);
(statearr_79879_79986[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 53))
{var inst_79589 = (state_79790[7]);var inst_79718 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reflection","reflection",3942571933),inst_79589);var state_79790__$1 = state_79790;if(inst_79718)
{var statearr_79880_79987 = state_79790__$1;(statearr_79880_79987[1] = 55);
} else
{var statearr_79881_79988 = state_79790__$1;(statearr_79881_79988[1] = 56);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 22))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var tmp79877 = inst_79589;var tmp79878 = inst_79590;var inst_79589__$1 = tmp79877;var inst_79590__$1 = tmp79878;var state_79790__$1 = (function (){var statearr_79882 = state_79790;(statearr_79882[7] = inst_79589__$1);
(statearr_79882[8] = inst_79590__$1);
return statearr_79882;
})();var statearr_79883_79989 = state_79790__$1;(statearr_79883_79989[2] = null);
(statearr_79883_79989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 54))
{var inst_79766 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79885_79990 = state_79790__$1;(statearr_79885_79990[2] = inst_79766);
(statearr_79885_79990[1] = 51);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 23))
{var inst_79589 = (state_79790[7]);var inst_79648 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"point","point",1120749826),inst_79589);var state_79790__$1 = state_79790;if(inst_79648)
{var statearr_79886_79991 = state_79790__$1;(statearr_79886_79991[1] = 25);
} else
{var statearr_79887_79992 = state_79790__$1;(statearr_79887_79992[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 55))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79720 = [inst_79619,inst_79597];var inst_79721 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79720,null));var inst_79722 = triangulator.handlers.reflection_state_transitioner.call(null,inst_79721,inst_79590,return_message_chan,draw_chan);var tmp79884 = inst_79589;var inst_79589__$1 = tmp79884;var inst_79590__$1 = inst_79722;var state_79790__$1 = (function (){var statearr_79888 = state_79790;(statearr_79888[7] = inst_79589__$1);
(statearr_79888[8] = inst_79590__$1);
return statearr_79888;
})();var statearr_79889_79993 = state_79790__$1;(statearr_79889_79993[2] = null);
(statearr_79889_79993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 24))
{var inst_79786 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79891_79994 = state_79790__$1;(statearr_79891_79994[2] = inst_79786);
(statearr_79891_79994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 56))
{var inst_79589 = (state_79790[7]);var inst_79725 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inversion","inversion",3291930501),inst_79589);var state_79790__$1 = state_79790;if(inst_79725)
{var statearr_79892_79995 = state_79790__$1;(statearr_79892_79995[1] = 58);
} else
{var statearr_79893_79996 = state_79790__$1;(statearr_79893_79996[1] = 59);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 25))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79650 = [inst_79619,inst_79597];var inst_79651 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79650,null));var inst_79652 = triangulator.handlers.point_state_transitioner.call(null,inst_79651,inst_79590,return_message_chan,draw_chan);var tmp79890 = inst_79589;var inst_79589__$1 = tmp79890;var inst_79590__$1 = inst_79652;var state_79790__$1 = (function (){var statearr_79894 = state_79790;(statearr_79894[7] = inst_79589__$1);
(statearr_79894[8] = inst_79590__$1);
return statearr_79894;
})();var statearr_79895_79997 = state_79790__$1;(statearr_79895_79997[2] = null);
(statearr_79895_79997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 57))
{var inst_79764 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79897_79998 = state_79790__$1;(statearr_79897_79998[2] = inst_79764);
(statearr_79897_79998[1] = 54);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 26))
{var inst_79589 = (state_79790[7]);var inst_79655 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086),inst_79589);var state_79790__$1 = state_79790;if(inst_79655)
{var statearr_79898_79999 = state_79790__$1;(statearr_79898_79999[1] = 28);
} else
{var statearr_79899_80000 = state_79790__$1;(statearr_79899_80000[1] = 29);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 58))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79727 = [inst_79619,inst_79597];var inst_79728 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79727,null));var inst_79729 = triangulator.handlers.inversion_state_transitioner.call(null,inst_79728,inst_79590,return_message_chan,draw_chan);var tmp79896 = inst_79589;var inst_79589__$1 = tmp79896;var inst_79590__$1 = inst_79729;var state_79790__$1 = (function (){var statearr_79900 = state_79790;(statearr_79900[7] = inst_79589__$1);
(statearr_79900[8] = inst_79590__$1);
return statearr_79900;
})();var statearr_79901_80001 = state_79790__$1;(statearr_79901_80001[2] = null);
(statearr_79901_80001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 27))
{var inst_79784 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79903_80002 = state_79790__$1;(statearr_79903_80002[2] = inst_79784);
(statearr_79903_80002[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 59))
{var inst_79589 = (state_79790[7]);var inst_79732 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"homothety","homothety",3437436639),inst_79589);var state_79790__$1 = state_79790;if(inst_79732)
{var statearr_79904_80003 = state_79790__$1;(statearr_79904_80003[1] = 61);
} else
{var statearr_79905_80004 = state_79790__$1;(statearr_79905_80004[1] = 62);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 28))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79657 = [inst_79619,inst_79597];var inst_79658 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79657,null));var inst_79659 = triangulator.handlers.line_state_transitioner.call(null,inst_79658,inst_79590,return_message_chan,draw_chan);var tmp79902 = inst_79589;var inst_79589__$1 = tmp79902;var inst_79590__$1 = inst_79659;var state_79790__$1 = (function (){var statearr_79906 = state_79790;(statearr_79906[7] = inst_79589__$1);
(statearr_79906[8] = inst_79590__$1);
return statearr_79906;
})();var statearr_79907_80005 = state_79790__$1;(statearr_79907_80005[2] = null);
(statearr_79907_80005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 60))
{var inst_79762 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79909_80006 = state_79790__$1;(statearr_79909_80006[2] = inst_79762);
(statearr_79909_80006[1] = 57);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 29))
{var inst_79589 = (state_79790[7]);var inst_79662 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"triangle","triangle",2511666554),inst_79589);var state_79790__$1 = state_79790;if(inst_79662)
{var statearr_79910_80007 = state_79790__$1;(statearr_79910_80007[1] = 31);
} else
{var statearr_79911_80008 = state_79790__$1;(statearr_79911_80008[1] = 32);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 61))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79734 = [inst_79619,inst_79597];var inst_79735 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79734,null));var inst_79736 = triangulator.handlers.homothety_state_transitioner.call(null,inst_79735,inst_79590,return_message_chan,draw_chan);var tmp79908 = inst_79589;var inst_79589__$1 = tmp79908;var inst_79590__$1 = inst_79736;var state_79790__$1 = (function (){var statearr_79912 = state_79790;(statearr_79912[7] = inst_79589__$1);
(statearr_79912[8] = inst_79590__$1);
return statearr_79912;
})();var statearr_79913_80009 = state_79790__$1;(statearr_79913_80009[2] = null);
(statearr_79913_80009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 30))
{var inst_79782 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79915_80010 = state_79790__$1;(statearr_79915_80010[2] = inst_79782);
(statearr_79915_80010[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 62))
{var inst_79589 = (state_79790[7]);var inst_79739 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rotation","rotation",973603568),inst_79589);var state_79790__$1 = state_79790;if(inst_79739)
{var statearr_79916_80011 = state_79790__$1;(statearr_79916_80011[1] = 64);
} else
{var statearr_79917_80012 = state_79790__$1;(statearr_79917_80012[1] = 65);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 31))
{var inst_79589 = (state_79790[7]);var inst_79590 = (state_79790[8]);var inst_79619 = (state_79790[9]);var inst_79597 = (state_79790[10]);var inst_79664 = [inst_79619,inst_79597];var inst_79665 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_79664,null));var inst_79666 = triangulator.handlers.tri_state_transitioner.call(null,inst_79665,inst_79590,return_message_chan,draw_chan);var tmp79914 = inst_79589;var inst_79589__$1 = tmp79914;var inst_79590__$1 = inst_79666;var state_79790__$1 = (function (){var statearr_79918 = state_79790;(statearr_79918[7] = inst_79589__$1);
(statearr_79918[8] = inst_79590__$1);
return statearr_79918;
})();var statearr_79919_80013 = state_79790__$1;(statearr_79919_80013[2] = null);
(statearr_79919_80013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79791 === 63))
{var inst_79760 = (state_79790[2]);var state_79790__$1 = state_79790;var statearr_79920_80014 = state_79790__$1;(statearr_79920_80014[2] = inst_79760);
(statearr_79920_80014[1] = 60);
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
}
}
}
}
}
}
}
}
}
});})(c__15447__auto___79928,return_message_chan))
;return ((function (switch__15432__auto__,c__15447__auto___79928,return_message_chan){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_79924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_79924[0] = state_machine__15433__auto__);
(statearr_79924[1] = 1);
return statearr_79924;
});
var state_machine__15433__auto____1 = (function (state_79790){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_79790);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e79925){if((e79925 instanceof Object))
{var ex__15436__auto__ = e79925;var statearr_79926_80015 = state_79790;(statearr_79926_80015[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79790);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e79925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80016 = state_79790;
state_79790 = G__80016;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_79790){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_79790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___79928,return_message_chan))
})();var state__15449__auto__ = (function (){var statearr_79927 = f__15448__auto__.call(null);(statearr_79927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___79928);
return statearr_79927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___79928,return_message_chan))
);
return return_message_chan;
});

//# sourceMappingURL=handlers.js.map