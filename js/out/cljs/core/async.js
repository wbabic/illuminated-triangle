// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26036 = (function (f,fn_handler,meta26037){
this.f = f;
this.fn_handler = fn_handler;
this.meta26037 = meta26037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26036.cljs$lang$type = true;
cljs.core.async.t26036.cljs$lang$ctorStr = "cljs.core.async/t26036";
cljs.core.async.t26036.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26036");
});
cljs.core.async.t26036.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26038){var self__ = this;
var _26038__$1 = this;return self__.meta26037;
});
cljs.core.async.t26036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26038,meta26037__$1){var self__ = this;
var _26038__$1 = this;return (new cljs.core.async.t26036(self__.f,self__.fn_handler,meta26037__$1));
});
cljs.core.async.__GT_t26036 = (function __GT_t26036(f__$1,fn_handler__$1,meta26037){return (new cljs.core.async.t26036(f__$1,fn_handler__$1,meta26037));
});
}
return (new cljs.core.async.t26036(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26040 = buff;if(G__26040)
{var bit__12750__auto__ = null;if(cljs.core.truth_((function (){var or__12100__auto__ = bit__12750__auto__;if(cljs.core.truth_(or__12100__auto__))
{return or__12100__auto__;
} else
{return G__26040.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26040.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26040);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_26041 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26041);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_26041,ret){
return (function (){return fn1.call(null,val_26041);
});})(val_26041,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12948__auto___26042 = n;var x_26043 = 0;while(true){
if((x_26043 < n__12948__auto___26042))
{(a[x_26043] = 0);
{
var G__26044 = (x_26043 + 1);
x_26043 = G__26044;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__26045 = (i + 1);
i = G__26045;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26049 = (function (flag,alt_flag,meta26050){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26050 = meta26050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26049.cljs$lang$type = true;
cljs.core.async.t26049.cljs$lang$ctorStr = "cljs.core.async/t26049";
cljs.core.async.t26049.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26049");
});})(flag))
;
cljs.core.async.t26049.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26051){var self__ = this;
var _26051__$1 = this;return self__.meta26050;
});})(flag))
;
cljs.core.async.t26049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26051,meta26050__$1){var self__ = this;
var _26051__$1 = this;return (new cljs.core.async.t26049(self__.flag,self__.alt_flag,meta26050__$1));
});})(flag))
;
cljs.core.async.__GT_t26049 = ((function (flag){
return (function __GT_t26049(flag__$1,alt_flag__$1,meta26050){return (new cljs.core.async.t26049(flag__$1,alt_flag__$1,meta26050));
});})(flag))
;
}
return (new cljs.core.async.t26049(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26055 = (function (cb,flag,alt_handler,meta26056){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26056 = meta26056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26055.cljs$lang$type = true;
cljs.core.async.t26055.cljs$lang$ctorStr = "cljs.core.async/t26055";
cljs.core.async.t26055.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26055");
});
cljs.core.async.t26055.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26057){var self__ = this;
var _26057__$1 = this;return self__.meta26056;
});
cljs.core.async.t26055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26057,meta26056__$1){var self__ = this;
var _26057__$1 = this;return (new cljs.core.async.t26055(self__.cb,self__.flag,self__.alt_handler,meta26056__$1));
});
cljs.core.async.__GT_t26055 = (function __GT_t26055(cb__$1,flag__$1,alt_handler__$1,meta26056){return (new cljs.core.async.t26055(cb__$1,flag__$1,alt_handler__$1,meta26056));
});
}
return (new cljs.core.async.t26055(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26058_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26058_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26059_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26059_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12100__auto__ = wport;if(cljs.core.truth_(or__12100__auto__))
{return or__12100__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__26060 = (i + 1);
i = G__26060;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12100__auto__ = ret;if(cljs.core.truth_(or__12100__auto__))
{return or__12100__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__12088__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12088__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12088__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26061){var map__26063 = p__26061;var map__26063__$1 = ((cljs.core.seq_QMARK_.call(null,map__26063))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);var opts = map__26063__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26061 = null;if (arguments.length > 1) {
  p__26061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26061);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26064){
var ports = cljs.core.first(arglist__26064);
var p__26061 = cljs.core.rest(arglist__26064);
return alts_BANG___delegate(ports,p__26061);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26072 = (function (ch,f,map_LT_,meta26073){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26073 = meta26073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26072.cljs$lang$type = true;
cljs.core.async.t26072.cljs$lang$ctorStr = "cljs.core.async/t26072";
cljs.core.async.t26072.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26072");
});
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26075 = (function (fn1,_,meta26073,ch,f,map_LT_,meta26076){
this.fn1 = fn1;
this._ = _;
this.meta26073 = meta26073;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26076 = meta26076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26075.cljs$lang$type = true;
cljs.core.async.t26075.cljs$lang$ctorStr = "cljs.core.async/t26075";
cljs.core.async.t26075.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26075");
});})(___$1))
;
cljs.core.async.t26075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26075.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26065_SHARP_){return f1.call(null,(((p1__26065_SHARP_ == null))?null:self__.f.call(null,p1__26065_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26077){var self__ = this;
var _26077__$1 = this;return self__.meta26076;
});})(___$1))
;
cljs.core.async.t26075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26077,meta26076__$1){var self__ = this;
var _26077__$1 = this;return (new cljs.core.async.t26075(self__.fn1,self__._,self__.meta26073,self__.ch,self__.f,self__.map_LT_,meta26076__$1));
});})(___$1))
;
cljs.core.async.__GT_t26075 = ((function (___$1){
return (function __GT_t26075(fn1__$1,___$2,meta26073__$1,ch__$2,f__$2,map_LT___$2,meta26076){return (new cljs.core.async.t26075(fn1__$1,___$2,meta26073__$1,ch__$2,f__$2,map_LT___$2,meta26076));
});})(___$1))
;
}
return (new cljs.core.async.t26075(fn1,___$1,self__.meta26073,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12088__auto__ = ret;if(cljs.core.truth_(and__12088__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12088__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26072.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26074){var self__ = this;
var _26074__$1 = this;return self__.meta26073;
});
cljs.core.async.t26072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26074,meta26073__$1){var self__ = this;
var _26074__$1 = this;return (new cljs.core.async.t26072(self__.ch,self__.f,self__.map_LT_,meta26073__$1));
});
cljs.core.async.__GT_t26072 = (function __GT_t26072(ch__$1,f__$1,map_LT___$1,meta26073){return (new cljs.core.async.t26072(ch__$1,f__$1,map_LT___$1,meta26073));
});
}
return (new cljs.core.async.t26072(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26081 = (function (ch,f,map_GT_,meta26082){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26082 = meta26082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26081.cljs$lang$type = true;
cljs.core.async.t26081.cljs$lang$ctorStr = "cljs.core.async/t26081";
cljs.core.async.t26081.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26081");
});
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26083){var self__ = this;
var _26083__$1 = this;return self__.meta26082;
});
cljs.core.async.t26081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26083,meta26082__$1){var self__ = this;
var _26083__$1 = this;return (new cljs.core.async.t26081(self__.ch,self__.f,self__.map_GT_,meta26082__$1));
});
cljs.core.async.__GT_t26081 = (function __GT_t26081(ch__$1,f__$1,map_GT___$1,meta26082){return (new cljs.core.async.t26081(ch__$1,f__$1,map_GT___$1,meta26082));
});
}
return (new cljs.core.async.t26081(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26087 = (function (ch,p,filter_GT_,meta26088){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26088 = meta26088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26087.cljs$lang$type = true;
cljs.core.async.t26087.cljs$lang$ctorStr = "cljs.core.async/t26087";
cljs.core.async.t26087.cljs$lang$ctorPrWriter = (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t26087");
});
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26089){var self__ = this;
var _26089__$1 = this;return self__.meta26088;
});
cljs.core.async.t26087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26089,meta26088__$1){var self__ = this;
var _26089__$1 = this;return (new cljs.core.async.t26087(self__.ch,self__.p,self__.filter_GT_,meta26088__$1));
});
cljs.core.async.__GT_t26087 = (function __GT_t26087(ch__$1,p__$1,filter_GT___$1,meta26088){return (new cljs.core.async.t26087(ch__$1,p__$1,filter_GT___$1,meta26088));
});
}
return (new cljs.core.async.t26087(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___26172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___26172,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___26172,out){
return (function (state_26151){var state_val_26152 = (state_26151[1]);if((state_val_26152 === 1))
{var state_26151__$1 = state_26151;var statearr_26153_26173 = state_26151__$1;(statearr_26153_26173[2] = null);
(statearr_26153_26173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 2))
{var state_26151__$1 = state_26151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26151__$1,4,ch);
} else
{if((state_val_26152 === 3))
{var inst_26149 = (state_26151[2]);var state_26151__$1 = state_26151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26151__$1,inst_26149);
} else
{if((state_val_26152 === 4))
{var inst_26133 = (state_26151[7]);var inst_26133__$1 = (state_26151[2]);var inst_26134 = (inst_26133__$1 == null);var state_26151__$1 = (function (){var statearr_26154 = state_26151;(statearr_26154[7] = inst_26133__$1);
return statearr_26154;
})();if(cljs.core.truth_(inst_26134))
{var statearr_26155_26174 = state_26151__$1;(statearr_26155_26174[1] = 5);
} else
{var statearr_26156_26175 = state_26151__$1;(statearr_26156_26175[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 5))
{var inst_26136 = cljs.core.async.close_BANG_.call(null,out);var state_26151__$1 = state_26151;var statearr_26157_26176 = state_26151__$1;(statearr_26157_26176[2] = inst_26136);
(statearr_26157_26176[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 6))
{var inst_26133 = (state_26151[7]);var inst_26138 = p.call(null,inst_26133);var state_26151__$1 = state_26151;if(cljs.core.truth_(inst_26138))
{var statearr_26158_26177 = state_26151__$1;(statearr_26158_26177[1] = 8);
} else
{var statearr_26159_26178 = state_26151__$1;(statearr_26159_26178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 7))
{var inst_26147 = (state_26151[2]);var state_26151__$1 = state_26151;var statearr_26160_26179 = state_26151__$1;(statearr_26160_26179[2] = inst_26147);
(statearr_26160_26179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 8))
{var inst_26133 = (state_26151[7]);var state_26151__$1 = state_26151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26151__$1,11,out,inst_26133);
} else
{if((state_val_26152 === 9))
{var state_26151__$1 = state_26151;var statearr_26161_26180 = state_26151__$1;(statearr_26161_26180[2] = null);
(statearr_26161_26180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 10))
{var inst_26144 = (state_26151[2]);var state_26151__$1 = (function (){var statearr_26162 = state_26151;(statearr_26162[8] = inst_26144);
return statearr_26162;
})();var statearr_26163_26181 = state_26151__$1;(statearr_26163_26181[2] = null);
(statearr_26163_26181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26152 === 11))
{var inst_26141 = (state_26151[2]);var state_26151__$1 = state_26151;var statearr_26164_26182 = state_26151__$1;(statearr_26164_26182[2] = inst_26141);
(statearr_26164_26182[1] = 10);
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
});})(c__15447__auto___26172,out))
;return ((function (switch__15432__auto__,c__15447__auto___26172,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26168 = [null,null,null,null,null,null,null,null,null];(statearr_26168[0] = state_machine__15433__auto__);
(statearr_26168[1] = 1);
return statearr_26168;
});
var state_machine__15433__auto____1 = (function (state_26151){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26151);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26169){if((e26169 instanceof Object))
{var ex__15436__auto__ = e26169;var statearr_26170_26183 = state_26151;(statearr_26170_26183[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26184 = state_26151;
state_26151 = G__26184;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26151){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___26172,out))
})();var state__15449__auto__ = (function (){var statearr_26171 = f__15448__auto__.call(null);(statearr_26171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___26172);
return statearr_26171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___26172,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_26350){var state_val_26351 = (state_26350[1]);if((state_val_26351 === 1))
{var state_26350__$1 = state_26350;var statearr_26352_26393 = state_26350__$1;(statearr_26352_26393[2] = null);
(statearr_26352_26393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 2))
{var state_26350__$1 = state_26350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26350__$1,4,in$);
} else
{if((state_val_26351 === 3))
{var inst_26348 = (state_26350[2]);var state_26350__$1 = state_26350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26350__$1,inst_26348);
} else
{if((state_val_26351 === 4))
{var inst_26291 = (state_26350[7]);var inst_26291__$1 = (state_26350[2]);var inst_26292 = (inst_26291__$1 == null);var state_26350__$1 = (function (){var statearr_26353 = state_26350;(statearr_26353[7] = inst_26291__$1);
return statearr_26353;
})();if(cljs.core.truth_(inst_26292))
{var statearr_26354_26394 = state_26350__$1;(statearr_26354_26394[1] = 5);
} else
{var statearr_26355_26395 = state_26350__$1;(statearr_26355_26395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 5))
{var inst_26294 = cljs.core.async.close_BANG_.call(null,out);var state_26350__$1 = state_26350;var statearr_26356_26396 = state_26350__$1;(statearr_26356_26396[2] = inst_26294);
(statearr_26356_26396[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 6))
{var inst_26291 = (state_26350[7]);var inst_26300 = f.call(null,inst_26291);var inst_26301 = cljs.core.seq.call(null,inst_26300);var inst_26302 = inst_26301;var inst_26303 = null;var inst_26304 = 0;var inst_26305 = 0;var state_26350__$1 = (function (){var statearr_26357 = state_26350;(statearr_26357[8] = inst_26305);
(statearr_26357[9] = inst_26304);
(statearr_26357[10] = inst_26303);
(statearr_26357[11] = inst_26302);
return statearr_26357;
})();var statearr_26358_26397 = state_26350__$1;(statearr_26358_26397[2] = null);
(statearr_26358_26397[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 7))
{var inst_26346 = (state_26350[2]);var state_26350__$1 = state_26350;var statearr_26359_26398 = state_26350__$1;(statearr_26359_26398[2] = inst_26346);
(statearr_26359_26398[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 8))
{var inst_26305 = (state_26350[8]);var inst_26304 = (state_26350[9]);var inst_26307 = (inst_26305 < inst_26304);var inst_26308 = inst_26307;var state_26350__$1 = state_26350;if(cljs.core.truth_(inst_26308))
{var statearr_26360_26399 = state_26350__$1;(statearr_26360_26399[1] = 10);
} else
{var statearr_26361_26400 = state_26350__$1;(statearr_26361_26400[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 9))
{var inst_26338 = (state_26350[2]);var inst_26339 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26350__$1 = (function (){var statearr_26362 = state_26350;(statearr_26362[12] = inst_26338);
return statearr_26362;
})();if(cljs.core.truth_(inst_26339))
{var statearr_26363_26401 = state_26350__$1;(statearr_26363_26401[1] = 21);
} else
{var statearr_26364_26402 = state_26350__$1;(statearr_26364_26402[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 10))
{var inst_26305 = (state_26350[8]);var inst_26303 = (state_26350[10]);var inst_26310 = cljs.core._nth.call(null,inst_26303,inst_26305);var state_26350__$1 = state_26350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26350__$1,13,out,inst_26310);
} else
{if((state_val_26351 === 11))
{var inst_26316 = (state_26350[13]);var inst_26302 = (state_26350[11]);var inst_26316__$1 = cljs.core.seq.call(null,inst_26302);var state_26350__$1 = (function (){var statearr_26368 = state_26350;(statearr_26368[13] = inst_26316__$1);
return statearr_26368;
})();if(inst_26316__$1)
{var statearr_26369_26403 = state_26350__$1;(statearr_26369_26403[1] = 14);
} else
{var statearr_26370_26404 = state_26350__$1;(statearr_26370_26404[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 12))
{var inst_26336 = (state_26350[2]);var state_26350__$1 = state_26350;var statearr_26371_26405 = state_26350__$1;(statearr_26371_26405[2] = inst_26336);
(statearr_26371_26405[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 13))
{var inst_26305 = (state_26350[8]);var inst_26304 = (state_26350[9]);var inst_26303 = (state_26350[10]);var inst_26302 = (state_26350[11]);var inst_26312 = (state_26350[2]);var inst_26313 = (inst_26305 + 1);var tmp26365 = inst_26304;var tmp26366 = inst_26303;var tmp26367 = inst_26302;var inst_26302__$1 = tmp26367;var inst_26303__$1 = tmp26366;var inst_26304__$1 = tmp26365;var inst_26305__$1 = inst_26313;var state_26350__$1 = (function (){var statearr_26372 = state_26350;(statearr_26372[14] = inst_26312);
(statearr_26372[8] = inst_26305__$1);
(statearr_26372[9] = inst_26304__$1);
(statearr_26372[10] = inst_26303__$1);
(statearr_26372[11] = inst_26302__$1);
return statearr_26372;
})();var statearr_26373_26406 = state_26350__$1;(statearr_26373_26406[2] = null);
(statearr_26373_26406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 14))
{var inst_26316 = (state_26350[13]);var inst_26318 = cljs.core.chunked_seq_QMARK_.call(null,inst_26316);var state_26350__$1 = state_26350;if(inst_26318)
{var statearr_26374_26407 = state_26350__$1;(statearr_26374_26407[1] = 17);
} else
{var statearr_26375_26408 = state_26350__$1;(statearr_26375_26408[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 15))
{var state_26350__$1 = state_26350;var statearr_26376_26409 = state_26350__$1;(statearr_26376_26409[2] = null);
(statearr_26376_26409[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 16))
{var inst_26334 = (state_26350[2]);var state_26350__$1 = state_26350;var statearr_26377_26410 = state_26350__$1;(statearr_26377_26410[2] = inst_26334);
(statearr_26377_26410[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 17))
{var inst_26316 = (state_26350[13]);var inst_26320 = cljs.core.chunk_first.call(null,inst_26316);var inst_26321 = cljs.core.chunk_rest.call(null,inst_26316);var inst_26322 = cljs.core.count.call(null,inst_26320);var inst_26302 = inst_26321;var inst_26303 = inst_26320;var inst_26304 = inst_26322;var inst_26305 = 0;var state_26350__$1 = (function (){var statearr_26378 = state_26350;(statearr_26378[8] = inst_26305);
(statearr_26378[9] = inst_26304);
(statearr_26378[10] = inst_26303);
(statearr_26378[11] = inst_26302);
return statearr_26378;
})();var statearr_26379_26411 = state_26350__$1;(statearr_26379_26411[2] = null);
(statearr_26379_26411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 18))
{var inst_26316 = (state_26350[13]);var inst_26325 = cljs.core.first.call(null,inst_26316);var state_26350__$1 = state_26350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26350__$1,20,out,inst_26325);
} else
{if((state_val_26351 === 19))
{var inst_26331 = (state_26350[2]);var state_26350__$1 = state_26350;var statearr_26380_26412 = state_26350__$1;(statearr_26380_26412[2] = inst_26331);
(statearr_26380_26412[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 20))
{var inst_26316 = (state_26350[13]);var inst_26327 = (state_26350[2]);var inst_26328 = cljs.core.next.call(null,inst_26316);var inst_26302 = inst_26328;var inst_26303 = null;var inst_26304 = 0;var inst_26305 = 0;var state_26350__$1 = (function (){var statearr_26381 = state_26350;(statearr_26381[8] = inst_26305);
(statearr_26381[9] = inst_26304);
(statearr_26381[10] = inst_26303);
(statearr_26381[11] = inst_26302);
(statearr_26381[15] = inst_26327);
return statearr_26381;
})();var statearr_26382_26413 = state_26350__$1;(statearr_26382_26413[2] = null);
(statearr_26382_26413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 21))
{var state_26350__$1 = state_26350;var statearr_26383_26414 = state_26350__$1;(statearr_26383_26414[2] = null);
(statearr_26383_26414[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 22))
{var state_26350__$1 = state_26350;var statearr_26384_26415 = state_26350__$1;(statearr_26384_26415[2] = null);
(statearr_26384_26415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26351 === 23))
{var inst_26344 = (state_26350[2]);var state_26350__$1 = state_26350;var statearr_26385_26416 = state_26350__$1;(statearr_26385_26416[2] = inst_26344);
(statearr_26385_26416[1] = 7);
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
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26389[0] = state_machine__15433__auto__);
(statearr_26389[1] = 1);
return statearr_26389;
});
var state_machine__15433__auto____1 = (function (state_26350){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26350);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26390){if((e26390 instanceof Object))
{var ex__15436__auto__ = e26390;var statearr_26391_26417 = state_26350;(statearr_26391_26417[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26418 = state_26350;
state_26350 = G__26418;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26350){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_26392 = f__15448__auto__.call(null);(statearr_26392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_26392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__15447__auto___26513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___26513){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___26513){
return (function (state_26489){var state_val_26490 = (state_26489[1]);if((state_val_26490 === 1))
{var state_26489__$1 = state_26489;var statearr_26491_26514 = state_26489__$1;(statearr_26491_26514[2] = null);
(statearr_26491_26514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 2))
{var state_26489__$1 = state_26489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,4,from);
} else
{if((state_val_26490 === 3))
{var inst_26487 = (state_26489[2]);var state_26489__$1 = state_26489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26489__$1,inst_26487);
} else
{if((state_val_26490 === 4))
{var inst_26468 = (state_26489[7]);var inst_26468__$1 = (state_26489[2]);var inst_26469 = (inst_26468__$1 == null);var state_26489__$1 = (function (){var statearr_26492 = state_26489;(statearr_26492[7] = inst_26468__$1);
return statearr_26492;
})();if(cljs.core.truth_(inst_26469))
{var statearr_26493_26515 = state_26489__$1;(statearr_26493_26515[1] = 5);
} else
{var statearr_26494_26516 = state_26489__$1;(statearr_26494_26516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 5))
{var state_26489__$1 = state_26489;if(cljs.core.truth_(close_QMARK_))
{var statearr_26495_26517 = state_26489__$1;(statearr_26495_26517[1] = 8);
} else
{var statearr_26496_26518 = state_26489__$1;(statearr_26496_26518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 6))
{var inst_26468 = (state_26489[7]);var state_26489__$1 = state_26489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26489__$1,11,to,inst_26468);
} else
{if((state_val_26490 === 7))
{var inst_26485 = (state_26489[2]);var state_26489__$1 = state_26489;var statearr_26497_26519 = state_26489__$1;(statearr_26497_26519[2] = inst_26485);
(statearr_26497_26519[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 8))
{var inst_26472 = cljs.core.async.close_BANG_.call(null,to);var state_26489__$1 = state_26489;var statearr_26498_26520 = state_26489__$1;(statearr_26498_26520[2] = inst_26472);
(statearr_26498_26520[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 9))
{var state_26489__$1 = state_26489;var statearr_26499_26521 = state_26489__$1;(statearr_26499_26521[2] = null);
(statearr_26499_26521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 10))
{var inst_26475 = (state_26489[2]);var state_26489__$1 = state_26489;var statearr_26500_26522 = state_26489__$1;(statearr_26500_26522[2] = inst_26475);
(statearr_26500_26522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 11))
{var inst_26478 = (state_26489[2]);var state_26489__$1 = state_26489;if(cljs.core.truth_(inst_26478))
{var statearr_26501_26523 = state_26489__$1;(statearr_26501_26523[1] = 12);
} else
{var statearr_26502_26524 = state_26489__$1;(statearr_26502_26524[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 12))
{var state_26489__$1 = state_26489;var statearr_26503_26525 = state_26489__$1;(statearr_26503_26525[2] = null);
(statearr_26503_26525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 13))
{var state_26489__$1 = state_26489;var statearr_26504_26526 = state_26489__$1;(statearr_26504_26526[2] = null);
(statearr_26504_26526[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26490 === 14))
{var inst_26483 = (state_26489[2]);var state_26489__$1 = state_26489;var statearr_26505_26527 = state_26489__$1;(statearr_26505_26527[2] = inst_26483);
(statearr_26505_26527[1] = 7);
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
});})(c__15447__auto___26513))
;return ((function (switch__15432__auto__,c__15447__auto___26513){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26509 = [null,null,null,null,null,null,null,null];(statearr_26509[0] = state_machine__15433__auto__);
(statearr_26509[1] = 1);
return statearr_26509;
});
var state_machine__15433__auto____1 = (function (state_26489){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26489);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object))
{var ex__15436__auto__ = e26510;var statearr_26511_26528 = state_26489;(statearr_26511_26528[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26529 = state_26489;
state_26489 = G__26529;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26489){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___26513))
})();var state__15449__auto__ = (function (){var statearr_26512 = f__15448__auto__.call(null);(statearr_26512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___26513);
return statearr_26512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___26513))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15447__auto___26630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___26630,tc,fc){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___26630,tc,fc){
return (function (state_26605){var state_val_26606 = (state_26605[1]);if((state_val_26606 === 1))
{var state_26605__$1 = state_26605;var statearr_26607_26631 = state_26605__$1;(statearr_26607_26631[2] = null);
(statearr_26607_26631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 2))
{var state_26605__$1 = state_26605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,4,ch);
} else
{if((state_val_26606 === 3))
{var inst_26603 = (state_26605[2]);var state_26605__$1 = state_26605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else
{if((state_val_26606 === 4))
{var inst_26582 = (state_26605[7]);var inst_26582__$1 = (state_26605[2]);var inst_26583 = (inst_26582__$1 == null);var state_26605__$1 = (function (){var statearr_26608 = state_26605;(statearr_26608[7] = inst_26582__$1);
return statearr_26608;
})();if(cljs.core.truth_(inst_26583))
{var statearr_26609_26632 = state_26605__$1;(statearr_26609_26632[1] = 5);
} else
{var statearr_26610_26633 = state_26605__$1;(statearr_26610_26633[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 5))
{var inst_26585 = cljs.core.async.close_BANG_.call(null,tc);var inst_26586 = cljs.core.async.close_BANG_.call(null,fc);var state_26605__$1 = (function (){var statearr_26611 = state_26605;(statearr_26611[8] = inst_26585);
return statearr_26611;
})();var statearr_26612_26634 = state_26605__$1;(statearr_26612_26634[2] = inst_26586);
(statearr_26612_26634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 6))
{var inst_26582 = (state_26605[7]);var inst_26588 = p.call(null,inst_26582);var state_26605__$1 = state_26605;if(cljs.core.truth_(inst_26588))
{var statearr_26613_26635 = state_26605__$1;(statearr_26613_26635[1] = 9);
} else
{var statearr_26614_26636 = state_26605__$1;(statearr_26614_26636[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 7))
{var inst_26601 = (state_26605[2]);var state_26605__$1 = state_26605;var statearr_26615_26637 = state_26605__$1;(statearr_26615_26637[2] = inst_26601);
(statearr_26615_26637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 8))
{var inst_26594 = (state_26605[2]);var state_26605__$1 = state_26605;if(cljs.core.truth_(inst_26594))
{var statearr_26616_26638 = state_26605__$1;(statearr_26616_26638[1] = 12);
} else
{var statearr_26617_26639 = state_26605__$1;(statearr_26617_26639[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 9))
{var state_26605__$1 = state_26605;var statearr_26618_26640 = state_26605__$1;(statearr_26618_26640[2] = tc);
(statearr_26618_26640[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 10))
{var state_26605__$1 = state_26605;var statearr_26619_26641 = state_26605__$1;(statearr_26619_26641[2] = fc);
(statearr_26619_26641[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 11))
{var inst_26582 = (state_26605[7]);var inst_26592 = (state_26605[2]);var state_26605__$1 = state_26605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26605__$1,8,inst_26592,inst_26582);
} else
{if((state_val_26606 === 12))
{var state_26605__$1 = state_26605;var statearr_26620_26642 = state_26605__$1;(statearr_26620_26642[2] = null);
(statearr_26620_26642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 13))
{var state_26605__$1 = state_26605;var statearr_26621_26643 = state_26605__$1;(statearr_26621_26643[2] = null);
(statearr_26621_26643[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26606 === 14))
{var inst_26599 = (state_26605[2]);var state_26605__$1 = state_26605;var statearr_26622_26644 = state_26605__$1;(statearr_26622_26644[2] = inst_26599);
(statearr_26622_26644[1] = 7);
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
});})(c__15447__auto___26630,tc,fc))
;return ((function (switch__15432__auto__,c__15447__auto___26630,tc,fc){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26626 = [null,null,null,null,null,null,null,null,null];(statearr_26626[0] = state_machine__15433__auto__);
(statearr_26626[1] = 1);
return statearr_26626;
});
var state_machine__15433__auto____1 = (function (state_26605){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26605);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object))
{var ex__15436__auto__ = e26627;var statearr_26628_26645 = state_26605;(statearr_26628_26645[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26646 = state_26605;
state_26605 = G__26646;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___26630,tc,fc))
})();var state__15449__auto__ = (function (){var statearr_26629 = f__15448__auto__.call(null);(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___26630);
return statearr_26629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___26630,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_26693){var state_val_26694 = (state_26693[1]);if((state_val_26694 === 7))
{var inst_26689 = (state_26693[2]);var state_26693__$1 = state_26693;var statearr_26695_26711 = state_26693__$1;(statearr_26695_26711[2] = inst_26689);
(statearr_26695_26711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26694 === 6))
{var inst_26679 = (state_26693[7]);var inst_26682 = (state_26693[8]);var inst_26686 = f.call(null,inst_26679,inst_26682);var inst_26679__$1 = inst_26686;var state_26693__$1 = (function (){var statearr_26696 = state_26693;(statearr_26696[7] = inst_26679__$1);
return statearr_26696;
})();var statearr_26697_26712 = state_26693__$1;(statearr_26697_26712[2] = null);
(statearr_26697_26712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26694 === 5))
{var inst_26679 = (state_26693[7]);var state_26693__$1 = state_26693;var statearr_26698_26713 = state_26693__$1;(statearr_26698_26713[2] = inst_26679);
(statearr_26698_26713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26694 === 4))
{var inst_26682 = (state_26693[8]);var inst_26682__$1 = (state_26693[2]);var inst_26683 = (inst_26682__$1 == null);var state_26693__$1 = (function (){var statearr_26699 = state_26693;(statearr_26699[8] = inst_26682__$1);
return statearr_26699;
})();if(cljs.core.truth_(inst_26683))
{var statearr_26700_26714 = state_26693__$1;(statearr_26700_26714[1] = 5);
} else
{var statearr_26701_26715 = state_26693__$1;(statearr_26701_26715[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26694 === 3))
{var inst_26691 = (state_26693[2]);var state_26693__$1 = state_26693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26693__$1,inst_26691);
} else
{if((state_val_26694 === 2))
{var state_26693__$1 = state_26693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26693__$1,4,ch);
} else
{if((state_val_26694 === 1))
{var inst_26679 = init;var state_26693__$1 = (function (){var statearr_26702 = state_26693;(statearr_26702[7] = inst_26679);
return statearr_26702;
})();var statearr_26703_26716 = state_26693__$1;(statearr_26703_26716[2] = null);
(statearr_26703_26716[1] = 2);
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
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26707 = [null,null,null,null,null,null,null,null,null];(statearr_26707[0] = state_machine__15433__auto__);
(statearr_26707[1] = 1);
return statearr_26707;
});
var state_machine__15433__auto____1 = (function (state_26693){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26693);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26708){if((e26708 instanceof Object))
{var ex__15436__auto__ = e26708;var statearr_26709_26717 = state_26693;(statearr_26709_26717[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26718 = state_26693;
state_26693 = G__26718;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26693){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_26710 = f__15448__auto__.call(null);(statearr_26710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_26710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15447__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto__){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto__){
return (function (state_26792){var state_val_26793 = (state_26792[1]);if((state_val_26793 === 1))
{var inst_26768 = cljs.core.seq.call(null,coll);var inst_26769 = inst_26768;var state_26792__$1 = (function (){var statearr_26794 = state_26792;(statearr_26794[7] = inst_26769);
return statearr_26794;
})();var statearr_26795_26817 = state_26792__$1;(statearr_26795_26817[2] = null);
(statearr_26795_26817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 2))
{var inst_26769 = (state_26792[7]);var state_26792__$1 = state_26792;if(cljs.core.truth_(inst_26769))
{var statearr_26796_26818 = state_26792__$1;(statearr_26796_26818[1] = 4);
} else
{var statearr_26797_26819 = state_26792__$1;(statearr_26797_26819[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 3))
{var inst_26790 = (state_26792[2]);var state_26792__$1 = state_26792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26792__$1,inst_26790);
} else
{if((state_val_26793 === 4))
{var inst_26769 = (state_26792[7]);var inst_26772 = cljs.core.first.call(null,inst_26769);var state_26792__$1 = state_26792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26792__$1,7,ch,inst_26772);
} else
{if((state_val_26793 === 5))
{var inst_26769 = (state_26792[7]);var state_26792__$1 = state_26792;var statearr_26798_26820 = state_26792__$1;(statearr_26798_26820[2] = inst_26769);
(statearr_26798_26820[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 6))
{var inst_26777 = (state_26792[2]);var state_26792__$1 = state_26792;if(cljs.core.truth_(inst_26777))
{var statearr_26799_26821 = state_26792__$1;(statearr_26799_26821[1] = 8);
} else
{var statearr_26800_26822 = state_26792__$1;(statearr_26800_26822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 7))
{var inst_26774 = (state_26792[2]);var state_26792__$1 = state_26792;var statearr_26801_26823 = state_26792__$1;(statearr_26801_26823[2] = inst_26774);
(statearr_26801_26823[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 8))
{var inst_26769 = (state_26792[7]);var inst_26779 = cljs.core.next.call(null,inst_26769);var inst_26769__$1 = inst_26779;var state_26792__$1 = (function (){var statearr_26802 = state_26792;(statearr_26802[7] = inst_26769__$1);
return statearr_26802;
})();var statearr_26803_26824 = state_26792__$1;(statearr_26803_26824[2] = null);
(statearr_26803_26824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 9))
{var state_26792__$1 = state_26792;if(cljs.core.truth_(close_QMARK_))
{var statearr_26804_26825 = state_26792__$1;(statearr_26804_26825[1] = 11);
} else
{var statearr_26805_26826 = state_26792__$1;(statearr_26805_26826[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 10))
{var inst_26788 = (state_26792[2]);var state_26792__$1 = state_26792;var statearr_26806_26827 = state_26792__$1;(statearr_26806_26827[2] = inst_26788);
(statearr_26806_26827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 11))
{var inst_26783 = cljs.core.async.close_BANG_.call(null,ch);var state_26792__$1 = state_26792;var statearr_26807_26828 = state_26792__$1;(statearr_26807_26828[2] = inst_26783);
(statearr_26807_26828[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 12))
{var state_26792__$1 = state_26792;var statearr_26808_26829 = state_26792__$1;(statearr_26808_26829[2] = null);
(statearr_26808_26829[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26793 === 13))
{var inst_26786 = (state_26792[2]);var state_26792__$1 = state_26792;var statearr_26809_26830 = state_26792__$1;(statearr_26809_26830[2] = inst_26786);
(statearr_26809_26830[1] = 10);
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
});})(c__15447__auto__))
;return ((function (switch__15432__auto__,c__15447__auto__){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_26813 = [null,null,null,null,null,null,null,null];(statearr_26813[0] = state_machine__15433__auto__);
(statearr_26813[1] = 1);
return statearr_26813;
});
var state_machine__15433__auto____1 = (function (state_26792){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_26792);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e26814){if((e26814 instanceof Object))
{var ex__15436__auto__ = e26814;var statearr_26815_26831 = state_26792;(statearr_26815_26831[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26832 = state_26792;
state_26792 = G__26832;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_26792){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_26792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto__))
})();var state__15449__auto__ = (function (){var statearr_26816 = f__15448__auto__.call(null);(statearr_26816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto__);
return statearr_26816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto__))
);
return c__15447__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26834 = {};return obj26834;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12088__auto__ = _;if(and__12088__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12088__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12727__auto__ = (((_ == null))?null:_);return (function (){var or__12100__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26836 = {};return obj26836;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27058 = (function (cs,ch,mult,meta27059){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27059 = meta27059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27058.cljs$lang$type = true;
cljs.core.async.t27058.cljs$lang$ctorStr = "cljs.core.async/t27058";
cljs.core.async.t27058.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t27058");
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27058.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27060){var self__ = this;
var _27060__$1 = this;return self__.meta27059;
});})(cs))
;
cljs.core.async.t27058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27060,meta27059__$1){var self__ = this;
var _27060__$1 = this;return (new cljs.core.async.t27058(self__.cs,self__.ch,self__.mult,meta27059__$1));
});})(cs))
;
cljs.core.async.__GT_t27058 = ((function (cs){
return (function __GT_t27058(cs__$1,ch__$1,mult__$1,meta27059){return (new cljs.core.async.t27058(cs__$1,ch__$1,mult__$1,meta27059));
});})(cs))
;
}
return (new cljs.core.async.t27058(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15447__auto___27279 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___27279,cs,m,dchan,dctr,done){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___27279,cs,m,dchan,dctr,done){
return (function (state_27191){var state_val_27192 = (state_27191[1]);if((state_val_27192 === 32))
{var inst_27134 = (state_27191[7]);var inst_27131 = (state_27191[8]);var inst_27133 = (state_27191[9]);var inst_27132 = (state_27191[10]);var inst_27146 = (state_27191[2]);var inst_27147 = (inst_27134 + 1);var tmp27193 = inst_27131;var tmp27194 = inst_27133;var tmp27195 = inst_27132;var inst_27131__$1 = tmp27193;var inst_27132__$1 = tmp27195;var inst_27133__$1 = tmp27194;var inst_27134__$1 = inst_27147;var state_27191__$1 = (function (){var statearr_27196 = state_27191;(statearr_27196[7] = inst_27134__$1);
(statearr_27196[8] = inst_27131__$1);
(statearr_27196[9] = inst_27133__$1);
(statearr_27196[10] = inst_27132__$1);
(statearr_27196[11] = inst_27146);
return statearr_27196;
})();var statearr_27197_27280 = state_27191__$1;(statearr_27197_27280[2] = null);
(statearr_27197_27280[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 1))
{var state_27191__$1 = state_27191;var statearr_27198_27281 = state_27191__$1;(statearr_27198_27281[2] = null);
(statearr_27198_27281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 33))
{var inst_27150 = (state_27191[12]);var inst_27152 = cljs.core.chunked_seq_QMARK_.call(null,inst_27150);var state_27191__$1 = state_27191;if(inst_27152)
{var statearr_27199_27282 = state_27191__$1;(statearr_27199_27282[1] = 36);
} else
{var statearr_27200_27283 = state_27191__$1;(statearr_27200_27283[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 2))
{var state_27191__$1 = state_27191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27191__$1,4,ch);
} else
{if((state_val_27192 === 34))
{var state_27191__$1 = state_27191;var statearr_27201_27284 = state_27191__$1;(statearr_27201_27284[2] = null);
(statearr_27201_27284[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 3))
{var inst_27189 = (state_27191[2]);var state_27191__$1 = state_27191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27191__$1,inst_27189);
} else
{if((state_val_27192 === 35))
{var inst_27173 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27202_27285 = state_27191__$1;(statearr_27202_27285[2] = inst_27173);
(statearr_27202_27285[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 4))
{var inst_27063 = (state_27191[13]);var inst_27063__$1 = (state_27191[2]);var inst_27064 = (inst_27063__$1 == null);var state_27191__$1 = (function (){var statearr_27203 = state_27191;(statearr_27203[13] = inst_27063__$1);
return statearr_27203;
})();if(cljs.core.truth_(inst_27064))
{var statearr_27204_27286 = state_27191__$1;(statearr_27204_27286[1] = 5);
} else
{var statearr_27205_27287 = state_27191__$1;(statearr_27205_27287[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 36))
{var inst_27150 = (state_27191[12]);var inst_27154 = cljs.core.chunk_first.call(null,inst_27150);var inst_27155 = cljs.core.chunk_rest.call(null,inst_27150);var inst_27156 = cljs.core.count.call(null,inst_27154);var inst_27131 = inst_27155;var inst_27132 = inst_27154;var inst_27133 = inst_27156;var inst_27134 = 0;var state_27191__$1 = (function (){var statearr_27206 = state_27191;(statearr_27206[7] = inst_27134);
(statearr_27206[8] = inst_27131);
(statearr_27206[9] = inst_27133);
(statearr_27206[10] = inst_27132);
return statearr_27206;
})();var statearr_27207_27288 = state_27191__$1;(statearr_27207_27288[2] = null);
(statearr_27207_27288[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 5))
{var inst_27070 = cljs.core.deref.call(null,cs);var inst_27071 = cljs.core.seq.call(null,inst_27070);var inst_27072 = inst_27071;var inst_27073 = null;var inst_27074 = 0;var inst_27075 = 0;var state_27191__$1 = (function (){var statearr_27208 = state_27191;(statearr_27208[14] = inst_27075);
(statearr_27208[15] = inst_27072);
(statearr_27208[16] = inst_27073);
(statearr_27208[17] = inst_27074);
return statearr_27208;
})();var statearr_27209_27289 = state_27191__$1;(statearr_27209_27289[2] = null);
(statearr_27209_27289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 37))
{var inst_27159 = (state_27191[18]);var inst_27063 = (state_27191[13]);var inst_27150 = (state_27191[12]);var inst_27159__$1 = cljs.core.first.call(null,inst_27150);var inst_27160 = cljs.core.async.put_BANG_.call(null,inst_27159__$1,inst_27063,done);var state_27191__$1 = (function (){var statearr_27210 = state_27191;(statearr_27210[18] = inst_27159__$1);
return statearr_27210;
})();if(cljs.core.truth_(inst_27160))
{var statearr_27211_27290 = state_27191__$1;(statearr_27211_27290[1] = 39);
} else
{var statearr_27212_27291 = state_27191__$1;(statearr_27212_27291[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 6))
{var inst_27123 = (state_27191[19]);var inst_27122 = cljs.core.deref.call(null,cs);var inst_27123__$1 = cljs.core.keys.call(null,inst_27122);var inst_27124 = cljs.core.count.call(null,inst_27123__$1);var inst_27125 = cljs.core.reset_BANG_.call(null,dctr,inst_27124);var inst_27130 = cljs.core.seq.call(null,inst_27123__$1);var inst_27131 = inst_27130;var inst_27132 = null;var inst_27133 = 0;var inst_27134 = 0;var state_27191__$1 = (function (){var statearr_27213 = state_27191;(statearr_27213[20] = inst_27125);
(statearr_27213[19] = inst_27123__$1);
(statearr_27213[7] = inst_27134);
(statearr_27213[8] = inst_27131);
(statearr_27213[9] = inst_27133);
(statearr_27213[10] = inst_27132);
return statearr_27213;
})();var statearr_27214_27292 = state_27191__$1;(statearr_27214_27292[2] = null);
(statearr_27214_27292[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 38))
{var inst_27170 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27215_27293 = state_27191__$1;(statearr_27215_27293[2] = inst_27170);
(statearr_27215_27293[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 7))
{var inst_27187 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27216_27294 = state_27191__$1;(statearr_27216_27294[2] = inst_27187);
(statearr_27216_27294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 39))
{var state_27191__$1 = state_27191;var statearr_27217_27295 = state_27191__$1;(statearr_27217_27295[2] = null);
(statearr_27217_27295[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 8))
{var inst_27075 = (state_27191[14]);var inst_27074 = (state_27191[17]);var inst_27077 = (inst_27075 < inst_27074);var inst_27078 = inst_27077;var state_27191__$1 = state_27191;if(cljs.core.truth_(inst_27078))
{var statearr_27218_27296 = state_27191__$1;(statearr_27218_27296[1] = 10);
} else
{var statearr_27219_27297 = state_27191__$1;(statearr_27219_27297[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 40))
{var inst_27159 = (state_27191[18]);var inst_27163 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27164 = cljs.core.async.untap_STAR_.call(null,m,inst_27159);var state_27191__$1 = (function (){var statearr_27220 = state_27191;(statearr_27220[21] = inst_27163);
return statearr_27220;
})();var statearr_27221_27298 = state_27191__$1;(statearr_27221_27298[2] = inst_27164);
(statearr_27221_27298[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 9))
{var inst_27120 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27222_27299 = state_27191__$1;(statearr_27222_27299[2] = inst_27120);
(statearr_27222_27299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 41))
{var inst_27150 = (state_27191[12]);var inst_27166 = (state_27191[2]);var inst_27167 = cljs.core.next.call(null,inst_27150);var inst_27131 = inst_27167;var inst_27132 = null;var inst_27133 = 0;var inst_27134 = 0;var state_27191__$1 = (function (){var statearr_27223 = state_27191;(statearr_27223[22] = inst_27166);
(statearr_27223[7] = inst_27134);
(statearr_27223[8] = inst_27131);
(statearr_27223[9] = inst_27133);
(statearr_27223[10] = inst_27132);
return statearr_27223;
})();var statearr_27224_27300 = state_27191__$1;(statearr_27224_27300[2] = null);
(statearr_27224_27300[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 10))
{var inst_27075 = (state_27191[14]);var inst_27073 = (state_27191[16]);var inst_27081 = cljs.core._nth.call(null,inst_27073,inst_27075);var inst_27082 = cljs.core.nth.call(null,inst_27081,0,null);var inst_27083 = cljs.core.nth.call(null,inst_27081,1,null);var state_27191__$1 = (function (){var statearr_27225 = state_27191;(statearr_27225[23] = inst_27082);
return statearr_27225;
})();if(cljs.core.truth_(inst_27083))
{var statearr_27226_27301 = state_27191__$1;(statearr_27226_27301[1] = 13);
} else
{var statearr_27227_27302 = state_27191__$1;(statearr_27227_27302[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 42))
{var state_27191__$1 = state_27191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27191__$1,45,dchan);
} else
{if((state_val_27192 === 11))
{var inst_27092 = (state_27191[24]);var inst_27072 = (state_27191[15]);var inst_27092__$1 = cljs.core.seq.call(null,inst_27072);var state_27191__$1 = (function (){var statearr_27228 = state_27191;(statearr_27228[24] = inst_27092__$1);
return statearr_27228;
})();if(inst_27092__$1)
{var statearr_27229_27303 = state_27191__$1;(statearr_27229_27303[1] = 16);
} else
{var statearr_27230_27304 = state_27191__$1;(statearr_27230_27304[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 43))
{var state_27191__$1 = state_27191;var statearr_27231_27305 = state_27191__$1;(statearr_27231_27305[2] = null);
(statearr_27231_27305[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 12))
{var inst_27118 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27232_27306 = state_27191__$1;(statearr_27232_27306[2] = inst_27118);
(statearr_27232_27306[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 44))
{var inst_27184 = (state_27191[2]);var state_27191__$1 = (function (){var statearr_27233 = state_27191;(statearr_27233[25] = inst_27184);
return statearr_27233;
})();var statearr_27234_27307 = state_27191__$1;(statearr_27234_27307[2] = null);
(statearr_27234_27307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 13))
{var inst_27082 = (state_27191[23]);var inst_27085 = cljs.core.async.close_BANG_.call(null,inst_27082);var state_27191__$1 = state_27191;var statearr_27235_27308 = state_27191__$1;(statearr_27235_27308[2] = inst_27085);
(statearr_27235_27308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 45))
{var inst_27181 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27239_27309 = state_27191__$1;(statearr_27239_27309[2] = inst_27181);
(statearr_27239_27309[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 14))
{var state_27191__$1 = state_27191;var statearr_27240_27310 = state_27191__$1;(statearr_27240_27310[2] = null);
(statearr_27240_27310[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 15))
{var inst_27075 = (state_27191[14]);var inst_27072 = (state_27191[15]);var inst_27073 = (state_27191[16]);var inst_27074 = (state_27191[17]);var inst_27088 = (state_27191[2]);var inst_27089 = (inst_27075 + 1);var tmp27236 = inst_27072;var tmp27237 = inst_27073;var tmp27238 = inst_27074;var inst_27072__$1 = tmp27236;var inst_27073__$1 = tmp27237;var inst_27074__$1 = tmp27238;var inst_27075__$1 = inst_27089;var state_27191__$1 = (function (){var statearr_27241 = state_27191;(statearr_27241[14] = inst_27075__$1);
(statearr_27241[26] = inst_27088);
(statearr_27241[15] = inst_27072__$1);
(statearr_27241[16] = inst_27073__$1);
(statearr_27241[17] = inst_27074__$1);
return statearr_27241;
})();var statearr_27242_27311 = state_27191__$1;(statearr_27242_27311[2] = null);
(statearr_27242_27311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 16))
{var inst_27092 = (state_27191[24]);var inst_27094 = cljs.core.chunked_seq_QMARK_.call(null,inst_27092);var state_27191__$1 = state_27191;if(inst_27094)
{var statearr_27243_27312 = state_27191__$1;(statearr_27243_27312[1] = 19);
} else
{var statearr_27244_27313 = state_27191__$1;(statearr_27244_27313[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 17))
{var state_27191__$1 = state_27191;var statearr_27245_27314 = state_27191__$1;(statearr_27245_27314[2] = null);
(statearr_27245_27314[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 18))
{var inst_27116 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27246_27315 = state_27191__$1;(statearr_27246_27315[2] = inst_27116);
(statearr_27246_27315[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 19))
{var inst_27092 = (state_27191[24]);var inst_27096 = cljs.core.chunk_first.call(null,inst_27092);var inst_27097 = cljs.core.chunk_rest.call(null,inst_27092);var inst_27098 = cljs.core.count.call(null,inst_27096);var inst_27072 = inst_27097;var inst_27073 = inst_27096;var inst_27074 = inst_27098;var inst_27075 = 0;var state_27191__$1 = (function (){var statearr_27247 = state_27191;(statearr_27247[14] = inst_27075);
(statearr_27247[15] = inst_27072);
(statearr_27247[16] = inst_27073);
(statearr_27247[17] = inst_27074);
return statearr_27247;
})();var statearr_27248_27316 = state_27191__$1;(statearr_27248_27316[2] = null);
(statearr_27248_27316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 20))
{var inst_27092 = (state_27191[24]);var inst_27102 = cljs.core.first.call(null,inst_27092);var inst_27103 = cljs.core.nth.call(null,inst_27102,0,null);var inst_27104 = cljs.core.nth.call(null,inst_27102,1,null);var state_27191__$1 = (function (){var statearr_27249 = state_27191;(statearr_27249[27] = inst_27103);
return statearr_27249;
})();if(cljs.core.truth_(inst_27104))
{var statearr_27250_27317 = state_27191__$1;(statearr_27250_27317[1] = 22);
} else
{var statearr_27251_27318 = state_27191__$1;(statearr_27251_27318[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 21))
{var inst_27113 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27252_27319 = state_27191__$1;(statearr_27252_27319[2] = inst_27113);
(statearr_27252_27319[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 22))
{var inst_27103 = (state_27191[27]);var inst_27106 = cljs.core.async.close_BANG_.call(null,inst_27103);var state_27191__$1 = state_27191;var statearr_27253_27320 = state_27191__$1;(statearr_27253_27320[2] = inst_27106);
(statearr_27253_27320[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 23))
{var state_27191__$1 = state_27191;var statearr_27254_27321 = state_27191__$1;(statearr_27254_27321[2] = null);
(statearr_27254_27321[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 24))
{var inst_27092 = (state_27191[24]);var inst_27109 = (state_27191[2]);var inst_27110 = cljs.core.next.call(null,inst_27092);var inst_27072 = inst_27110;var inst_27073 = null;var inst_27074 = 0;var inst_27075 = 0;var state_27191__$1 = (function (){var statearr_27255 = state_27191;(statearr_27255[14] = inst_27075);
(statearr_27255[28] = inst_27109);
(statearr_27255[15] = inst_27072);
(statearr_27255[16] = inst_27073);
(statearr_27255[17] = inst_27074);
return statearr_27255;
})();var statearr_27256_27322 = state_27191__$1;(statearr_27256_27322[2] = null);
(statearr_27256_27322[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 25))
{var inst_27134 = (state_27191[7]);var inst_27133 = (state_27191[9]);var inst_27136 = (inst_27134 < inst_27133);var inst_27137 = inst_27136;var state_27191__$1 = state_27191;if(cljs.core.truth_(inst_27137))
{var statearr_27257_27323 = state_27191__$1;(statearr_27257_27323[1] = 27);
} else
{var statearr_27258_27324 = state_27191__$1;(statearr_27258_27324[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 26))
{var inst_27123 = (state_27191[19]);var inst_27177 = (state_27191[2]);var inst_27178 = cljs.core.seq.call(null,inst_27123);var state_27191__$1 = (function (){var statearr_27259 = state_27191;(statearr_27259[29] = inst_27177);
return statearr_27259;
})();if(inst_27178)
{var statearr_27260_27325 = state_27191__$1;(statearr_27260_27325[1] = 42);
} else
{var statearr_27261_27326 = state_27191__$1;(statearr_27261_27326[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 27))
{var inst_27063 = (state_27191[13]);var inst_27134 = (state_27191[7]);var inst_27132 = (state_27191[10]);var inst_27139 = (state_27191[30]);var inst_27139__$1 = cljs.core._nth.call(null,inst_27132,inst_27134);var inst_27140 = cljs.core.async.put_BANG_.call(null,inst_27139__$1,inst_27063,done);var state_27191__$1 = (function (){var statearr_27262 = state_27191;(statearr_27262[30] = inst_27139__$1);
return statearr_27262;
})();if(cljs.core.truth_(inst_27140))
{var statearr_27263_27327 = state_27191__$1;(statearr_27263_27327[1] = 30);
} else
{var statearr_27264_27328 = state_27191__$1;(statearr_27264_27328[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 28))
{var inst_27131 = (state_27191[8]);var inst_27150 = (state_27191[12]);var inst_27150__$1 = cljs.core.seq.call(null,inst_27131);var state_27191__$1 = (function (){var statearr_27265 = state_27191;(statearr_27265[12] = inst_27150__$1);
return statearr_27265;
})();if(inst_27150__$1)
{var statearr_27266_27329 = state_27191__$1;(statearr_27266_27329[1] = 33);
} else
{var statearr_27267_27330 = state_27191__$1;(statearr_27267_27330[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 29))
{var inst_27175 = (state_27191[2]);var state_27191__$1 = state_27191;var statearr_27268_27331 = state_27191__$1;(statearr_27268_27331[2] = inst_27175);
(statearr_27268_27331[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 30))
{var state_27191__$1 = state_27191;var statearr_27269_27332 = state_27191__$1;(statearr_27269_27332[2] = null);
(statearr_27269_27332[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27192 === 31))
{var inst_27139 = (state_27191[30]);var inst_27143 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27144 = cljs.core.async.untap_STAR_.call(null,m,inst_27139);var state_27191__$1 = (function (){var statearr_27270 = state_27191;(statearr_27270[31] = inst_27143);
return statearr_27270;
})();var statearr_27271_27333 = state_27191__$1;(statearr_27271_27333[2] = inst_27144);
(statearr_27271_27333[1] = 32);
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
});})(c__15447__auto___27279,cs,m,dchan,dctr,done))
;return ((function (switch__15432__auto__,c__15447__auto___27279,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_27275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27275[0] = state_machine__15433__auto__);
(statearr_27275[1] = 1);
return statearr_27275;
});
var state_machine__15433__auto____1 = (function (state_27191){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_27191);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object))
{var ex__15436__auto__ = e27276;var statearr_27277_27334 = state_27191;(statearr_27277_27334[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27335 = state_27191;
state_27191 = G__27335;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_27191){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_27191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___27279,cs,m,dchan,dctr,done))
})();var state__15449__auto__ = (function (){var statearr_27278 = f__15448__auto__.call(null);(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___27279);
return statearr_27278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___27279,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj27337 = {};return obj27337;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12088__auto__ = m;if(and__12088__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12727__auto__ = (((m == null))?null:m);return (function (){var or__12100__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27457 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27458){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta27458 = meta27458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27457.cljs$lang$type = true;
cljs.core.async.t27457.cljs$lang$ctorStr = "cljs.core.async/t27457";
cljs.core.async.t27457.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t27457");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27459){var self__ = this;
var _27459__$1 = this;return self__.meta27458;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27459,meta27458__$1){var self__ = this;
var _27459__$1 = this;return (new cljs.core.async.t27457(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27458__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27457 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27457(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27458){return (new cljs.core.async.t27457(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27458));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27457(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__15447__auto___27576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27529){var state_val_27530 = (state_27529[1]);if((state_val_27530 === 1))
{var inst_27463 = (state_27529[7]);var inst_27463__$1 = calc_state.call(null);var inst_27464 = cljs.core.seq_QMARK_.call(null,inst_27463__$1);var state_27529__$1 = (function (){var statearr_27531 = state_27529;(statearr_27531[7] = inst_27463__$1);
return statearr_27531;
})();if(inst_27464)
{var statearr_27532_27577 = state_27529__$1;(statearr_27532_27577[1] = 2);
} else
{var statearr_27533_27578 = state_27529__$1;(statearr_27533_27578[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 2))
{var inst_27463 = (state_27529[7]);var inst_27466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27463);var state_27529__$1 = state_27529;var statearr_27534_27579 = state_27529__$1;(statearr_27534_27579[2] = inst_27466);
(statearr_27534_27579[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 3))
{var inst_27463 = (state_27529[7]);var state_27529__$1 = state_27529;var statearr_27535_27580 = state_27529__$1;(statearr_27535_27580[2] = inst_27463);
(statearr_27535_27580[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 4))
{var inst_27463 = (state_27529[7]);var inst_27469 = (state_27529[2]);var inst_27470 = cljs.core.get.call(null,inst_27469,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27471 = cljs.core.get.call(null,inst_27469,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27472 = cljs.core.get.call(null,inst_27469,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27473 = inst_27463;var state_27529__$1 = (function (){var statearr_27536 = state_27529;(statearr_27536[8] = inst_27472);
(statearr_27536[9] = inst_27471);
(statearr_27536[10] = inst_27473);
(statearr_27536[11] = inst_27470);
return statearr_27536;
})();var statearr_27537_27581 = state_27529__$1;(statearr_27537_27581[2] = null);
(statearr_27537_27581[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 5))
{var inst_27473 = (state_27529[10]);var inst_27476 = cljs.core.seq_QMARK_.call(null,inst_27473);var state_27529__$1 = state_27529;if(inst_27476)
{var statearr_27538_27582 = state_27529__$1;(statearr_27538_27582[1] = 7);
} else
{var statearr_27539_27583 = state_27529__$1;(statearr_27539_27583[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 6))
{var inst_27527 = (state_27529[2]);var state_27529__$1 = state_27529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27529__$1,inst_27527);
} else
{if((state_val_27530 === 7))
{var inst_27473 = (state_27529[10]);var inst_27478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27473);var state_27529__$1 = state_27529;var statearr_27540_27584 = state_27529__$1;(statearr_27540_27584[2] = inst_27478);
(statearr_27540_27584[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 8))
{var inst_27473 = (state_27529[10]);var state_27529__$1 = state_27529;var statearr_27541_27585 = state_27529__$1;(statearr_27541_27585[2] = inst_27473);
(statearr_27541_27585[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 9))
{var inst_27481 = (state_27529[12]);var inst_27481__$1 = (state_27529[2]);var inst_27482 = cljs.core.get.call(null,inst_27481__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27483 = cljs.core.get.call(null,inst_27481__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27484 = cljs.core.get.call(null,inst_27481__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27529__$1 = (function (){var statearr_27542 = state_27529;(statearr_27542[13] = inst_27483);
(statearr_27542[14] = inst_27484);
(statearr_27542[12] = inst_27481__$1);
return statearr_27542;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27529__$1,10,inst_27482);
} else
{if((state_val_27530 === 10))
{var inst_27488 = (state_27529[15]);var inst_27489 = (state_27529[16]);var inst_27487 = (state_27529[2]);var inst_27488__$1 = cljs.core.nth.call(null,inst_27487,0,null);var inst_27489__$1 = cljs.core.nth.call(null,inst_27487,1,null);var inst_27490 = (inst_27488__$1 == null);var inst_27491 = cljs.core._EQ_.call(null,inst_27489__$1,change);var inst_27492 = (inst_27490) || (inst_27491);var state_27529__$1 = (function (){var statearr_27543 = state_27529;(statearr_27543[15] = inst_27488__$1);
(statearr_27543[16] = inst_27489__$1);
return statearr_27543;
})();if(cljs.core.truth_(inst_27492))
{var statearr_27544_27586 = state_27529__$1;(statearr_27544_27586[1] = 11);
} else
{var statearr_27545_27587 = state_27529__$1;(statearr_27545_27587[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 11))
{var inst_27488 = (state_27529[15]);var inst_27494 = (inst_27488 == null);var state_27529__$1 = state_27529;if(cljs.core.truth_(inst_27494))
{var statearr_27546_27588 = state_27529__$1;(statearr_27546_27588[1] = 14);
} else
{var statearr_27547_27589 = state_27529__$1;(statearr_27547_27589[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 12))
{var inst_27489 = (state_27529[16]);var inst_27484 = (state_27529[14]);var inst_27503 = (state_27529[17]);var inst_27503__$1 = inst_27484.call(null,inst_27489);var state_27529__$1 = (function (){var statearr_27548 = state_27529;(statearr_27548[17] = inst_27503__$1);
return statearr_27548;
})();if(cljs.core.truth_(inst_27503__$1))
{var statearr_27549_27590 = state_27529__$1;(statearr_27549_27590[1] = 17);
} else
{var statearr_27550_27591 = state_27529__$1;(statearr_27550_27591[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 13))
{var inst_27525 = (state_27529[2]);var state_27529__$1 = state_27529;var statearr_27551_27592 = state_27529__$1;(statearr_27551_27592[2] = inst_27525);
(statearr_27551_27592[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 14))
{var inst_27489 = (state_27529[16]);var inst_27496 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27489);var state_27529__$1 = state_27529;var statearr_27552_27593 = state_27529__$1;(statearr_27552_27593[2] = inst_27496);
(statearr_27552_27593[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 15))
{var state_27529__$1 = state_27529;var statearr_27553_27594 = state_27529__$1;(statearr_27553_27594[2] = null);
(statearr_27553_27594[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 16))
{var inst_27499 = (state_27529[2]);var inst_27500 = calc_state.call(null);var inst_27473 = inst_27500;var state_27529__$1 = (function (){var statearr_27554 = state_27529;(statearr_27554[10] = inst_27473);
(statearr_27554[18] = inst_27499);
return statearr_27554;
})();var statearr_27555_27595 = state_27529__$1;(statearr_27555_27595[2] = null);
(statearr_27555_27595[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 17))
{var inst_27503 = (state_27529[17]);var state_27529__$1 = state_27529;var statearr_27556_27596 = state_27529__$1;(statearr_27556_27596[2] = inst_27503);
(statearr_27556_27596[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 18))
{var inst_27489 = (state_27529[16]);var inst_27483 = (state_27529[13]);var inst_27484 = (state_27529[14]);var inst_27506 = cljs.core.empty_QMARK_.call(null,inst_27484);var inst_27507 = inst_27483.call(null,inst_27489);var inst_27508 = cljs.core.not.call(null,inst_27507);var inst_27509 = (inst_27506) && (inst_27508);var state_27529__$1 = state_27529;var statearr_27557_27597 = state_27529__$1;(statearr_27557_27597[2] = inst_27509);
(statearr_27557_27597[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 19))
{var inst_27511 = (state_27529[2]);var state_27529__$1 = state_27529;if(cljs.core.truth_(inst_27511))
{var statearr_27558_27598 = state_27529__$1;(statearr_27558_27598[1] = 20);
} else
{var statearr_27559_27599 = state_27529__$1;(statearr_27559_27599[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 20))
{var inst_27488 = (state_27529[15]);var state_27529__$1 = state_27529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27529__$1,23,out,inst_27488);
} else
{if((state_val_27530 === 21))
{var inst_27481 = (state_27529[12]);var inst_27473 = inst_27481;var state_27529__$1 = (function (){var statearr_27560 = state_27529;(statearr_27560[10] = inst_27473);
return statearr_27560;
})();var statearr_27561_27600 = state_27529__$1;(statearr_27561_27600[2] = null);
(statearr_27561_27600[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 22))
{var inst_27523 = (state_27529[2]);var state_27529__$1 = state_27529;var statearr_27562_27601 = state_27529__$1;(statearr_27562_27601[2] = inst_27523);
(statearr_27562_27601[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 23))
{var inst_27514 = (state_27529[2]);var state_27529__$1 = state_27529;if(cljs.core.truth_(inst_27514))
{var statearr_27563_27602 = state_27529__$1;(statearr_27563_27602[1] = 24);
} else
{var statearr_27564_27603 = state_27529__$1;(statearr_27564_27603[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 24))
{var inst_27481 = (state_27529[12]);var inst_27473 = inst_27481;var state_27529__$1 = (function (){var statearr_27565 = state_27529;(statearr_27565[10] = inst_27473);
return statearr_27565;
})();var statearr_27566_27604 = state_27529__$1;(statearr_27566_27604[2] = null);
(statearr_27566_27604[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 25))
{var state_27529__$1 = state_27529;var statearr_27567_27605 = state_27529__$1;(statearr_27567_27605[2] = null);
(statearr_27567_27605[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27530 === 26))
{var inst_27519 = (state_27529[2]);var state_27529__$1 = state_27529;var statearr_27568_27606 = state_27529__$1;(statearr_27568_27606[2] = inst_27519);
(statearr_27568_27606[1] = 22);
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
});})(c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15432__auto__,c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_27572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27572[0] = state_machine__15433__auto__);
(statearr_27572[1] = 1);
return statearr_27572;
});
var state_machine__15433__auto____1 = (function (state_27529){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_27529);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e27573){if((e27573 instanceof Object))
{var ex__15436__auto__ = e27573;var statearr_27574_27607 = state_27529;(statearr_27574_27607[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27608 = state_27529;
state_27529 = G__27608;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_27529){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_27529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15449__auto__ = (function (){var statearr_27575 = f__15448__auto__.call(null);(statearr_27575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___27576);
return statearr_27575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___27576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27610 = {};return obj27610;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12088__auto__ = p;if(and__12088__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12088__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12727__auto__ = (((p == null))?null:p);return (function (){var or__12100__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12088__auto__ = p;if(and__12088__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12088__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12727__auto__ = (((p == null))?null:p);return (function (){var or__12100__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12088__auto__ = p;if(and__12088__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12088__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12727__auto__ = (((p == null))?null:p);return (function (){var or__12100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12088__auto__ = p;if(and__12088__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12088__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12727__auto__ = (((p == null))?null:p);return (function (){var or__12100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12727__auto__)]);if(or__12100__auto__)
{return or__12100__auto__;
} else
{var or__12100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12100__auto____$1)
{return or__12100__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__12100__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12100__auto__))
{return or__12100__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12100__auto__,mults){
return (function (p1__27611_SHARP_){if(cljs.core.truth_(p1__27611_SHARP_.call(null,topic)))
{return p1__27611_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27611_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12100__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27734 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27735){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27735 = meta27735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27734.cljs$lang$type = true;
cljs.core.async.t27734.cljs$lang$ctorStr = "cljs.core.async/t27734";
cljs.core.async.t27734.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12667__auto__,writer__12668__auto__,opt__12669__auto__){return cljs.core._write.call(null,writer__12668__auto__,"cljs.core.async/t27734");
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27734.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27736){var self__ = this;
var _27736__$1 = this;return self__.meta27735;
});})(mults,ensure_mult))
;
cljs.core.async.t27734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27736,meta27735__$1){var self__ = this;
var _27736__$1 = this;return (new cljs.core.async.t27734(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27735__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27734 = ((function (mults,ensure_mult){
return (function __GT_t27734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27735){return (new cljs.core.async.t27734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27735));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27734(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15447__auto___27856 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___27856,mults,ensure_mult,p){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___27856,mults,ensure_mult,p){
return (function (state_27808){var state_val_27809 = (state_27808[1]);if((state_val_27809 === 1))
{var state_27808__$1 = state_27808;var statearr_27810_27857 = state_27808__$1;(statearr_27810_27857[2] = null);
(statearr_27810_27857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 2))
{var state_27808__$1 = state_27808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27808__$1,4,ch);
} else
{if((state_val_27809 === 3))
{var inst_27806 = (state_27808[2]);var state_27808__$1 = state_27808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27808__$1,inst_27806);
} else
{if((state_val_27809 === 4))
{var inst_27739 = (state_27808[7]);var inst_27739__$1 = (state_27808[2]);var inst_27740 = (inst_27739__$1 == null);var state_27808__$1 = (function (){var statearr_27811 = state_27808;(statearr_27811[7] = inst_27739__$1);
return statearr_27811;
})();if(cljs.core.truth_(inst_27740))
{var statearr_27812_27858 = state_27808__$1;(statearr_27812_27858[1] = 5);
} else
{var statearr_27813_27859 = state_27808__$1;(statearr_27813_27859[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 5))
{var inst_27746 = cljs.core.deref.call(null,mults);var inst_27747 = cljs.core.vals.call(null,inst_27746);var inst_27748 = cljs.core.seq.call(null,inst_27747);var inst_27749 = inst_27748;var inst_27750 = null;var inst_27751 = 0;var inst_27752 = 0;var state_27808__$1 = (function (){var statearr_27814 = state_27808;(statearr_27814[8] = inst_27752);
(statearr_27814[9] = inst_27750);
(statearr_27814[10] = inst_27751);
(statearr_27814[11] = inst_27749);
return statearr_27814;
})();var statearr_27815_27860 = state_27808__$1;(statearr_27815_27860[2] = null);
(statearr_27815_27860[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 6))
{var inst_27789 = (state_27808[12]);var inst_27739 = (state_27808[7]);var inst_27787 = (state_27808[13]);var inst_27787__$1 = topic_fn.call(null,inst_27739);var inst_27788 = cljs.core.deref.call(null,mults);var inst_27789__$1 = cljs.core.get.call(null,inst_27788,inst_27787__$1);var state_27808__$1 = (function (){var statearr_27816 = state_27808;(statearr_27816[12] = inst_27789__$1);
(statearr_27816[13] = inst_27787__$1);
return statearr_27816;
})();if(cljs.core.truth_(inst_27789__$1))
{var statearr_27817_27861 = state_27808__$1;(statearr_27817_27861[1] = 19);
} else
{var statearr_27818_27862 = state_27808__$1;(statearr_27818_27862[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 7))
{var inst_27804 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27819_27863 = state_27808__$1;(statearr_27819_27863[2] = inst_27804);
(statearr_27819_27863[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 8))
{var inst_27752 = (state_27808[8]);var inst_27751 = (state_27808[10]);var inst_27754 = (inst_27752 < inst_27751);var inst_27755 = inst_27754;var state_27808__$1 = state_27808;if(cljs.core.truth_(inst_27755))
{var statearr_27823_27864 = state_27808__$1;(statearr_27823_27864[1] = 10);
} else
{var statearr_27824_27865 = state_27808__$1;(statearr_27824_27865[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 9))
{var inst_27785 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27825_27866 = state_27808__$1;(statearr_27825_27866[2] = inst_27785);
(statearr_27825_27866[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 10))
{var inst_27752 = (state_27808[8]);var inst_27750 = (state_27808[9]);var inst_27751 = (state_27808[10]);var inst_27749 = (state_27808[11]);var inst_27757 = cljs.core._nth.call(null,inst_27750,inst_27752);var inst_27758 = cljs.core.async.muxch_STAR_.call(null,inst_27757);var inst_27759 = cljs.core.async.close_BANG_.call(null,inst_27758);var inst_27760 = (inst_27752 + 1);var tmp27820 = inst_27750;var tmp27821 = inst_27751;var tmp27822 = inst_27749;var inst_27749__$1 = tmp27822;var inst_27750__$1 = tmp27820;var inst_27751__$1 = tmp27821;var inst_27752__$1 = inst_27760;var state_27808__$1 = (function (){var statearr_27826 = state_27808;(statearr_27826[8] = inst_27752__$1);
(statearr_27826[9] = inst_27750__$1);
(statearr_27826[10] = inst_27751__$1);
(statearr_27826[14] = inst_27759);
(statearr_27826[11] = inst_27749__$1);
return statearr_27826;
})();var statearr_27827_27867 = state_27808__$1;(statearr_27827_27867[2] = null);
(statearr_27827_27867[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 11))
{var inst_27763 = (state_27808[15]);var inst_27749 = (state_27808[11]);var inst_27763__$1 = cljs.core.seq.call(null,inst_27749);var state_27808__$1 = (function (){var statearr_27828 = state_27808;(statearr_27828[15] = inst_27763__$1);
return statearr_27828;
})();if(inst_27763__$1)
{var statearr_27829_27868 = state_27808__$1;(statearr_27829_27868[1] = 13);
} else
{var statearr_27830_27869 = state_27808__$1;(statearr_27830_27869[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 12))
{var inst_27783 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27831_27870 = state_27808__$1;(statearr_27831_27870[2] = inst_27783);
(statearr_27831_27870[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 13))
{var inst_27763 = (state_27808[15]);var inst_27765 = cljs.core.chunked_seq_QMARK_.call(null,inst_27763);var state_27808__$1 = state_27808;if(inst_27765)
{var statearr_27832_27871 = state_27808__$1;(statearr_27832_27871[1] = 16);
} else
{var statearr_27833_27872 = state_27808__$1;(statearr_27833_27872[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 14))
{var state_27808__$1 = state_27808;var statearr_27834_27873 = state_27808__$1;(statearr_27834_27873[2] = null);
(statearr_27834_27873[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 15))
{var inst_27781 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27835_27874 = state_27808__$1;(statearr_27835_27874[2] = inst_27781);
(statearr_27835_27874[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 16))
{var inst_27763 = (state_27808[15]);var inst_27767 = cljs.core.chunk_first.call(null,inst_27763);var inst_27768 = cljs.core.chunk_rest.call(null,inst_27763);var inst_27769 = cljs.core.count.call(null,inst_27767);var inst_27749 = inst_27768;var inst_27750 = inst_27767;var inst_27751 = inst_27769;var inst_27752 = 0;var state_27808__$1 = (function (){var statearr_27836 = state_27808;(statearr_27836[8] = inst_27752);
(statearr_27836[9] = inst_27750);
(statearr_27836[10] = inst_27751);
(statearr_27836[11] = inst_27749);
return statearr_27836;
})();var statearr_27837_27875 = state_27808__$1;(statearr_27837_27875[2] = null);
(statearr_27837_27875[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 17))
{var inst_27763 = (state_27808[15]);var inst_27772 = cljs.core.first.call(null,inst_27763);var inst_27773 = cljs.core.async.muxch_STAR_.call(null,inst_27772);var inst_27774 = cljs.core.async.close_BANG_.call(null,inst_27773);var inst_27775 = cljs.core.next.call(null,inst_27763);var inst_27749 = inst_27775;var inst_27750 = null;var inst_27751 = 0;var inst_27752 = 0;var state_27808__$1 = (function (){var statearr_27838 = state_27808;(statearr_27838[8] = inst_27752);
(statearr_27838[9] = inst_27750);
(statearr_27838[10] = inst_27751);
(statearr_27838[11] = inst_27749);
(statearr_27838[16] = inst_27774);
return statearr_27838;
})();var statearr_27839_27876 = state_27808__$1;(statearr_27839_27876[2] = null);
(statearr_27839_27876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 18))
{var inst_27778 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27840_27877 = state_27808__$1;(statearr_27840_27877[2] = inst_27778);
(statearr_27840_27877[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 19))
{var inst_27789 = (state_27808[12]);var inst_27739 = (state_27808[7]);var inst_27791 = cljs.core.async.muxch_STAR_.call(null,inst_27789);var state_27808__$1 = state_27808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27808__$1,22,inst_27791,inst_27739);
} else
{if((state_val_27809 === 20))
{var state_27808__$1 = state_27808;var statearr_27841_27878 = state_27808__$1;(statearr_27841_27878[2] = null);
(statearr_27841_27878[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 21))
{var inst_27801 = (state_27808[2]);var state_27808__$1 = (function (){var statearr_27842 = state_27808;(statearr_27842[17] = inst_27801);
return statearr_27842;
})();var statearr_27843_27879 = state_27808__$1;(statearr_27843_27879[2] = null);
(statearr_27843_27879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 22))
{var inst_27793 = (state_27808[2]);var state_27808__$1 = state_27808;if(cljs.core.truth_(inst_27793))
{var statearr_27844_27880 = state_27808__$1;(statearr_27844_27880[1] = 23);
} else
{var statearr_27845_27881 = state_27808__$1;(statearr_27845_27881[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 23))
{var state_27808__$1 = state_27808;var statearr_27846_27882 = state_27808__$1;(statearr_27846_27882[2] = null);
(statearr_27846_27882[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 24))
{var inst_27787 = (state_27808[13]);var inst_27796 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27787);var state_27808__$1 = state_27808;var statearr_27847_27883 = state_27808__$1;(statearr_27847_27883[2] = inst_27796);
(statearr_27847_27883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27809 === 25))
{var inst_27798 = (state_27808[2]);var state_27808__$1 = state_27808;var statearr_27848_27884 = state_27808__$1;(statearr_27848_27884[2] = inst_27798);
(statearr_27848_27884[1] = 21);
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
});})(c__15447__auto___27856,mults,ensure_mult,p))
;return ((function (switch__15432__auto__,c__15447__auto___27856,mults,ensure_mult,p){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_27852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27852[0] = state_machine__15433__auto__);
(statearr_27852[1] = 1);
return statearr_27852;
});
var state_machine__15433__auto____1 = (function (state_27808){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_27808);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e27853){if((e27853 instanceof Object))
{var ex__15436__auto__ = e27853;var statearr_27854_27885 = state_27808;(statearr_27854_27885[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27886 = state_27808;
state_27808 = G__27886;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_27808){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_27808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___27856,mults,ensure_mult,p))
})();var state__15449__auto__ = (function (){var statearr_27855 = f__15448__auto__.call(null);(statearr_27855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___27856);
return statearr_27855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___27856,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__15447__auto___28023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27993){var state_val_27994 = (state_27993[1]);if((state_val_27994 === 1))
{var state_27993__$1 = state_27993;var statearr_27995_28024 = state_27993__$1;(statearr_27995_28024[2] = null);
(statearr_27995_28024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 2))
{var inst_27956 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27957 = 0;var state_27993__$1 = (function (){var statearr_27996 = state_27993;(statearr_27996[7] = inst_27956);
(statearr_27996[8] = inst_27957);
return statearr_27996;
})();var statearr_27997_28025 = state_27993__$1;(statearr_27997_28025[2] = null);
(statearr_27997_28025[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 3))
{var inst_27991 = (state_27993[2]);var state_27993__$1 = state_27993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else
{if((state_val_27994 === 4))
{var inst_27957 = (state_27993[8]);var inst_27959 = (inst_27957 < cnt);var state_27993__$1 = state_27993;if(cljs.core.truth_(inst_27959))
{var statearr_27998_28026 = state_27993__$1;(statearr_27998_28026[1] = 6);
} else
{var statearr_27999_28027 = state_27993__$1;(statearr_27999_28027[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 5))
{var inst_27977 = (state_27993[2]);var state_27993__$1 = (function (){var statearr_28000 = state_27993;(statearr_28000[9] = inst_27977);
return statearr_28000;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,12,dchan);
} else
{if((state_val_27994 === 6))
{var state_27993__$1 = state_27993;var statearr_28001_28028 = state_27993__$1;(statearr_28001_28028[2] = null);
(statearr_28001_28028[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 7))
{var state_27993__$1 = state_27993;var statearr_28002_28029 = state_27993__$1;(statearr_28002_28029[2] = null);
(statearr_28002_28029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 8))
{var inst_27975 = (state_27993[2]);var state_27993__$1 = state_27993;var statearr_28003_28030 = state_27993__$1;(statearr_28003_28030[2] = inst_27975);
(statearr_28003_28030[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 9))
{var inst_27957 = (state_27993[8]);var inst_27970 = (state_27993[2]);var inst_27971 = (inst_27957 + 1);var inst_27957__$1 = inst_27971;var state_27993__$1 = (function (){var statearr_28004 = state_27993;(statearr_28004[8] = inst_27957__$1);
(statearr_28004[10] = inst_27970);
return statearr_28004;
})();var statearr_28005_28031 = state_27993__$1;(statearr_28005_28031[2] = null);
(statearr_28005_28031[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 10))
{var inst_27961 = (state_27993[2]);var inst_27962 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27993__$1 = (function (){var statearr_28006 = state_27993;(statearr_28006[11] = inst_27961);
return statearr_28006;
})();var statearr_28007_28032 = state_27993__$1;(statearr_28007_28032[2] = inst_27962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 11))
{var inst_27957 = (state_27993[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27993,10,Object,null,9);var inst_27966 = chs__$1.call(null,inst_27957);var inst_27967 = done.call(null,inst_27957);var inst_27968 = cljs.core.async.take_BANG_.call(null,inst_27966,inst_27967);var state_27993__$1 = state_27993;var statearr_28008_28033 = state_27993__$1;(statearr_28008_28033[2] = inst_27968);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 12))
{var inst_27979 = (state_27993[12]);var inst_27979__$1 = (state_27993[2]);var inst_27980 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27979__$1);var state_27993__$1 = (function (){var statearr_28009 = state_27993;(statearr_28009[12] = inst_27979__$1);
return statearr_28009;
})();if(cljs.core.truth_(inst_27980))
{var statearr_28010_28034 = state_27993__$1;(statearr_28010_28034[1] = 13);
} else
{var statearr_28011_28035 = state_27993__$1;(statearr_28011_28035[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 13))
{var inst_27982 = cljs.core.async.close_BANG_.call(null,out);var state_27993__$1 = state_27993;var statearr_28012_28036 = state_27993__$1;(statearr_28012_28036[2] = inst_27982);
(statearr_28012_28036[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 14))
{var inst_27979 = (state_27993[12]);var inst_27984 = cljs.core.apply.call(null,f,inst_27979);var state_27993__$1 = state_27993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27993__$1,16,out,inst_27984);
} else
{if((state_val_27994 === 15))
{var inst_27989 = (state_27993[2]);var state_27993__$1 = state_27993;var statearr_28013_28037 = state_27993__$1;(statearr_28013_28037[2] = inst_27989);
(statearr_28013_28037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27994 === 16))
{var inst_27986 = (state_27993[2]);var state_27993__$1 = (function (){var statearr_28014 = state_27993;(statearr_28014[13] = inst_27986);
return statearr_28014;
})();var statearr_28015_28038 = state_27993__$1;(statearr_28015_28038[2] = null);
(statearr_28015_28038[1] = 2);
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
});})(c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15432__auto__,c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28019[0] = state_machine__15433__auto__);
(statearr_28019[1] = 1);
return statearr_28019;
});
var state_machine__15433__auto____1 = (function (state_27993){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_27993);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object))
{var ex__15436__auto__ = e28020;var statearr_28021_28039 = state_27993;(statearr_28021_28039[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28040 = state_27993;
state_27993 = G__28040;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15449__auto__ = (function (){var statearr_28022 = f__15448__auto__.call(null);(statearr_28022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28023);
return statearr_28022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28023,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___28148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28148,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28148,out){
return (function (state_28124){var state_val_28125 = (state_28124[1]);if((state_val_28125 === 1))
{var inst_28095 = cljs.core.vec.call(null,chs);var inst_28096 = inst_28095;var state_28124__$1 = (function (){var statearr_28126 = state_28124;(statearr_28126[7] = inst_28096);
return statearr_28126;
})();var statearr_28127_28149 = state_28124__$1;(statearr_28127_28149[2] = null);
(statearr_28127_28149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 2))
{var inst_28096 = (state_28124[7]);var inst_28098 = cljs.core.count.call(null,inst_28096);var inst_28099 = (inst_28098 > 0);var state_28124__$1 = state_28124;if(cljs.core.truth_(inst_28099))
{var statearr_28128_28150 = state_28124__$1;(statearr_28128_28150[1] = 4);
} else
{var statearr_28129_28151 = state_28124__$1;(statearr_28129_28151[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 3))
{var inst_28122 = (state_28124[2]);var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else
{if((state_val_28125 === 4))
{var inst_28096 = (state_28124[7]);var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28124__$1,7,inst_28096);
} else
{if((state_val_28125 === 5))
{var inst_28118 = cljs.core.async.close_BANG_.call(null,out);var state_28124__$1 = state_28124;var statearr_28130_28152 = state_28124__$1;(statearr_28130_28152[2] = inst_28118);
(statearr_28130_28152[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 6))
{var inst_28120 = (state_28124[2]);var state_28124__$1 = state_28124;var statearr_28131_28153 = state_28124__$1;(statearr_28131_28153[2] = inst_28120);
(statearr_28131_28153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 7))
{var inst_28104 = (state_28124[8]);var inst_28103 = (state_28124[9]);var inst_28103__$1 = (state_28124[2]);var inst_28104__$1 = cljs.core.nth.call(null,inst_28103__$1,0,null);var inst_28105 = cljs.core.nth.call(null,inst_28103__$1,1,null);var inst_28106 = (inst_28104__$1 == null);var state_28124__$1 = (function (){var statearr_28132 = state_28124;(statearr_28132[8] = inst_28104__$1);
(statearr_28132[10] = inst_28105);
(statearr_28132[9] = inst_28103__$1);
return statearr_28132;
})();if(cljs.core.truth_(inst_28106))
{var statearr_28133_28154 = state_28124__$1;(statearr_28133_28154[1] = 8);
} else
{var statearr_28134_28155 = state_28124__$1;(statearr_28134_28155[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 8))
{var inst_28104 = (state_28124[8]);var inst_28105 = (state_28124[10]);var inst_28096 = (state_28124[7]);var inst_28103 = (state_28124[9]);var inst_28108 = (function (){var c = inst_28105;var v = inst_28104;var vec__28101 = inst_28103;var cs = inst_28096;return ((function (c,v,vec__28101,cs,inst_28104,inst_28105,inst_28096,inst_28103,state_val_28125,c__15447__auto___28148,out){
return (function (p1__28041_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28041_SHARP_);
});
;})(c,v,vec__28101,cs,inst_28104,inst_28105,inst_28096,inst_28103,state_val_28125,c__15447__auto___28148,out))
})();var inst_28109 = cljs.core.filterv.call(null,inst_28108,inst_28096);var inst_28096__$1 = inst_28109;var state_28124__$1 = (function (){var statearr_28135 = state_28124;(statearr_28135[7] = inst_28096__$1);
return statearr_28135;
})();var statearr_28136_28156 = state_28124__$1;(statearr_28136_28156[2] = null);
(statearr_28136_28156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 9))
{var inst_28104 = (state_28124[8]);var state_28124__$1 = state_28124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28124__$1,11,out,inst_28104);
} else
{if((state_val_28125 === 10))
{var inst_28116 = (state_28124[2]);var state_28124__$1 = state_28124;var statearr_28138_28157 = state_28124__$1;(statearr_28138_28157[2] = inst_28116);
(statearr_28138_28157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28125 === 11))
{var inst_28096 = (state_28124[7]);var inst_28113 = (state_28124[2]);var tmp28137 = inst_28096;var inst_28096__$1 = tmp28137;var state_28124__$1 = (function (){var statearr_28139 = state_28124;(statearr_28139[7] = inst_28096__$1);
(statearr_28139[11] = inst_28113);
return statearr_28139;
})();var statearr_28140_28158 = state_28124__$1;(statearr_28140_28158[2] = null);
(statearr_28140_28158[1] = 2);
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
});})(c__15447__auto___28148,out))
;return ((function (switch__15432__auto__,c__15447__auto___28148,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28144 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28144[0] = state_machine__15433__auto__);
(statearr_28144[1] = 1);
return statearr_28144;
});
var state_machine__15433__auto____1 = (function (state_28124){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_28124);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28145){if((e28145 instanceof Object))
{var ex__15436__auto__ = e28145;var statearr_28146_28159 = state_28124;(statearr_28146_28159[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28160 = state_28124;
state_28124 = G__28160;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28148,out))
})();var state__15449__auto__ = (function (){var statearr_28147 = f__15448__auto__.call(null);(statearr_28147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28148);
return statearr_28147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28148,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___28253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28253,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28253,out){
return (function (state_28230){var state_val_28231 = (state_28230[1]);if((state_val_28231 === 1))
{var inst_28207 = 0;var state_28230__$1 = (function (){var statearr_28232 = state_28230;(statearr_28232[7] = inst_28207);
return statearr_28232;
})();var statearr_28233_28254 = state_28230__$1;(statearr_28233_28254[2] = null);
(statearr_28233_28254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 2))
{var inst_28207 = (state_28230[7]);var inst_28209 = (inst_28207 < n);var state_28230__$1 = state_28230;if(cljs.core.truth_(inst_28209))
{var statearr_28234_28255 = state_28230__$1;(statearr_28234_28255[1] = 4);
} else
{var statearr_28235_28256 = state_28230__$1;(statearr_28235_28256[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 3))
{var inst_28227 = (state_28230[2]);var inst_28228 = cljs.core.async.close_BANG_.call(null,out);var state_28230__$1 = (function (){var statearr_28236 = state_28230;(statearr_28236[8] = inst_28227);
return statearr_28236;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28230__$1,inst_28228);
} else
{if((state_val_28231 === 4))
{var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28230__$1,7,ch);
} else
{if((state_val_28231 === 5))
{var state_28230__$1 = state_28230;var statearr_28237_28257 = state_28230__$1;(statearr_28237_28257[2] = null);
(statearr_28237_28257[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 6))
{var inst_28225 = (state_28230[2]);var state_28230__$1 = state_28230;var statearr_28238_28258 = state_28230__$1;(statearr_28238_28258[2] = inst_28225);
(statearr_28238_28258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 7))
{var inst_28212 = (state_28230[9]);var inst_28212__$1 = (state_28230[2]);var inst_28213 = (inst_28212__$1 == null);var inst_28214 = cljs.core.not.call(null,inst_28213);var state_28230__$1 = (function (){var statearr_28239 = state_28230;(statearr_28239[9] = inst_28212__$1);
return statearr_28239;
})();if(inst_28214)
{var statearr_28240_28259 = state_28230__$1;(statearr_28240_28259[1] = 8);
} else
{var statearr_28241_28260 = state_28230__$1;(statearr_28241_28260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 8))
{var inst_28212 = (state_28230[9]);var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28230__$1,11,out,inst_28212);
} else
{if((state_val_28231 === 9))
{var state_28230__$1 = state_28230;var statearr_28242_28261 = state_28230__$1;(statearr_28242_28261[2] = null);
(statearr_28242_28261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 10))
{var inst_28222 = (state_28230[2]);var state_28230__$1 = state_28230;var statearr_28243_28262 = state_28230__$1;(statearr_28243_28262[2] = inst_28222);
(statearr_28243_28262[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 11))
{var inst_28207 = (state_28230[7]);var inst_28217 = (state_28230[2]);var inst_28218 = (inst_28207 + 1);var inst_28207__$1 = inst_28218;var state_28230__$1 = (function (){var statearr_28244 = state_28230;(statearr_28244[10] = inst_28217);
(statearr_28244[7] = inst_28207__$1);
return statearr_28244;
})();var statearr_28245_28263 = state_28230__$1;(statearr_28245_28263[2] = null);
(statearr_28245_28263[1] = 2);
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
});})(c__15447__auto___28253,out))
;return ((function (switch__15432__auto__,c__15447__auto___28253,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28249 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28249[0] = state_machine__15433__auto__);
(statearr_28249[1] = 1);
return statearr_28249;
});
var state_machine__15433__auto____1 = (function (state_28230){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_28230);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28250){if((e28250 instanceof Object))
{var ex__15436__auto__ = e28250;var statearr_28251_28264 = state_28230;(statearr_28251_28264[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28265 = state_28230;
state_28230 = G__28265;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28253,out))
})();var state__15449__auto__ = (function (){var statearr_28252 = f__15448__auto__.call(null);(statearr_28252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28253);
return statearr_28252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28253,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___28362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28362,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28362,out){
return (function (state_28337){var state_val_28338 = (state_28337[1]);if((state_val_28338 === 1))
{var inst_28314 = null;var state_28337__$1 = (function (){var statearr_28339 = state_28337;(statearr_28339[7] = inst_28314);
return statearr_28339;
})();var statearr_28340_28363 = state_28337__$1;(statearr_28340_28363[2] = null);
(statearr_28340_28363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 2))
{var state_28337__$1 = state_28337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,4,ch);
} else
{if((state_val_28338 === 3))
{var inst_28334 = (state_28337[2]);var inst_28335 = cljs.core.async.close_BANG_.call(null,out);var state_28337__$1 = (function (){var statearr_28341 = state_28337;(statearr_28341[8] = inst_28334);
return statearr_28341;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else
{if((state_val_28338 === 4))
{var inst_28317 = (state_28337[9]);var inst_28317__$1 = (state_28337[2]);var inst_28318 = (inst_28317__$1 == null);var inst_28319 = cljs.core.not.call(null,inst_28318);var state_28337__$1 = (function (){var statearr_28342 = state_28337;(statearr_28342[9] = inst_28317__$1);
return statearr_28342;
})();if(inst_28319)
{var statearr_28343_28364 = state_28337__$1;(statearr_28343_28364[1] = 5);
} else
{var statearr_28344_28365 = state_28337__$1;(statearr_28344_28365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 5))
{var inst_28317 = (state_28337[9]);var inst_28314 = (state_28337[7]);var inst_28321 = cljs.core._EQ_.call(null,inst_28317,inst_28314);var state_28337__$1 = state_28337;if(inst_28321)
{var statearr_28345_28366 = state_28337__$1;(statearr_28345_28366[1] = 8);
} else
{var statearr_28346_28367 = state_28337__$1;(statearr_28346_28367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 6))
{var state_28337__$1 = state_28337;var statearr_28348_28368 = state_28337__$1;(statearr_28348_28368[2] = null);
(statearr_28348_28368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 7))
{var inst_28332 = (state_28337[2]);var state_28337__$1 = state_28337;var statearr_28349_28369 = state_28337__$1;(statearr_28349_28369[2] = inst_28332);
(statearr_28349_28369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 8))
{var inst_28314 = (state_28337[7]);var tmp28347 = inst_28314;var inst_28314__$1 = tmp28347;var state_28337__$1 = (function (){var statearr_28350 = state_28337;(statearr_28350[7] = inst_28314__$1);
return statearr_28350;
})();var statearr_28351_28370 = state_28337__$1;(statearr_28351_28370[2] = null);
(statearr_28351_28370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 9))
{var inst_28317 = (state_28337[9]);var state_28337__$1 = state_28337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28337__$1,11,out,inst_28317);
} else
{if((state_val_28338 === 10))
{var inst_28329 = (state_28337[2]);var state_28337__$1 = state_28337;var statearr_28352_28371 = state_28337__$1;(statearr_28352_28371[2] = inst_28329);
(statearr_28352_28371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28338 === 11))
{var inst_28317 = (state_28337[9]);var inst_28326 = (state_28337[2]);var inst_28314 = inst_28317;var state_28337__$1 = (function (){var statearr_28353 = state_28337;(statearr_28353[10] = inst_28326);
(statearr_28353[7] = inst_28314);
return statearr_28353;
})();var statearr_28354_28372 = state_28337__$1;(statearr_28354_28372[2] = null);
(statearr_28354_28372[1] = 2);
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
});})(c__15447__auto___28362,out))
;return ((function (switch__15432__auto__,c__15447__auto___28362,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28358 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28358[0] = state_machine__15433__auto__);
(statearr_28358[1] = 1);
return statearr_28358;
});
var state_machine__15433__auto____1 = (function (state_28337){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_28337);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28359){if((e28359 instanceof Object))
{var ex__15436__auto__ = e28359;var statearr_28360_28373 = state_28337;(statearr_28360_28373[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28374 = state_28337;
state_28337 = G__28374;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28362,out))
})();var state__15449__auto__ = (function (){var statearr_28361 = f__15448__auto__.call(null);(statearr_28361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28362);
return statearr_28361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28362,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___28509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28509,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28509,out){
return (function (state_28479){var state_val_28480 = (state_28479[1]);if((state_val_28480 === 1))
{var inst_28442 = (new Array(n));var inst_28443 = inst_28442;var inst_28444 = 0;var state_28479__$1 = (function (){var statearr_28481 = state_28479;(statearr_28481[7] = inst_28443);
(statearr_28481[8] = inst_28444);
return statearr_28481;
})();var statearr_28482_28510 = state_28479__$1;(statearr_28482_28510[2] = null);
(statearr_28482_28510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 2))
{var state_28479__$1 = state_28479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28479__$1,4,ch);
} else
{if((state_val_28480 === 3))
{var inst_28477 = (state_28479[2]);var state_28479__$1 = state_28479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28479__$1,inst_28477);
} else
{if((state_val_28480 === 4))
{var inst_28447 = (state_28479[9]);var inst_28447__$1 = (state_28479[2]);var inst_28448 = (inst_28447__$1 == null);var inst_28449 = cljs.core.not.call(null,inst_28448);var state_28479__$1 = (function (){var statearr_28483 = state_28479;(statearr_28483[9] = inst_28447__$1);
return statearr_28483;
})();if(inst_28449)
{var statearr_28484_28511 = state_28479__$1;(statearr_28484_28511[1] = 5);
} else
{var statearr_28485_28512 = state_28479__$1;(statearr_28485_28512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 5))
{var inst_28443 = (state_28479[7]);var inst_28444 = (state_28479[8]);var inst_28452 = (state_28479[10]);var inst_28447 = (state_28479[9]);var inst_28451 = (inst_28443[inst_28444] = inst_28447);var inst_28452__$1 = (inst_28444 + 1);var inst_28453 = (inst_28452__$1 < n);var state_28479__$1 = (function (){var statearr_28486 = state_28479;(statearr_28486[11] = inst_28451);
(statearr_28486[10] = inst_28452__$1);
return statearr_28486;
})();if(cljs.core.truth_(inst_28453))
{var statearr_28487_28513 = state_28479__$1;(statearr_28487_28513[1] = 8);
} else
{var statearr_28488_28514 = state_28479__$1;(statearr_28488_28514[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 6))
{var inst_28444 = (state_28479[8]);var inst_28465 = (inst_28444 > 0);var state_28479__$1 = state_28479;if(cljs.core.truth_(inst_28465))
{var statearr_28490_28515 = state_28479__$1;(statearr_28490_28515[1] = 12);
} else
{var statearr_28491_28516 = state_28479__$1;(statearr_28491_28516[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 7))
{var inst_28475 = (state_28479[2]);var state_28479__$1 = state_28479;var statearr_28492_28517 = state_28479__$1;(statearr_28492_28517[2] = inst_28475);
(statearr_28492_28517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 8))
{var inst_28443 = (state_28479[7]);var inst_28452 = (state_28479[10]);var tmp28489 = inst_28443;var inst_28443__$1 = tmp28489;var inst_28444 = inst_28452;var state_28479__$1 = (function (){var statearr_28493 = state_28479;(statearr_28493[7] = inst_28443__$1);
(statearr_28493[8] = inst_28444);
return statearr_28493;
})();var statearr_28494_28518 = state_28479__$1;(statearr_28494_28518[2] = null);
(statearr_28494_28518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 9))
{var inst_28443 = (state_28479[7]);var inst_28457 = cljs.core.vec.call(null,inst_28443);var state_28479__$1 = state_28479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28479__$1,11,out,inst_28457);
} else
{if((state_val_28480 === 10))
{var inst_28463 = (state_28479[2]);var state_28479__$1 = state_28479;var statearr_28495_28519 = state_28479__$1;(statearr_28495_28519[2] = inst_28463);
(statearr_28495_28519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 11))
{var inst_28459 = (state_28479[2]);var inst_28460 = (new Array(n));var inst_28443 = inst_28460;var inst_28444 = 0;var state_28479__$1 = (function (){var statearr_28496 = state_28479;(statearr_28496[7] = inst_28443);
(statearr_28496[8] = inst_28444);
(statearr_28496[12] = inst_28459);
return statearr_28496;
})();var statearr_28497_28520 = state_28479__$1;(statearr_28497_28520[2] = null);
(statearr_28497_28520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 12))
{var inst_28443 = (state_28479[7]);var inst_28467 = cljs.core.vec.call(null,inst_28443);var state_28479__$1 = state_28479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28479__$1,15,out,inst_28467);
} else
{if((state_val_28480 === 13))
{var state_28479__$1 = state_28479;var statearr_28498_28521 = state_28479__$1;(statearr_28498_28521[2] = null);
(statearr_28498_28521[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 14))
{var inst_28472 = (state_28479[2]);var inst_28473 = cljs.core.async.close_BANG_.call(null,out);var state_28479__$1 = (function (){var statearr_28499 = state_28479;(statearr_28499[13] = inst_28472);
return statearr_28499;
})();var statearr_28500_28522 = state_28479__$1;(statearr_28500_28522[2] = inst_28473);
(statearr_28500_28522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28480 === 15))
{var inst_28469 = (state_28479[2]);var state_28479__$1 = state_28479;var statearr_28501_28523 = state_28479__$1;(statearr_28501_28523[2] = inst_28469);
(statearr_28501_28523[1] = 14);
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
});})(c__15447__auto___28509,out))
;return ((function (switch__15432__auto__,c__15447__auto___28509,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28505[0] = state_machine__15433__auto__);
(statearr_28505[1] = 1);
return statearr_28505;
});
var state_machine__15433__auto____1 = (function (state_28479){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_28479);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28506){if((e28506 instanceof Object))
{var ex__15436__auto__ = e28506;var statearr_28507_28524 = state_28479;(statearr_28507_28524[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28525 = state_28479;
state_28479 = G__28525;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_28479){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_28479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28509,out))
})();var state__15449__auto__ = (function (){var statearr_28508 = f__15448__auto__.call(null);(statearr_28508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28509);
return statearr_28508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28509,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15447__auto___28668 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15447__auto___28668,out){
return (function (){var f__15448__auto__ = (function (){var switch__15432__auto__ = ((function (c__15447__auto___28668,out){
return (function (state_28638){var state_val_28639 = (state_28638[1]);if((state_val_28639 === 1))
{var inst_28597 = [];var inst_28598 = inst_28597;var inst_28599 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28638__$1 = (function (){var statearr_28640 = state_28638;(statearr_28640[7] = inst_28599);
(statearr_28640[8] = inst_28598);
return statearr_28640;
})();var statearr_28641_28669 = state_28638__$1;(statearr_28641_28669[2] = null);
(statearr_28641_28669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 2))
{var state_28638__$1 = state_28638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,4,ch);
} else
{if((state_val_28639 === 3))
{var inst_28636 = (state_28638[2]);var state_28638__$1 = state_28638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28638__$1,inst_28636);
} else
{if((state_val_28639 === 4))
{var inst_28602 = (state_28638[9]);var inst_28602__$1 = (state_28638[2]);var inst_28603 = (inst_28602__$1 == null);var inst_28604 = cljs.core.not.call(null,inst_28603);var state_28638__$1 = (function (){var statearr_28642 = state_28638;(statearr_28642[9] = inst_28602__$1);
return statearr_28642;
})();if(inst_28604)
{var statearr_28643_28670 = state_28638__$1;(statearr_28643_28670[1] = 5);
} else
{var statearr_28644_28671 = state_28638__$1;(statearr_28644_28671[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 5))
{var inst_28606 = (state_28638[10]);var inst_28602 = (state_28638[9]);var inst_28599 = (state_28638[7]);var inst_28606__$1 = f.call(null,inst_28602);var inst_28607 = cljs.core._EQ_.call(null,inst_28606__$1,inst_28599);var inst_28608 = cljs.core.keyword_identical_QMARK_.call(null,inst_28599,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28609 = (inst_28607) || (inst_28608);var state_28638__$1 = (function (){var statearr_28645 = state_28638;(statearr_28645[10] = inst_28606__$1);
return statearr_28645;
})();if(cljs.core.truth_(inst_28609))
{var statearr_28646_28672 = state_28638__$1;(statearr_28646_28672[1] = 8);
} else
{var statearr_28647_28673 = state_28638__$1;(statearr_28647_28673[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 6))
{var inst_28598 = (state_28638[8]);var inst_28623 = inst_28598.length;var inst_28624 = (inst_28623 > 0);var state_28638__$1 = state_28638;if(cljs.core.truth_(inst_28624))
{var statearr_28649_28674 = state_28638__$1;(statearr_28649_28674[1] = 12);
} else
{var statearr_28650_28675 = state_28638__$1;(statearr_28650_28675[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 7))
{var inst_28634 = (state_28638[2]);var state_28638__$1 = state_28638;var statearr_28651_28676 = state_28638__$1;(statearr_28651_28676[2] = inst_28634);
(statearr_28651_28676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 8))
{var inst_28606 = (state_28638[10]);var inst_28602 = (state_28638[9]);var inst_28598 = (state_28638[8]);var inst_28611 = inst_28598.push(inst_28602);var tmp28648 = inst_28598;var inst_28598__$1 = tmp28648;var inst_28599 = inst_28606;var state_28638__$1 = (function (){var statearr_28652 = state_28638;(statearr_28652[11] = inst_28611);
(statearr_28652[7] = inst_28599);
(statearr_28652[8] = inst_28598__$1);
return statearr_28652;
})();var statearr_28653_28677 = state_28638__$1;(statearr_28653_28677[2] = null);
(statearr_28653_28677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 9))
{var inst_28598 = (state_28638[8]);var inst_28614 = cljs.core.vec.call(null,inst_28598);var state_28638__$1 = state_28638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28638__$1,11,out,inst_28614);
} else
{if((state_val_28639 === 10))
{var inst_28621 = (state_28638[2]);var state_28638__$1 = state_28638;var statearr_28654_28678 = state_28638__$1;(statearr_28654_28678[2] = inst_28621);
(statearr_28654_28678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 11))
{var inst_28606 = (state_28638[10]);var inst_28602 = (state_28638[9]);var inst_28616 = (state_28638[2]);var inst_28617 = [];var inst_28618 = inst_28617.push(inst_28602);var inst_28598 = inst_28617;var inst_28599 = inst_28606;var state_28638__$1 = (function (){var statearr_28655 = state_28638;(statearr_28655[7] = inst_28599);
(statearr_28655[8] = inst_28598);
(statearr_28655[12] = inst_28616);
(statearr_28655[13] = inst_28618);
return statearr_28655;
})();var statearr_28656_28679 = state_28638__$1;(statearr_28656_28679[2] = null);
(statearr_28656_28679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 12))
{var inst_28598 = (state_28638[8]);var inst_28626 = cljs.core.vec.call(null,inst_28598);var state_28638__$1 = state_28638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28638__$1,15,out,inst_28626);
} else
{if((state_val_28639 === 13))
{var state_28638__$1 = state_28638;var statearr_28657_28680 = state_28638__$1;(statearr_28657_28680[2] = null);
(statearr_28657_28680[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 14))
{var inst_28631 = (state_28638[2]);var inst_28632 = cljs.core.async.close_BANG_.call(null,out);var state_28638__$1 = (function (){var statearr_28658 = state_28638;(statearr_28658[14] = inst_28631);
return statearr_28658;
})();var statearr_28659_28681 = state_28638__$1;(statearr_28659_28681[2] = inst_28632);
(statearr_28659_28681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28639 === 15))
{var inst_28628 = (state_28638[2]);var state_28638__$1 = state_28638;var statearr_28660_28682 = state_28638__$1;(statearr_28660_28682[2] = inst_28628);
(statearr_28660_28682[1] = 14);
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
});})(c__15447__auto___28668,out))
;return ((function (switch__15432__auto__,c__15447__auto___28668,out){
return (function() {
var state_machine__15433__auto__ = null;
var state_machine__15433__auto____0 = (function (){var statearr_28664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28664[0] = state_machine__15433__auto__);
(statearr_28664[1] = 1);
return statearr_28664;
});
var state_machine__15433__auto____1 = (function (state_28638){while(true){
var ret_value__15434__auto__ = (function (){try{while(true){
var result__15435__auto__ = switch__15432__auto__.call(null,state_28638);if(cljs.core.keyword_identical_QMARK_.call(null,result__15435__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15435__auto__;
}
break;
}
}catch (e28665){if((e28665 instanceof Object))
{var ex__15436__auto__ = e28665;var statearr_28666_28683 = state_28638;(statearr_28666_28683[5] = ex__15436__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15434__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28684 = state_28638;
state_28638 = G__28684;
continue;
}
} else
{return ret_value__15434__auto__;
}
break;
}
});
state_machine__15433__auto__ = function(state_28638){
switch(arguments.length){
case 0:
return state_machine__15433__auto____0.call(this);
case 1:
return state_machine__15433__auto____1.call(this,state_28638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15433__auto____0;
state_machine__15433__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15433__auto____1;
return state_machine__15433__auto__;
})()
;})(switch__15432__auto__,c__15447__auto___28668,out))
})();var state__15449__auto__ = (function (){var statearr_28667 = f__15448__auto__.call(null);(statearr_28667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15447__auto___28668);
return statearr_28667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15449__auto__);
});})(c__15447__auto___28668,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map