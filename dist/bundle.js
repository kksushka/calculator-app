(() => {
  "use strict";
  var t = {
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, c = [], i = 0; i < t.length; i++) {
            var l = t[i],
              s = r.base ? l[0] + r.base : l[0],
              u = a[s] || 0,
              d = "".concat(s, " ").concat(u);
            a[s] = u + 1;
            var p = n(d),
              b = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(b);
            else {
              var f = o(b, r);
              (r.byIndex = i),
                e.splice(i, 0, { identifier: d, updater: f, references: 1 });
            }
            c.push(d);
          }
          return c;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var c = 0; c < a.length; c++) {
              var i = n(a[c]);
              e[i].references--;
            }
            for (var l = r(t, o), s = 0; s < a.length; s++) {
              var u = n(a[s]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            a = l;
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (c[l] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var u = [].concat(t[s]);
                (r && c[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      664: (t, e, n) => {
        n.d(e, { A: () => i });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          c = n.n(a)()(o());
        c.push([
          t.id,
          "*{margin:0;padding:0;box-sizing:border-box}:root{--bg: #1e1e1e;--calc-bg: #373636;--display-bg: #4d4c4c;--display-color: #fff;--btn-bg: #868383;--btn-color: #fff;--btn-func-bg: #666666;--btn-hover: #9a9696;--btn-func-hover: #777373}body{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;padding:20px;background:var(--bg);font-family:Arial,sans-serif}[data-theme=light]{--bg: #f2f2f2;--calc-bg: #ffffff;--display-bg: #ececec;--display-color: #000;--btn-bg: #d6d6d6;--btn-color: #000;--btn-func-bg: #bcbcbc;--btn-hover: #c4c4c4;--btn-func-hover: #a5a5a5}[data-theme=dark]{--bg: #1e1e1e;--calc-bg: #373636;--display-bg: #4d4c4c;--display-color: #fff;--btn-bg: #868383;--btn-color: #fff;--btn-func-bg: #666666;--btn-hover: #9a9696;--btn-func-hover: #777373}.calculator{max-width:300px;width:100%;background:var(--calc-bg);border-radius:15px;box-shadow:0 0 10px rgba(0,0,0,.2);overflow:hidden}.calculator__display{background:var(--display-bg);color:var(--display-color);font-size:2.5rem;padding:30px 15px 10px 10px;text-align:right;white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;min-height:90px}.calculator__display::-webkit-scrollbar{display:none}.calculator__buttons{display:grid;grid-template-columns:repeat(4, 1fr);gap:1px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:18px;font-size:1.2rem;border:none;cursor:pointer;transition:all ease .3s;min-height:65px}.calculator__buttons .btn{background:var(--btn-bg);color:var(--btn-color)}.calculator__buttons .btn:hover{background:var(--btn-hover)}.calculator__buttons .btn__func{background:var(--btn-func-bg);color:var(--btn-color)}.calculator__buttons .btn__func:hover{background:var(--btn-func-hover)}.calculator__buttons .btn__operator{background:#ff9500 !important;color:#fff !important}.calculator__buttons .btn__operator:hover{background:#ffaf6a !important}.calculator__buttons .zero{grid-column:span 2}.theme-switcher{margin-bottom:20px;display:flex;gap:10px}.theme-switcher button{padding:8px 16px;border-radius:6px;border:none;cursor:pointer;background:#ccc;transition:.3s}.theme-switcher button:hover{background:#bbb}@media(max-width: 768px){.calculator{max-width:280px}.calculator__display{font-size:2.2rem;padding:25px 12px 8px 0;min-height:80px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:16px;font-size:1.1rem;min-height:60px}}@media(max-width: 480px){.calculator{max-width:250px;border-radius:12px}.calculator__display{font-size:2rem;padding:20px 10px 5px 0;min-height:70px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:14px;font-size:1rem;min-height:55px}.theme-switcher{margin-bottom:15px}.theme-switcher button{padding:6px 12px;font-size:.9rem}}@media(max-width: 320px){.calculator{max-width:250px}.calculator__display{font-size:1.8rem;padding:15px 8px 5px 0;min-height:60px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:12px;font-size:.9rem;min-height:50px}}",
          "",
        ]);
        const i = c;
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0);
  var r = n(72),
    o = n.n(r),
    a = n(825),
    c = n.n(a),
    i = n(659),
    l = n.n(i),
    s = n(56),
    u = n.n(s),
    d = n(540),
    p = n.n(d),
    b = n(113),
    f = n.n(b),
    h = n(664),
    m = {};
  (m.styleTagTransform = f()),
    (m.setAttributes = u()),
    (m.insert = l().bind(null, "head")),
    (m.domAPI = c()),
    (m.insertStyleElement = p()),
    o()(h.A, m),
    h.A && h.A.locals && h.A.locals;
  const g = document.getElementById("display"),
    v = document.querySelectorAll(".btn, .btn__func, .btn__operator");
  let _ = "",
    x = !1;
  const y = (t) => {
      (g.textContent = t || "0"), (g.scrollLeft = g.scrollWidth);
    },
    w = { plus: "+", minus: "−", multiply: "×", divide: "÷" };
  v.forEach((t) => {
    t.addEventListener("click", () => {
      const { action: e } = t.dataset,
        n = t.textContent;
      if (!e) {
        if ((x && ((_ = ""), (x = !1)), "." === n && /\.\d*$/.test(_))) return;
        if (_.length >= 30) return;
        return (_ += n), void y(_);
      }
      const r = {
        clear: () => {
          (_ = ""), y("0");
        },
        sign: () => {
          const t = _.match(/(-?\d+(?:\.\d+)?)$/);
          if (t) {
            const e = t[0],
              n = _.slice(0, -e.length),
              r = e.startsWith("-") ? e.slice(1) : "-" + e;
            (_ = n + r), y(_);
          }
        },
        percent: () => {
          _.length >= 30 || ((_ += "%"), y(_));
        },
        equals: () => {
          if (_) {
            const t = ((t) => {
              if (!isFinite(t)) return "Error";
              if (Math.abs(t) > 1e10) return t.toExponential(7);
              let e = Number(t).toFixed(7);
              return (e = e.replace(/\.?0+$/, "")), e;
            })(
              ((t) => {
                const e = t
                  .replace(/(\d+(\.\d+)?)%/g, (t, e) => `(${e}/100)`)
                  .replace(/÷/g, "/")
                  .replace(/×/g, "*")
                  .replace(/−/g, "-");
                try {
                  return Function(`"use strict"; return (${e})`)();
                } catch {
                  return NaN;
                }
              })(_)
            );
            y(t), (_ = t), (x = !0);
          }
        },
      };
      r[e]
        ? r[e]()
        : w[e] &&
          (x && (x = !1), _ && !/[+\-*/÷×−]$/.test(_) && ((_ += w[e]), y(_)));
    });
  }),
    document.querySelectorAll(".theme-switcher button").forEach((t) => {
      t.addEventListener("click", () => {
        const e = "light-theme" === t.id ? "light" : "dark";
        document.body.setAttribute("data-theme", e),
          localStorage.setItem("theme", e);
      });
    });
  const k = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", k);
})();
