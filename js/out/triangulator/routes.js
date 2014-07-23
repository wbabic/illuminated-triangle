// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.routes');
goog.require('cljs.core');
goog.require('triangulator.events');
goog.require('triangulator.draw');
goog.require('goog.History');
goog.require('triangulator.components');
goog.require('triangulator.events');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('triangulator.draw');
goog.require('triangulator.definitions');
goog.require('triangulator.components');
goog.require('triangulator.definitions');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
triangulator.routes.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-item","current-item",2436322905),new cljs.core.Keyword(null,"point","point",1120749826)], null));
cljs.core.println.call(null,"hello walter");
var action__24550__auto___24636 = (function (params__24551__auto__){if(cljs.core.map_QMARK_.call(null,params__24551__auto__))
{var map__24634 = params__24551__auto__;var map__24634__$1 = ((cljs.core.seq_QMARK_.call(null,map__24634))?cljs.core.apply.call(null,cljs.core.hash_map,map__24634):map__24634);var params = map__24634__$1;var item = new cljs.core.Keyword(null,"definition","definition",4294453445).cljs$core$IFn$_invoke$arity$1(params);cljs.core.println.call(null,"defroute: ",item);
if(cljs.core.truth_(item))
{cljs.core.println.call(null,[cljs.core.str("route definition: "),cljs.core.str(cljs.core.keyword.call(null,item))].join(''));
return cljs.core.swap_BANG_.call(null,triangulator.routes.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-item","current-item",2436322905),cljs.core.keyword.call(null,item));
} else
{return null;
}
} else
{if(cljs.core.vector_QMARK_.call(null,params__24551__auto__))
{var map__24635 = params__24551__auto__;var map__24635__$1 = ((cljs.core.seq_QMARK_.call(null,map__24635))?cljs.core.apply.call(null,cljs.core.hash_map,map__24635):map__24635);var params = map__24635__$1;var item = new cljs.core.Keyword(null,"definition","definition",4294453445).cljs$core$IFn$_invoke$arity$1(params);cljs.core.println.call(null,"defroute: ",item);
if(cljs.core.truth_(item))
{cljs.core.println.call(null,[cljs.core.str("route definition: "),cljs.core.str(cljs.core.keyword.call(null,item))].join(''));
return cljs.core.swap_BANG_.call(null,triangulator.routes.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-item","current-item",2436322905),cljs.core.keyword.call(null,item));
} else
{return null;
}
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:definition",action__24550__auto___24636);
triangulator.routes.history = (new goog.History());
goog.events.listen(triangulator.routes.history,"navigate",(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
triangulator.routes.history.setEnabled(true);
om.core.root.call(null,triangulator.components.item_view,triangulator.routes.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("definition-box"),new cljs.core.Keyword(null,"shared","shared",4405305303),(function (){var map__24637 = triangulator.draw.surface.call(null,"graphics-box");var map__24637__$1 = ((cljs.core.seq_QMARK_.call(null,map__24637))?cljs.core.apply.call(null,cljs.core.hash_map,map__24637):map__24637);var surface = map__24637__$1;var height = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"width","width",1127031096));var canvas = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"canvas","canvas",3941165258));var click_chan = triangulator.events.mouse_chan.call(null,canvas,new cljs.core.Keyword(null,"mouse-down","mouse-down",1975065660));var mouse_move_chan = triangulator.events.mouse_chan.call(null,canvas,new cljs.core.Keyword(null,"mouse-move","mouse-move",1975333739));var draw_chan = triangulator.draw.drawing_loop.call(null,canvas,width,height);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"surface","surface",3455639583),surface,new cljs.core.Keyword(null,"click-chan","click-chan",4485289961),click_chan,new cljs.core.Keyword(null,"mouse-move-chan","mouse-move-chan",3502210072),mouse_move_chan,new cljs.core.Keyword(null,"draw-chan","draw-chan",1113990573),draw_chan], null);
})()], null));
om.core.root.call(null,triangulator.components.nav_box,triangulator.definitions.ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("definition-list")], null));

//# sourceMappingURL=routes.js.map