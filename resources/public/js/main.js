goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../secretary/core.js", ['secretary.core'], ['cljs.core', 'clojure.walk', 'clojure.string']);
goog.addDependency("../triangulator/routes.js", ['triangulator.routes'], ['goog.history.EventType', 'cljs.core', 'secretary.core', 'goog.History', 'goog.events']);