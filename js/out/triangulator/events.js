// Compiled by ClojureScript 0.0-2202
goog.provide('triangulator.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
triangulator.events.event_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mouse-down","mouse-down",1975065660),goog.events.EventType.MOUSEDOWN,new cljs.core.Keyword(null,"mouse-move","mouse-move",1975333739),goog.events.EventType.MOUSEMOVE,new cljs.core.Keyword(null,"mouse-up","mouse-up",894234677),goog.events.EventType.MOUSEUP,new cljs.core.Keyword(null,"click","click",1108654330),goog.events.EventType.CLICK,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),goog.events.EventType.DBLCLICK], null);
triangulator.events.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (p1__21782_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__21782_SHARP_);
});})(out))
);
return out;
});
triangulator.events.mouse_chan = (function mouse_chan(element,event_type){return cljs.core.async.map.call(null,(function (e){var px = e.offsetX;var py = e.offsetY;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangulator.events.listen.call(null,element,event_type.call(null,triangulator.events.event_map))], null));
});

//# sourceMappingURL=events.js.map