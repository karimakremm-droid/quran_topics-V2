var jc = (e) => {
  throw TypeError(e);
};
var yl = (e, t, n) => t.has(e) || jc("Cannot " + n);
var T = (e, t, n) => (yl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Z = (e, t, n) => t.has(e) ? jc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), H = (e, t, n, r) => (yl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ke = (e, t, n) => (yl(e, t, "access private method"), n);
var xs = (e, t, n, r) => ({ set _(o) {
  H(e, t, o, n);
}, get _() {
  return T(e, t, r);
} });
function qg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e)) {
        const s = Object.getOwnPropertyDescriptor(r, o);
        s && Object.defineProperty(e, o, s.get ? s : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o) if (s.type === "childList") for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Af = { exports: {} }, Fi = {}, Mf = { exports: {} }, G = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var is = /* @__PURE__ */ Symbol.for("react.element"), Xg = /* @__PURE__ */ Symbol.for("react.portal"), Zg = /* @__PURE__ */ Symbol.for("react.fragment"), Jg = /* @__PURE__ */ Symbol.for("react.strict_mode"), ey = /* @__PURE__ */ Symbol.for("react.profiler"), ty = /* @__PURE__ */ Symbol.for("react.provider"), ny = /* @__PURE__ */ Symbol.for("react.context"), ry = /* @__PURE__ */ Symbol.for("react.forward_ref"), oy = /* @__PURE__ */ Symbol.for("react.suspense"), sy = /* @__PURE__ */ Symbol.for("react.memo"), iy = /* @__PURE__ */ Symbol.for("react.lazy"), Rc = Symbol.iterator;
function ly(e) {
  return e === null || typeof e != "object" ? null : (e = Rc && e[Rc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Lf = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, If = Object.assign, Df = {};
function no(e, t, n) {
  this.props = e, this.context = t, this.refs = Df, this.updater = n || Lf;
}
no.prototype.isReactComponent = {};
no.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
no.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ff() {
}
Ff.prototype = no.prototype;
function uu(e, t, n) {
  this.props = e, this.context = t, this.refs = Df, this.updater = n || Lf;
}
var cu = uu.prototype = new Ff();
cu.constructor = uu;
If(cu, no.prototype);
cu.isPureReactComponent = true;
var _c = Array.isArray, zf = Object.prototype.hasOwnProperty, du = { current: null }, $f = { key: true, ref: true, __self: true, __source: true };
function Uf(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) zf.call(t, r) && !$f.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: is, type: e, key: s, ref: i, props: o, _owner: du.current };
}
function ay(e, t) {
  return { $$typeof: is, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function uy(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Oc = /\/+/g;
function vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? uy("" + e.key) : t.toString(36);
}
function Qs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = false;
  if (e === null) i = true;
  else switch (s) {
    case "string":
    case "number":
      i = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case is:
        case Xg:
          i = true;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + vl(i, 0) : r, _c(o) ? (n = "", e != null && (n = e.replace(Oc, "$&/") + "/"), Qs(o, t, n, "", function(u) {
    return u;
  })) : o != null && (fu(o) && (o = ay(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Oc, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", _c(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + vl(s, l);
    i += Qs(s, t, n, a, o);
  }
  else if (a = ly(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + vl(s, l++), i += Qs(s, t, n, a, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ws(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Qs(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function cy(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null }, Ks = { transition: null }, dy = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Ks, ReactCurrentOwner: du };
function Bf() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: ws, forEach: function(e, t, n) {
  ws(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ws(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ws(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!fu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = no;
G.Fragment = Zg;
G.Profiler = ey;
G.PureComponent = uu;
G.StrictMode = Jg;
G.Suspense = oy;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
G.act = Bf;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = If({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = du.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) zf.call(t, a) && !$f.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: is, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function(e) {
  return e = { $$typeof: ny, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ty, _context: e }, e.Consumer = e;
};
G.createElement = Uf;
G.createFactory = function(e) {
  var t = Uf.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: ry, render: e };
};
G.isValidElement = fu;
G.lazy = function(e) {
  return { $$typeof: iy, _payload: { _status: -1, _result: e }, _init: cy };
};
G.memo = function(e, t) {
  return { $$typeof: sy, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = Ks.transition;
  Ks.transition = {};
  try {
    e();
  } finally {
    Ks.transition = t;
  }
};
G.unstable_act = Bf;
G.useCallback = function(e, t) {
  return Le.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Le.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Le.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Le.current.useEffect(e, t);
};
G.useId = function() {
  return Le.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Le.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Le.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Le.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Le.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Le.current.useRef(e);
};
G.useState = function(e) {
  return Le.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Le.current.useTransition();
};
G.version = "18.3.1";
Mf.exports = G;
var x = Mf.exports;
const M = Of(x), Vf = qg({ __proto__: null, default: M }, [x]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var fy = x, py = /* @__PURE__ */ Symbol.for("react.element"), hy = /* @__PURE__ */ Symbol.for("react.fragment"), my = Object.prototype.hasOwnProperty, gy = fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yy = { key: true, ref: true, __self: true, __source: true };
function Hf(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) my.call(t, r) && !yy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: py, type: e, key: s, ref: i, props: o, _owner: gy.current };
}
Fi.Fragment = hy;
Fi.jsx = Hf;
Fi.jsxs = Hf;
Af.exports = Fi;
var h = Af.exports, Wf = { exports: {} }, Xe = {}, Qf = { exports: {} }, Kf = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(N, P) {
    var D = N.length;
    N.push(P);
    e: for (; 0 < D; ) {
      var W = D - 1 >>> 1, B = N[W];
      if (0 < o(B, P)) N[W] = P, N[D] = B, D = W;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var P = N[0], D = N.pop();
    if (D !== P) {
      N[0] = D;
      e: for (var W = 0, B = N.length, Y = B >>> 1; W < Y; ) {
        var q = 2 * (W + 1) - 1, he = N[q], Ce = q + 1, J = N[Ce];
        if (0 > o(he, D)) Ce < B && 0 > o(J, he) ? (N[W] = J, N[Ce] = D, W = Ce) : (N[W] = he, N[q] = D, W = q);
        else if (Ce < B && 0 > o(J, D)) N[W] = J, N[Ce] = D, W = Ce;
        else break e;
      }
    }
    return P;
  }
  function o(N, P) {
    var D = N.sortIndex - P.sortIndex;
    return D !== 0 ? D : N.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var i = Date, l = i.now();
    e.unstable_now = function() {
      return i.now() - l;
    };
  }
  var a = [], u = [], f = 1, d = null, g = 3, c = false, b = false, v = false, w = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= N) r(u), P.sortIndex = P.expirationTime, t(a, P);
      else break;
      P = n(u);
    }
  }
  function S(N) {
    if (v = false, y(N), !b) if (n(a) !== null) b = true, I(E);
    else {
      var P = n(u);
      P !== null && z(S, P.startTime - N);
    }
  }
  function E(N, P) {
    b = false, v && (v = false, m(j), j = -1), c = true;
    var D = g;
    try {
      for (y(P), d = n(a); d !== null && (!(d.expirationTime > P) || N && !U()); ) {
        var W = d.callback;
        if (typeof W == "function") {
          d.callback = null, g = d.priorityLevel;
          var B = W(d.expirationTime <= P);
          P = e.unstable_now(), typeof B == "function" ? d.callback = B : d === n(a) && r(a), y(P);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Y = true;
      else {
        var q = n(u);
        q !== null && z(S, q.startTime - P), Y = false;
      }
      return Y;
    } finally {
      d = null, g = D, c = false;
    }
  }
  var C = false, k = null, j = -1, L = 5, A = -1;
  function U() {
    return !(e.unstable_now() - A < L);
  }
  function R() {
    if (k !== null) {
      var N = e.unstable_now();
      A = N;
      var P = true;
      try {
        P = k(true, N);
      } finally {
        P ? $() : (C = false, k = null);
      }
    } else C = false;
  }
  var $;
  if (typeof p == "function") $ = function() {
    p(R);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), Q = O.port2;
    O.port1.onmessage = R, $ = function() {
      Q.postMessage(null);
    };
  } else $ = function() {
    w(R, 0);
  };
  function I(N) {
    k = N, C || (C = true, $());
  }
  function z(N, P) {
    j = w(function() {
      N(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    b || c || (b = true, I(E));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(N) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = g;
    }
    var D = g;
    g = P;
    try {
      return N();
    } finally {
      g = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, P) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var D = g;
    g = N;
    try {
      return P();
    } finally {
      g = D;
    }
  }, e.unstable_scheduleCallback = function(N, P, D) {
    var W = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? W + D : W) : D = W, N) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = D + B, N = { id: f++, callback: P, priorityLevel: N, startTime: D, expirationTime: B, sortIndex: -1 }, D > W ? (N.sortIndex = D, t(u, N), n(a) === null && N === n(u) && (v ? (m(j), j = -1) : v = true, z(S, D - W))) : (N.sortIndex = B, t(a, N), b || c || (b = true, I(E))), N;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(N) {
    var P = g;
    return function() {
      var D = g;
      g = P;
      try {
        return N.apply(this, arguments);
      } finally {
        g = D;
      }
    };
  };
})(Kf);
Qf.exports = Kf;
var vy = Qf.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xy = x, qe = vy;
function _(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Yf = /* @__PURE__ */ new Set(), Io = {};
function lr(e, t) {
  Kr(e, t), Kr(e + "Capture", t);
}
function Kr(e, t) {
  for (Io[e] = t, e = 0; e < t.length; e++) Yf.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = Object.prototype.hasOwnProperty, wy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ac = {}, Mc = {};
function by(e) {
  return Zl.call(Mc, e) ? true : Zl.call(Ac, e) ? false : wy.test(e) ? Mc[e] = true : (Ac[e] = true, false);
}
function Sy(e, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function Ey(e, t, n, r) {
  if (t === null || typeof t > "u" || Sy(e, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function Ie(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new Ie(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new Ie(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new Ie(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new Ie(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new Ie(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new Ie(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new Ie(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new Ie(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new Ie(e, 5, false, e.toLowerCase(), null, false, false);
});
var pu = /[\-:]([a-z])/g;
function hu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(pu, hu);
  Ee[t] = new Ie(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pu, hu);
  Ee[t] = new Ie(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pu, hu);
  Ee[t] = new Ie(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new Ie(e, 1, false, e.toLowerCase(), null, false, false);
});
Ee.xlinkHref = new Ie("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new Ie(e, 1, false, e.toLowerCase(), null, true, true);
});
function mu(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ey(t, n, o, r) && (n = null), r || o === null ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, bs = /* @__PURE__ */ Symbol.for("react.element"), vr = /* @__PURE__ */ Symbol.for("react.portal"), xr = /* @__PURE__ */ Symbol.for("react.fragment"), gu = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), Gf = /* @__PURE__ */ Symbol.for("react.provider"), qf = /* @__PURE__ */ Symbol.for("react.context"), yu = /* @__PURE__ */ Symbol.for("react.forward_ref"), ea = /* @__PURE__ */ Symbol.for("react.suspense"), ta = /* @__PURE__ */ Symbol.for("react.suspense_list"), vu = /* @__PURE__ */ Symbol.for("react.memo"), cn = /* @__PURE__ */ Symbol.for("react.lazy"), Xf = /* @__PURE__ */ Symbol.for("react.offscreen"), Lc = Symbol.iterator;
function fo(e) {
  return e === null || typeof e != "object" ? null : (e = Lc && e[Lc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, xl;
function So(e) {
  if (xl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xl = t && t[1] || "";
  }
  return "\n" + xl + e;
}
var wl = false;
function bl(e, t) {
  if (!e || wl) return "";
  wl = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split("\n"), s = r.stack.split("\n"), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l]; ) l--;
      for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== s[l]) {
        if (i !== 1 || l !== 1) do
          if (i--, l--, 0 > l || o[i] !== s[l]) {
            var a = "\n" + o[i].replace(" at new ", " at ");
            return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
          }
        while (1 <= i && 0 <= l);
        break;
      }
    }
  } finally {
    wl = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? So(e) : "";
}
function Cy(e) {
  switch (e.tag) {
    case 5:
      return So(e.type);
    case 16:
      return So("Lazy");
    case 13:
      return So("Suspense");
    case 19:
      return So("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bl(e.type, false), e;
    case 11:
      return e = bl(e.type.render, false), e;
    case 1:
      return e = bl(e.type, true), e;
    default:
      return "";
  }
}
function na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xr:
      return "Fragment";
    case vr:
      return "Portal";
    case Jl:
      return "Profiler";
    case gu:
      return "StrictMode";
    case ea:
      return "Suspense";
    case ta:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qf:
      return (e.displayName || "Context") + ".Consumer";
    case Gf:
      return (e._context.displayName || "Context") + ".Provider";
    case yu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case vu:
      return t = e.displayName || null, t !== null ? t : na(e.type) || "Memo";
    case cn:
      t = e._payload, e = e._init;
      try {
        return na(e(t));
      } catch (e2) {
      }
  }
  return null;
}
function ky(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return na(t);
    case 8:
      return t === gu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ny(e) {
  var t = Zf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, s.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ss(e) {
  e._valueTracker || (e._valueTracker = Ny(e));
}
function Jf(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = Zf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function li(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch (e2) {
    return e.body;
  }
}
function ra(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Ic(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Rn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ep(e, t) {
  t = t.checked, t != null && mu(e, "checked", t, false);
}
function oa(e, t) {
  ep(e, t);
  var n = Rn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? sa(e, t.type, n) : t.hasOwnProperty("defaultValue") && sa(e, t.type, Rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Dc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function sa(e, t, n) {
  (t !== "number" || li(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function Rr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = true, r && (e[o].defaultSelected = true);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = true);
  }
}
function ia(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Fc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(_(92));
      if (Eo(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function tp(e, t) {
  var n = Rn(t.value), r = Rn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function zc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function np(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function la(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? np(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Es, rp = (function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
})(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Es = Es || document.createElement("div"), Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Es.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Do(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var No = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Ty = ["Webkit", "ms", "Moz", "O"];
Object.keys(No).forEach(function(e) {
  Ty.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), No[t] = No[e];
  });
});
function op(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || No.hasOwnProperty(e) && No[e] ? ("" + t).trim() : t + "px";
}
function sp(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = op(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Py = ce({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function aa(e, t) {
  if (t) {
    if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function ua(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var ca = null;
function xu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var da = null, _r = null, Or = null;
function $c(e) {
  if (e = us(e)) {
    if (typeof da != "function") throw Error(_(280));
    var t = e.stateNode;
    t && (t = Vi(t), da(e.stateNode, e.type, t));
  }
}
function ip(e) {
  _r ? Or ? Or.push(e) : Or = [e] : _r = e;
}
function lp() {
  if (_r) {
    var e = _r, t = Or;
    if (Or = _r = null, $c(e), t) for (e = 0; e < t.length; e++) $c(t[e]);
  }
}
function ap(e, t) {
  return e(t);
}
function up() {
}
var Sl = false;
function cp(e, t, n) {
  if (Sl) return e(t, n);
  Sl = true;
  try {
    return ap(e, t, n);
  } finally {
    Sl = false, (_r !== null || Or !== null) && (up(), lp());
  }
}
function Fo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var fa = false;
if (Qt) try {
  var po = {};
  Object.defineProperty(po, "passive", { get: function() {
    fa = true;
  } }), window.addEventListener("test", po, po), window.removeEventListener("test", po, po);
} catch (e) {
  fa = false;
}
function jy(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var To = false, ai = null, ui = false, pa = null, Ry = { onError: function(e) {
  To = true, ai = e;
} };
function _y(e, t, n, r, o, s, i, l, a) {
  To = false, ai = null, jy.apply(Ry, arguments);
}
function Oy(e, t, n, r, o, s, i, l, a) {
  if (_y.apply(this, arguments), To) {
    if (To) {
      var u = ai;
      To = false, ai = null;
    } else throw Error(_(198));
    ui || (ui = true, pa = u);
  }
}
function ar(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Uc(e) {
  if (ar(e) !== e) throw Error(_(188));
}
function Ay(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ar(e), t === null) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Uc(o), e;
        if (s === r) return Uc(o), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) n = o, r = s;
    else {
      for (var i = false, l = o.child; l; ) {
        if (l === n) {
          i = true, n = o, r = s;
          break;
        }
        if (l === r) {
          i = true, r = o, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            i = true, n = s, r = o;
            break;
          }
          if (l === r) {
            i = true, r = s, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function fp(e) {
  return e = Ay(e), e !== null ? pp(e) : null;
}
function pp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hp = qe.unstable_scheduleCallback, Bc = qe.unstable_cancelCallback, My = qe.unstable_shouldYield, Ly = qe.unstable_requestPaint, pe = qe.unstable_now, Iy = qe.unstable_getCurrentPriorityLevel, wu = qe.unstable_ImmediatePriority, mp = qe.unstable_UserBlockingPriority, ci = qe.unstable_NormalPriority, Dy = qe.unstable_LowPriority, gp = qe.unstable_IdlePriority, zi = null, Ot = null;
function Fy(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function") try {
    Ot.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
  } catch (e2) {
  }
}
var vt = Math.clz32 ? Math.clz32 : Uy, zy = Math.log, $y = Math.LN2;
function Uy(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zy(e) / $y | 0) | 0;
}
var Cs = 64, ks = 4194304;
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? r = Co(l) : (s &= i, s !== 0 && (r = Co(s)));
  } else i = n & ~o, i !== 0 ? r = Co(i) : s !== 0 && (r = Co(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - vt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function By(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - vt(s), l = 1 << i, a = o[i];
    a === -1 ? (!(l & n) || l & r) && (o[i] = By(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function ha(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function yp() {
  var e = Cs;
  return Cs <<= 1, !(Cs & 4194240) && (Cs = 64), e;
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ls(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
}
function Hy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function bu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ee = 0;
function vp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xp, Su, wp, bp, Sp, ma = false, Ns = [], Sn = null, En = null, Cn = null, zo = /* @__PURE__ */ new Map(), $o = /* @__PURE__ */ new Map(), fn = [], Wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      Cn = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $o.delete(t.pointerId);
  }
}
function ho(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = us(t), t !== null && Su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Qy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Sn = ho(Sn, e, t, n, r, o), true;
    case "dragenter":
      return En = ho(En, e, t, n, r, o), true;
    case "mouseover":
      return Cn = ho(Cn, e, t, n, r, o), true;
    case "pointerover":
      var s = o.pointerId;
      return zo.set(s, ho(zo.get(s) || null, e, t, n, r, o)), true;
    case "gotpointercapture":
      return s = o.pointerId, $o.set(s, ho($o.get(s) || null, e, t, n, r, o)), true;
  }
  return false;
}
function Ep(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = ar(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = dp(n), t !== null) {
          e.blockedOn = t, Sp(e.priority, function() {
            wp(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ys(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ca = r, n.target.dispatchEvent(r), ca = null;
    } else return t = us(n), t !== null && Su(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function Hc(e, t, n) {
  Ys(e) && n.delete(t);
}
function Ky() {
  ma = false, Sn !== null && Ys(Sn) && (Sn = null), En !== null && Ys(En) && (En = null), Cn !== null && Ys(Cn) && (Cn = null), zo.forEach(Hc), $o.forEach(Hc);
}
function mo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ma || (ma = true, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Ky)));
}
function Uo(e) {
  function t(o) {
    return mo(o, e);
  }
  if (0 < Ns.length) {
    mo(Ns[0], e);
    for (var n = 1; n < Ns.length; n++) {
      var r = Ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Sn !== null && mo(Sn, e), En !== null && mo(En, e), Cn !== null && mo(Cn, e), zo.forEach(t), $o.forEach(t), n = 0; n < fn.length; n++) r = fn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && (n = fn[0], n.blockedOn === null); ) Ep(n), n.blockedOn === null && fn.shift();
}
var Ar = Zt.ReactCurrentBatchConfig, fi = true;
function Yy(e, t, n, r) {
  var o = ee, s = Ar.transition;
  Ar.transition = null;
  try {
    ee = 1, Eu(e, t, n, r);
  } finally {
    ee = o, Ar.transition = s;
  }
}
function Gy(e, t, n, r) {
  var o = ee, s = Ar.transition;
  Ar.transition = null;
  try {
    ee = 4, Eu(e, t, n, r);
  } finally {
    ee = o, Ar.transition = s;
  }
}
function Eu(e, t, n, r) {
  if (fi) {
    var o = ga(e, t, n, r);
    if (o === null) Al(e, t, r, pi, n), Vc(e, r);
    else if (Qy(o, e, t, n, r)) r.stopPropagation();
    else if (Vc(e, r), t & 4 && -1 < Wy.indexOf(e)) {
      for (; o !== null; ) {
        var s = us(o);
        if (s !== null && xp(s), s = ga(e, t, n, r), s === null && Al(e, t, r, pi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Al(e, t, r, null, n);
  }
}
var pi = null;
function ga(e, t, n, r) {
  if (pi = null, e = xu(r), e = Hn(e), e !== null) if (t = ar(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = dp(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return pi = e, null;
}
function Cp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Iy()) {
        case wu:
          return 1;
        case mp:
          return 4;
        case ci:
        case Dy:
          return 16;
        case gp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xn = null, Cu = null, Gs = null;
function kp() {
  if (Gs) return Gs;
  var e, t = Cu, n = t.length, r, o = "value" in xn ? xn.value : xn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return Gs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function qs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ts() {
  return true;
}
function Wc() {
  return false;
}
function Ze(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? Ts : Wc, this.isPropagationStopped = Wc, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ts);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ts);
  }, persist: function() {
  }, isPersistent: Ts }), t;
}
var ro = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ku = Ze(ro), as = ce({}, ro, { view: 0, detail: 0 }), qy = Ze(as), Cl, kl, go, $i = ce({}, as, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== go && (go && e.type === "mousemove" ? (Cl = e.screenX - go.screenX, kl = e.screenY - go.screenY) : kl = Cl = 0, go = e), Cl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : kl;
} }), Qc = Ze($i), Xy = ce({}, $i, { dataTransfer: 0 }), Zy = Ze(Xy), Jy = ce({}, as, { relatedTarget: 0 }), Nl = Ze(Jy), ev = ce({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = Ze(ev), nv = ce({}, ro, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rv = Ze(nv), ov = ce({}, ro, { data: 0 }), Kc = Ze(ov), sv = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, iv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, lv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function av(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lv[e]) ? !!t[e] : false;
}
function Nu() {
  return av;
}
var uv = ce({}, as, { key: function(e) {
  if (e.key) {
    var t = sv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nu, charCode: function(e) {
  return e.type === "keypress" ? qs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), cv = Ze(uv), dv = ce({}, $i, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Yc = Ze(dv), fv = ce({}, as, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nu }), pv = Ze(fv), hv = ce({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mv = Ze(hv), gv = ce({}, $i, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), yv = Ze(gv), vv = [9, 13, 27, 32], Tu = Qt && "CompositionEvent" in window, Po = null;
Qt && "documentMode" in document && (Po = document.documentMode);
var xv = Qt && "TextEvent" in window && !Po, Np = Qt && (!Tu || Po && 8 < Po && 11 >= Po), Gc = " ", qc = false;
function Tp(e, t) {
  switch (e) {
    case "keyup":
      return vv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Pp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var wr = false;
function wv(e, t) {
  switch (e) {
    case "compositionend":
      return Pp(t);
    case "keypress":
      return t.which !== 32 ? null : (qc = true, Gc);
    case "textInput":
      return e = t.data, e === Gc && qc ? null : e;
    default:
      return null;
  }
}
function bv(e, t) {
  if (wr) return e === "compositionend" || !Tu && Tp(e, t) ? (e = kp(), Gs = Cu = xn = null, wr = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Np && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sv = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sv[e.type] : t === "textarea";
}
function jp(e, t, n, r) {
  ip(r), t = hi(t, "onChange"), 0 < t.length && (n = new ku("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var jo = null, Bo = null;
function Ev(e) {
  $p(e, 0);
}
function Ui(e) {
  var t = Er(e);
  if (Jf(t)) return e;
}
function Cv(e, t) {
  if (e === "change") return t;
}
var Rp = false;
if (Qt) {
  var Tl;
  if (Qt) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var Zc = document.createElement("div");
      Zc.setAttribute("oninput", "return;"), Pl = typeof Zc.oninput == "function";
    }
    Tl = Pl;
  } else Tl = false;
  Rp = Tl && (!document.documentMode || 9 < document.documentMode);
}
function Jc() {
  jo && (jo.detachEvent("onpropertychange", _p), Bo = jo = null);
}
function _p(e) {
  if (e.propertyName === "value" && Ui(Bo)) {
    var t = [];
    jp(t, Bo, e, xu(e)), cp(Ev, t);
  }
}
function kv(e, t, n) {
  e === "focusin" ? (Jc(), jo = t, Bo = n, jo.attachEvent("onpropertychange", _p)) : e === "focusout" && Jc();
}
function Nv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Bo);
}
function Tv(e, t) {
  if (e === "click") return Ui(t);
}
function Pv(e, t) {
  if (e === "input" || e === "change") return Ui(t);
}
function jv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : jv;
function Vo(e, t) {
  if (bt(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Zl.call(t, o) || !bt(e[o], t[o])) return false;
  }
  return true;
}
function ed(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function td(e, t) {
  var n = ed(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ed(n);
  }
}
function Op(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Op(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Ap() {
  for (var e = window, t = li(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch (e2) {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = li(e.document);
  }
  return t;
}
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Rv(e) {
  var t = Ap(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Op(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = td(n, s);
        var i = td(n, r);
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _v = Qt && "documentMode" in document && 11 >= document.documentMode, br = null, ya = null, Ro = null, va = false;
function nd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  va || br == null || br !== li(r) || (r = br, "selectionStart" in r && Pu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ro && Vo(Ro, r) || (Ro = r, r = hi(ya, "onSelect"), 0 < r.length && (t = new ku("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = br)));
}
function Ps(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Sr = { animationend: Ps("Animation", "AnimationEnd"), animationiteration: Ps("Animation", "AnimationIteration"), animationstart: Ps("Animation", "AnimationStart"), transitionend: Ps("Transition", "TransitionEnd") }, jl = {}, Mp = {};
Qt && (Mp = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
function Bi(e) {
  if (jl[e]) return jl[e];
  if (!Sr[e]) return e;
  var t = Sr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mp) return jl[e] = t[n];
  return e;
}
var Lp = Bi("animationend"), Ip = Bi("animationiteration"), Dp = Bi("animationstart"), Fp = Bi("transitionend"), zp = /* @__PURE__ */ new Map(), rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function In(e, t) {
  zp.set(e, t), lr(t, [e]);
}
for (var Rl = 0; Rl < rd.length; Rl++) {
  var _l = rd[Rl], Ov = _l.toLowerCase(), Av = _l[0].toUpperCase() + _l.slice(1);
  In(Ov, "on" + Av);
}
In(Lp, "onAnimationEnd");
In(Ip, "onAnimationIteration");
In(Dp, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(Fp, "onTransitionEnd");
Kr("onMouseEnter", ["mouseout", "mouseover"]);
Kr("onMouseLeave", ["mouseout", "mouseover"]);
Kr("onPointerEnter", ["pointerout", "pointerover"]);
Kr("onPointerLeave", ["pointerout", "pointerover"]);
lr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
lr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));
function od(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Oy(r, t, void 0, e), e.currentTarget = null;
}
function $p(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var l = r[i], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== s && o.isPropagationStopped()) break e;
        od(o, l, u), s = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (l = r[i], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && o.isPropagationStopped()) break e;
        od(o, l, u), s = a;
      }
    }
  }
  if (ui) throw e = pa, ui = false, pa = null, e;
}
function oe(e, t) {
  var n = t[Ea];
  n === void 0 && (n = t[Ea] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Up(t, e, 2, false), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Up(n, e, r, t);
}
var js = "_reactListening" + Math.random().toString(36).slice(2);
function Ho(e) {
  if (!e[js]) {
    e[js] = true, Yf.forEach(function(n) {
      n !== "selectionchange" && (Mv.has(n) || Ol(n, false, e), Ol(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[js] || (t[js] = true, Ol("selectionchange", false, t));
  }
}
function Up(e, t, n, r) {
  switch (Cp(t)) {
    case 1:
      var o = Yy;
      break;
    case 4:
      o = Gy;
      break;
    default:
      o = Eu;
  }
  n = o.bind(null, t, n, e), o = void 0, !fa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
}
function Al(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        i = i.return;
      }
      for (; l !== null; ) {
        if (i = Hn(l), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = s = i;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  cp(function() {
    var u = s, f = xu(n), d = [];
    e: {
      var g = zp.get(e);
      if (g !== void 0) {
        var c = ku, b = e;
        switch (e) {
          case "keypress":
            if (qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            c = cv;
            break;
          case "focusin":
            b = "focus", c = Nl;
            break;
          case "focusout":
            b = "blur", c = Nl;
            break;
          case "beforeblur":
          case "afterblur":
            c = Nl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            c = Qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            c = Zy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            c = pv;
            break;
          case Lp:
          case Ip:
          case Dp:
            c = tv;
            break;
          case Fp:
            c = mv;
            break;
          case "scroll":
            c = qy;
            break;
          case "wheel":
            c = yv;
            break;
          case "copy":
          case "cut":
          case "paste":
            c = rv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            c = Yc;
        }
        var v = (t & 4) !== 0, w = !v && e === "scroll", m = v ? g !== null ? g + "Capture" : null : g;
        v = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var S = y.stateNode;
          if (y.tag === 5 && S !== null && (y = S, m !== null && (S = Fo(p, m), S != null && v.push(Wo(p, S, y)))), w) break;
          p = p.return;
        }
        0 < v.length && (g = new c(g, b, null, n, f), d.push({ event: g, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", g && n !== ca && (b = n.relatedTarget || n.fromElement) && (Hn(b) || b[Kt])) break e;
        if ((c || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window, c ? (b = n.relatedTarget || n.toElement, c = u, b = b ? Hn(b) : null, b !== null && (w = ar(b), b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (c = null, b = u), c !== b)) {
          if (v = Qc, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Yc, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), w = c == null ? g : Er(c), y = b == null ? g : Er(b), g = new v(S, p + "leave", c, n, f), g.target = w, g.relatedTarget = y, S = null, Hn(f) === u && (v = new v(m, p + "enter", b, n, f), v.target = y, v.relatedTarget = w, S = v), w = S, c && b) t: {
            for (v = c, m = b, p = 0, y = v; y; y = gr(y)) p++;
            for (y = 0, S = m; S; S = gr(S)) y++;
            for (; 0 < p - y; ) v = gr(v), p--;
            for (; 0 < y - p; ) m = gr(m), y--;
            for (; p--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = gr(v), m = gr(m);
            }
            v = null;
          }
          else v = null;
          c !== null && sd(d, g, c, v, false), b !== null && w !== null && sd(d, w, b, v, true);
        }
      }
      e: {
        if (g = u ? Er(u) : window, c = g.nodeName && g.nodeName.toLowerCase(), c === "select" || c === "input" && g.type === "file") var E = Cv;
        else if (Xc(g)) if (Rp) E = Pv;
        else {
          E = Nv;
          var C = kv;
        }
        else (c = g.nodeName) && c.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (E = Tv);
        if (E && (E = E(e, u))) {
          jp(d, E, n, f);
          break e;
        }
        C && C(e, g, u), e === "focusout" && (C = g._wrapperState) && C.controlled && g.type === "number" && sa(g, "number", g.value);
      }
      switch (C = u ? Er(u) : window, e) {
        case "focusin":
          (Xc(C) || C.contentEditable === "true") && (br = C, ya = u, Ro = null);
          break;
        case "focusout":
          Ro = ya = br = null;
          break;
        case "mousedown":
          va = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          va = false, nd(d, n, f);
          break;
        case "selectionchange":
          if (_v) break;
        case "keydown":
        case "keyup":
          nd(d, n, f);
      }
      var k;
      if (Tu) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e;
        }
        j = void 0;
      }
      else wr ? Tp(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Np && n.locale !== "ko" && (wr || j !== "onCompositionStart" ? j === "onCompositionEnd" && wr && (k = kp()) : (xn = f, Cu = "value" in xn ? xn.value : xn.textContent, wr = true)), C = hi(u, j), 0 < C.length && (j = new Kc(j, e, null, n, f), d.push({ event: j, listeners: C }), k ? j.data = k : (k = Pp(n), k !== null && (j.data = k)))), (k = xv ? wv(e, n) : bv(e, n)) && (u = hi(u, "onBeforeInput"), 0 < u.length && (f = new Kc("onBeforeInput", "beforeinput", null, n, f), d.push({ event: f, listeners: u }), f.data = k));
    }
    $p(d, t);
  });
}
function Wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Fo(e, n), s != null && r.unshift(Wo(e, s, o)), s = Fo(e, t), s != null && r.push(Wo(e, s, o))), e = e.return;
  }
  return r;
}
function gr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sd(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Fo(n, s), a != null && i.unshift(Wo(n, a, l))) : o || (a = Fo(n, s), a != null && i.push(Wo(n, a, l)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Lv = /\r\n?/g, Iv = /\u0000|\uFFFD/g;
function id(e) {
  return (typeof e == "string" ? e : "" + e).replace(Lv, "\n").replace(Iv, "");
}
function Rs(e, t, n) {
  if (t = id(t), id(e) !== t && n) throw Error(_(425));
}
function mi() {
}
var xa = null, wa = null;
function ba(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, Fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(e) {
  return ld.resolve(null).then(e).catch(zv);
} : Sa;
function zv(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ml(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Uo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Uo(t);
}
function kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ad(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oo = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + oo, Qo = "__reactProps$" + oo, Kt = "__reactContainer$" + oo, Ea = "__reactEvents$" + oo, $v = "__reactListeners$" + oo, Uv = "__reactHandles$" + oo;
function Hn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Kt] || n[Rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ad(e); e !== null; ) {
        if (n = e[Rt]) return n;
        e = ad(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function us(e) {
  return e = e[Rt] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Vi(e) {
  return e[Qo] || null;
}
var Ca = [], Cr = -1;
function Dn(e) {
  return { current: e };
}
function se(e) {
  0 > Cr || (e.current = Ca[Cr], Ca[Cr] = null, Cr--);
}
function ne(e, t) {
  Cr++, Ca[Cr] = e.current, e.current = t;
}
var _n = {}, Re = Dn(_n), $e = Dn(false), tr = _n;
function Yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ue(e) {
  return e = e.childContextTypes, e != null;
}
function gi() {
  se($e), se(Re);
}
function ud(e, t, n) {
  if (Re.current !== _n) throw Error(_(168));
  ne(Re, t), ne($e, n);
}
function Bp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, ky(e) || "Unknown", o));
  return ce({}, n, r);
}
function yi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, tr = Re.current, ne(Re, e), ne($e, $e.current), true;
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n ? (e = Bp(e, t, tr), r.__reactInternalMemoizedMergedChildContext = e, se($e), se(Re), ne(Re, e)) : se($e), ne($e, n);
}
var $t = null, Hi = false, Ll = false;
function Vp(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function Bv(e) {
  Hi = true, Vp(e);
}
function Fn() {
  if (!Ll && $t !== null) {
    Ll = true;
    var e = 0, t = ee;
    try {
      var n = $t;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      $t = null, Hi = false;
    } catch (o) {
      throw $t !== null && ($t = $t.slice(e + 1)), hp(wu, Fn), o;
    } finally {
      ee = t, Ll = false;
    }
  }
  return null;
}
var kr = [], Nr = 0, vi = null, xi = 0, tt = [], nt = 0, nr = null, Bt = 1, Vt = "";
function Bn(e, t) {
  kr[Nr++] = xi, kr[Nr++] = vi, vi = e, xi = t;
}
function Hp(e, t, n) {
  tt[nt++] = Bt, tt[nt++] = Vt, tt[nt++] = nr, nr = e;
  var r = Bt;
  e = Vt;
  var o = 32 - vt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - vt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Bt = 1 << 32 - vt(t) + o | n << o | r, Vt = s + e;
  } else Bt = 1 << s | n << o | r, Vt = e;
}
function ju(e) {
  e.return !== null && (Bn(e, 1), Hp(e, 1, 0));
}
function Ru(e) {
  for (; e === vi; ) vi = kr[--Nr], kr[Nr] = null, xi = kr[--Nr], kr[Nr] = null;
  for (; e === nr; ) nr = tt[--nt], tt[nt] = null, Vt = tt[--nt], tt[nt] = null, Bt = tt[--nt], tt[nt] = null;
}
var Ye = null, Ke = null, le = false, yt = null;
function Wp(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = kn(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nr !== null ? { id: Bt, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ke = null, true) : false;
    default:
      return false;
  }
}
function ka(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Na(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!dd(e, t)) {
        if (ka(e)) throw Error(_(418));
        t = kn(n.nextSibling);
        var r = Ye;
        t && dd(e, t) ? Wp(r, n) : (e.flags = e.flags & -4097 | 2, le = false, Ye = e);
      }
    } else {
      if (ka(e)) throw Error(_(418));
      e.flags = e.flags & -4097 | 2, le = false, Ye = e;
    }
  }
}
function fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function _s(e) {
  if (e !== Ye) return false;
  if (!le) return fd(e), le = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ba(e.type, e.memoizedProps)), t && (t = Ke)) {
    if (ka(e)) throw Qp(), Error(_(418));
    for (; t; ) Wp(e, t), t = kn(t.nextSibling);
  }
  if (fd(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = kn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? kn(e.stateNode.nextSibling) : null;
  return true;
}
function Qp() {
  for (var e = Ke; e; ) e = kn(e.nextSibling);
}
function Gr() {
  Ke = Ye = null, le = false;
}
function _u(e) {
  yt === null ? yt = [e] : yt.push(e);
}
var Vv = Zt.ReactCurrentBatchConfig;
function yo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var l = o.refs;
        i === null ? delete l[s] : l[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Os(e, t) {
  throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function Kp(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [p], m.flags |= 16) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), p = p.sibling;
    return null;
  }
  function r(m, p) {
    for (m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function o(m, p) {
    return m = jn(m, p), m.index = 0, m.sibling = null, m;
  }
  function s(m, p, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < p ? (m.flags |= 2, p) : y) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, y, S) {
    return p === null || p.tag !== 6 ? (p = Bl(y, m.mode, S), p.return = m, p) : (p = o(p, y), p.return = m, p);
  }
  function a(m, p, y, S) {
    var E = y.type;
    return E === xr ? f(m, p, y.props.children, S, y.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && pd(E) === p.type) ? (S = o(p, y.props), S.ref = yo(m, p, y), S.return = m, S) : (S = ri(y.type, y.key, y.props, null, m.mode, S), S.ref = yo(m, p, y), S.return = m, S);
  }
  function u(m, p, y, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = Vl(y, m.mode, S), p.return = m, p) : (p = o(p, y.children || []), p.return = m, p);
  }
  function f(m, p, y, S, E) {
    return p === null || p.tag !== 7 ? (p = er(y, m.mode, S, E), p.return = m, p) : (p = o(p, y), p.return = m, p);
  }
  function d(m, p, y) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Bl("" + p, m.mode, y), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case bs:
          return y = ri(p.type, p.key, p.props, null, m.mode, y), y.ref = yo(m, null, p), y.return = m, y;
        case vr:
          return p = Vl(p, m.mode, y), p.return = m, p;
        case cn:
          var S = p._init;
          return d(m, S(p._payload), y);
      }
      if (Eo(p) || fo(p)) return p = er(p, m.mode, y, null), p.return = m, p;
      Os(m, p);
    }
    return null;
  }
  function g(m, p, y, S) {
    var E = p !== null ? p.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return E !== null ? null : l(m, p, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case bs:
          return y.key === E ? a(m, p, y, S) : null;
        case vr:
          return y.key === E ? u(m, p, y, S) : null;
        case cn:
          return E = y._init, g(m, p, E(y._payload), S);
      }
      if (Eo(y) || fo(y)) return E !== null ? null : f(m, p, y, S, null);
      Os(m, y);
    }
    return null;
  }
  function c(m, p, y, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(y) || null, l(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case bs:
          return m = m.get(S.key === null ? y : S.key) || null, a(p, m, S, E);
        case vr:
          return m = m.get(S.key === null ? y : S.key) || null, u(p, m, S, E);
        case cn:
          var C = S._init;
          return c(m, p, y, C(S._payload), E);
      }
      if (Eo(S) || fo(S)) return m = m.get(y) || null, f(p, m, S, E, null);
      Os(p, S);
    }
    return null;
  }
  function b(m, p, y, S) {
    for (var E = null, C = null, k = p, j = p = 0, L = null; k !== null && j < y.length; j++) {
      k.index > j ? (L = k, k = null) : L = k.sibling;
      var A = g(m, k, y[j], S);
      if (A === null) {
        k === null && (k = L);
        break;
      }
      e && k && A.alternate === null && t(m, k), p = s(A, p, j), C === null ? E = A : C.sibling = A, C = A, k = L;
    }
    if (j === y.length) return n(m, k), le && Bn(m, j), E;
    if (k === null) {
      for (; j < y.length; j++) k = d(m, y[j], S), k !== null && (p = s(k, p, j), C === null ? E = k : C.sibling = k, C = k);
      return le && Bn(m, j), E;
    }
    for (k = r(m, k); j < y.length; j++) L = c(k, m, j, y[j], S), L !== null && (e && L.alternate !== null && k.delete(L.key === null ? j : L.key), p = s(L, p, j), C === null ? E = L : C.sibling = L, C = L);
    return e && k.forEach(function(U) {
      return t(m, U);
    }), le && Bn(m, j), E;
  }
  function v(m, p, y, S) {
    var E = fo(y);
    if (typeof E != "function") throw Error(_(150));
    if (y = E.call(y), y == null) throw Error(_(151));
    for (var C = E = null, k = p, j = p = 0, L = null, A = y.next(); k !== null && !A.done; j++, A = y.next()) {
      k.index > j ? (L = k, k = null) : L = k.sibling;
      var U = g(m, k, A.value, S);
      if (U === null) {
        k === null && (k = L);
        break;
      }
      e && k && U.alternate === null && t(m, k), p = s(U, p, j), C === null ? E = U : C.sibling = U, C = U, k = L;
    }
    if (A.done) return n(m, k), le && Bn(m, j), E;
    if (k === null) {
      for (; !A.done; j++, A = y.next()) A = d(m, A.value, S), A !== null && (p = s(A, p, j), C === null ? E = A : C.sibling = A, C = A);
      return le && Bn(m, j), E;
    }
    for (k = r(m, k); !A.done; j++, A = y.next()) A = c(k, m, j, A.value, S), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? j : A.key), p = s(A, p, j), C === null ? E = A : C.sibling = A, C = A);
    return e && k.forEach(function(R) {
      return t(m, R);
    }), le && Bn(m, j), E;
  }
  function w(m, p, y, S) {
    if (typeof y == "object" && y !== null && y.type === xr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case bs:
          e: {
            for (var E = y.key, C = p; C !== null; ) {
              if (C.key === E) {
                if (E = y.type, E === xr) {
                  if (C.tag === 7) {
                    n(m, C.sibling), p = o(C, y.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && pd(E) === C.type) {
                  n(m, C.sibling), p = o(C, y.props), p.ref = yo(m, C, y), p.return = m, m = p;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            y.type === xr ? (p = er(y.props.children, m.mode, S, y.key), p.return = m, m = p) : (S = ri(y.type, y.key, y.props, null, m.mode, S), S.ref = yo(m, p, y), S.return = m, m = S);
          }
          return i(m);
        case vr:
          e: {
            for (C = y.key; p !== null; ) {
              if (p.key === C) if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                n(m, p.sibling), p = o(p, y.children || []), p.return = m, m = p;
                break e;
              } else {
                n(m, p);
                break;
              }
              else t(m, p);
              p = p.sibling;
            }
            p = Vl(y, m.mode, S), p.return = m, m = p;
          }
          return i(m);
        case cn:
          return C = y._init, w(m, p, C(y._payload), S);
      }
      if (Eo(y)) return b(m, p, y, S);
      if (fo(y)) return v(m, p, y, S);
      Os(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, y), p.return = m, m = p) : (n(m, p), p = Bl(y, m.mode, S), p.return = m, m = p), i(m)) : n(m, p);
  }
  return w;
}
var qr = Kp(true), Yp = Kp(false), wi = Dn(null), bi = null, Tr = null, Ou = null;
function Au() {
  Ou = Tr = bi = null;
}
function Mu(e) {
  var t = wi.current;
  se(wi), e._currentValue = t;
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mr(e, t) {
  bi = e, Ou = Tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = true), e.firstContext = null);
}
function st(e) {
  var t = e._currentValue;
  if (Ou !== e) if (e = { context: e, memoizedValue: t, next: null }, Tr === null) {
    if (bi === null) throw Error(_(308));
    Tr = e, bi.dependencies = { lanes: 0, firstContext: e };
  } else Tr = Tr.next = e;
  return t;
}
var Wn = null;
function Lu(e) {
  Wn === null ? Wn = [e] : Wn.push(e);
}
function Gp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Lu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Yt(e, r);
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dn = false;
function Iu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function qp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Wt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Yt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Lu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Yt(e, n);
}
function Xs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
function hd(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? o = s = i : s = s.next = i, n = n.next;
      } while (n !== null);
      s === null ? o = s = t : s = s.next = t;
    } else o = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Si(e, t, n, r) {
  var o = e.updateQueue;
  dn = false;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, i === null ? s = u : i.next = u, i = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, l = f.lastBaseUpdate, l !== i && (l === null ? f.firstBaseUpdate = u : l.next = u, f.lastBaseUpdate = a));
  }
  if (s !== null) {
    var d = o.baseState;
    i = 0, f = u = a = null, l = s;
    do {
      var g = l.lane, c = l.eventTime;
      if ((r & g) === g) {
        f !== null && (f = f.next = { eventTime: c, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var b = e, v = l;
          switch (g = t, c = n, v.tag) {
            case 1:
              if (b = v.payload, typeof b == "function") {
                d = b.call(c, d, g);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = v.payload, g = typeof b == "function" ? b.call(c, d, g) : b, g == null) break e;
              d = ce({}, d, g);
              break e;
            case 2:
              dn = true;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [l] : g.push(l));
      } else c = { eventTime: c, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, f === null ? (u = f = c, a = d) : f = f.next = c, i |= g;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        g = l, l = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null;
      }
    } while (true);
    if (f === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    or |= i, e.lanes = i, e.memoizedState = d;
  }
}
function md(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
      o.call(r);
    }
  }
}
var cs = {}, At = Dn(cs), Ko = Dn(cs), Yo = Dn(cs);
function Qn(e) {
  if (e === cs) throw Error(_(174));
  return e;
}
function Du(e, t) {
  switch (ne(Yo, t), ne(Ko, e), ne(At, cs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : la(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = la(t, e);
  }
  se(At), ne(At, t);
}
function Xr() {
  se(At), se(Ko), se(Yo);
}
function Xp(e) {
  Qn(Yo.current);
  var t = Qn(At.current), n = la(t, e.type);
  t !== n && (ne(Ko, e), ne(At, n));
}
function Fu(e) {
  Ko.current === e && (se(At), se(Ko));
}
var ae = Dn(0);
function Ei(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Il = [];
function zu() {
  for (var e = 0; e < Il.length; e++) Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Zs = Zt.ReactCurrentDispatcher, Dl = Zt.ReactCurrentBatchConfig, rr = 0, ue = null, ge = null, xe = null, Ci = false, _o = false, Go = 0, Hv = 0;
function Ne() {
  throw Error(_(321));
}
function $u(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return false;
  return true;
}
function Uu(e, t, n, r, o, s) {
  if (rr = s, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zs.current = e === null || e.memoizedState === null ? Yv : Gv, e = n(r, o), _o) {
    s = 0;
    do {
      if (_o = false, Go = 0, 25 <= s) throw Error(_(301));
      s += 1, xe = ge = null, t.updateQueue = null, Zs.current = qv, e = n(r, o);
    } while (_o);
  }
  if (Zs.current = ki, t = ge !== null && ge.next !== null, rr = 0, xe = ge = ue = null, Ci = false, t) throw Error(_(300));
  return e;
}
function Bu() {
  var e = Go !== 0;
  return Go = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe;
}
function it() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null) xe = t, ge = e;
  else {
    if (e === null) throw Error(_(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fl(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ge, o = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var l = i = null, a = null, u = s;
    do {
      var f = u.lane;
      if ((rr & f) === f) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (l = a = d, i = r) : a = a.next = d, ue.lanes |= f, or |= f;
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? i = r : a.next = l, bt(r, t.memoizedState) || (ze = true), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ue.lanes |= s, or |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zl(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    bt(s, t.memoizedState) || (ze = true), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Zp() {
}
function Jp(e, t) {
  var n = ue, r = it(), o = t(), s = !bt(r.memoizedState, o);
  if (s && (r.memoizedState = o, ze = true), r = r.queue, Vu(nh.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xo(9, th.bind(null, n, r, o, t), void 0, null), we === null) throw Error(_(349));
    rr & 30 || eh(n, t, o);
  }
  return o;
}
function eh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function th(e, t, n, r) {
  t.value = n, t.getSnapshot = r, rh(t) && oh(e);
}
function nh(e, t, n) {
  return n(function() {
    rh(t) && oh(e);
  });
}
function rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch (e2) {
    return true;
  }
}
function oh(e) {
  var t = Yt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function gd(e) {
  var t = Nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qo, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kv.bind(null, ue, e), [t.memoizedState, e];
}
function Xo(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function sh() {
  return it().memoizedState;
}
function Js(e, t, n, r) {
  var o = Nt();
  ue.flags |= e, o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r);
}
function Wi(e, t, n, r) {
  var o = it();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (s = i.destroy, r !== null && $u(r, i.deps)) {
      o.memoizedState = Xo(t, n, s, r);
      return;
    }
  }
  ue.flags |= e, o.memoizedState = Xo(1 | t, n, s, r);
}
function yd(e, t) {
  return Js(8390656, 8, e, t);
}
function Vu(e, t) {
  return Wi(2048, 8, e, t);
}
function ih(e, t) {
  return Wi(4, 2, e, t);
}
function lh(e, t) {
  return Wi(4, 4, e, t);
}
function ah(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function uh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wi(4, 4, ah.bind(null, t, e), n);
}
function Hu() {
}
function ch(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function dh(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function fh(e, t, n) {
  return rr & 21 ? (bt(n, t) || (n = yp(), ue.lanes |= n, or |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ze = true), e.memoizedState = n);
}
function Wv(e, t) {
  var n = ee;
  ee = n !== 0 && 4 > n ? n : 4, e(true);
  var r = Dl.transition;
  Dl.transition = {};
  try {
    e(false), t();
  } finally {
    ee = n, Dl.transition = r;
  }
}
function ph() {
  return it().memoizedState;
}
function Qv(e, t, n) {
  var r = Pn(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, hh(e)) mh(t, n);
  else if (n = Gp(e, t, n, r), n !== null) {
    var o = Me();
    xt(n, e, r, o), gh(n, t, r);
  }
}
function Kv(e, t, n) {
  var r = Pn(e), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (hh(e)) mh(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, l = s(i, n);
      if (o.hasEagerState = true, o.eagerState = l, bt(l, i)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Lu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch (e2) {
    } finally {
    }
    n = Gp(e, t, o, r), n !== null && (o = Me(), xt(n, e, r, o), gh(n, t, r));
  }
}
function hh(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function mh(e, t) {
  _o = Ci = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
var ki = { readContext: st, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: false }, Yv = { readContext: st, useCallback: function(e, t) {
  return Nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: st, useEffect: yd, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Js(4194308, 4, ah.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Js(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Js(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qv.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: gd, useDebugValue: Hu, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = gd(false), t = e[0];
  return e = Wv.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, o = Nt();
  if (le) {
    if (n === void 0) throw Error(_(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(_(349));
    rr & 30 || eh(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, yd(nh.bind(null, r, s, e), [e]), r.flags |= 2048, Xo(9, th.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Nt(), t = we.identifierPrefix;
  if (le) {
    var n = Vt, r = Bt;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Go++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Hv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, Gv = { readContext: st, useCallback: ch, useContext: st, useEffect: Vu, useImperativeHandle: uh, useInsertionEffect: ih, useLayoutEffect: lh, useMemo: dh, useReducer: Fl, useRef: sh, useState: function() {
  return Fl(qo);
}, useDebugValue: Hu, useDeferredValue: function(e) {
  var t = it();
  return fh(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = Fl(qo)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Zp, useSyncExternalStore: Jp, useId: ph, unstable_isNewReconciler: false }, qv = { readContext: st, useCallback: ch, useContext: st, useEffect: Vu, useImperativeHandle: uh, useInsertionEffect: ih, useLayoutEffect: lh, useMemo: dh, useReducer: zl, useRef: sh, useState: function() {
  return zl(qo);
}, useDebugValue: Hu, useDeferredValue: function(e) {
  var t = it();
  return ge === null ? t.memoizedState = e : fh(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = zl(qo)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Zp, useSyncExternalStore: Jp, useId: ph, unstable_isNewReconciler: false };
function ft(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qi = { isMounted: function(e) {
  return (e = e._reactInternals) ? ar(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = Pn(e), s = Wt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (xt(t, e, o, r), Xs(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), o = Pn(e), s = Wt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (xt(t, e, o, r), Xs(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = Pn(e), o = Wt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Nn(e, o, r), t !== null && (xt(t, e, r, n), Xs(t, e, r));
} };
function vd(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Vo(n, r) || !Vo(o, s) : true;
}
function yh(e, t, n) {
  var r = false, o = _n, s = t.contextType;
  return typeof s == "object" && s !== null ? s = st(s) : (o = Ue(t) ? tr : Re.current, r = t.contextTypes, s = (r = r != null) ? Yr(e, o) : _n), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function xd(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qi.enqueueReplaceState(t, t.state, null);
}
function ja(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Iu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = st(s) : (s = Ue(t) ? tr : Re.current, o.context = Yr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Pa(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Qi.enqueueReplaceState(o, o.state, null), Si(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Cy(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = "\nError generating stack: " + s.message + "\n" + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function $l(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function Ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Xv = typeof WeakMap == "function" ? WeakMap : Map;
function vh(e, t, n) {
  n = Wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ti || (Ti = true, $a = r), Ra(e, t);
  }, n;
}
function xh(e, t, n) {
  n = Wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ra(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Ra(e, t), typeof r != "function" && (Tn === null ? Tn = /* @__PURE__ */ new Set([this]) : Tn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function wd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = d0.bind(null, e, t, n), t.then(e, e));
}
function bd(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sd(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wt(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e);
}
var Zv = Zt.ReactCurrentOwner, ze = false;
function Oe(e, t, n, r) {
  t.child = e === null ? Yp(t, null, n, r) : qr(t, e.child, n, r);
}
function Ed(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Mr(t, o), r = Uu(e, t, n, r, s, o), n = Bu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Gt(e, t, o)) : (le && n && ju(t), t.flags |= 1, Oe(e, t, r, o), t.child);
}
function Cd(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Zu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, wh(e, t, s, r, o)) : (e = ri(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Vo, n(i, r) && e.ref === t.ref) return Gt(e, t, o);
  }
  return t.flags |= 1, e = jn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function wh(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Vo(s, r) && e.ref === t.ref) if (ze = false, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (ze = true);
    else return t.lanes = e.lanes, Gt(e, t, o);
  }
  return _a(e, t, n, r, o);
}
function bh(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(jr, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(jr, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ne(jr, We), We |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ne(jr, We), We |= r;
  return Oe(e, t, o, n), t.child;
}
function Sh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _a(e, t, n, r, o) {
  var s = Ue(n) ? tr : Re.current;
  return s = Yr(t, s), Mr(t, o), n = Uu(e, t, n, r, s, o), r = Bu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Gt(e, t, o)) : (le && r && ju(t), t.flags |= 1, Oe(e, t, n, o), t.child);
}
function kd(e, t, n, r, o) {
  if (Ue(n)) {
    var s = true;
    yi(t);
  } else s = false;
  if (Mr(t, o), t.stateNode === null) ei(e, t), yh(t, n, r), ja(t, n, r, o), r = true;
  else if (e === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var a = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = st(u) : (u = Ue(n) ? tr : Re.current, u = Yr(t, u));
    var f = n.getDerivedStateFromProps, d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || a !== u) && xd(t, i, r, u), dn = false;
    var g = t.memoizedState;
    i.state = g, Si(t, r, i, o), a = t.memoizedState, l !== r || g !== a || $e.current || dn ? (typeof f == "function" && (Pa(t, n, f, r), a = t.memoizedState), (l = dn || vd(t, n, l, r, g, a, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    i = t.stateNode, qp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ft(t.type, l), i.props = u, d = t.pendingProps, g = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = st(a) : (a = Ue(n) ? tr : Re.current, a = Yr(t, a));
    var c = n.getDerivedStateFromProps;
    (f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== d || g !== a) && xd(t, i, r, a), dn = false, g = t.memoizedState, i.state = g, Si(t, r, i, o);
    var b = t.memoizedState;
    l !== d || g !== b || $e.current || dn ? (typeof c == "function" && (Pa(t, n, c, r), b = t.memoizedState), (u = dn || vd(t, n, u, r, g, b, a) || false) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, b, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, b, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), i.props = r, i.state = b, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return Oa(e, t, n, r, s, o);
}
function Oa(e, t, n, r, o, s) {
  Sh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && cd(t, n, false), Gt(e, t, s);
  r = t.stateNode, Zv.current = t;
  var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = qr(t, e.child, null, s), t.child = qr(t, null, l, s)) : Oe(e, t, l, s), t.memoizedState = r.state, o && cd(t, n, true), t.child;
}
function Eh(e) {
  var t = e.stateNode;
  t.pendingContext ? ud(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ud(e, t.context, false), Du(e, t.containerInfo);
}
function Nd(e, t, n, r, o) {
  return Gr(), _u(o), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Aa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ma(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ch(e, t, n) {
  var r = t.pendingProps, o = ae.current, s = false, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = e !== null && e.memoizedState === null ? false : (o & 2) !== 0), l ? (s = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ne(ae, o & 1), e === null) return Na(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Gi(i, r, 0, null), e = er(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ma(n), t.memoizedState = Aa, e) : Wu(t, i));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Jv(e, t, i, r, l, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = jn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? s = jn(l, s) : (s = er(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Ma(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Aa, r;
  }
  return s = e.child, e = s.sibling, r = jn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wu(e, t) {
  return t = Gi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function As(e, t, n, r) {
  return r !== null && _u(r), qr(t, e.child, null, n), e = Wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jv(e, t, n, r, o, s, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = $l(Error(_(422))), As(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Gi({ mode: "visible", children: r.children }, o, 0, null), s = er(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && qr(t, e.child, null, i), t.child.memoizedState = Ma(i), t.memoizedState = Aa, s);
  if (!(t.mode & 1)) return As(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(_(419)), r = $l(s, r, void 0), As(e, t, i, r);
  }
  if (l = (i & e.childLanes) !== 0, ze || l) {
    if (r = we, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Yt(e, o), xt(r, e, o, -1));
    }
    return Xu(), r = $l(Error(_(421))), As(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = f0.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Ke = kn(o.nextSibling), Ye = t, le = true, yt = null, e !== null && (tt[nt++] = Bt, tt[nt++] = Vt, tt[nt++] = nr, Bt = e.id, Vt = e.overflow, nr = t), t = Wu(t, r.children), t.flags |= 4096, t);
}
function Td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Ul(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function kh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Oe(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
      else if (e.tag === 19) Td(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ne(ae, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ei(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ul(t, false, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ei(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ul(t, true, n, null, s);
      break;
    case "together":
      Ul(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ei(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), or |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function e0(e, t, n) {
  switch (t.tag) {
    case 3:
      Eh(t), Gr();
      break;
    case 5:
      Xp(t);
      break;
    case 1:
      Ue(t.type) && yi(t);
      break;
    case 4:
      Du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ne(wi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ne(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ch(e, t, n) : (ne(ae, ae.current & 1), e = Gt(e, t, n), e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return kh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(ae, ae.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bh(e, t, n);
  }
  return Gt(e, t, n);
}
var Nh, La, Th, Ph;
Nh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
La = function() {
};
Th = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Qn(At.current);
    var s = null;
    switch (n) {
      case "input":
        o = ra(e, o), r = ra(e, r), s = [];
        break;
      case "select":
        o = ce({}, o, { value: void 0 }), r = ce({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = ia(e, o), r = ia(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mi);
    }
    aa(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Io.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (i in l) !l.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && l[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (s || (s = []), s.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Io.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ph = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vo(e, t) {
  if (!le) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function t0(e, t, n) {
  var r = t.pendingProps;
  switch (Ru(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return Ue(t.type) && gi(), Te(t), null;
    case 3:
      return r = t.stateNode, Xr(), se($e), se(Re), zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (Va(yt), yt = null))), La(e, t), Te(t), null;
    case 5:
      Fu(t);
      var o = Qn(Yo.current);
      if (n = t.type, e !== null && t.stateNode != null) Th(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Te(t), null;
        }
        if (e = Qn(At.current), _s(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Rt] = t, r[Qo] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ko.length; o++) oe(ko[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Ic(r, s), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, oe("invalid", r);
              break;
            case "textarea":
              Fc(r, s), oe("invalid", r);
          }
          aa(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var l = s[i];
            i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== true && Rs(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== true && Rs(r.textContent, l, e), o = ["children", "" + l]) : Io.hasOwnProperty(i) && l != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Ss(r), Dc(r, s, true);
              break;
            case "textarea":
              Ss(r), zc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = mi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = np(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Rt] = t, e[Qo] = r, Nh(e, t, false, false), t.stateNode = e;
          e: {
            switch (i = ua(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ko.length; o++) oe(ko[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), o = r;
                break;
              case "details":
                oe("toggle", e), o = r;
                break;
              case "input":
                Ic(e, r), o = ra(e, r), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ce({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                Fc(e, r), o = ia(e, r), oe("invalid", e);
                break;
              default:
                o = r;
            }
            aa(n, o), l = o;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? sp(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && rp(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Do(e, a) : typeof a == "number" && Do(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Io.hasOwnProperty(s) ? a != null && s === "onScroll" && oe("scroll", e) : a != null && mu(e, s, a, i));
            }
            switch (n) {
              case "input":
                Ss(e), Dc(e, r, false);
                break;
              case "textarea":
                Ss(e), zc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Rr(e, !!r.multiple, s, false) : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) Ph(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (n = Qn(Yo.current), Qn(At.current), _s(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Rt] = t, (s = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
            case 3:
              Rs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && Rs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rt] = t, t.stateNode = r;
      }
      return Te(t), null;
    case 13:
      if (se(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128)) Qp(), Gr(), t.flags |= 98560, s = false;
        else if (s = _s(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(_(317));
            s[Rt] = t;
          } else Gr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Te(t), s = false;
        } else yt !== null && (Va(yt), yt = null), s = true;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : Xu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
    case 4:
      return Xr(), La(e, t), e === null && Ho(t.stateNode.containerInfo), Te(t), null;
    case 10:
      return Mu(t.type._context), Te(t), null;
    case 17:
      return Ue(t.type) && gi(), Te(t), null;
    case 19:
      if (se(ae), s = t.memoizedState, s === null) return Te(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) vo(s, false);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ei(e), i !== null) {
            for (t.flags |= 128, vo(s, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ae, ae.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && pe() > Jr && (t.flags |= 128, r = true, vo(s, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ei(i), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vo(s, true), s.tail === null && s.tailMode === "hidden" && !i.alternate && !le) return Te(t), null;
        } else 2 * pe() - s.renderingStartTime > Jr && n !== 1073741824 && (t.flags |= 128, r = true, vo(s, false), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = pe(), t.sibling = null, n = ae.current, ne(ae, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
    case 22:
    case 23:
      return qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function n0(e, t) {
  switch (Ru(t), t.tag) {
    case 1:
      return Ue(t.type) && gi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xr(), se($e), se(Re), zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fu(t), null;
    case 13:
      if (se(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(_(340));
        Gr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(ae), null;
    case 4:
      return Xr(), null;
    case 10:
      return Mu(t.type._context), null;
    case 22:
    case 23:
      return qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ms = false, je = false, r0 = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    fe(e, t, r);
  }
  else n.current = null;
}
function Ia(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Pd = false;
function o0(e, t) {
  if (xa = fi, e = Ap(), Pu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch (e2) {
          n = null;
          break e;
        }
        var i = 0, l = -1, a = -1, u = 0, f = 0, d = e, g = null;
        t: for (; ; ) {
          for (var c; d !== n || o !== 0 && d.nodeType !== 3 || (l = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (a = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (c = d.firstChild) !== null; ) g = d, d = c;
          for (; ; ) {
            if (d === e) break t;
            if (g === n && ++u === o && (l = i), g === s && ++f === r && (a = i), (c = d.nextSibling) !== null) break;
            d = g, g = d.parentNode;
          }
          d = c;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wa = { focusedElem: e, selectionRange: n }, fi = false, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var b = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (b !== null) {
            var v = b.memoizedProps, w = b.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ft(t.type, v), w);
            m.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(_(163));
      }
    } catch (S) {
      fe(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return b = Pd, Pd = false, b;
}
function Oo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Ia(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ki(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Da(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function jh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rt], delete t[Qo], delete t[Ea], delete t[$v], delete t[Uv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jd(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fa(e, t, n), e = e.sibling; e !== null; ) Fa(e, t, n), e = e.sibling;
}
function za(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (za(e, t, n), e = e.sibling; e !== null; ) za(e, t, n), e = e.sibling;
}
var be = null, gt = false;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) _h(e, t, n), n = n.sibling;
}
function _h(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function") try {
    Ot.onCommitFiberUnmount(zi, n);
  } catch (e2) {
  }
  switch (n.tag) {
    case 5:
      je || Pr(n, t);
    case 6:
      var r = be, o = gt;
      be = null, sn(e, t, n), be = r, gt = o, be !== null && (gt ? (e = be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null && (gt ? (e = be, n = n.stateNode, e.nodeType === 8 ? Ml(e.parentNode, n) : e.nodeType === 1 && Ml(e, n), Uo(e)) : Ml(be, n.stateNode));
      break;
    case 4:
      r = be, o = gt, be = n.stateNode.containerInfo, gt = true, sn(e, t, n), be = r, gt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Ia(n, t, i), o = o.next;
        } while (o !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (!je && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        fe(n, t, l);
      }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, sn(e, t, n), je = r) : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function Rd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new r0()), t.forEach(function(r) {
      var o = p0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, l = i;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            be = l.stateNode, gt = false;
            break e;
          case 3:
            be = l.stateNode.containerInfo, gt = true;
            break e;
          case 4:
            be = l.stateNode.containerInfo, gt = true;
            break e;
        }
        l = l.return;
      }
      if (be === null) throw Error(_(160));
      _h(s, i, o), be = null, gt = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      fe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oh(t, e), t = t.sibling;
}
function Oh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ct(t, e), kt(e), r & 4) {
        try {
          Oo(3, e, e.return), Ki(3, e);
        } catch (v) {
          fe(e, e.return, v);
        }
        try {
          Oo(5, e, e.return);
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      break;
    case 1:
      ct(t, e), kt(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (ct(t, e), kt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Do(o, "");
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && ep(o, s), ua(l, i);
          var u = ua(l, s);
          for (i = 0; i < a.length; i += 2) {
            var f = a[i], d = a[i + 1];
            f === "style" ? sp(o, d) : f === "dangerouslySetInnerHTML" ? rp(o, d) : f === "children" ? Do(o, d) : mu(o, f, d, u);
          }
          switch (l) {
            case "input":
              oa(o, s);
              break;
            case "textarea":
              tp(o, s);
              break;
            case "select":
              var g = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var c = s.value;
              c != null ? Rr(o, !!s.multiple, c, false) : g !== !!s.multiple && (s.defaultValue != null ? Rr(o, !!s.multiple, s.defaultValue, true) : Rr(o, !!s.multiple, s.multiple ? [] : "", false));
          }
          o[Qo] = s;
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      break;
    case 6:
      if (ct(t, e), kt(e), r & 4) {
        if (e.stateNode === null) throw Error(_(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (ct(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Uo(t.containerInfo);
      } catch (v) {
        fe(e, e.return, v);
      }
      break;
    case 4:
      ct(t, e), kt(e);
      break;
    case 13:
      ct(t, e), kt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Yu = pe())), r & 4 && Rd(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || f, ct(t, e), je = u) : ct(t, e), kt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1) for (F = e, f = e.child; f !== null; ) {
          for (d = F = f; F !== null; ) {
            switch (g = F, c = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Oo(4, g, g.return);
                break;
              case 1:
                Pr(g, g.return);
                var b = g.stateNode;
                if (typeof b.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                  } catch (v) {
                    fe(r, n, v);
                  }
                }
                break;
              case 5:
                Pr(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Od(d);
                  continue;
                }
            }
            c !== null ? (c.return = g, F = c) : Od(d);
          }
          f = f.sibling;
        }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = op("display", i));
              } catch (v) {
                fe(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (f === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (v) {
              fe(e, e.return, v);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), d = d.return;
          }
          f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      ct(t, e), kt(e), r & 4 && Rd(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Do(o, ""), r.flags &= -33);
          var s = jd(e);
          za(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, l = jd(e);
          Fa(e, l, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function s0(e, t, n) {
  F = e, Ah(e);
}
function Ah(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ms;
      if (!i) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || je;
        l = Ms;
        var u = je;
        if (Ms = i, (je = a) && !u) for (F = o; F !== null; ) i = F, a = i.child, i.tag === 22 && i.memoizedState !== null ? Ad(o) : a !== null ? (a.return = i, F = a) : Ad(o);
        for (; s !== null; ) F = s, Ah(s), s = s.sibling;
        F = o, Ms = l, je = u;
      }
      _d(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, F = s) : _d(e);
  }
}
function _d(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            je || Ki(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && md(t, s, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              md(t, i, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var f = u.memoizedState;
                if (f !== null) {
                  var d = f.dehydrated;
                  d !== null && Uo(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(_(163));
        }
        je || t.flags & 512 && Da(t);
      } catch (g) {
        fe(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function Od(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function Ad(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ki(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var s = t.return;
          try {
            Da(t);
          } catch (a) {
            fe(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Da(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, F = l;
      break;
    }
    F = t.return;
  }
}
var i0 = Math.ceil, Ni = Zt.ReactCurrentDispatcher, Qu = Zt.ReactCurrentOwner, ot = Zt.ReactCurrentBatchConfig, X = 0, we = null, me = null, Se = 0, We = 0, jr = Dn(0), ve = 0, Zo = null, or = 0, Yi = 0, Ku = 0, Ao = null, Fe = null, Yu = 0, Jr = 1 / 0, zt = null, Ti = false, $a = null, Tn = null, Ls = false, wn = null, Pi = 0, Mo = 0, Ua = null, ti = -1, ni = 0;
function Me() {
  return X & 6 ? pe() : ti !== -1 ? ti : ti = pe();
}
function Pn(e) {
  return e.mode & 1 ? X & 2 && Se !== 0 ? Se & -Se : Vv.transition !== null ? (ni === 0 && (ni = yp()), ni) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cp(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < Mo) throw Mo = 0, Ua = null, Error(_(185));
  ls(e, n, r), (!(X & 2) || e !== we) && (e === we && (!(X & 2) && (Yi |= n), ve === 4 && pn(e, Se)), Be(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Jr = pe() + 500, Hi && Fn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Vy(e, t);
  var r = di(e, e === we ? Se : 0);
  if (r === 0) n !== null && Bc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bc(n), t === 1) e.tag === 0 ? Bv(Md.bind(null, e)) : Vp(Md.bind(null, e)), Fv(function() {
      !(X & 6) && Fn();
    }), n = null;
    else {
      switch (vp(r)) {
        case 1:
          n = wu;
          break;
        case 4:
          n = mp;
          break;
        case 16:
          n = ci;
          break;
        case 536870912:
          n = gp;
          break;
        default:
          n = ci;
      }
      n = Uh(n, Mh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mh(e, t) {
  if (ti = -1, ni = 0, X & 6) throw Error(_(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = di(e, e === we ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ji(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = Ih();
    (we !== e || Se !== t) && (zt = null, Jr = pe() + 500, Jn(e, t));
    do
      try {
        u0();
        break;
      } catch (l) {
        Lh(e, l);
      }
    while (true);
    Au(), Ni.current = s, X = o, me !== null ? t = 0 : (we = null, Se = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = ha(e), o !== 0 && (r = o, t = Ba(e, o))), t === 1) throw n = Zo, Jn(e, 0), pn(e, r), Be(e, pe()), n;
    if (t === 6) pn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !l0(o) && (t = ji(e, r), t === 2 && (s = ha(e), s !== 0 && (r = s, t = Ba(e, s))), t === 1)) throw n = Zo, Jn(e, 0), pn(e, r), Be(e, pe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Vn(e, Fe, zt);
          break;
        case 3:
          if (pn(e, r), (r & 130023424) === r && (t = Yu + 500 - pe(), 10 < t)) {
            if (di(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Sa(Vn.bind(null, e, Fe, zt), t);
            break;
          }
          Vn(e, Fe, zt);
          break;
        case 4:
          if (pn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - vt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * i0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Sa(Vn.bind(null, e, Fe, zt), r);
            break;
          }
          Vn(e, Fe, zt);
          break;
        case 5:
          Vn(e, Fe, zt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Be(e, pe()), e.callbackNode === n ? Mh.bind(null, e) : null;
}
function Ba(e, t) {
  var n = Ao;
  return e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256), e = ji(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Va(t)), e;
}
function Va(e) {
  Fe === null ? Fe = e : Fe.push.apply(Fe, e);
}
function l0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!bt(s(), o)) return false;
        } catch (e2) {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function pn(e, t) {
  for (t &= ~Ku, t &= ~Yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Md(e) {
  if (X & 6) throw Error(_(327));
  Lr();
  var t = di(e, 0);
  if (!(t & 1)) return Be(e, pe()), null;
  var n = ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ha(e);
    r !== 0 && (t = r, n = Ba(e, r));
  }
  if (n === 1) throw n = Zo, Jn(e, 0), pn(e, t), Be(e, pe()), n;
  if (n === 6) throw Error(_(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, Fe, zt), Be(e, pe()), null;
}
function Gu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Jr = pe() + 500, Hi && Fn());
  }
}
function sr(e) {
  wn !== null && wn.tag === 0 && !(X & 6) && Lr();
  var t = X;
  X |= 1;
  var n = ot.transition, r = ee;
  try {
    if (ot.transition = null, ee = 1, e) return e();
  } finally {
    ee = r, ot.transition = n, X = t, !(X & 6) && Fn();
  }
}
function qu() {
  We = jr.current, se(jr);
}
function Jn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Dv(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Ru(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && gi();
        break;
      case 3:
        Xr(), se($e), se(Re), zu();
        break;
      case 5:
        Fu(r);
        break;
      case 4:
        Xr();
        break;
      case 13:
        se(ae);
        break;
      case 19:
        se(ae);
        break;
      case 10:
        Mu(r.type._context);
        break;
      case 22:
      case 23:
        qu();
    }
    n = n.return;
  }
  if (we = e, me = e = jn(e.current, null), Se = We = t, ve = 0, Zo = null, Ku = Yi = or = 0, Fe = Ao = null, Wn !== null) {
    for (t = 0; t < Wn.length; t++) if (n = Wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Wn = null;
  }
  return e;
}
function Lh(e, t) {
  do {
    var n = me;
    try {
      if (Au(), Zs.current = ki, Ci) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ci = false;
      }
      if (rr = 0, xe = ge = ue = null, _o = false, Go = 0, Qu.current = null, n === null || n.return === null) {
        ve = 1, Zo = t, me = null;
        break;
      }
      e: {
        var s = e, i = n.return, l = n, a = t;
        if (t = Se, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, f = l, d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var g = f.alternate;
            g ? (f.updateQueue = g.updateQueue, f.memoizedState = g.memoizedState, f.lanes = g.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var c = bd(i);
          if (c !== null) {
            c.flags &= -257, Sd(c, i, l, s, t), c.mode & 1 && wd(s, u, t), t = c, a = u;
            var b = t.updateQueue;
            if (b === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else b.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              wd(s, u, t), Xu();
              break e;
            }
            a = Error(_(426));
          }
        } else if (le && l.mode & 1) {
          var w = bd(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Sd(w, i, l, s, t), _u(Zr(a, l));
            break e;
          }
        }
        s = a = Zr(a, l), ve !== 4 && (ve = 2), Ao === null ? Ao = [s] : Ao.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = vh(s, a, t);
              hd(s, m);
              break e;
            case 1:
              l = a;
              var p = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Tn === null || !Tn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var S = xh(s, l, t);
                hd(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Fh(n);
    } catch (E) {
      t = E, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Ih() {
  var e = Ni.current;
  return Ni.current = ki, e === null ? ki : e;
}
function Xu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), we === null || !(or & 268435455) && !(Yi & 268435455) || pn(we, Se);
}
function ji(e, t) {
  var n = X;
  X |= 2;
  var r = Ih();
  (we !== e || Se !== t) && (zt = null, Jn(e, t));
  do
    try {
      a0();
      break;
    } catch (o) {
      Lh(e, o);
    }
  while (true);
  if (Au(), X = n, Ni.current = r, me !== null) throw Error(_(261));
  return we = null, Se = 0, ve;
}
function a0() {
  for (; me !== null; ) Dh(me);
}
function u0() {
  for (; me !== null && !My(); ) Dh(me);
}
function Dh(e) {
  var t = $h(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Fh(e) : me = t, Qu.current = null;
}
function Fh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = n0(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, me = null;
        return;
      }
    } else if (n = t0(n, t, We), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function Vn(e, t, n) {
  var r = ee, o = ot.transition;
  try {
    ot.transition = null, ee = 1, c0(e, t, n, r);
  } finally {
    ot.transition = o, ee = r;
  }
  return null;
}
function c0(e, t, n, r) {
  do
    Lr();
  while (wn !== null);
  if (X & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Hy(e, s), e === we && (me = we = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ls || (Ls = true, Uh(ci, function() {
    return Lr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ot.transition, ot.transition = null;
    var i = ee;
    ee = 1;
    var l = X;
    X |= 4, Qu.current = null, o0(e, n), Oh(n, e), Rv(wa), fi = !!xa, wa = xa = null, e.current = n, s0(n), Ly(), X = l, ee = i, ot.transition = s;
  } else e.current = n;
  if (Ls && (Ls = false, wn = e, Pi = o), s = e.pendingLanes, s === 0 && (Tn = null), Fy(n.stateNode), Be(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ti) throw Ti = false, e = $a, $a = null, e;
  return Pi & 1 && e.tag !== 0 && Lr(), s = e.pendingLanes, s & 1 ? e === Ua ? Mo++ : (Mo = 0, Ua = e) : Mo = 0, Fn(), null;
}
function Lr() {
  if (wn !== null) {
    var e = vp(Pi), t = ot.transition, n = ee;
    try {
      if (ot.transition = null, ee = 16 > e ? 16 : e, wn === null) var r = false;
      else {
        if (e = wn, wn = null, Pi = 0, X & 6) throw Error(_(331));
        var o = X;
        for (X |= 4, F = e.current; F !== null; ) {
          var s = F, i = s.child;
          if (F.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (F = u; F !== null; ) {
                  var f = F;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(8, f, s);
                  }
                  var d = f.child;
                  if (d !== null) d.return = f, F = d;
                  else for (; F !== null; ) {
                    f = F;
                    var g = f.sibling, c = f.return;
                    if (jh(f), f === u) {
                      F = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = c, F = g;
                      break;
                    }
                    F = c;
                  }
                }
              }
              var b = s.alternate;
              if (b !== null) {
                var v = b.child;
                if (v !== null) {
                  b.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, F = i;
          else e: for (; F !== null; ) {
            if (s = F, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Oo(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, F = m;
              break e;
            }
            F = s.return;
          }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          i = F;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) y.return = i, F = y;
          else e: for (i = p; F !== null; ) {
            if (l = F, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ki(9, l);
              }
            } catch (E) {
              fe(l, l.return, E);
            }
            if (l === i) {
              F = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, F = S;
              break e;
            }
            F = l.return;
          }
        }
        if (X = o, Fn(), Ot && typeof Ot.onPostCommitFiberRoot == "function") try {
          Ot.onPostCommitFiberRoot(zi, e);
        } catch (e2) {
        }
        r = true;
      }
      return r;
    } finally {
      ee = n, ot.transition = t;
    }
  }
  return false;
}
function Ld(e, t, n) {
  t = Zr(n, t), t = vh(e, t, 1), e = Nn(e, t, 1), t = Me(), e !== null && (ls(e, 1, t), Be(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Ld(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ld(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Tn === null || !Tn.has(r))) {
        e = Zr(n, e), e = xh(t, e, 1), t = Nn(t, e, 1), e = Me(), t !== null && (ls(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function d0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Se & n) === n && (ve === 4 || ve === 3 && (Se & 130023424) === Se && 500 > pe() - Yu ? Jn(e, 0) : Ku |= n), Be(e, t);
}
function zh(e, t) {
  t === 0 && (e.mode & 1 ? (t = ks, ks <<= 1, !(ks & 130023424) && (ks = 4194304)) : t = 1);
  var n = Me();
  e = Yt(e, t), e !== null && (ls(e, t, n), Be(e, n));
}
function f0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zh(e, n);
}
function p0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), zh(e, n);
}
var $h;
$h = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) ze = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ze = false, e0(e, t, n);
    ze = !!(e.flags & 131072);
  }
  else ze = false, le && t.flags & 1048576 && Hp(t, xi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ei(e, t), e = t.pendingProps;
      var o = Yr(t, Re.current);
      Mr(t, n), o = Uu(null, t, r, e, o, n);
      var s = Bu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (s = true, yi(t)) : s = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Iu(t), o.updater = Qi, t.stateNode = o, o._reactInternals = t, ja(t, r, e, n), t = Oa(null, t, r, true, s, n)) : (t.tag = 0, le && s && ju(t), Oe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ei(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = m0(r), e = ft(r, e), o) {
          case 0:
            t = _a(null, t, r, e, n);
            break e;
          case 1:
            t = kd(null, t, r, e, n);
            break e;
          case 11:
            t = Ed(null, t, r, e, n);
            break e;
          case 14:
            t = Cd(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), _a(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), kd(e, t, r, o, n);
    case 3:
      e: {
        if (Eh(t), e === null) throw Error(_(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, qp(e, t), Si(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: false, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Zr(Error(_(423)), t), t = Nd(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Zr(Error(_(424)), t), t = Nd(e, t, r, n, o);
          break e;
        } else for (Ke = kn(t.stateNode.containerInfo.firstChild), Ye = t, le = true, yt = null, n = Yp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gr(), r === o) {
            t = Gt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Xp(t), e === null && Na(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, ba(r, o) ? i = null : s !== null && ba(r, s) && (t.flags |= 32), Sh(e, t), Oe(e, t, i, n), t.child;
    case 6:
      return e === null && Na(t), null;
    case 13:
      return Ch(e, t, n);
    case 4:
      return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qr(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), Ed(e, t, r, o, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ne(wi, r._currentValue), r._currentValue = i, s !== null) if (bt(s.value, i)) {
          if (s.children === o.children && !$e.current) {
            t = Gt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            i = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = Wt(-1, n & -n), a.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var f = u.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ta(s.return, n, t), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (i = s.return, i === null) throw Error(_(341));
            i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Ta(i, n, t), i = s.sibling;
          } else i = s.child;
          if (i !== null) i.return = s;
          else for (i = s; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (s = i.sibling, s !== null) {
              s.return = i.return, i = s;
              break;
            }
            i = i.return;
          }
          s = i;
        }
        Oe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Mr(t, n), o = st(o), r = r(o), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ft(r, t.pendingProps), o = ft(r.type, o), Cd(e, t, r, o, n);
    case 15:
      return wh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ft(r, o), ei(e, t), t.tag = 1, Ue(r) ? (e = true, yi(t)) : e = false, Mr(t, n), yh(t, r, o), ja(t, r, o, n), Oa(null, t, r, true, e, n);
    case 19:
      return kh(e, t, n);
    case 22:
      return bh(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Uh(e, t) {
  return hp(e, t);
}
function h0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new h0(e, t, n, r);
}
function Zu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function m0(e) {
  if (typeof e == "function") return Zu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yu) return 11;
    if (e === vu) return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ri(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") Zu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case xr:
      return er(n.children, o, s, t);
    case gu:
      i = 8, o |= 8;
      break;
    case Jl:
      return e = rt(12, n, t, o | 2), e.elementType = Jl, e.lanes = s, e;
    case ea:
      return e = rt(13, n, t, o), e.elementType = ea, e.lanes = s, e;
    case ta:
      return e = rt(19, n, t, o), e.elementType = ta, e.lanes = s, e;
    case Xf:
      return Gi(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Gf:
          i = 10;
          break e;
        case qf:
          i = 9;
          break e;
        case yu:
          i = 11;
          break e;
        case vu:
          i = 14;
          break e;
        case cn:
          i = 16, r = null;
          break e;
      }
      throw Error(_(130, e == null ? e : typeof e, ""));
  }
  return t = rt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function er(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function Gi(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = Xf, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function Bl(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function Vl(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function g0(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = El(0), this.expirationTimes = El(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = El(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ju(e, t, n, r, o, s, i, l, a) {
  return e = new g0(e, t, n, l, a), t === 1 ? (t = 1, s === true && (t |= 8)) : t = 0, s = rt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(s), e;
}
function y0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Bh(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Bp(e, n, t);
  }
  return t;
}
function Vh(e, t, n, r, o, s, i, l, a) {
  return e = Ju(n, r, true, e, o, s, i, l, a), e.context = Bh(null), n = e.current, r = Me(), o = Pn(n), s = Wt(r, o), s.callback = t != null ? t : null, Nn(n, s, o), e.current.lanes = o, ls(e, o, r), Be(e, r), e;
}
function qi(e, t, n, r) {
  var o = t.current, s = Me(), i = Pn(o);
  return n = Bh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Wt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nn(o, t, i), e !== null && (xt(e, o, i, s), Xs(e, o, i)), i;
}
function Ri(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Id(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ec(e, t) {
  Id(e, t), (e = e.alternate) && Id(e, t);
}
function v0() {
  return null;
}
var Hh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function tc(e) {
  this._internalRoot = e;
}
Xi.prototype.render = tc.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  qi(e, t, null, null);
};
Xi.prototype.unmount = tc.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sr(function() {
      qi(null, e, null, null);
    }), t[Kt] = null;
  }
};
function Xi(e) {
  this._internalRoot = e;
}
Xi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++) ;
    fn.splice(n, 0, e), n === 0 && Ep(e);
  }
};
function nc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dd() {
}
function x0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = Ri(i);
        s.call(u);
      };
    }
    var i = Vh(t, r, e, 0, null, false, false, "", Dd);
    return e._reactRootContainer = i, e[Kt] = i.current, Ho(e.nodeType === 8 ? e.parentNode : e), sr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Ri(a);
      l.call(u);
    };
  }
  var a = Ju(e, 0, false, null, null, false, false, "", Dd);
  return e._reactRootContainer = a, e[Kt] = a.current, Ho(e.nodeType === 8 ? e.parentNode : e), sr(function() {
    qi(t, a, n, r);
  }), a;
}
function Ji(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ri(i);
        l.call(a);
      };
    }
    qi(t, i, e, o);
  } else i = x0(n, t, e, o, r);
  return Ri(i);
}
xp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes);
        n !== 0 && (bu(t, n | 1), Be(t, pe()), !(X & 6) && (Jr = pe() + 500, Fn()));
      }
      break;
    case 13:
      sr(function() {
        var r = Yt(e, 1);
        if (r !== null) {
          var o = Me();
          xt(r, e, 1, o);
        }
      }), ec(e, 1);
  }
};
Su = function(e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Me();
      xt(t, e, 134217728, n);
    }
    ec(e, 134217728);
  }
};
wp = function(e) {
  if (e.tag === 13) {
    var t = Pn(e), n = Yt(e, t);
    if (n !== null) {
      var r = Me();
      xt(n, e, t, r);
    }
    ec(e, t);
  }
};
bp = function() {
  return ee;
};
Sp = function(e, t) {
  var n = ee;
  try {
    return ee = e, t();
  } finally {
    ee = n;
  }
};
da = function(e, t, n) {
  switch (t) {
    case "input":
      if (oa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Vi(r);
            if (!o) throw Error(_(90));
            Jf(r), oa(r, o);
          }
        }
      }
      break;
    case "textarea":
      tp(e, n);
      break;
    case "select":
      t = n.value, t != null && Rr(e, !!n.multiple, t, false);
  }
};
ap = Gu;
up = sr;
var w0 = { usingClientEntryPoint: false, Events: [us, Er, Vi, ip, lp, Gu] }, xo = { findFiberByHostInstance: Hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, b0 = { bundleType: xo.bundleType, version: xo.version, rendererPackageName: xo.rendererPackageName, rendererConfig: xo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Zt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = fp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xo.findFiberByHostInstance || v0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Is.isDisabled && Is.supportsFiber) try {
    zi = Is.inject(b0), Ot = Is;
  } catch (e) {
  }
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0;
Xe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nc(t)) throw Error(_(200));
  return y0(e, t, null, n);
};
Xe.createRoot = function(e, t) {
  if (!nc(e)) throw Error(_(299));
  var n = false, r = "", o = Hh;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ju(e, 1, false, null, null, n, false, r, o), e[Kt] = t.current, Ho(e.nodeType === 8 ? e.parentNode : e), new tc(t);
};
Xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
  return e = fp(t), e = e === null ? null : e.stateNode, e;
};
Xe.flushSync = function(e) {
  return sr(e);
};
Xe.hydrate = function(e, t, n) {
  if (!Zi(t)) throw Error(_(200));
  return Ji(null, e, t, true, n);
};
Xe.hydrateRoot = function(e, t, n) {
  if (!nc(e)) throw Error(_(405));
  var r = n != null && n.hydratedSources || null, o = false, s = "", i = Hh;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Vh(t, null, e, 1, n != null ? n : null, o, false, s, i), e[Kt] = t.current, Ho(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xi(t);
};
Xe.render = function(e, t, n) {
  if (!Zi(t)) throw Error(_(200));
  return Ji(null, e, t, false, n);
};
Xe.unmountComponentAtNode = function(e) {
  if (!Zi(e)) throw Error(_(40));
  return e._reactRootContainer ? (sr(function() {
    Ji(null, null, e, false, function() {
      e._reactRootContainer = null, e[Kt] = null;
    });
  }), true) : false;
};
Xe.unstable_batchedUpdates = Gu;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Ji(e, t, n, false, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Wh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh);
  } catch (e) {
    console.error(e);
  }
}
Wh(), Wf.exports = Xe;
var ds = Wf.exports;
const Qh = Of(ds);
var Kh, Fd = ds;
Kh = Fd.createRoot, Fd.hydrateRoot;
var el = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, tl = typeof window > "u" || "Deno" in globalThis;
function pt() {
}
function S0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function E0(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function C0(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ha(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function k0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zd(e, t) {
  const { type: n = "all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: l } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== rc(i, t.options)) return false;
    } else if (!es(t.queryKey, i)) return false;
  }
  if (n !== "all") {
    const a = t.isActive();
    if (n === "active" && !a || n === "inactive" && a) return false;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t));
}
function $d(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return false;
    if (n) {
      if (Jo(t.options.mutationKey) !== Jo(s)) return false;
    } else if (!es(t.options.mutationKey, s)) return false;
  }
  return !(r && t.state.status !== r || o && !o(t));
}
function rc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e);
}
function Jo(e) {
  return JSON.stringify(e, (t, n) => Wa(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n);
}
function es(e, t) {
  return e === t ? true : typeof e != typeof t ? false : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => es(e[n], t[n])) : false;
}
function Yh(e, t) {
  if (e === t) return e;
  const n = Ud(e) && Ud(t);
  if (n || Wa(e) && Wa(t)) {
    const r = n ? e : Object.keys(e), o = r.length, s = n ? t : Object.keys(t), i = s.length, l = n ? [] : {}, a = new Set(r);
    let u = 0;
    for (let f = 0; f < i; f++) {
      const d = n ? f : s[f];
      (!n && a.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, u++) : (l[d] = Yh(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === i && u === o ? e : l;
  }
  return t;
}
function Ud(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Wa(e) {
  if (!Bd(e)) return false;
  const t = e.constructor;
  if (t === void 0) return true;
  const n = t.prototype;
  return !(!Bd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Bd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function N0(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function T0(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== false ? Yh(e, t) : t;
}
function P0(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function j0(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var oc = /* @__PURE__ */ Symbol();
function Gh(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === oc ? () => Promise.reject(new Error("Missing queryFn: '".concat(e.queryHash, "'"))) : e.queryFn;
}
var Kn, hn, zr, Cf, R0 = (Cf = class extends el {
  constructor() {
    super();
    Z(this, Kn);
    Z(this, hn);
    Z(this, zr);
    H(this, zr, (t) => {
      if (!tl && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, false), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    T(this, hn) || this.setEventListener(T(this, zr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = T(this, hn)) == null || t.call(this), H(this, hn, void 0));
  }
  setEventListener(t) {
    var n;
    H(this, zr, t), (n = T(this, hn)) == null || n.call(this), H(this, hn, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    T(this, Kn) !== t && (H(this, Kn, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof T(this, Kn) == "boolean" ? T(this, Kn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Kn = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Cf), qh = new R0(), $r, mn, Ur, kf, _0 = (kf = class extends el {
  constructor() {
    super();
    Z(this, $r, true);
    Z(this, mn);
    Z(this, Ur);
    H(this, Ur, (t) => {
      if (!tl && window.addEventListener) {
        const n = () => t(true), r = () => t(false);
        return window.addEventListener("online", n, false), window.addEventListener("offline", r, false), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    T(this, mn) || this.setEventListener(T(this, Ur));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = T(this, mn)) == null || t.call(this), H(this, mn, void 0));
  }
  setEventListener(t) {
    var n;
    H(this, Ur, t), (n = T(this, mn)) == null || n.call(this), H(this, mn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    T(this, $r) !== t && (H(this, $r, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return T(this, $r);
  }
}, $r = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), kf), _i = new _0();
function O0() {
  let e, t;
  const n = new Promise((o, s) => {
    e = o, t = s;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return n.resolve = (o) => {
    r({ status: "fulfilled", value: o }), e(o);
  }, n.reject = (o) => {
    r({ status: "rejected", reason: o }), t(o);
  }, n;
}
function A0(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Xh(e) {
  return (e != null ? e : "online") === "online" ? _i.isOnline() : true;
}
var Zh = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Hl(e) {
  return e instanceof Zh;
}
function Jh(e) {
  let t = false, n = 0, r = false, o;
  const s = O0(), i = (v) => {
    var w;
    r || (g(new Zh(v)), (w = e.abort) == null || w.call(e));
  }, l = () => {
    t = true;
  }, a = () => {
    t = false;
  }, u = () => qh.isFocused() && (e.networkMode === "always" || _i.isOnline()) && e.canRun(), f = () => Xh(e.networkMode) && e.canRun(), d = (v) => {
    var w;
    r || (r = true, (w = e.onSuccess) == null || w.call(e, v), o == null || o(), s.resolve(v));
  }, g = (v) => {
    var w;
    r || (r = true, (w = e.onError) == null || w.call(e, v), o == null || o(), s.reject(v));
  }, c = () => new Promise((v) => {
    var w;
    o = (m) => {
      (r || u()) && v(m);
    }, (w = e.onPause) == null || w.call(e);
  }).then(() => {
    var v;
    o = void 0, r || (v = e.onContinue) == null || v.call(e);
  }), b = () => {
    if (r) return;
    let v;
    const w = n === 0 ? e.initialPromise : void 0;
    try {
      v = w != null ? w : e.fn();
    } catch (m) {
      v = Promise.reject(m);
    }
    Promise.resolve(v).then(d).catch((m) => {
      var _a2, _b2;
      var C;
      if (r) return;
      const p = (_a2 = e.retry) != null ? _a2 : tl ? 0 : 3, y = (_b2 = e.retryDelay) != null ? _b2 : A0, S = typeof y == "function" ? y(n, m) : y, E = p === true || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
      if (t || !E) {
        g(m);
        return;
      }
      n++, (C = e.onFail) == null || C.call(e, n, m), N0(S).then(() => u() ? void 0 : c()).then(() => {
        t ? g(m) : b();
      });
    });
  };
  return { promise: s, cancel: i, continue: () => (o == null || o(), s), cancelRetry: l, continueRetry: a, canStart: f, start: () => (f() ? b() : c().then(b), s) };
}
var M0 = (e) => setTimeout(e, 0);
function L0() {
  let e = [], t = 0, n = (l) => {
    l();
  }, r = (l) => {
    l();
  }, o = M0;
  const s = (l) => {
    t ? e.push(l) : o(() => {
      n(l);
    });
  }, i = () => {
    const l = e;
    e = [], l.length && o(() => {
      r(() => {
        l.forEach((a) => {
          n(a);
        });
      });
    });
  };
  return { batch: (l) => {
    let a;
    t++;
    try {
      a = l();
    } finally {
      t--, t || i();
    }
    return a;
  }, batchCalls: (l) => (...a) => {
    s(() => {
      l(...a);
    });
  }, schedule: s, setNotifyFunction: (l) => {
    n = l;
  }, setBatchNotifyFunction: (l) => {
    r = l;
  }, setScheduler: (l) => {
    o = l;
  } };
}
var Ae = L0(), Yn, Nf, em = (Nf = class {
  constructor() {
    Z(this, Yn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), E0(this.gcTime) && H(this, Yn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e != null ? e : tl ? 1 / 0 : 5 * 60 * 1e3);
  }
  clearGcTimeout() {
    T(this, Yn) && (clearTimeout(T(this, Yn)), H(this, Yn, void 0));
  }
}, Yn = /* @__PURE__ */ new WeakMap(), Nf), Br, Gn, et, qn, Pe, os, Xn, ht, Ft, Tf, I0 = (Tf = class extends em {
  constructor(t) {
    var _a2;
    super();
    Z(this, ht);
    Z(this, Br);
    Z(this, Gn);
    Z(this, et);
    Z(this, qn);
    Z(this, Pe);
    Z(this, os);
    Z(this, Xn);
    H(this, Xn, false), H(this, os, t.defaultOptions), this.setOptions(t.options), this.observers = [], H(this, qn, t.client), H(this, et, T(this, qn).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, H(this, Br, F0(this.options)), this.state = (_a2 = t.state) != null ? _a2 : T(this, Br), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = T(this, Pe)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...T(this, os), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && T(this, et).remove(this);
  }
  setData(t, n) {
    const r = T0(this.state.data, t, this.options);
    return ke(this, ht, Ft).call(this, { data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r;
  }
  setState(t, n) {
    ke(this, ht, Ft).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, o;
    const n = (r = T(this, Pe)) == null ? void 0 : r.promise;
    return (o = T(this, Pe)) == null || o.cancel(t), n ? n.then(pt).catch(pt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: true });
  }
  reset() {
    this.destroy(), this.setState(T(this, Br));
  }
  isActive() {
    return this.observers.some((t) => k0(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === oc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => Ha(t.options.staleTime, this) === "static") : false;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !C0(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: false }), (n = T(this, Pe)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: false }), (n = T(this, Pe)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), T(this, et).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (T(this, Pe) && (T(this, Xn) ? T(this, Pe).cancel({ revert: true }) : T(this, Pe).cancelRetry()), this.scheduleGc()), T(this, et).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ke(this, ht, Ft).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var u, f, d;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({ silent: true });
      else if (T(this, Pe)) return T(this, Pe).continueRetry(), T(this, Pe).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const g = this.observers.find((c) => c.options.queryFn);
      g && this.setOptions(g.options);
    }
    const r = new AbortController(), o = (g) => {
      Object.defineProperty(g, "signal", { enumerable: true, get: () => (H(this, Xn, true), r.signal) });
    }, s = () => {
      const g = Gh(this.options, n), b = (() => {
        const v = { client: T(this, qn), queryKey: this.queryKey, meta: this.meta };
        return o(v), v;
      })();
      return H(this, Xn, false), this.options.persister ? this.options.persister(g, b, this) : g(b);
    }, l = (() => {
      const g = { fetchOptions: n, options: this.options, queryKey: this.queryKey, client: T(this, qn), state: this.state, fetchFn: s };
      return o(g), g;
    })();
    (u = this.options.behavior) == null || u.onFetch(l, this), H(this, Gn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = l.fetchOptions) == null ? void 0 : f.meta)) && ke(this, ht, Ft).call(this, { type: "fetch", meta: (d = l.fetchOptions) == null ? void 0 : d.meta });
    const a = (g) => {
      var c, b, v, w;
      Hl(g) && g.silent || ke(this, ht, Ft).call(this, { type: "error", error: g }), Hl(g) || ((b = (c = T(this, et).config).onError) == null || b.call(c, g, this), (w = (v = T(this, et).config).onSettled) == null || w.call(v, this.state.data, g, this)), this.scheduleGc();
    };
    return H(this, Pe, Jh({ initialPromise: n == null ? void 0 : n.initialPromise, fn: l.fetchFn, abort: r.abort.bind(r), onSuccess: (g) => {
      var c, b, v, w;
      if (g === void 0) {
        a(new Error("".concat(this.queryHash, " data is undefined")));
        return;
      }
      try {
        this.setData(g);
      } catch (m) {
        a(m);
        return;
      }
      (b = (c = T(this, et).config).onSuccess) == null || b.call(c, g, this), (w = (v = T(this, et).config).onSettled) == null || w.call(v, g, this.state.error, this), this.scheduleGc();
    }, onError: a, onFail: (g, c) => {
      ke(this, ht, Ft).call(this, { type: "failed", failureCount: g, error: c });
    }, onPause: () => {
      ke(this, ht, Ft).call(this, { type: "pause" });
    }, onContinue: () => {
      ke(this, ht, Ft).call(this, { type: "continue" });
    }, retry: l.options.retry, retryDelay: l.options.retryDelay, networkMode: l.options.networkMode, canRun: () => true })), T(this, Pe).start();
  }
}, Br = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakSet(), Ft = function(t) {
  const n = (r) => {
    var _a2, _b2;
    switch (t.type) {
      case "failed":
        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
      case "pause":
        return { ...r, fetchStatus: "paused" };
      case "continue":
        return { ...r, fetchStatus: "fetching" };
      case "fetch":
        return { ...r, ...D0(r.data, this.options), fetchMeta: (_a2 = t.meta) != null ? _a2 : null };
      case "success":
        return H(this, Gn, void 0), { ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: (_b2 = t.dataUpdatedAt) != null ? _b2 : Date.now(), error: null, isInvalidated: false, status: "success", ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
      case "error":
        const o = t.error;
        return Hl(o) && o.revert && T(this, Gn) ? { ...T(this, Gn), fetchStatus: "idle" } : { ...r, error: o, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: o, fetchStatus: "idle", status: "error" };
      case "invalidate":
        return { ...r, isInvalidated: true };
      case "setState":
        return { ...r, ...t.state };
    }
  };
  this.state = n(this.state), Ae.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), T(this, et).notify({ query: this, type: "updated", action: t });
  });
}, Tf);
function D0(e, t) {
  return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: Xh(t.networkMode) ? "fetching" : "paused", ...e === void 0 && { error: null, status: "pending" } };
}
function F0(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return { data: t, dataUpdateCount: 0, dataUpdatedAt: n ? r != null ? r : Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: n ? "success" : "pending", fetchStatus: "idle" };
}
var Tt, Pf, z0 = (Pf = class extends el {
  constructor(t = {}) {
    super();
    Z(this, Tt);
    this.config = t, H(this, Tt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    var _a2;
    const o = n.queryKey, s = (_a2 = n.queryHash) != null ? _a2 : rc(o, n);
    let i = this.get(s);
    return i || (i = new I0({ client: t, queryKey: o, queryHash: s, options: t.defaultQueryOptions(n), state: r, defaultOptions: t.getQueryDefaults(o) }), this.add(i)), i;
  }
  add(t) {
    T(this, Tt).has(t.queryHash) || (T(this, Tt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = T(this, Tt).get(t.queryHash);
    n && (t.destroy(), n === t && T(this, Tt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return T(this, Tt).get(t);
  }
  getAll() {
    return [...T(this, Tt).values()];
  }
  find(t) {
    const n = { exact: true, ...t };
    return this.getAll().find((r) => zd(n, r));
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => zd(t, r)) : n;
  }
  notify(t) {
    Ae.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Tt = /* @__PURE__ */ new WeakMap(), Pf), Pt, _e, Zn, jt, un, jf, $0 = (jf = class extends em {
  constructor(t) {
    super();
    Z(this, jt);
    Z(this, Pt);
    Z(this, _e);
    Z(this, Zn);
    this.mutationId = t.mutationId, H(this, _e, t.mutationCache), H(this, Pt, []), this.state = t.state || U0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    T(this, Pt).includes(t) || (T(this, Pt).push(t), this.clearGcTimeout(), T(this, _e).notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    H(this, Pt, T(this, Pt).filter((n) => n !== t)), this.scheduleGc(), T(this, _e).notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    T(this, Pt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, _e).remove(this));
  }
  continue() {
    var _a2;
    var t;
    return (_a2 = (t = T(this, Zn)) == null ? void 0 : t.continue()) != null ? _a2 : this.execute(this.state.variables);
  }
  async execute(t) {
    var _a2;
    var s, i, l, a, u, f, d, g, c, b, v, w, m, p, y, S, E, C, k, j;
    const n = () => {
      ke(this, jt, un).call(this, { type: "continue" });
    };
    H(this, Zn, Jh({ fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")), onFail: (L, A) => {
      ke(this, jt, un).call(this, { type: "failed", failureCount: L, error: A });
    }, onPause: () => {
      ke(this, jt, un).call(this, { type: "pause" });
    }, onContinue: n, retry: (_a2 = this.options.retry) != null ? _a2 : 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => T(this, _e).canRun(this) }));
    const r = this.state.status === "pending", o = !T(this, Zn).canStart();
    try {
      if (r) n();
      else {
        ke(this, jt, un).call(this, { type: "pending", variables: t, isPaused: o }), await ((i = (s = T(this, _e).config).onMutate) == null ? void 0 : i.call(s, t, this));
        const A = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
        A !== this.state.context && ke(this, jt, un).call(this, { type: "pending", context: A, variables: t, isPaused: o });
      }
      const L = await T(this, Zn).start();
      return await ((f = (u = T(this, _e).config).onSuccess) == null ? void 0 : f.call(u, L, t, this.state.context, this)), await ((g = (d = this.options).onSuccess) == null ? void 0 : g.call(d, L, t, this.state.context)), await ((b = (c = T(this, _e).config).onSettled) == null ? void 0 : b.call(c, L, null, this.state.variables, this.state.context, this)), await ((w = (v = this.options).onSettled) == null ? void 0 : w.call(v, L, null, t, this.state.context)), ke(this, jt, un).call(this, { type: "success", data: L }), L;
    } catch (L) {
      try {
        throw await ((p = (m = T(this, _e).config).onError) == null ? void 0 : p.call(m, L, t, this.state.context, this)), await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, L, t, this.state.context)), await ((C = (E = T(this, _e).config).onSettled) == null ? void 0 : C.call(E, void 0, L, this.state.variables, this.state.context, this)), await ((j = (k = this.options).onSettled) == null ? void 0 : j.call(k, void 0, L, t, this.state.context)), L;
      } finally {
        ke(this, jt, un).call(this, { type: "error", error: L });
      }
    } finally {
      T(this, _e).runNext(this);
    }
  }
}, Pt = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakSet(), un = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return { ...r, failureCount: t.failureCount, failureReason: t.error };
      case "pause":
        return { ...r, isPaused: true };
      case "continue":
        return { ...r, isPaused: false };
      case "pending":
        return { ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now() };
      case "success":
        return { ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: false };
      case "error":
        return { ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: false, status: "error" };
    }
  };
  this.state = n(this.state), Ae.batch(() => {
    T(this, Pt).forEach((r) => {
      r.onMutationUpdate(t);
    }), T(this, _e).notify({ mutation: this, type: "updated", action: t });
  });
}, jf);
function U0() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var Ut, mt, ss, Rf, B0 = (Rf = class extends el {
  constructor(t = {}) {
    super();
    Z(this, Ut);
    Z(this, mt);
    Z(this, ss);
    this.config = t, H(this, Ut, /* @__PURE__ */ new Set()), H(this, mt, /* @__PURE__ */ new Map()), H(this, ss, 0);
  }
  build(t, n, r) {
    const o = new $0({ mutationCache: this, mutationId: ++xs(this, ss)._, options: t.defaultMutationOptions(n), state: r });
    return this.add(o), o;
  }
  add(t) {
    T(this, Ut).add(t);
    const n = Ds(t);
    if (typeof n == "string") {
      const r = T(this, mt).get(n);
      r ? r.push(t) : T(this, mt).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (T(this, Ut).delete(t)) {
      const n = Ds(t);
      if (typeof n == "string") {
        const r = T(this, mt).get(n);
        if (r) if (r.length > 1) {
          const o = r.indexOf(t);
          o !== -1 && r.splice(o, 1);
        } else r[0] === t && T(this, mt).delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = Ds(t);
    if (typeof n == "string") {
      const r = T(this, mt).get(n), o = r == null ? void 0 : r.find((s) => s.state.status === "pending");
      return !o || o === t;
    } else return true;
  }
  runNext(t) {
    var _a2;
    var r;
    const n = Ds(t);
    if (typeof n == "string") {
      const o = (r = T(this, mt).get(n)) == null ? void 0 : r.find((s) => s !== t && s.state.isPaused);
      return (_a2 = o == null ? void 0 : o.continue()) != null ? _a2 : Promise.resolve();
    } else return Promise.resolve();
  }
  clear() {
    Ae.batch(() => {
      T(this, Ut).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), T(this, Ut).clear(), T(this, mt).clear();
    });
  }
  getAll() {
    return Array.from(T(this, Ut));
  }
  find(t) {
    const n = { exact: true, ...t };
    return this.getAll().find((r) => $d(n, r));
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => $d(t, n));
  }
  notify(t) {
    Ae.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return Ae.batch(() => Promise.all(t.map((n) => n.continue().catch(pt))));
  }
}, Ut = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), Rf);
function Ds(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Vd(e) {
  return { onFetch: (t, n) => {
    var f, d, g, c, b;
    const r = t.options, o = (g = (d = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : g.direction, s = ((c = t.state.data) == null ? void 0 : c.pages) || [], i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
    let l = { pages: [], pageParams: [] }, a = 0;
    const u = async () => {
      var _a2;
      let v = false;
      const w = (y) => {
        Object.defineProperty(y, "signal", { enumerable: true, get: () => (t.signal.aborted ? v = true : t.signal.addEventListener("abort", () => {
          v = true;
        }), t.signal) });
      }, m = Gh(t.options, t.fetchOptions), p = async (y, S, E) => {
        if (v) return Promise.reject();
        if (S == null && y.pages.length) return Promise.resolve(y);
        const k = (() => {
          const U = { client: t.client, queryKey: t.queryKey, pageParam: S, direction: E ? "backward" : "forward", meta: t.options.meta };
          return w(U), U;
        })(), j = await m(k), { maxPages: L } = t.options, A = E ? j0 : P0;
        return { pages: A(y.pages, j, L), pageParams: A(y.pageParams, S, L) };
      };
      if (o && s.length) {
        const y = o === "backward", S = y ? V0 : Hd, E = { pages: s, pageParams: i }, C = S(r, E);
        l = await p(E, C, y);
      } else {
        const y = e != null ? e : s.length;
        do {
          const S = a === 0 ? (_a2 = i[0]) != null ? _a2 : r.initialPageParam : Hd(r, l);
          if (a > 0 && S == null) break;
          l = await p(l, S), a++;
        } while (a < y);
      }
      return l;
    };
    t.options.persister ? t.fetchFn = () => {
      var v, w;
      return (w = (v = t.options).persister) == null ? void 0 : w.call(v, u, { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
    } : t.fetchFn = u;
  } };
}
function Hd(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function V0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var de, gn, yn, Vr, Hr, vn, Wr, Qr, _f, H0 = (_f = class {
  constructor(e = {}) {
    Z(this, de);
    Z(this, gn);
    Z(this, yn);
    Z(this, Vr);
    Z(this, Hr);
    Z(this, vn);
    Z(this, Wr);
    Z(this, Qr);
    H(this, de, e.queryCache || new z0()), H(this, gn, e.mutationCache || new B0()), H(this, yn, e.defaultOptions || {}), H(this, Vr, /* @__PURE__ */ new Map()), H(this, Hr, /* @__PURE__ */ new Map()), H(this, vn, 0);
  }
  mount() {
    xs(this, vn)._++, T(this, vn) === 1 && (H(this, Wr, qh.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), T(this, de).onFocus());
    })), H(this, Qr, _i.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), T(this, de).onOnline());
    })));
  }
  unmount() {
    var e, t;
    xs(this, vn)._--, T(this, vn) === 0 && ((e = T(this, Wr)) == null || e.call(this), H(this, Wr, void 0), (t = T(this, Qr)) == null || t.call(this), H(this, Qr, void 0));
  }
  isFetching(e) {
    return T(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return T(this, gn).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = T(this, de).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ha(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return T(this, de).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), o = T(this, de).get(r.queryHash), s = o == null ? void 0 : o.state.data, i = S0(t, s);
    if (i !== void 0) return T(this, de).build(this, r).setData(i, { ...n, manual: true });
  }
  setQueriesData(e, t, n) {
    return Ae.batch(() => T(this, de).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]));
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = T(this, de);
    Ae.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = T(this, de);
    return Ae.batch(() => (n.findAll(e).forEach((r) => {
      r.reset();
    }), this.refetchQueries({ type: "active", ...e }, t)));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: true, ...t }, r = Ae.batch(() => T(this, de).findAll(e).map((o) => o.cancel(n)));
    return Promise.all(r).then(pt).catch(pt);
  }
  invalidateQueries(e, t = {}) {
    return Ae.batch(() => {
      var _a2, _b2;
      return T(this, de).findAll(e).forEach((n) => {
        n.invalidate();
      }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e, type: (_b2 = (_a2 = e == null ? void 0 : e.refetchType) != null ? _a2 : e == null ? void 0 : e.type) != null ? _b2 : "active" }, t);
    });
  }
  refetchQueries(e, t = {}) {
    var _a2;
    const n = { ...t, cancelRefetch: (_a2 = t.cancelRefetch) != null ? _a2 : true }, r = Ae.batch(() => T(this, de).findAll(e).filter((o) => !o.isDisabled() && !o.isStatic()).map((o) => {
      let s = o.fetch(void 0, n);
      return n.throwOnError || (s = s.catch(pt)), o.state.fetchStatus === "paused" ? Promise.resolve() : s;
    }));
    return Promise.all(r).then(pt);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = false);
    const n = T(this, de).build(this, t);
    return n.isStaleByTime(Ha(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(pt).catch(pt);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Vd(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(pt).catch(pt);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Vd(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return _i.isOnline() ? T(this, gn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return T(this, de);
  }
  getMutationCache() {
    return T(this, gn);
  }
  getDefaultOptions() {
    return T(this, yn);
  }
  setDefaultOptions(e) {
    H(this, yn, e);
  }
  setQueryDefaults(e, t) {
    T(this, Vr).set(Jo(e), { queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    const t = [...T(this, Vr).values()], n = {};
    return t.forEach((r) => {
      es(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    T(this, Hr).set(Jo(e), { mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    const t = [...T(this, Hr).values()], n = {};
    return t.forEach((r) => {
      es(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted) return e;
    const t = { ...T(this, yn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: true };
    return t.queryHash || (t.queryHash = rc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === oc && (t.enabled = false), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : { ...T(this, yn).mutations, ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey), ...e, _defaulted: true };
  }
  clear() {
    T(this, de).clear(), T(this, gn).clear();
  }
}, de = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), _f), W0 = x.createContext(void 0), Q0 = ({ client: e, children: t }) => (x.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), h.jsx(W0.Provider, { value: e, children: t }));
/**
* @remix-run/router v1.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
var bn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(bn || (bn = {}));
const Wd = "popstate";
function K0(e) {
  e === void 0 && (e = {});
  function t(o, s) {
    let { pathname: i = "/", search: l = "", hash: a = "" } = fs(o.location.hash.substr(1));
    return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Qa("", { pathname: i, search: l, hash: a }, s.state && s.state.usr || null, s.state && s.state.key || "default");
  }
  function n(o, s) {
    let i = o.document.querySelector("base"), l = "";
    if (i && i.getAttribute("href")) {
      let a = o.location.href, u = a.indexOf("#");
      l = u === -1 ? a : a.slice(0, u);
    }
    return l + "#" + (typeof s == "string" ? s : tm(s));
  }
  function r(o, s) {
    sc(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")");
  }
  return G0(t, n, r, e);
}
function Ve(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function sc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch (e2) {
    }
  }
}
function Y0() {
  return Math.random().toString(36).substr(2, 8);
}
function Qd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Qa(e, t, n, r) {
  return n === void 0 && (n = null), Oi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? fs(t) : t, { state: n, key: t && t.key || r || Y0() });
}
function tm(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function fs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function G0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = false } = r, i = o.history, l = bn.Pop, a = null, u = f();
  u == null && (u = 0, i.replaceState(Oi({}, i.state, { idx: u }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    l = bn.Pop;
    let w = f(), m = w == null ? null : w - u;
    u = w, a && a({ action: l, location: v.location, delta: m });
  }
  function g(w, m) {
    l = bn.Push;
    let p = Qa(v.location, w, m);
    n && n(p, w), u = f() + 1;
    let y = Qd(p, u), S = v.createHref(p);
    try {
      i.pushState(y, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    s && a && a({ action: l, location: v.location, delta: 1 });
  }
  function c(w, m) {
    l = bn.Replace;
    let p = Qa(v.location, w, m);
    n && n(p, w), u = f();
    let y = Qd(p, u), S = v.createHref(p);
    i.replaceState(y, "", S), s && a && a({ action: l, location: v.location, delta: 0 });
  }
  function b(w) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href, p = typeof w == "string" ? w : tm(w);
    return p = p.replace(/ $/, "%20"), Ve(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m);
  }
  let v = { get action() {
    return l;
  }, get location() {
    return e(o, i);
  }, listen(w) {
    if (a) throw new Error("A history only accepts one active listener");
    return o.addEventListener(Wd, d), a = w, () => {
      o.removeEventListener(Wd, d), a = null;
    };
  }, createHref(w) {
    return t(o, w);
  }, createURL: b, encodeLocation(w) {
    let m = b(w);
    return { pathname: m.pathname, search: m.search, hash: m.hash };
  }, push: g, replace: c, go(w) {
    return i.go(w);
  } };
  return v;
}
var Kd;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Kd || (Kd = {}));
function q0(e, t, n) {
  return n === void 0 && (n = "/"), X0(e, t, n, false);
}
function X0(e, t, n, r) {
  let o = typeof t == "string" ? fs(t) : t, s = om(o.pathname || "/", n);
  if (s == null) return null;
  let i = nm(e);
  Z0(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = ux(s);
    l = lx(i[a], u, r);
  }
  return l;
}
function nm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = { relativePath: l === void 0 ? s.path || "" : l, caseSensitive: s.caseSensitive === true, childrenIndex: i, route: s };
    a.relativePath.startsWith("/") && (Ve(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let u = Ir([r, a.relativePath]), f = n.concat(a);
    s.children && s.children.length > 0 && (Ve(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), nm(s.children, t, f, u)), !(s.path == null && !s.index) && t.push({ path: u, score: sx(u, s.index), routesMeta: f });
  };
  return e.forEach((s, i) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
    else for (let a of rm(s.path)) o(s, i, a);
  }), t;
}
function rm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = rm(r.join("/")), l = [];
  return l.push(...i.map((a) => a === "" ? s : [s, a].join("/"))), o && l.push(...i), l.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function Z0(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : ix(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const J0 = /^:[\w-]+$/, ex = 3, tx = 2, nx = 1, rx = 10, ox = -2, Yd = (e) => e === "*";
function sx(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Yd) && (r += ox), t && (r += tx), n.filter((o) => !Yd(o)).reduce((o, s) => o + (J0.test(s) ? ex : s === "" ? nx : rx), r);
}
function ix(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function lx(e, t, n) {
  let { routesMeta: r } = e, o = {}, s = "/", i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l], u = l === r.length - 1, f = s === "/" ? t : t.slice(s.length) || "/", d = Gd({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, f), g = a.route;
    if (!d && u && n && !r[r.length - 1].route.index && (d = Gd({ path: a.relativePath, caseSensitive: a.caseSensitive, end: false }, f)), !d) return null;
    Object.assign(o, d.params), i.push({ params: o, pathname: Ir([s, d.pathname]), pathnameBase: cx(Ir([s, d.pathnameBase])), route: g }), d.pathnameBase !== "/" && (s = Ir([s, d.pathnameBase]));
  }
  return i;
}
function Gd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: false, end: true });
  let [n, r] = ax(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o) return null;
  let s = o[0], i = s.replace(/(.)\/+$/, "$1"), l = o.slice(1);
  return { params: r.reduce((u, f, d) => {
    let { paramName: g, isOptional: c } = f;
    if (g === "*") {
      let v = l[d] || "";
      i = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
    }
    const b = l[d];
    return c && !b ? u[g] = void 0 : u[g] = (b || "").replace(/%2F/g, "/"), u;
  }, {}), pathname: s, pathnameBase: i, pattern: e };
}
function ax(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = true), sc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, a) => (r.push({ paramName: l, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function ux(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return sc(false, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function om(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Ir = (e) => e.join("/").replace(/\/\/+/g, "/"), cx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function dx(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const sm = ["post", "put", "patch", "delete"];
new Set(sm);
const fx = ["get", ...sm];
new Set(fx);
/**
* React Router v6.30.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ai.apply(this, arguments);
}
const px = x.createContext(null), hx = x.createContext(null), im = x.createContext(null), nl = x.createContext(null), rl = x.createContext({ outlet: null, matches: [], isDataRoute: false }), lm = x.createContext(null);
function ic() {
  return x.useContext(nl) != null;
}
function am() {
  return ic() || Ve(false), x.useContext(nl).location;
}
function mx(e, t) {
  return gx(e, t);
}
function gx(e, t, n, r) {
  ic() || Ve(false);
  let { navigator: o } = x.useContext(im), { matches: s } = x.useContext(rl), i = s[s.length - 1], l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = am(), f;
  if (t) {
    var d;
    let w = typeof t == "string" ? fs(t) : t;
    a === "/" || (d = w.pathname) != null && d.startsWith(a) || Ve(false), f = w;
  } else f = u;
  let g = f.pathname || "/", c = g;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    c = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let b = q0(e, { pathname: c }), v = bx(b && b.map((w) => Object.assign({}, w, { params: Object.assign({}, l, w.params), pathname: Ir([a, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]), pathnameBase: w.pathnameBase === "/" ? a : Ir([a, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase]) })), s, n, r);
  return t && v ? x.createElement(nl.Provider, { value: { location: Ai({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: bn.Pop } }, v) : v;
}
function yx() {
  let e = kx(), t = dx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? x.createElement("pre", { style: o }, n) : null, null);
}
const vx = x.createElement(yx, null);
class xx extends x.Component {
  constructor(t) {
    super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? x.createElement(rl.Provider, { value: this.props.routeContext }, x.createElement(lm.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function wx(e) {
  let { routeContext: t, match: n, children: r } = e, o = x.useContext(px);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(rl.Provider, { value: t }, r);
}
function bx(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null;
  }
  let i = e, l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let f = i.findIndex((d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
    f >= 0 || Ve(false), i = i.slice(0, Math.min(i.length, f + 1));
  }
  let a = false, u = -1;
  if (n && r && r.v7_partialHydration) for (let f = 0; f < i.length; f++) {
    let d = i[f];
    if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f), d.route.id) {
      let { loaderData: g, errors: c } = n, b = d.route.loader && g[d.route.id] === void 0 && (!c || c[d.route.id] === void 0);
      if (d.route.lazy || b) {
        a = true, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
        break;
      }
    }
  }
  return i.reduceRight((f, d, g) => {
    let c, b = false, v = null, w = null;
    n && (c = l && d.route.id ? l[d.route.id] : void 0, v = d.route.errorElement || vx, a && (u < 0 && g === 0 ? (b = true, w = null) : u === g && (b = true, w = d.route.hydrateFallbackElement || null)));
    let m = t.concat(i.slice(0, g + 1)), p = () => {
      let y;
      return c ? y = v : b ? y = w : d.route.Component ? y = x.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = f, x.createElement(wx, { match: d, routeContext: { outlet: f, matches: m, isDataRoute: n != null }, children: y });
    };
    return n && (d.route.ErrorBoundary || d.route.errorElement || g === 0) ? x.createElement(xx, { location: n.location, revalidation: n.revalidation, component: v, error: c, children: p(), routeContext: { outlet: null, matches: m, isDataRoute: true } }) : p();
  }, null);
}
var Ka = (function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
})(Ka || {});
function Sx(e) {
  let t = x.useContext(hx);
  return t || Ve(false), t;
}
function Ex(e) {
  let t = x.useContext(rl);
  return t || Ve(false), t;
}
function Cx(e) {
  let t = Ex(), n = t.matches[t.matches.length - 1];
  return n.route.id || Ve(false), n.route.id;
}
function kx() {
  var e;
  let t = x.useContext(lm), n = Sx(Ka.UseRouteError), r = Cx(Ka.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Nx(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Ya(e) {
  Ve(false);
}
function Tx(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: o = bn.Pop, navigator: s, static: i = false, future: l } = e;
  ic() && Ve(false);
  let a = t.replace(/^\/*/, "/"), u = x.useMemo(() => ({ basename: a, navigator: s, static: i, future: Ai({ v7_relativeSplatPath: false }, l) }), [a, l, s, i]);
  typeof r == "string" && (r = fs(r));
  let { pathname: f = "/", search: d = "", hash: g = "", state: c = null, key: b = "default" } = r, v = x.useMemo(() => {
    let w = om(f, a);
    return w == null ? null : { location: { pathname: w, search: d, hash: g, state: c, key: b }, navigationType: o };
  }, [a, f, d, g, c, b, o]);
  return v == null ? null : x.createElement(im.Provider, { value: u }, x.createElement(nl.Provider, { children: n, value: v }));
}
function Px(e) {
  let { children: t, location: n } = e;
  return mx(Ga(t), n);
}
new Promise(() => {
});
function Ga(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return x.Children.forEach(e, (r, o) => {
    if (!x.isValidElement(r)) return;
    let s = [...t, o];
    if (r.type === x.Fragment) {
      n.push.apply(n, Ga(r.props.children, s));
      return;
    }
    r.type !== Ya && Ve(false), !r.props.index || !r.props.children || Ve(false);
    let i = { id: r.props.id || s.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy };
    r.props.children && (i.children = Ga(r.props.children, s)), n.push(i);
  }), n;
}
/**
* React Router DOM v6.30.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
const jx = "6";
try {
  window.__reactRouterVersion = jx;
} catch (e) {
}
const Rx = "startTransition", qd = Vf[Rx];
function _x(e) {
  let { basename: t, children: n, future: r, window: o } = e, s = x.useRef();
  s.current == null && (s.current = K0({ window: o, v5Compat: true }));
  let i = s.current, [l, a] = x.useState({ action: i.action, location: i.location }), { v7_startTransition: u } = r || {}, f = x.useCallback((d) => {
    u && qd ? qd(() => a(d)) : a(d);
  }, [a, u]);
  return x.useLayoutEffect(() => i.listen(f), [i, f]), x.useEffect(() => Nx(r), [r]), x.createElement(Tx, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: i, future: r });
}
var Xd;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Xd || (Xd = {}));
var Zd;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Zd || (Zd = {}));
var Jd = ["light", "dark"], Ox = "(prefers-color-scheme: dark)", Ax = x.createContext(void 0), Mx = { setTheme: (e) => {
}, themes: [] }, Lx = () => {
  var e;
  return (e = x.useContext(Ax)) != null ? e : Mx;
};
x.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: l, nonce: a }) => {
  let u = s === "system", f = n === "class" ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(l.map((b) => "'".concat(b, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(n, "',s='setAttribute';"), d = o ? Jd.includes(s) && s ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", g = (b, v = false, w = true) => {
    let m = i ? i[b] : b, p = v ? b + "|| ''" : "'".concat(m, "'"), y = "";
    return o && w && !v && Jd.includes(b) && (y += "d.style.colorScheme = '".concat(b, "';")), n === "class" ? v || m ? y += "c.add(".concat(p, ")") : y += "null" : m && (y += "d[s](n,".concat(p, ")")), y;
  }, c = e ? "!function(){".concat(f).concat(g(e), "}()") : r ? "!function(){try{".concat(f, "var e=localStorage.getItem('").concat(t, "');if('system'===e||(!e&&").concat(u, ")){var t='").concat(Ox, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"), "}else{").concat(g("light"), "}}else if(e){").concat(i ? "var x=".concat(JSON.stringify(i), ";") : "").concat(g(i ? "x[e]" : "e", true), "}").concat(u ? "" : "else{" + g(s, false, false) + "}").concat(d, "}catch(e){}}()") : "!function(){try{".concat(f, "var e=localStorage.getItem('").concat(t, "');if(e){").concat(i ? "var x=".concat(JSON.stringify(i), ";") : "").concat(g(i ? "x[e]" : "e", true), "}else{").concat(g(s, false, false), ";}").concat(d, "}catch(t){}}();");
  return x.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: c } });
});
var Ix = (e) => {
  switch (e) {
    case "success":
      return zx;
    case "info":
      return Ux;
    case "warning":
      return $x;
    case "error":
      return Bx;
    default:
      return null;
  }
}, Dx = Array(12).fill(0), Fx = ({ visible: e, className: t }) => M.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, M.createElement("div", { className: "sonner-spinner" }, Dx.map((n, r) => M.createElement("div", { className: "sonner-loading-bar", key: "spinner-bar-".concat(r) })))), zx = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), $x = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Ux = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Bx = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Vx = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, M.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), M.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), Hx = () => {
  let [e, t] = M.useState(document.hidden);
  return M.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, qa = 1, Wx = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : qa++, s = this.toasts.find((l) => l.id === o), i = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), s ? this.toasts = this.toasts.map((l) => l.id === o ? (this.publish({ ...l, ...e, id: o, title: n }), { ...l, ...e, id: o, dismissible: i, title: n }) : l) : this.addToast({ title: n, ...r, dismissible: i, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0, s, i = r.then(async (a) => {
        if (s = ["resolve", a], M.isValidElement(a)) o = false, this.create({ id: n, type: "default", message: a });
        else if (Kx(a) && !a.ok) {
          o = false;
          let u = typeof t.error == "function" ? await t.error("HTTP error! status: ".concat(a.status)) : t.error, f = typeof t.description == "function" ? await t.description("HTTP error! status: ".concat(a.status)) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        } else if (t.success !== void 0) {
          o = false;
          let u = typeof t.success == "function" ? await t.success(a) : t.success, f = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "success", message: u, description: f });
        }
      }).catch(async (a) => {
        if (s = ["reject", a], t.error !== void 0) {
          o = false;
          let u = typeof t.error == "function" ? await t.error(a) : t.error, f = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        }
      }).finally(() => {
        var a;
        o && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t);
      }), l = () => new Promise((a, u) => i.then(() => s[0] === "reject" ? u(s[1]) : a(s[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? { unwrap: l } : Object.assign(n, { unwrap: l });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || qa++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, De = new Wx(), Qx = (e, t) => {
  let n = (t == null ? void 0 : t.id) || qa++;
  return De.addToast({ title: e, ...t, id: n }), n;
}, Kx = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Yx = Qx, Gx = () => De.toasts, qx = () => De.getActiveToasts();
Object.assign(Yx, { success: De.success, info: De.info, warning: De.warning, error: De.error, custom: De.custom, message: De.message, promise: De.promise, dismiss: De.dismiss, loading: De.loading }, { getHistory: Gx, getToasts: qx });
function Xx(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
Xx(':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n');
function Fs(e) {
  return e.label !== void 0;
}
var Zx = 3, Jx = "32px", ew = "16px", ef = 4e3, tw = 356, nw = 14, rw = 20, ow = 200;
function dt(...e) {
  return e.filter(Boolean).join(" ");
}
function sw(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var iw = (e) => {
  var t, n, r, o, s, i, l, a, u, f, d;
  let { invert: g, toast: c, unstyled: b, interacting: v, setHeights: w, visibleToasts: m, heights: p, index: y, toasts: S, expanded: E, removeToast: C, defaultRichColors: k, closeButton: j, style: L, cancelButtonStyle: A, actionButtonStyle: U, className: R = "", descriptionClassName: $ = "", duration: O, position: Q, gap: I, loadingIcon: z, expandByDefault: N, classNames: P, icons: D, closeButtonAriaLabel: W = "Close toast", pauseWhenPageIsHidden: B } = e, [Y, q] = M.useState(null), [he, Ce] = M.useState(null), [J, cr] = M.useState(false), [Jt, zn] = M.useState(false), [en, dr] = M.useState(false), [tn, gs] = M.useState(false), [pl, ys] = M.useState(false), [hl, uo] = M.useState(0), [fr, Ec] = M.useState(0), co = M.useRef(c.duration || O || ef), Cc = M.useRef(null), $n = M.useRef(null), Ug = y === 0, Bg = y + 1 <= m, Je = c.type, pr = c.dismissible !== false, Vg = c.className || "", Hg = c.descriptionClassName || "", vs = M.useMemo(() => p.findIndex((V) => V.toastId === c.id) || 0, [p, c.id]), Wg = M.useMemo(() => {
    var V;
    return (V = c.closeButton) != null ? V : j;
  }, [c.closeButton, j]), kc = M.useMemo(() => c.duration || O || ef, [c.duration, O]), ml = M.useRef(0), hr = M.useRef(0), Nc = M.useRef(0), mr = M.useRef(null), [Qg, Kg] = Q.split("-"), Tc = M.useMemo(() => p.reduce((V, te, ie) => ie >= vs ? V : V + te.height, 0), [p, vs]), Pc = Hx(), Yg = c.invert || g, gl = Je === "loading";
  hr.current = M.useMemo(() => vs * I + Tc, [vs, Tc]), M.useEffect(() => {
    co.current = kc;
  }, [kc]), M.useEffect(() => {
    cr(true);
  }, []), M.useEffect(() => {
    let V = $n.current;
    if (V) {
      let te = V.getBoundingClientRect().height;
      return Ec(te), w((ie) => [{ toastId: c.id, height: te, position: c.position }, ...ie]), () => w((ie) => ie.filter((lt) => lt.toastId !== c.id));
    }
  }, [w, c.id]), M.useLayoutEffect(() => {
    if (!J) return;
    let V = $n.current, te = V.style.height;
    V.style.height = "auto";
    let ie = V.getBoundingClientRect().height;
    V.style.height = te, Ec(ie), w((lt) => lt.find((at) => at.toastId === c.id) ? lt.map((at) => at.toastId === c.id ? { ...at, height: ie } : at) : [{ toastId: c.id, height: ie, position: c.position }, ...lt]);
  }, [J, c.title, c.description, w, c.id]);
  let nn = M.useCallback(() => {
    zn(true), uo(hr.current), w((V) => V.filter((te) => te.toastId !== c.id)), setTimeout(() => {
      C(c);
    }, ow);
  }, [c, C, w, hr]);
  M.useEffect(() => {
    if (c.promise && Je === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
    let V;
    return E || v || B && Pc ? (() => {
      if (Nc.current < ml.current) {
        let te = (/* @__PURE__ */ new Date()).getTime() - ml.current;
        co.current = co.current - te;
      }
      Nc.current = (/* @__PURE__ */ new Date()).getTime();
    })() : co.current !== 1 / 0 && (ml.current = (/* @__PURE__ */ new Date()).getTime(), V = setTimeout(() => {
      var te;
      (te = c.onAutoClose) == null || te.call(c, c), nn();
    }, co.current)), () => clearTimeout(V);
  }, [E, v, c, Je, B, Pc, nn]), M.useEffect(() => {
    c.delete && nn();
  }, [nn, c.delete]);
  function Gg() {
    var V, te, ie;
    return D != null && D.loading ? M.createElement("div", { className: dt(P == null ? void 0 : P.loader, (V = c == null ? void 0 : c.classNames) == null ? void 0 : V.loader, "sonner-loader"), "data-visible": Je === "loading" }, D.loading) : z ? M.createElement("div", { className: dt(P == null ? void 0 : P.loader, (te = c == null ? void 0 : c.classNames) == null ? void 0 : te.loader, "sonner-loader"), "data-visible": Je === "loading" }, z) : M.createElement(Fx, { className: dt(P == null ? void 0 : P.loader, (ie = c == null ? void 0 : c.classNames) == null ? void 0 : ie.loader), visible: Je === "loading" });
  }
  return M.createElement("li", { tabIndex: 0, ref: $n, className: dt(R, Vg, P == null ? void 0 : P.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[Je], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Je]), "data-sonner-toast": "", "data-rich-colors": (r = c.richColors) != null ? r : k, "data-styled": !(c.jsx || c.unstyled || b), "data-mounted": J, "data-promise": !!c.promise, "data-swiped": pl, "data-removed": Jt, "data-visible": Bg, "data-y-position": Qg, "data-x-position": Kg, "data-index": y, "data-front": Ug, "data-swiping": en, "data-dismissible": pr, "data-type": Je, "data-invert": Yg, "data-swipe-out": tn, "data-swipe-direction": he, "data-expanded": !!(E || N && J), style: { "--index": y, "--toasts-before": y, "--z-index": S.length - y, "--offset": "".concat(Jt ? hl : hr.current, "px"), "--initial-height": N ? "auto" : "".concat(fr, "px"), ...L, ...c.style }, onDragEnd: () => {
    dr(false), q(null), mr.current = null;
  }, onPointerDown: (V) => {
    gl || !pr || (Cc.current = /* @__PURE__ */ new Date(), uo(hr.current), V.target.setPointerCapture(V.pointerId), V.target.tagName !== "BUTTON" && (dr(true), mr.current = { x: V.clientX, y: V.clientY }));
  }, onPointerUp: () => {
    var V, te, ie, lt;
    if (tn || !pr) return;
    mr.current = null;
    let at = Number(((V = $n.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), rn = Number(((te = $n.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Un = (/* @__PURE__ */ new Date()).getTime() - ((ie = Cc.current) == null ? void 0 : ie.getTime()), ut = Y === "x" ? at : rn, on = Math.abs(ut) / Un;
    if (Math.abs(ut) >= rw || on > 0.11) {
      uo(hr.current), (lt = c.onDismiss) == null || lt.call(c, c), Ce(Y === "x" ? at > 0 ? "right" : "left" : rn > 0 ? "down" : "up"), nn(), gs(true), ys(false);
      return;
    }
    dr(false), q(null);
  }, onPointerMove: (V) => {
    var te, ie, lt, at;
    if (!mr.current || !pr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0) return;
    let rn = V.clientY - mr.current.y, Un = V.clientX - mr.current.x, ut = (ie = e.swipeDirections) != null ? ie : sw(Q);
    !Y && (Math.abs(Un) > 1 || Math.abs(rn) > 1) && q(Math.abs(Un) > Math.abs(rn) ? "x" : "y");
    let on = { x: 0, y: 0 };
    Y === "y" ? (ut.includes("top") || ut.includes("bottom")) && (ut.includes("top") && rn < 0 || ut.includes("bottom") && rn > 0) && (on.y = rn) : Y === "x" && (ut.includes("left") || ut.includes("right")) && (ut.includes("left") && Un < 0 || ut.includes("right") && Un > 0) && (on.x = Un), (Math.abs(on.x) > 0 || Math.abs(on.y) > 0) && ys(true), (lt = $n.current) == null || lt.style.setProperty("--swipe-amount-x", "".concat(on.x, "px")), (at = $n.current) == null || at.style.setProperty("--swipe-amount-y", "".concat(on.y, "px"));
  } }, Wg && !c.jsx ? M.createElement("button", { "aria-label": W, "data-disabled": gl, "data-close-button": true, onClick: gl || !pr ? () => {
  } : () => {
    var V;
    nn(), (V = c.onDismiss) == null || V.call(c, c);
  }, className: dt(P == null ? void 0 : P.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton) }, (s = D == null ? void 0 : D.close) != null ? s : Vx) : null, c.jsx || x.isValidElement(c.title) ? c.jsx ? c.jsx : typeof c.title == "function" ? c.title() : c.title : M.createElement(M.Fragment, null, Je || c.icon || c.promise ? M.createElement("div", { "data-icon": "", className: dt(P == null ? void 0 : P.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon) }, c.promise || c.type === "loading" && !c.icon ? c.icon || Gg() : null, c.type !== "loading" ? c.icon || (D == null ? void 0 : D[Je]) || Ix(Je) : null) : null, M.createElement("div", { "data-content": "", className: dt(P == null ? void 0 : P.content, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.content) }, M.createElement("div", { "data-title": "", className: dt(P == null ? void 0 : P.title, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.title) }, typeof c.title == "function" ? c.title() : c.title), c.description ? M.createElement("div", { "data-description": "", className: dt($, Hg, P == null ? void 0 : P.description, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.description) }, typeof c.description == "function" ? c.description() : c.description) : null), x.isValidElement(c.cancel) ? c.cancel : c.cancel && Fs(c.cancel) ? M.createElement("button", { "data-button": true, "data-cancel": true, style: c.cancelButtonStyle || A, onClick: (V) => {
    var te, ie;
    Fs(c.cancel) && pr && ((ie = (te = c.cancel).onClick) == null || ie.call(te, V), nn());
  }, className: dt(P == null ? void 0 : P.cancelButton, (f = c == null ? void 0 : c.classNames) == null ? void 0 : f.cancelButton) }, c.cancel.label) : null, x.isValidElement(c.action) ? c.action : c.action && Fs(c.action) ? M.createElement("button", { "data-button": true, "data-action": true, style: c.actionButtonStyle || U, onClick: (V) => {
    var te, ie;
    Fs(c.action) && ((ie = (te = c.action).onClick) == null || ie.call(te, V), !V.defaultPrevented && nn());
  }, className: dt(P == null ? void 0 : P.actionButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton) }, c.action.label) : null));
};
function tf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function lw(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let s = o === 1, i = s ? "--mobile-offset" : "--offset", l = s ? ew : Jx;
    function a(u) {
      ["top", "right", "bottom", "left"].forEach((f) => {
        n["".concat(i, "-").concat(f)] = typeof u == "number" ? "".concat(u, "px") : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      r[u] === void 0 ? n["".concat(i, "-").concat(u)] = l : n["".concat(i, "-").concat(u)] = typeof r[u] == "number" ? "".concat(r[u], "px") : r[u];
    }) : a(l);
  }), n;
}
var aw = x.forwardRef(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: s, closeButton: i, className: l, offset: a, mobileOffset: u, theme: f = "light", richColors: d, duration: g, style: c, visibleToasts: b = Zx, toastOptions: v, dir: w = tf(), gap: m = nw, loadingIcon: p, icons: y, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: E } = e, [C, k] = M.useState([]), j = M.useMemo(() => Array.from(new Set([r].concat(C.filter((B) => B.position).map((B) => B.position)))), [C, r]), [L, A] = M.useState([]), [U, R] = M.useState(false), [$, O] = M.useState(false), [Q, I] = M.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), z = M.useRef(null), N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), P = M.useRef(null), D = M.useRef(false), W = M.useCallback((B) => {
    k((Y) => {
      var q;
      return (q = Y.find((he) => he.id === B.id)) != null && q.delete || De.dismiss(B.id), Y.filter(({ id: he }) => he !== B.id);
    });
  }, []);
  return M.useEffect(() => De.subscribe((B) => {
    if (B.dismiss) {
      k((Y) => Y.map((q) => q.id === B.id ? { ...q, delete: true } : q));
      return;
    }
    setTimeout(() => {
      Qh.flushSync(() => {
        k((Y) => {
          let q = Y.findIndex((he) => he.id === B.id);
          return q !== -1 ? [...Y.slice(0, q), { ...Y[q], ...B }, ...Y.slice(q + 1)] : [B, ...Y];
        });
      });
    });
  }), []), M.useEffect(() => {
    if (f !== "system") {
      I(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? I("dark") : I("light")), typeof window > "u") return;
    let B = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      B.addEventListener("change", ({ matches: Y }) => {
        I(Y ? "dark" : "light");
      });
    } catch (e2) {
      B.addListener(({ matches: q }) => {
        try {
          I(q ? "dark" : "light");
        } catch (he) {
          console.error(he);
        }
      });
    }
  }, [f]), M.useEffect(() => {
    C.length <= 1 && R(false);
  }, [C]), M.useEffect(() => {
    let B = (Y) => {
      var q, he;
      o.every((Ce) => Y[Ce] || Y.code === Ce) && (R(true), (q = z.current) == null || q.focus()), Y.code === "Escape" && (document.activeElement === z.current || (he = z.current) != null && he.contains(document.activeElement)) && R(false);
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [o]), M.useEffect(() => {
    if (z.current) return () => {
      P.current && (P.current.focus({ preventScroll: true }), P.current = null, D.current = false);
    };
  }, [z.current]), M.createElement("section", { ref: t, "aria-label": "".concat(S, " ").concat(N), tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, j.map((B, Y) => {
    var q;
    let [he, Ce] = B.split("-");
    return C.length ? M.createElement("ol", { key: B, dir: w === "auto" ? tf() : w, tabIndex: -1, ref: z, className: l, "data-sonner-toaster": true, "data-theme": Q, "data-y-position": he, "data-lifted": U && C.length > 1 && !s, "data-x-position": Ce, style: { "--front-toast-height": "".concat(((q = L[0]) == null ? void 0 : q.height) || 0, "px"), "--width": "".concat(tw, "px"), "--gap": "".concat(m, "px"), ...c, ...lw(a, u) }, onBlur: (J) => {
      D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = false, P.current && (P.current.focus({ preventScroll: true }), P.current = null));
    }, onFocus: (J) => {
      J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = true, P.current = J.relatedTarget);
    }, onMouseEnter: () => R(true), onMouseMove: () => R(true), onMouseLeave: () => {
      $ || R(false);
    }, onDragEnd: () => R(false), onPointerDown: (J) => {
      J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || O(true);
    }, onPointerUp: () => O(false) }, C.filter((J) => !J.position && Y === 0 || J.position === B).map((J, cr) => {
      var Jt, zn;
      return M.createElement(iw, { key: J.id, icons: y, index: cr, toast: J, defaultRichColors: d, duration: (Jt = v == null ? void 0 : v.duration) != null ? Jt : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: b, closeButton: (zn = v == null ? void 0 : v.closeButton) != null ? zn : i, interacting: $, position: B, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: W, toasts: C.filter((en) => en.position == J.position), heights: L.filter((en) => en.position == J.position), setHeights: A, expandByDefault: s, gap: m, loadingIcon: p, expanded: U, pauseWhenPageIsHidden: E, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const uw = ({ ...e }) => {
  const { theme: t = "system" } = Lx();
  return h.jsx(aw, { theme: t, className: "toaster group", toastOptions: { classNames: { toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg", description: "group-[.toast]:text-muted-foreground", actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground" } }, ...e });
}, cw = 1, dw = 1e6;
let Wl = 0;
function fw() {
  return Wl = (Wl + 1) % Number.MAX_SAFE_INTEGER, Wl.toString();
}
const Ql = /* @__PURE__ */ new Map(), nf = (e) => {
  if (Ql.has(e)) return;
  const t = setTimeout(() => {
    Ql.delete(e), Lo({ type: "REMOVE_TOAST", toastId: e });
  }, dw);
  Ql.set(e, t);
}, pw = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, cw) };
    case "UPDATE_TOAST":
      return { ...e, toasts: e.toasts.map((n) => n.id === t.toast.id ? { ...n, ...t.toast } : n) };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? nf(n) : e.toasts.forEach((r) => {
        nf(r.id);
      }), { ...e, toasts: e.toasts.map((r) => r.id === n || n === void 0 ? { ...r, open: false } : r) };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
  }
}, oi = [];
let si = { toasts: [] };
function Lo(e) {
  si = pw(si, e), oi.forEach((t) => {
    t(si);
  });
}
function hw({ ...e }) {
  const t = fw(), n = (o) => Lo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }), r = () => Lo({ type: "DISMISS_TOAST", toastId: t });
  return Lo({ type: "ADD_TOAST", toast: { ...e, id: t, open: true, onOpenChange: (o) => {
    o || r();
  } } }), { id: t, dismiss: r, update: n };
}
function mw() {
  const [e, t] = x.useState(si);
  return x.useEffect(() => (oi.push(t), () => {
    const n = oi.indexOf(t);
    n > -1 && oi.splice(n, 1);
  }), [e]), { ...e, toast: hw, dismiss: (n) => Lo({ type: "DISMISS_TOAST", toastId: n }) };
}
function ye(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e == null || e(o), n === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function rf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function um(...e) {
  return (t) => {
    let n = false;
    const r = e.map((o) => {
      const s = rf(o, t);
      return !n && typeof s == "function" && (n = true), s;
    });
    if (n) return () => {
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        typeof s == "function" ? s() : rf(e[o], null);
      }
    };
  };
}
function St(...e) {
  return x.useCallback(um(...e), e);
}
function ol(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = x.createContext(i), a = n.length;
    n = [...n, i];
    const u = (d) => {
      var m;
      const { scope: g, children: c, ...b } = d, v = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[a]) || l, w = x.useMemo(() => b, Object.values(b));
      return h.jsx(v.Provider, { value: w, children: c });
    };
    u.displayName = s + "Provider";
    function f(d, g) {
      var v;
      const c = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[a]) || l, b = x.useContext(c);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error("`".concat(d, "` must be used within `").concat(s, "`"));
    }
    return [u, f];
  }
  const o = () => {
    const s = n.map((i) => x.createContext(i));
    return function(l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return x.useMemo(() => ({ ["__scope".concat(e)]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return o.scopeName = e, [r, gw(o, ...t)];
}
function gw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(s)["__scope".concat(u)];
        return { ...l, ...d };
      }, {});
      return x.useMemo(() => ({ ["__scope".concat(t.scopeName)]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Xa(e) {
  const t = yw(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, l = x.Children.toArray(s), a = l.find(xw);
    if (a) {
      const u = a.props.children, f = l.map((d) => d === a ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return h.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, f) : null });
    }
    return h.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = "".concat(e, ".Slot"), n;
}
function yw(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = bw(o), l = ww(s, o.props);
      return o.type !== x.Fragment && (l.ref = r ? um(r, i) : i), x.cloneElement(o, l);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = "".concat(e, ".SlotClone"), t;
}
var cm = /* @__PURE__ */ Symbol("radix.slottable");
function vw(e) {
  const t = ({ children: n }) => h.jsx(h.Fragment, { children: n });
  return t.displayName = "".concat(e, ".Slottable"), t.__radixId = cm, t;
}
function xw(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cm;
}
function ww(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
      const a = s(...l);
      return o(...l), a;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function bw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Sw(e) {
  const t = e + "CollectionProvider", [n, r] = ol(t), [o, s] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), i = (v) => {
    const { scope: w, children: m } = v, p = M.useRef(null), y = M.useRef(/* @__PURE__ */ new Map()).current;
    return h.jsx(o, { scope: w, itemMap: y, collectionRef: p, children: m });
  };
  i.displayName = t;
  const l = e + "CollectionSlot", a = Xa(l), u = M.forwardRef((v, w) => {
    const { scope: m, children: p } = v, y = s(l, m), S = St(w, y.collectionRef);
    return h.jsx(a, { ref: S, children: p });
  });
  u.displayName = l;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", g = Xa(f), c = M.forwardRef((v, w) => {
    const { scope: m, children: p, ...y } = v, S = M.useRef(null), E = St(w, S), C = s(f, m);
    return M.useEffect(() => (C.itemMap.set(S, { ref: S, ...y }), () => void C.itemMap.delete(S))), h.jsx(g, { [d]: "", ref: E, children: p });
  });
  c.displayName = f;
  function b(v) {
    const w = s(e + "CollectionConsumer", v);
    return M.useCallback(() => {
      const p = w.collectionRef.current;
      if (!p) return [];
      const y = Array.from(p.querySelectorAll("[".concat(d, "]")));
      return Array.from(w.itemMap.values()).sort((C, k) => y.indexOf(C.ref.current) - y.indexOf(k.ref.current));
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: c }, b, r];
}
var Ew = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], He = Ew.reduce((e, t) => {
  const n = Xa("Primitive.".concat(t)), r = x.forwardRef((o, s) => {
    const { asChild: i, ...l } = o, a = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), h.jsx(a, { ...l, ref: s });
  });
  return r.displayName = "Primitive.".concat(t), { ...e, [t]: r };
}, {});
function dm(e, t) {
  e && ds.flushSync(() => e.dispatchEvent(t));
}
function On(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Cw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: true }), () => t.removeEventListener("keydown", r, { capture: true });
  }, [n, t]);
}
var kw = "DismissableLayer", Za = "dismissableLayer.update", Nw = "dismissableLayer.pointerDownOutside", Tw = "dismissableLayer.focusOutside", of, fm = x.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), lc = x.forwardRef((e, t) => {
  var _a2;
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: l, ...a } = e, u = x.useContext(fm), [f, d] = x.useState(null), g = (_a2 = f == null ? void 0 : f.ownerDocument) != null ? _a2 : globalThis == null ? void 0 : globalThis.document, [, c] = x.useState({}), b = St(t, (k) => d(k)), v = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(w), p = f ? v.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = p >= m, E = jw((k) => {
    const j = k.target, L = [...u.branches].some((A) => A.contains(j));
    !S || L || (o == null || o(k), i == null || i(k), k.defaultPrevented || l == null || l());
  }, g), C = Rw((k) => {
    const j = k.target;
    [...u.branches].some((A) => A.contains(j)) || (s == null || s(k), i == null || i(k), k.defaultPrevented || l == null || l());
  }, g);
  return Cw((k) => {
    p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()));
  }, g), x.useEffect(() => {
    if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (of = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), sf(), () => {
      n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = of);
    };
  }, [f, g, n, u]), x.useEffect(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), sf());
  }, [f, u]), x.useEffect(() => {
    const k = () => c({});
    return document.addEventListener(Za, k), () => document.removeEventListener(Za, k);
  }, []), h.jsx(He.div, { ...a, ref: b, style: { pointerEvents: y ? S ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: ye(e.onFocusCapture, C.onFocusCapture), onBlurCapture: ye(e.onBlurCapture, C.onBlurCapture), onPointerDownCapture: ye(e.onPointerDownCapture, E.onPointerDownCapture) });
});
lc.displayName = kw;
var Pw = "DismissableLayerBranch", pm = x.forwardRef((e, t) => {
  const n = x.useContext(fm), r = x.useRef(null), o = St(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s) return n.branches.add(s), () => {
      n.branches.delete(s);
    };
  }, [n.branches]), h.jsx(He.div, { ...e, ref: o });
});
pm.displayName = Pw;
function jw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(false), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (l) => {
      if (l.target && !r.current) {
        let a = function() {
          hm(Nw, n, u, { discrete: true });
        };
        const u = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: true })) : a();
      } else t.removeEventListener("click", o.current);
      r.current = false;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), { onPointerDownCapture: () => r.current = true };
}
function Rw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(false);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && hm(Tw, n, { originalEvent: s }, { discrete: false });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), { onFocusCapture: () => r.current = true, onBlurCapture: () => r.current = false };
}
function sf() {
  const e = new CustomEvent(Za);
  document.dispatchEvent(e);
}
function hm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? dm(o, s) : o.dispatchEvent(s);
}
var _w = lc, Ow = pm, An = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Aw = "Portal", mm = x.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, s] = x.useState(false);
  An(() => s(true), []);
  const i = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return i ? Qh.createPortal(h.jsx(He.div, { ...r, ref: t }), i) : null;
});
mm.displayName = Aw;
function Mw(e, t) {
  return x.useReducer((n, r) => {
    var _a2;
    return (_a2 = t[n][r]) != null ? _a2 : n;
  }, e);
}
var ac = (e) => {
  const { present: t, children: n } = e, r = Lw(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = St(r.ref, Iw(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
ac.displayName = "Presence";
function Lw(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [l, a] = Mw(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return x.useEffect(() => {
    const u = zs(r.current);
    s.current = l === "mounted" ? u : "none";
  }, [l]), An(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const g = s.current, c = zs(u);
      e ? a("MOUNT") : c === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(f && g !== c ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), An(() => {
    var _a2;
    if (t) {
      let u;
      const f = (_a2 = t.ownerDocument.defaultView) != null ? _a2 : window, d = (c) => {
        const v = zs(r.current).includes(c.animationName);
        if (c.target === t && v && (a("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, g = (c) => {
        c.target === t && (s.current = zs(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else a("ANIMATION_END");
  }, [t, a]), { isPresent: ["mounted", "unmountSuspended"].includes(l), ref: x.useCallback((u) => {
    r.current = u ? getComputedStyle(u) : null, n(u);
  }, []) };
}
function zs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Iw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Dw = Vf[" useInsertionEffect ".trim().toString()] || An;
function Fw({ prop: e, defaultProp: t, onChange: n = () => {
}, caller: r }) {
  const [o, s, i] = zw({ defaultProp: t, onChange: n }), l = e !== void 0, a = l ? e : o;
  {
    const f = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = f.current;
      d !== l && console.warn("".concat(r, " is changing from ").concat(d ? "controlled" : "uncontrolled", " to ").concat(l ? "controlled" : "uncontrolled", ". Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.")), f.current = l;
    }, [l, r]);
  }
  const u = x.useCallback((f) => {
    var d;
    if (l) {
      const g = $w(f) ? f(e) : f;
      g !== e && ((d = i.current) == null || d.call(i, g));
    } else s(f);
  }, [l, e, s, i]);
  return [a, u];
}
function zw({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return Dw(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function $w(e) {
  return typeof e == "function";
}
var Uw = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), Bw = "VisuallyHidden", sl = x.forwardRef((e, t) => h.jsx(He.span, { ...e, ref: t, style: { ...Uw, ...e.style } }));
sl.displayName = Bw;
var Vw = sl, uc = "ToastProvider", [cc, Hw, Ww] = Sw("Toast"), [gm, wE] = ol("Toast", [Ww]), [Qw, il] = gm(uc), ym = (e) => {
  const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: s = 50, children: i } = e, [l, a] = x.useState(null), [u, f] = x.useState(0), d = x.useRef(false), g = x.useRef(false);
  return n.trim() || console.error("Invalid prop `label` supplied to `".concat(uc, "`. Expected non-empty `string`.")), h.jsx(cc.Provider, { scope: t, children: h.jsx(Qw, { scope: t, label: n, duration: r, swipeDirection: o, swipeThreshold: s, toastCount: u, viewport: l, onViewportChange: a, onToastAdd: x.useCallback(() => f((c) => c + 1), []), onToastRemove: x.useCallback(() => f((c) => c - 1), []), isFocusedToastEscapeKeyDownRef: d, isClosePausedRef: g, children: i }) });
};
ym.displayName = uc;
var vm = "ToastViewport", Kw = ["F8"], Ja = "toast.viewportPause", eu = "toast.viewportResume", xm = x.forwardRef((e, t) => {
  const { __scopeToast: n, hotkey: r = Kw, label: o = "Notifications ({hotkey})", ...s } = e, i = il(vm, n), l = Hw(n), a = x.useRef(null), u = x.useRef(null), f = x.useRef(null), d = x.useRef(null), g = St(t, d, i.onViewportChange), c = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = i.toastCount > 0;
  x.useEffect(() => {
    const w = (m) => {
      var y;
      r.length !== 0 && r.every((S) => m[S] || m.code === S) && ((y = d.current) == null || y.focus());
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [r]), x.useEffect(() => {
    const w = a.current, m = d.current;
    if (b && w && m) {
      const p = () => {
        if (!i.isClosePausedRef.current) {
          const C = new CustomEvent(Ja);
          m.dispatchEvent(C), i.isClosePausedRef.current = true;
        }
      }, y = () => {
        if (i.isClosePausedRef.current) {
          const C = new CustomEvent(eu);
          m.dispatchEvent(C), i.isClosePausedRef.current = false;
        }
      }, S = (C) => {
        !w.contains(C.relatedTarget) && y();
      }, E = () => {
        w.contains(document.activeElement) || y();
      };
      return w.addEventListener("focusin", p), w.addEventListener("focusout", S), w.addEventListener("pointermove", p), w.addEventListener("pointerleave", E), window.addEventListener("blur", p), window.addEventListener("focus", y), () => {
        w.removeEventListener("focusin", p), w.removeEventListener("focusout", S), w.removeEventListener("pointermove", p), w.removeEventListener("pointerleave", E), window.removeEventListener("blur", p), window.removeEventListener("focus", y);
      };
    }
  }, [b, i.isClosePausedRef]);
  const v = x.useCallback(({ tabbingDirection: w }) => {
    const p = l().map((y) => {
      const S = y.ref.current, E = [S, ...i1(S)];
      return w === "forwards" ? E : E.reverse();
    });
    return (w === "forwards" ? p.reverse() : p).flat();
  }, [l]);
  return x.useEffect(() => {
    const w = d.current;
    if (w) {
      const m = (p) => {
        var E, C, k;
        const y = p.altKey || p.ctrlKey || p.metaKey;
        if (p.key === "Tab" && !y) {
          const j = document.activeElement, L = p.shiftKey;
          if (p.target === w && L) {
            (E = u.current) == null || E.focus();
            return;
          }
          const R = v({ tabbingDirection: L ? "backwards" : "forwards" }), $ = R.findIndex((O) => O === j);
          Kl(R.slice($ + 1)) ? p.preventDefault() : L ? (C = u.current) == null || C.focus() : (k = f.current) == null || k.focus();
        }
      };
      return w.addEventListener("keydown", m), () => w.removeEventListener("keydown", m);
    }
  }, [l, v]), h.jsxs(Ow, { ref: a, role: "region", "aria-label": o.replace("{hotkey}", c), tabIndex: -1, style: { pointerEvents: b ? void 0 : "none" }, children: [b && h.jsx(tu, { ref: u, onFocusFromOutsideViewport: () => {
    const w = v({ tabbingDirection: "forwards" });
    Kl(w);
  } }), h.jsx(cc.Slot, { scope: n, children: h.jsx(He.ol, { tabIndex: -1, ...s, ref: g }) }), b && h.jsx(tu, { ref: f, onFocusFromOutsideViewport: () => {
    const w = v({ tabbingDirection: "backwards" });
    Kl(w);
  } })] });
});
xm.displayName = vm;
var wm = "ToastFocusProxy", tu = x.forwardRef((e, t) => {
  const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = il(wm, n);
  return h.jsx(sl, { "aria-hidden": true, tabIndex: 0, ...o, ref: t, style: { position: "fixed" }, onFocus: (i) => {
    var u;
    const l = i.relatedTarget;
    !((u = s.viewport) != null && u.contains(l)) && r();
  } });
});
tu.displayName = wm;
var ps = "Toast", Yw = "toast.swipeStart", Gw = "toast.swipeMove", qw = "toast.swipeCancel", Xw = "toast.swipeEnd", bm = x.forwardRef((e, t) => {
  const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e, [l, a] = Fw({ prop: r, defaultProp: o != null ? o : true, onChange: s, caller: ps });
  return h.jsx(ac, { present: n || l, children: h.jsx(e1, { open: l, ...i, ref: t, onClose: () => a(false), onPause: On(e.onPause), onResume: On(e.onResume), onSwipeStart: ye(e.onSwipeStart, (u) => {
    u.currentTarget.setAttribute("data-swipe", "start");
  }), onSwipeMove: ye(e.onSwipeMove, (u) => {
    const { x: f, y: d } = u.detail.delta;
    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", "".concat(f, "px")), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", "".concat(d, "px"));
  }), onSwipeCancel: ye(e.onSwipeCancel, (u) => {
    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
  }), onSwipeEnd: ye(e.onSwipeEnd, (u) => {
    const { x: f, y: d } = u.detail.delta;
    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", "".concat(f, "px")), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", "".concat(d, "px")), a(false);
  }) }) });
});
bm.displayName = ps;
var [Zw, Jw] = gm(ps, { onClose() {
} }), e1 = x.forwardRef((e, t) => {
  const { __scopeToast: n, type: r = "foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: f, onSwipeMove: d, onSwipeCancel: g, onSwipeEnd: c, ...b } = e, v = il(ps, n), [w, m] = x.useState(null), p = St(t, (O) => m(O)), y = x.useRef(null), S = x.useRef(null), E = o || v.duration, C = x.useRef(0), k = x.useRef(E), j = x.useRef(0), { onToastAdd: L, onToastRemove: A } = v, U = On(() => {
    var Q;
    (w == null ? void 0 : w.contains(document.activeElement)) && ((Q = v.viewport) == null || Q.focus()), i();
  }), R = x.useCallback((O) => {
    !O || O === 1 / 0 || (window.clearTimeout(j.current), C.current = (/* @__PURE__ */ new Date()).getTime(), j.current = window.setTimeout(U, O));
  }, [U]);
  x.useEffect(() => {
    const O = v.viewport;
    if (O) {
      const Q = () => {
        R(k.current), u == null || u();
      }, I = () => {
        const z = (/* @__PURE__ */ new Date()).getTime() - C.current;
        k.current = k.current - z, window.clearTimeout(j.current), a == null || a();
      };
      return O.addEventListener(Ja, I), O.addEventListener(eu, Q), () => {
        O.removeEventListener(Ja, I), O.removeEventListener(eu, Q);
      };
    }
  }, [v.viewport, E, a, u, R]), x.useEffect(() => {
    s && !v.isClosePausedRef.current && R(E);
  }, [s, E, v.isClosePausedRef, R]), x.useEffect(() => (L(), () => A()), [L, A]);
  const $ = x.useMemo(() => w ? Pm(w) : null, [w]);
  return v.viewport ? h.jsxs(h.Fragment, { children: [$ && h.jsx(t1, { __scopeToast: n, role: "status", "aria-live": r === "foreground" ? "assertive" : "polite", "aria-atomic": true, children: $ }), h.jsx(Zw, { scope: n, onClose: U, children: ds.createPortal(h.jsx(cc.ItemSlot, { scope: n, children: h.jsx(_w, { asChild: true, onEscapeKeyDown: ye(l, () => {
    v.isFocusedToastEscapeKeyDownRef.current || U(), v.isFocusedToastEscapeKeyDownRef.current = false;
  }), children: h.jsx(He.li, { role: "status", "aria-live": "off", "aria-atomic": true, tabIndex: 0, "data-state": s ? "open" : "closed", "data-swipe-direction": v.swipeDirection, ...b, ref: p, style: { userSelect: "none", touchAction: "none", ...e.style }, onKeyDown: ye(e.onKeyDown, (O) => {
    O.key === "Escape" && (l == null || l(O.nativeEvent), O.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = true, U()));
  }), onPointerDown: ye(e.onPointerDown, (O) => {
    O.button === 0 && (y.current = { x: O.clientX, y: O.clientY });
  }), onPointerMove: ye(e.onPointerMove, (O) => {
    if (!y.current) return;
    const Q = O.clientX - y.current.x, I = O.clientY - y.current.y, z = !!S.current, N = ["left", "right"].includes(v.swipeDirection), P = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, D = N ? P(0, Q) : 0, W = N ? 0 : P(0, I), B = O.pointerType === "touch" ? 10 : 2, Y = { x: D, y: W }, q = { originalEvent: O, delta: Y };
    z ? (S.current = Y, $s(Gw, d, q, { discrete: false })) : lf(Y, v.swipeDirection, B) ? (S.current = Y, $s(Yw, f, q, { discrete: false }), O.target.setPointerCapture(O.pointerId)) : (Math.abs(Q) > B || Math.abs(I) > B) && (y.current = null);
  }), onPointerUp: ye(e.onPointerUp, (O) => {
    const Q = S.current, I = O.target;
    if (I.hasPointerCapture(O.pointerId) && I.releasePointerCapture(O.pointerId), S.current = null, y.current = null, Q) {
      const z = O.currentTarget, N = { originalEvent: O, delta: Q };
      lf(Q, v.swipeDirection, v.swipeThreshold) ? $s(Xw, c, N, { discrete: true }) : $s(qw, g, N, { discrete: true }), z.addEventListener("click", (P) => P.preventDefault(), { once: true });
    }
  }) }) }) }), v.viewport) })] }) : null;
}), t1 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = il(ps, t), [s, i] = x.useState(false), [l, a] = x.useState(false);
  return o1(() => i(true)), x.useEffect(() => {
    const u = window.setTimeout(() => a(true), 1e3);
    return () => window.clearTimeout(u);
  }, []), l ? null : h.jsx(mm, { asChild: true, children: h.jsx(sl, { ...r, children: s && h.jsxs(h.Fragment, { children: [o.label, " ", n] }) }) });
}, n1 = "ToastTitle", Sm = x.forwardRef((e, t) => {
  const { __scopeToast: n, ...r } = e;
  return h.jsx(He.div, { ...r, ref: t });
});
Sm.displayName = n1;
var r1 = "ToastDescription", Em = x.forwardRef((e, t) => {
  const { __scopeToast: n, ...r } = e;
  return h.jsx(He.div, { ...r, ref: t });
});
Em.displayName = r1;
var Cm = "ToastAction", km = x.forwardRef((e, t) => {
  const { altText: n, ...r } = e;
  return n.trim() ? h.jsx(Tm, { altText: n, asChild: true, children: h.jsx(dc, { ...r, ref: t }) }) : (console.error("Invalid prop `altText` supplied to `".concat(Cm, "`. Expected non-empty `string`.")), null);
});
km.displayName = Cm;
var Nm = "ToastClose", dc = x.forwardRef((e, t) => {
  const { __scopeToast: n, ...r } = e, o = Jw(Nm, n);
  return h.jsx(Tm, { asChild: true, children: h.jsx(He.button, { type: "button", ...r, ref: t, onClick: ye(e.onClick, o.onClose) }) });
});
dc.displayName = Nm;
var Tm = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return h.jsx(He.div, { "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": r || void 0, ...o, ref: t });
});
function Pm(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), s1(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o) if (s) {
        const i = r.dataset.radixToastAnnounceAlt;
        i && t.push(i);
      } else t.push(...Pm(r));
    }
  }), t;
}
function $s(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: true, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? dm(o, s) : o.dispatchEvent(s);
}
var lf = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function o1(e = () => {
}) {
  const t = On(e);
  An(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function s1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function i1(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const o = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Kl(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? true : (n.focus(), document.activeElement !== t));
}
var l1 = ym, jm = xm, Rm = bm, _m = Sm, Om = Em, Am = km, Mm = dc;
function Lm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Lm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Im() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Lm(e)) && (r && (r += " "), r += t);
  return r;
}
const af = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, uf = Im, a1 = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return uf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const f = n == null ? void 0 : n[u], d = s == null ? void 0 : s[u];
    if (f === null) return null;
    const g = af(f) || af(d);
    return o[u][g];
  }), l = n && Object.entries(n).reduce((u, f) => {
    let [d, g] = f;
    return g === void 0 || (u[d] = g), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: d, className: g, ...c } = f;
    return Object.entries(c).every((b) => {
      let [v, w] = b;
      return Array.isArray(w) ? w.includes({ ...s, ...l }[v]) : { ...s, ...l }[v] === w;
    }) ? [...u, d, g] : u;
  }, []);
  return uf(e, i, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const u1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var c1 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const d1 = x.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: s, iconNode: i, ...l }, a) => x.createElement("svg", { ref: a, ...c1, width: t, height: t, stroke: e, strokeWidth: r ? Number(n) * 24 / Number(t) : n, className: Dm("lucide", o), ...l }, [...i.map(([u, f]) => x.createElement(u, f)), ...Array.isArray(s) ? s : [s]]));
/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const f1 = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, s) => x.createElement(d1, { ref: s, iconNode: t, className: Dm("lucide-".concat(u1(e)), r), ...o }));
  return n.displayName = "".concat(e), n;
};
/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p1 = f1("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), fc = "-", h1 = (e) => {
  const t = g1(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  return { getClassGroupId: (i) => {
    const l = i.split(fc);
    return l[0] === "" && l.length !== 1 && l.shift(), Fm(l, t) || m1(i);
  }, getConflictingClassGroupIds: (i, l) => {
    const a = n[i] || [];
    return l && r[i] ? [...a, ...r[i]] : a;
  } };
}, Fm = (e, t) => {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Fm(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(fc);
  return (i = t.validators.find(({ validator: l }) => l(s))) == null ? void 0 : i.classGroupId;
}, cf = /^\[(.+)\]$/, m1 = (e) => {
  if (cf.test(e)) {
    const t = cf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}, g1 = (e) => {
  const { theme: t, prefix: n } = e, r = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
  return v1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    nu(i, r, s, t);
  }), r;
}, nu = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : df(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (y1(o)) {
        nu(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      nu(i, df(t, s), n, r);
    });
  });
}, df = (e, t) => {
  let n = e;
  return t.split(fc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), n = n.nextPart.get(r);
  }), n;
}, y1 = (e) => e.isThemeGetter, v1 = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, l]) => [t + i, l])) : s);
  return [n, o];
}) : e, x1 = (e) => {
  if (e < 1) return { get: () => {
  }, set: () => {
  } };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return { get(s) {
    let i = n.get(s);
    if (i !== void 0) return i;
    if ((i = r.get(s)) !== void 0) return o(s, i), i;
  }, set(s, i) {
    n.has(s) ? n.set(s, i) : o(s, i);
  } };
}, zm = "!", w1 = (e) => {
  const { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, o = t[0], s = t.length, i = (l) => {
    const a = [];
    let u = 0, f = 0, d;
    for (let w = 0; w < l.length; w++) {
      let m = l[w];
      if (u === 0) {
        if (m === o && (r || l.slice(w, w + s) === t)) {
          a.push(l.slice(f, w)), f = w + s;
          continue;
        }
        if (m === "/") {
          d = w;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    const g = a.length === 0 ? l : l.substring(f), c = g.startsWith(zm), b = c ? g.substring(1) : g, v = d && d > f ? d - f : void 0;
    return { modifiers: a, hasImportantModifier: c, baseClassName: b, maybePostfixModifierPosition: v };
  };
  return n ? (l) => n({ className: l, parseClassName: i }) : i;
}, b1 = (e) => {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, S1 = (e) => ({ cache: x1(e.cacheSize), parseClassName: w1(e), ...h1(e) }), E1 = /\s+/, C1 = (e, t) => {
  const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t, s = [], i = e.trim().split(E1);
  let l = "";
  for (let a = i.length - 1; a >= 0; a -= 1) {
    const u = i[a], { modifiers: f, hasImportantModifier: d, baseClassName: g, maybePostfixModifierPosition: c } = n(u);
    let b = !!c, v = r(b ? g.substring(0, c) : g);
    if (!v) {
      if (!b) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = r(g), !v) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = false;
    }
    const w = b1(f).join(":"), m = d ? w + zm : w, p = m + v;
    if (s.includes(p)) continue;
    s.push(p);
    const y = o(v, b);
    for (let S = 0; S < y.length; ++S) {
      const E = y[S];
      s.push(m + E);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function k1() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = $m(t)) && (r && (r += " "), r += n);
  return r;
}
const $m = (e) => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = $m(e[r])) && (n && (n += " "), n += t);
  return n;
};
function N1(e, ...t) {
  let n, r, o, s = i;
  function i(a) {
    const u = t.reduce((f, d) => d(f), e());
    return n = S1(u), r = n.cache.get, o = n.cache.set, s = l, l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const f = C1(a, n);
    return o(a, f), f;
  }
  return function() {
    return s(k1.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = true, t;
}, Um = /^\[(?:([a-z-]+):)?(.+)\]$/i, T1 = /^\d+\/\d+$/, P1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), j1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, R1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, O1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, A1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Dt = (e) => Dr(e) || P1.has(e) || T1.test(e), ln = (e) => so(e, "length", U1), Dr = (e) => !!e && !Number.isNaN(Number(e)), Yl = (e) => so(e, "number", Dr), wo = (e) => !!e && Number.isInteger(Number(e)), M1 = (e) => e.endsWith("%") && Dr(e.slice(0, -1)), K = (e) => Um.test(e), an = (e) => j1.test(e), L1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), I1 = (e) => so(e, L1, Bm), D1 = (e) => so(e, "position", Bm), F1 = /* @__PURE__ */ new Set(["image", "url"]), z1 = (e) => so(e, F1, V1), $1 = (e) => so(e, "", B1), bo = () => true, so = (e, t, n) => {
  const r = Um.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : false;
}, U1 = (e) => R1.test(e) && !_1.test(e), Bm = () => false, B1 = (e) => O1.test(e), V1 = (e) => A1.test(e), H1 = () => {
  const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"), s = re("borderRadius"), i = re("borderSpacing"), l = re("borderWidth"), a = re("contrast"), u = re("grayscale"), f = re("hueRotate"), d = re("invert"), g = re("gap"), c = re("gradientColorStops"), b = re("gradientColorStopPositions"), v = re("inset"), w = re("margin"), m = re("opacity"), p = re("padding"), y = re("saturate"), S = re("scale"), E = re("sepia"), C = re("skew"), k = re("space"), j = re("translate"), L = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", K, t], R = () => [K, t], $ = () => ["", Dt, ln], O = () => ["auto", Dr, K], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", K], D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Dr, K];
  return { cacheSize: 500, separator: ":", theme: { colors: [bo], spacing: [Dt, ln], blur: ["none", "", an, K], brightness: W(), borderColor: [e], borderRadius: ["none", "", "full", an, K], borderSpacing: R(), borderWidth: $(), contrast: W(), grayscale: P(), hueRotate: W(), invert: P(), gap: R(), gradientColorStops: [e], gradientColorStopPositions: [M1, ln], inset: U(), margin: U(), opacity: W(), padding: R(), saturate: W(), scale: W(), sepia: P(), skew: W(), space: R(), translate: R() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", K] }], container: ["container"], columns: [{ columns: [an] }], "break-after": [{ "break-after": D() }], "break-before": [{ "break-before": D() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...Q(), K] }], overflow: [{ overflow: A() }], "overflow-x": [{ "overflow-x": A() }], "overflow-y": [{ "overflow-y": A() }], overscroll: [{ overscroll: L() }], "overscroll-x": [{ "overscroll-x": L() }], "overscroll-y": [{ "overscroll-y": L() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [v] }], "inset-x": [{ "inset-x": [v] }], "inset-y": [{ "inset-y": [v] }], start: [{ start: [v] }], end: [{ end: [v] }], top: [{ top: [v] }], right: [{ right: [v] }], bottom: [{ bottom: [v] }], left: [{ left: [v] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", wo, K] }], basis: [{ basis: U() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", K] }], grow: [{ grow: P() }], shrink: [{ shrink: P() }], order: [{ order: ["first", "last", "none", wo, K] }], "grid-cols": [{ "grid-cols": [bo] }], "col-start-end": [{ col: ["auto", { span: ["full", wo, K] }, K] }], "col-start": [{ "col-start": O() }], "col-end": [{ "col-end": O() }], "grid-rows": [{ "grid-rows": [bo] }], "row-start-end": [{ row: ["auto", { span: [wo, K] }, K] }], "row-start": [{ "row-start": O() }], "row-end": [{ "row-end": O() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }], gap: [{ gap: [g] }], "gap-x": [{ "gap-x": [g] }], "gap-y": [{ "gap-y": [g] }], "justify-content": [{ justify: ["normal", ...N()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...N(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...N(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [p] }], px: [{ px: [p] }], py: [{ py: [p] }], ps: [{ ps: [p] }], pe: [{ pe: [p] }], pt: [{ pt: [p] }], pr: [{ pr: [p] }], pb: [{ pb: [p] }], pl: [{ pl: [p] }], m: [{ m: [w] }], mx: [{ mx: [w] }], my: [{ my: [w] }], ms: [{ ms: [w] }], me: [{ me: [w] }], mt: [{ mt: [w] }], mr: [{ mr: [w] }], mb: [{ mb: [w] }], ml: [{ ml: [w] }], "space-x": [{ "space-x": [k] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [k] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }], "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", { screen: [an] }, an] }], h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [K, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", an, ln] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Yl] }], "font-family": [{ font: [bo] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K] }], "line-clamp": [{ "line-clamp": ["none", Dr, Yl] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, K] }], "list-image": [{ "list-image": ["none", K] }], "list-style-type": [{ list: ["none", "disc", "decimal", K] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...I(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", Dt, ln] }], "underline-offset": [{ "underline-offset": ["auto", Dt, K] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: R() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", K] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...Q(), D1] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", I1] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, z1] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [b] }], "gradient-via-pos": [{ via: [b] }], "gradient-to-pos": [{ to: [b] }], "gradient-from": [{ from: [c] }], "gradient-via": [{ via: [c] }], "gradient-to": [{ to: [c] }], rounded: [{ rounded: [s] }], "rounded-s": [{ "rounded-s": [s] }], "rounded-e": [{ "rounded-e": [s] }], "rounded-t": [{ "rounded-t": [s] }], "rounded-r": [{ "rounded-r": [s] }], "rounded-b": [{ "rounded-b": [s] }], "rounded-l": [{ "rounded-l": [s] }], "rounded-ss": [{ "rounded-ss": [s] }], "rounded-se": [{ "rounded-se": [s] }], "rounded-ee": [{ "rounded-ee": [s] }], "rounded-es": [{ "rounded-es": [s] }], "rounded-tl": [{ "rounded-tl": [s] }], "rounded-tr": [{ "rounded-tr": [s] }], "rounded-br": [{ "rounded-br": [s] }], "rounded-bl": [{ "rounded-bl": [s] }], "border-w": [{ border: [l] }], "border-w-x": [{ "border-x": [l] }], "border-w-y": [{ "border-y": [l] }], "border-w-s": [{ "border-s": [l] }], "border-w-e": [{ "border-e": [l] }], "border-w-t": [{ "border-t": [l] }], "border-w-r": [{ "border-r": [l] }], "border-w-b": [{ "border-b": [l] }], "border-w-l": [{ "border-l": [l] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...I(), "hidden"] }], "divide-x": [{ "divide-x": [l] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: I() }], "border-color": [{ border: [o] }], "border-color-x": [{ "border-x": [o] }], "border-color-y": [{ "border-y": [o] }], "border-color-s": [{ "border-s": [o] }], "border-color-e": [{ "border-e": [o] }], "border-color-t": [{ "border-t": [o] }], "border-color-r": [{ "border-r": [o] }], "border-color-b": [{ "border-b": [o] }], "border-color-l": [{ "border-l": [o] }], "divide-color": [{ divide: [o] }], "outline-style": [{ outline: ["", ...I()] }], "outline-offset": [{ "outline-offset": [Dt, K] }], "outline-w": [{ outline: [Dt, ln] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: $() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [Dt, ln] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", an, $1] }], "shadow-color": [{ shadow: [bo] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...z(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": z() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [n] }], brightness: [{ brightness: [r] }], contrast: [{ contrast: [a] }], "drop-shadow": [{ "drop-shadow": ["", "none", an, K] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [f] }], invert: [{ invert: [d] }], saturate: [{ saturate: [y] }], sepia: [{ sepia: [E] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [n] }], "backdrop-brightness": [{ "backdrop-brightness": [r] }], "backdrop-contrast": [{ "backdrop-contrast": [a] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }], "backdrop-invert": [{ "backdrop-invert": [d] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [y] }], "backdrop-sepia": [{ "backdrop-sepia": [E] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [i] }], "border-spacing-x": [{ "border-spacing-x": [i] }], "border-spacing-y": [{ "border-spacing-y": [i] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K] }], duration: [{ duration: W() }], ease: [{ ease: ["linear", "in", "out", "in-out", K] }], delay: [{ delay: W() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [S] }], "scale-x": [{ "scale-x": [S] }], "scale-y": [{ "scale-y": [S] }], rotate: [{ rotate: [wo, K] }], "translate-x": [{ "translate-x": [j] }], "translate-y": [{ "translate-y": [j] }], "skew-x": [{ "skew-x": [C] }], "skew-y": [{ "skew-y": [C] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": R() }], "scroll-mx": [{ "scroll-mx": R() }], "scroll-my": [{ "scroll-my": R() }], "scroll-ms": [{ "scroll-ms": R() }], "scroll-me": [{ "scroll-me": R() }], "scroll-mt": [{ "scroll-mt": R() }], "scroll-mr": [{ "scroll-mr": R() }], "scroll-mb": [{ "scroll-mb": R() }], "scroll-ml": [{ "scroll-ml": R() }], "scroll-p": [{ "scroll-p": R() }], "scroll-px": [{ "scroll-px": R() }], "scroll-py": [{ "scroll-py": R() }], "scroll-ps": [{ "scroll-ps": R() }], "scroll-pe": [{ "scroll-pe": R() }], "scroll-pt": [{ "scroll-pt": R() }], "scroll-pr": [{ "scroll-pr": R() }], "scroll-pb": [{ "scroll-pb": R() }], "scroll-pl": [{ "scroll-pl": R() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", K] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [Dt, ln, Yl] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}, W1 = N1(H1);
function ur(...e) {
  return W1(Im(e));
}
const Q1 = l1, Vm = x.forwardRef(({ className: e, ...t }, n) => h.jsx(jm, { ref: n, className: ur("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e), ...t }));
Vm.displayName = jm.displayName;
const K1 = a1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", { variants: { variant: { default: "border bg-background text-foreground", destructive: "destructive group border-destructive bg-destructive text-destructive-foreground" } }, defaultVariants: { variant: "default" } }), Hm = x.forwardRef(({ className: e, variant: t, ...n }, r) => h.jsx(Rm, { ref: r, className: ur(K1({ variant: t }), e), ...n }));
Hm.displayName = Rm.displayName;
const Y1 = x.forwardRef(({ className: e, ...t }, n) => h.jsx(Am, { ref: n, className: ur("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e), ...t }));
Y1.displayName = Am.displayName;
const Wm = x.forwardRef(({ className: e, ...t }, n) => h.jsx(Mm, { ref: n, className: ur("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e), "toast-close": "", ...t, children: h.jsx(p1, { className: "h-4 w-4" }) }));
Wm.displayName = Mm.displayName;
const Qm = x.forwardRef(({ className: e, ...t }, n) => h.jsx(_m, { ref: n, className: ur("text-sm font-semibold", e), ...t }));
Qm.displayName = _m.displayName;
const Km = x.forwardRef(({ className: e, ...t }, n) => h.jsx(Om, { ref: n, className: ur("text-sm opacity-90", e), ...t }));
Km.displayName = Om.displayName;
function G1() {
  const { toasts: e } = mw();
  return h.jsxs(Q1, { children: [e.map(function({ id: t, title: n, description: r, action: o, ...s }) {
    return h.jsxs(Hm, { ...s, children: [h.jsxs("div", { className: "grid gap-1", children: [n && h.jsx(Qm, { children: n }), r && h.jsx(Km, { children: r })] }), o, h.jsx(Wm, {})] }, t);
  }), h.jsx(Vm, {})] });
}
const q1 = ["top", "right", "bottom", "left"], Mn = Math.min, Qe = Math.max, Mi = Math.round, Us = Math.floor, Mt = (e) => ({ x: e, y: e }), X1 = { left: "right", right: "left", bottom: "top", top: "bottom" }, Z1 = { start: "end", end: "start" };
function ru(e, t, n) {
  return Qe(e, Mn(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function io(e) {
  return e.split("-")[1];
}
function pc(e) {
  return e === "x" ? "y" : "x";
}
function hc(e) {
  return e === "y" ? "height" : "width";
}
const J1 = /* @__PURE__ */ new Set(["top", "bottom"]);
function _t(e) {
  return J1.has(Xt(e)) ? "y" : "x";
}
function mc(e) {
  return pc(_t(e));
}
function eb(e, t, n) {
  n === void 0 && (n = false);
  const r = io(e), o = mc(e), s = hc(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Li(i)), [i, Li(i)];
}
function tb(e) {
  const t = Li(e);
  return [ou(e), t, ou(t)];
}
function ou(e) {
  return e.replace(/start|end/g, (t) => Z1[t]);
}
const ff = ["left", "right"], pf = ["right", "left"], nb = ["top", "bottom"], rb = ["bottom", "top"];
function ob(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? pf : ff : t ? ff : pf;
    case "left":
    case "right":
      return t ? nb : rb;
    default:
      return [];
  }
}
function sb(e, t, n, r) {
  const o = io(e);
  let s = ob(Xt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ou)))), s;
}
function Li(e) {
  return e.replace(/left|right|bottom|top/g, (t) => X1[t]);
}
function ib(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ym(e) {
  return typeof e != "number" ? ib(e) : { top: e, right: e, bottom: e, left: e };
}
function Ii(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function hf(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = _t(t), i = mc(t), l = hc(i), a = Xt(t), u = s === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[l] / 2 - o[l] / 2;
  let c;
  switch (a) {
    case "top":
      c = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      c = { x: f, y: r.y + r.height };
      break;
    case "right":
      c = { x: r.x + r.width, y: d };
      break;
    case "left":
      c = { x: r.x - o.width, y: d };
      break;
    default:
      c = { x: r.x, y: r.y };
  }
  switch (io(t)) {
    case "start":
      c[i] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      c[i] += g * (n && u ? -1 : 1);
      break;
  }
  return c;
}
const lb = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n, l = s.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }), { x: f, y: d } = hf(u, r, a), g = r, c = {}, b = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: m } = l[v], { x: p, y, data: S, reset: E } = await m({ x: f, y: d, initialPlacement: r, placement: g, strategy: o, middlewareData: c, rects: u, platform: i, elements: { reference: e, floating: t } });
    f = p != null ? p : f, d = y != null ? y : d, c = { ...c, [w]: { ...c[w], ...S } }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === true ? await i.getElementRects({ reference: e, floating: t, strategy: o }) : E.rects), { x: f, y: d } = hf(u, g, a)), v = -1);
  }
  return { x: f, y: d, placement: g, strategy: o, middlewareData: c };
};
async function ts(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: g = false, padding: c = 0 } = qt(t, e), b = Ym(c), w = l[g ? d === "floating" ? "reference" : "floating" : d], m = Ii(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: u, rootBoundary: f, strategy: a })), p = d === "floating" ? { x: r, y: o, width: i.floating.width, height: i.floating.height } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, E = Ii(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: p, offsetParent: y, strategy: a }) : p);
  return { top: (m.top - E.top + b.top) / S.y, bottom: (E.bottom - m.bottom + b.bottom) / S.y, left: (m.left - E.left + b.left) / S.x, right: (E.right - m.right + b.right) / S.x };
}
const ab = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: r, placement: o, rects: s, platform: i, elements: l, middlewareData: a } = t, { element: u, padding: f = 0 } = qt(e, t) || {};
  if (u == null) return {};
  const d = Ym(f), g = { x: n, y: r }, c = mc(o), b = hc(c), v = await i.getDimensions(u), w = c === "y", m = w ? "top" : "left", p = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", S = s.reference[b] + s.reference[c] - g[c] - s.floating[b], E = g[c] - s.reference[c], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
  let k = C ? C[y] : 0;
  (!k || !await (i.isElement == null ? void 0 : i.isElement(C))) && (k = l.floating[y] || s.floating[b]);
  const j = S / 2 - E / 2, L = k / 2 - v[b] / 2 - 1, A = Mn(d[m], L), U = Mn(d[p], L), R = A, $ = k - v[b] - U, O = k / 2 - v[b] / 2 + j, Q = ru(R, O, $), I = !a.arrow && io(o) != null && O !== Q && s.reference[b] / 2 - (O < R ? A : U) - v[b] / 2 < 0, z = I ? O < R ? O - R : O - $ : 0;
  return { [c]: g[c] + z, data: { [c]: Q, centerOffset: O - Q - z, ...I && { alignmentOffset: z } }, reset: I };
} }), ub = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, r;
    const { placement: o, middlewareData: s, rects: i, initialPlacement: l, platform: a, elements: u } = t, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: g, fallbackStrategy: c = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: v = true, ...w } = qt(e, t);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const m = Xt(o), p = _t(l), y = Xt(l) === l, S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), E = g || (y || !v ? [Li(l)] : tb(l)), C = b !== "none";
    !g && C && E.push(...sb(l, v, b, S));
    const k = [l, ...E], j = await ts(t, w), L = [];
    let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
    if (f && L.push(j[m]), d) {
      const O = eb(o, i, S);
      L.push(j[O[0]], j[O[1]]);
    }
    if (A = [...A, { placement: o, overflows: L }], !L.every((O) => O <= 0)) {
      var U, R;
      const O = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, Q = k[O];
      if (Q && (!(d === "alignment" ? p !== _t(Q) : false) || A.every((N) => N.overflows[0] > 0 && _t(N.placement) === p))) return { data: { index: O, overflows: A }, reset: { placement: Q } };
      let I = (R = A.filter((z) => z.overflows[0] <= 0).sort((z, N) => z.overflows[1] - N.overflows[1])[0]) == null ? void 0 : R.placement;
      if (!I) switch (c) {
        case "bestFit": {
          var $;
          const z = ($ = A.filter((N) => {
            if (C) {
              const P = _t(N.placement);
              return P === p || P === "y";
            }
            return true;
          }).map((N) => [N.placement, N.overflows.filter((P) => P > 0).reduce((P, D) => P + D, 0)]).sort((N, P) => N[1] - P[1])[0]) == null ? void 0 : $[0];
          z && (I = z);
          break;
        }
        case "initialPlacement":
          I = l;
          break;
      }
      if (o !== I) return { reset: { placement: I } };
    }
    return {};
  } };
};
function mf(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function gf(e) {
  return q1.some((t) => e[t] >= 0);
}
const cb = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: r = "referenceHidden", ...o } = qt(e, t);
    switch (r) {
      case "referenceHidden": {
        const s = await ts(t, { ...o, elementContext: "reference" }), i = mf(s, n.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: gf(i) } };
      }
      case "escaped": {
        const s = await ts(t, { ...o, altBoundary: true }), i = mf(s, n.floating);
        return { data: { escapedOffsets: i, escaped: gf(i) } };
      }
      default:
        return {};
    }
  } };
}, Gm = /* @__PURE__ */ new Set(["left", "top"]);
async function db(e, t) {
  const { placement: n, platform: r, elements: o } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Xt(n), l = io(n), a = _t(n) === "y", u = Gm.has(i) ? -1 : 1, f = s && a ? -1 : 1, d = qt(t, e);
  let { mainAxis: g, crossAxis: c, alignmentAxis: b } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return l && typeof b == "number" && (c = l === "end" ? b * -1 : b), a ? { x: c * f, y: g * u } : { x: g * u, y: c * f };
}
const fb = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, r;
    const { x: o, y: s, placement: i, middlewareData: l } = t, a = await db(t, e);
    return i === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
  } };
}, pb = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: o } = t, { mainAxis: s = true, crossAxis: i = false, limiter: l = { fn: (w) => {
      let { x: m, y: p } = w;
      return { x: m, y: p };
    } }, ...a } = qt(e, t), u = { x: n, y: r }, f = await ts(t, a), d = _t(Xt(o)), g = pc(d);
    let c = u[g], b = u[d];
    if (s) {
      const w = g === "y" ? "top" : "left", m = g === "y" ? "bottom" : "right", p = c + f[w], y = c - f[m];
      c = ru(p, c, y);
    }
    if (i) {
      const w = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", p = b + f[w], y = b - f[m];
      b = ru(p, b, y);
    }
    const v = l.fn({ ...t, [g]: c, [d]: b });
    return { ...v, data: { x: v.x - n, y: v.y - r, enabled: { [g]: s, [d]: i } } };
  } };
}, hb = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t, { offset: l = 0, mainAxis: a = true, crossAxis: u = true } = qt(e, t), f = { x: n, y: r }, d = _t(o), g = pc(d);
    let c = f[g], b = f[d];
    const v = qt(l, t), w = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
    if (a) {
      const y = g === "y" ? "height" : "width", S = s.reference[g] - s.floating[y] + w.mainAxis, E = s.reference[g] + s.reference[y] - w.mainAxis;
      c < S ? c = S : c > E && (c = E);
    }
    if (u) {
      var m, p;
      const y = g === "y" ? "width" : "height", S = Gm.has(Xt(o)), E = s.reference[d] - s.floating[y] + (S && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (S ? 0 : w.crossAxis), C = s.reference[d] + s.reference[y] + (S ? 0 : ((p = i.offset) == null ? void 0 : p[d]) || 0) - (S ? w.crossAxis : 0);
      b < E ? b = E : b > C && (b = C);
    }
    return { [g]: c, [d]: b };
  } };
}, mb = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, r;
    const { placement: o, rects: s, platform: i, elements: l } = t, { apply: a = () => {
    }, ...u } = qt(e, t), f = await ts(t, u), d = Xt(o), g = io(o), c = _t(o) === "y", { width: b, height: v } = s.floating;
    let w, m;
    d === "top" || d === "bottom" ? (w = d, m = g === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = d, w = g === "end" ? "top" : "bottom");
    const p = v - f.top - f.bottom, y = b - f.left - f.right, S = Mn(v - f[w], p), E = Mn(b - f[m], y), C = !t.middlewareData.shift;
    let k = S, j = E;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y), (r = t.middlewareData.shift) != null && r.enabled.y && (k = p), C && !g) {
      const A = Qe(f.left, 0), U = Qe(f.right, 0), R = Qe(f.top, 0), $ = Qe(f.bottom, 0);
      c ? j = b - 2 * (A !== 0 || U !== 0 ? A + U : Qe(f.left, f.right)) : k = v - 2 * (R !== 0 || $ !== 0 ? R + $ : Qe(f.top, f.bottom));
    }
    await a({ ...t, availableWidth: j, availableHeight: k });
    const L = await i.getDimensions(l.floating);
    return b !== L.width || v !== L.height ? { reset: { rects: true } } : {};
  } };
};
function ll() {
  return typeof window < "u";
}
function lo(e) {
  return qm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function It(e) {
  var t;
  return (t = (qm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qm(e) {
  return ll() ? e instanceof Node || e instanceof Ge(e).Node : false;
}
function Et(e) {
  return ll() ? e instanceof Element || e instanceof Ge(e).Element : false;
}
function Lt(e) {
  return ll() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : false;
}
function yf(e) {
  return !ll() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
const gb = /* @__PURE__ */ new Set(["inline", "contents"]);
function hs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !gb.has(o);
}
const yb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vb(e) {
  return yb.has(lo(e));
}
const xb = [":popover-open", ":modal"];
function al(e) {
  return xb.some((t) => {
    try {
      return e.matches(t);
    } catch (e2) {
      return false;
    }
  });
}
const wb = ["transform", "translate", "scale", "rotate", "perspective"], bb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sb = ["paint", "layout", "strict", "content"];
function gc(e) {
  const t = yc(), n = Et(e) ? Ct(e) : e;
  return wb.some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || bb.some((r) => (n.willChange || "").includes(r)) || Sb.some((r) => (n.contain || "").includes(r));
}
function Eb(e) {
  let t = Ln(e);
  for (; Lt(t) && !eo(t); ) {
    if (gc(t)) return t;
    if (al(t)) return null;
    t = Ln(t);
  }
  return null;
}
function yc() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const Cb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function eo(e) {
  return Cb.has(lo(e));
}
function Ct(e) {
  return Ge(e).getComputedStyle(e);
}
function ul(e) {
  return Et(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ln(e) {
  if (lo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || yf(e) && e.host || It(e);
  return yf(t) ? t.host : t;
}
function Xm(e) {
  const t = Ln(e);
  return eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && hs(t) ? t : Xm(t);
}
function ns(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = Xm(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ge(o);
  if (s) {
    const l = su(i);
    return t.concat(i, i.visualViewport || [], hs(o) ? o : [], l && n ? ns(l) : []);
  }
  return t.concat(o, ns(o, [], n));
}
function su(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zm(e) {
  const t = Ct(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Lt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, l = Mi(n) !== s || Mi(r) !== i;
  return l && (n = s, r = i), { width: n, height: r, $: l };
}
function vc(e) {
  return Et(e) ? e : e.contextElement;
}
function Fr(e) {
  const t = vc(e);
  if (!Lt(t)) return Mt(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: s } = Zm(t);
  let i = (s ? Mi(n.width) : n.width) / r, l = (s ? Mi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: i, y: l };
}
const kb = Mt(0);
function Jm(e) {
  const t = Ge(e);
  return !yc() || !t.visualViewport ? kb : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Nb(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Ge(e) ? false : t;
}
function ir(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), s = vc(e);
  let i = Mt(1);
  t && (r ? Et(r) && (i = Fr(r)) : i = Fr(e));
  const l = Nb(s, n, r) ? Jm(s) : Mt(0);
  let a = (o.left + l.x) / i.x, u = (o.top + l.y) / i.y, f = o.width / i.x, d = o.height / i.y;
  if (s) {
    const g = Ge(s), c = r && Et(r) ? Ge(r) : r;
    let b = g, v = su(b);
    for (; v && r && c !== b; ) {
      const w = Fr(v), m = v.getBoundingClientRect(), p = Ct(v), y = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * w.x, S = m.top + (v.clientTop + parseFloat(p.paddingTop)) * w.y;
      a *= w.x, u *= w.y, f *= w.x, d *= w.y, a += y, u += S, b = Ge(v), v = su(b);
    }
  }
  return Ii({ width: f, height: d, x: a, y: u });
}
function xc(e, t) {
  const n = ul(e).scrollLeft;
  return t ? t.left + n : ir(It(e)).left + n;
}
function eg(e, t, n) {
  n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : xc(e, r)), s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function Tb(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed", i = It(r), l = t ? al(t.floating) : false;
  if (r === i || l && s) return n;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = Mt(1);
  const f = Mt(0), d = Lt(r);
  if ((d || !d && !s) && ((lo(r) !== "body" || hs(i)) && (a = ul(r)), Lt(r))) {
    const c = ir(r);
    u = Fr(r), f.x = c.x + r.clientLeft, f.y = c.y + r.clientTop;
  }
  const g = i && !d && !s ? eg(i, a, true) : Mt(0);
  return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - a.scrollLeft * u.x + f.x + g.x, y: n.y * u.y - a.scrollTop * u.y + f.y + g.y };
}
function Pb(e) {
  return Array.from(e.getClientRects());
}
function jb(e) {
  const t = It(e), n = ul(e), r = e.ownerDocument.body, o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + xc(e);
  const l = -n.scrollTop;
  return Ct(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: i, y: l };
}
function Rb(e, t) {
  const n = Ge(e), r = It(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, l = 0, a = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = yc();
    (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return { width: s, height: i, x: l, y: a };
}
const _b = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ob(e, t) {
  const n = ir(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Lt(e) ? Fr(e) : Mt(1), i = e.clientWidth * s.x, l = e.clientHeight * s.y, a = o * s.x, u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function vf(e, t, n) {
  let r;
  if (t === "viewport") r = Rb(e, n);
  else if (t === "document") r = jb(It(e));
  else if (Et(t)) r = Ob(t, n);
  else {
    const o = Jm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Ii(r);
}
function tg(e, t) {
  const n = Ln(e);
  return n === t || !Et(n) || eo(n) ? false : Ct(n).position === "fixed" || tg(n, t);
}
function Ab(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ns(e, [], false).filter((l) => Et(l) && lo(l) !== "body"), o = null;
  const s = Ct(e).position === "fixed";
  let i = s ? Ln(e) : e;
  for (; Et(i) && !eo(i); ) {
    const l = Ct(i), a = gc(i);
    !a && l.position === "fixed" && (o = null), (s ? !a && !o : !a && l.position === "static" && !!o && _b.has(o.position) || hs(i) && !a && tg(e, i)) ? r = r.filter((f) => f !== i) : o = l, i = Ln(i);
  }
  return t.set(e, r), r;
}
function Mb(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [...n === "clippingAncestors" ? al(t) ? [] : Ab(t, this._c) : [].concat(n), r], l = i[0], a = i.reduce((u, f) => {
    const d = vf(t, f, o);
    return u.top = Qe(d.top, u.top), u.right = Mn(d.right, u.right), u.bottom = Mn(d.bottom, u.bottom), u.left = Qe(d.left, u.left), u;
  }, vf(t, l, o));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function Lb(e) {
  const { width: t, height: n } = Zm(e);
  return { width: t, height: n };
}
function Ib(e, t, n) {
  const r = Lt(t), o = It(t), s = n === "fixed", i = ir(e, true, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Mt(0);
  function u() {
    a.x = xc(o);
  }
  if (r || !r && !s) if ((lo(t) !== "body" || hs(o)) && (l = ul(t)), r) {
    const c = ir(t, true, s, t);
    a.x = c.x + t.clientLeft, a.y = c.y + t.clientTop;
  } else o && u();
  s && !r && o && u();
  const f = o && !r && !s ? eg(o, l) : Mt(0), d = i.left + l.scrollLeft - a.x - f.x, g = i.top + l.scrollTop - a.y - f.y;
  return { x: d, y: g, width: i.width, height: i.height };
}
function Gl(e) {
  return Ct(e).position === "static";
}
function xf(e, t) {
  if (!Lt(e) || Ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return It(e) === n && (n = n.ownerDocument.body), n;
}
function ng(e, t) {
  const n = Ge(e);
  if (al(e)) return n;
  if (!Lt(e)) {
    let o = Ln(e);
    for (; o && !eo(o); ) {
      if (Et(o) && !Gl(o)) return o;
      o = Ln(o);
    }
    return n;
  }
  let r = xf(e, t);
  for (; r && vb(r) && Gl(r); ) r = xf(r, t);
  return r && eo(r) && Gl(r) && !gc(r) ? n : r || Eb(e) || n;
}
const Db = async function(e) {
  const t = this.getOffsetParent || ng, n = this.getDimensions, r = await n(e.floating);
  return { reference: Ib(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function Fb(e) {
  return Ct(e).direction === "rtl";
}
const zb = { convertOffsetParentRelativeRectToViewportRelativeRect: Tb, getDocumentElement: It, getClippingRect: Mb, getOffsetParent: ng, getElementRects: Db, getClientRects: Pb, getDimensions: Lb, getScale: Fr, isElement: Et, isRTL: Fb };
function rg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $b(e, t) {
  let n = null, r;
  const o = It(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function i(l, a) {
    l === void 0 && (l = false), a === void 0 && (a = 1), s();
    const u = e.getBoundingClientRect(), { left: f, top: d, width: g, height: c } = u;
    if (l || t(), !g || !c) return;
    const b = Us(d), v = Us(o.clientWidth - (f + g)), w = Us(o.clientHeight - (d + c)), m = Us(f), y = { rootMargin: -b + "px " + -v + "px " + -w + "px " + -m + "px", threshold: Qe(0, Mn(1, a)) || 1 };
    let S = true;
    function E(C) {
      const k = C[0].intersectionRatio;
      if (k !== a) {
        if (!S) return i();
        k ? i(false, k) : r = setTimeout(() => {
          i(false, 1e-7);
        }, 1e3);
      }
      k === 1 && !rg(u, e.getBoundingClientRect()) && i(), S = false;
    }
    try {
      n = new IntersectionObserver(E, { ...y, root: o.ownerDocument });
    } catch (e2) {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return i(true), s;
}
function Ub(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: s = true, elementResize: i = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: a = false } = r, u = vc(e), f = o || s ? [...u ? ns(u) : [], ...ns(t)] : [];
  f.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: true }), s && m.addEventListener("resize", n);
  });
  const d = u && l ? $b(u, n) : null;
  let g = -1, c = null;
  i && (c = new ResizeObserver((m) => {
    let [p] = m;
    p && p.target === u && c && (c.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var y;
      (y = c) == null || y.observe(t);
    })), n();
  }), u && !a && c.observe(u), c.observe(t));
  let b, v = a ? ir(e) : null;
  a && w();
  function w() {
    const m = ir(e);
    v && !rg(v, m) && n(), v = m, b = requestAnimationFrame(w);
  }
  return n(), () => {
    var m;
    f.forEach((p) => {
      o && p.removeEventListener("scroll", n), s && p.removeEventListener("resize", n);
    }), d == null || d(), (m = c) == null || m.disconnect(), c = null, a && cancelAnimationFrame(b);
  };
}
const Bb = fb, Vb = pb, Hb = ub, Wb = mb, Qb = cb, wf = ab, Kb = hb, Yb = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: zb, ...n }, s = { ...o.platform, _c: r };
  return lb(e, t, { ...o, platform: s });
};
var Gb = typeof document < "u", qb = function() {
}, ii = Gb ? x.useLayoutEffect : qb;
function Di(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (!Di(e[r], t[r])) return false;
      return true;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Di(e[s], t[s])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function og(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bf(e, t) {
  const n = og(e);
  return Math.round(t * n) / n;
}
function ql(e) {
  const t = x.useRef(e);
  return ii(() => {
    t.current = e;
  }), t;
}
function Xb(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: s, floating: i } = {}, transform: l = true, whileElementsMounted: a, open: u } = e, [f, d] = x.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [g, c] = x.useState(r);
  Di(g, r) || c(r);
  const [b, v] = x.useState(null), [w, m] = x.useState(null), p = x.useCallback((N) => {
    N !== C.current && (C.current = N, v(N));
  }, []), y = x.useCallback((N) => {
    N !== k.current && (k.current = N, m(N));
  }, []), S = s || b, E = i || w, C = x.useRef(null), k = x.useRef(null), j = x.useRef(f), L = a != null, A = ql(a), U = ql(o), R = ql(u), $ = x.useCallback(() => {
    if (!C.current || !k.current) return;
    const N = { placement: t, strategy: n, middleware: g };
    U.current && (N.platform = U.current), Yb(C.current, k.current, N).then((P) => {
      const D = { ...P, isPositioned: R.current !== false };
      O.current && !Di(j.current, D) && (j.current = D, ds.flushSync(() => {
        d(D);
      }));
    });
  }, [g, t, n, U, R]);
  ii(() => {
    u === false && j.current.isPositioned && (j.current.isPositioned = false, d((N) => ({ ...N, isPositioned: false })));
  }, [u]);
  const O = x.useRef(false);
  ii(() => (O.current = true, () => {
    O.current = false;
  }), []), ii(() => {
    if (S && (C.current = S), E && (k.current = E), S && E) {
      if (A.current) return A.current(S, E, $);
      $();
    }
  }, [S, E, $, A, L]);
  const Q = x.useMemo(() => ({ reference: C, floating: k, setReference: p, setFloating: y }), [p, y]), I = x.useMemo(() => ({ reference: S, floating: E }), [S, E]), z = x.useMemo(() => {
    const N = { position: n, left: 0, top: 0 };
    if (!I.floating) return N;
    const P = bf(I.floating, f.x), D = bf(I.floating, f.y);
    return l ? { ...N, transform: "translate(" + P + "px, " + D + "px)", ...og(I.floating) >= 1.5 && { willChange: "transform" } } : { position: n, left: P, top: D };
  }, [n, l, I.floating, f.x, f.y]);
  return x.useMemo(() => ({ ...f, update: $, refs: Q, elements: I, floatingStyles: z }), [f, $, Q, I, z]);
}
const Zb = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
    return r && t(r) ? r.current != null ? wf({ element: r.current, padding: o }).fn(n) : {} : r ? wf({ element: r, padding: o }).fn(n) : {};
  } };
}, Jb = (e, t) => ({ ...Bb(e), options: [e, t] }), eS = (e, t) => ({ ...Vb(e), options: [e, t] }), tS = (e, t) => ({ ...Kb(e), options: [e, t] }), nS = (e, t) => ({ ...Hb(e), options: [e, t] }), rS = (e, t) => ({ ...Wb(e), options: [e, t] }), oS = (e, t) => ({ ...Qb(e), options: [e, t] }), sS = (e, t) => ({ ...Zb(e), options: [e, t] });
var iS = "Arrow", sg = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return h.jsx(He.svg, { ...s, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : h.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
sg.displayName = iS;
var lS = sg;
function aS(e) {
  const [t, n] = x.useState(void 0);
  return An(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const s = o[0];
        let i, l;
        if ("borderBoxSize" in s) {
          const a = s.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
          i = u.inlineSize, l = u.blockSize;
        } else i = e.offsetWidth, l = e.offsetHeight;
        n({ width: i, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var ig = "Popper", [lg, ag] = ol(ig), [bE, ug] = lg(ig), cg = "PopperAnchor", dg = x.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, s = ug(cg, n), i = x.useRef(null), l = St(t, i);
  return x.useEffect(() => {
    s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
  }), r ? null : h.jsx(He.div, { ...o, ref: l });
});
dg.displayName = cg;
var wc = "PopperContent", [uS, cS] = lg(wc), fg = x.forwardRef((e, t) => {
  var _a2, _b2;
  var J, cr, Jt, zn, en, dr;
  const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: i = 0, arrowPadding: l = 0, avoidCollisions: a = true, collisionBoundary: u = [], collisionPadding: f = 0, sticky: d = "partial", hideWhenDetached: g = false, updatePositionStrategy: c = "optimized", onPlaced: b, ...v } = e, w = ug(wc, n), [m, p] = x.useState(null), y = St(t, (tn) => p(tn)), [S, E] = x.useState(null), C = aS(S), k = (_a2 = C == null ? void 0 : C.width) != null ? _a2 : 0, j = (_b2 = C == null ? void 0 : C.height) != null ? _b2 : 0, L = r + (s !== "center" ? "-" + s : ""), A = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, U = Array.isArray(u) ? u : [u], R = U.length > 0, $ = { padding: A, boundary: U.filter(fS), altBoundary: R }, { refs: O, floatingStyles: Q, placement: I, isPositioned: z, middlewareData: N } = Xb({ strategy: "fixed", placement: L, whileElementsMounted: (...tn) => Ub(...tn, { animationFrame: c === "always" }), elements: { reference: w.anchor }, middleware: [Jb({ mainAxis: o + j, alignmentAxis: i }), a && eS({ mainAxis: true, crossAxis: false, limiter: d === "partial" ? tS() : void 0, ...$ }), a && nS({ ...$ }), rS({ ...$, apply: ({ elements: tn, rects: gs, availableWidth: pl, availableHeight: ys }) => {
    const { width: hl, height: uo } = gs.reference, fr = tn.floating.style;
    fr.setProperty("--radix-popper-available-width", "".concat(pl, "px")), fr.setProperty("--radix-popper-available-height", "".concat(ys, "px")), fr.setProperty("--radix-popper-anchor-width", "".concat(hl, "px")), fr.setProperty("--radix-popper-anchor-height", "".concat(uo, "px"));
  } }), S && sS({ element: S, padding: l }), pS({ arrowWidth: k, arrowHeight: j }), g && oS({ strategy: "referenceHidden", ...$ })] }), [P, D] = mg(I), W = On(b);
  An(() => {
    z && (W == null || W());
  }, [z, W]);
  const B = (J = N.arrow) == null ? void 0 : J.x, Y = (cr = N.arrow) == null ? void 0 : cr.y, q = ((Jt = N.arrow) == null ? void 0 : Jt.centerOffset) !== 0, [he, Ce] = x.useState();
  return An(() => {
    m && Ce(window.getComputedStyle(m).zIndex);
  }, [m]), h.jsx("div", { ref: O.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Q, transform: z ? Q.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: he, "--radix-popper-transform-origin": [(zn = N.transformOrigin) == null ? void 0 : zn.x, (en = N.transformOrigin) == null ? void 0 : en.y].join(" "), ...((dr = N.hide) == null ? void 0 : dr.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: h.jsx(uS, { scope: n, placedSide: P, onArrowChange: E, arrowX: B, arrowY: Y, shouldHideArrow: q, children: h.jsx(He.div, { "data-side": P, "data-align": D, ...v, ref: y, style: { ...v.style, animation: z ? void 0 : "none" } }) }) });
});
fg.displayName = wc;
var pg = "PopperArrow", dS = { top: "bottom", right: "left", bottom: "top", left: "right" }, hg = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = cS(pg, r), i = dS[s.placedSide];
  return h.jsx("span", { ref: s.onArrowChange, style: { position: "absolute", left: s.arrowX, top: s.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[s.placedSide], visibility: s.shouldHideArrow ? "hidden" : void 0 }, children: h.jsx(lS, { ...o, ref: n, style: { ...o.style, display: "block" } }) });
});
hg.displayName = pg;
function fS(e) {
  return e !== null;
}
var pS = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a2, _b2;
  var w, m, p;
  const { placement: n, rects: r, middlewareData: o } = t, i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [u, f] = mg(n), d = { start: "0%", center: "50%", end: "100%" }[f], g = ((_a2 = (m = o.arrow) == null ? void 0 : m.x) != null ? _a2 : 0) + l / 2, c = ((_b2 = (p = o.arrow) == null ? void 0 : p.y) != null ? _b2 : 0) + a / 2;
  let b = "", v = "";
  return u === "bottom" ? (b = i ? d : "".concat(g, "px"), v = "".concat(-a, "px")) : u === "top" ? (b = i ? d : "".concat(g, "px"), v = "".concat(r.floating.height + a, "px")) : u === "right" ? (b = "".concat(-a, "px"), v = i ? d : "".concat(c, "px")) : u === "left" && (b = "".concat(r.floating.width + a, "px"), v = i ? d : "".concat(c, "px")), { data: { x: b, y: v } };
} });
function mg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hS = dg, mS = fg, gS = hg, [cl, SE] = ol("Tooltip", [ag]), bc = ag(), gg = "TooltipProvider", yS = 700, Sf = "tooltip.open", [vS, yg] = cl(gg), vg = (e) => {
  const { __scopeTooltip: t, delayDuration: n = yS, skipDelayDuration: r = 300, disableHoverableContent: o = false, children: s } = e, i = x.useRef(true), l = x.useRef(false), a = x.useRef(0);
  return x.useEffect(() => {
    const u = a.current;
    return () => window.clearTimeout(u);
  }, []), h.jsx(vS, { scope: t, isOpenDelayedRef: i, delayDuration: n, onOpen: x.useCallback(() => {
    window.clearTimeout(a.current), i.current = false;
  }, []), onClose: x.useCallback(() => {
    window.clearTimeout(a.current), a.current = window.setTimeout(() => i.current = true, r);
  }, [r]), isPointerInTransitRef: l, onPointerInTransitChange: x.useCallback((u) => {
    l.current = u;
  }, []), disableHoverableContent: o, children: s });
};
vg.displayName = gg;
var xg = "Tooltip", [EE, dl] = cl(xg), iu = "TooltipTrigger", xS = x.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = dl(iu, n), s = yg(iu, n), i = bc(n), l = x.useRef(null), a = St(t, l, o.onTriggerChange), u = x.useRef(false), f = x.useRef(false), d = x.useCallback(() => u.current = false, []);
  return x.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), h.jsx(hS, { asChild: true, ...i, children: h.jsx(He.button, { "aria-describedby": o.open ? o.contentId : void 0, "data-state": o.stateAttribute, ...r, ref: a, onPointerMove: ye(e.onPointerMove, (g) => {
    g.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = true);
  }), onPointerLeave: ye(e.onPointerLeave, () => {
    o.onTriggerLeave(), f.current = false;
  }), onPointerDown: ye(e.onPointerDown, () => {
    o.open && o.onClose(), u.current = true, document.addEventListener("pointerup", d, { once: true });
  }), onFocus: ye(e.onFocus, () => {
    u.current || o.onOpen();
  }), onBlur: ye(e.onBlur, o.onClose), onClick: ye(e.onClick, o.onClose) }) });
});
xS.displayName = iu;
var wS = "TooltipPortal", [CE, bS] = cl(wS, { forceMount: void 0 }), to = "TooltipContent", wg = x.forwardRef((e, t) => {
  const n = bS(to, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = dl(to, e.__scopeTooltip);
  return h.jsx(ac, { present: r || i.open, children: i.disableHoverableContent ? h.jsx(bg, { side: o, ...s, ref: t }) : h.jsx(SS, { side: o, ...s, ref: t }) });
}), SS = x.forwardRef((e, t) => {
  const n = dl(to, e.__scopeTooltip), r = yg(to, e.__scopeTooltip), o = x.useRef(null), s = St(t, o), [i, l] = x.useState(null), { trigger: a, onClose: u } = n, f = o.current, { onPointerInTransitChange: d } = r, g = x.useCallback(() => {
    l(null), d(false);
  }, [d]), c = x.useCallback((b, v) => {
    const w = b.currentTarget, m = { x: b.clientX, y: b.clientY }, p = TS(m, w.getBoundingClientRect()), y = PS(m, p), S = jS(v.getBoundingClientRect()), E = _S([...y, ...S]);
    l(E), d(true);
  }, [d]);
  return x.useEffect(() => () => g(), [g]), x.useEffect(() => {
    if (a && f) {
      const b = (w) => c(w, f), v = (w) => c(w, a);
      return a.addEventListener("pointerleave", b), f.addEventListener("pointerleave", v), () => {
        a.removeEventListener("pointerleave", b), f.removeEventListener("pointerleave", v);
      };
    }
  }, [a, f, c, g]), x.useEffect(() => {
    if (i) {
      const b = (v) => {
        const w = v.target, m = { x: v.clientX, y: v.clientY }, p = (a == null ? void 0 : a.contains(w)) || (f == null ? void 0 : f.contains(w)), y = !RS(m, i);
        p ? g() : y && (g(), u());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [a, f, i, u, g]), h.jsx(bg, { ...e, ref: s });
}), [ES, CS] = cl(xg, { isInside: false }), kS = vw("TooltipContent"), bg = x.forwardRef((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...l } = e, a = dl(to, n), u = bc(n), { onClose: f } = a;
  return x.useEffect(() => (document.addEventListener(Sf, f), () => document.removeEventListener(Sf, f)), [f]), x.useEffect(() => {
    if (a.trigger) {
      const d = (g) => {
        const c = g.target;
        c != null && c.contains(a.trigger) && f();
      };
      return window.addEventListener("scroll", d, { capture: true }), () => window.removeEventListener("scroll", d, { capture: true });
    }
  }, [a.trigger, f]), h.jsx(lc, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: s, onPointerDownOutside: i, onFocusOutside: (d) => d.preventDefault(), onDismiss: f, children: h.jsxs(mS, { "data-state": a.stateAttribute, ...u, ...l, ref: t, style: { ...l.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [h.jsx(kS, { children: r }), h.jsx(ES, { scope: n, isInside: true, children: h.jsx(Vw, { id: a.contentId, role: "tooltip", children: o || r }) })] }) });
});
wg.displayName = to;
var Sg = "TooltipArrow", NS = x.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = bc(n);
  return CS(Sg, n).isInside ? null : h.jsx(gS, { ...o, ...r, ref: t });
});
NS.displayName = Sg;
function TS(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function PS(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function jS(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [{ x: o, y: t }, { x: n, y: t }, { x: n, y: r }, { x: o, y: r }];
}
function RS(e, t) {
  const { x: n, y: r } = e;
  let o = false;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s], a = t[i], u = l.x, f = l.y, d = a.x, g = a.y;
    f > r != g > r && n < (d - u) * (r - f) / (g - f) + u && (o = !o);
  }
  return o;
}
function _S(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), OS(t);
}
function OS(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var AS = vg, Eg = wg;
const MS = AS, LS = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => h.jsx(Eg, { ref: r, sideOffset: t, className: ur("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...n }));
LS.displayName = Eg.displayName;
const Ht = { tafseer_saadi: "\u{1F4DA} \u062A\u0641\u0633\u064A\u0631 \u0627\u0644\u0633\u0639\u062F\u064A", tafseer_moysar: "\u2728 \u0627\u0644\u062A\u0641\u0633\u064A\u0631 \u0627\u0644\u0645\u064A\u0633\u0631", tafseer_bughiu: "\u{1F4D6} \u062A\u0641\u0633\u064A\u0631 \u0627\u0644\u0628\u063A\u0648\u064A", maany_aya: "\u{1F4DD} \u0645\u0639\u0627\u0646\u064A \u0627\u0644\u0645\u0641\u0631\u062F\u0627\u062A", earab_quran: "\u{1F524} \u0625\u0639\u0631\u0627\u0628 \u0627\u0644\u0642\u0631\u0622\u0646", reasons_of_verses: "\u{1F4DC} \u0623\u0633\u0628\u0627\u0628 \u0627\u0644\u0646\u0632\u0648\u0644" }, IS = { "\u0623\u0644 \u0639\u0645\u0631\u0627\u0646": "\u0622\u0644 \u0639\u0645\u0631\u0627\u0646", "\u0627\u0644 \u0639\u0645\u0631\u0627\u0646": "\u0622\u0644 \u0639\u0645\u0631\u0627\u0646", \u0627\u0628\u0631\u0627\u0647\u064A\u0645: "\u0625\u0628\u0631\u0627\u0647\u064A\u0645", \u0627\u0644\u0625\u0646\u0634\u0642\u0627\u0642: "\u0627\u0644\u0627\u0646\u0634\u0642\u0627\u0642", \u0627\u0644\u0625\u0646\u0641\u0637\u0627\u0631: "\u0627\u0644\u0627\u0646\u0641\u0637\u0627\u0631", \u0627\u0644\u0627\u0646\u0639\u0627\u0645: "\u0627\u0644\u0623\u0646\u0639\u0627\u0645", \u0633\u0628\u0625: "\u0633\u0628\u0623", \u0627\u0644\u0627\u0639\u0631\u0627\u0641: "\u0627\u0644\u0623\u0639\u0631\u0627\u0641", \u0627\u0644\u0627\u0646\u0628\u064A\u0627\u0621: "\u0627\u0644\u0623\u0646\u0628\u064A\u0627\u0621", \u0627\u0644\u0627\u0646\u0641\u0627\u0644: "\u0627\u0644\u0623\u0646\u0641\u0627\u0644", \u0627\u0644\u0627\u0633\u0631\u0627\u0621: "\u0627\u0644\u0625\u0633\u0631\u0627\u0621", \u0627\u0644\u0627\u062E\u0644\u0627\u0635: "\u0627\u0644\u0625\u062E\u0644\u0627\u0635" };
function Cg(e) {
  return IS[e] || e;
}
const kg = ["\u0627\u0644\u0641\u0627\u062A\u062D\u0629", "\u0627\u0644\u0628\u0642\u0631\u0629", "\u0622\u0644 \u0639\u0645\u0631\u0627\u0646", "\u0627\u0644\u0646\u0633\u0627\u0621", "\u0627\u0644\u0645\u0627\u0626\u062F\u0629", "\u0627\u0644\u0623\u0646\u0639\u0627\u0645", "\u0627\u0644\u0623\u0639\u0631\u0627\u0641", "\u0627\u0644\u0623\u0646\u0641\u0627\u0644", "\u0627\u0644\u062A\u0648\u0628\u0629", "\u064A\u0648\u0646\u0633", "\u0647\u0648\u062F", "\u064A\u0648\u0633\u0641", "\u0627\u0644\u0631\u0639\u062F", "\u0625\u0628\u0631\u0627\u0647\u064A\u0645", "\u0627\u0644\u062D\u062C\u0631", "\u0627\u0644\u0646\u062D\u0644", "\u0627\u0644\u0625\u0633\u0631\u0627\u0621", "\u0627\u0644\u0643\u0647\u0641", "\u0645\u0631\u064A\u0645", "\u0637\u0647", "\u0627\u0644\u0623\u0646\u0628\u064A\u0627\u0621", "\u0627\u0644\u062D\u062C", "\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646", "\u0627\u0644\u0646\u0648\u0631", "\u0627\u0644\u0641\u0631\u0642\u0627\u0646", "\u0627\u0644\u0634\u0639\u0631\u0627\u0621", "\u0627\u0644\u0646\u0645\u0644", "\u0627\u0644\u0642\u0635\u0635", "\u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062A", "\u0627\u0644\u0631\u0648\u0645", "\u0644\u0642\u0645\u0627\u0646", "\u0627\u0644\u0633\u062C\u062F\u0629", "\u0627\u0644\u0623\u062D\u0632\u0627\u0628", "\u0633\u0628\u0623", "\u0641\u0627\u0637\u0631", "\u064A\u0633", "\u0627\u0644\u0635\u0627\u0641\u0627\u062A", "\u0635", "\u0627\u0644\u0632\u0645\u0631", "\u063A\u0627\u0641\u0631", "\u0641\u0635\u0644\u062A", "\u0627\u0644\u0634\u0648\u0631\u0649", "\u0627\u0644\u0632\u062E\u0631\u0641", "\u0627\u0644\u062F\u062E\u0627\u0646", "\u0627\u0644\u062C\u0627\u062B\u064A\u0629", "\u0627\u0644\u0623\u062D\u0642\u0627\u0641", "\u0645\u062D\u0645\u062F", "\u0627\u0644\u0641\u062A\u062D", "\u0627\u0644\u062D\u062C\u0631\u0627\u062A", "\u0642", "\u0627\u0644\u0630\u0627\u0631\u064A\u0627\u062A", "\u0627\u0644\u0637\u0648\u0631", "\u0627\u0644\u0646\u062C\u0645", "\u0627\u0644\u0642\u0645\u0631", "\u0627\u0644\u0631\u062D\u0645\u0646", "\u0627\u0644\u0648\u0627\u0642\u0639\u0629", "\u0627\u0644\u062D\u062F\u064A\u062F", "\u0627\u0644\u0645\u062C\u0627\u062F\u0644\u0629", "\u0627\u0644\u062D\u0634\u0631", "\u0627\u0644\u0645\u0645\u062A\u062D\u0646\u0629", "\u0627\u0644\u0635\u0641", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646", "\u0627\u0644\u062A\u063A\u0627\u0628\u0646", "\u0627\u0644\u0637\u0644\u0627\u0642", "\u0627\u0644\u062A\u062D\u0631\u064A\u0645", "\u0627\u0644\u0645\u0644\u0643", "\u0627\u0644\u0642\u0644\u0645", "\u0627\u0644\u062D\u0627\u0642\u0629", "\u0627\u0644\u0645\u0639\u0627\u0631\u062C", "\u0646\u0648\u062D", "\u0627\u0644\u062C\u0646", "\u0627\u0644\u0645\u0632\u0645\u0644", "\u0627\u0644\u0645\u062F\u062B\u0631", "\u0627\u0644\u0642\u064A\u0627\u0645\u0629", "\u0627\u0644\u0625\u0646\u0633\u0627\u0646", "\u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062A", "\u0627\u0644\u0646\u0628\u0623", "\u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062A", "\u0639\u0628\u0633", "\u0627\u0644\u062A\u0643\u0648\u064A\u0631", "\u0627\u0644\u0627\u0646\u0641\u0637\u0627\u0631", "\u0627\u0644\u0645\u0637\u0641\u0641\u064A\u0646", "\u0627\u0644\u0627\u0646\u0634\u0642\u0627\u0642", "\u0627\u0644\u0628\u0631\u0648\u062C", "\u0627\u0644\u0637\u0627\u0631\u0642", "\u0627\u0644\u0623\u0639\u0644\u0649", "\u0627\u0644\u063A\u0627\u0634\u064A\u0629", "\u0627\u0644\u0641\u062C\u0631", "\u0627\u0644\u0628\u0644\u062F", "\u0627\u0644\u0634\u0645\u0633", "\u0627\u0644\u0644\u064A\u0644", "\u0627\u0644\u0636\u062D\u0649", "\u0627\u0644\u0634\u0631\u062D", "\u0627\u0644\u062A\u064A\u0646", "\u0627\u0644\u0639\u0644\u0642", "\u0627\u0644\u0642\u062F\u0631", "\u0627\u0644\u0628\u064A\u0646\u0629", "\u0627\u0644\u0632\u0644\u0632\u0644\u0629", "\u0627\u0644\u0639\u0627\u062F\u064A\u0627\u062A", "\u0627\u0644\u0642\u0627\u0631\u0639\u0629", "\u0627\u0644\u062A\u0643\u0627\u062B\u0631", "\u0627\u0644\u0639\u0635\u0631", "\u0627\u0644\u0647\u0645\u0632\u0629", "\u0627\u0644\u0641\u064A\u0644", "\u0642\u0631\u064A\u0634", "\u0627\u0644\u0645\u0627\u0639\u0648\u0646", "\u0627\u0644\u0643\u0648\u062B\u0631", "\u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646", "\u0627\u0644\u0646\u0635\u0631", "\u0627\u0644\u0645\u0633\u062F", "\u0627\u0644\u0625\u062E\u0644\u0627\u0635", "\u0627\u0644\u0641\u0644\u0642", "\u0627\u0644\u0646\u0627\u0633"];
function Ng(e) {
  return kg[e - 1];
}
function Tg(e) {
  const t = Cg(e), n = kg.indexOf(t);
  return n >= 0 ? n + 1 : -1;
}
function ao(e) {
  const _r2 = e.trim();
  const _rm = _r2.match(/^([\u0600-\u06FF\s]+?)\s+(\d+)\s*[-\u2013]\s*(\d+)/);
  if (_rm) {
    const _su = Cg(_rm[1].trim());
    const _s2 = Math.min(parseInt(_rm[2]), parseInt(_rm[3])), _e2 = Math.max(parseInt(_rm[2]), parseInt(_rm[3]));
    const _ay = [];
    for (let _x2 = _s2; _x2 <= _e2; _x2++) _ay.push(_x2);
    return { surah: _su, ayahs: _ay };
  }
  const _rc = _r2.replace(/\s*[-\u2013]\s*/g, " ").trim();
  const n = _rc.match(/^([\u0600-\u06FF\s]+?)\s+(\d+)/);
  if (!n) {
    return { surah: Cg(_rc.trim()), ayahs: [1] };
  }
  return { surah: Cg(n[1].trim()), ayahs: [parseInt(n[2])] };
}
let Bs = null, Vs = null, Hs = null, Ws = null;
(function() {
  const _K = "QuranTopics2026_AkramDev_xK9mP3";
  function _xd(b64) {
    const k = _K, kl2 = k.length;
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i) ^ k.charCodeAt(i % kl2);
    return new TextDecoder("utf-8").decode(bytes);
  }
  window.__xd = function(b64) {
    try {
      return JSON.parse(_xd(b64));
    } catch (e) {
      throw new Error("Decrypt failed");
    }
  };
  window.__xdf = async function(url) {
    const r = await fetch(url);
    if (!r.ok && r.status !== 0) throw new Error("Load failed: " + url);
    var b64;
    try {
      var buf = await r.arrayBuffer();
      var arr = new Uint8Array(buf);
      var s = "";
      var chunk = 8192;
      for (var i = 0; i < arr.length; i += chunk) {
        s += String.fromCharCode.apply(null, arr.subarray(i, i + chunk));
      }
      b64 = s.trim();
    } catch(e) {
      b64 = (await r.text()).trim();
    }
    return window.__xd(b64);
  };
  window.__loadTafsir = async function(baseUrl) {
    if (window.__tafsirDone) return window.__tafsirData;
    window.__tafsirData = window.__tafsirData || {};
    const manifest = await window.__xdf(baseUrl + "data/tafsir_manifest.dat");
    const chunks = manifest.chunks;
    const batchSize = 3;
    for (let b = 0; b < chunks; b += batchSize) {
      const batch = [];
      for (let i = b; i < Math.min(b + batchSize, chunks); i++) {
        batch.push(window.__xdf(baseUrl + "data/tafsir_c" + i + ".dat"));
      }
      const results = await Promise.all(batch);
      results.forEach((chunk) => Object.assign(window.__tafsirData, chunk));
    }
    window.__tafsirDone = true;
    return window.__tafsirData;
  };
})();
(function() {
  var _depth = 0;
  window.__historyPush = function() {
    _depth++;
    history.pushState({ depth: _depth }, "");
  };
  window.__historyPop = function() {
    if (_depth > 0) {
      _depth--;
    }
  };
  window.__historyReset = function() {
    var _d2 = _depth;
    _depth = 0;
    if (_d2 > 0) {
      history.go(-_d2);
    }
  };
  window.addEventListener("popstate", function(e) {
    if (typeof window.__closeTopOverlay === "function") {
      var handled = window.__closeTopOverlay();
      if (handled) {
        history.pushState({ depth: _depth }, "");
      }
    }
  });
  history.replaceState({ depth: 0 }, "");
})();
function DS(e) {
  if (typeof window > "u") return "./data/".concat(e);
  const t = window.location.href.split("#")[0];
  return new URL("data/".concat(e), t).toString();
}
async function fl(e) {
  const u = DS(e.replace(/\.json$/, ".dat"));
  return window.__xdf(u);
}
async function FS() {
  return Bs || (Bs = await fl("categories.json"), Bs);
}
async function zS() {
  return Vs || (Vs = await fl("ayahs.json"), Vs);
}
async function $S() {
  if (Hs) return Hs;
  const _b2 = DS("").replace(/data\/[^/]*$/, "");
  Hs = await window.__loadTafsir(_b2);
  return Hs;
}
async function Pg() {
  return Ws || (Ws = await fl("page_map.json"), Ws);
}
function wt(e, t) {
  const n = [];
  for (const [r, o] of Object.entries(e)) o[0] === t && n.push({ id: parseInt(r), name: o[1] });
  return n.sort((r, o) => r.id - o.id);
}
function ms(e, t, n) {
  var s;
  const r = ((s = t[String(n)]) == null ? void 0 : s.length) || 0, o = wt(e, n).reduce((i, l) => i + ms(e, t, l.id), 0);
  return r + o;
}
function jg(e, t, n) {
  const r = [], o = t[String(n)] || [];
  for (const [s, i] of o) r.push({ text: s, ref: i });
  for (const s of wt(e, n)) r.push(...jg(e, t, s.id));
  return r;
}
function US(e, t, n) {
  const r = ao(t);
  if (!r) return [];
  const o = [];
  for (const s of r.ayahs) {
    const i = "".concat(r.surah, "_").concat(s), l = e[i];
    if (l && l[n]) o.push({ ayah: s, text: l[n] });
  }
  if (o.length === 0) return [];
  if (o.length === r.ayahs.length) return o;
  if (r.ayahs.length > 1) {
    const _full = [];
    let _i2 = 0;
    while (_i2 < r.ayahs.length) {
      const _a2 = r.ayahs[_i2];
      const _e2 = e["".concat(r.surah, "_").concat(_a2)];
      if (_e2 && _e2[n]) {
        _full.push({ ayah: _a2, text: _e2[n] });
        _i2++;
      } else {
        let _j = _i2 + 1;
        while (_j < r.ayahs.length) {
          const _e22 = e["".concat(r.surah, "_").concat(r.ayahs[_j])];
          if (_e22 && _e22[n]) {
            const _label = r.ayahs[_i2] === r.ayahs[_j - 1] ? "".concat(r.ayahs[_i2], " - ").concat(r.ayahs[_j]) : "".concat(r.ayahs[_i2], " - ").concat(r.ayahs[_j]);
            _full.push({ ayah: _label, text: _e22[n] });
            _i2 = _j + 1;
            break;
          }
          _j++;
        }
        if (_j === r.ayahs.length) _i2++;
      }
    }
    return _full;
  }
  return o;
}
function BS(e, t) {
  if (!e || Object.keys(e).length === 0) return "";
  const n = ao(t);
  if (!n) return "";
  const r = n.ayahs[0], o = "".concat(n.surah, "_").concat(r), i = e[o];
  return i ? "https://altadabbur.com/quran?".concat(i) : "";
}
const Sc = "quran_favorites";
function rs() {
  try {
    return JSON.parse(localStorage.getItem(Sc) || "[]");
  } catch (e) {
    return [];
  }
}
function Rg(e) {
  const t = rs();
  t.some((n) => n.text === e.text && n.ref === e.ref) || (t.push(e), localStorage.setItem(Sc, JSON.stringify(t)));
}
function _g(e) {
  const t = rs().filter((n) => !(n.text === e.text && n.ref === e.ref));
  localStorage.setItem(Sc, JSON.stringify(t));
}
function lu(e) {
  return rs().some((t) => t.text === e.text && t.ref === e.ref);
}
function VS(e) {
  const t = [];
  for (const s of Object.values(e)) for (const [i, l] of s) t.push({ text: i, ref: l });
  if (t.length === 0) return null;
  const o = Math.floor((/* @__PURE__ */ new Date()).getTime() / (1e3 * 60 * 60 * 24)) % t.length;
  return t[o];
}
const Og = "quran_dark_mode";
function HS() {
  return localStorage.getItem(Og) || "auto";
}
function WS(e) {
  localStorage.setItem(Og, e), au(e);
}
function au(e) {
  const t = document.documentElement;
  if (e === "dark") t.classList.add("dark");
  else if (e === "light") t.classList.remove("dark");
  else {
    const n = (/* @__PURE__ */ new Date()).getHours();
    n >= 19 || n < 6 ? t.classList.add("dark") : t.classList.remove("dark");
  }
}
const Ag = "quran_last_read";
function QS() {
  try {
    return JSON.parse(localStorage.getItem(Ag) || "null");
  } catch (e) {
    return null;
  }
}
function KS(e, t) {
  localStorage.setItem(Ag, JSON.stringify({ id: e, name: t }));
}
function YS({ title: e, showBack: t, onBack: n, onSearch: r, onMenu: o, onHome: s, searchOpen: i }) {
  return h.jsx("div", { className: "sticky top-0 z-50 bg-gradient-to-l from-primary to-green-q-light shadow-lg", children: h.jsxs("div", { className: "max-w-[700px] mx-auto flex items-center gap-3 px-4 py-3", children: [t && h.jsx("button", { onClick: n, className: "shrink-0 bg-primary-foreground/15 border border-primary-foreground/25 rounded-lg text-primary-foreground px-3 py-1.5 text-sm hover:bg-primary-foreground/25 transition-colors", children: "\u2190 \u0631\u062C\u0648\u0639" }), h.jsx("div", { className: "flex-1 text-center min-w-0", children: h.jsxs("button", { onClick: s, className: "text-primary-foreground", children: [h.jsx("span", { className: "font-amiri text-base block opacity-90", children: "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0652\u0645\u064E\u0646\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0650\u064A\u0645\u0650" }), h.jsx("span", { className: "font-tajawal text-sm font-bold block truncate", children: e })] }) }), h.jsx("button", { onClick: r, className: "shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-lg transition-colors ".concat(i ? "bg-primary-foreground/30" : "bg-primary-foreground/15 border border-primary-foreground/25", " text-primary-foreground"), title: "\u0628\u062D\u062B", children: "\u{1F50D}" }), h.jsx("button", { onClick: o, className: "shrink-0 w-9 h-9 flex items-center justify-center bg-primary-foreground/15 border border-primary-foreground/25 rounded-lg text-primary-foreground text-lg", title: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629", children: "\u2630" })] }) });
}
const GS = { 1: "\u{1F54C}", 2: "\u{1F4AB}", 3: "\u{1F4E2}", 4: "\u{1F4D6}", 5: "\u2694\uFE0F", 6: "\u{1F4BC}", 7: "\u{1F91D}", 8: "\u{1F465}", 9: "\u{1F4B0}", 10: "\u{1F33E}", 11: "\u2696\uFE0F", 12: "\u{1F3DB}\uFE0F", 13: "\u{1F52C}", 14: "\u262A\uFE0F", 15: "\u{1F4DC}" };
function qS({ categories: e, ayahs: t, parentId: n, onNavigate: r }) {
  const o = wt(e, n);
  return h.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 py-4", children: o.map((s, i) => h.jsxs("button", { onClick: () => r(s.id, s.name), className: "animate-fade-up bg-card border border-border rounded-xl p-4 text-center hover:border-gold-light hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group", style: { animationDelay: "".concat(i * 0.03, "s") }, children: [h.jsx("span", { className: "text-3xl block mb-2", children: GS[s.id] || "\u{1F4C2}" }), h.jsx("span", { className: "font-amiri text-sm font-bold text-foreground block leading-relaxed", children: s.name }), h.jsxs("span", { className: "text-xs text-muted-foreground mt-1 block", children: [ms(e, t, s.id), " \u0622\u064A\u0629"] })] }, s.id)) });
}
function Mg({ categories: e, ayahs: t, parentId: n, onNavigate: r }) {
  var i;
  const o = wt(e, n), s = ((i = e[String(n)]) == null ? void 0 : i[1]) || "";
  return h.jsxs("div", { className: "py-4", children: [h.jsxs("div", { className: "flex items-center gap-2 mb-4 pb-2 border-b-2 border-border", children: [h.jsx("span", { className: "w-1 h-5 bg-gradient-to-b from-primary to-gold rounded" }), h.jsx("h2", { className: "font-amiri text-xl text-primary", children: s })] }), h.jsx("div", { className: "flex flex-col gap-2", children: o.map((l, a) => {
    const u = ms(e, t, l.id), f = wt(e, l.id).length > 0;
    return h.jsxs("button", { onClick: () => r(l.id, l.name), className: "animate-fade-up flex items-center justify-between bg-card border border-border rounded-lg p-3 hover:border-gold-light hover:bg-card/80 hover:-translate-x-1 transition-all duration-200 shadow-sm", style: { animationDelay: "".concat(a * 0.02, "s") }, children: [h.jsx("span", { className: "font-amiri text-foreground flex-1 text-right", children: l.name }), h.jsxs("span", { className: "text-xs text-muted-foreground bg-secondary border border-border rounded-xl px-2 py-0.5 mx-2 shrink-0", children: [u, " \u0622\u064A\u0629"] }), h.jsx("span", { className: "text-gold text-sm shrink-0", children: f ? "\u{1F4C2}" : "\u25C0" })] }, l.id);
  }) })] });
}
function XS(e, t, n, W) {
  if (!e) return null;
  const r = String(t).padStart(3, "0"), o = String(n).padStart(3, "0"), B = W ? "warsh/" + e : e;
  return "https://everyayah.com/data/".concat(B, "/").concat(r).concat(o, ".mp3");
}
function ZS(e, t) {
  const n = String(t).padStart(3, "0");
  return "https://server8.mp3quran.net/".concat(e, "/").concat(n, ".mp3");
}
const JS = [{ id: "mishary", name: "\u0645\u0634\u0627\u0631\u064A \u0627\u0644\u0639\u0641\u0627\u0633\u064A", subfolder: "Alafasy_128kbps", mpCode: "", mpServer: "https://server8.mp3quran.net/afs/" }, { id: "maher", name: "\u0645\u0627\u0647\u0631 \u0627\u0644\u0645\u0639\u064A\u0642\u0644\u064A", subfolder: "MaherAlMuaiqly128kbps", mpCode: "", mpServer: "https://server12.mp3quran.net/maher/" }, { id: "sudais", name: "\u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0633\u062F\u064A\u0633", subfolder: "Abdurrahmaan_As-Sudais_192kbps", mpCode: "", mpServer: "https://server9.mp3quran.net/sds/" }, { id: "shuraim", name: "\u0633\u0639\u0648\u062F \u0627\u0644\u0634\u0631\u064A\u0645", subfolder: "Saood_ash-Shuraym_128kbps", mpCode: "", mpServer: "https://server9.mp3quran.net/shur/" }, { id: "abdulbasit_murattal", name: "\u0639\u0628\u062F\u0627\u0644\u0628\u0627\u0633\u0637 (\u0645\u0631\u062A\u0644)", subfolder: "Abdul_Basit_Murattal_192kbps", mpCode: "", mpServer: "https://server7.mp3quran.net/basit/" }, { id: "abdulbasit_mujawwad", name: "\u0639\u0628\u062F\u0627\u0644\u0628\u0627\u0633\u0637 (\u0645\u062C\u0648\u062F)", subfolder: "Abdul_Basit_Mujawwad_128kbps", mpCode: "", mpServer: "https://server13.mp3quran.net/basit_mjwd/" }, { id: "dossary", name: "\u064A\u0627\u0633\u0631 \u0627\u0644\u062F\u0648\u0633\u0631\u064A", subfolder: "Yasser_Ad-Dussary_128kbps", mpCode: "", mpServer: "https://server11.mp3quran.net/yasser/" }, { id: "qatami", name: "\u0646\u0627\u0635\u0631 \u0627\u0644\u0642\u0637\u0627\u0645\u064A", subfolder: "Nasser_Alqatami_128kbps", mpCode: "", mpServer: "https://server9.mp3quran.net/qtm/" }, { id: "ajamy", name: "\u0623\u062D\u0645\u062F \u0627\u0644\u0639\u062C\u0645\u064A", subfolder: "ahmed_ibn_ali_al_ajamy_128kbps", mpCode: "", mpServer: "https://server9.mp3quran.net/ajm/" }, { id: "fares", name: "\u0641\u0627\u0631\u0633 \u0639\u0628\u0627\u062F", subfolder: "Fares_Abbad_64kbps", mpCode: "", mpServer: "https://server8.mp3quran.net/frs_a/" }, { id: "ali_jaber", name: "\u0639\u0644\u064A \u062C\u0627\u0628\u0631", subfolder: "Ali_Jaber_64kbps", mpCode: "", mpServer: "https://server8.mp3quran.net/a_jbr/" }, { id: "husary", name: "\u0627\u0644\u062D\u0635\u0631\u064A (\u0645\u0631\u062A\u0644)", subfolder: "Husary_128kbps", mpCode: "", mpServer: "https://server13.mp3quran.net/husr/" }, { id: "husary_mujawwad", name: "\u0627\u0644\u062D\u0635\u0631\u064A (\u0645\u062C\u0648\u062F)", subfolder: "Husary_128kbps_Mujawwad", mpCode: "", mpServer: "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/" }, { id: "minshawi", name: "\u0627\u0644\u0645\u0646\u0634\u0627\u0648\u064A (\u0645\u0631\u062A\u0644)", subfolder: "Minshawy_Murattal_128kbps", mpCode: "", mpServer: "https://server10.mp3quran.net/minsh/" }, { id: "ghamdi", name: "\u0633\u0639\u062F \u0627\u0644\u063A\u0627\u0645\u062F\u064A", subfolder: "Ghamadi_40kbps", mpCode: "", mpServer: "https://server9.mp3quran.net/s_gmd/" }, { id: "albanna", name: "\u0645\u062D\u0645\u0648\u062F \u0639\u0644\u064A \u0627\u0644\u0628\u0646\u0627", subfolder: "mahmoud_ali_al_banna_32kbps", mpCode: "", mpServer: "https://server8.mp3quran.net/bna/" }, { id: "ayyub", name: "\u0645\u062D\u0645\u062F \u0623\u064A\u0648\u0628", subfolder: "Muhammad_Ayyoub_128kbps", mpCode: "", mpServer: "https://server8.mp3quran.net/ayyub/" }, { id: "minshawi_mujawwad", name: "\u0627\u0644\u0645\u0646\u0634\u0627\u0648\u064A (\u0645\u062C\u0648\u062F)", subfolder: "Minshawy_Mujawwad_64kbps", mpCode: "", mpServer: "https://download.quranicaudio.com/quran/minshawi_mujawwad/" }];
const eE = [{ id: "warsh_ibrahim", name: "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0627\u0644\u062F\u0648\u0633\u0631\u064A (\u0648\u0631\u0634)", subfolder: "warsh_ibrahim_aldosary_128kbps", mpCode: "", mpServer: "https://server10.mp3quran.net/ibrahim_dosri/Rewayat-Warsh-A-n-Nafi/" }, { id: "warsh_yassin", name: "\u064A\u0627\u0633\u064A\u0646 \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A (\u0648\u0631\u0634)", subfolder: "warsh_yassin_al_jazaery_64kbps", mpCode: "", mpServer: "https://server11.mp3quran.net/Yassen/" }];
function tE({ ref_: e }) {
  const [t, n] = x.useState("hafs"), [r, o] = x.useState(0), [s, i] = x.useState(false), [l, a] = x.useState(false), [u, f] = x.useState(false), d = x.useRef(null), g = ao(e), c = g ? Tg(g.surah) : -1, b = (g == null ? void 0 : g.ayahs[0]) || 1, v = t === "hafs" ? JS : eE, w = v[r] || v[0];
  x.useEffect(() => {
    o(0), m();
  }, [t]);
  const m = x.useCallback(() => {
    d.current && (d.current.pause(), d.current.currentTime = 0, d.current = null), i(false), a(false);
  }, []), p = x.useCallback(() => {
    if (c < 1) return;
    if (s) {
      m();
      return;
    }
    a(true);
    const ayahs = g && g.ayahs && g.ayahs.length > 0 ? g.ayahs : [b];
    const mp2 = w.mpServer ? "".concat(w.mpServer.replace(/\/$/, ""), "/").concat(String(c).padStart(3, "0"), ".mp3") : null;
    if (!w.subfolder) {
      if (!mp2) {
        a(false);
        return;
      }
      const C = new Audio(mp2);
      d.current = C, C.oncanplay = () => a(false), C.onplay = () => {
        i(true), a(false);
      }, C.onended = () => i(false), C.onerror = () => {
        i(false), a(false);
      }, C.play().catch(() => a(false));
      return;
    }
    let qi2 = 0;
    const playNext = () => {
      if (qi2 >= ayahs.length) {
        i(false);
        return;
      }
      const an2 = ayahs[qi2++];
      const url = XS(w.subfolder, c, an2, t !== "hafs");
      const mpAyah = w.mpServer ? "".concat(w.mpServer.replace(/\/$/, ""), "/").concat(String(c).padStart(3, "0")).concat(String(an2).padStart(3, "0"), ".mp3") : null;
      if (!url) {
        if (!mpAyah) {
          i(false);
          return;
        }
        const C = new Audio(mpAyah);
        d.current = C, C.oncanplay = () => a(false), C.onplay = () => {
          i(true), a(false);
        }, C.onended = () => playNext(), C.onerror = () => {
          i(false), a(false);
        }, C.play().catch(() => a(false));
        return;
      }
      const S = new Audio(url);
      d.current = S, S.oncanplay = () => a(false), S.onplay = () => {
        i(true), a(false);
      }, S.onended = () => playNext(), S.onerror = () => {
        a(false), i(false);
        if (!mpAyah) return;
        const C = new Audio(mpAyah);
        d.current = C, C.onplay = () => {
          i(true), a(false);
        }, C.onended = () => playNext(), C.onerror = () => {
          i(false), a(false);
        }, C.play().catch(() => a(false));
      }, S.play().catch(() => a(false));
    };
    playNext();
  }, [c, b, g, w, s, m]);
  return x.useEffect(() => () => m(), [m]), c < 1 ? null : u ? h.jsxs("div", { className: "bg-card border border-border rounded-xl p-3 mt-2 w-full", children: [h.jsxs("div", { className: "flex items-center justify-between mb-2", children: [h.jsx("span", { className: "text-xs font-bold text-primary", children: "\u{1F3A7} \u062A\u0644\u0627\u0648\u0629 \u0627\u0644\u0622\u064A\u0629" }), h.jsx("button", { onClick: () => {
    m(), f(false);
  }, className: "text-xs text-muted-foreground hover:text-foreground", children: "\u2715" })] }), h.jsx("div", { className: "flex gap-1 mb-2", children: ["hafs", "warsh"].map((y) => h.jsx("button", { onClick: () => n(y), className: "flex-1 text-xs py-1.5 rounded-lg font-bold transition-colors ".concat(t === y ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"), children: y === "hafs" ? "\u062D\u0641\u0635" : "\u0648\u0631\u0634" }, y)) }), h.jsx("div", { className: "flex gap-1 mb-3 overflow-x-auto", children: v.map((y, S) => h.jsx("button", { onClick: () => {
    o(S), m();
  }, className: "shrink-0 text-[11px] px-2 py-1 rounded-lg transition-colors ".concat(r === S ? "bg-gold/20 text-gold border border-gold/30 font-bold" : "bg-secondary text-muted-foreground hover:text-foreground"), children: y.name }, y.id)) }), h.jsx("button", { onClick: p, disabled: l, className: "w-full py-2.5 rounded-xl font-bold text-sm transition-all ".concat(s ? "bg-destructive/10 border border-destructive text-destructive" : "bg-primary text-primary-foreground hover:opacity-90"), children: l ? "\u23F3 \u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : s ? "\u23F9 \u0625\u064A\u0642\u0627\u0641" : "\u25B6 \u0627\u0633\u062A\u0645\u0639 \u2014 \u0633\u0648\u0631\u0629 ".concat(g == null ? void 0 : g.surah, " \u0622\u064A\u0629 ").concat(b) })] }) : h.jsx("button", { onClick: () => f(true), className: "flex items-center gap-1 border border-primary/30 rounded-lg px-2.5 py-1 text-xs font-bold text-primary hover:bg-primary/5 transition-colors", children: "\u{1F3A7} \u0627\u0633\u062A\u0645\u0639" });
}
const nE = [{ id: "tafsir", label: "\u0627\u0644\u062A\u0641\u0633\u064A\u0631", icon: "\u{1F4DA}" }, { id: "meanings", label: "\u0645\u0639\u0627\u0646\u064A \u0627\u0644\u0645\u0641\u0631\u062F\u0627\u062A", icon: "\u{1F4DD}" }, { id: "location", label: "\u0623\u064A\u0646 \u0648\u0631\u062F\u062A\u061F", icon: "\u{1F5FA}\uFE0F" }, { id: "reasons", label: "\u0623\u0633\u0628\u0627\u0628 \u0627\u0644\u0646\u0632\u0648\u0644", icon: "\u{1F4DC}" }, { id: "complete", label: "\u0623\u0643\u0645\u0644 \u0627\u0644\u0627\u064A\u0629", icon: "\u270F\uFE0F" }, { id: "truefalse", label: "\u0635\u062D \u0623\u0648 \u062E\u0637\u0623", icon: "\u2714\uFE0F" }], rE = [5, 10, 20];
function yr(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
}
function oE(e, t, n, r, o) {
  const s = [], i = yr(e);
  for (const l of i) {
    if (s.length >= o) break;
    const a = ao(l.ref);
    if (!a) continue;
    const u = r[Math.floor(Math.random() * r.length)];
    if (u === "location") {
      if (Tg(a.surah) < 1) continue;
      const d = /* @__PURE__ */ new Set();
      for (; d.size < 3; ) {
        const c = Math.floor(Math.random() * 114) + 1, b = Ng(c);
        b && b !== a.surah && d.add(b);
      }
      const g = yr([a.surah, ...d]);
      s.push({ type: "location", question: '\u0641\u064A \u0623\u064A \u0633\u0648\u0631\u0629 \u0648\u0631\u062F\u062A \u0627\u0644\u0622\u064A\u0629:\n"'.concat(l.text, '"'), options: g, correctIdx: g.indexOf(a.surah), ayahRef: l.ref });
    } else if (u === "complete") {
      const f = l.text.split(" ");
      if (f.length < 6) continue;
      const d = Math.floor(f.length * 0.5), g = f.slice(0, d).join(" "), c = f.slice(d).join(" "), b = [];
      for (const w of yr(e)) {
        if (w.text === l.text) continue;
        const m = w.text.split(" ");
        if (m.length >= 4 && b.push(m.slice(Math.floor(m.length * 0.5)).join(" ")), b.length >= 3) break;
      }
      if (b.length < 3) continue;
      const v = yr([c, ...b.slice(0, 3)]);
      s.push({ type: "complete", question: '\u0623\u0643\u0645\u0644 \u0627\u0644\u0622\u064A\u0629:\n"'.concat(g, '..."'), options: v, correctIdx: v.indexOf(c), ayahRef: l.ref });
    } else if (u === "truefalse") {
      const _wr = yr(e).find(function(p) {
        return p.text !== l.text;
      });
      if (!_wr) continue;
      const _isTrue = Math.random() > 0.5;
      const _txt = _isTrue ? l.text.slice(0, 80) : _wr.text.slice(0, 80);
      const _q = "\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0622\u064A\u0629 \u0645\u0646 \u0633\u0648\u0631\u0629 " + a.surah + "?\n\u201C" + _txt + "...\u201D";
      s.push({ type: "truefalse", question: _q, options: ["\u2705 \u0635\u062D\u064A\u062D", "\u274C \u062E\u0637\u0623"], correctIdx: _isTrue ? 0 : 1, ayahRef: l.ref });
    } else {
      const d = { tafsir: "tafseer_saadi", meanings: "maany_aya", reasons: "reasons_of_verses" }[u] || "tafseer_saadi", g = "".concat(a.surah, "_").concat(a.ayahs[0]), c = t[g];
      if (!c || !c[d]) continue;
      const b = c[d], v = yr(e).filter((p) => p.text !== l.text).slice(0, 3);
      if (v.length < 3) continue;
      const w = l.text, m = yr([w, ...v.map((p) => p.text)]);
      s.push({ type: u, question: "\u0645\u0627 \u0627\u0644\u0622\u064A\u0629 \u0627\u0644\u062A\u064A ".concat(u === "tafsir" ? "\u062A\u0641\u0633\u064A\u0631\u0647\u0627" : u === "meanings" ? "\u0645\u0639\u0627\u0646\u064A \u0645\u0641\u0631\u062F\u0627\u062A\u0647\u0627" : "\u0633\u0628\u0628 \u0646\u0632\u0648\u0644\u0647\u0627", ':\n"').concat(b, '..."'), options: m, correctIdx: m.indexOf(w), ayahRef: l.ref });
    }
  }
  return s;
}
function Lg({ categories: e, ayahs: t, tafsir: n, categoryId: r, categoryName: o }) {
  const [s, i] = x.useState(/* @__PURE__ */ new Set(["location", "complete"])), [l, a] = x.useState(10), [u, f] = x.useState("setup"), [d, g] = x.useState([]), [c, b] = x.useState(0), [v, w] = x.useState([]), [m, p] = x.useState(null), [y, S] = x.useState(false), E = x.useMemo(() => {
    if (r !== void 0) return jg(e, t, r);
    const R = [];
    for (const $ of Object.values(t)) for (const [O, Q] of $) R.push({ text: O, ref: Q });
    return R;
  }, [e, t, r]), C = (R) => {
    i(($) => {
      const O = new Set($);
      return O.has(R) ? O.size > 1 && O.delete(R) : O.add(R), O;
    });
  }, k = x.useCallback(() => {
    const R = oE(E, n, e, [...s], l);
    R.length !== 0 && (g(R), b(0), w([]), p(null), S(false), f("playing"));
  }, [E, n, e, s, l]), j = (R) => {
    y || (p(R), S(true), w(($) => [...$, R]));
  }, L = () => {
    c + 1 >= d.length ? f("results") : (b((R) => R + 1), p(null), S(false));
  }, A = v.filter((R, $) => {
    var O;
    return R === ((O = d[$]) == null ? void 0 : O.correctIdx);
  }).length;
  if (u === "setup") return h.jsxs("div", { className: "my-4 bg-card border border-border rounded-xl p-5 text-center", children: [h.jsx("span", { className: "text-4xl block mb-2", children: "\u{1F9E0}" }), h.jsxs("h3", { className: "font-amiri text-xl font-bold text-foreground mb-1", children: ["\u{1F3AE} \u0645\u0633\u0627\u0628\u0642\u0629 ", o ? "".concat(o) : "\u0642\u0631\u0622\u0646\u064A\u0629"] }), h.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: o ? "\u0627\u062E\u062A\u0628\u0631 \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0636\u0648\u0639" : "\u062A\u0639\u0644\u0651\u0645 \u0648\u062A\u0646\u0627\u0641\u0633 \u0641\u064A \u0641\u0647\u0645 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645" }), h.jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-4", children: nE.map((R) => h.jsxs("button", { onClick: () => C(R.id), className: "border rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ".concat(s.has(R.id) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"), children: [R.icon, " ", R.label] }, R.id)) }), h.jsxs("div", { className: "flex items-center justify-center gap-3 mb-5", children: [h.jsx("span", { className: "text-sm text-muted-foreground", children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0626\u0644\u0629:" }), h.jsx("div", { className: "flex gap-1", children: rE.map((R) => h.jsx("button", { onClick: () => a(R), className: "w-10 h-10 rounded-full text-sm font-bold transition-colors ".concat(l === R ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-primary/10"), children: R }, R)) })] }), h.jsx("button", { onClick: k, className: "w-full max-w-xs mx-auto py-3 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all", children: "\u25B6 \u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0633\u0627\u0628\u0642\u0629" })] });
  if (u === "results") {
    const R = Math.round(A / d.length * 100);
    return h.jsxs("div", { className: "my-4 bg-card border border-border rounded-xl p-5 text-center", children: [h.jsx("span", { className: "text-5xl block mb-3", children: R >= 80 ? "\u{1F3C6}" : R >= 50 ? "\u{1F44F}" : "\u{1F4AA}" }), h.jsxs("h3", { className: "font-amiri text-xl font-bold text-foreground mb-2", children: ["\u0627\u0644\u0646\u062A\u064A\u062C\u0629: ", A, "/", d.length] }), h.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: R >= 80 ? "\u0645\u0645\u062A\u0627\u0632! \u0623\u062D\u0633\u0646\u062A" : R >= 50 ? "\u062C\u064A\u062F\u060C \u0648\u0627\u0635\u0644 \u0627\u0644\u062A\u0639\u0644\u0645" : "\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649" }), h.jsx("div", { className: "w-full bg-secondary rounded-full h-3 my-4 overflow-hidden", children: h.jsx("div", { className: "h-full bg-primary rounded-full transition-all duration-500", style: { width: "".concat(R, "%") } }) }), h.jsx("button", { onClick: () => {
      f("setup"), w([]);
    }, className: "py-2.5 px-8 rounded-xl font-bold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all", children: "\u{1F504} \u0623\u0639\u062F \u0627\u0644\u0645\u0633\u0627\u0628\u0642\u0629" })] });
  }
  const U = d[c];
  return h.jsxs("div", { className: "my-4 bg-card border border-border rounded-xl p-5", children: [h.jsxs("div", { className: "flex items-center justify-between mb-3", children: [h.jsxs("span", { className: "text-xs text-muted-foreground", children: ["\u0633\u0624\u0627\u0644 ", c + 1, " \u0645\u0646 ", d.length] }), h.jsxs("span", { className: "text-xs font-bold text-primary", children: ["\u2705 ", A, "/", v.length] })] }), h.jsx("div", { className: "w-full bg-secondary rounded-full h-1.5 mb-4", children: h.jsx("div", { className: "h-full bg-primary rounded-full transition-all", style: { width: "".concat((c + 1) / d.length * 100, "%") } }) }), h.jsx("p", { className: "font-amiri text-base leading-relaxed text-foreground mb-4 whitespace-pre-line", children: U.question }), h.jsx("div", { className: "flex flex-col gap-2 mb-4", children: U.options.map((R, $) => {
    let O = "border border-border bg-background text-foreground hover:border-primary/50";
    return y ? $ === U.correctIdx ? O = "border-2 border-primary bg-primary/10 text-primary font-bold" : $ === m && $ !== U.correctIdx ? O = "border-2 border-destructive bg-destructive/10 text-destructive" : O = "border border-border bg-background text-muted-foreground opacity-60" : m === $ && (O = "border-2 border-primary bg-primary/5 text-primary"), h.jsx("button", { onClick: () => j($), className: "text-right rounded-xl p-3 text-sm font-amiri transition-all ".concat(O), children: R }, $);
  }) }), y && h.jsx("button", { onClick: L, className: "w-full py-2.5 rounded-xl font-bold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all", children: c + 1 >= d.length ? "\u{1F4CA} \u0639\u0631\u0636 \u0627\u0644\u0646\u062A\u0627\u0626\u062C" : "\u2192 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062A\u0627\u0644\u064A" })] });
}
function sE({ categoryId: e, name: t, categories: n, ayahs: r, tafsir: o, onOpenTafsir: s, onOpenTadabbur: i, children: l, onNavigate: a }) {
  const u = r[String(e)] || [], [f, d] = x.useState(null), [, g] = x.useState(0), c = x.useCallback((v, w, m) => {
    navigator.clipboard.writeText("".concat(v, " - \u0645\u0646 \u0633\u0648\u0631\u0629 ").concat(w)).then(() => {
      d(m), setTimeout(() => d(null), 2e3);
    }).catch(() => {
      d(m), setTimeout(() => d(null), 2e3);
    });
  }, []), b = x.useCallback((v) => {
    lu(v) ? _g(v) : Rg(v), g((w) => w + 1);
  }, []);
  return h.jsxs("div", { className: "py-4", children: [l.length > 0 && h.jsx("div", { className: "mb-6", children: h.jsx(Mg, { categories: n, ayahs: r, parentId: e, onNavigate: a }) }), u.length > 0 && h.jsxs(h.Fragment, { children: [h.jsx(Lg, { categories: n, ayahs: r, tafsir: o, categoryId: e, categoryName: t }), h.jsxs("div", { className: "text-center py-4", children: [h.jsx("h2", { className: "font-amiri text-2xl text-primary", children: t }), h.jsxs("p", { className: "text-sm text-muted-foreground", children: [u.length, " \u0622\u064A\u0629 \u0643\u0631\u064A\u0645\u0629"] })] }), h.jsx("div", { className: "flex flex-col gap-4", children: u.map(([v, w], m) => {
    const p = { text: v, ref: w }, y = lu(p);
    return h.jsxs("div", { className: "ayah-item animate-fade-up bg-ayah-bg border border-ayah-border rounded-xl p-5 pt-6 relative shadow-sm hover:border-gold-light hover:shadow-md transition-all", style: { animationDelay: "".concat(m * 0.02, "s") }, children: [h.jsx("span", { className: "absolute -top-2.5 right-4 bg-primary text-primary-foreground text-xs px-3 py-0.5 rounded-full", children: m + 1 }), h.jsx("p", { className: "font-amiri text-lg leading-[2.2] text-foreground text-justify mb-3", children: v }), h.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-2", children: [h.jsx("span", { className: "text-gold", children: "\u{1F4D6}" }), h.jsxs("span", { className: "font-amiri", children: ["\u0645\u0646 \u0633\u0648\u0631\u0629 ", w] }), h.jsxs("div", { className: "mr-auto flex items-center gap-1", children: [h.jsx("button", { onClick: () => b(p), className: "border rounded-md px-2 py-0.5 text-xs transition-colors ".concat(y ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground hover:border-gold hover:text-gold"), children: y ? "\u2B50" : "\u2606" }), h.jsx("button", { onClick: () => c(v, w, m), className: "border rounded-md px-2 py-0.5 text-xs transition-colors ".concat(f === m ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-gold hover:text-gold"), children: f === m ? "\u2705" : "\u0646\u0633\u062E" })] })] }), h.jsxs("div", { className: "flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-border", children: [h.jsx("button", { onClick: () => i(w), className: "flex items-center gap-1 border border-primary/30 rounded-lg px-2.5 py-1 text-xs font-bold text-primary hover:bg-primary/5 transition-colors", children: "\u{1F33F} \u062A\u062F\u0628\u0631 \u0627\u0644\u0622\u064A\u0629" }), h.jsx(tE, { ref_: w }), Object.keys(Ht).map((S) => h.jsx("button", { onClick: () => s(w, S), className: "border border-border rounded-lg px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors", children: Ht[S] }, S))] })] }, m);
  }) })] })] });
}
function iE({ ref_: e, field: t, results: n, onClose: r }) {
  const o = ao(e), s = (o == null ? void 0 : o.surah) || e;
  return h.jsx("div", { className: "fixed inset-0 bg-foreground/60 z-[500] flex items-end justify-center", onClick: (i) => {
    i.target === i.currentTarget && r();
  }, children: h.jsxs("div", { className: "animate-slide-up bg-card border border-border rounded-t-[20px] w-full max-w-[680px] max-h-[82vh] overflow-hidden flex flex-col shadow-2xl", children: [h.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border shrink-0", children: [h.jsxs("div", { children: [h.jsx("h3", { className: "text-base text-primary font-bold", children: Ht[t] }), h.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: ["\u0633\u0648\u0631\u0629 ", s, " \u2014 ", (o == null ? void 0 : o.ayahs.length) === 1 ? "\u0622\u064A\u0629 ".concat(o.ayahs[0]) : "\u0622\u064A\u0627\u062A ".concat(o == null ? void 0 : o.ayahs.join("\u060C "))] })] }), h.jsx("button", { onClick: r, className: "w-8 h-8 flex items-center justify-center border border-border text-muted-foreground rounded-full hover:bg-muted transition-colors", children: "\u2715" })] }), h.jsx("div", { className: "flex-1 overflow-y-auto p-5", children: n.length > 0 ? n.map((i, l) => h.jsxs("div", { className: "mb-4 last:mb-0", children: [n.length > 1 && h.jsxs("p", { className: "text-xs text-primary font-bold mb-2 pb-1 border-b border-border", children: ["\u0622\u064A\u0629 ", i.ayah] }), h.jsx("div", { className: "text-sm leading-[2] text-foreground text-justify whitespace-pre-wrap", dangerouslySetInnerHTML: { __html: i.text.replace(/\n/g, "<br>") } })] }, l)) : h.jsx("div", { className: "text-center text-muted-foreground py-10", children: "\u0644\u0627 \u062A\u062A\u0648\u0641\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0647\u0630\u0647 \u0627\u0644\u0622\u064A\u0629" }) })] }) });
}
function lE({ ref_: e, onClose: t }) {
  const n = ao(e), [_pm, _setPm] = x.useState(() => typeof Ws !== "undefined" && Ws ? Ws : {});
  x.useEffect(() => {
    if (Object.keys(_pm).length === 0) Pg().then(_setPm);
  }, []);
  const u = x.useMemo(() => BS(_pm, e), [_pm, e]);
  x.useEffect(() => {
    if (!u) return;
    if (typeof window !== "undefined" && window.AndroidBridge && window.AndroidBridge.openTadabbur) {
      window.AndroidBridge.openTadabbur(u);
      t();
      return;
    }
    window.open(u, "_blank");
    t();
  }, [u]);
  if (!u && Object.keys(_pm).length > 0) {
    setTimeout(t, 1500);
    return h.jsxs("div", { className: "fixed inset-0 z-[600] flex items-center justify-center bg-black/60", children: [h.jsxs("div", { className: "bg-card rounded-xl p-6 mx-4 text-center shadow-xl", children: [h.jsx("p", { className: "text-foreground font-amiri text-base mb-4", children: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0631\u0627\u0628\u0637 \u0627\u0644\u062A\u062F\u0628\u0631 \u0644\u0647\u0630\u0647 \u0627\u0644\u0622\u064A\u0629" }), h.jsx("button", { onClick: t, className: "bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-bold", children: "\u0625\u063A\u0644\u0627\u0642" })] })] });
  }
  return null;
}
function _normAr(s) {
  return s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED]/g, "").replace(/[أإآاٱ]/g, "\u0627").replace(/[ىي]/g, "\u064A").replace(/ة/g, "\u0647").replace(new RegExp("(?<=[\u0628\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064A])\u0627(?=[\u0628\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064A])", "g"), "");
}
function uE(e, t) {
  const _nt = _normAr(t.trim());
  const _words = _nt.split(/\s+/).filter(Boolean);
  if (!_words.length) return h.jsx("span", { children: e });
  const _ne = _normAr(e);
  const _spans = [];
  for (const _w2 of _words) {
    let i = 0;
    while (true) {
      const f = _ne.indexOf(_w2, i);
      if (f === -1) break;
      _spans.push([f, f + _w2.length]);
      i = f + 1;
    }
  }
  _spans.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const sp2 of _spans) {
    if (merged.length && sp2[0] < merged[merged.length - 1][1]) merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], sp2[1]);
    else merged.push([...sp2]);
  }
  let cur = 0;
  const res = [];
  for (const [s2, e2] of merged) {
    if (cur < s2) res.push(h.jsx("span", { children: e.slice(cur, s2) }, cur));
    res.push(h.jsx("mark", { className: "bg-gold/25 rounded px-0.5", children: e.slice(s2, e2) }, s2));
    cur = e2;
  }
  if (cur < e.length) res.push(h.jsx("span", { children: e.slice(cur) }, cur));
  return h.jsx(h.Fragment, { children: res });
}
function aE({ query: e, onQueryChange: t, categories: n, ayahs: r, onGoToCategory: o }) {
  const [_dq, _setDq] = x.useState(e);
  x.useEffect(() => {
    const id2 = setTimeout(() => _setDq(e), 220);
    return () => clearTimeout(id2);
  }, [e]);
  const s = x.useMemo(() => {
    var f, d, g;
    const i = _dq.trim();
    if (!i) return { ayahs: [], cats: [], total: 0 };
    const l = i.match(/^(\d+):(\d+)$/);
    if (l) {
      const c = parseInt(l[1]), b = parseInt(l[2]), v = Ng(c);
      if (v) {
        const w = [];
        for (const [m, p] of Object.entries(r)) for (const [y, S] of p) {
          const E = S.trim();
          if (E.includes(v)) {
            const C = E.split(" "), k = C[C.length - 1];
            if (k.includes("-")) {
              const [j, L] = k.split("-").map(Number);
              b >= j && b <= L && w.push({ text: y, ref: S, catId: parseInt(m), catName: ((f = n[m]) == null ? void 0 : f[1]) || "" });
            } else parseInt(k) === b && w.push({ text: y, ref: S, catId: parseInt(m), catName: ((d = n[m]) == null ? void 0 : d[1]) || "" });
          }
        }
        return { ayahs: w, cats: [], total: w.length };
      }
    }
    const _ni = _normAr(i);
    const a = [], u = [];
    for (const [c, [, b]] of Object.entries(n)) _normAr(b).includes(_ni) && u.push({ id: parseInt(c), name: b });
    const _surahIdx = Tg(i);
    const _seen = /* @__PURE__ */ new Set();
    if (_surahIdx > 0) {
      const _sname = Ng(_surahIdx);
      for (const [c, b] of Object.entries(r)) {
        for (const [v, w] of b) {
          if (w.trim().includes(_sname) && !_seen.has(v)) {
            a.push({ text: v, ref: w, catId: parseInt(c), catName: ((g = n[c]) == null ? void 0 : g[1]) || "", _score: 100 });
            _seen.add(v);
          }
        }
      }
    }
    const _qwords = _ni.split(/\s+/).filter(Boolean);
    for (const [c, b] of Object.entries(r)) {
      for (const [v, w] of b) {
        if (_seen.has(v)) continue;
        const _nv = _normAr(v);
        if (_qwords.every((_w2) => _nv.includes(_w2))) {
          let _sc = 0;
          for (const _w2 of _qwords) {
            const _re = new RegExp(_w2, "g");
            const _cnt = (_nv.match(_re) || []).length;
            const _reWord = new RegExp("(^|\\s)" + _w2, "g");
            const _wcnt = (_nv.match(_reWord) || []).length;
            _sc += _wcnt * 3 + (_cnt - _wcnt) * 1;
          }
          _sc += Math.max(0, 10 - v.split(" ").length * 0.2);
          a.push({ text: v, ref: w, catId: parseInt(c), catName: ((g = n[c]) == null ? void 0 : g[1]) || "", _score: _sc });
          _seen.add(v);
        }
      }
    }
    a.sort((x2, y) => y._score - x2._score);
    const total = a.length;
    return { ayahs: a.slice(0, 150), cats: u.slice(0, 10), total };
  }, [_dq, n, r]);
  return h.jsx("div", {
    className: "sticky top-[66px] z-40 bg-secondary border-b border-border",
    children: h.jsxs("div", { className: "max-w-[700px] mx-auto p-3", children: [
      h.jsx("input", {
        type: "text",
        value: e,
        onChange: (i) => t(i.target.value),
        placeholder: "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0622\u064A\u0627\u062A... \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u0623\u0648 2:255",
        className: "w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-gold-light focus:ring-2 focus:ring-gold/10 outline-none transition-all",
        autoFocus: true,
        dir: "rtl"
      }),
      _dq.trim() && h.jsxs("div", { className: "flex items-center justify-between mt-1.5 px-1", children: [
        h.jsxs("span", { className: "text-xs text-muted-foreground", children: [s.total > 100 ? "\u0623\u0643\u062B\u0631 \u0645\u0646 100" : s.total, " \u0646\u062A\u064A\u062C\u0629"] }),
        s.total > 100 && h.jsx("span", { className: "text-xs text-amber-500", children: "\u062F\u0642\u0642 \u0627\u0644\u0628\u062D\u062B \u0644\u0644\u0645\u0632\u064A\u062F" })
      ] }),
      h.jsxs("div", { className: "mt-2 max-h-[70vh] overflow-y-auto", children: [
        s.cats.map((i) => h.jsxs("button", {
          onClick: () => o(i.id),
          className: "w-full bg-card border border-border rounded-lg p-3 mb-2 flex items-center gap-2 hover:border-gold-light hover:bg-card/80 transition-colors text-right",
          children: [h.jsx("span", { className: "text-gold", children: "\u{1F4C2}" }), h.jsx("span", { className: "font-amiri text-foreground", children: i.name })]
        }, i.id)),
        s.ayahs.map((i, l) => h.jsxs("button", {
          onClick: () => o(i.catId, i.text),
          className: "w-full bg-card border border-border rounded-lg p-3 mb-2 hover:border-gold-light hover:bg-card/80 transition-colors text-right",
          children: [
            h.jsx("p", { className: "font-amiri text-foreground leading-relaxed mb-1 line-clamp-2", children: _dq.trim() ? uE(i.text, _dq.trim()) : i.text }),
            h.jsxs("div", { className: "flex gap-3 text-xs text-muted-foreground", children: [
              h.jsxs("span", { children: ["\u{1F4D6} ", i.ref] }),
              h.jsxs("span", { children: ["\u{1F4C2} ", i.catName] })
            ] })
          ]
        }, l)),
        _dq.trim() && s.ayahs.length === 0 && s.cats.length === 0 && h.jsxs("div", { className: "text-center py-10", children: [
          h.jsx("p", { className: "text-4xl mb-3", children: "\u{1F50D}" }),
          h.jsx("p", { className: "text-foreground font-semibold mb-2", children: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C" }),
          h.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "\u062A\u0630\u0643\u0631: \u0627\u0644\u0628\u062D\u062B \u064A\u062C\u062F \u0627\u0644\u0622\u064A\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639 \u0641\u0642\u0637" }),
          h.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [
            h.jsx("p", { children: "\u{1F4A1} \u062C\u0631\u0628 \u0643\u0644\u0645\u0627\u062A \u0623\u0642\u0635\u0631 \u0645\u062B\u0644: \u0631\u062D\u0645\u060C \u0635\u0644\u0627\u0629\u060C \u062C\u0646\u0629" }),
            h.jsx("p", { children: "\u{1F4A1} \u0623\u0648 \u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0633\u0648\u0631\u0629 \u0648\u0627\u0644\u0622\u064A\u0629 \u0645\u062B\u0644: 2:255" }),
            h.jsx("p", { children: "\u{1F4A1} \u0623\u0648 \u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u062B\u0644: \u0627\u0644\u0628\u0642\u0631\u0629" })
          ] })
        ] })
      ] })
    ] })
  });
}
function cE({ onOpenTafsir: e, onOpenTadabbur: t }) {
  const [n, r] = x.useState(rs()), o = x.useCallback((i) => {
    _g(i), r(rs());
  }, []), s = x.useCallback((i, l) => {
    navigator.clipboard.writeText("".concat(i, " - \u0645\u0646 \u0633\u0648\u0631\u0629 ").concat(l));
  }, []);
  return n.length === 0 ? h.jsxs("div", { className: "max-w-[700px] mx-auto px-4 py-16 text-center", children: [h.jsx("span", { className: "text-5xl block mb-4", children: "\u2B50" }), h.jsx("h2", { className: "font-amiri text-xl text-primary mb-2", children: "\u0627\u0644\u0645\u0641\u0636\u0644\u0629" }), h.jsx("p", { className: "text-muted-foreground text-sm", children: "\u0644\u0645 \u062A\u0636\u0641 \u0623\u064A \u0622\u064A\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0628\u0639\u062F" }), h.jsx("p", { className: "text-muted-foreground text-xs mt-2", children: "\u0627\u0636\u063A\u0637 \u2606 \u0639\u0644\u0649 \u0623\u064A \u0622\u064A\u0629 \u0644\u0625\u0636\u0627\u0641\u062A\u0647\u0627 \u0647\u0646\u0627" })] }) : h.jsxs("div", { className: "max-w-[700px] mx-auto px-4 py-4", children: [h.jsxs("div", { className: "text-center mb-4", children: [h.jsx("h2", { className: "font-amiri text-xl text-primary", children: "\u2B50 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" }), h.jsxs("p", { className: "text-sm text-muted-foreground", children: [n.length, " \u0622\u064A\u0629 \u0645\u062D\u0641\u0648\u0638\u0629"] })] }), h.jsx("div", { className: "flex flex-col gap-4", children: n.map((i, l) => h.jsxs("div", { className: "animate-fade-up bg-ayah-bg border border-ayah-border rounded-xl p-5 relative", children: [h.jsx("p", { className: "font-amiri text-lg leading-[2.2] text-foreground text-justify mb-3", children: i.text }), h.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-2", children: [h.jsx("span", { className: "text-gold", children: "\u{1F4D6}" }), h.jsxs("span", { className: "font-amiri", children: ["\u0645\u0646 \u0633\u0648\u0631\u0629 ", i.ref] }), h.jsxs("div", { className: "mr-auto flex gap-1", children: [h.jsx("button", { onClick: () => o(i), className: "border border-destructive/30 text-destructive rounded-md px-2 py-0.5 text-xs hover:bg-destructive/10 transition-colors", children: "\u062D\u0630\u0641" }), h.jsx("button", { onClick: () => s(i.text, i.ref), className: "border border-border text-muted-foreground rounded-md px-2 py-0.5 text-xs hover:border-gold hover:text-gold transition-colors", children: "\u0646\u0633\u062E" })] })] }), h.jsxs("div", { className: "flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-border", children: [h.jsx("button", { onClick: () => t(i.ref), className: "flex items-center gap-1 border border-primary/30 rounded-lg px-2.5 py-1 text-xs font-bold text-primary hover:bg-primary/5 transition-colors", children: "\u{1F33F} \u062A\u062F\u0628\u0631" }), Object.keys(Ht).map((a) => h.jsx("button", { onClick: () => e(i.ref, a), className: "border border-border rounded-lg px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors", children: Ht[a] }, a))] })] }, l)) })] });
}
const Ig = "quran_daily_streak", Dg = "quran_last_read_date";
function Fg() {
  try {
    return parseInt(localStorage.getItem(Ig) || "0");
  } catch (e) {
    return 0;
  }
}
function zg() {
  return localStorage.getItem(Dg) || "";
}
function $g() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function dE() {
  const e = $g(), t = zg();
  let n = Fg();
  if (t === e) return n;
  const r = /* @__PURE__ */ new Date();
  r.setDate(r.getDate() - 1);
  const o = r.toISOString().slice(0, 10);
  return n = t === o ? n + 1 : 1, localStorage.setItem(Ig, String(n)), localStorage.setItem(Dg, e), n;
}
function fE({ ayahs: e, onOpenTafsir: t, onOpenTadabbur: n }) {
  const r = x.useMemo(() => VS(e), [e]), [o, s] = x.useState(() => Fg()), [i, l] = x.useState(() => zg() === $g()), [a, u] = x.useState(false), f = x.useCallback(() => {
    const c = dE();
    s(c), l(true);
  }, []), d = x.useCallback(() => {
    r && (navigator.clipboard.writeText("".concat(r.text, " - \u0645\u0646 \u0633\u0648\u0631\u0629 ").concat(r.ref)).catch(() => {
    }), u(true), setTimeout(() => u(false), 2e3));
  }, [r]), g = x.useCallback(() => {
    r && Rg(r);
  }, [r]);
  return r ? h.jsxs("div", { className: "my-4 bg-card border border-primary/20 rounded-xl overflow-hidden shadow-sm", children: [h.jsxs("div", { className: "flex items-center justify-between px-4 pt-3", children: [h.jsx("div", { className: "flex items-center gap-1.5", children: o > 0 && h.jsxs("span", { className: "bg-destructive/10 text-destructive text-xs font-bold px-2 py-0.5 rounded-full", children: ["\u{1F525} ", o, " \u064A\u0648\u0645"] }) }), h.jsx("span", { className: "text-sm font-bold text-primary", children: "\u{1F31F} \u0622\u064A\u0629 \u0627\u0644\u064A\u0648\u0645" })] }), h.jsx("p", { className: "font-amiri text-lg leading-[2.2] text-foreground text-center px-5 py-4", children: r.text }), h.jsxs("p", { className: "text-center text-sm text-muted-foreground font-amiri pb-2", children: ["\u{1F4D6} \u0645\u0646 \u0633\u0648\u0631\u0629 ", r.ref] }), h.jsxs("div", { className: "flex justify-center gap-2 pb-3", children: [h.jsx("button", { onClick: d, className: "border border-border rounded-lg px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors", children: a ? "\u2705 \u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "\u{1F4CB} \u0646\u0633\u062E" }), h.jsx("button", { onClick: g, className: "border border-border rounded-lg px-3 py-1 text-xs text-muted-foreground hover:border-gold hover:text-gold transition-colors", children: lu(r) ? "\u2B50 \u0641\u064A \u0627\u0644\u0645\u0641\u0636\u0644\u0629" : "\u2606 \u0623\u0636\u0641 \u0644\u0644\u0645\u0641\u0636\u0644\u0629" })] }), h.jsx("div", { className: "px-4 pb-3", children: h.jsx("button", { onClick: f, disabled: i, className: "w-full py-2.5 rounded-xl font-bold text-sm transition-all ".concat(i ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]"), children: i ? "\u2705 \u0642\u0631\u0623\u062A \u0622\u064A\u0629 \u0627\u0644\u064A\u0648\u0645" : "\u{1F4D6} \u0642\u0631\u0623\u062A \u0622\u064A\u0629 \u0627\u0644\u064A\u0648\u0645" }) }), h.jsxs("div", { className: "flex flex-wrap gap-1.5 justify-center px-4 pb-4", children: [h.jsx("button", { onClick: () => n(r.ref), className: "border border-primary/30 rounded-lg px-3 py-1 text-xs font-bold text-primary hover:bg-primary/5 transition-colors", children: "\u{1F33F} \u062A\u062F\u0628\u0631" }), Object.keys(Ht).slice(0, 3).map((c) => h.jsx("button", { onClick: () => t(r.ref, c), className: "border border-border rounded-lg px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors", children: Ht[c] }, c))] }), h.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center px-4 pb-4", children: Object.keys(Ht).slice(3).map((c) => h.jsx("button", { onClick: () => t(r.ref, c), className: "border border-border rounded-lg px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors", children: Ht[c] }, c)) })] }) : null;
}
const Xl = "https://quran-topics-v2.pages.dev/", Ef = "karimakremm@gmail.com";
function pE({ open: e, onClose: t, categories: n, ayahs: r, onGoToCategory: o, onOpenFavorites: s, darkMode: i, onDarkModeChange: l }) {
  const [a, u] = x.useState(/* @__PURE__ */ new Set()), [f, d] = x.useState(false), [g, c] = x.useState(false), b = (p) => {
    u((y) => {
      const S = new Set(y);
      return S.has(p) ? S.delete(p) : S.add(p), S;
    });
  }, v = async () => {
    try {
      await navigator.clipboard.writeText(Xl), c(true), setTimeout(() => c(false), 2e3);
    } catch (e2) {
      const p = document.createElement("textarea");
      p.value = Xl, document.body.appendChild(p), p.select(), document.execCommand("copy"), document.body.removeChild(p), c(true), setTimeout(() => c(false), 2e3);
    }
  }, w = () => {
    var S;
    const p = encodeURIComponent("\u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0642\u0631\u0622\u0646"), y = encodeURIComponent("\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645 \u0648 \u0631\u062D\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062A\u0647\n\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u062A\u064A \u0648\u0627\u062C\u0647\u062A\u0646\u064A:\n\n");
    (S = window.AndroidBridge) != null && S.sendEmail ? window.AndroidBridge.sendEmail(Ef, "\u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0642\u0631\u0622\u0646", "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645 \u0648 \u0631\u062D\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062A\u0647\n\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u062A\u064A \u0648\u0627\u062C\u0647\u062A\u0646\u064A:\n") : window.open("mailto:".concat(Ef, "?subject=").concat(p, "&body=").concat(y), "_self");
  }, m = (p, y) => wt(n, p).map((E) => {
    const C = wt(n, E.id).length > 0, k = ms(n, r, E.id), j = a.has(E.id);
    return h.jsxs("div", { children: [h.jsxs("button", { onClick: () => {
      C ? b(E.id) : o(E.id);
    }, className: "w-full flex items-center gap-2 py-2.5 text-right transition-colors hover:bg-secondary ".concat(y === 0 ? "font-bold text-sm border-b border-border" : "text-sm"), style: { paddingRight: "".concat(16 + y * 12, "px"), paddingLeft: "10px" }, children: [C ? h.jsx("span", { className: "text-xs text-muted-foreground w-3.5 shrink-0", children: j ? "\u25BC" : "\u25B6" }) : h.jsx("span", { className: "w-3.5 shrink-0" }), h.jsx("span", { className: "text-base shrink-0", children: y === 0 ? "\u{1F4DA}" : C ? "\u{1F4C2}" : "\u{1F4C4}" }), h.jsx("span", { className: "flex-1 text-foreground", children: E.name }), h.jsx("span", { className: "text-[10px] bg-primary text-primary-foreground rounded-md px-1.5 py-0.5 shrink-0", children: k })] }), C && j && m(E.id, y + 1)] }, E.id);
  });
  return h.jsxs(h.Fragment, { children: [e && h.jsx("div", { className: "fixed inset-0 bg-foreground/50 z-[800]", onClick: t }), h.jsxs("div", { className: "fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-card z-[900] transition-transform duration-300 flex flex-col shadow-2xl ".concat(e ? "translate-x-0" : "translate-x-full"), children: [h.jsxs("div", { className: "bg-gradient-to-l from-primary to-green-q-light p-5 text-primary-foreground shrink-0", children: [h.jsx("button", { onClick: t, className: "absolute top-3 left-3 bg-primary-foreground/20 w-7 h-7 rounded-full flex items-center justify-center text-sm", children: "\u2715" }), h.jsx("h3", { className: "text-xl font-bold", children: "\u{1F4D6} \u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0642\u0631\u0622\u0646" }), h.jsx("p", { className: "text-xs opacity-85 mt-1", children: "9,871 \u0622\u064A\u0629 \u0641\u064A 1,130 \u0645\u0648\u0636\u0648\u0639 \u0645\u0639 6 \u062A\u0641\u0627\u0633\u064A\u0631" })] }), h.jsxs("div", { className: "p-3 border-b border-border", children: [h.jsxs("button", { onClick: s, className: "w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary transition-colors", children: [h.jsx("span", { className: "text-lg", children: "\u2B50" }), h.jsx("span", { className: "text-sm text-foreground", children: "\u0627\u0644\u0645\u0641\u0636\u0644\u0629" })] }), h.jsxs("div", { className: "flex items-center gap-2 p-2.5", children: [h.jsx("span", { className: "text-lg", children: "\u{1F319}" }), h.jsx("span", { className: "text-sm text-foreground flex-1", children: "\u0627\u0644\u0648\u0636\u0639" }), h.jsx("div", { className: "flex border border-border rounded-lg overflow-hidden", children: ["auto", "light", "dark"].map((p) => h.jsx("button", { onClick: () => l(p), className: "px-2 py-1 text-xs transition-colors ".concat(i === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"), children: p === "auto" ? "\u062A\u0644\u0642\u0627\u0626\u064A" : p === "light" ? "\u2600\uFE0F" : "\u{1F319}" }, p)) })] })] }), h.jsxs("div", { className: "flex-1 overflow-y-auto", children: [h.jsx(khatmCmp, { categories: n, ayahs: r, onNavigate: function(id2, name) {
    o(id2);
    t();
  } }), h.jsx("p", { className: "text-xs text-muted-foreground font-bold px-4 pt-3 pb-1 uppercase tracking-wide", children: "\u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639" }), m(0, 0)] }), h.jsxs("div", { className: "border-t border-border shrink-0", children: [h.jsxs("button", { onClick: () => {
    d(true), c(false);
  }, className: "w-full flex items-center gap-3 p-3 hover:bg-secondary transition-colors", children: [h.jsx("span", { className: "text-lg", children: "\u{1F42B}" }), h.jsx("span", { className: "text-sm text-foreground", children: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" })] }), h.jsxs("button", { onClick: w, className: "w-full flex items-center gap-3 p-3 hover:bg-secondary transition-colors", children: [h.jsx("span", { className: "text-lg", children: "\u{1F41B}" }), h.jsx("span", { className: "text-sm text-foreground", children: "\u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u0645\u0634\u0643\u0644\u0629" })] })] }), h.jsxs("div", { className: "p-4 border-t border-border bg-secondary shrink-0", children: [h.jsx("p", { className: "text-center text-sm text-foreground leading-relaxed", children: "\u0625\u0646 \u0623\u0639\u062C\u0628\u0643 \u0647\u0630\u0627 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u0646\u0641\u0639\u0643" }), h.jsx("p", { className: "text-center text-sm text-foreground leading-relaxed", children: "\u0641\u0644\u0627 \u062A\u0646\u0633\u064E \u0627\u0644\u062F\u0639\u0627\u0621 \u0644\u064A \u0648\u0644\u0648\u0627\u0644\u062F\u064A\u0651 \u0628\u0627\u0644\u062E\u064A\u0631 \u0648\u0627\u0644\u0631\u062D\u0645\u0629 \u{1F932}" }), h.jsx("p", { className: "text-center text-base font-bold text-primary mt-1", children: "\u062C\u0632\u0627\u0643 \u0627\u0644\u0644\u0647 \u062E\u064A\u0631\u0627\u064B" })] })] }), f && h.jsxs("div", { className: "fixed inset-0 z-[1000] flex items-center justify-center p-4", onClick: () => d(false), children: [h.jsx("div", { className: "fixed inset-0 bg-foreground/50" }), h.jsxs("div", { className: "relative bg-card rounded-2xl p-6 max-w-sm w-full shadow-2xl z-10", onClick: (p) => p.stopPropagation(), children: [h.jsx("button", { onClick: () => d(false), className: "absolute top-3 left-3 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary", children: "\u2715" }), h.jsx("h3", { className: "text-lg font-bold text-foreground text-center mb-3", children: "\u{1F42B} \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" }), h.jsx("p", { className: "text-sm text-muted-foreground text-center mb-4", children: "\u0634\u0627\u0631\u0643 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u0639 \u0623\u0635\u062F\u0642\u0627\u0626\u0643 \u2013 \u064A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648iOS \u0648Android \u{1F4F1}\u{1F4BB}" }), h.jsxs("div", { className: "flex items-center gap-2 bg-secondary rounded-xl p-3", children: [h.jsx("button", { onClick: v, className: "shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-colors ".concat(g ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:opacity-90"), children: g ? "\u2705 \u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "\u{1F4CB} \u0646\u0633\u062E" }), h.jsx("p", { className: "text-xs text-muted-foreground truncate flex-1 text-left", dir: "ltr", children: Xl })] }), h.jsx("p", { className: "text-xs text-muted-foreground text-center mt-4 leading-relaxed", children: "\u062A\u0637\u0628\u064A\u0642 \u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u2013 \u0645\u062A\u0627\u062D \u0639\u0644\u0649 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u062F\u0648\u0646 \u062A\u062D\u0645\u064A\u0644 \u{1F4D6}\u2728" })] })] })] });
}
function hE({ categories: e, ayahs: t, currentCategoryId: n, onNavigate: r }) {
  const o = x.useMemo(() => {
    var f;
    const s = e[String(n)];
    if (!s) return [];
    const i = s[0];
    let a = [...wt(e, i).filter((d) => d.id !== n)];
    if (a.length < 4) {
      const d = (f = e[String(i)]) == null ? void 0 : f[0];
      if (d !== void 0) {
        const g = wt(e, d).filter((c) => c.id !== i);
        for (const c of g) a.push(...wt(e, c.id).slice(0, 2));
      }
    }
    return a.sort(() => Math.random() - 0.5).slice(0, 6).map((d) => ({ ...d, count: ms(e, t, d.id) }));
  }, [e, t, n]);
  return o.length === 0 ? null : h.jsxs("div", { className: "mt-8 mb-4", children: [h.jsxs("h3", { className: "text-sm font-bold text-primary mb-3 flex items-center gap-2", children: [h.jsx("span", { children: "\u{1F4A1}" }), " \u0645\u0648\u0627\u0636\u064A\u0639 \u0642\u062F \u062A\u0639\u062C\u0628\u0643"] }), h.jsx("div", { className: "grid grid-cols-2 gap-2", children: o.map((s) => h.jsxs("button", { onClick: () => r(s.id, s.name), className: "bg-card border border-border rounded-xl p-3 text-right hover:border-primary/50 hover:shadow-md hover:bg-primary/5 active:scale-95 transition-all group cursor-pointer", children: [h.jsxs("div", { className: "flex items-start justify-between gap-1", children: [h.jsx("p", { className: "text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug flex-1", children: s.name }), h.jsx("span", { className: "text-primary opacity-40 group-hover:opacity-100 transition-opacity text-xs mt-0.5 shrink-0", children: "\u2190" })] }), h.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [s.count, " \u0622\u064A\u0629"] })] }, s.id)) })] });
}
const mE = () => {
  var Q;
  const [e, t] = x.useState(null), [n, r] = x.useState(null), [o, s] = x.useState([]), [i, l] = x.useState(false), [a, u] = x.useState(""), [f, d] = x.useState(false), [g, c] = x.useState(false), [b, v] = x.useState(HS()), [w, m] = x.useState(null), [p, y] = x.useState(null);
  x.useEffect(() => {
    window.__appHasOverlay = !!(p || w);
  }, [p, w]);
  x.useEffect(() => {
    let I = true;
    return Promise.all([FS(), zS(), Pg()]).then(([z, N, D]) => {
      I && (r(null), t({ categories: z, ayahs: N, tafsir: {}, pageMap: D }));
    }).catch((z) => {
      console.error("Failed to load Quran data", z), I && r("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.");
    }), () => {
      I = false;
    };
  }, []), x.useEffect(() => {
    au(b);
    const I = b === "auto" ? setInterval(() => au("auto"), 6e4) : void 0;
    return () => clearInterval(I);
  }, [b]);
  const S = x.useCallback((I, z) => {
    s((N) => [...N, { id: I, name: z }]), l(false), d(false), KS(I, z), window.__historyPush && window.__historyPush(), window.scrollTo({ top: 0, behavior: "smooth" });
  }, []), E = x.useCallback(() => {
    s((I) => I.slice(0, -1)), window.__historyPop && window.__historyPop(), window.scrollTo({ top: 0, behavior: "smooth" });
  }, []), C = x.useCallback(() => {
    s([]), l(false), d(false), window.__historyReset && window.__historyReset(), window.scrollTo({ top: 0, behavior: "smooth" });
  }, []), k = x.useCallback((I, _ayahText) => {
    if (!e) return;
    const z = [];
    let N = I;
    for (; N !== 0; ) {
      const P = e.categories[String(N)];
      if (!P) break;
      z.unshift({ id: N, name: P[1] }), N = P[0];
    }
    s(z), l(false), d(false), c(false), window.scrollTo({ top: 0, behavior: "smooth" }), _ayahText && setTimeout(() => {
      const _els = document.querySelectorAll(".ayah-item");
      for (const _el of _els) {
        if (_el.textContent.includes(_ayahText.substring(0, 20))) {
          _el.scrollIntoView({ behavior: "smooth", block: "center" }), _el.classList.add("ayah-highlight"), setTimeout(() => _el.classList.remove("ayah-highlight"), 2e3);
          break;
        }
      }
    }, 350);
  }, [e]), j = x.useCallback((I, z) => {
    if (!e) return;
    const N = US(e.tafsir, I, z);
    m({ ref: I, field: z, results: N });
  }, [e]), L = x.useCallback((I) => {
    y(I);
  }, []);
  if (x.useEffect(() => {
    window.__closeTopOverlay = () => {
      if (p) {
        y(null);
        return true;
      }
      if (w) {
        m(null);
        return true;
      }
      if (f) {
        d(false);
        return true;
      }
      if (i) {
        l(false);
        return true;
      }
      if (o.length > 0) {
        E();
        return true;
      }
      return false;
    };
    return () => {
      delete window.__closeTopOverlay;
    };
  }, [o, i, f, w, p, E, y, m, d, l]), !e) return n ? h.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-6", children: h.jsxs("div", { className: "text-center max-w-sm", children: [h.jsx("p", { className: "text-foreground font-tajawal mb-2", children: n }), h.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "\u062A\u0623\u0643\u062F \u0645\u0646 \u062A\u0636\u0645\u064A\u0646 \u0645\u062C\u0644\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062F\u0627\u062E\u0644 assets \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629." }), h.jsx("button", { onClick: () => window.location.reload(), className: "rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground", children: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629" })] }) }) : h.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: h.jsxs("div", { className: "text-center", children: [h.jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [h.jsx("span", { className: "inline-block w-3 h-3 rounded-full bg-primary animate-bounce", style: { animationDelay: "0s" } }), h.jsx("span", { className: "inline-block w-3 h-3 rounded-full bg-primary animate-bounce", style: { animationDelay: "0.15s" } }), h.jsx("span", { className: "inline-block w-3 h-3 rounded-full bg-primary animate-bounce", style: { animationDelay: "0.3s" } })] }), h.jsx("p", { className: "text-muted-foreground font-tajawal", children: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A..." })] }) });
  const A = o.length > 0 ? o[o.length - 1].id : 0, U = wt(e.categories, A), R = ((Q = e.ayahs[String(A)]) == null ? void 0 : Q.length) > 0, $ = U.length === 0 && R, O = o.length > 0 ? o[o.length - 1].name : "\u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645";
  return h.jsxs("div", { className: "min-h-screen bg-background", children: [h.jsx(YS, { title: O, showBack: o.length > 0 || i || f, onBack: () => {
    f ? d(false) : i ? l(false) : E();
  }, onSearch: () => {
    l(!i), d(false);
  }, onMenu: () => c(true), onHome: C, searchOpen: i }), i && h.jsx(aE, { query: a, onQueryChange: u, categories: e.categories, ayahs: e.ayahs, onGoToCategory: k }), f && !i && h.jsx(cE, { onOpenTafsir: j, onOpenTadabbur: L }), !i && !f && h.jsxs("div", { className: "max-w-[700px] mx-auto px-4 pb-20", children: [o.length > 0 && h.jsxs("div", { className: "py-2 flex items-center gap-1 text-sm overflow-x-auto flex-nowrap", children: [h.jsx("button", { onClick: C, className: "text-muted-foreground hover:text-primary shrink-0", children: "\u{1F3E0}" }), o.map((I, z) => h.jsxs("span", { className: "flex items-center gap-1 shrink-0", children: [h.jsx("span", { className: "text-muted-foreground", children: "\u2039" }), h.jsx("button", { onClick: () => s(o.slice(0, z + 1)), className: "".concat(z === o.length - 1 ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"), children: I.name })] }, I.id))] }), o.length === 0 && h.jsxs(h.Fragment, { children: [(() => {
    const I = QS();
    return I ? h.jsxs("button", { onClick: () => k(I.id), className: "w-full my-3 bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 transition-colors shadow-sm", children: [h.jsx("span", { className: "text-3xl", children: "\u{1F4D6}" }), h.jsxs("div", { className: "text-right flex-1", children: [h.jsx("p", { className: "text-xs text-muted-foreground", children: "\u0623\u0643\u0645\u0644 \u0645\u0646 \u062D\u064A\u062B \u062A\u0648\u0642\u0641\u062A" }), h.jsx("p", { className: "text-base font-amiri font-bold text-foreground", children: I.name })] }), h.jsx("span", { className: "text-muted-foreground", children: "\u2190" })] }) : null;
  })(), h.jsx(fE, { ayahs: e.ayahs, onOpenTafsir: j, onOpenTadabbur: L }), h.jsx(wkTopicCmp, { categories: e.categories, ayahs: e.ayahs, tafsir: e.tafsir, onNavigate: S }), h.jsx(Lg, { categories: e.categories, ayahs: e.ayahs, tafsir: e.tafsir })] }), o.length === 0 ? h.jsx(qS, { categories: e.categories, ayahs: e.ayahs, parentId: 0, onNavigate: S }) : $ || R ? h.jsx(sE, { categoryId: A, name: O, categories: e.categories, ayahs: e.ayahs, tafsir: e.tafsir, onOpenTafsir: j, onOpenTadabbur: L, children: U, onNavigate: S }) : h.jsx(Mg, { categories: e.categories, ayahs: e.ayahs, parentId: A, onNavigate: S }), o.length > 0 && h.jsx(hE, { categories: e.categories, ayahs: e.ayahs, currentCategoryId: A, onNavigate: S })] }), w && h.jsx(iE, { ref_: w.ref, field: w.field, results: w.results, onClose: () => m(null) }), p && h.jsx(lE, { ref_: p, onClose: () => y(null) }), h.jsx(pE, { open: g, onClose: () => c(false), categories: e.categories, ayahs: e.ayahs, onNavigate: S, onGoToCategory: k, onOpenFavorites: () => {
    d(true), c(false);
  }, darkMode: b, onDarkModeChange: (I) => {
    v(I), WS(I);
  } })] });
}, gE = () => {
  const e = am();
  return x.useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", e.pathname);
  }, [e.pathname]), h.jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: h.jsxs("div", { className: "text-center", children: [h.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }), h.jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }), h.jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })] }) });
}, yE = new H0(), vE = () => h.jsx(Q0, { client: yE, children: h.jsxs(MS, { children: [h.jsx(G1, {}), h.jsx(uw, {}), h.jsx(_x, { children: h.jsxs(Px, { children: [h.jsx(Ya, { path: "/", element: h.jsx(mE, {}) }), h.jsx(Ya, { path: "*", element: h.jsx(gE, {}) })] }) })] }) });
var _KHATM_PLAN = [{ "week": 1, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u063A\u064A\u0628", "cat_ids": [349], "ayahs": 593, "is_review": false }, { "week": 2, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0622\u062E\u0631", "cat_ids": [354], "ayahs": 504, "is_review": false }, { "week": 3, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0628\u0627\u0644\u0644\u0647", "cat_ids": [348], "ayahs": 340, "is_review": false }, { "week": 4, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0645\u0624\u0645\u0646\u0648\u0646", "cat_ids": [352], "ayahs": 270, "is_review": false }, { "week": 5, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0644\u0647 \u062C\u0644 \u062C\u0644\u0627\u0644\u0647", "cat_ids": [351], "ayahs": 248, "is_review": false }, { "week": 6, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0645\u0644\u0627\u0626\u0643\u0629", "cat_ids": [353], "ayahs": 115, "is_review": false }, { "week": 7, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0623\u0646\u0628\u064A\u0627\u0621 \u0648 \u0627\u0644\u0631\u0633\u0644", "cat_ids": [347], "ayahs": 102, "is_review": false }, { "week": 8, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0627\u0644\u0643\u062A\u0628 \u0627\u0644\u0633\u0645\u0627\u0648\u064A\u0629 \u0627\u0644\u0623\u062E\u0631\u0649", "cat_ids": [350], "ayahs": 81, "is_review": false }, { "week": 9, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0648\u0635\u0641 \u0627\u0644\u0642\u0631\u0622\u0646 \u0648\u0648\u062C\u0648\u0628 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0628\u0647 + \u0627\u0644\u0642\u064E\u0633\u064E\u0645 \u0641\u064A \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 (+9)", "cat_ids": [576, 564, 569, 568, 567, 565, 566, 570, 575, 573, 574], "ayahs": 173, "is_review": false }, { "week": 10, "stage_num": 1, "stage_emoji": "\u2600\uFE0F", "stage_name": "\u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "stage_color": "amber", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0648\u0627\u0644\u0639\u0642\u064A\u062F\u0629", "cat_ids": [2], "ayahs": 0, "is_review": true }, { "week": 11, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u062A\u0648\u062D\u064A\u062F", "cat_ids": [17], "ayahs": 2333, "is_review": false }, { "week": 12, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0645\u062D\u0645\u062F", "cat_ids": [18], "ayahs": 435, "is_review": false }, { "week": 13, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u0635\u0644\u0627\u0629", "cat_ids": [20], "ayahs": 256, "is_review": false }, { "week": 14, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u062F\u064A\u0646", "cat_ids": [19], "ayahs": 128, "is_review": false }, { "week": 15, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u0632\u0643\u0627\u0629 \u0648\u0627\u0644\u0635\u062F\u0642\u0627\u062A", "cat_ids": [16], "ayahs": 69, "is_review": false }, { "week": 16, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u062D\u062C \u0648\u0627\u0644\u0639\u0645\u0631\u0629", "cat_ids": [22], "ayahs": 49, "is_review": false }, { "week": 17, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0645\u0633\u0627\u0626\u0644 \u0645\u062A\u0641\u0631\u0642\u0629 \u0645\u0646 \u0627\u0644\u0639\u0628\u0627\u062F\u0629", "cat_ids": [23], "ayahs": 45, "is_review": false }, { "week": 18, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0627\u0644\u0635\u064A\u0627\u0645", "cat_ids": [21], "ayahs": 25, "is_review": false }, { "week": 19, "stage_num": 2, "stage_emoji": "\u{1F54C}", "stage_name": "\u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "stage_color": "emerald", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u0639\u0628\u0627\u062F\u0629 \u0648\u0627\u0644\u0623\u0631\u0643\u0627\u0646", "cat_ids": [1], "ayahs": 0, "is_review": true }, { "week": 20, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u0623\u062E\u0644\u0627\u0642 \u0627\u0644\u0630\u0645\u064A\u0645\u0629", "cat_ids": [713], "ayahs": 447, "is_review": false }, { "week": 21, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u0623\u062E\u0644\u0627\u0642 \u0627\u0644\u062D\u0645\u064A\u062F\u0629", "cat_ids": [712], "ayahs": 336, "is_review": false }, { "week": 22, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0635\u0627\u0644\u062D", "cat_ids": [643], "ayahs": 324, "is_review": false }, { "week": 23, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0637\u0627\u0644\u062D", "cat_ids": [644], "ayahs": 283, "is_review": false }, { "week": 24, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629", "cat_ids": [645], "ayahs": 52, "is_review": false }, { "week": 25, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0627\u0644\u062C\u0632\u0627\u0621 + \u0627\u0644\u062F\u0639\u0648\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0645\u0644 (+1)", "cat_ids": [642, 641, 640], "ayahs": 46, "is_review": false }, { "week": 26, "stage_num": 3, "stage_emoji": "\u{1F331}", "stage_name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "stage_color": "green", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u062E\u0644\u0627\u0642", "cat_ids": [6], "ayahs": 0, "is_review": true }, { "week": 27, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0644\u0625\u0646\u0633\u0627\u0646", "cat_ids": [810], "ayahs": 162, "is_review": false }, { "week": 28, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A", "cat_ids": [813], "ayahs": 114, "is_review": false }, { "week": 29, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639", "cat_ids": [812], "ayahs": 108, "is_review": false }, { "week": 30, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0644\u0623\u0633\u0631\u0629", "cat_ids": [809], "ayahs": 95, "is_review": false }, { "week": 31, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0623\u062D\u0643\u0627\u0645 \u0642\u0627\u0646\u0648\u0646\u064A\u0629", "cat_ids": [927], "ayahs": 93, "is_review": false }, { "week": 32, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u062A\u0646\u0638\u064A\u0645\u0627\u062A \u0642\u0636\u0627\u0626\u064A\u0629", "cat_ids": [928], "ayahs": 65, "is_review": false }, { "week": 33, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0639\u0644\u0627\u0642\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u062F\u0633\u062A\u0648\u0631\u064A\u0629", "cat_ids": [929], "ayahs": 64, "is_review": false }, { "week": 34, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0646\u0641\u0627\u0642 \u0627\u0644\u0623\u0645\u0648\u0627\u0644", "cat_ids": [898], "ayahs": 50, "is_review": false }, { "week": 35, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0627\u0644\u0646\u0633\u0627\u0621 + \u0627\u0644\u0623\u0645\u0648\u0627\u0644 (+42)", "cat_ids": [814, 892, 900, 914, 808, 807, 908, 815, 973, 894, 905, 1130, 890, 891, 910, 912, 1133, 896, 897, 895, 902, 903, 906, 915, 974, 811, 913, 975, 978, 806, 889, 899, 904, 911, 1132, 972, 976, 977, 805, 893, 901, 907, 909, 1131], "ayahs": 403, "is_review": false }, { "week": 36, "stage_num": 4, "stage_emoji": "\u2764\uFE0F", "stage_name": "\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "stage_color": "rose", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", "cat_ids": [8], "ayahs": 0, "is_review": true }, { "week": 37, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0627\u0644\u062D\u0642\u0627\u0626\u0642 \u0627\u0644\u0639\u0644\u0645\u064A\u0629", "cat_ids": [995], "ayahs": 369, "is_review": false }, { "week": 38, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0627\u0644\u062C\u0647\u0627\u062F \u0641\u064A \u0627\u0644\u0625\u0633\u0644\u0627\u0645", "cat_ids": [583], "ayahs": 90, "is_review": false }, { "week": 39, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u062D\u062F\u0648\u062F \u0627\u0644\u062F\u0639\u0648\u0629 \u0644\u0644\u0647", "cat_ids": [547], "ayahs": 70, "is_review": false }, { "week": 40, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0648\u062C\u0648\u0628 \u0627\u0644\u062F\u0639\u0648\u0629 \u0644\u0644\u0647", "cat_ids": [549], "ayahs": 53, "is_review": false }, { "week": 41, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u062D\u0631\u0628", "cat_ids": [586], "ayahs": 40, "is_review": false }, { "week": 42, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062D\u0631\u0628\u064A\u0629 + \u0627\u0644\u062D\u062B \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0643\u0631 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0639\u0642\u0644 (+6)", "cat_ids": [582, 983, 548, 587, 994, 581, 585, 989], "ayahs": 144, "is_review": false }, { "week": 43, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0627\u0644\u0634\u0647\u062F\u0627\u0621 + \u0641\u0636\u0644 \u0627\u0644\u0639\u0644\u0645 \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 (+6)", "cat_ids": [584, 988, 984, 579, 986, 991, 580, 985], "ayahs": 54, "is_review": false }, { "week": 44, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0627\u0644\u0645\u0644\u0627\u062D\u0629 + \u0627\u0644\u062D\u062B \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0642\u0647 \u0641\u064A \u0627\u0644\u062F\u064A\u0646 (+6)", "cat_ids": [993, 982, 992, 981, 577, 578, 987, 990], "ayahs": 16, "is_review": false }, { "week": 45, "stage_num": 5, "stage_emoji": "\u2694\uFE0F", "stage_name": "\u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "stage_color": "sky", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u062F\u0639\u0648\u0629 \u0648\u0627\u0644\u062C\u0647\u0627\u062F \u0648\u0627\u0644\u0639\u0644\u0648\u0645", "cat_ids": [3], "ayahs": 0, "is_review": true }, { "week": 46, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0628\u0646\u0648 \u0625\u0633\u0631\u0627\u0626\u064A\u0644", "cat_ids": [1042], "ayahs": 135, "is_review": false }, { "week": 47, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0623\u0647\u0644 \u0627\u0644\u0643\u062A\u0627\u0628", "cat_ids": [1041], "ayahs": 70, "is_review": false }, { "week": 48, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0641\u0631\u0639\u0648\u0646", "cat_ids": [1080], "ayahs": 55, "is_review": false }, { "week": 49, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0627\u0644\u0646\u0635\u0627\u0631\u0649", "cat_ids": [1043], "ayahs": 47, "is_review": false }, { "week": 50, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0627\u0644\u0639\u0628\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0641\u064A \u0623\u0646\u0628\u0627\u0621 \u0627\u0644\u0642\u0631\u0649", "cat_ids": [1100], "ayahs": 42, "is_review": false }, { "week": 51, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u062B\u0645\u0648\u062F + \u0627\u0644\u0633\u064A\u0631 \u0648\u0627\u0644\u0646\u0638\u0631 \u0641\u064A \u0639\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0627\u0636\u064A\u0646 (+30)", "cat_ids": [1094, 1098, 1099, 1082, 1081, 1092, 1083, 1079, 1077, 1087, 1101, 1078, 1039, 1089, 1093, 1095, 1108, 1091, 1102, 1104, 1105, 1040, 1084, 1085, 1086, 1088, 1090, 1096, 1097, 1103, 1106, 1107], "ayahs": 185, "is_review": false }, { "week": 52, "stage_num": 6, "stage_emoji": "\u{1F4D6}", "stage_name": "\u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "stage_color": "purple", "name": "\u0645\u0631\u0627\u062C\u0639\u0629: \u0627\u0644\u0642\u0635\u0635 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E", "cat_ids": [14], "ayahs": 0, "is_review": true }];
function _isoWk() {
  var d = /* @__PURE__ */ new Date(), j = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())), dn2 = j.getUTCDay() || 7;
  j.setUTCDate(j.getUTCDate() + 4 - dn2);
  var y12 = new Date(Date.UTC(j.getUTCFullYear(), 0, 1));
  return Math.ceil(((j - y12) / 864e5 + 1) / 7);
}
function _KS() {
  try {
    return JSON.parse(localStorage.getItem("quran_khatm2") || "{}");
  } catch (e12) {
    return {};
  }
}
function _KSave(d) {
  localStorage.setItem("quran_khatm2", JSON.stringify(d));
}
function _WQS() {
  try {
    return JSON.parse(localStorage.getItem("weekly_quiz2") || "{}");
  } catch (e12) {
    return {};
  }
}
function _WQSave(d) {
  localStorage.setItem("weekly_quiz2", JSON.stringify(d));
}
function wkTopicCmp(props) {
  var e = props.categories, t = props.ayahs, n = props.tafsir, r = props.onNavigate;
  var _wk = _isoWk(), _yr = (/* @__PURE__ */ new Date()).getFullYear(), _wkey = _yr + "w" + _wk;
  var _wi = Math.min(_wk - 1, 51);
  var _wp = _KHATM_PLAN[_wi] || _KHATM_PLAN[0];
  var _cid = _wp.cat_ids && _wp.cat_ids[0] || 0;
  var _cn = _wp.name || "\u0645\u0648\u0636\u0648\u0639";
  var _ca = jg(e, t, _cid);
  var _wqA = x.useState(function() {
    return _WQS();
  }), _wq = _wqA[0], _setWq = _wqA[1];
  var _shA = x.useState(false), _sh = _shA[0], _setSh = _shA[1];
  var _qsA = x.useState([]), _qs = _qsA[0], _setQs = _qsA[1];
  var _qiA = x.useState(0), _qi = _qiA[0], _setQi = _qiA[1];
  var _slA = x.useState(null), _sl = _slA[0], _setSl = _slA[1];
  var _anA = x.useState(false), _an = _anA[0], _setAn = _anA[1];
  var _scA = x.useState(0), _sc = _scA[0], _setSc = _scA[1];
  var _dn = _wq[_wkey] && _wq[_wkey].done;
  var _startQ = function() {
    var _pool = [];
    (_wp.cat_ids || [_cid]).forEach(function(cid) {
      _pool = _pool.concat(jg(e, t, cid));
    });
    var _q = oE(_pool.length > 0 ? _pool : _ca, n, e, ["complete", "location", "tafsir"], 10);
    if (!_q.length) return;
    _setQs(_q);
    _setQi(0);
    _setSl(null);
    _setAn(false);
    _setSc(0);
    _setSh(true);
  };
  var _answer = function(i) {
    if (_an) return;
    _setSl(i);
    _setAn(true);
    if (_qs[_qi] && i === _qs[_qi].correctIdx) _setSc(function(s) {
      return s + 1;
    });
  };
  var _next = function() {
    if (_qi + 1 >= _qs.length) {
      var _f2 = _sc + (_qs[_qi] && _sl === _qs[_qi].correctIdx ? 1 : 0);
      var _nd = Object.assign({}, _wq);
      _nd[_wkey] = { done: true, score: _f2, total: _qs.length };
      _WQSave(_nd);
      _setWq(_nd);
      _setSh("done");
    } else {
      _setQi(function(i) {
        return i + 1;
      });
      _setSl(null);
      _setAn(false);
    }
  };
  if (_sh === "done") {
    var _res = _wq[_wkey] || { score: 0, total: 0 };
    var _pct = _res.total ? Math.round(_res.score / _res.total * 100) : 0;
    return h.jsxs("div", { className: "my-3 bg-card border border-border rounded-xl p-5 text-center", children: [h.jsx("span", { className: "text-4xl block mb-2", children: _pct >= 80 ? "\u{1F3C6}" : _pct >= 50 ? "\u{1F44F}" : "\u{1F4AA}" }), h.jsxs("h3", { className: "font-amiri text-lg font-bold text-foreground mb-2", children: ["\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639: ", _res.score, "/", _res.total] }), h.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [_wp.stage_emoji, " ", _wp.stage_name, " \u2022 ", _cn] }), h.jsxs("div", { className: "flex gap-2 justify-center", children: [h.jsx("button", { onClick: function() {
      _setSh(false);
    }, className: "py-2 px-5 rounded-xl font-bold text-sm bg-primary text-primary-foreground", children: "\u2190 \u0631\u062C\u0648\u0639" }), h.jsx("button", { onClick: function() {
      r(_cid, _cn);
    }, className: "py-2 px-5 rounded-xl font-bold text-sm border border-primary text-primary", children: "\u{1F4D6} \u0627\u0644\u0622\u064A\u0627\u062A" })] })] });
  }
  if (_sh === true && _qs.length > 0) {
    var _q2 = _qs[_qi];
    return h.jsxs("div", { className: "my-3 bg-card border border-border rounded-xl p-4", children: [h.jsxs("div", { className: "flex justify-between mb-3", children: [h.jsxs("span", { className: "text-xs text-muted-foreground", children: ["\u0633\u0624\u0627\u0644 ", _qi + 1, "/", _qs.length] }), h.jsxs("span", { className: "text-xs font-bold text-primary", children: ["\u2705 ", _sc] })] }), h.jsx("div", { className: "w-full bg-secondary rounded-full h-1.5 mb-4", children: h.jsx("div", { className: "h-full bg-primary rounded-full", style: { width: (_qi + 1) / _qs.length * 100 + "%" } }) }), h.jsx("p", { className: "font-amiri text-base leading-relaxed text-foreground mb-4 whitespace-pre-line", children: _q2.question }), h.jsx("div", { className: "flex flex-col gap-2 mb-3", children: _q2.options.map(function(opt, si2) {
      var _bc = "border rounded-xl p-3 text-sm font-amiri text-right transition-all ";
      if (_an) {
        if (si2 === _q2.correctIdx) {
          _bc += "border-2 border-primary bg-primary/10 text-primary font-bold";
        } else if (si2 === _sl) {
          _bc += "border-2 border-destructive bg-destructive/10 text-destructive";
        } else {
          _bc += "border-border bg-background text-muted-foreground opacity-60";
        }
      } else if (si2 === _sl) {
        _bc += "border-2 border-primary bg-primary/5 text-primary";
      } else {
        _bc += "border-border bg-background text-foreground";
      }
      return h.jsx("button", { onClick: function() {
        _answer(si2);
      }, className: _bc, children: opt }, si2);
    }) }), _an && h.jsx("button", { onClick: _next, className: "w-full py-2.5 rounded-xl font-bold text-sm bg-primary text-primary-foreground", children: _qi + 1 >= _qs.length ? "\u{1F4CA} \u0639\u0631\u0636 \u0627\u0644\u0646\u062A\u064A\u062C\u0629" : "\u2190 \u0627\u0644\u062A\u0627\u0644\u064A" })] });
  }
  return h.jsxs("div", { className: "my-3 bg-card border border-primary/30 rounded-xl overflow-hidden", children: [h.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-primary/5", children: [h.jsxs("div", { className: "flex items-center gap-1.5", children: [h.jsx("span", { className: "text-base", children: _wp.stage_emoji }), h.jsx("span", { className: "text-sm font-bold text-primary", children: _wp.stage_name })] }), h.jsxs("span", { className: "text-xs text-muted-foreground", children: ["\u0623\u0633\u0628\u0648\u0639 ", _wk, "/52"] })] }), h.jsxs("div", { className: "px-4 py-3", children: [h.jsx("h3", { className: "font-amiri text-base font-bold text-foreground mb-1 leading-relaxed", children: _cn }), h.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [_wp.ayahs > 0 ? _wp.ayahs + " \u0622\u064A\u0629 \u0643\u0631\u064A\u0645\u0629" : ""] }), h.jsxs("div", { className: "flex gap-2", children: [h.jsx("button", { onClick: function() {
    r(_cid, _cn);
  }, className: "flex-1 py-2 rounded-xl text-sm font-bold bg-primary text-primary-foreground", children: "\u{1F4D6} \u0627\u0633\u062A\u0639\u0631\u0636 \u0627\u0644\u0622\u064A\u0627\u062A" }), h.jsx("button", { onClick: _startQ, disabled: _wp.is_review, className: "flex-1 py-2 rounded-xl text-sm font-bold border transition-colors " + (_dn ? "border-primary/30 text-primary bg-primary/5" : _wp.is_review ? "border-border text-muted-foreground opacity-50" : "border-border text-muted-foreground hover:border-primary hover:text-primary"), children: _dn ? "\u2705 " + _wq[_wkey].score + "/" + _wq[_wkey].total : _wp.is_review ? "\u{1F504} \u0623\u0633\u0628\u0648\u0639 \u0645\u0631\u0627\u062C\u0639\u0629" : "\u{1F3AF} \u0627\u062E\u062A\u0628\u0627\u0631 \u0623\u0633\u0628\u0648\u0639\u064A" })] })] })] });
}
function khatmCmp(props) {
  var r = props.onNavigate;
  var _wk = _isoWk();
  var _kA = x.useState(function() {
    return _KS();
  }), _k = _kA[0], _setK = _kA[1];
  var _oA = x.useState(false), _o2 = _oA[0], _setO = _oA[1];
  var _dn2 = Object.keys(_k).filter(function(kk) {
    return _k[kk];
  }).length;
  var _pct2 = Math.round(_dn2 / 52 * 100);
  var _tog = function(wi2) {
    var _nd = Object.assign({}, _k);
    _nd[wi2] = !_nd[wi2];
    _KSave(_nd);
    _setK(_nd);
  };
  var _stageColors = { "amber": "bg-amber-50 border-amber-200 dark:bg-amber-950/20", "emerald": "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20", "green": "bg-green-50 border-green-200 dark:bg-green-950/20", "rose": "bg-rose-50 border-rose-200 dark:bg-rose-950/20", "sky": "bg-sky-50 border-sky-200 dark:bg-sky-950/20", "purple": "bg-purple-50 border-purple-200 dark:bg-purple-950/20" };
  return h.jsxs("div", { className: "my-3 bg-card border border-border rounded-xl overflow-hidden", children: [h.jsx("button", { onClick: function() {
    _setO(!_o2);
  }, className: "w-full", children: h.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [h.jsxs("div", { className: "flex items-center gap-2", children: [h.jsx("span", { children: "\u{1F5FA}\uFE0F" }), h.jsx("span", { className: "text-sm font-bold text-foreground", children: "\u062E\u0637\u0629 \u062E\u062A\u0645 \u0627\u0644\u0642\u0631\u0622\u0646 \u0628\u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639" })] }), h.jsxs("div", { className: "flex items-center gap-2", children: [h.jsxs("span", { className: "text-xs font-bold text-primary", children: [_pct2, "%"] }), h.jsx("span", { className: "text-muted-foreground text-sm", children: _o2 ? "\u25B2" : "\u25BC" })] })] }) }), h.jsxs("div", { className: "px-4 pb-3", children: [h.jsx("div", { className: "w-full bg-secondary rounded-full h-2 mb-1", children: h.jsx("div", { className: "h-full bg-primary rounded-full transition-all", style: { width: _pct2 + "%" } }) }), h.jsxs("p", { className: "text-xs text-muted-foreground", children: [_dn2, "/52 \u0623\u0633\u0628\u0648\u0639 \u2022 6 \u0645\u0631\u0627\u062D\u0644"] })] }), _o2 && h.jsx("div", { className: "border-t border-border max-h-80 overflow-y-auto", children: _KHATM_PLAN.map(function(wp2, wi2) {
    var _isDn = _k[wi2], _isCr = wi2 === Math.min(_wk - 1, 51);
    var _stageFirst = wi2 === 0 || _KHATM_PLAN[wi2 - 1].stage_name !== wp2.stage_name;
    return h.jsxs("div", { key: wi2, children: [_stageFirst && h.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border", children: [h.jsx("span", { children: wp2.stage_emoji }), h.jsx("span", { className: "text-xs font-bold text-foreground", children: wp2.stage_name })] }), h.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 border-b border-border/40 " + (_isCr ? "bg-primary/5" : ""), children: [h.jsx("button", { onClick: function() {
      _tog(wi2);
    }, className: "w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 " + (_isDn ? "bg-primary border-primary text-white" : "border-border"), children: _isDn ? "\u2713" : "" }), h.jsxs("div", { className: "flex-1 min-w-0", children: [h.jsxs("p", { className: "text-xs font-bold truncate " + (_isCr ? "text-primary" : _isDn ? "text-muted-foreground line-through" : "text-foreground"), children: ["\u0623\u0633\u0628\u0648\u0639 ", wi2 + 1, _isCr ? " \u25C4" : "", " ", wp2.is_review ? "\u{1F504}" : "", "  ", wp2.name] })] }), !wp2.is_review && h.jsx("button", { onClick: function() {
      r(wp2.cat_ids[0], wp2.name);
    }, className: "text-xs text-primary hover:text-primary/80 flex-shrink-0", children: "\u2192" })] })] }, wi2);
  }) })] });
}
Kh(document.getElementById("root")).render(h.jsx(vE, {}));
