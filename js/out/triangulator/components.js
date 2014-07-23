// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('triangulator.draw');
goog.require('triangulator.handlers');
goog.require('cljs.core.async');
goog.require('triangulator.geometry');
goog.require('om.dom');
goog.require('om.core');
goog.require('triangulator.datatypes');
goog.require('om.core');
goog.require('triangulator.draw');
goog.require('triangulator.definitions');
goog.require('triangulator.geometry');
goog.require('triangulator.definitions');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('triangulator.handlers');
goog.require('triangulator.datatypes');
cljs.core.enable_console_print_BANG_.call(null);
triangulator.components.definition_entry = (function definition_entry(current_item,owner){if(typeof triangulator.components.t75802 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t75802 = (function (owner,current_item,definition_entry,meta75803){
this.owner = owner;
this.current_item = current_item;
this.definition_entry = definition_entry;
this.meta75803 = meta75803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t75802.cljs$lang$type = true;
triangulator.components.t75802.cljs$lang$ctorStr = "triangulator.components/t75802";
triangulator.components.t75802.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t75802");
});
triangulator.components.t75802.prototype.om$core$IRender$ = true;
triangulator.components.t75802.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "active"},React.DOM.a({"href": [cljs.core.str("#/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(self__.current_item)))].join('')},new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(self__.current_item)));
});
triangulator.components.t75802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75804){var self__ = this;
var _75804__$1 = this;return self__.meta75803;
});
triangulator.components.t75802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75804,meta75803__$1){var self__ = this;
var _75804__$1 = this;return (new triangulator.components.t75802(self__.owner,self__.current_item,self__.definition_entry,meta75803__$1));
});
triangulator.components.__GT_t75802 = (function __GT_t75802(owner__$1,current_item__$1,definition_entry__$1,meta75803){return (new triangulator.components.t75802(owner__$1,current_item__$1,definition_entry__$1,meta75803));
});
}
return (new triangulator.components.t75802(owner,current_item,definition_entry,null));
});
triangulator.components.section = (function section(section__$1,owner){if(typeof triangulator.components.t75808 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t75808 = (function (owner,section,meta75809){
this.owner = owner;
this.section = section;
this.meta75809 = meta75809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t75808.cljs$lang$type = true;
triangulator.components.t75808.cljs$lang$ctorStr = "triangulator.components/t75808";
triangulator.components.t75808.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t75808");
});
triangulator.components.t75808.prototype.om$core$IRender$ = true;
triangulator.components.t75808.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "section"},React.DOM.h2(null,new cljs.core.Keyword(null,"section-name","section-name",1618057189).cljs$core$IFn$_invoke$arity$1(self__.section)),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(self__.section);if(cljs.core.truth_(temp__4092__auto__))
{var header = temp__4092__auto__;return React.DOM.p(null,header);
} else
{return null;
}
})(),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,triangulator.components.definition_entry,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.section))));
});
triangulator.components.t75808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75810){var self__ = this;
var _75810__$1 = this;return self__.meta75809;
});
triangulator.components.t75808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75810,meta75809__$1){var self__ = this;
var _75810__$1 = this;return (new triangulator.components.t75808(self__.owner,self__.section,meta75809__$1));
});
triangulator.components.__GT_t75808 = (function __GT_t75808(owner__$1,section__$2,meta75809){return (new triangulator.components.t75808(owner__$1,section__$2,meta75809));
});
}
return (new triangulator.components.t75808(owner,section__$1,null));
});
triangulator.components.nav_box = (function nav_box(ui,owner){if(typeof triangulator.components.t75814 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t75814 = (function (owner,ui,nav_box,meta75815){
this.owner = owner;
this.ui = ui;
this.nav_box = nav_box;
this.meta75815 = meta75815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t75814.cljs$lang$type = true;
triangulator.components.t75814.cljs$lang$ctorStr = "triangulator.components/t75814";
triangulator.components.t75814.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t75814");
});
triangulator.components.t75814.prototype.om$core$IRender$ = true;
triangulator.components.t75814.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,triangulator.components.section,self__.ui));
});
triangulator.components.t75814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75816){var self__ = this;
var _75816__$1 = this;return self__.meta75815;
});
triangulator.components.t75814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75816,meta75815__$1){var self__ = this;
var _75816__$1 = this;return (new triangulator.components.t75814(self__.owner,self__.ui,self__.nav_box,meta75815__$1));
});
triangulator.components.__GT_t75814 = (function __GT_t75814(owner__$1,ui__$1,nav_box__$1,meta75815){return (new triangulator.components.t75814(owner__$1,ui__$1,nav_box__$1,meta75815));
});
}
return (new triangulator.components.t75814(owner,ui,nav_box,null));
});
triangulator.components.item_detail = (function item_detail(p,owner){if(typeof triangulator.components.t75824 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t75824 = (function (owner,p,item_detail,meta75825){
this.owner = owner;
this.p = p;
this.item_detail = item_detail;
this.meta75825 = meta75825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t75824.cljs$lang$type = true;
triangulator.components.t75824.cljs$lang$ctorStr = "triangulator.components/t75824";
triangulator.components.t75824.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t75824");
});
triangulator.components.t75824.prototype.om$core$IRender$ = true;
triangulator.components.t75824.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li(null,(function (){var pred__75827 = cljs.core.instance_QMARK_;var expr__75828 = self__.p;if(cljs.core.truth_(pred__75827.call(null,triangulator.datatypes.Point,expr__75828)))
{return [cljs.core.str(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(self__.p))].join('');
} else
{if(cljs.core.truth_(pred__75827.call(null,triangulator.datatypes.Line,expr__75828)))
{return [cljs.core.str(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(self__.p))].join('');
} else
{if(cljs.core.truth_(pred__75827.call(null,triangulator.datatypes.Triangle,expr__75828)))
{var p1 = new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(self__.p);var p2 = new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(self__.p);var p3 = new cljs.core.Keyword(null,"p3","p3",1013907765).cljs$core$IFn$_invoke$arity$1(self__.p);return [cljs.core.str("["),cljs.core.str(p1),cljs.core.str(" "),cljs.core.str(p2),cljs.core.str(" "),cljs.core.str(p3),cljs.core.str("]")].join('');
} else
{if(cljs.core.truth_(pred__75827.call(null,triangulator.datatypes.Disk,expr__75828)))
{var map__75830 = self__.p;var map__75830__$1 = ((cljs.core.seq_QMARK_.call(null,map__75830))?cljs.core.apply.call(null,cljs.core.hash_map,map__75830):map__75830);var radius = cljs.core.get.call(null,map__75830__$1,new cljs.core.Keyword(null,"radius","radius",4370292740));var center = cljs.core.get.call(null,map__75830__$1,new cljs.core.Keyword(null,"center","center",3944857543));return [cljs.core.str("center: "),cljs.core.str(center),cljs.core.str(" radius:"),cljs.core.str(radius)].join('');
} else
{return [cljs.core.str("new value: "),cljs.core.str(self__.p)].join('');
}
}
}
}
})());
});
triangulator.components.t75824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75826){var self__ = this;
var _75826__$1 = this;return self__.meta75825;
});
triangulator.components.t75824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75826,meta75825__$1){var self__ = this;
var _75826__$1 = this;return (new triangulator.components.t75824(self__.owner,self__.p,self__.item_detail,meta75825__$1));
});
triangulator.components.__GT_t75824 = (function __GT_t75824(owner__$1,p__$1,item_detail__$1,meta75825){return (new triangulator.components.t75824(owner__$1,p__$1,item_detail__$1,meta75825));
});
}
return (new triangulator.components.t75824(owner,p,item_detail,null));
});
triangulator.components.item_controller = (function item_controller(app,owner){if(typeof triangulator.components.t76283 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t76283 = (function (owner,app,item_controller,meta76284){
this.owner = owner;
this.app = app;
this.item_controller = item_controller;
this.meta76284 = meta76284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t76283.cljs$lang$type = true;
triangulator.components.t76283.cljs$lang$ctorStr = "triangulator.components/t76283";
triangulator.components.t76283.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t76283");
});
triangulator.components.t76283.prototype.om$core$IRenderState$ = true;
triangulator.components.t76283.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var item = new cljs.core.Keyword(null,"current-item","current-item",2436322905).cljs$core$IFn$_invoke$arity$1(self__.app);var map__76286 = state;var map__76286__$1 = ((cljs.core.seq_QMARK_.call(null,map__76286))?cljs.core.apply.call(null,cljs.core.hash_map,map__76286):map__76286);var control = cljs.core.get.call(null,map__76286__$1,new cljs.core.Keyword(null,"control","control",1965447375));var ___$2 = (function (){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__,item,map__76286,map__76286__$1,control,___$1){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__,item,map__76286,map__76286__$1,control,___$1){
return (function (state_76290){var state_val_76291 = (state_76290[1]);if((state_val_76291 === 2))
{var inst_76288 = (state_76290[2]);var state_76290__$1 = state_76290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76290__$1,inst_76288);
} else
{if((state_val_76291 === 1))
{var state_76290__$1 = state_76290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76290__$1,2,control,item);
} else
{return null;
}
}
});})(c__15447__auto__,item,map__76286,map__76286__$1,control,___$1))
;return ((function (switch__15432__auto__,c__15447__auto__,item,map__76286,map__76286__$1,control,___$1){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_76295 = [null,null,null,null,null,null,null];(statearr_76295[0] = state_machine__15433__auto__);
(statearr_76295[1] = 1);
return statearr_76295;
});
var state_machine__15433__auto____1 = (function (state_76290){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_76290);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e76296){if((e76296 instanceof Object))
{var ex__15436__auto__ = e76296;var statearr_76297_76731 = state_76290;(statearr_76297_76731[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76732 = state_76290;
state_76290 = G__76732;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_76290){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_76290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__,item,map__76286,map__76286__$1,control,___$1))
})();var state__15449__auto__ = (function (){var statearr_76298 = f__15448__auto__.call(null);(statearr_76298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_76298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__,item,map__76286,map__76286__$1,control,___$1))
);
return c__15447__auto__;
})();return React.DOM.div({"className": "definition"},React.DOM.h3(null,cljs.core.first.call(null,item.call(null,triangulator.definitions.definition_text))),React.DOM.p(null,cljs.core.second.call(null,item.call(null,triangulator.definitions.definition_text))),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,triangulator.components.item_detail,item.call(null,state))));
});
triangulator.components.t76283.prototype.om$core$IWillUnmount$ = true;
triangulator.components.t76283.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.println.call(null,"unmounting ...");
});
triangulator.components.t76283.prototype.om$core$IWillMount$ = true;
triangulator.components.t76283.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var ___$2 = cljs.core.println.call(null,"mounting item-controller");var map__76299 = om.core.get_shared.call(null,self__.owner);var map__76299__$1 = ((cljs.core.seq_QMARK_.call(null,map__76299))?cljs.core.apply.call(null,cljs.core.hash_map,map__76299):map__76299);var draw_chan = cljs.core.get.call(null,map__76299__$1,new cljs.core.Keyword(null,"draw-chan","draw-chan",1113990573));var mouse_move_chan = cljs.core.get.call(null,map__76299__$1,new cljs.core.Keyword(null,"mouse-move-chan","mouse-move-chan",3502210072));var click_chan = cljs.core.get.call(null,map__76299__$1,new cljs.core.Keyword(null,"click-chan","click-chan",4485289961));var control_chan = cljs.core.async.chan.call(null);var handler_chan = triangulator.handlers.mouse_handler.call(null,click_chan,mouse_move_chan,control_chan,draw_chan);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handler","handler",1706707644),handler_chan);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"control","control",1965447375),control_chan);
var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (state_76593){var state_val_76594 = (state_76593[1]);if((state_val_76594 === 32))
{var inst_76365 = (state_76593[7]);var inst_76378 = (state_76593[2]);var inst_76379 = cljs.core.next.call(null,inst_76365);var inst_76349 = inst_76379;var inst_76350 = null;var inst_76351 = 0;var inst_76352 = 0;var state_76593__$1 = (function (){var statearr_76595 = state_76593;(statearr_76595[8] = inst_76352);
(statearr_76595[9] = inst_76350);
(statearr_76595[10] = inst_76351);
(statearr_76595[11] = inst_76378);
(statearr_76595[12] = inst_76349);
return statearr_76595;
})();var statearr_76596_76733 = state_76593__$1;(statearr_76596_76733[2] = null);
(statearr_76596_76733[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 64))
{var inst_76535 = (state_76593[13]);var inst_76536 = (state_76593[14]);var inst_76538 = (inst_76536 < inst_76535);var inst_76539 = inst_76538;var state_76593__$1 = state_76593;if(cljs.core.truth_(inst_76539))
{var statearr_76597_76734 = state_76593__$1;(statearr_76597_76734[1] = 66);
} else
{var statearr_76598_76735 = state_76593__$1;(statearr_76598_76735[1] = 67);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 1))
{var state_76593__$1 = state_76593;var statearr_76599_76736 = state_76593__$1;(statearr_76599_76736[2] = null);
(statearr_76599_76736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 33))
{var inst_76391 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"line","line",1017226086));var inst_76392 = [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_76393 = [new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"red","red",1014017027)];var inst_76394 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76392,inst_76393);var inst_76395 = triangulator.datatypes.style.call(null,inst_76394);var inst_76396 = [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_76397 = [new cljs.core.Keyword(null,"blue","blue",1016931276),new cljs.core.Keyword(null,"red","red",1014017027)];var inst_76398 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76396,inst_76397);var inst_76399 = triangulator.datatypes.style.call(null,inst_76398);var inst_76404 = cljs.core.seq.call(null,inst_76391);var inst_76405 = inst_76404;var inst_76406 = null;var inst_76407 = 0;var inst_76408 = 0;var state_76593__$1 = (function (){var statearr_76600 = state_76593;(statearr_76600[15] = inst_76399);
(statearr_76600[16] = inst_76405);
(statearr_76600[17] = inst_76395);
(statearr_76600[18] = inst_76407);
(statearr_76600[19] = inst_76406);
(statearr_76600[20] = inst_76408);
return statearr_76600;
})();var statearr_76601_76737 = state_76593__$1;(statearr_76601_76737[2] = null);
(statearr_76601_76737[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 65))
{var inst_76573 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76602_76738 = state_76593__$1;(statearr_76602_76738[2] = inst_76573);
(statearr_76602_76738[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 2))
{var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76593__$1,4,handler_chan);
} else
{if((state_val_76594 === 34))
{var inst_76407 = (state_76593[18]);var inst_76408 = (state_76593[20]);var inst_76410 = (inst_76408 < inst_76407);var inst_76411 = inst_76410;var state_76593__$1 = state_76593;if(cljs.core.truth_(inst_76411))
{var statearr_76603_76739 = state_76593__$1;(statearr_76603_76739[1] = 36);
} else
{var statearr_76604_76740 = state_76593__$1;(statearr_76604_76740[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 66))
{var inst_76334 = (state_76593[21]);var inst_76534 = (state_76593[22]);var inst_76536 = (state_76593[14]);var inst_76541 = cljs.core._nth.call(null,inst_76534,inst_76536);var inst_76542 = [inst_76541];var inst_76543 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76542,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,69,inst_76334,inst_76543);
} else
{if((state_val_76594 === 3))
{var inst_76591 = (state_76593[2]);var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76593__$1,inst_76591);
} else
{if((state_val_76594 === 35))
{var inst_76461 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76605_76741 = state_76593__$1;(statearr_76605_76741[2] = inst_76461);
(statearr_76605_76741[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 67))
{var inst_76533 = (state_76593[23]);var inst_76549 = (state_76593[24]);var inst_76549__$1 = cljs.core.seq.call(null,inst_76533);var state_76593__$1 = (function (){var statearr_76606 = state_76593;(statearr_76606[24] = inst_76549__$1);
return statearr_76606;
})();if(inst_76549__$1)
{var statearr_76607_76742 = state_76593__$1;(statearr_76607_76742[1] = 70);
} else
{var statearr_76608_76743 = state_76593__$1;(statearr_76608_76743[1] = 71);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 4))
{var inst_76302 = (state_76593[25]);var inst_76302__$1 = (state_76593[2]);var inst_76303 = cljs.core.println.call(null,"handler-chan ",inst_76302__$1);var inst_76307 = (inst_76302__$1 instanceof triangulator.datatypes.Point);var state_76593__$1 = (function (){var statearr_76609 = state_76593;(statearr_76609[25] = inst_76302__$1);
(statearr_76609[26] = inst_76303);
return statearr_76609;
})();if(inst_76307)
{var statearr_76610_76744 = state_76593__$1;(statearr_76610_76744[1] = 5);
} else
{var statearr_76611_76745 = state_76593__$1;(statearr_76611_76745[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 36))
{var inst_76399 = (state_76593[15]);var inst_76395 = (state_76593[17]);var inst_76406 = (state_76593[19]);var inst_76334 = (state_76593[21]);var inst_76408 = (state_76593[20]);var inst_76413 = cljs.core._nth.call(null,inst_76406,inst_76408);var inst_76415 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(inst_76413);var inst_76416 = cljs.core.nth.call(null,inst_76415,0,null);var inst_76417 = cljs.core.nth.call(null,inst_76415,1,null);var inst_76418 = triangulator.geometry.midpoint.call(null,inst_76416,inst_76417);var inst_76419 = triangulator.datatypes.point.call(null,inst_76416);var inst_76420 = triangulator.datatypes.point.call(null,inst_76417);var inst_76421 = triangulator.datatypes.point.call(null,inst_76418);var inst_76422 = [inst_76395,inst_76413,inst_76419,inst_76420,inst_76399,inst_76421];var inst_76423 = (new cljs.core.PersistentVector(null,6,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76422,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,39,inst_76334,inst_76423);
} else
{if((state_val_76594 === 68))
{var inst_76571 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76612_76746 = state_76593__$1;(statearr_76612_76746[2] = inst_76571);
(statearr_76612_76746[1] = 65);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 5))
{var inst_76302 = (state_76593[25]);var inst_76309 = (function (){var expr__76305 = inst_76302;var pred__76304 = cljs.core.instance_QMARK_;var h = inst_76302;return ((function (expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (p1__75831_SHARP_){return cljs.core.conj.call(null,p1__75831_SHARP_,h);
});
;})(expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
})();var inst_76310 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"point","point",1120749826),inst_76309);var state_76593__$1 = (function (){var statearr_76616 = state_76593;(statearr_76616[27] = inst_76310);
return statearr_76616;
})();var statearr_76617_76747 = state_76593__$1;(statearr_76617_76747[2] = null);
(statearr_76617_76747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 37))
{var inst_76405 = (state_76593[16]);var inst_76429 = (state_76593[28]);var inst_76429__$1 = cljs.core.seq.call(null,inst_76405);var state_76593__$1 = (function (){var statearr_76618 = state_76593;(statearr_76618[28] = inst_76429__$1);
return statearr_76618;
})();if(inst_76429__$1)
{var statearr_76619_76748 = state_76593__$1;(statearr_76619_76748[1] = 40);
} else
{var statearr_76620_76749 = state_76593__$1;(statearr_76620_76749[1] = 41);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 69))
{var inst_76533 = (state_76593[23]);var inst_76534 = (state_76593[22]);var inst_76535 = (state_76593[13]);var inst_76536 = (state_76593[14]);var inst_76545 = (state_76593[2]);var inst_76546 = (inst_76536 + 1);var tmp76613 = inst_76533;var tmp76614 = inst_76534;var tmp76615 = inst_76535;var inst_76533__$1 = tmp76613;var inst_76534__$1 = tmp76614;var inst_76535__$1 = tmp76615;var inst_76536__$1 = inst_76546;var state_76593__$1 = (function (){var statearr_76621 = state_76593;(statearr_76621[29] = inst_76545);
(statearr_76621[23] = inst_76533__$1);
(statearr_76621[22] = inst_76534__$1);
(statearr_76621[13] = inst_76535__$1);
(statearr_76621[14] = inst_76536__$1);
return statearr_76621;
})();var statearr_76622_76750 = state_76593__$1;(statearr_76622_76750[2] = null);
(statearr_76622_76750[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 6))
{var inst_76302 = (state_76593[25]);var inst_76313 = (inst_76302 instanceof triangulator.datatypes.Line);var state_76593__$1 = state_76593;if(inst_76313)
{var statearr_76623_76751 = state_76593__$1;(statearr_76623_76751[1] = 8);
} else
{var statearr_76624_76752 = state_76593__$1;(statearr_76624_76752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 38))
{var inst_76459 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76625_76753 = state_76593__$1;(statearr_76625_76753[2] = inst_76459);
(statearr_76625_76753[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 70))
{var inst_76549 = (state_76593[24]);var inst_76551 = cljs.core.chunked_seq_QMARK_.call(null,inst_76549);var state_76593__$1 = state_76593;if(inst_76551)
{var statearr_76629_76754 = state_76593__$1;(statearr_76629_76754[1] = 73);
} else
{var statearr_76630_76755 = state_76593__$1;(statearr_76630_76755[1] = 74);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 7))
{var inst_76588 = (state_76593[2]);var state_76593__$1 = (function (){var statearr_76631 = state_76593;(statearr_76631[30] = inst_76588);
return statearr_76631;
})();var statearr_76632_76756 = state_76593__$1;(statearr_76632_76756[2] = null);
(statearr_76632_76756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 39))
{var inst_76405 = (state_76593[16]);var inst_76407 = (state_76593[18]);var inst_76406 = (state_76593[19]);var inst_76408 = (state_76593[20]);var inst_76425 = (state_76593[2]);var inst_76426 = (inst_76408 + 1);var tmp76626 = inst_76405;var tmp76627 = inst_76407;var tmp76628 = inst_76406;var inst_76405__$1 = tmp76626;var inst_76406__$1 = tmp76628;var inst_76407__$1 = tmp76627;var inst_76408__$1 = inst_76426;var state_76593__$1 = (function (){var statearr_76633 = state_76593;(statearr_76633[31] = inst_76425);
(statearr_76633[16] = inst_76405__$1);
(statearr_76633[18] = inst_76407__$1);
(statearr_76633[19] = inst_76406__$1);
(statearr_76633[20] = inst_76408__$1);
return statearr_76633;
})();var statearr_76634_76757 = state_76593__$1;(statearr_76634_76757[2] = null);
(statearr_76634_76757[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 71))
{var state_76593__$1 = state_76593;var statearr_76635_76758 = state_76593__$1;(statearr_76635_76758[2] = null);
(statearr_76635_76758[1] = 72);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 8))
{var inst_76302 = (state_76593[25]);var inst_76315 = (function (){var expr__76305 = inst_76302;var pred__76304 = cljs.core.instance_QMARK_;var h = inst_76302;return ((function (expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (p1__75832_SHARP_){return cljs.core.conj.call(null,p1__75832_SHARP_,h);
});
;})(expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
})();var inst_76316 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"line","line",1017226086),inst_76315);var state_76593__$1 = (function (){var statearr_76636 = state_76593;(statearr_76636[32] = inst_76316);
return statearr_76636;
})();var statearr_76637_76759 = state_76593__$1;(statearr_76637_76759[2] = null);
(statearr_76637_76759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 40))
{var inst_76429 = (state_76593[28]);var inst_76431 = cljs.core.chunked_seq_QMARK_.call(null,inst_76429);var state_76593__$1 = state_76593;if(inst_76431)
{var statearr_76638_76760 = state_76593__$1;(statearr_76638_76760[1] = 43);
} else
{var statearr_76639_76761 = state_76593__$1;(statearr_76639_76761[1] = 44);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 72))
{var inst_76569 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76640_76762 = state_76593__$1;(statearr_76640_76762[2] = inst_76569);
(statearr_76640_76762[1] = 68);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 9))
{var inst_76302 = (state_76593[25]);var inst_76319 = (inst_76302 instanceof triangulator.datatypes.Triangle);var state_76593__$1 = state_76593;if(inst_76319)
{var statearr_76641_76763 = state_76593__$1;(statearr_76641_76763[1] = 11);
} else
{var statearr_76642_76764 = state_76593__$1;(statearr_76642_76764[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 41))
{var state_76593__$1 = state_76593;var statearr_76643_76765 = state_76593__$1;(statearr_76643_76765[2] = null);
(statearr_76643_76765[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 73))
{var inst_76549 = (state_76593[24]);var inst_76553 = cljs.core.chunk_first.call(null,inst_76549);var inst_76554 = cljs.core.chunk_rest.call(null,inst_76549);var inst_76555 = cljs.core.count.call(null,inst_76553);var inst_76533 = inst_76554;var inst_76534 = inst_76553;var inst_76535 = inst_76555;var inst_76536 = 0;var state_76593__$1 = (function (){var statearr_76644 = state_76593;(statearr_76644[23] = inst_76533);
(statearr_76644[22] = inst_76534);
(statearr_76644[13] = inst_76535);
(statearr_76644[14] = inst_76536);
return statearr_76644;
})();var statearr_76645_76766 = state_76593__$1;(statearr_76645_76766[2] = null);
(statearr_76645_76766[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 10))
{var inst_76586 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76646_76767 = state_76593__$1;(statearr_76646_76767[2] = inst_76586);
(statearr_76646_76767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 42))
{var inst_76457 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76647_76768 = state_76593__$1;(statearr_76647_76768[2] = inst_76457);
(statearr_76647_76768[1] = 38);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 74))
{var inst_76334 = (state_76593[21]);var inst_76549 = (state_76593[24]);var inst_76558 = cljs.core.first.call(null,inst_76549);var inst_76559 = [inst_76558];var inst_76560 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76559,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,76,inst_76334,inst_76560);
} else
{if((state_val_76594 === 11))
{var inst_76302 = (state_76593[25]);var inst_76321 = (function (){var expr__76305 = inst_76302;var pred__76304 = cljs.core.instance_QMARK_;var h = inst_76302;return ((function (expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (p1__75833_SHARP_){return cljs.core.conj.call(null,p1__75833_SHARP_,h);
});
;})(expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
})();var inst_76322 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"triangle","triangle",2511666554),inst_76321);var state_76593__$1 = (function (){var statearr_76648 = state_76593;(statearr_76648[33] = inst_76322);
return statearr_76648;
})();var statearr_76649_76769 = state_76593__$1;(statearr_76649_76769[2] = null);
(statearr_76649_76769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 43))
{var inst_76429 = (state_76593[28]);var inst_76433 = cljs.core.chunk_first.call(null,inst_76429);var inst_76434 = cljs.core.chunk_rest.call(null,inst_76429);var inst_76435 = cljs.core.count.call(null,inst_76433);var inst_76405 = inst_76434;var inst_76406 = inst_76433;var inst_76407 = inst_76435;var inst_76408 = 0;var state_76593__$1 = (function (){var statearr_76650 = state_76593;(statearr_76650[16] = inst_76405);
(statearr_76650[18] = inst_76407);
(statearr_76650[19] = inst_76406);
(statearr_76650[20] = inst_76408);
return statearr_76650;
})();var statearr_76651_76770 = state_76593__$1;(statearr_76651_76770[2] = null);
(statearr_76651_76770[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 75))
{var inst_76566 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76652_76771 = state_76593__$1;(statearr_76652_76771[2] = inst_76566);
(statearr_76652_76771[1] = 72);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 12))
{var inst_76302 = (state_76593[25]);var inst_76325 = (inst_76302 instanceof triangulator.datatypes.Disk);var state_76593__$1 = state_76593;if(inst_76325)
{var statearr_76653_76772 = state_76593__$1;(statearr_76653_76772[1] = 14);
} else
{var statearr_76654_76773 = state_76593__$1;(statearr_76654_76773[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 44))
{var inst_76399 = (state_76593[15]);var inst_76395 = (state_76593[17]);var inst_76334 = (state_76593[21]);var inst_76429 = (state_76593[28]);var inst_76438 = cljs.core.first.call(null,inst_76429);var inst_76440 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(inst_76438);var inst_76441 = cljs.core.nth.call(null,inst_76440,0,null);var inst_76442 = cljs.core.nth.call(null,inst_76440,1,null);var inst_76443 = triangulator.geometry.midpoint.call(null,inst_76441,inst_76442);var inst_76444 = triangulator.datatypes.point.call(null,inst_76441);var inst_76445 = triangulator.datatypes.point.call(null,inst_76442);var inst_76446 = triangulator.datatypes.point.call(null,inst_76443);var inst_76447 = [inst_76395,inst_76438,inst_76444,inst_76445,inst_76399,inst_76446];var inst_76448 = (new cljs.core.PersistentVector(null,6,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76447,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,46,inst_76334,inst_76448);
} else
{if((state_val_76594 === 76))
{var inst_76549 = (state_76593[24]);var inst_76562 = (state_76593[2]);var inst_76563 = cljs.core.next.call(null,inst_76549);var inst_76533 = inst_76563;var inst_76534 = null;var inst_76535 = 0;var inst_76536 = 0;var state_76593__$1 = (function (){var statearr_76655 = state_76593;(statearr_76655[23] = inst_76533);
(statearr_76655[22] = inst_76534);
(statearr_76655[13] = inst_76535);
(statearr_76655[14] = inst_76536);
(statearr_76655[34] = inst_76562);
return statearr_76655;
})();var statearr_76656_76774 = state_76593__$1;(statearr_76656_76774[2] = null);
(statearr_76656_76774[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 13))
{var inst_76584 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76657_76775 = state_76593__$1;(statearr_76657_76775[2] = inst_76584);
(statearr_76657_76775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 45))
{var inst_76454 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76658_76776 = state_76593__$1;(statearr_76658_76776[2] = inst_76454);
(statearr_76658_76776[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 77))
{var inst_76302 = (state_76593[25]);var inst_76575 = cljs.core.println.call(null,"item-controller will-mount go-loop handler-chan: ",inst_76302);var state_76593__$1 = state_76593;var statearr_76659_76777 = state_76593__$1;(statearr_76659_76777[2] = inst_76575);
(statearr_76659_76777[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 14))
{var inst_76302 = (state_76593[25]);var inst_76327 = (function (){var expr__76305 = inst_76302;var pred__76304 = cljs.core.instance_QMARK_;var h = inst_76302;return ((function (expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function (p1__75834_SHARP_){return cljs.core.conj.call(null,p1__75834_SHARP_,h);
});
;})(expr__76305,pred__76304,h,inst_76302,state_val_76594,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
})();var inst_76328 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"circle","circle",3948654658),inst_76327);var state_76593__$1 = (function (){var statearr_76660 = state_76593;(statearr_76660[35] = inst_76328);
return statearr_76660;
})();var statearr_76661_76778 = state_76593__$1;(statearr_76661_76778[2] = null);
(statearr_76661_76778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 46))
{var inst_76429 = (state_76593[28]);var inst_76450 = (state_76593[2]);var inst_76451 = cljs.core.next.call(null,inst_76429);var inst_76405 = inst_76451;var inst_76406 = null;var inst_76407 = 0;var inst_76408 = 0;var state_76593__$1 = (function (){var statearr_76662 = state_76593;(statearr_76662[16] = inst_76405);
(statearr_76662[18] = inst_76407);
(statearr_76662[19] = inst_76406);
(statearr_76662[20] = inst_76408);
(statearr_76662[36] = inst_76450);
return statearr_76662;
})();var statearr_76663_76779 = state_76593__$1;(statearr_76663_76779[2] = null);
(statearr_76663_76779[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 78))
{var inst_76333 = (state_76593[37]);var inst_76577 = cljs.core.println.call(null,"item-comtroller: warning: item not handled: ",inst_76333);var state_76593__$1 = state_76593;var statearr_76664_76780 = state_76593__$1;(statearr_76664_76780[2] = inst_76577);
(statearr_76664_76780[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 15))
{var inst_76302 = (state_76593[25]);var inst_76333 = (state_76593[37]);var inst_76332 = cljs.core.nth.call(null,inst_76302,0,null);var inst_76333__$1 = cljs.core.nth.call(null,inst_76302,1,null);var inst_76334 = cljs.core.nth.call(null,inst_76302,2,null);var state_76593__$1 = (function (){var statearr_76665 = state_76593;(statearr_76665[21] = inst_76334);
(statearr_76665[37] = inst_76333__$1);
(statearr_76665[38] = inst_76332);
return statearr_76665;
})();var G__76666_76781 = inst_76333__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reflection","reflection",3942571933),G__76666_76781))
{var statearr_76667_76782 = state_76593__$1;(statearr_76667_76782[1] = 77);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),G__76666_76781))
{var statearr_76668_76783 = state_76593__$1;(statearr_76668_76783[1] = 62);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"triangle","triangle",2511666554),G__76666_76781))
{var statearr_76669_76784 = state_76593__$1;(statearr_76669_76784[1] = 47);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086),G__76666_76781))
{var statearr_76670_76785 = state_76593__$1;(statearr_76670_76785[1] = 33);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"point","point",1120749826),G__76666_76781))
{var statearr_76671_76786 = state_76593__$1;(statearr_76671_76786[1] = 18);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_76672_76787 = state_76593__$1;(statearr_76672_76787[1] = 78);
} else
{}
}
}
}
}
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 47))
{var inst_76334 = (state_76593[21]);var inst_76463 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"triangle","triangle",2511666554));var inst_76464 = [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_76465 = [new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"red","red",1014017027)];var inst_76466 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76464,inst_76465);var inst_76467 = triangulator.datatypes.style.call(null,inst_76466);var inst_76468 = [inst_76467];var inst_76469 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76468,null));var state_76593__$1 = (function (){var statearr_76673 = state_76593;(statearr_76673[39] = inst_76463);
return statearr_76673;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,48,inst_76334,inst_76469);
} else
{if((state_val_76594 === 16))
{var inst_76582 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76674_76788 = state_76593__$1;(statearr_76674_76788[2] = inst_76582);
(statearr_76674_76788[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 48))
{var inst_76463 = (state_76593[39]);var inst_76471 = (state_76593[2]);var inst_76476 = cljs.core.seq.call(null,inst_76463);var inst_76477 = inst_76476;var inst_76478 = null;var inst_76479 = 0;var inst_76480 = 0;var state_76593__$1 = (function (){var statearr_76675 = state_76593;(statearr_76675[40] = inst_76471);
(statearr_76675[41] = inst_76480);
(statearr_76675[42] = inst_76477);
(statearr_76675[43] = inst_76478);
(statearr_76675[44] = inst_76479);
return statearr_76675;
})();var statearr_76676_76789 = state_76593__$1;(statearr_76676_76789[2] = null);
(statearr_76676_76789[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 17))
{var inst_76580 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76677_76790 = state_76593__$1;(statearr_76677_76790[2] = inst_76580);
(statearr_76677_76790[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 49))
{var inst_76480 = (state_76593[41]);var inst_76479 = (state_76593[44]);var inst_76482 = (inst_76480 < inst_76479);var inst_76483 = inst_76482;var state_76593__$1 = state_76593;if(cljs.core.truth_(inst_76483))
{var statearr_76678_76791 = state_76593__$1;(statearr_76678_76791[1] = 51);
} else
{var statearr_76679_76792 = state_76593__$1;(statearr_76679_76792[1] = 52);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 18))
{var inst_76334 = (state_76593[21]);var inst_76335 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"point","point",1120749826));var inst_76336 = [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_76337 = [new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"red","red",1014017027)];var inst_76338 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76336,inst_76337);var inst_76339 = triangulator.datatypes.style.call(null,inst_76338);var inst_76340 = [inst_76339];var inst_76341 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76340,null));var state_76593__$1 = (function (){var statearr_76680 = state_76593;(statearr_76680[45] = inst_76335);
return statearr_76680;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,19,inst_76334,inst_76341);
} else
{if((state_val_76594 === 50))
{var inst_76517 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76681_76793 = state_76593__$1;(statearr_76681_76793[2] = inst_76517);
(statearr_76681_76793[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 19))
{var inst_76335 = (state_76593[45]);var inst_76343 = (state_76593[2]);var inst_76348 = cljs.core.seq.call(null,inst_76335);var inst_76349 = inst_76348;var inst_76350 = null;var inst_76351 = 0;var inst_76352 = 0;var state_76593__$1 = (function (){var statearr_76682 = state_76593;(statearr_76682[8] = inst_76352);
(statearr_76682[9] = inst_76350);
(statearr_76682[10] = inst_76351);
(statearr_76682[46] = inst_76343);
(statearr_76682[12] = inst_76349);
return statearr_76682;
})();var statearr_76683_76794 = state_76593__$1;(statearr_76683_76794[2] = null);
(statearr_76683_76794[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 51))
{var inst_76334 = (state_76593[21]);var inst_76480 = (state_76593[41]);var inst_76478 = (state_76593[43]);var inst_76485 = cljs.core._nth.call(null,inst_76478,inst_76480);var inst_76486 = [inst_76485];var inst_76487 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76486,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,54,inst_76334,inst_76487);
} else
{if((state_val_76594 === 20))
{var inst_76352 = (state_76593[8]);var inst_76351 = (state_76593[10]);var inst_76354 = (inst_76352 < inst_76351);var inst_76355 = inst_76354;var state_76593__$1 = state_76593;if(cljs.core.truth_(inst_76355))
{var statearr_76684_76795 = state_76593__$1;(statearr_76684_76795[1] = 22);
} else
{var statearr_76685_76796 = state_76593__$1;(statearr_76685_76796[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 52))
{var inst_76493 = (state_76593[47]);var inst_76477 = (state_76593[42]);var inst_76493__$1 = cljs.core.seq.call(null,inst_76477);var state_76593__$1 = (function (){var statearr_76686 = state_76593;(statearr_76686[47] = inst_76493__$1);
return statearr_76686;
})();if(inst_76493__$1)
{var statearr_76687_76797 = state_76593__$1;(statearr_76687_76797[1] = 55);
} else
{var statearr_76688_76798 = state_76593__$1;(statearr_76688_76798[1] = 56);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 21))
{var inst_76389 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76689_76799 = state_76593__$1;(statearr_76689_76799[2] = inst_76389);
(statearr_76689_76799[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 53))
{var inst_76515 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76693_76800 = state_76593__$1;(statearr_76693_76800[2] = inst_76515);
(statearr_76693_76800[1] = 50);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 22))
{var inst_76352 = (state_76593[8]);var inst_76350 = (state_76593[9]);var inst_76334 = (state_76593[21]);var inst_76357 = cljs.core._nth.call(null,inst_76350,inst_76352);var inst_76358 = [inst_76357];var inst_76359 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76358,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,25,inst_76334,inst_76359);
} else
{if((state_val_76594 === 54))
{var inst_76480 = (state_76593[41]);var inst_76477 = (state_76593[42]);var inst_76478 = (state_76593[43]);var inst_76479 = (state_76593[44]);var inst_76489 = (state_76593[2]);var inst_76490 = (inst_76480 + 1);var tmp76690 = inst_76477;var tmp76691 = inst_76478;var tmp76692 = inst_76479;var inst_76477__$1 = tmp76690;var inst_76478__$1 = tmp76691;var inst_76479__$1 = tmp76692;var inst_76480__$1 = inst_76490;var state_76593__$1 = (function (){var statearr_76694 = state_76593;(statearr_76694[41] = inst_76480__$1);
(statearr_76694[48] = inst_76489);
(statearr_76694[42] = inst_76477__$1);
(statearr_76694[43] = inst_76478__$1);
(statearr_76694[44] = inst_76479__$1);
return statearr_76694;
})();var statearr_76695_76801 = state_76593__$1;(statearr_76695_76801[2] = null);
(statearr_76695_76801[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 23))
{var inst_76349 = (state_76593[12]);var inst_76365 = (state_76593[7]);var inst_76365__$1 = cljs.core.seq.call(null,inst_76349);var state_76593__$1 = (function (){var statearr_76696 = state_76593;(statearr_76696[7] = inst_76365__$1);
return statearr_76696;
})();if(inst_76365__$1)
{var statearr_76697_76802 = state_76593__$1;(statearr_76697_76802[1] = 26);
} else
{var statearr_76698_76803 = state_76593__$1;(statearr_76698_76803[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 55))
{var inst_76493 = (state_76593[47]);var inst_76495 = cljs.core.chunked_seq_QMARK_.call(null,inst_76493);var state_76593__$1 = state_76593;if(inst_76495)
{var statearr_76699_76804 = state_76593__$1;(statearr_76699_76804[1] = 58);
} else
{var statearr_76700_76805 = state_76593__$1;(statearr_76700_76805[1] = 59);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 24))
{var inst_76387 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76704_76806 = state_76593__$1;(statearr_76704_76806[2] = inst_76387);
(statearr_76704_76806[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 56))
{var state_76593__$1 = state_76593;var statearr_76705_76807 = state_76593__$1;(statearr_76705_76807[2] = null);
(statearr_76705_76807[1] = 57);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 25))
{var inst_76352 = (state_76593[8]);var inst_76350 = (state_76593[9]);var inst_76351 = (state_76593[10]);var inst_76349 = (state_76593[12]);var inst_76361 = (state_76593[2]);var inst_76362 = (inst_76352 + 1);var tmp76701 = inst_76350;var tmp76702 = inst_76351;var tmp76703 = inst_76349;var inst_76349__$1 = tmp76703;var inst_76350__$1 = tmp76701;var inst_76351__$1 = tmp76702;var inst_76352__$1 = inst_76362;var state_76593__$1 = (function (){var statearr_76706 = state_76593;(statearr_76706[8] = inst_76352__$1);
(statearr_76706[9] = inst_76350__$1);
(statearr_76706[10] = inst_76351__$1);
(statearr_76706[49] = inst_76361);
(statearr_76706[12] = inst_76349__$1);
return statearr_76706;
})();var statearr_76707_76808 = state_76593__$1;(statearr_76707_76808[2] = null);
(statearr_76707_76808[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 57))
{var inst_76513 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76708_76809 = state_76593__$1;(statearr_76708_76809[2] = inst_76513);
(statearr_76708_76809[1] = 53);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 26))
{var inst_76365 = (state_76593[7]);var inst_76367 = cljs.core.chunked_seq_QMARK_.call(null,inst_76365);var state_76593__$1 = state_76593;if(inst_76367)
{var statearr_76709_76810 = state_76593__$1;(statearr_76709_76810[1] = 29);
} else
{var statearr_76710_76811 = state_76593__$1;(statearr_76710_76811[1] = 30);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 58))
{var inst_76493 = (state_76593[47]);var inst_76497 = cljs.core.chunk_first.call(null,inst_76493);var inst_76498 = cljs.core.chunk_rest.call(null,inst_76493);var inst_76499 = cljs.core.count.call(null,inst_76497);var inst_76477 = inst_76498;var inst_76478 = inst_76497;var inst_76479 = inst_76499;var inst_76480 = 0;var state_76593__$1 = (function (){var statearr_76711 = state_76593;(statearr_76711[41] = inst_76480);
(statearr_76711[42] = inst_76477);
(statearr_76711[43] = inst_76478);
(statearr_76711[44] = inst_76479);
return statearr_76711;
})();var statearr_76712_76812 = state_76593__$1;(statearr_76712_76812[2] = null);
(statearr_76712_76812[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 27))
{var state_76593__$1 = state_76593;var statearr_76713_76813 = state_76593__$1;(statearr_76713_76813[2] = null);
(statearr_76713_76813[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 59))
{var inst_76334 = (state_76593[21]);var inst_76493 = (state_76593[47]);var inst_76502 = cljs.core.first.call(null,inst_76493);var inst_76503 = [inst_76502];var inst_76504 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76503,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,61,inst_76334,inst_76504);
} else
{if((state_val_76594 === 28))
{var inst_76385 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76714_76814 = state_76593__$1;(statearr_76714_76814[2] = inst_76385);
(statearr_76714_76814[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 60))
{var inst_76510 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76715_76815 = state_76593__$1;(statearr_76715_76815[2] = inst_76510);
(statearr_76715_76815[1] = 57);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 29))
{var inst_76365 = (state_76593[7]);var inst_76369 = cljs.core.chunk_first.call(null,inst_76365);var inst_76370 = cljs.core.chunk_rest.call(null,inst_76365);var inst_76371 = cljs.core.count.call(null,inst_76369);var inst_76349 = inst_76370;var inst_76350 = inst_76369;var inst_76351 = inst_76371;var inst_76352 = 0;var state_76593__$1 = (function (){var statearr_76716 = state_76593;(statearr_76716[8] = inst_76352);
(statearr_76716[9] = inst_76350);
(statearr_76716[10] = inst_76351);
(statearr_76716[12] = inst_76349);
return statearr_76716;
})();var statearr_76717_76816 = state_76593__$1;(statearr_76717_76816[2] = null);
(statearr_76717_76816[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 61))
{var inst_76493 = (state_76593[47]);var inst_76506 = (state_76593[2]);var inst_76507 = cljs.core.next.call(null,inst_76493);var inst_76477 = inst_76507;var inst_76478 = null;var inst_76479 = 0;var inst_76480 = 0;var state_76593__$1 = (function (){var statearr_76718 = state_76593;(statearr_76718[41] = inst_76480);
(statearr_76718[50] = inst_76506);
(statearr_76718[42] = inst_76477);
(statearr_76718[43] = inst_76478);
(statearr_76718[44] = inst_76479);
return statearr_76718;
})();var statearr_76719_76817 = state_76593__$1;(statearr_76719_76817[2] = null);
(statearr_76719_76817[1] = 49);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 30))
{var inst_76334 = (state_76593[21]);var inst_76365 = (state_76593[7]);var inst_76374 = cljs.core.first.call(null,inst_76365);var inst_76375 = [inst_76374];var inst_76376 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76375,null));var state_76593__$1 = state_76593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,32,inst_76334,inst_76376);
} else
{if((state_val_76594 === 62))
{var inst_76334 = (state_76593[21]);var inst_76519 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"circle","circle",3948654658));var inst_76520 = [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306)];var inst_76521 = [new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"red","red",1014017027)];var inst_76522 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_76520,inst_76521);var inst_76523 = triangulator.datatypes.style.call(null,inst_76522);var inst_76524 = [inst_76523];var inst_76525 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_76524,null));var state_76593__$1 = (function (){var statearr_76720 = state_76593;(statearr_76720[51] = inst_76519);
return statearr_76720;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76593__$1,63,inst_76334,inst_76525);
} else
{if((state_val_76594 === 31))
{var inst_76382 = (state_76593[2]);var state_76593__$1 = state_76593;var statearr_76721_76818 = state_76593__$1;(statearr_76721_76818[2] = inst_76382);
(statearr_76721_76818[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76594 === 63))
{var inst_76519 = (state_76593[51]);var inst_76527 = (state_76593[2]);var inst_76532 = cljs.core.seq.call(null,inst_76519);var inst_76533 = inst_76532;var inst_76534 = null;var inst_76535 = 0;var inst_76536 = 0;var state_76593__$1 = (function (){var statearr_76722 = state_76593;(statearr_76722[52] = inst_76527);
(statearr_76722[23] = inst_76533);
(statearr_76722[22] = inst_76534);
(statearr_76722[13] = inst_76535);
(statearr_76722[14] = inst_76536);
return statearr_76722;
})();var statearr_76723_76819 = state_76593__$1;(statearr_76723_76819[2] = null);
(statearr_76723_76819[1] = 64);
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
}
}
}
}
}
}
}
}
}
});})(c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
;return ((function (switch__15432__auto__,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_76727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76727[0] = state_machine__15433__auto__);
(statearr_76727[1] = 1);
return statearr_76727;
});
var state_machine__15433__auto____1 = (function (state_76593){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_76593);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e76728){if((e76728 instanceof Object))
{var ex__15436__auto__ = e76728;var statearr_76729_76820 = state_76593;(statearr_76729_76820[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76821 = state_76593;
state_76593 = G__76821;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_76593){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_76593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
})();var state__15449__auto__ = (function (){var statearr_76730 = f__15448__auto__.call(null);(statearr_76730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_76730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__,___$2,map__76299,map__76299__$1,draw_chan,mouse_move_chan,click_chan,control_chan,handler_chan,___$1))
);
return c__15447__auto__;
});
triangulator.components.t76283.prototype.om$core$IInitState$ = true;
triangulator.components.t76283.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"point","point",1120749826),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"triangle","triangle",2511666554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"handler","handler",1706707644),null,new cljs.core.Keyword(null,"control","control",1965447375),null], null);
});
triangulator.components.t76283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76285){var self__ = this;
var _76285__$1 = this;return self__.meta76284;
});
triangulator.components.t76283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76285,meta76284__$1){var self__ = this;
var _76285__$1 = this;return (new triangulator.components.t76283(self__.owner,self__.app,self__.item_controller,meta76284__$1));
});
triangulator.components.__GT_t76283 = (function __GT_t76283(owner__$1,app__$1,item_controller__$1,meta76284){return (new triangulator.components.t76283(owner__$1,app__$1,item_controller__$1,meta76284));
});
}
return (new triangulator.components.t76283(owner,app,item_controller,null));
});
triangulator.components.item_view = (function item_view(app,owner){if(typeof triangulator.components.t76825 !== 'undefined')
{} else
{
/**
* @constructor
*/
triangulator.components.t76825 = (function (owner,app,item_view,meta76826){
this.owner = owner;
this.app = app;
this.item_view = item_view;
this.meta76826 = meta76826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
triangulator.components.t76825.cljs$lang$type = true;
triangulator.components.t76825.cljs$lang$ctorStr = "triangulator.components/t76825";
triangulator.components.t76825.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"triangulator.components/t76825");
});
triangulator.components.t76825.prototype.om$core$IRender$ = true;
triangulator.components.t76825.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var temp__4090__auto__ = new cljs.core.Keyword(null,"current-item","current-item",2436322905).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(temp__4090__auto__))
{var item = temp__4090__auto__;return om.core.build.call(null,triangulator.components.item_controller,self__.app);
} else
{return null;
}
});
triangulator.components.t76825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76827){var self__ = this;
var _76827__$1 = this;return self__.meta76826;
});
triangulator.components.t76825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76827,meta76826__$1){var self__ = this;
var _76827__$1 = this;return (new triangulator.components.t76825(self__.owner,self__.app,self__.item_view,meta76826__$1));
});
triangulator.components.__GT_t76825 = (function __GT_t76825(owner__$1,app__$1,item_view__$1,meta76826){return (new triangulator.components.t76825(owner__$1,app__$1,item_view__$1,meta76826));
});
}
return (new triangulator.components.t76825(owner,app,item_view,null));
});

//# sourceMappingURL=components.js.map