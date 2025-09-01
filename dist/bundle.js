(() => {
  "use strict";
  var t = {
      56: (t, e, r) => {
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var a = {}, c = [], i = 0; i < t.length; i++) {
            var l = t[i],
              s = n.base ? l[0] + n.base : l[0],
              u = a[s] || 0,
              d = "".concat(s, " ").concat(u);
            a[s] = u + 1;
            var p = r(d),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var b = o(f, n);
              (n.byIndex = i),
                e.splice(i, 0, { identifier: d, updater: b, references: 1 });
            }
            c.push(d);
          }
          return c;
        }
        function o(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
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
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = n((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var c = 0; c < a.length; c++) {
              var i = r(a[c]);
              e[i].references--;
            }
            for (var l = n(t, o), s = 0; s < a.length; s++) {
              var u = r(a[s]);
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
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var c = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (c[l] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var u = [].concat(t[s]);
                (n && c[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  r &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = r))
                      : (u[2] = r)),
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
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      664: (t, e, r) => {
        r.d(e, { A: () => i });
        var n = r(601),
          o = r.n(n),
          a = r(314),
          c = r.n(a)()(o());
        c.push([
          t.id,
          '*{margin:0;padding:0;box-sizing:border-box}:root{--bg: #1e1e1e;--calc-bg: #373636;--display-bg: #4d4c4c;--display-color: #fff;--btn-bg: #868383;--btn-color: #fff;--btn-func-bg: #666666;--btn-hover: #9a9696;--btn-func-hover: #777373}body{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;padding:20px;background:var(--bg);font-family:Arial,sans-serif}[data-theme=light]{--bg: #f2f2f2;--calc-bg: #ffffff;--display-bg: #ececec;--display-color: #000;--btn-bg: #d6d6d6;--btn-color: #000;--btn-func-bg: #bcbcbc;--btn-hover: #c4c4c4;--btn-func-hover: #a5a5a5}[data-theme=dark]{--bg: #1e1e1e;--calc-bg: #373636;--display-bg: #4d4c4c;--display-color: #fff;--btn-bg: #868383;--btn-color: #fff;--btn-func-bg: #666666;--btn-hover: #9a9696;--btn-func-hover: #777373}.calculator{max-width:300px;width:100%;background:var(--calc-bg);border-radius:15px;box-shadow:0 0 10px rgba(0,0,0,.2);overflow:hidden}.calculator__display{position:relative;background:var(--display-bg);color:var(--display-color);font-size:2.5rem;padding:30px 15px 10px 10px;text-align:right;white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;min-height:90px}.calculator__display::-webkit-scrollbar{display:none}.calculator__display::before{content:"";position:absolute;left:0;top:0;bottom:0;width:25px;background:linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent);opacity:0;transition:opacity .3s;pointer-events:none}.calculator__display.scrolled::before{opacity:1}.calculator__buttons{display:grid;grid-template-columns:repeat(4, 1fr);gap:1px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:18px;font-size:1.2rem;border:none;cursor:pointer;transition:all ease .3s;min-height:65px}.calculator__buttons .btn{background:var(--btn-bg);color:var(--btn-color)}.calculator__buttons .btn:hover{background:var(--btn-hover)}.calculator__buttons .btn__func{background:var(--btn-func-bg);color:var(--btn-color)}.calculator__buttons .btn__func:hover{background:var(--btn-func-hover)}.calculator__buttons .btn__operator{background:#ff9500;color:#fff}.calculator__buttons .btn__operator:hover{background:#ffaf6a}.calculator__buttons .zero{grid-column:span 2}.theme-switcher{margin-bottom:20px;display:flex;gap:10px}.theme-switcher button{padding:8px 16px;border-radius:6px;border:none;cursor:pointer;background:#ccc;transition:.3s}.theme-switcher button:hover{background:#bbb}.theme-switcher button.active{background:#ff9500}@media(max-width: 768px){.calculator{max-width:280px}.calculator__display{font-size:2.2rem;padding:25px 12px 8px 0;min-height:80px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:16px;font-size:1.1rem;min-height:60px}}@media(max-width: 480px){.calculator{max-width:250px;border-radius:12px}.calculator__display{font-size:2rem;padding:20px 10px 5px 0;min-height:70px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:14px;font-size:1rem;min-height:55px}.theme-switcher{margin-bottom:15px}.theme-switcher button{padding:6px 12px;font-size:.9rem}}@media(max-width: 320px){.calculator{max-width:250px}.calculator__display{font-size:1.8rem;padding:15px 8px 5px 0;min-height:60px}.calculator__buttons .btn,.calculator__buttons .btn__func,.calculator__buttons .btn__operator{padding:12px;font-size:.9rem;min-height:50px}}',
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
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
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
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = (e[n] = { id: n, exports: {} });
    return t[n](a, a.exports, r), a.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nc = void 0);
  var n = r(72),
    o = r.n(n),
    a = r(825),
    c = r.n(a),
    i = r(659),
    l = r.n(i),
    s = r(56),
    u = r.n(s),
    d = r(540),
    p = r.n(d),
    f = r(113),
    b = r.n(f),
    h = r(664),
    g = {};
  (g.styleTagTransform = b()),
    (g.setAttributes = u()),
    (g.insert = l().bind(null, "head")),
    (g.domAPI = c()),
    (g.insertStyleElement = p()),
    o()(h.A, g),
    h.A && h.A.locals && h.A.locals;
  const m = (t) =>
      t
        .replace(/(\.\d*?[1-9])0+$/u, "$1")
        .replace(/\.0+$/u, "")
        .replace(/\.$/u, ""),
    v = (t, e) => {
      const r = t < 0,
        n = String(r ? -t : t),
        [o, a = ""] = n.split(".");
      if (e <= 0) return (r ? "-" : "") + o;
      let c = (a + "000000000000").slice(0, e);
      return (r ? "-" : "") + o + (e > 0 ? "." + c : "");
    },
    _ = (t, e) => {
      (t.textContent = e || "0"),
        (t.scrollLeft = t.scrollWidth),
        t.scrollWidth > t.clientWidth
          ? t.classList.add("scrolled")
          : t.classList.remove("scrolled");
    },
    x = document.getElementById("display"),
    y = document.querySelectorAll(".btn, .btn__func, .btn__operator");
  let w = "",
    k = !1;
  const E = { plus: "+", minus: "−", multiply: "×", divide: "÷" },
    A = {
      clear: () => {
        (w = ""), _(x, "0");
      },
      sign: () => {
        const t = w.match(/(-?\d+(?:\.\d+)?)$/);
        if (t) {
          const e = t[0],
            r = w.slice(0, -e.length),
            n = e.startsWith("-") ? e.slice(1) : "-" + e;
          (w = r + n), _(x, w);
        }
      },
      percent: () => {
        w.length >= 30 || ((w += "%"), _(x, w));
      },
      equals: () => {
        if (w) {
          const t = ((t) => {
            if (!((t) => t !== 1 / 0 && t !== -1 / 0 && t == t)(t))
              return "Error";
            if (((t) => (t < 0 ? -t : t))(t) > 1e10) {
              let e = t,
                r = 0;
              const n = e < 0;
              if ((n && (e = -e), e >= 10))
                for (; e >= 10; ) (e /= 10), (r += 1);
              else if (e < 1) for (; e < 1; ) (e *= 10), (r -= 1);
              let o = v(e, 7);
              return (
                (o = m(o)), (n ? "-" : "") + o + "e" + (r >= 0 ? "+" : "") + r
              );
            }
            let e = v(t, 7);
            return m(e);
          })(
            ((t) => {
              let e = t
                .replace(/([\-−]?\d+(\.\d+)?)%/g, (t, e) => `(${e}/100)`)
                .replace(/÷/g, "/")
                .replace(/×/g, "*")
                .replace(/−/g, "-");
              e = e.replace(/(^|[+\-*/(])-(?=\d)/g, "$10-");
              try {
                return ((t) => {
                  const e = [],
                    r = [],
                    n = { "+": 1, "-": 1, "*": 2, "/": 2 };
                  for (
                    (t.match(/(\d+(\.\d+)?|[+\-*/()])/g) || []).forEach((t) => {
                      if (/^\d/.test(t)) e.push(parseFloat(t));
                      else if ("+-*/".includes(t)) {
                        for (
                          ;
                          r.length &&
                          "+-*/".includes(r[r.length - 1]) &&
                          n[r[r.length - 1]] >= n[t];

                        )
                          e.push(r.pop());
                        r.push(t);
                      } else if ("(" === t) r.push(t);
                      else if (")" === t) {
                        for (; r.length && "(" !== r[r.length - 1]; )
                          e.push(r.pop());
                        r.pop();
                      }
                    });
                    r.length;

                  )
                    e.push(r.pop());
                  const o = [];
                  return (
                    e.forEach((t) => {
                      if ("number" == typeof t) o.push(t);
                      else {
                        const e = o.pop(),
                          r = o.pop();
                        let n = 0;
                        "+" === t && (n = r + e),
                          "-" === t && (n = r - e),
                          "*" === t && (n = r * e),
                          "/" === t && (n = 0 === e ? NaN : r / e),
                          o.push(n);
                      }
                    }),
                    o[0]
                  );
                })(e);
              } catch {
                return NaN;
              }
            })(w)
          );
          _(x, t), (w = t), (k = !0);
        }
      },
    };
  document.addEventListener("DOMContentLoaded", () => {
    y.forEach((t) => {
      t.addEventListener("click", () =>
        ((t) => {
          const { action: e } = t.dataset,
            r = t.textContent;
          if (!e) {
            if ((k && ((w = ""), (k = !1)), "." === r && /\.\d*$/.test(w)))
              return;
            if (w.length >= 30) return;
            return (w += r), void _(x, w);
          }
          A[e]
            ? A[e]()
            : E[e] &&
              (k && (k = !1),
              w || "minus" !== e
                ? w && !/[+\-*/÷×−]$/.test(w) && ((w += E[e]), _(x, w))
                : ((w = "−"), _(x, w)));
        })(t)
      );
    }),
      (() => {
        const t = document.querySelectorAll(".theme-switcher button");
        t.forEach((e) => {
          e.addEventListener("click", () => {
            const r = "light-theme" === e.id ? "light" : "dark";
            document.body.setAttribute("data-theme", r),
              localStorage.setItem("theme", r),
              t.forEach((t) => t.classList.remove("active")),
              e.classList.add("active");
          });
        });
        const e = localStorage.getItem("theme") || "dark";
        document.body.setAttribute("data-theme", e),
          t.forEach((t) => {
            ("light-theme" === t.id ? "light" : "dark") === e &&
              t.classList.add("active");
          });
      })();
  });
})();
