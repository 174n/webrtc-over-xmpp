// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__createBinding = __createBinding;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}

function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/async/dist/async.mjs":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = apply;
exports.wrapSync = exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.cargoQueue = cargo$1;
exports.compose = compose;
exports.constant = constant;
exports.doUntil = doUntil;
exports.ensureAsync = ensureAsync;
exports.groupBy = groupBy;
exports.groupBySeries = groupBySeries;
exports.mapValues = mapValues;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.parallel = parallel;
exports.parallelLimit = parallelLimit;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.foldr = exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq;
exports.series = series;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timesLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.unmemoize = unmemoize;
exports.until = until;
exports.during = exports.whilst = exports.waterfall = exports.tryEach = exports.sortBy = exports.anySeries = exports.someSeries = exports.anyLimit = exports.someLimit = exports.any = exports.some = exports.setImmediate = exports.rejectSeries = exports.rejectLimit = exports.reject = exports.foldl = exports.inject = exports.reduce = exports.race = exports.nextTick = exports.mapValuesLimit = exports.mapSeries = exports.mapLimit = exports.map = exports.log = exports.groupByLimit = exports.forever = exports.selectSeries = exports.filterSeries = exports.selectLimit = exports.filterLimit = exports.select = exports.filter = exports.allSeries = exports.everySeries = exports.allLimit = exports.everyLimit = exports.all = exports.every = exports.forEachSeries = exports.eachSeries = exports.forEachOfSeries = exports.eachOfSeries = exports.forEachOfLimit = exports.eachOfLimit = exports.forEachOf = exports.eachOf = exports.forEachLimit = exports.eachLimit = exports.forEach = exports.each = exports.doDuring = exports.doWhilst = exports.dir = exports.findSeries = exports.detectSeries = exports.findLimit = exports.detectLimit = exports.find = exports.detect = exports.flatMapSeries = exports.concatSeries = exports.flatMapLimit = exports.concatLimit = exports.flatMap = exports.concat = exports.applyEachSeries = exports.applyEach = exports.default = void 0;

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
function apply(fn, ...args) {
  return (...callArgs) => fn(...args, ...callArgs);
}

function initialParams(fn) {
  return function (...args
  /*, callback*/
  ) {
    var callback = args.pop();
    return fn.call(this, args, callback);
  };
}
/* istanbul ignore file */


var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
  setTimeout(fn, 0);
}

function wrap(defer) {
  return (fn, ...args) => defer(() => fn(...args));
}

var _defer;

if (hasSetImmediate) {
  _defer = setImmediate;
} else if (hasNextTick) {
  _defer = process.nextTick;
} else {
  _defer = fallback;
}

var setImmediate$1 = wrap(_defer);
/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */

exports.setImmediate = setImmediate$1;

function asyncify(func) {
  if (isAsync(func)) {
    return function (...args
    /*, callback*/
    ) {
      const callback = args.pop();
      const promise = func.apply(this, args);
      return handlePromise(promise, callback);
    };
  }

  return initialParams(function (args, callback) {
    var result;

    try {
      result = func.apply(this, args);
    } catch (e) {
      return callback(e);
    } // if result is Promise object


    if (result && typeof result.then === 'function') {
      return handlePromise(result, callback);
    } else {
      callback(null, result);
    }
  });
}

function handlePromise(promise, callback) {
  return promise.then(value => {
    invokeCallback(callback, null, value);
  }, err => {
    invokeCallback(callback, err && err.message ? err : new Error(err));
  });
}

function invokeCallback(callback, error, value) {
  try {
    callback(error, value);
  } catch (err) {
    setImmediate$1(e => {
      throw e;
    }, err);
  }
}

function isAsync(fn) {
  return fn[Symbol.toStringTag] === 'AsyncFunction';
}

function isAsyncGenerator(fn) {
  return fn[Symbol.toStringTag] === 'AsyncGenerator';
}

function isAsyncIterable(obj) {
  return typeof obj[Symbol.asyncIterator] === 'function';
}

function wrapAsync(asyncFn) {
  if (typeof asyncFn !== 'function') throw new Error('expected a function');
  return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
} // conditionally promisify a function.
// only return a promise if a callback is omitted


function awaitify(asyncFn, arity = asyncFn.length) {
  if (!arity) throw new Error('arity is undefined');

  function awaitable(...args) {
    if (typeof args[arity - 1] === 'function') {
      return asyncFn.apply(this, args);
    }

    return new Promise((resolve, reject) => {
      args[arity - 1] = (err, ...cbArgs) => {
        if (err) return reject(err);
        resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
      };

      asyncFn.apply(this, args);
    });
  }

  return awaitable;
}

function applyEach(eachfn) {
  return function applyEach(fns, ...callArgs) {
    const go = awaitify(function (callback) {
      var that = this;
      return eachfn(fns, (fn, cb) => {
        wrapAsync(fn).apply(that, callArgs.concat(cb));
      }, callback);
    });
    return go;
  };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
  arr = arr || [];
  var results = [];
  var counter = 0;

  var _iteratee = wrapAsync(iteratee);

  return eachfn(arr, (value, _, iterCb) => {
    var index = counter++;

    _iteratee(value, (err, v) => {
      results[index] = v;
      iterCb(err);
    });
  }, err => {
    callback(err, results);
  });
}

function isArrayLike(value) {
  return value && typeof value.length === 'number' && value.length >= 0 && value.length % 1 === 0;
} // A temporary value used to identify if the loop should be broken.
// See #1064, #1293


const breakLoop = {};

function once(fn) {
  function wrapper(...args) {
    if (fn === null) return;
    var callFn = fn;
    fn = null;
    callFn.apply(this, args);
  }

  Object.assign(wrapper, fn);
  return wrapper;
}

function getIterator(coll) {
  return coll[Symbol.iterator] && coll[Symbol.iterator]();
}

function createArrayIterator(coll) {
  var i = -1;
  var len = coll.length;
  return function next() {
    return ++i < len ? {
      value: coll[i],
      key: i
    } : null;
  };
}

function createES2015Iterator(iterator) {
  var i = -1;
  return function next() {
    var item = iterator.next();
    if (item.done) return null;
    i++;
    return {
      value: item.value,
      key: i
    };
  };
}

function createObjectIterator(obj) {
  var okeys = obj ? Object.keys(obj) : [];
  var i = -1;
  var len = okeys.length;
  return function next() {
    var key = okeys[++i];
    return i < len ? {
      value: obj[key],
      key
    } : null;
  };
}

function createIterator(coll) {
  if (isArrayLike(coll)) {
    return createArrayIterator(coll);
  }

  var iterator = getIterator(coll);
  return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
  return function (...args) {
    if (fn === null) throw new Error("Callback was already called.");
    var callFn = fn;
    fn = null;
    callFn.apply(this, args);
  };
} // for async generators


function asyncEachOfLimit(generator, limit, iteratee, callback) {
  let done = false;
  let canceled = false;
  let awaiting = false;
  let running = 0;
  let idx = 0;

  function replenish() {
    //console.log('replenish')
    if (running >= limit || awaiting || done) return; //console.log('replenish awaiting')

    awaiting = true;
    generator.next().then(({
      value,
      done: iterDone
    }) => {
      //console.log('got value', value)
      if (canceled || done) return;
      awaiting = false;

      if (iterDone) {
        done = true;

        if (running <= 0) {
          //console.log('done nextCb')
          callback(null);
        }

        return;
      }

      running++;
      iteratee(value, idx, iterateeCallback);
      idx++;
      replenish();
    }).catch(handleError);
  }

  function iterateeCallback(err, result) {
    //console.log('iterateeCallback')
    running -= 1;
    if (canceled) return;
    if (err) return handleError(err);

    if (err === false) {
      done = true;
      canceled = true;
      return;
    }

    if (result === breakLoop || done && running <= 0) {
      done = true; //console.log('done iterCb')

      return callback(null);
    }

    replenish();
  }

  function handleError(err) {
    if (canceled) return;
    awaiting = false;
    done = true;
    callback(err);
  }

  replenish();
}

var eachOfLimit = limit => {
  return (obj, iteratee, callback) => {
    callback = once(callback);

    if (limit <= 0) {
      throw new RangeError('concurrency limit cannot be less than 1');
    }

    if (!obj) {
      return callback(null);
    }

    if (isAsyncGenerator(obj)) {
      return asyncEachOfLimit(obj, limit, iteratee, callback);
    }

    if (isAsyncIterable(obj)) {
      return asyncEachOfLimit(obj[Symbol.asyncIterator](), limit, iteratee, callback);
    }

    var nextElem = createIterator(obj);
    var done = false;
    var canceled = false;
    var running = 0;
    var looping = false;

    function iterateeCallback(err, value) {
      if (canceled) return;
      running -= 1;

      if (err) {
        done = true;
        callback(err);
      } else if (err === false) {
        done = true;
        canceled = true;
      } else if (value === breakLoop || done && running <= 0) {
        done = true;
        return callback(null);
      } else if (!looping) {
        replenish();
      }
    }

    function replenish() {
      looping = true;

      while (running < limit && !done) {
        var elem = nextElem();

        if (elem === null) {
          done = true;

          if (running <= 0) {
            callback(null);
          }

          return;
        }

        running += 1;
        iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
      }

      looping = false;
    }

    replenish();
  };
};
/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */


function eachOfLimit$1(coll, limit, iteratee, callback) {
  return eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

var eachOfLimit$2 = awaitify(eachOfLimit$1, 4); // eachOf implementation optimized for array-likes

exports.forEachOfLimit = exports.eachOfLimit = eachOfLimit$2;

function eachOfArrayLike(coll, iteratee, callback) {
  callback = once(callback);
  var index = 0,
      completed = 0,
      {
    length
  } = coll,
      canceled = false;

  if (length === 0) {
    callback(null);
  }

  function iteratorCallback(err, value) {
    if (err === false) {
      canceled = true;
    }

    if (canceled === true) return;

    if (err) {
      callback(err);
    } else if (++completed === length || value === breakLoop) {
      callback(null);
    }
  }

  for (; index < length; index++) {
    iteratee(coll[index], index, onlyOnce(iteratorCallback));
  }
} // a generic version of eachOf which can handle array, object, and iterator cases.


function eachOfGeneric(coll, iteratee, callback) {
  return eachOfLimit$2(coll, Infinity, iteratee, callback);
}
/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */


function eachOf(coll, iteratee, callback) {
  var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
  return eachOfImplementation(coll, wrapAsync(iteratee), callback);
}

var eachOf$1 = awaitify(eachOf, 3);
/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */

exports.forEachOf = exports.eachOf = eachOf$1;

function map(coll, iteratee, callback) {
  return _asyncMap(eachOf$1, coll, iteratee, callback);
}

var map$1 = awaitify(map, 3);
/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional. The results
 * for each of the applied async functions are passed to the final callback
 * as an array.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {AsyncFunction} - Returns a function that takes no args other than
 * an optional callback, that is the result of applying the `args` to each
 * of the functions.
 * @example
 *
 * const appliedFn = async.applyEach([enableSearch, updateSchema], 'bucket')
 *
 * appliedFn((err, results) => {
 *     // results[0] is the results for `enableSearch`
 *     // results[1] is the results for `updateSchema`
 * });
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async (bucket) => async.applyEach([enableSearch, updateSchema], bucket)(),
 *     callback
 * );
 */

exports.map = map$1;
var applyEach$1 = applyEach(map$1);
/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */

exports.applyEach = applyEach$1;

function eachOfSeries(coll, iteratee, callback) {
  return eachOfLimit$2(coll, 1, iteratee, callback);
}

var eachOfSeries$1 = awaitify(eachOfSeries, 3);
/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */

exports.forEachOfSeries = exports.eachOfSeries = eachOfSeries$1;

function mapSeries(coll, iteratee, callback) {
  return _asyncMap(eachOfSeries$1, coll, iteratee, callback);
}

var mapSeries$1 = awaitify(mapSeries, 3);
/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {AsyncFunction} - A function, that when called, is the result of
 * appling the `args` to the list of functions.  It takes no args, other than
 * a callback.
 */

exports.mapSeries = mapSeries$1;
var applyEachSeries = applyEach(mapSeries$1);
exports.applyEachSeries = applyEachSeries;
const PROMISE_SYMBOL = Symbol('promiseCallback');

function promiseCallback() {
  let resolve, reject;

  function callback(err, ...args) {
    if (err) return reject(err);
    resolve(args.length > 1 ? args : args[0]);
  }

  callback[PROMISE_SYMBOL] = new Promise((res, rej) => {
    resolve = res, reject = rej;
  });
  return callback;
}
/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */


function auto(tasks, concurrency, callback) {
  if (typeof concurrency !== 'number') {
    // concurrency is optional, shift the args.
    callback = concurrency;
    concurrency = null;
  }

  callback = once(callback || promiseCallback());
  var numTasks = Object.keys(tasks).length;

  if (!numTasks) {
    return callback(null);
  }

  if (!concurrency) {
    concurrency = numTasks;
  }

  var results = {};
  var runningTasks = 0;
  var canceled = false;
  var hasError = false;
  var listeners = Object.create(null);
  var readyTasks = []; // for cycle detection:

  var readyToCheck = []; // tasks that have been identified as reachable
  // without the possibility of returning to an ancestor task

  var uncheckedDependencies = {};
  Object.keys(tasks).forEach(key => {
    var task = tasks[key];

    if (!Array.isArray(task)) {
      // no dependencies
      enqueueTask(key, [task]);
      readyToCheck.push(key);
      return;
    }

    var dependencies = task.slice(0, task.length - 1);
    var remainingDependencies = dependencies.length;

    if (remainingDependencies === 0) {
      enqueueTask(key, task);
      readyToCheck.push(key);
      return;
    }

    uncheckedDependencies[key] = remainingDependencies;
    dependencies.forEach(dependencyName => {
      if (!tasks[dependencyName]) {
        throw new Error('async.auto task `' + key + '` has a non-existent dependency `' + dependencyName + '` in ' + dependencies.join(', '));
      }

      addListener(dependencyName, () => {
        remainingDependencies--;

        if (remainingDependencies === 0) {
          enqueueTask(key, task);
        }
      });
    });
  });
  checkForDeadlocks();
  processQueue();

  function enqueueTask(key, task) {
    readyTasks.push(() => runTask(key, task));
  }

  function processQueue() {
    if (canceled) return;

    if (readyTasks.length === 0 && runningTasks === 0) {
      return callback(null, results);
    }

    while (readyTasks.length && runningTasks < concurrency) {
      var run = readyTasks.shift();
      run();
    }
  }

  function addListener(taskName, fn) {
    var taskListeners = listeners[taskName];

    if (!taskListeners) {
      taskListeners = listeners[taskName] = [];
    }

    taskListeners.push(fn);
  }

  function taskComplete(taskName) {
    var taskListeners = listeners[taskName] || [];
    taskListeners.forEach(fn => fn());
    processQueue();
  }

  function runTask(key, task) {
    if (hasError) return;
    var taskCallback = onlyOnce((err, ...result) => {
      runningTasks--;

      if (err === false) {
        canceled = true;
        return;
      }

      if (result.length < 2) {
        [result] = result;
      }

      if (err) {
        var safeResults = {};
        Object.keys(results).forEach(rkey => {
          safeResults[rkey] = results[rkey];
        });
        safeResults[key] = result;
        hasError = true;
        listeners = Object.create(null);
        if (canceled) return;
        callback(err, safeResults);
      } else {
        results[key] = result;
        taskComplete(key);
      }
    });
    runningTasks++;
    var taskFn = wrapAsync(task[task.length - 1]);

    if (task.length > 1) {
      taskFn(results, taskCallback);
    } else {
      taskFn(taskCallback);
    }
  }

  function checkForDeadlocks() {
    // Kahn's algorithm
    // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
    // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
    var currentTask;
    var counter = 0;

    while (readyToCheck.length) {
      currentTask = readyToCheck.pop();
      counter++;
      getDependents(currentTask).forEach(dependent => {
        if (--uncheckedDependencies[dependent] === 0) {
          readyToCheck.push(dependent);
        }
      });
    }

    if (counter !== numTasks) {
      throw new Error('async.auto cannot execute tasks due to a recursive dependency');
    }
  }

  function getDependents(taskName) {
    var result = [];
    Object.keys(tasks).forEach(key => {
      const task = tasks[key];

      if (Array.isArray(task) && task.indexOf(taskName) >= 0) {
        result.push(key);
      }
    });
    return result;
  }

  return callback[PROMISE_SYMBOL];
}

var FN_ARGS = /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/;
var ARROW_FN_ARGS = /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
  const src = func.toString().replace(STRIP_COMMENTS, '');
  let match = src.match(FN_ARGS);

  if (!match) {
    match = src.match(ARROW_FN_ARGS);
  }

  if (!match) throw new Error('could not parse args in autoInject\nSource:\n' + src);
  let [, args] = match;
  return args.replace(/\s/g, '').split(FN_ARG_SPLIT).map(arg => arg.replace(FN_ARG, '').trim());
}
/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */


function autoInject(tasks, callback) {
  var newTasks = {};
  Object.keys(tasks).forEach(key => {
    var taskFn = tasks[key];
    var params;
    var fnIsAsync = isAsync(taskFn);
    var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;

    if (Array.isArray(taskFn)) {
      params = [...taskFn];
      taskFn = params.pop();
      newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
    } else if (hasNoDeps) {
      // no dependencies, use the function as-is
      newTasks[key] = taskFn;
    } else {
      params = parseParams(taskFn);

      if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
        throw new Error("autoInject task functions require explicit parameters.");
      } // remove callback param


      if (!fnIsAsync) params.pop();
      newTasks[key] = params.concat(newTask);
    }

    function newTask(results, taskCb) {
      var newArgs = params.map(name => results[name]);
      newArgs.push(taskCb);
      wrapAsync(taskFn)(...newArgs);
    }
  });
  return auto(newTasks, callback);
} // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.


class DLL {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  removeLink(node) {
    if (node.prev) node.prev.next = node.next;else this.head = node.next;
    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;
    node.prev = node.next = null;
    this.length -= 1;
    return node;
  }

  empty() {
    while (this.head) this.shift();

    return this;
  }

  insertAfter(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
  }

  insertBefore(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
  }

  unshift(node) {
    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
  }

  push(node) {
    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
  }

  shift() {
    return this.head && this.removeLink(this.head);
  }

  pop() {
    return this.tail && this.removeLink(this.tail);
  }

  toArray() {
    return [...this];
  }

  *[Symbol.iterator]() {
    var cur = this.head;

    while (cur) {
      yield cur.data;
      cur = cur.next;
    }
  }

  remove(testFn) {
    var curr = this.head;

    while (curr) {
      var {
        next
      } = curr;

      if (testFn(curr)) {
        this.removeLink(curr);
      }

      curr = next;
    }

    return this;
  }

}

function setInitial(dll, node) {
  dll.length = 1;
  dll.head = dll.tail = node;
}

function queue(worker, concurrency, payload) {
  if (concurrency == null) {
    concurrency = 1;
  } else if (concurrency === 0) {
    throw new RangeError('Concurrency must not be zero');
  }

  var _worker = wrapAsync(worker);

  var numRunning = 0;
  var workersList = [];
  const events = {
    error: [],
    drain: [],
    saturated: [],
    unsaturated: [],
    empty: []
  };

  function on(event, handler) {
    events[event].push(handler);
  }

  function once(event, handler) {
    const handleAndRemove = (...args) => {
      off(event, handleAndRemove);
      handler(...args);
    };

    events[event].push(handleAndRemove);
  }

  function off(event, handler) {
    if (!event) return Object.keys(events).forEach(ev => events[ev] = []);
    if (!handler) return events[event] = [];
    events[event] = events[event].filter(ev => ev !== handler);
  }

  function trigger(event, ...args) {
    events[event].forEach(handler => handler(...args));
  }

  var processingScheduled = false;

  function _insert(data, insertAtFront, rejectOnError, callback) {
    if (callback != null && typeof callback !== 'function') {
      throw new Error('task callback must be a function');
    }

    q.started = true;
    var res, rej;

    function promiseCallback(err, ...args) {
      // we don't care about the error, let the global error handler
      // deal with it
      if (err) return rejectOnError ? rej(err) : res();
      if (args.length <= 1) return res(args[0]);
      res(args);
    }

    var item = {
      data,
      callback: rejectOnError ? promiseCallback : callback || promiseCallback
    };

    if (insertAtFront) {
      q._tasks.unshift(item);
    } else {
      q._tasks.push(item);
    }

    if (!processingScheduled) {
      processingScheduled = true;
      setImmediate$1(() => {
        processingScheduled = false;
        q.process();
      });
    }

    if (rejectOnError || !callback) {
      return new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
    }
  }

  function _createCB(tasks) {
    return function (err, ...args) {
      numRunning -= 1;

      for (var i = 0, l = tasks.length; i < l; i++) {
        var task = tasks[i];
        var index = workersList.indexOf(task);

        if (index === 0) {
          workersList.shift();
        } else if (index > 0) {
          workersList.splice(index, 1);
        }

        task.callback(err, ...args);

        if (err != null) {
          trigger('error', err, task.data);
        }
      }

      if (numRunning <= q.concurrency - q.buffer) {
        trigger('unsaturated');
      }

      if (q.idle()) {
        trigger('drain');
      }

      q.process();
    };
  }

  function _maybeDrain(data) {
    if (data.length === 0 && q.idle()) {
      // call drain immediately if there are no tasks
      setImmediate$1(() => trigger('drain'));
      return true;
    }

    return false;
  }

  const eventMethod = name => handler => {
    if (!handler) {
      return new Promise((resolve, reject) => {
        once(name, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      });
    }

    off(name);
    on(name, handler);
  };

  var isProcessing = false;
  var q = {
    _tasks: new DLL(),

    *[Symbol.iterator]() {
      yield* q._tasks[Symbol.iterator]();
    },

    concurrency,
    payload,
    buffer: concurrency / 4,
    started: false,
    paused: false,

    push(data, callback) {
      if (Array.isArray(data)) {
        if (_maybeDrain(data)) return;
        return data.map(datum => _insert(datum, false, false, callback));
      }

      return _insert(data, false, false, callback);
    },

    pushAsync(data, callback) {
      if (Array.isArray(data)) {
        if (_maybeDrain(data)) return;
        return data.map(datum => _insert(datum, false, true, callback));
      }

      return _insert(data, false, true, callback);
    },

    kill() {
      off();

      q._tasks.empty();
    },

    unshift(data, callback) {
      if (Array.isArray(data)) {
        if (_maybeDrain(data)) return;
        return data.map(datum => _insert(datum, true, false, callback));
      }

      return _insert(data, true, false, callback);
    },

    unshiftAsync(data, callback) {
      if (Array.isArray(data)) {
        if (_maybeDrain(data)) return;
        return data.map(datum => _insert(datum, true, true, callback));
      }

      return _insert(data, true, true, callback);
    },

    remove(testFn) {
      q._tasks.remove(testFn);
    },

    process() {
      // Avoid trying to start too many processing operations. This can occur
      // when callbacks resolve synchronously (#1267).
      if (isProcessing) {
        return;
      }

      isProcessing = true;

      while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
        var tasks = [],
            data = [];
        var l = q._tasks.length;
        if (q.payload) l = Math.min(l, q.payload);

        for (var i = 0; i < l; i++) {
          var node = q._tasks.shift();

          tasks.push(node);
          workersList.push(node);
          data.push(node.data);
        }

        numRunning += 1;

        if (q._tasks.length === 0) {
          trigger('empty');
        }

        if (numRunning === q.concurrency) {
          trigger('saturated');
        }

        var cb = onlyOnce(_createCB(tasks));

        _worker(data, cb);
      }

      isProcessing = false;
    },

    length() {
      return q._tasks.length;
    },

    running() {
      return numRunning;
    },

    workersList() {
      return workersList;
    },

    idle() {
      return q._tasks.length + numRunning === 0;
    },

    pause() {
      q.paused = true;
    },

    resume() {
      if (q.paused === false) {
        return;
      }

      q.paused = false;
      setImmediate$1(q.process);
    }

  }; // define these as fixed properties, so people get useful errors when updating

  Object.defineProperties(q, {
    saturated: {
      writable: false,
      value: eventMethod('saturated')
    },
    unsaturated: {
      writable: false,
      value: eventMethod('unsaturated')
    },
    empty: {
      writable: false,
      value: eventMethod('empty')
    },
    drain: {
      writable: false,
      value: eventMethod('drain')
    },
    error: {
      writable: false,
      value: eventMethod('error')
    }
  });
  return q;
}
/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.QueueObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * await cargo.push({name: 'baz'});
 * console.log('finished processing baz');
 */


function cargo(worker, payload) {
  return queue(worker, 1, payload);
}
/**
 * Creates a `cargoQueue` object with the specified payload. Tasks added to the
 * cargoQueue will be processed together (up to the `payload` limit) in `concurrency` parallel workers.
 * If the all `workers` are in progress, the task is queued until one becomes available. Once
 * a `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, and [`cargo`]{@link module:ControlFlow.cargo} passes an array of tasks to a single worker,
 * the cargoQueue passes an array of tasks to multiple parallel workers.
 *
 * @name cargoQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @see [async.cargo]{@link module:ControlFLow.cargo}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.QueueObject} A cargoQueue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargoQueue and inner queue.
 * @example
 *
 * // create a cargoQueue object with payload 2 and concurrency 2
 * var cargoQueue = async.cargoQueue(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2, 2);
 *
 * // add some items
 * cargoQueue.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargoQueue.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargoQueue.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 * cargoQueue.push({name: 'boo'}, function(err) {
 *     console.log('finished processing boo');
 * });
 */


function cargo$1(worker, concurrency, payload) {
  return queue(worker, concurrency, payload);
}
/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */


function reduce(coll, memo, iteratee, callback) {
  callback = once(callback);

  var _iteratee = wrapAsync(iteratee);

  return eachOfSeries$1(coll, (x, i, iterCb) => {
    _iteratee(memo, x, (err, v) => {
      memo = v;
      iterCb(err);
    });
  }, err => callback(err, memo));
}

var reduce$1 = awaitify(reduce, 4);
/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */

exports.foldl = exports.inject = exports.reduce = reduce$1;

function seq(...functions) {
  var _functions = functions.map(wrapAsync);

  return function (...args) {
    var that = this;
    var cb = args[args.length - 1];

    if (typeof cb == 'function') {
      args.pop();
    } else {
      cb = promiseCallback();
    }

    reduce$1(_functions, args, (newargs, fn, iterCb) => {
      fn.apply(that, newargs.concat((err, ...nextargs) => {
        iterCb(err, nextargs);
      }));
    }, (err, results) => cb(err, ...results));
    return cb[PROMISE_SYMBOL];
  };
}
/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * If the last argument to the composed function is not a function, a promise
 * is returned when you call it.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */


function compose(...args) {
  return seq(...args.reverse());
}
/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */


function mapLimit(coll, limit, iteratee, callback) {
  return _asyncMap(eachOfLimit(limit), coll, iteratee, callback);
}

var mapLimit$1 = awaitify(mapLimit, 4);
/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @alias flatMapLimit
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 */

exports.mapLimit = mapLimit$1;

function concatLimit(coll, limit, iteratee, callback) {
  var _iteratee = wrapAsync(iteratee);

  return mapLimit$1(coll, limit, (val, iterCb) => {
    _iteratee(val, (err, ...args) => {
      if (err) return iterCb(err);
      return iterCb(err, args);
    });
  }, (err, mapResults) => {
    var result = [];

    for (var i = 0; i < mapResults.length; i++) {
      if (mapResults[i]) {
        result = result.concat(...mapResults[i]);
      }
    }

    return callback(err, result);
  });
}

var concatLimit$1 = awaitify(concatLimit, 4);
/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. The results array will be returned in
 * the original order of `coll` passed to the `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @alias flatMap
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */

exports.flatMapLimit = exports.concatLimit = concatLimit$1;

function concat(coll, iteratee, callback) {
  return concatLimit$1(coll, Infinity, iteratee, callback);
}

var concat$1 = awaitify(concat, 3);
/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @alias flatMapSeries
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 */

exports.flatMap = exports.concat = concat$1;

function concatSeries(coll, iteratee, callback) {
  return concatLimit$1(coll, 1, iteratee, callback);
}

var concatSeries$1 = awaitify(concatSeries, 3);
/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */

exports.flatMapSeries = exports.concatSeries = concatSeries$1;

function constant(...args) {
  return function (...ignoredArgs
  /*, callback*/
  ) {
    var callback = ignoredArgs.pop();
    return callback(null, ...args);
  };
}

function _createTester(check, getResult) {
  return (eachfn, arr, _iteratee, cb) => {
    var testPassed = false;
    var testResult;
    const iteratee = wrapAsync(_iteratee);
    eachfn(arr, (value, _, callback) => {
      iteratee(value, (err, result) => {
        if (err || err === false) return callback(err);

        if (check(result) && !testResult) {
          testPassed = true;
          testResult = getResult(true, value);
          return callback(null, breakLoop);
        }

        callback();
      });
    }, err => {
      if (err) return cb(err);
      cb(null, testPassed ? testResult : getResult(false));
    });
  };
}
/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns A Promise, if no callback is passed
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */


function detect(coll, iteratee, callback) {
  return _createTester(bool => bool, (res, item) => item)(eachOf$1, coll, iteratee, callback);
}

var detect$1 = awaitify(detect, 3);
/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns a Promise if no callback is passed
 */

exports.find = exports.detect = detect$1;

function detectLimit(coll, limit, iteratee, callback) {
  return _createTester(bool => bool, (res, item) => item)(eachOfLimit(limit), coll, iteratee, callback);
}

var detectLimit$1 = awaitify(detectLimit, 4);
/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns a Promise if no callback is passed
 */

exports.findLimit = exports.detectLimit = detectLimit$1;

function detectSeries(coll, iteratee, callback) {
  return _createTester(bool => bool, (res, item) => item)(eachOfLimit(1), coll, iteratee, callback);
}

var detectSeries$1 = awaitify(detectSeries, 3);
exports.findSeries = exports.detectSeries = detectSeries$1;

function consoleFunc(name) {
  return (fn, ...args) => wrapAsync(fn)(...args, (err, ...resultArgs) => {
    if (typeof console === 'object') {
      if (err) {
        if (console.error) {
          console.error(err);
        }
      } else if (console[name]) {
        resultArgs.forEach(x => console[name](x));
      }
    }
  });
}
/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */


var dir = consoleFunc('dir');
/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform after each
 * execution of `iteratee`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 */

exports.dir = dir;

function doWhilst(iteratee, test, callback) {
  callback = onlyOnce(callback);

  var _fn = wrapAsync(iteratee);

  var _test = wrapAsync(test);

  var results;

  function next(err, ...args) {
    if (err) return callback(err);
    if (err === false) return;
    results = args;

    _test(...args, check);
  }

  function check(err, truth) {
    if (err) return callback(err);
    if (err === false) return;
    if (!truth) return callback(null, ...results);

    _fn(next);
  }

  return check(null, true);
}

var doWhilst$1 = awaitify(doWhilst, 3);
/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform after each
 * execution of `iteratee`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `iteratee`
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 */

exports.doDuring = exports.doWhilst = doWhilst$1;

function doUntil(iteratee, test, callback) {
  const _test = wrapAsync(test);

  return doWhilst$1(iteratee, (...args) => {
    const cb = args.pop();

    _test(...args, (err, truth) => cb(err, !truth));
  }, callback);
}

function _withoutIndex(iteratee) {
  return (value, index, callback) => iteratee(value, callback);
}
/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */


function eachLimit(coll, iteratee, callback) {
  return eachOf$1(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

var each = awaitify(eachLimit, 3);
/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */

exports.forEach = exports.each = each;

function eachLimit$1(coll, limit, iteratee, callback) {
  return eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

var eachLimit$2 = awaitify(eachLimit$1, 4);
/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * Note, that unlike [`each`]{@link module:Collections.each}, this function applies iteratee to each item
 * in series and therefore the iteratee functions will complete in order.

 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */

exports.forEachLimit = exports.eachLimit = eachLimit$2;

function eachSeries(coll, iteratee, callback) {
  return eachLimit$2(coll, 1, iteratee, callback);
}

var eachSeries$1 = awaitify(eachSeries, 3);
/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */

exports.forEachSeries = exports.eachSeries = eachSeries$1;

function ensureAsync(fn) {
  if (isAsync(fn)) return fn;
  return function (...args
  /*, callback*/
  ) {
    var callback = args.pop();
    var sync = true;
    args.push((...innerArgs) => {
      if (sync) {
        setImmediate$1(() => callback(...innerArgs));
      } else {
        callback(...innerArgs);
      }
    });
    fn.apply(this, args);
    sync = false;
  };
}
/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */


function every(coll, iteratee, callback) {
  return _createTester(bool => !bool, res => !res)(eachOf$1, coll, iteratee, callback);
}

var every$1 = awaitify(every, 3);
/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */

exports.all = exports.every = every$1;

function everyLimit(coll, limit, iteratee, callback) {
  return _createTester(bool => !bool, res => !res)(eachOfLimit(limit), coll, iteratee, callback);
}

var everyLimit$1 = awaitify(everyLimit, 4);
/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */

exports.allLimit = exports.everyLimit = everyLimit$1;

function everySeries(coll, iteratee, callback) {
  return _createTester(bool => !bool, res => !res)(eachOfSeries$1, coll, iteratee, callback);
}

var everySeries$1 = awaitify(everySeries, 3);
exports.allSeries = exports.everySeries = everySeries$1;

function filterArray(eachfn, arr, iteratee, callback) {
  var truthValues = new Array(arr.length);
  eachfn(arr, (x, index, iterCb) => {
    iteratee(x, (err, v) => {
      truthValues[index] = !!v;
      iterCb(err);
    });
  }, err => {
    if (err) return callback(err);
    var results = [];

    for (var i = 0; i < arr.length; i++) {
      if (truthValues[i]) results.push(arr[i]);
    }

    callback(null, results);
  });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
  var results = [];
  eachfn(coll, (x, index, iterCb) => {
    iteratee(x, (err, v) => {
      if (err) return iterCb(err);

      if (v) {
        results.push({
          index,
          value: x
        });
      }

      iterCb(err);
    });
  }, err => {
    if (err) return callback(err);
    callback(null, results.sort((a, b) => a.index - b.index).map(v => v.value));
  });
}

function _filter(eachfn, coll, iteratee, callback) {
  var filter = isArrayLike(coll) ? filterArray : filterGeneric;
  return filter(eachfn, coll, wrapAsync(iteratee), callback);
}
/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */


function filter(coll, iteratee, callback) {
  return _filter(eachOf$1, coll, iteratee, callback);
}

var filter$1 = awaitify(filter, 3);
/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback provided
 */

exports.select = exports.filter = filter$1;

function filterLimit(coll, limit, iteratee, callback) {
  return _filter(eachOfLimit(limit), coll, iteratee, callback);
}

var filterLimit$1 = awaitify(filterLimit, 4);
/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 * @returns {Promise} a promise, if no callback provided
 */

exports.selectLimit = exports.filterLimit = filterLimit$1;

function filterSeries(coll, iteratee, callback) {
  return _filter(eachOfSeries$1, coll, iteratee, callback);
}

var filterSeries$1 = awaitify(filterSeries, 3);
/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @returns {Promise} a promise that rejects if an error occurs and an errback
 * is not passed
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */

exports.selectSeries = exports.filterSeries = filterSeries$1;

function forever(fn, errback) {
  var done = onlyOnce(errback);
  var task = wrapAsync(ensureAsync(fn));

  function next(err) {
    if (err) return done(err);
    if (err === false) return;
    task(next);
  }

  return next();
}

var forever$1 = awaitify(forever, 2);
/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 */

exports.forever = forever$1;

function groupByLimit(coll, limit, iteratee, callback) {
  var _iteratee = wrapAsync(iteratee);

  return mapLimit$1(coll, limit, (val, iterCb) => {
    _iteratee(val, (err, key) => {
      if (err) return iterCb(err);
      return iterCb(err, {
        key,
        val
      });
    });
  }, (err, mapResults) => {
    var result = {}; // from MDN, handle object having an `hasOwnProperty` prop

    var {
      hasOwnProperty
    } = Object.prototype;

    for (var i = 0; i < mapResults.length; i++) {
      if (mapResults[i]) {
        var {
          key
        } = mapResults[i];
        var {
          val
        } = mapResults[i];

        if (hasOwnProperty.call(result, key)) {
          result[key].push(val);
        } else {
          result[key] = [val];
        }
      }
    }

    return callback(err, result);
  });
}

var groupByLimit$1 = awaitify(groupByLimit, 4);
/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */

exports.groupByLimit = groupByLimit$1;

function groupBy(coll, iteratee, callback) {
  return groupByLimit$1(coll, Infinity, iteratee, callback);
}
/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 */


function groupBySeries(coll, iteratee, callback) {
  return groupByLimit$1(coll, 1, iteratee, callback);
}
/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */


var log = consoleFunc('log');
/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */

exports.log = log;

function mapValuesLimit(obj, limit, iteratee, callback) {
  callback = once(callback);
  var newObj = {};

  var _iteratee = wrapAsync(iteratee);

  return eachOfLimit(limit)(obj, (val, key, next) => {
    _iteratee(val, key, (err, result) => {
      if (err) return next(err);
      newObj[key] = result;
      next(err);
    });
  }, err => callback(err, newObj));
}

var mapValuesLimit$1 = awaitify(mapValuesLimit, 4);
/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

exports.mapValuesLimit = mapValuesLimit$1;

function mapValues(obj, iteratee, callback) {
  return mapValuesLimit$1(obj, Infinity, iteratee, callback);
}
/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */


function mapValuesSeries(obj, iteratee, callback) {
  return mapValuesLimit$1(obj, 1, iteratee, callback);
}
/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * **Note: if the async function errs, the result will not be cached and
 * subsequent calls will call the wrapped function.**
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */


function memoize(fn, hasher = v => v) {
  var memo = Object.create(null);
  var queues = Object.create(null);

  var _fn = wrapAsync(fn);

  var memoized = initialParams((args, callback) => {
    var key = hasher(...args);

    if (key in memo) {
      setImmediate$1(() => callback(null, ...memo[key]));
    } else if (key in queues) {
      queues[key].push(callback);
    } else {
      queues[key] = [callback];

      _fn(...args, (err, ...resultArgs) => {
        // #1465 don't memoize if an error occurred
        if (!err) {
          memo[key] = resultArgs;
        }

        var q = queues[key];
        delete queues[key];

        for (var i = 0, l = q.length; i < l; i++) {
          q[i](err, ...resultArgs);
        }
      });
    }
  });
  memoized.memo = memo;
  memoized.unmemoized = fn;
  return memoized;
}
/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `process.nextTick`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.setImmediate]{@link module:Utils.setImmediate}
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */


var _defer$1;

if (hasNextTick) {
  _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
  _defer$1 = setImmediate;
} else {
  _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);
exports.nextTick = nextTick;

var _parallel = awaitify((eachfn, tasks, callback) => {
  var results = isArrayLike(tasks) ? [] : {};
  eachfn(tasks, (task, key, taskCb) => {
    wrapAsync(task)((err, ...result) => {
      if (result.length < 2) {
        [result] = result;
      }

      results[key] = result;
      taskCb(err);
    });
  }, err => callback(err, results));
}, 3);
/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */


function parallel(tasks, callback) {
  return _parallel(eachOf$1, tasks, callback);
}
/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 */


function parallelLimit(tasks, limit, callback) {
  return _parallel(eachOfLimit(limit), tasks, callback);
}
/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Iterable} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {number} payload - an integer that specifies how many items are
 * passed to the worker function at a time. only applies if this is a
 * [cargo]{@link module:ControlFlow.cargo} object
 * @property {AsyncFunction} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {AsyncFunction} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {AsyncFunction} pushAsync - the same as `q.push`, except this returns
 * a promise that rejects if an error occurs.
 * @property {AsyncFunction} unshirtAsync - the same as `q.unshift`, except this returns
 * a promise that rejects if an error occurs.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a function that sets a callback that is
 * called when the number of running workers hits the `concurrency` limit, and
 * further tasks will be queued.  If the callback is omitted, `q.saturated()`
 * returns a promise for the next occurrence.
 * @property {Function} unsaturated - a function that sets a callback that is
 * called when the number of running workers is less than the `concurrency` &
 * `buffer` limits, and further tasks will not be queued. If the callback is
 * omitted, `q.unsaturated()` returns a promise for the next occurrence.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a function that sets a callback that is called
 * when the last item from the `queue` is given to a `worker`. If the callback
 * is omitted, `q.empty()` returns a promise for the next occurrence.
 * @property {Function} drain - a function that sets a callback that is called
 * when the last item from the `queue` has returned from the `worker`. If the
 * callback is omitted, `q.drain()` returns a promise for the next occurrence.
 * @property {Function} error - a function that sets a callback that is called
 * when a task errors. Has the signature `function(error, task)`. If the
 * callback is omitted, `error()` returns a promise that rejects on the next
 * error.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 *
 * @example
 * const q = aync.queue(worker, 2)
 * q.push(item1)
 * q.push(item2)
 * q.push(item3)
 * // queues are iterable, spread into an array to inspect
 * const items = [...q] // [item1, item2, item3]
 * // or use for of
 * for (let item of q) {
 *     console.log(item)
 * }
 *
 * q.drain(() => {
 *     console.log('all done')
 * })
 * // or
 * await q.drain()
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can be
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain(function() {
 *     console.log('all items have been processed');
 * });
 * // or await the end
 * await q.drain()
 *
 * // assign an error callback
 * q.error(function(err, task) {
 *     console.error('task experienced an error');
 * });
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * // callback is optional
 * q.push({name: 'bar'});
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */


function queue$1(worker, concurrency) {
  var _worker = wrapAsync(worker);

  return queue((items, cb) => {
    _worker(items[0], cb);
  }, concurrency, 1);
} // Binary min-heap implementation used for priority queue.
// Implementation is stable, i.e. push time is considered for equal priorities


class Heap {
  constructor() {
    this.heap = [];
    this.pushCount = Number.MIN_SAFE_INTEGER;
  }

  get length() {
    return this.heap.length;
  }

  empty() {
    this.heap = [];
    return this;
  }

  percUp(index) {
    let p;

    while (index > 0 && smaller(this.heap[index], this.heap[p = parent(index)])) {
      let t = this.heap[index];
      this.heap[index] = this.heap[p];
      this.heap[p] = t;
      index = p;
    }
  }

  percDown(index) {
    let l;

    while ((l = leftChi(index)) < this.heap.length) {
      if (l + 1 < this.heap.length && smaller(this.heap[l + 1], this.heap[l])) {
        l = l + 1;
      }

      if (smaller(this.heap[index], this.heap[l])) {
        break;
      }

      let t = this.heap[index];
      this.heap[index] = this.heap[l];
      this.heap[l] = t;
      index = l;
    }
  }

  push(node) {
    node.pushCount = ++this.pushCount;
    this.heap.push(node);
    this.percUp(this.heap.length - 1);
  }

  unshift(node) {
    return this.heap.push(node);
  }

  shift() {
    let [top] = this.heap;
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.percDown(0);
    return top;
  }

  toArray() {
    return [...this];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.heap.length; i++) {
      yield this.heap[i].data;
    }
  }

  remove(testFn) {
    let j = 0;

    for (let i = 0; i < this.heap.length; i++) {
      if (!testFn(this.heap[i])) {
        this.heap[j] = this.heap[i];
        j++;
      }
    }

    this.heap.splice(j);

    for (let i = parent(this.heap.length - 1); i >= 0; i--) {
      this.percDown(i);
    }

    return this;
  }

}

function leftChi(i) {
  return (i << 1) + 1;
}

function parent(i) {
  return (i + 1 >> 1) - 1;
}

function smaller(x, y) {
  if (x.priority !== y.priority) {
    return x.priority < y.priority;
  } else {
    return x.pushCount < y.pushCount;
  }
}
/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */


function priorityQueue(worker, concurrency) {
  // Start with a normal queue
  var q = queue$1(worker, concurrency);
  q._tasks = new Heap(); // Override push to accept second parameter representing priority

  q.push = function (data, priority = 0, callback = () => {}) {
    if (typeof callback !== 'function') {
      throw new Error('task callback must be a function');
    }

    q.started = true;

    if (!Array.isArray(data)) {
      data = [data];
    }

    if (data.length === 0 && q.idle()) {
      // call drain immediately if there are no tasks
      return setImmediate$1(() => q.drain());
    }

    for (var i = 0, l = data.length; i < l; i++) {
      var item = {
        data: data[i],
        priority,
        callback
      };

      q._tasks.push(item);
    }

    setImmediate$1(q.process);
  }; // Remove unshift function


  delete q.unshift;
  return q;
}
/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */


function race(tasks, callback) {
  callback = once(callback);
  if (!Array.isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
  if (!tasks.length) return callback();

  for (var i = 0, l = tasks.length; i < l; i++) {
    wrapAsync(tasks[i])(callback);
  }
}

var race$1 = awaitify(race, 2);
/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */

exports.race = race$1;

function reduceRight(array, memo, iteratee, callback) {
  var reversed = [...array].reverse();
  return reduce$1(reversed, memo, iteratee, callback);
}
/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */


function reflect(fn) {
  var _fn = wrapAsync(fn);

  return initialParams(function reflectOn(args, reflectCallback) {
    args.push((error, ...cbArgs) => {
      let retVal = {};

      if (error) {
        retVal.error = error;
      }

      if (cbArgs.length > 0) {
        var value = cbArgs;

        if (cbArgs.length <= 1) {
          [value] = cbArgs;
        }

        retVal.value = value;
      }

      reflectCallback(null, retVal);
    });
    return _fn.apply(this, args);
  });
}
/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */


function reflectAll(tasks) {
  var results;

  if (Array.isArray(tasks)) {
    results = tasks.map(reflect);
  } else {
    results = {};
    Object.keys(tasks).forEach(key => {
      results[key] = reflect.call(this, tasks[key]);
    });
  }

  return results;
}

function reject(eachfn, arr, _iteratee, callback) {
  const iteratee = wrapAsync(_iteratee);
  return _filter(eachfn, arr, (value, cb) => {
    iteratee(value, (err, v) => {
      cb(err, !v);
    });
  }, callback);
}
/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */


function reject$1(coll, iteratee, callback) {
  return reject(eachOf$1, coll, iteratee, callback);
}

var reject$2 = awaitify(reject$1, 3);
/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */

exports.reject = reject$2;

function rejectLimit(coll, limit, iteratee, callback) {
  return reject(eachOfLimit(limit), coll, iteratee, callback);
}

var rejectLimit$1 = awaitify(rejectLimit, 4);
/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */

exports.rejectLimit = rejectLimit$1;

function rejectSeries(coll, iteratee, callback) {
  return reject(eachOfSeries$1, coll, iteratee, callback);
}

var rejectSeries$1 = awaitify(rejectSeries, 3);
exports.rejectSeries = rejectSeries$1;

function constant$1(value) {
  return function () {
    return value;
  };
}
/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 * @returns {Promise} a promise if no callback provided
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */


const DEFAULT_TIMES = 5;
const DEFAULT_INTERVAL = 0;

function retry(opts, task, callback) {
  var options = {
    times: DEFAULT_TIMES,
    intervalFunc: constant$1(DEFAULT_INTERVAL)
  };

  if (arguments.length < 3 && typeof opts === 'function') {
    callback = task || promiseCallback();
    task = opts;
  } else {
    parseTimes(options, opts);
    callback = callback || promiseCallback();
  }

  if (typeof task !== 'function') {
    throw new Error("Invalid arguments for async.retry");
  }

  var _task = wrapAsync(task);

  var attempt = 1;

  function retryAttempt() {
    _task((err, ...args) => {
      if (err === false) return;

      if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
        setTimeout(retryAttempt, options.intervalFunc(attempt - 1));
      } else {
        callback(err, ...args);
      }
    });
  }

  retryAttempt();
  return callback[PROMISE_SYMBOL];
}

function parseTimes(acc, t) {
  if (typeof t === 'object') {
    acc.times = +t.times || DEFAULT_TIMES;
    acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
    acc.errorFilter = t.errorFilter;
  } else if (typeof t === 'number' || typeof t === 'string') {
    acc.times = +t || DEFAULT_TIMES;
  } else {
    throw new Error("Invalid arguments for async.retry");
  }
}
/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`, except for a `opts.arity` that
 * is the arity of the `task` function, defaulting to `task.length`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */


function retryable(opts, task) {
  if (!task) {
    task = opts;
    opts = null;
  }

  let arity = opts && opts.arity || task.length;

  if (isAsync(task)) {
    arity += 1;
  }

  var _task = wrapAsync(task);

  return initialParams((args, callback) => {
    if (args.length < arity - 1 || callback == null) {
      args.push(callback);
      callback = promiseCallback();
    }

    function taskFn(cb) {
      _task(...args, cb);
    }

    if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
    return callback[PROMISE_SYMBOL];
  });
}
/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @return {Promise} a promise, if no callback is passed
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */


function series(tasks, callback) {
  return _parallel(eachOfSeries$1, tasks, callback);
}
/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */


function some(coll, iteratee, callback) {
  return _createTester(Boolean, res => res)(eachOf$1, coll, iteratee, callback);
}

var some$1 = awaitify(some, 3);
/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */

exports.any = exports.some = some$1;

function someLimit(coll, limit, iteratee, callback) {
  return _createTester(Boolean, res => res)(eachOfLimit(limit), coll, iteratee, callback);
}

var someLimit$1 = awaitify(someLimit, 4);
/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */

exports.anyLimit = exports.someLimit = someLimit$1;

function someSeries(coll, iteratee, callback) {
  return _createTester(Boolean, res => res)(eachOfSeries$1, coll, iteratee, callback);
}

var someSeries$1 = awaitify(someSeries, 3);
/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback passed
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */

exports.anySeries = exports.someSeries = someSeries$1;

function sortBy(coll, iteratee, callback) {
  var _iteratee = wrapAsync(iteratee);

  return map$1(coll, (x, iterCb) => {
    _iteratee(x, (err, criteria) => {
      if (err) return iterCb(err);
      iterCb(err, {
        value: x,
        criteria
      });
    });
  }, (err, results) => {
    if (err) return callback(err);
    callback(null, results.sort(comparator).map(v => v.value));
  });

  function comparator(left, right) {
    var a = left.criteria,
        b = right.criteria;
    return a < b ? -1 : a > b ? 1 : 0;
  }
}

var sortBy$1 = awaitify(sortBy, 3);
/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */

exports.sortBy = sortBy$1;

function timeout(asyncFn, milliseconds, info) {
  var fn = wrapAsync(asyncFn);
  return initialParams((args, callback) => {
    var timedOut = false;
    var timer;

    function timeoutCallback() {
      var name = asyncFn.name || 'anonymous';
      var error = new Error('Callback function "' + name + '" timed out.');
      error.code = 'ETIMEDOUT';

      if (info) {
        error.info = info;
      }

      timedOut = true;
      callback(error);
    }

    args.push((...cbArgs) => {
      if (!timedOut) {
        callback(...cbArgs);
        clearTimeout(timer);
      }
    }); // setup timer and call original function

    timer = setTimeout(timeoutCallback, milliseconds);
    fn(...args);
  });
}

function range(size) {
  var result = Array(size);

  while (size--) {
    result[size] = size;
  }

  return result;
}
/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 */


function timesLimit(count, limit, iteratee, callback) {
  var _iteratee = wrapAsync(iteratee);

  return mapLimit$1(range(count), limit, _iteratee, callback);
}
/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */


function times(n, iteratee, callback) {
  return timesLimit(n, Infinity, iteratee, callback);
}
/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 */


function timesSeries(n, iteratee, callback) {
  return timesLimit(n, 1, iteratee, callback);
}
/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in parallel, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc[index] = item * 2
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */


function transform(coll, accumulator, iteratee, callback) {
  if (arguments.length <= 3 && typeof accumulator === 'function') {
    callback = iteratee;
    iteratee = accumulator;
    accumulator = Array.isArray(coll) ? [] : {};
  }

  callback = once(callback || promiseCallback());

  var _iteratee = wrapAsync(iteratee);

  eachOf$1(coll, (v, k, cb) => {
    _iteratee(accumulator, v, k, cb);
  }, err => callback(err, accumulator));
  return callback[PROMISE_SYMBOL];
}
/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 * async.tryEach([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */


function tryEach(tasks, callback) {
  var error = null;
  var result;
  return eachSeries$1(tasks, (task, taskCb) => {
    wrapAsync(task)((err, ...args) => {
      if (err === false) return taskCb(err);

      if (args.length < 2) {
        [result] = args;
      } else {
        result = args;
      }

      error = err;
      taskCb(err ? null : {});
    });
  }, () => callback(error, result));
}

var tryEach$1 = awaitify(tryEach);
/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */

exports.tryEach = tryEach$1;

function unmemoize(fn) {
  return (...args) => {
    return (fn.unmemoized || fn)(...args);
  };
}
/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function test(cb) { cb(null, count < 5); },
 *     function iter(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */


function whilst(test, iteratee, callback) {
  callback = onlyOnce(callback);

  var _fn = wrapAsync(iteratee);

  var _test = wrapAsync(test);

  var results = [];

  function next(err, ...rest) {
    if (err) return callback(err);
    results = rest;
    if (err === false) return;

    _test(check);
  }

  function check(err, truth) {
    if (err) return callback(err);
    if (err === false) return;
    if (!truth) return callback(null, ...results);

    _fn(next);
  }

  return _test(check);
}

var whilst$1 = awaitify(whilst, 3);
/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `iteratee`. Invoked with (callback).
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if a callback is not passed
 *
 * @example
 * const results = []
 * let finished = false
 * async.until(function test(page, cb) {
 *     cb(null, finished)
 * }, function iter(next) {
 *     fetchPage(url, (err, body) => {
 *         if (err) return next(err)
 *         results = results.concat(body.objects)
 *         finished = !!body.next
 *         next(err)
 *     })
 * }, function done (err) {
 *     // all pages have been fetched
 * })
 */

exports.during = exports.whilst = whilst$1;

function until(test, iteratee, callback) {
  const _test = wrapAsync(test);

  return whilst$1(cb => _test((err, truth) => cb(err, !truth)), iteratee, callback);
}
/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */


function waterfall(tasks, callback) {
  callback = once(callback);
  if (!Array.isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
  if (!tasks.length) return callback();
  var taskIndex = 0;

  function nextTask(args) {
    var task = wrapAsync(tasks[taskIndex++]);
    task(...args, onlyOnce(next));
  }

  function next(err, ...args) {
    if (err === false) return;

    if (err || taskIndex === tasks.length) {
      return callback(err, ...args);
    }

    nextTask(args);
  }

  nextTask([]);
}

var waterfall$1 = awaitify(waterfall);
/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

exports.waterfall = waterfall$1;
var index = {
  apply,
  applyEach: applyEach$1,
  applyEachSeries,
  asyncify,
  auto,
  autoInject,
  cargo,
  cargoQueue: cargo$1,
  compose,
  concat: concat$1,
  concatLimit: concatLimit$1,
  concatSeries: concatSeries$1,
  constant,
  detect: detect$1,
  detectLimit: detectLimit$1,
  detectSeries: detectSeries$1,
  dir,
  doUntil,
  doWhilst: doWhilst$1,
  each,
  eachLimit: eachLimit$2,
  eachOf: eachOf$1,
  eachOfLimit: eachOfLimit$2,
  eachOfSeries: eachOfSeries$1,
  eachSeries: eachSeries$1,
  ensureAsync,
  every: every$1,
  everyLimit: everyLimit$1,
  everySeries: everySeries$1,
  filter: filter$1,
  filterLimit: filterLimit$1,
  filterSeries: filterSeries$1,
  forever: forever$1,
  groupBy,
  groupByLimit: groupByLimit$1,
  groupBySeries,
  log,
  map: map$1,
  mapLimit: mapLimit$1,
  mapSeries: mapSeries$1,
  mapValues,
  mapValuesLimit: mapValuesLimit$1,
  mapValuesSeries,
  memoize,
  nextTick,
  parallel,
  parallelLimit,
  priorityQueue,
  queue: queue$1,
  race: race$1,
  reduce: reduce$1,
  reduceRight,
  reflect,
  reflectAll,
  reject: reject$2,
  rejectLimit: rejectLimit$1,
  rejectSeries: rejectSeries$1,
  retry,
  retryable,
  seq,
  series,
  setImmediate: setImmediate$1,
  some: some$1,
  someLimit: someLimit$1,
  someSeries: someSeries$1,
  sortBy: sortBy$1,
  timeout,
  times,
  timesLimit,
  timesSeries,
  transform,
  tryEach: tryEach$1,
  unmemoize,
  until,
  waterfall: waterfall$1,
  whilst: whilst$1,
  // aliases
  all: every$1,
  allLimit: everyLimit$1,
  allSeries: everySeries$1,
  any: some$1,
  anyLimit: someLimit$1,
  anySeries: someSeries$1,
  find: detect$1,
  findLimit: detectLimit$1,
  findSeries: detectSeries$1,
  flatMap: concat$1,
  flatMapLimit: concatLimit$1,
  flatMapSeries: concatSeries$1,
  forEach: each,
  forEachSeries: eachSeries$1,
  forEachLimit: eachLimit$2,
  forEachOf: eachOf$1,
  forEachOfSeries: eachOfSeries$1,
  forEachOfLimit: eachOfLimit$2,
  inject: reduce$1,
  foldl: reduce$1,
  foldr: reduceRight,
  select: filter$1,
  selectLimit: filterLimit$1,
  selectSeries: filterSeries$1,
  wrapSync: asyncify,
  during: whilst$1,
  doDuring: doWhilst$1
};
var _default = index;
exports.default = _default;
},{"process":"../node_modules/process/browser.js"}],"../node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    var errorListener; // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.

    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}
},{}],"../node_modules/node-libs-browser/node_modules/punycode/punycode.js":[function(require,module,exports) {
var global = arguments[3];
var define;
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

},{}],"../node_modules/process-nextick-args/index.js":[function(require,module,exports) {
var process = require("process");
'use strict';

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


},{"process":"../node_modules/process/browser.js"}],"../node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/stream-browser.js":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"../node_modules/events/events.js"}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/node-libs-browser/node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/isarray/index.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/safe-buffer/index.js":[function(require,module,exports) {

/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/core-util-is/lib/util.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],"../node_modules/parcel/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/BufferList.js":[function(require,module,exports) {

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = require('safe-buffer').Buffer;
var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}
},{"safe-buffer":"../node_modules/safe-buffer/index.js","util":"../node_modules/parcel/src/builtins/_empty.js"}],"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/destroy.js":[function(require,module,exports) {
'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js"}],"../node_modules/util-deprecate/browser.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

},{}],"../node_modules/stanza/node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports) {
var process = require("process");

var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var asyncWrite = !true && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/

var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/

var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/

var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/


var Buffer = require('safe-buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/


var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  var isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm; // cast to ints.

  this.highWaterMark = Math.floor(this.highWaterMark); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.

  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

  stream.emit('error', er);
  pna.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }

  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;
  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      stream.emit('error', err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }

  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","util-deprecate":"../node_modules/util-deprecate/browser.js","./internal/streams/stream":"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"../node_modules/safe-buffer/index.js","./internal/streams/destroy":"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_duplex.js","process":"../node_modules/process/browser.js"}],"../node_modules/stanza/node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","./_stream_readable":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_writable.js"}],"../node_modules/stanza/node_modules/string_decoder/lib/string_decoder.js":[function(require,module,exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":"../node_modules/safe-buffer/index.js"}],"../node_modules/stanza/node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var destroyImpl = require('./internal/streams/destroy');
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","isarray":"../node_modules/isarray/index.js","events":"../node_modules/events/events.js","./internal/streams/stream":"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"../node_modules/safe-buffer/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","util":"../node_modules/parcel/src/builtins/_empty.js","./internal/streams/BufferList":"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/BufferList.js","./internal/streams/destroy":"../node_modules/stanza/node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_duplex.js","string_decoder/":"../node_modules/stanza/node_modules/string_decoder/lib/string_decoder.js","process":"../node_modules/process/browser.js"}],"../node_modules/stanza/node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_duplex.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/stanza/node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_transform.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/stanza/node_modules/readable-stream/readable-browser.js":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_readable.js":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_writable.js":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_writable.js","./lib/_stream_duplex.js":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_transform.js":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_passthrough.js":"../node_modules/stanza/node_modules/readable-stream/lib/_stream_passthrough.js"}],"../node_modules/sdp/sdp.js":[function(require,module,exports) {
/* eslint-env node */
'use strict';

// SDP helpers.
const SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(line => line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  const parts = blob.split('\nm=');
  return parts.map((part, index) => (index > 0 ?
    'm=' + part : part).trim() + '\r\n');
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  const sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  const sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(line => line.indexOf(prefix) === 0);
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  let parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  const candidate = {
    foundation: parts[0],
    component: {1: 'rtp', 2: 'rtcp'}[parts[1]],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7],
  };

  for (let i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compatibility.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag. Don't overwrite.
        if (candidate[parts[i]] === undefined) {
          candidate[parts[i]] = parts[i + 1];
        }
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  const sdp = [];
  sdp.push(candidate.foundation);

  const component = candidate.component;
  if (component === 'rtp') {
    sdp.push(1);
  } else if (component === 'rtcp') {
    sdp.push(2);
  } else {
    sdp.push(component);
  }
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  const type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  let parts = line.substr(9).split(' ');
  const parsed = {
    payloadType: parseInt(parts.shift(), 10), // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  const channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  const parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1],
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
        ? '/' + headerExtension.direction
        : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  const parsed = {};
  let kv;
  const parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (let j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  let line = '';
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    const params = [];
    Object.keys(codec.parameters).forEach(param => {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  const parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' '),
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  let lines = '';
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(fb => {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  const sp = line.indexOf(' ');
  const parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10),
  };
  const colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  const parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(ssrc => parseInt(ssrc, 10)),
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  const parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1],
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint),
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  let sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(fp => {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  const parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  const parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
  if (params.iceLite) {
    sdp += 'a=ice-lite\r\n';
  }
  return sdp;
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  const description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: [],
  };
  const lines = SDPUtils.splitLines(mediaSection);
  const mline = lines[0].split(' ');
  for (let i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    const pt = mline[i];
    const rtpmapline = SDPUtils.matchPrefix(
      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      const codec = SDPUtils.parseRtpMap(rtpmapline);
      const fmtps = SDPUtils.matchPrefix(
        mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
        mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(line => {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  let sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(codec => {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(codec => {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  let maxptime = 0;
  caps.codecs.forEach(codec => {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(extension => {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  const encodingParameters = [];
  const description = SDPUtils.parseRtpParameters(mediaSection);
  const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(parts => parts.attribute === 'cname');
  const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  let secondarySsrc;

  const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(line => {
      const parts = line.substr(17).split(' ');
      return parts.map(part => parseInt(part, 10));
    });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(codec => {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      let encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red',
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc,
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(params => {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  const rtcpParameters = {};

  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(obj => obj.attribute === 'cname')[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

SDPUtils.writeRtcpParameters = function(rtcpParameters) {
  let sdp = '';
  if (rtcpParameters.reducedSize) {
    sdp += 'a=rtcp-rsize\r\n';
  }
  if (rtcpParameters.mux) {
    sdp += 'a=rtcp-mux\r\n';
  }
  if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
    sdp += 'a=ssrc:' + rtcpParameters.ssrc +
      ' cname:' + rtcpParameters.cname + '\r\n';
  }
  return sdp;
};


// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  let parts;
  const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(msidParts => msidParts.attribute === 'msid');
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  const mline = SDPUtils.parseMLine(mediaSection);
  const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  let maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize,
    };
  }
  const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    const parts = sctpMapLines[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize,
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  let output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n',
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n',
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  let sessionId;
  const version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  const user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  const lines = SDPUtils.splitLines(mediaSection);
  for (let i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  const lines = SDPUtils.splitLines(mediaSection);
  const mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  const lines = SDPUtils.splitLines(mediaSection);
  const parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' '),
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  const parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5],
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  const lines = SDPUtils.splitLines(blob);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}],"../node_modules/stanza/module.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;

var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = core;
exports.createClient = createClient;
exports.getHostMeta = getHostMeta;
exports.VERSION = exports.Utils = exports.Stanzas = exports.SASL = exports.RTT = exports.Namespaces = exports.Jingle = exports.JXT = exports.JID = exports.Constants = exports.Client = void 0;

var _tslib = require("tslib");

var _async = require("async");

var _events = require("events");

var _punycode = _interopRequireDefault(require("punycode"));

var _readableStream = require("readable-stream");

var _sdp = require("sdp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MAX_SEQ = Math.pow(2, 32);

const mod = (v, n) => (v % n + n) % n;

class StreamManagement extends _events.EventEmitter {
  constructor() {
    super();
    this.allowResume = true;
    this.lastAck = 0;
    this.handled = 0;
    this.unacked = [];
    this.inboundStarted = false;
    this.outboundStarted = false;
    this.id = undefined;
    this.jid = undefined;
    this.allowResume = true;
    this.started = false;

    this.cacheHandler = () => undefined;

    this._reset();
  }

  get started() {
    return this.outboundStarted && this.inboundStarted;
  }

  set started(value) {
    if (!value) {
      this.outboundStarted = false;
      this.inboundStarted = false;
    }
  }

  get resumable() {
    return this.started && this.allowResume;
  }

  load(opts) {
    var _a;

    this.id = opts.id;
    this.allowResume = (_a = opts.allowResume) !== null && _a !== void 0 ? _a : true;
    this.handled = opts.handled;
    this.lastAck = opts.lastAck;
    this.unacked = opts.unacked;
    this.emit('prebound', opts.jid);
  }

  cache(handler) {
    this.cacheHandler = handler;
  }

  bind(jid) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.jid = jid;
      yield this._cache();
    });
  }

  enable() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.emit('send', {
        allowResumption: this.allowResume,
        type: 'enable'
      });
    });
  }

  resume() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.emit('send', {
        handled: this.handled,
        previousSession: this.id,
        type: 'resume'
      });
    });
  }

  enabled(resp) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.id = resp.id;
      this.handled = 0;
      this.inboundStarted = true;
      yield this._cache();
    });
  }

  resumed(resp) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.id = resp.previousSession;
      this.inboundStarted = true;
      yield this.process(resp, true);
      yield this._cache();
    });
  }

  failed(resp) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      // Resumption might fail, but the server can still tell us how far
      // the old session progressed.
      yield this.process(resp); // We alert that any remaining unacked stanzas failed to send. It has
      // been too long for auto-retrying these to be the right thing to do.

      for (const [kind, stanza] of this.unacked) {
        this.emit('failed', {
          kind,
          stanza
        });
      }

      this._reset();

      yield this._cache();
    });
  }

  ack() {
    this.emit('send', {
      handled: this.handled,
      type: 'ack'
    });
  }

  request() {
    this.emit('send', {
      type: 'request'
    });
  }

  process(ack, resend = false) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (ack.handled === undefined) {
        return;
      }

      const numAcked = mod(ack.handled - this.lastAck, MAX_SEQ);

      for (let i = 0; i < numAcked && this.unacked.length > 0; i++) {
        const [kind, stanza] = this.unacked.shift();
        this.emit('acked', {
          kind,
          stanza
        });
      }

      this.lastAck = ack.handled;

      if (resend) {
        const resendUnacked = this.unacked;
        this.unacked = [];

        if (resendUnacked.length) {
          this.emit('begin-resend');

          for (const [kind, stanza] of resendUnacked) {
            this.emit('resend', {
              kind,
              stanza
            });
          }

          this.emit('end-resend');
        }
      }

      yield this._cache();
    });
  }

  track(kind, stanza) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (kind === 'sm' && (stanza.type === 'enable' || stanza.type === 'resume')) {
        this.handled = 0;
        this.outboundStarted = true;
        yield this._cache();
        return false;
      }

      if (!this.outboundStarted) {
        return false;
      }

      if (kind !== 'message' && kind !== 'presence' && kind !== 'iq') {
        return false;
      }

      this.unacked.push([kind, stanza]);
      yield this._cache();
      return true;
    });
  }

  handle() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.inboundStarted) {
        this.handled = mod(this.handled + 1, MAX_SEQ);
        yield this._cache();
      }
    });
  }

  hibernate() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (!this.resumable) {
        return this.shutdown();
      }

      for (const [kind, stanza] of this.unacked) {
        this.emit('hibernated', {
          kind,
          stanza
        });
      }
    });
  }

  shutdown() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      return this.failed({
        type: 'failed'
      });
    });
  }

  _cache() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      try {
        yield this.cacheHandler({
          allowResume: this.allowResume,
          handled: this.handled,
          id: this.id,
          jid: this.jid,
          lastAck: this.lastAck,
          unacked: this.unacked
        });
      } catch (err) {
        // TODO: Is there a good way to handle this?
        // istanbul ignore next
        console.error('Failed to cache stream state', err);
      }
    });
  }

  _reset() {
    this.id = '';
    this.inboundStarted = false;
    this.outboundStarted = false;
    this.lastAck = 0;
    this.handled = 0;
    this.unacked = [];
  }

}

const TABLE_DATA = {
  'A.1': {
    r: 'hk:if|le:lf|nf:nv|qg:qv|rg:rj|rm:rp|rr:rt|rv:s3|vn:vv|17m:17n|17q:17v|18g:19g|1an:1ao|1cb:1cg|1e5:1ef|1fb:1ff|1fl:1gb|1gd:1gq|1gs:1gu|1hr:1hv|1im:1iv|1ne:1nf|1pd:1pf|1qb:1rv|1ti:280|29q:29r|2ae:2af|2al:2an|2bh:2c0|2cd:2ce|2ch:2ci|2dj:2dl|2dq:2dr|2e5:2e6|2e9:2ea|2ee:2em|2eo:2er|2f4:2f5|2fr:2g1|2g3:2g4|2gb:2ge|2gh:2gi|2hq:2hr|2i3:2i6|2i9:2ia|2ie:2io|2iv:2j5|2jl:2k0|2lq:2lr|2me:2mf|2mh:2mv|2n1:2n5|2ng:2o0|2od:2oe|2oh:2oi|2pk:2pl|2pq:2pr|2q4:2q6|2q9:2qa|2qe:2ql|2qo:2qr|2r2:2r5|2rh:2s1|2sb:2sd|2sm:2so|2t0:2t2|2t5:2t7|2tb:2td|2tq:2tt|2u3:2u5|2ue:2um|2uo:2v6|2vj:300|31q:31t|32e:32k|32n:32v|332:335|33g:341|35q:35t|36e:36k|36n:36t|372:375|37g:381|39q:39t|3a4:3a5|3ae:3am|3ao:3av|3b2:3b5|3bg:3c1|3cn:3cp|3du:3dv|3e7:3e9|3eb:3ee|3f0:3fh|3fl:3g0|3hr:3hu|3is:3k0|3k5:3k6|3kb:3kc|3ke:3kj|3l8:3l9|3lu:3lv|3me:3mf|3mq:3mr|3mu:3nv|3rb:3rg|3sc:3sf|3ud:3ue|3ug:3vv|41j:41l|41q:41v|42q:44v|466:46f|47p:47q|47s:47v|4aq:4au|4d3:4d7|4fq:4fv|4ie:4if|4iu:4iv|4ke:4kf|4lm:4ln|4m6:4m7|4om:4on|4qr:4r0|4rt:4sv|4vl:500|5jn:5jv|5kt:5kv|5nh:5nv|5ol:5ov|5pn:5pv|5qk:5qv|5rk:5rv|5ut:5uv|5va:5vv|60q:60v|63o:63v|65a:7fv|7ks:7kv|7nq:7nv|7om:7on|7ou:7ov|7q6:7q7|7qe:7qf|7ru:7rv|7uk:7ul|7vg:7vh|82j:82m|82o:82u|834:839|83i:83j|84f:84v|85i:86f|87b:87v|89r:89s|8ac:8ai|8c4:8cf|8uf:8vv|917:91v|92b:92v|9gk:9gl|9ju:9jv|9ka:9o0|9oa:9ob|9qj:9ql|9qv:9r0|9sl:9sn|9tv:9uf|9vc:9vf|ao0:bjv|bnk:bnv|bum:bvf|bvs:bvv|c4n:c4o|c80:c84|c9d:c9g|cdo:cff|cgt:cgv|ci4:cig|cjs:cju|cmc:cmf|crn:crq|cuu:cuv|jdm:jfv|17t6:17vv|194d:194f|1967:1avv|1lt4:1lvv|1uhe:1uhf|1ujb:1unv|1uo7:1uoi|1uoo:1uos|1uti:1uui|1va0:1vaf|1vcg:1vch|1ve8:1vef|1vft:1vfv|1vgg:1vgv|1vh4:1vhf|1vi7:1vi8|1vjc:1vjf|1vnt:1vnu|1vtv:1vu1|1vu8:1vu9|1vug:1vuh|1vuo:1vup|1vut:1vuv|1vvf:1vvo|2000:20nv|20p4:20pf|20qb:20vv|2116:2117|212e:3jvv|3k7m:3k7v|3k97:3k99|3keu:3kvv|3l50:3l51|3l53:3l54|3l57:3l58|3l8b:3l8c|3la7:3la9|3ll4:3ll7|3lua:3lud|3m00:3vvt|59mn:5tvv|5ugu:5vvt|6000:7vvt|8000:9vvt|a000:bvvt|c000:dvvt|e000:fvvt|g000:hvvt|i000:jvvt|k000:lvvt|m000:nvvt|o000:pvvt|q000:rvvt|s002:s00v|s040:tvvt',
    s: '9p8|9qc|9qe|9qn|9tg|147|bkq|3l2l|3l4t|3l5d|3l5q|3l5s|3l61|3l64|3l86|3l8l|3l8t|3l9q|3l9v|3la5|3lah|16f|c20|ccf|cnv|cvv|1b0|1c8|1d2|1dq|1h0|1nv|1oe|284|2c4|2d9|2dh|2dt|2eu|2h9|2hh|2hk|2hn|2ht|2it|2k4|2kc|2ke|2ki|2l9|2lh|2lk|2m6|2ma|2o4|2p9|2ph|2qu|2s4|2sh|2sr|2st|2tm|2u9|304|30d|30h|319|31k|325|329|344|34d|34h|359|35k|365|369|36v|384|38d|38h|399|3a9|3c4|3di|3ds|3el|3en|3k3|3k9|3ko|3l0|3l4|3l6|3lc|3lq|3m5|3m7|3q8|3so|3tt|412|418|41b|4g7|4i7|4i9|4in|4ip|4k7|4k9|4lf|4lh|4lv|4m1|4mf|4mn|4nf|4of|4oh|4ov|4q7|h1|5od|5rd|5rh|60f|1upn|1upt|1upv|1uq2|1uq5|1vij|1vj7|1vjl|1vo0|1vv7|20ov|7qo|7qq|7qs|7qu|7tl|7u5|7us|7vl|7vv|sb|sd|s000|t2|97v|uf|9go|9o5'
  },
  'B.1': {
    r: '60b:60d|80b:80d|1vg0:1vgf',
    s: '5d|606|1vnv|830|qf'
  },
  'B.2': {
    m: '5l:ts|6v:3j;3j|9g:39;o7|a9:ls;3e|bv:3j|fg:3a;oc|q5:tp|rq:10;tp|sg:tp;o8;o1|tg:u5;o8;o1|u2:u3|ug:ti|uh:to|ui:u5|uj:ud|uk:ub|ul:u6|um:u0|vg:tq|vh:u1|vi:u3|vl:tl|1c7:1b5;1c2|7km:38;ph|7kn:3k;o8|7ko:3n;oa|7kp:3p;oa|7kq:31;lu|7kr:7j1|7qg:u5;oj|7qi:u5;oj;o0|7qk:u5;oj;o1|7qm:u5;oj;q2|7s0:7o0;tp|7s1:7o1;tp|7s2:7o2;tp|7s3:7o3;tp|7s4:7o4;tp|7s5:7o5;tp|7s6:7o6;tp|7s7:7o7;tp|7s8:7o0;tp|7s9:7o1;tp|7sa:7o2;tp|7sb:7o3;tp|7sc:7o4;tp|7sd:7o5;tp|7se:7o6;tp|7sf:7o7;tp|7sg:7p0;tp|7sh:7p1;tp|7si:7p2;tp|7sj:7p3;tp|7sk:7p4;tp|7sl:7p5;tp|7sm:7p6;tp|7sn:7p7;tp|7so:7p0;tp|7sp:7p1;tp|7sq:7p2;tp|7sr:7p3;tp|7ss:7p4;tp|7st:7p5;tp|7su:7p6;tp|7sv:7p7;tp|7t0:7r0;tp|7t1:7r1;tp|7t2:7r2;tp|7t3:7r3;tp|7t4:7r4;tp|7t5:7r5;tp|7t6:7r6;tp|7t7:7r7;tp|7t8:7r0;tp|7t9:7r1;tp|7ta:7r2;tp|7tb:7r3;tp|7tc:7r4;tp|7td:7r5;tp|7te:7r6;tp|7tf:7r7;tp|7ti:7rg;tp|7tj:th;tp|7tk:tc;tp|7tm:th;q2|7tn:th;q2;tp|7ts:th;tp|7tu:tp|7u2:7rk;tp|7u3:tn;tp|7u4:te;tp|7u6:tn;q2|7u7:tn;q2;tp|7uc:tn;tp|7ui:tp;o8;o0|7uj:tp;o8;o1|7um:tp;q2|7un:tp;o8;q2|7v2:u5;o8;o0|7v3:u5;o8;o1|7v4:u1;oj|7v6:u5;q2|7v7:u5;o8;q2|7vi:7rs;tp|7vj:u9;tp|7vk:ue;tp|7vm:u9;q2|7vn:u9;q2;tp|7vs:u9;tp|858:3i;3j|882:33|883:5g;33|887:ir|889:5g;36|88b:38|88c:38|88d:38|88g:39|88h:39|88i:3c|88l:3e|88m:3e;3f|88p:3g|88q:3h|88r:3i|88s:3i|88t:3i|890:3j;3d|891:3k;35;3c|892:3k;3d|894:3q|898:3q|89c:32|89d:33|89g:35|89h:36|89j:3d|89u:tj|89v:u0|8a5:34|crh:38;3g;31|crj:31;3l|crl:3f;3m|cs0:3g;31|cs1:3e;31|cs2:ts;31|cs3:3d;31|cs4:3b;31|cs5:3b;32|cs6:3d;32|cs7:37;32|csa:3g;36|csb:3e;36|csc:ts;36|csg:38;3q|csh:3b;38;3q|csi:3d;38;3q|csj:37;38;3q|csk:3k;38;3q|ct9:3g;31|cta:3b;3g;31|ctb:3d;3g;31|ctc:37;3g;31|ctk:3g;3m|ctl:3e;3m|ctm:ts;3m|ctn:3d;3m|cto:3b;3m|ctp:3d;3m|ctq:3g;3n|ctr:3e;3n|cts:ts;3n|ctt:3d;3n|ctu:3b;3n|ctv:3d;3n|cu0:3b;u9|cu1:3d;u9|cu3:32;3h|cu6:33;8gl;3b;37|cu7:33;3f;1e|cu8:34;32|cu9:37;3p|cub:38;3g|cud:3b;3b|cue:3b;3d|cun:3g;38|cup:3g;3g;3d|cuq:3g;3i|cus:3j;3m|cut:3n;32|1uo0:36;36|1uo1:36;39|1uo2:36;3c|1uo3:36;36;39|1uo4:36;36;3c|1uo5:3j;3k|1uo6:3j;3k|1uoj:1bk;1bm|1uok:1bk;1b5|1uol:1bk;1bb|1uom:1bu;1bm|1uon:1bk;1bd|3l00:31|3l01:32|3l02:33|3l03:34|3l04:35|3l05:36|3l06:37|3l07:38|3l08:39|3l09:3a|3l0a:3b|3l0b:3c|3l0c:3d|3l0d:3e|3l0e:3f|3l0f:3g|3l0g:3h|3l0h:3i|3l0i:3j|3l0j:3k|3l0k:3l|3l0l:3m|3l0m:3n|3l0n:3o|3l0o:3p|3l0p:3q|3l1k:31|3l1l:32|3l1m:33|3l1n:34|3l1o:35|3l1p:36|3l1q:37|3l1r:38|3l1s:39|3l1t:3a|3l1u:3b|3l1v:3c|3l20:3d|3l21:3e|3l22:3f|3l23:3g|3l24:3h|3l25:3i|3l26:3j|3l27:3k|3l28:3l|3l29:3m|3l2a:3n|3l2b:3o|3l2c:3p|3l2d:3q|3l38:31|3l39:32|3l3a:33|3l3b:34|3l3c:35|3l3d:36|3l3e:37|3l3f:38|3l3g:39|3l3h:3a|3l3i:3b|3l3j:3c|3l3k:3d|3l3l:3e|3l3m:3f|3l3n:3g|3l3o:3h|3l3p:3i|3l3q:3j|3l3r:3k|3l3s:3l|3l3t:3m|3l3u:3n|3l3v:3o|3l40:3p|3l41:3q|3l4s:31|3l4u:33|3l4v:34|3l52:37|3l55:3a|3l56:3b|3l59:3e|3l5a:3f|3l5b:3g|3l5c:3h|3l5e:3j|3l5f:3k|3l5g:3l|3l5h:3m|3l5i:3n|3l5j:3o|3l5k:3p|3l5l:3q|3l6g:31|3l6h:32|3l6i:33|3l6j:34|3l6k:35|3l6l:36|3l6m:37|3l6n:38|3l6o:39|3l6p:3a|3l6q:3b|3l6r:3c|3l6s:3d|3l6t:3e|3l6u:3f|3l6v:3g|3l70:3h|3l71:3i|3l72:3j|3l73:3k|3l74:3l|3l75:3m|3l76:3n|3l77:3o|3l78:3p|3l79:3q|3l84:31|3l85:32|3l87:34|3l88:35|3l89:36|3l8a:37|3l8d:3a|3l8e:3b|3l8f:3c|3l8g:3d|3l8h:3e|3l8i:3f|3l8j:3g|3l8k:3h|3l8m:3j|3l8n:3k|3l8o:3l|3l8p:3m|3l8q:3n|3l8r:3o|3l8s:3p|3l9o:31|3l9p:32|3l9r:34|3l9s:35|3l9t:36|3l9u:37|3la0:39|3la1:3a|3la2:3b|3la3:3c|3la4:3d|3la6:3f|3laa:3j|3lab:3k|3lac:3l|3lad:3m|3lae:3n|3laf:3o|3lag:3p|3lbc:31|3lbd:32|3lbe:33|3lbf:34|3lbg:35|3lbh:36|3lbi:37|3lbj:38|3lbk:39|3lbl:3a|3lbm:3b|3lbn:3c|3lbo:3d|3lbp:3e|3lbq:3f|3lbr:3g|3lbs:3h|3lbt:3i|3lbu:3j|3lbv:3k|3lc0:3l|3lc1:3m|3lc2:3n|3lc3:3o|3lc4:3p|3lc5:3q|3ld0:31|3ld1:32|3ld2:33|3ld3:34|3ld4:35|3ld5:36|3ld6:37|3ld7:38|3ld8:39|3ld9:3a|3lda:3b|3ldb:3c|3ldc:3d|3ldd:3e|3lde:3f|3ldf:3g|3ldg:3h|3ldh:3i|3ldi:3j|3ldj:3k|3ldk:3l|3ldl:3m|3ldm:3n|3ldn:3o|3ldo:3p|3ldp:3q|3lek:31|3lel:32|3lem:33|3len:34|3leo:35|3lep:36|3leq:37|3ler:38|3les:39|3let:3a|3leu:3b|3lev:3c|3lf0:3d|3lf1:3e|3lf2:3f|3lf3:3g|3lf4:3h|3lf5:3i|3lf6:3j|3lf7:3k|3lf8:3l|3lf9:3m|3lfa:3n|3lfb:3o|3lfc:3p|3lfd:3q|3lg8:31|3lg9:32|3lga:33|3lgb:34|3lgc:35|3lgd:36|3lge:37|3lgf:38|3lgg:39|3lgh:3a|3lgi:3b|3lgj:3c|3lgk:3d|3lgl:3e|3lgm:3f|3lgn:3g|3lgo:3h|3lgp:3i|3lgq:3j|3lgr:3k|3lgs:3l|3lgt:3m|3lgu:3n|3lgv:3o|3lh0:3p|3lh1:3q|3lhs:31|3lht:32|3lhu:33|3lhv:34|3li0:35|3li1:36|3li2:37|3li3:38|3li4:39|3li5:3a|3li6:3b|3li7:3c|3li8:3d|3li9:3e|3lia:3f|3lib:3g|3lic:3h|3lid:3i|3lie:3j|3lif:3k|3lig:3l|3lih:3m|3lii:3n|3lij:3o|3lik:3p|3lil:3q|3ljg:31|3ljh:32|3lji:33|3ljj:34|3ljk:35|3ljl:36|3ljm:37|3ljn:38|3ljo:39|3ljp:3a|3ljq:3b|3ljr:3c|3ljs:3d|3ljt:3e|3lju:3f|3ljv:3g|3lk0:3h|3lk1:3i|3lk2:3j|3lk3:3k|3lk4:3l|3lk5:3m|3lk6:3n|3lk7:3o|3lk8:3p|3lk9:3q|3ll8:th|3ll9:ti|3lla:tj|3llb:tk|3llc:tl|3lld:tm|3lle:tn|3llf:to|3llg:tp|3llh:tq|3lli:tr|3llj:ts|3llk:tt|3lll:tu|3llm:tv|3lln:u0|3llo:u1|3llp:to|3llq:u3|3llr:u4|3lls:u5|3llt:u6|3llu:u7|3llv:u8|3lm0:u9|3lmj:u3|3ln2:th|3ln3:ti|3ln4:tj|3ln5:tk|3ln6:tl|3ln7:tm|3ln8:tn|3ln9:to|3lna:tp|3lnb:tq|3lnc:tr|3lnd:ts|3lne:tt|3lnf:tu|3lng:tv|3lnh:u0|3lni:u1|3lnj:to|3lnk:u3|3lnl:u4|3lnm:u5|3lnn:u6|3lno:u7|3lnp:u8|3lnq:u9|3lod:u3|3los:th|3lot:ti|3lou:tj|3lov:tk|3lp0:tl|3lp1:tm|3lp2:tn|3lp3:to|3lp4:tp|3lp5:tq|3lp6:tr|3lp7:ts|3lp8:tt|3lp9:tu|3lpa:tv|3lpb:u0|3lpc:u1|3lpd:to|3lpe:u3|3lpf:u4|3lpg:u5|3lph:u6|3lpi:u7|3lpj:u8|3lpk:u9|3lq7:u3|3lqm:th|3lqn:ti|3lqo:tj|3lqp:tk|3lqq:tl|3lqr:tm|3lqs:tn|3lqt:to|3lqu:tp|3lqv:tq|3lr0:tr|3lr1:ts|3lr2:tt|3lr3:tu|3lr4:tv|3lr5:u0|3lr6:u1|3lr7:to|3lr8:u3|3lr9:u4|3lra:u5|3lrb:u6|3lrc:u7|3lrd:u8|3lre:u9|3ls1:u3|3lsg:th|3lsh:ti|3lsi:tj|3lsj:tk|3lsk:tl|3lsl:tm|3lsm:tn|3lsn:to|3lso:tp|3lsp:tq|3lsq:tr|3lsr:ts|3lss:tt|3lst:tu|3lsu:tv|3lsv:u0|3lt0:u1|3lt1:to|3lt2:u3|3lt3:u4|3lt4:u5|3lt5:u6|3lt6:u7|3lt7:u8|3lt8:u9|3ltr:u3',
    r: '23:2c|2i:2k|2m:2q|60:6m|6o:6u|bo:bp|c1:c2|c6:c7|c9:cb|ce:ch|cj:ck|cm:co|cs:ct|cv:d0|d6:d7|de:df|dh:dj|dn:do|e4:e5|e7:e8|ea:eb|fh:fi|fm:fo|s8:sa|se:sf|sh:t1|t3:tb|100:11f|19h:1am|7o8:7of|7oo:7ot|7p8:7pf|7po:7pv|7q8:7qd|7r8:7rf|7to:7tr|7u8:7ub|7uo:7ur|7v8:7vc|7vo:7vr|89a:89b|8b0:8bf|95m:96f|1vp1:1vpq|2100:2115',
    s: 'v8|va|vc|ve|vk|130|132|134|136|138|13a|13c|13e|13g|13i|13k|13m|13o|13q|13s|13u|140|14a|14c|14e|14g|14i|14k|14m|14o|14q|14s|14u|150|152|154|156|158|15a|15c|15e|15g|15i|15k|15m|15o|15q|15s|15u|161|163|165|167|169|16b|16d|16g|16i|16k|16m|16o|16q|16s|16u|170|172|174|176|178|17a|17c|17e|17g|17i|17k|17o|180|182|184|186|188|18a|18c|18e|80|82|84|86|88|8a|8c|8e|8g|8i|8k|8m|8o|8q|8s|8u|90|92|94|96|98|9a|9c|9e|9i|9k|9m|9p|9r|9t|9v|a1|a3|a5|a7|aa|ac|ae|ag|ai|ak|am|ao|aq|as|au|b0|b2|b4|b6|b8|ba|bc|be|bg|bi|bk|bm|br|bt|c4|d2|d4|d9|dc|dl|ds|ed|ef|eh|ej|el|en|ep|er|eu|f0|f2|f4|f6|f8|fa|fc|fe|fk|fq|fs|fu|g0|g2|g4|g6|g8|ga|gc|ge|gg|gi|gk|gm|go|gq|gs|gu|h0|h2|h4|h6|h8|ha|hc|he|hg|hi|21|22|7g0|7g2|7g4|7g6|7g8|7ga|7gc|7ge|7gg|7gi|2d|7gk|7gm|7go|7gq|7gs|7gu|7h0|7h2|7h4|7h6|7h8|7ha|7hc|7he|7hg|7hi|7hk|7hm|7ho|7hq|7hs|7hu|7i0|7i2|7i4|7i6|7i8|7ia|7ic|7ie|7ig|7ii|7ik|7im|7io|7iq|7is|7iu|7j0|7j2|7j4|7j6|7j8|7ja|7jc|7je|7jg|7ji|7jk|7jm|2e|7jo|7jq|7js|7ju|7k0|7k2|7k4|7k6|7k8|7ka|7kc|7ke|7kg|7ki|7kk|7l0|7l2|7l4|7l6|7l8|7la|7lc|7le|7lg|7li|7lk|7lm|7lo|7lq|7ls|7lu|7m0|7m2|7m4|7m6|7m8|7ma|7mc|7me|7mg|7mi|7mk|7mm|7mo|7mq|2f|7ms|7mu|7n0|7n2|7n4|7n6|7n8|7na|7nc|7ne|7ng|7ni|7nk|7nm|7no|2g|7qp|7qr|7qt|7qv|2h|896|2l|s6|sc|uo|uq|us|uu|v0|v2|v4|v6'
  },
  'B.3': {
    m: '5l:ts|6v:3j;3j|9g:39;o7|a9:ls;3e|bv:3j|fg:3a;oc|q5:tp|sg:tp;o8;o1|tg:u5;o8;o1|u2:u3|ug:ti|uh:to|ul:u6|um:u0|vg:tq|vh:u1|vi:u3|vl:tl|1c7:1b5;1c2|7km:38;ph|7kn:3k;o8|7ko:3n;oa|7kp:3p;oa|7kq:31;lu|7kr:7j1|7qg:u5;oj|7qi:u5;oj;o0|7qk:u5;oj;o1|7qm:u5;oj;q2|7s0:7o0;tp|7s1:7o1;tp|7s2:7o2;tp|7s3:7o3;tp|7s4:7o4;tp|7s5:7o5;tp|7s6:7o6;tp|7s7:7o7;tp|7s8:7o0;tp|7s9:7o1;tp|7sa:7o2;tp|7sb:7o3;tp|7sc:7o4;tp|7sd:7o5;tp|7se:7o6;tp|7sf:7o7;tp|7sg:7p0;tp|7sh:7p1;tp|7si:7p2;tp|7sj:7p3;tp|7sk:7p4;tp|7sl:7p5;tp|7sm:7p6;tp|7sn:7p7;tp|7so:7p0;tp|7sp:7p1;tp|7sq:7p2;tp|7sr:7p3;tp|7ss:7p4;tp|7st:7p5;tp|7su:7p6;tp|7sv:7p7;tp|7t0:7r0;tp|7t1:7r1;tp|7t2:7r2;tp|7t3:7r3;tp|7t4:7r4;tp|7t5:7r5;tp|7t6:7r6;tp|7t7:7r7;tp|7t8:7r0;tp|7t9:7r1;tp|7ta:7r2;tp|7tb:7r3;tp|7tc:7r4;tp|7td:7r5;tp|7te:7r6;tp|7tf:7r7;tp|7ti:7rg;tp|7tj:th;tp|7tk:tc;tp|7tm:th;q2|7tn:th;q2;tp|7ts:th;tp|7tu:tp|7u2:7rk;tp|7u3:tn;tp|7u4:te;tp|7u6:tn;q2|7u7:tn;q2;tp|7uc:tn;tp|7ui:tp;o8;o0|7uj:tp;o8;o1|7um:tp;q2|7un:tp;o8;q2|7v2:u5;o8;o0|7v3:u5;o8;o1|7v4:u1;oj|7v6:u5;q2|7v7:u5;o8;q2|7vi:7rs;tp|7vj:u9;tp|7vk:ue;tp|7vm:u9;q2|7vn:u9;q2;tp|7vs:u9;tp|1uo0:36;36|1uo1:36;39|1uo2:36;3c|1uo3:36;36;39|1uo4:36;36;3c|1uo5:3j;3k|1uo6:3j;3k|1uoj:1bk;1bm|1uok:1bk;1b5|1uol:1bk;1bb|1uom:1bu;1bm|1uon:1bk;1bd',
    r: '23:2c|2i:2k|2m:2q|60:6m|6o:6u|bo:bp|c1:c2|c6:c7|c9:cb|ce:ch|cj:ck|cm:co|cs:ct|cv:d0|d6:d7|de:df|dh:dj|dn:do|e4:e5|e7:e8|ea:eb|fh:fi|fm:fo|s8:sa|se:sf|sh:t1|t3:tb|100:11f|19h:1am|7o8:7of|7oo:7ot|7p8:7pf|7po:7pv|7q8:7qd|7r8:7rf|7to:7tr|7u8:7ub|7uo:7ur|7v8:7vc|7vo:7vr|89a:89b|8b0:8bf|95m:96f|1vp1:1vpq|2100:2115',
    s: 'v8|va|vc|ve|vk|130|132|134|136|138|13a|13c|13e|13g|13i|13k|13m|13o|13q|13s|13u|140|14a|14c|14e|14g|14i|14k|14m|14o|14q|14s|14u|150|152|154|156|158|15a|15c|15e|15g|15i|15k|15m|15o|15q|15s|15u|161|163|165|167|169|16b|16d|16g|16i|16k|16m|16o|16q|16s|16u|170|172|174|176|178|17a|17c|17e|17g|17i|17k|17o|180|182|184|186|188|18a|18c|18e|80|82|84|86|88|8a|8c|8e|8g|8i|8k|8m|8o|8q|8s|8u|90|92|94|96|98|9a|9c|9e|9i|9k|9m|9p|9r|9t|9v|a1|a3|a5|a7|aa|ac|ae|ag|ai|ak|am|ao|aq|as|au|b0|b2|b4|b6|b8|ba|bc|be|bg|bi|bk|bm|br|bt|c4|d2|d4|d9|dc|dl|ds|ed|ef|eh|ej|el|en|ep|er|eu|f0|f2|f4|f6|f8|fa|fc|fe|fk|fq|fs|fu|g0|g2|g4|g6|g8|ga|gc|ge|gg|gi|gk|gm|go|gq|gs|gu|h0|h2|h4|h6|h8|ha|hc|he|hg|hi|21|22|7g0|7g2|7g4|7g6|7g8|7ga|7gc|7ge|7gg|7gi|2d|7gk|7gm|7go|7gq|7gs|7gu|7h0|7h2|7h4|7h6|7h8|7ha|7hc|7he|7hg|7hi|7hk|7hm|7ho|7hq|7hs|7hu|7i0|7i2|7i4|7i6|7i8|7ia|7ic|7ie|7ig|7ii|7ik|7im|7io|7iq|7is|7iu|7j0|7j2|7j4|7j6|7j8|7ja|7jc|7je|7jg|7ji|7jk|7jm|2e|7jo|7jq|7js|7ju|7k0|7k2|7k4|7k6|7k8|7ka|7kc|7ke|7kg|7ki|7kk|7l0|7l2|7l4|7l6|7l8|7la|7lc|7le|7lg|7li|7lk|7lm|7lo|7lq|7ls|7lu|7m0|7m2|7m4|7m6|7m8|7ma|7mc|7me|7mg|7mi|7mk|7mm|7mo|7mq|2f|7ms|7mu|7n0|7n2|7n4|7n6|7n8|7na|7nc|7ne|7ng|7ni|7nk|7nm|7no|2g|7qp|7qr|7qt|7qv|2h|896|2l|s6|sc|uo|uq|us|uu|v0|v2|v4|v6'
  },
  'C.1.1': {
    s: '10'
  },
  'C.1.2': {
    r: '800:80b',
    s: 'c00|50|5k0|81f|82v'
  },
  'C.2.1': {
    r: '0:v',
    s: '3v'
  },
  'C.2.2': {
    r: '40:4v|80c:80d|818:819|830:833|83a:83f|1vvp:1vvs|3kbj:3kbq',
    s: '1mt|1of|60e|1vnv'
  },
  'C.3': {
    r: '1o00:1u7v|u000:vvvt|10000:11vvt'
  },
  'C.4': {
    r: '1veg:1vff|1vvu:1vvv|3vvu:3vvv|5vvu:5vvv|7vvu:7vvv|9vvu:9vvv|bvvu:bvvv|dvvu:dvvv|fvvu:fvvv|hvvu:hvvv|jvvu:jvvv|lvvu:lvvv|nvvu:nvvv|pvvu:pvvv|rvvu:rvvv|tvvu:tvvv|vvvu:vvvv|11vvu:11vvv'
  },
  'C.5': {
    r: '1m00:1nvv'
  },
  'C.6': {
    r: '1vvp:1vvt'
  },
  'C.7': {
    r: 'bvg:bvr'
  },
  'C.8': {
    r: 'q0:q1|80e:80f|81a:81e|83a:83f'
  },
  'C.9': {
    r: 's010:s03v',
    s: 's001'
  },
  'D.1': {
    r: '1eg:1fa|1fg:1fk|1h1:1hq|1i0:1ia|1jd:1jf|1jh:1ml|1n5:1n6|1nq:1nu|1o0:1od|1oi:1pc|1s0:1t5|1uov:1up8|1upa:1upm|1upo:1ups|1uq0:1uq1|1uq3:1uq4|1uq6:1uth|1uuj:1v9t|1vag:1vcf|1vci:1ve7|1vfg:1vfs|1vjg:1vjk|1vjm:1vns',
    s: '1du|1e0|1e3|1gr|1gv|1mt|1og|1th|1uot|1upu|80f'
  },
  'D.2': {
    r: '21:2q|31:3q|60:6m|6o:7m|7o:h0|h2:hj|ig:ld|lg:lo|lr:m1|mg:mh|n0:n4|s8:sa|se:t1|t3:ue|ug:vl|100:142|14a:16e|16g:17l|17o:17p|180:18f|19h:1am|1ap:1av|1b1:1c7|285:29p|29t:2a0|2a9:2ac|2ao:2b1|2b4:2bg|2c2:2c3|2c5:2cc|2cf:2cg|2cj:2d8|2da:2dg|2dm:2dp|2du:2e0|2e7:2e8|2eb:2ec|2es:2et|2ev:2f1|2f6:2fh|2fk:2fq|2g5:2ga|2gf:2gg|2gj:2h8|2ha:2hg|2hi:2hj|2hl:2hm|2ho:2hp|2hu:2i0|2ip:2is|2j6:2jf|2ji:2jk|2k5:2kb|2kf:2kh|2kj:2l8|2la:2lg|2li:2lj|2ll:2lp|2lt:2m0|2mb:2mc|2n6:2nf|2o2:2o3|2o5:2oc|2of:2og|2oj:2p8|2pa:2pg|2pi:2pj|2pm:2pp|2pt:2pu|2q7:2q8|2qb:2qc|2qs:2qt|2qv:2r1|2r6:2rg|2s5:2sa|2se:2sg|2si:2sl|2sp:2sq|2su:2sv|2t3:2t4|2t8:2ta|2te:2tl|2tn:2tp|2tu:2tv|2u1:2u2|2u6:2u8|2ua:2uc|2v7:2vi|301:303|305:30c|30e:30g|30i:318|31a:31j|31l:31p|321:324|330:331|336:33f|342:343|345:34c|34e:34g|34i:358|35a:35j|35l:35p|360:364|367:368|36a:36b|36l:36m|370:371|376:37f|382:383|385:38c|38e:38g|38i:398|39a:39p|39u:3a0|3a6:3a8|3aa:3ac|3b0:3b1|3b6:3bf|3c2:3c3|3c5:3cm|3cq:3dh|3dj:3dr|3e0:3e6|3ef:3eh|3eo:3ev|3fi:3fk|3g1:3hg|3hi:3hj|3i0:3i6|3if:3ir|3k1:3k2|3k7:3k8|3kk:3kn|3kp:3kv|3l1:3l3|3la:3lb|3ld:3lg|3li:3lj|3m0:3m4|3mg:3mp|3ms:3mt|3o0:3on|3oq:3pk|3pu:3q7|3q9:3ra|3s8:3sb|3tu:3u5|3u7:3uc|400:411|413:417|419:41a|420:42n|450:465|46g:47o|480:4ap|4av:4d2|4d8:4fp|4g0:4g6|4g8:4i6|4ia:4id|4ig:4im|4iq:4it|4j0:4k6|4ka:4kd|4kg:4le|4li:4ll|4lo:4lu|4m2:4m5|4m8:4me|4mg:4mm|4mo:4ne|4ng:4oe|4oi:4ol|4oo:4ou|4p0:4q6|4q8:4qq|4r1:4rs|4t0:4vk|501:5jm|5k1:5kq|5l0:5ng|5o0:5oc|5oe:5oh|5p0:5ph|5pl:5pm|5q0:5qh|5r0:5rc|5re:5rg|5s0:5tm|5tu:5u5|5u7:5u8|5uk:5uq|5v0:5v9|60g:60p|610:63n|640:658|7g0:7kr|7l0:7np|7o0:7ol|7oo:7ot|7p0:7q5|7q8:7qd|7qg:7qn|7qv:7rt|7s0:7tk|7tm:7ts|7u2:7u4|7u6:7uc|7ug:7uj|7um:7ur|7v0:7vc|7vi:7vk|7vm:7vs|88a:88j|88p:88t|89a:89d|89f:89h|89j:89p|89t:89v|8a5:8a9|8b0:8c3|8pm:8rq|94s:979|c05:c07|c11:c19|c1h:c1l|c1o:c1s|c21:c4m|c4t:c4v|c51:c7q|c7s:c7v|c85:c9c|c9h:cce|ccg:cdn|cfg:cgs|ch0:ci3|cj0:cjr|cjv:clg|cm0:cmb|cmg:cnu|co0:crm|crr:cut|cv0:cvu|d00:jdl|jg0:17t5|1800:194c|1b00:1lt3|1m00:1uhd|1uhg:1uja|1uo0:1uo6|1uoj:1uon|1vp1:1vpq|1vq1:1vqq|1vr6:1vtu|1vu2:1vu7|1vua:1vuf|1vui:1vun|1vuq:1vus|20o0:20ou|20p0:20p3|20pg:20qa|2100:2115|2118:212d|3k00:3k7l|3k80:3k96|3k9a:3kb6|3kba:3kbi|3kc3:3kc4|3kcc:3kd9|3kde:3ket|3l00:3l2k|3l2m:3l4s|3l4u:3l4v|3l55:3l56|3l59:3l5c|3l5e:3l5p|3l5t:3l60|3l62:3l63|3l65:3l85|3l87:3l8a|3l8d:3l8k|3l8m:3l8s|3l8u:3l9p|3l9r:3l9u|3la0:3la4|3laa:3lag|3lai:3ll3|3ll8:3lu9|4000:59mm|5u00:5ugt|u000:vvvt|10000:11vvt',
    s: '3l52|3l5r|3la6|1c9|5a|5l|5q|283|2ag|2di|2en|2iu|2k3|2kd|2m9|2mg|2n0|2q0|2qn|2s3|2ss|2un|35u|36u|3an|3dt|3k4|3ka|3kd|3l5|3l7|3lt|3m6|3pm|3po|3rv|3s5|3uf|41c|41h|41o|47r|4i8|4io|4k8|4lg|4m0|4og|5us|ne|7qp|7qr|7qt|7tu|80e|83h|83v|882|887|88l|894|896|898|rq|s6|sc|8sl'
  }
};

class Table {
  constructor(name, points) {
    this.singles = new Set();
    this.ranges = [];
    this.mappings = new Map();
    const data = TABLE_DATA[name];
    this.name = name;

    if (data) {
      if (data.s) {
        this.singles = new Set(data.s.split('|').map(s => parseInt(s, 32)));
      }

      if (data.r) {
        this.ranges = data.r.split('|').map(r => {
          const [start, end] = r.split(':');
          return [parseInt(start, 32), parseInt(end, 32)];
        });
      }

      if (data.m) {
        this.mappings = new Map(data.m.split('|').map(m => {
          const [point, mapping] = m.split(':');
          const mappedPoints = mapping.split(';').map(p => parseInt(p, 32));
          return [parseInt(point, 32), mappedPoints];
        }));
      }
    } else if (points) {
      this.singles = new Set(points);
    }
  }

  contains(codePoint) {
    if (this.singles.has(codePoint)) {
      return true;
    }

    let left = 0;
    let right = this.ranges.length - 1;

    while (left <= right) {
      const pivot = Math.floor((left + right) / 2);
      const range = this.ranges[pivot];

      if (codePoint < range[0]) {
        right = pivot - 1;
        continue;
      }

      if (codePoint > range[1]) {
        left = pivot + 1;
        continue;
      }

      return true;
    }

    return false;
  }

  hasMapping(codePoint) {
    return this.mappings.has(codePoint) || this.contains(codePoint);
  }

  map(codePoint) {
    if (this.contains(codePoint) && !this.mappings.has(codePoint)) {
      return String.fromCodePoint(codePoint).toLowerCase().codePointAt(0);
    }

    return this.mappings.get(codePoint) || null;
  }

}

const A1 = new Table('A.1');
const B1 = new Table('B.1');
const B2 = new Table('B.2');
const B3 = new Table('B.3');
const C11 = new Table('C.1.1');
const C12 = new Table('C.1.2');
const C21 = new Table('C.2.1');
const C22 = new Table('C.2.2');
const C3 = new Table('C.3');
const C4 = new Table('C.4');
const C5 = new Table('C.5');
const C6 = new Table('C.6');
const C7 = new Table('C.7');
const C8 = new Table('C.8');
const C9 = new Table('C.9');
const D1 = new Table('D.1');
const D2 = new Table('D.2'); // Shortcut some of the simpler table operations

B1.map = () => {
  return null;
};

C11.contains = codePoint => codePoint === 32;

C12.map = codePoint => {
  return C12.contains(codePoint) ? 32 : null;
};

function prepare(profile, allowUnassigned, input = '') {
  const inputCodePoints = _punycode.default.ucs2.decode(input);

  let mappedCodePoints = [];

  for (const codePoint of inputCodePoints) {
    if (!allowUnassigned && profile.unassigned.contains(codePoint)) {
      throw new Error('Unassigned code point: x' + codePoint.toString(16));
    }

    let hasMapping = false;

    for (const mappingTable of profile.mappings) {
      if (!mappingTable.hasMapping(codePoint)) {
        continue;
      }

      hasMapping = true;
      const mappedPoint = mappingTable.map(codePoint);

      if (!mappedPoint) {
        continue;
      }

      if (Array.isArray(mappedPoint)) {
        mappedCodePoints = mappedCodePoints.concat(mappedPoint);
      } else {
        mappedCodePoints.push(mappedPoint);
      }
    }

    if (!hasMapping) {
      mappedCodePoints.push(codePoint);
    }
  }

  let normalizedCodePoints = mappedCodePoints;

  if (profile.normalize) {
    const mappedString = _punycode.default.ucs2.encode(mappedCodePoints);

    const normalizedString = mappedString.normalize('NFKC');
    normalizedCodePoints = _punycode.default.ucs2.decode(normalizedString);
  }

  let hasRandALCat = false;
  let hasLCat = false;

  for (const codePoint of normalizedCodePoints) {
    for (const prohibited of profile.prohibited) {
      if (prohibited.contains(codePoint)) {
        throw new Error('Prohibited code point: x' + codePoint.toString(16));
      }
    }

    if (!allowUnassigned && profile.unassigned.contains(codePoint)) {
      // istanbul ignore next
      throw new Error('Prohibited code point: x' + codePoint.toString(16));
    }

    if (profile.bidirectional) {
      hasRandALCat = hasRandALCat || D1.contains(codePoint);
      hasLCat = hasLCat || D2.contains(codePoint);
    }
  }

  if (profile.bidirectional) {
    if (hasRandALCat && hasLCat) {
      throw new Error('String contained both LCat and RandALCat code points');
    }

    if (hasRandALCat && (!D1.contains(normalizedCodePoints[0]) || !D1.contains(normalizedCodePoints[normalizedCodePoints.length - 1]))) {
      throw new Error('String containing RandALCat code points must start and end with RandALCat code points');
    }
  }

  return _punycode.default.ucs2.encode(normalizedCodePoints);
}

const NamePrepProfile = {
  bidirectional: true,
  mappings: [B1, B2],
  normalize: true,
  prohibited: [C12, C22, C3, C4, C5, C6, C7, C8, C9],
  unassigned: A1
};

function nameprep(str, allowUnassigned = true) {
  return prepare(NamePrepProfile, allowUnassigned, str);
}

const NodePrepProhibited = new Table('NodePrepProhibited', [0x22, 0x26, 0x27, 0x2f, 0x3a, 0x3c, 0x3e, 0x40]);
const NodePrepProfile = {
  bidirectional: true,
  mappings: [B1, B2],
  normalize: true,
  prohibited: [C11, C12, C21, C22, C3, C4, C5, C6, C7, C8, C9, NodePrepProhibited],
  unassigned: A1
};

function nodeprep(str, allowUnassigned = true) {
  return prepare(NodePrepProfile, allowUnassigned, str);
}

const ResourcePrepProfile = {
  bidirectional: true,
  mappings: [B1],
  normalize: true,
  prohibited: [C12, C21, C22, C3, C4, C5, C6, C7, C8, C9],
  unassigned: A1
};

function resourceprep(str, allowUnassigned = true) {
  return prepare(ResourcePrepProfile, allowUnassigned, str);
}

const SASLPrepProfile = {
  bidirectional: true,
  mappings: [C12, B1],
  normalize: true,
  prohibited: [C12, C21, C22, C3, C4, C5, C6, C7, C8, C9],
  unassigned: A1
};

function saslprep(str, allowUnassigned = false) {
  return prepare(SASLPrepProfile, allowUnassigned, str);
}

function escapeLocal(val = '') {
  return val.replace(/^\s+|\s+$/g, '').replace(/\\5c/g, '\\5c5c').replace(/\\20/g, '\\5c20').replace(/\\22/g, '\\5c22').replace(/\\26/g, '\\5c26').replace(/\\27/g, '\\5c27').replace(/\\2f/g, '\\5c2f').replace(/\\3a/g, '\\5c3a').replace(/\\3c/g, '\\5c3c').replace(/\\3e/g, '\\5c3e').replace(/\\40/g, '\\5c40').replace(/ /g, '\\20').replace(/"/g, '\\22').replace(/&/g, '\\26').replace(/'/g, '\\27').replace(/\//g, '\\2f').replace(/:/g, '\\3a').replace(/</g, '\\3c').replace(/>/g, '\\3e').replace(/@/g, '\\40');
}

function unescapeLocal(val) {
  return val.replace(/\\20/g, ' ').replace(/\\22/g, '"').replace(/\\26/g, '&').replace(/\\27/g, `'`).replace(/\\2f/g, '/').replace(/\\3a/g, ':').replace(/\\3c/g, '<').replace(/\\3e/g, '>').replace(/\\40/g, '@').replace(/\\5c/g, '\\');
}

function prepare$1(data) {
  let local = data.local || '';
  let domain = data.domain;
  let resource = data.resource || '';

  if (local) {
    local = nodeprep(local);
  }

  if (resource) {
    resource = resourceprep(resource);
  }

  if (domain[domain.length - 1] === '.') {
    domain = domain.slice(0, domain.length - 1);
  }

  domain = nameprep(domain.split('.').map(_punycode.default.toUnicode).join('.'));
  return {
    domain,
    local,
    resource
  };
}

function create(data, opts = {}) {
  let localPart = data.local;

  if (!opts.escaped) {
    localPart = escapeLocal(data.local);
  }

  const prep = !opts.prepared ? prepare$1({
    local: localPart,
    domain: data.domain,
    resource: data.resource
  }) : data;
  const bareJID = localPart ? `${localPart}@${prep.domain}` : prep.domain;

  if (prep.resource) {
    return `${bareJID}/${prep.resource}`;
  }

  return bareJID;
}

function createFull(bare, resource) {
  if (resource) {
    return `${toBare(bare)}/${resource}`;
  } else {
    return toBare(bare);
  }
}

function parse(jid = '') {
  let local = '';
  let domain = '';
  let resource = '';
  const resourceStart = jid.indexOf('/');

  if (resourceStart > 0) {
    resource = jid.slice(resourceStart + 1);
    jid = jid.slice(0, resourceStart);
  }

  const localEnd = jid.indexOf('@');

  if (localEnd > 0) {
    local = jid.slice(0, localEnd);
    jid = jid.slice(localEnd + 1);
  }

  domain = jid;
  const prepped = prepare$1({
    domain,
    local,
    resource
  });
  return {
    bare: create({
      local: prepped.local,
      domain: prepped.domain
    }, {
      escaped: true,
      prepared: true
    }),
    domain: prepped.domain,
    full: create(prepped, {
      escaped: true,
      prepared: true
    }),
    local: unescapeLocal(prepped.local),
    resource: prepped.resource
  };
}

function allowedResponders(jid1, jid2) {
  const allowed = new Set();
  allowed.add(undefined);
  allowed.add('');

  if (jid1) {
    const split1 = parse(jid1);
    allowed.add(split1.full);
    allowed.add(split1.bare);
    allowed.add(split1.domain);
  }

  if (jid2) {
    const split2 = parse(jid2);
    allowed.add(split2.domain);
    allowed.add(split2.bare);
    allowed.add(split2.full);
  }

  return allowed;
}

function equal(jid1, jid2) {
  if (!jid1 || !jid2) {
    return false;
  }

  const parsed1 = parse(jid1);
  const parsed2 = parse(jid2);
  return parsed1.local === parsed2.local && parsed1.domain === parsed2.domain && parsed1.resource === parsed2.resource;
}

function equalBare(jid1, jid2) {
  if (!jid1 || !jid2) {
    return false;
  }

  const parsed1 = parse(jid1);
  const parsed2 = parse(jid2);
  return parsed1.local === parsed2.local && parsed1.domain === parsed2.domain;
}

function isFull(jid) {
  const parsed = parse(jid);
  return !!parsed.resource;
}

function isBare(jid) {
  return !isFull(jid);
}

function getLocal(jid = '') {
  return parse(jid).local;
}

function getDomain(jid = '') {
  return parse(jid).domain;
}

function getResource(jid = '') {
  return parse(jid).resource;
}

function toBare(jid = '') {
  return parse(jid).bare;
}

function parseURI(val) {
  const parsed = new URL(val);

  if (parsed.protocol !== 'xmpp:') {
    throw new Error('Invalid XMPP URI, wrong protocol: ' + parsed.protocol);
  }

  const identity = parsed.hostname ? parsed.username ? create({
    domain: decodeURIComponent(parsed.hostname),
    local: decodeURIComponent(parsed.username)
  }, {
    escaped: true
  }) : decodeURIComponent(parsed.hostname) : undefined;
  const jid = parse(decodeURIComponent(identity ? parsed.pathname.substr(1) : parsed.pathname)).full;
  const hasParameters = parsed.search && parsed.search.indexOf(';') >= 1;
  const parameterString = hasParameters ? parsed.search.substr(parsed.search.indexOf(';') + 1) : '';
  const action = parsed.search ? decodeURIComponent(parsed.search.substr(1, hasParameters ? parsed.search.indexOf(';') - 1 : undefined)) : undefined;
  const params = {};

  for (const token of parameterString.split(';')) {
    const [name, value] = token.split('=').map(decodeURIComponent);

    if (!params[name]) {
      params[name] = value;
    } else {
      const existing = params[name];

      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        params[name] = [existing, value];
      }
    }
  }

  return {
    action,
    identity,
    jid,
    parameters: params
  };
}

function toURI(data) {
  const parts = ['xmpp:'];

  const pushJID = (jid, allowResource) => {
    const res = parse(jid);

    if (res.local) {
      parts.push(encodeURIComponent(escapeLocal(res.local)));
      parts.push('@');
    }

    parts.push(encodeURIComponent(res.domain));

    if (allowResource && res.resource) {
      parts.push('/');
      parts.push(encodeURIComponent(res.resource));
    }
  };

  if (data.identity) {
    parts.push('//');
    pushJID(data.identity, false);

    if (data.jid) {
      parts.push('/');
    }
  }

  if (data.jid) {
    pushJID(data.jid, true);
  }

  if (data.action) {
    parts.push('?');
    parts.push(encodeURIComponent(data.action));
  }

  for (const [name, values] of Object.entries(data.parameters || {})) {
    for (const val of Array.isArray(values) ? values : [values]) {
      parts.push(';');
      parts.push(encodeURIComponent(name));

      if (val !== undefined) {
        parts.push('=');
        parts.push(encodeURIComponent(val));
      }
    }
  }

  return parts.join('');
}

var JID = /*#__PURE__*/Object.freeze({
  __proto__: null,
  escapeLocal: escapeLocal,
  unescapeLocal: unescapeLocal,
  prepare: prepare$1,
  create: create,
  createFull: createFull,
  parse: parse,
  allowedResponders: allowedResponders,
  equal: equal,
  equalBare: equalBare,
  isFull: isFull,
  isBare: isBare,
  getLocal: getLocal,
  getDomain: getDomain,
  getResource: getResource,
  toBare: toBare,
  parseURI: parseURI,
  toURI: toURI
});
exports.JID = JID;
var JXTErrorCondition;

(function (JXTErrorCondition) {
  JXTErrorCondition["NotWellFormed"] = "not-well-formed";
  JXTErrorCondition["RestrictedXML"] = "restricted-xml";
  JXTErrorCondition["AlreadyClosed"] = "already-closed";
  JXTErrorCondition["UnknownRoot"] = "unknown-stream-root";
})(JXTErrorCondition || (JXTErrorCondition = {}));

class JXTError extends Error {
  constructor(opts) {
    super(opts.text);
    this.isJXTError = true;
    this.condition = opts.condition;
    this.text = opts.text;
  }

  static notWellFormed(text) {
    return new JXTError({
      condition: JXTErrorCondition.NotWellFormed,
      text
    });
  }

  static restrictedXML(text) {
    return new JXTError({
      condition: JXTErrorCondition.RestrictedXML,
      text
    });
  }

  static alreadyClosed(text) {
    return new JXTError({
      condition: JXTErrorCondition.AlreadyClosed,
      text
    });
  }

  static unknownRoot(text) {
    return new JXTError({
      condition: JXTErrorCondition.UnknownRoot,
      text
    });
  }

}

const ESCAPE_XML_CHAR = {
  '"': '&quot;',
  '&': '&amp;',
  "'": '&apos;',
  '<': '&lt;',
  '>': '&gt;'
};
const UNESCAPE_XML_CHAR = {
  '&amp;': '&',
  '&apos;': "'",
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"'
};
const ESCAPE_SEQUENCE = /&([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);/g;
const NEED_ESCAPING = /&|<|>|"|'/g;
const NEED_ESCAPING_TEXT = /&|<|>/g;

function escapeXMLReplaceChar(match) {
  return ESCAPE_XML_CHAR[match];
}

function unescapeXMLReplaceChar(match) {
  if (UNESCAPE_XML_CHAR[match]) {
    return UNESCAPE_XML_CHAR[match];
  }

  const hex = match.startsWith('&#x');
  const code = parseInt(match.substring(hex ? 3 : 2, match.length - 1), hex ? 16 : 10);

  if (code === 0x9 || code === 0xa || code === 0xd || 0x20 <= code && code <= 0xd7ff || 0xe000 <= code && code <= 0xfffd || 0x10000 <= code && code <= 0x10ffff) {
    return String.fromCodePoint(code);
  }

  throw JXTError.restrictedXML('Prohibited entity: ' + match);
}

function escapeXML(text) {
  return text.replace(NEED_ESCAPING, escapeXMLReplaceChar);
}

function unescapeXML(text) {
  return text.replace(ESCAPE_SEQUENCE, match => {
    return unescapeXMLReplaceChar(match);
  });
}

function escapeXMLText(text) {
  return text.replace(NEED_ESCAPING_TEXT, escapeXMLReplaceChar);
}

function basicLanguageResolver(available, accept = [], current = '') {
  const avail = new Set(available.map(a => a.toLowerCase()));

  for (let acceptLang of accept.map(a => a.toLowerCase())) {
    if (acceptLang === '*') {
      continue;
    }

    while (acceptLang.length > 0) {
      if (avail.has(acceptLang)) {
        return acceptLang;
      } // Remove ending tag


      acceptLang = acceptLang.substring(0, acceptLang.lastIndexOf('-')).toLowerCase(); // Remove leftover single character tag

      if (acceptLang.lastIndexOf('-') === acceptLang.length - 2) {
        acceptLang = acceptLang.substring(0, acceptLang.lastIndexOf('-'));
      }
    }
  }

  return current;
}

class XMLElement {
  constructor(name, attrs = {}, children = []) {
    this.name = name;
    this.attributes = attrs;
    this.children = [];
    this.optionalNamespaces = {};

    for (const child of children) {
      if (typeof child !== 'string') {
        const xmlChild = new XMLElement(child.name, child.attributes, child.children);
        xmlChild.parent = this;
        this.children.push(xmlChild);
      } else {
        this.children.push(child);
      }
    }
  }

  getName() {
    if (this.name.indexOf(':') >= 0) {
      return this.name.substr(this.name.indexOf(':') + 1);
    } else {
      return this.name;
    }
  }

  getNamespace() {
    if (this.name.indexOf(':') >= 0) {
      const prefix = this.name.substr(0, this.name.indexOf(':'));
      return this.findNamespaceForPrefix(prefix);
    }

    return this.findNamespaceForPrefix();
  }

  getNamespaceContext() {
    let namespaces = {};

    if (this.parent) {
      namespaces = this.parent.getNamespaceContext();
    }

    for (const [attr, value] of Object.entries(this.attributes)) {
      if (attr.startsWith('xmlns:')) {
        const prefix = attr.substr(6);
        namespaces[value] = prefix;
      }
    }

    return namespaces;
  }

  getDefaultNamespace() {
    if (this.attributes.xmlns) {
      return this.attributes.xmlns;
    }

    if (this.parent) {
      return this.parent.getDefaultNamespace();
    }

    return '';
  }

  getNamespaceRoot(namespace) {
    if (this.parent) {
      const parentRoot = this.parent.getNamespaceRoot(namespace);

      if (parentRoot) {
        return parentRoot;
      }
    }

    for (const [attr, value] of Object.entries(this.attributes)) {
      if (attr.startsWith('xmlns:') && value === namespace) {
        return this;
      }
    }

    if (this.optionalNamespaces[namespace]) {
      return this;
    }

    return undefined;
  }

  getAttribute(name, xmlns) {
    if (!xmlns) {
      return this.attributes[name];
    }

    const namespaces = this.getNamespaceContext();

    if (!namespaces[xmlns]) {
      return undefined;
    }

    return this.attributes[[namespaces[xmlns], name].join(':')];
  }

  getChild(name, xmlns) {
    return this.getChildren(name, xmlns)[0];
  }

  getChildren(name, xmlns) {
    const result = [];

    for (const child of this.children) {
      if (typeof child !== 'string' && child.getName() === name && (!xmlns || child.getNamespace() === xmlns)) {
        result.push(child);
      }
    }

    return result;
  }

  getText() {
    let text = '';

    for (const child of this.children) {
      if (typeof child === 'string') {
        text += child;
      }
    }

    return text;
  }

  appendChild(child) {
    this.children.push(child);

    if (typeof child !== 'string') {
      child.parent = this;
    }

    return child;
  }

  setAttribute(attr, val, force = false) {
    this.attributes[attr] = val || undefined;

    if (val === '' && force) {
      this.attributes[attr] = val;
    }
  }

  addOptionalNamespace(prefix, namespace) {
    this.optionalNamespaces[namespace] = prefix;
  }

  useNamespace(prefix, namespace) {
    if (this.optionalNamespaces[namespace]) {
      prefix = this.optionalNamespaces[namespace];
    }

    this.setAttribute(`xmlns:${prefix}`, namespace);
    return prefix;
  }

  toJSON() {
    const children = this.children.map(child => {
      if (typeof child === 'string') {
        return child;
      }

      if (child) {
        return child.toJSON();
      }
    }).filter(child => !!child); // Strip any undefined/null attributes

    const attrs = {};

    for (const [key, val] of Object.entries(this.attributes)) {
      if (val !== undefined && val !== null) {
        attrs[key] = val;
      }
    }

    return {
      attributes: attrs,
      children,
      name: this.name
    };
  }

  toString() {
    let output = this.openTag(true);

    if (this.children.length) {
      for (const child of this.children) {
        if (typeof child === 'string') {
          output += escapeXMLText(child);
        } else if (child) {
          output += child.toString();
        }
      }

      output += this.closeTag();
    }

    return output;
  }

  openTag(allowSelfClose = false) {
    let output = '';
    output += `<${this.name}`;

    for (const [key, value] of Object.entries(this.attributes)) {
      if (value !== undefined) {
        output += ` ${key}="${escapeXML(value.toString())}"`;
      }
    }

    if (allowSelfClose && this.children.length === 0) {
      output += '/>';
    } else {
      output += '>';
    }

    return output;
  }

  closeTag() {
    return `</${this.name}>`;
  }

  findNamespaceForPrefix(prefix) {
    if (!prefix) {
      if (this.attributes.xmlns) {
        return this.attributes.xmlns;
      } else if (this.parent) {
        return this.parent.findNamespaceForPrefix();
      }
    } else {
      const attr = 'xmlns:' + prefix;

      if (this.attributes[attr]) {
        return this.attributes[attr];
      } else if (this.parent) {
        return this.parent.findNamespaceForPrefix(prefix);
      }
    }

    return '';
  }

}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from: xhtml-im.js, Copyright © 2013 Waqas Hussain
 */


const ALLOWED_ELEMENTS = new Set(['a', 'blockquote', 'br', 'cite', 'em', 'img', 'li', 'ol', 'p', 'span', 'strong', 'ul']);
const style = new Set(['style']);
const ALLOWED_ATTRIBUTES = new Map([['a', new Set(['href', 'style'])], ['body', new Set(['style', 'xml:lang'])], ['blockquote', style], ['br', style], ['cite', style], ['em', style], ['img', new Set(['alt', 'height', 'src', 'style', 'width'])], ['li', style], ['ol', style], ['p', style], ['span', style], ['strong', style], ['ul', style]]);
const CSS_RULES = new Map([['font-style', /normal|italic|oblique|inherit/i], ['font-weight', /normal|bold|bolder|lighter|inherit|\d\d\d/i], ['text-decoration', /none|underline|overline|line-through|blink|inherit/i] // These properties are allowed by XHTML-IM, but really only cause UX issues:
//  background-color
//  color
//  font-family
//  font-size
//  margin-left
//  margin-right
//  text-align
]);

const sanitizeCSS = css => {
  const declarations = `;${css}` // Declarations are ; delimited, not terminated
  .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '') // Strip comments
  .replace(/\/\*.*/, '') // Strip unclosed comments
  .replace(/\\([a-fA-F0-9]{1,6})\s?/, (_, x) => String.fromCharCode(parseInt(x, 16))) // Decode escape sequences
  .match(/;\s*([a-z-]+)\s*:\s*([^;]*[^\s;])\s*/g); // Split into declarations

  const rules = [];

  if (!declarations) {
    return false;
  }

  for (const declaration of declarations) {
    const parts = declaration.match(/^;\s*([a-z-]+)\s*:\s*([^;]*[^\s])\s*$/);

    if (!parts) {
      continue;
    }

    const sanitizer = CSS_RULES.get(parts[1]);

    if (sanitizer) {
      const value = parts[2].match(sanitizer);

      if (value) {
        rules.push(`${parts[1]}:${value[0]}`);
      }
    }
  }

  if (rules.length) {
    return rules.join('');
  }

  return false;
};

const sanitizeURL = url => {
  return !!url.match(/^(https?|xmpp|cid|mailto|ftps?|im|ircs?|sips?|tel|geo|bitcoin|magnet):/i) && url;
};

const sanitizeNumber = num => {
  return !!num.match(/^[0-9]*$/) && num;
};

const ATTRIBUTE_SANITIZERS = {
  alt: text => text,
  height: sanitizeNumber,
  href: sanitizeURL,
  src: sanitizeURL,
  style: sanitizeCSS,
  width: sanitizeNumber
};

function stripElement(input) {
  let results = [];

  for (const child of input.children) {
    if (typeof child === 'string') {
      results.push(child);
    } else {
      const sanitized = sanitizeInterior(child);

      if (sanitized) {
        if (Array.isArray(sanitized)) {
          results = results.concat(sanitized);
        } else {
          results.push(sanitized);
        }
      }
    }
  }

  return results;
}

function sanitizeInterior(input) {
  if (typeof input === 'string') {
    return input;
  }

  if (!ALLOWED_ELEMENTS.has(input.name)) {
    if (input.name === 'script') {
      return;
    }

    return stripElement(input);
  }

  const children = input.children.map(sanitizeInterior).filter(child => child !== undefined);
  const attributes = {};

  for (const [key, value] of Object.entries(input.attributes)) {
    const allowed = ALLOWED_ATTRIBUTES.get(input.name);

    if (!allowed || !allowed.has(key)) {
      continue;
    }

    if (!value) {
      continue;
    }

    const sanitized = ATTRIBUTE_SANITIZERS[key](value);

    if (!sanitized) {
      continue;
    }

    attributes[key] = sanitized;
  }

  return {
    attributes,
    children,
    name: input.name
  };
}

function sanitizeRoot(input) {
  if (typeof input === 'string') {
    return;
  }

  let children = [];

  for (const child of input.children) {
    if (!child) {
      continue;
    }

    if (typeof child === 'string') {
      children.push(child);
      continue;
    }

    const sanitized = sanitizeInterior(child);

    if (Array.isArray(sanitized)) {
      children = children.concat(sanitized);
    } else if (sanitized) {
      children.push(sanitized);
    }
  }

  const attributes = {};

  if (input.name !== 'body') {
    return;
  }

  if (input.attributes.xmlns !== undefined) {
    attributes.xmlns = input.attributes.xmlns;
  }

  if (input.attributes.style) {
    attributes.style = input.attributes.style;
  }

  if (input.attributes['xml:lang'] !== undefined) {
    attributes['xml:lang'] = input.attributes['xml:lang'];
  }

  return {
    attributes,
    children,
    name: 'body'
  };
}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from: ltx, Copyright © 2010 Stephan Maka
 */


function isBasicNameStart(c) {
  return 97
  /* a */
  <= c && c <= 122
  /* z */
  || 65
  /* A */
  <= c && c <= 90
  /* Z */
  || c === 58
  /* Colon */
  || c === 95
  /* Underscore */
  ;
}

function isExtendedNameStart(c) {
  return 0xc0 <= c && c <= 0xd6 || 0xd8 <= c && c <= 0xf6 || 0xf8 <= c && c <= 0x2ff || 0x370 <= c && c <= 0x37d || 0x37f <= c && c <= 0x1fff || 0x200c <= c && c <= 0x200d || 0x2070 <= c && c <= 0x218f || 0x2c00 <= c && c <= 0x2fef || 0x3001 <= c && c <= 0xd7ff || 0xfdf0 <= c && c <= 0xfffd || 0x10000 <= c && c <= 0xeffff;
}

function isNameStart(c) {
  return isBasicNameStart(c) || isExtendedNameStart(c);
}

function isName(c) {
  return isBasicNameStart(c) || c === 45
  /* Dash */
  || c === 46
  /* Period */
  || 48
  /* Zero */
  <= c && c <= 57
  /* Nine */
  || c === 0xb7 || 0x0300 <= c && c <= 0x036f || 0x203f <= c && c <= 0x2040 || isExtendedNameStart(c);
}

function isWhitespace(c) {
  return c === 32
  /* Space */
  || c === 10
  /* NewLine */
  || c === 13
  /* CarriageReturn */
  || c === 9
  /* Tab */
  ;
}

class Parser extends _events.EventEmitter {
  constructor(opts = {}) {
    super();
    this.allowComments = true;
    this.attributes = {};
    this.state = 34
    /* TEXT */
    ;
    this.tagName = '';
    this.haveDeclaration = false;
    this.recordBuffer = [];

    if (opts.allowComments !== undefined) {
      this.allowComments = opts.allowComments;
    }
  }

  write(data) {
    for (const char of data) {
      const c = char.codePointAt(0);

      switch (this.state) {
        case 34
        /* TEXT */
        :
          {
            if (c === 60
            /* LessThan */
            ) {
                let text;

                try {
                  text = unescapeXML(this.endRecord());
                } catch (err) {
                  this.emit('error', err);
                  return;
                }

                if (text) {
                  this.emit('text', text);
                }

                this.transition(31
                /* TAG_START */
                );
                continue;
              } else {
              this.record(char);
              continue;
            }
          }

        case 31
        /* TAG_START */
        :
          {
            if (c === 47
            /* Slash */
            ) {
                this.transition(7
                /* CLOSING_TAG_START */
                );
                continue;
              }

            if (c === 33
            /* Exclamation */
            ) {
                this.transition(24
                /* START_INSTRUCTION */
                );
                continue;
              }

            if (c === 63
            /* Question */
            ) {
                if (this.haveDeclaration) {
                  this.restrictedXML();
                }

                this.transition(25
                /* START_PROCESSING_INSTRUCTION */
                );
                continue;
              }

            if (isNameStart(c)) {
              this.transition(30
              /* TAG_NAME */
              );
              this.startRecord(char);
              continue;
            }

            return this.notWellFormed();
          }

        case 30
        /* TAG_NAME */
        :
          {
            if (isName(c)) {
              this.record(char);
              continue;
            }

            if (isWhitespace(c)) {
              this.startTag();
              this.transition(32
              /* TAG_WAIT_NAME */
              );
              continue;
            }

            if (c === 47
            /* Slash */
            ) {
                this.startTag();
                this.transition(29
                /* TAG_END_SLASH */
                );
                continue;
              }

            if (c === 62
            /* GreaterThan */
            ) {
                this.startTag();
                this.transition(34
                /* TEXT */
                );
                this.emit('startElement', this.tagName, this.attributes);
                continue;
              }

            return this.notWellFormed();
          }

        case 29
        /* TAG_END_SLASH */
        :
          {
            if (c === 62
            /* GreaterThan */
            ) {
                this.emit('startElement', this.tagName, this.attributes);
                this.emit('endElement', this.tagName);
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 33
        /* TAG */
        :
          {
            if (isWhitespace(c)) {
              this.transition(32
              /* TAG_WAIT_NAME */
              );
              continue;
            }

            if (c === 47
            /* Slash */
            ) {
                this.transition(29
                /* TAG_END_SLASH */
                );
                continue;
              }

            if (c === 62
            /* GreaterThan */
            ) {
                this.emit('startElement', this.tagName, this.attributes);
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 32
        /* TAG_WAIT_NAME */
        :
          {
            if (isWhitespace(c)) {
              continue;
            }

            if (isNameStart(c)) {
              this.startRecord(char);
              this.transition(0
              /* ATTR_NAME */
              );
              continue;
            }

            if (c === 47
            /* Slash */
            ) {
                this.transition(29
                /* TAG_END_SLASH */
                );
                continue;
              }

            if (c === 62
            /* GreaterThan */
            ) {
                this.emit('startElement', this.tagName, this.attributes);
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 7
        /* CLOSING_TAG_START */
        :
          {
            if (isNameStart(c)) {
              this.startRecord(char);
              this.transition(6
              /* CLOSING_TAG_NAME */
              );
              continue;
            }

            return this.notWellFormed();
          }

        case 6
        /* CLOSING_TAG_NAME */
        :
          {
            if (isName(c)) {
              this.record(char);
              continue;
            }

            if (isWhitespace(c)) {
              this.transition(8
              /* CLOSING_TAG */
              );
              continue;
            }

            if (c === 62
            /* GreaterThan */
            ) {
                const tag = this.endRecord();
                this.emit('endElement', tag, this.attributes);
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 8
        /* CLOSING_TAG */
        :
          {
            if (isWhitespace(c)) {
              continue;
            }

            if (c === 62
            /* GreaterThan */
            ) {
                const tag = this.endRecord();
                this.emit('endElement', tag, this.attributes);
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 0
        /* ATTR_NAME */
        :
          {
            if (isName(c)) {
              this.record(char);
              continue;
            }

            if (c === 61
            /* Equal */
            ) {
                this.addAttribute();
                this.transition(4
                /* ATTR_WAIT_QUOTE */
                );
                continue;
              }

            if (isWhitespace(c)) {
              this.addAttribute();
              this.transition(3
              /* ATTR_WAIT_EQ */
              );
              continue;
            }

            return this.notWellFormed();
          }

        case 3
        /* ATTR_WAIT_EQ */
        :
          {
            if (c === 61
            /* Equal */
            ) {
                this.transition(4
                /* ATTR_WAIT_QUOTE */
                );
                continue;
              }

            if (isWhitespace(c)) {
              continue;
            }

            return this.notWellFormed();
          }

        case 4
        /* ATTR_WAIT_QUOTE */
        :
          {
            if (c === 34
            /* DoubleQuote */
            ) {
                this.startRecord();
                this.transition(1
                /* ATTR_QUOTE_DOUBLE */
                );
                continue;
              }

            if (c === 39
            /* SingleQuote */
            ) {
                this.startRecord();
                this.transition(2
                /* ATTR_QUOTE_SINGLE */
                );
                continue;
              }

            if (isWhitespace(c)) {
              continue;
            }

            return this.notWellFormed();
          }

        case 1
        /* ATTR_QUOTE_DOUBLE */
        :
        case 2
        /* ATTR_QUOTE_SINGLE */
        :
          {
            if (c === 34
            /* DoubleQuote */
            && this.state === 1
            /* ATTR_QUOTE_DOUBLE */
            || c === 39
            /* SingleQuote */
            && this.state === 2
            /* ATTR_QUOTE_SINGLE */
            ) {
              const value = this.endRecord();
              this.attributes[this.attributeName] = unescapeXML(value);
              this.transition(33
              /* TAG */
              );
              continue;
            }

            if (c === 60
            /* LessThan */
            ) {
                return this.notWellFormed();
              }

            this.record(char);
            continue;
          }

        case 24
        /* START_INSTRUCTION */
        :
          {
            if (c === 45
            /* Dash */
            ) {
                if (!this.allowComments) {
                  this.restrictedXML();
                }

                this.transition(23
                /* START_COMMENT_DASH */
                );
                continue;
              }

            if (c === 91
            /* LeftBracket */
            ) {
                this.transition(21
                /* START_CDATA_LB */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 23
        /* START_COMMENT_DASH */
        :
          {
            if (c === 45
            /* Dash */
            ) {
                this.transition(14
                /* IGNORE_COMMENT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 14
        /* IGNORE_COMMENT */
        :
          {
            if (c === 45
            /* Dash */
            ) {
                this.transition(12
                /* END_COMMENT_DASH */
                );
              }

            continue;
          }

        case 12
        /* END_COMMENT_DASH */
        :
          {
            if (c === 45
            /* Dash */
            ) {
                this.transition(11
                /* END_COMMENT_DASH_DASH */
                );
              } else {
              this.transition(14
              /* IGNORE_COMMENT */
              );
            }

            continue;
          }

        case 11
        /* END_COMMENT_DASH_DASH */
        :
          {
            if (c === 62
            /* GreaterThan */
            ) {
                this.transition(34
                /* TEXT */
                );
              } else {
              this.transition(14
              /* IGNORE_COMMENT */
              );
            }

            continue;
          }

        case 25
        /* START_PROCESSING_INSTRUCTION */
        :
          {
            if (c === 88
            /* X */
            || c === 120
            /* x */
            ) {
                this.transition(28
                /* START_XML_DECLARATION_X */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 28
        /* START_XML_DECLARATION_X */
        :
          {
            if (c === 77
            /* M */
            || c === 109
            /* m */
            ) {
                this.transition(27
                /* START_XML_DECLARATION_X_M */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 27
        /* START_XML_DECLARATION_X_M */
        :
          {
            if (c === 76
            /* L */
            || c === 108
            /* l */
            ) {
                this.transition(26
                /* START_XML_DECLARATION_X_M_L */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 26
        /* START_XML_DECLARATION_X_M_L */
        :
          {
            if (isWhitespace(c)) {
              this.haveDeclaration = true;
              this.transition(15
              /* IGNORE_INSTRUCTION */
              );
              continue;
            }

            return this.notWellFormed();
          }

        case 13
        /* END_XML_DECLARATION_QM */
        :
          {
            if (c === 62
            /* GreaterThan */
            ) {
                this.transition(34
                /* TEXT */
                );
                continue;
              }

            return this.notWellFormed();
          }

        case 15
        /* IGNORE_INSTRUCTION */
        :
          {
            if (c === 63
            /* Question */
            ) {
                this.transition(13
                /* END_XML_DECLARATION_QM */
                );
              }

            continue;
          }

        case 21
        /* START_CDATA_LB */
        :
          {
            this.wait(c, 67
            /* C */
            , 20
            /* START_CDATA_LB_C */
            );
            continue;
          }

        case 20
        /* START_CDATA_LB_C */
        :
          {
            this.wait(c, 68
            /* D */
            , 19
            /* START_CDATA_LB_C_D */
            );
            continue;
          }

        case 19
        /* START_CDATA_LB_C_D */
        :
          {
            this.wait(c, 65
            /* A */
            , 18
            /* START_CDATA_LB_C_D_A */
            );
            continue;
          }

        case 18
        /* START_CDATA_LB_C_D_A */
        :
          {
            this.wait(c, 84
            /* T */
            , 17
            /* START_CDATA_LB_C_D_A_T */
            );
            continue;
          }

        case 17
        /* START_CDATA_LB_C_D_A_T */
        :
          {
            this.wait(c, 65
            /* A */
            , 16
            /* START_CDATA_LB_C_D_A_T_A */
            );
            continue;
          }

        case 16
        /* START_CDATA_LB_C_D_A_T_A */
        :
          {
            this.wait(c, 91
            /* LeftBracket */
            , 5
            /* CDATA */
            );
            continue;
          }

        case 5
        /* CDATA */
        :
          {
            if (c === 93
            /* RightBracket */
            ) {
                this.transition(10
                /* END_CDATA_RB */
                );
                continue;
              }

            this.record(char);
            continue;
          }

        case 10
        /* END_CDATA_RB */
        :
          {
            if (c === 93
            /* RightBracket */
            ) {
                this.transition(9
                /* END_CDATA_RB_RB */
                );
              } else {
              this.record(String.fromCodePoint(93
              /* RightBracket */
              ));
              this.record(char);
              this.transition(5
              /* CDATA */
              );
            }

            continue;
          }

        case 9
        /* END_CDATA_RB_RB */
        :
          {
            if (c === 62
            /* GreaterThan */
            ) {
                const text = this.endRecord();

                if (text) {
                  this.emit('text', text);
                }

                this.transition(34
                /* TEXT */
                );
              } else {
              this.record(String.fromCodePoint(93
              /* RightBracket */
              ));
              this.record(String.fromCodePoint(93
              /* RightBracket */
              ));
              this.record(char);
              this.transition(5
              /* CDATA */
              );
            }

            continue;
          }
      }
    }
  }

  end(data) {
    if (data) {
      this.write(data);
    }

    this.write = () => undefined;
  }

  record(char) {
    this.recordBuffer.push(char);
  }

  startRecord(char) {
    this.recordBuffer = [];

    if (char) {
      this.recordBuffer.push(char);
    }
  }

  endRecord() {
    const data = this.recordBuffer;
    this.recordBuffer = [];
    return data.join('');
  }

  startTag() {
    this.tagName = this.endRecord();
    this.attributes = {};
  }

  addAttribute() {
    const name = this.endRecord();

    if (this.attributes[name] !== undefined) {
      return this.notWellFormed();
    }

    this.attributeName = name;
    this.attributes[name] = '';
  }

  wait(c, nextChar, newState) {
    if (c === nextChar) {
      this.transition(newState);
      return;
    }

    return this.notWellFormed();
  }

  transition(state) {
    this.state = state;

    if (state === 34
    /* TEXT */
    ) {
        this.startRecord();
      }
  }

  notWellFormed(msg) {
    this.emit('error', JXTError.notWellFormed(msg));
  }

  restrictedXML(msg) {
    this.emit('error', JXTError.restrictedXML(msg));
  }

}

function parse$1(data, opts = {}) {
  const p = new Parser(opts);
  let result;
  let element;
  let error = null;
  p.on('text', text => {
    if (element) {
      element.children.push(text);
    }
  });
  p.on('startElement', (name, attrs) => {
    const child = new XMLElement(name, attrs);

    if (!result) {
      result = child;
    }

    if (!element) {
      element = child;
    } else {
      element = element.appendChild(child);
    }
  });
  p.on('endElement', name => {
    if (!element) {
      p.emit('error', JXTError.notWellFormed('a'));
    } else if (name === element.name) {
      if (element.parent) {
        element = element.parent;
      }
    } else {
      p.emit('error', JXTError.notWellFormed('b'));
    }
  });
  p.on('error', e => {
    error = e;
  });
  p.write(data);
  p.end();

  if (error) {
    throw error;
  } else {
    return result;
  }
}

function createElement(namespace, name, parentNamespace, parent) {
  if (parent) {
    namespace = namespace || parent.getNamespace();
    const root = parent.getNamespaceRoot(namespace);

    if (root) {
      const prefix = root.useNamespace('', namespace);
      name = `${prefix}:${name}`;
    }
  }

  const el = new XMLElement(name);

  if (name.indexOf(':') < 0 && (!parentNamespace || namespace !== parentNamespace)) {
    el.setAttribute('xmlns', namespace);
  }

  return el;
}

function getLang(xml, lang) {
  return (xml.getAttribute('xml:lang') || lang || '').toLowerCase();
}

function getTargetLang(children, context) {
  const availableLanguages = [];

  for (const child of children) {
    availableLanguages.push(getLang(child, context.lang));
  }

  let targetLanguage;

  if (!context.resolveLanguage) {
    targetLanguage = context.lang;
  } else {
    targetLanguage = context.resolveLanguage(availableLanguages, context.acceptLanguages || [], context.lang);
  }

  return targetLanguage || '';
}

function findAll(xml, namespace, element, lang) {
  const existing = xml.getChildren(element, namespace);
  const parentLang = getLang(xml);

  if (existing.length) {
    if (lang) {
      return existing.filter(child => {
        const childLang = getLang(child, parentLang);

        if (childLang === lang) {
          return true;
        }
      });
    } else {
      return existing;
    }
  }

  return [];
}

function findOrCreate(xml, namespace, element, lang) {
  namespace = namespace || xml.getNamespace();
  const existing = findAll(xml, namespace, element, lang);

  if (existing.length) {
    return existing[0];
  }

  const created = createElement(namespace, element, xml.getDefaultNamespace(), xml);
  const parentLang = getLang(xml, lang);

  if (lang && parentLang !== lang) {
    created.setAttribute('xml:lang', lang);
  }

  xml.appendChild(created);
  return created;
}

function createAttributeField(opts) {
  return {
    importer(xml) {
      const rawValue = xml.getAttribute(opts.name, opts.namespace);

      if (!rawValue) {
        return opts.dynamicDefault ? opts.dynamicDefault(rawValue) : opts.staticDefault;
      }

      return opts.parseValue(rawValue);
    },

    exporter(xml, value) {
      if (value === undefined || value === opts.staticDefault) {
        return;
      }

      const output = opts.writeValue(value);

      if (!output && !opts.emitEmpty) {
        return;
      }

      if (!opts.namespace || !opts.prefix) {
        xml.setAttribute(opts.name, output, opts.emitEmpty);
      } else {
        let prefix;
        const root = xml.getNamespaceRoot(opts.namespace);

        if (root) {
          prefix = root.useNamespace(opts.prefix, opts.namespace);
        } else {
          const namespaces = xml.getNamespaceContext();

          if (!namespaces[opts.namespace]) {
            prefix = xml.useNamespace(opts.prefix, opts.namespace);
            namespaces[opts.namespace] = prefix;
          }
        }

        xml.setAttribute(`${prefix}:${opts.name}`, output, opts.emitEmpty);
      }
    }

  };
}

function createAttributeType(parser, createOpts) {
  return (name, defaultValue = undefined, opts = {}) => {
    opts = Object.assign({
      staticDefault: defaultValue
    }, opts);
    return createAttributeField(Object.assign(Object.assign({
      name
    }, parser), createOpts ? createOpts(opts) : opts));
  };
}

function createNamespacedAttributeType(parser, createOpts) {
  return (prefix, namespace, name, defaultValue = undefined, opts = {}) => {
    opts = Object.assign({
      staticDefault: defaultValue
    }, opts);
    return createAttributeField(Object.assign(Object.assign({
      name,
      namespace,
      prefix
    }, parser), createOpts ? createOpts(opts) : opts));
  };
}

function createChildAttributeField(opts) {
  const converter = opts.converter || createAttributeField(Object.assign(Object.assign({}, opts), {
    namespace: opts.attributeNamespace
  }));
  return {
    importer(xml, context) {
      const child = xml.getChild(opts.element, opts.namespace || xml.getNamespace());

      if (!child) {
        return opts.dynamicDefault ? opts.dynamicDefault() : opts.staticDefault;
      }

      return converter.importer(child, context);
    },

    exporter(xml, value, context) {
      if (value !== undefined && value !== opts.staticDefault) {
        const child = findOrCreate(xml, opts.namespace || xml.getNamespace(), opts.element);
        converter.exporter(child, value, context);
      }
    }

  };
}

function createChildAttributeType(parser, createOpts) {
  return (namespace, element, name, defaultValue = undefined, opts = {}) => {
    opts = Object.assign({
      staticDefault: defaultValue
    }, opts);
    return createChildAttributeField(Object.assign(Object.assign({
      element,
      name,
      namespace
    }, parser), createOpts ? createOpts(opts) : opts));
  };
}

function createTextField(opts) {
  return {
    importer(xml) {
      const rawValue = xml.getText();

      if (!rawValue) {
        return opts.dynamicDefault ? opts.dynamicDefault(rawValue) : opts.staticDefault;
      }

      return opts.parseValue(rawValue);
    },

    exporter(xml, value) {
      if (!value && opts.emitEmpty) {
        xml.children.push('');
        return;
      }

      if (value === undefined || value === opts.staticDefault) {
        return;
      }

      const output = opts.writeValue(value);

      if (output) {
        xml.children.push(output);
      }
    }

  };
}

function createChildTextField(opts) {
  const converter = createTextField(opts);
  return {
    importer(xml, context) {
      const children = findAll(xml, opts.namespace || xml.getNamespace(), opts.element);
      const targetLanguage = getTargetLang(children, context);

      if (!children.length) {
        return opts.dynamicDefault ? opts.dynamicDefault() : opts.staticDefault;
      }

      if (opts.matchLanguage) {
        for (const child of children) {
          if (getLang(child, context.lang) === targetLanguage) {
            return converter.importer(child, context);
          }
        }
      }

      return converter.importer(children[0], context);
    },

    exporter(xml, value, context) {
      if (!value && opts.emitEmpty) {
        findOrCreate(xml, opts.namespace || xml.getNamespace(), opts.element, opts.matchLanguage ? context.lang : undefined);
        return;
      }

      if (value !== undefined && value !== opts.staticDefault) {
        const child = findOrCreate(xml, opts.namespace || xml.getNamespace(), opts.element, opts.matchLanguage ? context.lang : undefined);
        converter.exporter(child, value, context);
      }
    }

  };
}

const stringParser = {
  parseValue: v => v,
  writeValue: v => v
};
const integerParser = {
  parseValue: v => parseInt(v, 10),
  writeValue: v => v.toString()
};
const floatParser = {
  parseValue: v => parseFloat(v),
  writeValue: v => v.toString()
};
const boolParser = {
  parseValue: v => {
    if (v === 'true' || v === '1') {
      return true;
    }

    if (v === 'false' || v === '0') {
      return false;
    }

    return;
  },
  writeValue: v => v ? '1' : '0'
};
const dateParser = {
  parseValue: v => new Date(v),
  writeValue: v => typeof v === 'string' ? v : v.toISOString()
};
const jsonParser = {
  parseValue: v => JSON.parse(v),
  writeValue: v => JSON.stringify(v)
};

const bufferParser = (encoding = 'utf8') => ({
  parseValue: v => {
    if (encoding === 'base64' && v === '=') {
      v = '';
    }

    return Buffer.from(v.trim(), encoding);
  },
  writeValue: v => {
    let data;

    if (typeof v === 'string') {
      data = Buffer.from(v).toString(encoding);
    } else if (v) {
      data = v.toString(encoding);
    } else {
      data = '';
    }

    if (encoding === 'base64') {
      data = data || '=';
    }

    return data;
  }
});

const tzOffsetParser = {
  parseValue: v => {
    let sign = -1;

    if (v.charAt(0) === '-') {
      sign = 1;
      v = v.slice(1);
    }

    const split = v.split(':');
    const hours = parseInt(split[0], 10);
    const minutes = parseInt(split[1], 10);
    return (hours * 60 + minutes) * sign;
  },
  writeValue: v => {
    if (typeof v === 'string') {
      return v;
    } else {
      let formatted = '-';

      if (v < 0) {
        v = -v;
        formatted = '+';
      }

      const hours = v / 60;
      const minutes = v % 60;
      formatted += (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
      return formatted;
    }
  }
}; // ====================================================================
// Field Types
// ====================================================================

const attribute = createAttributeType(stringParser, opts => Object.assign({
  dynamicDefault: opts.emitEmpty ? v => v === '' ? '' : opts.staticDefault : undefined
}, opts));
const booleanAttribute = createAttributeType(boolParser);
const integerAttribute = createAttributeType(integerParser);
const floatAttribute = createAttributeType(floatParser);
const dateAttribute = createAttributeType(dateParser);
const namespacedAttribute = createNamespacedAttributeType(stringParser);
const namespacedBooleanAttribute = createNamespacedAttributeType(boolParser);
const namespacedIntegerAttribute = createNamespacedAttributeType(integerParser);
const namespacedFloatAttribute = createNamespacedAttributeType(floatParser);
const namespacedDateAttribute = createNamespacedAttributeType(dateParser);
const childAttribute = createChildAttributeType(stringParser);
const childBooleanAttribute = createChildAttributeType(boolParser);
const childIntegerAttribute = createChildAttributeType(integerParser);
const childFloatAttribute = createChildAttributeType(floatParser);
const childDateAttribute = createChildAttributeType(dateParser);

const text = defaultValue => createTextField(Object.assign({
  staticDefault: defaultValue
}, stringParser));

const textJSON = () => createTextField(Object.assign({}, jsonParser));

const textBuffer = (encoding = 'utf8') => createTextField(Object.assign({}, bufferParser(encoding)));

function languageAttribute() {
  return {
    importer(xml, context) {
      return getLang(xml, context.lang);
    },

    exporter(xml, value, context) {
      if (value && value.toLowerCase() !== context.lang) {
        xml.setAttribute('xml:lang', value);
      } else {
        xml.setAttribute('xml:lang', undefined);
      }
    }

  };
}

const childLanguageAttribute = (namespace, element) => createChildAttributeField(Object.assign({
  converter: languageAttribute(),
  element,
  name: 'xml:lang',
  namespace
}, stringParser));

const childText = (namespace, element, defaultValue, emitEmpty = false) => createChildTextField(Object.assign({
  element,
  emitEmpty,
  matchLanguage: true,
  namespace,
  staticDefault: defaultValue
}, stringParser));

const childTextBuffer = (namespace, element, encoding = 'utf8') => createChildTextField(Object.assign({
  element,
  matchLanguage: true,
  namespace
}, bufferParser(encoding)));

const childDate = (namespace, element) => createChildTextField(Object.assign({
  element,
  namespace
}, dateParser));

const childInteger = (namespace, element, defaultValue) => createChildTextField(Object.assign({
  element,
  namespace,
  staticDefault: defaultValue
}, integerParser));

const childFloat = (namespace, element, defaultValue) => createChildTextField(Object.assign({
  element,
  namespace,
  staticDefault: defaultValue
}, floatParser));

const childJSON = (namespace, element) => createChildTextField(Object.assign({
  element,
  namespace
}, jsonParser));

function childTimezoneOffset(namespace, element) {
  return createChildTextField(Object.assign({
    element,
    namespace,
    staticDefault: 0
  }, tzOffsetParser));
}

function childBoolean(namespace, element) {
  return {
    importer(xml) {
      const child = xml.getChild(element, namespace || xml.getNamespace());

      if (child) {
        return true;
      }
    },

    exporter(xml, value) {
      if (value) {
        findOrCreate(xml, namespace || xml.getNamespace(), element);
      }
    }

  };
}

const deepChildExporter = (path, xml, value) => {
  if (!value) {
    return;
  }

  let current = xml;

  for (const node of path) {
    current = findOrCreate(current, node.namespace || current.getNamespace(), node.element);
  }

  current.children.push(value.toString());
};

function deepChildText(path, defaultValue) {
  return {
    importer(xml) {
      let current = xml;

      for (const node of path) {
        current = current.getChild(node.element, node.namespace || current.getNamespace());

        if (!current) {
          return defaultValue;
        }
      }

      return current.getText() || defaultValue;
    },

    exporter(xml, value) {
      deepChildExporter(path, xml, value);
    }

  };
}

function deepChildInteger(path, defaultValue) {
  return {
    importer(xml) {
      let current = xml;

      for (const node of path) {
        current = current.getChild(node.element, node.namespace || current.getNamespace());

        if (!current) {
          return;
        }
      }

      const data = current.getText();

      if (data) {
        return parseInt(data, 10);
      } else if (defaultValue) {
        return defaultValue;
      }
    },

    exporter(xml, value) {
      deepChildExporter(path, xml, value);
    }

  };
}

function deepChildBoolean(path) {
  return {
    importer(xml) {
      let current = xml;

      for (const node of path) {
        current = current.getChild(node.element, node.namespace || current.getNamespace());

        if (!current) {
          return false;
        }
      }

      return true;
    },

    exporter(xml, value) {
      if (!value) {
        return;
      }

      let current = xml;

      for (const node of path) {
        current = findOrCreate(current, node.namespace || current.getNamespace(), node.element);
      }
    }

  };
}

function deepMultipleChildText(path) {
  const finalChild = path.pop();
  return {
    importer(xml, context) {
      let current = xml;

      for (const node of path) {
        current = current.getChild(node.element, node.namespace || current.getNamespace());

        if (!current) {
          return [];
        }
      }

      const result = [];
      const children = findAll(current, finalChild.namespace || current.getNamespace(), finalChild.element);
      const targetLanguage = getTargetLang(children, context);

      for (const child of children) {
        if (getLang(child, context.lang) === targetLanguage) {
          result.push(child.getText());
        }
      }

      return result;
    },

    exporter(xml, values, context) {
      if (!values.length) {
        return;
      }

      let current = xml;

      for (const node of path) {
        current = findOrCreate(current, node.namespace || current.getNamespace(), node.element);
      }

      const {
        namespace,
        element
      } = finalChild;

      for (const value of values) {
        const child = createElement(namespace || current.getNamespace(), element, context.namespace, current);
        child.children.push(value);
        current.appendChild(child);
      }
    }

  };
}

function childEnum(namespace, elements, defaultValue) {
  const elementNames = new Map();
  const valueNames = new Map();

  for (const el of elements) {
    if (typeof el === 'string') {
      elementNames.set(el, el);
      valueNames.set(el, el);
    } else {
      elementNames.set(el[1], el[0]);
      valueNames.set(el[0], el[1]);
    }
  }

  return {
    importer(xml) {
      for (const child of xml.children) {
        if (typeof child === 'string') {
          continue;
        } else if (child.getNamespace() === (namespace || xml.getNamespace()) && elementNames.has(child.getName())) {
          return elementNames.get(child.getName());
        }
      }

      return defaultValue;
    },

    exporter(xml, value) {
      if (valueNames.has(value)) {
        findOrCreate(xml, namespace, valueNames.get(value));
      }
    }

  };
}

function childDoubleEnum(namespace, parentElements, childElements, defaultValue) {
  const parentNames = new Set(parentElements);
  const childNames = new Set(childElements);
  return {
    importer(xml) {
      for (const parent of xml.children) {
        if (typeof parent === 'string') {
          continue;
        } else if (parent.getNamespace() === (namespace || xml.getNamespace()) && parentNames.has(parent.getName())) {
          for (const child of parent.children) {
            if (typeof child === 'string') {
              continue;
            } else if (child.getNamespace() === (namespace || xml.getNamespace()) && childNames.has(child.getName())) {
              return [parent.getName(), child.getName()];
            }
          }

          return [parent.getName()];
        }
      }

      return defaultValue;
    },

    exporter(xml, value) {
      const parent = findOrCreate(xml, namespace, value[0]);

      if (value[1]) {
        findOrCreate(parent, namespace, value[1]);
      }
    }

  };
}

function multipleChildText(namespace, element) {
  return {
    importer(xml, context) {
      const result = [];
      const children = findAll(xml, namespace || xml.getNamespace(), element);
      const targetLanguage = getTargetLang(children, context);

      for (const child of children) {
        if (getLang(child, context.lang) === targetLanguage) {
          result.push(child.getText());
        }
      }

      return result;
    },

    exporter(xml, values, context) {
      for (const value of values) {
        const child = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);
        child.children.push(value);
        xml.appendChild(child);
      }
    }

  };
}

function multipleChildAttribute(namespace, element, name) {
  return {
    importer(xml) {
      const result = [];
      const children = xml.getChildren(element, namespace || xml.getNamespace());

      for (const child of children) {
        const childAttr = child.getAttribute(name);

        if (childAttr !== undefined) {
          result.push(childAttr);
        }
      }

      return result;
    },

    exporter(xml, values, context) {
      for (const value of values) {
        const child = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);
        child.setAttribute(name, value);
        xml.appendChild(child);
      }
    }

  };
}

function multipleChildIntegerAttribute(namespace, element, name) {
  return {
    importer(xml) {
      const result = [];
      const children = xml.getChildren(element, namespace || xml.getNamespace());

      for (const child of children) {
        const childAttr = child.getAttribute(name);

        if (childAttr !== undefined) {
          result.push(parseInt(childAttr, 10));
        }
      }

      return result;
    },

    exporter(xml, values, context) {
      for (const value of values) {
        const child = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);
        child.setAttribute(name, value.toString());
        xml.appendChild(child);
      }
    }

  };
}

function childAlternateLanguageText(namespace, element) {
  return {
    importer(xml, context) {
      const results = [];
      const children = findAll(xml, namespace || xml.getNamespace(), element);
      const seenLanuages = new Set();

      for (const child of children) {
        const langText = child.getText();

        if (langText) {
          const lang = getLang(child, context.lang);

          if (seenLanuages.has(lang)) {
            continue;
          }

          results.push({
            lang,
            value: langText
          });
          seenLanuages.add(lang);
        }
      }

      return seenLanuages.size > 0 ? results : undefined;
    },

    exporter(xml, values, context) {
      for (const entry of values) {
        const val = entry.value;

        if (val) {
          const child = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);

          if (entry.lang !== context.lang) {
            child.setAttribute('xml:lang', entry.lang);
          }

          child.children.push(val);
          xml.appendChild(child);
        }
      }
    }

  };
}

function multipleChildAlternateLanguageText(namespace, element) {
  return {
    importer(xml, context) {
      const results = [];
      const langIndex = new Map();
      let hasResults = false;
      const children = findAll(xml, namespace || xml.getNamespace(), element);

      for (const child of children) {
        const langText = child.getText();

        if (langText) {
          const lang = getLang(child, context.lang);
          let langResults = langIndex.get(lang);

          if (!langResults) {
            langResults = [];
            langIndex.set(lang, langResults);
            results.push({
              lang,
              value: langResults
            });
          }

          langResults.push(langText);
          hasResults = true;
        }
      }

      return hasResults ? results : undefined;
    },

    exporter(xml, values, context) {
      for (const entry of values) {
        for (const val of entry.value) {
          const child = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);

          if (entry.lang !== context.lang) {
            child.setAttribute('xml:lang', entry.lang);
          }

          child.children.push(val);
          xml.appendChild(child);
        }
      }
    }

  };
}

function multipleChildEnum(namespace, elements) {
  const elementNames = new Map();
  const valueNames = new Map();

  for (const el of elements) {
    if (typeof el === 'string') {
      elementNames.set(el, el);
      valueNames.set(el, el);
    } else {
      elementNames.set(el[1], el[0]);
      valueNames.set(el[0], el[1]);
    }
  }

  return {
    importer(xml) {
      const results = [];

      for (const child of xml.children) {
        if (typeof child === 'string') {
          continue;
        } else if (child.getNamespace() === (namespace || xml.getNamespace()) && elementNames.has(child.getName())) {
          results.push(elementNames.get(child.getName()));
        }
      }

      return results;
    },

    exporter(xml, values) {
      for (const value of values) {
        findOrCreate(xml, namespace, valueNames.get(value));
      }
    }

  };
}

function splicePath(namespace, element, path, multiple = false) {
  return {
    importer(xml, context) {
      const child = xml.getChild(element, namespace || xml.getNamespace());

      if (!child) {
        return;
      }

      const results = [];

      for (const grandChild of child.children) {
        if (typeof grandChild === 'string') {
          continue;
        }

        if (context.registry.getImportKey(grandChild) === path) {
          const imported = context.registry.import(grandChild);

          if (imported) {
            results.push(imported);
          }
        }
      }

      return multiple ? results : results[0];
    },

    exporter(xml, data, context) {
      let values = [];

      if (!Array.isArray(data)) {
        values = [data];
      } else {
        values = data;
      }

      const children = [];

      for (const value of values) {
        const child = context.registry.export(path, value, Object.assign(Object.assign({}, context), {
          namespace: namespace || xml.getNamespace() || undefined
        }));

        if (child) {
          children.push(child);
        }
      }

      if (children.length) {
        const skipChild = findOrCreate(xml, namespace || xml.getNamespace(), element);

        for (const child of children) {
          skipChild.appendChild(child);
        }
      }
    }

  };
}

function staticValue(value) {
  return {
    exporter: () => undefined,
    importer: () => value
  };
}

function childRawElement(namespace, element, sanitizer) {
  return {
    importer(xml, context) {
      if (sanitizer && (!context.sanitizers || !context.sanitizers[sanitizer])) {
        return;
      }

      const child = xml.getChild(element, namespace || xml.getNamespace());

      if (child) {
        if (sanitizer) {
          return context.sanitizers[sanitizer](child.toJSON());
        } else {
          return child.toJSON();
        }
      }
    },

    exporter(xml, value, context) {
      if (typeof value === 'string') {
        const wrapped = parse$1(`<${element} xmlns="${namespace || xml.getNamespace()}">${value}</${element}>`);
        value = wrapped.toJSON();
      }

      if (sanitizer) {
        if (!context.sanitizers || !context.sanitizers[sanitizer]) {
          return;
        }

        value = context.sanitizers[sanitizer](value);
      }

      if (value) {
        xml.appendChild(new XMLElement(value.name, value.attributes, value.children));
      }
    }

  };
}

function childLanguageRawElement(namespace, element, sanitizer) {
  return {
    importer(xml, context) {
      if (sanitizer && (!context.sanitizers || !context.sanitizers[sanitizer])) {
        return;
      }

      const children = findAll(xml, namespace || xml.getNamespace(), element);
      const targetLanguage = getTargetLang(children, context);

      for (const child of children) {
        if (getLang(child, context.lang) === targetLanguage) {
          if (sanitizer) {
            return context.sanitizers[sanitizer](child.toJSON());
          } else {
            return child.toJSON();
          }
        }
      }

      if (children[0]) {
        if (sanitizer) {
          return context.sanitizers[sanitizer](children[0].toJSON());
        } else {
          return children[0].toJSON();
        }
      }
    },

    exporter(xml, value, context) {
      if (typeof value === 'string') {
        const wrapped = parse$1(`<${element} xmlns="${namespace || xml.getNamespace()}">${value}</${element}>`);
        value = wrapped.toJSON();
      }

      if (value && sanitizer) {
        if (!context.sanitizers || !context.sanitizers[sanitizer]) {
          return;
        }

        value = context.sanitizers[sanitizer](value);
      }

      if (!value) {
        return;
      }

      const rawElement = findOrCreate(xml, namespace || xml.getNamespace(), element, context.lang);

      for (const child of value.children) {
        if (typeof child === 'string') {
          rawElement.appendChild(child);
        } else if (child) {
          rawElement.appendChild(new XMLElement(child.name, child.attributes, child.children));
        }
      }
    }

  };
}

function childAlternateLanguageRawElement(namespace, element, sanitizer) {
  return {
    importer(xml, context) {
      if (sanitizer && (!context.sanitizers || !context.sanitizers[sanitizer])) {
        return;
      }

      const results = [];
      const seenLanuages = new Set();
      const children = findAll(xml, namespace || xml.getNamespace(), element);

      for (const child of children) {
        let result = child.toJSON();

        if (sanitizer) {
          result = context.sanitizers[sanitizer](result);
        }

        if (result) {
          const lang = getLang(child, context.lang);

          if (seenLanuages.has(lang)) {
            continue;
          }

          results.push({
            lang,
            value: result
          });
          seenLanuages.add(lang);
        }
      }

      return seenLanuages.size > 0 ? results : undefined;
    },

    exporter(xml, values, context) {
      for (const entry of values) {
        let value = entry.value;

        if (typeof value === 'string') {
          const wrapped = parse$1(`<${element} xmlns="${namespace || xml.getNamespace()}">${value}</${element}>`);
          value = wrapped.toJSON();
        }

        if (value && sanitizer) {
          if (!context.sanitizers || !context.sanitizers[sanitizer]) {
            continue;
          }

          value = context.sanitizers[sanitizer](value);
        }

        if (value) {
          const rawElement = createElement(namespace || xml.getNamespace(), element, context.namespace, xml);
          xml.appendChild(rawElement);

          if (entry.lang !== context.lang) {
            rawElement.setAttribute('xml:lang', entry.lang);
          }

          for (const child of value.children) {
            if (typeof child === 'string') {
              rawElement.appendChild(child);
            } else {
              rawElement.appendChild(new XMLElement(child.name, child.attributes, child.children));
            }
          }
        }
      }
    }

  };
}

function parameterMap(namespace, element, keyName, valueName) {
  return {
    importer(xml, context) {
      const result = {};
      const params = findAll(xml, namespace, element);
      const keyImporter = attribute(keyName).importer;
      const valueImporter = attribute(valueName).importer;

      for (const param of params) {
        result[keyImporter(param, context)] = valueImporter(param, context);
      }

      return result;
    },

    exporter(xml, values, context) {
      const keyExporter = attribute(keyName).exporter;
      const valueExporter = attribute(valueName).exporter;
      const ns = namespace || xml.getNamespace();

      for (const [param, value] of Object.entries(values)) {
        const paramEl = createElement(ns, element, context.namespace, xml);
        keyExporter(paramEl, param, context);

        if (values[param]) {
          valueExporter(paramEl, value, context);
        }

        xml.appendChild(paramEl);
      }
    }

  };
}

class Translator {
  constructor() {
    this.parents = new Set();
    this.placeholder = false;
    this.typeField = '';
    this.versionField = '';
    this.defaultType = '';
    this.defaultVersion = '';
    this.languageField = 'lang';
    this.typeValues = new Map();
    this.typeOrders = new Map();
    this.importers = new Map();
    this.exporters = new Map();
    this.children = new Map();
    this.childrenIndex = new Map();
    this.implicitChildren = new Set();
    this.contexts = new Map();
  }

  addChild(name, translator, multiple = false, selector, implicit) {
    const child = {
      multiple: multiple || false,
      name,
      selector,
      translator
    };
    const existingChild = this.children.get(name);

    if (!existingChild) {
      child.translator.parents.add(this);
      this.children.set(name, child);

      for (const [xid] of translator.importers) {
        if (!this.implicitChildren.has(xid)) {
          this.childrenIndex.set(xid, name);
        }
      }

      if (implicit) {
        this.implicitChildren.add(implicit);
      }

      return;
    }

    const existing = existingChild.translator;
    existingChild.multiple = multiple;

    if (selector && existingChild.selector && selector !== existingChild.selector) {
      existingChild.selector = undefined;
    }

    for (const [xid, importer] of translator.importers) {
      const [type, version] = (existing.typeValues.get(xid) || '').split('__v__');
      existing.updateDefinition({
        contexts: translator.contexts,
        element: importer.element,
        exporterOrdering: new Map(),
        exporters: new Map(),
        importerOrdering: importer.fieldOrders,
        importers: importer.fields,
        namespace: importer.namespace,
        optionalNamespaces: new Map(),
        type,
        version
      });

      if (!this.implicitChildren.has(xid)) {
        this.childrenIndex.set(xid, name);
      }
    }

    for (const [exportType, exporter] of translator.exporters) {
      const [type, version] = exportType.split('__v__');
      existing.updateDefinition({
        contexts: translator.contexts,
        element: exporter.element,
        exporterOrdering: exporter.fieldOrders,
        exporters: exporter.fields,
        importerOrdering: new Map(),
        importers: new Map(),
        namespace: exporter.namespace,
        optionalNamespaces: exporter.optionalNamespaces,
        type,
        version
      });
    }
  }

  addContext(path, selector, field, xid, value, implied) {
    if (selector) {
      path = `${path}[${selector}]`;
    }

    let context = this.contexts.get(path);

    if (!context) {
      context = {
        typeField: '',
        versionField: '',
        typeValues: new Map()
      };
    }

    if (implied) {
      context.impliedType = value;
    }

    context.typeField = field || '';
    context.typeValues.set(xid, value);
    this.contexts.set(path, context);
  }

  getChild(name) {
    const child = this.children.get(name);

    if (!child) {
      return;
    }

    return child.translator;
  }

  getImportKey(xml) {
    return this.childrenIndex.get(`{${xml.getNamespace()}}${xml.getName()}`);
  }

  updateDefinition(opts) {
    const xid = `{${opts.namespace}}${opts.element}`;
    const type = opts.type || this.defaultType;
    const version = opts.version || this.defaultVersion;
    const versionType = version ? `${type}__v__${version}` : type;
    const importer = this.importers.get(xid) || {
      element: opts.element,
      fieldOrders: new Map(),
      fields: new Map(),
      namespace: opts.namespace
    };

    for (const [fieldName, fieldImporter] of opts.importers) {
      importer.fields.set(fieldName, fieldImporter);
    }

    for (const [fieldName, order] of opts.importerOrdering) {
      importer.fieldOrders.set(fieldName, order);
    }

    this.importers.set(xid, importer);
    const exporter = this.exporters.get(versionType) || {
      element: opts.element,
      fieldOrders: new Map(),
      fields: new Map(),
      namespace: opts.namespace,
      optionalNamespaces: opts.optionalNamespaces
    };

    for (const [fieldName, fieldExporter] of opts.exporters) {
      exporter.fields.set(fieldName, fieldExporter);
    }

    for (const [name, order] of opts.exporterOrdering) {
      exporter.fieldOrders.set(name, order);
    }

    for (const [prefix, namespace] of opts.optionalNamespaces) {
      exporter.optionalNamespaces.set(prefix, namespace);
    }

    this.exporters.set(versionType, exporter);

    for (const [path, newContext] of opts.contexts) {
      const context = this.contexts.get(path) || {
        impliedType: undefined,
        typeField: newContext.typeField,
        versionField: newContext.versionField,
        typeValues: new Map()
      };

      if (!context.typeField) {
        context.typeField = newContext.typeField;
      }

      if (!context.versionField) {
        context.versionField = newContext.versionField;
      }

      if (!context.impliedType) {
        context.impliedType = newContext.impliedType;
      }

      for (const [xid2, type] of newContext.typeValues) {
        context.typeValues.set(xid2, type);
      }

      this.contexts.set(path, context);
    }

    if (opts.type) {
      this.typeValues.set(xid, versionType);

      if (opts.typeOrder && opts.type) {
        this.typeOrders.set(opts.type, opts.typeOrder);
      }
    } else if (this.typeField && !opts.type) {
      for (const [, imp] of this.importers) {
        for (const [fieldName, fieldImporter] of opts.importers) {
          imp.fields.set(fieldName, fieldImporter);
        }

        for (const [fieldName, order] of opts.importerOrdering) {
          imp.fieldOrders.set(fieldName, order);
        }
      }

      for (const [, exp] of this.exporters) {
        for (const [fieldName, fieldExporter] of opts.exporters) {
          exp.fields.set(fieldName, fieldExporter);
        }

        for (const [fieldName, order] of opts.exporterOrdering) {
          exp.fieldOrders.set(fieldName, order);
        }
      }
    }
  }

  replaceWith(replacement) {
    for (const [a, b] of this.children) {
      replacement.children.set(a, b);
    }

    for (const [a, b] of this.childrenIndex) {
      replacement.childrenIndex.set(a, b);
    }

    for (const [a, b] of this.contexts) {
      replacement.contexts.set(a, b);
    }

    for (const a of this.implicitChildren) {
      replacement.implicitChildren.add(a);
    }

    for (const parent of this.parents) {
      for (const child of parent.children.values()) {
        if (child.translator === this) {
          child.translator = replacement;
        }
      }
    }

    this.parents = new Set();
  }

  import(xml, parentContext) {
    const xid = `{${xml.getNamespace()}}${xml.getName()}`;
    const output = {};
    const importer = this.importers.get(xid);

    if (!importer) {
      return;
    }

    const versionTypeValue = this.typeValues.get(xid) || '';
    const [typeValue, versionValue] = versionTypeValue.split('__v__');
    const path = parentContext.path || '';
    let implied;

    if (parentContext.pathSelector) {
      implied = this.contexts.get(`${path}[${parentContext.pathSelector}]`);
    }

    if (!implied) {
      implied = this.contexts.get(path);
    }

    if (implied) {
      if (!implied.impliedType) {
        const impliedTypeValue = implied.typeValues.get(xid) || '';

        if (impliedTypeValue) {
          output[implied.typeField] = impliedTypeValue;
        }
      }
    } else if (this.typeField && typeValue && typeValue !== this.defaultType) {
      output[this.typeField] = typeValue;
    }

    if (this.versionField && versionValue && versionValue !== this.defaultVersion) {
      output[this.versionField] = versionValue;
    }

    const context = Object.assign(Object.assign({}, parentContext), {
      data: output,
      importer,
      lang: (xml.getAttribute('xml:lang') || parentContext.lang || '').toLowerCase(),
      pathSelector: typeValue,
      translator: this
    });
    const importFields = [...importer.fieldOrders.entries()].sort((a, b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0);
    const preChildren = importFields.filter(field => field[1] >= 0);
    const postChildren = importFields.filter(field => field[1] < 0);

    for (const [fieldName] of preChildren) {
      const importField = importer.fields.get(fieldName);
      context.path = `${parentContext.path}.${fieldName}`;
      const value = importField(xml, context);

      if (value !== null && value !== undefined) {
        output[fieldName] = value;
      }
    }

    for (const child of xml.children) {
      if (typeof child === 'string') {
        continue;
      }

      const childName = `{${child.getNamespace()}}${child.getName()}`;
      const fieldName = this.childrenIndex.get(childName);

      if (!fieldName) {
        continue;
      }

      context.path = `${parentContext.path}.${fieldName}`;
      const {
        translator,
        multiple,
        selector
      } = this.children.get(fieldName);

      if (!selector || selector === typeValue) {
        const childOutput = translator.import(child, context);

        if (childOutput !== undefined) {
          if (multiple) {
            if (!output[fieldName]) {
              output[fieldName] = [];
            }

            output[fieldName].push(childOutput);
          } else if (!output[fieldName]) {
            output[fieldName] = childOutput;
          } else {
            output[fieldName] = translator.resolveCollision(output[fieldName], childOutput);
          }
        }
      }
    }

    for (const [fieldName] of postChildren) {
      const importField = importer.fields.get(fieldName);
      context.path = `${parentContext.path}.${fieldName}`;
      const value = importField(xml, context);

      if (value !== null && value !== undefined) {
        output[fieldName] = value;
      }
    }

    return output;
  }

  export(data, parentContext) {
    if (!data) {
      return;
    }

    let exportType = this.defaultType;
    let exportVersion = this.defaultVersion;
    const path = parentContext.path || '';
    let implied;

    if (parentContext.pathSelector) {
      implied = this.contexts.get(`${path}[${parentContext.pathSelector}]`);
    }

    if (!implied) {
      implied = this.contexts.get(path);
    }

    if (implied) {
      exportType = implied.impliedType || data[implied.typeField] || this.defaultType;
    } else if (this.typeField) {
      exportType = data[this.typeField] || this.defaultType;
    }

    if (this.versionField) {
      exportVersion = data[this.versionField] || this.defaultVersion;
    }

    const exportVersionType = exportVersion ? `${exportType}__v__${exportVersion}` : exportType;
    const exporter = this.exporters.get(exportVersionType);

    if (!exporter) {
      return;
    }

    const output = createElement(exporter.namespace, exporter.element, parentContext.namespace, parentContext.element);

    if (parentContext.element) {
      output.parent = parentContext.element;
    }

    for (const [prefix, namespace] of exporter.optionalNamespaces) {
      output.addOptionalNamespace(prefix, namespace);
    }

    const context = Object.assign(Object.assign({}, parentContext), {
      data,
      element: output,
      exporter,
      lang: (data[this.languageField] || parentContext.lang || '').toLowerCase(),
      namespace: output.getDefaultNamespace(),
      pathSelector: exportType,
      translator: this
    });
    const langExporter = exporter.fields.get(this.languageField);

    if (langExporter) {
      langExporter(output, data[this.languageField], parentContext);
    }

    const keys = Object.keys(data);
    keys.sort((key1, key2) => {
      const a = exporter.fieldOrders.get(key1) || 100000;
      const b = exporter.fieldOrders.get(key2) || 100000;
      return a - b;
    });

    for (const key of keys) {
      if (key === this.languageField) {
        // We've already processed this field
        continue;
      }

      const value = data[key];
      const fieldExporter = exporter.fields.get(key);

      if (fieldExporter) {
        fieldExporter(output, value, context);
        continue;
      }

      const childTranslator = this.children.get(key);

      if (!childTranslator) {
        continue;
      }

      context.path = `${parentContext.path ? parentContext.path + '.' : ''}${key}`;
      const {
        translator,
        multiple,
        selector
      } = childTranslator;

      if (!selector || selector === exportType) {
        let items;

        if (multiple) {
          items = value;
        } else {
          items = [value];
        }

        for (const item of items) {
          const childOutput = translator.export(item, context);

          if (childOutput) {
            output.appendChild(childOutput);
          }
        }
      }
    }

    return output;
  }

  resolveCollision(existingData, newData) {
    const existingOrder = this.typeOrders.get(existingData[this.typeField] || this.defaultType) || 0;
    const newOrder = this.typeOrders.get(newData[this.typeField] || this.defaultType) || 0;
    return existingOrder <= newOrder ? existingData : newData;
  }

}

class Registry {
  constructor() {
    this.translators = new Map();
    this.root = new Translator();
    this.setLanguageResolver(basicLanguageResolver);
  }

  setLanguageResolver(resolver) {
    this.languageResolver = resolver;
  }

  import(xml, context = {
    registry: this
  }) {
    if (!this.hasTranslator(xml.getNamespace(), xml.getName())) {
      return;
    }

    if (!context.acceptLanguages) {
      context.acceptLanguages = [];
    }

    context.acceptLanguages = context.acceptLanguages.map(lang => lang.toLowerCase());

    if (context.lang) {
      context.lang = context.lang.toLowerCase();
    }

    if (!context.resolveLanguage) {
      context.resolveLanguage = this.languageResolver;
    }

    context.path = this.getImportKey(xml);

    if (!context.sanitizers) {
      context.sanitizers = {
        xhtmlim: sanitizeRoot
      };
    }

    const translator = this.getOrCreateTranslator(xml.getNamespace(), xml.getName());
    return translator.import(xml, Object.assign(Object.assign({}, context), {
      registry: this
    }));
  }

  export(path, data, context = {
    registry: this
  }) {
    if (!context.acceptLanguages) {
      context.acceptLanguages = [];
    }

    context.acceptLanguages = context.acceptLanguages.map(lang => lang.toLowerCase());

    if (context.lang) {
      context.lang = context.lang.toLowerCase();
    }

    if (!context.sanitizers) {
      context.sanitizers = {
        xhtmlim: sanitizeRoot
      };
    }

    context.path = path;
    const fields = path.split('.').filter(item => {
      return item !== '';
    });
    let translator = this.root;

    for (const field of fields) {
      const nextTranslator = translator.getChild(field);

      if (!nextTranslator) {
        return;
      }

      translator = nextTranslator;
    }

    return translator.export(data, Object.assign(Object.assign({}, context), {
      registry: this
    }));
  }

  getImportKey(xml, path = '') {
    const root = !path ? this.root : this.walkToTranslator(path.split('.'));

    if (!root) {
      return undefined;
    }

    return root.getImportKey(xml);
  }

  define(defs) {
    if (Array.isArray(defs)) {
      for (const def of defs) {
        if (typeof def === 'object') {
          this.define(def);
        } else {
          def(this);
        }
      }

      return;
    } else if (typeof defs !== 'object') {
      defs(this);
      return;
    }

    const definition = defs;
    definition.aliases = definition.aliases || [];

    if (definition.path && !definition.aliases.includes(definition.path)) {
      definition.aliases.push(definition.path);
    }

    const aliases = definition.aliases.map(alias => typeof alias === 'string' ? {
      path: alias
    } : alias).sort((a, b) => {
      const aLen = a.path.split('.').length;
      const bLen = b.path.split('.').length;
      return bLen - aLen;
    });
    let translator;

    if (this.hasTranslator(definition.namespace, definition.element)) {
      // Get existing translator
      translator = this.getOrCreateTranslator(definition.namespace, definition.element);
    }

    if (!translator) {
      let placeholder;

      for (const alias of aliases) {
        const t = this.walkToTranslator(alias.path.split('.'));

        if (t && !t.placeholder) {
          translator = t;
          break;
        } else if (t) {
          placeholder = t;
        }
      }

      if (placeholder && !translator) {
        translator = placeholder;
        translator.placeholder = false;
      }
    }

    if (!translator) {
      // Create a new translator
      translator = this.getOrCreateTranslator(definition.namespace, definition.element);
    }

    this.indexTranslator(definition.namespace, definition.element, translator);
    const fields = definition.fields || {};
    const importers = new Map();
    const exporters = new Map();
    const importerOrdering = new Map();
    const exporterOrdering = new Map();

    if (definition.typeField) {
      translator.typeField = definition.typeField;
    }

    if (definition.defaultType) {
      translator.defaultType = definition.defaultType;
    }

    if (definition.versionField) {
      translator.versionField = definition.versionField;
    }

    if (definition.defaultVersion) {
      translator.defaultVersion = definition.defaultVersion;
    }

    if (definition.languageField) {
      translator.languageField = definition.languageField;
    }

    for (const [key, field] of Object.entries(fields)) {
      importers.set(key, field.importer);
      importerOrdering.set(key, field.importOrder || field.order || 0);
      exporters.set(key, field.exporter);
      exporterOrdering.set(key, field.exportOrder || field.order || 0);
    }

    if (definition.childrenExportOrder) {
      for (const [key, order] of Object.entries(definition.childrenExportOrder)) {
        exporterOrdering.set(key, order || 0);
      }
    }

    const optionalNamespaces = new Map();

    for (const [prefix, namespace] of Object.entries(definition.optionalNamespaces || {})) {
      optionalNamespaces.set(prefix, namespace);
    }

    translator.updateDefinition({
      contexts: new Map(),
      element: definition.element,
      exporterOrdering,
      exporters,
      importerOrdering,
      importers,
      namespace: definition.namespace,
      optionalNamespaces,
      type: definition.type,
      version: definition.version,
      typeOrder: definition.typeOrder
    });

    for (const link of aliases) {
      this.alias(definition.namespace, definition.element, link.path, link.multiple, link.selector, link.contextField, definition.type, link.impliedType);
    }

    for (const alias of aliases) {
      const existing = this.walkToTranslator(alias.path.split('.'));

      if (existing && existing !== translator) {
        existing.replaceWith(translator);
      }
    }
  }

  alias(namespace, element, path, multiple = false, selector, contextField, contextType, contextImpliedType = false) {
    const linkedTranslator = this.getOrCreateTranslator(namespace, element);
    linkedTranslator.placeholder = false;
    const keys = path.split('.').filter(key => {
      return key !== '';
    });
    const finalKey = keys.pop();
    const translator = this.walkToTranslator(keys, true);
    const xid = `{${namespace}}${element}`;

    if (contextType && (contextField || contextImpliedType)) {
      linkedTranslator.addContext(path, selector, contextField, xid, contextType, contextImpliedType);
    }

    translator.addChild(finalKey, linkedTranslator, multiple, selector, xid);
  }

  walkToTranslator(path, vivify = false) {
    let translator = this.root;

    for (const key of path) {
      let next = translator.getChild(key);

      if (!next) {
        if (vivify) {
          next = new Translator();
          next.placeholder = true;
          translator.addChild(key, next);
        } else {
          return;
        }
      }

      translator = next;
    }

    return translator;
  }

  hasTranslator(namespace, element) {
    return this.translators.has(`{${namespace}}${element}`);
  }

  getOrCreateTranslator(namespace, element) {
    let translator = this.translators.get(`{${namespace}}${element}`);

    if (!translator) {
      translator = new Translator();
      this.indexTranslator(namespace, element, translator);
    }

    return translator;
  }

  indexTranslator(namespace, element, translator) {
    this.translators.set(`{${namespace}}${element}`, translator);
  }

} // ================================================================
// RFCS
// ================================================================
// RFC 4287


const NS_ATOM = 'http://www.w3.org/2005/Atom'; // RFC 6120

const NS_BIND = 'urn:ietf:params:xml:ns:xmpp-bind';
const NS_CLIENT = 'jabber:client';
const NS_SASL = 'urn:ietf:params:xml:ns:xmpp-sasl';
const NS_SERVER = 'jabber:server';
const NS_SESSION = 'urn:ietf:params:xml:ns:xmpp-session';
const NS_STANZAS = 'urn:ietf:params:xml:ns:xmpp-stanzas';
const NS_STREAM = 'http://etherx.jabber.org/streams';
const NS_STREAMS = 'urn:ietf:params:xml:ns:xmpp-streams';
const NS_STARTTLS = 'urn:ietf:params:xml:ns:xmpp-tls'; // RFC 6121

const NS_ROSTER = 'jabber:iq:roster';
const NS_ROSTER_VERSIONING = 'urn:xmpp:features:rosterver';
const NS_SUBSCRIPTION_PREAPPROVAL = 'urn:xmpp:features:pre-approval'; // RFC 7395

const NS_FRAMING = 'urn:ietf:params:xml:ns:xmpp-framing'; // ================================================================
// XEPS
// ================================================================
// XEP-0004

const NS_DATAFORM = 'jabber:x:data'; // XEP-0009

const NS_RPC = 'jabber:iq:rpc'; // XEP-0012

const NS_LAST_ACTIVITY = 'jabber:iq:last'; // XEP-0016

const NS_PRIVACY = 'jabber:iq:privacy'; // XEP-0022

const NS_LEGACY_CHAT_EVENTS = 'jabber:x:event'; // XEP-0030

const NS_DISCO_INFO = 'http://jabber.org/protocol/disco#info';
const NS_DISCO_ITEMS = 'http://jabber.org/protocol/disco#items'; // XEP-0033

const NS_ADDRESS = 'http://jabber.org/protocol/address'; // XEP-0045

const NS_MUC = 'http://jabber.org/protocol/muc';
const NS_MUC_ADMIN = 'http://jabber.org/protocol/muc#admin';
const NS_MUC_OWNER = 'http://jabber.org/protocol/muc#owner';
const NS_MUC_USER = 'http://jabber.org/protocol/muc#user'; // XEP-0047

const NS_IBB = 'http://jabber.org/protocol/ibb'; // XEP-0048

const NS_BOOKMARKS = 'storage:bookmarks'; // XEP-0049

const NS_PRIVATE = 'jabber:iq:private'; // XEP-0050

const NS_ADHOC_COMMANDS = 'http://jabber.org/protocol/commands'; // XEP-0054

const NS_VCARD_TEMP = 'vcard-temp'; // XEP-0055

const NS_SEARCH = 'jabber:iq:search'; // XEP-0059

const NS_RSM = 'http://jabber.org/protocol/rsm'; // XEP-0060

const NS_PUBSUB = 'http://jabber.org/protocol/pubsub';
const NS_PUBSUB_ERRORS = 'http://jabber.org/protocol/pubsub#errors';
const NS_PUBSUB_EVENT = 'http://jabber.org/protocol/pubsub#event';
const NS_PUBSUB_OWNER = 'http://jabber.org/protocol/pubsub#owner'; // XEP-0065

const NS_SOCKS5 = 'http://jabber.org/protocol/bytestreams'; // XEP-0066

const NS_OOB = 'jabber:x:oob';
const NS_OOB_TRANSFER = 'jabber:iq:oob'; // XEP-0070

const NS_HTTP_AUTH = 'http://jabber.org/protocol/http-auth'; // XEP-0071

const NS_XHTML = 'http://www.w3.org/1999/xhtml';
const NS_XHTML_IM = 'http://jabber.org/protocol/xhtml-im'; // XEP-0077

const NS_REGISTER = 'jabber:iq:register';
const NS_INBAND_REGISTRATION = 'http://jabber.org/features/iq-register'; // XEP-0079

const NS_AMP = 'http://jabber.org/protocol/amp'; // XEP-0080

const NS_GEOLOC = 'http://jabber.org/protocol/geoloc'; // XEP-0083

const NS_ROSTER_DELIMITER = 'roster:delimiter'; // XEP-0084

const NS_AVATAR_DATA = 'urn:xmpp:avatar:data';
const NS_AVATAR_METADATA = 'urn:xmpp:avatar:metadata'; // XEP-0085

const NS_CHAT_STATES = 'http://jabber.org/protocol/chatstates'; // XEP-0092

const NS_VERSION = 'jabber:iq:version'; // XEP-0107

const NS_MOOD = 'http://jabber.org/protocol/mood'; // XEP-0108

const NS_ACTIVITY = 'http://jabber.org/protocol/activity'; // XEP-0114

const NS_COMPONENT = 'jabber:component:accept'; // XEP-0115

const NS_DISCO_LEGACY_CAPS = 'http://jabber.org/protocol/caps'; // XEP-0118

const NS_TUNE = 'http://jabber.org/protocol/tune'; // XEP-0122

const NS_DATAFORM_VALIDATION = 'http://jabber.org/protocol/xdata-validate'; // XEP-0124

const NS_BOSH = 'http://jabber.org/protocol/httpbind'; // XEP-0131

const NS_SHIM = 'http://jabber.org/protocol/shim'; // XEP-0138

const NS_COMPRESSION_FEATURE = 'http://jabber.org/features/compress';
const NS_COMPRESSION = 'http://jabber.org/protocol/compress'; // XEP-0141

const NS_DATAFORM_LAYOUT = 'http://jabber.org/protocol/xdata-layout'; // XEP-0144

const NS_ROSTER_EXCHANGE = 'http://jabber.org/protocol/rosterx'; // XEP-0145

const NS_ROSTER_NOTES = 'storage:rosternotes'; // XEP-0152

const NS_REACH_0 = 'urn:xmpp:reach:0'; // XEP-0153

const NS_VCARD_TEMP_UPDATE = 'vcard-temp:x:update'; // XEP-0156

const NS_ALT_CONNECTIONS_WEBSOCKET = 'urn:xmpp:alt-connections:websocket';
const NS_ALT_CONNECTIONS_XBOSH = 'urn:xmpp:alt-connections:xbosh'; // XEP-0158

const NS_CAPTCHA = 'urn:xmpp:captcha'; // XEP-0163

const NS_PEP_NOTIFY = ns => `${ns}+notify`; // XEP-0166


const NS_JINGLE_1 = 'urn:xmpp:jingle:1';
const NS_JINGLE_ERRORS_1 = 'urn:xmpp:jingle:errors:1'; // XEP-0167

const NS_JINGLE_RTP_1 = 'urn:xmpp:jingle:apps:rtp:1';
const NS_JINGLE_RTP_ERRORS_1 = 'urn:xmpp:jingle:apps:rtp:errors:1';
const NS_JINGLE_RTP_INFO_1 = 'urn:xmpp:jingle:apps:rtp:info:1';
const NS_JINGLE_RTP_AUDIO = 'urn:xmpp:jingle:apps:rtp:audio';
const NS_JINGLE_RTP_VIDEO = 'urn:xmpp:jingle:apps:rtp:video'; // XEP-0171

const NS_LANG_TRANS = 'urn:xmpp:langtrans';
const NS_LANG_TRANS_ITEMS = 'urn:xmpp:langtrans:items'; // XEP-0172

const NS_NICK = 'http://jabber.org/protocol/nick'; // XEP-0176

const NS_JINGLE_ICE_UDP_1 = 'urn:xmpp:jingle:transports:ice-udp:1'; // XEP-0177

const NS_JINGLE_RAW_UDP_1 = 'urn:xmpp:jingle:transports:raw-udp:1'; // XEP-0184

const NS_RECEIPTS = 'urn:xmpp:receipts'; // XEP-0186

const NS_INVISIBLE_0 = 'urn:xmpp:invisible:0'; // XEP-0191

const NS_BLOCKING = 'urn:xmpp:blocking';
const NS_BLOCKING_ERRORS = 'urn:xmpp:blocking:errors'; // XEP-0198

const NS_SMACKS_3 = 'urn:xmpp:sm:3'; // XEP-0199

const NS_PING = 'urn:xmpp:ping'; // XEP-0202

const NS_TIME = 'urn:xmpp:time'; // XEP-0203

const NS_DELAY = 'urn:xmpp:delay'; // XEP-0206

const NS_BOSH_XMPP = 'urn:xmpp:xbosh'; // XEP-0215

const NS_DISCO_EXTERNAL_1 = 'urn:xmpp:extdisco:1';
const NS_DISCO_EXTERNAL_2 = 'urn:xmpp:extdisco:2'; // XEP-0221

const NS_DATAFORM_MEDIA = 'urn:xmpp:media-element'; // XEP-0224

const NS_ATTENTION_0 = 'urn:xmpp:attention:0'; // XEP-0231

const NS_BOB = 'urn:xmpp:bob'; // XEP-0232

const NS_SOFTWARE_INFO = 'urn:xmpp:dataforms:softwareinfo'; // XEP-0234

const NS_JINGLE_FILE_TRANSFER_3 = 'urn:xmpp:jingle:apps:file-transfer:3';
const NS_JINGLE_FILE_TRANSFER_4 = 'urn:xmpp:jingle:apps:file-transfer:4';
const NS_JINGLE_FILE_TRANSFER_5 = 'urn:xmpp:jingle:apps:file-transfer:5'; // XEP-0247

const NS_JINGLE_XML_0 = 'urn:xmpp:jingle:apps:xmlstream:0'; // XEP-0249

const NS_MUC_DIRECT_INVITE = 'jabber:x:conference'; // XEP-0258

const NS_SEC_LABEL_0 = 'urn:xmpp:sec-label:0';
const NS_SEC_LABEL_CATALOG_2 = 'urn:xmpp:sec-label:catalog:2';
const NS_SEC_LABEL_ESS_0 = 'urn:xmpp:sec-label:ess:0'; // XEP-0260

const NS_JINGLE_SOCKS5_1 = 'urn:xmpp:jingle:transports:s5b:1'; // XEP-0261

const NS_JINGLE_IBB_1 = 'urn:xmpp:jingle:transports:ibb:1'; // XEP-0262

const NS_JINGLE_RTP_ZRTP_1 = 'urn:xmpp:jingle:apps:rtp:zrtp:1'; // XEP-0264

const NS_THUMBS_0 = 'urn:xmpp:thumbs:0';
const NS_THUMBS_1 = 'urn:xmpp:thumbs:1'; // XEP-0276

const NS_DECLOAKING_0 = 'urn:xmpp:decloaking:0'; // XEP-0280

const NS_CARBONS_2 = 'urn:xmpp:carbons:2'; // XEP-0293

const NS_JINGLE_RTP_RTCP_FB_0 = 'urn:xmpp:jingle:apps:rtp:rtcp-fb:0'; // XEP-0294

const NS_JINGLE_RTP_HDREXT_0 = 'urn:xmpp:jingle:apps:rtp:rtp-hdrext:0'; // XEP-0297

const NS_FORWARD_0 = 'urn:xmpp:forward:0'; // XEP-0300

const NS_HASHES_1 = 'urn:xmpp:hashes:1';
const NS_HASHES_2 = 'urn:xmpp:hashes:2';

const NS_HASH_NAME = name => `urn:xmpp:hash-function-text-names:${name}`; // XEP-0301


const NS_RTT_0 = 'urn:xmpp:rtt:0'; // XEP-0307

const NS_MUC_UNIQUE = 'http://jabber.org/protocol/muc#unique'; // XEP-308

const NS_CORRECTION_0 = 'urn:xmpp:message-correct:0'; // XEP-0310

const NS_PSA = 'urn:xmpp:psa'; // XEP-0313

const NS_MAM_TMP = 'urn:xmpp:mam:tmp';
const NS_MAM_0 = 'urn:xmpp:mam:0';
const NS_MAM_1 = 'urn:xmpp:mam:1';
const NS_MAM_2 = 'urn:xmpp:mam:2'; // XEP-0317

const NS_HATS_0 = 'urn:xmpp:hats:0'; // XEP-0319

const NS_IDLE_1 = 'urn:xmpp:idle:1'; // XEP-0320

const NS_JINGLE_DTLS_0 = 'urn:xmpp:jingle:apps:dtls:0'; // XEP-0333

const NS_CHAT_MARKERS_0 = 'urn:xmpp:chat-markers:0'; // XEP-0334

const NS_HINTS = 'urn:xmpp:hints'; // XEP-0335

const NS_JSON_0 = 'urn:xmpp:json:0'; // XEP-0338

const NS_JINGLE_GROUPING_0 = 'urn:xmpp:jingle:apps:grouping:0'; // XEP-0339

const NS_JINGLE_RTP_SSMA_0 = 'urn:xmpp:jingle:apps:rtp:ssma:0'; // XEP-0343

const NS_JINGLE_DTLS_SCTP_1 = 'urn:xmpp:jingle:transports:dtls-sctp:1'; // XEP-0352

const NS_CSI_0 = 'urn:xmpp:csi:0'; // XEP-0353

const NS_JINGLE_MSG_INITIATE_0 = 'urn:xmpp:jingle:jingle-message:0'; // XEP-0355

const NS_DELEGATION_1 = 'urn:xmpp:delegation:1'; // XEP-0357

const NS_PUSH_0 = 'urn:xmpp:push:0'; // XEP-0358

const NS_JINGLE_PUB_1 = 'urn:xmpp:jinglepub:1'; // XEP-0359

const NS_SID_0 = 'urn:xmpp:sid:0'; // XEP-0363

const NS_HTTP_UPLOAD_0 = 'urn:xmpp:http:upload:0'; // XEP-0370

const NS_JINGLE_HTTP_0 = 'urn:xmpp:jingle:transports:http:0';
const NS_JINGLE_HTTP_UPLOAD_0 = 'urn:xmpp:jingle:transports:http:upload:0'; // XEP-0371

const NS_JINGLE_ICE_0 = 'urn:xmpp:jingle:transports:ice:0'; // XEP-0372

const NS_REFERENCE_0 = 'urn:xmpp:reference:0'; // XEP-0380

const NS_EME_0 = 'urn:xmpp:eme:0'; // XEP-0382

const NS_SPOILER_0 = 'urn:xmpp:spoiler:0'; // XEP-0384

const NS_OMEMO_AXOLOTL = 'eu.siacs.conversations.axolotl';
const NS_OMEMO_AXOLOTL_DEVICELIST = 'eu.siacs.conversations.axolotl.devicelist';
const NS_OMEMO_AXOLOTL_BUNDLES = 'eu.siacs.conversations.axolotl.bundles'; // istanbul ignore next

const NS_OMEMO_AXOLOTL_BUNDLE = deviceId => `${NS_OMEMO_AXOLOTL_BUNDLES}:${deviceId}`; // XEP-0432


const NS_JSON_MESSAGE_0 = 'urn:xmpp:json-msg:0'; // ================================================================
// Other Standards
// ================================================================
// Extensible Resource Descriptor (XRD) Version 1.0
// http://docs.oasis-open.org/xri/xrd/v1.0/xrd-1.0.html

const NS_XRD = 'http://docs.oasis-open.org/ns/xri/xrd-1.0'; // ====================================================================
// Not yet standardized
// ====================================================================

const NS_JINGLE_RTP_MSID_0 = 'urn:xmpp:jingle:apps:rtp:msid:0';
var Namespaces = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NS_ATOM: NS_ATOM,
  NS_BIND: NS_BIND,
  NS_CLIENT: NS_CLIENT,
  NS_SASL: NS_SASL,
  NS_SERVER: NS_SERVER,
  NS_SESSION: NS_SESSION,
  NS_STANZAS: NS_STANZAS,
  NS_STREAM: NS_STREAM,
  NS_STREAMS: NS_STREAMS,
  NS_STARTTLS: NS_STARTTLS,
  NS_ROSTER: NS_ROSTER,
  NS_ROSTER_VERSIONING: NS_ROSTER_VERSIONING,
  NS_SUBSCRIPTION_PREAPPROVAL: NS_SUBSCRIPTION_PREAPPROVAL,
  NS_FRAMING: NS_FRAMING,
  NS_DATAFORM: NS_DATAFORM,
  NS_RPC: NS_RPC,
  NS_LAST_ACTIVITY: NS_LAST_ACTIVITY,
  NS_PRIVACY: NS_PRIVACY,
  NS_LEGACY_CHAT_EVENTS: NS_LEGACY_CHAT_EVENTS,
  NS_DISCO_INFO: NS_DISCO_INFO,
  NS_DISCO_ITEMS: NS_DISCO_ITEMS,
  NS_ADDRESS: NS_ADDRESS,
  NS_MUC: NS_MUC,
  NS_MUC_ADMIN: NS_MUC_ADMIN,
  NS_MUC_OWNER: NS_MUC_OWNER,
  NS_MUC_USER: NS_MUC_USER,
  NS_IBB: NS_IBB,
  NS_BOOKMARKS: NS_BOOKMARKS,
  NS_PRIVATE: NS_PRIVATE,
  NS_ADHOC_COMMANDS: NS_ADHOC_COMMANDS,
  NS_VCARD_TEMP: NS_VCARD_TEMP,
  NS_SEARCH: NS_SEARCH,
  NS_RSM: NS_RSM,
  NS_PUBSUB: NS_PUBSUB,
  NS_PUBSUB_ERRORS: NS_PUBSUB_ERRORS,
  NS_PUBSUB_EVENT: NS_PUBSUB_EVENT,
  NS_PUBSUB_OWNER: NS_PUBSUB_OWNER,
  NS_SOCKS5: NS_SOCKS5,
  NS_OOB: NS_OOB,
  NS_OOB_TRANSFER: NS_OOB_TRANSFER,
  NS_HTTP_AUTH: NS_HTTP_AUTH,
  NS_XHTML: NS_XHTML,
  NS_XHTML_IM: NS_XHTML_IM,
  NS_REGISTER: NS_REGISTER,
  NS_INBAND_REGISTRATION: NS_INBAND_REGISTRATION,
  NS_AMP: NS_AMP,
  NS_GEOLOC: NS_GEOLOC,
  NS_ROSTER_DELIMITER: NS_ROSTER_DELIMITER,
  NS_AVATAR_DATA: NS_AVATAR_DATA,
  NS_AVATAR_METADATA: NS_AVATAR_METADATA,
  NS_CHAT_STATES: NS_CHAT_STATES,
  NS_VERSION: NS_VERSION,
  NS_MOOD: NS_MOOD,
  NS_ACTIVITY: NS_ACTIVITY,
  NS_COMPONENT: NS_COMPONENT,
  NS_DISCO_LEGACY_CAPS: NS_DISCO_LEGACY_CAPS,
  NS_TUNE: NS_TUNE,
  NS_DATAFORM_VALIDATION: NS_DATAFORM_VALIDATION,
  NS_BOSH: NS_BOSH,
  NS_SHIM: NS_SHIM,
  NS_COMPRESSION_FEATURE: NS_COMPRESSION_FEATURE,
  NS_COMPRESSION: NS_COMPRESSION,
  NS_DATAFORM_LAYOUT: NS_DATAFORM_LAYOUT,
  NS_ROSTER_EXCHANGE: NS_ROSTER_EXCHANGE,
  NS_ROSTER_NOTES: NS_ROSTER_NOTES,
  NS_REACH_0: NS_REACH_0,
  NS_VCARD_TEMP_UPDATE: NS_VCARD_TEMP_UPDATE,
  NS_ALT_CONNECTIONS_WEBSOCKET: NS_ALT_CONNECTIONS_WEBSOCKET,
  NS_ALT_CONNECTIONS_XBOSH: NS_ALT_CONNECTIONS_XBOSH,
  NS_CAPTCHA: NS_CAPTCHA,
  NS_PEP_NOTIFY: NS_PEP_NOTIFY,
  NS_JINGLE_1: NS_JINGLE_1,
  NS_JINGLE_ERRORS_1: NS_JINGLE_ERRORS_1,
  NS_JINGLE_RTP_1: NS_JINGLE_RTP_1,
  NS_JINGLE_RTP_ERRORS_1: NS_JINGLE_RTP_ERRORS_1,
  NS_JINGLE_RTP_INFO_1: NS_JINGLE_RTP_INFO_1,
  NS_JINGLE_RTP_AUDIO: NS_JINGLE_RTP_AUDIO,
  NS_JINGLE_RTP_VIDEO: NS_JINGLE_RTP_VIDEO,
  NS_LANG_TRANS: NS_LANG_TRANS,
  NS_LANG_TRANS_ITEMS: NS_LANG_TRANS_ITEMS,
  NS_NICK: NS_NICK,
  NS_JINGLE_ICE_UDP_1: NS_JINGLE_ICE_UDP_1,
  NS_JINGLE_RAW_UDP_1: NS_JINGLE_RAW_UDP_1,
  NS_RECEIPTS: NS_RECEIPTS,
  NS_INVISIBLE_0: NS_INVISIBLE_0,
  NS_BLOCKING: NS_BLOCKING,
  NS_BLOCKING_ERRORS: NS_BLOCKING_ERRORS,
  NS_SMACKS_3: NS_SMACKS_3,
  NS_PING: NS_PING,
  NS_TIME: NS_TIME,
  NS_DELAY: NS_DELAY,
  NS_BOSH_XMPP: NS_BOSH_XMPP,
  NS_DISCO_EXTERNAL_1: NS_DISCO_EXTERNAL_1,
  NS_DISCO_EXTERNAL_2: NS_DISCO_EXTERNAL_2,
  NS_DATAFORM_MEDIA: NS_DATAFORM_MEDIA,
  NS_ATTENTION_0: NS_ATTENTION_0,
  NS_BOB: NS_BOB,
  NS_SOFTWARE_INFO: NS_SOFTWARE_INFO,
  NS_JINGLE_FILE_TRANSFER_3: NS_JINGLE_FILE_TRANSFER_3,
  NS_JINGLE_FILE_TRANSFER_4: NS_JINGLE_FILE_TRANSFER_4,
  NS_JINGLE_FILE_TRANSFER_5: NS_JINGLE_FILE_TRANSFER_5,
  NS_JINGLE_XML_0: NS_JINGLE_XML_0,
  NS_MUC_DIRECT_INVITE: NS_MUC_DIRECT_INVITE,
  NS_SEC_LABEL_0: NS_SEC_LABEL_0,
  NS_SEC_LABEL_CATALOG_2: NS_SEC_LABEL_CATALOG_2,
  NS_SEC_LABEL_ESS_0: NS_SEC_LABEL_ESS_0,
  NS_JINGLE_SOCKS5_1: NS_JINGLE_SOCKS5_1,
  NS_JINGLE_IBB_1: NS_JINGLE_IBB_1,
  NS_JINGLE_RTP_ZRTP_1: NS_JINGLE_RTP_ZRTP_1,
  NS_THUMBS_0: NS_THUMBS_0,
  NS_THUMBS_1: NS_THUMBS_1,
  NS_DECLOAKING_0: NS_DECLOAKING_0,
  NS_CARBONS_2: NS_CARBONS_2,
  NS_JINGLE_RTP_RTCP_FB_0: NS_JINGLE_RTP_RTCP_FB_0,
  NS_JINGLE_RTP_HDREXT_0: NS_JINGLE_RTP_HDREXT_0,
  NS_FORWARD_0: NS_FORWARD_0,
  NS_HASHES_1: NS_HASHES_1,
  NS_HASHES_2: NS_HASHES_2,
  NS_HASH_NAME: NS_HASH_NAME,
  NS_RTT_0: NS_RTT_0,
  NS_MUC_UNIQUE: NS_MUC_UNIQUE,
  NS_CORRECTION_0: NS_CORRECTION_0,
  NS_PSA: NS_PSA,
  NS_MAM_TMP: NS_MAM_TMP,
  NS_MAM_0: NS_MAM_0,
  NS_MAM_1: NS_MAM_1,
  NS_MAM_2: NS_MAM_2,
  NS_HATS_0: NS_HATS_0,
  NS_IDLE_1: NS_IDLE_1,
  NS_JINGLE_DTLS_0: NS_JINGLE_DTLS_0,
  NS_CHAT_MARKERS_0: NS_CHAT_MARKERS_0,
  NS_HINTS: NS_HINTS,
  NS_JSON_0: NS_JSON_0,
  NS_JINGLE_GROUPING_0: NS_JINGLE_GROUPING_0,
  NS_JINGLE_RTP_SSMA_0: NS_JINGLE_RTP_SSMA_0,
  NS_JINGLE_DTLS_SCTP_1: NS_JINGLE_DTLS_SCTP_1,
  NS_CSI_0: NS_CSI_0,
  NS_JINGLE_MSG_INITIATE_0: NS_JINGLE_MSG_INITIATE_0,
  NS_DELEGATION_1: NS_DELEGATION_1,
  NS_PUSH_0: NS_PUSH_0,
  NS_JINGLE_PUB_1: NS_JINGLE_PUB_1,
  NS_SID_0: NS_SID_0,
  NS_HTTP_UPLOAD_0: NS_HTTP_UPLOAD_0,
  NS_JINGLE_HTTP_0: NS_JINGLE_HTTP_0,
  NS_JINGLE_HTTP_UPLOAD_0: NS_JINGLE_HTTP_UPLOAD_0,
  NS_JINGLE_ICE_0: NS_JINGLE_ICE_0,
  NS_REFERENCE_0: NS_REFERENCE_0,
  NS_EME_0: NS_EME_0,
  NS_SPOILER_0: NS_SPOILER_0,
  NS_OMEMO_AXOLOTL: NS_OMEMO_AXOLOTL,
  NS_OMEMO_AXOLOTL_DEVICELIST: NS_OMEMO_AXOLOTL_DEVICELIST,
  NS_OMEMO_AXOLOTL_BUNDLES: NS_OMEMO_AXOLOTL_BUNDLES,
  NS_OMEMO_AXOLOTL_BUNDLE: NS_OMEMO_AXOLOTL_BUNDLE,
  NS_JSON_MESSAGE_0: NS_JSON_MESSAGE_0,
  NS_XRD: NS_XRD,
  NS_JINGLE_RTP_MSID_0: NS_JINGLE_RTP_MSID_0
}); // ====================================================================
// Useful XMPP Aliases
// ====================================================================

exports.Namespaces = Namespaces;
const JIDAttribute = attribute;
const childJIDAttribute = childAttribute;
const childJID = childText; // ====================================================================
// XMPP Definition Shortcuts
// ====================================================================

function addAlias(namespace, element, aliases) {
  return {
    aliases: Array.isArray(aliases) ? aliases : [aliases],
    element,
    fields: {},
    namespace
  };
}

function extendMessage(fields) {
  return {
    element: 'message',
    fields,
    namespace: NS_CLIENT
  };
}

function extendPresence(fields) {
  return {
    element: 'presence',
    fields,
    namespace: NS_CLIENT
  };
}

function extendIQ(fields) {
  return {
    element: 'iq',
    fields,
    namespace: NS_CLIENT
  };
}

function extendStreamFeatures(fields) {
  return {
    element: 'features',
    fields,
    namespace: NS_STREAM
  };
}

function extendStanzaError(fields) {
  return {
    element: 'error',
    fields,
    namespace: NS_STANZAS,
    path: 'stanzaError'
  };
}

function pubsubItemContentAliases() {
  return [{
    path: 'pubsubcontent',
    contextField: 'itemType'
  }, {
    path: 'pubsubitem.content',
    contextField: 'itemType'
  }, {
    path: 'pubsubeventitem.content',
    contextField: 'itemType'
  }, {
    path: 'iq.pubsub.publish.items',
    contextField: 'itemType'
  }];
}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from: ltx, Copyright © 2010 Stephan Maka
 */


class StreamParser extends _readableStream.Transform {
  constructor(opts) {
    super({
      objectMode: true
    });
    this.closedStream = false;
    this.wrappedStream = false;
    this.registry = opts.registry;
    this.acceptLanguages = opts.acceptLanguages || [];

    if (opts.wrappedStream) {
      this.wrappedStream = true;
      this.rootImportKey = opts.rootKey;
    }

    this.parser = new Parser({
      allowComments: opts.allowComments
    });
    this.parser.on('error', err => {
      this.destroy(err);
    });
    this.parser.on('startElement', (name, attributes) => {
      if (this.destroyed) {
        return;
      }

      if (this.closedStream) {
        return this.destroy(JXTError.alreadyClosed());
      }

      const el = new XMLElement(name, attributes);
      const key = this.registry.getImportKey(el);

      if (this.wrappedStream && !this.rootElement) {
        if (this.rootImportKey && key !== this.rootImportKey) {
          return this.destroy(JXTError.unknownRoot());
        }

        const root = this.registry.import(el, {
          acceptLanguages: this.acceptLanguages,
          lang: this.lang
        });

        if (root) {
          this.rootElement = el;
          this.push({
            event: 'stream-start',
            kind: key,
            stanza: root,
            xml: el
          });
          return;
        } else {
          return this.destroy(JXTError.notWellFormed());
        }
      }

      if (!this.currentElement) {
        this.currentElement = el;
      } else {
        this.currentElement = this.currentElement.appendChild(el);
      }
    });
    this.parser.on('endElement', name => {
      if (this.destroyed) {
        return;
      }

      if (this.wrappedStream && !this.currentElement) {
        if (!this.rootElement || name !== this.rootElement.name) {
          this.closedStream = true;
          return this.destroy(JXTError.notWellFormed());
        }

        this.closedStream = true;
        this.push({
          event: 'stream-end',
          kind: this.rootImportKey,
          stanza: {},
          xml: this.rootElement
        });
        return this.end();
      }

      if (!this.currentElement || name !== this.currentElement.name) {
        this.closedStream = true;
        return this.destroy(JXTError.notWellFormed());
      }

      if (this.currentElement.parent) {
        this.currentElement = this.currentElement.parent;
      } else {
        if (this.wrappedStream) {
          this.currentElement.parent = this.rootElement;
        }

        const key = this.registry.getImportKey(this.currentElement);
        const stanza = this.registry.import(this.currentElement, {
          acceptLanguages: this.acceptLanguages,
          lang: this.lang
        });

        if (stanza) {
          this.push({
            kind: key,
            stanza,
            xml: this.currentElement
          });
        }

        this.currentElement = undefined;
      }
    });
    this.parser.on('text', text => {
      if (this.currentElement) {
        this.currentElement.children.push(text);
      }
    });
  }

  _transform(chunk, encoding, done) {
    this.parser.write(chunk.toString());
    done();
  }

}

function define(definitions) {
  return registry => {
    registry.define(definitions);
  };
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Registry: Registry,
  Translator: Translator,
  XMLElement: XMLElement,
  define: define,
  Parser: Parser,
  parse: parse$1,
  StreamParser: StreamParser,
  escapeXML: escapeXML,
  unescapeXML: unescapeXML,
  escapeXMLText: escapeXMLText,
  basicLanguageResolver: basicLanguageResolver,
  createElement: createElement,
  getLang: getLang,
  getTargetLang: getTargetLang,
  findAll: findAll,
  findOrCreate: findOrCreate,
  attribute: attribute,
  booleanAttribute: booleanAttribute,
  integerAttribute: integerAttribute,
  floatAttribute: floatAttribute,
  dateAttribute: dateAttribute,
  namespacedAttribute: namespacedAttribute,
  namespacedBooleanAttribute: namespacedBooleanAttribute,
  namespacedIntegerAttribute: namespacedIntegerAttribute,
  namespacedFloatAttribute: namespacedFloatAttribute,
  namespacedDateAttribute: namespacedDateAttribute,
  childAttribute: childAttribute,
  childBooleanAttribute: childBooleanAttribute,
  childIntegerAttribute: childIntegerAttribute,
  childFloatAttribute: childFloatAttribute,
  childDateAttribute: childDateAttribute,
  text: text,
  textJSON: textJSON,
  textBuffer: textBuffer,
  languageAttribute: languageAttribute,
  childLanguageAttribute: childLanguageAttribute,
  childText: childText,
  childTextBuffer: childTextBuffer,
  childDate: childDate,
  childInteger: childInteger,
  childFloat: childFloat,
  childJSON: childJSON,
  childTimezoneOffset: childTimezoneOffset,
  childBoolean: childBoolean,
  deepChildText: deepChildText,
  deepChildInteger: deepChildInteger,
  deepChildBoolean: deepChildBoolean,
  deepMultipleChildText: deepMultipleChildText,
  childEnum: childEnum,
  childDoubleEnum: childDoubleEnum,
  multipleChildText: multipleChildText,
  multipleChildAttribute: multipleChildAttribute,
  multipleChildIntegerAttribute: multipleChildIntegerAttribute,
  childAlternateLanguageText: childAlternateLanguageText,
  multipleChildAlternateLanguageText: multipleChildAlternateLanguageText,
  multipleChildEnum: multipleChildEnum,
  splicePath: splicePath,
  staticValue: staticValue,
  childRawElement: childRawElement,
  childLanguageRawElement: childLanguageRawElement,
  childAlternateLanguageRawElement: childAlternateLanguageRawElement,
  parameterMap: parameterMap,
  JIDAttribute: JIDAttribute,
  childJIDAttribute: childJIDAttribute,
  childJID: childJID,
  addAlias: addAlias,
  extendMessage: extendMessage,
  extendPresence: extendPresence,
  extendIQ: extendIQ,
  extendStreamFeatures: extendStreamFeatures,
  extendStanzaError: extendStanzaError,
  pubsubItemContentAliases: pubsubItemContentAliases
});
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - create-hash, Copyright (c) 2017 crypto-browserify contributors
 */

exports.JXT = index;

class Hash extends _readableStream.Transform {
  constructor(blockSize, finalSize, endian = 'be') {
    super();
    this._block = Buffer.alloc(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._bigEndian = endian === 'be';
    this._len = 0;
  }

  _transform(chunk, encoding, callback) {
    let error = null;

    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }

    callback(error);
  }

  _flush(callback) {
    let error = null;

    try {
      this.push(this.digest());
    } catch (err) {
      error = err;
    }

    callback(error);
  }

  update(data, enc) {
    if (typeof data === 'string') {
      enc = enc || 'utf8';
      data = Buffer.from(data, enc);
    }

    const block = this._block;
    const blockSize = this._blockSize;
    const length = data.length;
    let accum = this._len;

    for (let offset = 0; offset < length;) {
      const assigned = accum % blockSize;
      const remainder = Math.min(length - offset, blockSize - assigned);

      for (let i = 0; i < remainder; i++) {
        block[assigned + i] = data[offset + i];
      }

      accum += remainder;
      offset += remainder;

      if (accum % blockSize === 0) {
        this._update(block);
      }
    }

    this._len += length;
    return this;
  }

  digest(enc) {
    const rem = this._len % this._blockSize;
    this._block[rem] = 0x80; // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
    // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize

    this._block.fill(0, rem + 1);

    if (rem >= this._finalSize) {
      this._update(this._block);

      this._block.fill(0);
    }

    const bits = this._len * 8;

    if (bits <= 0xffffffff) {
      if (this._bigEndian) {
        this._block.writeUInt32BE(0, this._blockSize - 8);

        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        this._block.writeUInt32LE(bits, this._blockSize - 8);

        this._block.writeUInt32LE(0, this._blockSize - 4);
      }
    } else {
      const lowBits = (bits & 0xffffffff) >>> 0;
      const highBits = (bits - lowBits) / 0x100000000;

      if (this._bigEndian) {
        this._block.writeUInt32BE(highBits, this._blockSize - 8);

        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      } else {
        this._block.writeUInt32LE(lowBits, this._blockSize - 8);

        this._block.writeUInt32LE(highBits, this._blockSize - 4);
      }
    }

    this._update(this._block);

    const hash = this._hash();

    return enc ? hash.toString(enc) : hash;
  }

  _update(block) {
    throw new Error('_update must be implemented by subclass');
  }

  _hash() {
    throw new Error('_update must be implemented by subclass');
  }

}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - md5.js, Copyright (c) 2016 Kirill Fomichev
 */


function rotl(x, n) {
  return x << n | x >>> 32 - n;
}

function fnF(a, b, c, d, m, k, s) {
  return rotl(a + (b & c | ~b & d) + m + k | 0, s) + b | 0;
}

function fnG(a, b, c, d, m, k, s) {
  return rotl(a + (b & d | c & ~d) + m + k | 0, s) + b | 0;
}

function fnH(a, b, c, d, m, k, s) {
  return rotl(a + (b ^ c ^ d) + m + k | 0, s) + b | 0;
}

function fnI(a, b, c, d, m, k, s) {
  return rotl(a + (c ^ (b | ~d)) + m + k | 0, s) + b | 0;
}

class MD5 extends Hash {
  constructor() {
    super(64, 56, 'le');
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._m = new Array(16);
  }

  _update(B) {
    const M = this._m;

    for (let i = 0; i < 16; ++i) {
      M[i] = B.readInt32LE(i * 4);
    }

    let a = this._a;
    let b = this._b;
    let c = this._c;
    let d = this._d;
    a = fnF(a, b, c, d, M[0], 0xd76aa478, 7);
    d = fnF(d, a, b, c, M[1], 0xe8c7b756, 12);
    c = fnF(c, d, a, b, M[2], 0x242070db, 17);
    b = fnF(b, c, d, a, M[3], 0xc1bdceee, 22);
    a = fnF(a, b, c, d, M[4], 0xf57c0faf, 7);
    d = fnF(d, a, b, c, M[5], 0x4787c62a, 12);
    c = fnF(c, d, a, b, M[6], 0xa8304613, 17);
    b = fnF(b, c, d, a, M[7], 0xfd469501, 22);
    a = fnF(a, b, c, d, M[8], 0x698098d8, 7);
    d = fnF(d, a, b, c, M[9], 0x8b44f7af, 12);
    c = fnF(c, d, a, b, M[10], 0xffff5bb1, 17);
    b = fnF(b, c, d, a, M[11], 0x895cd7be, 22);
    a = fnF(a, b, c, d, M[12], 0x6b901122, 7);
    d = fnF(d, a, b, c, M[13], 0xfd987193, 12);
    c = fnF(c, d, a, b, M[14], 0xa679438e, 17);
    b = fnF(b, c, d, a, M[15], 0x49b40821, 22);
    a = fnG(a, b, c, d, M[1], 0xf61e2562, 5);
    d = fnG(d, a, b, c, M[6], 0xc040b340, 9);
    c = fnG(c, d, a, b, M[11], 0x265e5a51, 14);
    b = fnG(b, c, d, a, M[0], 0xe9b6c7aa, 20);
    a = fnG(a, b, c, d, M[5], 0xd62f105d, 5);
    d = fnG(d, a, b, c, M[10], 0x02441453, 9);
    c = fnG(c, d, a, b, M[15], 0xd8a1e681, 14);
    b = fnG(b, c, d, a, M[4], 0xe7d3fbc8, 20);
    a = fnG(a, b, c, d, M[9], 0x21e1cde6, 5);
    d = fnG(d, a, b, c, M[14], 0xc33707d6, 9);
    c = fnG(c, d, a, b, M[3], 0xf4d50d87, 14);
    b = fnG(b, c, d, a, M[8], 0x455a14ed, 20);
    a = fnG(a, b, c, d, M[13], 0xa9e3e905, 5);
    d = fnG(d, a, b, c, M[2], 0xfcefa3f8, 9);
    c = fnG(c, d, a, b, M[7], 0x676f02d9, 14);
    b = fnG(b, c, d, a, M[12], 0x8d2a4c8a, 20);
    a = fnH(a, b, c, d, M[5], 0xfffa3942, 4);
    d = fnH(d, a, b, c, M[8], 0x8771f681, 11);
    c = fnH(c, d, a, b, M[11], 0x6d9d6122, 16);
    b = fnH(b, c, d, a, M[14], 0xfde5380c, 23);
    a = fnH(a, b, c, d, M[1], 0xa4beea44, 4);
    d = fnH(d, a, b, c, M[4], 0x4bdecfa9, 11);
    c = fnH(c, d, a, b, M[7], 0xf6bb4b60, 16);
    b = fnH(b, c, d, a, M[10], 0xbebfbc70, 23);
    a = fnH(a, b, c, d, M[13], 0x289b7ec6, 4);
    d = fnH(d, a, b, c, M[0], 0xeaa127fa, 11);
    c = fnH(c, d, a, b, M[3], 0xd4ef3085, 16);
    b = fnH(b, c, d, a, M[6], 0x04881d05, 23);
    a = fnH(a, b, c, d, M[9], 0xd9d4d039, 4);
    d = fnH(d, a, b, c, M[12], 0xe6db99e5, 11);
    c = fnH(c, d, a, b, M[15], 0x1fa27cf8, 16);
    b = fnH(b, c, d, a, M[2], 0xc4ac5665, 23);
    a = fnI(a, b, c, d, M[0], 0xf4292244, 6);
    d = fnI(d, a, b, c, M[7], 0x432aff97, 10);
    c = fnI(c, d, a, b, M[14], 0xab9423a7, 15);
    b = fnI(b, c, d, a, M[5], 0xfc93a039, 21);
    a = fnI(a, b, c, d, M[12], 0x655b59c3, 6);
    d = fnI(d, a, b, c, M[3], 0x8f0ccc92, 10);
    c = fnI(c, d, a, b, M[10], 0xffeff47d, 15);
    b = fnI(b, c, d, a, M[1], 0x85845dd1, 21);
    a = fnI(a, b, c, d, M[8], 0x6fa87e4f, 6);
    d = fnI(d, a, b, c, M[15], 0xfe2ce6e0, 10);
    c = fnI(c, d, a, b, M[6], 0xa3014314, 15);
    b = fnI(b, c, d, a, M[13], 0x4e0811a1, 21);
    a = fnI(a, b, c, d, M[4], 0xf7537e82, 6);
    d = fnI(d, a, b, c, M[11], 0xbd3af235, 10);
    c = fnI(c, d, a, b, M[2], 0x2ad7d2bb, 15);
    b = fnI(b, c, d, a, M[9], 0xeb86d391, 21);
    this._a = this._a + a | 0;
    this._b = this._b + b | 0;
    this._c = this._c + c | 0;
    this._d = this._d + d | 0;
  }

  _hash() {
    const H = Buffer.allocUnsafe(16);
    H.writeInt32LE(this._a, 0);
    H.writeInt32LE(this._b, 4);
    H.writeInt32LE(this._c, 8);
    H.writeInt32LE(this._d, 12);
    return H;
  }

}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - sha.js, Copyright (c) 2013-2018 sha.js contributors
 */


const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

function rotl1(num) {
  return num << 1 | num >>> 31;
}

function rotl5(num) {
  return num << 5 | num >>> 27;
}

function rotl30(num) {
  return num << 30 | num >>> 2;
}

function ft(s, b, c, d) {
  if (s === 0) {
    return b & c | ~b & d;
  }

  if (s === 2) {
    return b & c | b & d | c & d;
  }

  return b ^ c ^ d;
}

class Sha1 extends Hash {
  constructor() {
    super(64, 56);
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    this._w = new Array(80);
  }

  _update(M) {
    const W = this._w;
    let a = this._a | 0;
    let b = this._b | 0;
    let c = this._c | 0;
    let d = this._d | 0;
    let e = this._e | 0;
    let i;

    for (i = 0; i < 16; ++i) {
      W[i] = M.readInt32BE(i * 4);
    }

    for (; i < 80; ++i) {
      W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);
    }

    for (let j = 0; j < 80; ++j) {
      const s = ~~(j / 20);
      const t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;
      e = d;
      d = c;
      c = rotl30(b);
      b = a;
      a = t;
    }

    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
  }

  _hash() {
    const H = Buffer.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  }

}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - sha.js, Copyright (c) 2013-2018 sha.js contributors
 */


const K$1 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

function ch(x, y, z) {
  return z ^ x & (y ^ z);
}

function maj(x, y, z) {
  return x & y | z & (x | y);
}

function sigma0(x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
}

function sigma1(x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
}

function gamma0(x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
}

function gamma1(x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
}

class Sha256 extends Hash {
  constructor() {
    super(64, 56);
    this._a = 0x6a09e667;
    this._b = 0xbb67ae85;
    this._c = 0x3c6ef372;
    this._d = 0xa54ff53a;
    this._e = 0x510e527f;
    this._f = 0x9b05688c;
    this._g = 0x1f83d9ab;
    this._h = 0x5be0cd19;
    this._w = new Array(64);
  }

  _update(M) {
    const W = this._w;
    let a = this._a | 0;
    let b = this._b | 0;
    let c = this._c | 0;
    let d = this._d | 0;
    let e = this._e | 0;
    let f = this._f | 0;
    let g = this._g | 0;
    let h = this._h | 0;
    let i;

    for (i = 0; i < 16; ++i) {
      W[i] = M.readInt32BE(i * 4);
    }

    for (; i < 64; ++i) {
      W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;
    }

    for (let j = 0; j < 64; ++j) {
      const T1 = h + sigma1(e) + ch(e, f, g) + K$1[j] + W[j] | 0;
      const T2 = sigma0(a) + maj(a, b, c) | 0;
      h = g;
      g = f;
      f = e;
      e = d + T1 | 0;
      d = c;
      c = b;
      b = a;
      a = T1 + T2 | 0;
    }

    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
    this._f = f + this._f | 0;
    this._g = g + this._g | 0;
    this._h = h + this._h | 0;
  }

  _hash() {
    const H = Buffer.allocUnsafe(32);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);
    return H;
  }

}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - sha.js, Copyright (c) 2013-2018 sha.js contributors
 */


const K$2 = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

function Ch(x, y, z) {
  return z ^ x & (y ^ z);
}

function maj$1(x, y, z) {
  return x & y | z & (x | y);
}

function sigma0$1(x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
}

function sigma1$1(x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
}

function Gamma0(x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
}

function Gamma0l(x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
}

function Gamma1(x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
}

function Gamma1l(x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
}

function getCarry(a, b) {
  return a >>> 0 < b >>> 0 ? 1 : 0;
}

class Sha512 extends Hash {
  constructor() {
    super(128, 112);
    this._ah = 0x6a09e667;
    this._bh = 0xbb67ae85;
    this._ch = 0x3c6ef372;
    this._dh = 0xa54ff53a;
    this._eh = 0x510e527f;
    this._fh = 0x9b05688c;
    this._gh = 0x1f83d9ab;
    this._hh = 0x5be0cd19;
    this._al = 0xf3bcc908;
    this._bl = 0x84caa73b;
    this._cl = 0xfe94f82b;
    this._dl = 0x5f1d36f1;
    this._el = 0xade682d1;
    this._fl = 0x2b3e6c1f;
    this._gl = 0xfb41bd6b;
    this._hl = 0x137e2179;
    this._w = new Array(160);
  }

  _update(M) {
    const W = this._w;
    let ah = this._ah | 0;
    let bh = this._bh | 0;
    let ch = this._ch | 0;
    let dh = this._dh | 0;
    let eh = this._eh | 0;
    let fh = this._fh | 0;
    let gh = this._gh | 0;
    let hh = this._hh | 0;
    let al = this._al | 0;
    let bl = this._bl | 0;
    let cl = this._cl | 0;
    let dl = this._dl | 0;
    let el = this._el | 0;
    let fl = this._fl | 0;
    let gl = this._gl | 0;
    let hl = this._hl | 0;
    let Wih;
    let Wil;
    let i = 0;

    for (i = 0; i < 32; i += 2) {
      W[i] = M.readInt32BE(i * 4);
      W[i + 1] = M.readInt32BE(i * 4 + 4);
    }

    for (; i < 160; i += 2) {
      let xh = W[i - 15 * 2];
      let xl = W[i - 15 * 2 + 1];
      const gamma0 = Gamma0(xh, xl);
      const gamma0l = Gamma0l(xl, xh);
      xh = W[i - 2 * 2];
      xl = W[i - 2 * 2 + 1];
      const gamma1 = Gamma1(xh, xl);
      const gamma1l = Gamma1l(xl, xh); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

      const Wi7h = W[i - 7 * 2];
      const Wi7l = W[i - 7 * 2 + 1];
      const Wi16h = W[i - 16 * 2];
      const Wi16l = W[i - 16 * 2 + 1];
      Wil = gamma0l + Wi7l | 0;
      Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
      Wil = Wil + gamma1l | 0;
      Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
      Wil = Wil + Wi16l | 0;
      Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
      W[i] = Wih;
      W[i + 1] = Wil;
    }

    for (let j = 0; j < 160; j += 2) {
      Wih = W[j];
      Wil = W[j + 1];
      const majh = maj$1(ah, bh, ch);
      const majl = maj$1(al, bl, cl);
      const sigma0h = sigma0$1(ah, al);
      const sigma0l = sigma0$1(al, ah);
      const sigma1h = sigma1$1(eh, el);
      const sigma1l = sigma1$1(el, eh); // t1 = h + sigma1 + ch + K[j] + W[j]

      const Kih = K$2[j];
      const Kil = K$2[j + 1];
      const chh = Ch(eh, fh, gh);
      const chl = Ch(el, fl, gl);
      let t1l = hl + sigma1l | 0;
      let t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
      t1l = t1l + chl | 0;
      t1h = t1h + chh + getCarry(t1l, chl) | 0;
      t1l = t1l + Kil | 0;
      t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
      t1l = t1l + Wil | 0;
      t1h = t1h + Wih + getCarry(t1l, Wil) | 0; // t2 = sigma0 + maj

      const t2l = sigma0l + majl | 0;
      const t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = dl + t1l | 0;
      eh = dh + t1h + getCarry(el, dl) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = t1l + t2l | 0;
      ah = t1h + t2h + getCarry(al, t1l) | 0;
    }

    this._al = this._al + al | 0;
    this._bl = this._bl + bl | 0;
    this._cl = this._cl + cl | 0;
    this._dl = this._dl + dl | 0;
    this._el = this._el + el | 0;
    this._fl = this._fl + fl | 0;
    this._gl = this._gl + gl | 0;
    this._hl = this._hl + hl | 0;
    this._ah = this._ah + ah + getCarry(this._al, al) | 0;
    this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
    this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
    this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
    this._eh = this._eh + eh + getCarry(this._el, el) | 0;
    this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
    this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
    this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
  }

  _hash() {
    const H = Buffer.allocUnsafe(64);

    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset);
      H.writeInt32BE(l, offset + 4);
    }

    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H;
  }

}

const HASH_IMPLEMENTATIONS = new Map([['md5', MD5], ['sha-1', Sha1], ['sha-256', Sha256], ['sha-512', Sha512], ['sha1', Sha1], ['sha256', Sha256], ['sha512', Sha512]]);

function createHash(alg) {
  alg = alg.toLowerCase();
  const HashImp = HASH_IMPLEMENTATIONS.get(alg);

  if (HashImp) {
    return new HashImp();
  } else {
    throw new Error('Unsupported hash algorithm: ' + alg);
  }
}
/**
 * This file is derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - hash-base, Copyright (c) 2016 Kirill Fomichev
 * - cipher-base, Copyright (c) 2017 crypto-browserify contributors
 * - create-hash, Copyright (c) 2017 crypto-browserify contributors
 * - create-hmac, Copyright (c) 2017 crypto-browserify contributors
 * - randombytes, Copyright (c) 2017 crypto-browserify
 */


const ZEROS = Buffer.alloc(128);

class Hmac extends _readableStream.Transform {
  constructor(alg, key) {
    super();

    if (typeof key === 'string') {
      key = Buffer.from(key);
    }

    const blocksize = alg === 'sha512' ? 128 : 64;
    this._alg = alg;

    if (key.length > blocksize) {
      key = createHash(alg).update(key).digest();
    } else if (key.length < blocksize) {
      key = Buffer.concat([key, ZEROS], blocksize);
    }

    this._ipad = Buffer.alloc(blocksize);
    this._opad = Buffer.alloc(blocksize);

    for (let i = 0; i < blocksize; i++) {
      this._ipad[i] = key[i] ^ 0x36;
      this._opad[i] = key[i] ^ 0x5c;
    }

    this._hash = createHash(alg).update(this._ipad);
  }

  _transform(data, enc, next) {
    let err;

    try {
      this.update(data, enc);
    } catch (e) {
      err = e;
    } finally {
      next(err);
    }
  }

  _flush(done) {
    let err;

    try {
      this.push(this._final());
    } catch (e) {
      err = e;
    }

    done(err);
  }

  _final() {
    const h = this._hash.digest();

    return createHash(this._alg).update(this._opad).update(h).digest();
  }

  update(data, inputEnc) {
    this._hash.update(data, inputEnc);

    return this;
  }

  digest(outputEnc) {
    const outData = this._final() || Buffer.alloc(0);

    if (outputEnc) {
      return outData.toString(outputEnc);
    }

    return outData;
  }

}

let root;

if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
}

function randomBytes(size) {
  const rawBytes = new Uint8Array(size);

  if (size > 0) {
    (root.crypto || root.msCrypto).getRandomValues(rawBytes);
  }

  return Buffer.from(rawBytes.buffer);
}

function getHashes() {
  return ['sha-1', 'sha-256', 'sha-512', 'md5'];
}

function createHmac(alg, key) {
  return new Hmac(alg.toLowerCase(), key);
}

const nativeFetch = fetch;
const nativeWS = WebSocket;
const nativeRTCPeerConnection = root.RTCPeerConnection;

class SimpleMech {
  constructor(name) {
    this.authenticated = false;
    this.mutuallyAuthenticated = false;
    this.name = name;
  }

  getCacheableCredentials() {
    return null;
  } // istanbul ignore next


  processChallenge(_challenge) {
    return;
  }

  processSuccess(_success) {
    this.authenticated = true;
  }

  finalize() {
    const result = {
      authenticated: this.authenticated,
      mutuallyAuthenticated: this.mutuallyAuthenticated
    };

    if (this.errorData) {
      result.errorData = this.errorData;
    }

    return result;
  }

}

class Factory {
  constructor() {
    this.mechanisms = [];
  }

  register(name, constructor, priority) {
    this.mechanisms.push({
      constructor,
      name: name.toUpperCase(),
      priority: priority
    }); // We want mechanisms with highest priority at the start of the list

    this.mechanisms.sort((a, b) => b.priority - a.priority);
  }

  disable(name) {
    const mechName = name.toUpperCase();
    this.mechanisms = this.mechanisms.filter(mech => mech.name !== mechName);
  }

  createMechanism(names) {
    const availableNames = names.map(name => name.toUpperCase());

    for (const knownMech of this.mechanisms) {
      for (const availableMechName of availableNames) {
        if (availableMechName === knownMech.name) {
          return new knownMech.constructor(knownMech.name);
        }
      }
    }

    return null;
  }

} // ====================================================================
// Utility helpers
// ====================================================================
// istanbul ignore next


function createClientNonce(length = 32) {
  return randomBytes(length).toString('hex');
} // tslint:disable no-bitwise


function XOR(a, b) {
  const res = [];

  for (let i = 0; i < a.length; i++) {
    res.push(a[i] ^ b[i]);
  }

  return Buffer.from(res);
} // tslint:enable no-bitwise


function H(text, alg) {
  return createHash(alg).update(text).digest();
}

function HMAC(key, msg, alg) {
  return createHmac(alg, key).update(msg).digest();
}

function Hi(text, salt, iterations, alg) {
  let ui1 = HMAC(text, Buffer.concat([salt, Buffer.from('00000001', 'hex')]), alg);
  let ui = ui1;

  for (let i = 0; i < iterations - 1; i++) {
    ui1 = HMAC(text, ui1, alg);
    ui = XOR(ui, ui1);
  }

  return ui;
}

function parse$2(challenge) {
  const directives = {};
  const tokens = challenge.toString().split(/,(?=(?:[^"]|"[^"]*")*$)/);

  for (let i = 0, len = tokens.length; i < len; i++) {
    const directive = /(\w+)=["]?([^"]+)["]?$/.exec(tokens[i]);

    if (directive) {
      directives[directive[1]] = directive[2];
    }
  }

  return directives;
}

function escapeUsername(name) {
  const escaped = [];

  for (const curr of name) {
    if (curr === ',') {
      escaped.push('=2C');
    } else if (curr === '=') {
      escaped.push('=3D');
    } else {
      escaped.push(curr);
    }
  }

  return escaped.join('');
} // ====================================================================
// ANONYMOUS
// ====================================================================


class ANONYMOUS extends SimpleMech {
  getExpectedCredentials() {
    return {
      optional: ['trace'],
      required: []
    };
  }

  createResponse(credentials) {
    return Buffer.from(credentials.trace || '');
  }

} // ====================================================================
// EXTERNAL
// ====================================================================


class EXTERNAL extends SimpleMech {
  getExpectedCredentials() {
    return {
      optional: ['authzid'],
      required: []
    };
  }

  createResponse(credentials) {
    return Buffer.from(credentials.authzid || '');
  }

} // ====================================================================
// PLAIN
// ====================================================================


class PLAIN extends SimpleMech {
  getExpectedCredentials() {
    return {
      optional: ['authzid'],
      required: ['username', 'password']
    };
  }

  createResponse(credentials) {
    return Buffer.from((credentials.authzid || '') + '\x00' + credentials.username + '\x00' + (credentials.password || credentials.token));
  }

} // ====================================================================
// OAUTHBEARER
// ====================================================================


class OAUTH extends SimpleMech {
  constructor(name) {
    super(name);
    this.failed = false;
    this.name = name;
  }

  getExpectedCredentials() {
    return {
      optional: ['authzid'],
      required: ['token']
    };
  }

  createResponse(credentials) {
    if (this.failed) {
      return Buffer.from('\u0001');
    }

    const gs2header = `n,${escapeUsername(saslprep(credentials.authzid))},`;
    const auth = `auth=Bearer ${credentials.token}\u0001`;
    return Buffer.from(gs2header + '\u0001' + auth + '\u0001', 'utf8');
  }

  processChallenge(challenge) {
    this.failed = true;
    this.errorData = JSON.parse(challenge.toString('utf8'));
  }

} // ====================================================================
// DIGEST-MD5
// ====================================================================


class DIGEST extends SimpleMech {
  constructor(name) {
    super(name);
    this.providesMutualAuthentication = false;
    this.state = 'INITIAL';
    this.name = name;
  }

  processChallenge(challenge) {
    this.state = 'CHALLENGE';
    const values = parse$2(challenge);
    this.authenticated = !!values.rspauth;
    this.realm = values.realm;
    this.nonce = values.nonce;
    this.charset = values.charset;
  }

  getExpectedCredentials() {
    return {
      optional: ['authzid', 'clientNonce', 'realm'],
      required: ['host', 'password', 'serviceName', 'serviceType', 'username']
    };
  }

  createResponse(credentials) {
    if (this.state === 'INITIAL' || this.authenticated) {
      return null;
    }

    let uri = credentials.serviceType + '/' + credentials.host;

    if (credentials.serviceName && credentials.host !== credentials.serviceName) {
      uri += '/' + credentials.serviceName;
    }

    const realm = credentials.realm || this.realm || '';
    const cnonce = credentials.clientNonce || createClientNonce(16);
    const nc = '00000001';
    const qop = 'auth';
    let str = '';
    str += 'username="' + credentials.username + '"';

    if (realm) {
      str += ',realm="' + realm + '"';
    }

    str += ',nonce="' + this.nonce + '"';
    str += ',cnonce="' + cnonce + '"';
    str += ',nc=' + nc;
    str += ',qop=' + qop;
    str += ',digest-uri="' + uri + '"';
    const base = createHash('md5').update(credentials.username).update(':').update(realm).update(':').update(credentials.password).digest();
    const ha1 = createHash('md5').update(base).update(':').update(this.nonce).update(':').update(cnonce);

    if (credentials.authzid) {
      ha1.update(':').update(credentials.authzid);
    }

    const dha1 = ha1.digest('hex');
    const ha2 = createHash('md5').update('AUTHENTICATE:').update(uri);
    const dha2 = ha2.digest('hex');
    const digest = createHash('md5').update(dha1).update(':').update(this.nonce).update(':').update(nc).update(':').update(cnonce).update(':').update(qop).update(':').update(dha2).digest('hex');
    str += ',response=' + digest;

    if (this.charset === 'utf-8') {
      str += ',charset=utf-8';
    }

    if (credentials.authzid) {
      str += ',authzid="' + credentials.authzid + '"';
    }

    return Buffer.from(str);
  }

} // ====================================================================
// SCRAM-SHA-1(-PLUS)
// ====================================================================


class SCRAM {
  constructor(name) {
    this.providesMutualAuthentication = true;
    this.name = name;
    this.state = 'INITIAL';
    this.useChannelBinding = this.name.toLowerCase().endsWith('-plus');
    this.algorithm = this.name.toLowerCase().split('scram-')[1].split('-plus')[0];
  }

  getExpectedCredentials() {
    const optional = ['authzid', 'clientNonce'];
    const required = ['username', 'password'];

    if (this.useChannelBinding) {
      required.push('tlsUnique');
    }

    return {
      optional,
      required
    };
  }

  getCacheableCredentials() {
    return this.cache;
  }

  createResponse(credentials) {
    if (this.state === 'INITIAL') {
      return this.initialResponse(credentials);
    }

    return this.challengeResponse(credentials);
  }

  processChallenge(challenge) {
    const values = parse$2(challenge);
    this.salt = Buffer.from(values.s || '', 'base64');
    this.iterationCount = parseInt(values.i, 10);
    this.nonce = values.r;
    this.verifier = values.v;
    this.error = values.e;
    this.challenge = challenge;
  }

  processSuccess(success) {
    this.processChallenge(success);
  }

  finalize() {
    if (!this.verifier) {
      return {
        authenticated: false,
        error: this.error,
        mutuallyAuthenticated: false
      };
    }

    if (this.serverSignature.toString('base64') !== this.verifier) {
      return {
        authenticated: false,
        error: 'Mutual authentication failed',
        mutuallyAuthenticated: false
      };
    }

    return {
      authenticated: true,
      mutuallyAuthenticated: true
    };
  }

  initialResponse(credentials) {
    const authzid = escapeUsername(saslprep(credentials.authzid));
    const username = escapeUsername(saslprep(credentials.username));
    this.clientNonce = credentials.clientNonce || createClientNonce();
    let cbindHeader = 'n';

    if (credentials.tlsUnique) {
      if (!this.useChannelBinding) {
        cbindHeader = 'y';
      } else {
        cbindHeader = 'p=tls-unique';
      }
    }

    this.gs2Header = Buffer.from(authzid ? `${cbindHeader},a=${authzid},` : `${cbindHeader},,`);
    this.clientFirstMessageBare = Buffer.from(`n=${username},r=${this.clientNonce}`);
    const result = Buffer.concat([this.gs2Header, this.clientFirstMessageBare]);
    this.state = 'CHALLENGE';
    return result;
  }

  challengeResponse(credentials) {
    const CLIENT_KEY = Buffer.from('Client Key');
    const SERVER_KEY = Buffer.from('Server Key');
    const cbindData = Buffer.concat([this.gs2Header, credentials.tlsUnique || Buffer.from('')]).toString('base64');
    const clientFinalMessageWithoutProof = Buffer.from(`c=${cbindData},r=${this.nonce}`);
    let saltedPassword;
    let clientKey;
    let serverKey; // If our cached salt is the same, we can reuse cached credentials to speed
    // up the hashing process.

    const cached = credentials.salt && Buffer.compare(credentials.salt, this.salt) === 0;

    if (cached && credentials.clientKey && credentials.serverKey) {
      clientKey = Buffer.from(credentials.clientKey);
      serverKey = Buffer.from(credentials.serverKey);
    } else if (cached && credentials.saltedPassword) {
      saltedPassword = Buffer.from(credentials.saltedPassword);
      clientKey = HMAC(saltedPassword, CLIENT_KEY, this.algorithm);
      serverKey = HMAC(saltedPassword, SERVER_KEY, this.algorithm);
    } else {
      saltedPassword = Hi(Buffer.from(saslprep(credentials.password)), this.salt, this.iterationCount, this.algorithm);
      clientKey = HMAC(saltedPassword, CLIENT_KEY, this.algorithm);
      serverKey = HMAC(saltedPassword, SERVER_KEY, this.algorithm);
    }

    const storedKey = H(clientKey, this.algorithm);
    const separator = Buffer.from(',');
    const authMessage = Buffer.concat([this.clientFirstMessageBare, separator, this.challenge, separator, clientFinalMessageWithoutProof]);
    const clientSignature = HMAC(storedKey, authMessage, this.algorithm);
    const clientProof = XOR(clientKey, clientSignature).toString('base64');
    this.serverSignature = HMAC(serverKey, authMessage, this.algorithm);
    const result = Buffer.concat([clientFinalMessageWithoutProof, Buffer.from(`,p=${clientProof}`)]);
    this.state = 'FINAL';
    this.cache = {
      clientKey,
      salt: this.salt,
      saltedPassword,
      serverKey
    };
    return result;
  }

}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SimpleMech: SimpleMech,
  Factory: Factory,
  createClientNonce: createClientNonce,
  XOR: XOR,
  H: H,
  HMAC: HMAC,
  Hi: Hi,
  ANONYMOUS: ANONYMOUS,
  EXTERNAL: EXTERNAL,
  PLAIN: PLAIN,
  OAUTH: OAUTH,
  DIGEST: DIGEST,
  SCRAM: SCRAM
});
exports.SASL = index$1;

function Account(client) {
  client.getAccountInfo = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      account: {},
      to: jid,
      type: 'get'
    });
    return resp.account;
  });

  client.updateAccount = (jid, data) => {
    return client.sendIQ({
      account: data,
      to: jid,
      type: 'set'
    });
  };

  client.deleteAccount = jid => {
    return client.sendIQ({
      account: {
        remove: true
      },
      to: jid,
      type: 'set'
    });
  };

  client.getPrivateData = key => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const res = yield client.sendIQ({
      privateStorage: {
        [key]: {}
      },
      type: 'get'
    });
    return res.privateStorage[key];
  });

  client.setPrivateData = (key, value) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    return client.sendIQ({
      privateStorage: {
        [key]: value
      },
      type: 'set'
    });
  });

  client.getVCard = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      to: jid,
      type: 'get',
      vcard: {
        format: NS_VCARD_TEMP
      }
    });
    return resp.vcard;
  });

  client.publishVCard = vcard => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      type: 'set',
      vcard
    });
  });

  client.enableNotifications = (jid, node, fieldList = []) => {
    return client.sendIQ({
      push: {
        action: 'enable',
        form: {
          fields: [{
            name: 'FORM_TYPE',
            type: 'hidden',
            value: 'http://jabber.org/protocol/pubsub#publish-options'
          }, ...fieldList],
          type: 'submit'
        },
        jid,
        node
      },
      type: 'set'
    });
  };

  client.disableNotifications = (jid, node) => {
    return client.sendIQ({
      push: {
        action: 'disable',
        jid,
        node
      },
      type: 'set'
    });
  };
}

function Avatar(client) {
  client.disco.addFeature(NS_PEP_NOTIFY(NS_AVATAR_METADATA));
  client.on('pubsub:published', msg => {
    if (msg.pubsub.items.node !== NS_AVATAR_METADATA) {
      return;
    }

    const info = msg.pubsub.items.published[0].content;
    client.emit('avatar', {
      avatars: info.versions || [],
      jid: msg.from,
      source: 'pubsub'
    });
  });
  client.on('presence', pres => {
    if (pres.vcardAvatar && typeof pres.vcardAvatar === 'string') {
      client.emit('avatar', {
        avatars: [{
          id: pres.vcardAvatar
        }],
        jid: pres.from,
        source: 'vcard'
      });
    }
  });

  client.publishAvatar = (id, data) => {
    return client.publish('', NS_AVATAR_DATA, {
      data,
      itemType: NS_AVATAR_DATA
    }, id);
  };

  client.useAvatars = (versions, pointers = []) => {
    return client.publish('', NS_AVATAR_METADATA, {
      itemType: NS_AVATAR_METADATA,
      pointers,
      versions
    }, 'current');
  };

  client.getAvatar = (jid, id) => {
    return client.getItem(jid, NS_AVATAR_DATA, id);
  };
}

function Bind(client) {
  client.registerFeature('bind', 300, (features, cb) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      const resp = yield client.sendIQ({
        bind: {
          resource: client.config.resource
        },
        type: 'set'
      });
      client.features.negotiated.bind = true;
      client.emit('session:prebind', resp.bind.jid);
      const canStartSession = !features.legacySession || features.legacySession && features.legacySession.optional;

      if (!client.sessionStarted && canStartSession) {
        client.emit('session:started', client.jid);
      }

      return cb();
    } catch (err) {
      console.error(err);
      return cb('disconnect', 'JID binding failed');
    }
  }));
  client.registerFeature('legacySession', 1000, (features, cb) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    if (client.sessionStarted || features.legacySession && features.legacySession.optional) {
      client.features.negotiated.session = true;
      return cb();
    }

    try {
      yield client.sendIQ({
        legacySession: true,
        type: 'set'
      });
      client.features.negotiated.session = true;

      if (!client.sessionStarted) {
        client.sessionStarted = true;
        client.emit('session:started', client.jid);
      }

      return cb();
    } catch (err) {
      return cb('disconnect', 'Session requeset failed');
    }
  }));
  client.on('session:started', () => {
    client.sessionStarted = true;
  });
  client.on('session:prebind', boundJID => {
    client.jid = boundJID;
    client.emit('session:bound', client.jid);
  });
  client.on('--reset-stream-features', () => {
    client.sessionStarted = false;
    client.features.negotiated.bind = false;
    client.features.negotiated.session = false;
  });
}

function Command(client) {
  client.disco.addFeature(NS_ADHOC_COMMANDS);
  client.disco.addItem({
    name: 'Ad-Hoc Commands',
    node: NS_ADHOC_COMMANDS
  });

  client.getCommands = jid => {
    return client.getDiscoItems(jid, NS_ADHOC_COMMANDS);
  };
}
/**
 * Portions of this file are derived from prior work.
 *
 * See NOTICE.md for full license text.
 *
 * Derived from:
 * - uuid, Copyright (c) 2010-2016 Robert Kieffer and other contributors
 */


const bth = [];

for (let i = 0; i < 256; ++i) {
  bth[i] = (i + 0x100).toString(16).substr(1);
}

function timeoutPromise(target, delay, rejectValue = () => undefined) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    let timeoutRef;
    const result = yield Promise.race([target, new Promise((resolve, reject) => {
      timeoutRef = setTimeout(() => reject(rejectValue()), delay);
    })]);
    clearTimeout(timeoutRef);
    return result;
  });
}

function sleep(time) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time);
    });
  });
}

function octetCompare(str1, str2) {
  const b1 = typeof str1 === 'string' ? Buffer.from(str1, 'utf8') : str1;
  const b2 = typeof str2 === 'string' ? Buffer.from(str2, 'utf8') : str2;
  return b1.compare(b2);
}

function uuid() {
  const buf = randomBytes(16); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  buf[6] = buf[6] & 0x0f | 0x40;
  buf[8] = buf[8] & 0x3f | 0x80;
  let i = 0;
  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i]]].join('');
}

const DATE_FIELDS = new Set(['date', 'expires', 'httpUploadRetry', 'idleSince', 'published', 'since', 'stamp', 'timestamp', 'updated', 'utc']);
const ISO_DT = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(?:Z|((\+|-)([\d|:]*)))?$/;

function reviveData(key, value) {
  if (DATE_FIELDS.has(key) && value && typeof value === 'string' && ISO_DT.test(value)) {
    return new Date(value);
  }

  if (value && typeof value === 'object' && value.type === 'Buffer' && Array.isArray(value.data)) {
    return Buffer.from(value);
  }

  return value;
}

var Utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutPromise: timeoutPromise,
  sleep: sleep,
  octetCompare: octetCompare,
  uuid: uuid,
  reviveData: reviveData
});
exports.Utils = Utils;

function checkConnection(client) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    if (client.sm.started) {
      return new Promise(resolve => {
        client.once('stream:management:ack', () => resolve());
        client.sm.request();
      });
    }

    try {
      yield client.ping();
    } catch (err) {
      if (err.error && err.error.condition !== 'timeout') {
        return;
      } else {
        throw err;
      }
    }
  });
}

function sendCSI(client, type) {
  if (client.features.negotiated.clientStateIndication) {
    client.send('csi', {
      type
    });
  }
}

function Connection(client) {
  client.disco.addFeature(NS_PING);
  client.on('iq:get:ping', iq => {
    client.sendIQResult(iq);
  });
  client.on('--reset-stream-features', () => {
    client.disableKeepAlive();
    client.features.negotiated.streamManagement = false;
    client.features.negotiated.clientStateIndication = false;
  });

  client.markActive = () => sendCSI(client, 'active');

  client.markInactive = () => sendCSI(client, 'inactive');

  client.ping = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      ping: true,
      to: jid,
      type: 'get'
    });
  });

  client.enableKeepAlive = (opts = {}) => {
    // Ping every 5 minutes
    const interval = opts.interval || 300; // Disconnect if no response in 15 seconds

    const timeout = opts.timeout || client.config.timeout || 15;

    function keepalive() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
        if (client.sessionStarted) {
          try {
            yield timeoutPromise(checkConnection(client), timeout * 1000);
          } catch (err) {
            // Kill the apparently dead connection without closing
            // the stream itself so we can reconnect and potentially
            // resume the session.
            client.emit('stream:error', {
              condition: 'connection-timeout',
              text: 'Server did not respond in ' + timeout + ' seconds'
            });

            if (client.transport) {
              client.transport.hasStream = false;
              client.transport.disconnect();
            }
          }
        }
      });
    }

    client._keepAliveInterval = setInterval(keepalive, interval * 1000);
  };

  client.disableKeepAlive = () => {
    if (client._keepAliveInterval) {
      clearInterval(client._keepAliveInterval);
      delete client._keepAliveInterval;
    }
  };

  const smacks = (features, done) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    if (!client.config.useStreamManagement) {
      return done();
    }

    const smHandler = sm => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      switch (sm.type) {
        case 'enabled':
          yield client.sm.enabled(sm);
          client.features.negotiated.streamManagement = true;
          client.off('sm', smHandler);
          return done();

        case 'resumed':
          yield client.sm.resumed(sm);
          client.features.negotiated.streamManagement = true;
          client.features.negotiated.bind = true;
          client.sessionStarted = true;
          client.off('sm', smHandler);
          client.emit('stream:management:resumed', sm);
          return done('break');
        // Halt further processing of stream features

        case 'failed':
          yield client.sm.failed(sm);
          client.off('sm', smHandler);
          client.emit('session:end');
          done();
      }
    });

    client.on('sm', smHandler);

    if (!client.sm.id) {
      if (client.features.negotiated.bind) {
        yield client.sm.enable();
      } else {
        client.off('sm', smHandler);
        done();
      }
    } else if (client.sm.id && client.sm.allowResume) {
      yield client.sm.resume();
    } else {
      client.off('sm', smHandler);
      done();
    }
  });

  client.registerFeature('streamManagement', 200, smacks);
  client.registerFeature('streamManagement', 500, smacks);
  client.registerFeature('clientStateIndication', 400, (features, cb) => {
    client.features.negotiated.clientStateIndication = true;
    cb();
  });
}

function escape(value) {
  return Buffer.from(value.replace(/</g, '&lt;'), 'utf-8');
}

function encodeIdentities(identities = []) {
  const result = [];
  const existing = new Set();

  for (const {
    category,
    type,
    lang,
    name
  } of identities) {
    const encoded = `${category}/${type}/${lang || ''}/${name || ''}`;

    if (existing.has(encoded)) {
      return null;
    }

    existing.add(encoded);
    result.push(escape(encoded));
  }

  result.sort(octetCompare);
  return result;
}

function encodeFeatures(features = []) {
  const result = [];
  const existing = new Set();

  for (const feature of features) {
    if (existing.has(feature)) {
      return null;
    }

    existing.add(feature);
    result.push(escape(feature));
  }

  result.sort(octetCompare);
  return result;
}

function encodeFields(fields = []) {
  const sortedFields = [];

  for (const field of fields) {
    if (field.name === 'FORM_TYPE') {
      continue;
    }

    if (field.rawValues) {
      sortedFields.push({
        name: escape(field.name),
        values: field.rawValues.map(val => escape(val)).sort(octetCompare)
      });
    } else if (Array.isArray(field.value)) {
      sortedFields.push({
        name: escape(field.name),
        values: field.value.map(val => escape(val)).sort(octetCompare)
      });
    } else if (field.value === true || field.value === false) {
      sortedFields.push({
        name: escape(field.name),
        values: [escape(field.value ? '1' : '0')]
      });
    } else {
      sortedFields.push({
        name: escape(field.name),
        values: [escape(field.value || '')]
      });
    }
  }

  sortedFields.sort((a, b) => octetCompare(a.name, b.name));
  const result = [];

  for (const field of sortedFields) {
    result.push(field.name);

    for (const value of field.values) {
      result.push(value);
    }
  }

  return result;
}

function encodeForms(extensions = []) {
  const forms = [];
  const types = new Set();

  for (const form of extensions) {
    let type;

    for (const field of form.fields || []) {
      if (!(field.name === 'FORM_TYPE' && field.type === 'hidden')) {
        continue;
      }

      if (field.rawValues && field.rawValues.length === 1) {
        type = escape(field.rawValues[0]);
        break;
      }

      if (field.value && typeof field.value === 'string') {
        type = escape(field.value);
        break;
      }
    }

    if (!type) {
      continue;
    }

    if (types.has(type.toString())) {
      return null;
    }

    types.add(type.toString());
    forms.push({
      type,
      form
    });
  }

  forms.sort((a, b) => octetCompare(a.type, b.type));
  const results = [];

  for (const form of forms) {
    results.push(form.type);
    const fields = encodeFields(form.form.fields);

    for (const field of fields) {
      results.push(field);
    }
  }

  return results;
}

function generate(info, hashName) {
  const S = [];
  const separator = Buffer.from('<', 'utf8');

  const append = b1 => {
    S.push(b1);
    S.push(separator);
  };

  const identities = encodeIdentities(info.identities);
  const features = encodeFeatures(info.features);
  const extensions = encodeForms(info.extensions);

  if (!identities || !features || !extensions) {
    return null;
  }

  for (const id of identities) {
    append(id);
  }

  for (const feature of features) {
    append(feature);
  }

  for (const form of extensions) {
    append(form);
  }

  return createHash(hashName).update(Buffer.concat(S)).digest('base64');
}

class Disco {
  constructor() {
    this.capsAlgorithms = ['sha-1'];
    this.features = new Map();
    this.identities = new Map();
    this.extensions = new Map();
    this.items = new Map();
    this.caps = new Map();
    this.features.set('', new Set());
    this.identities.set('', []);
    this.extensions.set('', []);
  }

  getNodeInfo(node) {
    return {
      extensions: [...(this.extensions.get(node) || [])],
      features: [...(this.features.get(node) || [])],
      identities: [...(this.identities.get(node) || [])]
    };
  }

  addFeature(feature, node = '') {
    if (!this.features.has(node)) {
      this.features.set(node, new Set());
    }

    this.features.get(node).add(feature);
  }

  addIdentity(identity, node = '') {
    if (!this.identities.has(node)) {
      this.identities.set(node, []);
    }

    this.identities.get(node).push(identity);
  }

  addItem(item, node = '') {
    if (!this.items.has(node)) {
      this.items.set(node, []);
    }

    this.items.get(node).push(item);
  }

  addExtension(form, node = '') {
    if (!this.extensions.has(node)) {
      this.extensions.set(node, []);
    }

    this.extensions.get(node).push(form);
  }

  updateCaps(node, algorithms = this.capsAlgorithms) {
    const info = {
      extensions: [...this.extensions.get('')],
      features: [...this.features.get('')],
      identities: [...this.identities.get('')],
      type: 'info'
    };

    for (const algorithm of algorithms) {
      const version = generate(info, algorithm);

      if (!version) {
        this.caps.delete(algorithm);
        continue;
      }

      this.caps.set(algorithm, {
        algorithm,
        node,
        value: version
      });
      const hashedNode = `${node}#${version}`;

      for (const feature of info.features) {
        this.addFeature(feature, hashedNode);
      }

      for (const identity of info.identities) {
        this.addIdentity(identity, hashedNode);
      }

      for (const form of info.extensions) {
        this.addExtension(form, hashedNode);
      }

      this.identities.set(hashedNode, info.identities);
      this.features.set(hashedNode, new Set(info.features));
      this.extensions.set(hashedNode, info.extensions);
    }

    return [...this.caps.values()];
  }

  getCaps() {
    return [...this.caps.values()];
  }

}

function Disco$1(client) {
  client.disco = new Disco();
  client.disco.addFeature(NS_DISCO_INFO);
  client.disco.addFeature(NS_DISCO_ITEMS);
  client.disco.addIdentity({
    category: 'client',
    type: 'web'
  });
  client.registerFeature('caps', 100, (features, done) => {
    const domain = getDomain(client.jid) || client.config.server;
    client.emit('disco:caps', {
      caps: features.legacyCapabilities || [],
      jid: domain
    });
    client.features.negotiated.caps = true;
    done();
  });

  client.getDiscoInfo = (jid, node) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      disco: {
        node,
        type: 'info'
      },
      to: jid,
      type: 'get'
    });
    return Object.assign({
      extensions: [],
      features: [],
      identities: []
    }, resp.disco);
  });

  client.getDiscoItems = (jid, node) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      disco: {
        node,
        type: 'items'
      },
      to: jid,
      type: 'get'
    });
    return Object.assign({
      items: []
    }, resp.disco);
  });

  client.updateCaps = () => {
    const node = client.config.capsNode || 'https://stanzajs.org';
    return client.disco.updateCaps(node);
  };

  client.getCurrentCaps = () => {
    const caps = client.disco.getCaps();

    if (!caps) {
      return;
    }

    const node = `${caps[0].node}#${caps[0].value}`;
    return {
      info: client.disco.getNodeInfo(node),
      legacyCapabilities: caps
    };
  };

  client.on('presence', pres => {
    if (pres.legacyCapabilities) {
      client.emit('disco:caps', {
        caps: pres.legacyCapabilities,
        jid: pres.from
      });
    }
  });
  client.on('iq:get:disco', iq => {
    const {
      type,
      node
    } = iq.disco;

    if (type === 'info') {
      client.sendIQResult(iq, {
        disco: Object.assign(Object.assign({}, client.disco.getNodeInfo(node || '')), {
          node,
          type: 'info'
        })
      });
    }

    if (type === 'items') {
      client.sendIQResult(iq, {
        disco: {
          items: client.disco.items.get(node || '') || [],
          type: 'items'
        }
      });
    }
  });
}

const VERSION = '12.14.7'; // ====================================================================
// Frequently Used Values
// ====================================================================

const NotAuthorized = 'not-authorized'; // ====================================================================
// Named Enum Constants
// ====================================================================

const StreamType = {
  Bosh: NS_BOSH,
  Client: NS_CLIENT,
  Component: NS_COMPONENT,
  Server: NS_SERVER
};
const SASLFailureCondition = {
  AccountDisabled: 'account-disabled',
  CredentialsExpired: 'credentials-expired',
  EncryptionRequired: 'encryption-required',
  IncorrectEncoding: 'incorrect-encoding',
  InvalidAuthzid: 'invalid-authzid',
  InvalidMechanism: 'invalid-mechanism',
  MalformedRequest: 'malformed-request',
  MechanismTooWeak: 'mechanism-too-weak',
  NotAuthorized,
  TemporaryAuthFailure: 'temporary-auth-failure'
};
const StreamErrorCondition = {
  BadFormat: 'bad-format',
  BadNamespacePrefix: 'bad-namespace-prefix',
  Conflict: 'conflict',
  ConnectionTimeout: 'connection-timeout',
  HostGone: 'host-gone',
  HostUnknown: 'host-unknown',
  ImproperAddressing: 'improper-addressing',
  InternalServerError: 'internal-server-error',
  InvalidFrom: 'invalid-from',
  InvalidId: 'invalid-id',
  InvalidNamespace: 'invalid-namespace',
  InvalidXML: 'invalid-xml',
  NotAuthorized,
  NotWellFormed: 'not-well-formed',
  PolicyViolation: 'policy-violation',
  RemoteConnectionFailed: 'remote-connection-failed',
  Reset: 'reset',
  ResourceConstraint: 'resource-constraint',
  RestrictedXML: 'restricted-xml',
  SeeOtherHost: 'see-other-host',
  SystemShutdown: 'system-shutdown',
  UndefinedCondition: 'undefined-condition',
  UnsupportedEncoding: 'unsupported-encoding',
  UnsupportedStanzaType: 'unsupported-stanza-type',
  UnsupportedVersion: 'unsupported-version'
};
const StanzaErrorCondition = {
  BadRequest: 'bad-request',
  Conflict: 'conflict',
  FeatureNotImplemented: 'feature-not-implemented',
  Forbidden: 'forbidden',
  Gone: 'gone',
  InternalServerError: 'internal-server-error',
  ItemNotFound: 'item-not-found',
  JIDMalformed: 'jid-malformed',
  NotAcceptable: 'not-acceptable',
  NotAllowed: 'not-allowed',
  NotAuthorized,
  PolicyViolation: 'policy-violation',
  RecipientUnavailable: 'recipient-unavailable',
  Redirect: 'redirect',
  RegistrationRequired: 'registration-required',
  RemoteServerNotFound: 'remote-server-not-found',
  RemoteServerTimeout: 'remote-server-timeout',
  ResourceConstraint: 'resource-constraint',
  ServiceUnavailable: 'service-unavailable',
  SubscriptionRequired: 'subscription-required',
  UndefinedCondition: 'undefined-condition',
  UnexpectedRequest: 'unexpected-request'
};
const MessageType = {
  Chat: 'chat',
  Error: 'error',
  GroupChat: 'groupchat',
  Headline: 'headline',
  Normal: 'normal'
};
const PresenceType = {
  Available: undefined,
  Error: 'error',
  Probe: 'probe',
  Subscribe: 'subscribe',
  Subscribed: 'subscribed',
  Unavailable: 'unavailable',
  Unsubscribe: 'unsubscribe',
  Unsubscribed: 'unsubscribed'
};
const IQType = {
  Error: 'error',
  Get: 'get',
  Result: 'result',
  Set: 'set'
};
const PresenceShow = {
  Away: 'away',
  Chat: 'chat',
  DoNotDisturb: 'dnd',
  ExtendedAway: 'xa'
};
const RosterSubscription = {
  Both: 'both',
  From: 'from',
  None: 'none',
  ReceivePresenceOnly: 'to',
  Remove: 'remove',
  SendAndReceivePresence: 'both',
  SendPresenceOnly: 'from',
  To: 'to'
};
const DataFormType = {
  Cancel: 'cancel',
  Form: 'form',
  Result: 'result',
  Submit: 'submit'
};
const DataFormFieldType = {
  Boolean: 'boolean',
  Fixed: 'fixed',
  Hidden: 'hidden',
  JID: 'jid-single',
  JIDMultiple: 'jid-multi',
  List: 'list-single',
  ListMultiple: 'list-multi',
  Password: 'text-private',
  Text: 'text-single',
  TextMultiple: 'text-multi',
  TextPrivate: 'text-private'
};
const MUCAffiliation = {
  Admin: 'admin',
  Banned: 'outcast',
  Member: 'member',
  None: 'none',
  Outcast: 'outcast',
  Owner: 'owner'
};
const MUCRole = {
  Moderator: 'moderator',
  None: 'none',
  Participant: 'participant',
  Visitor: 'visitor'
};
const MUCStatusCode = {
  AffiliationChanged: '101',
  AffiliationLost: '321',
  Banned: '301',
  Error: '333',
  Kicked: '307',
  LoggingDisabled: '171',
  LoggingEnabled: '170',
  MembershipLost: '322',
  NickChanged: '303',
  NickChangedByService: '210',
  NonAnonymous: '172',
  NonAnonymousRoom: '100',
  NonPrivacyConfigurationChange: '104',
  RoomCreated: '201',
  SelfPresence: '110',
  SemiAnonymous: '173',
  Shutdown: '332',
  UnavailableMembersListed: '102',
  UnavailableMembersNotListed: '103'
};
const PubsubErrorCondition = {
  ClosedNode: 'closed-node',
  ConfigurationRequired: 'configuration-required',
  InvalidJID: 'invalid-jid',
  InvalidOptions: 'invalid-options',
  InvalidPayload: 'invalid-payload',
  InvalidSubscriptionId: 'invalid-subid',
  ItemForbidden: 'item-forbidden',
  ItemRequired: 'item-required',
  JIDRequired: 'jid-required',
  MaxItemsExceeded: 'max-items-exceeded',
  MaxNodesExceeded: 'max-nodes-exceeded',
  NodeIdRequired: 'nodeid-required',
  NotInRosterGroup: 'not-in-roster-group',
  NotSubscribed: 'not-subscribed',
  PayloadRequired: 'payload-required',
  PayloadTooBig: 'payload-too-big',
  PendingSubscription: 'pending-subscription',
  PresenceSubscriptionRequired: 'presence-subscription-required',
  SubscriptionIdRequired: 'subid-required',
  TooManySubscriptions: 'too-many-subscriptions',
  Unsupported: 'unsupported',
  UnsupportedAccessModel: 'unsupported-access-model'
};
const ChatState = {
  Active: 'active',
  Composing: 'composing',
  Gone: 'gone',
  Inactive: 'inactive',
  Paused: 'paused'
};
const JingleSessionRole = {
  Initiator: 'initiator',
  Responder: 'responder'
};
const JingleApplicationDirection = {
  Inactive: 'inactive',
  Receive: 'recvonly',
  Send: 'sendonly',
  SendReceive: 'sendrecv'
};
const JingleContentSenders = {
  Both: 'both',
  Initiator: 'initiator',
  None: 'none',
  Responder: 'responder'
};
const JingleAction = {
  ContentAccept: 'content-accept',
  ContentAdd: 'content-add',
  ContentModify: 'content-modify',
  ContentReject: 'content-reject',
  ContentRemove: 'content-remove',
  DescriptionInfo: 'description-info',
  SecurityInfo: 'security-info',
  SessionAccept: 'session-accept',
  SessionInfo: 'session-info',
  SessionInitiate: 'session-initiate',
  SessionTerminate: 'session-terminate',
  TransportAccept: 'transport-accept',
  TransportInfo: 'transport-info',
  TransportReject: 'transport-reject',
  TransportReplace: 'transport-replace'
};
const JingleErrorCondition = {
  OutOfOrder: 'out-of-order',
  TieBreak: 'tie-break',
  UnknownContent: 'unknown-content',
  UnknownSession: 'unknown-session',
  UnsupportedInfo: 'unsupported-info'
};
const JingleReasonCondition = {
  AlternativeSession: 'alternative-session',
  Busy: 'busy',
  Cancel: 'cancel',
  ConnectivityError: 'connectivity-error',
  Decline: 'decline',
  Expired: 'expired',
  FailedApplication: 'failed-application',
  FailedTransport: 'failed-transport',
  GeneralError: 'general-error',
  Gone: 'gone',
  IncompatibleParameters: 'incompatible-parameters',
  MediaError: 'media-error',
  SecurityError: 'security-error',
  Success: 'success',
  Timeout: 'timeout',
  UnsupportedApplications: 'unsupported-applications',
  UnsupportedTransports: 'unsupported-transports'
}; // ====================================================================
// Standalone Constants
// ====================================================================

const USER_MOODS = ['afraid', 'amazed', 'amorous', 'angry', 'annoyed', 'anxious', 'aroused', 'ashamed', 'bored', 'brave', 'calm', 'cautious', 'cold', 'confident', 'confused', 'contemplative', 'contented', 'cranky', 'crazy', 'creative', 'curious', 'dejected', 'depressed', 'disappointed', 'disgusted', 'dismayed', 'distracted', 'embarrassed', 'envious', 'excited', 'flirtatious', 'frustrated', 'grateful', 'grieving', 'grumpy', 'guilty', 'happy', 'hopeful', 'hot', 'humbled', 'humiliated', 'hungry', 'hurt', 'impressed', 'in_awe', 'in_love', 'indignant', 'interested', 'intoxicated', 'invincible', 'jealous', 'lonely', 'lost', 'lucky', 'mean', 'moody', 'nervous', 'neutral', 'offended', 'outraged', 'playful', 'proud', 'relaxed', 'relieved', 'remorseful', 'restless', 'sad', 'sarcastic', 'satisfied', 'serious', 'shocked', 'shy', 'sick', 'sleepy', 'spontaneous', 'stressed', 'strong', 'surprised', 'thankful', 'thirsty', 'tired', 'undefined', 'weak', 'worried'];
const USER_ACTIVITY_GENERAL = ['doing_chores', 'drinking', 'eating', 'exercising', 'grooming', 'having_appointment', 'inactive', 'relaxing', 'talking', 'traveling', 'undefined', 'working'];
const USER_ACTIVITY_SPECIFIC = ['at_the_spa', 'brushing_teeth', 'buying_groceries', 'cleaning', 'coding', 'commuting', 'cooking', 'cycling', 'cycling', 'dancing', 'day_off', 'doing_maintenance', 'doing_the_dishes', 'doing_the_laundry', 'driving', 'fishing', 'gaming', 'gardening', 'getting_a_haircut', 'going_out', 'hanging_out', 'having_a_beer', 'having_a_snack', 'having_breakfast', 'having_coffee', 'having_dinner', 'having_lunch', 'having_tea', 'hiding', 'hiking', 'in_a_car', 'in_a_meeting', 'in_real_life', 'jogging', 'on_a_bus', 'on_a_plane', 'on_a_train', 'on_a_trip', 'on_the_phone', 'on_vacation', 'on_video_phone', 'other', 'partying', 'playing_sports', 'praying', 'reading', 'rehearsing', 'running', 'running_an_errand', 'scheduled_holiday', 'shaving', 'shopping', 'skiing', 'sleeping', 'smoking', 'socializing', 'studying', 'sunbathing', 'swimming', 'taking_a_bath', 'taking_a_shower', 'thinking', 'walking', 'walking_the_dog', 'watching_a_movie', 'watching_tv', 'working_out', 'writing'];

const JINGLE_INFO = (namespace, name) => `{${namespace}}${name}`;

const JINGLE_INFO_MUTE = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'mute');
const JINGLE_INFO_UNMUTE = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'unmute');
const JINGLE_INFO_HOLD = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'hold');
const JINGLE_INFO_UNHOLD = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'unhold');
const JINGLE_INFO_ACTIVE = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'active');
const JINGLE_INFO_RINGING = JINGLE_INFO(NS_JINGLE_RTP_INFO_1, 'ringing');
const JINGLE_INFO_CHECKSUM_5 = JINGLE_INFO(NS_JINGLE_FILE_TRANSFER_5, 'checksum');
const JINGLE_INFO_RECEIVED_5 = JINGLE_INFO(NS_JINGLE_FILE_TRANSFER_5, 'received'); // ====================================================================
// Helper Functions
// ====================================================================

function sendersToDirection(role, senders = JingleContentSenders.Both) {
  const isInitiator = role === JingleSessionRole.Initiator;

  switch (senders) {
    case JingleContentSenders.Initiator:
      return isInitiator ? JingleApplicationDirection.Send : JingleApplicationDirection.Receive;

    case JingleContentSenders.Responder:
      return isInitiator ? JingleApplicationDirection.Receive : JingleApplicationDirection.Send;

    case JingleContentSenders.Both:
      return JingleApplicationDirection.SendReceive;
  }

  return JingleApplicationDirection.Inactive;
}

function directionToSenders(role, direction = JingleApplicationDirection.SendReceive) {
  const isInitiator = role === JingleSessionRole.Initiator;

  switch (direction) {
    case JingleApplicationDirection.Send:
      return isInitiator ? JingleContentSenders.Initiator : JingleContentSenders.Responder;

    case JingleApplicationDirection.Receive:
      return isInitiator ? JingleContentSenders.Responder : JingleContentSenders.Initiator;

    case JingleApplicationDirection.SendReceive:
      return JingleContentSenders.Both;
  }

  return JingleContentSenders.None;
}

var Constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VERSION: VERSION,
  StreamType: StreamType,
  SASLFailureCondition: SASLFailureCondition,
  StreamErrorCondition: StreamErrorCondition,
  StanzaErrorCondition: StanzaErrorCondition,
  MessageType: MessageType,
  PresenceType: PresenceType,
  IQType: IQType,
  PresenceShow: PresenceShow,
  RosterSubscription: RosterSubscription,
  DataFormType: DataFormType,
  DataFormFieldType: DataFormFieldType,
  MUCAffiliation: MUCAffiliation,
  MUCRole: MUCRole,
  MUCStatusCode: MUCStatusCode,
  PubsubErrorCondition: PubsubErrorCondition,
  ChatState: ChatState,
  JingleSessionRole: JingleSessionRole,
  JingleApplicationDirection: JingleApplicationDirection,
  JingleContentSenders: JingleContentSenders,
  JingleAction: JingleAction,
  JingleErrorCondition: JingleErrorCondition,
  JingleReasonCondition: JingleReasonCondition,
  USER_MOODS: USER_MOODS,
  USER_ACTIVITY_GENERAL: USER_ACTIVITY_GENERAL,
  USER_ACTIVITY_SPECIFIC: USER_ACTIVITY_SPECIFIC,
  JINGLE_INFO: JINGLE_INFO,
  JINGLE_INFO_MUTE: JINGLE_INFO_MUTE,
  JINGLE_INFO_UNMUTE: JINGLE_INFO_UNMUTE,
  JINGLE_INFO_HOLD: JINGLE_INFO_HOLD,
  JINGLE_INFO_UNHOLD: JINGLE_INFO_UNHOLD,
  JINGLE_INFO_ACTIVE: JINGLE_INFO_ACTIVE,
  JINGLE_INFO_RINGING: JINGLE_INFO_RINGING,
  JINGLE_INFO_CHECKSUM_5: JINGLE_INFO_CHECKSUM_5,
  JINGLE_INFO_RECEIVED_5: JINGLE_INFO_RECEIVED_5,
  sendersToDirection: sendersToDirection,
  directionToSenders: directionToSenders
});
exports.Constants = Constants;

function Entity(client) {
  client.disco.addFeature('jid\\20escaping');
  client.disco.addFeature(NS_DELAY);
  client.disco.addFeature(NS_EME_0);
  client.disco.addFeature(NS_FORWARD_0);
  client.disco.addFeature(NS_HASHES_2);
  client.disco.addFeature(NS_HASHES_1);
  client.disco.addFeature(NS_IDLE_1);
  client.disco.addFeature(NS_JSON_0);
  client.disco.addFeature(NS_OOB);
  client.disco.addFeature(NS_PSA);
  client.disco.addFeature(NS_REFERENCE_0);
  client.disco.addFeature(NS_SHIM);
  client.disco.addFeature(NS_DATAFORM);
  client.disco.addFeature(NS_DATAFORM_MEDIA);
  client.disco.addFeature(NS_DATAFORM_VALIDATION);
  client.disco.addFeature(NS_DATAFORM_LAYOUT);
  const names = getHashes();

  for (const name of names) {
    client.disco.addFeature(NS_HASH_NAME(name));
  }

  client.disco.addFeature(NS_TIME);
  client.disco.addFeature(NS_VERSION);
  client.on('iq:get:softwareVersion', iq => {
    return client.sendIQResult(iq, {
      softwareVersion: client.config.softwareVersion || {
        name: 'stanzajs.org',
        version: VERSION
      }
    });
  });
  client.on('iq:get:time', iq => {
    const time = new Date();
    client.sendIQResult(iq, {
      time: {
        tzo: time.getTimezoneOffset(),
        utc: time
      }
    });
  });

  client.getSoftwareVersion = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      softwareVersion: {},
      to: jid,
      type: 'get'
    });
    return resp.softwareVersion;
  });

  client.getTime = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      time: {},
      to: jid,
      type: 'get'
    });
    return resp.time;
  });

  client.getLastActivity = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      lastActivity: {},
      to: jid,
      type: 'get'
    });
    return resp.lastActivity;
  });
}

function Features(client) {
  client.features = {
    handlers: Object.create(null),
    negotiated: Object.create(null),
    order: []
  };

  client.registerFeature = function (name, priority, handler) {
    this.features.order.push({
      name,
      priority
    }); // We want the features with smallest priority values at the start of the list

    this.features.order.sort((a, b) => a.priority - b.priority);
    this.features.handlers[name] = handler.bind(client);
  };

  client.on('features', features => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const negotiated = client.features.negotiated;
    const handlers = client.features.handlers;
    const processingOrder = [];

    for (const {
      name
    } of client.features.order) {
      if (features[name] && handlers[name] && !negotiated[name]) {
        processingOrder.push(name);
      }
    }

    function processFeature(featureName) {
      return new Promise(resolve => {
        handlers[featureName](features, (command, message) => {
          if (command) {
            resolve({
              command,
              message
            });
          } else {
            resolve();
          }
        });
      });
    }

    for (const item of processingOrder) {
      if (negotiated[item]) {
        continue;
      }

      let cmd = '';
      let msg = '';

      try {
        const res = yield processFeature(item);

        if (res) {
          cmd = res.command;
          msg = res.message || '';
        }
      } catch (err) {
        cmd = 'disconnect';
        msg = err.message;
        console.error(err);
      }

      if (!cmd) {
        continue;
      }

      if (cmd === 'restart' && client.transport) {
        client.transport.restart();
      }

      if (cmd === 'disconnect') {
        client.emit('stream:error', {
          condition: 'policy-violation',
          text: 'Failed to negotiate stream features: ' + msg
        });
        client.disconnect();
      }

      return;
    }
  }));
}

function promiseAny(promises) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      const errors = yield Promise.all(promises.map(p => {
        return p.then(val => Promise.reject(val), err => Promise.resolve(err));
      }));
      return Promise.reject(errors);
    } catch (val) {
      return Promise.resolve(val);
    }
  });
}

function getHostMeta(registry, opts) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    if (typeof opts === 'string') {
      opts = {
        host: opts
      };
    }

    const config = Object.assign({
      json: true,
      ssl: true,
      xrd: true
    }, opts);
    const scheme = config.ssl ? 'https://' : 'http://';
    return promiseAny([nativeFetch(`${scheme}${config.host}/.well-known/host-meta.json`).then(res => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (!res.ok) {
        throw new Error('could-not-fetch-json');
      }

      return res.json();
    })), nativeFetch(`${scheme}${config.host}/.well-known/host-meta`).then(res => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (!res.ok) {
        throw new Error('could-not-fetch-xml');
      }

      const data = yield res.text();
      const xml = parse$1(data);

      if (xml) {
        return registry.import(xml);
      }
    }))]);
  });
}

function HostMeta(client, stanzas) {
  client.discoverBindings = server => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      const data = yield getHostMeta(stanzas, server);
      const results = {
        bosh: [],
        websocket: []
      };
      const links = data.links || [];

      for (const link of links) {
        if (link.href && link.rel === NS_ALT_CONNECTIONS_WEBSOCKET) {
          results.websocket.push(link.href);
        }

        if (link.href && link.rel === NS_ALT_CONNECTIONS_XBOSH) {
          results.bosh.push(link.href);
        }
      }

      return results;
    } catch (err) {
      return {};
    }
  });
} // ====================================================================
// Import SDP to Intermediary
// ====================================================================


function importFromSDP(sdp) {
  const mediaSections = (0, _sdp.getMediaSections)(sdp);
  const sessionPart = (0, _sdp.getDescription)(sdp);
  const session = {
    groups: [],
    media: []
  };

  if ((0, _sdp.matchPrefix)(sessionPart, 'a=ice-lite').length > 0) {
    session.iceLite = true;
  }

  for (const groupLine of (0, _sdp.matchPrefix)(sessionPart, 'a=group:')) {
    const parts = groupLine.split(' ');
    const semantics = parts.shift().substr(8);
    session.groups.push({
      mids: parts,
      semantics
    });
  }

  for (const mediaSection of mediaSections) {
    const kind = (0, _sdp.getKind)(mediaSection);
    const isRejected$1 = (0, _sdp.isRejected)(mediaSection);
    const mLine = (0, _sdp.parseMLine)(mediaSection);
    const media = {
      direction: (0, _sdp.getDirection)(mediaSection, sessionPart),
      kind,
      mid: (0, _sdp.getMid)(mediaSection),
      protocol: mLine.protocol // TODO: what about end-of-candidates?

    };

    if (!isRejected$1) {
      media.iceParameters = (0, _sdp.getIceParameters)(mediaSection, sessionPart);
      media.dtlsParameters = (0, _sdp.getDtlsParameters)(mediaSection, sessionPart);
      media.setup = (0, _sdp.matchPrefix)(mediaSection, 'a=setup:')[0].substr(8);

      if (session.iceLite) {
        media.iceParameters.iceLite = true;
      }
    }

    if (kind === 'audio' || kind === 'video') {
      media.rtpParameters = (0, _sdp.parseRtpParameters)(mediaSection);
      media.rtpEncodingParameters = (0, _sdp.parseRtpEncodingParameters)(mediaSection);
      media.rtcpParameters = (0, _sdp.parseRtcpParameters)(mediaSection);
      const msid = (0, _sdp.parseMsid)(mediaSection);
      media.streams = msid ? [msid] : [];
    } else if (kind === 'application') {
      media.sctp = (0, _sdp.parseSctpDescription)(mediaSection);
    }

    media.candidates = (0, _sdp.matchPrefix)(mediaSection, 'a=candidate:').map(_sdp.parseCandidate);
    session.media.push(media);
  }

  return session;
} // ====================================================================
// Export Intermediary to SDP
// ====================================================================


function exportToSDP(session) {
  const output = [];
  output.push((0, _sdp.writeSessionBoilerplate)(session.sessionId, session.sessionVersion), 'a=msid-semantic:WMS *\r\n');

  if (session.iceLite || session.media.filter(m => m.iceParameters && m.iceParameters.iceLite).length > 0) {
    output.push('a=ice-lite\r\n');
  }

  for (const group of session.groups || []) {
    output.push(`a=group:${group.semantics} ${group.mids.join(' ')}\r\n`);
  }

  for (const media of session.media || []) {
    const isRejected = !(media.iceParameters && media.dtlsParameters);

    if (media.kind === 'application' && media.sctp) {
      output.push((0, _sdp.writeSctpDescription)(media, media.sctp));
    } else if (media.rtpParameters) {
      let mline = (0, _sdp.writeRtpDescription)(media.kind, media.rtpParameters);

      if (isRejected) {
        mline = mline.replace(`m=${media.kind} 9 `, `m=${media.kind} 0 `);
      }

      output.push(mline);
      output.push(`a=${media.direction || 'sendrecv'}\r\n`);

      for (const stream of media.streams || []) {
        output.push(`a=msid:${stream.stream} ${stream.track}\r\n`);
      }

      if (media.rtcpParameters) {
        output.push((0, _sdp.writeRtcpParameters)(media.rtcpParameters));

        if (media.rtcpParameters.cname) {
          if (media.rtpEncodingParameters && media.rtpEncodingParameters[0].rtx) {
            const params = media.rtpEncodingParameters[0];
            output.push(`a=ssrc-group:FID ${params.ssrc} ${params.rtx.ssrc}\r\n`);
            output.push(`a=ssrc:${params.rtx.ssrc} cname:${media.rtcpParameters.cname}\r\n`);
          }
        }
      }
    }

    if (media.mid !== undefined) {
      output.push(`a=mid:${media.mid}\r\n`);
    }

    if (media.iceParameters) {
      output.push((0, _sdp.writeIceParameters)({
        // Ignoring iceLite, since we already output ice-lite at session level
        usernameFragment: media.iceParameters.usernameFragment,
        password: media.iceParameters.password
      }));
    }

    if (media.dtlsParameters && media.setup) {
      output.push((0, _sdp.writeDtlsParameters)(media.dtlsParameters, media.setup));
    }

    if (media.candidates && media.candidates.length) {
      for (const candidate of media.candidates) {
        output.push(`a=${(0, _sdp.writeCandidate)(candidate)}\r\n`);
      }
    }
  }

  return output.join('');
}

function convertIntermediateToApplication(media, role) {
  const rtp = media.rtpParameters;
  const rtcp = media.rtcpParameters || {};
  const encodingParameters = media.rtpEncodingParameters || [];
  let hasSSRC = false;

  if (encodingParameters && encodingParameters.length) {
    hasSSRC = !!encodingParameters[0].ssrc; // !== false ???
  }

  const application = {
    applicationType: NS_JINGLE_RTP_1,
    codecs: [],
    headerExtensions: [],
    media: media.kind,
    rtcpMux: rtcp.mux,
    rtcpReducedSize: rtcp.reducedSize,
    sourceGroups: [],
    sources: [],
    ssrc: hasSSRC ? encodingParameters[0].ssrc.toString() : undefined,
    streams: []
  };

  for (const ext of rtp.headerExtensions || []) {
    const header = {
      id: ext.id,
      uri: ext.uri
    };

    if (ext.direction && ext.direction !== 'sendrecv') {
      header.senders = directionToSenders(role, ext.direction);
    }

    application.headerExtensions.push(header);
  }

  if (rtcp.ssrc && rtcp.cname) {
    application.sources = [{
      parameters: {
        cname: rtcp.cname
      },
      ssrc: rtcp.ssrc.toString()
    }];
  }

  if (hasSSRC && encodingParameters[0] && encodingParameters[0].rtx) {
    application.sourceGroups = [{
      semantics: 'FID',
      sources: [encodingParameters[0].ssrc.toString(), encodingParameters[0].rtx.ssrc.toString()]
    }];
  }

  for (const stream of media.streams || []) {
    application.streams.push({
      id: stream.stream,
      track: stream.track
    });
  }

  for (const codec of rtp.codecs || []) {
    const payload = {
      channels: codec.channels,
      clockRate: codec.clockRate,
      id: codec.payloadType.toString(),
      name: codec.name,
      parameters: codec.parameters,
      rtcpFeedback: codec.rtcpFeedback
    };

    if (codec.maxptime) {
      payload.maxptime = codec.maxptime;
    }

    if (codec.parameters && codec.parameters.ptime) {
      payload.ptime = parseInt(codec.parameters.ptime, 10);
    }

    application.codecs.push(payload);
  }

  return application;
}

function convertIntermediateToCandidate(candidate) {
  let component;

  if (candidate.component === 'rtp') {
    component = 1;
  } else if (candidate.component === 'rtcp') {
    component = 2;
  } else {
    component = candidate.component;
  }

  return {
    component,
    foundation: candidate.foundation,
    generation: undefined,
    id: undefined,
    ip: candidate.ip,
    network: undefined,
    port: candidate.port,
    priority: candidate.priority,
    protocol: candidate.protocol,
    relatedAddress: candidate.relatedAddress,
    relatedPort: candidate.relatedPort,
    tcpType: candidate.tcpType,
    type: candidate.type
  };
}

function convertCandidateToIntermediate(candidate) {
  return {
    address: candidate.ip,
    component: candidate.component === 1 ? 'rtp' : candidate.component === 2 ? 'rtcp' : candidate.component,
    foundation: candidate.foundation,
    ip: candidate.ip,
    port: candidate.port,
    priority: candidate.priority,
    protocol: candidate.protocol,
    relatedAddress: candidate.relatedAddress,
    relatedPort: candidate.relatedPort,
    tcpType: candidate.tcpType,
    type: candidate.type
  };
}

function convertIntermediateToTransport(media, transportType) {
  const ice = media.iceParameters;
  const dtls = media.dtlsParameters;
  const transport = {
    candidates: [],
    transportType
  };

  if (ice) {
    transport.usernameFragment = ice.usernameFragment;
    transport.password = ice.password;

    if (ice.iceLite) {
      transport.iceLite = true;
    }
  }

  if (dtls) {
    transport.fingerprints = dtls.fingerprints.map(fingerprint => ({
      algorithm: fingerprint.algorithm,
      setup: media.setup,
      value: fingerprint.value
    }));
  }

  if (media.sctp) {
    transport.sctp = media.sctp;
  }

  for (const candidate of media.candidates || []) {
    transport.candidates.push(convertIntermediateToCandidate(candidate));
  }

  return transport;
}

function convertIntermediateToRequest(session, role, transportType) {
  return {
    contents: session.media.map(media => {
      const isRTP = media.kind === 'audio' || media.kind === 'video';
      return {
        application: isRTP ? convertIntermediateToApplication(media, role) : {
          applicationType: 'datachannel',
          protocol: media.protocol
        },
        creator: JingleSessionRole.Initiator,
        name: media.mid,
        senders: directionToSenders(role, media.direction),
        transport: convertIntermediateToTransport(media, transportType)
      };
    }),
    groups: session.groups ? session.groups.map(group => ({
      contents: group.mids,
      semantics: group.semantics
    })) : []
  };
}

function convertContentToIntermediate(content, role) {
  const application = content.application || {};
  const transport = content.transport;
  const isRTP = application && application.applicationType === NS_JINGLE_RTP_1;
  const media = {
    direction: sendersToDirection(role, content.senders),
    kind: application.media || 'application',
    mid: content.name,
    protocol: isRTP ? 'UDP/TLS/RTP/SAVPF' : 'UDP/DTLS/SCTP'
  };

  if (isRTP) {
    media.rtcpParameters = {
      compound: !application.rtcpReducedSize,
      mux: application.rtcpMux,
      reducedSize: application.rtcpReducedSize
    };

    if (application.sources && application.sources.length) {
      const source = application.sources[0];
      media.rtcpParameters.ssrc = parseInt(source.ssrc, 10);

      if (source.parameters) {
        media.rtcpParameters.cname = source.parameters.cname;
      }
    }

    media.rtpParameters = {
      codecs: [],
      fecMechanisms: [],
      headerExtensions: [],
      rtcp: []
    };

    if (application.streams) {
      media.streams = [];

      for (const stream of application.streams) {
        media.streams.push({
          stream: stream.id,
          track: stream.track
        });
      }
    }

    if (application.ssrc) {
      media.rtpEncodingParameters = [{
        ssrc: parseInt(application.ssrc, 10)
      }];

      if (application.sourceGroups && application.sourceGroups.length) {
        const group = application.sourceGroups[0];
        media.rtpEncodingParameters[0].rtx = {
          // TODO: actually look for a FID one with matching ssrc
          ssrc: parseInt(group.sources[1], 10)
        };
      }
    }

    let hasRED = false;
    let hasULPFEC = false;

    for (const payload of application.codecs || []) {
      const parameters = payload.parameters || {};
      const rtcpFeedback = [];

      for (const fb of payload.rtcpFeedback || []) {
        rtcpFeedback.push({
          parameter: fb.parameter,
          type: fb.type
        });
      }

      if (payload.name === 'red' || payload.name === 'ulpfec') {
        hasRED = hasRED || payload.name === 'red';
        hasULPFEC = hasULPFEC || payload.name === 'ulpfec';
        const fec = payload.name.toUpperCase();

        if (!media.rtpParameters.fecMechanisms.includes(fec)) {
          media.rtpParameters.fecMechanisms.push(fec);
        }
      }

      media.rtpParameters.codecs.push({
        channels: payload.channels,
        clockRate: payload.clockRate,
        name: payload.name,
        numChannels: payload.channels,
        parameters,
        payloadType: parseInt(payload.id, 10),
        rtcpFeedback
      });
    }

    for (const ext of application.headerExtensions || []) {
      media.rtpParameters.headerExtensions.push({
        direction: sendersToDirection(role, ext.senders || 'both'),
        id: ext.id,
        uri: ext.uri
      });
    }
  }

  if (transport) {
    if (transport.usernameFragment && transport.password) {
      media.iceParameters = {
        password: transport.password,
        usernameFragment: transport.usernameFragment
      };

      if (transport.iceLite) {
        media.iceParameters.iceLite = true;
      }
    }

    if (transport.fingerprints && transport.fingerprints.length) {
      media.dtlsParameters = {
        fingerprints: [],
        role: 'auto'
      };

      for (const fingerprint of transport.fingerprints) {
        media.dtlsParameters.fingerprints.push({
          algorithm: fingerprint.algorithm,
          value: fingerprint.value
        });
      }

      if (transport.sctp) {
        media.sctp = transport.sctp;
      }

      media.setup = transport.fingerprints[0].setup;
    }

    media.candidates = (transport.candidates || []).map(convertCandidateToIntermediate);
  }

  return media;
}

function convertRequestToIntermediate(jingle, role) {
  const session = {
    groups: [],
    media: []
  };

  for (const group of jingle.groups || []) {
    session.groups.push({
      mids: group.contents,
      semantics: group.semantics
    });
  }

  for (const content of jingle.contents || []) {
    session.media.push(convertContentToIntermediate(content, role));
  }

  return session;
}

const badRequest = {
  condition: StanzaErrorCondition.BadRequest
};
const unsupportedInfo = {
  condition: StanzaErrorCondition.FeatureNotImplemented,
  jingleError: JingleErrorCondition.UnsupportedInfo,
  type: 'modify'
};

class JingleSession {
  constructor(opts) {
    this.parent = opts.parent;
    this.sid = opts.sid || uuid();
    this.peerID = opts.peerID;
    this.role = opts.initiator ? JingleSessionRole.Initiator : JingleSessionRole.Responder;
    this._sessionState = 'starting';
    this._connectionState = 'starting'; // We track the intial pending description types in case
    // of the need for a tie-breaker.

    this.pendingApplicationTypes = opts.applicationTypes || [];
    this.pendingAction = undefined; // Here is where we'll ensure that all actions are processed
    // in order, even if a particular action requires async handling.

    this.processingQueue = (0, _async.priorityQueue)((task, next) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.state === 'ended') {
        // Don't process anything once the session has been ended
        if (task.type === 'local' && task.reject) {
          task.reject(new Error('Session ended'));
        }

        if (next) {
          next();
        }

        return;
      }

      if (task.type === 'local') {
        this._log('debug', 'Processing local action:', task.name);

        try {
          const res = yield task.handler();
          task.resolve(res);
        } catch (err) {
          task.reject(err);
        }

        if (next) {
          next();
        }

        return;
      }

      const {
        action,
        changes,
        cb
      } = task;

      this._log('debug', 'Processing remote action:', action);

      return new Promise(resolve => {
        const done = (err, result) => {
          cb(err, result);

          if (next) {
            next();
          }

          resolve();
        };

        switch (action) {
          case JingleAction.ContentAccept:
            return this.onContentAccept(changes, done);

          case JingleAction.ContentAdd:
            return this.onContentAdd(changes, done);

          case JingleAction.ContentModify:
            return this.onContentModify(changes, done);

          case JingleAction.ContentReject:
            return this.onContentReject(changes, done);

          case JingleAction.ContentRemove:
            return this.onContentRemove(changes, done);

          case JingleAction.DescriptionInfo:
            return this.onDescriptionInfo(changes, done);

          case JingleAction.SecurityInfo:
            return this.onSecurityInfo(changes, done);

          case JingleAction.SessionAccept:
            return this.onSessionAccept(changes, done);

          case JingleAction.SessionInfo:
            return this.onSessionInfo(changes, done);

          case JingleAction.SessionInitiate:
            return this.onSessionInitiate(changes, done);

          case JingleAction.SessionTerminate:
            return this.onSessionTerminate(changes, done);

          case JingleAction.TransportAccept:
            return this.onTransportAccept(changes, done);

          case JingleAction.TransportInfo:
            return this.onTransportInfo(changes, done);

          case JingleAction.TransportReject:
            return this.onTransportReject(changes, done);

          case JingleAction.TransportReplace:
            return this.onTransportReplace(changes, done);

          default:
            this._log('error', 'Invalid or unsupported action: ' + action);

            done({
              condition: StanzaErrorCondition.BadRequest
            });
        }
      });
    }), 1);
  }

  get isInitiator() {
    return this.role === JingleSessionRole.Initiator;
  }

  get peerRole() {
    return this.isInitiator ? JingleSessionRole.Responder : JingleSessionRole.Initiator;
  }

  get state() {
    return this._sessionState;
  }

  set state(value) {
    if (value !== this._sessionState) {
      this._log('info', 'Changing session state to: ' + value);

      this._sessionState = value;

      if (this.parent) {
        this.parent.emit('sessionState', this, value);
      }
    }
  }

  get connectionState() {
    return this._connectionState;
  }

  set connectionState(value) {
    if (value !== this._connectionState) {
      this._log('info', 'Changing connection state to: ' + value);

      this._connectionState = value;

      if (this.parent) {
        this.parent.emit('connectionState', this, value);
      }
    }
  }

  send(action, data) {
    data = data || {};
    data.sid = this.sid;
    data.action = action;
    const requirePending = new Set([JingleAction.ContentAccept, JingleAction.ContentAdd, JingleAction.ContentModify, JingleAction.ContentReject, JingleAction.ContentRemove, JingleAction.SessionAccept, JingleAction.SessionInitiate, JingleAction.TransportAccept, JingleAction.TransportReject, JingleAction.TransportReplace]);

    if (requirePending.has(action)) {
      this.pendingAction = action;
    } else {
      this.pendingAction = undefined;
    }

    this.parent.signal(this, {
      id: uuid(),
      jingle: data,
      to: this.peerID,
      type: 'set'
    });
  }

  processLocal(name, handler) {
    return new Promise((resolve, reject) => {
      this.processingQueue.push({
        handler,
        name,
        reject,
        resolve,
        type: 'local'
      }, 1 // Process local requests first
      );
    });
  }

  process(action, changes, cb) {
    this.processingQueue.push({
      action,
      cb,
      changes,
      type: 'remote'
    }, 2 // Process remote requests second
    );
  }

  start(_opts, _next) {
    this._log('error', 'Can not start base sessions');

    this.end('unsupported-applications', true);
  }

  accept(_opts, _next) {
    this._log('error', 'Can not accept base sessions');

    this.end('unsupported-applications');
  }

  cancel() {
    this.end('cancel');
  }

  decline() {
    this.end('decline');
  }

  end(reason = 'success', silent = false) {
    this.state = 'ended';
    this.processingQueue.kill();

    if (typeof reason === 'string') {
      reason = {
        condition: reason
      };
    }

    if (!silent) {
      this.send('session-terminate', {
        reason
      });
    }

    this.parent.emit('terminated', this, reason);
    this.parent.forgetSession(this);
  }

  _log(level, message, ...data) {
    if (this.parent) {
      message = this.sid + ': ' + message;
      this.parent.emit('log', level, message, ...data);
      this.parent.emit('log:' + level, message, ...data);
    }
  }

  onSessionInitiate(changes, cb) {
    cb();
  }

  onSessionAccept(changes, cb) {
    cb();
  }

  onSessionTerminate(changes, cb) {
    this.end(changes.reason, true);
    cb();
  } // It is mandatory to reply to a session-info action with
  // an unsupported-info error if the info isn't recognized.
  //
  // However, a session-info action with no associated payload
  // is acceptable (works like a ping).


  onSessionInfo(changes, cb) {
    if (!changes.info) {
      cb();
    } else {
      cb(unsupportedInfo);
    }
  } // It is mandatory to reply to a security-info action with
  // an unsupported-info error if the info isn't recognized.


  onSecurityInfo(changes, cb) {
    cb(unsupportedInfo);
  } // It is mandatory to reply to a description-info action with
  // an unsupported-info error if the info isn't recognized.


  onDescriptionInfo(changes, cb) {
    cb(unsupportedInfo);
  } // It is mandatory to reply to a transport-info action with
  // an unsupported-info error if the info isn't recognized.


  onTransportInfo(changes, cb) {
    cb(unsupportedInfo);
  } // It is mandatory to reply to a content-add action with either
  // a content-accept or content-reject.


  onContentAdd(changes, cb) {
    // Allow ack for the content-add to be sent.
    cb();
    this.send(JingleAction.ContentReject, {
      reason: {
        condition: JingleReasonCondition.FailedApplication,
        text: 'content-add is not supported'
      }
    });
  }

  onContentAccept(changes, cb) {
    cb(badRequest);
  }

  onContentReject(changes, cb) {
    cb(badRequest);
  }

  onContentModify(changes, cb) {
    cb(badRequest);
  }

  onContentRemove(changes, cb) {
    cb(badRequest);
  } // It is mandatory to reply to a transport-add action with either
  // a transport-accept or transport-reject.


  onTransportReplace(changes, cb) {
    // Allow ack for the transport-replace be sent.
    cb();
    this.send(JingleAction.TransportReject, {
      reason: {
        condition: JingleReasonCondition.FailedTransport,
        text: 'transport-replace is not supported'
      }
    });
  }

  onTransportAccept(changes, cb) {
    cb(badRequest);
  }

  onTransportReject(changes, cb) {
    cb(badRequest);
  }

}

class ICESession extends JingleSession {
  constructor(opts) {
    super(opts);
    this.bitrateLimit = 0;
    this.candidateBuffer = [];
    this.transportType = NS_JINGLE_ICE_UDP_1;
    this.restartingIce = false;
    this.usingRelay = false;
    this.maxRelayBandwidth = opts.maxRelayBandwidth;
    this.pc = this.parent.createPeerConnection(this, Object.assign(Object.assign({}, opts.config), {
      iceServers: opts.iceServers
    }));

    this.pc.oniceconnectionstatechange = () => {
      this.onIceStateChange();
    };

    this.pc.onicecandidate = e => {
      if (e.candidate) {
        this.onIceCandidate(e);
      } else {
        this.onIceEndOfCandidates();
      }
    };

    this.restrictRelayBandwidth();
  }

  end(reason = 'success', silent = false) {
    this.pc.close();
    super.end(reason, silent);
  }
  /* actually do an ice restart */


  restartIce() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      // only initiators do an ice-restart to avoid conflicts.
      if (!this.isInitiator) {
        return;
      }

      if (this._maybeRestartingIce !== undefined) {
        clearTimeout(this._maybeRestartingIce);
      }

      this.restartingIce = true;

      try {
        yield this.processLocal('restart-ice', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const offer = yield this.pc.createOffer({
            iceRestart: true
          }); // extract new ufrag / pwd, send transport-info with just that.

          const json = importFromSDP(offer.sdp);
          this.send(JingleAction.TransportInfo, {
            contents: json.media.map(media => ({
              creator: JingleSessionRole.Initiator,
              name: media.mid,
              transport: convertIntermediateToTransport(media, this.transportType)
            })),
            sid: this.sid
          });
          yield this.pc.setLocalDescription(offer);
        }));
      } catch (err) {
        this._log('error', 'Could not create WebRTC offer', err);

        this.end(JingleReasonCondition.FailedTransport, true);
      }
    });
  } // set the maximum bitrate. Only supported in Chrome and Firefox right now.


  setMaximumBitrate(maximumBitrate) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.maximumBitrate) {
        // potentially take into account bandwidth restrictions due to using TURN.
        maximumBitrate = Math.min(maximumBitrate, this.maximumBitrate);
      }

      this.currentBitrate = maximumBitrate; // changes the maximum bandwidth using RTCRtpSender.setParameters.

      const sender = this.pc.getSenders().find(s => !!s.track && s.track.kind === 'video');

      if (!sender || !sender.getParameters) {
        return;
      }

      try {
        yield this.processLocal('set-bitrate', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const parameters = sender.getParameters();

          if (!parameters.encodings || !parameters.encodings.length) {
            parameters.encodings = [{}];
          }

          if (maximumBitrate === 0) {
            delete parameters.encodings[0].maxBitrate;
          } else {
            parameters.encodings[0].maxBitrate = maximumBitrate;
          }

          yield sender.setParameters(parameters);
        }));
      } catch (err) {
        this._log('error', 'Set maximumBitrate failed', err);
      }
    });
  } // ----------------------------------------------------------------
  // Jingle action handers
  // ----------------------------------------------------------------


  onTransportInfo(changes, cb) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (changes.contents && changes.contents[0] && changes.contents[0].transport.gatheringComplete) {
        const candidate = {
          sdpMid: changes.contents[0].name,
          candidate: ''
        };

        try {
          if (this.pc.signalingState === 'stable') {
            yield this.pc.addIceCandidate(candidate);
          } else {
            this.candidateBuffer.push(candidate);
          }
        } catch (err) {
          this._log('debug', 'Could not add null end-of-candidate');
        } finally {
          cb();
        }

        return;
      } // detect an ice restart.


      if (this.pc.remoteDescription) {
        const remoteDescription = this.pc.remoteDescription;
        const remoteJSON = importFromSDP(remoteDescription.sdp);
        const remoteMedia = remoteJSON.media.find(m => m.mid === changes.contents[0].name);
        const currentUsernameFragment = remoteMedia.iceParameters.usernameFragment;
        const remoteUsernameFragment = changes.contents[0].transport.usernameFragment;

        if (remoteUsernameFragment && currentUsernameFragment !== remoteUsernameFragment) {
          for (const [idx, content] of changes.contents.entries()) {
            const transport = content.transport;
            remoteJSON.media[idx].iceParameters = {
              password: transport.password,
              usernameFragment: transport.usernameFragment
            };
            remoteJSON.media[idx].candidates = [];
          }

          try {
            yield this.pc.setRemoteDescription({
              type: remoteDescription.type,
              sdp: exportToSDP(remoteJSON)
            });
            yield this.processBufferedCandidates();

            if (remoteDescription.type === 'offer') {
              const answer = yield this.pc.createAnswer();
              yield this.pc.setLocalDescription(answer);
              const json = importFromSDP(answer.sdp);
              this.send(JingleAction.TransportInfo, {
                contents: json.media.map(media => ({
                  creator: JingleSessionRole.Initiator,
                  name: media.mid,
                  transport: convertIntermediateToTransport(media, this.transportType)
                })),
                sid: this.sid
              });
            } else {
              this.restartingIce = false;
            }
          } catch (err) {
            this._log('error', 'Could not do remote ICE restart', err);

            cb(err);
            this.end(JingleReasonCondition.FailedTransport);
            return;
          }
        }
      }

      const all = (changes.contents || []).map(content => {
        const sdpMid = content.name;
        const results = (content.transport.candidates || []).map(json => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const candidate = (0, _sdp.writeCandidate)(convertCandidateToIntermediate(json));

          if (this.pc.remoteDescription && this.pc.signalingState === 'stable') {
            try {
              yield this.pc.addIceCandidate({
                sdpMid,
                candidate
              });
            } catch (err) {
              this._log('error', 'Could not add ICE candidate', err);
            }
          } else {
            this.candidateBuffer.push({
              sdpMid,
              candidate
            });
          }
        }));
        return Promise.all(results);
      });

      try {
        yield Promise.all(all);
        cb();
      } catch (err) {
        this._log('error', `Could not process transport-info: ${err}`);

        cb(err);
      }
    });
  }

  onSessionAccept(changes, cb) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.state = 'active';
      const json = convertRequestToIntermediate(changes, this.peerRole);
      const sdp = exportToSDP(json);

      try {
        yield this.pc.setRemoteDescription({
          type: 'answer',
          sdp
        });
        yield this.processBufferedCandidates();
        this.parent.emit('accepted', this, undefined);
        cb();
      } catch (err) {
        this._log('error', `Could not process WebRTC answer: ${err}`);

        cb({
          condition: 'general-error'
        });
      }
    });
  }

  onSessionTerminate(changes, cb) {
    this._log('info', 'Terminating session');

    this.pc.close();
    super.end(changes.reason, true);
    cb();
  } // ----------------------------------------------------------------
  // ICE action handers
  // ----------------------------------------------------------------


  onIceCandidate(e) {
    if (!e.candidate || !e.candidate.candidate) {
      return;
    }

    const candidate = (0, _sdp.parseCandidate)(e.candidate.candidate);
    const jingle = {
      contents: [{
        creator: JingleSessionRole.Initiator,
        name: e.candidate.sdpMid,
        transport: {
          candidates: [convertIntermediateToCandidate(candidate)],
          transportType: this.transportType,
          usernameFragment: candidate.usernameFragment
        }
      }]
    };

    this._log('info', 'Discovered new ICE candidate', jingle);

    this.send(JingleAction.TransportInfo, jingle);
  }

  onIceEndOfCandidates() {
    this._log('info', 'ICE end of candidates');

    const json = importFromSDP(this.pc.localDescription.sdp);
    const firstMedia = json.media[0]; // signal end-of-candidates with our first media mid/ufrag

    this.send(JingleAction.TransportInfo, {
      contents: [{
        creator: JingleSessionRole.Initiator,
        name: firstMedia.mid,
        transport: {
          gatheringComplete: true,
          transportType: this.transportType,
          usernameFragment: firstMedia.iceParameters.usernameFragment
        }
      }]
    });
  }

  onIceStateChange() {
    switch (this.pc.iceConnectionState) {
      case 'checking':
        this.connectionState = 'connecting';
        break;

      case 'completed':
      case 'connected':
        this.connectionState = 'connected';
        break;

      case 'disconnected':
        if (this.pc.signalingState === 'stable') {
          this.connectionState = 'interrupted';
        } else {
          this.connectionState = 'disconnected';
        }

        if (this.restartingIce) {
          this.end(JingleReasonCondition.FailedTransport);
          return;
        }

        this.maybeRestartIce();
        break;

      case 'failed':
        if (this.connectionState === 'failed' || this.restartingIce) {
          this.end(JingleReasonCondition.FailedTransport);
          return;
        }

        this.connectionState = 'failed';
        this.restartIce();
        break;

      case 'closed':
        this.connectionState = 'disconnected';

        if (this.restartingIce) {
          this.end(JingleReasonCondition.FailedTransport);
        } else {
          this.end();
        }

        break;
    }
  }

  processBufferedCandidates() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      for (const candidate of this.candidateBuffer) {
        try {
          yield this.pc.addIceCandidate(candidate);
        } catch (err) {
          this._log('error', 'Could not add ICE candidate', err);
        }
      }

      this.candidateBuffer = [];
    });
  }
  /* when using TURN, we might want to restrict the bandwidth
   * to the value specified by MAX_RELAY_BANDWIDTH
   * in order to prevent sending excessive traffic through
   * the TURN server.
   */


  restrictRelayBandwidth() {
    this.pc.addEventListener('iceconnectionstatechange', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.pc.iceConnectionState !== 'completed' && this.pc.iceConnectionState !== 'connected') {
        return;
      }

      const stats = yield this.pc.getStats();
      let activeCandidatePair;
      stats.forEach(report => {
        if (report.type === 'transport') {
          activeCandidatePair = stats.get(report.selectedCandidatePairId);
        }
      }); // Fallback for Firefox.

      if (!activeCandidatePair) {
        stats.forEach(report => {
          if (report.type === 'candidate-pair' && report.selected) {
            activeCandidatePair = report;
          }
        });
      }

      if (!activeCandidatePair) {
        return;
      }

      let isRelay = false;
      let localCandidateType = '';
      let remoteCandidateType = '';

      if (activeCandidatePair.remoteCandidateId) {
        const remoteCandidate = stats.get(activeCandidatePair.remoteCandidateId);

        if (remoteCandidate) {
          remoteCandidateType = remoteCandidate.candidateType;
        }
      }

      if (activeCandidatePair.localCandidateId) {
        const localCandidate = stats.get(activeCandidatePair.localCandidateId);

        if (localCandidate) {
          localCandidateType = localCandidate.candidateType;
        }
      }

      if (localCandidateType === 'relay' || remoteCandidateType === 'relay') {
        isRelay = true;
      }

      this.usingRelay = isRelay;
      this.parent.emit('iceConnectionType', this, {
        localCandidateType,
        relayed: isRelay,
        remoteCandidateType
      });

      if (isRelay) {
        this.maximumBitrate = this.maxRelayBandwidth;

        if (this.currentBitrate) {
          this.setMaximumBitrate(Math.min(this.currentBitrate, this.maximumBitrate));
        } else {
          this.setMaximumBitrate(this.maximumBitrate);
        }
      }
    }));
  }
  /* determine whether an ICE restart is in order
   * when transitioning to disconnected. Strategy is
   * 'wait 2 seconds for things to repair themselves'
   * 'maybe check if bytes are sent/received' by comparing
   *   getStats measurements
   */


  maybeRestartIce() {
    // only initiators do an ice-restart to avoid conflicts.
    if (!this.isInitiator) {
      return;
    }

    if (this._maybeRestartingIce !== undefined) {
      clearTimeout(this._maybeRestartingIce);
    }

    this._maybeRestartingIce = setTimeout(() => {
      this._maybeRestartingIce = undefined;

      if (this.pc.iceConnectionState === 'disconnected') {
        this.restartIce();
      }
    }, 2000);
  }

}

class Sender extends _events.EventEmitter {
  constructor(opts = {}) {
    super();
    this.config = Object.assign({
      chunkSize: 16384,
      hash: 'sha-1'
    }, opts);
    this.file = undefined;
    this.channel = undefined;
    this.hash = createHash(this.config.hash);
  }

  send(file, channel) {
    if (this.file && this.channel) {
      return;
    }

    this.file = file;
    this.channel = channel;
    this.channel.binaryType = 'arraybuffer';
    const fileReader = new FileReader();
    let offset = 0;
    let pendingRead = false;

    const sliceFile = () => {
      if (pendingRead || offset >= file.size) {
        return;
      }

      pendingRead = true;
      const slice = file.slice(offset, offset + this.config.chunkSize);
      fileReader.readAsArrayBuffer(slice);
    };

    channel.bufferedAmountLowThreshold = 8 * this.config.chunkSize;

    channel.onbufferedamountlow = () => {
      sliceFile();
    };

    fileReader.addEventListener('load', event => {
      const data = event.target.result;
      pendingRead = false;
      offset += data.byteLength;
      this.channel.send(data);
      this.hash.update(new Uint8Array(data));
      this.emit('progress', offset, file.size, data);

      if (offset < file.size) {
        if (this.channel.bufferedAmount <= this.channel.bufferedAmountLowThreshold) {
          sliceFile();
        } // Otherwise wait for bufferedamountlow event to trigger reading more data

      } else {
        this.emit('progress', file.size, file.size, null);
        this.emit('sentFile', {
          algorithm: this.config.hash,
          name: file.name,
          size: file.size,
          value: this.hash.digest()
        });
      }
    });
    sliceFile();
  }

}

class Receiver extends _events.EventEmitter {
  constructor(opts = {}) {
    super();
    this.config = Object.assign({
      hash: 'sha-1'
    }, opts);
    this.receiveBuffer = [];
    this.received = 0;
    this.channel = undefined;
    this.hash = createHash(this.config.hash);
  }

  receive(metadata, channel) {
    this.metadata = metadata;
    this.channel = channel;
    this.channel.binaryType = 'arraybuffer';

    this.channel.onmessage = e => {
      const len = e.data.byteLength;
      this.received += len;
      this.receiveBuffer.push(e.data);

      if (e.data) {
        this.hash.update(new Uint8Array(e.data));
      }

      this.emit('progress', this.received, this.metadata.size, e.data);

      if (this.received === this.metadata.size) {
        this.metadata.actualhash = this.hash.digest('hex');
        this.emit('receivedFile', new Blob(this.receiveBuffer), this.metadata);
        this.receiveBuffer = [];
      } else if (this.received > this.metadata.size) {
        // FIXME
        console.error('received more than expected, discarding...');
        this.receiveBuffer = []; // just discard...
      }
    };
  }

}

class FileTransferSession extends ICESession {
  constructor(opts) {
    super(opts);
    this.sender = undefined;
    this.receiver = undefined;
    this.file = undefined;
  }

  start(file, next) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      next = next || (() => undefined);

      if (!file || typeof file === 'function') {
        throw new Error('File object required');
      }

      this.state = 'pending';
      this.role = 'initiator';
      this.file = file;
      this.sender = new Sender();
      this.sender.on('progress', (sent, size) => {
        this._log('info', 'Send progress ' + sent + '/' + size);
      });
      this.sender.on('sentFile', meta => {
        this._log('info', 'Sent file', meta.name);

        this.send(JingleAction.SessionInfo, {
          info: {
            creator: JingleSessionRole.Initiator,
            file: {
              hashes: [{
                algorithm: meta.algorithm,
                value: meta.value
              }]
            },
            infoType: JINGLE_INFO_CHECKSUM_5,
            name: this.contentName
          }
        });
        this.parent.emit('sentFile', this, meta);
      });
      this.channel = this.pc.createDataChannel('filetransfer', {
        ordered: true
      });

      this.channel.onopen = () => {
        this.sender.send(this.file, this.channel);
      };

      try {
        yield this.processLocal(JingleAction.SessionInitiate, () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const offer = yield this.pc.createOffer({
            offerToReceiveAudio: false,
            offerToReceiveVideo: false
          });
          const json = importFromSDP(offer.sdp);
          const jingle = convertIntermediateToRequest(json, this.role, this.transportType);
          this.contentName = jingle.contents[0].name;
          jingle.sid = this.sid;
          jingle.action = JingleAction.SessionInitiate;
          jingle.contents[0].application = {
            applicationType: NS_JINGLE_FILE_TRANSFER_5,
            file: {
              date: file.lastModified ? new Date(file.lastModified) : undefined,
              hashesUsed: [{
                algorithm: 'sha-1'
              }],
              name: file.name,
              size: file.size
            }
          };
          this.send('session-initiate', jingle);
          yield this.pc.setLocalDescription(offer);
        }));
        next();
      } catch (err) {
        this._log('error', 'Could not create WebRTC offer', err);

        return this.end('failed-application', true);
      }
    });
  }

  accept(next) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Accepted incoming session');

      this.role = 'responder';
      this.state = 'active';

      next = next || (() => undefined);

      try {
        yield this.processLocal(JingleAction.SessionAccept, () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const answer = yield this.pc.createAnswer();
          const json = importFromSDP(answer.sdp);
          const jingle = convertIntermediateToRequest(json, this.role, this.transportType);
          jingle.sid = this.sid;
          jingle.action = 'session-accept';

          for (const content of jingle.contents) {
            content.creator = 'initiator';
          }

          this.contentName = jingle.contents[0].name;
          this.send('session-accept', jingle);
          yield this.pc.setLocalDescription(answer);
          yield this.processBufferedCandidates();
        }));
        next();
      } catch (err) {
        this._log('error', 'Could not create WebRTC answer', err);

        this.end('failed-application');
      }
    });
  }

  onSessionInitiate(changes, cb) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Initiating incoming session');

      this.role = 'responder';
      this.state = 'pending';
      this.transportType = changes.contents[0].transport.transportType;
      const json = convertRequestToIntermediate(changes, this.peerRole);
      const sdp = exportToSDP(json);
      const desc = changes.contents[0].application;
      const hashes = desc.file.hashesUsed ? desc.file.hashesUsed : desc.file.hashes || [];
      this.receiver = new Receiver({
        hash: hashes[0] && hashes[0].algorithm
      });
      this.receiver.on('progress', (received, size) => {
        this._log('info', 'Receive progress ' + received + '/' + size);
      });
      this.receiver.on('receivedFile', file => {
        this.receivedFile = file;

        this._maybeReceivedFile();
      });
      this.receiver.metadata = desc.file;
      this.pc.addEventListener('datachannel', e => {
        this.channel = e.channel;
        this.receiver.receive(this.receiver.metadata, e.channel);
      });

      try {
        yield this.pc.setRemoteDescription({
          type: 'offer',
          sdp
        });
        yield this.processBufferedCandidates();
        cb();
      } catch (err) {
        this._log('error', 'Could not create WebRTC answer', err);

        cb({
          condition: 'general-error'
        });
      }
    });
  }

  onSessionInfo(changes, cb) {
    const info = changes.info;

    if (!info || !info.file || !info.file.hashes) {
      return;
    }

    this.receiver.metadata.hashes = info.file.hashes;

    if (this.receiver.metadata.actualhash) {
      this._maybeReceivedFile();
    }

    cb();
  }

  _maybeReceivedFile() {
    if (!this.receiver.metadata.hashes || !this.receiver.metadata.hashes.length) {
      // unknown hash, file transfer not completed
      return;
    }

    for (const hash of this.receiver.metadata.hashes || []) {
      if (hash.value && hash.value.toString('hex') === this.receiver.metadata.actualhash) {
        this._log('info', 'File hash matches');

        this.parent.emit('receivedFile', this, this.receivedFile, this.receiver.metadata);
        this.end('success');
        return;
      }
    }

    this._log('error', 'File hash does not match');

    this.end('media-error');
  }

}

function applyStreamsCompatibility(content) {
  const application = content.application;
  /* signal .streams as a=ssrc: msid */

  if (application.streams && application.streams.length && application.sources && application.sources.length) {
    const msid = application.streams[0];
    application.sources[0].parameters.msid = `${msid.id} ${msid.track}`;

    if (application.sourceGroups && application.sourceGroups.length > 0) {
      application.sources.push({
        parameters: {
          cname: application.sources[0].parameters.cname,
          msid: `${msid.id} ${msid.track}`
        },
        ssrc: application.sourceGroups[0].sources[1]
      });
    }
  }
}

class MediaSession extends ICESession {
  constructor(opts) {
    super(opts);
    this.includesAudio = false;
    this.includesVideo = false;
    this._ringing = false;
    this.pc.addEventListener('track', e => {
      this.onAddTrack(e.track, e.streams[0]);
    });

    if (opts.stream) {
      for (const track of opts.stream.getTracks()) {
        this.addTrack(track, opts.stream);
      }
    }
  }

  get ringing() {
    return this._ringing;
  }

  set ringing(value) {
    if (value !== this._ringing) {
      this._ringing = value;
    }
  }

  get streams() {
    if (this.pc.signalingState !== 'closed') {
      return this.pc.getRemoteStreams();
    }

    return [];
  } // ----------------------------------------------------------------
  // Session control methods
  // ----------------------------------------------------------------


  start(opts, next) {
    return (0, _tslib.__awaiter)(this, arguments, void 0, function* () {
      this.state = 'pending';

      if (arguments.length === 1 && typeof opts === 'function') {
        next = opts;
        opts = {};
      }

      next = next || (() => undefined);

      opts = opts || {};
      this.role = 'initiator';
      this.offerOptions = opts;

      try {
        yield this.processLocal(JingleAction.SessionInitiate, () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const offer = yield this.pc.createOffer(opts);
          const json = importFromSDP(offer.sdp);
          const jingle = convertIntermediateToRequest(json, this.role, this.transportType);
          jingle.sid = this.sid;
          jingle.action = JingleAction.SessionInitiate;

          for (const content of jingle.contents || []) {
            content.creator = 'initiator';
            applyStreamsCompatibility(content);
          }

          yield this.pc.setLocalDescription(offer);
          this.send('session-initiate', jingle);
        }));
        next();
      } catch (err) {
        this._log('error', 'Could not create WebRTC offer', err);

        this.end('failed-application', true);
      }
    });
  }

  accept(opts, next) {
    return (0, _tslib.__awaiter)(this, arguments, void 0, function* () {
      // support calling with accept(next) or accept(opts, next)
      if (arguments.length === 1 && typeof opts === 'function') {
        next = opts;
        opts = {};
      }

      next = next || (() => undefined);

      opts = opts || {};

      this._log('info', 'Accepted incoming session');

      this.state = 'active';
      this.role = 'responder';

      try {
        yield this.processLocal(JingleAction.SessionAccept, () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          const answer = yield this.pc.createAnswer(opts);
          const json = importFromSDP(answer.sdp);
          const jingle = convertIntermediateToRequest(json, this.role, this.transportType);
          jingle.sid = this.sid;
          jingle.action = JingleAction.SessionAccept;

          for (const content of jingle.contents || []) {
            content.creator = 'initiator';
          }

          yield this.pc.setLocalDescription(answer);
          yield this.processBufferedCandidates();
          this.send('session-accept', jingle);
        }));
        next();
      } catch (err) {
        this._log('error', 'Could not create WebRTC answer', err);

        this.end('failed-application');
      }
    });
  }

  end(reason = 'success', silent = false) {
    for (const receiver of this.pc.getReceivers()) {
      this.onRemoveTrack(receiver.track);
    }

    super.end(reason, silent);
  }

  ring() {
    return this.processLocal('ring', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Ringing on incoming session');

      this.ringing = true;
      this.send(JingleAction.SessionInfo, {
        info: {
          infoType: JINGLE_INFO_RINGING
        }
      });
    }));
  }

  mute(creator, name) {
    return this.processLocal('mute', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Muting', name);

      this.send(JingleAction.SessionInfo, {
        info: {
          creator,
          infoType: JINGLE_INFO_MUTE,
          name
        }
      });
    }));
  }

  unmute(creator, name) {
    return this.processLocal('unmute', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Unmuting', name);

      this.send(JingleAction.SessionInfo, {
        info: {
          creator,
          infoType: JINGLE_INFO_UNMUTE,
          name
        }
      });
    }));
  }

  hold() {
    return this.processLocal('hold', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Placing on hold');

      this.send('session-info', {
        info: {
          infoType: JINGLE_INFO_HOLD
        }
      });
    }));
  }

  resume() {
    return this.processLocal('resume', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Resuming from hold');

      this.send('session-info', {
        info: {
          infoType: JINGLE_INFO_ACTIVE
        }
      });
    }));
  } // ----------------------------------------------------------------
  // Track control methods
  // ----------------------------------------------------------------


  addTrack(track, stream, cb) {
    if (track.kind === 'audio') {
      this.includesAudio = true;
    }

    if (track.kind === 'video') {
      this.includesVideo = true;
    }

    return this.processLocal('addtrack', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.pc.addTrack) {
        this.pc.addTrack(track, stream);
      } else {
        this.pc.addStream(stream);
      }

      if (cb) {
        cb();
      }
    }));
  }

  removeTrack(sender, cb) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      return this.processLocal('removetrack', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
        this.pc.removeTrack(sender);

        if (cb) {
          return cb();
        }
      }));
    });
  } // ----------------------------------------------------------------
  // Track event handlers
  // ----------------------------------------------------------------


  onAddTrack(track, stream) {
    this._log('info', 'Track added');

    this.parent.emit('peerTrackAdded', this, track, stream);
  }

  onRemoveTrack(track) {
    this._log('info', 'Track removed');

    this.parent.emit('peerTrackRemoved', this, track);
  } // ----------------------------------------------------------------
  // Jingle action handers
  // ----------------------------------------------------------------


  onSessionInitiate(changes, cb) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this._log('info', 'Initiating incoming session');

      this.state = 'pending';
      this.role = 'responder';
      this.transportType = changes.contents[0].transport.transportType;
      const json = convertRequestToIntermediate(changes, this.peerRole);

      for (const media of json.media) {
        if (media.kind === 'audio') {
          this.includesAudio = true;
        }

        if (media.kind === 'video') {
          this.includesVideo = true;
        }

        if (!media.streams) {
          media.streams = [{
            stream: 'legacy',
            track: media.kind
          }];
        }
      }

      const sdp = exportToSDP(json);

      try {
        yield this.pc.setRemoteDescription({
          type: 'offer',
          sdp
        });
        yield this.processBufferedCandidates();
        return cb();
      } catch (err) {
        this._log('error', 'Could not create WebRTC answer', err);

        return cb({
          condition: 'general-error'
        });
      }
    });
  }

  onSessionTerminate(changes, cb) {
    for (const receiver of this.pc.getReceivers()) {
      this.onRemoveTrack(receiver.track);
    }

    super.onSessionTerminate(changes, cb);
  }

  onSessionInfo(changes, cb) {
    const info = changes.info || {
      infoType: ''
    };

    switch (info.infoType) {
      case JINGLE_INFO_RINGING:
        this._log('info', 'Outgoing session is ringing');

        this.ringing = true;
        this.parent.emit('ringing', this);
        return cb();

      case JINGLE_INFO_HOLD:
        this._log('info', 'On hold');

        this.parent.emit('hold', this);
        return cb();

      case JINGLE_INFO_UNHOLD:
      case JINGLE_INFO_ACTIVE:
        this._log('info', 'Resuming from hold');

        this.parent.emit('resumed', this);
        return cb();

      case JINGLE_INFO_MUTE:
        this._log('info', 'Muting', info);

        this.parent.emit('mute', this, info);
        return cb();

      case JINGLE_INFO_UNMUTE:
        this._log('info', 'Unmuting', info);

        this.parent.emit('unmute', this, info);
        return cb();
    }

    return cb();
  }

}

const MAX_RELAY_BANDWIDTH = 768 * 1024; // maximum bandwidth used via TURN.

function isICEServer(val) {
  return !val.type && (val.urls || val.url);
}

class SessionManager extends _events.EventEmitter {
  constructor(conf = {}) {
    super();
    conf = conf || {};
    this.selfID = conf.selfID;
    this.sessions = {};
    this.peers = {};
    this.iceServers = conf.iceServers || [];

    this.prepareSession = conf.prepareSession || (opts => {
      if (!this.config.hasRTCPeerConnection) {
        return;
      }

      if (opts.applicationTypes.indexOf(NS_JINGLE_RTP_1) >= 0) {
        return new MediaSession(opts);
      }

      if (opts.applicationTypes.indexOf(NS_JINGLE_FILE_TRANSFER_5) >= 0) {
        return new FileTransferSession(opts);
      }
    });

    this.performTieBreak = conf.performTieBreak || ((sess, req) => {
      const applicationTypes = (req.jingle.contents || []).map(content => {
        if (content.application) {
          return content.application.applicationType;
        }
      });
      const intersection = (sess.pendingApplicationTypes || []).filter(appType => applicationTypes.includes(appType));
      return intersection.length > 0;
    });

    this.createPeerConnection = conf.createPeerConnection || ((session, opts) => {
      if (nativeRTCPeerConnection) {
        return new nativeRTCPeerConnection(opts);
      }
    });

    this.config = Object.assign({
      debug: false,
      hasRTCPeerConnection: !!nativeRTCPeerConnection,
      peerConnectionConfig: {
        bundlePolicy: conf.bundlePolicy || 'balanced',
        iceTransportPolicy: conf.iceTransportPolicy || 'all',
        rtcpMuxPolicy: conf.rtcpMuxPolicy || 'require',
        sdpSemantics: conf.sdpSemantics || 'plan-b'
      },
      peerConnectionConstraints: {
        optional: [{
          DtlsSrtpKeyAgreement: true
        }, {
          RtpDataChannels: false
        }]
      }
    }, conf);
  }

  addICEServer(server) {
    if (typeof server === 'string') {
      this.iceServers.push({
        urls: server
      });
      return;
    }

    if (isICEServer(server)) {
      this.iceServers.push(server);
      return;
    }

    let host = server.host || '';

    if (host.indexOf(':') >= 0) {
      host = `[${host}]`;
    }

    let uri = `${server.type}:${host}`;

    if (server.port) {
      uri += `:${server.port}`;
    }

    if (server.transport) {
      uri += `?transport=${server.transport}`;
    }

    if (server.type === 'turn' || server.type === 'turns') {
      this.iceServers.push({
        credential: server.password,
        urls: [uri],
        username: server.username
      });
    } else if (server.type === 'stun' || server.type === 'stuns') {
      this.iceServers.push({
        urls: [uri]
      });
    }
  }

  resetICEServers() {
    this.iceServers = [];
  }

  addSession(session) {
    session.parent = this;
    const sid = session.sid;
    const peer = session.peerID;
    this.sessions[sid] = session;

    if (!this.peers[peer]) {
      this.peers[peer] = [];
    }

    this.peers[peer].push(session);
    this.emit('createdSession', session);
    return session;
  }

  forgetSession(session) {
    const peers = this.peers[session.peerID] || [];

    if (peers.length) {
      peers.splice(peers.indexOf(session), 1);
    }

    delete this.sessions[session.sid];
  }

  createMediaSession(peer, sid, stream) {
    const session = new MediaSession({
      config: this.config.peerConnectionConfig,
      constraints: this.config.peerConnectionConstraints,
      iceServers: this.iceServers,
      initiator: true,
      maxRelayBandwidth: MAX_RELAY_BANDWIDTH,
      parent: this,
      peerID: peer,
      sid,
      stream
    });
    this.addSession(session);
    return session;
  }

  createFileTransferSession(peer, sid) {
    const session = new FileTransferSession({
      config: this.config.peerConnectionConfig,
      constraints: this.config.peerConnectionConstraints,
      iceServers: this.iceServers,
      initiator: true,
      maxRelayBandwidth: MAX_RELAY_BANDWIDTH,
      parent: this,
      peerID: peer,
      sid
    });
    this.addSession(session);
    return session;
  }

  endPeerSessions(peer, reason, silent = false) {
    const sessions = this.peers[peer] || [];
    delete this.peers[peer];

    for (const session of sessions) {
      session.end(reason || 'gone', silent);
    }
  }

  endAllSessions(reason, silent = false) {
    for (const peer of Object.keys(this.peers)) {
      this.endPeerSessions(peer, reason, silent);
    }
  }

  process(req) {
    // Extract the request metadata that we need to verify
    const sid = req.jingle ? req.jingle.sid : undefined;
    let session = sid ? this.sessions[sid] : undefined;
    const rid = req.id;
    const sender = req.from;

    if (!sender) {
      return;
    }

    if (req.type === 'error') {
      this._log('error', 'Received error response', req);

      if (session && req.error && req.error.jingleError === 'unknown-session') {
        return session.end('gone', true);
      }

      const isTieBreak = req.error && req.error.jingleError === 'tie-break';

      if (session && session.state === 'pending' && isTieBreak) {
        return session.end('alternative-session', true);
      } else {
        if (session) {
          session.pendingAction = undefined;
        }

        return;
      }
    }

    if (req.type === 'result') {
      if (session) {
        session.pendingAction = undefined;
      }

      return;
    }

    const action = req.jingle.action;
    const contents = req.jingle.contents || [];
    const applicationTypes = contents.map(content => {
      return content.application ? content.application.applicationType : undefined;
    });
    const transportTypes = contents.map(content => {
      return content.transport ? content.transport.transportType : undefined;
    }); // Now verify that we are allowed to actually process the
    // requested action

    if (action !== JingleAction.SessionInitiate) {
      // Can't modify a session that we don't have.
      if (!session) {
        if (action === 'session-terminate') {
          this.emit('send', {
            id: rid,
            to: sender,
            type: 'result'
          });
          return;
        }

        this._log('error', 'Unknown session', sid);

        return this._sendError(sender, rid, {
          condition: 'item-not-found',
          jingleError: 'unknown-session'
        });
      } // Check if someone is trying to hijack a session.


      if (session.peerID !== sender || session.state === 'ended') {
        this._log('error', 'Session has ended, or action has wrong sender');

        return this._sendError(sender, rid, {
          condition: 'item-not-found',
          jingleError: 'unknown-session'
        });
      } // Can't accept a session twice


      if (action === 'session-accept' && session.state !== 'pending') {
        this._log('error', 'Tried to accept session twice', sid);

        return this._sendError(sender, rid, {
          condition: 'unexpected-request',
          jingleError: 'out-of-order'
        });
      } // Can't process two requests at once, need to tie break


      if (action !== 'session-terminate' && action === session.pendingAction) {
        this._log('error', 'Tie break during pending request');

        if (session.isInitiator) {
          return this._sendError(sender, rid, {
            condition: 'conflict',
            jingleError: 'tie-break'
          });
        }
      }
    } else if (session) {
      // Don't accept a new session if we already have one.
      if (session.peerID !== sender) {
        this._log('error', 'Duplicate sid from new sender');

        return this._sendError(sender, rid, {
          condition: 'service-unavailable'
        });
      } // Check if we need to have a tie breaker because both parties
      // happened to pick the same random sid.


      if (session.state === 'pending') {
        if (this.selfID && this.selfID > session.peerID && this.performTieBreak(session, req)) {
          this._log('error', 'Tie break new session because of duplicate sids');

          return this._sendError(sender, rid, {
            condition: 'conflict',
            jingleError: 'tie-break'
          });
        }
      } else {
        // The other side is just doing it wrong.
        this._log('error', 'Someone is doing this wrong');

        return this._sendError(sender, rid, {
          condition: 'unexpected-request',
          jingleError: 'out-of-order'
        });
      }
    } else if (this.peers[sender] && this.peers[sender].length) {
      // Check if we need to have a tie breaker because we already have
      // a different session with this peer that is using the requested
      // content application types.
      for (let i = 0, len = this.peers[sender].length; i < len; i++) {
        const sess = this.peers[sender][i];

        if (sess && sess.state === 'pending' && sid && octetCompare(sess.sid, sid) > 0 && this.performTieBreak(sess, req)) {
          this._log('info', 'Tie break session-initiate');

          return this._sendError(sender, rid, {
            condition: 'conflict',
            jingleError: 'tie-break'
          });
        }
      }
    } // We've now weeded out invalid requests, so we can process the action now.


    if (action === 'session-initiate') {
      if (!contents.length) {
        return this._sendError(sender, rid, {
          condition: 'bad-request'
        });
      }

      session = this._createIncomingSession({
        applicationTypes,
        config: this.config.peerConnectionConfig,
        constraints: this.config.peerConnectionConstraints,
        iceServers: this.iceServers,
        initiator: false,
        parent: this,
        peerID: sender,
        sid,
        transportTypes
      }, req);
    }

    session.process(action, req.jingle, err => {
      if (err) {
        this._log('error', 'Could not process request', req, err);

        this._sendError(sender, rid, err);
      } else {
        this.emit('send', {
          id: rid,
          to: sender,
          type: 'result'
        }); // Wait for the initial action to be processed before emitting
        // the session for the user to accept/reject.

        if (action === 'session-initiate') {
          this.emit('incoming', session);
        }
      }
    });
  }

  signal(session, data) {
    const action = data.jingle && data.jingle.action;

    if (session.isInitiator && action === JingleAction.SessionInitiate) {
      this.emit('outgoing', session);
    }

    this.emit('send', data);
  }

  _createIncomingSession(meta, req) {
    let session;

    if (this.prepareSession) {
      session = this.prepareSession(meta, req);
    } // Fallback to a generic session type, which can
    // only be used to end the session.


    if (!session) {
      session = new JingleSession(meta);
    }

    this.addSession(session);
    return session;
  }

  _sendError(to, id, data) {
    if (!data.type) {
      data.type = 'cancel';
    }

    this.emit('send', {
      error: data,
      id,
      to,
      type: 'error'
    });
  }

  _log(level, message, ...args) {
    this.emit('log', level, message, ...args);
    this.emit('log:' + level, message, ...args);
  }

}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Session: JingleSession,
  ICESession: ICESession,
  MediaSession: MediaSession,
  FileSession: FileTransferSession,
  SessionManager: SessionManager,
  importFromSDP: importFromSDP,
  exportToSDP: exportToSDP
});
exports.Jingle = index$2;

function Jingle(client) {
  const hasNativePeerConnection = !!nativeRTCPeerConnection;
  const defaultConfig = {
    advertiseAudio: hasNativePeerConnection,
    advertiseFileTransfer: hasNativePeerConnection,
    advertiseVideo: hasNativePeerConnection,
    bundlePolicy: 'balanced',
    hasRTCPeerConnection: hasNativePeerConnection,
    iceServers: [{
      urls: 'stun:stun.l.google.com:19302'
    }],
    iceTransportPolicy: 'all',
    rtcpMuxPolicy: 'require',
    trickleIce: true
  };
  const providedConfig = client.config.jingle;
  const config = Object.assign(Object.assign({}, defaultConfig), providedConfig);
  const jingle = client.jingle = new SessionManager(config);
  const caps = [NS_JINGLE_1];

  if (config.hasRTCPeerConnection) {
    caps.push(NS_JINGLE_ICE_0, NS_JINGLE_ICE_UDP_1, NS_JINGLE_DTLS_SCTP_1, NS_JINGLE_DTLS_0, 'urn:ietf:rfc:5888' // Jingle Grouping Framework
    );

    if (config.trickleIce === false) {
      caps.push('urn:ietf:rfc:3264'); // ICE prefer batched candidates
    }

    if (config.advertiseAudio || config.advertiseVideo) {
      caps.push(NS_JINGLE_RTP_1, NS_JINGLE_RTP_RTCP_FB_0, NS_JINGLE_RTP_HDREXT_0, 'urn:ietf:rfc:5576' // Jingle Source Specific Media Attributes
      );
    }

    if (config.advertiseAudio) {
      caps.push(NS_JINGLE_RTP_AUDIO);
    }

    if (config.advertiseVideo) {
      caps.push(NS_JINGLE_RTP_VIDEO);
    }

    if (config.advertiseFileTransfer) {
      caps.push(NS_JINGLE_FILE_TRANSFER_4, NS_JINGLE_FILE_TRANSFER_5);
    }
  }

  for (const cap of caps) {
    client.disco.addFeature(cap);
  }

  const mappedEvents = ['outgoing', 'incoming', 'accepted', 'terminated', 'ringing', 'mute', 'unmute', 'hold', 'resumed'];

  for (const event of mappedEvents) {
    jingle.on(event, (session, data) => {
      client.emit('jingle:' + event, session, data);
    });
  }

  jingle.on('createdSession', data => {
    client.emit('jingle:created', data);
  });
  jingle.on('send', data => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      if (data.type === 'set') {
        const resp = yield client.sendIQ(data);

        if (!resp.jingle) {
          resp.jingle = {};
        }

        resp.jingle.sid = data.jingle.sid;
        jingle.process(resp);
      }

      if (data.type === 'result') {
        client.sendIQResult({
          type: 'set',
          id: data.id,
          from: data.to
        }, data);
      }

      if (data.type === 'error') {
        client.sendIQError({
          type: 'set',
          id: data.id,
          from: data.to
        }, data);
      }
    } catch (err) {
      if (!err.jingle) {
        err.jingle = data.jingle;
      }

      err.jingle.sid = data.jingle.sid;
      jingle.process(err);
    }
  }));
  client.on('session:bound', jid => {
    jingle.selfID = jid;
  });
  client.on('iq:set:jingle', data => {
    jingle.process(data);
  });
  client.on('unavailable', pres => {
    jingle.endPeerSessions(pres.from, undefined, true);
  });

  client.getServices = (jid, type, version) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      externalServices: {
        type,
        version
      },
      to: jid,
      type: 'get'
    });
    const services = resp.externalServices;
    services.services = services.services || [];
    return services;
  });

  client.getServiceCredentials = (jid, host, type, port, version) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      externalServiceCredentials: {
        host,
        port,
        type,
        version
      },
      to: jid,
      type: 'get'
    });
    return resp.externalServiceCredentials;
  });

  client.discoverICEServers = (opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      const resp = yield client.getServices(client.config.server, undefined, opts.version);
      const services = resp.services || [];
      const discovered = [];

      for (const service of services) {
        client.jingle.addICEServer(service);
      }

      return discovered;
    } catch (err) {
      return [];
    }
  });
}

function mergeFields(original, updated) {
  const merged = [];
  const mappedUpdates = new Map();

  for (const field of updated) {
    if (field.name) {
      mappedUpdates.set(field.name, field);
    }
  }

  const usedUpdates = new Set(); // Update any existing fields with new values.

  for (const field of original) {
    if (field.name && mappedUpdates.has(field.name)) {
      merged.push(Object.assign(Object.assign({}, field), mappedUpdates.get(field.name)));
      usedUpdates.add(field.name);
    } else {
      merged.push(Object.assign({}, field));
    }
  } // Append any brand new fields to the list


  for (const field of updated) {
    if (!field.name || field.name && !usedUpdates.has(field.name)) {
      merged.push(Object.assign({}, field));
    }
  }

  return merged;
}

function MAM(client) {
  client.getHistorySearchForm = (jid, opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const res = yield client.sendIQ({
      archive: {
        type: 'query',
        version: opts.version
      },
      to: jid,
      type: 'get'
    });
    return res.archive.form;
  });

  client.searchHistory = (jidOrOpts, opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const queryid = client.nextId();
    let jid = '';

    if (typeof jidOrOpts === 'string') {
      jid = jidOrOpts;
    } else {
      jid = jidOrOpts.to || '';
      opts = jidOrOpts;
    }

    opts.queryId = queryid;
    const form = opts.form || {};
    form.type = 'submit';
    const fields = form.fields || [];
    const defaultFields = [{
      name: 'FORM_TYPE',
      type: 'hidden',
      value: NS_MAM_2
    }];

    if (opts.with) {
      defaultFields.push({
        name: 'with',
        type: 'text-single',
        value: opts.with
      });
    }

    if (opts.start) {
      defaultFields.push({
        name: 'start',
        type: 'text-single',
        value: opts.start.toISOString()
      });
    }

    if (opts.end) {
      defaultFields.push({
        name: 'end',
        type: 'text-single',
        value: opts.end.toISOString()
      });
    }

    form.fields = mergeFields(defaultFields, fields);
    opts.form = form;
    const allowed = allowedResponders(client.jid, jid);
    const results = [];

    const collector = msg => {
      if (allowed.has(msg.from) && msg.archive && msg.archive.queryId === queryid) {
        results.push(msg.archive);
      }
    };

    client.on('mam:item', collector);

    try {
      const resp = yield client.sendIQ({
        archive: opts,
        id: queryid,
        to: jid,
        type: 'set'
      });
      return Object.assign(Object.assign({}, resp.archive), {
        results
      });
    } finally {
      client.off('mam:item', collector);
    }
  });

  client.getHistoryPreferences = () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      archive: {
        type: 'preferences'
      },
      type: 'get'
    });
    return resp.archive;
  });

  client.setHistoryPreferences = opts => {
    return client.sendIQ({
      archive: Object.assign({
        type: 'preferences'
      }, opts),
      type: 'set'
    });
  };

  client.on('message', msg => {
    if (msg.archive) {
      client.emit('mam:item', msg);
    }
  });
}

const ACK_TYPES = new Set(['chat', 'headline', 'normal']);
const ALLOWED_CHAT_STATE_TYPES = new Set(['chat', 'groupchat', 'normal']);

const isReceivedCarbon = msg => !!msg.carbon && msg.carbon.type === 'received';

const isSentCarbon = msg => !!msg.carbon && msg.carbon.type === 'sent';

const isChatState = msg => !!msg.chatState;

const isReceiptMessage = msg => !!msg.receipt;

const hasRTT = msg => !!msg.rtt;

const isCorrection = msg => !!msg.replace;

const isMarkable = (msg, client) => msg.marker && msg.marker.type === 'markable' && client.config.chatMarkers !== false;

const isFormsMessage = msg => !!msg.forms && msg.forms.length > 0;

function toggleCarbons(client, action) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      carbons: {
        action
      },
      type: 'set'
    });
  });
}

function sendMarker(client, msg, marker) {
  if (isMarkable(msg, client)) {
    const to = msg.type === 'groupchat' ? toBare(msg.from) : msg.from;
    client.sendMessage({
      body: '',
      marker: {
        id: msg.id,
        type: marker
      },
      to,
      type: msg.type
    });
  }
}

function Messaging(client) {
  client.disco.addFeature(NS_ATTENTION_0);
  client.disco.addFeature(NS_CHAT_MARKERS_0);
  client.disco.addFeature(NS_CHAT_STATES);
  client.disco.addFeature(NS_CORRECTION_0);
  client.disco.addFeature(NS_RECEIPTS);
  client.disco.addFeature(NS_RTT_0);

  client.enableCarbons = () => toggleCarbons(client, 'enable');

  client.disableCarbons = () => toggleCarbons(client, 'disable');

  client.markReceived = msg => sendMarker(client, msg, 'received');

  client.markDisplayed = msg => sendMarker(client, msg, 'displayed');

  client.markAcknowledged = msg => sendMarker(client, msg, 'acknowledged');

  client.getAttention = (jid, opts = {}) => {
    return client.sendMessage(Object.assign(Object.assign({}, opts), {
      requestingAttention: true,
      to: jid,
      type: 'headline'
    }));
  };

  client.on('message', msg => {
    if (msg.carbon && equalBare(msg.from, client.jid)) {
      const forwardedMessage = msg.carbon.forward.message;

      if (!forwardedMessage.delay) {
        forwardedMessage.delay = msg.carbon.forward.delay || {
          timestamp: new Date(Date.now())
        };
      }

      if (isReceivedCarbon(msg)) {
        client.emit('carbon:received', msg);
        client.emit('message', forwardedMessage);
      }

      if (isSentCarbon(msg)) {
        client.emit('carbon:sent', msg);
        client.emit('message:sent', forwardedMessage, true);
      }
    }

    if (isFormsMessage(msg)) {
      client.emit('dataform', msg);
    }

    if (msg.requestingAttention) {
      client.emit('attention', msg);
    }

    if (hasRTT(msg)) {
      client.emit('rtt', msg);
    }

    if (isCorrection(msg)) {
      client.emit('replace', msg);
    }

    if (isChatState(msg) && ALLOWED_CHAT_STATE_TYPES.has(msg.type || 'normal')) {
      client.emit('chat:state', msg);
    }

    if (isMarkable(msg, client)) {
      client.markReceived(msg);
    }

    if (msg.marker && msg.marker.type !== 'markable') {
      client.emit(`marker:${msg.marker.type}`, msg);
    }

    if (isReceiptMessage(msg)) {
      const sendReceipts = client.config.sendReceipts !== false;

      if (sendReceipts && ACK_TYPES.has(msg.type || 'normal') && msg.receipt.type === 'request') {
        client.sendMessage({
          id: msg.id,
          receipt: {
            id: msg.id,
            type: 'received'
          },
          to: msg.from,
          type: msg.type
        });
      }

      if (msg.receipt.type === 'received') {
        client.emit('receipt', msg);
      }
    }
  });
}

function isMUCPresence(pres) {
  return !!pres.muc;
}

function MUC(client) {
  client.disco.addFeature(NS_MUC);
  client.disco.addFeature(NS_MUC_DIRECT_INVITE);
  client.disco.addFeature(NS_HATS_0);
  client.joinedRooms = new Map();
  client.joiningRooms = new Map();
  client.leavingRooms = new Map();

  function rejoinRooms() {
    const oldJoiningRooms = client.joiningRooms;
    client.joiningRooms = new Map();

    for (const [room, nick] of oldJoiningRooms) {
      client.joinRoom(room, nick);
    }

    const oldJoinedRooms = client.joinedRooms;
    client.joinedRooms = new Map();

    for (const [room, nick] of oldJoinedRooms) {
      client.joinRoom(room, nick);
    }
  }

  client.on('session:started', rejoinRooms);
  client.on('stream:management:resumed', rejoinRooms);
  client.on('message', msg => {
    if (msg.type === 'groupchat' && msg.hasSubject) {
      client.emit('muc:topic', {
        from: msg.from,
        room: toBare(msg.from),
        topic: msg.subject || ''
      });
      return;
    }

    if (!msg.muc) {
      return;
    }

    if (msg.muc.type === 'direct-invite' || !msg.muc.invite && msg.legacyMUC) {
      const invite = msg.muc.type === 'direct-invite' ? msg.muc : msg.legacyMUC;
      client.emit('muc:invite', {
        from: msg.from,
        password: invite.password,
        reason: invite.reason,
        room: invite.jid,
        thread: invite.thread,
        type: 'direct'
      });
      return;
    }

    if (msg.muc.invite) {
      client.emit('muc:invite', {
        from: msg.muc.invite[0].from,
        password: msg.muc.password,
        reason: msg.muc.invite[0].reason,
        room: msg.from,
        thread: msg.muc.invite[0].thread,
        type: 'mediated'
      });
      return;
    }

    if (msg.muc.decline) {
      client.emit('muc:declined', {
        from: msg.muc.decline.from,
        reason: msg.muc.decline.reason,
        room: msg.from
      });
      return;
    }

    client.emit('muc:other', msg);
  });
  client.on('presence', pres => {
    const room = toBare(pres.from);

    if (client.joiningRooms.has(room) && pres.type === 'error') {
      client.joiningRooms.delete(room);
      client.emit('muc:failed', pres);
      client.emit('muc:error', pres);
      return;
    }

    if (!isMUCPresence(pres)) {
      return;
    }

    const isSelf = pres.muc.statusCodes && pres.muc.statusCodes.indexOf(MUCStatusCode.SelfPresence) >= 0;
    const isNickChange = pres.muc.statusCodes && pres.muc.statusCodes.indexOf(MUCStatusCode.NickChanged) >= 0;

    if (pres.type === 'error') {
      client.emit('muc:error', pres);
      return;
    }

    if (pres.type === 'unavailable') {
      client.emit('muc:unavailable', pres);

      if (isSelf) {
        if (isNickChange) {
          client.joinedRooms.set(room, pres.muc.nick);
        } else {
          client.emit('muc:leave', pres);
          client.joinedRooms.delete(room);
          client.leavingRooms.delete(room);
        }
      }

      if (pres.muc.destroy) {
        client.emit('muc:destroyed', {
          newRoom: pres.muc.destroy.jid,
          password: pres.muc.destroy.password,
          reason: pres.muc.destroy.reason,
          room
        });
      }

      return;
    }

    client.emit('muc:available', pres);
    const isJoin = client.joiningRooms.has(room) || !client.joinedRooms.has(room);

    if (isSelf) {
      client.joinedRooms.set(room, getResource(pres.from));

      if (isJoin) {
        client.joiningRooms.delete(room);
        client.emit('muc:join', pres);
      }
    }
  });

  client.joinRoom = (room, nick, opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    room = toBare(room);
    client.joiningRooms.set(room, nick || '');

    if (!nick) {
      try {
        nick = yield client.getReservedNick(room);
        client.joiningRooms.set(room, nick);
      } catch (err) {
        throw new Error('Room nick required');
      }
    }

    return new Promise((resolve, reject) => {
      function joined(pres) {
        if (equalBare(pres.from, room)) {
          client.off('muc:join', joined);
          client.off('muc:failed', failed);
          resolve(pres);
        }
      }

      function failed(pres) {
        if (equalBare(pres.from, room)) {
          client.off('muc:join', joined);
          client.off('muc:failed', failed);
          reject(pres);
        }
      }

      client.on('muc:join', joined);
      client.on('muc:failed', failed);
      client.sendPresence(Object.assign(Object.assign({}, opts), {
        muc: Object.assign(Object.assign({}, opts.muc), {
          type: 'join'
        }),
        to: createFull(room, nick)
      }));
    });
  });

  client.leaveRoom = (room, nick, opts = {}) => {
    room = toBare(room);
    nick = nick || client.joinedRooms.get(room);
    client.leavingRooms.set(room, nick);
    return new Promise((resolve, reject) => {
      const id = opts.id || uuid();
      const allowed = allowedResponders(room);

      function leave(pres) {
        if (equalBare(pres.from, room)) {
          client.off('muc:leave', leave);
          client.off('presence:error', leaveError);
          resolve(pres);
        }
      }

      function leaveError(pres) {
        if (pres.id === id && allowed.has(pres.from)) {
          if (!client.joinedRooms.has(room)) {
            client.leavingRooms.delete(room);
          }

          client.off('muc:leave', leave);
          client.off('presence:error', leaveError);
          reject(pres);
        }
      }

      client.on('muc:leave', leave);
      client.on('presence:error', leaveError);
      client.sendPresence(Object.assign(Object.assign({}, opts), {
        id,
        to: createFull(room, nick),
        type: 'unavailable'
      }));
    });
  };

  client.ban = (room, occupantRealJID, reason) => {
    return client.setRoomAffiliation(room, occupantRealJID, 'outcast', reason);
  };

  client.kick = (room, nick, reason) => {
    return client.setRoomRole(room, nick, 'none', reason);
  };

  client.invite = (room, opts = []) => {
    if (!Array.isArray(opts)) {
      opts = [opts];
    }

    client.sendMessage({
      muc: {
        invite: opts,
        type: 'info'
      },
      to: room
    });
  };

  client.directInvite = (room, to, opts = {}) => {
    client.sendMessage({
      muc: Object.assign(Object.assign({}, opts), {
        jid: room,
        type: 'direct-invite'
      }),
      to
    });
  };

  client.declineInvite = (room, sender, reason) => {
    client.sendMessage({
      muc: {
        decline: {
          reason,
          to: sender
        },
        type: 'info'
      },
      to: room
    });
  };

  client.changeNick = (room, nick) => {
    const id = uuid();
    const newJID = createFull(room, nick);
    const allowed = allowedResponders(room);
    return new Promise((resolve, reject) => {
      function success(pres) {
        if (!allowed.has(toBare(pres.from))) {
          return;
        }

        if (!pres.muc.statusCodes || !pres.muc.statusCodes.includes(MUCStatusCode.SelfPresence)) {
          return;
        }

        client.off('muc:available', success);
        client.off(`presence:id:${id}`, errorOrNoChange);
        resolve(pres);
      }

      function errorOrNoChange(pres) {
        if (!allowed.has(toBare(pres.from)) || pres.id !== id) {
          return;
        }

        client.off('muc:available', success);
        client.off(`presence:id:${id}`, errorOrNoChange);

        if (pres.type === 'error') {
          reject(pres);
        } else {
          resolve(pres);
        }
      }

      client.on('muc:available', success);
      client.on(`presence:id:${id}`, errorOrNoChange);
      client.sendPresence({
        id,
        to: newJID
      });
    });
  };

  client.setSubject = (room, subject) => {
    client.sendMessage({
      subject,
      to: room,
      type: 'groupchat'
    });
  };

  client.getReservedNick = room => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    try {
      const info = yield client.getDiscoInfo(room, 'x-roomuser-item');
      const identity = info.identities[0];

      if (identity.name) {
        return identity.name;
      } else {
        throw new Error('No nickname reserved');
      }
    } catch (err) {
      throw new Error('No nickname reserved');
    }
  });

  client.requestRoomVoice = room => {
    client.sendMessage({
      forms: [{
        fields: [{
          name: 'FORM_TYPE',
          type: 'hidden',
          value: 'http://jabber.org/protocol/muc#request'
        }, {
          name: 'muc#role',
          type: 'text-single',
          value: 'participant'
        }],
        type: 'submit'
      }],
      to: room
    });
  };

  client.setRoomAffiliation = (room, occupantRealJID, affiliation, reason) => {
    return client.sendIQ({
      muc: {
        type: 'user-list',
        users: [{
          affiliation,
          jid: occupantRealJID,
          reason
        }]
      },
      to: room,
      type: 'set'
    });
  };

  client.setRoomRole = (room, nick, role, reason) => {
    return client.sendIQ({
      muc: {
        type: 'user-list',
        users: [{
          nick,
          reason,
          role
        }]
      },
      to: room,
      type: 'set'
    });
  };

  client.getRoomMembers = (room, opts = {
    affiliation: 'member'
  }) => {
    return client.sendIQ({
      muc: {
        type: 'user-list',
        users: [opts]
      },
      to: room,
      type: 'get'
    });
  };

  client.getRoomConfig = room => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const result = yield client.sendIQ({
      muc: {
        type: 'configure'
      },
      to: room,
      type: 'get'
    });

    if (!result.muc.form) {
      throw new Error('No configuration form returned');
    }

    return result.muc.form;
  });

  client.configureRoom = (room, form = {}) => {
    return client.sendIQ({
      muc: {
        form: Object.assign(Object.assign({}, form), {
          type: 'submit'
        }),
        type: 'configure'
      },
      to: room,
      type: 'set'
    });
  };

  client.destroyRoom = (room, opts = {}) => {
    return client.sendIQ({
      muc: {
        destroy: opts,
        type: 'configure'
      },
      to: room,
      type: 'set'
    });
  };

  client.getUniqueRoomName = function (mucHost) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const result = yield this.sendIQ({
        muc: {
          type: 'unique'
        },
        to: mucHost,
        type: 'get'
      });

      if (!result.muc.name) {
        throw new Error('No unique name returned');
      }

      return result.muc.name;
    });
  };

  client.getBookmarks = () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const res = yield client.getPrivateData('bookmarks');

    if (!res || !res.rooms) {
      return [];
    }

    return res.rooms;
  });

  client.setBookmarks = bookmarks => {
    return client.setPrivateData('bookmarks', {
      rooms: bookmarks
    });
  };

  client.addBookmark = bookmark => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const mucs = yield client.getBookmarks();
    const updated = [];
    let updatedExisting = false;

    for (const muc of mucs) {
      if (equalBare(muc.jid, bookmark.jid)) {
        updated.push(Object.assign(Object.assign({}, muc), bookmark));
        updatedExisting = true;
      } else {
        updated.push(muc);
      }
    }

    if (!updatedExisting) {
      updated.push(bookmark);
    }

    return client.setBookmarks(updated);
  });

  client.removeBookmark = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const existingMucs = yield client.getBookmarks();
    const updated = existingMucs.filter(muc => {
      return !equalBare(muc.jid, jid);
    });
    return client.setBookmarks(updated);
  });
}

function PEP(client) {
  client.disco.addFeature(NS_ACTIVITY);
  client.disco.addFeature(NS_GEOLOC);
  client.disco.addFeature(NS_MOOD);
  client.disco.addFeature(NS_NICK);
  client.disco.addFeature(NS_TUNE);
  client.disco.addFeature(NS_PEP_NOTIFY(NS_ACTIVITY));
  client.disco.addFeature(NS_PEP_NOTIFY(NS_GEOLOC));
  client.disco.addFeature(NS_PEP_NOTIFY(NS_MOOD));
  client.disco.addFeature(NS_PEP_NOTIFY(NS_NICK));
  client.disco.addFeature(NS_PEP_NOTIFY(NS_TUNE));

  client.publishActivity = data => {
    return client.publish('', NS_ACTIVITY, Object.assign({
      itemType: NS_ACTIVITY
    }, data));
  };

  client.publishGeoLoc = data => {
    return client.publish('', NS_GEOLOC, Object.assign({
      itemType: NS_GEOLOC
    }, data));
  };

  client.publishMood = mood => {
    return client.publish('', NS_MOOD, Object.assign({
      itemType: NS_MOOD
    }, mood));
  };

  client.publishNick = nick => {
    return client.publish('', NS_NICK, {
      itemType: NS_NICK,
      nick
    });
  };

  client.publishTune = tune => {
    return client.publish('', NS_TUNE, Object.assign({
      itemType: NS_TUNE
    }, tune));
  };

  client.on('pubsub:published', msg => {
    const content = msg.pubsub.items.published[0].content;

    switch (msg.pubsub.items.node) {
      case NS_ACTIVITY:
        return client.emit('activity', {
          activity: content,
          jid: msg.from
        });

      case NS_GEOLOC:
        return client.emit('geoloc', {
          geoloc: content,
          jid: msg.from
        });

      case NS_MOOD:
        return client.emit('mood', {
          jid: msg.from,
          mood: content
        });

      case NS_NICK:
        return client.emit('nick', {
          jid: msg.from,
          nick: content.nick
        });

      case NS_TUNE:
        return client.emit('tune', {
          jid: msg.from,
          tune: msg.pubsub.items.published[0].content
        });
    }
  });
}

function isPubsubMessage(msg) {
  return !!msg.pubsub;
}

function isPubsubPublish(msg) {
  return !!msg.pubsub.items && !!msg.pubsub.items.published;
}

function isPubsubRetract(msg) {
  return !!msg.pubsub.items && !!msg.pubsub.items.retracted;
}

function isPubsubPurge(msg) {
  return msg.pubsub.eventType === 'purge';
}

function isPubsubDelete(msg) {
  return msg.pubsub.eventType === 'purge';
}

function isPubsubSubscription(msg) {
  return msg.pubsub.eventType === 'subscription';
}

function isPubsubConfiguration(msg) {
  return msg.pubsub.eventType === 'configuration';
}

function isPubsubAffiliation(msg) {
  if (!msg.pubsub) {
    return false;
  }

  return (!msg.pubsub.context || msg.pubsub.context === 'user') && !!msg.pubsub.affiliations;
}

function PubSub(client) {
  client.disco.addFeature(`${NS_SHIM}#SubID`, NS_SHIM);
  client.on('message', msg => {
    if (isPubsubAffiliation(msg)) {
      client.emit('pubsub:affiliations', msg);
      return;
    }

    if (!isPubsubMessage(msg)) {
      return;
    }

    client.emit('pubsub:event', msg);

    if (isPubsubPublish(msg)) {
      client.emit('pubsub:published', msg);
      return;
    }

    if (isPubsubRetract(msg)) {
      client.emit('pubsub:retracted', msg);
      return;
    }

    if (isPubsubPurge(msg)) {
      client.emit('pubsub:purged', msg);
      return;
    }

    if (isPubsubDelete(msg)) {
      client.emit('pubsub:deleted', msg);
      return;
    }

    if (isPubsubSubscription(msg)) {
      client.emit('pubsub:subscription', msg);
      return;
    }

    if (isPubsubConfiguration(msg)) {
      client.emit('pubsub:config', msg);
      return;
    }
  });

  client.subscribeToNode = (jid, opts) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const subscribe = {};
    let form;

    if (typeof opts === 'string') {
      subscribe.node = opts;
      subscribe.jid = toBare(client.jid);
    } else {
      subscribe.node = opts.node;
      subscribe.jid = opts.jid || (opts.useBareJID ? toBare(client.jid) : client.jid);
      form = opts.options;
    }

    const resp = yield client.sendIQ({
      pubsub: {
        context: 'user',
        subscribe,
        subscriptionOptions: form ? {
          form
        } : undefined
      },
      to: jid,
      type: 'set'
    });
    const sub = resp.pubsub.subscription || {};

    if (resp.pubsub.subscriptionOptions) {
      sub.options = resp.pubsub.subscriptionOptions.form;
    }

    return sub;
  });

  client.unsubscribeFromNode = (jid, opts) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const unsubscribe = {};

    if (typeof opts === 'string') {
      unsubscribe.node = opts;
      unsubscribe.jid = toBare(client.jid);
    } else {
      unsubscribe.node = opts.node;
      unsubscribe.subid = opts.subid;
      unsubscribe.jid = opts.jid || (opts.useBareJID ? toBare(client.jid) : client.jid);
    }

    const resp = yield client.sendIQ({
      pubsub: {
        context: 'user',
        unsubscribe
      },
      to: jid,
      type: 'set'
    });

    if (!resp.pubsub || !resp.pubsub.subscription) {
      return Object.assign(Object.assign({}, unsubscribe), {
        state: 'none'
      });
    }

    return resp.pubsub.subscription;
  });

  client.publish = (jid, node, item, id) => {
    return client.sendIQ({
      pubsub: {
        context: 'user',
        publish: {
          item: {
            content: item,
            id
          },
          node
        }
      },
      to: jid,
      type: 'set'
    });
  };

  client.getItem = (jid, node, id) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        context: 'user',
        fetch: {
          items: [{
            id
          }],
          node
        }
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.fetch.items[0];
  });

  client.getItems = (jid, node, opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        context: 'user',
        fetch: {
          max: opts.max,
          node
        },
        paging: opts
      },
      to: jid,
      type: 'get'
    });
    const result = resp.pubsub.fetch;
    result.paging = resp.pubsub.paging;
    return result;
  });

  client.retract = (jid, node, id, notify) => {
    return client.sendIQ({
      pubsub: {
        context: 'user',
        retract: {
          id,
          node,
          notify
        }
      },
      to: jid,
      type: 'set'
    });
  };

  client.purgeNode = (jid, node) => {
    return client.sendIQ({
      pubsub: {
        context: 'owner',
        purge: node
      },
      to: jid,
      type: 'set'
    });
  };

  client.deleteNode = (jid, node, redirect) => {
    return client.sendIQ({
      pubsub: {
        context: 'owner',
        destroy: {
          node,
          redirect
        }
      },
      to: jid,
      type: 'set'
    });
  };

  client.createNode = (jid, node, config) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        configure: config ? {
          form: config
        } : undefined,
        context: 'user',
        create: {
          node
        }
      },
      to: jid,
      type: 'set'
    });

    if (!resp.pubsub || !resp.pubsub.create) {
      return {
        node
      };
    }

    return resp.pubsub.create;
  });

  client.getSubscriptions = (jid, opts = {}) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        context: 'user',
        subscriptions: opts
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.subscriptions;
  });

  client.getAffiliations = (jid, node) => {
    return client.sendIQ({
      pubsub: {
        affiliations: {
          node
        }
      },
      to: jid,
      type: 'get'
    });
  };

  client.getNodeSubscribers = (jid, node, opts = {}) => {
    if (typeof node === 'string') {
      opts.node = node;
    } else {
      opts = Object.assign(Object.assign({}, opts), node);
    }

    return client.sendIQ({
      pubsub: {
        context: 'owner',
        subscriptions: opts
      },
      to: jid,
      type: 'get'
    });
  };

  client.updateNodeSubscriptions = (jid, node, delta) => {
    return client.sendIQ({
      pubsub: {
        context: 'owner',
        subscriptions: {
          items: delta,
          node
        }
      },
      to: jid,
      type: 'set'
    });
  };

  client.getNodeAffiliations = (jid, node) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        affiliations: {
          node
        },
        context: 'owner'
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.affiliations;
  });

  client.updateNodeAffiliations = (jid, node, items) => {
    return client.sendIQ({
      pubsub: {
        affiliations: {
          items,
          node
        },
        context: 'owner'
      },
      to: jid,
      type: 'set'
    });
  };

  client.getNodeConfig = (jid, node) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        configure: {
          node
        },
        context: 'owner'
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.configure.form || {};
  });

  client.getDefaultNodeConfig = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        context: 'owner',
        defaultConfiguration: {}
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.defaultConfiguration.form || {};
  });

  client.configureNode = (jid, node, config) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    return client.sendIQ({
      pubsub: {
        configure: {
          form: config,
          node
        },
        context: 'owner'
      },
      to: jid,
      type: 'set'
    });
  });

  client.getDefaultSubscriptionOptions = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      pubsub: {
        defaultSubscriptionOptions: {}
      },
      to: jid,
      type: 'get'
    });
    return resp.pubsub.defaultSubscriptionOptions.form || {};
  });
}

function Roster(client) {
  client.on('iq:set:roster', iq => {
    const allowed = allowedResponders(client.jid);

    if (!allowed.has(iq.from)) {
      return client.sendIQError(iq, {
        error: {
          condition: 'service-unavailable',
          type: 'cancel'
        }
      });
    }

    client.emit('roster:update', iq);
    client.sendIQResult(iq);
  });
  client.on('iq:set:blockList', iq => {
    const allowed = allowedResponders(client.jid);

    if (!allowed.has(iq.from)) {
      return client.sendIQError(iq, {
        error: {
          condition: 'service-unavailable',
          type: 'cancel'
        }
      });
    }

    const blockList = iq.blockList;
    client.emit(blockList.action, {
      jids: blockList.jids || []
    });
    client.sendIQResult(iq);
  });

  client.getRoster = () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      roster: {
        version: client.config.rosterVer
      },
      type: 'get'
    });

    if (resp.roster) {
      const version = resp.roster.version;

      if (version) {
        client.config.rosterVer = version;
        client.emit('roster:ver', version);
      }

      resp.roster.items = resp.roster.items || [];
      return resp.roster;
    } else {
      return {
        items: []
      };
    }
  });

  client.updateRosterItem = item => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      roster: {
        items: [item]
      },
      type: 'set'
    });
  });

  client.removeRosterItem = jid => {
    return client.updateRosterItem({
      jid,
      subscription: 'remove'
    });
  };

  client.subscribe = jid => {
    client.sendPresence({
      type: 'subscribe',
      to: jid
    });
  };

  client.unsubscribe = jid => {
    client.sendPresence({
      type: 'unsubscribe',
      to: jid
    });
  };

  client.acceptSubscription = jid => {
    client.sendPresence({
      type: 'subscribed',
      to: jid
    });
  };

  client.denySubscription = jid => {
    client.sendPresence({
      type: 'unsubscribed',
      to: jid
    });
  };

  client.getBlocked = () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const result = yield client.sendIQ({
      blockList: {
        action: 'list'
      },
      type: 'get'
    });
    return Object.assign({
      jids: []
    }, result.blockList);
  });

  function toggleBlock(action, jid) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      yield client.sendIQ({
        blockList: {
          action,
          jids: [jid]
        },
        type: 'set'
      });
    });
  }

  client.block = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    return toggleBlock('block', jid);
  });

  client.unblock = jid => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    return toggleBlock('unblock', jid);
  });

  client.goInvisible = (probe = false) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      type: 'set',
      visiblity: {
        probe,
        type: 'invisible'
      }
    });
  });

  client.goVisible = () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    yield client.sendIQ({
      type: 'set',
      visiblity: {
        type: 'visible'
      }
    });
  });
}

function SASL(client) {
  client.registerFeature('sasl', 100, (features, done) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const mech = client.sasl.createMechanism(features.sasl.mechanisms);

    const saslHandler = sasl => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (!mech) {
        return;
      }

      switch (sasl.type) {
        case 'success':
          {
            client.features.negotiated.sasl = true;
            client.off('sasl', saslHandler);
            client.emit('auth:success', client.config.credentials);

            if (client.transport) {
              client.transport.authenticated = true;
            }

            done('restart');
            return;
          }

        case 'challenge':
          {
            mech.processChallenge(sasl.value);

            try {
              const credentials = yield client.getCredentials();
              const resp = mech.createResponse(credentials);

              if (resp || resp === '') {
                client.send('sasl', {
                  type: 'response',
                  value: resp
                });
              } else {
                client.send('sasl', {
                  type: 'response'
                });
              }

              const cacheable = mech.getCacheableCredentials();

              if (cacheable) {
                if (!client.config.credentials) {
                  client.config.credentials = {};
                }

                client.config.credentials = Object.assign(Object.assign({}, client.config.credentials), cacheable);
                client.emit('credentials:update', client.config.credentials);
              }
            } catch (err) {
              console.error(err);
              client.send('sasl', {
                type: 'abort'
              });
            }

            return;
          }

        case 'failure':
        case 'abort':
          {
            client.off('sasl', saslHandler);
            client.emit('auth:failed');
            done('disconnect', 'authentication failed');
            return;
          }
      }
    });

    if (!mech) {
      client.off('sasl', saslHandler);
      client.emit('auth:failed');
      return done('disconnect', 'authentication failed');
    }

    client.on('sasl', saslHandler);
    client.once('--reset-stream-features', () => {
      client.features.negotiated.sasl = false;
      client.off('sasl', saslHandler);
    });

    try {
      const credentials = yield client.getCredentials();
      client.send('sasl', {
        mechanism: mech.name,
        type: 'auth',
        value: mech.createResponse(credentials)
      });
    } catch (err) {
      console.error(err);
      client.send('sasl', {
        type: 'abort'
      });
    }
  }));
}

function Sharing(client) {
  client.disco.addFeature(NS_BOB);

  client.getBits = (jid, cid) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const result = yield client.sendIQ({
      bits: {
        cid
      },
      to: jid,
      type: 'get'
    });
    return result.bits;
  });

  function getUploadParameters(jid) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const disco = yield client.getDiscoInfo(jid);

      if (!disco.features || !disco.features.includes(NS_HTTP_UPLOAD_0)) {
        return;
      }

      let maxSize;

      for (const form of disco.extensions || []) {
        const fields = form.fields || [];

        if (fields.some(field => field.name === 'FORM_TYPE' && field.value === NS_HTTP_UPLOAD_0)) {
          const sizeField = fields.find(field => field.name === 'max-file-size');

          if (sizeField) {
            maxSize = parseInt(sizeField.value, 10);
          }

          return {
            jid,
            maxSize
          };
        }
      }
    });
  }

  client.getUploadService = (domain = getDomain(client.jid)) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const domainParameters = yield getUploadParameters(domain);

    if (domainParameters) {
      return domainParameters;
    }

    const disco = yield client.getDiscoItems(domain);

    for (const item of disco.items || []) {
      if (!item.jid) {
        continue;
      }

      const itemParameters = yield getUploadParameters(item.jid);

      if (itemParameters) {
        return itemParameters;
      }
    }

    throw new Error('No upload service discovered on: ' + domain);
  });

  client.getUploadSlot = (uploadService, uploadRequest) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    const resp = yield client.sendIQ({
      httpUpload: Object.assign({
        type: 'request'
      }, uploadRequest),
      to: uploadService,
      type: 'get'
    });
    return resp.httpUpload;
  });
}

function core(client) {
  client.use(Features);
  client.use(Disco$1);
  client.use(Bind);
  client.use(Connection);
  client.use(HostMeta);
  client.use(SASL);
}

function Plugins(client) {
  client.use(Account);
  client.use(Messaging);
  client.use(Avatar);
  client.use(Command);
  client.use(Entity);
  client.use(Jingle);
  client.use(MAM);
  client.use(MUC);
  client.use(PEP);
  client.use(PubSub);
  client.use(Roster);
  client.use(Sharing);
} // ====================================================================


const Protocol = {
  aliases: ['features.legacySession', 'iq.legacySession'],
  element: 'session',
  fields: {
    // draft-cridland-xmpp-session-01
    //
    // The <optional /> child is not yet standardized, but is
    // still widely deployed to reduce client start times.
    optional: childBoolean(null, 'optional')
  },
  namespace: NS_SESSION
}; // ====================================================================

const Protocol$1 = [{
  aliases: ['atomentry', ...pubsubItemContentAliases()],
  element: 'entry',
  fields: {
    id: childText(null, 'id'),
    published: childDate(null, 'published'),
    updated: childDate(null, 'updated')
  },
  namespace: NS_ATOM,
  type: NS_ATOM,
  typeField: 'itemType'
}, {
  element: 'summary',
  fields: {
    text: text(),
    type: attribute('type', 'text')
  },
  namespace: NS_ATOM,
  path: 'atomentry.summary'
}, {
  element: 'title',
  fields: {
    text: text(),
    type: attribute('type', 'text')
  },
  namespace: NS_ATOM,
  path: 'atomentry.title'
}, {
  aliases: [{
    path: 'atomentry.links',
    multiple: true
  }],
  element: 'link',
  fields: {
    href: attribute('href'),
    mediaType: attribute('type'),
    rel: attribute('rel')
  },
  namespace: NS_ATOM
}, {
  aliases: [{
    path: 'atomentry.authors',
    multiple: true
  }],
  element: 'author',
  fields: {
    name: childText(null, 'name'),
    uri: childText(null, 'uri'),
    email: childText(null, 'email')
  },
  namespace: NS_ATOM
}, {
  aliases: [{
    path: 'atomentry.contributors',
    multiple: true
  }],
  element: 'contributor',
  fields: {
    name: childText(null, 'name'),
    uri: childText(null, 'uri'),
    email: childText(null, 'email')
  },
  namespace: NS_ATOM
}, {
  aliases: [{
    path: 'atomentry.categories',
    multiple: true
  }],
  element: 'category',
  fields: {
    term: attribute('term'),
    scheme: attribute('scheme'),
    label: attribute('label')
  },
  namespace: NS_ATOM
}, {
  element: 'content',
  fields: {
    text: text(),
    type: attribute('type', 'text')
  },
  namespace: NS_ATOM,
  path: 'atomentry.content'
}, {
  element: 'rights',
  fields: {
    text: text(),
    type: attribute('type', 'text')
  },
  namespace: NS_ATOM,
  path: 'atomentry.rights'
}]; // ====================================================================

const _Stream = {
  defaultType: 'stream',
  element: 'stream',
  fields: {
    from: attribute('from'),
    id: attribute('id'),
    lang: languageAttribute(),
    to: attribute('to'),
    version: attribute('version')
  },
  namespace: NS_STREAM,
  path: 'stream',
  type: 'stream',
  typeField: 'action'
};
const _StreamFeatures = {
  element: 'features',
  namespace: NS_STREAM,
  path: 'features'
};
const _StreamError = {
  element: 'error',
  fields: {
    alternateLanguageText: childAlternateLanguageText(NS_STREAMS, 'text'),
    condition: childEnum(NS_STREAMS, Object.values(StreamErrorCondition), StreamErrorCondition.UndefinedCondition),
    seeOtherHost: childText(NS_STREAMS, StreamErrorCondition.SeeOtherHost),
    text: childText(NS_STREAMS, 'text')
  },
  namespace: NS_STREAM,
  path: 'streamError'
}; // --------------------------------------------------------------------

const _StanzaError = Object.values(StreamType).map(streamNS => ({
  aliases: ['stanzaError', 'message.error', 'presence.error', 'iq.error'],
  defaultType: NS_CLIENT,
  element: 'error',
  fields: {
    alternateLanguageText: childAlternateLanguageText(NS_STANZAS, 'text'),
    by: JIDAttribute('by'),
    condition: childEnum(NS_STANZAS, Object.values(StanzaErrorCondition), StanzaErrorCondition.UndefinedCondition),
    gone: childText(NS_STANZAS, StanzaErrorCondition.Gone),
    redirect: childText(NS_STANZAS, StanzaErrorCondition.Redirect),
    text: childText(NS_STANZAS, 'text'),
    type: attribute('type')
  },
  namespace: streamNS,
  type: streamNS,
  typeField: 'streamType'
})); // --------------------------------------------------------------------


const baseIQFields = new Set(['from', 'id', 'lang', 'to', 'type', 'payloadType', 'error', 'streamType']);

const _IQ = Object.values(StreamType).map(streamNS => ({
  childrenExportOrder: {
    error: 200000
  },
  defaultType: NS_CLIENT,
  element: 'iq',
  fields: {
    from: JIDAttribute('from'),
    id: attribute('id'),
    lang: languageAttribute(),
    payloadType: {
      order: -10000,

      importer(xml, context) {
        if (context.data.type !== 'get' && context.data.type !== 'set') {
          return;
        }

        const childCount = xml.children.filter(child => typeof child !== 'string').length;

        if (childCount !== 1) {
          return 'invalid-payload-count';
        }

        const extensions = Object.keys(context.data).filter(key => !baseIQFields.has(key));

        if (extensions.length !== 1) {
          return 'unknown-payload';
        }

        return extensions[0];
      }

    },
    to: JIDAttribute('to'),
    type: attribute('type')
  },
  namespace: streamNS,
  path: 'iq',
  type: streamNS,
  typeField: 'streamType'
})); // --------------------------------------------------------------------


const _Message = Object.values(StreamType).map(streamNS => ({
  childrenExportOrder: {
    error: 200000
  },
  defaultType: NS_CLIENT,
  element: 'message',
  fields: {
    from: JIDAttribute('from'),
    id: attribute('id'),
    lang: languageAttribute(),
    to: JIDAttribute('to')
  },
  namespace: streamNS,
  path: 'message',
  type: streamNS,
  typeField: 'streamType'
})); // --------------------------------------------------------------------


const _Presence = Object.values(StreamType).map(streamNS => ({
  childrenExportOrder: {
    error: 200000
  },
  defaultType: NS_CLIENT,
  element: 'presence',
  fields: {
    from: JIDAttribute('from'),
    id: attribute('id'),
    lang: languageAttribute(),
    to: JIDAttribute('to')
  },
  namespace: streamNS,
  path: 'presence',
  type: streamNS,
  typeField: 'streamType'
})); // --------------------------------------------------------------------


const _SASL = [{
  element: 'mechanisms',
  fields: {
    mechanisms: multipleChildText(null, 'mechanism')
  },
  namespace: NS_SASL,
  path: 'features.sasl'
}, {
  element: 'abort',
  namespace: NS_SASL,
  path: 'sasl',
  type: 'abort',
  typeField: 'type'
}, {
  element: 'auth',
  fields: {
    mechanism: attribute('mechanism'),
    value: textBuffer('base64')
  },
  namespace: NS_SASL,
  path: 'sasl',
  type: 'auth',
  typeField: 'type'
}, {
  element: 'challenge',
  fields: {
    value: textBuffer('base64')
  },
  namespace: NS_SASL,
  path: 'sasl',
  type: 'challenge',
  typeField: 'type'
}, {
  element: 'response',
  fields: {
    value: textBuffer('base64')
  },
  namespace: NS_SASL,
  path: 'sasl',
  type: 'response',
  typeField: 'type'
}, {
  element: 'success',
  fields: {
    value: textBuffer('base64')
  },
  namespace: NS_SASL,
  path: 'sasl',
  type: 'success',
  typeField: 'type'
}, {
  element: 'failure',
  fields: {
    alternateLanguageText: childAlternateLanguageText(NS_SASL, 'text'),
    condition: childEnum(NS_SASL, Object.values(SASLFailureCondition)),
    text: childText(NS_SASL, 'text')
  },
  namespace: NS_SASL,
  path: 'sasl',
  type: 'failure',
  typeField: 'type'
}]; // --------------------------------------------------------------------

const _STARTTLS = [{
  aliases: ['features.tls'],
  defaultType: 'start',
  element: 'starttls',
  fields: {
    required: childBoolean(null, 'required')
  },
  namespace: NS_STARTTLS,
  path: 'tls',
  type: 'start',
  typeField: 'type'
}, {
  element: 'proceed',
  namespace: NS_STARTTLS,
  path: 'tls',
  type: 'proceed',
  typeField: 'type'
}, {
  element: 'failure',
  namespace: NS_STARTTLS,
  path: 'tls',
  type: 'failure',
  typeField: 'type'
}]; // --------------------------------------------------------------------

const _Bind = {
  aliases: ['features.bind', 'iq.bind'],
  element: 'bind',
  fields: {
    jid: childText(null, 'jid'),
    resource: childText(null, 'resource')
  },
  namespace: NS_BIND
}; // --------------------------------------------------------------------

const Protocol$2 = [_Stream, _StreamFeatures, _StreamError, ..._StanzaError, ..._SASL, ..._STARTTLS, ..._IQ, ..._Message, ..._Presence, _Bind]; // ====================================================================

const Protocol$3 = [extendStreamFeatures({
  rosterPreApproval: childBoolean(NS_SUBSCRIPTION_PREAPPROVAL, 'sub'),
  rosterVersioning: childBoolean(NS_ROSTER_VERSIONING, 'ver')
}), extendMessage({
  alternateLanguageBodies: childAlternateLanguageText(null, 'body'),
  alternateLanguageSubjects: childAlternateLanguageText(null, 'subject'),
  body: childText(null, 'body'),
  hasSubject: childBoolean(null, 'subject'),
  parentThread: childAttribute(null, 'thread', 'parent'),
  subject: childText(null, 'subject'),
  thread: childText(null, 'thread'),
  type: attribute('type')
}), extendPresence({
  alternateLanguageStatuses: childAlternateLanguageText(null, 'status'),
  priority: childInteger(null, 'priority', 0),
  show: childText(null, 'show'),
  status: childText(null, 'status'),
  type: attribute('type')
}), {
  element: 'query',
  fields: {
    version: attribute('ver', undefined, {
      emitEmpty: true
    })
  },
  namespace: NS_ROSTER,
  path: 'iq.roster'
}, {
  aliases: [{
    path: 'iq.roster.items',
    multiple: true
  }],
  element: 'item',
  fields: {
    groups: multipleChildText(null, 'group'),
    jid: JIDAttribute('jid'),
    name: attribute('name'),
    pending: attribute('ask'),
    preApproved: booleanAttribute('approved'),
    subscription: attribute('subscription')
  },
  namespace: NS_ROSTER
}]; // ====================================================================

const Protocol$4 = [{
  element: 'open',
  fields: {
    from: attribute('from'),
    id: attribute('id'),
    lang: languageAttribute(),
    to: attribute('to'),
    version: attribute('version')
  },
  namespace: NS_FRAMING,
  path: 'stream',
  type: 'open'
}, {
  element: 'close',
  fields: {
    seeOtherURI: attribute('see-other-uri')
  },
  namespace: NS_FRAMING,
  path: 'stream',
  type: 'close'
}]; // ====================================================================

const Protocol$5 = [{
  aliases: [{
    path: 'message.forms',
    multiple: true
  }],
  element: 'x',
  fields: {
    instructions: Object.assign(Object.assign({}, multipleChildText(null, 'instructions')), {
      exportOrder: 2
    }),
    reported: Object.assign(Object.assign({}, splicePath(null, 'reported', 'dataformField', true)), {
      exportOrder: 3
    }),
    title: Object.assign(Object.assign({}, childText(null, 'title')), {
      exportOrder: 1
    }),
    type: attribute('type')
  },
  namespace: NS_DATAFORM,
  optionalNamespaces: {
    xdv: NS_DATAFORM_VALIDATION
  },
  path: 'dataform'
}, {
  aliases: [{
    path: 'dataform.fields',
    multiple: true
  }, {
    path: 'dataform.items.fields',
    multiple: true
  }],
  element: 'field',
  fields: {
    description: childText(null, 'desc'),
    label: attribute('label'),
    name: attribute('var'),
    rawValues: Object.assign(Object.assign({}, multipleChildText(null, 'value')), {
      exporter: () => null
    }),
    required: childBoolean(null, 'required'),
    type: attribute('type'),
    value: {
      importer(xml, context) {
        const fieldType = xml.getAttribute('type');
        const converter = multipleChildText(NS_DATAFORM, 'value');
        const rawValues = converter.importer(xml, context);
        const singleValue = rawValues[0];

        switch (fieldType) {
          case DataFormFieldType.TextMultiple:
          case DataFormFieldType.ListMultiple:
          case DataFormFieldType.JIDMultiple:
            return rawValues;

          case DataFormFieldType.Hidden:
          case DataFormFieldType.Fixed:
            if (rawValues.length === 1) {
              return singleValue;
            }

            return rawValues;

          case DataFormFieldType.Boolean:
            if (singleValue) {
              return singleValue === '1' || singleValue === 'true';
            }

            break;

          default:
            return singleValue;
        }
      },

      exporter(xml, data, context) {
        const converter = multipleChildText(null, 'value');
        let outputData = [];
        const rawData = context.data && context.data.rawValues ? context.data.rawValues[0] : undefined;

        if (typeof data === 'boolean') {
          if (rawData === 'true' || rawData === 'false') {
            outputData = [rawData];
          } else {
            outputData = [data ? '1' : '0'];
          }
        } else if (!Array.isArray(data)) {
          outputData = [data.toString()];
        } else {
          for (const value of data) {
            outputData.push(value.toString());
          }
        }

        converter.exporter(xml, outputData, Object.assign({}, context, {
          namespace: NS_DATAFORM
        }));
      }

    }
  },
  namespace: NS_DATAFORM,
  path: 'dataformField'
}, {
  aliases: [{
    path: 'dataform.fields.options',
    multiple: true
  }],
  element: 'option',
  fields: {
    label: attribute('label'),
    value: childText(null, 'value')
  },
  namespace: NS_DATAFORM
}, {
  aliases: [{
    path: 'dataform.items',
    multiple: true
  }],
  element: 'item',
  namespace: NS_DATAFORM
}, // ----------------------------------------------------------------
// XEP-0122: Data Forms Validation
// ----------------------------------------------------------------
{
  element: 'validate',
  fields: {
    listMax: childIntegerAttribute(null, 'list-range', 'max'),
    listMin: childIntegerAttribute(null, 'list-range', 'min'),
    method: childEnum(null, ['basic', 'open', 'range', 'regex'], 'basic'),
    rangeMax: childAttribute(null, 'range', 'max'),
    rangeMin: childAttribute(null, 'range', 'min'),
    regex: childText(null, 'regex'),
    type: attribute('datatype', 'xs:string')
  },
  namespace: NS_DATAFORM_VALIDATION,
  path: 'dataform.fields.validation'
}]; // ====================================================================

const Protocol$6 = [{
  aliases: ['presence.legacyLastActivity', 'iq.lastActivity'],
  element: 'query',
  fields: {
    seconds: integerAttribute('seconds'),
    status: text()
  },
  namespace: NS_LAST_ACTIVITY
}]; // ====================================================================

const Protocol$7 = [{
  element: 'query',
  fields: {
    activeList: childAttribute(null, 'active', 'name'),
    defaultList: childAttribute(null, 'default', 'name')
  },
  namespace: NS_PRIVACY,
  path: 'iq.privacy'
}, {
  aliases: [{
    path: 'iq.privacy.lists',
    multiple: true
  }],
  element: 'list',
  fields: {
    name: attribute('name')
  },
  namespace: NS_PRIVACY
}, {
  aliases: [{
    path: 'iq.privacy.lists.items',
    multiple: true
  }],
  element: 'item',
  fields: {
    action: attribute('action'),
    incomingPresence: childBoolean(null, 'presence-in'),
    iq: childBoolean(null, 'iq'),
    messages: childBoolean(null, 'message'),
    order: integerAttribute('order'),
    outgoingPresence: childBoolean(null, 'presence-out'),
    type: attribute('type'),
    value: attribute('value')
  },
  namespace: NS_PRIVACY
}]; // ====================================================================

const Protocol$8 = [{
  aliases: ['iq.disco', 'message.disco', 'features.disco'],
  childrenExportOrder: {
    identities: 100
  },
  element: 'query',
  fields: {
    features: multipleChildAttribute(null, 'feature', 'var'),
    node: attribute('node')
  },
  namespace: NS_DISCO_INFO,
  path: 'disco',
  type: 'info',
  typeField: 'type'
}, {
  aliases: [{
    path: 'disco.identities',
    selector: 'info',
    multiple: true
  }],
  element: 'identity',
  fields: {
    category: attribute('category'),
    lang: languageAttribute(),
    name: attribute('name'),
    type: attribute('type')
  },
  namespace: NS_DISCO_INFO
}, {
  aliases: [{
    path: 'disco.items',
    multiple: true,
    selector: 'items'
  }],
  element: 'item',
  fields: {
    jid: JIDAttribute('jid'),
    name: attribute('name'),
    node: attribute('node')
  },
  namespace: NS_DISCO_ITEMS
}, {
  aliases: [{
    path: 'disco.items',
    multiple: true,
    selector: 'info'
  }],
  element: 'item',
  fields: {
    category: JIDAttribute('category'),
    lang: languageAttribute(),
    name: attribute('name'),
    type: attribute('type')
  },
  namespace: NS_DISCO_INFO
}, addAlias(NS_DATAFORM, 'x', [// XEP-0128
{
  path: 'disco.extensions',
  multiple: true,
  selector: 'info'
}]), addAlias(NS_RSM, 'set', [{
  path: 'disco.paging',
  selector: 'items'
}]), {
  aliases: ['iq.disco', 'message.disco', 'features.disco'],
  element: 'query',
  fields: {
    node: attribute('node')
  },
  namespace: NS_DISCO_ITEMS,
  path: 'disco',
  type: 'items',
  typeField: 'type'
}]; // ====================================================================

const Protocol$9 = [extendMessage({
  addresses: splicePath(NS_ADDRESS, 'addresses', 'extendedAddress', true)
}), extendPresence({
  addresses: splicePath(NS_ADDRESS, 'addresses', 'extendedAddress', true)
}), {
  element: 'address',
  fields: {
    alternateLanguageDescriptions: childAlternateLanguageText(null, 'desc'),
    delivered: booleanAttribute('delivered'),
    description: attribute('desc'),
    jid: JIDAttribute('jid'),
    node: attribute('node'),
    type: attribute('type'),
    uri: attribute('uri')
  },
  namespace: NS_ADDRESS,
  path: 'extendedAddress'
}]; // ====================================================================

const Protocol$a = [addAlias(NS_DATAFORM, 'x', [{
  path: 'iq.muc.form',
  selector: 'configure'
}]), {
  defaultType: 'info',
  element: 'x',
  fields: {
    password: childText(null, 'password')
  },
  namespace: NS_MUC,
  path: 'presence.muc',
  type: 'join',
  typeField: 'type'
}, {
  aliases: [{
    path: 'presence.muc.history',
    selector: 'join'
  }],
  element: 'history',
  fields: {
    maxCharacters: integerAttribute('maxchars'),
    maxStanzas: integerAttribute('maxstanzas'),
    seconds: integerAttribute('seconds'),
    since: dateAttribute('since')
  },
  namespace: NS_MUC
}, {
  aliases: ['presence.muc', 'message.muc'],
  defaultType: 'info',
  element: 'x',
  fields: {
    action: childEnum(null, ['invite', 'decline', 'destroy']),
    actor: splicePath(null, 'item', 'mucactor'),
    affiliation: childAttribute(null, 'item', 'affiliation'),
    jid: childJIDAttribute(null, 'item', 'jid'),
    nick: childAttribute(null, 'item', 'nick'),
    password: childText(null, 'password'),
    reason: deepChildText([{
      namespace: null,
      element: 'item'
    }, {
      namespace: null,
      element: 'reason'
    }]),
    role: childAttribute(null, 'item', 'role'),
    statusCodes: multipleChildAttribute(null, 'status', 'code')
  },
  namespace: NS_MUC_USER,
  type: 'info',
  typeField: 'type',
  typeOrder: 1
}, {
  element: 'actor',
  fields: {
    jid: JIDAttribute('jid'),
    nick: attribute('nick')
  },
  namespace: NS_MUC_USER,
  path: 'mucactor'
}, {
  element: 'destroy',
  fields: {
    jid: JIDAttribute('jid'),
    password: childText(null, 'password'),
    reason: childText(null, 'reason')
  },
  namespace: NS_MUC_USER,
  path: 'presence.muc.destroy'
}, {
  aliases: [{
    path: 'message.muc.invite',
    multiple: true
  }],
  element: 'invite',
  fields: {
    continue: childBoolean(null, 'continue'),
    from: JIDAttribute('from'),
    reason: childText(null, 'reason'),
    thread: childAttribute(null, 'continue', 'thread'),
    to: JIDAttribute('to')
  },
  namespace: NS_MUC_USER
}, {
  element: 'decline',
  fields: {
    from: JIDAttribute('from'),
    reason: childText(null, 'reason'),
    to: JIDAttribute('to')
  },
  namespace: NS_MUC_USER,
  path: 'message.muc',
  type: 'decline'
}, {
  element: 'query',
  namespace: NS_MUC_ADMIN,
  path: 'iq.muc',
  type: 'user-list',
  typeField: 'type'
}, {
  aliases: [{
    path: 'iq.muc.users',
    multiple: true,
    selector: 'user-list'
  }],
  element: 'item',
  fields: {
    affiliation: attribute('affiliation'),
    jid: JIDAttribute('jid'),
    nick: attribute('nick'),
    reason: childText(null, 'reason'),
    role: attribute('role')
  },
  namespace: NS_MUC_ADMIN
}, {
  aliases: ['iq.muc.users.actor'],
  element: 'actor',
  fields: {
    jid: JIDAttribute('jid'),
    nick: attribute('nick')
  },
  namespace: NS_MUC_ADMIN
}, {
  element: 'query',
  namespace: NS_MUC_OWNER,
  path: 'iq.muc',
  type: 'configure',
  typeField: 'type'
}, {
  aliases: [{
    path: 'iq.muc.destroy',
    selector: 'configure'
  }],
  element: 'destroy',
  fields: {
    jid: JIDAttribute('jid'),
    password: childText(null, 'password'),
    reason: childText(null, 'reason')
  },
  namespace: NS_MUC_OWNER
}, // XEP-0249
{
  element: 'x',
  fields: {
    action: staticValue('invite'),
    continue: booleanAttribute('continue'),
    jid: JIDAttribute('jid'),
    legacyReason: text(),
    password: attribute('password'),
    reason: attribute('reason'),
    thread: attribute('thread')
  },
  namespace: NS_MUC_DIRECT_INVITE,
  path: 'message.muc',
  type: 'direct-invite',
  typeOrder: 2
}, // XEP-0307
{
  element: 'unique',
  fields: {
    name: text()
  },
  namespace: NS_MUC_UNIQUE,
  path: 'iq.muc',
  type: 'unique'
}, extendMessage({
  legacyMUC: {
    exporter(xml, value, context) {
      const out = context.registry ? context.registry.export('message.muc', Object.assign(Object.assign({}, value), {
        type: 'direct-invite'
      })) : undefined;

      if (out) {
        xml.appendChild(out);
      }
    },

    exportOrder: 100001,

    importer(xml, context) {
      const mucElement = findAll(xml, NS_MUC_USER, 'x')[0];

      if (!mucElement) {
        return;
      }

      const confElement = findAll(xml, NS_MUC_DIRECT_INVITE, 'x')[0];

      if (!confElement) {
        return;
      }

      return context.registry ? context.registry.import(confElement, Object.assign(Object.assign({}, context), {
        path: 'message'
      })) : undefined;
    },

    importOrder: -1
  }
})]; // ====================================================================

const Protocol$b = [{
  aliases: ['iq.ibb', 'message.ibb'],
  element: 'open',
  fields: {
    ack: {
      importer(xml, context) {
        const stanza = attribute('stanza', 'iq').importer(xml, context);
        return stanza !== 'message';
      },

      exporter(xml, data, context) {
        attribute('stanza').exporter(xml, data ? 'iq' : 'message', context);
      }

    },
    blockSize: integerAttribute('block-size'),
    sid: attribute('sid')
  },
  namespace: NS_IBB,
  type: 'open',
  typeField: 'action'
}, {
  aliases: ['iq.ibb', 'message.ibb'],
  element: 'close',
  fields: {
    sid: attribute('sid')
  },
  namespace: NS_IBB,
  type: 'close',
  typeField: 'action'
}, {
  aliases: ['iq.ibb', 'message.ibb'],
  element: 'data',
  fields: {
    data: textBuffer('base64'),
    seq: integerAttribute('seq'),
    sid: attribute('sid')
  },
  namespace: NS_IBB,
  type: 'data',
  typeField: 'action'
}]; // ====================================================================

const Protocol$c = [{
  aliases: [{
    path: 'bookmarkStorage',
    impliedType: true
  }, {
    path: 'iq.privateStorage.bookmarks',
    impliedType: true
  }, ...pubsubItemContentAliases()],
  element: 'storage',
  namespace: NS_BOOKMARKS,
  type: NS_BOOKMARKS,
  typeField: 'itemType'
}, {
  aliases: [{
    path: 'bookmarkStorage.rooms',
    multiple: true
  }],
  element: 'conference',
  fields: {
    autoJoin: booleanAttribute('autojoin'),
    jid: JIDAttribute('jid'),
    name: attribute('name'),
    nick: childText(null, 'nick'),
    password: childText(null, 'password')
  },
  namespace: NS_BOOKMARKS
}]; // ====================================================================
// tslint:enable

const Protocol$d = {
  element: 'query',
  namespace: NS_PRIVATE,
  path: 'iq.privateStorage'
}; // ====================================================================

const Protocol$e = [addAlias(NS_DATAFORM, 'x', ['iq.command.form']), extendStanzaError({
  commandError: childEnum(NS_ADHOC_COMMANDS, ['bad-action', 'bad-locale', 'bad-payload', 'bad-sessionid', 'malformed-action', 'session-expired'])
}), {
  element: 'command',
  fields: {
    action: attribute('action'),
    node: attribute('node'),
    sid: attribute('sessionid'),
    status: attribute('status')
  },
  namespace: NS_ADHOC_COMMANDS,
  path: 'iq.command'
}, {
  element: 'actions',
  fields: {
    complete: childBoolean(null, 'complete'),
    execute: attribute('execute'),
    next: childBoolean(null, 'next'),
    prev: childBoolean(null, 'prev')
  },
  namespace: NS_ADHOC_COMMANDS,
  path: 'iq.command.availableActions'
}, {
  aliases: [{
    path: 'iq.command.notes',
    multiple: true
  }],
  element: 'note',
  fields: {
    type: attribute('type'),
    value: text()
  },
  namespace: NS_ADHOC_COMMANDS
}]; // ====================================================================

const path = 'vcardTemp.records';

function vcardField(element, type) {
  return {
    aliases: [{
      multiple: true,
      path
    }],
    element,
    fields: {
      value: text()
    },
    namespace: NS_VCARD_TEMP,
    type,
    typeField: 'type'
  };
}

const Protocol$f = [{
  aliases: [{
    path: 'iq.vcard'
  }],
  defaultType: NS_VCARD_TEMP,
  element: 'vCard',
  fields: {
    fullName: childText(null, 'FN')
  },
  namespace: NS_VCARD_TEMP,
  path: 'vcardTemp',
  type: NS_VCARD_TEMP,
  typeField: 'format'
}, {
  element: 'N',
  fields: {
    additional: Object.assign(Object.assign({}, childText(null, 'MIDDLE')), {
      order: 3
    }),
    family: Object.assign(Object.assign({}, childText(null, 'FAMILY')), {
      order: 1
    }),
    given: Object.assign(Object.assign({}, childText(null, 'GIVEN')), {
      order: 2
    }),
    prefix: Object.assign(Object.assign({}, childText(null, 'PREFIX')), {
      order: 4
    }),
    suffix: Object.assign(Object.assign({}, childText(null, 'SUFFIX')), {
      order: 5
    })
  },
  namespace: NS_VCARD_TEMP,
  path: 'vcardTemp.name'
}, vcardField('NICKNAME', 'nickname'), vcardField('BDAY', 'birthday'), vcardField('JABBERID', 'jid'), vcardField('TZ', 'timezone'), vcardField('TITLE', 'title'), vcardField('ROLE', 'role'), vcardField('URL', 'url'), vcardField('NOTE', 'note'), vcardField('SORT-STRING', 'sort'), vcardField('UID', 'uid'), vcardField('REV', 'revision'), vcardField('PRODID', 'productId'), vcardField('DESC', 'description'), {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'EMAIL',
  fields: {
    preferred: childBoolean(null, 'PREF'),
    types: multipleChildEnum(null, [['home', 'HOME'], ['work', 'WORK'], ['internet', 'INTERNET']]),
    value: childText(null, 'USERID')
  },
  namespace: NS_VCARD_TEMP,
  type: 'email'
}, {
  aliases: [{
    path,
    multiple: true
  }],
  element: 'ORG',
  fields: {
    units: Object.assign(Object.assign({}, multipleChildText(null, 'ORGUNIT')), {
      order: 2
    }),
    value: Object.assign(Object.assign({}, childText(null, 'ORGNAME')), {
      order: 1
    })
  },
  namespace: NS_VCARD_TEMP,
  type: 'organization',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'ADR',
  fields: {
    city: childText(null, 'LOCALITY'),
    code: childText(null, 'PCODE'),
    country: childText(null, 'CTRY'),
    pobox: childText(null, 'POBOX'),
    preferred: childBoolean(null, 'PREF'),
    region: childText(null, 'REGION'),
    street: childText(null, 'STREET'),
    street2: childText(null, 'EXTADD'),
    types: multipleChildEnum(null, [['home', 'HOME'], ['work', 'WORK'], ['domestic', 'DOM'], ['international', 'INTL'], ['postal', 'POSTAL'], ['parcel', 'PARCEL']])
  },
  namespace: NS_VCARD_TEMP,
  type: 'address',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'LABEL',
  fields: {
    lines: multipleChildText(null, 'LINE'),
    preferred: childBoolean(null, 'PREF'),
    types: multipleChildEnum(null, [['home', 'HOME'], ['work', 'WORK']])
  },
  namespace: NS_VCARD_TEMP,
  type: 'addressLabel',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'TEL',
  fields: {
    preferred: childBoolean(null, 'PREF'),
    types: multipleChildEnum(null, [['home', 'HOME'], ['work', 'WORK'], ['cell', 'CELL'], ['fax', 'FAX'], ['voice', 'VOICE'], ['msg', 'MSG']]),
    value: childText(null, 'NUMBER', '', true)
  },
  namespace: NS_VCARD_TEMP,
  type: 'tel',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'PHOTO',
  fields: {
    data: childText(null, 'BINVAL'),
    mediaType: childText(null, 'TYPE'),
    url: childText(null, 'EXTVAL')
  },
  namespace: NS_VCARD_TEMP,
  type: 'photo',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'LOGO',
  fields: {
    data: childText(null, 'BINVAL'),
    mediaType: childText(null, 'TYPE'),
    url: childText(null, 'EXTVAL')
  },
  namespace: NS_VCARD_TEMP,
  type: 'logo',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path
  }],
  element: 'CATEGORIES',
  fields: {
    value: multipleChildText(null, 'KEYWORD')
  },
  namespace: NS_VCARD_TEMP,
  type: 'categories',
  typeField: 'type'
}]; // ====================================================================

const Protocol$g = [addAlias(NS_DATAFORM, 'x', ['iq.search.form']), addAlias(NS_RSM, 'set', ['iq.search.paging']), {
  element: 'query',
  fields: {
    email: childText(null, 'email'),
    familyName: childText(null, 'last'),
    givenName: childText(null, 'first'),
    instructions: childText(null, 'instructions'),
    nick: childText(null, 'nick')
  },
  namespace: NS_SEARCH,
  path: 'iq.search'
}, {
  aliases: [{
    path: 'iq.search.items',
    multiple: true
  }],
  element: 'item',
  fields: {
    email: childText(null, 'email'),
    familyName: childText(null, 'last'),
    givenName: childText(null, 'first'),
    jid: JIDAttribute('jid'),
    nick: childText(null, 'nick')
  },
  namespace: NS_SEARCH
}]; // ====================================================================

const Protocol$h = {
  aliases: ['iq.pubsub.paging'],
  element: 'set',
  fields: {
    after: childText(null, 'after'),
    before: childText(null, 'before'),
    count: childInteger(null, 'count'),
    first: childText(null, 'first'),
    firstIndex: childIntegerAttribute(null, 'first', 'index'),
    index: childInteger(null, 'index'),
    last: childText(null, 'last'),
    max: childInteger(null, 'max')
  },
  namespace: NS_RSM,
  path: 'paging'
}; // ====================================================================

const dateOrPresenceAttribute = name => ({
  importer(xml) {
    const data = xml.getAttribute(name);

    if (data === 'presence') {
      return data;
    }

    if (data) {
      return new Date(data);
    }
  },

  exporter(xml, value) {
    let data;

    if (typeof value === 'string') {
      data = value;
    } else {
      data = value.toISOString();
    }

    xml.setAttribute(name, data);
  }

});

const SubscriptionFields = {
  configurable: childBoolean(null, 'subscribe-options'),
  configurationRequired: deepChildBoolean([{
    namespace: null,
    element: 'subscribe-options'
  }, {
    namespace: null,
    element: 'required'
  }]),
  jid: JIDAttribute('jid'),
  node: attribute('node'),
  state: attribute('subscription'),
  subid: attribute('subid')
};
const NodeOnlyField = {
  node: attribute('node')
};
const Protocol$i = [{
  aliases: ['pubsub', 'iq.pubsub', 'message.pubsub'],
  childrenExportOrder: {
    configure: 0,
    create: 100,
    publish: 100,
    subscribe: 100,
    subscriptionOptions: 0
  },
  defaultType: 'user',
  element: 'pubsub',
  fields: {
    publishOptions: splicePath(null, 'publish-options', 'dataform')
  },
  namespace: NS_PUBSUB,
  type: 'user',
  typeField: 'context'
}, {
  aliases: ['pubsub', 'iq.pubsub', 'message.pubsub'],
  defaultType: 'user',
  element: 'pubsub',
  fields: {
    purge: childAttribute(null, 'purge', 'node')
  },
  namespace: NS_PUBSUB_OWNER,
  type: 'owner',
  typeField: 'context'
}, addAlias(NS_DATAFORM, 'x', ['iq.pubsub.configure.form', 'iq.pubsub.defaultConfiguration.form', 'iq.pubsub.defaultSubscriptionOptions.form', 'iq.pubsub.subscriptionOptions.form', 'message.pubsub.configuration.form']), addAlias(NS_RSM, 'set', ['iq.pubsub.fetch.paging']), extendStanzaError({
  pubsubError: childEnum(NS_PUBSUB_ERRORS, Object.values(PubsubErrorCondition)),
  pubsubUnsupportedFeature: childAttribute(NS_PUBSUB_ERRORS, 'unsupported', 'feature')
}), {
  element: 'subscribe',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.subscribe'
}, {
  element: 'unsubscribe',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node'),
    subid: attribute('subid')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.unsubscribe'
}, {
  element: 'options',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node'),
    subid: attribute('subid')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.subscriptionOptions'
}, {
  aliases: [{
    path: 'iq.pubsub.subscriptions',
    selector: 'user',
    impliedType: true
  }],
  element: 'subscriptions',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB,
  type: 'user'
}, {
  aliases: [{
    path: 'iq.pubsub.subscriptions',
    selector: 'owner',
    impliedType: true
  }],
  element: 'subscriptions',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB_OWNER,
  type: 'owner'
}, {
  aliases: [{
    path: 'iq.pubsub.subscription',
    selector: 'owner'
  }, {
    impliedType: true,
    multiple: true,
    path: 'iq.pubsub.subscriptions.items',
    selector: 'owner'
  }],
  element: 'subscription',
  fields: SubscriptionFields,
  namespace: NS_PUBSUB
}, {
  aliases: [{
    path: 'iq.pubsub.subscription',
    selector: 'user'
  }, {
    impliedType: true,
    multiple: true,
    path: 'iq.pubsub.subscriptions.items',
    selector: 'user'
  }],
  element: 'subscription',
  fields: SubscriptionFields,
  namespace: NS_PUBSUB,
  type: 'user'
}, {
  aliases: [{
    impliedType: true,
    multiple: true,
    path: 'iq.pubsub.subscriptions.items',
    selector: 'owner'
  }],
  element: 'subscription',
  fields: SubscriptionFields,
  namespace: NS_PUBSUB_OWNER,
  type: 'owner'
}, {
  aliases: [{
    path: 'iq.pubsub.affiliations',
    selector: 'user',
    impliedType: true
  }, {
    path: 'message.pubsub.affiliations',
    selector: 'user',
    impliedType: true
  }],
  element: 'affiliations',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB,
  type: 'user'
}, {
  aliases: [{
    path: 'iq.pubsub.affiliations',
    selector: 'owner',
    impliedType: true
  }],
  element: 'affiliations',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB_OWNER,
  type: 'owner'
}, {
  aliases: [{
    impliedType: true,
    multiple: true,
    path: 'iq.pubsub.affiliations.items',
    selector: 'user'
  }, {
    impliedType: true,
    multiple: true,
    path: 'message.pubsub.affiliations.items',
    selector: 'user'
  }],
  element: 'affiliation',
  fields: {
    affiliation: attribute('affiliation'),
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB,
  type: 'user'
}, {
  aliases: [{
    impliedType: true,
    multiple: true,
    path: 'iq.pubsub.affiliations.items',
    selector: 'owner'
  }],
  element: 'affiliation',
  fields: {
    affiliation: attribute('affiliation'),
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB_OWNER,
  type: 'owner'
}, {
  element: 'create',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.create'
}, {
  aliases: [{
    path: 'iq.pubsub.destroy',
    selector: 'owner'
  }],
  element: 'delete',
  fields: {
    node: attribute('node'),
    redirect: childAttribute(null, 'redirect', 'uri')
  },
  namespace: NS_PUBSUB_OWNER
}, {
  aliases: [{
    path: 'iq.pubsub.configure',
    selector: 'owner',
    impliedType: true
  }],
  element: 'configure',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB_OWNER,
  type: 'owner'
}, {
  aliases: [{
    path: 'iq.pubsub.configure',
    selector: 'user',
    impliedType: true
  }],
  element: 'configure',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB,
  type: 'user'
}, {
  element: 'default',
  fields: {
    node: attribute('node')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.defaultSubscriptionOptions'
}, {
  element: 'default',
  fields: {},
  namespace: NS_PUBSUB_OWNER,
  path: 'iq.pubsub.defaultConfiguration'
}, {
  element: 'publish',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.publish'
}, {
  element: 'retract',
  fields: {
    id: childAttribute(null, 'item', 'id'),
    node: attribute('node'),
    notify: booleanAttribute('notify')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.retract'
}, {
  element: 'items',
  fields: {
    max: integerAttribute('max_items'),
    node: attribute('node')
  },
  namespace: NS_PUBSUB,
  path: 'iq.pubsub.fetch'
}, {
  aliases: ['pubsubitem', 'iq.pubsub.publish.item', {
    multiple: true,
    path: 'iq.pubsub.fetch.items'
  }],
  element: 'item',
  fields: {
    id: attribute('id'),
    publisher: JIDAttribute('publisher')
  },
  namespace: NS_PUBSUB
}, {
  element: 'event',
  fields: {
    eventType: childEnum(null, ['purge', 'delete', 'subscription', 'configuration', 'items'])
  },
  namespace: NS_PUBSUB_EVENT,
  path: 'message.pubsub',
  type: 'event',
  typeField: 'context'
}, {
  aliases: [{
    path: 'message.pubsub.items.published',
    multiple: true
  }],
  element: 'item',
  fields: {
    id: attribute('id'),
    publisher: JIDAttribute('publisher')
  },
  namespace: NS_PUBSUB_EVENT,
  path: 'pubsubeventitem'
}, {
  element: 'purge',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB_EVENT,
  path: 'message.pubsub.purge'
}, {
  element: 'delete',
  fields: {
    node: attribute('node'),
    redirect: childAttribute(null, 'redirect', 'uri')
  },
  namespace: NS_PUBSUB_EVENT,
  path: 'message.pubsub.delete'
}, {
  aliases: [{
    path: 'message.pubsub.subscription',
    selector: 'event',
    impliedType: true
  }],
  element: 'subscription',
  fields: {
    expires: dateOrPresenceAttribute('expiry'),
    jid: JIDAttribute('jid'),
    node: attribute('node'),
    subid: attribute('subid'),
    type: attribute('subscription')
  },
  namespace: NS_PUBSUB_EVENT,
  type: 'event'
}, {
  element: 'configuration',
  fields: NodeOnlyField,
  namespace: NS_PUBSUB_EVENT,
  path: 'message.pubsub.configuration'
}, {
  element: 'items',
  fields: {
    node: attribute('node'),
    retracted: multipleChildAttribute(null, 'retract', 'id')
  },
  namespace: NS_PUBSUB_EVENT,
  path: 'message.pubsub.items'
}]; // ====================================================================

const Protocol$j = [{
  element: 'query',
  fields: {
    activate: childText(null, 'activate'),
    address: attribute('dstaddr'),
    candidateUsed: childJIDAttribute(null, 'streamhost-used', 'jid'),
    mode: attribute('mode', 'tcp'),
    sid: attribute('sid'),
    udpSuccess: childAttribute(null, 'udpsuccess', 'dstaddr')
  },
  namespace: NS_SOCKS5,
  path: 'iq.socks5'
}, {
  aliases: [{
    multiple: true,
    path: 'iq.socks5.candidates'
  }],
  element: 'streamhost',
  fields: {
    host: attribute('host'),
    jid: JIDAttribute('jid'),
    port: integerAttribute('port'),
    uri: attribute('uri')
  },
  namespace: NS_SOCKS5
}]; // ====================================================================

const Protocol$k = [{
  aliases: [{
    multiple: true,
    path: 'message.links'
  }],
  element: 'x',
  fields: {
    description: childText(null, 'desc'),
    url: childText(null, 'url')
  },
  namespace: NS_OOB
}, {
  element: 'query',
  fields: {
    description: childText(null, 'desc'),
    url: childText(null, 'url')
  },
  namespace: NS_OOB_TRANSFER,
  path: 'iq.transferLink'
}]; // ====================================================================

const Protocol$l = {
  element: 'html',
  fields: {
    alternateLanguageBodies: childAlternateLanguageRawElement(NS_XHTML, 'body', 'xhtmlim'),
    body: childLanguageRawElement(NS_XHTML, 'body', 'xhtmlim')
  },
  namespace: NS_XHTML_IM,
  path: 'message.html'
}; // ====================================================================

const Protocol$m = [extendStreamFeatures({
  inbandRegistration: childBoolean(NS_INBAND_REGISTRATION, 'register')
}), addAlias(NS_DATAFORM, 'x', ['iq.account.form']), addAlias(NS_OOB, 'x', ['iq.account.registrationLink']), {
  element: 'query',
  fields: {
    address: childText(null, 'address'),
    date: childDate(null, 'date'),
    email: childText(null, 'email'),
    familyName: childText(null, 'last'),
    fullName: childText(null, 'name'),
    givenName: childText(null, 'first'),
    instructions: childText(null, 'instructions'),
    key: childText(null, 'key'),
    locality: childText(null, 'city'),
    misc: childText(null, 'misc'),
    nick: childText(null, 'nick'),
    password: childText(null, 'password'),
    phone: childText(null, 'phone'),
    postalCode: childText(null, 'zip'),
    region: childText(null, 'state'),
    registered: childBoolean(null, 'registered'),
    remove: childBoolean(null, 'remove'),
    text: childText(null, 'text'),
    uri: childText(null, 'uri'),
    username: childText(null, 'username')
  },
  namespace: NS_REGISTER,
  path: 'iq.account'
}]; // ====================================================================

const Protocol$n = {
  aliases: [{
    path: 'message.geoloc',
    impliedType: true
  }, {
    path: 'dataform.fields.geoloc',
    impliedType: true
  }, ...pubsubItemContentAliases()],
  element: 'geoloc',
  fields: {
    accuracy: childFloat(null, 'accuracy'),
    altitude: childFloat(null, 'alt'),
    altitudeAccuracy: childFloat(null, 'altaccuracy'),
    area: childText(null, 'area'),
    building: childText(null, 'building'),
    country: childText(null, 'country'),
    countryCode: childText(null, 'countrycode'),
    datum: childText(null, 'datum'),
    description: childText(null, 'description'),
    error: childFloat(null, 'error'),
    floor: childText(null, 'floor'),
    heading: childFloat(null, 'bearing'),
    lang: languageAttribute(),
    latitude: childFloat(null, 'lat'),
    locality: childText(null, 'locality'),
    longitude: childFloat(null, 'lon'),
    postalCode: childText(null, 'postalcode'),
    region: childText(null, 'region'),
    room: childText(null, 'room'),
    speed: childFloat(null, 'speed'),
    street: childText(null, 'street'),
    text: childText(null, 'text'),
    timestamp: childDate(null, 'timestamp'),
    tzo: childTimezoneOffset(null, 'tzo'),
    uri: childText(null, 'uri')
  },
  namespace: NS_GEOLOC,
  type: NS_GEOLOC
}; // ====================================================================

const Protocol$o = [{
  aliases: pubsubItemContentAliases(),
  element: 'data',
  fields: {
    data: textBuffer('base64')
  },
  namespace: NS_AVATAR_DATA,
  path: 'avatar',
  type: NS_AVATAR_DATA,
  typeField: 'itemType'
}, {
  aliases: pubsubItemContentAliases(),
  element: 'metadata',
  namespace: NS_AVATAR_METADATA,
  path: 'avatar',
  type: NS_AVATAR_METADATA,
  typeField: 'itemType'
}, {
  aliases: [{
    multiple: true,
    path: 'avatar.versions',
    selector: NS_AVATAR_METADATA
  }],
  element: 'info',
  fields: {
    bytes: integerAttribute('bytes'),
    height: integerAttribute('height'),
    id: attribute('id'),
    mediaType: attribute('type'),
    uri: attribute('url'),
    width: integerAttribute('width')
  },
  namespace: NS_AVATAR_METADATA
}, {
  aliases: [{
    multiple: true,
    path: 'avatar.pointers',
    selector: NS_AVATAR_METADATA
  }],
  element: 'pointer',
  fields: {
    bytes: integerAttribute('bytes'),
    height: integerAttribute('height'),
    id: attribute('id'),
    mediaType: attribute('type'),
    uri: attribute('url'),
    width: integerAttribute('width')
  },
  namespace: NS_AVATAR_METADATA
}]; // ====================================================================

var XEP0085 = extendMessage({
  chatState: childEnum(NS_CHAT_STATES, Object.values(ChatState))
}); // ====================================================================

const Protocol$p = {
  element: 'query',
  fields: {
    name: childText(null, 'name'),
    os: childText(null, 'os'),
    version: childText(null, 'version')
  },
  namespace: NS_VERSION,
  path: 'iq.softwareVersion'
}; // ====================================================================

const Protocol$q = {
  aliases: [{
    path: 'message.mood',
    impliedType: true
  }, ...pubsubItemContentAliases()],
  element: 'mood',
  fields: {
    alternateLanguageText: childAlternateLanguageText(null, 'text'),
    text: childText(null, 'text'),
    value: childEnum(null, USER_MOODS)
  },
  namespace: NS_MOOD,
  type: NS_MOOD
}; // ====================================================================

const Protocol$r = {
  aliases: [{
    path: 'activity',
    impliedType: true
  }, ...pubsubItemContentAliases()],
  element: 'activity',
  fields: {
    activity: childDoubleEnum(null, USER_ACTIVITY_GENERAL, USER_ACTIVITY_SPECIFIC),
    alternateLanguageText: childAlternateLanguageText(null, 'text'),
    text: childText(null, 'text')
  },
  namespace: NS_ACTIVITY,
  type: NS_ACTIVITY
}; // ====================================================================

const Protocol$s = {
  element: 'handshake',
  fields: {
    value: textBuffer('hex')
  },
  namespace: NS_COMPONENT,
  path: 'handshake'
}; // ====================================================================

const Protocol$t = {
  aliases: [{
    path: 'presence.legacyCapabilities',
    multiple: true
  }, {
    path: 'features.legacyCapabilities',
    multiple: true
  }],
  element: 'c',
  fields: {
    algorithm: attribute('hash'),
    legacy: staticValue(true),
    node: attribute('node'),
    value: attribute('ver')
  },
  namespace: NS_DISCO_LEGACY_CAPS
}; // ====================================================================

const Protocol$u = {
  aliases: [{
    impliedType: true,
    path: 'tune'
  }, ...pubsubItemContentAliases()],
  element: 'tune',
  fields: {
    artist: childText(null, 'artist'),
    length: childInteger(null, 'length'),
    rating: childInteger(null, 'rating'),
    source: childText(null, 'source'),
    title: childText(null, 'title'),
    track: childText(null, 'track'),
    uri: childText(null, 'uri')
  },
  namespace: NS_TUNE,
  type: NS_TUNE
}; // ====================================================================

const aliases = ['dataformLayout', {
  multiple: true,
  path: 'dataformLayout.contents'
}, {
  multiple: true,
  path: 'dataform.layout.contents'
}];
const Protocol$v = [{
  aliases: [{
    multiple: true,
    path: 'dataform.layout'
  }],
  element: 'page',
  fields: {
    label: attribute('label')
  },
  namespace: NS_DATAFORM_LAYOUT
}, {
  aliases,
  element: 'section',
  fields: {
    label: attribute('label')
  },
  namespace: NS_DATAFORM_LAYOUT,
  type: 'section',
  typeField: 'type'
}, {
  aliases,
  element: 'text',
  fields: {
    value: text()
  },
  namespace: NS_DATAFORM_LAYOUT,
  type: 'text',
  typeField: 'type'
}, {
  aliases,
  element: 'fieldref',
  fields: {
    field: attribute('var')
  },
  namespace: NS_DATAFORM_LAYOUT,
  type: 'fieldref',
  typeField: 'type'
}, {
  aliases,
  element: 'reportedref',
  namespace: NS_DATAFORM_LAYOUT,
  type: 'reportedref',
  typeField: 'type'
}]; // ====================================================================

const Protocol$w = {
  element: 'body',
  fields: {
    acceptMediaTypes: attribute('accept'),
    ack: integerAttribute('ack'),
    authId: attribute('authid'),
    characterSets: attribute('charsets'),
    condition: attribute('condition'),
    from: JIDAttribute('from'),
    key: attribute('key'),
    lang: languageAttribute(),
    maxClientRequests: integerAttribute('requests'),
    maxHoldOpen: integerAttribute('hold'),
    maxInactivityTime: integerAttribute('inactivity'),
    maxSessionPause: integerAttribute('maxpause'),
    maxWaitTime: integerAttribute('wait'),
    mediaType: attribute('content'),
    minPollingInterval: integerAttribute('polling'),
    newKey: attribute('newkey'),
    pauseSession: integerAttribute('pause'),
    report: integerAttribute('report'),
    rid: integerAttribute('rid'),
    route: attribute('string'),
    seeOtherURI: childText(null, 'uri'),
    sid: attribute('sid'),
    stream: attribute('stream'),
    time: integerAttribute('time'),
    to: JIDAttribute('to'),
    type: attribute('type'),
    version: attribute('ver'),
    // XEP-0206
    xmppRestart: namespacedBooleanAttribute('xmpp', NS_BOSH_XMPP, 'restart', undefined, {
      writeValue: value => {
        return value ? 'true' : 'false';
      }
    }),
    xmppRestartLogic: namespacedBooleanAttribute('xmpp', NS_BOSH_XMPP, 'restartlogic', undefined, {
      writeValue: value => {
        return value ? 'true' : 'false';
      }
    }),
    xmppVersion: namespacedAttribute('xmpp', NS_BOSH_XMPP, 'version')
  },
  namespace: NS_BOSH,
  path: 'bosh'
}; // ====================================================================

const Protocol$x = [extendMessage({
  headers: splicePath(NS_SHIM, 'headers', 'header', true)
}), extendPresence({
  headers: splicePath(NS_SHIM, 'headers', 'header', true)
}), {
  element: 'header',
  fields: {
    name: attribute('name'),
    value: text()
  },
  namespace: NS_SHIM,
  path: 'header'
}]; // ====================================================================

const Protocol$y = [{
  element: 'compression',
  fields: {
    methods: multipleChildText(null, 'method')
  },
  namespace: NS_COMPRESSION_FEATURE,
  path: 'features.compression'
}, {
  element: 'compress',
  fields: {
    method: childText(null, 'method')
  },
  namespace: NS_COMPRESSION,
  path: 'compression',
  type: 'start',
  typeField: 'type'
}, {
  aliases: ['error.compressionError'],
  element: 'failure',
  fields: {
    condition: childEnum(null, ['unsupported-method', 'setup-failed', 'processing-failed'])
  },
  namespace: NS_COMPRESSION,
  path: 'compression',
  type: 'failure',
  typeField: 'type'
}, {
  element: 'compressed',
  namespace: NS_COMPRESSION,
  path: 'compression',
  type: 'success',
  typeField: 'type'
}]; // ====================================================================

const Protocol$z = [extendMessage({
  rosterExchange: splicePath(NS_ROSTER_EXCHANGE, 'x', 'rosterExchange', true)
}), extendIQ({
  rosterExchange: splicePath(NS_ROSTER_EXCHANGE, 'x', 'rosterExchange', true)
}), {
  element: 'item',
  fields: {
    action: attribute('action'),
    groups: multipleChildText(null, 'group'),
    jid: JIDAttribute('jid'),
    name: attribute('name')
  },
  namespace: NS_ROSTER_EXCHANGE,
  path: 'rosterExchange'
}]; // ====================================================================

var XEP0153 = extendPresence({
  vcardAvatar: {
    importer(xml) {
      const update = findAll(xml, NS_VCARD_TEMP_UPDATE, 'x');

      if (!update.length) {
        return;
      }

      const photo = findAll(update[0], NS_VCARD_TEMP_UPDATE, 'photo');

      if (photo.length) {
        return photo[0].getText();
      } else {
        return true;
      }
    },

    exporter(xml, value) {
      const update = findOrCreate(xml, NS_VCARD_TEMP_UPDATE, 'x');

      if (value === '') {
        findOrCreate(update, NS_VCARD_TEMP_UPDATE, 'photo');
      } else if (value === true) {
        return;
      } else if (value) {
        const photo = findOrCreate(update, NS_VCARD_TEMP_UPDATE, 'photo');
        photo.children.push(value);
      }
    }

  }
}); // ====================================================================

const Protocol$A = [extendMessage({
  captcha: splicePath(NS_CAPTCHA, 'captcha', 'dataform')
}), extendIQ({
  captcha: splicePath(NS_CAPTCHA, 'captcha', 'dataform')
})]; // ====================================================================

const Protocol$B = [extendStanzaError({
  jingleError: childEnum(NS_JINGLE_ERRORS_1, Object.values(JingleErrorCondition))
}), {
  element: 'jingle',
  fields: {
    action: attribute('action'),
    initiator: JIDAttribute('initiator'),
    responder: JIDAttribute('responder'),
    sid: attribute('sid')
  },
  namespace: NS_JINGLE_1,
  path: 'iq.jingle'
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents'
  }],
  element: 'content',
  fields: {
    creator: attribute('creator'),
    disposition: attribute('disposition', 'session'),
    name: attribute('name'),
    senders: attribute('senders', 'both')
  },
  namespace: NS_JINGLE_1
}, {
  element: 'reason',
  fields: {
    alternativeSession: childText(null, 'alternative-session'),
    condition: childEnum(null, Object.values(JingleReasonCondition)),
    text: childText(null, 'text')
  },
  namespace: NS_JINGLE_1,
  path: 'iq.jingle.reason'
}]; // ====================================================================

function rtcpFeedback() {
  return {
    importer(xml, context) {
      let existing = findAll(xml, NS_JINGLE_RTP_RTCP_FB_0, 'rtcp-fb');
      const typeImporter = attribute('type').importer;
      const subtypeImporter = attribute('subtype').importer;
      const valueImporter = attribute('value').importer;
      const result = [];

      for (const child of existing) {
        const type = typeImporter(child, context);
        const parameter = subtypeImporter(child, context);
        result.push(parameter ? {
          type,
          parameter
        } : {
          type
        });
      }

      existing = findAll(xml, NS_JINGLE_RTP_RTCP_FB_0, 'rtcp-fb-trr-int');

      for (const child of existing) {
        const parameter = valueImporter(child, context);
        result.push(parameter ? {
          type: 'trr-int',
          parameter
        } : {
          type: 'trr-int'
        });
      }

      return result;
    },

    exporter(xml, values, context) {
      const typeExporter = attribute('type').exporter;
      const subtypeExporter = attribute('subtype').exporter;
      const valueExporter = attribute('value').exporter;

      for (const fb of values) {
        let child;

        if (fb.type === 'trr-int') {
          child = createElement(NS_JINGLE_RTP_RTCP_FB_0, 'rtcp-fb-trr-int', context.namespace, xml);

          if (fb.parameter) {
            valueExporter(child, fb.parameter, context);
          }
        } else {
          child = createElement(NS_JINGLE_RTP_RTCP_FB_0, 'rtcp-fb', context.namespace, xml);
          typeExporter(child, fb.type, context);

          if (fb.parameter) {
            subtypeExporter(child, fb.parameter, context);
          }
        }

        xml.appendChild(child);
      }
    }

  };
}

const info = 'iq.jingle.info';
const Protocol$C = [{
  aliases: ['iq.jingle.contents.application'],
  childrenExportOrder: {
    codecs: 4,
    encryption: 5,
    headerExtensions: 6,
    sourceGroups: 8,
    sources: 7,
    streams: 9
  },
  element: 'description',
  fields: {
    media: attribute('media'),
    rtcpFeedback: Object.assign(Object.assign({}, rtcpFeedback()), {
      exportOrder: 3
    }),
    rtcpMux: Object.assign(Object.assign({}, childBoolean(null, 'rtcp-mux')), {
      exportOrder: 1
    }),
    rtcpReducedSize: Object.assign(Object.assign({}, childBoolean(null, 'rtcp-reduced-size')), {
      exportOrder: 2
    }),
    ssrc: attribute('ssrc')
  },
  namespace: NS_JINGLE_RTP_1,
  optionalNamespaces: {
    rtcpf: NS_JINGLE_RTP_RTCP_FB_0,
    rtph: NS_JINGLE_RTP_HDREXT_0
  },
  type: NS_JINGLE_RTP_1
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.headerExtensions',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'rtp-hdrext',
  fields: {
    id: integerAttribute('id'),
    senders: attribute('senders'),
    uri: attribute('uri')
  },
  namespace: NS_JINGLE_RTP_HDREXT_0
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.codecs',
    selector: NS_JINGLE_RTP_1
  }, 'rtpcodec'],
  element: 'payload-type',
  fields: {
    channels: integerAttribute('channels'),
    clockRate: integerAttribute('clockrate'),
    id: attribute('id'),
    maxptime: integerAttribute('maxptime'),
    name: attribute('name'),
    parameters: parameterMap(NS_JINGLE_RTP_1, 'parameter', 'name', 'value'),
    ptime: integerAttribute('ptime'),
    rtcpFeedback: rtcpFeedback()
  },
  namespace: NS_JINGLE_RTP_1
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.sources',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'source',
  fields: {
    parameters: parameterMap(NS_JINGLE_RTP_SSMA_0, 'parameter', 'name', 'value'),
    ssrc: attribute('ssrc')
  },
  namespace: NS_JINGLE_RTP_SSMA_0
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.sourceGroups',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'ssrc-group',
  fields: {
    semantics: attribute('semantics'),
    sources: multipleChildAttribute(null, 'source', 'ssrc')
  },
  namespace: NS_JINGLE_RTP_SSMA_0
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.streams',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'stream',
  fields: {
    id: attribute('id'),
    track: attribute('track')
  },
  namespace: NS_JINGLE_RTP_MSID_0
}, {
  aliases: [{
    path: 'iq.jingle.contents.application.encryption',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'encryption',
  fields: {
    required: booleanAttribute('required')
  },
  namespace: NS_JINGLE_RTP_1
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.application.encryption.sdes',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'crypto',
  fields: {
    cryptoSuite: attribute('crypto-suite'),
    keyParameters: attribute('key-params'),
    sessionParameters: attribute('session-params'),
    tag: integerAttribute('tag')
  },
  namespace: NS_JINGLE_RTP_1
}, {
  aliases: [{
    path: 'iq.jingle.contents.application.encryption.zrtp',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'zrtp-hash',
  fields: {
    value: textBuffer('hex'),
    version: attribute('version')
  },
  namespace: NS_JINGLE_RTP_1
}, {
  element: 'mute',
  fields: {
    creator: attribute('creator'),
    name: attribute('name')
  },
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_MUTE
}, {
  element: 'unmute',
  fields: {
    creator: attribute('creator'),
    name: attribute('name')
  },
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_UNMUTE
}, {
  element: 'hold',
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_HOLD
}, {
  element: 'unhold',
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_UNHOLD
}, {
  element: 'active',
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_ACTIVE
}, {
  element: 'ringing',
  namespace: NS_JINGLE_RTP_INFO_1,
  path: info,
  type: JINGLE_INFO_RINGING
}]; // ====================================================================

const Protocol$D = [extendMessage({
  nick: childText(NS_NICK, 'nick')
}), extendPresence({
  nick: childText(NS_NICK, 'nick')
}), {
  aliases: pubsubItemContentAliases(),
  element: 'nick',
  fields: {
    nick: text()
  },
  namespace: NS_NICK,
  type: NS_NICK
}]; // ====================================================================

const ice = transportType => [{
  element: 'transport',
  fields: {
    gatheringComplete: childBoolean(null, 'gathering-complete'),
    password: attribute('pwd'),
    usernameFragment: attribute('ufrag')
  },
  namespace: transportType,
  path: 'iq.jingle.contents.transport',
  type: transportType,
  typeField: 'transportType'
}, {
  aliases: [{
    impliedType: true,
    path: 'iq.jingle.contents.transport.remoteCandidate',
    selector: transportType
  }],
  element: 'remote-candidate',
  fields: {
    component: integerAttribute('component'),
    ip: attribute('ip'),
    port: integerAttribute('port')
  },
  namespace: transportType,
  type: transportType,
  typeField: 'transportType'
}, {
  aliases: [{
    impliedType: true,
    multiple: true,
    path: 'iq.jingle.contents.transport.candidates',
    selector: transportType
  }],
  element: 'candidate',
  fields: {
    component: integerAttribute('component'),
    foundation: attribute('foundation'),
    generation: integerAttribute('generation'),
    id: attribute('id'),
    ip: attribute('ip'),
    network: integerAttribute('network'),
    port: integerAttribute('port'),
    priority: integerAttribute('priority'),
    protocol: attribute('protocol'),
    relatedAddress: attribute('rel-addr'),
    relatedPort: attribute('rel-port'),
    tcpType: attribute('tcptype'),
    type: attribute('type')
  },
  namespace: transportType,
  type: transportType,
  typeField: 'transportType'
}];

const Protocol$E = [...ice(NS_JINGLE_ICE_0), ...ice(NS_JINGLE_ICE_UDP_1)]; // ====================================================================

const Protocol$F = [{
  element: 'transport',
  fields: {
    gatheringComplete: childBoolean(null, 'gathering-complete'),
    password: attribute('pwd'),
    usernameFragment: attribute('ufrag')
  },
  namespace: NS_JINGLE_RAW_UDP_1,
  path: 'iq.jingle.contents.transport',
  type: NS_JINGLE_RAW_UDP_1,
  typeField: 'transportType'
}, {
  aliases: [{
    impliedType: true,
    multiple: true,
    path: 'iq.jingle.contents.transport.candidates',
    selector: NS_JINGLE_RAW_UDP_1
  }],
  element: 'candidate',
  fields: {
    component: integerAttribute('component'),
    foundation: attribute('foundation'),
    generation: integerAttribute('generation'),
    id: attribute('id'),
    ip: attribute('ip'),
    port: integerAttribute('port'),
    type: attribute('type')
  },
  namespace: NS_JINGLE_RAW_UDP_1,
  type: NS_JINGLE_RAW_UDP_1,
  typeField: 'transportType'
}]; // ====================================================================

const Protocol$G = [{
  element: 'request',
  namespace: NS_RECEIPTS,
  path: 'message.receipt',
  type: 'request',
  typeField: 'type'
}, {
  element: 'received',
  fields: {
    id: attribute('id')
  },
  namespace: NS_RECEIPTS,
  path: 'message.receipt',
  type: 'received',
  typeField: 'type'
}]; // ====================================================================

const Protocol$H = [{
  element: 'invisible',
  fields: {
    probe: booleanAttribute('probe')
  },
  namespace: NS_INVISIBLE_0,
  path: 'iq.visibility',
  type: 'invisible',
  typeField: 'type'
}, {
  element: 'visible',
  namespace: NS_INVISIBLE_0,
  path: 'iq.visibility',
  type: 'visible'
}]; // ====================================================================

const Protocol$I = [extendStanzaError({
  blocked: childBoolean(NS_BLOCKING_ERRORS, 'blocked')
}), {
  element: 'blocklist',
  fields: {
    jids: multipleChildAttribute(null, 'item', 'jid')
  },
  namespace: NS_BLOCKING,
  path: 'iq.blockList',
  type: 'list',
  typeField: 'action'
}, {
  element: 'block',
  fields: {
    jids: multipleChildAttribute(null, 'item', 'jid')
  },
  namespace: NS_BLOCKING,
  path: 'iq.blockList',
  type: 'block',
  typeField: 'action'
}, {
  element: 'unblock',
  fields: {
    jids: multipleChildAttribute(null, 'item', 'jid')
  },
  namespace: NS_BLOCKING,
  path: 'iq.blockList',
  type: 'unblock',
  typeField: 'action'
}]; // ====================================================================

const Protocol$J = [extendStreamFeatures({
  streamManagement: childBoolean(NS_SMACKS_3, 'sm')
}), {
  element: 'a',
  fields: {
    handled: integerAttribute('h')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'ack',
  typeField: 'type'
}, {
  element: 'r',
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'request',
  typeField: 'type'
}, {
  element: 'enable',
  fields: {
    allowResumption: booleanAttribute('resume')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'enable',
  typeField: 'type'
}, {
  element: 'enabled',
  fields: {
    id: attribute('id'),
    resume: booleanAttribute('resume')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'enabled',
  typeField: 'type'
}, {
  element: 'resume',
  fields: {
    handled: integerAttribute('h'),
    previousSession: attribute('previd')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'resume',
  typeField: 'type'
}, {
  element: 'resumed',
  fields: {
    handled: integerAttribute('h'),
    previousSession: attribute('previd')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'resumed',
  typeField: 'type'
}, {
  element: 'failed',
  fields: {
    handled: integerAttribute('h')
  },
  namespace: NS_SMACKS_3,
  path: 'sm',
  type: 'failed',
  typeField: 'type'
}]; // ====================================================================

var XEP0199 = extendIQ({
  ping: childBoolean(NS_PING, 'ping')
}); // ====================================================================

const Protocol$K = {
  element: 'time',
  fields: {
    tzo: childTimezoneOffset(null, 'tzo'),
    utc: childDate(null, 'utc')
  },
  namespace: NS_TIME,
  path: 'iq.time'
}; // ====================================================================

const Protocol$L = {
  aliases: ['message.delay', 'presence.delay'],
  element: 'delay',
  fields: {
    from: JIDAttribute('from'),
    reason: text(),
    timestamp: dateAttribute('stamp')
  },
  namespace: NS_DELAY
}; // ====================================================================

const versions = {
  '2': NS_DISCO_EXTERNAL_2,
  '1': NS_DISCO_EXTERNAL_1
};
const Protocol$M = [];

for (const [version, namespace] of Object.entries(versions)) {
  Protocol$M.push({
    aliases: ['iq.externalServiceCredentials'],
    defaultType: '2',
    element: 'credentials',
    fields: {
      expires: childDateAttribute(null, 'service', 'expires'),
      host: childAttribute(null, 'service', 'host'),
      name: childAttribute(null, 'service', 'name'),
      password: childAttribute(null, 'service', 'password'),
      port: childIntegerAttribute(null, 'service', 'port'),
      restricted: childBooleanAttribute(null, 'service', 'restricted'),
      transport: childAttribute(null, 'service', 'transport'),
      type: childAttribute(null, 'service', 'type'),
      username: childAttribute(null, 'service', 'username')
    },
    namespace,
    type: version,
    typeField: 'version'
  }, {
    aliases: ['iq.externalServices'],
    defaultType: '2',
    element: 'services',
    fields: {
      type: attribute('type')
    },
    namespace,
    type: version,
    typeField: 'version'
  }, {
    aliases: [{
      path: 'iq.externalServices.services',
      multiple: true
    }],
    defaultType: '2',
    element: 'service',
    fields: {
      expires: dateAttribute('expires'),
      host: attribute('host'),
      name: attribute('name'),
      password: attribute('password'),
      port: integerAttribute('port'),
      restricted: booleanAttribute('restricted'),
      transport: attribute('transport'),
      type: attribute('type'),
      username: attribute('username')
    },
    namespace,
    type: version,
    typeField: 'version'
  });
} // ====================================================================


const Protocol$N = [{
  element: 'media',
  fields: {
    height: integerAttribute('height'),
    width: integerAttribute('width')
  },
  namespace: NS_DATAFORM_MEDIA,
  path: 'dataform.fields.media'
}, {
  aliases: [{
    multiple: true,
    path: 'dataform.fields.media.sources'
  }],
  element: 'uri',
  fields: {
    mediaType: attribute('type'),
    uri: text()
  },
  namespace: NS_DATAFORM_MEDIA
}]; // ====================================================================

var XEP0224 = extendMessage({
  requestingAttention: childBoolean(NS_ATTENTION_0, 'attention')
}); // ====================================================================

const Protocol$O = {
  aliases: ['iq.bits', {
    path: 'message.bits',
    multiple: true
  }, {
    path: 'presence.bits',
    multiple: true
  }, {
    path: 'iq.jingle.bits',
    multiple: true
  }],
  element: 'data',
  fields: {
    cid: attribute('cid'),
    data: textBuffer('base64'),
    maxAge: integerAttribute('max-age'),
    mediaType: attribute('type')
  },
  namespace: NS_BOB
}; // ====================================================================

let Protocol$P = [addAlias(NS_HASHES_2, 'hash', [{
  path: 'file.hashes',
  multiple: true
}, {
  path: 'file.range.hashes',
  multiple: true
}]), addAlias(NS_HASHES_1, 'hash', [{
  path: 'file.hashes',
  multiple: true
}, {
  path: 'file.range.hashes',
  multiple: true
}]), addAlias(NS_HASHES_2, 'hash-used', [{
  path: 'file.hashesUsed',
  multiple: true
}]), addAlias(NS_THUMBS_1, 'thumbnail', [{
  path: 'file.thumbnails',
  multiple: true
}])];

for (const ftVersion of [NS_JINGLE_FILE_TRANSFER_4, NS_JINGLE_FILE_TRANSFER_5]) {
  Protocol$P = Protocol$P.concat([{
    aliases: ['file', {
      impliedType: true,
      path: 'iq.jingle.contents.application.file',
      selector: ftVersion
    }, {
      impliedType: true,
      path: 'iq.jingle.info.file',
      selector: `{${ftVersion}}checksum`
    }],
    defaultType: NS_JINGLE_FILE_TRANSFER_5,
    element: 'file',
    fields: {
      date: childDate(null, 'date'),
      description: childText(null, 'desc'),
      mediaType: childText(null, 'media-type'),
      name: childText(null, 'name'),
      size: childInteger(null, 'size')
    },
    namespace: ftVersion,
    type: ftVersion,
    typeField: 'version'
  }, {
    aliases: [{
      impliedType: true,
      path: 'file.range',
      selector: ftVersion
    }],
    defaultType: NS_JINGLE_FILE_TRANSFER_5,
    element: 'range',
    fields: {
      length: integerAttribute('length'),
      offset: integerAttribute('offset', 0)
    },
    namespace: ftVersion,
    type: ftVersion,
    typeField: 'version'
  }, {
    element: 'description',
    namespace: ftVersion,
    path: 'iq.jingle.contents.application',
    type: ftVersion,
    typeField: 'applicationType'
  }, {
    element: 'received',
    fields: {
      creator: attribute('creator'),
      name: attribute('name')
    },
    namespace: ftVersion,
    path: 'iq.jingle.info',
    type: `{${ftVersion}}received`,
    typeField: 'infoType'
  }, {
    element: 'checksum',
    fields: {
      creator: attribute('creator'),
      name: attribute('name')
    },
    namespace: ftVersion,
    path: 'iq.jingle.info',
    type: `{${ftVersion}}checksum`,
    typeField: 'infoType'
  }]);
}

var XEP0234 = Protocol$P; // ====================================================================

const Protocol$Q = {
  element: 'description',
  namespace: NS_JINGLE_XML_0,
  path: 'iq.jingle.contents.application',
  type: NS_JINGLE_XML_0,
  typeField: 'applicationType'
}; // ====================================================================

const Protocol$R = [{
  element: 'transport',
  fields: {
    activated: childAttribute(null, 'activated', 'cid'),
    address: attribute('dstaddr'),
    candidateError: childBoolean(null, 'candidate-error'),
    candidateUsed: childAttribute(null, 'candidate-used', 'cid'),
    mode: attribute('mode', 'tcp'),
    proxyError: childBoolean(null, 'proxy-error'),
    sid: attribute('sid')
  },
  namespace: NS_JINGLE_SOCKS5_1,
  path: 'iq.jingle.contents.transport',
  type: NS_JINGLE_SOCKS5_1,
  typeField: 'transportType'
}, {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.transport.candidates',
    selector: NS_JINGLE_SOCKS5_1
  }],
  element: 'candidate',
  fields: {
    cid: attribute('cid'),
    host: attribute('host'),
    jid: JIDAttribute('jid'),
    port: integerAttribute('port'),
    priority: integerAttribute('priority'),
    type: attribute('type'),
    uri: attribute('uri')
  },
  namespace: NS_JINGLE_SOCKS5_1
}]; // ====================================================================

const Protocol$S = {
  element: 'transport',
  fields: {
    ack: {
      importer(xml, context) {
        const stanza = attribute('stanza', 'iq').importer(xml, context);
        return stanza !== 'message';
      },

      exporter(xml, data, context) {
        if (data === false) {
          attribute('stanza').exporter(xml, 'message', context);
        }
      }

    },
    blockSize: integerAttribute('block-size'),
    sid: attribute('sid')
  },
  namespace: NS_JINGLE_IBB_1,
  path: 'iq.jingle.contents.transport',
  type: NS_JINGLE_IBB_1,
  typeField: 'transportType'
}; // ====================================================================

const Protocol$T = [addAlias(NS_BOB, 'data', [{
  path: 'iq.jingle.bits',
  multiple: true
}]), {
  element: 'thumbnail',
  fields: {
    height: integerAttribute('height'),
    mediaType: attribute('media-type'),
    uri: attribute('uri'),
    width: integerAttribute('width')
  },
  namespace: NS_THUMBS_1,
  path: 'thumbnail'
}]; // ====================================================================

const Protocol$U = [addAlias(NS_FORWARD_0, 'forwarded', ['message.carbon.forward']), {
  element: 'enable',
  namespace: NS_CARBONS_2,
  path: 'iq.carbons',
  type: 'enable',
  typeField: 'action'
}, {
  element: 'disable',
  namespace: NS_CARBONS_2,
  path: 'iq.carbons',
  type: 'disable',
  typeField: 'action'
}, {
  element: 'sent',
  namespace: NS_CARBONS_2,
  path: 'message.carbon',
  type: 'sent',
  typeField: 'type'
}, {
  element: 'received',
  namespace: NS_CARBONS_2,
  path: 'message.carbon',
  type: 'received',
  typeField: 'type'
}]; // ====================================================================

const Protocol$V = [...Object.values(StreamType).map(streamNS => addAlias(streamNS, 'message', ['forward.message'])), ...Object.values(StreamType).map(streamNS => addAlias(streamNS, 'presence', ['forward.presence'])), ...Object.values(StreamType).map(streamNS => addAlias(streamNS, 'iq', ['forward.iq'])), addAlias(NS_DELAY, 'delay', ['forward.delay']), {
  aliases: ['message.forward'],
  element: 'forwarded',
  namespace: NS_FORWARD_0,
  path: 'forward'
}]; // ====================================================================

const Protocol$W = [{
  defaultType: '2',
  element: 'hash',
  fields: {
    algorithm: attribute('algo'),
    value: textBuffer('base64'),
    version: staticValue('2')
  },
  namespace: NS_HASHES_2,
  path: 'hash',
  type: '2',
  typeField: 'version'
}, {
  element: 'hash-used',
  fields: {
    algorithm: attribute('algo'),
    version: staticValue('2')
  },
  namespace: NS_HASHES_2,
  path: 'hashUsed'
}, {
  element: 'hash',
  fields: {
    algorithm: attribute('algo'),
    value: textBuffer('hex'),
    version: staticValue('1')
  },
  namespace: NS_HASHES_1,
  path: 'hash',
  type: '1',
  typeField: 'version'
}]; // ====================================================================

const Protocol$X = [{
  element: 'rtt',
  fields: {
    event: attribute('event', 'edit'),
    id: attribute('id'),
    seq: integerAttribute('seq')
  },
  namespace: NS_RTT_0,
  path: 'message.rtt'
}, {
  aliases: [{
    path: 'message.rtt.actions',
    multiple: true
  }],
  element: 't',
  fields: {
    position: integerAttribute('p'),
    text: text()
  },
  namespace: NS_RTT_0,
  type: 'insert',
  typeField: 'type'
}, {
  aliases: [{
    path: 'message.rtt.actions',
    multiple: true
  }],
  element: 'e',
  fields: {
    length: integerAttribute('n', 1),
    position: integerAttribute('p')
  },
  namespace: NS_RTT_0,
  type: 'erase',
  typeField: 'type'
}, {
  aliases: [{
    multiple: true,
    path: 'message.rtt.actions'
  }],
  element: 'w',
  fields: {
    duration: integerAttribute('n', 0)
  },
  namespace: NS_RTT_0,
  type: 'wait',
  typeField: 'type'
}]; // ====================================================================

var XEP0308 = extendMessage({
  replace: childAttribute(NS_CORRECTION_0, 'replace', 'id')
}); // ====================================================================

const versions$1 = {
  '2': NS_MAM_2,
  '1': NS_MAM_1
};
const Protocol$Y = [addAlias(NS_DATAFORM, 'x', ['iq.archive.form']), addAlias(NS_FORWARD_0, 'forwarded', ['message.archive.item']), addAlias(NS_RSM, 'set', ['iq.archive.paging'])];

for (const [version, namespace] of Object.entries(versions$1)) {
  Protocol$Y.push({
    defaultType: 'query',
    defaultVersion: '2',
    element: 'query',
    fields: {
      node: attribute('node'),
      queryId: attribute('queryid')
    },
    namespace,
    path: 'iq.archive',
    type: 'query',
    typeField: 'type',
    version,
    versionField: 'version'
  }, {
    element: 'fin',
    fields: {
      complete: booleanAttribute('complete'),
      stable: booleanAttribute('stable')
    },
    namespace,
    path: 'iq.archive',
    type: 'result',
    version
  }, {
    element: 'prefs',
    fields: {
      default: attribute('default'),
      always: deepMultipleChildText([{
        namespace: null,
        element: 'always'
      }, {
        namespace: null,
        element: 'jid'
      }]),
      never: deepMultipleChildText([{
        namespace: null,
        element: 'never'
      }, {
        namespace: null,
        element: 'jid'
      }])
    },
    namespace,
    path: 'iq.archive',
    type: 'preferences',
    version
  }, {
    element: 'result',
    defaultType: '2',
    fields: {
      id: attribute('id'),
      queryId: attribute('queryid')
    },
    namespace,
    path: 'message.archive',
    type: version,
    typeField: 'version'
  });
} // ====================================================================


const Protocol$Z = [extendPresence({
  hats: splicePath(NS_HATS_0, 'hats', 'hat', true)
}), {
  element: 'hat',
  fields: {
    id: attribute('name'),
    name: attribute('displayName')
  },
  namespace: NS_HATS_0,
  path: 'hat'
}]; // ====================================================================

var XEP0319 = extendPresence({
  idleSince: childDate(NS_IDLE_1, 'since')
}); // ====================================================================

const Protocol$_ = {
  aliases: [{
    multiple: true,
    path: 'iq.jingle.contents.transport.fingerprints',
    selector: NS_JINGLE_ICE_UDP_1
  }, {
    multiple: true,
    path: 'iq.jingle.contents.transport.fingerprints',
    selector: NS_JINGLE_ICE_0
  }, {
    multiple: true,
    path: 'iq.jingle.contents.application.encryption.dtls',
    selector: NS_JINGLE_RTP_1
  }],
  element: 'fingerprint',
  fields: {
    algorithm: attribute('hash'),
    setup: attribute('setup'),
    value: text()
  },
  namespace: NS_JINGLE_DTLS_0
}; // ====================================================================

const path$1 = 'message.marker';
const Protocol$$ = [{
  element: 'markable',
  namespace: NS_CHAT_MARKERS_0,
  path: path$1,
  type: 'markable',
  typeField: 'type'
}, {
  element: 'received',
  fields: {
    id: attribute('id')
  },
  namespace: NS_CHAT_MARKERS_0,
  path: path$1,
  type: 'received'
}, {
  element: 'displayed',
  fields: {
    id: attribute('id')
  },
  namespace: NS_CHAT_MARKERS_0,
  path: path$1,
  type: 'displayed'
}, {
  element: 'acknowledged',
  fields: {
    id: attribute('id')
  },
  namespace: NS_CHAT_MARKERS_0,
  path: path$1,
  type: 'acknowledged'
}]; // ====================================================================

function processingHints() {
  return {
    importer(xml) {
      const results = {};
      let found = false;

      for (const child of xml.children) {
        /* istanbul ignore next */
        if (typeof child === 'string') {
          continue;
        }

        if (child.getNamespace() !== NS_HINTS) {
          continue;
        }

        switch (child.getName()) {
          case 'no-copy':
            results.noCopy = true;
            found = true;
            break;

          case 'no-permanent-store':
            results.noPermanentStore = true;
            found = true;
            break;

          case 'no-store':
            results.noStore = true;
            found = true;
            break;

          case 'store':
            results.store = true;
            found = true;
            break;
        }
      }

      return found ? results : undefined;
    },

    exporter(xml, value, context) {
      if (value.noCopy) {
        xml.appendChild(createElement(NS_HINTS, 'no-copy', context.namespace, xml));
      }

      if (value.noPermanentStore) {
        xml.appendChild(createElement(NS_HINTS, 'no-permanent-store', context.namespace, xml));
      }

      if (value.noStore) {
        xml.appendChild(createElement(NS_HINTS, 'no-store', context.namespace, xml));
      }

      if (value.store) {
        xml.appendChild(createElement(NS_HINTS, 'store', context.namespace, xml));
      }
    }

  };
}

var XEP0334 = extendMessage({
  processingHints: processingHints()
}); // ====================================================================

const Protocol$10 = [extendMessage({
  json: childJSON(NS_JSON_0, 'json')
}), {
  aliases: pubsubItemContentAliases(),
  element: 'json',
  fields: {
    json: textJSON()
  },
  namespace: NS_JSON_0,
  type: NS_JSON_0
}, {
  aliases: [{
    path: 'message.jsonPayloads',
    multiple: true
  }],
  element: 'payload',
  fields: {
    type: attribute('datatype'),
    data: childJSON(NS_JSON_0, 'json')
  },
  namespace: NS_JSON_MESSAGE_0
}]; // ====================================================================

const Protocol$11 = [{
  aliases: [{
    path: 'iq.jingle.groups',
    multiple: true
  }],
  element: 'group',
  fields: {
    contents: multipleChildAttribute(null, 'content', 'name'),
    semantics: attribute('semantics')
  },
  namespace: NS_JINGLE_GROUPING_0
}]; // ====================================================================

const Protocol$12 = {
  aliases: [{
    path: 'iq.jingle.contents.transport.sctp',
    selector: NS_JINGLE_ICE_UDP_1
  }, {
    path: 'iq.jingle.contents.transport.sctp',
    selector: NS_JINGLE_ICE_0
  }],
  element: 'sctpmap',
  fields: {
    port: integerAttribute('number'),
    protocol: attribute('protocol'),
    streams: attribute('streams')
  },
  namespace: NS_JINGLE_DTLS_SCTP_1
}; // ====================================================================

const Protocol$13 = [{
  element: 'active',
  namespace: NS_CSI_0,
  path: 'csi',
  type: 'active',
  typeField: 'state'
}, {
  element: 'inactive',
  namespace: NS_CSI_0,
  path: 'csi',
  type: 'inactive',
  typeField: 'state'
}]; // ====================================================================

const Protocol$14 = [addAlias(NS_DATAFORM, 'x', ['iq.push.form', 'pushNotification.form']), {
  element: 'enable',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUSH_0,
  path: 'iq.push',
  type: 'enable',
  typeField: 'action'
}, {
  element: 'disable',
  fields: {
    jid: JIDAttribute('jid'),
    node: attribute('node')
  },
  namespace: NS_PUSH_0,
  path: 'iq.push',
  type: 'disable',
  typeField: 'action'
}, {
  aliases: pubsubItemContentAliases(),
  element: 'notification',
  namespace: NS_PUSH_0,
  path: 'pushNotification',
  type: NS_PUSH_0,
  typeField: 'itemType'
}]; // ====================================================================

const Protocol$15 = [extendMessage({
  originId: childAttribute(NS_SID_0, 'origin-id', 'id')
}), {
  aliases: [{
    path: 'message.stanzaIds',
    multiple: true
  }],
  element: 'stanza-id',
  fields: {
    by: JIDAttribute('by'),
    id: attribute('id')
  },
  namespace: NS_SID_0
}]; // ====================================================================

const Protocol$16 = [extendStanzaError({
  httpUploadError: childEnum(NS_HTTP_UPLOAD_0, ['file-too-large', 'retry']),
  httpUploadMaxFileSize: deepChildInteger([{
    namespace: NS_HTTP_UPLOAD_0,
    element: 'file-too-large'
  }, {
    namespace: NS_HTTP_UPLOAD_0,
    element: 'max-file-size'
  }]),
  httpUploadRetry: childDateAttribute(NS_HTTP_UPLOAD_0, 'retry', 'stamp')
}), {
  element: 'request',
  fields: {
    mediaType: attribute('content-type'),
    name: attribute('filename'),
    size: integerAttribute('size')
  },
  namespace: NS_HTTP_UPLOAD_0,
  path: 'iq.httpUpload',
  type: 'request',
  typeField: 'type'
}, {
  element: 'slot',
  fields: {
    download: childAttribute(null, 'get', 'url')
  },
  namespace: NS_HTTP_UPLOAD_0,
  path: 'iq.httpUpload',
  type: 'slot'
}, {
  aliases: [{
    path: 'iq.httpUpload.upload',
    selector: 'slot'
  }],
  element: 'put',
  fields: {
    url: attribute('url')
  },
  namespace: NS_HTTP_UPLOAD_0
}, {
  aliases: [{
    path: 'iq.httpUpload.upload.headers',
    multiple: true
  }],
  element: 'header',
  fields: {
    name: attribute('name'),
    value: text()
  },
  namespace: NS_HTTP_UPLOAD_0
}]; // ====================================================================

const Protocol$17 = {
  element: 'encryption',
  fields: {
    id: attribute('namespace'),
    name: attribute('name')
  },
  namespace: NS_EME_0,
  path: 'message.encryptionMethod'
}; // ====================================================================

const Protocol$18 = [{
  aliases: ['message.omemo'],
  element: 'encrypted',
  fields: {
    payload: childTextBuffer(null, 'payload', 'base64')
  },
  namespace: NS_OMEMO_AXOLOTL,
  path: 'omemo'
}, {
  element: 'header',
  fields: {
    iv: childTextBuffer(null, 'iv', 'base64'),
    sid: integerAttribute('sid')
  },
  namespace: NS_OMEMO_AXOLOTL,
  path: 'omemo.header'
}, {
  aliases: [{
    path: 'omemo.header.keys',
    multiple: true
  }],
  element: 'key',
  fields: {
    preKey: booleanAttribute('prekey'),
    rid: integerAttribute('rid'),
    value: textBuffer('base64')
  },
  namespace: NS_OMEMO_AXOLOTL
}, {
  aliases: pubsubItemContentAliases(),
  element: 'list',
  fields: {
    devices: multipleChildIntegerAttribute(null, 'device', 'id')
  },
  namespace: NS_OMEMO_AXOLOTL,
  type: NS_OMEMO_AXOLOTL_DEVICELIST,
  typeField: 'itemType'
}, {
  element: 'preKeyPublic',
  fields: {
    id: integerAttribute('preKeyId'),
    value: textBuffer('base64')
  },
  namespace: NS_OMEMO_AXOLOTL,
  path: 'omemoPreKey'
}, {
  element: 'signedPreKeyPublic',
  fields: {
    id: integerAttribute('signedPreKeyId'),
    value: textBuffer('base64')
  },
  namespace: NS_OMEMO_AXOLOTL,
  path: 'omemoDevice.signedPreKeyPublic'
}, {
  aliases: pubsubItemContentAliases(),
  element: 'bundle',
  fields: {
    identityKey: childTextBuffer(null, 'identityKey', 'base64'),
    preKeys: splicePath(null, 'prekeys', 'omemoPreKey', true),
    signedPreKeySignature: childTextBuffer(null, 'signedPreKeySignature', 'base64')
  },
  namespace: NS_OMEMO_AXOLOTL,
  path: 'omemoDevice',
  type: NS_OMEMO_AXOLOTL_BUNDLES,
  typeField: 'itemType'
}]; // ====================================================================

const Protocol$19 = [{
  element: 'XRD',
  fields: {
    subject: childText(null, 'Subject')
  },
  namespace: NS_XRD,
  path: 'xrd'
}, {
  aliases: [{
    path: 'xrd.links',
    multiple: true
  }],
  element: 'Link',
  fields: {
    href: attribute('href'),
    rel: attribute('rel'),
    type: attribute('type')
  },
  namespace: NS_XRD
}]; // ====================================================================

const Protocol$1a = [Protocol, Protocol$1, Protocol$2, Protocol$3, Protocol$4, Protocol$5, Protocol$6, Protocol$7, Protocol$8, Protocol$9, Protocol$a, Protocol$b, Protocol$c, Protocol$d, Protocol$e, Protocol$f, Protocol$g, Protocol$h, Protocol$i, Protocol$j, Protocol$k, Protocol$l, Protocol$m, Protocol$n, Protocol$o, XEP0085, Protocol$p, Protocol$q, Protocol$r, Protocol$s, Protocol$t, Protocol$u, Protocol$w, Protocol$x, Protocol$y, Protocol$v, Protocol$z, XEP0153, Protocol$A, Protocol$B, Protocol$C, Protocol$D, Protocol$E, Protocol$F, Protocol$G, Protocol$H, Protocol$I, Protocol$J, XEP0199, Protocol$K, Protocol$L, Protocol$M, Protocol$N, XEP0224, Protocol$O, XEP0234, Protocol$Q, Protocol$R, Protocol$S, Protocol$T, Protocol$U, Protocol$V, Protocol$W, Protocol$X, XEP0308, Protocol$Y, Protocol$Z, XEP0319, Protocol$_, Protocol$$, XEP0334, Protocol$10, Protocol$11, Protocol$12, Protocol$13, Protocol$14, Protocol$15, Protocol$16, Protocol$17, Protocol$18, Protocol$19];
var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Protocol$1a
});
exports.Stanzas = index$3;

class RequestChannel {
  constructor(stream) {
    this.active = false;
    this.maxRetries = 5;
    this.stream = stream;
    this.maxTimeout = 1000 * 1.1 * this.stream.maxWaitTime;
  }

  send(rid, body) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.rid = rid;
      this.active = true;
      let attempts = 0;

      while (attempts <= this.maxRetries) {
        attempts += 1;

        try {
          const res = yield timeoutPromise(nativeFetch(this.stream.url, {
            body,
            headers: {
              'Content-Type': this.stream.contentType
            },
            method: 'POST'
          }), this.maxTimeout, () => new Error('Request timed out'));

          if (!res.ok) {
            throw new Error('HTTP Status Error: ' + res.status);
          }

          const result = yield res.text();
          this.active = false;
          return result;
        } catch (err) {
          if (attempts === 1) {
            continue;
          } else if (attempts < this.maxRetries) {
            const backoff = Math.min(this.maxTimeout, Math.pow(attempts, 2) * 1000);
            yield sleep(backoff + Math.random() * 1000);
            continue;
          } else {
            this.active = false;
            throw err;
          }
        }
      }

      throw new Error('Request failed');
    });
  }

}

class BOSH extends _readableStream.Duplex {
  constructor(client, sm, stanzas) {
    super({
      objectMode: true
    });
    this.rid = Math.floor(Math.random() * 0xffffffff);
    this.sid = '';
    this.maxHoldOpen = 2;
    this.maxWaitTime = 30;
    this.contentType = 'text/xml; charset=utf-8';
    this.channels = [new RequestChannel(this), new RequestChannel(this)];
    this.activeChannelID = 0;
    this.queue = [];
    this.isEnded = false;
    this.client = client;
    this.sm = sm;
    this.stanzas = stanzas;
    this.on('data', e => {
      this.client.emit('stream:data', e.stanza, e.kind);
    });
    this.on('end', () => {
      this.isEnded = true;
      clearTimeout(this.idleTimeout);
      this.client.emit('--transport-disconnected');
    });
  }

  _write(chunk, encoding, done) {
    this.queue.push([chunk, done]);
    this.scheduleRequests();
  }

  _writev(chunks, done) {
    this.queue.push([chunks.map(c => c.chunk).join(''), done]);
    this.scheduleRequests();
  }

  _read() {
    return;
  }

  process(result) {
    const parser = new StreamParser({
      acceptLanguages: this.config.acceptLanguages,
      allowComments: false,
      lang: this.config.lang,
      registry: this.stanzas,
      rootKey: 'bosh',
      wrappedStream: true
    });
    parser.on('error', err => {
      const streamError = {
        condition: StreamErrorCondition.InvalidXML
      };
      this.client.emit('stream:error', streamError, err);
      this.send('error', streamError);
      return this.disconnect();
    });
    parser.on('data', e => {
      if (e.event === 'stream-start') {
        this.stream = e.stanza;

        if (e.stanza.type === 'terminate') {
          this.hasStream = false;
          this.rid = undefined;
          this.sid = undefined;

          if (!this.isEnded) {
            this.isEnded = true;
            this.client.emit('bosh:terminate', e.stanza);
            this.client.emit('stream:end');
            this.push(null);
          }
        } else if (!this.hasStream) {
          this.hasStream = true;
          this.stream = e.stanza;
          this.sid = e.stanza.sid || this.sid;
          this.maxWaitTime = e.stanza.maxWaitTime || this.maxWaitTime;
          this.client.emit('stream:start', e.stanza);
        }

        return;
      }

      if (!e.event) {
        this.push({
          kind: e.kind,
          stanza: e.stanza
        });
      }
    });
    this.client.emit('raw', 'incoming', result);
    parser.write(result);
    this.scheduleRequests();
  }

  connect(opts) {
    this.config = opts;
    this.url = opts.url;

    if (opts.rid) {
      this.rid = opts.rid;
    }

    if (opts.sid) {
      this.sid = opts.sid;
    }

    if (opts.wait) {
      this.maxWaitTime = opts.wait;
    }

    if (this.sid) {
      this.hasStream = true;
      this.stream = {};
      this.client.emit('connected');
      this.client.emit('session:prebind', this.config.jid);
      this.client.emit('session:started');
      return;
    }

    this._send({
      lang: opts.lang,
      maxHoldOpen: this.maxHoldOpen,
      maxWaitTime: this.maxWaitTime,
      to: opts.server,
      version: '1.6',
      xmppVersion: '1.0'
    });
  }

  restart() {
    this.hasStream = false;

    this._send({
      to: this.config.server,
      xmppRestart: true
    });
  }

  disconnect() {
    if (this.hasStream) {
      this._send({
        type: 'terminate'
      });
    } else {
      this.stream = undefined;
      this.sid = undefined;
      this.rid = undefined;
      this.client.emit('--transport-disconnected');
    }
  }

  send(dataOrName, data) {
    var _a;

    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      let output;

      if (data) {
        output = (_a = this.stanzas.export(dataOrName, data)) === null || _a === void 0 ? void 0 : _a.toString();
      }

      if (!output) {
        return;
      }

      return new Promise((resolve, reject) => {
        this.write(output, 'utf8', err => err ? reject(err) : resolve());
      });
    });
  }

  get sendingChannel() {
    return this.channels[this.activeChannelID];
  }

  get pollingChannel() {
    return this.channels[this.activeChannelID === 0 ? 1 : 0];
  }

  toggleChannel() {
    this.activeChannelID = this.activeChannelID === 0 ? 1 : 0;
  }

  _send(boshData, payload = '') {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.isEnded) {
        return;
      }

      const rid = this.rid++;
      const header = this.stanzas.export('bosh', Object.assign(Object.assign({}, boshData), {
        rid,
        sid: this.sid
      }));
      let body;

      if (payload) {
        body = [header.openTag(), payload, header.closeTag()].join('');
      } else {
        body = header.toString();
      }

      this.client.emit('raw', 'outgoing', body);
      this.sendingChannel.send(rid, body).then(result => {
        this.process(result);
      }).catch(err => {
        this.end(err);
      });
      this.toggleChannel();
    });
  }

  _poll() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (this.isEnded) {
        return;
      }

      const rid = this.rid++;
      const body = this.stanzas.export('bosh', {
        rid,
        sid: this.sid
      }).toString();
      this.client.emit('raw', 'outgoing', body);
      this.pollingChannel.send(rid, body).then(result => {
        this.process(result);
      }).catch(err => {
        this.end(err);
      });
    });
  }

  scheduleRequests() {
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(() => {
      this.fireRequests();
    }, 10);
  }

  fireRequests() {
    if (this.isEnded) {
      return;
    }

    if (this.queue.length) {
      if (!this.sendingChannel.active) {
        const [data, done] = this.queue.shift();

        this._send({}, data);

        done();
      } else {
        this.scheduleRequests();
      }

      return;
    }

    if (this.authenticated && !(this.channels[0].active || this.channels[1].active)) {
      this._poll();
    }
  }

}

const WS_OPEN = 1;

class WSConnection extends _readableStream.Duplex {
  constructor(client, sm, stanzas) {
    super({
      objectMode: true
    });
    this.sm = sm;
    this.stanzas = stanzas;
    this.closing = false;
    this.client = client;
    this.on('data', e => {
      this.client.emit('stream:data', e.stanza, e.kind);
    });
    this.on('error', () => {
      this.end();
    });
    this.on('end', () => {
      this.client.emit('--transport-disconnected');
    });
  }

  _read() {
    return;
  }

  _write(chunk, encoding, done) {
    if (!this.socket || this.socket.readyState !== WS_OPEN) {
      return done(new Error('Socket closed'));
    }

    const data = Buffer.from(chunk, 'utf8').toString();
    this.client.emit('raw', 'outgoing', data);
    this.socket.send(data);
    done();
  }

  connect(opts) {
    this.config = opts;
    this.hasStream = false;
    this.closing = false;
    this.parser = new StreamParser({
      acceptLanguages: this.config.acceptLanguages,
      allowComments: false,
      lang: this.config.lang,
      registry: this.stanzas,
      wrappedStream: false
    });
    this.parser.on('data', e => {
      const name = e.kind;
      const stanzaObj = e.stanza;

      if (name === 'stream') {
        if (stanzaObj.action === 'open') {
          this.hasStream = true;
          this.stream = stanzaObj;
          return this.client.emit('stream:start', stanzaObj);
        }

        if (stanzaObj.action === 'close') {
          this.client.emit('stream:end');
          return this.disconnect();
        }
      }

      this.push({
        kind: e.kind,
        stanza: e.stanza
      });
    });
    this.parser.on('error', err => {
      const streamError = {
        condition: StreamErrorCondition.InvalidXML
      };
      this.client.emit('stream:error', streamError, err);
      this.write(this.stanzas.export('error', streamError).toString());
      return this.disconnect();
    });
    this.socket = new nativeWS(opts.url, 'xmpp');

    this.socket.onopen = () => {
      this.emit('connect');
      this.sm.started = false;
      this.client.emit('connected');
      this.write(this.startHeader());
    };

    this.socket.onmessage = wsMsg => {
      const data = Buffer.from(wsMsg.data, 'utf8').toString();
      this.client.emit('raw', 'incoming', data);

      if (this.parser) {
        this.parser.write(data);
      }
    };

    this.socket.onclose = () => {
      this.push(null);
    };
  }

  disconnect() {
    if (this.socket && !this.closing && this.hasStream) {
      this.closing = true;
      this.write(this.closeHeader());
    } else {
      this.hasStream = false;
      this.stream = undefined;

      if (this.socket) {
        this.end();
      }

      this.socket = undefined;
    }
  }

  send(dataOrName, data) {
    var _a;

    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      let output;

      if (data) {
        output = (_a = this.stanzas.export(dataOrName, data)) === null || _a === void 0 ? void 0 : _a.toString();
      }

      if (!output) {
        return;
      }

      return new Promise((resolve, reject) => {
        this.write(output, 'utf8', err => err ? reject(err) : resolve());
      });
    });
  }

  restart() {
    this.hasStream = false;
    this.write(this.startHeader());
  }

  startHeader() {
    const header = this.stanzas.export('stream', {
      action: 'open',
      lang: this.config.lang,
      to: this.config.server,
      version: '1.0'
    });
    return header.toString();
  }

  closeHeader() {
    const header = this.stanzas.export('stream', {
      action: 'close'
    });
    return header.toString();
  }

}

class Client extends _events.EventEmitter {
  constructor(opts = {}) {
    super();
    this.setMaxListeners(100); // Some EventEmitter shims don't include off()

    this.off = this.removeListener;
    this.updateConfig(opts);
    this.jid = '';
    this.sasl = new Factory();
    this.sasl.register('EXTERNAL', EXTERNAL, 1000);
    this.sasl.register('SCRAM-SHA-256-PLUS', SCRAM, 350);
    this.sasl.register('SCRAM-SHA-256', SCRAM, 300);
    this.sasl.register('SCRAM-SHA-1-PLUS', SCRAM, 250);
    this.sasl.register('SCRAM-SHA-1', SCRAM, 200);
    this.sasl.register('DIGEST-MD5', DIGEST, 100);
    this.sasl.register('OAUTHBEARER', OAUTH, 100);
    this.sasl.register('X-OAUTH2', PLAIN, 50);
    this.sasl.register('PLAIN', PLAIN, 1);
    this.sasl.register('ANONYMOUS', ANONYMOUS, 0);
    this.stanzas = new Registry();
    this.stanzas.define(Protocol$1a);
    this.use(core);
    this.sm = new StreamManagement();

    if (this.config.allowResumption !== undefined) {
      this.sm.allowResume = this.config.allowResumption;
    }

    this.sm.on('prebound', jid => {
      this.jid = jid;
      this.emit('session:bound', jid);
    });
    this.on('session:bound', jid => this.sm.bind(jid));
    this.sm.on('send', sm => this.send('sm', sm));
    this.sm.on('acked', acked => this.emit('stanza:acked', acked));
    this.sm.on('failed', failed => this.emit('stanza:failed', failed));
    this.sm.on('hibernated', data => this.emit('stanza:hibernated', data)); // We disable outgoing processing while stanza resends are queued up
    // to prevent any interleaving.

    this.sm.on('begin-resend', () => this.outgoingDataQueue.pause());
    this.sm.on('resend', ({
      kind,
      stanza
    }) => this.send(kind, stanza, true));
    this.sm.on('end-resend', () => this.outgoingDataQueue.resume()); // Create message:* flavors of stanza:* SM events

    for (const type of ['acked', 'hibernated', 'failed']) {
      this.on(`stanza:${type}`, data => {
        if (data.kind === 'message') {
          this.emit(`message:${type}`, data.stanza);
        }
      });
    }

    this.transports = {
      bosh: BOSH,
      websocket: WSConnection
    };
    this.incomingDataQueue = (0, _async.priorityQueue)((task, done) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const {
        kind,
        stanza
      } = task;
      this.emit(kind, stanza);

      if (stanza.id) {
        this.emit(kind + ':id:' + stanza.id, stanza);
      }

      if (kind === 'message' || kind === 'presence' || kind === 'iq') {
        this.emit('stanza', stanza);
        yield this.sm.handle();
      } else if (kind === 'sm') {
        if (stanza.type === 'ack') {
          yield this.sm.process(stanza);
          this.emit('stream:management:ack', stanza);
        }

        if (stanza.type === 'request') {
          this.sm.ack();
        }
      }

      if (done) {
        done();
      }
    }), 1);
    this.outgoingDataQueue = (0, _async.priorityQueue)((task, done) => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      var _a;

      const {
        kind,
        stanza,
        replay
      } = task;
      const ackRequest = replay || (yield this.sm.track(kind, stanza));

      if (kind === 'message') {
        if (replay) {
          this.emit('message:retry', stanza);
        } else {
          this.emit('message:sent', stanza, false);
        }
      }

      try {
        if (!this.transport) {
          throw new Error('Missing transport');
        }

        yield this.transport.send(kind, stanza);

        if (ackRequest) {
          (_a = this.transport) === null || _a === void 0 ? void 0 : _a.send('sm', {
            type: 'request'
          });
        }
      } catch (err) {
        if (['message', 'presence', 'iq'].includes(kind)) {
          if (!this.sm.started || !this.sm.resumable) {
            this.emit('stanza:failed', {
              kind,
              stanza
            });
          } else if (this.sm.resumable && !this.transport) {
            this.emit('stanza:hibernated', {
              kind,
              stanza
            });
          }
        }
      }

      if (done) {
        done();
      }
    }), 1);
    this.on('stream:data', (json, kind) => {
      this.incomingDataQueue.push({
        kind,
        stanza: json
      }, 0);
    });
    this.on('--transport-disconnected', () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const drains = [];

      if (!this.incomingDataQueue.idle()) {
        drains.push(this.incomingDataQueue.drain());
      }

      if (!this.outgoingDataQueue.idle()) {
        drains.push(this.outgoingDataQueue.drain());
      }

      yield Promise.all(drains);
      yield this.sm.hibernate();

      if (this.transport) {
        delete this.transport;
      }

      this.emit('--reset-stream-features');
      this.emit('disconnected');
    }));
    this.on('iq', iq => {
      const iqType = iq.type;
      const payloadType = iq.payloadType;
      const iqEvent = 'iq:' + iqType + ':' + payloadType;

      if (iqType === 'get' || iqType === 'set') {
        if (payloadType === 'invalid-payload-count') {
          return this.sendIQError(iq, {
            error: {
              condition: 'bad-request',
              type: 'modify'
            }
          });
        }

        if (payloadType === 'unknown-payload' || this.listenerCount(iqEvent) === 0) {
          return this.sendIQError(iq, {
            error: {
              condition: 'service-unavailable',
              type: 'cancel'
            }
          });
        }

        this.emit(iqEvent, iq);
      }
    });
    this.on('message', msg => {
      const isChat = msg.alternateLanguageBodies && msg.alternateLanguageBodies.length || msg.links && msg.links.length;
      const isMarker = msg.marker && msg.marker.type !== 'markable';

      if (isChat && !isMarker) {
        if (msg.type === 'chat' || msg.type === 'normal') {
          this.emit('chat', msg);
        } else if (msg.type === 'groupchat') {
          this.emit('groupchat', msg);
        }
      }

      if (msg.type === 'error') {
        this.emit('message:error', msg);
      }
    });
    this.on('presence', pres => {
      let presType = pres.type || 'available';

      if (presType === 'error') {
        presType = 'presence:error';
      }

      this.emit(presType, pres);
    });
  }

  updateConfig(opts = {}) {
    const currConfig = this.config || {};
    this.config = Object.assign(Object.assign({
      allowResumption: true,
      jid: '',
      transports: {
        bosh: true,
        websocket: true
      },
      useStreamManagement: true
    }, currConfig), opts);

    if (!this.config.server) {
      this.config.server = getDomain(this.config.jid);
    }

    if (this.config.password) {
      this.config.credentials = this.config.credentials || {};
      this.config.credentials.password = this.config.password;
      delete this.config.password;
    }
  }

  get stream() {
    return this.transport ? this.transport.stream : undefined;
  }

  emit(name, ...args) {
    // Continue supporting the most common and useful wildcard events
    const res = super.emit(name, ...args);

    if (name === 'raw') {
      super.emit(`raw:${args[0]}`, args[1]);
      super.emit('raw:*', `raw:${args[0]}`, args[1]);
      super.emit('*', `raw:${args[0]}`, args[1]);
    } else {
      super.emit('*', name, ...args);
    }

    return res;
  }

  use(pluginInit) {
    if (typeof pluginInit !== 'function') {
      return;
    }

    pluginInit(this, this.stanzas, this.config);
  }

  nextId() {
    return uuid();
  }

  getCredentials() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      return this._getConfiguredCredentials();
    });
  }

  connect() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.emit('--reset-stream-features');
      const transportPref = ['websocket', 'bosh'];
      let endpoints;

      for (const name of transportPref) {
        let conf = this.config.transports[name];

        if (!conf) {
          continue;
        }

        if (typeof conf === 'string') {
          conf = {
            url: conf
          };
        } else if (conf === true) {
          if (!endpoints) {
            try {
              endpoints = yield this.discoverBindings(this.config.server);
            } catch (err) {
              console.error(err);
              continue;
            }
          }

          endpoints[name] = (endpoints[name] || []).filter(url => url.startsWith('wss:') || url.startsWith('https:'));

          if (!endpoints[name] || !endpoints[name].length) {
            continue;
          }

          conf = {
            url: endpoints[name][0]
          };
        }

        this.transport = new this.transports[name](this, this.sm, this.stanzas);
        this.transport.connect(Object.assign({
          acceptLanguages: this.config.acceptLanguages || ['en'],
          jid: this.config.jid,
          lang: this.config.lang || 'en',
          server: this.config.server,
          url: conf.url
        }, conf));
        return;
      }

      console.error('No endpoints found for the requested transports.');
      return this.disconnect();
    });
  }

  disconnect() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      this.outgoingDataQueue.pause();

      if (this.sessionStarted && !this.sm.started) {
        // Only emit session:end if we had a session, and we aren't using
        // stream management to keep the session alive.
        this.emit('session:end');
      }

      this.emit('--reset-stream-features');
      this.sessionStarted = false;

      if (this.transport) {
        this.transport.disconnect();
      } else {
        this.emit('--transport-disconnected');
      }

      this.outgoingDataQueue.resume();

      if (!this.outgoingDataQueue.idle()) {
        yield this.outgoingDataQueue.drain();
      }

      yield this.sm.shutdown();
    });
  }

  send(kind, stanza, replay = false) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => {
        this.outgoingDataQueue.push({
          kind,
          stanza,
          replay
        }, replay ? 0 : 1, err => err ? reject(err) : resolve());
      });
    });
  }

  sendMessage(data) {
    const id = data.id || this.nextId();
    const msg = Object.assign({
      id,
      originId: id
    }, data);
    this.send('message', msg);
    return msg.id;
  }

  sendPresence(data = {}) {
    const pres = Object.assign({
      id: this.nextId()
    }, data);
    this.send('presence', pres);
    return pres.id;
  }

  sendIQ(data) {
    const iq = Object.assign({
      id: this.nextId()
    }, data);
    const allowed = allowedResponders(this.jid, data.to);
    const respEvent = 'iq:id:' + iq.id;
    const request = new Promise((resolve, reject) => {
      const handler = res => {
        // Only process result from the correct responder
        if (!allowed.has(res.from)) {
          return;
        } // Only process result or error responses, if the responder
        // happened to send us a request using the same ID value at
        // the same time.


        if (res.type !== 'result' && res.type !== 'error') {
          return;
        }

        this.off(respEvent, handler);

        if (res.type === 'result') {
          resolve(res);
        } else {
          reject(res);
        }
      };

      this.on(respEvent, handler);
    });
    this.send('iq', iq);
    const timeout = this.config.timeout || 15;
    return timeoutPromise(request, timeout * 1000, () => Object.assign(Object.assign({}, iq), {
      to: undefined,
      from: undefined,
      error: {
        condition: 'timeout',
        text: `Request timed out after ${timeout} seconds.`
      },
      id: iq.id,
      type: 'error'
    }));
  }

  sendIQResult(original, reply) {
    this.send('iq', Object.assign(Object.assign({}, reply), {
      id: original.id,
      to: original.from,
      type: 'result'
    }));
  }

  sendIQError(original, error) {
    this.send('iq', Object.assign(Object.assign({}, error), {
      id: original.id,
      to: original.from,
      type: 'error'
    }));
  }

  sendStreamError(error) {
    this.emit('stream:error', error);
    this.send('error', error);
    this.disconnect();
  }

  _getConfiguredCredentials() {
    const creds = this.config.credentials || {};
    const requestedJID = parse(this.config.jid || '');
    const username = creds.username || requestedJID.local;
    const server = creds.host || requestedJID.domain;
    return Object.assign({
      host: server,
      password: this.config.password,
      realm: server,
      serviceName: server,
      serviceType: 'xmpp',
      username
    }, creds);
  }

}
/**
 * Calculate the erase and insert actions needed to describe the user's edit operation.
 *
 * Based on the code point buffers before and after the edit, we find the single erase
 * and insert actions needed to describe the full change. We are minimizing the number
 * of deltas, not minimizing the number of affected code points.
 *
 * @param oldText The original buffer of Unicode code points before the user's edit action.
 * @param newText The new buffer of Unicode code points after the user's edit action.
 */


exports.Client = Client;

function diff(oldText, newText) {
  const oldLen = oldText.length;
  const newLen = newText.length;
  const searchLen = Math.min(oldLen, newLen);
  let prefixSize = 0;

  for (prefixSize = 0; prefixSize < searchLen; prefixSize++) {
    if (oldText[prefixSize] !== newText[prefixSize]) {
      break;
    }
  }

  let suffixSize = 0;

  for (suffixSize = 0; suffixSize < searchLen - prefixSize; suffixSize++) {
    if (oldText[oldLen - suffixSize - 1] !== newText[newLen - suffixSize - 1]) {
      break;
    }
  }

  const matchedSize = prefixSize + suffixSize;
  const events = [];

  if (matchedSize < oldLen) {
    events.push({
      length: oldLen - matchedSize,
      position: oldLen - suffixSize,
      type: 'erase'
    });
  }

  if (matchedSize < newLen) {
    const insertedText = newText.slice(prefixSize, prefixSize + newLen - matchedSize);
    events.push({
      position: prefixSize,
      text: _punycode.default.ucs2.encode(insertedText),
      type: 'insert'
    });
  }

  return events;
}
/**
 * Class for processing RTT events and providing a renderable string of the resulting text.
 */


class DisplayBuffer {
  constructor(onStateChange, ignoreWaits = false) {
    this.synced = false;
    this.cursorPosition = 0;
    this.ignoreWaits = false;
    this.timeDeficit = 0;
    this.sequenceNumber = 0;

    this.onStateChange = onStateChange || function noop() {
      return;
    };

    this.ignoreWaits = ignoreWaits;
    this.buffer = [];
    this.resetActionQueue();
  }
  /**
   * The encoded Unicode string to display.
   */


  get text() {
    return _punycode.default.ucs2.encode(this.buffer.slice());
  }
  /**
   * Mark the RTT message as completed and reset state.
   */


  commit() {
    this.resetActionQueue();
  }
  /**
   * Accept an RTT event for processing.
   *
   * A single event can contain multiple edit actions, including
   * wait pauses.
   *
   * Events must be processed in order of their `seq` value in order
   * to stay in sync.
   *
   * @param event {RTTEvent} The RTT event to process.
   */


  process(event) {
    if (event.event === 'cancel' || event.event === 'init') {
      this.resetActionQueue();
      return;
    } else if (event.event === 'reset' || event.event === 'new') {
      this.resetActionQueue();

      if (event.seq !== undefined) {
        this.sequenceNumber = event.seq;
      }
    } else if (event.seq !== this.sequenceNumber) {
      this.synced = false;
    }

    if (event.actions) {
      const baseTime = Date.now();
      let accumulatedWait = 0;

      for (const action of event.actions) {
        action.baseTime = baseTime + accumulatedWait;

        if (action.type === 'wait') {
          accumulatedWait += action.duration;
        }

        this.actionQueue.push(action, 0);
      }
    }

    this.sequenceNumber = this.sequenceNumber + 1;
  }
  /**
   * Insert text into the Unicode code point buffer
   *
   * By default, the insertion position is the end of the buffer.
   *
   * @param text The raw text to insert
   * @param position The position to start the insertion
   */


  insert(text = '', position = this.buffer.length) {
    text = text.normalize('NFC');

    const insertedText = _punycode.default.ucs2.decode(text);

    this.buffer.splice(position, 0, ...insertedText);
    this.cursorPosition = position + insertedText.length;
    this.emitState();
  }
  /**
   * Erase text from the Unicode code point buffer
   *
   * By default, the erased text length is `1`, and the position is the end of the buffer.
   *
   * @param length The number of code points to erase from the buffer, starting at {position} and erasing to the left.
   * @param position The position to start erasing code points. Erasing continues to the left.
   */


  erase(length = 1, position = this.buffer.length) {
    position = Math.max(Math.min(position, this.buffer.length), 0);
    length = Math.max(Math.min(length, this.text.length), 0);
    this.buffer.splice(Math.max(position - length, 0), length);
    this.cursorPosition = Math.max(position - length, 0);
    this.emitState();
  }

  emitState(additional = {}) {
    this.onStateChange(Object.assign({
      cursorPosition: this.cursorPosition,
      synced: this.synced,
      text: this.text
    }, additional));
  }
  /**
   * Reset the processing state and queue.
   *
   * Used when 'init', 'new', 'reset', and 'cancel' RTT events are processed.
   */


  resetActionQueue() {
    if (this.actionQueue) {
      this.actionQueue.kill();
    }

    this.sequenceNumber = 0;
    this.synced = true;
    this.buffer = [];
    this.timeDeficit = 0;
    this.actionQueue = (0, _async.priorityQueue)((action, done) => {
      const currentTime = Date.now();

      if (action.type === 'insert') {
        this.insert(action.text, action.position);
        return done();
      } else if (action.type === 'erase') {
        this.erase(action.length, action.position);
        return done();
      } else if (action.type === 'wait') {
        if (this.ignoreWaits) {
          return done();
        }

        if (action.duration > 700) {
          action.duration = 700;
        }

        const waitTime = action.duration - (currentTime - action.baseTime) + this.timeDeficit;

        if (waitTime <= 0) {
          this.timeDeficit = waitTime;
          return done();
        } else {
          this.timeDeficit = 0;
          setTimeout(() => done(), waitTime);
        }
      } else {
        return done();
      }
    }, 1);
    this.emitState();
  }

}
/**
 * Class for tracking changes in a source text, and generating RTT events based on those changes.
 */


class InputBuffer {
  constructor(onStateChange, ignoreWaits = false) {
    this.resetInterval = 10000;
    this.ignoreWaits = false;
    this.isStarting = false;
    this.isReset = false;
    this.changedBetweenResets = false;

    this.onStateChange = onStateChange || function noop() {
      return;
    };

    this.ignoreWaits = ignoreWaits;
    this.buffer = [];
    this.actionQueue = [];
    this.sequenceNumber = 0;
  }

  get text() {
    return _punycode.default.ucs2.encode(this.buffer.slice());
  }
  /**
   * Generate action deltas based on the new full state of the source text.
   *
   * The text provided here is the _entire_ source text, not a diff.
   *
   * @param text The new state of the user's text.
   */


  update(text) {
    let actions = [];

    if (text !== undefined) {
      text = text.normalize('NFC');

      const newBuffer = _punycode.default.ucs2.decode(text);

      actions = diff(this.buffer, newBuffer.slice());
      this.buffer = newBuffer;
      this.emitState();
    }

    const now = Date.now();

    if (this.changedBetweenResets && now - this.lastResetTime > this.resetInterval) {
      this.actionQueue = [];
      this.actionQueue.push({
        position: 0,
        text: this.text,
        type: 'insert'
      });
      this.isReset = true;
      this.lastActionTime = now;
      this.lastResetTime = now;
      this.changedBetweenResets = false;
    } else if (actions.length) {
      const wait = now - (this.lastActionTime || now);

      if (wait > 0 && !this.ignoreWaits) {
        this.actionQueue.push({
          duration: wait,
          type: 'wait'
        });
      }

      for (const action of actions) {
        this.actionQueue.push(action);
      }

      this.lastActionTime = now;
      this.changedBetweenResets = true;
    } else {
      this.lastActionTime = now;
    }
  }
  /**
   * Formally start an RTT session.
   *
   * Generates a random starting event sequence number.
   *
   * @param resetInterval {Milliseconds} Time to wait between using RTT reset events during editing.
   */


  start(resetInterval = this.resetInterval) {
    this.commit();
    this.isStarting = true;
    this.resetInterval = resetInterval;
    this.sequenceNumber = Math.floor(Math.random() * 10000 + 1);
    return {
      event: 'init'
    };
  }
  /**
   * Formally stops the RTT session.
   */


  stop() {
    this.commit();
    return {
      event: 'cancel'
    };
  }
  /**
   * Generate an RTT event based on queued edit actions.
   *
   * The edit actions included in the event are all those made since the last
   * time a diff was requested.
   */


  diff() {
    this.update();

    if (!this.actionQueue.length) {
      return null;
    }

    const event = {
      actions: this.actionQueue,
      seq: this.sequenceNumber++
    };

    if (this.isStarting) {
      event.event = 'new';
      this.isStarting = false;
      this.lastResetTime = Date.now();
    } else if (this.isReset) {
      event.event = 'reset';
      this.isReset = false;
    }

    this.actionQueue = [];
    return event;
  }
  /**
   * Reset the RTT session state to prepare for a new message text.
   */


  commit() {
    this.sequenceNumber = 0;
    this.lastActionTime = 0;
    this.actionQueue = [];
    this.buffer = [];
  }

  emitState() {
    this.onStateChange({
      text: this.text
    });
  }

}

var RTT = /*#__PURE__*/Object.freeze({
  __proto__: null,
  diff: diff,
  DisplayBuffer: DisplayBuffer,
  InputBuffer: InputBuffer
});
exports.RTT = RTT;
const VERSION$1 = VERSION;
exports.VERSION = VERSION$1;

function createClient(opts) {
  const client = new Client(opts);
  client.use(Plugins);
  return client;
}
},{"tslib":"../node_modules/tslib/tslib.es6.js","async":"../node_modules/async/dist/async.mjs","events":"../node_modules/events/events.js","punycode":"../node_modules/node-libs-browser/node_modules/punycode/punycode.js","readable-stream":"../node_modules/stanza/node_modules/readable-stream/readable-browser.js","sdp":"../node_modules/sdp/sdp.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"../node_modules/eventemitter3/index.js":[function(require,module,exports) {
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}],"../node_modules/shortid/lib/random/random-from-seed.js":[function(require,module,exports) {
'use strict';

// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};

},{}],"../node_modules/shortid/lib/alphabet.js":[function(require,module,exports) {
'use strict';

var randomFromSeed = require('./random/random-from-seed');

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};

},{"./random/random-from-seed":"../node_modules/shortid/lib/random/random-from-seed.js"}],"../node_modules/shortid/lib/random/random-byte-browser.js":[function(require,module,exports) {
'use strict';

var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;

},{}],"../node_modules/nanoid/format.browser.js":[function(require,module,exports) {
// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}

},{}],"../node_modules/shortid/lib/generate.js":[function(require,module,exports) {
'use strict';

var alphabet = require('./alphabet');
var random = require('./random/random-byte');
var format = require('nanoid/format');

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;

},{"./alphabet":"../node_modules/shortid/lib/alphabet.js","./random/random-byte":"../node_modules/shortid/lib/random/random-byte-browser.js","nanoid/format":"../node_modules/nanoid/format.browser.js"}],"../node_modules/shortid/lib/build.js":[function(require,module,exports) {
'use strict';

var generate = require('./generate');
var alphabet = require('./alphabet');

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;

},{"./generate":"../node_modules/shortid/lib/generate.js","./alphabet":"../node_modules/shortid/lib/alphabet.js"}],"../node_modules/shortid/lib/is-valid.js":[function(require,module,exports) {
'use strict';
var alphabet = require('./alphabet');

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;

},{"./alphabet":"../node_modules/shortid/lib/alphabet.js"}],"../node_modules/shortid/lib/util/cluster-worker-id-browser.js":[function(require,module,exports) {
'use strict';

module.exports = 0;

},{}],"../node_modules/shortid/lib/index.js":[function(require,module,exports) {
'use strict';

var alphabet = require('./alphabet');
var build = require('./build');
var isValid = require('./is-valid');

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = require('./util/cluster-worker-id') || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;

},{"./alphabet":"../node_modules/shortid/lib/alphabet.js","./build":"../node_modules/shortid/lib/build.js","./is-valid":"../node_modules/shortid/lib/is-valid.js","./util/cluster-worker-id":"../node_modules/shortid/lib/util/cluster-worker-id-browser.js"}],"../node_modules/shortid/index.js":[function(require,module,exports) {
'use strict';
module.exports = require('./lib/index');

},{"./lib/index":"../node_modules/shortid/lib/index.js"}],"../node_modules/@mattkrick/fast-rtc-peer/dist/FastRTCPeer.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/FastRTCPeer.ts");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./src/FastRTCPeer.ts":
  /*!****************************!*\
    !*** ./src/FastRTCPeer.ts ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcFastRTCPeerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! eventemitter3 */
    "eventemitter3");
    /* harmony import */


    var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! shortid */
    "shortid");
    /* harmony import */


    var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);

    var replyWithTrack = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(transceiver, trackConfigOrKind) {
        var track, setParameters;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(trackConfigOrKind && typeof trackConfigOrKind !== 'string')) {
                  _context.next = 8;
                  break;
                }

                track = trackConfigOrKind.track, setParameters = trackConfigOrKind.setParameters;
                transceiver.direction = 'sendrecv';

                if (!setParameters) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return setParameters(transceiver.sender);

              case 6:
                _context.next = 8;
                return transceiver.sender.replaceTrack(track);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function replyWithTrack(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var FastRTCPeer = /*#__PURE__*/function (_eventemitter3__WEBPA) {
      _inherits(FastRTCPeer, _eventemitter3__WEBPA);

      var _super = _createSuper(FastRTCPeer);

      function FastRTCPeer() {
        var _this;

        var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, FastRTCPeer);

        _this = _super.call(this);
        _this.dataChannelQueue = [];
        _this.remoteStreams = {};
        _this.streamConfig = [];
        _this.midsWithoutNames = new Set();
        _this.pendingTransceivers = [];
        _this.negotiationCount = 0;
        _this.midLookup = {};
        _this.dataChannel = null;

        _this.onIceCandidate = function (event) {
          var payload = {
            type: 'candidate',
            candidate: event.candidate
          };

          _this.emit('signal', payload, _assertThisInitialized(_this));
        };

        _this.onIceConnectionStateChange = function () {
          var iceConnectionState = _this.peerConnection.iceConnectionState;

          switch (iceConnectionState) {
            case 'closed':
            case 'failed':
              _this.close();

              break;
          }

          _this.emit('connection', iceConnectionState, _assertThisInitialized(_this));
        };

        _this.onNegotiationNeeded = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var neg, offer, sdp, type;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  neg = ++_this.negotiationCount;
                  _context2.next = 3;
                  return _this.peerConnection.createOffer();

                case 3:
                  offer = _context2.sent;

                  if (!(neg !== _this.negotiationCount)) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return");

                case 6:
                  _context2.next = 8;
                  return _this.peerConnection.setLocalDescription(offer).catch(function (e) {
                    _this.emit('error', e, _assertThisInitialized(_this));
                  });

                case 8:
                  _this.pendingTransceivers.slice().forEach(function (_ref3, idx) {
                    var mid = _ref3.transceiver.mid,
                        transceiverName = _ref3.transceiverName;
                    if (!mid) return;
                    _this.midLookup[transceiverName] = mid;

                    _this.sendInternal({
                      type: 'midOffer',
                      mid: mid,
                      transceiverName: transceiverName
                    });

                    _this.pendingTransceivers.splice(idx, 1);
                  });

                  sdp = offer.sdp, type = offer.type;

                  _this.emit('signal', {
                    sdp: sdp,
                    type: type
                  }, _assertThisInitialized(_this));

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        _this.addTrackToStream = function (transceiverName, track) {
          var streamNames = new Set(_this.streamConfig.filter(function (config) {
            return config.transceiverName === transceiverName;
          }).map(function (_ref4) {
            var streamName = _ref4.streamName;
            return streamName;
          }));
          streamNames.forEach(function (streamName) {
            var stream = _this.remoteStreams[streamName];

            if (!stream) {
              stream = _this.remoteStreams[streamName] = new MediaStream([track]);
            } else {
              stream.addTrack(track);
            }

            var streamCount = _this.streamConfig.filter(function (config) {
              return config.streamName === streamName;
            }).length;

            if (streamCount === stream.getTracks().length) {
              _this.emit('stream', stream, streamName, _assertThisInitialized(_this));
            }
          });
        };

        _this.onTrack = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
            var track, transceiver, transceiverName;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    track = e.track, transceiver = e.transceiver;
                    transceiverName = Object.keys(_this.midLookup).find(function (name) {
                      return _this.midLookup[name] === transceiver.mid;
                    });

                    if (!transceiverName) {
                      _context3.next = 6;
                      break;
                    }

                    _this.addTrackToStream(transceiverName, track);

                    _context3.next = 9;
                    break;

                  case 6:
                    if (transceiver.mid) {
                      _context3.next = 8;
                      break;
                    }

                    throw new Error('No mid in onTrack');

                  case 8:
                    _this.midsWithoutNames.add(transceiver.mid);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }();

        _this.handleOffer = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(initSdp) {
            var remoteSdp, answer, sdp, type;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    remoteSdp = new _this.wrtc.RTCSessionDescription(initSdp);
                    _context4.next = 3;
                    return _this.peerConnection.setRemoteDescription(remoteSdp).catch(function (e) {
                      _this.emit('error', e, _assertThisInitialized(_this));
                    });

                  case 3:
                    _context4.next = 5;
                    return _this.peerConnection.createAnswer();

                  case 5:
                    answer = _context4.sent;
                    sdp = answer.sdp, type = answer.type;

                    _this.emit('signal', {
                      type: type,
                      sdp: sdp
                    }, _assertThisInitialized(_this));

                    _context4.next = 10;
                    return _this.peerConnection.setLocalDescription(answer).catch(function (e) {
                      _this.emit('error', e, _assertThisInitialized(_this));
                    });

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4) {
            return _ref6.apply(this, arguments);
          };
        }();

        _this.handleInternalMessage = function (data) {
          if (typeof data !== 'string' || !data.startsWith('@fast')) return false;
          var payload = JSON.parse(data.substring(6));

          switch (payload.type) {
            case 'close':
              _this.close();

              break;

            case 'midOffer':
              _this.midLookup[payload.transceiverName] = payload.mid;

              if (_this.midsWithoutNames.has(payload.mid)) {
                _this.midsWithoutNames.delete(payload.mid);

                var transceiver = _this.peerConnection.getTransceivers().find(function (_ref7) {
                  var mid = _ref7.mid;
                  return mid === payload.mid;
                });

                if (!transceiver) throw new Error("No transceiver exists with mid: ".concat(payload.mid));

                _this.addTrackToStream(payload.transceiverName, transceiver.receiver.track);

                var _this$streamConfig$fi = _this.streamConfig.find(function (_ref8) {
                  var transceiverName = _ref8.transceiverName;
                  return transceiverName === payload.transceiverName;
                }),
                    trackConfigOrKind = _this$streamConfig$fi.trackConfigOrKind;

                replyWithTrack(transceiver, trackConfigOrKind).catch();
              }

              break;

            case 'transceiverRequest':
              if (!_this.midLookup[payload.transceiverName] && !_this.pendingTransceivers.some(function (_ref9) {
                var transceiverName = _ref9.transceiverName;
                return transceiverName === payload.transceiverName;
              })) {
                _this.setupTransceiver(payload.transceiverName, payload.kind);
              }

              break;

            case 'stream':
              var streamName = payload.streamName,
                  transceiverNames = payload.transceiverNames;
              transceiverNames.forEach(function (transceiverName) {
                var existingConfig = _this.streamConfig.find(function (config) {
                  return config.streamName === streamName && config.transceiverName === transceiverName;
                });

                if (!existingConfig) {
                  _this.streamConfig.push({
                    streamName: streamName,
                    transceiverName: transceiverName,
                    trackConfigOrKind: null
                  });
                }
              });
              break;
          }

          return true;
        };

        _this.setChannelEvents = function (channel) {
          channel.onmessage = function (event) {
            if (!_this.handleInternalMessage(event.data)) {
              _this.emit('data', event.data, _assertThisInitialized(_this));
            }
          };

          channel.onopen = function () {
            _this.dataChannel = channel;

            _this.dataChannelQueue.forEach(function (payload) {
              return _this.sendInternal(payload);
            });

            _this.dataChannelQueue.length = 0;

            _this.emit('open', _assertThisInitialized(_this));
          };

          channel.onclose = function () {
            _this.emit('close', _assertThisInitialized(_this));
          };
        };

        _this.addStreams = function (streams) {
          if (!_this.peerConnection) return;
          Object.keys(streams).forEach(function (streamName) {
            var trackDict = streams[streamName];
            var transceiverNames = Object.keys(trackDict);

            _this.sendInternal({
              type: 'stream',
              streamName: streamName,
              transceiverNames: transceiverNames
            });

            transceiverNames.forEach(function (transceiverName) {
              var trackConfigOrKind = trackDict[transceiverName];

              _this.upsertStreamConfig(streamName, transceiverName, trackConfigOrKind);

              if (trackConfigOrKind) {
                _this.setTrack(transceiverName, trackConfigOrKind);
              }
            });
          });
        };

        _this.send = function (data) {
          var _a;

          try {
            (_a = _this.dataChannel) === null || _a === void 0 ? void 0 : _a.send(data);
          } catch (e) {
            _this.emit('error', e, _assertThisInitialized(_this));
          }
        };

        var id = userConfig.id,
            isOfferer = userConfig.isOfferer,
            userId = userConfig.userId,
            streams = userConfig.streams,
            wrtc = userConfig.wrtc,
            _userConfig$rtcConfig = userConfig.rtcConfig,
            rtcConfig = _userConfig$rtcConfig === void 0 ? {} : _userConfig$rtcConfig;
        _this.id = id || FastRTCPeer.generateID();
        _this.isOfferer = isOfferer || false;
        _this.userId = userId || null;
        _this.wrtc = wrtc || window;
        var RTCPeerConnection = _this.wrtc.RTCPeerConnection;
        if (!RTCPeerConnection) throw new Error('Client does not support WebRTC');
        _this.peerConnection = new RTCPeerConnection(Object.assign(Object.assign({}, FastRTCPeer.defaultConfig), rtcConfig));

        _this.setupPeer();

        _this.addStreams(FastRTCPeer.fromStreamShorthand(streams));

        return _this;
      }

      _createClass(FastRTCPeer, [{
        key: "setupPeer",
        value: function setupPeer() {
          if (!this.peerConnection) return;
          this.peerConnection.onicecandidate = this.onIceCandidate;
          this.peerConnection.oniceconnectionstatechange = this.onIceConnectionStateChange;
          this.peerConnection.onnegotiationneeded = this.onNegotiationNeeded;
          this.peerConnection.ontrack = this.onTrack;
          this.addDataChannel('fast');
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(initSDP) {
          var _this2 = this;

          var desc = new this.wrtc.RTCSessionDescription(initSDP);
          this.peerConnection.setRemoteDescription(desc).catch(function (e) {
            _this2.emit('error', e, _this2);
          });
        }
      }, {
        key: "handleCandidate",
        value: function handleCandidate(candidateObj) {
          var _this3 = this;

          if (!candidateObj) return;
          var candidate = new this.wrtc.RTCIceCandidate(candidateObj);
          this.peerConnection.addIceCandidate(candidate).catch(function (e) {
            _this3.emit('error', e, _this3);
          });
        }
      }, {
        key: "sendInternal",
        value: function sendInternal(payload) {
          if (!this.dataChannel || this.dataChannel.readyState !== 'open') {
            this.dataChannelQueue.push(payload);
          } else {
            try {
              this.dataChannel.send("@fast/".concat(JSON.stringify(payload)));
            } catch (e) {
              this.dataChannelQueue.push(payload);
            }
          }
        }
      }, {
        key: "addDataChannel",
        value: function addDataChannel(label, dataChannelDict) {
          var _this4 = this;

          if (this.isOfferer) {
            var dataChannel = this.peerConnection.createDataChannel(label, dataChannelDict);
            this.setChannelEvents(dataChannel);
          } else {
            this.peerConnection.ondatachannel = function (e) {
              _this4.peerConnection.ondatachannel = null;

              _this4.setChannelEvents(e.channel);
            };
          }
        }
      }, {
        key: "setupTransceiver",
        value: function setupTransceiver(transceiverName) {
          var defaultKind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'video';

          var _this$streamConfig$fi2 = this.streamConfig.find(function (config) {
            return config.transceiverName === transceiverName;
          }),
              trackConfigOrKind = _this$streamConfig$fi2.trackConfigOrKind;

          var trackOrKind = typeof trackConfigOrKind === 'string' ? trackConfigOrKind : trackConfigOrKind ? trackConfigOrKind.track : defaultKind;
          this.negotiationCount++;
          var transceiver = this.peerConnection.addTransceiver(trackOrKind);
          this.pendingTransceivers.push({
            transceiver: transceiver,
            transceiverName: transceiverName
          });
        }
      }, {
        key: "getTransceiver",
        value: function getTransceiver(transceiverName) {
          if (!this.peerConnection) return;
          var mid = this.midLookup[transceiverName];
          return this.peerConnection.getTransceivers().find(function (transceiver) {
            return transceiver.mid === mid;
          });
        }
      }, {
        key: "setTrack",
        value: function setTrack(transceiverName, trackConfigOrKind) {
          var existingTransceiver = this.getTransceiver(transceiverName);

          if (existingTransceiver) {
            replyWithTrack(existingTransceiver, trackConfigOrKind).catch();
          } else {
            if (this.isOfferer) {
              this.setupTransceiver(transceiverName);
            } else {
              var kind = typeof trackConfigOrKind === 'string' ? trackConfigOrKind : trackConfigOrKind.track.kind;
              this.sendInternal({
                type: 'transceiverRequest',
                transceiverName: transceiverName,
                kind: kind
              });
            }
          }
        }
      }, {
        key: "upsertStreamConfig",
        value: function upsertStreamConfig(streamName, transceiverName, trackConfigOrKind) {
          var existingConfig = this.streamConfig.find(function (config) {
            return config.streamName === streamName && config.transceiverName === transceiverName;
          });

          if (!existingConfig) {
            this.streamConfig.push({
              streamName: streamName,
              transceiverName: transceiverName,
              trackConfigOrKind: trackConfigOrKind
            });
          } else {
            existingConfig.trackConfigOrKind = trackConfigOrKind;
          }
        }
      }, {
        key: "muteTrack",
        value: function muteTrack(transceiverName) {
          var transceiver = this.getTransceiver(transceiverName);

          if (!transceiver) {
            throw new Error("Invalid track name: ".concat(name));
          }

          var track = transceiver.sender.track;
          transceiver.sender.replaceTrack(null).catch();
          transceiver.direction = 'recvonly';

          if (track) {
            track.enabled = false;
            track.stop();
          }
        }
      }, {
        key: "close",
        value: function close() {
          if (!this.peerConnection) return;
          this.peerConnection.ontrack = null;
          this.peerConnection.onicecandidate = null;
          this.peerConnection.oniceconnectionstatechange = null;
          this.peerConnection.onnegotiationneeded = null;
          this.peerConnection.ondatachannel = null;

          if (this.dataChannel) {
            this.sendInternal({
              type: 'close'
            });
            this.dataChannel.onmessage = null;
            this.dataChannel = null;
          }

          this.peerConnection.close();
          this.peerConnection = null;
        }
      }, {
        key: "dispatch",
        value: function dispatch(payload) {
          switch (payload.type) {
            case 'offer':
              this.handleOffer(payload).catch();
              break;

            case 'candidate':
              this.handleCandidate(payload.candidate);
              break;

            case 'answer':
              this.handleAnswer(payload);
          }
        }
      }]);

      return FastRTCPeer;
    }(eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a);

    FastRTCPeer.defaultICEServers = [{
      urls: 'stun:stun.l.google.com:19302'
    }, {
      urls: 'stun:global.stun.twilio.com:3478?transport=udp'
    }];
    FastRTCPeer.defaultConfig = {
      iceServers: FastRTCPeer.defaultICEServers,
      sdpSemantics: 'unified-plan'
    };

    FastRTCPeer.generateID = function () {
      return shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    };

    FastRTCPeer.fromStreamShorthand = function (streams) {
      var returnStreams = {};

      if (streams) {
        Object.keys(streams).forEach(function (streamName) {
          var streamOrConfig = streams[streamName];
          returnStreams[streamName] = streamOrConfig instanceof MediaStream ? {
            audio: {
              track: streamOrConfig.getAudioTracks()[0]
            },
            video: {
              track: streamOrConfig.getVideoTracks()[0]
            }
          } : streamOrConfig || {};
        });
      }

      return returnStreams;
    };
    /* harmony default export */


    __webpack_exports__["default"] = FastRTCPeer;
    /***/
  },

  /***/
  "eventemitter3":
  /*!********************************!*\
    !*** external "eventemitter3" ***!
    \********************************/

  /*! no static exports found */

  /***/
  function eventemitter3(module, exports) {
    module.exports = require("eventemitter3");
    /***/
  },

  /***/
  "shortid":
  /*!**************************!*\
    !*** external "shortid" ***!
    \**************************/

  /*! no static exports found */

  /***/
  function shortid(module, exports) {
    module.exports = require("shortid");
    /***/
  }
  /******/

});
},{"eventemitter3":"../node_modules/eventemitter3/index.js","shortid":"../node_modules/shortid/index.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var XMPP = _interopRequireWildcard(require("stanza"));

require("regenerator-runtime/runtime");

var _fastRtcPeer = _interopRequireDefault(require("@mattkrick/fast-rtc-peer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebRTCOverXMPP = /*#__PURE__*/function () {
  function WebRTCOverXMPP(_ref) {
    var jid = _ref.jid,
        password = _ref.password,
        server = _ref.server,
        room = _ref.room;
    (0, _classCallCheck2.default)(this, WebRTCOverXMPP);
    this.jid = jid;
    this.password = password;
    this.server = server;
    this.room = room;

    this.onMessageFunc = function () {};

    this.peers = [];

    this._createXmppClient().connect();
  }

  (0, _createClass2.default)(WebRTCOverXMPP, [{
    key: "_requestOffer",
    value: function _requestOffer() {
      if (this.peers.length === 0) {
        console.log("requesting");
        this.client.sendMessage({
          to: this.room,
          from: this.jid,
          body: "connecting",
          type: "groupchat"
        });
      }
    }
  }, {
    key: "_onXmppMessage",
    value: function _onXmppMessage(msg) {
      if (msg.from !== "".concat(this.room, "/").concat(this.nickname) && (!msg.delay || new Date().getTime() - msg.delay.timestamp.getTime() < 10000)) {
        if (msg.body === 'connecting') {
          console.log("connecting:", msg);
          clearTimeout(this.timeout);

          this._createPeer(msg, true);
        } else if (msg.body && msg.body.slice(0, 1) === "{") {
          console.log("got json:", msg);
          var obj;

          try {
            obj = JSON.parse(msg.body);
          } catch (err) {
            console.log("Not json");
            return;
          }

          if (obj && obj.type.match(/^(offer|answer|candidate)$/g)) {
            var id = msg.from.split("/")[1];
            var peer = this.peers.filter(function (p) {
              return p.id === id;
            })[0];

            if (!peer) {
              peer = this._createPeer(msg, false, obj);
            } else {
              peer.dispatch(obj);
            }
          }
        }
      }
    }
  }, {
    key: "_createXmppClient",
    value: function _createXmppClient() {
      var _this = this;

      this.client = XMPP.createClient({
        jid: this.jid,
        password: this.password,
        transports: {
          bosh: this.server
        }
      });
      this.client.on('session:started', function () {
        _this.client.getRoster();

        _this.client.sendPresence();

        _this.client.joinRoom(_this.room, _this.nickname, {
          status: 'online',
          muc: {
            history: {
              maxCharacters: 0
            }
          }
        });

        _this.timeout = setTimeout(function () {
          return _this._requestOffer();
        }, 5000);
      });
      this.client.on('message', function (msg) {
        return _this._onXmppMessage(msg);
      });
      return this.client;
    }
  }, {
    key: "_createPeer",
    value: function _createPeer(msg) {
      var _this2 = this;

      var isOfferer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var obj = arguments.length > 2 ? arguments[2] : undefined;
      var peer = new _fastRtcPeer.default({
        isOfferer: isOfferer,
        id: msg.from.split("/")[1]
      });

      if (!isOfferer && obj) {
        peer.dispatch(obj);
      }

      peer.on('signal', function (payload) {
        _this2.client.sendMessage({
          to: msg.from,
          from: _this2.jid,
          body: JSON.stringify(payload)
        });
      });
      peer.on('open', function (peer) {
        console.log('connected & ready to send and receive data!', peer.id);
        peer.send("Hello to you, ".concat(peer.id));
      });
      peer.on('close', function (peer) {
        console.log('disconnected from peer!', peer.id);
        _this2.peers = _this2.peers.filter(function (p) {
          return p.id !== peer.id;
        });
      });
      peer.on('data', function (data, peer) {
        _this2.onMessageFunc(data, peer);
      });
      this.peers.push(peer);
      console.warn("peer created: ", peer.id);
    }
  }, {
    key: "on",
    value: function on(eventName, func) {
      if (eventName === "message" && func) {
        this.onMessageFunc = func;
      }

      return this;
    }
  }, {
    key: "broadcast",
    value: function broadcast(data) {
      this.peers.forEach(function (p) {
        return p.send(data);
      });
    }
  }, {
    key: "nickname",
    get: function get() {
      return this.jid.split("@")[0];
    }
  }]);
  return WebRTCOverXMPP;
}();

module.exports = WebRTCOverXMPP;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","stanza":"../node_modules/stanza/module.js","regenerator-runtime/runtime":"../node_modules/regenerator-runtime/runtime.js","@mattkrick/fast-rtc-peer":"../node_modules/@mattkrick/fast-rtc-peer/dist/FastRTCPeer.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _index = _interopRequireDefault(require("../src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.bot2 = new _index.default({
  jid: "bot2@rundik.ru",
  password: "SxXeBgoreJeBqwhw",
  server: "https://rundik.ru:5280/http-bind",
  room: "3781d7802e3dc338fc9e5b8b0b0e0748e15c56c8@chat.404.city"
});
bot2.on("message", function (data, peer) {
  console.log("data \"".concat(data, "\" from ").concat(peer.id));
});
window.bot3 = new _index.default({
  jid: "bot3@rundik.ru",
  password: "SxXeBgoreJeBqwhw",
  server: "https://rundik.ru:5280/http-bind",
  room: "3781d7802e3dc338fc9e5b8b0b0e0748e15c56c8@chat.404.city"
});
bot3.on("message", function (data, peer) {
  console.log("data \"".concat(data, "\" from ").concat(peer.id));
});
},{"../src/index.js":"../src/index.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54757" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)