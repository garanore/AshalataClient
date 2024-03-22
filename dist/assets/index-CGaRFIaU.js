function rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(r, s);
          a &&
            Object.defineProperty(
              e,
              s,
              a.get ? a : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a);
  }
})();
function Go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ld = { exports: {} },
  Is = {},
  sd = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jl = Symbol.for("react.element"),
  Nh = Symbol.for("react.portal"),
  bh = Symbol.for("react.fragment"),
  wh = Symbol.for("react.strict_mode"),
  Sh = Symbol.for("react.profiler"),
  Ch = Symbol.for("react.provider"),
  kh = Symbol.for("react.context"),
  Eh = Symbol.for("react.forward_ref"),
  Mh = Symbol.for("react.suspense"),
  Dh = Symbol.for("react.memo"),
  Rh = Symbol.for("react.lazy"),
  hc = Symbol.iterator;
function Ph(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hc && e[hc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ad = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  od = Object.assign,
  id = {};
function gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = id),
    (this.updater = n || ad);
}
gr.prototype.isReactComponent = {};
gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cd() {}
cd.prototype = gr.prototype;
function Xo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = id),
    (this.updater = n || ad);
}
var Zo = (Xo.prototype = new cd());
Zo.constructor = Xo;
od(Zo, gr.prototype);
Zo.isPureReactComponent = !0;
var pc = Array.isArray,
  ud = Object.prototype.hasOwnProperty,
  ei = { current: null },
  dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function md(e, t, n) {
  var r,
    s = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      ud.call(t, r) && !dd.hasOwnProperty(r) && (s[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    for (var i = Array(c), d = 0; d < c; d++) i[d] = arguments[d + 2];
    s.children = i;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) s[r] === void 0 && (s[r] = c[r]);
  return {
    $$typeof: jl,
    type: e,
    key: a,
    ref: o,
    props: s,
    _owner: ei.current,
  };
}
function Th(e, t) {
  return {
    $$typeof: jl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jl;
}
function Oh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vc = /\/+/g;
function fa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Oh("" + e.key)
    : t.toString(36);
}
function Yl(e, t, n, r, s) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case jl:
          case Nh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + fa(o, 0) : r),
      pc(s)
        ? ((n = ""),
          e != null && (n = e.replace(vc, "$&/") + "/"),
          Yl(s, t, n, "", function (d) {
            return d;
          }))
        : s != null &&
          (ti(s) &&
            (s = Th(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(vc, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), pc(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var i = r + fa(a, c);
      o += Yl(a, t, n, i, s);
    }
  else if (((i = Ph(e)), typeof i == "function"))
    for (e = i.call(e), c = 0; !(a = e.next()).done; )
      (a = a.value), (i = r + fa(a, c++)), (o += Yl(a, t, n, i, s));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Tl(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Yl(e, r, "", "", function (a) {
      return t.call(n, a, s++);
    }),
    r
  );
}
function _h(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  Gl = { transition: null },
  Lh = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Gl,
    ReactCurrentOwner: ei,
  };
Q.Children = {
  map: Tl,
  forEach: function (e, t, n) {
    Tl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Tl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ti(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = gr;
Q.Fragment = bh;
Q.Profiler = Sh;
Q.PureComponent = Xo;
Q.StrictMode = wh;
Q.Suspense = Mh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lh;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = od({}, e.props),
    s = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = ei.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (i in t)
      ud.call(t, i) &&
        !dd.hasOwnProperty(i) &&
        (r[i] = t[i] === void 0 && c !== void 0 ? c[i] : t[i]);
  }
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    c = Array(i);
    for (var d = 0; d < i; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: jl, type: e.type, key: s, ref: a, props: r, _owner: o };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: kh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ch, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = md;
Q.createFactory = function (e) {
  var t = md.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Eh, render: e };
};
Q.isValidElement = ti;
Q.lazy = function (e) {
  return { $$typeof: Rh, _payload: { _status: -1, _result: e }, _init: _h };
};
Q.memo = function (e, t) {
  return { $$typeof: Dh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Be.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
Q.useId = function () {
  return Be.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Be.current.useRef(e);
};
Q.useState = function (e) {
  return Be.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Be.current.useTransition();
};
Q.version = "18.2.0";
sd.exports = Q;
var y = sd.exports;
const fd = Go(y),
  Fh = rd({ __proto__: null, default: fd }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih = y,
  Ah = Symbol.for("react.element"),
  Bh = Symbol.for("react.fragment"),
  zh = Object.prototype.hasOwnProperty,
  Uh = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(e, t, n) {
  var r,
    s = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) zh.call(t, r) && !Wh.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Ah,
    type: e,
    key: a,
    ref: o,
    props: s,
    _owner: Uh.current,
  };
}
Is.Fragment = Bh;
Is.jsx = hd;
Is.jsxs = hd;
ld.exports = Is;
var l = ld.exports,
  Ka = {},
  pd = { exports: {} },
  Ge = {},
  vd = { exports: {} },
  gd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, z) {
    var W = _.length;
    _.push(z);
    e: for (; 0 < W; ) {
      var X = (W - 1) >>> 1,
        re = _[X];
      if (0 < s(re, z)) (_[X] = z), (_[W] = re), (W = X);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var z = _[0],
      W = _.pop();
    if (W !== z) {
      _[0] = W;
      e: for (var X = 0, re = _.length, xt = re >>> 1; X < xt; ) {
        var Ee = 2 * (X + 1) - 1,
          ct = _[Ee],
          Fe = Ee + 1,
          Wt = _[Fe];
        if (0 > s(ct, W))
          Fe < re && 0 > s(Wt, ct)
            ? ((_[X] = Wt), (_[Fe] = W), (X = Fe))
            : ((_[X] = ct), (_[Ee] = W), (X = Ee));
        else if (Fe < re && 0 > s(Wt, W)) (_[X] = Wt), (_[Fe] = W), (X = Fe);
        else break e;
      }
    }
    return z;
  }
  function s(_, z) {
    var W = _.sortIndex - z.sortIndex;
    return W !== 0 ? W : _.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      c = o.now();
    e.unstable_now = function () {
      return o.now() - c;
    };
  }
  var i = [],
    d = [],
    u = 1,
    m = null,
    p = 3,
    N = !1,
    g = !1,
    v = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(_) {
    for (var z = n(d); z !== null; ) {
      if (z.callback === null) r(d);
      else if (z.startTime <= _)
        r(d), (z.sortIndex = z.expirationTime), t(i, z);
      else break;
      z = n(d);
    }
  }
  function k(_) {
    if (((v = !1), x(_), !g))
      if (n(i) !== null) (g = !0), Ut(E);
      else {
        var z = n(d);
        z !== null && ae(k, z.startTime - _);
      }
  }
  function E(_, z) {
    (g = !1), v && ((v = !1), h(R), (R = -1)), (N = !0);
    var W = p;
    try {
      for (
        x(z), m = n(i);
        m !== null && (!(m.expirationTime > z) || (_ && !J()));

      ) {
        var X = m.callback;
        if (typeof X == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var re = X(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof re == "function" ? (m.callback = re) : m === n(i) && r(i),
            x(z);
        } else r(i);
        m = n(i);
      }
      if (m !== null) var xt = !0;
      else {
        var Ee = n(d);
        Ee !== null && ae(k, Ee.startTime - z), (xt = !1);
      }
      return xt;
    } finally {
      (m = null), (p = W), (N = !1);
    }
  }
  var b = !1,
    C = null,
    R = -1,
    T = 5,
    F = -1;
  function J() {
    return !(e.unstable_now() - F < T);
  }
  function je() {
    if (C !== null) {
      var _ = e.unstable_now();
      F = _;
      var z = !0;
      try {
        z = C(!0, _);
      } finally {
        z ? xe() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var xe;
  if (typeof f == "function")
    xe = function () {
      f(je);
    };
  else if (typeof MessageChannel < "u") {
    var Ze = new MessageChannel(),
      In = Ze.port2;
    (Ze.port1.onmessage = je),
      (xe = function () {
        In.postMessage(null);
      });
  } else
    xe = function () {
      j(je, 0);
    };
  function Ut(_) {
    (C = _), b || ((b = !0), xe());
  }
  function ae(_, z) {
    R = j(function () {
      _(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || N || ((g = !0), Ut(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(i);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var W = p;
      p = z;
      try {
        return _();
      } finally {
        p = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, z) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var W = p;
      p = _;
      try {
        return z();
      } finally {
        p = W;
      }
    }),
    (e.unstable_scheduleCallback = function (_, z, W) {
      var X = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? X + W : X))
          : (W = X),
        _)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = W + re),
        (_ = {
          id: u++,
          callback: z,
          priorityLevel: _,
          startTime: W,
          expirationTime: re,
          sortIndex: -1,
        }),
        W > X
          ? ((_.sortIndex = W),
            t(d, _),
            n(i) === null &&
              _ === n(d) &&
              (v ? (h(R), (R = -1)) : (v = !0), ae(k, W - X)))
          : ((_.sortIndex = re), t(i, _), g || N || ((g = !0), Ut(E))),
        _
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (_) {
      var z = p;
      return function () {
        var W = p;
        p = z;
        try {
          return _.apply(this, arguments);
        } finally {
          p = W;
        }
      };
    });
})(gd);
vd.exports = gd;
var $h = vd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd = y,
  Ye = $h;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yd = new Set(),
  Zr = {};
function _n(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) yd.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ja = Object.prototype.hasOwnProperty,
  Hh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gc = {},
  xc = {};
function Vh(e) {
  return Ja.call(xc, e)
    ? !0
    : Ja.call(gc, e)
    ? !1
    : Hh.test(e)
    ? (xc[e] = !0)
    : ((gc[e] = !0), !1);
}
function qh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qh(e, t, n, r) {
  if (t === null || typeof t > "u" || qh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, s, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ni = /[\-:]([a-z])/g;
function ri(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    Pe[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    Pe[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ni, ri);
  Pe[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function li(e, t, n, r) {
  var s = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qh(t, n, s, r) && (n = null),
    r || s === null
      ? Vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ol = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  si = Symbol.for("react.strict_mode"),
  Ya = Symbol.for("react.profiler"),
  jd = Symbol.for("react.provider"),
  Nd = Symbol.for("react.context"),
  ai = Symbol.for("react.forward_ref"),
  Ga = Symbol.for("react.suspense"),
  Xa = Symbol.for("react.suspense_list"),
  oi = Symbol.for("react.memo"),
  Yt = Symbol.for("react.lazy"),
  bd = Symbol.for("react.offscreen"),
  yc = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yc && e[yc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  ha;
function Br(e) {
  if (ha === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ha = (t && t[1]) || "";
    }
  return (
    `
` +
    ha +
    e
  );
}
var pa = !1;
function va(e, t) {
  if (!e || pa) return "";
  pa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var s = d.stack.split(`
`),
          a = r.stack.split(`
`),
          o = s.length - 1,
          c = a.length - 1;
        1 <= o && 0 <= c && s[o] !== a[c];

      )
        c--;
      for (; 1 <= o && 0 <= c; o--, c--)
        if (s[o] !== a[c]) {
          if (o !== 1 || c !== 1)
            do
              if ((o--, c--, 0 > c || s[o] !== a[c])) {
                var i =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    i.includes("<anonymous>") &&
                    (i = i.replace("<anonymous>", e.displayName)),
                  i
                );
              }
            while (1 <= o && 0 <= c);
          break;
        }
    }
  } finally {
    (pa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function Kh(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = va(e.type, !1)), e;
    case 11:
      return (e = va(e.type.render, !1)), e;
    case 1:
      return (e = va(e.type, !0)), e;
    default:
      return "";
  }
}
function Za(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Wn:
      return "Portal";
    case Ya:
      return "Profiler";
    case si:
      return "StrictMode";
    case Ga:
      return "Suspense";
    case Xa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nd:
        return (e.displayName || "Context") + ".Consumer";
      case jd:
        return (e._context.displayName || "Context") + ".Provider";
      case ai:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case oi:
        return (
          (t = e.displayName || null), t !== null ? t : Za(e.type) || "Memo"
        );
      case Yt:
        (t = e._payload), (e = e._init);
        try {
          return Za(e(t));
        } catch {}
    }
  return null;
}
function Jh(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Za(t);
    case 8:
      return t === si ? "StrictMode" : "Mode";
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
function dn(e) {
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
function wd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yh(e) {
  var t = wd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _l(e) {
  e._valueTracker || (e._valueTracker = Yh(e));
}
function Sd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ds(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cd(e, t) {
  (t = t.checked), t != null && li(e, "checked", t, !1);
}
function to(e, t) {
  Cd(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? no(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && no(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function no(e, t, n) {
  (t !== "number" || ds(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function kd(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ed(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ed(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ll,
  Md = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ll = Ll || document.createElement("div"),
          Ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ll.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function el(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Gh = ["Webkit", "ms", "Moz", "O"];
Object.keys($r).forEach(function (e) {
  Gh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
  });
});
function Dd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($r.hasOwnProperty(e) && $r[e])
    ? ("" + t).trim()
    : t + "px";
}
function Rd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Dd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Xh = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function so(e, t) {
  if (t) {
    if (Xh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function ao(e, t) {
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
      return !1;
    default:
      return !0;
  }
}
var oo = null;
function ii(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var io = null,
  rr = null,
  lr = null;
function Sc(e) {
  if ((e = wl(e))) {
    if (typeof io != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ws(t)), io(e.stateNode, e.type, t));
  }
}
function Pd(e) {
  rr ? (lr ? lr.push(e) : (lr = [e])) : (rr = e);
}
function Td() {
  if (rr) {
    var e = rr,
      t = lr;
    if (((lr = rr = null), Sc(e), t)) for (e = 0; e < t.length; e++) Sc(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function _d() {}
var ga = !1;
function Ld(e, t, n) {
  if (ga) return e(t, n);
  ga = !0;
  try {
    return Od(e, t, n);
  } finally {
    (ga = !1), (rr !== null || lr !== null) && (_d(), Td());
  }
}
function tl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ws(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var co = !1;
if (Lt)
  try {
    var kr = {};
    Object.defineProperty(kr, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", kr, kr),
      window.removeEventListener("test", kr, kr);
  } catch {
    co = !1;
  }
function Zh(e, t, n, r, s, a, o, c, i) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (u) {
    this.onError(u);
  }
}
var Hr = !1,
  ms = null,
  fs = !1,
  uo = null,
  ep = {
    onError: function (e) {
      (Hr = !0), (ms = e);
    },
  };
function tp(e, t, n, r, s, a, o, c, i) {
  (Hr = !1), (ms = null), Zh.apply(ep, arguments);
}
function np(e, t, n, r, s, a, o, c, i) {
  if ((tp.apply(this, arguments), Hr)) {
    if (Hr) {
      var d = ms;
      (Hr = !1), (ms = null);
    } else throw Error(P(198));
    fs || ((fs = !0), (uo = d));
  }
}
function Ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cc(e) {
  if (Ln(e) !== e) throw Error(P(188));
}
function rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ln(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a; ) {
        if (a === n) return Cc(s), e;
        if (a === r) return Cc(s), t;
        a = a.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = s), (r = a);
    else {
      for (var o = !1, c = s.child; c; ) {
        if (c === n) {
          (o = !0), (n = s), (r = a);
          break;
        }
        if (c === r) {
          (o = !0), (r = s), (n = a);
          break;
        }
        c = c.sibling;
      }
      if (!o) {
        for (c = a.child; c; ) {
          if (c === n) {
            (o = !0), (n = a), (r = s);
            break;
          }
          if (c === r) {
            (o = !0), (r = a), (n = s);
            break;
          }
          c = c.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = rp(e)), e !== null ? Ad(e) : null;
}
function Ad(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ad(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bd = Ye.unstable_scheduleCallback,
  kc = Ye.unstable_cancelCallback,
  lp = Ye.unstable_shouldYield,
  sp = Ye.unstable_requestPaint,
  ge = Ye.unstable_now,
  ap = Ye.unstable_getCurrentPriorityLevel,
  ci = Ye.unstable_ImmediatePriority,
  zd = Ye.unstable_UserBlockingPriority,
  hs = Ye.unstable_NormalPriority,
  op = Ye.unstable_LowPriority,
  Ud = Ye.unstable_IdlePriority,
  As = null,
  Ct = null;
function ip(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : dp,
  cp = Math.log,
  up = Math.LN2;
function dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cp(e) / up) | 0)) | 0;
}
var Fl = 64,
  Il = 4194304;
function Ur(e) {
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
function ps(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var c = o & ~s;
    c !== 0 ? (r = Ur(c)) : ((a &= o), a !== 0 && (r = Ur(a)));
  } else (o = n & ~s), o !== 0 ? (r = Ur(o)) : a !== 0 && (r = Ur(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function mp(e, t) {
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
function fp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - pt(a),
      c = 1 << o,
      i = s[o];
    i === -1
      ? (!(c & n) || c & r) && (s[o] = mp(c, t))
      : i <= t && (e.expiredLanes |= c),
      (a &= ~c);
  }
}
function mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wd() {
  var e = Fl;
  return (Fl <<= 1), !(Fl & 4194240) && (Fl = 64), e;
}
function xa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function hp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - pt(n),
      a = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a);
  }
}
function ui(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var Z = 0;
function $d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hd,
  di,
  Vd,
  qd,
  Qd,
  fo = !1,
  Al = [],
  nn = null,
  rn = null,
  ln = null,
  nl = new Map(),
  rl = new Map(),
  Xt = [],
  pp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ec(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rl.delete(t.pointerId);
  }
}
function Er(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [s],
      }),
      t !== null && ((t = wl(t)), t !== null && di(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function vp(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (nn = Er(nn, e, t, n, r, s)), !0;
    case "dragenter":
      return (rn = Er(rn, e, t, n, r, s)), !0;
    case "mouseover":
      return (ln = Er(ln, e, t, n, r, s)), !0;
    case "pointerover":
      var a = s.pointerId;
      return nl.set(a, Er(nl.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (a = s.pointerId), rl.set(a, Er(rl.get(a) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Kd(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fd(n)), t !== null)) {
          (e.blockedOn = t),
            Qd(e.priority, function () {
              Vd(n);
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
function Xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oo = r), n.target.dispatchEvent(r), (oo = null);
    } else return (t = wl(n)), t !== null && di(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Mc(e, t, n) {
  Xl(e) && n.delete(t);
}
function gp() {
  (fo = !1),
    nn !== null && Xl(nn) && (nn = null),
    rn !== null && Xl(rn) && (rn = null),
    ln !== null && Xl(ln) && (ln = null),
    nl.forEach(Mc),
    rl.forEach(Mc);
}
function Mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fo ||
      ((fo = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, gp)));
}
function ll(e) {
  function t(s) {
    return Mr(s, e);
  }
  if (0 < Al.length) {
    Mr(Al[0], e);
    for (var n = 1; n < Al.length; n++) {
      var r = Al[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && Mr(nn, e),
      rn !== null && Mr(rn, e),
      ln !== null && Mr(ln, e),
      nl.forEach(t),
      rl.forEach(t),
      n = 0;
    n < Xt.length;
    n++
  )
    (r = Xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
    Kd(n), n.blockedOn === null && Xt.shift();
}
var sr = Bt.ReactCurrentBatchConfig,
  vs = !0;
function xp(e, t, n, r) {
  var s = Z,
    a = sr.transition;
  sr.transition = null;
  try {
    (Z = 1), mi(e, t, n, r);
  } finally {
    (Z = s), (sr.transition = a);
  }
}
function yp(e, t, n, r) {
  var s = Z,
    a = sr.transition;
  sr.transition = null;
  try {
    (Z = 4), mi(e, t, n, r);
  } finally {
    (Z = s), (sr.transition = a);
  }
}
function mi(e, t, n, r) {
  if (vs) {
    var s = ho(e, t, n, r);
    if (s === null) Ma(e, t, r, gs, n), Ec(e, r);
    else if (vp(s, e, t, n, r)) r.stopPropagation();
    else if ((Ec(e, r), t & 4 && -1 < pp.indexOf(e))) {
      for (; s !== null; ) {
        var a = wl(s);
        if (
          (a !== null && Hd(a),
          (a = ho(e, t, n, r)),
          a === null && Ma(e, t, r, gs, n),
          a === s)
        )
          break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Ma(e, t, r, null, n);
  }
}
var gs = null;
function ho(e, t, n, r) {
  if (((gs = null), (e = ii(r)), (e = Nn(e)), e !== null))
    if (((t = Ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gs = e), null;
}
function Jd(e) {
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
      switch (ap()) {
        case ci:
          return 1;
        case zd:
          return 4;
        case hs:
        case op:
          return 16;
        case Ud:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  fi = null,
  Zl = null;
function Yd() {
  if (Zl) return Zl;
  var e,
    t = fi,
    n = t.length,
    r,
    s = "value" in en ? en.value : en.textContent,
    a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++);
  return (Zl = s.slice(e, 1 < r ? 1 - r : void 0));
}
function es(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bl() {
  return !0;
}
function Dc() {
  return !1;
}
function Xe(e) {
  function t(n, r, s, a, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Bl
        : Dc),
      (this.isPropagationStopped = Dc),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bl));
      },
      persist: function () {},
      isPersistent: Bl,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hi = Xe(xr),
  bl = de({}, xr, { view: 0, detail: 0 }),
  jp = Xe(bl),
  ya,
  ja,
  Dr,
  Bs = de({}, bl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Dr &&
            (Dr && e.type === "mousemove"
              ? ((ya = e.screenX - Dr.screenX), (ja = e.screenY - Dr.screenY))
              : (ja = ya = 0),
            (Dr = e)),
          ya);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ja;
    },
  }),
  Rc = Xe(Bs),
  Np = de({}, Bs, { dataTransfer: 0 }),
  bp = Xe(Np),
  wp = de({}, bl, { relatedTarget: 0 }),
  Na = Xe(wp),
  Sp = de({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cp = Xe(Sp),
  kp = de({}, xr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ep = Xe(kp),
  Mp = de({}, xr, { data: 0 }),
  Pc = Xe(Mp),
  Dp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Rp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function pi() {
  return Tp;
}
var Op = de({}, bl, {
    key: function (e) {
      if (e.key) {
        var t = Dp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = es(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pi,
    charCode: function (e) {
      return e.type === "keypress" ? es(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? es(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _p = Xe(Op),
  Lp = de({}, Bs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Tc = Xe(Lp),
  Fp = de({}, bl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pi,
  }),
  Ip = Xe(Fp),
  Ap = de({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = Xe(Ap),
  zp = de({}, Bs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Up = Xe(zp),
  Wp = [9, 13, 27, 32],
  vi = Lt && "CompositionEvent" in window,
  Vr = null;
Lt && "documentMode" in document && (Vr = document.documentMode);
var $p = Lt && "TextEvent" in window && !Vr,
  Gd = Lt && (!vi || (Vr && 8 < Vr && 11 >= Vr)),
  Oc = " ",
  _c = !1;
function Xd(e, t) {
  switch (e) {
    case "keyup":
      return Wp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function Hp(e, t) {
  switch (e) {
    case "compositionend":
      return Zd(t);
    case "keypress":
      return t.which !== 32 ? null : ((_c = !0), Oc);
    case "textInput":
      return (e = t.data), e === Oc && _c ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (Hn)
    return e === "compositionend" || (!vi && Xd(e, t))
      ? ((e = Yd()), (Zl = fi = en = null), (Hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qp[e.type] : t === "textarea";
}
function em(e, t, n, r) {
  Pd(r),
    (t = xs(t, "onChange")),
    0 < t.length &&
      ((n = new hi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qr = null,
  sl = null;
function Qp(e) {
  dm(e, 0);
}
function zs(e) {
  var t = Qn(e);
  if (Sd(t)) return e;
}
function Kp(e, t) {
  if (e === "change") return t;
}
var tm = !1;
if (Lt) {
  var ba;
  if (Lt) {
    var wa = "oninput" in document;
    if (!wa) {
      var Fc = document.createElement("div");
      Fc.setAttribute("oninput", "return;"),
        (wa = typeof Fc.oninput == "function");
    }
    ba = wa;
  } else ba = !1;
  tm = ba && (!document.documentMode || 9 < document.documentMode);
}
function Ic() {
  qr && (qr.detachEvent("onpropertychange", nm), (sl = qr = null));
}
function nm(e) {
  if (e.propertyName === "value" && zs(sl)) {
    var t = [];
    em(t, sl, e, ii(e)), Ld(Qp, t);
  }
}
function Jp(e, t, n) {
  e === "focusin"
    ? (Ic(), (qr = t), (sl = n), qr.attachEvent("onpropertychange", nm))
    : e === "focusout" && Ic();
}
function Yp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zs(sl);
}
function Gp(e, t) {
  if (e === "click") return zs(t);
}
function Xp(e, t) {
  if (e === "input" || e === "change") return zs(t);
}
function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : Zp;
function al(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ja.call(t, s) || !gt(e[s], t[s])) return !1;
  }
  return !0;
}
function Ac(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bc(e, t) {
  var n = Ac(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Ac(n);
  }
}
function rm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function lm() {
  for (var e = window, t = ds(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ds(e.document);
  }
  return t;
}
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ev(e) {
  var t = lm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          a = Math.min(r.start, s);
        (r = r.end === void 0 ? a : Math.min(r.end, s)),
          !e.extend && a > r && ((s = r), (r = a), (a = s)),
          (s = Bc(n, a));
        var o = Bc(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tv = Lt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  po = null,
  Qr = null,
  vo = !1;
function zc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vo ||
    Vn == null ||
    Vn !== ds(r) ||
    ((r = Vn),
    "selectionStart" in r && gi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qr && al(Qr, r)) ||
      ((Qr = r),
      (r = xs(po, "onSelect")),
      0 < r.length &&
        ((t = new hi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function zl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qn = {
    animationend: zl("Animation", "AnimationEnd"),
    animationiteration: zl("Animation", "AnimationIteration"),
    animationstart: zl("Animation", "AnimationStart"),
    transitionend: zl("Transition", "TransitionEnd"),
  },
  Sa = {},
  sm = {};
Lt &&
  ((sm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qn.animationend.animation,
    delete qn.animationiteration.animation,
    delete qn.animationstart.animation),
  "TransitionEvent" in window || delete qn.transitionend.transition);
function Us(e) {
  if (Sa[e]) return Sa[e];
  if (!qn[e]) return e;
  var t = qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sm) return (Sa[e] = t[n]);
  return e;
}
var am = Us("animationend"),
  om = Us("animationiteration"),
  im = Us("animationstart"),
  cm = Us("transitionend"),
  um = new Map(),
  Uc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fn(e, t) {
  um.set(e, t), _n(t, [e]);
}
for (var Ca = 0; Ca < Uc.length; Ca++) {
  var ka = Uc[Ca],
    nv = ka.toLowerCase(),
    rv = ka[0].toUpperCase() + ka.slice(1);
  fn(nv, "on" + rv);
}
fn(am, "onAnimationEnd");
fn(om, "onAnimationIteration");
fn(im, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(cm, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
_n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Wc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), np(r, t, void 0, e), (e.currentTarget = null);
}
function dm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var c = r[o],
            i = c.instance,
            d = c.currentTarget;
          if (((c = c.listener), i !== a && s.isPropagationStopped())) break e;
          Wc(s, c, d), (a = i);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((c = r[o]),
            (i = c.instance),
            (d = c.currentTarget),
            (c = c.listener),
            i !== a && s.isPropagationStopped())
          )
            break e;
          Wc(s, c, d), (a = i);
        }
    }
  }
  if (fs) throw ((e = uo), (fs = !1), (uo = null), e);
}
function le(e, t) {
  var n = t[No];
  n === void 0 && (n = t[No] = new Set());
  var r = e + "__bubble";
  n.has(r) || (mm(t, e, 2, !1), n.add(r));
}
function Ea(e, t, n) {
  var r = 0;
  t && (r |= 4), mm(n, e, r, t);
}
var Ul = "_reactListening" + Math.random().toString(36).slice(2);
function ol(e) {
  if (!e[Ul]) {
    (e[Ul] = !0),
      yd.forEach(function (n) {
        n !== "selectionchange" && (lv.has(n) || Ea(n, !1, e), Ea(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ul] || ((t[Ul] = !0), Ea("selectionchange", !1, t));
  }
}
function mm(e, t, n, r) {
  switch (Jd(t)) {
    case 1:
      var s = xp;
      break;
    case 4:
      s = yp;
      break;
    default:
      s = mi;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !co ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function Ma(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var c = r.stateNode.containerInfo;
        if (c === s || (c.nodeType === 8 && c.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var i = o.tag;
            if (
              (i === 3 || i === 4) &&
              ((i = o.stateNode.containerInfo),
              i === s || (i.nodeType === 8 && i.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; c !== null; ) {
          if (((o = Nn(c)), o === null)) return;
          if (((i = o.tag), i === 5 || i === 6)) {
            r = a = o;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  Ld(function () {
    var d = a,
      u = ii(n),
      m = [];
    e: {
      var p = um.get(e);
      if (p !== void 0) {
        var N = hi,
          g = e;
        switch (e) {
          case "keypress":
            if (es(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = _p;
            break;
          case "focusin":
            (g = "focus"), (N = Na);
            break;
          case "focusout":
            (g = "blur"), (N = Na);
            break;
          case "beforeblur":
          case "afterblur":
            N = Na;
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
            N = Rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = Ip;
            break;
          case am:
          case om:
          case im:
            N = Cp;
            break;
          case cm:
            N = Bp;
            break;
          case "scroll":
            N = jp;
            break;
          case "wheel":
            N = Up;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = Ep;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = Tc;
        }
        var v = (t & 4) !== 0,
          j = !v && e === "scroll",
          h = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var f = d, x; f !== null; ) {
          x = f;
          var k = x.stateNode;
          if (
            (x.tag === 5 &&
              k !== null &&
              ((x = k),
              h !== null && ((k = tl(f, h)), k != null && v.push(il(f, k, x)))),
            j)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((p = new N(p, g, null, n, u)), m.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          p &&
            n !== oo &&
            (g = n.relatedTarget || n.fromElement) &&
            (Nn(g) || g[Ft]))
        )
          break e;
        if (
          (N || p) &&
          ((p =
            u.window === u
              ? u
              : (p = u.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          N
            ? ((g = n.relatedTarget || n.toElement),
              (N = d),
              (g = g ? Nn(g) : null),
              g !== null &&
                ((j = Ln(g)), g !== j || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((N = null), (g = d)),
          N !== g)
        ) {
          if (
            ((v = Rc),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Tc),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (j = N == null ? p : Qn(N)),
            (x = g == null ? p : Qn(g)),
            (p = new v(k, f + "leave", N, n, u)),
            (p.target = j),
            (p.relatedTarget = x),
            (k = null),
            Nn(u) === d &&
              ((v = new v(h, f + "enter", g, n, u)),
              (v.target = x),
              (v.relatedTarget = j),
              (k = v)),
            (j = k),
            N && g)
          )
            t: {
              for (v = N, h = g, f = 0, x = v; x; x = Un(x)) f++;
              for (x = 0, k = h; k; k = Un(k)) x++;
              for (; 0 < f - x; ) (v = Un(v)), f--;
              for (; 0 < x - f; ) (h = Un(h)), x--;
              for (; f--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Un(v)), (h = Un(h));
              }
              v = null;
            }
          else v = null;
          N !== null && $c(m, p, N, v, !1),
            g !== null && j !== null && $c(m, j, g, v, !0);
        }
      }
      e: {
        if (
          ((p = d ? Qn(d) : window),
          (N = p.nodeName && p.nodeName.toLowerCase()),
          N === "select" || (N === "input" && p.type === "file"))
        )
          var E = Kp;
        else if (Lc(p))
          if (tm) E = Xp;
          else {
            E = Yp;
            var b = Jp;
          }
        else
          (N = p.nodeName) &&
            N.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Gp);
        if (E && (E = E(e, d))) {
          em(m, E, n, u);
          break e;
        }
        b && b(e, p, d),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            no(p, "number", p.value);
      }
      switch (((b = d ? Qn(d) : window), e)) {
        case "focusin":
          (Lc(b) || b.contentEditable === "true") &&
            ((Vn = b), (po = d), (Qr = null));
          break;
        case "focusout":
          Qr = po = Vn = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), zc(m, n, u);
          break;
        case "selectionchange":
          if (tv) break;
        case "keydown":
        case "keyup":
          zc(m, n, u);
      }
      var C;
      if (vi)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Hn
          ? Xd(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Gd &&
          n.locale !== "ko" &&
          (Hn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Hn && (C = Yd())
            : ((en = u),
              (fi = "value" in en ? en.value : en.textContent),
              (Hn = !0))),
        (b = xs(d, R)),
        0 < b.length &&
          ((R = new Pc(R, e, null, n, u)),
          m.push({ event: R, listeners: b }),
          C ? (R.data = C) : ((C = Zd(n)), C !== null && (R.data = C)))),
        (C = $p ? Hp(e, n) : Vp(e, n)) &&
          ((d = xs(d, "onBeforeInput")),
          0 < d.length &&
            ((u = new Pc("onBeforeInput", "beforeinput", null, n, u)),
            m.push({ event: u, listeners: d }),
            (u.data = C)));
    }
    dm(m, t);
  });
}
function il(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      a = s.stateNode;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      (a = tl(e, n)),
      a != null && r.unshift(il(e, a, s)),
      (a = tl(e, t)),
      a != null && r.push(il(e, a, s))),
      (e = e.return);
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $c(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var c = n,
      i = c.alternate,
      d = c.stateNode;
    if (i !== null && i === r) break;
    c.tag === 5 &&
      d !== null &&
      ((c = d),
      s
        ? ((i = tl(n, a)), i != null && o.unshift(il(n, i, c)))
        : s || ((i = tl(n, a)), i != null && o.push(il(n, i, c)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sv = /\r\n?/g,
  av = /\u0000|\uFFFD/g;
function Hc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sv,
      `
`
    )
    .replace(av, "");
}
function Wl(e, t, n) {
  if (((t = Hc(t)), Hc(e) !== t && n)) throw Error(P(425));
}
function ys() {}
var go = null,
  xo = null;
function yo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0,
  ov = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vc = typeof Promise == "function" ? Promise : void 0,
  iv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vc < "u"
      ? function (e) {
          return Vc.resolve(null).then(e).catch(cv);
        }
      : jo;
function cv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Da(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), ll(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  ll(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qc(e) {
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
var yr = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + yr,
  cl = "__reactProps$" + yr,
  Ft = "__reactContainer$" + yr,
  No = "__reactEvents$" + yr,
  uv = "__reactListeners$" + yr,
  dv = "__reactHandles$" + yr;
function Nn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qc(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = qc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[wt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ws(e) {
  return e[cl] || null;
}
var bo = [],
  Kn = -1;
function hn(e) {
  return { current: e };
}
function se(e) {
  0 > Kn || ((e.current = bo[Kn]), (bo[Kn] = null), Kn--);
}
function ne(e, t) {
  Kn++, (bo[Kn] = e.current), (e.current = t);
}
var mn = {},
  Le = hn(mn),
  $e = hn(!1),
  Mn = mn;
function cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    a;
  for (a in n) s[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function js() {
  se($e), se(Le);
}
function Qc(e, t, n) {
  if (Le.current !== mn) throw Error(P(168));
  ne(Le, t), ne($e, n);
}
function fm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(P(108, Jh(e) || "Unknown", s));
  return de({}, n, r);
}
function Ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Mn = Le.current),
    ne(Le, e),
    ne($e, $e.current),
    !0
  );
}
function Kc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = fm(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se($e),
      se(Le),
      ne(Le, e))
    : se($e),
    ne($e, n);
}
var Dt = null,
  $s = !1,
  Ra = !1;
function hm(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function mv(e) {
  ($s = !0), hm(e);
}
function pn() {
  if (!Ra && Dt !== null) {
    Ra = !0;
    var e = 0,
      t = Z;
    try {
      var n = Dt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), ($s = !1);
    } catch (s) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Bd(ci, pn), s);
    } finally {
      (Z = t), (Ra = !1);
    }
  }
  return null;
}
var Jn = [],
  Yn = 0,
  bs = null,
  ws = 0,
  nt = [],
  rt = 0,
  Dn = null,
  Rt = 1,
  Pt = "";
function yn(e, t) {
  (Jn[Yn++] = ws), (Jn[Yn++] = bs), (bs = e), (ws = t);
}
function pm(e, t, n) {
  (nt[rt++] = Rt), (nt[rt++] = Pt), (nt[rt++] = Dn), (Dn = e);
  var r = Rt;
  e = Pt;
  var s = 32 - pt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var a = 32 - pt(t) + s;
  if (30 < a) {
    var o = s - (s % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Rt = (1 << (32 - pt(t) + s)) | (n << s) | r),
      (Pt = a + e);
  } else (Rt = (1 << a) | (n << s) | r), (Pt = e);
}
function xi(e) {
  e.return !== null && (yn(e, 1), pm(e, 1, 0));
}
function yi(e) {
  for (; e === bs; )
    (bs = Jn[--Yn]), (Jn[Yn] = null), (ws = Jn[--Yn]), (Jn[Yn] = null);
  for (; e === Dn; )
    (Dn = nt[--rt]),
      (nt[rt] = null),
      (Pt = nt[--rt]),
      (nt[rt] = null),
      (Rt = nt[--rt]),
      (nt[rt] = null);
}
var Je = null,
  Ke = null,
  ie = !1,
  ht = null;
function vm(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ke = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: Rt, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function So(e) {
  if (ie) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!Jc(e, t)) {
        if (wo(e)) throw Error(P(418));
        t = sn(n.nextSibling);
        var r = Je;
        t && Jc(e, t)
          ? vm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Je = e));
      }
    } else {
      if (wo(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Je = e);
    }
  }
}
function Yc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function $l(e) {
  if (e !== Je) return !1;
  if (!ie) return Yc(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yo(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (wo(e)) throw (gm(), Error(P(418)));
    for (; t; ) vm(e, t), (t = sn(t.nextSibling));
  }
  if ((Yc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Je ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function gm() {
  for (var e = Ke; e; ) e = sn(e.nextSibling);
}
function ur() {
  (Ke = Je = null), (ie = !1);
}
function ji(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var fv = Bt.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ss = hn(null),
  Cs = null,
  Gn = null,
  Ni = null;
function bi() {
  Ni = Gn = Cs = null;
}
function wi(e) {
  var t = Ss.current;
  se(Ss), (e._currentValue = t);
}
function Co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ar(e, t) {
  (Cs = e),
    (Ni = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Ni !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (Cs === null) throw Error(P(308));
      (Gn = e), (Cs.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var bn = null;
function Si(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function xm(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Si(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    It(e, r)
  );
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function Ci(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ym(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      It(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Si(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function ts(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ui(e, n);
  }
}
function Gc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (s = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (s = a = t) : (a = a.next = t);
    } else s = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ks(e, t, n, r) {
  var s = e.updateQueue;
  Gt = !1;
  var a = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    c = s.shared.pending;
  if (c !== null) {
    s.shared.pending = null;
    var i = c,
      d = i.next;
    (i.next = null), o === null ? (a = d) : (o.next = d), (o = i);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (c = u.lastBaseUpdate),
      c !== o &&
        (c === null ? (u.firstBaseUpdate = d) : (c.next = d),
        (u.lastBaseUpdate = i)));
  }
  if (a !== null) {
    var m = s.baseState;
    (o = 0), (u = d = i = null), (c = a);
    do {
      var p = c.lane,
        N = c.eventTime;
      if ((r & p) === p) {
        u !== null &&
          (u = u.next =
            {
              eventTime: N,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var g = e,
            v = c;
          switch (((p = t), (N = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                m = g.call(N, m, p);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (p = typeof g == "function" ? g.call(N, m, p) : g),
                p == null)
              )
                break e;
              m = de({}, m, p);
              break e;
            case 2:
              Gt = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [c]) : p.push(c));
      } else
        (N = {
          eventTime: N,
          lane: p,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          u === null ? ((d = u = N), (i = m)) : (u = u.next = N),
          (o |= p);
      if (((c = c.next), c === null)) {
        if (((c = s.shared.pending), c === null)) break;
        (p = c),
          (c = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (i = m),
      (s.baseState = i),
      (s.firstBaseUpdate = d),
      (s.lastBaseUpdate = u),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(P(191, s));
        s.call(r);
      }
    }
}
var jm = new xd.Component().refs;
function ko(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = cn(e),
      a = Tt(r, s);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = an(e, a, s)),
      t !== null && (vt(t, e, s, r), ts(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = cn(e),
      a = Tt(r, s);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = an(e, a, s)),
      t !== null && (vt(t, e, s, r), ts(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = cn(e),
      s = Tt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = an(e, s, r)),
      t !== null && (vt(t, e, r, n), ts(t, e, r));
  },
};
function Zc(e, t, n, r, s, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !al(n, r) || !al(s, a)
      : !0
  );
}
function Nm(e, t, n) {
  var r = !1,
    s = mn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = ot(a))
      : ((s = He(t) ? Mn : Le.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? cr(e, s) : mn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function eu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function Eo(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = jm), Ci(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (s.context = ot(a))
    : ((a = He(t) ? Mn : Le.current), (s.context = cr(e, a))),
    (s.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (ko(e, t, a, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Hs.enqueueReplaceState(s, s.state, null),
      ks(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var s = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var c = s.refs;
            c === jm && (c = s.refs = {}),
              o === null ? delete c[a] : (c[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Hl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tu(e) {
  var t = e._init;
  return t(e._payload);
}
function bm(e) {
  function t(h, f) {
    if (e) {
      var x = h.deletions;
      x === null ? ((h.deletions = [f]), (h.flags |= 16)) : x.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function s(h, f) {
    return (h = un(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function a(h, f, x) {
    return (
      (h.index = x),
      e
        ? ((x = h.alternate),
          x !== null
            ? ((x = x.index), x < f ? ((h.flags |= 2), f) : x)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function c(h, f, x, k) {
    return f === null || f.tag !== 6
      ? ((f = Ia(x, h.mode, k)), (f.return = h), f)
      : ((f = s(f, x)), (f.return = h), f);
  }
  function i(h, f, x, k) {
    var E = x.type;
    return E === $n
      ? u(h, f, x.props.children, k, x.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Yt &&
            tu(E) === f.type))
      ? ((k = s(f, x.props)), (k.ref = Rr(h, f, x)), (k.return = h), k)
      : ((k = os(x.type, x.key, x.props, null, h.mode, k)),
        (k.ref = Rr(h, f, x)),
        (k.return = h),
        k);
  }
  function d(h, f, x, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== x.containerInfo ||
      f.stateNode.implementation !== x.implementation
      ? ((f = Aa(x, h.mode, k)), (f.return = h), f)
      : ((f = s(f, x.children || [])), (f.return = h), f);
  }
  function u(h, f, x, k, E) {
    return f === null || f.tag !== 7
      ? ((f = En(x, h.mode, k, E)), (f.return = h), f)
      : ((f = s(f, x)), (f.return = h), f);
  }
  function m(h, f, x) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ia("" + f, h.mode, x)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ol:
          return (
            (x = os(f.type, f.key, f.props, null, h.mode, x)),
            (x.ref = Rr(h, null, f)),
            (x.return = h),
            x
          );
        case Wn:
          return (f = Aa(f, h.mode, x)), (f.return = h), f;
        case Yt:
          var k = f._init;
          return m(h, k(f._payload), x);
      }
      if (zr(f) || Cr(f))
        return (f = En(f, h.mode, x, null)), (f.return = h), f;
      Hl(h, f);
    }
    return null;
  }
  function p(h, f, x, k) {
    var E = f !== null ? f.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : c(h, f, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ol:
          return x.key === E ? i(h, f, x, k) : null;
        case Wn:
          return x.key === E ? d(h, f, x, k) : null;
        case Yt:
          return (E = x._init), p(h, f, E(x._payload), k);
      }
      if (zr(x) || Cr(x)) return E !== null ? null : u(h, f, x, k, null);
      Hl(h, x);
    }
    return null;
  }
  function N(h, f, x, k, E) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(x) || null), c(f, h, "" + k, E);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ol:
          return (h = h.get(k.key === null ? x : k.key) || null), i(f, h, k, E);
        case Wn:
          return (h = h.get(k.key === null ? x : k.key) || null), d(f, h, k, E);
        case Yt:
          var b = k._init;
          return N(h, f, x, b(k._payload), E);
      }
      if (zr(k) || Cr(k)) return (h = h.get(x) || null), u(f, h, k, E, null);
      Hl(f, k);
    }
    return null;
  }
  function g(h, f, x, k) {
    for (
      var E = null, b = null, C = f, R = (f = 0), T = null;
      C !== null && R < x.length;
      R++
    ) {
      C.index > R ? ((T = C), (C = null)) : (T = C.sibling);
      var F = p(h, C, x[R], k);
      if (F === null) {
        C === null && (C = T);
        break;
      }
      e && C && F.alternate === null && t(h, C),
        (f = a(F, f, R)),
        b === null ? (E = F) : (b.sibling = F),
        (b = F),
        (C = T);
    }
    if (R === x.length) return n(h, C), ie && yn(h, R), E;
    if (C === null) {
      for (; R < x.length; R++)
        (C = m(h, x[R], k)),
          C !== null &&
            ((f = a(C, f, R)), b === null ? (E = C) : (b.sibling = C), (b = C));
      return ie && yn(h, R), E;
    }
    for (C = r(h, C); R < x.length; R++)
      (T = N(C, h, R, x[R], k)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? R : T.key),
          (f = a(T, f, R)),
          b === null ? (E = T) : (b.sibling = T),
          (b = T));
    return (
      e &&
        C.forEach(function (J) {
          return t(h, J);
        }),
      ie && yn(h, R),
      E
    );
  }
  function v(h, f, x, k) {
    var E = Cr(x);
    if (typeof E != "function") throw Error(P(150));
    if (((x = E.call(x)), x == null)) throw Error(P(151));
    for (
      var b = (E = null), C = f, R = (f = 0), T = null, F = x.next();
      C !== null && !F.done;
      R++, F = x.next()
    ) {
      C.index > R ? ((T = C), (C = null)) : (T = C.sibling);
      var J = p(h, C, F.value, k);
      if (J === null) {
        C === null && (C = T);
        break;
      }
      e && C && J.alternate === null && t(h, C),
        (f = a(J, f, R)),
        b === null ? (E = J) : (b.sibling = J),
        (b = J),
        (C = T);
    }
    if (F.done) return n(h, C), ie && yn(h, R), E;
    if (C === null) {
      for (; !F.done; R++, F = x.next())
        (F = m(h, F.value, k)),
          F !== null &&
            ((f = a(F, f, R)), b === null ? (E = F) : (b.sibling = F), (b = F));
      return ie && yn(h, R), E;
    }
    for (C = r(h, C); !F.done; R++, F = x.next())
      (F = N(C, h, R, F.value, k)),
        F !== null &&
          (e && F.alternate !== null && C.delete(F.key === null ? R : F.key),
          (f = a(F, f, R)),
          b === null ? (E = F) : (b.sibling = F),
          (b = F));
    return (
      e &&
        C.forEach(function (je) {
          return t(h, je);
        }),
      ie && yn(h, R),
      E
    );
  }
  function j(h, f, x, k) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === $n &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Ol:
          e: {
            for (var E = x.key, b = f; b !== null; ) {
              if (b.key === E) {
                if (((E = x.type), E === $n)) {
                  if (b.tag === 7) {
                    n(h, b.sibling),
                      (f = s(b, x.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  b.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Yt &&
                    tu(E) === b.type)
                ) {
                  n(h, b.sibling),
                    (f = s(b, x.props)),
                    (f.ref = Rr(h, b, x)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            x.type === $n
              ? ((f = En(x.props.children, h.mode, k, x.key)),
                (f.return = h),
                (h = f))
              : ((k = os(x.type, x.key, x.props, null, h.mode, k)),
                (k.ref = Rr(h, f, x)),
                (k.return = h),
                (h = k));
          }
          return o(h);
        case Wn:
          e: {
            for (b = x.key; f !== null; ) {
              if (f.key === b)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === x.containerInfo &&
                  f.stateNode.implementation === x.implementation
                ) {
                  n(h, f.sibling),
                    (f = s(f, x.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Aa(x, h.mode, k)), (f.return = h), (h = f);
          }
          return o(h);
        case Yt:
          return (b = x._init), j(h, f, b(x._payload), k);
      }
      if (zr(x)) return g(h, f, x, k);
      if (Cr(x)) return v(h, f, x, k);
      Hl(h, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = s(f, x)), (f.return = h), (h = f))
          : (n(h, f), (f = Ia(x, h.mode, k)), (f.return = h), (h = f)),
        o(h))
      : n(h, f);
  }
  return j;
}
var dr = bm(!0),
  wm = bm(!1),
  Sl = {},
  kt = hn(Sl),
  ul = hn(Sl),
  dl = hn(Sl);
function wn(e) {
  if (e === Sl) throw Error(P(174));
  return e;
}
function ki(e, t) {
  switch ((ne(dl, t), ne(ul, e), ne(kt, Sl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lo(t, e));
  }
  se(kt), ne(kt, t);
}
function mr() {
  se(kt), se(ul), se(dl);
}
function Sm(e) {
  wn(dl.current);
  var t = wn(kt.current),
    n = lo(t, e.type);
  t !== n && (ne(ul, e), ne(kt, n));
}
function Ei(e) {
  ul.current === e && (se(kt), se(ul));
}
var ce = hn(0);
function Es(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pa = [];
function Mi() {
  for (var e = 0; e < Pa.length; e++)
    Pa[e]._workInProgressVersionPrimary = null;
  Pa.length = 0;
}
var ns = Bt.ReactCurrentDispatcher,
  Ta = Bt.ReactCurrentBatchConfig,
  Rn = 0,
  ue = null,
  Ne = null,
  Ce = null,
  Ms = !1,
  Kr = !1,
  ml = 0,
  hv = 0;
function Te() {
  throw Error(P(321));
}
function Di(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Ri(e, t, n, r, s, a) {
  if (
    ((Rn = a),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ns.current = e === null || e.memoizedState === null ? xv : yv),
    (e = n(r, s)),
    Kr)
  ) {
    a = 0;
    do {
      if (((Kr = !1), (ml = 0), 25 <= a)) throw Error(P(301));
      (a += 1),
        (Ce = Ne = null),
        (t.updateQueue = null),
        (ns.current = jv),
        (e = n(r, s));
    } while (Kr);
  }
  if (
    ((ns.current = Ds),
    (t = Ne !== null && Ne.next !== null),
    (Rn = 0),
    (Ce = Ne = ue = null),
    (Ms = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Pi() {
  var e = ml !== 0;
  return (ml = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (ue.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function it() {
  if (Ne === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Ce === null ? ue.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (Ne = e);
  else {
    if (e === null) throw Error(P(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Ce === null ? (ue.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function fl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oa(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    s = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = a.next), (a.next = o);
    }
    (r.baseQueue = s = a), (n.pending = null);
  }
  if (s !== null) {
    (a = s.next), (r = r.baseState);
    var c = (o = null),
      i = null,
      d = a;
    do {
      var u = d.lane;
      if ((Rn & u) === u)
        i !== null &&
          (i = i.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: u,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        i === null ? ((c = i = m), (o = r)) : (i = i.next = m),
          (ue.lanes |= u),
          (Pn |= u);
      }
      d = d.next;
    } while (d !== null && d !== a);
    i === null ? (o = r) : (i.next = c),
      gt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = i),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (a = s.lane), (ue.lanes |= a), (Pn |= a), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _a(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== s);
    gt(a, t.memoizedState) || (We = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Cm() {}
function km(e, t) {
  var n = ue,
    r = it(),
    s = t(),
    a = !gt(r.memoizedState, s);
  if (
    (a && ((r.memoizedState = s), (We = !0)),
    (r = r.queue),
    Ti(Dm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hl(9, Mm.bind(null, n, r, s, t), void 0, null),
      ke === null)
    )
      throw Error(P(349));
    Rn & 30 || Em(n, t, s);
  }
  return s;
}
function Em(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Mm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rm(t) && Pm(e);
}
function Dm(e, t, n) {
  return n(function () {
    Rm(t) && Pm(e);
  });
}
function Rm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function Pm(e) {
  var t = It(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function nu(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gv.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function hl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Tm() {
  return it().memoizedState;
}
function rs(e, t, n, r) {
  var s = Nt();
  (ue.flags |= e),
    (s.memoizedState = hl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var s = it();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ne !== null) {
    var o = Ne.memoizedState;
    if (((a = o.destroy), r !== null && Di(r, o.deps))) {
      s.memoizedState = hl(t, n, a, r);
      return;
    }
  }
  (ue.flags |= e), (s.memoizedState = hl(1 | t, n, a, r));
}
function ru(e, t) {
  return rs(8390656, 8, e, t);
}
function Ti(e, t) {
  return Vs(2048, 8, e, t);
}
function Om(e, t) {
  return Vs(4, 2, e, t);
}
function _m(e, t) {
  return Vs(4, 4, e, t);
}
function Lm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, Lm.bind(null, t, e), n)
  );
}
function Oi() {}
function Im(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Am(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Di(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bm(e, t, n) {
  return Rn & 21
    ? (gt(n, t) || ((n = Wd()), (ue.lanes |= n), (Pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function pv(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ta.transition;
  Ta.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (Ta.transition = r);
  }
}
function zm() {
  return it().memoizedState;
}
function vv(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Um(e))
  )
    Wm(t, n);
  else if (((n = xm(e, t, n, r)), n !== null)) {
    var s = Ae();
    vt(n, e, r, s), $m(n, t, r);
  }
}
function gv(e, t, n) {
  var r = cn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Um(e)) Wm(t, s);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          c = a(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = c), gt(c, o))) {
          var i = t.interleaved;
          i === null
            ? ((s.next = s), Si(t))
            : ((s.next = i.next), (i.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = xm(e, t, s, r)),
      n !== null && ((s = Ae()), vt(n, e, r, s), $m(n, t, r));
  }
}
function Um(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Wm(e, t) {
  Kr = Ms = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $m(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ui(e, n);
  }
}
var Ds = {
    readContext: ot,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  xv = {
    readContext: ot,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: ru,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        rs(4194308, 4, Lm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return rs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vv.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nu,
    useDebugValue: Oi,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = nu(!1),
        t = e[0];
      return (e = pv.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        s = Nt();
      if (ie) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(P(349));
        Rn & 30 || Em(r, t, n);
      }
      s.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (s.queue = a),
        ru(Dm.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        hl(9, Mm.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = ke.identifierPrefix;
      if (ie) {
        var n = Pt,
          r = Rt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ml++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yv = {
    readContext: ot,
    useCallback: Im,
    useContext: ot,
    useEffect: Ti,
    useImperativeHandle: Fm,
    useInsertionEffect: Om,
    useLayoutEffect: _m,
    useMemo: Am,
    useReducer: Oa,
    useRef: Tm,
    useState: function () {
      return Oa(fl);
    },
    useDebugValue: Oi,
    useDeferredValue: function (e) {
      var t = it();
      return Bm(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Oa(fl)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Cm,
    useSyncExternalStore: km,
    useId: zm,
    unstable_isNewReconciler: !1,
  },
  jv = {
    readContext: ot,
    useCallback: Im,
    useContext: ot,
    useEffect: Ti,
    useImperativeHandle: Fm,
    useInsertionEffect: Om,
    useLayoutEffect: _m,
    useMemo: Am,
    useReducer: _a,
    useRef: Tm,
    useState: function () {
      return _a(fl);
    },
    useDebugValue: Oi,
    useDeferredValue: function (e) {
      var t = it();
      return Ne === null ? (t.memoizedState = e) : Bm(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(fl)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Cm,
    useSyncExternalStore: km,
    useId: zm,
    unstable_isNewReconciler: !1,
  };
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Kh(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (a) {
    s =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function La(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Nv = typeof WeakMap == "function" ? WeakMap : Map;
function Hm(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ps || ((Ps = !0), (Ao = r)), Mo(e, t);
    }),
    n
  );
}
function Vm(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Mo(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        Mo(e, t),
          typeof r != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Nv();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = Lv.bind(null, e, t, n)), t.then(e, e));
}
function su(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function au(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bv = Bt.ReactCurrentOwner,
  We = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? wm(t, null, n, r) : dr(t, e.child, n, r);
}
function ou(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return (
    ar(t, s),
    (r = Ri(e, t, n, r, a, s)),
    (n = Pi()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        At(e, t, s))
      : (ie && n && xi(t), (t.flags |= 1), Ie(e, t, r, s), t.child)
  );
}
function iu(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Ui(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), qm(e, t, a, r, s))
      : ((e = os(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & s))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : al), n(o, r) && e.ref === t.ref)
    )
      return At(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = un(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qm(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (al(a, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), At(e, t, s);
  }
  return Do(e, t, n, r, s);
}
function Qm(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Zn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Zn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        ne(Zn, Qe),
        (Qe |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Zn, Qe),
      (Qe |= r);
  return Ie(e, t, s, n), t.child;
}
function Km(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Do(e, t, n, r, s) {
  var a = He(n) ? Mn : Le.current;
  return (
    (a = cr(t, a)),
    ar(t, s),
    (n = Ri(e, t, n, r, a, s)),
    (r = Pi()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        At(e, t, s))
      : (ie && r && xi(t), (t.flags |= 1), Ie(e, t, n, s), t.child)
  );
}
function cu(e, t, n, r, s) {
  if (He(n)) {
    var a = !0;
    Ns(t);
  } else a = !1;
  if ((ar(t, s), t.stateNode === null))
    ls(e, t), Nm(t, n, r), Eo(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      c = t.memoizedProps;
    o.props = c;
    var i = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = ot(d))
      : ((d = He(n) ? Mn : Le.current), (d = cr(t, d)));
    var u = n.getDerivedStateFromProps,
      m =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((c !== r || i !== d) && eu(t, o, r, d)),
      (Gt = !1);
    var p = t.memoizedState;
    (o.state = p),
      ks(t, r, o, s),
      (i = t.memoizedState),
      c !== r || p !== i || $e.current || Gt
        ? (typeof u == "function" && (ko(t, n, u, r), (i = t.memoizedState)),
          (c = Gt || Zc(t, n, c, r, p, i, d))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = i)),
          (o.props = r),
          (o.state = i),
          (o.context = d),
          (r = c))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ym(e, t),
      (c = t.memoizedProps),
      (d = t.type === t.elementType ? c : dt(t.type, c)),
      (o.props = d),
      (m = t.pendingProps),
      (p = o.context),
      (i = n.contextType),
      typeof i == "object" && i !== null
        ? (i = ot(i))
        : ((i = He(n) ? Mn : Le.current), (i = cr(t, i)));
    var N = n.getDerivedStateFromProps;
    (u =
      typeof N == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((c !== m || p !== i) && eu(t, o, r, i)),
      (Gt = !1),
      (p = t.memoizedState),
      (o.state = p),
      ks(t, r, o, s);
    var g = t.memoizedState;
    c !== m || p !== g || $e.current || Gt
      ? (typeof N == "function" && (ko(t, n, N, r), (g = t.memoizedState)),
        (d = Gt || Zc(t, n, d, r, p, g, i) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, i),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, i)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (c === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = i),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (c === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ro(e, t, n, r, a, s);
}
function Ro(e, t, n, r, s, a) {
  Km(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Kc(t, n, !1), At(e, t, a);
  (r = t.stateNode), (bv.current = t);
  var c =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = dr(t, e.child, null, a)), (t.child = dr(t, null, c, a)))
      : Ie(e, t, c, a),
    (t.memoizedState = r.state),
    s && Kc(t, n, !0),
    t.child
  );
}
function Jm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qc(e, t.context, !1),
    ki(e, t.containerInfo);
}
function uu(e, t, n, r, s) {
  return ur(), ji(s), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var Po = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ym(e, t, n) {
  var r = t.pendingProps,
    s = ce.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    c;
  if (
    ((c = o) ||
      (c = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    c
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ne(ce, s & 1),
    e === null)
  )
    return (
      So(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = Ks(o, r, 0, null)),
              (e = En(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = To(n)),
              (t.memoizedState = Po),
              e)
            : _i(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((c = s.dehydrated), c !== null)))
    return wv(e, t, o, r, c, s, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (s = e.child), (c = s.sibling);
    var i = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = i),
          (t.deletions = null))
        : ((r = un(s, i)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      c !== null ? (a = un(c, a)) : ((a = En(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? To(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Po),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = un(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _i(e, t) {
  return (
    (t = Ks({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vl(e, t, n, r) {
  return (
    r !== null && ji(r),
    dr(t, e.child, null, n),
    (e = _i(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wv(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = La(Error(P(422)))), Vl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (s = t.mode),
        (r = Ks({ mode: "visible", children: r.children }, s, 0, null)),
        (a = En(a, s, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && dr(t, e.child, null, o),
        (t.child.memoizedState = To(o)),
        (t.memoizedState = Po),
        a);
  if (!(t.mode & 1)) return Vl(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (a = Error(P(419))), (r = La(a, r, void 0)), Vl(e, t, o, r);
  }
  if (((c = (o & e.childLanes) !== 0), We || c)) {
    if (((r = ke), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== a.retryLane &&
          ((a.retryLane = s), It(e, s), vt(r, e, s, -1));
    }
    return zi(), (r = La(Error(P(421)))), Vl(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fv.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ke = sn(s.nextSibling)),
      (Je = t),
      (ie = !0),
      (ht = null),
      e !== null &&
        ((nt[rt++] = Rt),
        (nt[rt++] = Pt),
        (nt[rt++] = Dn),
        (Rt = e.id),
        (Pt = e.overflow),
        (Dn = t)),
      (t = _i(t, r.children)),
      (t.flags |= 4096),
      t);
}
function du(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Co(e.return, t, n);
}
function Fa(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = s));
}
function Gm(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    a = r.tail;
  if ((Ie(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && du(e, n, t);
        else if (e.tag === 19) du(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Es(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Fa(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Es(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Fa(t, !0, n, null, a);
        break;
      case "together":
        Fa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Sv(e, t, n) {
  switch (t.tag) {
    case 3:
      Jm(t), ur();
      break;
    case 5:
      Sm(t);
      break;
    case 1:
      He(t.type) && Ns(t);
      break;
    case 4:
      ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      ne(Ss, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ym(e, t, n)
          : (ne(ce, ce.current & 1),
            (e = At(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ne(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qm(e, t, n);
  }
  return At(e, t, n);
}
var Xm, Oo, Zm, ef;
Xm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Oo = function () {};
Zm = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), wn(kt.current);
    var a = null;
    switch (n) {
      case "input":
        (s = eo(e, s)), (r = eo(e, r)), (a = []);
        break;
      case "select":
        (s = de({}, s, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (s = ro(e, s)), (r = ro(e, r)), (a = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ys);
    }
    so(n, r);
    var o;
    n = null;
    for (d in s)
      if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null)
        if (d === "style") {
          var c = s[d];
          for (o in c) c.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Zr.hasOwnProperty(d)
              ? a || (a = [])
              : (a = a || []).push(d, null));
    for (d in r) {
      var i = r[d];
      if (
        ((c = s != null ? s[d] : void 0),
        r.hasOwnProperty(d) && i !== c && (i != null || c != null))
      )
        if (d === "style")
          if (c) {
            for (o in c)
              !c.hasOwnProperty(o) ||
                (i && i.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in i)
              i.hasOwnProperty(o) &&
                c[o] !== i[o] &&
                (n || (n = {}), (n[o] = i[o]));
          } else n || (a || (a = []), a.push(d, n)), (n = i);
        else
          d === "dangerouslySetInnerHTML"
            ? ((i = i ? i.__html : void 0),
              (c = c ? c.__html : void 0),
              i != null && c !== i && (a = a || []).push(d, i))
            : d === "children"
            ? (typeof i != "string" && typeof i != "number") ||
              (a = a || []).push(d, "" + i)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Zr.hasOwnProperty(d)
                ? (i != null && d === "onScroll" && le("scroll", e),
                  a || c === i || (a = []))
                : (a = a || []).push(d, i));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
ef = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Cv(e, t, n) {
  var r = t.pendingProps;
  switch ((yi(t), t.tag)) {
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
      return Oe(t), null;
    case 1:
      return He(t.type) && js(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        se($e),
        se(Le),
        Mi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (Uo(ht), (ht = null)))),
        Oo(e, t),
        Oe(t),
        null
      );
    case 5:
      Ei(t);
      var s = wn(dl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Zm(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Oe(t), null;
        }
        if (((e = wn(kt.current)), $l(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[wt] = t), (r[cl] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Wr.length; s++) le(Wr[s], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              jc(r, a), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              bc(r, a), le("invalid", r);
          }
          so(n, a), (s = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var c = a[o];
              o === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (a.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, c, e),
                    (s = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (a.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, c, e),
                    (s = ["children", "" + c]))
                : Zr.hasOwnProperty(o) &&
                  c != null &&
                  o === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              _l(r), Nc(r, a, !0);
              break;
            case "textarea":
              _l(r), wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ys);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ed(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[wt] = t),
            (e[cl] = r),
            Xm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ao(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Wr.length; s++) le(Wr[s], e);
                s = r;
                break;
              case "source":
                le("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (s = r);
                break;
              case "details":
                le("toggle", e), (s = r);
                break;
              case "input":
                jc(e, r), (s = eo(e, r)), le("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = de({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                bc(e, r), (s = ro(e, r)), le("invalid", e);
                break;
              default:
                s = r;
            }
            so(n, s), (c = s);
            for (a in c)
              if (c.hasOwnProperty(a)) {
                var i = c[a];
                a === "style"
                  ? Rd(e, i)
                  : a === "dangerouslySetInnerHTML"
                  ? ((i = i ? i.__html : void 0), i != null && Md(e, i))
                  : a === "children"
                  ? typeof i == "string"
                    ? (n !== "textarea" || i !== "") && el(e, i)
                    : typeof i == "number" && el(e, "" + i)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Zr.hasOwnProperty(a)
                      ? i != null && a === "onScroll" && le("scroll", e)
                      : i != null && li(e, a, i, o));
              }
            switch (n) {
              case "input":
                _l(e), Nc(e, r, !1);
                break;
              case "textarea":
                _l(e), wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? nr(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ys);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) ef(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = wn(dl.current)), wn(kt.current), $l(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (a = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (se(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ke !== null && t.mode & 1 && !(t.flags & 128))
          gm(), ur(), (t.flags |= 98560), (a = !1);
        else if (((a = $l(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(P(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(P(317));
            a[wt] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (a = !1);
        } else ht !== null && (Uo(ht), (ht = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? be === 0 && (be = 3) : zi())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        mr(), Oo(e, t), e === null && ol(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return wi(t.type._context), Oe(t), null;
    case 17:
      return He(t.type) && js(), Oe(t), null;
    case 19:
      if ((se(ce), (a = t.memoizedState), a === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Pr(a, !1);
        else {
          if (be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Es(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pr(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ge() > hr &&
            ((t.flags |= 128), (r = !0), Pr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Es(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !ie)
            )
              return Oe(t), null;
          } else
            2 * ge() - a.renderingStartTime > hr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ce.current),
          ne(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function kv(e, t) {
  switch ((yi(t), t.tag)) {
    case 1:
      return (
        He(t.type) && js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        se($e),
        se(Le),
        Mi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ei(t), null;
    case 13:
      if (
        (se(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ce), null;
    case 4:
      return mr(), null;
    case 10:
      return wi(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1,
  _e = !1,
  Ev = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function _o(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var mu = !1;
function Mv(e, t) {
  if (((go = vs), (e = lm()), gi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            c = -1,
            i = -1,
            d = 0,
            u = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var N;
              m !== n || (s !== 0 && m.nodeType !== 3) || (c = o + s),
                m !== a || (r !== 0 && m.nodeType !== 3) || (i = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (N = m.firstChild) !== null;

            )
              (p = m), (m = N);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++d === s && (c = o),
                p === a && ++u === r && (i = o),
                (N = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = N;
          }
          n = c === -1 || i === -1 ? null : { start: c, end: i };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xo = { focusedElem: e, selectionRange: n }, vs = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    j = g.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : dt(t.type, v),
                      j
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (k) {
          he(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (g = mu), (mu = !1), g;
}
function Jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        (s.destroy = void 0), a !== void 0 && _o(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lo(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), tf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[cl], delete t[No], delete t[uv], delete t[dv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function nf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || nf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ys));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function Io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), (e = e.sibling);
}
var De = null,
  mt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) rf(e, t, n), (n = n.sibling);
}
function rf(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(As, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Xn(n, t);
    case 6:
      var r = De,
        s = mt;
      (De = null),
        qt(e, t, n),
        (De = r),
        (mt = s),
        De !== null &&
          (mt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (mt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? Da(e.parentNode, n)
              : e.nodeType === 1 && Da(e, n),
            ll(e))
          : Da(De, n.stateNode));
      break;
    case 4:
      (r = De),
        (s = mt),
        (De = n.stateNode.containerInfo),
        (mt = !0),
        qt(e, t, n),
        (De = r),
        (mt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var a = s,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && _o(n, t, o),
            (s = s.next);
        } while (s !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          he(n, t, c);
        }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), qt(e, t, n), (_e = r))
        : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ev()),
      t.forEach(function (r) {
        var s = Iv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var a = e,
          o = t,
          c = o;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (De = c.stateNode), (mt = !1);
              break e;
            case 3:
              (De = c.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (De = c.stateNode.containerInfo), (mt = !0);
              break e;
          }
          c = c.return;
        }
        if (De === null) throw Error(P(160));
        rf(a, o, s), (De = null), (mt = !1);
        var i = s.alternate;
        i !== null && (i.return = null), (s.return = null);
      } catch (d) {
        he(s, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) lf(t, e), (t = t.sibling);
}
function lf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), jt(e), r & 4)) {
        try {
          Jr(3, e, e.return), qs(3, e);
        } catch (v) {
          he(e, e.return, v);
        }
        try {
          Jr(5, e, e.return);
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 1:
      ut(t, e), jt(e), r & 512 && n !== null && Xn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        jt(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          el(s, "");
        } catch (v) {
          he(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          c = e.type,
          i = e.updateQueue;
        if (((e.updateQueue = null), i !== null))
          try {
            c === "input" && a.type === "radio" && a.name != null && Cd(s, a),
              ao(c, o);
            var d = ao(c, a);
            for (o = 0; o < i.length; o += 2) {
              var u = i[o],
                m = i[o + 1];
              u === "style"
                ? Rd(s, m)
                : u === "dangerouslySetInnerHTML"
                ? Md(s, m)
                : u === "children"
                ? el(s, m)
                : li(s, u, m, d);
            }
            switch (c) {
              case "input":
                to(s, a);
                break;
              case "textarea":
                kd(s, a);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var N = a.value;
                N != null
                  ? nr(s, !!a.multiple, N, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? nr(s, !!a.multiple, a.defaultValue, !0)
                      : nr(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[cl] = a;
          } catch (v) {
            he(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ut(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (s = e.stateNode), (a = e.memoizedProps);
        try {
          s.nodeValue = a;
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ll(t.containerInfo);
        } catch (v) {
          he(e, e.return, v);
        }
      break;
    case 4:
      ut(t, e), jt(e);
      break;
    case 13:
      ut(t, e),
        jt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((a = s.memoizedState !== null),
          (s.stateNode.isHidden = a),
          !a ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Ii = ge())),
        r & 4 && hu(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (d = _e) || u), ut(t, e), (_e = d)) : ut(t, e),
        jt(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !u && e.mode & 1)
        )
          for (L = e, u = e.child; u !== null; ) {
            for (m = L = u; L !== null; ) {
              switch (((p = L), (N = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, p, p.return);
                  break;
                case 1:
                  Xn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      he(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Xn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    vu(m);
                    continue;
                  }
              }
              N !== null ? ((N.return = p), (L = N)) : vu(m);
            }
            u = u.sibling;
          }
        e: for (u = null, m = e; ; ) {
          if (m.tag === 5) {
            if (u === null) {
              u = m;
              try {
                (s = m.stateNode),
                  d
                    ? ((a = s.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((c = m.stateNode),
                      (i = m.memoizedProps.style),
                      (o =
                        i != null && i.hasOwnProperty("display")
                          ? i.display
                          : null),
                      (c.style.display = Dd("display", o)));
              } catch (v) {
                he(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (u === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (v) {
                he(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            u === m && (u = null), (m = m.return);
          }
          u === m && (u = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), jt(e), r & 4 && hu(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (el(s, ""), (r.flags &= -33));
          var a = fu(e);
          Io(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            c = fu(e);
          Fo(e, c, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (i) {
      he(e, e.return, i);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dv(e, t, n) {
  (L = e), sf(e);
}
function sf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || ql;
      if (!o) {
        var c = s.alternate,
          i = (c !== null && c.memoizedState !== null) || _e;
        c = ql;
        var d = _e;
        if (((ql = o), (_e = i) && !d))
          for (L = s; L !== null; )
            (o = L),
              (i = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? gu(s)
                : i !== null
                ? ((i.return = o), (L = i))
                : gu(s);
        for (; a !== null; ) (L = a), sf(a), (a = a.sibling);
        (L = s), (ql = c), (_e = d);
      }
      pu(e);
    } else
      s.subtreeFlags & 8772 && a !== null ? ((a.return = s), (L = a)) : pu(e);
  }
}
function pu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Xc(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xc(t, o, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var i = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    i.autoFocus && n.focus();
                    break;
                  case "img":
                    i.src && (n.src = i.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var u = d.memoizedState;
                  if (u !== null) {
                    var m = u.dehydrated;
                    m !== null && ll(m);
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
              throw Error(P(163));
          }
        _e || (t.flags & 512 && Lo(t));
      } catch (p) {
        he(t, t.return, p);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function vu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function gu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qs(4, t);
          } catch (i) {
            he(t, n, i);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (i) {
              he(t, s, i);
            }
          }
          var a = t.return;
          try {
            Lo(t);
          } catch (i) {
            he(t, a, i);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Lo(t);
          } catch (i) {
            he(t, o, i);
          }
      }
    } catch (i) {
      he(t, t.return, i);
    }
    if (t === e) {
      L = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (L = c);
      break;
    }
    L = t.return;
  }
}
var Rv = Math.ceil,
  Rs = Bt.ReactCurrentDispatcher,
  Li = Bt.ReactCurrentOwner,
  st = Bt.ReactCurrentBatchConfig,
  G = 0,
  ke = null,
  ye = null,
  Re = 0,
  Qe = 0,
  Zn = hn(0),
  be = 0,
  pl = null,
  Pn = 0,
  Qs = 0,
  Fi = 0,
  Yr = null,
  Ue = null,
  Ii = 0,
  hr = 1 / 0,
  Mt = null,
  Ps = !1,
  Ao = null,
  on = null,
  Ql = !1,
  tn = null,
  Ts = 0,
  Gr = 0,
  Bo = null,
  ss = -1,
  as = 0;
function Ae() {
  return G & 6 ? ge() : ss !== -1 ? ss : (ss = ge());
}
function cn(e) {
  return e.mode & 1
    ? G & 2 && Re !== 0
      ? Re & -Re
      : fv.transition !== null
      ? (as === 0 && (as = Wd()), as)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jd(e.type))),
        e)
    : 1;
}
function vt(e, t, n, r) {
  if (50 < Gr) throw ((Gr = 0), (Bo = null), Error(P(185)));
  Nl(e, n, r),
    (!(G & 2) || e !== ke) &&
      (e === ke && (!(G & 2) && (Qs |= n), be === 4 && Zt(e, Re)),
      Ve(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((hr = ge() + 500), $s && pn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  fp(e, t);
  var r = ps(e, e === ke ? Re : 0);
  if (r === 0)
    n !== null && kc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && kc(n), t === 1))
      e.tag === 0 ? mv(xu.bind(null, e)) : hm(xu.bind(null, e)),
        iv(function () {
          !(G & 6) && pn();
        }),
        (n = null);
    else {
      switch ($d(r)) {
        case 1:
          n = ci;
          break;
        case 4:
          n = zd;
          break;
        case 16:
          n = hs;
          break;
        case 536870912:
          n = Ud;
          break;
        default:
          n = hs;
      }
      n = hf(n, af.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function af(e, t) {
  if (((ss = -1), (as = 0), G & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = ps(e, e === ke ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Os(e, r);
  else {
    t = r;
    var s = G;
    G |= 2;
    var a = cf();
    (ke !== e || Re !== t) && ((Mt = null), (hr = ge() + 500), kn(e, t));
    do
      try {
        Ov();
        break;
      } catch (c) {
        of(e, c);
      }
    while (!0);
    bi(),
      (Rs.current = a),
      (G = s),
      ye !== null ? (t = 0) : ((ke = null), (Re = 0), (t = be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = mo(e)), s !== 0 && ((r = s), (t = zo(e, s)))), t === 1)
    )
      throw ((n = pl), kn(e, 0), Zt(e, r), Ve(e, ge()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Pv(s) &&
          ((t = Os(e, r)),
          t === 2 && ((a = mo(e)), a !== 0 && ((r = a), (t = zo(e, a)))),
          t === 1))
      )
        throw ((n = pl), kn(e, 0), Zt(e, r), Ve(e, ge()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          jn(e, Ue, Mt);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = Ii + 500 - ge()), 10 < t))
          ) {
            if (ps(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = jo(jn.bind(null, e, Ue, Mt), t);
            break;
          }
          jn(e, Ue, Mt);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - pt(r);
            (a = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~a);
          }
          if (
            ((r = s),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Rv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jo(jn.bind(null, e, Ue, Mt), r);
            break;
          }
          jn(e, Ue, Mt);
          break;
        case 5:
          jn(e, Ue, Mt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ve(e, ge()), e.callbackNode === n ? af.bind(null, e) : null;
}
function zo(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Os(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Uo(t)),
    e
  );
}
function Uo(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function Pv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            a = s.getSnapshot;
          s = s.value;
          try {
            if (!gt(a(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zt(e, t) {
  for (
    t &= ~Fi,
      t &= ~Qs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xu(e) {
  if (G & 6) throw Error(P(327));
  or();
  var t = ps(e, 0);
  if (!(t & 1)) return Ve(e, ge()), null;
  var n = Os(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mo(e);
    r !== 0 && ((t = r), (n = zo(e, r)));
  }
  if (n === 1) throw ((n = pl), kn(e, 0), Zt(e, t), Ve(e, ge()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jn(e, Ue, Mt),
    Ve(e, ge()),
    null
  );
}
function Ai(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((hr = ge() + 500), $s && pn());
  }
}
function Tn(e) {
  tn !== null && tn.tag === 0 && !(G & 6) && or();
  var t = G;
  G |= 1;
  var n = st.transition,
    r = Z;
  try {
    if (((st.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (st.transition = n), (G = t), !(G & 6) && pn();
  }
}
function Bi() {
  (Qe = Zn.current), se(Zn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ov(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((yi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && js();
          break;
        case 3:
          mr(), se($e), se(Le), Mi();
          break;
        case 5:
          Ei(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          se(ce);
          break;
        case 19:
          se(ce);
          break;
        case 10:
          wi(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (ye = e = un(e.current, null)),
    (Re = Qe = t),
    (be = 0),
    (pl = null),
    (Fi = Qs = Pn = 0),
    (Ue = Yr = null),
    bn !== null)
  ) {
    for (t = 0; t < bn.length; t++)
      if (((n = bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = s), (r.next = o);
        }
        n.pending = r;
      }
    bn = null;
  }
  return e;
}
function of(e, t) {
  do {
    var n = ye;
    try {
      if ((bi(), (ns.current = Ds), Ms)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Ms = !1;
      }
      if (
        ((Rn = 0),
        (Ce = Ne = ue = null),
        (Kr = !1),
        (ml = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        (be = 1), (pl = t), (ye = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          c = n,
          i = t;
        if (
          ((t = Re),
          (c.flags |= 32768),
          i !== null && typeof i == "object" && typeof i.then == "function")
        ) {
          var d = i,
            u = c,
            m = u.tag;
          if (!(u.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = u.alternate;
            p
              ? ((u.updateQueue = p.updateQueue),
                (u.memoizedState = p.memoizedState),
                (u.lanes = p.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var N = su(o);
          if (N !== null) {
            (N.flags &= -257),
              au(N, o, c, a, t),
              N.mode & 1 && lu(a, d, t),
              (t = N),
              (i = d);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(i), (t.updateQueue = v);
            } else g.add(i);
            break e;
          } else {
            if (!(t & 1)) {
              lu(a, d, t), zi();
              break e;
            }
            i = Error(P(426));
          }
        } else if (ie && c.mode & 1) {
          var j = su(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              au(j, o, c, a, t),
              ji(fr(i, c));
            break e;
          }
        }
        (a = i = fr(i, c)),
          be !== 4 && (be = 2),
          Yr === null ? (Yr = [a]) : Yr.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var h = Hm(a, i, t);
              Gc(a, h);
              break e;
            case 1:
              c = i;
              var f = a.type,
                x = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (on === null || !on.has(x))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var k = Vm(a, c, t);
                Gc(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      df(n);
    } catch (E) {
      (t = E), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cf() {
  var e = Rs.current;
  return (Rs.current = Ds), e === null ? Ds : e;
}
function zi() {
  (be === 0 || be === 3 || be === 2) && (be = 4),
    ke === null || (!(Pn & 268435455) && !(Qs & 268435455)) || Zt(ke, Re);
}
function Os(e, t) {
  var n = G;
  G |= 2;
  var r = cf();
  (ke !== e || Re !== t) && ((Mt = null), kn(e, t));
  do
    try {
      Tv();
      break;
    } catch (s) {
      of(e, s);
    }
  while (!0);
  if ((bi(), (G = n), (Rs.current = r), ye !== null)) throw Error(P(261));
  return (ke = null), (Re = 0), be;
}
function Tv() {
  for (; ye !== null; ) uf(ye);
}
function Ov() {
  for (; ye !== null && !lp(); ) uf(ye);
}
function uf(e) {
  var t = ff(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? df(e) : (ye = t),
    (Li.current = null);
}
function df(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kv(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (be = 6), (ye = null);
        return;
      }
    } else if (((n = Cv(n, t, Qe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function jn(e, t, n) {
  var r = Z,
    s = st.transition;
  try {
    (st.transition = null), (Z = 1), _v(e, t, n, r);
  } finally {
    (st.transition = s), (Z = r);
  }
  return null;
}
function _v(e, t, n, r) {
  do or();
  while (tn !== null);
  if (G & 6) throw Error(P(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (hp(e, a),
    e === ke && ((ye = ke = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      hf(hs, function () {
        return or(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = st.transition), (st.transition = null);
    var o = Z;
    Z = 1;
    var c = G;
    (G |= 4),
      (Li.current = null),
      Mv(e, n),
      lf(n, e),
      ev(xo),
      (vs = !!go),
      (xo = go = null),
      (e.current = n),
      Dv(n),
      sp(),
      (G = c),
      (Z = o),
      (st.transition = a);
  } else e.current = n;
  if (
    (Ql && ((Ql = !1), (tn = e), (Ts = s)),
    (a = e.pendingLanes),
    a === 0 && (on = null),
    ip(n.stateNode),
    Ve(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Ps) throw ((Ps = !1), (e = Ao), (Ao = null), e);
  return (
    Ts & 1 && e.tag !== 0 && or(),
    (a = e.pendingLanes),
    a & 1 ? (e === Bo ? Gr++ : ((Gr = 0), (Bo = e))) : (Gr = 0),
    pn(),
    null
  );
}
function or() {
  if (tn !== null) {
    var e = $d(Ts),
      t = st.transition,
      n = Z;
    try {
      if (((st.transition = null), (Z = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (Ts = 0), G & 6)) throw Error(P(331));
        var s = G;
        for (G |= 4, L = e.current; L !== null; ) {
          var a = L,
            o = a.child;
          if (L.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var i = 0; i < c.length; i++) {
                var d = c[i];
                for (L = d; L !== null; ) {
                  var u = L;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, u, a);
                  }
                  var m = u.child;
                  if (m !== null) (m.return = u), (L = m);
                  else
                    for (; L !== null; ) {
                      u = L;
                      var p = u.sibling,
                        N = u.return;
                      if ((tf(u), u === d)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = N), (L = p);
                        break;
                      }
                      L = N;
                    }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var j = v.sibling;
                    (v.sibling = null), (v = j);
                  } while (v !== null);
                }
              }
              L = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (L = o);
          else
            e: for (; L !== null; ) {
              if (((a = L), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, a, a.return);
                }
              var h = a.sibling;
              if (h !== null) {
                (h.return = a.return), (L = h);
                break e;
              }
              L = a.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          o = L;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) (x.return = o), (L = x);
          else
            e: for (o = f; L !== null; ) {
              if (((c = L), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(9, c);
                  }
                } catch (E) {
                  he(c, c.return, E);
                }
              if (c === o) {
                L = null;
                break e;
              }
              var k = c.sibling;
              if (k !== null) {
                (k.return = c.return), (L = k);
                break e;
              }
              L = c.return;
            }
        }
        if (
          ((G = s), pn(), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        )
          try {
            Ct.onPostCommitFiberRoot(As, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (st.transition = t);
    }
  }
  return !1;
}
function yu(e, t, n) {
  (t = fr(n, t)),
    (t = Hm(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ae()),
    e !== null && (Nl(e, 1, t), Ve(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (on === null || !on.has(r)))
        ) {
          (e = fr(n, e)),
            (e = Vm(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ae()),
            t !== null && (Nl(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Re & n) === n &&
      (be === 4 || (be === 3 && (Re & 130023424) === Re && 500 > ge() - Ii)
        ? kn(e, 0)
        : (Fi |= n)),
    Ve(e, t);
}
function mf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304))
      : (t = 1));
  var n = Ae();
  (e = It(e, t)), e !== null && (Nl(e, t, n), Ve(e, n));
}
function Fv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mf(e, n);
}
function Iv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), mf(e, n);
}
var ff;
ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), Sv(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), ie && t.flags & 1048576 && pm(t, ws, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ls(e, t), (e = t.pendingProps);
      var s = cr(t, Le.current);
      ar(t, n), (s = Ri(null, t, r, e, s, n));
      var a = Pi();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((a = !0), Ns(t)) : (a = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ci(t),
            (s.updater = Hs),
            (t.stateNode = s),
            (s._reactInternals = t),
            Eo(t, r, e, n),
            (t = Ro(null, t, r, !0, a, n)))
          : ((t.tag = 0), ie && a && xi(t), Ie(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ls(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Bv(r)),
          (e = dt(r, e)),
          s)
        ) {
          case 0:
            t = Do(null, t, r, e, n);
            break e;
          case 1:
            t = cu(null, t, r, e, n);
            break e;
          case 11:
            t = ou(null, t, r, e, n);
            break e;
          case 14:
            t = iu(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        Do(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        cu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Jm(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (s = a.element),
          ym(e, t),
          ks(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (s = fr(Error(P(423)), t)), (t = uu(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = fr(Error(P(424)), t)), (t = uu(e, t, r, n, s));
            break e;
          } else
            for (
              Ke = sn(t.stateNode.containerInfo.firstChild),
                Je = t,
                ie = !0,
                ht = null,
                n = wm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === s)) {
            t = At(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sm(t),
        e === null && So(t),
        (r = t.type),
        (s = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = s.children),
        yo(r, s) ? (o = null) : a !== null && yo(r, a) && (t.flags |= 32),
        Km(e, t),
        Ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && So(t), null;
    case 13:
      return Ym(e, t, n);
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = dr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        ou(e, t, r, s, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (a = t.memoizedProps),
          (o = s.value),
          ne(Ss, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (gt(a.value, o)) {
            if (a.children === s.children && !$e.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var c = a.dependencies;
              if (c !== null) {
                o = a.child;
                for (var i = c.firstContext; i !== null; ) {
                  if (i.context === r) {
                    if (a.tag === 1) {
                      (i = Tt(-1, n & -n)), (i.tag = 2);
                      var d = a.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var u = d.pending;
                        u === null
                          ? (i.next = i)
                          : ((i.next = u.next), (u.next = i)),
                          (d.pending = i);
                      }
                    }
                    (a.lanes |= n),
                      (i = a.alternate),
                      i !== null && (i.lanes |= n),
                      Co(a.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  i = i.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Co(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        Ie(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        ar(t, n),
        (s = ot(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = dt(r, t.pendingProps)),
        (s = dt(r.type, s)),
        iu(e, t, r, s, n)
      );
    case 15:
      return qm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        ls(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), Ns(t)) : (e = !1),
        ar(t, n),
        Nm(t, r, s),
        Eo(t, r, s, n),
        Ro(null, t, r, !0, e, n)
      );
    case 19:
      return Gm(e, t, n);
    case 22:
      return Qm(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function hf(e, t) {
  return Bd(e, t);
}
function Av(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new Av(e, t, n, r);
}
function Ui(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bv(e) {
  if (typeof e == "function") return Ui(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ai)) return 11;
    if (e === oi) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function os(e, t, n, r, s, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ui(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case $n:
        return En(n.children, s, a, t);
      case si:
        (o = 8), (s |= 8);
        break;
      case Ya:
        return (
          (e = lt(12, n, t, s | 2)), (e.elementType = Ya), (e.lanes = a), e
        );
      case Ga:
        return (e = lt(13, n, t, s)), (e.elementType = Ga), (e.lanes = a), e;
      case Xa:
        return (e = lt(19, n, t, s)), (e.elementType = Xa), (e.lanes = a), e;
      case bd:
        return Ks(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jd:
              o = 10;
              break e;
            case Nd:
              o = 9;
              break e;
            case ai:
              o = 11;
              break e;
            case oi:
              o = 14;
              break e;
            case Yt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function En(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Ks(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ia(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function Aa(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zv(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xa(0)),
    (this.expirationTimes = xa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Wi(e, t, n, r, s, a, o, c, i) {
  return (
    (e = new zv(e, t, n, c, i)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = lt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ci(a),
    e
  );
}
function Uv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pf(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return fm(e, n, t);
  }
  return t;
}
function vf(e, t, n, r, s, a, o, c, i) {
  return (
    (e = Wi(n, r, !0, e, s, a, o, c, i)),
    (e.context = pf(null)),
    (n = e.current),
    (r = Ae()),
    (s = cn(n)),
    (a = Tt(r, s)),
    (a.callback = t ?? null),
    an(n, a, s),
    (e.current.lanes = s),
    Nl(e, s, r),
    Ve(e, r),
    e
  );
}
function Js(e, t, n, r) {
  var s = t.current,
    a = Ae(),
    o = cn(s);
  return (
    (n = pf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(s, t, o)),
    e !== null && (vt(e, s, o, a), ts(e, s, o)),
    o
  );
}
function _s(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $i(e, t) {
  ju(e, t), (e = e.alternate) && ju(e, t);
}
function Wv() {
  return null;
}
var gf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hi(e) {
  this._internalRoot = e;
}
Ys.prototype.render = Hi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Js(e, t, null, null);
};
Ys.prototype.unmount = Hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      Js(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Ys(e) {
  this._internalRoot = e;
}
Ys.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
    Xt.splice(n, 0, e), n === 0 && Kd(e);
  }
};
function Vi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nu() {}
function $v(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var d = _s(o);
        a.call(d);
      };
    }
    var o = vf(t, r, e, 0, null, !1, !1, "", Nu);
    return (
      (e._reactRootContainer = o),
      (e[Ft] = o.current),
      ol(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var d = _s(i);
      c.call(d);
    };
  }
  var i = Wi(e, 0, !1, null, null, !1, !1, "", Nu);
  return (
    (e._reactRootContainer = i),
    (e[Ft] = i.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      Js(t, i, n, r);
    }),
    i
  );
}
function Xs(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var c = s;
      s = function () {
        var i = _s(o);
        c.call(i);
      };
    }
    Js(t, o, e, s);
  } else o = $v(n, t, e, s, r);
  return _s(o);
}
Hd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 &&
          (ui(t, n | 1), Ve(t, ge()), !(G & 6) && ((hr = ge() + 500), pn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = It(e, 1);
        if (r !== null) {
          var s = Ae();
          vt(r, e, 1, s);
        }
      }),
        $i(e, 1);
  }
};
di = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Ae();
      vt(t, e, 134217728, n);
    }
    $i(e, 134217728);
  }
};
Vd = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = It(e, t);
    if (n !== null) {
      var r = Ae();
      vt(n, e, t, r);
    }
    $i(e, t);
  }
};
qd = function () {
  return Z;
};
Qd = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
io = function (e, t, n) {
  switch (t) {
    case "input":
      if ((to(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ws(r);
            if (!s) throw Error(P(90));
            Sd(r), to(r, s);
          }
        }
      }
      break;
    case "textarea":
      kd(e, n);
      break;
    case "select":
      (t = n.value), t != null && nr(e, !!n.multiple, t, !1);
  }
};
Od = Ai;
_d = Tn;
var Hv = { usingClientEntryPoint: !1, Events: [wl, Qn, Ws, Pd, Td, Ai] },
  Tr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Vv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || Wv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kl.isDisabled && Kl.supportsFiber)
    try {
      (As = Kl.inject(Vv)), (Ct = Kl);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hv;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vi(t)) throw Error(P(200));
  return Uv(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Vi(e)) throw Error(P(299));
  var n = !1,
    r = "",
    s = gf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Wi(e, 1, !1, null, null, n, !1, r, s)),
    (e[Ft] = t.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    new Hi(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Tn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Gs(t)) throw Error(P(200));
  return Xs(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Vi(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    a = "",
    o = gf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = vf(t, null, e, 1, n ?? null, s, !1, a, o)),
    (e[Ft] = t.current),
    ol(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Ys(t);
};
Ge.render = function (e, t, n) {
  if (!Gs(t)) throw Error(P(200));
  return Xs(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Gs(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Xs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = Ai;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gs(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Xs(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function xf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
    } catch (e) {
      console.error(e);
    }
}
xf(), (pd.exports = Ge);
var qi = pd.exports;
const qv = Go(qi),
  Qv = rd({ __proto__: null, default: qv }, [qi]);
var bu = qi;
(Ka.createRoot = bu.createRoot), (Ka.hydrateRoot = bu.hydrateRoot);
const Kv = () => {
  const e = () => {
    const t = document.getElementById("sidebar");
    t && t.classList.toggle("collapsed");
  };
  return l.jsx("div", {
    children: l.jsx("div", {
      className: "main",
      children: l.jsxs("nav", {
        className: "navbar navbar-expand px-3 border-bottom",
        children: [
          l.jsx("button", {
            className: "btn",
            id: "sidebar-toggle",
            onClick: e,
            type: "button",
            children: l.jsx("span", { className: "navbar-toggler-icon" }),
          }),
          l.jsxs("div", {
            className: "navbar-collapse navbar",
            children: [
              l.jsx("h5", {
                className: "navbar-text mx-auto",
                "aria-label": "Site Name",
                children: "আশা লতা সংস্থা",
              }),
              l.jsxs("form", {
                className: "d-flex",
                "aria-label": "Search Form",
                children: [
                  l.jsx("input", {
                    className: "form-control me-2",
                    type: "text",
                    placeholder: "Search",
                    "aria-label": "Search",
                  }),
                  l.jsx("button", {
                    id: "serach",
                    className: "btn btn-primary",
                    type: "button",
                    children: "Search",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pe() {
  return (
    (pe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pe.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ve || (ve = {}));
const wu = "popstate";
function Jv(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: a, search: o, hash: c } = r.location;
    return vl(
      "",
      { pathname: a, search: o, hash: c },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : On(s);
  }
  return Gv(t, n, null, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Yv() {
  return Math.random().toString(36).substr(2, 8);
}
function Su(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? zt(t) : t,
      { state: n, key: (t && t.key) || r || Yv() }
    )
  );
}
function On(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function zt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Gv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: a = !1 } = r,
    o = s.history,
    c = ve.Pop,
    i = null,
    d = u();
  d == null && ((d = 0), o.replaceState(pe({}, o.state, { idx: d }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function m() {
    c = ve.Pop;
    let j = u(),
      h = j == null ? null : j - d;
    (d = j), i && i({ action: c, location: v.location, delta: h });
  }
  function p(j, h) {
    c = ve.Push;
    let f = vl(v.location, j, h);
    n && n(f, j), (d = u() + 1);
    let x = Su(f, d),
      k = v.createHref(f);
    try {
      o.pushState(x, "", k);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      s.location.assign(k);
    }
    a && i && i({ action: c, location: v.location, delta: 1 });
  }
  function N(j, h) {
    c = ve.Replace;
    let f = vl(v.location, j, h);
    n && n(f, j), (d = u());
    let x = Su(f, d),
      k = v.createHref(f);
    o.replaceState(x, "", k),
      a && i && i({ action: c, location: v.location, delta: 0 });
  }
  function g(j) {
    let h = s.location.origin !== "null" ? s.location.origin : s.location.href,
      f = typeof j == "string" ? j : On(j);
    return (
      (f = f.replace(/ $/, "%20")),
      q(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let v = {
    get action() {
      return c;
    },
    get location() {
      return e(s, o);
    },
    listen(j) {
      if (i) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(wu, m),
        (i = j),
        () => {
          s.removeEventListener(wu, m), (i = null);
        }
      );
    },
    createHref(j) {
      return t(s, j);
    },
    createURL: g,
    encodeLocation(j) {
      let h = g(j);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: N,
    go(j) {
      return o.go(j);
    },
  };
  return v;
}
var fe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fe || (fe = {}));
const Xv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Zv(e) {
  return e.index === !0;
}
function Wo(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((s, a) => {
      let o = [...n, a],
        c = typeof s.id == "string" ? s.id : o.join("-");
      if (
        (q(
          s.index !== !0 || !s.children,
          "Cannot specify children on an index route"
        ),
        q(
          !r[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Zv(s))
      ) {
        let i = pe({}, s, t(s), { id: c });
        return (r[c] = i), i;
      } else {
        let i = pe({}, s, t(s), { id: c, children: void 0 });
        return (
          (r[c] = i), s.children && (i.children = Wo(s.children, t, o, r)), i
        );
      }
    })
  );
}
function er(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? zt(t) : t,
    s = jr(r.pathname || "/", n);
  if (s == null) return null;
  let a = yf(e);
  tg(a);
  let o = null;
  for (let c = 0; o == null && c < a.length; ++c) {
    let i = fg(s);
    o = ug(a[c], i);
  }
  return o;
}
function eg(e, t) {
  let { route: n, pathname: r, params: s } = e;
  return { id: n.id, pathname: r, params: s, data: t[n.id], handle: n.handle };
}
function yf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (a, o, c) => {
    let i = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    i.relativePath.startsWith("/") &&
      (q(
        i.relativePath.startsWith(r),
        'Absolute route path "' +
          i.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (i.relativePath = i.relativePath.slice(r.length)));
    let d = Ot([r, i.relativePath]),
      u = n.concat(i);
    a.children &&
      a.children.length > 0 &&
      (q(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      yf(a.children, t, u, d)),
      !(a.path == null && !a.index) &&
        t.push({ path: d, score: ig(d, a.index), routesMeta: u });
  };
  return (
    e.forEach((a, o) => {
      var c;
      if (a.path === "" || !((c = a.path) != null && c.includes("?"))) s(a, o);
      else for (let i of jf(a.path)) s(a, o, i);
    }),
    t
  );
}
function jf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [a, ""] : [a];
  let o = jf(r.join("/")),
    c = [];
  return (
    c.push(...o.map((i) => (i === "" ? a : [a, i].join("/")))),
    s && c.push(...o),
    c.map((i) => (e.startsWith("/") && i === "" ? "/" : i))
  );
}
function tg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ng = /^:[\w-]+$/,
  rg = 3,
  lg = 2,
  sg = 1,
  ag = 10,
  og = -2,
  Cu = (e) => e === "*";
function ig(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cu) && (r += og),
    t && (r += lg),
    n
      .filter((s) => !Cu(s))
      .reduce((s, a) => s + (ng.test(a) ? rg : a === "" ? sg : ag), r)
  );
}
function cg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ug(e, t) {
  let { routesMeta: n } = e,
    r = {},
    s = "/",
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let c = n[o],
      i = o === n.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      u = dg(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: i },
        d
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let m = c.route;
    a.push({
      params: r,
      pathname: Ot([s, u.pathname]),
      pathnameBase: vg(Ot([s, u.pathnameBase])),
      route: m,
    }),
      u.pathnameBase !== "/" && (s = Ot([s, u.pathnameBase]));
  }
  return a;
}
function dg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mg(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let a = s[0],
    o = a.replace(/(.)\/+$/, "$1"),
    c = s.slice(1);
  return {
    params: r.reduce((d, u, m) => {
      let { paramName: p, isOptional: N } = u;
      if (p === "*") {
        let v = c[m] || "";
        o = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const g = c[m];
      return (
        N && !g ? (d[p] = void 0) : (d[p] = (g || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function mg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, c, i) => (
            r.push({ paramName: c, isOptional: i != null }),
            i ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function fg(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function jr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? zt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : pg(n, t)) : t,
    search: gg(r),
    hash: xg(s),
  };
}
function pg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ba(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Nf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qi(e, t) {
  let n = Nf(e);
  return t
    ? n.map((r, s) => (s === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ki(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = zt(e))
    : ((s = pe({}, e)),
      q(
        !s.pathname || !s.pathname.includes("?"),
        Ba("?", "pathname", "search", s)
      ),
      q(
        !s.pathname || !s.pathname.includes("#"),
        Ba("#", "pathname", "hash", s)
      ),
      q(!s.search || !s.search.includes("#"), Ba("#", "search", "hash", s)));
  let a = e === "" || s.pathname === "",
    o = a ? "/" : s.pathname,
    c;
  if (o == null) c = n;
  else {
    let m = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (m -= 1);
      s.pathname = p.join("/");
    }
    c = m >= 0 ? t[m] : "/";
  }
  let i = hg(s, c),
    d = o && o !== "/" && o.endsWith("/"),
    u = (a || o === ".") && n.endsWith("/");
  return !i.pathname.endsWith("/") && (d || u) && (i.pathname += "/"), i;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"),
  vg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  gg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  xg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ji {
  constructor(t, n, r, s) {
    s === void 0 && (s = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = s),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function bf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const wf = ["post", "put", "patch", "delete"],
  yg = new Set(wf),
  jg = ["get", ...wf],
  Ng = new Set(jg),
  bg = new Set([301, 302, 303, 307, 308]),
  wg = new Set([307, 308]),
  za = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Sg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Or = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Sf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Cf = "remix-router-transitions";
function kg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s;
  if (e.mapRouteProperties) s = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    s = (S) => ({ hasErrorBoundary: w(S) });
  } else s = Cg;
  let a = {},
    o = Wo(e.routes, s, void 0, a),
    c,
    i = e.basename || "/",
    d = pe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    u = null,
    m = new Set(),
    p = null,
    N = null,
    g = null,
    v = e.hydrationData != null,
    j = er(o, e.history.location, i),
    h = null;
  if (j == null) {
    let w = tt(404, { pathname: e.history.location.pathname }),
      { matches: S, route: M } = Ou(o);
    (j = S), (h = { [M.id]: w });
  }
  let f,
    x = j.some((w) => w.route.lazy),
    k = j.some((w) => w.route.loader);
  if (x) f = !1;
  else if (!k) f = !0;
  else if (d.v7_partialHydration) {
    let w = e.hydrationData ? e.hydrationData.loaderData : null,
      S = e.hydrationData ? e.hydrationData.errors : null;
    f = j.every(
      (M) =>
        M.route.loader &&
        M.route.loader.hydrate !== !0 &&
        ((w && w[M.route.id] !== void 0) || (S && S[M.route.id] !== void 0))
    );
  } else f = e.hydrationData != null;
  let E,
    b = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: j,
      initialized: f,
      navigation: za,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = ve.Pop,
    R = !1,
    T,
    F = !1,
    J = new Map(),
    je = null,
    xe = !1,
    Ze = !1,
    In = [],
    Ut = [],
    ae = new Map(),
    _ = 0,
    z = -1,
    W = new Map(),
    X = new Set(),
    re = new Map(),
    xt = new Map(),
    Ee = new Set(),
    ct = new Map(),
    Fe = new Map(),
    Wt = !1;
  function ah() {
    if (
      ((u = e.history.listen((w) => {
        let { action: S, location: M, delta: O } = w;
        if (Wt) {
          Wt = !1;
          return;
        }
        pr(
          Fe.size === 0 || O != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let I = dc({
          currentLocation: b.location,
          nextLocation: M,
          historyAction: S,
        });
        if (I && O != null) {
          (Wt = !0),
            e.history.go(O * -1),
            Dl(I, {
              state: "blocked",
              location: M,
              proceed() {
                Dl(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  e.history.go(O);
              },
              reset() {
                let V = new Map(b.blockers);
                V.set(I, Or), qe({ blockers: V });
              },
            });
          return;
        }
        return gn(S, M);
      })),
      n)
    ) {
      Ig(t, J);
      let w = () => Ag(t, J);
      t.addEventListener("pagehide", w),
        (je = () => t.removeEventListener("pagehide", w));
    }
    return b.initialized || gn(ve.Pop, b.location, { initialHydration: !0 }), E;
  }
  function oh() {
    u && u(),
      je && je(),
      m.clear(),
      T && T.abort(),
      b.fetchers.forEach((w, S) => Ml(S)),
      b.blockers.forEach((w, S) => uc(S));
  }
  function ih(w) {
    return m.add(w), () => m.delete(w);
  }
  function qe(w, S) {
    S === void 0 && (S = {}), (b = pe({}, b, w));
    let M = [],
      O = [];
    d.v7_fetcherPersist &&
      b.fetchers.forEach((I, V) => {
        I.state === "idle" && (Ee.has(V) ? O.push(V) : M.push(V));
      }),
      [...m].forEach((I) =>
        I(b, {
          deletedFetchers: O,
          unstable_viewTransitionOpts: S.viewTransitionOpts,
          unstable_flushSync: S.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (M.forEach((I) => b.fetchers.delete(I)), O.forEach((I) => Ml(I)));
  }
  function br(w, S, M) {
    var O, I;
    let { flushSync: V } = M === void 0 ? {} : M,
      U =
        b.actionData != null &&
        b.navigation.formMethod != null &&
        ft(b.navigation.formMethod) &&
        b.navigation.state === "loading" &&
        ((O = w.state) == null ? void 0 : O._isRedirect) !== !0,
      B;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (B = S.actionData)
        : (B = null)
      : U
      ? (B = b.actionData)
      : (B = null);
    let A = S.loaderData
        ? Tu(b.loaderData, S.loaderData, S.matches || [], S.errors)
        : b.loaderData,
      K = b.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((te, Me) => K.set(Me, Or)));
    let we =
      R === !0 ||
      (b.navigation.formMethod != null &&
        ft(b.navigation.formMethod) &&
        ((I = w.state) == null ? void 0 : I._isRedirect) !== !0);
    c && ((o = c), (c = void 0)),
      xe ||
        C === ve.Pop ||
        (C === ve.Push
          ? e.history.push(w, w.state)
          : C === ve.Replace && e.history.replace(w, w.state));
    let H;
    if (C === ve.Pop) {
      let te = J.get(b.location.pathname);
      te && te.has(w.pathname)
        ? (H = { currentLocation: b.location, nextLocation: w })
        : J.has(w.pathname) &&
          (H = { currentLocation: w, nextLocation: b.location });
    } else if (F) {
      let te = J.get(b.location.pathname);
      te
        ? te.add(w.pathname)
        : ((te = new Set([w.pathname])), J.set(b.location.pathname, te)),
        (H = { currentLocation: b.location, nextLocation: w });
    }
    qe(
      pe({}, S, {
        actionData: B,
        loaderData: A,
        historyAction: C,
        location: w,
        initialized: !0,
        navigation: za,
        revalidation: "idle",
        restoreScrollPosition: fc(w, S.matches || b.matches),
        preventScrollReset: we,
        blockers: K,
      }),
      { viewTransitionOpts: H, flushSync: V === !0 }
    ),
      (C = ve.Pop),
      (R = !1),
      (F = !1),
      (xe = !1),
      (Ze = !1),
      (In = []),
      (Ut = []);
  }
  async function lc(w, S) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let M = $o(
        b.location,
        b.matches,
        i,
        d.v7_prependBasename,
        w,
        d.v7_relativeSplatPath,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: O,
        submission: I,
        error: V,
      } = ku(d.v7_normalizeFormMethod, !1, M, S),
      U = b.location,
      B = vl(b.location, O, S && S.state);
    B = pe({}, B, e.history.encodeLocation(B));
    let A = S && S.replace != null ? S.replace : void 0,
      K = ve.Push;
    A === !0
      ? (K = ve.Replace)
      : A === !1 ||
        (I != null &&
          ft(I.formMethod) &&
          I.formAction === b.location.pathname + b.location.search &&
          (K = ve.Replace));
    let we =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      H = (S && S.unstable_flushSync) === !0,
      te = dc({ currentLocation: U, nextLocation: B, historyAction: K });
    if (te) {
      Dl(te, {
        state: "blocked",
        location: B,
        proceed() {
          Dl(te, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: B,
          }),
            lc(w, S);
        },
        reset() {
          let Me = new Map(b.blockers);
          Me.set(te, Or), qe({ blockers: Me });
        },
      });
      return;
    }
    return await gn(K, B, {
      submission: I,
      pendingError: V,
      preventScrollReset: we,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
      flushSync: H,
    });
  }
  function ch() {
    if (
      (oa(),
      qe({ revalidation: "loading" }),
      b.navigation.state !== "submitting")
    ) {
      if (b.navigation.state === "idle") {
        gn(b.historyAction, b.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      gn(C || b.historyAction, b.navigation.location, {
        overrideNavigation: b.navigation,
      });
    }
  }
  async function gn(w, S, M) {
    T && T.abort(),
      (T = null),
      (C = w),
      (xe = (M && M.startUninterruptedRevalidation) === !0),
      xh(b.location, b.matches),
      (R = (M && M.preventScrollReset) === !0),
      (F = (M && M.enableViewTransition) === !0);
    let O = c || o,
      I = M && M.overrideNavigation,
      V = er(O, S, i),
      U = (M && M.flushSync) === !0;
    if (!V) {
      let Me = tt(404, { pathname: S.pathname }),
        { matches: et, route: Se } = Ou(O);
      ia(),
        br(
          S,
          { matches: et, loaderData: {}, errors: { [Se.id]: Me } },
          { flushSync: U }
        );
      return;
    }
    if (
      b.initialized &&
      !Ze &&
      Pg(b.location, S) &&
      !(M && M.submission && ft(M.submission.formMethod))
    ) {
      br(S, { matches: V }, { flushSync: U });
      return;
    }
    T = new AbortController();
    let B = Lr(e.history, S, T.signal, M && M.submission),
      A,
      K;
    if (M && M.pendingError) K = { [Xr(V).route.id]: M.pendingError };
    else if (M && M.submission && ft(M.submission.formMethod)) {
      let Me = await uh(B, S, M.submission, V, {
        replace: M.replace,
        flushSync: U,
      });
      if (Me.shortCircuited) return;
      (A = Me.pendingActionData),
        (K = Me.pendingActionError),
        (I = Ua(S, M.submission)),
        (U = !1),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: we,
      loaderData: H,
      errors: te,
    } = await dh(
      B,
      S,
      V,
      I,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      U,
      A,
      K
    );
    we ||
      ((T = null),
      br(
        S,
        pe({ matches: V }, A ? { actionData: A } : {}, {
          loaderData: H,
          errors: te,
        })
      ));
  }
  async function uh(w, S, M, O, I) {
    I === void 0 && (I = {}), oa();
    let V = Lg(S, M);
    qe({ navigation: V }, { flushSync: I.flushSync === !0 });
    let U,
      B = Vo(O, S);
    if (!B.route.action && !B.route.lazy)
      U = {
        type: fe.error,
        error: tt(405, {
          method: w.method,
          pathname: S.pathname,
          routeId: B.route.id,
        }),
      };
    else if (
      ((U = await _r("action", w, B, O, a, s, i, d.v7_relativeSplatPath)),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Cn(U)) {
      let A;
      return (
        I && I.replace != null
          ? (A = I.replace)
          : (A = U.location === b.location.pathname + b.location.search),
        await wr(b, U, { submission: M, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (tr(U)) {
      let A = Xr(O, B.route.id);
      return (
        (I && I.replace) !== !0 && (C = ve.Push),
        { pendingActionData: {}, pendingActionError: { [A.route.id]: U.error } }
      );
    }
    if (Sn(U)) throw tt(400, { type: "defer-action" });
    return { pendingActionData: { [B.route.id]: U.data } };
  }
  async function dh(w, S, M, O, I, V, U, B, A, K, we) {
    let H = O || Ua(S, I),
      te = I || V || Fu(H),
      Me = c || o,
      [et, Se] = Eu(
        e.history,
        b,
        M,
        te,
        S,
        d.v7_partialHydration && B === !0,
        Ze,
        In,
        Ut,
        Ee,
        re,
        X,
        Me,
        i,
        K,
        we
      );
    if (
      (ia(
        (ee) =>
          !(M && M.some((oe) => oe.route.id === ee)) ||
          (et && et.some((oe) => oe.route.id === ee))
      ),
      (z = ++_),
      et.length === 0 && Se.length === 0)
    ) {
      let ee = ic();
      return (
        br(
          S,
          pe(
            { matches: M, loaderData: {}, errors: we || null },
            K ? { actionData: K } : {},
            ee ? { fetchers: new Map(b.fetchers) } : {}
          ),
          { flushSync: A }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!xe && (!d.v7_partialHydration || !B)) {
      Se.forEach((oe) => {
        let yt = b.fetchers.get(oe.key),
          Pl = Fr(void 0, yt ? yt.data : void 0);
        b.fetchers.set(oe.key, Pl);
      });
      let ee = K || b.actionData;
      qe(
        pe(
          { navigation: H },
          ee
            ? Object.keys(ee).length === 0
              ? { actionData: null }
              : { actionData: ee }
            : {},
          Se.length > 0 ? { fetchers: new Map(b.fetchers) } : {}
        ),
        { flushSync: A }
      );
    }
    Se.forEach((ee) => {
      ae.has(ee.key) && Ht(ee.key),
        ee.controller && ae.set(ee.key, ee.controller);
    });
    let An = () => Se.forEach((ee) => Ht(ee.key));
    T && T.signal.addEventListener("abort", An);
    let {
      results: ca,
      loaderResults: Bn,
      fetcherResults: Vt,
    } = await sc(b.matches, M, et, Se, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", An),
      Se.forEach((ee) => ae.delete(ee.key));
    let xn = _u(ca);
    if (xn) {
      if (xn.idx >= et.length) {
        let ee = Se[xn.idx - et.length].key;
        X.add(ee);
      }
      return await wr(b, xn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: ua, errors: da } = Pu(b, M, et, Bn, we, Se, Vt, ct);
    ct.forEach((ee, oe) => {
      ee.subscribe((yt) => {
        (yt || ee.done) && ct.delete(oe);
      });
    });
    let ma = ic(),
      zn = cc(z),
      Rl = ma || zn || Se.length > 0;
    return pe(
      { loaderData: ua, errors: da },
      Rl ? { fetchers: new Map(b.fetchers) } : {}
    );
  }
  function mh(w, S, M, O) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ae.has(w) && Ht(w);
    let I = (O && O.unstable_flushSync) === !0,
      V = c || o,
      U = $o(
        b.location,
        b.matches,
        i,
        d.v7_prependBasename,
        M,
        d.v7_relativeSplatPath,
        S,
        O == null ? void 0 : O.relative
      ),
      B = er(V, U, i);
    if (!B) {
      Sr(w, S, tt(404, { pathname: U }), { flushSync: I });
      return;
    }
    let {
      path: A,
      submission: K,
      error: we,
    } = ku(d.v7_normalizeFormMethod, !0, U, O);
    if (we) {
      Sr(w, S, we, { flushSync: I });
      return;
    }
    let H = Vo(B, A);
    if (((R = (O && O.preventScrollReset) === !0), K && ft(K.formMethod))) {
      fh(w, S, A, H, B, I, K);
      return;
    }
    re.set(w, { routeId: S, path: A }), hh(w, S, A, H, B, I, K);
  }
  async function fh(w, S, M, O, I, V, U) {
    if ((oa(), re.delete(w), !O.route.action && !O.route.lazy)) {
      let oe = tt(405, { method: U.formMethod, pathname: M, routeId: S });
      Sr(w, S, oe, { flushSync: V });
      return;
    }
    let B = b.fetchers.get(w);
    $t(w, Fg(U, B), { flushSync: V });
    let A = new AbortController(),
      K = Lr(e.history, M, A.signal, U);
    ae.set(w, A);
    let we = _,
      H = await _r("action", K, O, I, a, s, i, d.v7_relativeSplatPath);
    if (K.signal.aborted) {
      ae.get(w) === A && ae.delete(w);
      return;
    }
    if (d.v7_fetcherPersist && Ee.has(w)) {
      if (Cn(H) || tr(H)) {
        $t(w, Jt(void 0));
        return;
      }
    } else {
      if (Cn(H))
        if ((ae.delete(w), z > we)) {
          $t(w, Jt(void 0));
          return;
        } else
          return X.add(w), $t(w, Fr(U)), wr(b, H, { fetcherSubmission: U });
      if (tr(H)) {
        Sr(w, S, H.error);
        return;
      }
    }
    if (Sn(H)) throw tt(400, { type: "defer-action" });
    let te = b.navigation.location || b.location,
      Me = Lr(e.history, te, A.signal),
      et = c || o,
      Se =
        b.navigation.state !== "idle"
          ? er(et, b.navigation.location, i)
          : b.matches;
    q(Se, "Didn't find any matches after fetcher action");
    let An = ++_;
    W.set(w, An);
    let ca = Fr(U, H.data);
    b.fetchers.set(w, ca);
    let [Bn, Vt] = Eu(
      e.history,
      b,
      Se,
      U,
      te,
      !1,
      Ze,
      In,
      Ut,
      Ee,
      re,
      X,
      et,
      i,
      { [O.route.id]: H.data },
      void 0
    );
    Vt.filter((oe) => oe.key !== w).forEach((oe) => {
      let yt = oe.key,
        Pl = b.fetchers.get(yt),
        jh = Fr(void 0, Pl ? Pl.data : void 0);
      b.fetchers.set(yt, jh),
        ae.has(yt) && Ht(yt),
        oe.controller && ae.set(yt, oe.controller);
    }),
      qe({ fetchers: new Map(b.fetchers) });
    let xn = () => Vt.forEach((oe) => Ht(oe.key));
    A.signal.addEventListener("abort", xn);
    let {
      results: ua,
      loaderResults: da,
      fetcherResults: ma,
    } = await sc(b.matches, Se, Bn, Vt, Me);
    if (A.signal.aborted) return;
    A.signal.removeEventListener("abort", xn),
      W.delete(w),
      ae.delete(w),
      Vt.forEach((oe) => ae.delete(oe.key));
    let zn = _u(ua);
    if (zn) {
      if (zn.idx >= Bn.length) {
        let oe = Vt[zn.idx - Bn.length].key;
        X.add(oe);
      }
      return wr(b, zn.result);
    }
    let { loaderData: Rl, errors: ee } = Pu(
      b,
      b.matches,
      Bn,
      da,
      void 0,
      Vt,
      ma,
      ct
    );
    if (b.fetchers.has(w)) {
      let oe = Jt(H.data);
      b.fetchers.set(w, oe);
    }
    cc(An),
      b.navigation.state === "loading" && An > z
        ? (q(C, "Expected pending action"),
          T && T.abort(),
          br(b.navigation.location, {
            matches: Se,
            loaderData: Rl,
            errors: ee,
            fetchers: new Map(b.fetchers),
          }))
        : (qe({
            errors: ee,
            loaderData: Tu(b.loaderData, Rl, Se, ee),
            fetchers: new Map(b.fetchers),
          }),
          (Ze = !1));
  }
  async function hh(w, S, M, O, I, V, U) {
    let B = b.fetchers.get(w);
    $t(w, Fr(U, B ? B.data : void 0), { flushSync: V });
    let A = new AbortController(),
      K = Lr(e.history, M, A.signal);
    ae.set(w, A);
    let we = _,
      H = await _r("loader", K, O, I, a, s, i, d.v7_relativeSplatPath);
    if (
      (Sn(H) && (H = (await Mf(H, K.signal, !0)) || H),
      ae.get(w) === A && ae.delete(w),
      !K.signal.aborted)
    ) {
      if (Ee.has(w)) {
        $t(w, Jt(void 0));
        return;
      }
      if (Cn(H))
        if (z > we) {
          $t(w, Jt(void 0));
          return;
        } else {
          X.add(w), await wr(b, H);
          return;
        }
      if (tr(H)) {
        Sr(w, S, H.error);
        return;
      }
      q(!Sn(H), "Unhandled fetcher deferred data"), $t(w, Jt(H.data));
    }
  }
  async function wr(w, S, M) {
    let {
      submission: O,
      fetcherSubmission: I,
      replace: V,
    } = M === void 0 ? {} : M;
    S.revalidate && (Ze = !0);
    let U = vl(w.location, S.location, { _isRedirect: !0 });
    if ((q(U, "Expected a location on the redirect navigation"), n)) {
      let te = !1;
      if (S.reloadDocument) te = !0;
      else if (Sf.test(S.location)) {
        const Me = e.history.createURL(S.location);
        te = Me.origin !== t.location.origin || jr(Me.pathname, i) == null;
      }
      if (te) {
        V ? t.location.replace(S.location) : t.location.assign(S.location);
        return;
      }
    }
    T = null;
    let B = V === !0 ? ve.Replace : ve.Push,
      { formMethod: A, formAction: K, formEncType: we } = w.navigation;
    !O && !I && A && K && we && (O = Fu(w.navigation));
    let H = O || I;
    if (wg.has(S.status) && H && ft(H.formMethod))
      await gn(B, U, {
        submission: pe({}, H, { formAction: S.location }),
        preventScrollReset: R,
      });
    else {
      let te = Ua(U, O);
      await gn(B, U, {
        overrideNavigation: te,
        fetcherSubmission: I,
        preventScrollReset: R,
      });
    }
  }
  async function sc(w, S, M, O, I) {
    let V = await Promise.all([
        ...M.map((A) => _r("loader", I, A, S, a, s, i, d.v7_relativeSplatPath)),
        ...O.map((A) =>
          A.matches && A.match && A.controller
            ? _r(
                "loader",
                Lr(e.history, A.path, A.controller.signal),
                A.match,
                A.matches,
                a,
                s,
                i,
                d.v7_relativeSplatPath
              )
            : { type: fe.error, error: tt(404, { pathname: A.path }) }
        ),
      ]),
      U = V.slice(0, M.length),
      B = V.slice(M.length);
    return (
      await Promise.all([
        Lu(
          w,
          M,
          U,
          U.map(() => I.signal),
          !1,
          b.loaderData
        ),
        Lu(
          w,
          O.map((A) => A.match),
          B,
          O.map((A) => (A.controller ? A.controller.signal : null)),
          !0
        ),
      ]),
      { results: V, loaderResults: U, fetcherResults: B }
    );
  }
  function oa() {
    (Ze = !0),
      In.push(...ia()),
      re.forEach((w, S) => {
        ae.has(S) && (Ut.push(S), Ht(S));
      });
  }
  function $t(w, S, M) {
    M === void 0 && (M = {}),
      b.fetchers.set(w, S),
      qe(
        { fetchers: new Map(b.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Sr(w, S, M, O) {
    O === void 0 && (O = {});
    let I = Xr(b.matches, S);
    Ml(w),
      qe(
        { errors: { [I.route.id]: M }, fetchers: new Map(b.fetchers) },
        { flushSync: (O && O.flushSync) === !0 }
      );
  }
  function ac(w) {
    return (
      d.v7_fetcherPersist &&
        (xt.set(w, (xt.get(w) || 0) + 1), Ee.has(w) && Ee.delete(w)),
      b.fetchers.get(w) || Sg
    );
  }
  function Ml(w) {
    let S = b.fetchers.get(w);
    ae.has(w) && !(S && S.state === "loading" && W.has(w)) && Ht(w),
      re.delete(w),
      W.delete(w),
      X.delete(w),
      Ee.delete(w),
      b.fetchers.delete(w);
  }
  function ph(w) {
    if (d.v7_fetcherPersist) {
      let S = (xt.get(w) || 0) - 1;
      S <= 0 ? (xt.delete(w), Ee.add(w)) : xt.set(w, S);
    } else Ml(w);
    qe({ fetchers: new Map(b.fetchers) });
  }
  function Ht(w) {
    let S = ae.get(w);
    q(S, "Expected fetch controller: " + w), S.abort(), ae.delete(w);
  }
  function oc(w) {
    for (let S of w) {
      let M = ac(S),
        O = Jt(M.data);
      b.fetchers.set(S, O);
    }
  }
  function ic() {
    let w = [],
      S = !1;
    for (let M of X) {
      let O = b.fetchers.get(M);
      q(O, "Expected fetcher: " + M),
        O.state === "loading" && (X.delete(M), w.push(M), (S = !0));
    }
    return oc(w), S;
  }
  function cc(w) {
    let S = [];
    for (let [M, O] of W)
      if (O < w) {
        let I = b.fetchers.get(M);
        q(I, "Expected fetcher: " + M),
          I.state === "loading" && (Ht(M), W.delete(M), S.push(M));
      }
    return oc(S), S.length > 0;
  }
  function vh(w, S) {
    let M = b.blockers.get(w) || Or;
    return Fe.get(w) !== S && Fe.set(w, S), M;
  }
  function uc(w) {
    b.blockers.delete(w), Fe.delete(w);
  }
  function Dl(w, S) {
    let M = b.blockers.get(w) || Or;
    q(
      (M.state === "unblocked" && S.state === "blocked") ||
        (M.state === "blocked" && S.state === "blocked") ||
        (M.state === "blocked" && S.state === "proceeding") ||
        (M.state === "blocked" && S.state === "unblocked") ||
        (M.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + S.state
    );
    let O = new Map(b.blockers);
    O.set(w, S), qe({ blockers: O });
  }
  function dc(w) {
    let { currentLocation: S, nextLocation: M, historyAction: O } = w;
    if (Fe.size === 0) return;
    Fe.size > 1 && pr(!1, "A router only supports one blocker at a time");
    let I = Array.from(Fe.entries()),
      [V, U] = I[I.length - 1],
      B = b.blockers.get(V);
    if (
      !(B && B.state === "proceeding") &&
      U({ currentLocation: S, nextLocation: M, historyAction: O })
    )
      return V;
  }
  function ia(w) {
    let S = [];
    return (
      ct.forEach((M, O) => {
        (!w || w(O)) && (M.cancel(), S.push(O), ct.delete(O));
      }),
      S
    );
  }
  function gh(w, S, M) {
    if (((p = w), (g = S), (N = M || null), !v && b.navigation === za)) {
      v = !0;
      let O = fc(b.location, b.matches);
      O != null && qe({ restoreScrollPosition: O });
    }
    return () => {
      (p = null), (g = null), (N = null);
    };
  }
  function mc(w, S) {
    return (
      (N &&
        N(
          w,
          S.map((O) => eg(O, b.loaderData))
        )) ||
      w.key
    );
  }
  function xh(w, S) {
    if (p && g) {
      let M = mc(w, S);
      p[M] = g();
    }
  }
  function fc(w, S) {
    if (p) {
      let M = mc(w, S),
        O = p[M];
      if (typeof O == "number") return O;
    }
    return null;
  }
  function yh(w) {
    (a = {}), (c = Wo(w, s, void 0, a));
  }
  return (
    (E = {
      get basename() {
        return i;
      },
      get future() {
        return d;
      },
      get state() {
        return b;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: ah,
      subscribe: ih,
      enableScrollRestoration: gh,
      navigate: lc,
      fetch: mh,
      revalidate: ch,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: ac,
      deleteFetcher: ph,
      dispose: oh,
      getBlocker: vh,
      deleteBlocker: uc,
      _internalFetchControllers: ae,
      _internalActiveDeferreds: ct,
      _internalSetRoutes: yh,
    }),
    E
  );
}
function Eg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function $o(e, t, n, r, s, a, o, c) {
  let i, d;
  if (o) {
    i = [];
    for (let m of t)
      if ((i.push(m), m.route.id === o)) {
        d = m;
        break;
      }
  } else (i = t), (d = t[t.length - 1]);
  let u = Ki(s || ".", Qi(i, a), jr(e.pathname, n) || e.pathname, c === "path");
  return (
    s == null && ((u.search = e.search), (u.hash = e.hash)),
    (s == null || s === "" || s === ".") &&
      d &&
      d.route.index &&
      !Yi(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Ot([n, u.pathname])),
    On(u)
  );
}
function ku(e, t, n, r) {
  if (!r || !Eg(r)) return { path: n };
  if (r.formMethod && !_g(r.formMethod))
    return { path: n, error: tt(405, { method: r.formMethod }) };
  let s = () => ({ path: n, error: tt(400, { type: "invalid-body" }) }),
    a = r.formMethod || "get",
    o = e ? a.toUpperCase() : a.toLowerCase(),
    c = Ef(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ft(o)) return s();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((N, g) => {
              let [v, j] = g;
              return (
                "" +
                N +
                v +
                "=" +
                j +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ft(o)) return s();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let i, d;
  if (r.formData) (i = Ho(r.formData)), (d = r.formData);
  else if (r.body instanceof FormData) (i = Ho(r.body)), (d = r.body);
  else if (r.body instanceof URLSearchParams) (i = r.body), (d = Ru(i));
  else if (r.body == null) (i = new URLSearchParams()), (d = new FormData());
  else
    try {
      (i = new URLSearchParams(r.body)), (d = Ru(i));
    } catch {
      return s();
    }
  let u = {
    formMethod: o,
    formAction: c,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (ft(u.formMethod)) return { path: n, submission: u };
  let m = zt(n);
  return (
    t && m.search && Yi(m.search) && i.append("index", ""),
    (m.search = "?" + i),
    { path: On(m), submission: u }
  );
}
function Mg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((s) => s.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Eu(e, t, n, r, s, a, o, c, i, d, u, m, p, N, g, v) {
  let j = v ? Object.values(v)[0] : g ? Object.values(g)[0] : void 0,
    h = e.createURL(t.location),
    f = e.createURL(s),
    x = v ? Object.keys(v)[0] : void 0,
    E = Mg(n, x).filter((C, R) => {
      let { route: T } = C;
      if (T.lazy) return !0;
      if (T.loader == null) return !1;
      if (a)
        return T.loader.hydrate
          ? !0
          : t.loaderData[T.id] === void 0 &&
              (!t.errors || t.errors[T.id] === void 0);
      if (
        Dg(t.loaderData, t.matches[R], C) ||
        c.some((je) => je === C.route.id)
      )
        return !0;
      let F = t.matches[R],
        J = C;
      return Mu(
        C,
        pe(
          {
            currentUrl: h,
            currentParams: F.params,
            nextUrl: f,
            nextParams: J.params,
          },
          r,
          {
            actionResult: j,
            defaultShouldRevalidate:
              o ||
              h.pathname + h.search === f.pathname + f.search ||
              h.search !== f.search ||
              kf(F, J),
          }
        )
      );
    }),
    b = [];
  return (
    u.forEach((C, R) => {
      if (a || !n.some((xe) => xe.route.id === C.routeId) || d.has(R)) return;
      let T = er(p, C.path, N);
      if (!T) {
        b.push({
          key: R,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let F = t.fetchers.get(R),
        J = Vo(T, C.path),
        je = !1;
      m.has(R)
        ? (je = !1)
        : i.includes(R)
        ? (je = !0)
        : F && F.state !== "idle" && F.data === void 0
        ? (je = o)
        : (je = Mu(
            J,
            pe(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: j, defaultShouldRevalidate: o }
            )
          )),
        je &&
          b.push({
            key: R,
            routeId: C.routeId,
            path: C.path,
            matches: T,
            match: J,
            controller: new AbortController(),
          });
    }),
    [E, b]
  );
}
function Dg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    s = e[n.route.id] === void 0;
  return r || s;
}
function kf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Mu(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Du(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let s = n[e.id];
  q(s, "No route found in manifest");
  let a = {};
  for (let o in r) {
    let i = s[o] !== void 0 && o !== "hasErrorBoundary";
    pr(
      !i,
      'Route "' +
        s.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !i && !Xv.has(o) && (a[o] = r[o]);
  }
  Object.assign(s, a), Object.assign(s, pe({}, t(s), { lazy: void 0 }));
}
async function _r(e, t, n, r, s, a, o, c, i) {
  i === void 0 && (i = {});
  let d,
    u,
    m,
    p = (v) => {
      let j,
        h = new Promise((f, x) => (j = x));
      return (
        (m = () => j()),
        t.signal.addEventListener("abort", m),
        Promise.race([
          v({ request: t, params: n.params, context: i.requestContext }),
          h,
        ])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) {
        let j,
          h = await Promise.all([
            p(v).catch((f) => {
              j = f;
            }),
            Du(n.route, a, s),
          ]);
        if (j) throw j;
        u = h[0];
      } else if ((await Du(n.route, a, s), (v = n.route[e]), v)) u = await p(v);
      else if (e === "action") {
        let j = new URL(t.url),
          h = j.pathname + j.search;
        throw tt(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: fe.data, data: void 0 };
    else if (v) u = await p(v);
    else {
      let j = new URL(t.url),
        h = j.pathname + j.search;
      throw tt(404, { pathname: h });
    }
    q(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (v) {
    (d = fe.error), (u = v);
  } finally {
    m && t.signal.removeEventListener("abort", m);
  }
  if (Og(u)) {
    let v = u.status;
    if (bg.has(v)) {
      let h = u.headers.get("Location");
      if (
        (q(
          h,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Sf.test(h))
      )
        h = $o(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, h, c);
      else if (!i.isStaticRequest) {
        let f = new URL(t.url),
          x = h.startsWith("//") ? new URL(f.protocol + h) : new URL(h),
          k = jr(x.pathname, o) != null;
        x.origin === f.origin && k && (h = x.pathname + x.search + x.hash);
      }
      if (i.isStaticRequest) throw (u.headers.set("Location", h), u);
      return {
        type: fe.redirect,
        status: v,
        location: h,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (i.isRouteRequest)
      throw { type: d === fe.error ? fe.error : fe.data, response: u };
    let j;
    try {
      let h = u.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? u.body == null
          ? (j = null)
          : (j = await u.json())
        : (j = await u.text());
    } catch (h) {
      return { type: fe.error, error: h };
    }
    return d === fe.error
      ? { type: d, error: new Ji(v, u.statusText, j), headers: u.headers }
      : { type: fe.data, data: j, statusCode: u.status, headers: u.headers };
  }
  if (d === fe.error) return { type: d, error: u };
  if (Tg(u)) {
    var N, g;
    return {
      type: fe.deferred,
      deferredData: u,
      statusCode: (N = u.init) == null ? void 0 : N.status,
      headers:
        ((g = u.init) == null ? void 0 : g.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: fe.data, data: u };
}
function Lr(e, t, n, r) {
  let s = e.createURL(Ef(t)).toString(),
    a = { signal: n };
  if (r && ft(r.formMethod)) {
    let { formMethod: o, formEncType: c } = r;
    (a.method = o.toUpperCase()),
      c === "application/json"
        ? ((a.headers = new Headers({ "Content-Type": c })),
          (a.body = JSON.stringify(r.json)))
        : c === "text/plain"
        ? (a.body = r.text)
        : c === "application/x-www-form-urlencoded" && r.formData
        ? (a.body = Ho(r.formData))
        : (a.body = r.formData);
  }
  return new Request(s, a);
}
function Ho(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ru(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Rg(e, t, n, r, s) {
  let a = {},
    o = null,
    c,
    i = !1,
    d = {};
  return (
    n.forEach((u, m) => {
      let p = t[m].route.id;
      if (
        (q(!Cn(u), "Cannot handle redirect results in processLoaderData"),
        tr(u))
      ) {
        let N = Xr(e, p),
          g = u.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[N.route.id] == null && (o[N.route.id] = g),
          (a[p] = void 0),
          i || ((i = !0), (c = bf(u.error) ? u.error.status : 500)),
          u.headers && (d[p] = u.headers);
      } else
        Sn(u)
          ? (s.set(p, u.deferredData), (a[p] = u.deferredData.data))
          : (a[p] = u.data),
          u.statusCode != null &&
            u.statusCode !== 200 &&
            !i &&
            (c = u.statusCode),
          u.headers && (d[p] = u.headers);
    }),
    r && ((o = r), (a[Object.keys(r)[0]] = void 0)),
    { loaderData: a, errors: o, statusCode: c || 200, loaderHeaders: d }
  );
}
function Pu(e, t, n, r, s, a, o, c) {
  let { loaderData: i, errors: d } = Rg(t, n, r, s, c);
  for (let u = 0; u < a.length; u++) {
    let { key: m, match: p, controller: N } = a[u];
    q(
      o !== void 0 && o[u] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = o[u];
    if (!(N && N.signal.aborted))
      if (tr(g)) {
        let v = Xr(e.matches, p == null ? void 0 : p.route.id);
        (d && d[v.route.id]) || (d = pe({}, d, { [v.route.id]: g.error })),
          e.fetchers.delete(m);
      } else if (Cn(g)) q(!1, "Unhandled fetcher revalidation redirect");
      else if (Sn(g)) q(!1, "Unhandled fetcher deferred data");
      else {
        let v = Jt(g.data);
        e.fetchers.set(m, v);
      }
  }
  return { loaderData: i, errors: d };
}
function Tu(e, t, n, r) {
  let s = pe({}, t);
  for (let a of n) {
    let o = a.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (s[o] = t[o])
        : e[o] !== void 0 && a.route.loader && (s[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return s;
}
function Xr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ou(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function tt(e, t) {
  let { pathname: n, routeId: r, method: s, type: a } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    c = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        s && n && r
          ? (c =
              "You made a " +
              s +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : a === "defer-action"
          ? (c = "defer() is not supported in actions")
          : a === "invalid-body" && (c = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (c = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (c = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        s && n && r
          ? (c =
              "You made a " +
              s.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s && (c = 'Invalid request method "' + s.toUpperCase() + '"')),
    new Ji(e || 500, o, new Error(c), !0)
  );
}
function _u(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Cn(n)) return { result: n, idx: t };
  }
}
function Ef(e) {
  let t = typeof e == "string" ? zt(e) : e;
  return On(pe({}, t, { hash: "" }));
}
function Pg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Sn(e) {
  return e.type === fe.deferred;
}
function tr(e) {
  return e.type === fe.error;
}
function Cn(e) {
  return (e && e.type) === fe.redirect;
}
function Tg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Og(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function _g(e) {
  return Ng.has(e.toLowerCase());
}
function ft(e) {
  return yg.has(e.toLowerCase());
}
async function Lu(e, t, n, r, s, a) {
  for (let o = 0; o < n.length; o++) {
    let c = n[o],
      i = t[o];
    if (!i) continue;
    let d = e.find((m) => m.route.id === i.route.id),
      u = d != null && !kf(d, i) && (a && a[i.route.id]) !== void 0;
    if (Sn(c) && (s || u)) {
      let m = r[o];
      q(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Mf(c, m, s).then((p) => {
          p && (n[o] = p || n[o]);
        });
    }
  }
}
async function Mf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: fe.data, data: e.deferredData.unwrappedData };
      } catch (s) {
        return { type: fe.error, error: s };
      }
    return { type: fe.data, data: e.deferredData.data };
  }
}
function Yi(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vo(e, t) {
  let n = typeof t == "string" ? zt(t).search : t.search;
  if (e[e.length - 1].route.index && Yi(n || "")) return e[e.length - 1];
  let r = Nf(e);
  return r[r.length - 1];
}
function Fu(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: s,
    formData: a,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Ua(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Lg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Fr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Fg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Jt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ig(e, t) {
  try {
    let n = e.sessionStorage.getItem(Cf);
    if (n) {
      let r = JSON.parse(n);
      for (let [s, a] of Object.entries(r || {}))
        a && Array.isArray(a) && t.set(s, new Set(a || []));
    }
  } catch {}
}
function Ag(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, s] of t) n[r] = [...s];
    try {
      e.sessionStorage.setItem(Cf, JSON.stringify(n));
    } catch (r) {
      pr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(this, arguments)
  );
}
const Zs = y.createContext(null),
  Df = y.createContext(null),
  Fn = y.createContext(null),
  ea = y.createContext(null),
  vn = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rf = y.createContext(null);
function Bg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Cl() || q(!1);
  let { basename: r, navigator: s } = y.useContext(Fn),
    { hash: a, pathname: o, search: c } = Tf(e, { relative: n }),
    i = o;
  return (
    r !== "/" && (i = o === "/" ? r : Ot([r, o])),
    s.createHref({ pathname: i, search: c, hash: a })
  );
}
function Cl() {
  return y.useContext(ea) != null;
}
function ta() {
  return Cl() || q(!1), y.useContext(ea).location;
}
function Pf(e) {
  y.useContext(Fn).static || y.useLayoutEffect(e);
}
function zg() {
  let { isDataRoute: e } = y.useContext(vn);
  return e ? ex() : Ug();
}
function Ug() {
  Cl() || q(!1);
  let e = y.useContext(Zs),
    { basename: t, future: n, navigator: r } = y.useContext(Fn),
    { matches: s } = y.useContext(vn),
    { pathname: a } = ta(),
    o = JSON.stringify(Qi(s, n.v7_relativeSplatPath)),
    c = y.useRef(!1);
  return (
    Pf(() => {
      c.current = !0;
    }),
    y.useCallback(
      function (d, u) {
        if ((u === void 0 && (u = {}), !c.current)) return;
        if (typeof d == "number") {
          r.go(d);
          return;
        }
        let m = Ki(d, JSON.parse(o), a, u.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : Ot([t, m.pathname])),
          (u.replace ? r.replace : r.push)(m, u.state, u);
      },
      [t, r, o, a, e]
    )
  );
}
const Wg = y.createContext(null);
function $g(e) {
  let t = y.useContext(vn).outlet;
  return t && y.createElement(Wg.Provider, { value: e }, t);
}
function Tf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Fn),
    { matches: s } = y.useContext(vn),
    { pathname: a } = ta(),
    o = JSON.stringify(Qi(s, r.v7_relativeSplatPath));
  return y.useMemo(() => Ki(e, JSON.parse(o), a, n === "path"), [e, o, a, n]);
}
function Hg(e, t, n, r) {
  Cl() || q(!1);
  let { navigator: s } = y.useContext(Fn),
    { matches: a } = y.useContext(vn),
    o = a[a.length - 1],
    c = o ? o.params : {};
  o && o.pathname;
  let i = o ? o.pathnameBase : "/";
  o && o.route;
  let d = ta(),
    u;
  if (t) {
    var m;
    let j = typeof t == "string" ? zt(t) : t;
    i === "/" || ((m = j.pathname) != null && m.startsWith(i)) || q(!1),
      (u = j);
  } else u = d;
  let p = u.pathname || "/",
    N = p;
  if (i !== "/") {
    let j = i.replace(/^\//, "").split("/");
    N = "/" + p.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let g = er(e, { pathname: N }),
    v = Jg(
      g &&
        g.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, c, j.params),
            pathname: Ot([
              i,
              s.encodeLocation
                ? s.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? i
                : Ot([
                    i,
                    s.encodeLocation
                      ? s.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      r
    );
  return t && v
    ? y.createElement(
        ea.Provider,
        {
          value: {
            location: gl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ve.Pop,
          },
        },
        v
      )
    : v;
}
function Vg() {
  let e = Zg(),
    t = bf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: s }, n) : null,
    null
  );
}
const qg = y.createElement(Vg, null);
class Qg extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          vn.Provider,
          { value: this.props.routeContext },
          y.createElement(Rf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Kg(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = y.useContext(Zs);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(vn.Provider, { value: t }, r)
  );
}
function Jg(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if ((a = n) != null && a.errors) e = n.matches;
    else return null;
  }
  let o = e,
    c = (s = n) == null ? void 0 : s.errors;
  if (c != null) {
    let u = o.findIndex(
      (m) => m.route.id && (c == null ? void 0 : c[m.route.id])
    );
    u >= 0 || q(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  let i = !1,
    d = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let m = o[u];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = u),
        m.route.id)
      ) {
        let { loaderData: p, errors: N } = n,
          g =
            m.route.loader &&
            p[m.route.id] === void 0 &&
            (!N || N[m.route.id] === void 0);
        if (m.route.lazy || g) {
          (i = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((u, m, p) => {
    let N,
      g = !1,
      v = null,
      j = null;
    n &&
      ((N = c && m.route.id ? c[m.route.id] : void 0),
      (v = m.route.errorElement || qg),
      i &&
        (d < 0 && p === 0
          ? (tx("route-fallback", !1), (g = !0), (j = null))
          : d === p &&
            ((g = !0), (j = m.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, p + 1)),
      f = () => {
        let x;
        return (
          N
            ? (x = v)
            : g
            ? (x = j)
            : m.route.Component
            ? (x = y.createElement(m.route.Component, null))
            : m.route.element
            ? (x = m.route.element)
            : (x = u),
          y.createElement(Kg, {
            match: m,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || p === 0)
      ? y.createElement(Qg, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: N,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Of = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Of || {}),
  Ls = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ls || {});
function Yg(e) {
  let t = y.useContext(Zs);
  return t || q(!1), t;
}
function Gg(e) {
  let t = y.useContext(Df);
  return t || q(!1), t;
}
function Xg(e) {
  let t = y.useContext(vn);
  return t || q(!1), t;
}
function _f(e) {
  let t = Xg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function Zg() {
  var e;
  let t = y.useContext(Rf),
    n = Gg(Ls.UseRouteError),
    r = _f(Ls.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ex() {
  let { router: e } = Yg(Of.UseNavigateStable),
    t = _f(Ls.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Pf(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (s, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, gl({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const Iu = {};
function tx(e, t, n) {
  !t && !Iu[e] && (Iu[e] = !0);
}
function nx(e) {
  return $g(e.context);
}
function rx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = ve.Pop,
    navigator: a,
    static: o = !1,
    future: c,
  } = e;
  Cl() && q(!1);
  let i = t.replace(/^\/*/, "/"),
    d = y.useMemo(
      () => ({
        basename: i,
        navigator: a,
        static: o,
        future: gl({ v7_relativeSplatPath: !1 }, c),
      }),
      [i, c, a, o]
    );
  typeof r == "string" && (r = zt(r));
  let {
      pathname: u = "/",
      search: m = "",
      hash: p = "",
      state: N = null,
      key: g = "default",
    } = r,
    v = y.useMemo(() => {
      let j = jr(u, i);
      return j == null
        ? null
        : {
            location: { pathname: j, search: m, hash: p, state: N, key: g },
            navigationType: s,
          };
    }, [i, u, m, p, N, g, s]);
  return v == null
    ? null
    : y.createElement(
        Fn.Provider,
        { value: d },
        y.createElement(ea.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function lx(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: y.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: y.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: y.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xl() {
  return (
    (xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xl.apply(this, arguments)
  );
}
function sx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    a;
  for (a = 0; a < r.length; a++)
    (s = r[a]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function ax(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ox(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ax(e);
}
const ix = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  cx = "6";
try {
  window.__reactRouterVersion = cx;
} catch {}
function ux(e, t) {
  return kg({
    basename: t == null ? void 0 : t.basename,
    future: xl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Jv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || dx(),
    routes: e,
    mapRouteProperties: lx,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function dx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = xl({}, t, { errors: mx(t.errors) })), t;
}
function mx(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, s] of t)
    if (s && s.__type === "RouteErrorResponse")
      n[r] = new Ji(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let a = window[s.__subType];
        if (typeof a == "function")
          try {
            let o = new a(s.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let a = new Error(s.message);
        (a.stack = ""), (n[r] = a);
      }
    } else n[r] = s;
  return n;
}
const fx = y.createContext({ isTransitioning: !1 }),
  hx = y.createContext(new Map()),
  px = "startTransition",
  Au = Fh[px],
  vx = "flushSync",
  Bu = Qv[vx];
function gx(e) {
  Au ? Au(e) : e();
}
function Ir(e) {
  Bu ? Bu(e) : e();
}
class xx {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function yx(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [s, a] = y.useState(n.state),
    [o, c] = y.useState(),
    [i, d] = y.useState({ isTransitioning: !1 }),
    [u, m] = y.useState(),
    [p, N] = y.useState(),
    [g, v] = y.useState(),
    j = y.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    f = y.useCallback(
      (C) => {
        h ? gx(C) : C();
      },
      [h]
    ),
    x = y.useCallback(
      (C, R) => {
        let {
          deletedFetchers: T,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: J,
        } = R;
        T.forEach((xe) => j.current.delete(xe)),
          C.fetchers.forEach((xe, Ze) => {
            xe.data !== void 0 && j.current.set(Ze, xe.data);
          });
        let je =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!J || je) {
          F ? Ir(() => a(C)) : f(() => a(C));
          return;
        }
        if (F) {
          Ir(() => {
            p && (u && u.resolve(), p.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: J.currentLocation,
                nextLocation: J.nextLocation,
              });
          });
          let xe = n.window.document.startViewTransition(() => {
            Ir(() => a(C));
          });
          xe.finished.finally(() => {
            Ir(() => {
              m(void 0), N(void 0), c(void 0), d({ isTransitioning: !1 });
            });
          }),
            Ir(() => N(xe));
          return;
        }
        p
          ? (u && u.resolve(),
            p.skipTransition(),
            v({
              state: C,
              currentLocation: J.currentLocation,
              nextLocation: J.nextLocation,
            }))
          : (c(C),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: J.currentLocation,
              nextLocation: J.nextLocation,
            }));
      },
      [n.window, p, u, j, f]
    );
  y.useLayoutEffect(() => n.subscribe(x), [n, x]),
    y.useEffect(() => {
      i.isTransitioning && !i.flushSync && m(new xx());
    }, [i]),
    y.useEffect(() => {
      if (u && o && n.window) {
        let C = o,
          R = u.promise,
          T = n.window.document.startViewTransition(async () => {
            f(() => a(C)), await R;
          });
        T.finished.finally(() => {
          m(void 0), N(void 0), c(void 0), d({ isTransitioning: !1 });
        }),
          N(T);
      }
    }, [f, o, u, n.window]),
    y.useEffect(() => {
      u && o && s.location.key === o.location.key && u.resolve();
    }, [u, p, s.location, o]),
    y.useEffect(() => {
      !i.isTransitioning &&
        g &&
        (c(g.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        v(void 0));
    }, [i.isTransitioning, g]),
    y.useEffect(() => {}, []);
  let k = y.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, R, T) =>
          n.navigate(C, {
            state: R,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (C, R, T) =>
          n.navigate(C, {
            replace: !0,
            state: R,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || "/",
    b = y.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: E }),
      [n, k, E]
    );
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(
      Zs.Provider,
      { value: b },
      y.createElement(
        Df.Provider,
        { value: s },
        y.createElement(
          hx.Provider,
          { value: j.current },
          y.createElement(
            fx.Provider,
            { value: i },
            y.createElement(
              rx,
              {
                basename: E,
                location: s.location,
                navigationType: s.historyAction,
                navigator: k,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              s.initialized || n.future.v7_partialHydration
                ? y.createElement(jx, {
                    routes: n.routes,
                    future: n.future,
                    state: s,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function jx(e) {
  let { routes: t, future: n, state: r } = e;
  return Hg(t, void 0, r, n);
}
const Nx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  bx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  me = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: a,
        replace: o,
        state: c,
        target: i,
        to: d,
        preventScrollReset: u,
        unstable_viewTransition: m,
      } = t,
      p = sx(t, ix),
      { basename: N } = y.useContext(Fn),
      g,
      v = !1;
    if (typeof d == "string" && bx.test(d) && ((g = d), Nx))
      try {
        let x = new URL(window.location.href),
          k = d.startsWith("//") ? new URL(x.protocol + d) : new URL(d),
          E = jr(k.pathname, N);
        k.origin === x.origin && E != null
          ? (d = E + k.search + k.hash)
          : (v = !0);
      } catch {}
    let j = Bg(d, { relative: s }),
      h = wx(d, {
        replace: o,
        state: c,
        target: i,
        preventScrollReset: u,
        relative: s,
        unstable_viewTransition: m,
      });
    function f(x) {
      r && r(x), x.defaultPrevented || h(x);
    }
    return y.createElement(
      "a",
      xl({}, p, { href: g || j, onClick: v || a ? r : f, ref: n, target: i })
    );
  });
var zu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(zu || (zu = {}));
var Uu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Uu || (Uu = {}));
function wx(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: a,
      relative: o,
      unstable_viewTransition: c,
    } = t === void 0 ? {} : t,
    i = zg(),
    d = ta(),
    u = Tf(e, { relative: o });
  return y.useCallback(
    (m) => {
      if (ox(m, n)) {
        m.preventDefault();
        let p = r !== void 0 ? r : On(d) === On(u);
        i(e, {
          replace: p,
          state: s,
          preventScrollReset: a,
          relative: o,
          unstable_viewTransition: c,
        });
      }
    },
    [d, i, u, r, s, n, e, a, o, c]
  );
}
const Sx = () =>
  l.jsx("div", {
    className: "navbar-expand-sm",
    children: l.jsx("div", {
      className: " ",
      children: l.jsxs("div", {
        className: "",
        children: [
          l.jsx("aside", {
            id: "sidebar",
            className: "js-sidebar ",
            children: l.jsxs("div", {
              className: "h-100",
              children: [
                l.jsx("div", { className: "sidebar-logo" }),
                l.jsx("div", {
                  children: l.jsxs("ul", {
                    className: "sidebar-nav",
                    children: [
                      l.jsx("li", {
                        className: "sidebar-header",
                        children: "Admin Elements",
                      }),
                      l.jsx("li", {
                        className: "sidebar-item",
                        children: l.jsxs(me, {
                          to: "/DashBoard",
                          className: "sidebar-link",
                          children: [
                            l.jsx("i", { className: "fa-solid fa-list pe-2" }),
                            "ড্যাশবোর্ড",
                          ],
                        }),
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#member",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-file-lines pe-2",
                              }),
                              "সদস্য",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "member",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "/MemberAdmission",
                                  className: "sidebar-link",
                                  children: "সদস্য ভর্তি করুণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "সদস্য বিবরণ",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#worker",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "কর্মী",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "worker",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "WorkerAdd",
                                  className: "sidebar-link",
                                  children: "কর্মী যোগ করুণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "WorkerDetails",
                                  className: "sidebar-link",
                                  children: "কর্মীর বিবরণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "WorkerTransfer",
                                  className: "sidebar-link",
                                  children: "কর্মী পরিবর্তন করুণ",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#center",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "কেন্দ্র",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "center",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "CenterAdd",
                                  className: "sidebar-link",
                                  children: "কেন্দ্র যোগ করুণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "CenterDetails",
                                  className: "sidebar-link",
                                  children: "কেদ্রের তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "MemberDetails",
                                  className: "sidebar-link",
                                  children: "কেদ্রের সদস্য তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "কেদ্রের হিসাব",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#branch",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "শাঁখা",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "branch",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "BranchAdd",
                                  className: "sidebar-link",
                                  children: "শাঁখা যোগ করুণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "BranchList",
                                  className: "sidebar-link",
                                  children: "শাঁখার তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "OfficeCollection",
                                  className: "sidebar-link",
                                  children: "অফিস জমা",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#loan",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "ঋণ",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "loan",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "LoanOpen",
                                  className: "sidebar-link",
                                  children: "ঋণ বিতরণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "LoanDetails",
                                  className: "sidebar-link",
                                  children: "ঋণ বিবরণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "InstallmentDetails",
                                  className: "sidebar-link",
                                  children: "কিস্তির তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "InstallmentCollection",
                                  className: "sidebar-link",
                                  children: "কিস্তি কালেকশন",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#savings",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "সঞ্চয়",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "savings",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "SavingsOpen",
                                  className: "sidebar-link",
                                  children: "সঞ্চয় খুলুন",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "SavingsList",
                                  className: "sidebar-link",
                                  children: "সঞ্চয়ের বিবরণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "CollectionList",
                                  className: "sidebar-link",
                                  children: "কালেকশন তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "SavingsCollection",
                                  className: "sidebar-link",
                                  children: "সঞ্চয় কালেকশন",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "SavingsWithdraw",
                                  className: "sidebar-link",
                                  children: "সঞ্চয় উত্তলন",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#account",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-sliders pe-2",
                              }),
                              "হিসাব",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "account",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "শাঁখা যোগ করুণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "শাঁখার তালিকা",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "শাঁখার বিবরণ",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "অফিস জমা",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#auth",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-regular fa-user pe-2",
                              }),
                              "Auth",
                            ],
                          }),
                          l.jsxs("ul", {
                            id: "auth",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: [
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link",
                                  children: "Login",
                                }),
                              }),
                              l.jsx("li", {
                                className: "sidebar-item",
                                children: l.jsx(me, {
                                  to: "Auth-register",
                                  className: "sidebar-link",
                                  children: "Register",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsx("li", {
                        className: "sidebar-header",
                        children: "Multi Level Menu",
                      }),
                      l.jsxs("li", {
                        className: "sidebar-item",
                        children: [
                          l.jsxs("a", {
                            href: "#",
                            className: "sidebar-link collapsed",
                            "data-bs-target": "#multi",
                            "data-bs-toggle": "collapse",
                            "aria-expanded": "false",
                            children: [
                              l.jsx("i", {
                                className: "fa-solid fa-share-nodes pe-2",
                              }),
                              "Multi Dropdown",
                            ],
                          }),
                          l.jsx("ul", {
                            id: "multi",
                            className:
                              "sidebar-dropdown list-unstyled collapse",
                            "data-bs-parent": "#sidebar",
                            children: l.jsxs("li", {
                              className: "sidebar-item",
                              children: [
                                l.jsx("a", {
                                  href: "#",
                                  className: "sidebar-link collapsed",
                                  "data-bs-target": "#level-1",
                                  "data-bs-toggle": "collapse",
                                  "aria-expanded": "false",
                                  children: "Level 1",
                                }),
                                l.jsxs("ul", {
                                  id: "level-1",
                                  className:
                                    "sidebar-dropdown list-unstyled collapse",
                                  children: [
                                    l.jsx("li", {
                                      className: "sidebar-item",
                                      children: l.jsx("a", {
                                        href: "#",
                                        className: "sidebar-link",
                                        children: "Level 1.1",
                                      }),
                                    }),
                                    l.jsx("li", {
                                      className: "sidebar-item",
                                      children: l.jsx("a", {
                                        href: "#",
                                        className: "sidebar-link",
                                        children: "Level 1.2",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          l.jsx("main", { className: "col-md-9 ms-sm-auto col-lg-10 px-md-4" }),
        ],
      }),
    }),
  });
function Cx() {
  return l.jsxs("div", {
    className: "",
    children: [
      l.jsx("header", { className: "", children: l.jsx(Kv, {}) }),
      l.jsxs("div", {
        className: " d-flex flex-row",
        children: [
          l.jsx("aside", { className: "me-2 ", children: l.jsx(Sx, {}) }),
          l.jsx("main", { className: "Size", children: l.jsx(nx, {}) }),
        ],
      }),
    ],
  });
}
var Lf = { exports: {} },
  kx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Ex = kx,
  Mx = Ex;
function Ff() {}
function If() {}
If.resetWarningCache = Ff;
var Dx = function () {
  function e(r, s, a, o, c, i) {
    if (i !== Mx) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((d.name = "Invariant Violation"), d);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: If,
    resetWarningCache: Ff,
  };
  return (n.PropTypes = n), n;
};
Lf.exports = Dx();
var Rx = Lf.exports;
const bt = Go(Rx),
  Gi = ({ selectedDate: e, onDateChange: t }) => {
    const n = (r) => {
      const s = r.target.value,
        a = new Date(s),
        o = `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(a.getDate()).padStart(2, "0")}`;
      t(o);
    };
    return l.jsxs("div", {
      className: "mb-3",
      children: [
        l.jsx("label", {
          htmlFor: "dob",
          className: "form-label",
          children: "জম্ম তারিখ",
        }),
        l.jsx("input", {
          type: "date",
          className: "form-control",
          id: "dob",
          value: e,
          onChange: n,
          required: !0,
        }),
      ],
    });
  };
Gi.propTypes = {
  selectedDate: bt.string.isRequired,
  onDateChange: bt.func.isRequired,
};
function Af(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Px } = Object.prototype,
  { getPrototypeOf: Xi } = Object,
  na = ((e) => (t) => {
    const n = Px.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => na(t) === e),
  ra = (e) => (t) => typeof t === e,
  { isArray: Nr } = Array,
  yl = ra("undefined");
function Tx(e) {
  return (
    e !== null &&
    !yl(e) &&
    e.constructor !== null &&
    !yl(e.constructor) &&
    at(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bf = Et("ArrayBuffer");
function Ox(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bf(e.buffer)),
    t
  );
}
const _x = ra("string"),
  at = ra("function"),
  zf = ra("number"),
  la = (e) => e !== null && typeof e == "object",
  Lx = (e) => e === !0 || e === !1,
  is = (e) => {
    if (na(e) !== "object") return !1;
    const t = Xi(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Fx = Et("Date"),
  Ix = Et("File"),
  Ax = Et("Blob"),
  Bx = Et("FileList"),
  zx = (e) => la(e) && at(e.pipe),
  Ux = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (at(e.append) &&
          ((t = na(e)) === "formdata" ||
            (t === "object" &&
              at(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Wx = Et("URLSearchParams"),
  $x = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Nr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = a.length;
    let c;
    for (r = 0; r < o; r++) (c = a[r]), t.call(null, e[c], c, e);
  }
}
function Uf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Wf =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  $f = (e) => !yl(e) && e !== Wf;
function qo() {
  const { caseless: e } = ($f(this) && this) || {},
    t = {},
    n = (r, s) => {
      const a = (e && Uf(t, s)) || s;
      is(t[a]) && is(r)
        ? (t[a] = qo(t[a], r))
        : is(r)
        ? (t[a] = qo({}, r))
        : Nr(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && kl(arguments[r], n);
  return t;
}
const Hx = (e, t, n, { allOwnKeys: r } = {}) => (
    kl(
      t,
      (s, a) => {
        n && at(s) ? (e[a] = Af(s, n)) : (e[a] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Vx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  qx = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Qx = (e, t, n, r) => {
    let s, a, o;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
        (o = s[a]), (!r || r(o, e, t)) && !c[o] && ((t[o] = e[o]), (c[o] = !0));
      e = n !== !1 && Xi(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Kx = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Jx = (e) => {
    if (!e) return null;
    if (Nr(e)) return e;
    let t = e.length;
    if (!zf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Yx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Xi(Uint8Array)),
  Gx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const a = s.value;
      t.call(e, a[0], a[1]);
    }
  },
  Xx = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Zx = Et("HTMLFormElement"),
  ey = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Wu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ty = Et("RegExp"),
  Hf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    kl(n, (s, a) => {
      let o;
      (o = t(s, a, e)) !== !1 && (r[a] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  ny = (e) => {
    Hf(e, (t, n) => {
      if (at(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (at(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ry = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((a) => {
          n[a] = !0;
        });
      };
    return Nr(e) ? r(e) : r(String(e).split(t)), n;
  },
  ly = () => {},
  sy = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Wa = "abcdefghijklmnopqrstuvwxyz",
  $u = "0123456789",
  Vf = { DIGIT: $u, ALPHA: Wa, ALPHA_DIGIT: Wa + Wa.toUpperCase() + $u },
  ay = (e = 16, t = Vf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function oy(e) {
  return !!(
    e &&
    at(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const iy = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (la(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const a = Nr(r) ? [] : {};
            return (
              kl(r, (o, c) => {
                const i = n(o, s + 1);
                !yl(i) && (a[c] = i);
              }),
              (t[s] = void 0),
              a
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  cy = Et("AsyncFunction"),
  uy = (e) => e && (la(e) || at(e)) && at(e.then) && at(e.catch),
  D = {
    isArray: Nr,
    isArrayBuffer: Bf,
    isBuffer: Tx,
    isFormData: Ux,
    isArrayBufferView: Ox,
    isString: _x,
    isNumber: zf,
    isBoolean: Lx,
    isObject: la,
    isPlainObject: is,
    isUndefined: yl,
    isDate: Fx,
    isFile: Ix,
    isBlob: Ax,
    isRegExp: ty,
    isFunction: at,
    isStream: zx,
    isURLSearchParams: Wx,
    isTypedArray: Yx,
    isFileList: Bx,
    forEach: kl,
    merge: qo,
    extend: Hx,
    trim: $x,
    stripBOM: Vx,
    inherits: qx,
    toFlatObject: Qx,
    kindOf: na,
    kindOfTest: Et,
    endsWith: Kx,
    toArray: Jx,
    forEachEntry: Gx,
    matchAll: Xx,
    isHTMLForm: Zx,
    hasOwnProperty: Wu,
    hasOwnProp: Wu,
    reduceDescriptors: Hf,
    freezeMethods: ny,
    toObjectSet: ry,
    toCamelCase: ey,
    noop: ly,
    toFiniteNumber: sy,
    findKey: Uf,
    global: Wf,
    isContextDefined: $f,
    ALPHABET: Vf,
    generateString: ay,
    isSpecCompliantForm: oy,
    toJSONObject: iy,
    isAsyncFn: cy,
    isThenable: uy,
  };
function Y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
D.inherits(Y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: D.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const qf = Y.prototype,
  Qf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Qf[e] = { value: e };
});
Object.defineProperties(Y, Qf);
Object.defineProperty(qf, "isAxiosError", { value: !0 });
Y.from = (e, t, n, r, s, a) => {
  const o = Object.create(qf);
  return (
    D.toFlatObject(
      e,
      o,
      function (i) {
        return i !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    Y.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    a && Object.assign(o, a),
    o
  );
};
const dy = null;
function Qo(e) {
  return D.isPlainObject(e) || D.isArray(e);
}
function Kf(e) {
  return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, a) {
          return (s = Kf(s)), !n && a ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function my(e) {
  return D.isArray(e) && !e.some(Qo);
}
const fy = D.toFlatObject(D, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function sa(e, t, n) {
  if (!D.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = D.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, j) {
        return !D.isUndefined(j[v]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    a = n.dots,
    o = n.indexes,
    i = (n.Blob || (typeof Blob < "u" && Blob)) && D.isSpecCompliantForm(t);
  if (!D.isFunction(s)) throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (D.isDate(g)) return g.toISOString();
    if (!i && D.isBlob(g))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(g) || D.isTypedArray(g)
      ? i && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, v, j) {
    let h = g;
    if (g && !j && typeof g == "object") {
      if (D.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (D.isArray(g) && my(g)) ||
        ((D.isFileList(g) || D.endsWith(v, "[]")) && (h = D.toArray(g)))
      )
        return (
          (v = Kf(v)),
          h.forEach(function (x, k) {
            !(D.isUndefined(x) || x === null) &&
              t.append(
                o === !0 ? Hu([v], k, a) : o === null ? v : v + "[]",
                d(x)
              );
          }),
          !1
        );
    }
    return Qo(g) ? !0 : (t.append(Hu(j, v, a), d(g)), !1);
  }
  const m = [],
    p = Object.assign(fy, {
      defaultVisitor: u,
      convertValue: d,
      isVisitable: Qo,
    });
  function N(g, v) {
    if (!D.isUndefined(g)) {
      if (m.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      m.push(g),
        D.forEach(g, function (h, f) {
          (!(D.isUndefined(h) || h === null) &&
            s.call(t, h, D.isString(f) ? f.trim() : f, v, p)) === !0 &&
            N(h, v ? v.concat(f) : [f]);
        }),
        m.pop();
    }
  }
  if (!D.isObject(e)) throw new TypeError("data must be an object");
  return N(e), t;
}
function Vu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Zi(e, t) {
  (this._pairs = []), e && sa(e, this, t);
}
const Jf = Zi.prototype;
Jf.append = function (t, n) {
  this._pairs.push([t, n]);
};
Jf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Vu);
      }
    : Vu;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function hy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Yf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || hy,
    s = n && n.serialize;
  let a;
  if (
    (s
      ? (a = s(t, n))
      : (a = D.isURLSearchParams(t) ? t.toString() : new Zi(t, n).toString(r)),
    a)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class qu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    D.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Gf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  py = typeof URLSearchParams < "u" ? URLSearchParams : Zi,
  vy = typeof FormData < "u" ? FormData : null,
  gy = typeof Blob < "u" ? Blob : null,
  xy = {
    isBrowser: !0,
    classes: { URLSearchParams: py, FormData: vy, Blob: gy },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Xf = typeof window < "u" && typeof document < "u",
  yy = ((e) => Xf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  jy =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Ny = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xf,
        hasStandardBrowserEnv: yy,
        hasStandardBrowserWebWorkerEnv: jy,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  St = { ...Ny, ...xy };
function by(e, t) {
  return sa(
    e,
    new St.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, a) {
          return St.isNode && D.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function wy(e) {
  return D.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Sy(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function Zf(e) {
  function t(n, r, s, a) {
    let o = n[a++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o),
      i = a >= n.length;
    return (
      (o = !o && D.isArray(s) ? s.length : o),
      i
        ? (D.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !c)
        : ((!s[o] || !D.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], a) && D.isArray(s[o]) && (s[o] = Sy(s[o])),
          !c)
    );
  }
  if (D.isFormData(e) && D.isFunction(e.entries)) {
    const n = {};
    return (
      D.forEachEntry(e, (r, s) => {
        t(wy(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Cy(e, t, n) {
  if (D.isString(e))
    try {
      return (t || JSON.parse)(e), D.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ec = {
  transitional: Gf,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        a = D.isObject(t);
      if ((a && D.isHTMLForm(t) && (t = new FormData(t)), D.isFormData(t)))
        return s ? JSON.stringify(Zf(t)) : t;
      if (
        D.isArrayBuffer(t) ||
        D.isBuffer(t) ||
        D.isStream(t) ||
        D.isFile(t) ||
        D.isBlob(t)
      )
        return t;
      if (D.isArrayBufferView(t)) return t.buffer;
      if (D.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return by(t, this.formSerializer).toString();
        if ((c = D.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const i = this.env && this.env.FormData;
          return sa(
            c ? { "files[]": t } : t,
            i && new i(),
            this.formSerializer
          );
        }
      }
      return a || s ? (n.setContentType("application/json", !1), Cy(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ec.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && D.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (o)
            throw c.name === "SyntaxError"
              ? Y.from(c, Y.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: St.classes.FormData, Blob: St.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ec.headers[e] = {};
});
const tc = ec,
  ky = D.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ey = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && ky[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Qu = Symbol("internals");
function Ar(e) {
  return e && String(e).trim().toLowerCase();
}
function cs(e) {
  return e === !1 || e == null ? e : D.isArray(e) ? e.map(cs) : String(e);
}
function My(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Dy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $a(e, t, n, r, s) {
  if (D.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!D.isString(t))) {
    if (D.isString(r)) return t.indexOf(r) !== -1;
    if (D.isRegExp(r)) return r.test(t);
  }
}
function Ry(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Py(e, t) {
  const n = D.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, a, o) {
        return this[r].call(this, t, s, a, o);
      },
      configurable: !0,
    });
  });
}
class aa {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(c, i, d) {
      const u = Ar(i);
      if (!u) throw new Error("header name must be a non-empty string");
      const m = D.findKey(s, u);
      (!m || s[m] === void 0 || d === !0 || (d === void 0 && s[m] !== !1)) &&
        (s[m || i] = cs(c));
    }
    const o = (c, i) => D.forEach(c, (d, u) => a(d, u, i));
    return (
      D.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : D.isString(t) && (t = t.trim()) && !Dy(t)
        ? o(Ey(t), n)
        : t != null && a(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Ar(t)), t)) {
      const r = D.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return My(s);
        if (D.isFunction(n)) return n.call(this, s, r);
        if (D.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ar(t)), t)) {
      const r = D.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $a(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (((o = Ar(o)), o)) {
        const c = D.findKey(r, o);
        c && (!n || $a(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return D.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || $a(this, this[a], a, t, !0)) && (delete this[a], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      D.forEach(this, (s, a) => {
        const o = D.findKey(r, a);
        if (o) {
          (n[o] = cs(s)), delete n[a];
          return;
        }
        const c = t ? Ry(a) : String(a).trim();
        c !== a && delete n[a], (n[c] = cs(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      D.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && D.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Qu] = this[Qu] = { accessors: {} }).accessors,
      s = this.prototype;
    function a(o) {
      const c = Ar(o);
      r[c] || (Py(s, o), (r[c] = !0));
    }
    return D.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
aa.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
D.reduceDescriptors(aa.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
D.freezeMethods(aa);
const _t = aa;
function Ha(e, t) {
  const n = this || tc,
    r = t || n,
    s = _t.from(r.headers);
  let a = r.data;
  return (
    D.forEach(e, function (c) {
      a = c.call(n, a, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    a
  );
}
function eh(e) {
  return !!(e && e.__CANCEL__);
}
function El(e, t, n) {
  Y.call(this, e ?? "canceled", Y.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
D.inherits(El, Y, { __CANCEL__: !0 });
function Ty(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Y(
          "Request failed with status code " + n.status,
          [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Oy = St.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, a) {
        const o = [e + "=" + encodeURIComponent(t)];
        D.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          D.isString(r) && o.push("path=" + r),
          D.isString(s) && o.push("domain=" + s),
          a === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function _y(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ly(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function th(e, t) {
  return e && !_y(t) ? Ly(e, t) : t;
}
const Fy = St.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(a) {
        let o = a;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (o) {
          const c = D.isString(o) ? s(o) : o;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Iy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Ay(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    a = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (i) {
      const d = Date.now(),
        u = r[a];
      o || (o = d), (n[s] = i), (r[s] = d);
      let m = a,
        p = 0;
      for (; m !== s; ) (p += n[m++]), (m = m % e);
      if (((s = (s + 1) % e), s === a && (a = (a + 1) % e), d - o < t)) return;
      const N = u && d - u;
      return N ? Math.round((p * 1e3) / N) : void 0;
    }
  );
}
function Ku(e, t) {
  let n = 0;
  const r = Ay(50, 250);
  return (s) => {
    const a = s.loaded,
      o = s.lengthComputable ? s.total : void 0,
      c = a - n,
      i = r(c),
      d = a <= o;
    n = a;
    const u = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: c,
      rate: i || void 0,
      estimated: i && o && d ? (o - a) / i : void 0,
      event: s,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const By = typeof XMLHttpRequest < "u",
  zy =
    By &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const a = _t.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: c } = e,
          i;
        function d() {
          e.cancelToken && e.cancelToken.unsubscribe(i),
            e.signal && e.signal.removeEventListener("abort", i);
        }
        let u;
        if (D.isFormData(s)) {
          if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
            a.setContentType(!1);
          else if ((u = a.getContentType()) !== !1) {
            const [v, ...j] = u
              ? u
                  .split(";")
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            a.setContentType([v || "multipart/form-data", ...j].join("; "));
          }
        }
        let m = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            j = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          a.set("Authorization", "Basic " + btoa(v + ":" + j));
        }
        const p = th(e.baseURL, e.url);
        m.open(e.method.toUpperCase(), Yf(p, e.params, e.paramsSerializer), !0),
          (m.timeout = e.timeout);
        function N() {
          if (!m) return;
          const v = _t.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders()
            ),
            h = {
              data:
                !o || o === "text" || o === "json"
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: v,
              config: e,
              request: m,
            };
          Ty(
            function (x) {
              n(x), d();
            },
            function (x) {
              r(x), d();
            },
            h
          ),
            (m = null);
        }
        if (
          ("onloadend" in m
            ? (m.onloadend = N)
            : (m.onreadystatechange = function () {
                !m ||
                  m.readyState !== 4 ||
                  (m.status === 0 &&
                    !(m.responseURL && m.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(N);
              }),
          (m.onabort = function () {
            m &&
              (r(new Y("Request aborted", Y.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            r(new Y("Network Error", Y.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let j = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || Gf;
            e.timeoutErrorMessage && (j = e.timeoutErrorMessage),
              r(
                new Y(
                  j,
                  h.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
                  e,
                  m
                )
              ),
              (m = null);
          }),
          St.hasStandardBrowserEnv &&
            (c && D.isFunction(c) && (c = c(e)), c || (c !== !1 && Fy(p))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && Oy.read(e.xsrfCookieName);
          v && a.set(e.xsrfHeaderName, v);
        }
        s === void 0 && a.setContentType(null),
          "setRequestHeader" in m &&
            D.forEach(a.toJSON(), function (j, h) {
              m.setRequestHeader(h, j);
            }),
          D.isUndefined(e.withCredentials) ||
            (m.withCredentials = !!e.withCredentials),
          o && o !== "json" && (m.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            m.addEventListener("progress", Ku(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            m.upload &&
            m.upload.addEventListener("progress", Ku(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((i = (v) => {
              m &&
                (r(!v || v.type ? new El(null, e, m) : v),
                m.abort(),
                (m = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(i),
            e.signal &&
              (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
        const g = Iy(p);
        if (g && St.protocols.indexOf(g) === -1) {
          r(new Y("Unsupported protocol " + g + ":", Y.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(s || null);
      });
    },
  Ko = { http: dy, xhr: zy };
D.forEach(Ko, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ju = (e) => `- ${e}`,
  Uy = (e) => D.isFunction(e) || e === null || e === !1,
  nh = {
    getAdapter: (e) => {
      e = D.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let a = 0; a < t; a++) {
        n = e[a];
        let o;
        if (
          ((r = n),
          !Uy(n) && ((r = Ko[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Y(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + a] = r;
      }
      if (!r) {
        const a = Object.entries(s).map(
          ([c, i]) =>
            `adapter ${c} ` +
            (i === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? a.length > 1
            ? `since :
` +
              a.map(Ju).join(`
`)
            : " " + Ju(a[0])
          : "as no adapter specified";
        throw new Y(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ko,
  };
function Va(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new El(null, e);
}
function Yu(e) {
  return (
    Va(e),
    (e.headers = _t.from(e.headers)),
    (e.data = Ha.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    nh
      .getAdapter(e.adapter || tc.adapter)(e)
      .then(
        function (r) {
          return (
            Va(e),
            (r.data = Ha.call(e, e.transformResponse, r)),
            (r.headers = _t.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            eh(r) ||
              (Va(e),
              r &&
                r.response &&
                ((r.response.data = Ha.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = _t.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Gu = (e) => (e instanceof _t ? e.toJSON() : e);
function vr(e, t) {
  t = t || {};
  const n = {};
  function r(d, u, m) {
    return D.isPlainObject(d) && D.isPlainObject(u)
      ? D.merge.call({ caseless: m }, d, u)
      : D.isPlainObject(u)
      ? D.merge({}, u)
      : D.isArray(u)
      ? u.slice()
      : u;
  }
  function s(d, u, m) {
    if (D.isUndefined(u)) {
      if (!D.isUndefined(d)) return r(void 0, d, m);
    } else return r(d, u, m);
  }
  function a(d, u) {
    if (!D.isUndefined(u)) return r(void 0, u);
  }
  function o(d, u) {
    if (D.isUndefined(u)) {
      if (!D.isUndefined(d)) return r(void 0, d);
    } else return r(void 0, u);
  }
  function c(d, u, m) {
    if (m in t) return r(d, u);
    if (m in e) return r(void 0, d);
  }
  const i = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (d, u) => s(Gu(d), Gu(u), !0),
  };
  return (
    D.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const m = i[u] || s,
        p = m(e[u], t[u], u);
      (D.isUndefined(p) && m !== c) || (n[u] = p);
    }),
    n
  );
}
const rh = "1.6.7",
  nc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    nc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Xu = {};
nc.transitional = function (t, n, r) {
  function s(a, o) {
    return (
      "[Axios v" +
      rh +
      "] Transitional option '" +
      a +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (a, o, c) => {
    if (t === !1)
      throw new Y(
        s(o, " has been removed" + (n ? " in " + n : "")),
        Y.ERR_DEPRECATED
      );
    return (
      n &&
        !Xu[o] &&
        ((Xu[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(a, o, c) : !0
    );
  };
};
function Wy(e, t, n) {
  if (typeof e != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s],
      o = t[a];
    if (o) {
      const c = e[a],
        i = c === void 0 || o(c, a, e);
      if (i !== !0)
        throw new Y("option " + a + " must be " + i, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Y("Unknown option " + a, Y.ERR_BAD_OPTION);
  }
}
const Jo = { assertOptions: Wy, validators: nc },
  Qt = Jo.validators;
class Fs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new qu(), response: new qu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? a &&
            !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + a)
          : (r.stack = a);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = vr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 &&
      Jo.assertOptions(
        r,
        {
          silentJSONParsing: Qt.transitional(Qt.boolean),
          forcedJSONParsing: Qt.transitional(Qt.boolean),
          clarifyTimeoutError: Qt.transitional(Qt.boolean),
        },
        !1
      ),
      s != null &&
        (D.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Jo.assertOptions(
              s,
              { encode: Qt.function, serialize: Qt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = a && D.merge(a.common, a[n.method]);
    a &&
      D.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete a[g];
        }
      ),
      (n.headers = _t.concat(o, a));
    const c = [];
    let i = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((i = i && v.synchronous), c.unshift(v.fulfilled, v.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function (v) {
      d.push(v.fulfilled, v.rejected);
    });
    let u,
      m = 0,
      p;
    if (!i) {
      const g = [Yu.bind(this), void 0];
      for (
        g.unshift.apply(g, c),
          g.push.apply(g, d),
          p = g.length,
          u = Promise.resolve(n);
        m < p;

      )
        u = u.then(g[m++], g[m++]);
      return u;
    }
    p = c.length;
    let N = n;
    for (m = 0; m < p; ) {
      const g = c[m++],
        v = c[m++];
      try {
        N = g(N);
      } catch (j) {
        v.call(this, j);
        break;
      }
    }
    try {
      u = Yu.call(this, N);
    } catch (g) {
      return Promise.reject(g);
    }
    for (m = 0, p = d.length; m < p; ) u = u.then(d[m++], d[m++]);
    return u;
  }
  getUri(t) {
    t = vr(this.defaults, t);
    const n = th(t.baseURL, t.url);
    return Yf(n, t.params, t.paramsSerializer);
  }
}
D.forEach(["delete", "get", "head", "options"], function (t) {
  Fs.prototype[t] = function (n, r) {
    return this.request(
      vr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
D.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (a, o, c) {
      return this.request(
        vr(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: o,
        })
      );
    };
  }
  (Fs.prototype[t] = n()), (Fs.prototype[t + "Form"] = n(!0));
});
const us = Fs;
class rc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let a;
        const o = new Promise((c) => {
          r.subscribe(c), (a = c);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(a);
          }),
          o
        );
      }),
      t(function (a, o, c) {
        r.reason || ((r.reason = new El(a, o, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new rc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const $y = rc;
function Hy(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Vy(e) {
  return D.isObject(e) && e.isAxiosError === !0;
}
const Yo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Yo).forEach(([e, t]) => {
  Yo[t] = e;
});
const qy = Yo;
function lh(e) {
  const t = new us(e),
    n = Af(us.prototype.request, t);
  return (
    D.extend(n, us.prototype, t, { allOwnKeys: !0 }),
    D.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return lh(vr(e, s));
    }),
    n
  );
}
const $ = lh(tc);
$.Axios = us;
$.CanceledError = El;
$.CancelToken = $y;
$.isCancel = eh;
$.VERSION = rh;
$.toFormData = sa;
$.AxiosError = Y;
$.Cancel = $.CanceledError;
$.all = function (t) {
  return Promise.all(t);
};
$.spread = Hy;
$.isAxiosError = Vy;
$.mergeConfig = vr;
$.AxiosHeaders = _t;
$.formToJSON = (e) => Zf(D.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = nh.getAdapter;
$.HttpStatusCode = qy;
$.default = $;
const Qy = "http://localhost:9000/memberdmission",
  Ky = () => {
    const [e, t] = y.useState({
        BranchMember: "",
        CenterMember: "",
        memberID: "",
        memberName: "",
        MfhName: "",
        MdateOfBirth: "",
        memberJob: "",
        memberVillage: "",
        memberUnion: "",
        memberPost: "",
        memberSubDic: "",
        memberDic: "",
        memberMarital: "",
        memberStudy: "",
        memberFhead: "",
        memberfMM: "0",
        memberfMF: "0",
        memberfMTotal: "0",
        EarningMember: "",
        FamilyMemberENO: "",
        loanamount: "",
        nonorganizaiotnloan: "",
        YearlyIncome: "",
        LandProperty: "",
        TotalMoney: "",
        MemberNIDnumber: "",
        MemberMobile: "",
        NominiName: "",
        NominiFather: "",
        MemberNominiRelation: "",
        agreementChecked: !1,
      }),
      n = (f) => {
        t({ ...e, MdateOfBirth: f });
      },
      [r, s] = y.useState(!1),
      [a, o] = y.useState([]),
      [c, i] = y.useState([]),
      [d, u] = y.useState(""),
      [m, p] = y.useState(0),
      [N, g] = y.useState("");
    y.useEffect(() => {
      m !== void 0 && g(v(m));
    }, [m]);
    const v = (f) => `M${f !== void 0 ? f.toString().padStart(4, "0") : ""}`;
    y.useEffect(() => {
      (async () => {
        try {
          const x = await fetch("http://localhost:9000/branch-callback"),
            k = await fetch("http://localhost:9000/center-callback");
          if (!x.ok || !k.ok) throw new Error("Failed to fetch data");
          const E = await x.json(),
            b = await k.json();
          o(E), i(b);
        } catch (x) {
          console.error("Error fetching data:", x.message);
        }
      })();
    }, []);
    const j = (f) => {
        const { name: x, value: k, type: E, checked: b } = f.target,
          C = x === "WorkerNID" ? parseInt(k, 10) : k;
        if (
          (t(
            x === "loanamount" || x === "nonorganizaiotnloan"
              ? (R) => ({ ...R, [x]: C })
              : (R) => ({ ...R, [x]: E === "checkbox" ? b : C })
          ),
          x === "MdateOfBirth")
        ) {
          const R = k ? k.toISOString() : null;
          t((T) => ({ ...T, MdateOfBirth: R }));
        }
        x === "FamilyMemberENO" && s(k === "yes"),
          (x === "memberfMM" || x === "memberfMF") &&
            t((R) => ({
              ...R,
              [x]: C,
              memberfMTotal:
                parseInt(R.memberfMM || 0) + parseInt(R.memberfMF || 0),
            }));
      },
      h = async () => {
        try {
          const f = await $.post(Qy, {
            memberID: e.memberID,
            loanamount: e.loanamount,
            nonorganizaiotnloan: e.nonorganizaiotnloan,
            ...e,
          });
          u("Successfully submitted!"),
            console.log("Response from server:", f.data),
            p(m + 1),
            g(v()),
            t(() => ({
              BranchMember: "",
              CenterMember: "",
              memberID: "",
              memberName: "",
              MfhName: "",
              memberJob: "",
              memberVillage: "",
              memberUnion: "",
              memberPost: "",
              MdateOfBirth: "",
              memberSubDic: "",
              memberDic: "",
              memberMarital: "",
              memberStudy: "",
              memberFhead: "",
              memberfMM: 0,
              memberfMF: 0,
              memberfMTotal: 0,
              EarningMember: "",
              FamilyMemberENO: "",
              loanamount: 0,
              nonorganizaiotnloan: 0,
              YearlyIncome: 0,
              LandProperty: "",
              TotalMoney: "",
              MemberNIDnumber: 0,
              MemberMobile: 0,
              NominiName: "",
              NominiFather: "",
              MemberNominiRelation: "",
            })),
            setTimeout(() => {
              u("");
            }, 3e3);
        } catch (f) {
          console.error("Error submitting form:", f.message),
            u(`Error: ${f.message}`);
        }
      };
    return l.jsxs("div", {
      className: " bg-light mt-2 ",
      children: [
        l.jsx("div", {
          className: "mb-5 ",
          children: l.jsxs("h2", {
            className: "text-center  border-bottom mb-4 pt-3",
            children: ["সদস্য ভর্তি ফর্ম", " "],
          }),
        }),
        l.jsx("form", {
          className: "container-fluid p-2",
          children: l.jsxs("div", {
            className: "row  g-4 bg-light",
            children: [
              l.jsxs("div", {
                className: "row mt-5 p-4",
                children: [
                  l.jsx("div", {
                    className: "col-4",
                    children: l.jsxs("div", {
                      className: "col-md-6",
                      children: [
                        l.jsx("label", {
                          htmlFor: "BranchMember",
                          className: "form-label",
                          children: "শাঁখা নির্বাচন করুণ",
                        }),
                        l.jsxs("select", {
                          id: "BranchMember",
                          className: "form-select",
                          value: e.BranchMember,
                          onChange: j,
                          name: "BranchMember",
                          children: [
                            l.jsx("option", {
                              value: "",
                              children: "Choose...",
                            }),
                            a.map((f) =>
                              l.jsx(
                                "option",
                                { value: f.BranchName, children: f.BranchName },
                                f._id
                              )
                            ),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx("div", {
                    className: "col-4",
                    children: l.jsxs("div", {
                      className: "col-md-6",
                      children: [
                        l.jsx("label", {
                          htmlFor: "CenterMember",
                          className: "form-label",
                          children: "কেন্দ্র নির্বাচন করুণ",
                        }),
                        l.jsxs("select", {
                          id: "CenterMember",
                          name: "CenterMember",
                          className: "form-select",
                          value: e.CenterMember,
                          onChange: j,
                          children: [
                            l.jsx("option", {
                              value: "",
                              children: "Choose...",
                            }),
                            c.map((f) =>
                              l.jsx(
                                "option",
                                { value: f.CenterName, children: f.CenterName },
                                f._id
                              )
                            ),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx("div", {
                    className: "col-4",
                    children: l.jsx("div", {
                      className: "row g-3 align-items-center ",
                      children: l.jsx("div", {
                        children: l.jsxs("div", {
                          className: "mb-3",
                          children: [
                            l.jsx("label", {
                              htmlFor: "memberID",
                              className: "form-label",
                              children: "সদস্য ID:",
                            }),
                            l.jsx("input", {
                              type: "text",
                              id: "memberID",
                              className: "form-control",
                              value: N,
                              readOnly: !0,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-4",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberName",
                    className: "form-label",
                    children: "নাম",
                  }),
                  l.jsx("input", {
                    id: "memberName",
                    className: "form-control",
                    type: "text",
                    value: e.memberName,
                    onChange: j,
                    name: "memberName",
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-4",
                children: [
                  l.jsx("label", {
                    htmlFor: "MfhName",
                    className: "form-label",
                    children: "পিতা/স্বামীর নাম",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "MfhName",
                    onChange: j,
                    name: "MfhName",
                    value: e.MfhName,
                    required: !0,
                  }),
                ],
              }),
              l.jsx("div", {
                className: "col-4",
                children: l.jsx("div", {
                  className: "col-4",
                  children: l.jsx(Gi, {
                    selectedDate: e.MdateOfBirth,
                    onDateChange: n,
                  }),
                }),
              }),
              l.jsxs("div", {
                className: "col-md-2",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberJob",
                    className: "form-label",
                    children: "পেশা",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberJob",
                    onChange: j,
                    name: "memberJob",
                    value: e.memberJob,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-6",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberVillage",
                    className: "form-label",
                    children: "গ্রাম/পাড়া",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberVillage",
                    onChange: j,
                    name: "memberVillage",
                    value: e.memberVillage,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberUnion",
                    className: "form-label",
                    children: "ইউনিয়ন",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberUnion",
                    onChange: j,
                    name: "memberUnion",
                    value: e.memberUnion,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberPost",
                    className: "form-label",
                    children: "ডাকঘর",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberPost",
                    onChange: j,
                    name: "memberPost",
                    value: e.memberPost,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberSubDic",
                    className: "form-label",
                    children: "থানা",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberSubDic",
                    onChange: j,
                    name: "memberSubDic",
                    value: e.memberSubDic,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberDic",
                    className: "form-label",
                    children: "জেলা",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "memberDic",
                    onChange: j,
                    name: "memberDic",
                    value: e.memberDic,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberMarital",
                    className: "form-label",
                    children: "বৈবাহিক অবস্থা",
                  }),
                  l.jsxs("select", {
                    id: "memberMarital",
                    className: "form-select",
                    name: "memberMarital",
                    value: e.memberMarital,
                    onChange: j,
                    children: [
                      l.jsx("option", { value: "", children: "Choose..." }),
                      l.jsx("option", { children: "অবিবাহিত" }),
                      l.jsx("option", { children: "বিবাহিত" }),
                      l.jsx("option", { children: "তালাকপ্রাপ্ত" }),
                      l.jsx("option", { children: "বিধবা" }),
                      l.jsx("option", { children: "অন্যান্য" }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberStudy",
                    className: "form-label",
                    children: "শিক্ষাগত যোগ্যতা",
                  }),
                  l.jsxs("select", {
                    id: "memberStudy",
                    className: "form-select",
                    name: "memberStudy",
                    value: e.memberStudy,
                    onChange: j,
                    children: [
                      l.jsx("option", { value: "", children: "Choose..." }),
                      l.jsx("option", { children: "স্বাক্ষর জ্ঞান সম্পন্ন" }),
                      l.jsx("option", { children: "প্রাথমিক" }),
                      l.jsx("option", { children: "মাধ্যমিক" }),
                      l.jsx("option", { children: "উচ্চমাধ্যমিক" }),
                      l.jsx("option", { children: "স্নাতক" }),
                      l.jsx("option", { children: "স্নাতকোত্তর" }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "row mt-4",
                children: [
                  l.jsxs("div", {
                    className: "col-md-3 ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "memberFhead",
                        className: "form-label",
                        children: "পরিবারের প্রধানের নাম",
                      }),
                      l.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "memberFhead",
                        onChange: j,
                        name: "memberFhead",
                        value: e.memberFhead,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "col-9",
                    children: l.jsxs("div", {
                      className: "row mt-3",
                      children: [
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsx("div", {
                            className: "row g-3 align-items-center ",
                            children: l.jsx("div", {
                              className: "col-auto",
                              children: l.jsx("div", {
                                className: "col-form-label",
                                children: "পরিবারের সদস্য সংখ্যা",
                              }),
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsx("label", {
                                  htmlFor: "memberfMM",
                                  className: "col-form-label",
                                  children: "পুরুষ",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  type: "number",
                                  className: "form-control",
                                  id: "memberfMM",
                                  onChange: j,
                                  name: "memberfMM",
                                  value: e.memberfMM,
                                  required: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsx("label", {
                                  htmlFor: "memberfMF",
                                  className: "col-form-label",
                                  children: "মহিলা",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  type: "number",
                                  className: "form-control",
                                  id: "memberfMF",
                                  onChange: j,
                                  name: "memberfMF",
                                  value: e.memberfMF,
                                  required: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsx("label", {
                                  htmlFor: "memberfMTotal",
                                  className: "col-form-label",
                                  children: "পরিবারের মোট সদস্য সংখ্যা",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  type: "number",
                                  className: "form-control",
                                  id: "memberfMTotal",
                                  onChange: j,
                                  name: "memberfMTotal",
                                  value: e.memberfMTotal,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              l.jsx("div", {
                className: "col-6",
                children: l.jsxs("div", {
                  children: [
                    l.jsxs("div", {
                      className: "mb-3",
                      children: [
                        l.jsx("label", {
                          className: "form-label",
                          children: "পরিবারের কেউ এন জি ও এর সদস্য কিনা",
                        }),
                        l.jsx("div", {
                          className: "form-check",
                          children: ["yes", "no"].map((f) =>
                            l.jsxs(
                              "div",
                              {
                                children: [
                                  l.jsx("input", {
                                    className: "form-check-input",
                                    type: "radio",
                                    name: "FamilyMemberENO",
                                    id: `FamilyMemberENO${f}`,
                                    value: f,
                                    onChange: j,
                                  }),
                                  l.jsx("label", {
                                    htmlFor: `FamilyMemberENO${f}`,
                                    className: "form-check-label",
                                    children: f === "yes" ? "হ্যাঁ" : "না",
                                  }),
                                ],
                              },
                              f
                            )
                          ),
                        }),
                      ],
                    }),
                    r &&
                      l.jsxs("div", {
                        className: "mb-3 ",
                        children: [
                          l.jsx("label", {
                            htmlFor: "loanamount",
                            className: "form-label mt-2",
                            children: "সংস্থা থেকে গ্রহণকৃত ঋণের পরিমান",
                          }),
                          l.jsx("input", {
                            type: "number",
                            className: "form-control mb-2 mt-2",
                            id: "loanamount",
                            placeholder: "টাকার পরিমাণ",
                            onChange: j,
                            name: "loanamount",
                            value: e.loanamount,
                          }),
                          l.jsx("label", {
                            htmlFor: "nonorganizaiotnloan",
                            className: "form-label mt-2",
                            children: "অপ্রাতিষ্ঠানিক ঋণের পরিমাণ",
                          }),
                          l.jsx("input", {
                            type: "number",
                            className: "form-control mb-2 mt-2",
                            id: "nonorganizaiotnloan",
                            placeholder: "টাকার পরিমাণ",
                            onChange: j,
                            name: "nonorganizaiotnloan",
                            value: e.nonorganizaiotnloan,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              l.jsx("div", {
                children: l.jsx("div", {
                  className: "col",
                  children: l.jsxs("div", {
                    className: "row mt-3",
                    children: [
                      l.jsx("div", {
                        className: "col-4",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-auto",
                              children: l.jsx("label", {
                                htmlFor: "EarningMember",
                                className: "col-form-label",
                                children: "পরিবারের উপার্জনকারী সদস্য সংখ্যা",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-4",
                              children: l.jsx("input", {
                                type: "number",
                                className: "form-control",
                                id: "EarningMember",
                                onChange: j,
                                name: "EarningMember",
                                value: e.EarningMember,
                                required: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-4",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-4",
                              children: l.jsx("label", {
                                htmlFor: "YearlyIncome",
                                className: "col-form-label",
                                children: "পরিবারের মোট বার্ষিক আয়",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-4",
                              children: l.jsx("input", {
                                type: "number",
                                className: "form-control",
                                id: "YearlyIncome",
                                required: !0,
                                onChange: j,
                                name: "YearlyIncome",
                                value: e.YearlyIncome,
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-4",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-4",
                              children: l.jsx("label", {
                                htmlFor: "LandProperty",
                                className: "col-form-label",
                                children: "মোট জমির পরিমাণ",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-4",
                              children: l.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "LandProperty",
                                required: !0,
                                onChange: j,
                                name: "LandProperty",
                                value: e.LandProperty,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              l.jsx("div", {
                children: l.jsx("div", {
                  className: "col",
                  children: l.jsxs("div", {
                    className: "row mt-3",
                    children: [
                      l.jsx("div", {
                        className: "col-3",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-auto",
                              children: l.jsx("label", {
                                htmlFor: "TotalMoney",
                                className: "col-form-label",
                                children: "মোট সম্পদের পরিমাণ",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-4",
                              children: l.jsx("input", {
                                type: "text",
                                className: "form-control",
                                id: "TotalMoney",
                                required: !0,
                                onChange: j,
                                name: "TotalMoney",
                                value: e.TotalMoney,
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-3",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-auto",
                              children: l.jsx("label", {
                                htmlFor: "MemberNIDnumber",
                                className: "col-form-label",
                                children: "NID নাম্বার",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-6",
                              children: l.jsx("input", {
                                type: "number",
                                className: "form-control",
                                id: "MemberNIDnumber",
                                required: !0,
                                onChange: j,
                                name: "MemberNIDnumber",
                                value: e.MemberNIDnumber,
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "col-4 mt-5",
                        children: l.jsxs("div", {
                          className: "row g-3 align-items-center ",
                          children: [
                            l.jsx("div", {
                              className: "col-auto",
                              children: l.jsx("label", {
                                htmlFor: "MemberMobile",
                                className: "col-form-label",
                                children: "মোবাইল নাম্বার",
                              }),
                            }),
                            l.jsx("div", {
                              className: "col-md-6",
                              children: l.jsx("input", {
                                type: "number",
                                className: "form-control",
                                id: "MemberMobile",
                                onChange: j,
                                name: "MemberMobile",
                                value: e.MemberMobile,
                                required: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              l.jsx("div", {
                className: "mb-5 mt-5",
                children: l.jsx("h2", {
                  className: "text-center mb-4 ",
                  children: "নমনী তথ্য ",
                }),
              }),
              l.jsxs("div", {
                className: "col-md-4",
                children: [
                  l.jsx("label", {
                    htmlFor: "NominiName",
                    className: "form-label",
                    children: "নমনীর নাম",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "NominiName",
                    onChange: j,
                    name: "NominiName",
                    value: e.NominiName,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-4",
                children: [
                  l.jsx("label", {
                    htmlFor: "NominiFather",
                    className: "form-label",
                    children: "পিতা/স্বামীর নাম",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "NominiFather",
                    onChange: j,
                    name: "NominiFather",
                    value: e.NominiFather,
                    required: !0,
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-4",
                children: [
                  l.jsx("label", {
                    htmlFor: "MemberNominiRelation",
                    className: "form-label",
                    children: "সম্পর্ক",
                  }),
                  l.jsx("input", {
                    type: "text",
                    className: "form-control",
                    id: "MemberNominiRelation",
                    onChange: j,
                    name: "MemberNominiRelation",
                    value: e.MemberNominiRelation,
                    required: !0,
                  }),
                ],
              }),
              l.jsx("div", {
                className: "col-12",
                children: l.jsxs("div", {
                  className: "form-check",
                  children: [
                    l.jsx("input", {
                      className: "form-check-input",
                      type: "checkbox",
                      id: "agreementChecked",
                      name: "agreementChecked",
                      checked: e.agreementChecked,
                      onChange: (f) =>
                        t((x) => ({
                          ...x,
                          agreementChecked: f.target.checked,
                        })),
                    }),
                    l.jsx("label", {
                      htmlFor: "agreementChecked",
                      className: "form-check-label",
                      children: "Check me out",
                    }),
                  ],
                }),
              }),
              l.jsxs("div", {
                className: "col-12 mb-5 ",
                children: [
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: h,
                      children: "Submit",
                    }),
                  }),
                  d &&
                    l.jsx("div", {
                      className: "alert alert-success",
                      role: "alert",
                      children: d,
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Jy = () => l.jsx("div", {}),
  Yy = "http://localhost:9000/workeradmission",
  Gy = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(""),
      [s, a] = y.useState([]),
      [o, c] = y.useState([]),
      [i, d] = y.useState({
        WorkerName: "",
        WorkerParent: "",
        WdateOfBirth: "",
        WorkerJob: "",
        WorkerHome: "",
        WorkerUnion: "",
        WorkerPost: "",
        WorkerSubDic: "",
        WorkerDic: "",
        WorkerMarital: "",
        WorkerStudy: "",
        WorkerNID: 0,
        WorkerMobile: 0,
        WorkerMail: "",
        Workerimage: null,
        WorkerCenterAdd: "",
        WorkerBranchAdd: "",
        agreementChecked: !1,
      }),
      u = y.useRef(null),
      m = (h) => {
        d({ ...i, WdateOfBirth: h });
      },
      [p, N] = y.useState("");
    y.useEffect(() => {
      (async () => {
        try {
          const f = await fetch("http://localhost:9000/branch-callback"),
            x = await fetch("http://localhost:9000/center-callback");
          if (!f.ok || !x.ok) throw new Error("Failed to fetch data");
          const k = await f.json(),
            E = await x.json();
          c(k), a(E);
        } catch (f) {
          console.error("Error fetching data:", f.message);
        }
      })();
    }, []),
      y.useEffect(() => {
        e !== void 0 && r(g(e));
      }, [e]);
    const g = (h) => `W${h !== void 0 ? h.toString().padStart(4, "0") : ""}`,
      v = (h) => {
        const { name: f, value: x, type: k, checked: E } = h.target,
          b = f === "WorkerNID" ? parseInt(x, 10) : x;
        d((R) => ({
          ...R,
          [f]: k === "checkbox" ? E : b,
          [f]: k === "checkbox" ? E : C,
        }));
        const C = f === "WdateOfBirth" ? (x ? x.toISOString() : null) : x;
      },
      j = async (h) => {
        h.preventDefault();
        try {
          const x = await (
            await fetch(Yy, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(i),
            })
          ).json();
          console.log("Server response:", x),
            N("Successfully added worker data!"),
            t(e + 1),
            r(g()),
            d({
              workerID: "",
              WorkerName: "",
              WorkerParent: "",
              WdateOfBirth: "",
              WorkerJob: "",
              WorkerHome: "",
              WorkerUnion: "",
              WorkerPost: "",
              WorkerSubDic: "",
              WorkerDic: "",
              WorkerMarital: "",
              WorkerStudy: "",
              WorkerNID: 0,
              WorkerMobile: 0,
              WorkerMail: "",
              Workerimage: null,
              WorkerCenterAdd: "",
              WorkerBranchAdd: "",
              agreementChecked: !1,
            }),
            setTimeout(() => {
              N("");
            }, 3e3),
            u.current.reset();
        } catch (f) {
          console.error("Error submitting WorkerAdmission data:", f.message);
        }
        console.log("Form submitted:", i);
      };
    return l.jsx("div", {
      children: l.jsxs("div", {
        className: "  mt-2 bg-light",
        children: [
          l.jsx("div", {
            className: "mb-5 ",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-4 ",
              children: "কর্মী ভর্তি ফর্ম ",
            }),
          }),
          l.jsx("form", {
            className: " bg-light ",
            onSubmit: j,
            ref: u,
            children: l.jsxs("div", {
              className: "row g-4 p-2",
              children: [
                l.jsxs("div", {
                  className: "mb-3 col-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "workerID",
                      className: "form-label",
                      children: "Center ID:",
                    }),
                    l.jsx("input", {
                      id: "workerID",
                      className: "form-control",
                      type: "text",
                      value: n,
                      disabled: !0,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-4",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerName",
                      className: "form-label",
                      children: "নাম",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerName",
                      required: !0,
                      onChange: v,
                      name: "WorkerName",
                      value: i.WorkerName,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-4",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerParent",
                      className: "form-label",
                      children: "পিতা/স্বামীর নাম",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerParent",
                      required: !0,
                      onChange: v,
                      name: "WorkerParent",
                      value: i.WorkerParent,
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "col-4",
                  children: l.jsx("div", {
                    className: "col-4",
                    children: l.jsx(Gi, {
                      selectedDate: i.WdateOfBirth,
                      onDateChange: m,
                    }),
                  }),
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerJob",
                      className: "form-label",
                      children: "পেশা",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerJob",
                      required: !0,
                      onChange: v,
                      name: "WorkerJob",
                      value: i.WorkerJob,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-6",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerHome",
                      className: "form-label",
                      children: "গ্রাম/পাড়া",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerHome",
                      required: !0,
                      onChange: v,
                      name: "WorkerHome",
                      value: i.WorkerHome,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerUnion",
                      className: "form-label",
                      children: "ইউনিয়ন",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerUnion",
                      required: !0,
                      onChange: v,
                      name: "WorkerUnion",
                      value: i.WorkerUnion,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerPost",
                      className: "form-label",
                      children: "ডাকঘর",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerPost",
                      required: !0,
                      onChange: v,
                      name: "WorkerPost",
                      value: i.WorkerPost,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerSubDic",
                      className: "form-label",
                      children: "থানা",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerSubDic",
                      required: !0,
                      onChange: v,
                      name: "WorkerSubDic",
                      value: i.WorkerSubDic,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerDic",
                      className: "form-label",
                      children: "জেলা",
                    }),
                    l.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "WorkerDic",
                      required: !0,
                      onChange: v,
                      name: "WorkerDic",
                      value: i.WorkerDic,
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerMarital",
                      className: "form-label",
                      children: "বৈবাহিক অবস্থা",
                    }),
                    l.jsxs("select", {
                      id: "WorkerMarital",
                      name: "WorkerMarital",
                      className: "form-select",
                      value: i.WorkerMarital,
                      onChange: v,
                      children: [
                        l.jsx("option", { value: "", children: "Choose..." }),
                        l.jsx("option", { children: "অবিবাহিত" }),
                        l.jsx("option", { children: "বিবাহিত" }),
                        l.jsx("option", { children: "তালাকপ্রাপ্ত" }),
                        l.jsx("option", { children: "বিধবা" }),
                        l.jsx("option", { children: "অন্যান্য" }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerStudy",
                      className: "form-label",
                      children: "শিক্ষাগত যোগ্যতা",
                    }),
                    l.jsxs("select", {
                      id: "WorkerStudy",
                      name: "WorkerStudy",
                      className: "form-select",
                      value: i.WorkerStudy,
                      onChange: v,
                      children: [
                        l.jsx("option", { value: "", children: "Choose..." }),
                        l.jsx("option", { children: "স্বাক্ষর জ্ঞান সম্পন্ন" }),
                        l.jsx("option", { children: "প্রাথমিক" }),
                        l.jsx("option", { children: "মাধ্যমিক" }),
                        l.jsx("option", { children: "উচ্চমাধ্যমিক" }),
                        l.jsx("option", { children: "স্নাতক" }),
                        l.jsx("option", { children: "স্নাতকোত্তর" }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  children: l.jsx("div", {
                    className: "col",
                    children: l.jsxs("div", {
                      className: "row mt-4",
                      children: [
                        l.jsx("div", {
                          className: "col-4",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsxs("label", {
                                  htmlFor: "WorkerNID",
                                  className: "col-form-label",
                                  children: ["NID নাম্বার", " "],
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-8",
                                children: l.jsx("input", {
                                  type: "number",
                                  className: "form-control",
                                  id: "WorkerNID",
                                  required: !0,
                                  onChange: v,
                                  name: "WorkerNID",
                                  value: i.WorkerNID,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-4",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsxs("label", {
                                  htmlFor: "WorkerMobile",
                                  className: "col-form-label",
                                  children: ["মোবাইল নাম্বার", " "],
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-8",
                                children: l.jsx("input", {
                                  type: "number",
                                  className: "form-control",
                                  id: "WorkerMobile",
                                  required: !0,
                                  onChange: v,
                                  name: "WorkerMobile",
                                  value: i.WorkerMobile,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-4",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-auto",
                                children: l.jsxs("label", {
                                  htmlFor: "WorkerMail",
                                  className: "col-form-label",
                                  children: ["মেইল", " "],
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-8",
                                children: l.jsx("input", {
                                  type: "email",
                                  className: "form-control",
                                  id: "WorkerMail",
                                  required: !0,
                                  onChange: v,
                                  name: "WorkerMail",
                                  value: i.WorkerMail,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                l.jsxs("div", {
                  className: "col-md-3",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerCenterAdd",
                      className: "form-label",
                      children: "কেন্দ্র নির্বাচন করুণ",
                    }),
                    l.jsxs("select", {
                      id: "workerCenterAdd",
                      name: "WorkerCenterAdd",
                      className: "form-select",
                      value: i.WorkerCenterAdd,
                      onChange: v,
                      children: [
                        l.jsx("option", { value: "", children: "Choose..." }),
                        s.map((h) =>
                          l.jsx(
                            "option",
                            { value: h.CenterName, children: h.CenterName },
                            h._id
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "col-md-6",
                  children: [
                    l.jsx("label", {
                      htmlFor: "WorkerBranchAdd",
                      className: "form-label",
                      children: "শাঁখা নির্বাচন করুণ",
                    }),
                    l.jsxs("select", {
                      id: "WorkerBranchAdd",
                      className: "form-select",
                      value: i.WorkerBranchAdd,
                      onChange: v,
                      name: "WorkerBranchAdd",
                      children: [
                        l.jsx("option", { value: "", children: "Choose..." }),
                        o.map((h) =>
                          l.jsx(
                            "option",
                            { value: h.BranchName, children: h.BranchName },
                            h._id
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "col-12",
                  children: l.jsxs("div", {
                    className: "form-check",
                    children: [
                      l.jsx("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        id: "gridCheck",
                        name: "agreementChecked",
                        checked: i.agreementChecked,
                        onChange: v,
                      }),
                      l.jsx("label", {
                        className: "form-check-label",
                        htmlFor: "gridCheck",
                        children: "Check me out",
                      }),
                    ],
                  }),
                }),
                l.jsx("div", {
                  className: "col-12 mb-5",
                  children: l.jsx("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    children: "Submit",
                  }),
                }),
                p &&
                  l.jsx("div", {
                    className: "alert alert-success",
                    role: "alert",
                    children: p,
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function Xy() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState(null),
    [s, a] = y.useState([]),
    [o, c] = y.useState([]);
  y.useEffect(() => {
    $.get("http://localhost:9000/branch-callback")
      .then((u) => {
        c(u.data);
      })
      .catch((u) => {
        console.error("Error fetching branch data:", u);
      });
  }, []);
  const i = (u) => {
      const m = u.target.value;
      t(m),
        r(null),
        m &&
          $.get(
            `http://localhost:9000/worker-callback?selectedBranch=${encodeURIComponent(
              m
            )}`
          )
            .then((p) => {
              a(p.data);
            })
            .catch((p) => {
              console.error("Error fetching worker data:", p);
            });
    },
    d = (u) => {
      r(u);
    };
  return l.jsxs("div", {
    className: "bg-light container-fluid",
    children: [
      l.jsx("div", {
        className: "row mb-5",
        children: l.jsx("h2", {
          className: "text-center mb-4 pt-4",
          children: "কর্মীর তালিকা",
        }),
      }),
      l.jsx("div", {
        className: "row",
        children: l.jsxs("div", {
          className: "col-md-3 mb-3",
          children: [
            l.jsx("label", {
              htmlFor: "branchSelect",
              className: "form-label",
              children: "শাঁখা নির্বাচন করুণ",
            }),
            l.jsxs("select", {
              className: "form-select",
              id: "branchSelect",
              onChange: i,
              value: e,
              children: [
                l.jsx("option", { value: "", children: "Choose..." }),
                Array.isArray(o) &&
                  o.length > 0 &&
                  o.map((u) =>
                    l.jsx(
                      "option",
                      { value: u.BranchName, children: u.BranchName },
                      u._id
                    )
                  ),
              ],
            }),
          ],
        }),
      }),
      l.jsxs("div", {
        className: "table-responsive",
        children: [
          e &&
            l.jsxs("table", {
              className: "table table-hover",
              children: [
                l.jsx("thead", {
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("th", { children: "ID" }),
                      l.jsx("th", { children: "নাম" }),
                      l.jsx("th", { children: "মোবাইল" }),
                      l.jsx("th", { children: "কেন্দ্র" }),
                      l.jsx("th", { children: "পদক্ষেপ" }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  children: s.map((u) =>
                    l.jsxs(
                      "tr",
                      {
                        children: [
                          l.jsx("td", { children: u.workerID }),
                          l.jsx("td", { children: u.WorkerName }),
                          l.jsx("td", { children: u.WorkerMobile }),
                          l.jsx("td", { children: u.WorkerCenterAdd }),
                          l.jsxs("td", {
                            children: [
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-primary btn-sm",
                                onClick: () => d(u),
                                children: "View",
                              }),
                              " ",
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-danger btn-sm",
                                onClick: () => console.log("Delete worker"),
                                children: "Delete",
                              }),
                              " ",
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-warning btn-sm",
                                onClick: () => console.log("Edit worker"),
                                children: "Edit",
                              }),
                            ],
                          }),
                        ],
                      },
                      u.workerID
                    )
                  ),
                }),
              ],
            }),
          n &&
            l.jsxs("div", {
              children: [
                l.jsx("div", {
                  className: "mb-5 ",
                  children: l.jsx("h2", {
                    className: "text-center mb-4 pt-4 ",
                    children: "নির্বাচিত কর্মীর বিবরণ",
                  }),
                }),
                l.jsxs("div", {
                  className: "row",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কর্মীর ID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.workerID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কর্মীর নাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerName,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "জন্ম তারিখ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WdateOfBirth,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "NID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerNID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "row mt-3",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "গ্রাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerHome,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "মেইল",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerMail,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "উপজেলা",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerSubDic,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "জেলা",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.WorkerDic,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const Zy = "http://localhost:9000/opencenter";
function ej() {
  const [e, t] = y.useState(0),
    [n, r] = y.useState(""),
    [s, a] = y.useState([]),
    [o, c] = y.useState([]),
    [i, d] = y.useState({
      centerID: "",
      CenterName: "",
      AddressCenter: "",
      CenterMnumber: "",
      centerBranch: "",
      centerWorker: "",
    }),
    [u, m] = y.useState("");
  y.useEffect(() => {
    (async () => {
      try {
        const h = await (
          await fetch("http://localhost:9000/branch-callback")
        ).json();
        console.log("Fetched branch:", h), c(h);
      } catch (j) {
        console.error("Error fetching branch options:", j.message);
      }
    })();
  }, []),
    y.useEffect(() => {
      (async () => {
        try {
          const h = await (
            await fetch("http://localhost:9000/worker-callback")
          ).json();
          console.log("Fetched workers:", h), a(h);
        } catch (j) {
          console.error("Error fetching worker options:", j.message);
        }
      })();
    }, []),
    y.useEffect(() => {
      e !== void 0 && r(p(e));
    }, [e]);
  const p = (v) => `C${v !== void 0 ? v.toString().padStart(4, "0") : ""}`,
    N = (v) => {
      const { name: j, value: h } = v.target;
      d((f) => ({ ...f, [j]: h }));
    },
    g = async () => {
      try {
        if (
          !i.CenterName.trim() ||
          !i.AddressCenter.trim() ||
          (typeof i.CenterMnumber == "string" && !i.CenterMnumber.trim())
        )
          return;
        const v = await $.post(Zy, { centerID: i.centerID, ...i });
        m("Successfully submitted!"),
          console.log("Response from server:", v.data),
          t(e + 1),
          r(p()),
          d({
            centerID: "",
            CenterName: "",
            AddressCenter: "",
            CenterMnumber: "",
            centerBranch: "",
            centerdWorker: "",
          }),
          setTimeout(() => {
            m("");
          }, 3e3);
      } catch (v) {
        console.error("Error submitting form:", v.message),
          m(`Error: ${v.message}`);
      }
    };
  return l.jsx("div", {
    children: l.jsxs("div", {
      className: "bg-light",
      children: [
        l.jsx("div", {
          className: "p-2",
          children: l.jsx("div", {
            className: "border-bottom mb-5",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-3",
              children: "কেন্দ্র খুলুন",
            }),
          }),
        }),
        l.jsx("div", {
          children: l.jsxs("form", {
            className: "p-3",
            children: [
              l.jsxs("div", {
                className: "row mb-4",
                children: [
                  l.jsxs("div", {
                    className: "mb-3 col-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "centerID",
                        className: "form-label",
                        children: "Center ID:",
                      }),
                      l.jsx("input", {
                        id: "centerID",
                        className: "form-control",
                        type: "text",
                        value: n,
                        disabled: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-md-3 col-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "CenterName",
                        className: "form-label",
                        children: "কেন্দ্রের নাম",
                      }),
                      l.jsx("input", {
                        id: "CenterName",
                        className: "form-control",
                        type: "text",
                        value: i.CenterName,
                        onChange: N,
                        name: "CenterName",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-3 col-md-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "AddressCenter",
                        className: "form-label",
                        children: "ঠিকানা",
                      }),
                      l.jsx("input", {
                        id: "AddressCenter",
                        className: "form-control",
                        type: "text",
                        value: i.AddressCenter,
                        onChange: N,
                        name: "AddressCenter",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-3 col-md-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "CenterMnumber",
                        className: "form-label",
                        children: "মোবাইল:",
                      }),
                      l.jsx("input", {
                        id: "CenterMnumber",
                        className: "form-control",
                        type: "number",
                        value: i.CenterMnumber,
                        onChange: N,
                        name: "CenterMnumber",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "row",
                children: [
                  l.jsxs("div", {
                    className: "mb-3 col-4 col-md-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "centerBranch",
                        className: "form-label",
                        children: "শাঁখা নির্বাচন করুণ",
                      }),
                      l.jsxs("select", {
                        id: "centerBranch",
                        className: "form-select",
                        value: i.centerBranch,
                        onChange: N,
                        name: "centerBranch",
                        children: [
                          l.jsx("option", { value: "", children: "Choose..." }),
                          o.map((v) =>
                            l.jsx(
                              "option",
                              { value: v.BranchName, children: v.BranchName },
                              v._id
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "col-4",
                    children: l.jsx("div", {
                      className: "col-md-6",
                      children: l.jsxs("div", {
                        className: "mb-3",
                        children: [
                          l.jsx("label", {
                            htmlFor: "centerWorker",
                            className: "form-label",
                            children: "কর্মী নির্বাচন করুণ",
                          }),
                          l.jsxs("select", {
                            id: "centerWorker",
                            className: "form-select",
                            value: i.centerWorker,
                            onChange: N,
                            name: "centerWorker",
                            children: [
                              l.jsx("option", {
                                value: "",
                                children: "Choose...",
                              }),
                              s.map((v) =>
                                l.jsx(
                                  "option",
                                  {
                                    value: v.WorkerName,
                                    children: v.WorkerName,
                                  },
                                  v._id
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-12 mb-5 mt-5",
                children: [
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: g,
                      children: "Submit",
                    }),
                  }),
                  u &&
                    l.jsx("div", {
                      className: "alert alert-success",
                      role: "alert",
                      children: u,
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function tj() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState(null),
    [s, a] = y.useState([]),
    [o, c] = y.useState([]);
  y.useEffect(() => {
    $.get("http://localhost:9000/branch-callback")
      .then((u) => {
        c(u.data);
      })
      .catch((u) => {
        console.error("Error fetching branch data:", u);
      });
  }, []);
  const i = (u) => {
      const m = u.target.value;
      t(m),
        r(null),
        m &&
          $.get(
            `http://localhost:9000/center-callback?selectedBranch=${encodeURIComponent(
              m
            )}`
          )
            .then((p) => {
              console.log("Fetched centers:", p.data), a(p.data);
            })
            .catch((p) => {
              console.error("Error fetching worker data:", p);
            });
    },
    d = (u) => {
      r(u);
    };
  return l.jsxs("div", {
    className: "bg-light container-fluid",
    children: [
      l.jsx("div", {
        className: "row mb-5",
        children: l.jsx("h2", {
          className: "text-center mb-4 pt-4",
          children: "কেন্দ্রের তালিকা",
        }),
      }),
      l.jsx("div", {
        className: "row",
        children: l.jsxs("div", {
          className: "col-md-3 mb-3",
          children: [
            l.jsx("label", {
              htmlFor: "branchSelect",
              className: "form-label",
              children: "শাঁখা নির্বাচন করুণ",
            }),
            l.jsxs("select", {
              className: "form-select",
              id: "branchSelect",
              onChange: i,
              value: e,
              children: [
                l.jsx("option", { value: "", children: "Choose..." }),
                Array.isArray(o) &&
                  o.length > 0 &&
                  o.map((u) =>
                    l.jsx(
                      "option",
                      { value: u.BranchName, children: u.BranchName },
                      u._id
                    )
                  ),
              ],
            }),
          ],
        }),
      }),
      l.jsxs("div", {
        className: "table-responsive",
        children: [
          e &&
            l.jsxs("table", {
              className: "table table-hover",
              children: [
                l.jsx("thead", {
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("th", { children: "ID" }),
                      l.jsx("th", { children: "নাম" }),
                      l.jsx("th", { children: "মোবাইল" }),
                      l.jsx("th", { children: "ঠিকানা" }),
                      l.jsx("th", { children: "সদস্য সংখ্যা" }),
                      l.jsx("th", { children: "কর্মী" }),
                      l.jsx("th", { children: "পদক্ষেপ" }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  children: s.map((u) =>
                    l.jsxs(
                      "tr",
                      {
                        children: [
                          l.jsx("td", { children: u.centerID }),
                          l.jsx("td", { children: u.CenterName }),
                          l.jsx("td", { children: u.CenterMnumber }),
                          l.jsx("td", { children: u.AddressCenter }),
                          l.jsx("td", { children: u.selectedWorker }),
                          l.jsx("td", { children: u.selectedWorker }),
                          l.jsxs("td", {
                            children: [
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-primary btn-sm",
                                onClick: () => d(u),
                                children: "View",
                              }),
                              " ",
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-danger btn-sm",
                                onClick: () => console.log("Delete center"),
                                children: "Delete",
                              }),
                              " ",
                              l.jsx("button", {
                                type: "button",
                                className: "btn btn-warning btn-sm",
                                onClick: () => console.log("Edit center"),
                                children: "Edit",
                              }),
                            ],
                          }),
                        ],
                      },
                      u.centerID
                    )
                  ),
                }),
              ],
            }),
          n &&
            l.jsxs("div", {
              children: [
                l.jsx("div", {
                  className: "mb-5 ",
                  children: l.jsx("h2", {
                    className: "text-center mb-4 pt-4 ",
                    children: "নির্বাচিত কেন্দ্রের বিবরণ",
                  }),
                }),
                l.jsxs("div", {
                  className: "row",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কেন্দ্রের ID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.centerID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কেন্দ্রের নাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.CenterName,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "মোবাইল",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.CenterMnumber,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "ঠিকানা",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.AddressCenter,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                l.jsx("div", { className: "row mt-3" }),
              ],
            }),
        ],
      }),
    ],
  });
}
function nj() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState(null),
    [s, a] = y.useState({}),
    [o, c] = y.useState([]);
  y.useEffect(() => {
    $.get("http://localhost:9000/center-callback")
      .then((u) => {
        c(u.data);
      })
      .catch((u) => {
        console.error("Error fetching center data:", u);
      });
  }, []);
  const i = (u) => {
      const m = u.target.value;
      t(m),
        r(null),
        m &&
          $.get(
            `http://localhost:9000/member-callback?selectedCenter=${encodeURIComponent(
              m
            )}`
          )
            .then((p) => {
              console.log("Received member data:", p.data),
                a({ ...s, [m]: p.data });
            })
            .catch((p) => {
              console.error("Error fetching member data:", p);
            });
    },
    d = (u) => {
      r(u);
    };
  return l.jsxs("div", {
    className: "bg-light container-fluid",
    children: [
      l.jsx("div", {
        className: "row mb-5",
        children: l.jsx("h2", {
          className: "text-center mb-4 pt-4",
          children: "কেন্দ্রের সদস্য তালিকা",
        }),
      }),
      l.jsx("div", {
        className: "row",
        children: l.jsxs("div", {
          className: "col-md-3 mb-3",
          children: [
            l.jsx("label", {
              htmlFor: "CenterSelect",
              className: "form-label",
              children: "কেন্দ্র নির্বাচন করুণ",
            }),
            l.jsxs("select", {
              className: "form-select",
              id: "CenterSelect",
              onChange: i,
              value: e,
              children: [
                l.jsx("option", { value: "", children: "Choose..." }),
                o.map((u) =>
                  l.jsx(
                    "option",
                    { value: u.CenterName, children: u.CenterName },
                    u._id
                  )
                ),
              ],
            }),
          ],
        }),
      }),
      l.jsxs("div", {
        className: "table-responsive",
        children: [
          e &&
            l.jsxs("table", {
              className: "table table-hover",
              children: [
                l.jsx("thead", {
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("th", { children: "ID" }),
                      l.jsx("th", { children: "নাম" }),
                      l.jsx("th", { children: "পিতা/স্বামী" }),
                      l.jsx("th", { children: "মোবাইল" }),
                      l.jsx("th", { children: "ঠিকানা" }),
                      l.jsx("th", { children: "ঋণ" }),
                      l.jsx("th", { children: "সঞ্চয়" }),
                      l.jsx("th", { children: "কর্মী" }),
                      l.jsx("th", { children: "পদক্ষেপ" }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  children:
                    s[e] &&
                    s[e].map((u) =>
                      l.jsxs(
                        "tr",
                        {
                          children: [
                            l.jsx("td", { children: u.memberID }),
                            l.jsx("td", { children: u.memberName }),
                            l.jsx("td", { children: u.MfhName }),
                            l.jsx("td", { children: u.MemberMobile }),
                            l.jsx("td", { children: u.memberVillage }),
                            l.jsx("td", { children: u.MemberLoan }),
                            l.jsx("td", { children: u.MemberSavings }),
                            l.jsx("td", { children: u.centerWorker }),
                            l.jsx("td", {
                              children: l.jsx("button", {
                                type: "button",
                                className: "btn btn-primary btn-sm",
                                onClick: () => d(u),
                                children: "View",
                              }),
                            }),
                          ],
                        },
                        u._id
                      )
                    ),
                }),
              ],
            }),
          n &&
            l.jsxs("div", {
              children: [
                l.jsx("div", {
                  className: "mb-5 ",
                  children: l.jsx("h2", {
                    className: "text-center mb-4 pt-4 ",
                    children: "নির্বাচিত সদস্যর বিবরণ",
                  }),
                }),
                l.jsxs("div", {
                  className: "row",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সদস্য ID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.memberID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সদস্য নাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.memberName,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "জন্ম তারিখ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MdateOfBirth,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "NID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MemberNIDnumber,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "row mt-3",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "নমীনির নাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.NominiName,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "নমীনির পিতা",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.NominiFather,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "নমীনির সম্পর্ক",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MemberNominiRelation,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "ঋণের ধরণ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MemberLoanType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "row mt-3",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "ঋণের পরিমাণ:",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MemberLoan,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সঞ্চয়ের ধরণ:",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.MemberSavingsType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const rj = "http://localhost:9000/openbranch",
  lj = ["আব্দুল ছাত্তার", "সুমন সরকার", "আকলিমা বেগম "];
function sj() {
  const [e, t] = y.useState(0),
    [n, r] = y.useState(""),
    [s, a] = y.useState({
      BranchID: "",
      BranchName: "",
      BranchAddress: "",
      BranchMobile: "",
      selectedManager: "",
    }),
    [o, c] = y.useState("");
  y.useEffect(() => {
    e !== void 0 && r(i(e));
  }, [e]);
  const i = (m) => `B${m !== void 0 ? m.toString().padStart(4, "0") : ""}`,
    d = (m) => {
      const { name: p, value: N } = m.target;
      a((g) => ({ ...g, [p]: N }));
    },
    u = async () => {
      try {
        if (
          !s.BranchName.trim() ||
          !s.BranchAddress.trim() ||
          !s.BranchMobile.trim()
        )
          return;
        const m = await $.post(rj, { BranchID: n, ...s });
        c("Successfully submitted!"),
          console.log("Response from server:", m.data),
          t(e + 1),
          r(i()),
          a({
            BranchID: "",
            BranchName: "",
            BranchAddress: "",
            BranchMobile: "",
            selectedManager: "",
          }),
          setTimeout(() => {
            c("");
          }, 2e3);
      } catch (m) {
        console.error("Error submitting form:", m.message),
          c(`Error: ${m.message}`);
      }
    };
  return l.jsx("div", {
    children: l.jsxs("div", {
      className: "bg-light",
      children: [
        l.jsx("div", {
          className: "p-2",
          children: l.jsx("div", {
            className: "border-bottom mb-5",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-3",
              children: "শাখা খুলুন",
            }),
          }),
        }),
        l.jsx("div", {
          children: l.jsxs("form", {
            className: "p-3",
            children: [
              l.jsxs("div", {
                className: "row mb-4",
                children: [
                  l.jsxs("div", {
                    className: "mb-3 col-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "BranchID",
                        className: "form-label",
                        children: "Branch ID:",
                      }),
                      l.jsx("input", {
                        id: "BranchID",
                        className: "form-control",
                        type: "text",
                        value: n,
                        disabled: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-md-3 col-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "BranchName",
                        className: "form-label",
                        children: "শাখার নাম",
                      }),
                      l.jsx("input", {
                        id: "BranchName",
                        className: "form-control",
                        type: "text",
                        name: "BranchName",
                        value: s.BranchName,
                        onChange: d,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-3 col-md-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "BranchAddress",
                        className: "form-label",
                        children: "ঠিকানা",
                      }),
                      l.jsx("input", {
                        id: "BranchAddress",
                        className: "form-control",
                        type: "text",
                        name: "BranchAddress",
                        value: s.BranchAddress,
                        onChange: d,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-3 col-md-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "BranchMobile",
                        className: "form-label",
                        children: "Mobile:",
                      }),
                      l.jsx("input", {
                        id: "BranchMobile",
                        className: "form-control",
                        type: "number",
                        name: "BranchMobile",
                        value: s.BranchMobile,
                        onChange: d,
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "row",
                children: l.jsxs("div", {
                  className: "mb-3 col-4 col-md-4",
                  children: [
                    l.jsx("label", {
                      htmlFor: "selectedManager",
                      className: "form-label",
                      children: "ম্যনেজার নির্বাচন করুণ",
                    }),
                    l.jsxs("select", {
                      id: "selectedManager",
                      className: "form-select",
                      name: "selectedManager",
                      value: s.selectedManager,
                      onChange: d,
                      children: [
                        l.jsx("option", { value: "", children: "Choose..." }),
                        lj.map((m) =>
                          l.jsx("option", { value: m, children: m }, m)
                        ),
                      ],
                    }),
                  ],
                }),
              }),
              l.jsxs("div", {
                className: "col-12 mb-5 mt-5",
                children: [
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "button",
                      className: "btn btn-primary",
                      onClick: u,
                      children: "Submit",
                    }),
                  }),
                  o &&
                    l.jsx("div", {
                      className: "alert alert-success",
                      role: "alert",
                      children: o,
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function sh({ selectedBranch: e, onClose: t, onEditSuccess: n }) {
  console.log("Selected Branch in Modal:", e);
  const [r, s] = y.useState({
      BranchName: e.BranchName,
      BranchAddress: e.BranchAddress,
      selectedManager: e.selectedManager,
      BranchMobile: e.BranchMobile,
    }),
    a = (c) => {
      const { name: i, value: d } = c.target;
      s((u) => ({ ...u, [i]: d }));
    },
    o = async () => {
      try {
        await $.put(`/update-branch/${e.BranchID}`, r),
          console.log("Branch edited successfully"),
          n(),
          t();
      } catch (c) {
        console.error("Error updating branch:", c.message);
      }
    };
  return l.jsx("div", {
    className: "modal",
    children: l.jsxs("div", {
      className: "modal-content",
      children: [
        l.jsx("span", { className: "close", onClick: t, children: "×" }),
        l.jsx("h2", { children: "Edit Branch" }),
        l.jsxs("form", {
          onSubmit: o,
          children: [
            l.jsx("label", { htmlFor: "BranchName", children: "Branch Name:" }),
            l.jsx("input", {
              type: "text",
              id: "BranchName",
              name: "BranchName",
              value: r.BranchName,
              onChange: a,
            }),
            l.jsx("label", {
              htmlFor: "BranchAddress",
              children: "Branch Address:",
            }),
            l.jsx("input", {
              type: "text",
              id: "BranchAddress",
              name: "BranchAddress",
              value: r.BranchAddress,
              onChange: a,
            }),
            l.jsx("label", {
              htmlFor: "selectedManager",
              children: "Selected Manager:",
            }),
            l.jsx("input", {
              type: "text",
              id: "selectedManager",
              name: "selectedManager",
              value: r.selectedManager,
              onChange: a,
            }),
            l.jsx("label", {
              htmlFor: "BranchMobile",
              children: "Branch Mobile:",
            }),
            l.jsx("input", {
              type: "text",
              id: "BranchMobile",
              name: "BranchMobile",
              value: r.BranchMobile,
              onChange: a,
            }),
            l.jsx("button", { type: "submit", children: "Save Changes" }),
          ],
        }),
      ],
    }),
  });
}
sh.propTypes = {
  selectedBranch: bt.shape({
    BranchID: bt.string.isRequired,
    BranchName: bt.string.isRequired,
    BranchAddress: bt.string.isRequired,
    selectedManager: bt.string.isRequired,
    BranchMobile: bt.string.isRequired,
  }).isRequired,
  onClose: bt.func.isRequired,
  onEditSuccess: bt.func.isRequired,
};
function aj() {
  const [e, t] = y.useState([]),
    [n, r] = y.useState(!1),
    [s, a] = y.useState(null);
  y.useEffect(() => {
    (async () => {
      try {
        const d = await $.get("http://localhost:9000/branch-callback");
        t(d.data);
      } catch (d) {
        console.error("Error fetching branch data:", d.message);
      }
    })();
  }, []),
    y.useEffect(() => {
      console.log("Selected Branch in useEffect:", s), s && r(!0);
    }, [s]);
  const o = (i) => {
      console.log("Clicked Edit Button. Branch:", i), a(i);
    },
    c = () => {
      a(null), r(!1);
    };
  return l.jsxs("div", {
    children: [
      l.jsxs("div", {
        className: "bg-light container-fluid",
        children: [
          l.jsx("div", {
            className: "mt-2 ",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-3",
              children: "শাঁখার তালিকা ",
            }),
          }),
          l.jsx("div", {
            className: "mt-5 bg-light",
            children: l.jsxs("table", {
              className: "table table-bordered table-responsive",
              children: [
                l.jsx("thead", {
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("th", { children: "ID" }),
                      l.jsx("th", { children: "নাম" }),
                      l.jsx("th", { children: "ঠিকানা" }),
                      l.jsx("th", { children: "মোবাইল" }),
                      l.jsx("th", { children: "ম্যানেজার" }),
                      l.jsx("th", { children: "কেন্দ্র সংখ্যা" }),
                      l.jsx("th", { children: "পদক্ষেপ" }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  children: e.map((i) =>
                    l.jsxs(
                      "tr",
                      {
                        children: [
                          l.jsx("td", { children: i.BranchID }),
                          l.jsx("td", { children: i.BranchName }),
                          l.jsx("td", { children: i.BranchAddress }),
                          l.jsx("td", { children: i.BranchMobile }),
                          l.jsx("td", { children: i.selectedManager }),
                          l.jsx("td", {}),
                          l.jsx("td", {
                            children: l.jsx("button", {
                              className: "btn btn-warning btn-sm me-2",
                              onClick: () => o(i),
                              children: "Edit",
                            }),
                          }),
                        ],
                      },
                      i.BranchID
                    )
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      console.log("Is Modal Open:", n, "Selected Branch:", s),
      n &&
        s &&
        l.jsx(sh, {
          selectedBranch: s,
          onClose: c,
          onEditSuccess: () => {
            console.log(
              "BranchList: Rendering BranchEditModal. Selected Branch:",
              s
            ),
              c();
          },
        }),
    ],
  });
}
const oj = ["Branch A", "Branch B", "Branch C"],
  Zu = {
    "Branch A": ["Center 1A", "Center 2A", "Center 3A"],
    "Branch B": ["Center 1B", "Center 2B", "Center 3B"],
    "Branch C": ["Center 1C", "Center 2C", "Center 3C"],
  },
  ed = {
    "Center 1A": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 2A": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 3A": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 1B": ["Member 2A", "Member 2B", "Member 3B"],
    "Center 2B": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 3B": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 1C": ["Member 2A", "Member 2B", "Member 3B"],
    "Center 2C": ["Member 1A", "Member 2A", "Member 3A"],
    "Center 3C": ["Member 1A", "Member 2A", "Member 3A"],
  },
  ij = (e) => 500;
function cj() {
  const [e, t] = y.useState(""),
    [n, r] = y.useState(""),
    [s, a] = y.useState(""),
    [o, c] = y.useState(""),
    [i, d] = y.useState("");
  y.useEffect(() => {
    if (s) {
      const j = ij();
      c(j.toString());
    }
  }, [s]);
  const u = (j) => {
      t(j.target.value), r(""), a(""), c(""), d("");
    },
    m = (j) => {
      r(j.target.value), a(""), c(""), d("");
    },
    p = (j) => {
      a(j.target.value), c("");
    },
    N = (j) => {},
    g = (j) => {
      d(j.target.value);
    },
    v = () => {
      console.log({
        selectedBranch: e,
        selectedCenter: n,
        selectedMember: s,
        amount: o,
        total: i,
      });
    };
  return l.jsx("div", {
    children: l.jsx("div", {
      children: l.jsxs("div", {
        className: "bg-light mt-2",
        children: [
          l.jsx("div", {
            className: " p-2",
            children: l.jsx("div", {
              className: " border-bottom mb-5 ",
              children: l.jsx("h2", {
                className: "text-center   mb-4 pt-3",
                children: "অফিস জমা",
              }),
            }),
          }),
          l.jsx("div", {
            className: "bg-light ",
            children: l.jsxs("form", {
              className: " p-3",
              children: [
                l.jsxs("div", {
                  className: "row mb-5",
                  children: [
                    l.jsx("div", {
                      className: "col-4",
                      children: l.jsxs("div", {
                        className: "col-md-6",
                        children: [
                          l.jsx("label", {
                            htmlFor: "branchSelect",
                            className: "form-label",
                            children: "শাঁখা নির্বাচন করুণ",
                          }),
                          l.jsxs("select", {
                            className: "form-select",
                            id: "branchSelect",
                            onChange: u,
                            value: e,
                            children: [
                              l.jsx("option", {
                                value: "",
                                children: "Choose...",
                              }),
                              oj.map((j) =>
                                l.jsx("option", { value: j, children: j }, j)
                              ),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-4",
                      children: l.jsx("div", {
                        className: "col-md-6",
                        children:
                          e &&
                          Zu[e] &&
                          l.jsxs(l.Fragment, {
                            children: [
                              l.jsx("label", {
                                htmlFor: "centerSelect",
                                className: "form-label",
                                children: "কেন্দ্র নির্বাচন করুণ",
                              }),
                              l.jsxs("select", {
                                className: "form-select",
                                id: "centerSelect",
                                onChange: m,
                                value: n,
                                children: [
                                  l.jsx("option", {
                                    value: "",
                                    children: "Choose...",
                                  }),
                                  Zu[e].map((j) =>
                                    l.jsx(
                                      "option",
                                      { value: j, children: j },
                                      j
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-4",
                      children: l.jsx("div", {
                        className: "col-md-6",
                        children:
                          n &&
                          ed[n] &&
                          l.jsxs(l.Fragment, {
                            children: [
                              l.jsx("label", {
                                htmlFor: "memberSelect",
                                className: "form-label",
                                children: "সদস্য নির্বাচন করুণ",
                              }),
                              l.jsxs("select", {
                                className: "form-select",
                                id: "memberSelect",
                                onChange: p,
                                value: s,
                                children: [
                                  l.jsx("option", {
                                    value: "",
                                    children: "Choose...",
                                  }),
                                  ed[n].map((j) =>
                                    l.jsx(
                                      "option",
                                      { value: j, children: j },
                                      j
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "row mb-4",
                  children: [
                    l.jsx("div", {
                      className: "col-4",
                      children: l.jsx("div", {
                        className: "",
                        children:
                          s &&
                          l.jsxs(l.Fragment, {
                            children: [
                              l.jsx("label", {
                                htmlFor: "amount",
                                className: "form-label",
                                children: "কিস্তির পরিমাণ",
                              }),
                              l.jsx("input", {
                                className: "form-select",
                                type: "number",
                                id: "amount",
                                value: o,
                                onChange: N,
                                placeholder: "টাকা",
                                readOnly: !0,
                              }),
                            ],
                          }),
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-md-4",
                      children:
                        s &&
                        l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("label", {
                              htmlFor: "total",
                              className: "form-label",
                              children: "টাকার পরিমাণ",
                            }),
                            l.jsx("input", {
                              className: "form-control",
                              type: "number",
                              id: "total",
                              value: i,
                              onChange: g,
                              placeholder: "জমা",
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                s &&
                  l.jsx("div", {
                    className: "col-12 mb-5 mt-5",
                    children: l.jsx("button", {
                      type: "button",
                      onClick: v,
                      className: "btn btn-primary",
                      children: "Submit",
                    }),
                  }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const uj = "http://localhost:9000/openloan",
  Kt = {
    normal: "সাধারণ ঋণ",
    tubewell: "নলকূপ ঋণ",
    farmer: "কৃষি ঋণ",
    sme: "এস এম ই ঋণ",
    emergency: "জরুরী ঋণ",
    disaster: "দুর্যোগ ঋণ",
    daily: "দৈনিক ঋণ",
  };
function dj() {
  const [e, t] = y.useState(0),
    [n, r] = y.useState(""),
    [s, a] = y.useState(""),
    [o, c] = y.useState([]),
    [i, d] = y.useState(null),
    [u, m] = y.useState(""),
    [p, N] = y.useState("0"),
    [g, v] = y.useState("0"),
    [j, h] = y.useState("");
  y.useEffect(() => {
    (async () => {
      try {
        const R = await $.get("http://localhost:9000/member-callback");
        console.log("Member Data Response:", R.data), c(R.data.members);
      } catch (R) {
        console.error("Error fetching member data:", R.message);
      }
    })();
  }, []),
    y.useEffect(() => {
      e !== void 0 && r(f(e));
    }, [e]);
  const f = (C) => `L${C !== void 0 ? C.toString().padStart(4, "0") : ""}`;
  y.useEffect(() => {
    if (!o || o.length === 0) return;
    const C = o.find((R) => R.memberID === s);
    console.log("Fetched Member:", C),
      C
        ? (d(C), m(C.loanType || ""), N(C.amount || "0"), v(C.total || "0"))
        : (d(null), m(""), N("0"), v("0"));
  }, [o, s]);
  const x = async (C) => {
      const R = C.target.value;
      console.log("Entered Member ID:", R), a(R);
      try {
        const T = await $.get("http://localhost:9000/member-callback");
        if (
          (console.log("Member Data Response:", T.data),
          Array.isArray(T.data) && T.data.length > 0)
        ) {
          const F = T.data.find((J) => J.memberID === R);
          F
            ? (d(F), m(F.loanType || ""), N(F.amount || "0"), v(F.total || "0"))
            : (d(null), m(""), N("0"), v("0"));
        } else
          console.error("Invalid member data format"),
            d(null),
            m(""),
            N("0"),
            v("0");
      } catch (T) {
        console.error("Error fetching member data:", T.message);
      }
    },
    k = (C) => {
      m(C.target.value), N(""), v("");
    },
    E = (C) => {
      const R = +C.target.value;
      let T = 0.15;
      if (!isNaN(R)) {
        const F = R + R * T;
        N(R), v(F.toFixed(2)), v(Math.ceil(F));
      }
    },
    b = async () => {
      try {
        const C = await $.post(uj, {
          memberID: s,
          loanID: n,
          OLmobile: i.OLmobile,
          selectedMember: i,
          loanType: Kt[u],
          OLamount: p,
          OLtotal: g,
        });
        C.status === 200 || C.status === 201
          ? (h("Successfully submitted!"),
            console.log("Response from server:", C.data),
            t(e + 1),
            r(f()),
            a(""),
            r(""),
            d(null),
            m(""),
            N(""),
            v(""),
            setTimeout(() => {
              window.location.reload();
            }, 2e3))
          : (console.error("Unexpected response status:", C.status),
            h(`Error: Unexpected response status ${C.status}`));
      } catch (C) {
        console.error("Error submitting form:", C.message),
          C.response && console.error("Server response data:", C.response.data),
          h(`Error: ${C.message}`);
      }
    };
  return l.jsx("div", {
    className: "bg-light  mt-2",
    children: l.jsx("div", {
      children: l.jsxs("div", {
        className: "mt-2 p-2",
        children: [
          l.jsx("div", {
            className: " ",
            children: l.jsx("div", {
              className: " border-bottom mb-3 ",
              children: l.jsx("h2", {
                className: "text-center   mb-4 pt-3",
                children: "ঋণ বিতরণ",
              }),
            }),
          }),
          l.jsxs("div", {
            className: "mb-3 row",
            children: [
              l.jsxs("div", {
                className: "col-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "memberID",
                    className: "form-label",
                    children: "Member ID:",
                  }),
                  l.jsx("input", {
                    type: "text",
                    id: "memberID",
                    className: "form-control",
                    value: s,
                    onChange: x,
                    placeholder: "Enter Member ID",
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "mb-3 col-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "loanID",
                    className: "form-label",
                    children: "Loan ID:",
                  }),
                  l.jsx("input", {
                    id: "loanID",
                    className: "form-control",
                    type: "text",
                    value: n,
                    disabled: !0,
                  }),
                ],
              }),
              i &&
                l.jsxs("div", {
                  className: "mt-3 row",
                  children: [
                    l.jsxs("div", {
                      className: "col-2",
                      children: [
                        l.jsx("label", {
                          htmlFor: "OLname",
                          className: "form-label",
                          children: "নাম",
                        }),
                        l.jsx("input", {
                          type: "text",
                          id: "OLname",
                          className: "form-control",
                          value: i.memberName,
                          readOnly: !0,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "col-2",
                      children: [
                        l.jsx("label", {
                          htmlFor: "fathername",
                          className: "form-label",
                          children: "পিতা/স্বামী",
                        }),
                        l.jsx("input", {
                          type: "text",
                          id: "fathername",
                          className: "form-control",
                          value: i.MfhName,
                          readOnly: !0,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "col-2",
                      children: [
                        l.jsx("label", {
                          htmlFor: "OLbranch",
                          className: "form-label",
                          children: "শাঁখা",
                        }),
                        l.jsx("input", {
                          type: "text",
                          id: "OLbranch",
                          className: "form-control",
                          value: i.BranchMember,
                          readOnly: !0,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "col-3",
                      children: [
                        l.jsx("label", {
                          htmlFor: "OLcenter",
                          className: "form-label",
                          children: "কেন্দ্র",
                        }),
                        l.jsx("input", {
                          type: "text",
                          id: "OLcenter",
                          className: "form-control",
                          value: i.CenterMember,
                          readOnly: !0,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "col-3",
                      children: [
                        l.jsx("label", {
                          htmlFor: "OLmobile",
                          className: "form-label",
                          children: "মোবাইল:",
                        }),
                        l.jsx("input", {
                          type: "number",
                          id: "OLmobile",
                          className: "form-control",
                          value: i.MemberMobile,
                          readOnly: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              l.jsxs("div", {
                className: "row mt-5",
                children: [
                  l.jsxs("div", {
                    className: "mb-3 col-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "loanType",
                        className: "form-label",
                        children: "ঋণের ধরণ",
                      }),
                      l.jsxs("select", {
                        id: "loanType",
                        className: "form-select",
                        onChange: k,
                        value: u,
                        children: [
                          l.jsx("option", {
                            value: "",
                            children: "বাছাই করুণ",
                          }),
                          l.jsx("option", {
                            value: "normal",
                            children: Kt.normal,
                          }),
                          l.jsx("option", {
                            value: "tubewell",
                            children: Kt.tubewell,
                          }),
                          l.jsx("option", {
                            value: "farmer",
                            children: Kt.farmer,
                          }),
                          l.jsx("option", { value: "sme", children: Kt.sme }),
                          l.jsx("option", {
                            value: "emergency",
                            children: Kt.emergency,
                          }),
                          l.jsx("option", {
                            value: "disaster",
                            children: Kt.disaster,
                          }),
                          l.jsx("option", {
                            value: "daily",
                            children: Kt.daily,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "OLamount",
                        className: "form-label",
                        children: "ঋণের পরিমাণ",
                      }),
                      l.jsx("input", {
                        type: "number",
                        id: "OLamount",
                        className: "form-control",
                        value: p,
                        onChange: E,
                        placeholder: "Enter Amount",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3 col-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "OLtotal",
                        className: "form-label",
                        children: "মোট টাকা",
                      }),
                      l.jsx("input", {
                        type: "text",
                        id: "OLtotal",
                        className: "form-control",
                        value: g,
                        readOnly: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "mb-3",
                children: l.jsx("button", {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: b,
                  children: "Submit",
                }),
              }),
              j &&
                l.jsx("div", {
                  className: "alert alert-success",
                  role: "alert",
                  children: j,
                }),
            ],
          }),
        ],
      }),
    }),
  });
}
function mj() {
  var p, N;
  const [e, t] = y.useState(""),
    [n, r] = y.useState(null),
    [s, a] = y.useState({}),
    [o, c] = y.useState([]);
  y.useEffect(() => {
    $.get("http://localhost:9000/center-callback")
      .then((g) => {
        c(g.data);
      })
      .catch((g) => {
        console.error("Error fetching center data:", g);
      });
  }, []);
  const i = async (g) => {
      const v = g.target.value;
      t(v), r(null);
      try {
        const j = await $.get(
          `http://localhost:9000/loan-callback?center=${encodeURIComponent(v)}`
        );
        a((h) => ({ ...h, [v]: j.data }));
      } catch (j) {
        console.error("Error fetching loan data:", j);
      }
    },
    d = (g) => {
      r(g);
    },
    u = e && o[e] ? o[e].length : 0,
    m =
      e &&
      ((p = s[e]) == null
        ? void 0
        : p.reduce((g, v) => g + (v.OLamount || 0), 0));
  return l.jsxs("div", {
    className: "bg-light container-fluid",
    children: [
      l.jsx("div", {
        className: "row mb-5",
        children: l.jsx("h2", {
          className: "text-center mb-4 pt-4",
          children: "ঋণের তালিকা ",
        }),
      }),
      l.jsx("div", {
        className: "row",
        children: l.jsxs("div", {
          className: "col-md-3 mb-3",
          children: [
            l.jsx("label", {
              htmlFor: "CenterSelect",
              className: "form-label",
              children: "কেন্দ্র নির্বাচন করুণ",
            }),
            l.jsxs("select", {
              className: "form-select",
              id: "CenterSelect",
              onChange: i,
              value: e,
              children: [
                l.jsx("option", { value: "", children: "Choose..." }),
                o.map((g) =>
                  l.jsx(
                    "option",
                    { value: g.CenterName, children: g.CenterName },
                    g._id
                  )
                ),
              ],
            }),
          ],
        }),
      }),
      l.jsxs("div", {
        className: "table-responsive",
        children: [
          e &&
            l.jsxs("table", {
              className: "table table-hover",
              children: [
                l.jsx("thead", {
                  children: l.jsxs("tr", {
                    children: [
                      l.jsx("th", { children: "ID" }),
                      l.jsx("th", { children: "নাম" }),
                      l.jsx("th", { children: "সদস্য ID" }),
                      l.jsx("th", { children: "মোবাইল" }),
                      l.jsx("th", { children: "ঋণের ধরণ" }),
                      l.jsx("th", { children: "ঋণের পরিমাণ" }),
                      l.jsx("th", { children: "কর্মী" }),
                      l.jsx("th", { children: "পদক্ষেপ" }),
                    ],
                  }),
                }),
                l.jsx("tbody", {
                  children:
                    (N = s[e]) == null
                      ? void 0
                      : N.map((g) =>
                          l.jsxs(
                            "tr",
                            {
                              children: [
                                l.jsx("td", { children: g.loanID }),
                                l.jsx("td", { children: g.OLname }),
                                l.jsx("td", { children: g.memberID }),
                                l.jsx("td", { children: g.OLmobile }),
                                l.jsx("td", { children: g.loanType }),
                                l.jsx("td", { children: g.OLamount }),
                                l.jsx("td", { children: g.Worker }),
                                l.jsxs("td", {
                                  children: [
                                    l.jsx("button", {
                                      type: "button",
                                      className: "btn btn-primary btn-sm",
                                      onClick: () => d(g),
                                      children: "View",
                                    }),
                                    " ",
                                    l.jsx("button", {
                                      type: "button",
                                      className: "btn btn-warning btn-sm",
                                      onClick: () => console.log("Edit center"),
                                      children: "Edit",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g.loanID
                          )
                        ),
                }),
              ],
            }),
          n &&
            l.jsxs("div", {
              children: [
                l.jsx("div", {
                  className: "mb-5 ",
                  children: l.jsx("h2", {
                    className: "text-center mb-4 pt-4 ",
                    children: "নির্বাচিত ঋণের বিবরণ",
                  }),
                }),
                l.jsxs("div", {
                  className: "row",
                  children: [
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "Loan ID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.loanID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সদস্য ID",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.memberID,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সদস্যর নাম",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.OLname,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "সদস্য মোবাইল",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.OLmobile,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "ঋণের ধরণ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.loanType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "ঋণের পরিমাণ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.OLamount,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কিস্তির পরিমাণ",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.loanType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কিস্তি জমা",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.loanType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("div", {
                      className: "col-3",
                      children: l.jsxs("div", {
                        className: "row g-3 align-items-center ",
                        children: [
                          l.jsx("div", {
                            className: "col-3",
                            children: l.jsx("label", {
                              className: "col-form-label",
                              children: "কিস্তি বাকি",
                            }),
                          }),
                          l.jsx("div", {
                            className: "col-md-6",
                            children: l.jsx("input", {
                              className: "form-control",
                              value: n.loanType,
                              readOnly: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          l.jsxs("div", {
            className: "mt-4",
            children: [
              l.jsxs("p", { children: ["মোট সদস্য: ", u, " জন"] }),
              l.jsxs("p", { children: ["মোট ঋণের পরিমাণ: ", m, " টাকা"] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const fj = "http://localhost:9000/opensaving",
  Jl = { General: "সাধারণ", Meyadi: "মেয়াদি", NonMeyadi: "এককালিন" };
function hj() {
  const [e, t] = y.useState("General"),
    [n, r] = y.useState(""),
    [s, a] = y.useState([]),
    [o, c] = y.useState(null),
    [i, d] = y.useState(""),
    [u, m] = y.useState(0),
    [p, N] = y.useState(""),
    [g, v] = y.useState(""),
    [j, h] = y.useState("6");
  y.useEffect(() => {
    (async () => {
      try {
        const b = await $.get("http://localhost:9000/member-callback");
        console.log("Member Data Response:", b.data), a(b.data.members);
      } catch (b) {
        console.error("Error fetching member data:", b.message);
      }
    })();
  }, []),
    y.useEffect(() => {
      u !== void 0 && N(f(u));
    }, [u]);
  const f = (E) => `L${E !== void 0 ? E.toString().padStart(4, "0") : ""}`,
    x = async (E) => {
      const b = E.target.value;
      console.log("Entered Member ID:", b), r(b);
      try {
        const C = await $.get("http://localhost:9000/member-callback");
        if (
          (console.log("Member Data Response:", C.data),
          Array.isArray(C.data) && C.data.length > 0)
        ) {
          const R = C.data.find((T) => T.memberID === b);
          R ? (c(R), t(R.savingsType || "General")) : (c(null), t("General"));
        } else
          console.error("Invalid member data format"), c(null), t("General");
      } catch (C) {
        console.error("Error fetching member data:", C.message);
      }
    };
  y.useEffect(() => {
    if (!s || s.length === 0) return;
    const E = s.find((b) => b.memberID === n);
    console.log("Fetched Member:", E), c(E || null);
  }, [s, n]);
  const k = async () => {
    try {
      const E = await $.post(fj, {
        memberID: n,
        savingID: p,
        selectedMember: o,
        Samount: g,
        savingType: Jl[e],
        timePeriod: e === "Meyadi" ? j : void 0,
      });
      E.status === 200 || E.status === 201
        ? (d("Successfully submitted!"),
          console.log("Response from server:", E.data),
          m(u + 1),
          N(f()),
          r(""),
          N(""),
          c(null),
          v(""),
          setTimeout(() => {
            window.location.reload();
          }, 2e3))
        : (console.error("Unexpected response status:", E.status),
          d(`Error: Unexpected response status ${E.status}`));
    } catch (E) {
      console.error("Error submitting form:", E.message),
        E.response && console.error("Server response data:", E.response.data),
        d(`Error: ${E.message}`);
    }
  };
  return l.jsxs("div", {
    className: "bg-light mt-2 p-3",
    children: [
      l.jsx("div", {
        className: "p-2",
        children: l.jsx("div", {
          className: "border-bottom mb-5",
          children: l.jsx("h2", {
            className: "text-center mb-4 pt-3",
            children: "সঞ্চয় খুলুন",
          }),
        }),
      }),
      l.jsxs("div", {
        className: "mb-3 col-3",
        children: [
          l.jsx("label", {
            htmlFor: "memberID",
            className: "form-label",
            children: "Member ID:",
          }),
          l.jsx("input", {
            type: "text",
            id: "memberID",
            className: "form-control",
            value: n,
            onChange: x,
            placeholder: "Enter Member ID",
          }),
        ],
      }),
      l.jsxs("div", {
        className: "mb-3 col-3",
        children: [
          l.jsx("label", {
            htmlFor: "savingID",
            className: "form-label",
            children: "Loan ID:",
          }),
          l.jsx("input", {
            id: "savingID",
            className: "form-control",
            type: "text",
            value: p,
            disabled: !0,
          }),
        ],
      }),
      o &&
        l.jsxs("div", {
          className: "mt-3 row",
          children: [
            l.jsxs("div", {
              className: "col-2",
              children: [
                l.jsx("label", {
                  htmlFor: "OSname",
                  className: "form-label",
                  children: "নাম",
                }),
                l.jsx("input", {
                  type: "text",
                  id: "OSname",
                  className: "form-control",
                  value: o.memberName,
                  readOnly: !0,
                }),
              ],
            }),
            l.jsxs("div", {
              className: "col-2",
              children: [
                l.jsx("label", {
                  htmlFor: "fathername",
                  className: "form-label",
                  children: "পিতা/স্বামী",
                }),
                l.jsx("input", {
                  type: "text",
                  id: "fathername",
                  className: "form-control",
                  value: o.MfhName,
                  readOnly: !0,
                }),
              ],
            }),
            l.jsxs("div", {
              className: "col-2",
              children: [
                l.jsx("label", {
                  htmlFor: "OSbranch",
                  className: "form-label",
                  children: "শাঁখা",
                }),
                l.jsx("input", {
                  type: "text",
                  id: "OSbranch",
                  className: "form-control",
                  value: o.BranchMember,
                  readOnly: !0,
                }),
              ],
            }),
            l.jsxs("div", {
              className: "col-3",
              children: [
                l.jsx("label", {
                  htmlFor: "OScenter",
                  className: "form-label",
                  children: "কেন্দ্র",
                }),
                l.jsx("input", {
                  type: "text",
                  id: "OScenter",
                  className: "form-control",
                  value: o.CenterMember,
                  readOnly: !0,
                }),
              ],
            }),
            l.jsxs("div", {
              className: "col-3",
              children: [
                l.jsx("label", {
                  htmlFor: "OSmobile",
                  className: "form-label",
                  children: "মোবাইল:",
                }),
                l.jsx("input", {
                  type: "number",
                  id: "OSmobile",
                  className: "form-control",
                  value: o.MemberMobile,
                  readOnly: !0,
                }),
              ],
            }),
          ],
        }),
      l.jsxs("div", {
        className: "row",
        children: [
          l.jsxs("div", {
            className: "mb-3 col",
            children: [
              l.jsx("label", {
                htmlFor: "savingType",
                className: "form-label",
                children: "Savings Type",
              }),
              l.jsxs("select", {
                id: "savingType",
                className: "form-select",
                value: e,
                onChange: (E) => t(E.target.value),
                children: [
                  l.jsx("option", { value: "General", children: Jl.General }),
                  l.jsx("option", { value: "Meyadi", children: Jl.Meyadi }),
                  l.jsx("option", {
                    value: "NonMeyadi",
                    children: Jl.NonMeyadi,
                  }),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            className: "col",
            children:
              e === "Meyadi" &&
              l.jsx("div", {
                children: l.jsxs("div", {
                  className: "mb-2",
                  children: [
                    l.jsx("label", {
                      htmlFor: "timePeriod",
                      className: "form-label",
                      children: "Time Period",
                    }),
                    l.jsxs("select", {
                      id: "timePeriod",
                      className: "form-select",
                      value: j,
                      onChange: (E) => h(E.target.value),
                      children: [
                        l.jsx("option", { value: "3", children: "3 Year" }),
                        l.jsx("option", { value: "5", children: "5 Year" }),
                        l.jsx("option", { value: "10", children: "10 Year" }),
                      ],
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
      l.jsxs("div", {
        className: "mb-3 col-4",
        children: [
          l.jsx("label", {
            htmlFor: "Samount",
            className: "form-label",
            children: "সঞ্চয়ের পরিমাণ",
          }),
          l.jsx("input", {
            type: "number",
            id: "Samount",
            className: "form-control",
            value: g,
            onChange: (E) => v(E.target.value),
            placeholder: "Enter Amount",
          }),
        ],
      }),
      l.jsx("div", {
        className: "mb-2",
        children: l.jsx("button", {
          type: "submit",
          className: "btn btn-primary",
          onClick: k,
          children: "Submit",
        }),
      }),
      i &&
        l.jsx("div", {
          className: "alert alert-success",
          role: "alert",
          children: i,
        }),
    ],
  });
}
const pj = () => {
  const [e, t] = y.useState(""),
    [n, r] = y.useState([]),
    [s, a] = y.useState([{ member: "", amount: "" }]),
    [o, c] = y.useState([]),
    i = {
      টাঙ্গাইল: ["John", "Jane", "Doe"],
      কালিহাতি: ["Alice", "Bob", "Charlie"],
      মধুপুর: ["David", "Eva", "Frank"],
      ভুয়াপুর: ["Grace", "Henry", "Ivy"],
    };
  y.useEffect(() => {
    (async () => {
      try {
        r(["টাঙ্গাইল", "কালিহাতি", "মধুপুর", "ভুয়াপুর"]);
      } catch (g) {
        console.error("Error fetching center data:", g);
      }
    })();
  }, []);
  const d = (N, g) => {
      const { name: v, value: j } = g.target,
        h = [...s];
      (h[N][v] = j), a(h), v === "member" && c(i[e] || []);
    },
    u = () => {
      a([...s, { member: "", amount: "" }]);
    },
    m = (N) => {
      const g = [...s];
      g.splice(N, 1), a(g);
    },
    p = (N) => {
      N.preventDefault(), console.log("Form Data:", s);
    };
  return l.jsxs("div", {
    className: "bg-light mt-2 p-3",
    children: [
      l.jsx("div", {
        className: "mb-5 ",
        children: l.jsx("h2", {
          className: "text-center mb-4 pt-4 ",
          children: "সঞ্চয় কালেকশন ",
        }),
      }),
      l.jsxs("form", {
        onSubmit: p,
        children: [
          l.jsxs("div", {
            className: "mb-3",
            children: [
              l.jsx("label", {
                htmlFor: "centerSelect",
                className: "form-label",
                children: "কেন্দ্র নির্বাচন করুণ",
              }),
              l.jsxs("select", {
                id: "centerSelect",
                className: "form-select",
                onChange: (N) => t(N.target.value),
                value: e,
                children: [
                  l.jsx("option", { value: "", children: "Choose..." }),
                  n.map((N) => l.jsx("option", { value: N, children: N }, N)),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            className: "mb-3",
            children: s.map((N, g) =>
              l.jsxs(
                "div",
                {
                  className: "mb-3 row",
                  children: [
                    l.jsxs("div", {
                      className: "col-4",
                      children: [
                        l.jsx("label", {
                          htmlFor: `member-${g}`,
                          children: "সদস্য",
                        }),
                        l.jsx("input", {
                          type: "text",
                          name: "member",
                          value: N.member,
                          onChange: (v) => d(g, v),
                          className: "form-control",
                          id: `member-${g}`,
                          list: `members-${g}`,
                        }),
                        l.jsx("datalist", {
                          id: `members-${g}`,
                          children: o.map((v) =>
                            l.jsx("option", { value: v }, v)
                          ),
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "col-4",
                      children: [
                        l.jsx("label", {
                          htmlFor: `amount-${g}`,
                          children: "সঞ্চয় (টাকা)",
                        }),
                        l.jsx("input", {
                          type: "number",
                          name: "amount",
                          value: N.amount,
                          onChange: (v) => d(g, v),
                          className: "form-control",
                          id: `amount-${g}`,
                        }),
                      ],
                    }),
                    l.jsx("div", {
                      className: "col-4",
                      children: l.jsx("button", {
                        type: "button",
                        className: "btn btn-danger mt-3",
                        onClick: () => m(g),
                        children: "Remove",
                      }),
                    }),
                  ],
                },
                g
              )
            ),
          }),
          l.jsx("div", {
            className: "col-12 mb-3 mt-3",
            children: l.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: u,
              children: "Add",
            }),
          }),
          l.jsx("div", {
            className: "col-12 mb-3 mt-3",
            children: l.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              children: "Submit",
            }),
          }),
        ],
      }),
    ],
  });
};
function vj() {
  var u;
  const [e, t] = y.useState(""),
    [n, r] = y.useState(null),
    [s, a] = y.useState({}),
    [o, c] = y.useState([]);
  y.useEffect(() => {
    $.get("http://localhost:9000/center-callback")
      .then((m) => {
        c(m.data);
      })
      .catch((m) => {
        console.error("Error fetching center data:", m);
      });
  }, []);
  const i = async (m) => {
      const p = m.target.value;
      t(p), r(null);
      try {
        const N = await $.get(
          `http://localhost:9000/saving-callback?center=${encodeURIComponent(
            p
          )}`
        );
        a((g) => ({ ...g, [p]: N.data }));
      } catch (N) {
        console.error("Error fetching loan data:", N);
      }
    },
    d = (m) => {
      r(m);
    };
  return l.jsx("div", {
    className: "bg-light mt-2",
    children: l.jsx("div", {
      className: " p-3 ",
      children: l.jsxs("div", {
        className: " row ",
        children: [
          l.jsx("div", {
            className: "mb-5 ",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-4 ",
              children: "সঞ্চয়ের তালিকা ",
            }),
          }),
          l.jsx("div", {
            className: "row",
            children: l.jsxs("div", {
              className: "col-md-3 mb-3",
              children: [
                l.jsx("label", {
                  htmlFor: "CenterSelect",
                  className: "form-label",
                  children: "কেন্দ্র নির্বাচন করুণ",
                }),
                l.jsxs("select", {
                  className: "form-select",
                  id: "CenterSelect",
                  onChange: i,
                  value: e,
                  children: [
                    l.jsx("option", { value: "", children: "Choose..." }),
                    o.map((m) =>
                      l.jsx(
                        "option",
                        { value: m.CenterName, children: m.CenterName },
                        m._id
                      )
                    ),
                  ],
                }),
              ],
            }),
          }),
          l.jsxs("div", {
            className: "table-responsive",
            children: [
              e &&
                l.jsxs("table", {
                  className: "  table table-hover ",
                  children: [
                    l.jsx("thead", {
                      children: l.jsxs("tr", {
                        children: [
                          l.jsx("th", { children: "ID" }),
                          l.jsx("th", { children: "নাম" }),
                          l.jsx("th", { children: "সদস্য ID" }),
                          l.jsx("th", { children: "মোবাইল" }),
                          l.jsx("th", { children: "সঞ্চয়ের ধরণ" }),
                          l.jsx("th", { children: "কর্মী" }),
                          l.jsx("th", { children: "পদক্ষেপ" }),
                        ],
                      }),
                    }),
                    l.jsx("tbody", {
                      children:
                        (u = s[e]) == null
                          ? void 0
                          : u.map((m) =>
                              l.jsxs(
                                "tr",
                                {
                                  children: [
                                    l.jsx("td", { children: m.savingID }),
                                    l.jsx("td", { children: m.OSname }),
                                    l.jsx("td", { children: m.memberID }),
                                    l.jsx("td", { children: m.OSmobile }),
                                    l.jsx("td", { children: m.savingType }),
                                    l.jsx("td", { children: m.Worker }),
                                    l.jsxs("td", {
                                      children: [
                                        l.jsx("button", {
                                          type: "button",
                                          className: "btn btn-primary btn-sm",
                                          onClick: () => d(m),
                                          children: "View",
                                        }),
                                        l.jsx("button", {
                                          type: "button",
                                          className: "btn btn-warning btn-sm",
                                          onClick: () =>
                                            console.log("Edit center"),
                                          children: "Edit",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                m.savingID
                              )
                            ),
                    }),
                  ],
                }),
              n &&
                l.jsxs("div", {
                  children: [
                    l.jsx("div", {
                      className: "mb-5 ",
                      children: l.jsx("h2", {
                        className: "text-center mb-4 pt-4 ",
                        children: "নির্বাচিত সঞ্চয়ের বিবরণ",
                      }),
                    }),
                    l.jsxs("div", {
                      className: "row",
                      children: [
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "Saving ID",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.savingID,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "সদস্য ID",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.memberID,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "সদস্যর নাম",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.OSname,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "সদস্য মোবাইল",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.OSmobile,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "সঞ্চয়ের ধরণ",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.savingType,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("div", {
                          className: "col-3",
                          children: l.jsxs("div", {
                            className: "row g-3 align-items-center ",
                            children: [
                              l.jsx("div", {
                                className: "col-3",
                                children: l.jsx("label", {
                                  className: "col-form-label",
                                  children: "সঞ্চয়ের পরিমাণ",
                                }),
                              }),
                              l.jsx("div", {
                                className: "col-md-6",
                                children: l.jsx("input", {
                                  className: "form-control",
                                  value: n.Samount,
                                  readOnly: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    }),
  });
}
const gj = () => l.jsx("div", {}),
  td = [
    { id: 1, name: "কামাল", currentCenter: "Center A" },
    { id: 2, name: "জামাল 2", currentCenter: "Center B" },
    { id: 3, name: "সুমন 3", currentCenter: "Center C" },
  ],
  xj = ["Center A", "Center B", "Center C", "Center D", "Center E"];
function yj() {
  const [e, t] = y.useState(null),
    [n, r] = y.useState("");
  y.useEffect(() => {
    r("");
  }, [e]);
  const s = (c) => {
      const i = c.target.value,
        d = td.find((u) => u.id === Number(i));
      t(d);
    },
    a = (c) => {
      r(c.target.value);
    },
    o = () => {
      e && n && console.log(`Transfer worker ${e.name} to ${n}`);
    };
  return l.jsx("div", {
    children: l.jsx("div", {
      children: l.jsxs("div", {
        className: "  mt-2 bg-light",
        children: [
          l.jsx("div", {
            className: "mb-5 ",
            children: l.jsx("h2", {
              className: "text-center mb-4 pt-4 ",
              children: "কর্মী ট্র্যান্সফার করুণ ",
            }),
          }),
          l.jsx("form", {
            className: " bg-light ",
            children: l.jsxs("div", {
              className: "row g-4 p-2",
              children: [
                l.jsxs("div", {
                  className: "mb-3 col-4",
                  children: [
                    l.jsx("label", {
                      htmlFor: "workerInput",
                      className: "form-label",
                      children: "কর্মী নির্বাচন করুণ",
                    }),
                    l.jsx("input", {
                      type: "text",
                      id: "workerInput",
                      className: "form-control",
                      placeholder: "Type worker name or ID",
                      list: "workerList",
                      onChange: s,
                    }),
                    l.jsx("datalist", {
                      id: "workerList",
                      children: td.map((c) =>
                        l.jsx("option", { value: c.id, children: c.name }, c.id)
                      ),
                    }),
                  ],
                }),
                e &&
                  l.jsxs("div", {
                    className: "mb-3 col-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "currentCenter",
                        className: "form-label",
                        children: "বর্তমান কেন্দ্র",
                      }),
                      l.jsx("input", {
                        type: "text",
                        id: "currentCenter",
                        className: "form-control",
                        value: e.currentCenter,
                        readOnly: !0,
                      }),
                    ],
                  }),
                e &&
                  l.jsxs("div", {
                    className: "mb-3 col-4",
                    children: [
                      l.jsx("label", {
                        htmlFor: "transferCenter",
                        className: "form-label",
                        children: "কেন্দ্র পরিবর্তন",
                      }),
                      l.jsxs("select", {
                        id: "transferCenter",
                        className: "form-select",
                        value: n,
                        onChange: a,
                        children: [
                          l.jsx("option", { value: "", children: "Choose..." }),
                          xj.map((c) =>
                            l.jsx("option", { value: c, children: c }, c)
                          ),
                        ],
                      }),
                    ],
                  }),
                e &&
                  n &&
                  l.jsx("button", {
                    type: "button",
                    className: "btn btn-primary mt-3",
                    onClick: o,
                    children: "Transfer",
                  }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const qa = {
    টাঙ্গাইল: {
      id: 1,
      worker: "কামাল",
      monthlyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "Normal",
          amount: 50,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Medium",
          amount: 70,
        },
      ],
      weeklyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "High",
          amount: 20,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Normal",
          amount: 30,
        },
      ],
    },
    কালিহাতি: {
      id: 3,
      worker: "সুমন",
      monthlyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "Normal",
          amount: 50,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Medium",
          amount: 70,
        },
      ],
      weeklyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "High",
          amount: 20,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Normal",
          amount: 30,
        },
      ],
    },
    ঘাটাইল: {
      id: 2,
      worker: "জামিল",
      monthlyInstallments: [
        {
          id: 3,
          memberName: "মোঃ করিম",
          mobile: "1112223333",
          loanType: "High",
          amount: 80,
        },
        {
          id: 4,
          memberName: "মোঃ রহিম",
          mobile: "4445556666",
          loanType: "Medium",
          amount: 60,
        },
      ],
      weeklyInstallments: [
        {
          id: 3,
          memberName: "মোঃ করিম",
          mobile: "1112223333",
          loanType: "Normal",
          amount: 40,
        },
        {
          id: 4,
          memberName: "মোঃ রহিম",
          mobile: "4445556666",
          loanType: "High",
          amount: 25,
        },
      ],
    },
  },
  jj = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(""),
      [s, a] = y.useState([]),
      [o, c] = y.useState([]);
    return (
      y.useEffect(() => {
        if (e && qa[e]) {
          const {
            worker: i,
            monthlyInstallments: d,
            weeklyInstallments: u,
          } = qa[e];
          r(i), a(d), c(u);
        }
      }, [e]),
      l.jsxs("div", {
        className: " bg-light mt-2",
        children: [
          l.jsx("h2", {
            className: "text-center mb-4 pt-4",
            children: "কিস্তির তালিকা",
          }),
          l.jsxs("div", {
            className: "row p-3",
            children: [
              l.jsxs("div", {
                className: "col-md-3 mb-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "centerSelect",
                    className: "form-label",
                    children: "কেন্দ্র নির্বাচন করুণ",
                  }),
                  l.jsxs("select", {
                    className: "form-select",
                    id: "centerSelect",
                    onChange: (i) => t(i.target.value),
                    value: e,
                    children: [
                      l.jsx("option", { value: "", children: "Choose..." }),
                      Object.keys(qa).map((i) =>
                        l.jsx("option", { value: i, children: i }, i)
                      ),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3 col-3 ",
                children: [
                  l.jsx("label", {
                    className: "form-label",
                    children: "কর্মী",
                  }),
                  l.jsx("label", { htmlFor: "name", className: "form-label" }),
                  l.jsx("input", {
                    type: "text",
                    id: "name",
                    className: "form-control",
                    value: n,
                    readOnly: !0,
                  }),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            className: " mt-4 table-responsive p-3",
            children: l.jsxs("div", {
              className: "col-md-6 table table-hover mb-5",
              children: [
                l.jsx("h3", {
                  className: "text-center",
                  children: "মাসিক কিস্তি",
                }),
                l.jsxs("table", {
                  className: "table table-hover",
                  children: [
                    l.jsx("thead", {
                      children: l.jsxs("tr", {
                        children: [
                          l.jsx("th", { children: "ID" }),
                          l.jsx("th", { children: "নাম" }),
                          l.jsx("th", { children: "মোবাইল" }),
                          l.jsx("th", { children: "ঋণের ধরণ" }),
                          l.jsx("th", { children: "কিস্তি" }),
                        ],
                      }),
                    }),
                    l.jsx("tbody", {
                      children: s.map((i) =>
                        l.jsxs(
                          "tr",
                          {
                            children: [
                              l.jsx("td", { children: i.id }),
                              l.jsx("td", { children: i.memberName }),
                              l.jsx("td", { children: i.mobile }),
                              l.jsx("td", { children: i.loanType }),
                              l.jsx("td", { children: i.amount }),
                            ],
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          l.jsxs("div", {
            className: "col-md-6 table table-hover mt-5 p-3",
            children: [
              l.jsx("h3", {
                className: "text-center",
                children: "সাপ্তাহিক কিস্তি",
              }),
              l.jsxs("table", {
                className: "table table-hover",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", { children: "ID" }),
                        l.jsx("th", { children: "নাম" }),
                        l.jsx("th", { children: "মোবাইল" }),
                        l.jsx("th", { children: "ঋণের ধরণ" }),
                        l.jsx("th", { children: "কিস্তি" }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    children: o.map((i) =>
                      l.jsxs(
                        "tr",
                        {
                          children: [
                            l.jsx("td", { children: i.id }),
                            l.jsx("td", { children: i.memberName }),
                            l.jsx("td", { children: i.mobile }),
                            l.jsx("td", { children: i.loanType }),
                            l.jsx("td", { children: i.amount }),
                          ],
                        },
                        i.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Nj = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState([]),
      [s, a] = y.useState([{ member: "", amount: "" }]),
      [o, c] = y.useState([]),
      i = {
        টাঙ্গাইল: ["John", "Jane", "Doe"],
        কালিহাতি: ["Alice", "Bob", "Charlie"],
        মধুপুর: ["David", "Eva", "Frank"],
        ভুয়াপুর: ["Grace", "Henry", "Ivy"],
      };
    y.useEffect(() => {
      (async () => {
        try {
          r(["টাঙ্গাইল", "কালিহাতি", "মধুপুর", "ভুয়াপুর"]);
        } catch (g) {
          console.error("Error fetching center data:", g);
        }
      })();
    }, []);
    const d = (N, g) => {
        const { name: v, value: j } = g.target,
          h = [...s];
        (h[N][v] = j), a(h), v === "member" && c(i[e] || []);
      },
      u = () => {
        a([...s, { member: "", amount: "" }]);
      },
      m = (N) => {
        const g = [...s];
        g.splice(N, 1), a(g);
      },
      p = (N) => {
        N.preventDefault(), console.log("Form Data:", s);
      };
    return l.jsxs("div", {
      className: "bg-light mt-2 p-3",
      children: [
        l.jsx("div", {
          className: "mb-5 ",
          children: l.jsx("h2", {
            className: "text-center mb-4 pt-4 ",
            children: "ঋণ কালেকশন ",
          }),
        }),
        l.jsxs("form", {
          onSubmit: p,
          children: [
            l.jsxs("div", {
              className: "mb-3",
              children: [
                l.jsx("label", {
                  htmlFor: "centerSelect",
                  className: "form-label",
                  children: "কেন্দ্র নির্বাচন করুণ",
                }),
                l.jsxs("select", {
                  id: "centerSelect",
                  className: "form-select",
                  onChange: (N) => t(N.target.value),
                  value: e,
                  children: [
                    l.jsx("option", { value: "", children: "Choose..." }),
                    n.map((N) => l.jsx("option", { value: N, children: N }, N)),
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "mb-3",
              children: s.map((N, g) =>
                l.jsxs(
                  "div",
                  {
                    className: "mb-3 row",
                    children: [
                      l.jsxs("div", {
                        className: "col-4",
                        children: [
                          l.jsx("label", {
                            htmlFor: `member-${g}`,
                            children: "সদস্য",
                          }),
                          l.jsx("input", {
                            type: "text",
                            name: "member",
                            value: N.member,
                            onChange: (v) => d(g, v),
                            className: "form-control",
                            id: `member-${g}`,
                            list: `members-${g}`,
                          }),
                          l.jsx("datalist", {
                            id: `members-${g}`,
                            children: o.map((v) =>
                              l.jsx("option", { value: v }, v)
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "col-4",
                        children: [
                          l.jsx("label", {
                            htmlFor: `amount-${g}`,
                            children: "কিস্তি (টাকা)",
                          }),
                          l.jsx("input", {
                            type: "number",
                            name: "amount",
                            value: N.amount,
                            onChange: (v) => d(g, v),
                            className: "form-control",
                            id: `amount-${g}`,
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "col-4",
                        children: l.jsx("button", {
                          type: "button",
                          className: "btn btn-danger mt-3",
                          onClick: () => m(g),
                          children: "Remove",
                        }),
                      }),
                    ],
                  },
                  g
                )
              ),
            }),
            l.jsx("div", {
              className: "col-12 mb-3 mt-3",
              children: l.jsx("button", {
                type: "button",
                className: "btn btn-primary",
                onClick: u,
                children: "Add",
              }),
            }),
            l.jsx("div", {
              className: "col-12 mb-3 mt-3",
              children: l.jsx("button", {
                type: "submit",
                className: "btn btn-primary",
                children: "Submit",
              }),
            }),
          ],
        }),
      ],
    });
  },
  Qa = {
    টাঙ্গাইল: {
      id: 1,
      worker: "কামাল",
      monthlyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "Normal",
          amount: 50,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Medium",
          amount: 70,
        },
      ],
      weeklyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "High",
          amount: 20,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Normal",
          amount: 30,
        },
      ],
    },
    কালিহাতি: {
      id: 3,
      worker: "সুমন",
      monthlyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "Normal",
          amount: 50,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Medium",
          amount: 70,
        },
      ],
      weeklyInstallments: [
        {
          id: 1,
          memberName: "মোঃ আলী",
          mobile: "1234567890",
          loanType: "High",
          amount: 20,
        },
        {
          id: 2,
          memberName: "মোঃ ববু",
          mobile: "9876543210",
          loanType: "Normal",
          amount: 30,
        },
      ],
    },
    ঘাটাইল: {
      id: 2,
      worker: "জামিল",
      monthlyInstallments: [
        {
          id: 3,
          memberName: "মোঃ করিম",
          mobile: "1112223333",
          loanType: "High",
          amount: 80,
        },
        {
          id: 4,
          memberName: "মোঃ রহিম",
          mobile: "4445556666",
          loanType: "Medium",
          amount: 60,
        },
      ],
      weeklyInstallments: [
        {
          id: 3,
          memberName: "মোঃ করিম",
          mobile: "1112223333",
          loanType: "Normal",
          amount: 40,
        },
        {
          id: 4,
          memberName: "মোঃ রহিম",
          mobile: "4445556666",
          loanType: "High",
          amount: 25,
        },
      ],
    },
  },
  bj = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(""),
      [s, a] = y.useState([]),
      [o, c] = y.useState([]);
    return (
      y.useEffect(() => {
        if (e && Qa[e]) {
          const {
            worker: i,
            monthlyInstallments: d,
            weeklyInstallments: u,
          } = Qa[e];
          r(i), a(d), c(u);
        }
      }, [e]),
      l.jsxs("div", {
        className: " bg-light mt-2",
        children: [
          l.jsx("h2", {
            className: "text-center mb-4 pt-4",
            children: "সঞ্চয়ের তালিকা",
          }),
          l.jsxs("div", {
            className: "row p-3",
            children: [
              l.jsxs("div", {
                className: "col-md-3 mb-3",
                children: [
                  l.jsx("label", {
                    htmlFor: "centerSelect",
                    className: "form-label",
                    children: "কেন্দ্র নির্বাচন করুণ",
                  }),
                  l.jsxs("select", {
                    className: "form-select",
                    id: "centerSelect",
                    onChange: (i) => t(i.target.value),
                    value: e,
                    children: [
                      l.jsx("option", { value: "", children: "Choose..." }),
                      Object.keys(Qa).map((i) =>
                        l.jsx("option", { value: i, children: i }, i)
                      ),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "col-md-3 col-3 ",
                children: [
                  l.jsx("label", {
                    className: "form-label",
                    children: "কর্মী",
                  }),
                  l.jsx("label", { htmlFor: "name", className: "form-label" }),
                  l.jsx("input", {
                    type: "text",
                    id: "name",
                    className: "form-control",
                    value: n,
                    readOnly: !0,
                  }),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            className: " mt-4 table-responsive p-3",
            children: l.jsxs("div", {
              className: "col-md-6 table table-hover mb-5",
              children: [
                l.jsx("h3", {
                  className: "text-center",
                  children: "মাসিক সঞ্চয়",
                }),
                l.jsxs("table", {
                  className: "table table-hover",
                  children: [
                    l.jsx("thead", {
                      children: l.jsxs("tr", {
                        children: [
                          l.jsx("th", { children: "ID" }),
                          l.jsx("th", { children: "নাম" }),
                          l.jsx("th", { children: "মোবাইল" }),
                          l.jsx("th", { children: "ঋণের ধরণ" }),
                          l.jsx("th", { children: "কিস্তি" }),
                        ],
                      }),
                    }),
                    l.jsx("tbody", {
                      children: s.map((i) =>
                        l.jsxs(
                          "tr",
                          {
                            children: [
                              l.jsx("td", { children: i.id }),
                              l.jsx("td", { children: i.memberName }),
                              l.jsx("td", { children: i.mobile }),
                              l.jsx("td", { children: i.loanType }),
                              l.jsx("td", { children: i.amount }),
                            ],
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          l.jsxs("div", {
            className: "col-md-6 table table-hover mt-5 p-3",
            children: [
              l.jsx("h3", {
                className: "text-center",
                children: "সাপ্তাহিক সঞ্চয়",
              }),
              l.jsxs("table", {
                className: "table table-hover",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", { children: "ID" }),
                        l.jsx("th", { children: "নাম" }),
                        l.jsx("th", { children: "মোবাইল" }),
                        l.jsx("th", { children: "ঋণের ধরণ" }),
                        l.jsx("th", { children: "কিস্তি" }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    children: o.map((i) =>
                      l.jsxs(
                        "tr",
                        {
                          children: [
                            l.jsx("td", { children: i.id }),
                            l.jsx("td", { children: i.memberName }),
                            l.jsx("td", { children: i.mobile }),
                            l.jsx("td", { children: i.loanType }),
                            l.jsx("td", { children: i.amount }),
                          ],
                        },
                        i.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  wj = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(""),
      [s, a] = y.useState(!1),
      [o, c] = y.useState(""),
      i = (p) => {
        t(p.target.value);
      },
      d = (p) => {
        r(p.target.value);
      },
      u = () => {
        a(!s);
      },
      m = (p) => {
        p.preventDefault(),
          e === "user@example.com" && n === "password"
            ? (console.log("Login successful"), c(""))
            : c("Invalid email or password");
      };
    return l.jsx("div", {
      className: "container mt-5",
      children: l.jsx("div", {
        className: "row justify-content-center",
        children: l.jsx("div", {
          className: "col-md-6",
          children: l.jsxs("div", {
            className: " shadow p-5",
            children: [
              l.jsx("h2", {
                className: "text-center mb-4",
                children: "Welcome Back JKSSBL",
              }),
              l.jsx("div", {
                className: "card-body",
                children:
                  o &&
                  l.jsx("div", {
                    className: "alert alert-danger",
                    role: "alert",
                    children: o,
                  }),
              }),
              l.jsxs("form", {
                onSubmit: m,
                children: [
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "username",
                        className: "form-label",
                        children: "Username/Mail/Phone",
                      }),
                      l.jsx("input", {
                        type: "text",
                        className: "form-control",
                        id: "username",
                        value: e,
                        onChange: i,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "password",
                        className: "form-label",
                        children: "Password",
                      }),
                      l.jsxs("div", {
                        className: "input-group",
                        children: [
                          l.jsx("input", {
                            type: s ? "text" : "password",
                            className: "form-control",
                            id: "password",
                            value: n,
                            onChange: d,
                            placeholder: "Enter your password",
                            required: !0,
                          }),
                          l.jsx("button", {
                            className: "btn btn-outline-secondary",
                            type: "button",
                            onClick: u,
                            children: s ? "Hide" : "Show",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx(me, {
                      to: "/forgot-password",
                      children: "Forgot Password?",
                    }),
                  }),
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "submit",
                      className: "btn btn-primary w-100",
                      children: "Submit",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  nd = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(""),
      [s, a] = y.useState(""),
      [o, c] = y.useState(""),
      [i, d] = y.useState(""),
      [u, m] = y.useState(!1),
      [p, N] = y.useState(!1),
      [g, v] = y.useState(!1),
      j = "http://localhost:9000/signup",
      h = (T) => {
        t(T.target.value);
      },
      f = (T) => {
        r(T.target.value);
      },
      x = (T) => {
        a(T.target.value), m(T.target.value !== o);
      },
      k = (T) => {
        c(T.target.value), m(T.target.value !== s);
      },
      E = (T) => {
        d(T.target.value);
      },
      b = () => {
        N(!p);
      },
      C = () => {
        v(!g);
      },
      R = async (T) => {
        if (
          (T.preventDefault(), console.log("Submit button clicked"), s !== o)
        ) {
          m(!0), console.log("After form submission logic");
          return;
        }
        try {
          const F = await $.post(j, {
            phoneNumber: e,
            username: n,
            password: s,
            rank: i,
          });
          console.log("Response:", F.data),
            console.log("Phone Number:", e),
            console.log("Username:", n),
            console.log("Password:", s),
            console.log("Confirm Password:", o),
            console.log("Rank:", i),
            t(""),
            r(""),
            a(""),
            c(""),
            d(""),
            m(!1);
        } catch (F) {
          console.error("Error submitting the form:", F.response.data);
        }
      };
    return l.jsx("div", {
      className: "container mt-5",
      children: l.jsx("div", {
        className: "row justify-content-center",
        children: l.jsx("div", {
          className: "col-md-6",
          children: l.jsxs("div", {
            className: "card shadow p-5",
            children: [
              l.jsx("h2", {
                className: "text-center mb-4",
                children: "Account Create",
              }),
              l.jsxs("form", {
                onSubmit: R,
                children: [
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "phoneNumber",
                        className: "form-label",
                        children: "Phone Number",
                      }),
                      l.jsx("input", {
                        type: "number",
                        className: "form-control",
                        placeholder: "Your Phone Number",
                        id: "phoneNumber",
                        value: e,
                        onChange: h,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "username",
                        className: "form-label",
                        children: "Username",
                      }),
                      l.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Unique user name",
                        id: "username",
                        value: n,
                        onChange: f,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "password",
                        className: "form-label",
                        children: "Password",
                      }),
                      l.jsxs("div", {
                        className: "input-group",
                        children: [
                          l.jsx("input", {
                            type: p ? "text" : "password",
                            className: `form-control ${u ? "is-invalid" : ""}`,
                            id: "password",
                            placeholder: "mini 8 character",
                            value: s,
                            onChange: x,
                            minLength: "8",
                            required: !0,
                          }),
                          l.jsx("button", {
                            className: "btn btn-outline-secondary",
                            type: "button",
                            onClick: b,
                            children: p ? "Hide" : "Show",
                          }),
                        ],
                      }),
                      u &&
                        l.jsx("div", {
                          className: "invalid-feedback",
                          children: "Passwords do not match.",
                        }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "confirmPassword",
                        className: "form-label",
                        children: "Confirm Password",
                      }),
                      l.jsxs("div", {
                        className: "input-group",
                        children: [
                          l.jsx("input", {
                            type: g ? "text" : "password",
                            className: `form-control ${u ? "is-invalid" : ""}`,
                            id: "confirmPassword",
                            placeholder: "must be same password",
                            value: o,
                            onChange: k,
                            minLength: "8",
                            required: !0,
                          }),
                          l.jsx("button", {
                            className: "btn  btn-outline-secondary",
                            type: "button",
                            onClick: C,
                            children: g ? "Hide" : "Show",
                          }),
                        ],
                      }),
                      u &&
                        l.jsx("div", {
                          className: "invalid-feedback",
                          children: "Passwords do not match.",
                        }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "rank",
                        className: "form-label",
                        children: "পদ নির্বাচন করুণ",
                      }),
                      l.jsxs("select", {
                        className: "form-select",
                        id: "rank",
                        value: i,
                        onChange: E,
                        required: !0,
                        children: [
                          l.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Rank",
                          }),
                          l.jsx("option", {
                            value: "Captain",
                            children: "Captain",
                          }),
                          l.jsx("option", {
                            value: "Lieutenant",
                            children: "Lieutenant",
                          }),
                          l.jsx("option", {
                            value: "Sergeant",
                            children: "Sergeant",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "submit",
                      className: "btn btn-primary w-100",
                      children: "Submit",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  Sj = () => {
    const [e, t] = y.useState(""),
      n = (s) => {
        t(s.target.value);
      },
      r = (s) => {
        s.preventDefault(), console.log("Forgot Password - Email:", e), t("");
      };
    return l.jsx("div", {
      className: "container mt-5",
      children: l.jsx("div", {
        className: "row justify-content-center",
        children: l.jsx("div", {
          className: "col-md-6",
          children: l.jsxs("div", {
            className: "card shadow p-5",
            children: [
              l.jsx("h2", {
                className: "text-center mb-4",
                children: "Forgot Password",
              }),
              l.jsxs("form", {
                onSubmit: r,
                children: [
                  l.jsxs("div", {
                    className: "mb-3",
                    children: [
                      l.jsx("label", {
                        htmlFor: "email",
                        className: "form-label",
                        children: "Email",
                      }),
                      l.jsx("input", {
                        type: "email",
                        className: "form-control",
                        id: "email",
                        value: e,
                        onChange: n,
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "mb-3",
                    children: l.jsx("button", {
                      type: "submit",
                      className: "btn btn-primary w-100",
                      children: "Submit",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  Cj = ux([
    {
      path: "/",
      element: l.jsx(Cx, {}),
      children: [
        { path: "MemberAdmission", element: l.jsx(Ky, {}) },
        { path: "Dashboard", element: l.jsx(Jy, {}) },
        { path: "Login", element: l.jsx(wj, {}) },
        { path: "Signup", element: l.jsx(nd, {}) },
        { path: "forgot-password", element: l.jsx(Sj, {}) },
        { path: "WorkerDetails", element: l.jsx(Xy, {}) },
        { path: "WorkerAdd", element: l.jsx(Gy, {}) },
        { path: "WorkerTransfer", element: l.jsx(yj, {}) },
        { path: "CenterAdd", element: l.jsx(ej, {}) },
        { path: "CenterDetails", element: l.jsx(tj, {}) },
        { path: "MemberDetails", element: l.jsx(nj, {}) },
        { path: "BranchAdd", element: l.jsx(sj, {}) },
        { path: "BranchList", element: l.jsx(aj, {}) },
        { path: "OfficeCollection", element: l.jsx(cj, {}) },
        { path: "LoanOpen", element: l.jsx(dj, {}) },
        { path: "LoanDetails", element: l.jsx(mj, {}) },
        { path: "InstallmentDetails", element: l.jsx(jj, {}) },
        { path: "InstallmentCollection", element: l.jsx(Nj, {}) },
        { path: "SavingsOpen", element: l.jsx(hj, {}) },
        { path: "SavingsList", element: l.jsx(vj, {}) },
        { path: "SavingsCollection", element: l.jsx(pj, {}) },
        { path: "SavingsWithdraw", element: l.jsx(gj, {}) },
        { path: "CollectionList", element: l.jsx(bj, {}) },
        { path: "Auth-register", element: l.jsx(nd, {}) },
      ],
    },
    {},
  ]);
Ka.createRoot(document.getElementById("root")).render(
  l.jsx(fd.StrictMode, { children: l.jsx(yx, { router: Cj }) })
);
