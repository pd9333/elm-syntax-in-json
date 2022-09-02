var $f216bbbdc8ee4728$exports = {};
/*! For license information please see elm-console-debug.js.LICENSE.txt */ !function(t, n) {
    $f216bbbdc8ee4728$exports = n();
}(window, function() {
    return function(t) {
        var n = {};
        function r(e) {
            if (n[e]) return n[e].exports;
            var i = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
        }
        return r.m = t, r.c = n, r.d = function(t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            });
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for(var i in t)r.d(e, i, (function(n) {
                return t[n];
            }).bind(null, i));
            return e;
        }, r.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(n, "a", n), n;
        }, r.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, r.p = "", r(r.s = 3);
    }([
        function(t, n, r) {
            (function(t, e) {
                var i;
                (function() {
                    var u = "Expected a function", o = "__lodash_placeholder__", a = [
                        [
                            "ary",
                            128
                        ],
                        [
                            "bind",
                            1
                        ],
                        [
                            "bindKey",
                            2
                        ],
                        [
                            "curry",
                            8
                        ],
                        [
                            "curryRight",
                            16
                        ],
                        [
                            "flip",
                            512
                        ],
                        [
                            "partial",
                            32
                        ],
                        [
                            "partialRight",
                            64
                        ],
                        [
                            "rearg",
                            256
                        ]
                    ], f = "[object Arguments]", c = "[object Array]", l = "[object Boolean]", s = "[object Date]", h = "[object Error]", v = "[object Function]", p = "[object GeneratorFunction]", d = "[object Map]", y = "[object Number]", g = "[object Object]", _ = "[object RegExp]", m = "[object Set]", w = "[object String]", b = "[object Symbol]", x = "[object WeakMap]", j = "[object ArrayBuffer]", A = "[object DataView]", S = "[object Float32Array]", O = "[object Float64Array]", C = "[object Int8Array]", I = "[object Int16Array]", T = "[object Int32Array]", M = "[object Uint8Array]", N = "[object Uint16Array]", E = "[object Uint32Array]", k = /\b__p \+= '';/g, z = /\b(__p \+=) '' \+/g, L = /(__e\(.*?\)|\b__t\)) \+\n'';/g, D = /&(?:amp|lt|gt|quot|#39);/g, B = /[&<>"']/g, R = RegExp(D.source), U = RegExp(B.source), W = /<%-([\s\S]+?)%>/g, P = /<%([\s\S]+?)%>/g, F = /<%=([\s\S]+?)%>/g, H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Z = /^\w*$/, $ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, G = /[\\^$.*+?()[\]{}|]/g, V = RegExp(G.source), J = /^\s+|\s+$/g, Q = /^\s+/, q = /\s+$/, Y = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, K = /\{\n\/\* \[wrapped with (.+)\] \*/, X = /,? & /, tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, nt = /\\(\\)?/g, rt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, et = /\w*$/, it = /^[-+]0x[0-9a-f]+$/i, ut = /^0b[01]+$/i, ot = /^\[object .+?Constructor\]$/, at = /^0o[0-7]+$/i, ft = /^(?:0|[1-9]\d*)$/, ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, lt = /($^)/, st = /['\n\r\u2028\u2029\\]/g, ht = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", vt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", pt = "[\ud800-\udfff]", dt = "[" + vt + "]", yt = "[" + ht + "]", gt = "\\d+", _t = "[\\u2700-\\u27bf]", mt = "[a-z\\xdf-\\xf6\\xf8-\\xff]", wt = "[^\ud800-\udfff" + vt + gt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", bt = "\ud83c[\udffb-\udfff]", xt = "[^\ud800-\udfff]", jt = "(?:\ud83c[\udde6-\uddff]){2}", At = "[\ud800-\udbff][\udc00-\udfff]", St = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", Ot = "(?:" + mt + "|" + wt + ")", Ct = "(?:" + St + "|" + wt + ")", It = "(?:" + yt + "|" + bt + ")" + "?", Tt = "[\\ufe0e\\ufe0f]?" + It + ("(?:\\u200d(?:" + [
                        xt,
                        jt,
                        At
                    ].join("|") + ")[\\ufe0e\\ufe0f]?" + It + ")*"), Mt = "(?:" + [
                        _t,
                        jt,
                        At
                    ].join("|") + ")" + Tt, Nt = "(?:" + [
                        xt + yt + "?",
                        yt,
                        jt,
                        At,
                        pt
                    ].join("|") + ")", Et = RegExp("['’]", "g"), kt = RegExp(yt, "g"), zt = RegExp(bt + "(?=" + bt + ")|" + Nt + Tt, "g"), Lt = RegExp([
                        St + "?" + mt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [
                            dt,
                            St,
                            "$"
                        ].join("|") + ")",
                        Ct + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [
                            dt,
                            St + Ot,
                            "$"
                        ].join("|") + ")",
                        St + "?" + Ot + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                        St + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                        "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                        "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                        gt,
                        Mt
                    ].join("|"), "g"), Dt = RegExp("[\\u200d\ud800-\udfff" + ht + "\\ufe0e\\ufe0f]"), Bt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rt = [
                        "Array",
                        "Buffer",
                        "DataView",
                        "Date",
                        "Error",
                        "Float32Array",
                        "Float64Array",
                        "Function",
                        "Int8Array",
                        "Int16Array",
                        "Int32Array",
                        "Map",
                        "Math",
                        "Object",
                        "Promise",
                        "RegExp",
                        "Set",
                        "String",
                        "Symbol",
                        "TypeError",
                        "Uint8Array",
                        "Uint8ClampedArray",
                        "Uint16Array",
                        "Uint32Array",
                        "WeakMap",
                        "_",
                        "clearTimeout",
                        "isFinite",
                        "parseInt",
                        "setTimeout"
                    ], Ut = -1, Wt = {};
                    Wt[S] = Wt[O] = Wt[C] = Wt[I] = Wt[T] = Wt[M] = Wt["[object Uint8ClampedArray]"] = Wt[N] = Wt[E] = !0, Wt[f] = Wt[c] = Wt[j] = Wt[l] = Wt[A] = Wt[s] = Wt[h] = Wt[v] = Wt[d] = Wt[y] = Wt[g] = Wt[_] = Wt[m] = Wt[w] = Wt[x] = !1;
                    var Pt = {};
                    Pt[f] = Pt[c] = Pt[j] = Pt[A] = Pt[l] = Pt[s] = Pt[S] = Pt[O] = Pt[C] = Pt[I] = Pt[T] = Pt[d] = Pt[y] = Pt[g] = Pt[_] = Pt[m] = Pt[w] = Pt[b] = Pt[M] = Pt["[object Uint8ClampedArray]"] = Pt[N] = Pt[E] = !0, Pt[h] = Pt[v] = Pt[x] = !1;
                    var Ft = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    }, Ht = parseFloat, Zt = parseInt, $t = "object" == typeof t && t && t.Object === Object && t, Gt = "object" == typeof self && self && self.Object === Object && self, Vt = $t || Gt || Function("return this")(), Jt = n && !n.nodeType && n, Qt = Jt && "object" == typeof e && e && !e.nodeType && e, qt = Qt && Qt.exports === Jt, Yt = qt && $t.process, Kt = function() {
                        try {
                            var t = Qt && Qt.require && Qt.require("util").types;
                            return t || Yt && Yt.binding && Yt.binding("util");
                        } catch (t1) {}
                    }(), Xt = Kt && Kt.isArrayBuffer, tn = Kt && Kt.isDate, nn = Kt && Kt.isMap, rn = Kt && Kt.isRegExp, en = Kt && Kt.isSet, un = Kt && Kt.isTypedArray;
                    function on(t, n, r) {
                        switch(r.length){
                            case 0:
                                return t.call(n);
                            case 1:
                                return t.call(n, r[0]);
                            case 2:
                                return t.call(n, r[0], r[1]);
                            case 3:
                                return t.call(n, r[0], r[1], r[2]);
                        }
                        return t.apply(n, r);
                    }
                    function an(t, n, r, e) {
                        for(var i = -1, u = null == t ? 0 : t.length; ++i < u;){
                            var o = t[i];
                            n(e, o, r(o), t);
                        }
                        return e;
                    }
                    function fn(t, n) {
                        for(var r = -1, e = null == t ? 0 : t.length; ++r < e && !1 !== n(t[r], r, t););
                        return t;
                    }
                    function cn(t, n) {
                        for(var r = null == t ? 0 : t.length; (r--) && !1 !== n(t[r], r, t););
                        return t;
                    }
                    function ln(t, n) {
                        for(var r = -1, e = null == t ? 0 : t.length; ++r < e;)if (!n(t[r], r, t)) return !1;
                        return !0;
                    }
                    function sn(t, n) {
                        for(var r = -1, e = null == t ? 0 : t.length, i = 0, u = []; ++r < e;){
                            var o = t[r];
                            n(o, r, t) && (u[i++] = o);
                        }
                        return u;
                    }
                    function hn(t, n) {
                        return !!(null == t ? 0 : t.length) && xn(t, n, 0) > -1;
                    }
                    function vn(t, n, r) {
                        for(var e = -1, i = null == t ? 0 : t.length; ++e < i;)if (r(n, t[e])) return !0;
                        return !1;
                    }
                    function pn(t, n) {
                        for(var r = -1, e = null == t ? 0 : t.length, i = Array(e); ++r < e;)i[r] = n(t[r], r, t);
                        return i;
                    }
                    function dn(t, n) {
                        for(var r = -1, e = n.length, i = t.length; ++r < e;)t[i + r] = n[r];
                        return t;
                    }
                    function yn(t, n, r, e) {
                        var i = -1, u = null == t ? 0 : t.length;
                        for(e && u && (r = t[++i]); ++i < u;)r = n(r, t[i], i, t);
                        return r;
                    }
                    function gn(t, n, r, e) {
                        var i = null == t ? 0 : t.length;
                        for(e && i && (r = t[--i]); i--;)r = n(r, t[i], i, t);
                        return r;
                    }
                    function _n(t, n) {
                        for(var r = -1, e = null == t ? 0 : t.length; ++r < e;)if (n(t[r], r, t)) return !0;
                        return !1;
                    }
                    var mn = On("length");
                    function wn(t, n, r) {
                        var e;
                        return r(t, function(t, r, i) {
                            if (n(t, r, i)) return e = r, !1;
                        }), e;
                    }
                    function bn(t, n, r, e) {
                        for(var i = t.length, u = r + (e ? 1 : -1); e ? u-- : ++u < i;)if (n(t[u], u, t)) return u;
                        return -1;
                    }
                    function xn(t, n, r) {
                        return n == n ? function(t, n, r) {
                            var e = r - 1, i = t.length;
                            for(; ++e < i;)if (t[e] === n) return e;
                            return -1;
                        }(t, n, r) : bn(t, An, r);
                    }
                    function jn(t, n, r, e) {
                        for(var i = r - 1, u = t.length; ++i < u;)if (e(t[i], n)) return i;
                        return -1;
                    }
                    function An(t) {
                        return t != t;
                    }
                    function Sn(t, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? Tn(t, n) / r : NaN;
                    }
                    function On(t) {
                        return function(n) {
                            return null == n ? void 0 : n[t];
                        };
                    }
                    function Cn(t) {
                        return function(n) {
                            return null == t ? void 0 : t[n];
                        };
                    }
                    function In(t, n, r, e, i) {
                        return i(t, function(t, i, u) {
                            r = e ? (e = !1, t) : n(r, t, i, u);
                        }), r;
                    }
                    function Tn(t, n) {
                        for(var r, e = -1, i = t.length; ++e < i;){
                            var u = n(t[e]);
                            void 0 !== u && (r = void 0 === r ? u : r + u);
                        }
                        return r;
                    }
                    function Mn(t, n) {
                        for(var r = -1, e = Array(t); ++r < t;)e[r] = n(r);
                        return e;
                    }
                    function Nn(t) {
                        return function(n) {
                            return t(n);
                        };
                    }
                    function En(t, n) {
                        return pn(n, function(n) {
                            return t[n];
                        });
                    }
                    function kn(t, n) {
                        return t.has(n);
                    }
                    function zn(t, n) {
                        for(var r = -1, e = t.length; ++r < e && xn(n, t[r], 0) > -1;);
                        return r;
                    }
                    function Ln(t, n) {
                        for(var r = t.length; (r--) && xn(n, t[r], 0) > -1;);
                        return r;
                    }
                    function Dn(t, n) {
                        for(var r = t.length, e = 0; r--;)t[r] === n && ++e;
                        return e;
                    }
                    var Bn = Cn({
                        "\xc0": "A",
                        "\xc1": "A",
                        "\xc2": "A",
                        "\xc3": "A",
                        "\xc4": "A",
                        "\xc5": "A",
                        "\xe0": "a",
                        "\xe1": "a",
                        "\xe2": "a",
                        "\xe3": "a",
                        "\xe4": "a",
                        "\xe5": "a",
                        "\xc7": "C",
                        "\xe7": "c",
                        "\xd0": "D",
                        "\xf0": "d",
                        "\xc8": "E",
                        "\xc9": "E",
                        "\xca": "E",
                        "\xcb": "E",
                        "\xe8": "e",
                        "\xe9": "e",
                        "\xea": "e",
                        "\xeb": "e",
                        "\xcc": "I",
                        "\xcd": "I",
                        "\xce": "I",
                        "\xcf": "I",
                        "\xec": "i",
                        "\xed": "i",
                        "\xee": "i",
                        "\xef": "i",
                        "\xd1": "N",
                        "\xf1": "n",
                        "\xd2": "O",
                        "\xd3": "O",
                        "\xd4": "O",
                        "\xd5": "O",
                        "\xd6": "O",
                        "\xd8": "O",
                        "\xf2": "o",
                        "\xf3": "o",
                        "\xf4": "o",
                        "\xf5": "o",
                        "\xf6": "o",
                        "\xf8": "o",
                        "\xd9": "U",
                        "\xda": "U",
                        "\xdb": "U",
                        "\xdc": "U",
                        "\xf9": "u",
                        "\xfa": "u",
                        "\xfb": "u",
                        "\xfc": "u",
                        "\xdd": "Y",
                        "\xfd": "y",
                        "\xff": "y",
                        "\xc6": "Ae",
                        "\xe6": "ae",
                        "\xde": "Th",
                        "\xfe": "th",
                        "\xdf": "ss",
                        "Ā": "A",
                        "Ă": "A",
                        "Ą": "A",
                        "ā": "a",
                        "ă": "a",
                        "ą": "a",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "Ď": "D",
                        "Đ": "D",
                        "ď": "d",
                        "đ": "d",
                        "Ē": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ę": "E",
                        "Ě": "E",
                        "ē": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ę": "e",
                        "ě": "e",
                        "Ĝ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ģ": "G",
                        "ĝ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ģ": "g",
                        "Ĥ": "H",
                        "Ħ": "H",
                        "ĥ": "h",
                        "ħ": "h",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "Į": "I",
                        "İ": "I",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "į": "i",
                        "ı": "i",
                        "Ĵ": "J",
                        "ĵ": "j",
                        "Ķ": "K",
                        "ķ": "k",
                        "ĸ": "k",
                        "Ĺ": "L",
                        "Ļ": "L",
                        "Ľ": "L",
                        "Ŀ": "L",
                        "Ł": "L",
                        "ĺ": "l",
                        "ļ": "l",
                        "ľ": "l",
                        "ŀ": "l",
                        "ł": "l",
                        "Ń": "N",
                        "Ņ": "N",
                        "Ň": "N",
                        "Ŋ": "N",
                        "ń": "n",
                        "ņ": "n",
                        "ň": "n",
                        "ŋ": "n",
                        "Ō": "O",
                        "Ŏ": "O",
                        "Ő": "O",
                        "ō": "o",
                        "ŏ": "o",
                        "ő": "o",
                        "Ŕ": "R",
                        "Ŗ": "R",
                        "Ř": "R",
                        "ŕ": "r",
                        "ŗ": "r",
                        "ř": "r",
                        "Ś": "S",
                        "Ŝ": "S",
                        "Ş": "S",
                        "Š": "S",
                        "ś": "s",
                        "ŝ": "s",
                        "ş": "s",
                        "š": "s",
                        "Ţ": "T",
                        "Ť": "T",
                        "Ŧ": "T",
                        "ţ": "t",
                        "ť": "t",
                        "ŧ": "t",
                        "Ũ": "U",
                        "Ū": "U",
                        "Ŭ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ų": "U",
                        "ũ": "u",
                        "ū": "u",
                        "ŭ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ų": "u",
                        "Ŵ": "W",
                        "ŵ": "w",
                        "Ŷ": "Y",
                        "ŷ": "y",
                        "Ÿ": "Y",
                        "Ź": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "ź": "z",
                        "ż": "z",
                        "ž": "z",
                        "Ĳ": "IJ",
                        "ĳ": "ij",
                        "Œ": "Oe",
                        "œ": "oe",
                        "ŉ": "'n",
                        "ſ": "s"
                    }), Rn = Cn({
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    });
                    function Un(t) {
                        return "\\" + Ft[t];
                    }
                    function Wn(t) {
                        return Dt.test(t);
                    }
                    function Pn(t) {
                        var n = -1, r = Array(t.size);
                        return t.forEach(function(t, e) {
                            r[++n] = [
                                e,
                                t
                            ];
                        }), r;
                    }
                    function Fn(t, n) {
                        return function(r) {
                            return t(n(r));
                        };
                    }
                    function Hn(t, n) {
                        for(var r = -1, e = t.length, i = 0, u = []; ++r < e;){
                            var a = t[r];
                            a !== n && a !== o || (t[r] = o, u[i++] = r);
                        }
                        return u;
                    }
                    function Zn(t) {
                        var n = -1, r = Array(t.size);
                        return t.forEach(function(t) {
                            r[++n] = t;
                        }), r;
                    }
                    function $n(t) {
                        var n = -1, r = Array(t.size);
                        return t.forEach(function(t) {
                            r[++n] = [
                                t,
                                t
                            ];
                        }), r;
                    }
                    function Gn(t) {
                        return Wn(t) ? function(t) {
                            var n = zt.lastIndex = 0;
                            for(; zt.test(t);)++n;
                            return n;
                        }(t) : mn(t);
                    }
                    function Vn(t) {
                        return Wn(t) ? function(t) {
                            return t.match(zt) || [];
                        }(t) : function(t) {
                            return t.split("");
                        }(t);
                    }
                    var Jn = Cn({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var Qn = function t(n) {
                        var r, e = (n = null == n ? Vt : Qn.defaults(Vt.Object(), n, Qn.pick(Vt, Rt))).Array, i = n.Date, ht = n.Error, vt = n.Function, pt = n.Math, dt = n.Object, yt = n.RegExp, gt = n.String, _t = n.TypeError, mt = e.prototype, wt = vt.prototype, bt = dt.prototype, xt = n["__core-js_shared__"], jt = wt.toString, At = bt.hasOwnProperty, St = 0, Ot = (r = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "", Ct = bt.toString, It = jt.call(dt), Tt = Vt._, Mt = yt("^" + jt.call(At).replace(G, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Nt = qt ? n.Buffer : void 0, zt = n.Symbol, Dt = n.Uint8Array, Ft = Nt ? Nt.allocUnsafe : void 0, $t = Fn(dt.getPrototypeOf, dt), Gt = dt.create, Jt = bt.propertyIsEnumerable, Qt = mt.splice, Yt = zt ? zt.isConcatSpreadable : void 0, Kt = zt ? zt.iterator : void 0, mn = zt ? zt.toStringTag : void 0, Cn = function() {
                            try {
                                var t = Xi(dt, "defineProperty");
                                return t({}, "", {}), t;
                            } catch (t1) {}
                        }(), qn = n.clearTimeout !== Vt.clearTimeout && n.clearTimeout, Yn = i && i.now !== Vt.Date.now && i.now, Kn = n.setTimeout !== Vt.setTimeout && n.setTimeout, Xn = pt.ceil, tr = pt.floor, nr = dt.getOwnPropertySymbols, rr = Nt ? Nt.isBuffer : void 0, er = n.isFinite, ir = mt.join, ur = Fn(dt.keys, dt), or = pt.max, ar = pt.min, fr = i.now, cr = n.parseInt, lr = pt.random, sr = mt.reverse, hr = Xi(n, "DataView"), vr = Xi(n, "Map"), pr = Xi(n, "Promise"), dr = Xi(n, "Set"), yr = Xi(n, "WeakMap"), gr = Xi(dt, "create"), _r = yr && new yr, mr = {}, wr = Ou(hr), br = Ou(vr), xr = Ou(pr), jr = Ou(dr), Ar = Ou(yr), Sr = zt ? zt.prototype : void 0, Or = Sr ? Sr.valueOf : void 0, Cr = Sr ? Sr.toString : void 0;
                        function Ir(t) {
                            if (Zo(t) && !ko(t) && !(t instanceof Er)) {
                                if (t instanceof Nr) return t;
                                if (At.call(t, "__wrapped__")) return Cu(t);
                            }
                            return new Nr(t);
                        }
                        var Tr = function() {
                            function t() {}
                            return function(n) {
                                if (!Ho(n)) return {};
                                if (Gt) return Gt(n);
                                t.prototype = n;
                                var r = new t;
                                return t.prototype = void 0, r;
                            };
                        }();
                        function Mr() {}
                        function Nr(t, n) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = void 0;
                        }
                        function Er(t) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
                        }
                        function kr(t) {
                            var n = -1, r = null == t ? 0 : t.length;
                            for(this.clear(); ++n < r;){
                                var e = t[n];
                                this.set(e[0], e[1]);
                            }
                        }
                        function zr(t) {
                            var n = -1, r = null == t ? 0 : t.length;
                            for(this.clear(); ++n < r;){
                                var e = t[n];
                                this.set(e[0], e[1]);
                            }
                        }
                        function Lr(t) {
                            var n = -1, r = null == t ? 0 : t.length;
                            for(this.clear(); ++n < r;){
                                var e = t[n];
                                this.set(e[0], e[1]);
                            }
                        }
                        function Dr(t) {
                            var n = -1, r = null == t ? 0 : t.length;
                            for(this.__data__ = new Lr; ++n < r;)this.add(t[n]);
                        }
                        function Br(t) {
                            var n = this.__data__ = new zr(t);
                            this.size = n.size;
                        }
                        function Rr(t, n) {
                            var r = ko(t), e = !r && Eo(t), i = !r && !e && Bo(t), u = !r && !e && !i && Ko(t), o = r || e || i || u, a = o ? Mn(t.length, gt) : [], f = a.length;
                            for(var c in t)!n && !At.call(t, c) || o && ("length" == c || i && ("offset" == c || "parent" == c) || u && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ou(c, f)) || a.push(c);
                            return a;
                        }
                        function Ur(t) {
                            var n = t.length;
                            return n ? t[De(0, n - 1)] : void 0;
                        }
                        function Wr(t, n) {
                            return ju(gi(t), Qr(n, 0, t.length));
                        }
                        function Pr(t) {
                            return ju(gi(t));
                        }
                        function Fr(t, n, r) {
                            (void 0 !== r && !To(t[n], r) || void 0 === r && !(n in t)) && Vr(t, n, r);
                        }
                        function Hr(t, n, r) {
                            var e = t[n];
                            At.call(t, n) && To(e, r) && (void 0 !== r || n in t) || Vr(t, n, r);
                        }
                        function Zr(t, n) {
                            for(var r = t.length; r--;)if (To(t[r][0], n)) return r;
                            return -1;
                        }
                        function $r(t, n, r, e) {
                            return te(t, function(t, i, u) {
                                n(e, t, r(t), u);
                            }), e;
                        }
                        function Gr(t, n) {
                            return t && _i(n, wa(n), t);
                        }
                        function Vr(t, n, r) {
                            "__proto__" == n && Cn ? Cn(t, n, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : t[n] = r;
                        }
                        function Jr(t, n) {
                            for(var r = -1, i = n.length, u = e(i), o = null == t; ++r < i;)u[r] = o ? void 0 : da(t, n[r]);
                            return u;
                        }
                        function Qr(t, n, r) {
                            return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== n && (t = t >= n ? t : n)), t;
                        }
                        function qr(t, n, r, e, i, u) {
                            var o, a = 1 & n, c = 2 & n, h = 4 & n;
                            if (r && (o = i ? r(t, e, i, u) : r(t)), void 0 !== o) return o;
                            if (!Ho(t)) return t;
                            var x = ko(t);
                            if (x) {
                                if (o = function(t) {
                                    var n = t.length, r = new t.constructor(n);
                                    n && "string" == typeof t[0] && At.call(t, "index") && (r.index = t.index, r.input = t.input);
                                    return r;
                                }(t), !a) return gi(t, o);
                            } else {
                                var k = ru(t), z = k == v || k == p;
                                if (Bo(t)) return si(t, a);
                                if (k == g || k == f || z && !i) {
                                    if (o = c || z ? {} : iu(t), !a) return c ? function(t, n) {
                                        return _i(t, nu(t), n);
                                    }(t, function(t, n) {
                                        return t && _i(n, ba(n), t);
                                    }(o, t)) : function(t, n) {
                                        return _i(t, tu(t), n);
                                    }(t, Gr(o, t));
                                } else {
                                    if (!Pt[k]) return i ? t : {};
                                    o = function(t, n, r) {
                                        var e = t.constructor;
                                        switch(n){
                                            case j:
                                                return hi(t);
                                            case l:
                                            case s:
                                                return new e(+t);
                                            case A:
                                                return function(t, n) {
                                                    var r = n ? hi(t.buffer) : t.buffer;
                                                    return new t.constructor(r, t.byteOffset, t.byteLength);
                                                }(t, r);
                                            case S:
                                            case O:
                                            case C:
                                            case I:
                                            case T:
                                            case M:
                                            case "[object Uint8ClampedArray]":
                                            case N:
                                            case E:
                                                return vi(t, r);
                                            case d:
                                                return new e;
                                            case y:
                                            case w:
                                                return new e(t);
                                            case _:
                                                return function(t) {
                                                    var n = new t.constructor(t.source, et.exec(t));
                                                    return n.lastIndex = t.lastIndex, n;
                                                }(t);
                                            case m:
                                                return new e;
                                            case b:
                                                return i = t, Or ? dt(Or.call(i)) : {};
                                        }
                                        var i;
                                    }(t, k, a);
                                }
                            }
                            u || (u = new Br);
                            var L = u.get(t);
                            if (L) return L;
                            u.set(t, o), Qo(t) ? t.forEach(function(e) {
                                o.add(qr(e, n, r, e, t, u));
                            }) : $o(t) && t.forEach(function(e, i) {
                                o.set(i, qr(e, n, r, i, t, u));
                            });
                            var D = x ? void 0 : (h ? c ? Gi : $i : c ? ba : wa)(t);
                            return fn(D || t, function(e, i) {
                                D && (e = t[i = e]), Hr(o, i, qr(e, n, r, i, t, u));
                            }), o;
                        }
                        function Yr(t, n, r) {
                            var e = r.length;
                            if (null == t) return !e;
                            for(t = dt(t); e--;){
                                var i = r[e], u = n[i], o = t[i];
                                if (void 0 === o && !(i in t) || !u(o)) return !1;
                            }
                            return !0;
                        }
                        function Kr(t, n, r) {
                            if ("function" != typeof t) throw new _t(u);
                            return mu(function() {
                                t.apply(void 0, r);
                            }, n);
                        }
                        function Xr(t, n, r, e) {
                            var i = -1, u = hn, o = !0, a = t.length, f = [], c = n.length;
                            if (!a) return f;
                            r && (n = pn(n, Nn(r))), e ? (u = vn, o = !1) : n.length >= 200 && (u = kn, o = !1, n = new Dr(n));
                            t: for(; ++i < a;){
                                var l = t[i], s = null == r ? l : r(l);
                                if (l = e || 0 !== l ? l : 0, o && s == s) {
                                    for(var h = c; h--;)if (n[h] === s) continue t;
                                    f.push(l);
                                } else u(n, s, e) || f.push(l);
                            }
                            return f;
                        }
                        Ir.templateSettings = {
                            escape: W,
                            evaluate: P,
                            interpolate: F,
                            variable: "",
                            imports: {
                                _: Ir
                            }
                        }, Ir.prototype = Mr.prototype, Ir.prototype.constructor = Ir, Nr.prototype = Tr(Mr.prototype), Nr.prototype.constructor = Nr, Er.prototype = Tr(Mr.prototype), Er.prototype.constructor = Er, kr.prototype.clear = function() {
                            this.__data__ = gr ? gr(null) : {}, this.size = 0;
                        }, kr.prototype.delete = function(t) {
                            var n = this.has(t) && delete this.__data__[t];
                            return this.size -= n ? 1 : 0, n;
                        }, kr.prototype.get = function(t) {
                            var n = this.__data__;
                            if (gr) {
                                var r = n[t];
                                return "__lodash_hash_undefined__" === r ? void 0 : r;
                            }
                            return At.call(n, t) ? n[t] : void 0;
                        }, kr.prototype.has = function(t) {
                            var n = this.__data__;
                            return gr ? void 0 !== n[t] : At.call(n, t);
                        }, kr.prototype.set = function(t, n) {
                            var r = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, r[t] = gr && void 0 === n ? "__lodash_hash_undefined__" : n, this;
                        }, zr.prototype.clear = function() {
                            this.__data__ = [], this.size = 0;
                        }, zr.prototype.delete = function(t) {
                            var n = this.__data__, r = Zr(n, t);
                            return !(r < 0) && (r == n.length - 1 ? n.pop() : Qt.call(n, r, 1), --this.size, !0);
                        }, zr.prototype.get = function(t) {
                            var n = this.__data__, r = Zr(n, t);
                            return r < 0 ? void 0 : n[r][1];
                        }, zr.prototype.has = function(t) {
                            return Zr(this.__data__, t) > -1;
                        }, zr.prototype.set = function(t, n) {
                            var r = this.__data__, e = Zr(r, t);
                            return e < 0 ? (++this.size, r.push([
                                t,
                                n
                            ])) : r[e][1] = n, this;
                        }, Lr.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new kr,
                                map: new (vr || zr),
                                string: new kr
                            };
                        }, Lr.prototype.delete = function(t) {
                            var n = Yi(this, t).delete(t);
                            return this.size -= n ? 1 : 0, n;
                        }, Lr.prototype.get = function(t) {
                            return Yi(this, t).get(t);
                        }, Lr.prototype.has = function(t) {
                            return Yi(this, t).has(t);
                        }, Lr.prototype.set = function(t, n) {
                            var r = Yi(this, t), e = r.size;
                            return r.set(t, n), this.size += r.size == e ? 0 : 1, this;
                        }, Dr.prototype.add = Dr.prototype.push = function(t) {
                            return this.__data__.set(t, "__lodash_hash_undefined__"), this;
                        }, Dr.prototype.has = function(t) {
                            return this.__data__.has(t);
                        }, Br.prototype.clear = function() {
                            this.__data__ = new zr, this.size = 0;
                        }, Br.prototype.delete = function(t) {
                            var n = this.__data__, r = n.delete(t);
                            return this.size = n.size, r;
                        }, Br.prototype.get = function(t) {
                            return this.__data__.get(t);
                        }, Br.prototype.has = function(t) {
                            return this.__data__.has(t);
                        }, Br.prototype.set = function(t, n) {
                            var r = this.__data__;
                            if (r instanceof zr) {
                                var e = r.__data__;
                                if (!vr || e.length < 199) return e.push([
                                    t,
                                    n
                                ]), this.size = ++r.size, this;
                                r = this.__data__ = new Lr(e);
                            }
                            return r.set(t, n), this.size = r.size, this;
                        };
                        var te = bi(fe), ne = bi(ce, !0);
                        function re(t, n) {
                            var r = !0;
                            return te(t, function(t, e, i) {
                                return r = !!n(t, e, i);
                            }), r;
                        }
                        function ee(t, n, r) {
                            for(var e = -1, i = t.length; ++e < i;){
                                var u = t[e], o = n(u);
                                if (null != o && (void 0 === a ? o == o && !Yo(o) : r(o, a))) var a = o, f = u;
                            }
                            return f;
                        }
                        function ie(t, n) {
                            var r = [];
                            return te(t, function(t, e, i) {
                                n(t, e, i) && r.push(t);
                            }), r;
                        }
                        function ue(t, n, r, e, i) {
                            var u = -1, o = t.length;
                            for(r || (r = uu), i || (i = []); ++u < o;){
                                var a = t[u];
                                n > 0 && r(a) ? n > 1 ? ue(a, n - 1, r, e, i) : dn(i, a) : e || (i[i.length] = a);
                            }
                            return i;
                        }
                        var oe = xi(), ae = xi(!0);
                        function fe(t, n) {
                            return t && oe(t, n, wa);
                        }
                        function ce(t, n) {
                            return t && ae(t, n, wa);
                        }
                        function le(t, n) {
                            return sn(n, function(n) {
                                return Wo(t[n]);
                            });
                        }
                        function se(t, n) {
                            for(var r = 0, e = (n = ai(n, t)).length; null != t && r < e;)t = t[Su(n[r++])];
                            return r && r == e ? t : void 0;
                        }
                        function he(t, n, r) {
                            var e = n(t);
                            return ko(t) ? e : dn(e, r(t));
                        }
                        function ve(t) {
                            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : mn && mn in dt(t) ? function(t) {
                                var n = At.call(t, mn), r = t[mn];
                                try {
                                    t[mn] = void 0;
                                    var e = !0;
                                } catch (t1) {}
                                var i = Ct.call(t);
                                e && (n ? t[mn] = r : delete t[mn]);
                                return i;
                            }(t) : function(t) {
                                return Ct.call(t);
                            }(t);
                        }
                        function pe(t, n) {
                            return t > n;
                        }
                        function de(t, n) {
                            return null != t && At.call(t, n);
                        }
                        function ye(t, n) {
                            return null != t && n in dt(t);
                        }
                        function ge(t, n, r) {
                            for(var i = r ? vn : hn, u = t[0].length, o = t.length, a = o, f = e(o), c = 1 / 0, l = []; a--;){
                                var s = t[a];
                                a && n && (s = pn(s, Nn(n))), c = ar(s.length, c), f[a] = !r && (n || u >= 120 && s.length >= 120) ? new Dr(a && s) : void 0;
                            }
                            s = t[0];
                            var h = -1, v = f[0];
                            t: for(; ++h < u && l.length < c;){
                                var p = s[h], d = n ? n(p) : p;
                                if (p = r || 0 !== p ? p : 0, !(v ? kn(v, d) : i(l, d, r))) {
                                    for(a = o; --a;){
                                        var y = f[a];
                                        if (!(y ? kn(y, d) : i(t[a], d, r))) continue t;
                                    }
                                    v && v.push(d), l.push(p);
                                }
                            }
                            return l;
                        }
                        function _e(t, n, r) {
                            var e = null == (t = du(t, n = ai(n, t))) ? t : t[Su(Ru(n))];
                            return null == e ? void 0 : on(e, t, r);
                        }
                        function me(t) {
                            return Zo(t) && ve(t) == f;
                        }
                        function we(t, n, r, e, i) {
                            return t === n || (null == t || null == n || !Zo(t) && !Zo(n) ? t != t && n != n : function(t, n, r, e, i, u) {
                                var o = ko(t), a = ko(n), v = o ? c : ru(t), p = a ? c : ru(n), x = (v = v == f ? g : v) == g, S = (p = p == f ? g : p) == g, O = v == p;
                                if (O && Bo(t)) {
                                    if (!Bo(n)) return !1;
                                    o = !0, x = !1;
                                }
                                if (O && !x) return u || (u = new Br), o || Ko(t) ? Hi(t, n, r, e, i, u) : function(t, n, r, e, i, u, o) {
                                    switch(r){
                                        case A:
                                            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
                                            t = t.buffer, n = n.buffer;
                                        case j:
                                            return !(t.byteLength != n.byteLength || !u(new Dt(t), new Dt(n)));
                                        case l:
                                        case s:
                                        case y:
                                            return To(+t, +n);
                                        case h:
                                            return t.name == n.name && t.message == n.message;
                                        case _:
                                        case w:
                                            return t == n + "";
                                        case d:
                                            var a = Pn;
                                        case m:
                                            var f = 1 & e;
                                            if (a || (a = Zn), t.size != n.size && !f) return !1;
                                            var c = o.get(t);
                                            if (c) return c == n;
                                            e |= 2, o.set(t, n);
                                            var v = Hi(a(t), a(n), e, i, u, o);
                                            return o.delete(t), v;
                                        case b:
                                            if (Or) return Or.call(t) == Or.call(n);
                                    }
                                    return !1;
                                }(t, n, v, r, e, i, u);
                                if (!(1 & r)) {
                                    var C = x && At.call(t, "__wrapped__"), I = S && At.call(n, "__wrapped__");
                                    if (C || I) {
                                        var T = C ? t.value() : t, M = I ? n.value() : n;
                                        return u || (u = new Br), i(T, M, r, e, u);
                                    }
                                }
                                if (!O) return !1;
                                return u || (u = new Br), function(t, n, r, e, i, u) {
                                    var o = 1 & r, a = $i(t), f = a.length, c = $i(n).length;
                                    if (f != c && !o) return !1;
                                    var l = f;
                                    for(; l--;){
                                        var s = a[l];
                                        if (!(o ? s in n : At.call(n, s))) return !1;
                                    }
                                    var h = u.get(t);
                                    if (h && u.get(n)) return h == n;
                                    var v = !0;
                                    u.set(t, n), u.set(n, t);
                                    var p = o;
                                    for(; ++l < f;){
                                        s = a[l];
                                        var d = t[s], y = n[s];
                                        if (e) var g = o ? e(y, d, s, n, t, u) : e(d, y, s, t, n, u);
                                        if (!(void 0 === g ? d === y || i(d, y, r, e, u) : g)) {
                                            v = !1;
                                            break;
                                        }
                                        p || (p = "constructor" == s);
                                    }
                                    if (v && !p) {
                                        var _ = t.constructor, m = n.constructor;
                                        _ == m || !("constructor" in t) || !("constructor" in n) || "function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m || (v = !1);
                                    }
                                    return u.delete(t), u.delete(n), v;
                                }(t, n, r, e, i, u);
                            }(t, n, r, e, we, i));
                        }
                        function be(t, n, r, e) {
                            var i = r.length, u = i, o = !e;
                            if (null == t) return !u;
                            for(t = dt(t); i--;){
                                var a = r[i];
                                if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1;
                            }
                            for(; ++i < u;){
                                var f = (a = r[i])[0], c = t[f], l = a[1];
                                if (o && a[2]) {
                                    if (void 0 === c && !(f in t)) return !1;
                                } else {
                                    var s = new Br;
                                    if (e) var h = e(c, l, f, t, n, s);
                                    if (!(void 0 === h ? we(l, c, 3, e, s) : h)) return !1;
                                }
                            }
                            return !0;
                        }
                        function xe(t) {
                            var n;
                            return !(!Ho(t) || (n = t, Ot && Ot in n)) && (Wo(t) ? Mt : ot).test(Ou(t));
                        }
                        function je(t) {
                            return "function" == typeof t ? t : null == t ? Ga : "object" == typeof t ? ko(t) ? Te(t[0], t[1]) : Ie(t) : nf(t);
                        }
                        function Ae(t) {
                            if (!su(t)) return ur(t);
                            var n = [];
                            for(var r in dt(t))At.call(t, r) && "constructor" != r && n.push(r);
                            return n;
                        }
                        function Se(t) {
                            if (!Ho(t)) return function(t) {
                                var n = [];
                                if (null != t) for(var r in dt(t))n.push(r);
                                return n;
                            }(t);
                            var n = su(t), r = [];
                            for(var e in t)("constructor" != e || !n && At.call(t, e)) && r.push(e);
                            return r;
                        }
                        function Oe(t, n) {
                            return t < n;
                        }
                        function Ce(t, n) {
                            var r = -1, i = Lo(t) ? e(t.length) : [];
                            return te(t, function(t, e, u) {
                                i[++r] = n(t, e, u);
                            }), i;
                        }
                        function Ie(t) {
                            var n = Ki(t);
                            return 1 == n.length && n[0][2] ? vu(n[0][0], n[0][1]) : function(r) {
                                return r === t || be(r, t, n);
                            };
                        }
                        function Te(t, n) {
                            return fu(t) && hu(n) ? vu(Su(t), n) : function(r) {
                                var e = da(r, t);
                                return void 0 === e && e === n ? ya(r, t) : we(n, e, 3);
                            };
                        }
                        function Me(t, n, r, e, i) {
                            t !== n && oe(n, function(u, o) {
                                if (i || (i = new Br), Ho(u)) !function(t, n, r, e, i, u, o) {
                                    var a = gu(t, r), f = gu(n, r), c = o.get(f);
                                    if (c) return void Fr(t, r, c);
                                    var l = u ? u(a, f, r + "", t, n, o) : void 0, s = void 0 === l;
                                    if (s) {
                                        var h = ko(f), v = !h && Bo(f), p = !h && !v && Ko(f);
                                        l = f, h || v || p ? ko(a) ? l = a : Do(a) ? l = gi(a) : v ? (s = !1, l = si(f, !0)) : p ? (s = !1, l = vi(f, !0)) : l = [] : Vo(f) || Eo(f) ? (l = a, Eo(a) ? l = oa(a) : Ho(a) && !Wo(a) || (l = iu(f))) : s = !1;
                                    }
                                    s && (o.set(f, l), i(l, f, e, u, o), o.delete(f));
                                    Fr(t, r, l);
                                }(t, n, o, r, Me, e, i);
                                else {
                                    var a = e ? e(gu(t, o), u, o + "", t, n, i) : void 0;
                                    void 0 === a && (a = u), Fr(t, o, a);
                                }
                            }, ba);
                        }
                        function Ne(t, n) {
                            var r = t.length;
                            if (r) return ou(n += n < 0 ? r : 0, r) ? t[n] : void 0;
                        }
                        function Ee(t, n, r) {
                            var e = -1;
                            return n = pn(n.length ? n : [
                                Ga
                            ], Nn(qi())), function(t, n) {
                                var r = t.length;
                                for(t.sort(n); r--;)t[r] = t[r].value;
                                return t;
                            }(Ce(t, function(t, r, i) {
                                return {
                                    criteria: pn(n, function(n) {
                                        return n(t);
                                    }),
                                    index: ++e,
                                    value: t
                                };
                            }), function(t, n) {
                                return function(t, n, r) {
                                    var e = -1, i = t.criteria, u = n.criteria, o = i.length, a = r.length;
                                    for(; ++e < o;){
                                        var f = pi(i[e], u[e]);
                                        if (f) {
                                            if (e >= a) return f;
                                            var c = r[e];
                                            return f * ("desc" == c ? -1 : 1);
                                        }
                                    }
                                    return t.index - n.index;
                                }(t, n, r);
                            });
                        }
                        function ke(t, n, r) {
                            for(var e = -1, i = n.length, u = {}; ++e < i;){
                                var o = n[e], a = se(t, o);
                                r(a, o) && Pe(u, ai(o, t), a);
                            }
                            return u;
                        }
                        function ze(t, n, r, e) {
                            var i = e ? jn : xn, u = -1, o = n.length, a = t;
                            for(t === n && (n = gi(n)), r && (a = pn(t, Nn(r))); ++u < o;)for(var f = 0, c = n[u], l = r ? r(c) : c; (f = i(a, l, f, e)) > -1;)a !== t && Qt.call(a, f, 1), Qt.call(t, f, 1);
                            return t;
                        }
                        function Le(t, n) {
                            for(var r = t ? n.length : 0, e = r - 1; r--;){
                                var i = n[r];
                                if (r == e || i !== u) {
                                    var u = i;
                                    ou(i) ? Qt.call(t, i, 1) : Xe(t, i);
                                }
                            }
                            return t;
                        }
                        function De(t, n) {
                            return t + tr(lr() * (n - t + 1));
                        }
                        function Be(t, n) {
                            var r = "";
                            if (!t || n < 1 || n > 9007199254740991) return r;
                            do n % 2 && (r += t), (n = tr(n / 2)) && (t += t);
                            while (n);
                            return r;
                        }
                        function Re(t, n) {
                            return wu(pu(t, n, Ga), t + "");
                        }
                        function Ue(t) {
                            return Ur(Ta(t));
                        }
                        function We(t, n) {
                            var r = Ta(t);
                            return ju(r, Qr(n, 0, r.length));
                        }
                        function Pe(t, n, r, e) {
                            if (!Ho(t)) return t;
                            for(var i = -1, u = (n = ai(n, t)).length, o = u - 1, a = t; null != a && ++i < u;){
                                var f = Su(n[i]), c = r;
                                if (i != o) {
                                    var l = a[f];
                                    void 0 === (c = e ? e(l, f, a) : void 0) && (c = Ho(l) ? l : ou(n[i + 1]) ? [] : {});
                                }
                                Hr(a, f, c), a = a[f];
                            }
                            return t;
                        }
                        var Fe = _r ? function(t, n) {
                            return _r.set(t, n), t;
                        } : Ga, He = Cn ? function(t, n) {
                            return Cn(t, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Ha(n),
                                writable: !0
                            });
                        } : Ga;
                        function Ze(t) {
                            return ju(Ta(t));
                        }
                        function $e(t, n, r) {
                            var i = -1, u = t.length;
                            n < 0 && (n = -n > u ? 0 : u + n), (r = r > u ? u : r) < 0 && (r += u), u = n > r ? 0 : r - n >>> 0, n >>>= 0;
                            for(var o = e(u); ++i < u;)o[i] = t[i + n];
                            return o;
                        }
                        function Ge(t, n) {
                            var r;
                            return te(t, function(t, e, i) {
                                return !(r = n(t, e, i));
                            }), !!r;
                        }
                        function Ve(t, n, r) {
                            var e = 0, i = null == t ? e : t.length;
                            if ("number" == typeof n && n == n && i <= 2147483647) {
                                for(; e < i;){
                                    var u = e + i >>> 1, o = t[u];
                                    null !== o && !Yo(o) && (r ? o <= n : o < n) ? e = u + 1 : i = u;
                                }
                                return i;
                            }
                            return Je(t, n, Ga, r);
                        }
                        function Je(t, n, r, e) {
                            n = r(n);
                            for(var i = 0, u = null == t ? 0 : t.length, o = n != n, a = null === n, f = Yo(n), c = void 0 === n; i < u;){
                                var l = tr((i + u) / 2), s = r(t[l]), h = void 0 !== s, v = null === s, p = s == s, d = Yo(s);
                                if (o) var y = e || p;
                                else y = c ? p && (e || h) : a ? p && h && (e || !v) : f ? p && h && !v && (e || !d) : !v && !d && (e ? s <= n : s < n);
                                y ? i = l + 1 : u = l;
                            }
                            return ar(u, 4294967294);
                        }
                        function Qe(t, n) {
                            for(var r = -1, e = t.length, i = 0, u = []; ++r < e;){
                                var o = t[r], a = n ? n(o) : o;
                                if (!r || !To(a, f)) {
                                    var f = a;
                                    u[i++] = 0 === o ? 0 : o;
                                }
                            }
                            return u;
                        }
                        function qe(t) {
                            return "number" == typeof t ? t : Yo(t) ? NaN : +t;
                        }
                        function Ye(t) {
                            if ("string" == typeof t) return t;
                            if (ko(t)) return pn(t, Ye) + "";
                            if (Yo(t)) return Cr ? Cr.call(t) : "";
                            var n = t + "";
                            return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                        }
                        function Ke(t, n, r) {
                            var e = -1, i = hn, u = t.length, o = !0, a = [], f = a;
                            if (r) o = !1, i = vn;
                            else if (u >= 200) {
                                var c = n ? null : Bi(t);
                                if (c) return Zn(c);
                                o = !1, i = kn, f = new Dr;
                            } else f = n ? [] : a;
                            t: for(; ++e < u;){
                                var l = t[e], s = n ? n(l) : l;
                                if (l = r || 0 !== l ? l : 0, o && s == s) {
                                    for(var h = f.length; h--;)if (f[h] === s) continue t;
                                    n && f.push(s), a.push(l);
                                } else i(f, s, r) || (f !== a && f.push(s), a.push(l));
                            }
                            return a;
                        }
                        function Xe(t, n) {
                            return null == (t = du(t, n = ai(n, t))) || delete t[Su(Ru(n))];
                        }
                        function ti(t, n, r, e) {
                            return Pe(t, n, r(se(t, n)), e);
                        }
                        function ni(t, n, r, e) {
                            for(var i = t.length, u = e ? i : -1; (e ? u-- : ++u < i) && n(t[u], u, t););
                            return r ? $e(t, e ? 0 : u, e ? u + 1 : i) : $e(t, e ? u + 1 : 0, e ? i : u);
                        }
                        function ri(t, n) {
                            var r = t;
                            return r instanceof Er && (r = r.value()), yn(n, function(t, n) {
                                return n.func.apply(n.thisArg, dn([
                                    t
                                ], n.args));
                            }, r);
                        }
                        function ei(t, n, r) {
                            var i = t.length;
                            if (i < 2) return i ? Ke(t[0]) : [];
                            for(var u = -1, o = e(i); ++u < i;)for(var a = t[u], f = -1; ++f < i;)f != u && (o[u] = Xr(o[u] || a, t[f], n, r));
                            return Ke(ue(o, 1), n, r);
                        }
                        function ii(t, n, r) {
                            for(var e = -1, i = t.length, u = n.length, o = {}; ++e < i;){
                                var a = e < u ? n[e] : void 0;
                                r(o, t[e], a);
                            }
                            return o;
                        }
                        function ui(t) {
                            return Do(t) ? t : [];
                        }
                        function oi(t) {
                            return "function" == typeof t ? t : Ga;
                        }
                        function ai(t, n) {
                            return ko(t) ? t : fu(t, n) ? [
                                t
                            ] : Au(aa(t));
                        }
                        var fi = Re;
                        function ci(t, n, r) {
                            var e = t.length;
                            return r = void 0 === r ? e : r, !n && r >= e ? t : $e(t, n, r);
                        }
                        var li = qn || function(t) {
                            return Vt.clearTimeout(t);
                        };
                        function si(t, n) {
                            if (n) return t.slice();
                            var r = t.length, e = Ft ? Ft(r) : new t.constructor(r);
                            return t.copy(e), e;
                        }
                        function hi(t) {
                            var n = new t.constructor(t.byteLength);
                            return new Dt(n).set(new Dt(t)), n;
                        }
                        function vi(t, n) {
                            var r = n ? hi(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.length);
                        }
                        function pi(t, n) {
                            if (t !== n) {
                                var r = void 0 !== t, e = null === t, i = t == t, u = Yo(t), o = void 0 !== n, a = null === n, f = n == n, c = Yo(n);
                                if (!a && !c && !u && t > n || u && o && f && !a && !c || e && o && f || !r && f || !i) return 1;
                                if (!e && !u && !c && t < n || c && r && i && !e && !u || a && r && i || !o && i || !f) return -1;
                            }
                            return 0;
                        }
                        function di(t, n, r, i) {
                            for(var u = -1, o = t.length, a = r.length, f = -1, c = n.length, l = or(o - a, 0), s = e(c + l), h = !i; ++f < c;)s[f] = n[f];
                            for(; ++u < a;)(h || u < o) && (s[r[u]] = t[u]);
                            for(; l--;)s[f++] = t[u++];
                            return s;
                        }
                        function yi(t, n, r, i) {
                            for(var u = -1, o = t.length, a = -1, f = r.length, c = -1, l = n.length, s = or(o - f, 0), h = e(s + l), v = !i; ++u < s;)h[u] = t[u];
                            for(var p = u; ++c < l;)h[p + c] = n[c];
                            for(; ++a < f;)(v || u < o) && (h[p + r[a]] = t[u++]);
                            return h;
                        }
                        function gi(t, n) {
                            var r = -1, i = t.length;
                            for(n || (n = e(i)); ++r < i;)n[r] = t[r];
                            return n;
                        }
                        function _i(t, n, r, e) {
                            var i = !r;
                            r || (r = {});
                            for(var u = -1, o = n.length; ++u < o;){
                                var a = n[u], f = e ? e(r[a], t[a], a, r, t) : void 0;
                                void 0 === f && (f = t[a]), i ? Vr(r, a, f) : Hr(r, a, f);
                            }
                            return r;
                        }
                        function mi(t, n) {
                            return function(r, e) {
                                var i = ko(r) ? an : $r, u = n ? n() : {};
                                return i(r, t, qi(e, 2), u);
                            };
                        }
                        function wi(t) {
                            return Re(function(n, r) {
                                var e = -1, i = r.length, u = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
                                for(u = t.length > 3 && "function" == typeof u ? (i--, u) : void 0, o && au(r[0], r[1], o) && (u = i < 3 ? void 0 : u, i = 1), n = dt(n); ++e < i;){
                                    var a = r[e];
                                    a && t(n, a, e, u);
                                }
                                return n;
                            });
                        }
                        function bi(t, n) {
                            return function(r, e) {
                                if (null == r) return r;
                                if (!Lo(r)) return t(r, e);
                                for(var i = r.length, u = n ? i : -1, o = dt(r); (n ? u-- : ++u < i) && !1 !== e(o[u], u, o););
                                return r;
                            };
                        }
                        function xi(t) {
                            return function(n, r, e) {
                                for(var i = -1, u = dt(n), o = e(n), a = o.length; a--;){
                                    var f = o[t ? a : ++i];
                                    if (!1 === r(u[f], f, u)) break;
                                }
                                return n;
                            };
                        }
                        function ji(t) {
                            return function(n) {
                                var r = Wn(n = aa(n)) ? Vn(n) : void 0, e = r ? r[0] : n.charAt(0), i = r ? ci(r, 1).join("") : n.slice(1);
                                return e[t]() + i;
                            };
                        }
                        function Ai(t) {
                            return function(n) {
                                return yn(Wa(Ea(n).replace(Et, "")), t, "");
                            };
                        }
                        function Si(t) {
                            return function() {
                                var n = arguments;
                                switch(n.length){
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(n[0]);
                                    case 2:
                                        return new t(n[0], n[1]);
                                    case 3:
                                        return new t(n[0], n[1], n[2]);
                                    case 4:
                                        return new t(n[0], n[1], n[2], n[3]);
                                    case 5:
                                        return new t(n[0], n[1], n[2], n[3], n[4]);
                                    case 6:
                                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                                    case 7:
                                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                                }
                                var r = Tr(t.prototype), e = t.apply(r, n);
                                return Ho(e) ? e : r;
                            };
                        }
                        function Oi(t) {
                            return function(n, r, e) {
                                var i = dt(n);
                                if (!Lo(n)) {
                                    var u = qi(r, 3);
                                    n = wa(n), r = function(t) {
                                        return u(i[t], t, i);
                                    };
                                }
                                var o = t(n, r, e);
                                return o > -1 ? i[u ? n[o] : o] : void 0;
                            };
                        }
                        function Ci(t) {
                            return Zi(function(n) {
                                var r = n.length, e = r, i = Nr.prototype.thru;
                                for(t && n.reverse(); e--;){
                                    var o = n[e];
                                    if ("function" != typeof o) throw new _t(u);
                                    if (i && !a && "wrapper" == Ji(o)) var a = new Nr([], !0);
                                }
                                for(e = a ? e : r; ++e < r;){
                                    var f = Ji(o = n[e]), c = "wrapper" == f ? Vi(o) : void 0;
                                    a = c && cu(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? a[Ji(c[0])].apply(a, c[3]) : 1 == o.length && cu(o) ? a[f]() : a.thru(o);
                                }
                                return function() {
                                    var t = arguments, e = t[0];
                                    if (a && 1 == t.length && ko(e)) return a.plant(e).value();
                                    for(var i = 0, u = r ? n[i].apply(this, t) : e; ++i < r;)u = n[i].call(this, u);
                                    return u;
                                };
                            });
                        }
                        function Ii(t, n, r, i, u, o, a, f, c, l) {
                            var s = 128 & n, h = 1 & n, v = 2 & n, p = 24 & n, d = 512 & n, y = v ? void 0 : Si(t);
                            return function g() {
                                for(var _ = arguments.length, m = e(_), w = _; w--;)m[w] = arguments[w];
                                if (p) var b = Qi(g), x = Dn(m, b);
                                if (i && (m = di(m, i, u, p)), o && (m = yi(m, o, a, p)), _ -= x, p && _ < l) {
                                    var j = Hn(m, b);
                                    return Li(t, n, Ii, g.placeholder, r, m, j, f, c, l - _);
                                }
                                var A = h ? r : this, S = v ? A[t] : t;
                                return _ = m.length, f ? m = yu(m, f) : d && _ > 1 && m.reverse(), s && c < _ && (m.length = c), this && this !== Vt && this instanceof g && (S = y || Si(S)), S.apply(A, m);
                            };
                        }
                        function Ti(t, n) {
                            return function(r, e) {
                                return function(t, n, r, e) {
                                    return fe(t, function(t, i, u) {
                                        n(e, r(t), i, u);
                                    }), e;
                                }(r, t, n(e), {});
                            };
                        }
                        function Mi(t, n) {
                            return function(r, e) {
                                var i;
                                if (void 0 === r && void 0 === e) return n;
                                if (void 0 !== r && (i = r), void 0 !== e) {
                                    if (void 0 === i) return e;
                                    "string" == typeof r || "string" == typeof e ? (r = Ye(r), e = Ye(e)) : (r = qe(r), e = qe(e)), i = t(r, e);
                                }
                                return i;
                            };
                        }
                        function Ni(t) {
                            return Zi(function(n) {
                                return n = pn(n, Nn(qi())), Re(function(r) {
                                    var e = this;
                                    return t(n, function(t) {
                                        return on(t, e, r);
                                    });
                                });
                            });
                        }
                        function Ei(t, n) {
                            var r = (n = void 0 === n ? " " : Ye(n)).length;
                            if (r < 2) return r ? Be(n, t) : n;
                            var e = Be(n, Xn(t / Gn(n)));
                            return Wn(n) ? ci(Vn(e), 0, t).join("") : e.slice(0, t);
                        }
                        function ki(t) {
                            return function(n, r, i) {
                                return i && "number" != typeof i && au(n, r, i) && (r = i = void 0), n = ra(n), void 0 === r ? (r = n, n = 0) : r = ra(r), function(t, n, r, i) {
                                    for(var u = -1, o = or(Xn((n - t) / (r || 1)), 0), a = e(o); o--;)a[i ? o : ++u] = t, t += r;
                                    return a;
                                }(n, r, i = void 0 === i ? n < r ? 1 : -1 : ra(i), t);
                            };
                        }
                        function zi(t) {
                            return function(n, r) {
                                return "string" == typeof n && "string" == typeof r || (n = ua(n), r = ua(r)), t(n, r);
                            };
                        }
                        function Li(t, n, r, e, i, u, o, a, f, c) {
                            var l = 8 & n;
                            n |= l ? 32 : 64, 4 & (n &= ~(l ? 64 : 32)) || (n &= -4);
                            var s = [
                                t,
                                n,
                                i,
                                l ? u : void 0,
                                l ? o : void 0,
                                l ? void 0 : u,
                                l ? void 0 : o,
                                a,
                                f,
                                c
                            ], h = r.apply(void 0, s);
                            return cu(t) && _u(h, s), h.placeholder = e, bu(h, t, n);
                        }
                        function Di(t) {
                            var n = pt[t];
                            return function(t, r) {
                                if (t = ua(t), (r = null == r ? 0 : ar(ea(r), 292)) && er(t)) {
                                    var e = (aa(t) + "e").split("e");
                                    return +((e = (aa(n(e[0] + "e" + (+e[1] + r))) + "e").split("e"))[0] + "e" + (+e[1] - r));
                                }
                                return n(t);
                            };
                        }
                        var Bi = dr && 1 / Zn(new dr([
                            ,
                            -0
                        ]))[1] == 1 / 0 ? function(t) {
                            return new dr(t);
                        } : Ya;
                        function Ri(t) {
                            return function(n) {
                                var r = ru(n);
                                return r == d ? Pn(n) : r == m ? $n(n) : function(t, n) {
                                    return pn(n, function(n) {
                                        return [
                                            n,
                                            t[n]
                                        ];
                                    });
                                }(n, t(n));
                            };
                        }
                        function Ui(t, n, r, i, a, f, c, l) {
                            var s = 2 & n;
                            if (!s && "function" != typeof t) throw new _t(u);
                            var h = i ? i.length : 0;
                            if (h || (n &= -97, i = a = void 0), c = void 0 === c ? c : or(ea(c), 0), l = void 0 === l ? l : ea(l), h -= a ? a.length : 0, 64 & n) {
                                var v = i, p = a;
                                i = a = void 0;
                            }
                            var d = s ? void 0 : Vi(t), y = [
                                t,
                                n,
                                r,
                                i,
                                a,
                                v,
                                p,
                                f,
                                c,
                                l
                            ];
                            if (d && function(t, n) {
                                var r = t[1], e = n[1], i = r | e, u = i < 131, a = 128 == e && 8 == r || 128 == e && 256 == r && t[7].length <= n[8] || 384 == e && n[7].length <= n[8] && 8 == r;
                                if (!u && !a) return t;
                                1 & e && (t[2] = n[2], i |= 1 & r ? 0 : 4);
                                var f = n[3];
                                if (f) {
                                    var c = t[3];
                                    t[3] = c ? di(c, f, n[4]) : f, t[4] = c ? Hn(t[3], o) : n[4];
                                }
                                (f = n[5]) && (c = t[5], t[5] = c ? yi(c, f, n[6]) : f, t[6] = c ? Hn(t[5], o) : n[6]);
                                (f = n[7]) && (t[7] = f);
                                128 & e && (t[8] = null == t[8] ? n[8] : ar(t[8], n[8]));
                                null == t[9] && (t[9] = n[9]);
                                t[0] = n[0], t[1] = i;
                            }(y, d), t = y[0], n = y[1], r = y[2], i = y[3], a = y[4], !(l = y[9] = void 0 === y[9] ? s ? 0 : t.length : or(y[9] - h, 0)) && 24 & n && (n &= -25), n && 1 != n) g = 8 == n || 16 == n ? function(t, n, r) {
                                var i = Si(t);
                                return function u() {
                                    for(var o = arguments.length, a = e(o), f = o, c = Qi(u); f--;)a[f] = arguments[f];
                                    var l = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : Hn(a, c);
                                    if ((o -= l.length) < r) return Li(t, n, Ii, u.placeholder, void 0, a, l, void 0, void 0, r - o);
                                    var s = this && this !== Vt && this instanceof u ? i : t;
                                    return on(s, this, a);
                                };
                            }(t, n, l) : 32 != n && 33 != n || a.length ? Ii.apply(void 0, y) : function(t, n, r, i) {
                                var u = 1 & n, o = Si(t);
                                return function n() {
                                    for(var a = -1, f = arguments.length, c = -1, l = i.length, s = e(l + f), h = this && this !== Vt && this instanceof n ? o : t; ++c < l;)s[c] = i[c];
                                    for(; f--;)s[c++] = arguments[++a];
                                    return on(h, u ? r : this, s);
                                };
                            }(t, n, r, i);
                            else var g = function(t, n, r) {
                                var e = 1 & n, i = Si(t);
                                return function n() {
                                    var u = this && this !== Vt && this instanceof n ? i : t;
                                    return u.apply(e ? r : this, arguments);
                                };
                            }(t, n, r);
                            return bu((d ? Fe : _u)(g, y), t, n);
                        }
                        function Wi(t, n, r, e) {
                            return void 0 === t || To(t, bt[r]) && !At.call(e, r) ? n : t;
                        }
                        function Pi(t, n, r, e, i, u) {
                            return Ho(t) && Ho(n) && (u.set(n, t), Me(t, n, void 0, Pi, u), u.delete(n)), t;
                        }
                        function Fi(t) {
                            return Vo(t) ? void 0 : t;
                        }
                        function Hi(t, n, r, e, i, u) {
                            var o = 1 & r, a = t.length, f = n.length;
                            if (a != f && !(o && f > a)) return !1;
                            var c = u.get(t);
                            if (c && u.get(n)) return c == n;
                            var l = -1, s = !0, h = 2 & r ? new Dr : void 0;
                            for(u.set(t, n), u.set(n, t); ++l < a;){
                                var v = t[l], p = n[l];
                                if (e) var d = o ? e(p, v, l, n, t, u) : e(v, p, l, t, n, u);
                                if (void 0 !== d) {
                                    if (d) continue;
                                    s = !1;
                                    break;
                                }
                                if (h) {
                                    if (!_n(n, function(t, n) {
                                        if (!kn(h, n) && (v === t || i(v, t, r, e, u))) return h.push(n);
                                    })) {
                                        s = !1;
                                        break;
                                    }
                                } else if (v !== p && !i(v, p, r, e, u)) {
                                    s = !1;
                                    break;
                                }
                            }
                            return u.delete(t), u.delete(n), s;
                        }
                        function Zi(t) {
                            return wu(pu(t, void 0, ku), t + "");
                        }
                        function $i(t) {
                            return he(t, wa, tu);
                        }
                        function Gi(t) {
                            return he(t, ba, nu);
                        }
                        var Vi = _r ? function(t) {
                            return _r.get(t);
                        } : Ya;
                        function Ji(t) {
                            for(var n = t.name + "", r = mr[n], e = At.call(mr, n) ? r.length : 0; e--;){
                                var i = r[e], u = i.func;
                                if (null == u || u == t) return i.name;
                            }
                            return n;
                        }
                        function Qi(t) {
                            return (At.call(Ir, "placeholder") ? Ir : t).placeholder;
                        }
                        function qi() {
                            var t = Ir.iteratee || Va;
                            return t = t === Va ? je : t, arguments.length ? t(arguments[0], arguments[1]) : t;
                        }
                        function Yi(t, n) {
                            var r, e, i = t.__data__;
                            return ("string" == (e = typeof (r = n)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== r : null === r) ? i["string" == typeof n ? "string" : "hash"] : i.map;
                        }
                        function Ki(t) {
                            for(var n = wa(t), r = n.length; r--;){
                                var e = n[r], i = t[e];
                                n[r] = [
                                    e,
                                    i,
                                    hu(i)
                                ];
                            }
                            return n;
                        }
                        function Xi(t, n) {
                            var r = function(t, n) {
                                return null == t ? void 0 : t[n];
                            }(t, n);
                            return xe(r) ? r : void 0;
                        }
                        var tu = nr ? function(t) {
                            return null == t ? [] : (t = dt(t), sn(nr(t), function(n) {
                                return Jt.call(t, n);
                            }));
                        } : uf, nu = nr ? function(t) {
                            for(var n = []; t;)dn(n, tu(t)), t = $t(t);
                            return n;
                        } : uf, ru = ve;
                        function eu(t, n, r) {
                            for(var e = -1, i = (n = ai(n, t)).length, u = !1; ++e < i;){
                                var o = Su(n[e]);
                                if (!(u = null != t && r(t, o))) break;
                                t = t[o];
                            }
                            return u || ++e != i ? u : !!(i = null == t ? 0 : t.length) && Fo(i) && ou(o, i) && (ko(t) || Eo(t));
                        }
                        function iu(t) {
                            return "function" != typeof t.constructor || su(t) ? {} : Tr($t(t));
                        }
                        function uu(t) {
                            return ko(t) || Eo(t) || !!(Yt && t && t[Yt]);
                        }
                        function ou(t, n) {
                            var r = typeof t;
                            return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && ft.test(t)) && t > -1 && t % 1 == 0 && t < n;
                        }
                        function au(t, n, r) {
                            if (!Ho(r)) return !1;
                            var e = typeof n;
                            return !!("number" == e ? Lo(r) && ou(n, r.length) : "string" == e && n in r) && To(r[n], t);
                        }
                        function fu(t, n) {
                            if (ko(t)) return !1;
                            var r = typeof t;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !Yo(t)) || Z.test(t) || !H.test(t) || null != n && t in dt(n);
                        }
                        function cu(t) {
                            var n = Ji(t), r = Ir[n];
                            if ("function" != typeof r || !(n in Er.prototype)) return !1;
                            if (t === r) return !0;
                            var e = Vi(r);
                            return !!e && t === e[0];
                        }
                        (hr && ru(new hr(new ArrayBuffer(1))) != A || vr && ru(new vr) != d || pr && "[object Promise]" != ru(pr.resolve()) || dr && ru(new dr) != m || yr && ru(new yr) != x) && (ru = function(t) {
                            var n = ve(t), r = n == g ? t.constructor : void 0, e = r ? Ou(r) : "";
                            if (e) switch(e){
                                case wr:
                                    return A;
                                case br:
                                    return d;
                                case xr:
                                    return "[object Promise]";
                                case jr:
                                    return m;
                                case Ar:
                                    return x;
                            }
                            return n;
                        });
                        var lu = xt ? Wo : of;
                        function su(t) {
                            var n = t && t.constructor;
                            return t === ("function" == typeof n && n.prototype || bt);
                        }
                        function hu(t) {
                            return t == t && !Ho(t);
                        }
                        function vu(t, n) {
                            return function(r) {
                                return null != r && r[t] === n && (void 0 !== n || t in dt(r));
                            };
                        }
                        function pu(t, n, r) {
                            return n = or(void 0 === n ? t.length - 1 : n, 0), function() {
                                for(var i = arguments, u = -1, o = or(i.length - n, 0), a = e(o); ++u < o;)a[u] = i[n + u];
                                u = -1;
                                for(var f = e(n + 1); ++u < n;)f[u] = i[u];
                                return f[n] = r(a), on(t, this, f);
                            };
                        }
                        function du(t, n) {
                            return n.length < 2 ? t : se(t, $e(n, 0, -1));
                        }
                        function yu(t, n) {
                            for(var r = t.length, e = ar(n.length, r), i = gi(t); e--;){
                                var u = n[e];
                                t[e] = ou(u, r) ? i[u] : void 0;
                            }
                            return t;
                        }
                        function gu(t, n) {
                            if (("constructor" !== n || "function" != typeof t[n]) && "__proto__" != n) return t[n];
                        }
                        var _u = xu(Fe), mu = Kn || function(t, n) {
                            return Vt.setTimeout(t, n);
                        }, wu = xu(He);
                        function bu(t, n, r) {
                            var e = n + "";
                            return wu(t, function(t, n) {
                                var r = n.length;
                                if (!r) return t;
                                var e = r - 1;
                                return n[e] = (r > 1 ? "& " : "") + n[e], n = n.join(r > 2 ? ", " : " "), t.replace(Y, "{\n/* [wrapped with " + n + "] */\n");
                            }(e, function(t, n) {
                                return fn(a, function(r) {
                                    var e = "_." + r[0];
                                    n & r[1] && !hn(t, e) && t.push(e);
                                }), t.sort();
                            }(function(t) {
                                var n = t.match(K);
                                return n ? n[1].split(X) : [];
                            }(e), r)));
                        }
                        function xu(t) {
                            var n = 0, r = 0;
                            return function() {
                                var e = fr(), i = 16 - (e - r);
                                if (r = e, i > 0) {
                                    if (++n >= 800) return arguments[0];
                                } else n = 0;
                                return t.apply(void 0, arguments);
                            };
                        }
                        function ju(t, n) {
                            var r = -1, e = t.length, i = e - 1;
                            for(n = void 0 === n ? e : n; ++r < n;){
                                var u = De(r, i), o = t[u];
                                t[u] = t[r], t[r] = o;
                            }
                            return t.length = n, t;
                        }
                        var Au = function(t) {
                            var n = jo(t, function(t) {
                                return 500 === r.size && r.clear(), t;
                            }), r = n.cache;
                            return n;
                        }(function(t) {
                            var n = [];
                            return 46 === t.charCodeAt(0) && n.push(""), t.replace($, function(t, r, e, i) {
                                n.push(e ? i.replace(nt, "$1") : r || t);
                            }), n;
                        });
                        function Su(t) {
                            if ("string" == typeof t || Yo(t)) return t;
                            var n = t + "";
                            return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                        }
                        function Ou(t) {
                            if (null != t) {
                                try {
                                    return jt.call(t);
                                } catch (t1) {}
                                try {
                                    return t + "";
                                } catch (t2) {}
                            }
                            return "";
                        }
                        function Cu(t) {
                            if (t instanceof Er) return t.clone();
                            var n = new Nr(t.__wrapped__, t.__chain__);
                            return n.__actions__ = gi(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
                        }
                        var Iu = Re(function(t, n) {
                            return Do(t) ? Xr(t, ue(n, 1, Do, !0)) : [];
                        }), Tu = Re(function(t, n) {
                            var r = Ru(n);
                            return Do(r) && (r = void 0), Do(t) ? Xr(t, ue(n, 1, Do, !0), qi(r, 2)) : [];
                        }), Mu = Re(function(t, n) {
                            var r = Ru(n);
                            return Do(r) && (r = void 0), Do(t) ? Xr(t, ue(n, 1, Do, !0), void 0, r) : [];
                        });
                        function Nu(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            if (!e) return -1;
                            var i = null == r ? 0 : ea(r);
                            return i < 0 && (i = or(e + i, 0)), bn(t, qi(n, 3), i);
                        }
                        function Eu(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            if (!e) return -1;
                            var i = e - 1;
                            return void 0 !== r && (i = ea(r), i = r < 0 ? or(e + i, 0) : ar(i, e - 1)), bn(t, qi(n, 3), i, !0);
                        }
                        function ku(t) {
                            return (null == t ? 0 : t.length) ? ue(t, 1) : [];
                        }
                        function zu(t) {
                            return t && t.length ? t[0] : void 0;
                        }
                        var Lu = Re(function(t) {
                            var n = pn(t, ui);
                            return n.length && n[0] === t[0] ? ge(n) : [];
                        }), Du = Re(function(t) {
                            var n = Ru(t), r = pn(t, ui);
                            return n === Ru(r) ? n = void 0 : r.pop(), r.length && r[0] === t[0] ? ge(r, qi(n, 2)) : [];
                        }), Bu = Re(function(t) {
                            var n = Ru(t), r = pn(t, ui);
                            return (n = "function" == typeof n ? n : void 0) && r.pop(), r.length && r[0] === t[0] ? ge(r, void 0, n) : [];
                        });
                        function Ru(t) {
                            var n = null == t ? 0 : t.length;
                            return n ? t[n - 1] : void 0;
                        }
                        var Uu = Re(Wu);
                        function Wu(t, n) {
                            return t && t.length && n && n.length ? ze(t, n) : t;
                        }
                        var Pu = Zi(function(t, n) {
                            var r = null == t ? 0 : t.length, e = Jr(t, n);
                            return Le(t, pn(n, function(t) {
                                return ou(t, r) ? +t : t;
                            }).sort(pi)), e;
                        });
                        function Fu(t) {
                            return null == t ? t : sr.call(t);
                        }
                        var Hu = Re(function(t) {
                            return Ke(ue(t, 1, Do, !0));
                        }), Zu = Re(function(t) {
                            var n = Ru(t);
                            return Do(n) && (n = void 0), Ke(ue(t, 1, Do, !0), qi(n, 2));
                        }), $u = Re(function(t) {
                            var n = Ru(t);
                            return n = "function" == typeof n ? n : void 0, Ke(ue(t, 1, Do, !0), void 0, n);
                        });
                        function Gu(t) {
                            if (!t || !t.length) return [];
                            var n = 0;
                            return t = sn(t, function(t) {
                                if (Do(t)) return n = or(t.length, n), !0;
                            }), Mn(n, function(n) {
                                return pn(t, On(n));
                            });
                        }
                        function Vu(t, n) {
                            if (!t || !t.length) return [];
                            var r = Gu(t);
                            return null == n ? r : pn(r, function(t) {
                                return on(n, void 0, t);
                            });
                        }
                        var Ju = Re(function(t, n) {
                            return Do(t) ? Xr(t, n) : [];
                        }), Qu = Re(function(t) {
                            return ei(sn(t, Do));
                        }), qu = Re(function(t) {
                            var n = Ru(t);
                            return Do(n) && (n = void 0), ei(sn(t, Do), qi(n, 2));
                        }), Yu = Re(function(t) {
                            var n = Ru(t);
                            return n = "function" == typeof n ? n : void 0, ei(sn(t, Do), void 0, n);
                        }), Ku = Re(Gu);
                        var Xu = Re(function(t) {
                            var n = t.length, r = n > 1 ? t[n - 1] : void 0;
                            return r = "function" == typeof r ? (t.pop(), r) : void 0, Vu(t, r);
                        });
                        function to(t) {
                            var n = Ir(t);
                            return n.__chain__ = !0, n;
                        }
                        function no(t, n) {
                            return n(t);
                        }
                        var ro = Zi(function(t) {
                            var n = t.length, r = n ? t[0] : 0, e = this.__wrapped__, i = function(n) {
                                return Jr(n, t);
                            };
                            return !(n > 1 || this.__actions__.length) && e instanceof Er && ou(r) ? ((e = e.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                                func: no,
                                args: [
                                    i
                                ],
                                thisArg: void 0
                            }), new Nr(e, this.__chain__).thru(function(t) {
                                return n && !t.length && t.push(void 0), t;
                            })) : this.thru(i);
                        });
                        var eo = mi(function(t, n, r) {
                            At.call(t, r) ? ++t[r] : Vr(t, r, 1);
                        });
                        var io = Oi(Nu), uo = Oi(Eu);
                        function oo(t, n) {
                            return (ko(t) ? fn : te)(t, qi(n, 3));
                        }
                        function ao(t, n) {
                            return (ko(t) ? cn : ne)(t, qi(n, 3));
                        }
                        var fo = mi(function(t, n, r) {
                            At.call(t, r) ? t[r].push(n) : Vr(t, r, [
                                n
                            ]);
                        });
                        var co = Re(function(t, n, r) {
                            var i = -1, u = "function" == typeof n, o = Lo(t) ? e(t.length) : [];
                            return te(t, function(t) {
                                o[++i] = u ? on(n, t, r) : _e(t, n, r);
                            }), o;
                        }), lo = mi(function(t, n, r) {
                            Vr(t, r, n);
                        });
                        function so(t, n) {
                            return (ko(t) ? pn : Ce)(t, qi(n, 3));
                        }
                        var ho = mi(function(t, n, r) {
                            t[r ? 0 : 1].push(n);
                        }, function() {
                            return [
                                [],
                                []
                            ];
                        });
                        var vo = Re(function(t, n) {
                            if (null == t) return [];
                            var r = n.length;
                            return r > 1 && au(t, n[0], n[1]) ? n = [] : r > 2 && au(n[0], n[1], n[2]) && (n = [
                                n[0]
                            ]), Ee(t, ue(n, 1), []);
                        }), po = Yn || function() {
                            return Vt.Date.now();
                        };
                        function yo(t, n, r) {
                            return n = r ? void 0 : n, Ui(t, 128, void 0, void 0, void 0, void 0, n = t && null == n ? t.length : n);
                        }
                        function go(t, n) {
                            var r;
                            if ("function" != typeof n) throw new _t(u);
                            return t = ea(t), function() {
                                return --t > 0 && (r = n.apply(this, arguments)), t <= 1 && (n = void 0), r;
                            };
                        }
                        var _o = Re(function(t, n, r) {
                            var e = 1;
                            if (r.length) {
                                var i = Hn(r, Qi(_o));
                                e |= 32;
                            }
                            return Ui(t, e, n, r, i);
                        }), mo = Re(function(t, n, r) {
                            var e = 3;
                            if (r.length) {
                                var i = Hn(r, Qi(mo));
                                e |= 32;
                            }
                            return Ui(n, e, t, r, i);
                        });
                        function wo(t, n, r) {
                            var e, i, o, a, f, c, l = 0, s = !1, h = !1, v = !0;
                            if ("function" != typeof t) throw new _t(u);
                            function p(n) {
                                var r = e, u = i;
                                return e = i = void 0, l = n, a = t.apply(u, r);
                            }
                            function d(t) {
                                return l = t, f = mu(g, n), s ? p(t) : a;
                            }
                            function y(t) {
                                var r = t - c;
                                return void 0 === c || r >= n || r < 0 || h && t - l >= o;
                            }
                            function g() {
                                var t = po();
                                if (y(t)) return _(t);
                                f = mu(g, function(t) {
                                    var r = n - (t - c);
                                    return h ? ar(r, o - (t - l)) : r;
                                }(t));
                            }
                            function _(t) {
                                return f = void 0, v && e ? p(t) : (e = i = void 0, a);
                            }
                            function m() {
                                var t = po(), r = y(t);
                                if (e = arguments, i = this, c = t, r) {
                                    if (void 0 === f) return d(c);
                                    if (h) return li(f), f = mu(g, n), p(c);
                                }
                                return void 0 === f && (f = mu(g, n)), a;
                            }
                            return n = ua(n) || 0, Ho(r) && (s = !!r.leading, o = (h = "maxWait" in r) ? or(ua(r.maxWait) || 0, n) : o, v = "trailing" in r ? !!r.trailing : v), m.cancel = function() {
                                void 0 !== f && li(f), l = 0, e = c = i = f = void 0;
                            }, m.flush = function() {
                                return void 0 === f ? a : _(po());
                            }, m;
                        }
                        var bo = Re(function(t, n) {
                            return Kr(t, 1, n);
                        }), xo = Re(function(t, n, r) {
                            return Kr(t, ua(n) || 0, r);
                        });
                        function jo(t, n) {
                            if ("function" != typeof t || null != n && "function" != typeof n) throw new _t(u);
                            var r = function() {
                                var e = arguments, i = n ? n.apply(this, e) : e[0], u = r.cache;
                                if (u.has(i)) return u.get(i);
                                var o = t.apply(this, e);
                                return r.cache = u.set(i, o) || u, o;
                            };
                            return r.cache = new (jo.Cache || Lr), r;
                        }
                        function Ao(t) {
                            if ("function" != typeof t) throw new _t(u);
                            return function() {
                                var n = arguments;
                                switch(n.length){
                                    case 0:
                                        return !t.call(this);
                                    case 1:
                                        return !t.call(this, n[0]);
                                    case 2:
                                        return !t.call(this, n[0], n[1]);
                                    case 3:
                                        return !t.call(this, n[0], n[1], n[2]);
                                }
                                return !t.apply(this, n);
                            };
                        }
                        jo.Cache = Lr;
                        var So = fi(function(t, n) {
                            var r = (n = 1 == n.length && ko(n[0]) ? pn(n[0], Nn(qi())) : pn(ue(n, 1), Nn(qi()))).length;
                            return Re(function(e) {
                                for(var i = -1, u = ar(e.length, r); ++i < u;)e[i] = n[i].call(this, e[i]);
                                return on(t, this, e);
                            });
                        }), Oo = Re(function(t, n) {
                            return Ui(t, 32, void 0, n, Hn(n, Qi(Oo)));
                        }), Co = Re(function(t, n) {
                            return Ui(t, 64, void 0, n, Hn(n, Qi(Co)));
                        }), Io = Zi(function(t, n) {
                            return Ui(t, 256, void 0, void 0, void 0, n);
                        });
                        function To(t, n) {
                            return t === n || t != t && n != n;
                        }
                        var Mo = zi(pe), No = zi(function(t, n) {
                            return t >= n;
                        }), Eo = me(function() {
                            return arguments;
                        }()) ? me : function(t) {
                            return Zo(t) && At.call(t, "callee") && !Jt.call(t, "callee");
                        }, ko = e.isArray, zo = Xt ? Nn(Xt) : function(t) {
                            return Zo(t) && ve(t) == j;
                        };
                        function Lo(t) {
                            return null != t && Fo(t.length) && !Wo(t);
                        }
                        function Do(t) {
                            return Zo(t) && Lo(t);
                        }
                        var Bo = rr || of, Ro = tn ? Nn(tn) : function(t) {
                            return Zo(t) && ve(t) == s;
                        };
                        function Uo(t) {
                            if (!Zo(t)) return !1;
                            var n = ve(t);
                            return n == h || "[object DOMException]" == n || "string" == typeof t.message && "string" == typeof t.name && !Vo(t);
                        }
                        function Wo(t) {
                            if (!Ho(t)) return !1;
                            var n = ve(t);
                            return n == v || n == p || "[object AsyncFunction]" == n || "[object Proxy]" == n;
                        }
                        function Po(t) {
                            return "number" == typeof t && t == ea(t);
                        }
                        function Fo(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
                        }
                        function Ho(t) {
                            var n = typeof t;
                            return null != t && ("object" == n || "function" == n);
                        }
                        function Zo(t) {
                            return null != t && "object" == typeof t;
                        }
                        var $o = nn ? Nn(nn) : function(t) {
                            return Zo(t) && ru(t) == d;
                        };
                        function Go(t) {
                            return "number" == typeof t || Zo(t) && ve(t) == y;
                        }
                        function Vo(t) {
                            if (!Zo(t) || ve(t) != g) return !1;
                            var n = $t(t);
                            if (null === n) return !0;
                            var r = At.call(n, "constructor") && n.constructor;
                            return "function" == typeof r && r instanceof r && jt.call(r) == It;
                        }
                        var Jo = rn ? Nn(rn) : function(t) {
                            return Zo(t) && ve(t) == _;
                        };
                        var Qo = en ? Nn(en) : function(t) {
                            return Zo(t) && ru(t) == m;
                        };
                        function qo(t) {
                            return "string" == typeof t || !ko(t) && Zo(t) && ve(t) == w;
                        }
                        function Yo(t) {
                            return "symbol" == typeof t || Zo(t) && ve(t) == b;
                        }
                        var Ko = un ? Nn(un) : function(t) {
                            return Zo(t) && Fo(t.length) && !!Wt[ve(t)];
                        };
                        var Xo = zi(Oe), ta = zi(function(t, n) {
                            return t <= n;
                        });
                        function na(t) {
                            if (!t) return [];
                            if (Lo(t)) return qo(t) ? Vn(t) : gi(t);
                            if (Kt && t[Kt]) return function(t) {
                                for(var n, r = []; !(n = t.next()).done;)r.push(n.value);
                                return r;
                            }(t[Kt]());
                            var n = ru(t);
                            return (n == d ? Pn : n == m ? Zn : Ta)(t);
                        }
                        function ra(t) {
                            return t ? (t = ua(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
                        }
                        function ea(t) {
                            var n = ra(t), r = n % 1;
                            return n == n ? r ? n - r : n : 0;
                        }
                        function ia(t) {
                            return t ? Qr(ea(t), 0, 4294967295) : 0;
                        }
                        function ua(t) {
                            if ("number" == typeof t) return t;
                            if (Yo(t)) return NaN;
                            if (Ho(t)) {
                                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = Ho(n) ? n + "" : n;
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = t.replace(J, "");
                            var r = ut.test(t);
                            return r || at.test(t) ? Zt(t.slice(2), r ? 2 : 8) : it.test(t) ? NaN : +t;
                        }
                        function oa(t) {
                            return _i(t, ba(t));
                        }
                        function aa(t) {
                            return null == t ? "" : Ye(t);
                        }
                        var fa = wi(function(t, n) {
                            if (su(n) || Lo(n)) _i(n, wa(n), t);
                            else for(var r in n)At.call(n, r) && Hr(t, r, n[r]);
                        }), ca = wi(function(t, n) {
                            _i(n, ba(n), t);
                        }), la = wi(function(t, n, r, e) {
                            _i(n, ba(n), t, e);
                        }), sa = wi(function(t, n, r, e) {
                            _i(n, wa(n), t, e);
                        }), ha = Zi(Jr);
                        var va = Re(function(t, n) {
                            t = dt(t);
                            var r = -1, e = n.length, i = e > 2 ? n[2] : void 0;
                            for(i && au(n[0], n[1], i) && (e = 1); ++r < e;)for(var u = n[r], o = ba(u), a = -1, f = o.length; ++a < f;){
                                var c = o[a], l = t[c];
                                (void 0 === l || To(l, bt[c]) && !At.call(t, c)) && (t[c] = u[c]);
                            }
                            return t;
                        }), pa = Re(function(t) {
                            return t.push(void 0, Pi), on(ja, void 0, t);
                        });
                        function da(t, n, r) {
                            var e = null == t ? void 0 : se(t, n);
                            return void 0 === e ? r : e;
                        }
                        function ya(t, n) {
                            return null != t && eu(t, n, ye);
                        }
                        var ga = Ti(function(t, n, r) {
                            null != n && "function" != typeof n.toString && (n = Ct.call(n)), t[n] = r;
                        }, Ha(Ga)), _a = Ti(function(t, n, r) {
                            null != n && "function" != typeof n.toString && (n = Ct.call(n)), At.call(t, n) ? t[n].push(r) : t[n] = [
                                r
                            ];
                        }, qi), ma = Re(_e);
                        function wa(t) {
                            return Lo(t) ? Rr(t) : Ae(t);
                        }
                        function ba(t) {
                            return Lo(t) ? Rr(t, !0) : Se(t);
                        }
                        var xa = wi(function(t, n, r) {
                            Me(t, n, r);
                        }), ja = wi(function(t, n, r, e) {
                            Me(t, n, r, e);
                        }), Aa = Zi(function(t, n) {
                            var r = {};
                            if (null == t) return r;
                            var e = !1;
                            n = pn(n, function(n) {
                                return n = ai(n, t), e || (e = n.length > 1), n;
                            }), _i(t, Gi(t), r), e && (r = qr(r, 7, Fi));
                            for(var i = n.length; i--;)Xe(r, n[i]);
                            return r;
                        });
                        var Sa = Zi(function(t, n) {
                            return null == t ? {} : function(t, n) {
                                return ke(t, n, function(n, r) {
                                    return ya(t, r);
                                });
                            }(t, n);
                        });
                        function Oa(t, n) {
                            if (null == t) return {};
                            var r = pn(Gi(t), function(t) {
                                return [
                                    t
                                ];
                            });
                            return n = qi(n), ke(t, r, function(t, r) {
                                return n(t, r[0]);
                            });
                        }
                        var Ca = Ri(wa), Ia = Ri(ba);
                        function Ta(t) {
                            return null == t ? [] : En(t, wa(t));
                        }
                        var Ma = Ai(function(t, n, r) {
                            return n = n.toLowerCase(), t + (r ? Na(n) : n);
                        });
                        function Na(t) {
                            return Ua(aa(t).toLowerCase());
                        }
                        function Ea(t) {
                            return (t = aa(t)) && t.replace(ct, Bn).replace(kt, "");
                        }
                        var ka = Ai(function(t, n, r) {
                            return t + (r ? "-" : "") + n.toLowerCase();
                        }), za = Ai(function(t, n, r) {
                            return t + (r ? " " : "") + n.toLowerCase();
                        }), La = ji("toLowerCase");
                        var Da = Ai(function(t, n, r) {
                            return t + (r ? "_" : "") + n.toLowerCase();
                        });
                        var Ba = Ai(function(t, n, r) {
                            return t + (r ? " " : "") + Ua(n);
                        });
                        var Ra = Ai(function(t, n, r) {
                            return t + (r ? " " : "") + n.toUpperCase();
                        }), Ua = ji("toUpperCase");
                        function Wa(t, n, r) {
                            return t = aa(t), void 0 === (n = r ? void 0 : n) ? function(t) {
                                return Bt.test(t);
                            }(t) ? function(t) {
                                return t.match(Lt) || [];
                            }(t) : function(t) {
                                return t.match(tt) || [];
                            }(t) : t.match(n) || [];
                        }
                        var Pa = Re(function(t, n) {
                            try {
                                return on(t, void 0, n);
                            } catch (t1) {
                                return Uo(t1) ? t1 : new ht(t1);
                            }
                        }), Fa = Zi(function(t, n) {
                            return fn(n, function(n) {
                                n = Su(n), Vr(t, n, _o(t[n], t));
                            }), t;
                        });
                        function Ha(t) {
                            return function() {
                                return t;
                            };
                        }
                        var Za = Ci(), $a = Ci(!0);
                        function Ga(t) {
                            return t;
                        }
                        function Va(t) {
                            return je("function" == typeof t ? t : qr(t, 1));
                        }
                        var Ja = Re(function(t, n) {
                            return function(r) {
                                return _e(r, t, n);
                            };
                        }), Qa = Re(function(t, n) {
                            return function(r) {
                                return _e(t, r, n);
                            };
                        });
                        function qa(t, n, r) {
                            var e = wa(n), i = le(n, e);
                            null != r || Ho(n) && (i.length || !e.length) || (r = n, n = t, t = this, i = le(n, wa(n)));
                            var u = !(Ho(r) && "chain" in r && !r.chain), o = Wo(t);
                            return fn(i, function(r) {
                                var e = n[r];
                                t[r] = e, o && (t.prototype[r] = function() {
                                    var n = this.__chain__;
                                    if (u || n) {
                                        var r = t(this.__wrapped__), i = r.__actions__ = gi(this.__actions__);
                                        return i.push({
                                            func: e,
                                            args: arguments,
                                            thisArg: t
                                        }), r.__chain__ = n, r;
                                    }
                                    return e.apply(t, dn([
                                        this.value()
                                    ], arguments));
                                });
                            }), t;
                        }
                        function Ya() {}
                        var Ka = Ni(pn), Xa = Ni(ln), tf = Ni(_n);
                        function nf(t) {
                            return fu(t) ? On(Su(t)) : function(t) {
                                return function(n) {
                                    return se(n, t);
                                };
                            }(t);
                        }
                        var rf = ki(), ef = ki(!0);
                        function uf() {
                            return [];
                        }
                        function of() {
                            return !1;
                        }
                        var af = Mi(function(t, n) {
                            return t + n;
                        }, 0), ff = Di("ceil"), cf = Mi(function(t, n) {
                            return t / n;
                        }, 1), lf = Di("floor");
                        var sf, hf = Mi(function(t, n) {
                            return t * n;
                        }, 1), vf = Di("round"), pf = Mi(function(t, n) {
                            return t - n;
                        }, 0);
                        return Ir.after = function(t, n) {
                            if ("function" != typeof n) throw new _t(u);
                            return t = ea(t), function() {
                                if (--t < 1) return n.apply(this, arguments);
                            };
                        }, Ir.ary = yo, Ir.assign = fa, Ir.assignIn = ca, Ir.assignInWith = la, Ir.assignWith = sa, Ir.at = ha, Ir.before = go, Ir.bind = _o, Ir.bindAll = Fa, Ir.bindKey = mo, Ir.castArray = function() {
                            if (!arguments.length) return [];
                            var t = arguments[0];
                            return ko(t) ? t : [
                                t
                            ];
                        }, Ir.chain = to, Ir.chunk = function(t, n, r) {
                            n = (r ? au(t, n, r) : void 0 === n) ? 1 : or(ea(n), 0);
                            var i = null == t ? 0 : t.length;
                            if (!i || n < 1) return [];
                            for(var u = 0, o = 0, a = e(Xn(i / n)); u < i;)a[o++] = $e(t, u, u += n);
                            return a;
                        }, Ir.compact = function(t) {
                            for(var n = -1, r = null == t ? 0 : t.length, e = 0, i = []; ++n < r;){
                                var u = t[n];
                                u && (i[e++] = u);
                            }
                            return i;
                        }, Ir.concat = function() {
                            var t = arguments.length;
                            if (!t) return [];
                            for(var n = e(t - 1), r = arguments[0], i = t; i--;)n[i - 1] = arguments[i];
                            return dn(ko(r) ? gi(r) : [
                                r
                            ], ue(n, 1));
                        }, Ir.cond = function(t) {
                            var n = null == t ? 0 : t.length, r = qi();
                            return t = n ? pn(t, function(t) {
                                if ("function" != typeof t[1]) throw new _t(u);
                                return [
                                    r(t[0]),
                                    t[1]
                                ];
                            }) : [], Re(function(r) {
                                for(var e = -1; ++e < n;){
                                    var i = t[e];
                                    if (on(i[0], this, r)) return on(i[1], this, r);
                                }
                            });
                        }, Ir.conforms = function(t) {
                            return function(t) {
                                var n = wa(t);
                                return function(r) {
                                    return Yr(r, t, n);
                                };
                            }(qr(t, 1));
                        }, Ir.constant = Ha, Ir.countBy = eo, Ir.create = function(t, n) {
                            var r = Tr(t);
                            return null == n ? r : Gr(r, n);
                        }, Ir.curry = function t(n, r, e) {
                            var i = Ui(n, 8, void 0, void 0, void 0, void 0, void 0, r = e ? void 0 : r);
                            return i.placeholder = t.placeholder, i;
                        }, Ir.curryRight = function t(n, r, e) {
                            var i = Ui(n, 16, void 0, void 0, void 0, void 0, void 0, r = e ? void 0 : r);
                            return i.placeholder = t.placeholder, i;
                        }, Ir.debounce = wo, Ir.defaults = va, Ir.defaultsDeep = pa, Ir.defer = bo, Ir.delay = xo, Ir.difference = Iu, Ir.differenceBy = Tu, Ir.differenceWith = Mu, Ir.drop = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            return e ? $e(t, (n = r || void 0 === n ? 1 : ea(n)) < 0 ? 0 : n, e) : [];
                        }, Ir.dropRight = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            return e ? $e(t, 0, (n = e - (n = r || void 0 === n ? 1 : ea(n))) < 0 ? 0 : n) : [];
                        }, Ir.dropRightWhile = function(t, n) {
                            return t && t.length ? ni(t, qi(n, 3), !0, !0) : [];
                        }, Ir.dropWhile = function(t, n) {
                            return t && t.length ? ni(t, qi(n, 3), !0) : [];
                        }, Ir.fill = function(t, n, r, e) {
                            var i = null == t ? 0 : t.length;
                            return i ? (r && "number" != typeof r && au(t, n, r) && (r = 0, e = i), function(t, n, r, e) {
                                var i = t.length;
                                for((r = ea(r)) < 0 && (r = -r > i ? 0 : i + r), (e = void 0 === e || e > i ? i : ea(e)) < 0 && (e += i), e = r > e ? 0 : ia(e); r < e;)t[r++] = n;
                                return t;
                            }(t, n, r, e)) : [];
                        }, Ir.filter = function(t, n) {
                            return (ko(t) ? sn : ie)(t, qi(n, 3));
                        }, Ir.flatMap = function(t, n) {
                            return ue(so(t, n), 1);
                        }, Ir.flatMapDeep = function(t, n) {
                            return ue(so(t, n), 1 / 0);
                        }, Ir.flatMapDepth = function(t, n, r) {
                            return r = void 0 === r ? 1 : ea(r), ue(so(t, n), r);
                        }, Ir.flatten = ku, Ir.flattenDeep = function(t) {
                            return (null == t ? 0 : t.length) ? ue(t, 1 / 0) : [];
                        }, Ir.flattenDepth = function(t, n) {
                            return (null == t ? 0 : t.length) ? ue(t, n = void 0 === n ? 1 : ea(n)) : [];
                        }, Ir.flip = function(t) {
                            return Ui(t, 512);
                        }, Ir.flow = Za, Ir.flowRight = $a, Ir.fromPairs = function(t) {
                            for(var n = -1, r = null == t ? 0 : t.length, e = {}; ++n < r;){
                                var i = t[n];
                                e[i[0]] = i[1];
                            }
                            return e;
                        }, Ir.functions = function(t) {
                            return null == t ? [] : le(t, wa(t));
                        }, Ir.functionsIn = function(t) {
                            return null == t ? [] : le(t, ba(t));
                        }, Ir.groupBy = fo, Ir.initial = function(t) {
                            return (null == t ? 0 : t.length) ? $e(t, 0, -1) : [];
                        }, Ir.intersection = Lu, Ir.intersectionBy = Du, Ir.intersectionWith = Bu, Ir.invert = ga, Ir.invertBy = _a, Ir.invokeMap = co, Ir.iteratee = Va, Ir.keyBy = lo, Ir.keys = wa, Ir.keysIn = ba, Ir.map = so, Ir.mapKeys = function(t, n) {
                            var r = {};
                            return n = qi(n, 3), fe(t, function(t, e, i) {
                                Vr(r, n(t, e, i), t);
                            }), r;
                        }, Ir.mapValues = function(t, n) {
                            var r = {};
                            return n = qi(n, 3), fe(t, function(t, e, i) {
                                Vr(r, e, n(t, e, i));
                            }), r;
                        }, Ir.matches = function(t) {
                            return Ie(qr(t, 1));
                        }, Ir.matchesProperty = function(t, n) {
                            return Te(t, qr(n, 1));
                        }, Ir.memoize = jo, Ir.merge = xa, Ir.mergeWith = ja, Ir.method = Ja, Ir.methodOf = Qa, Ir.mixin = qa, Ir.negate = Ao, Ir.nthArg = function(t) {
                            return t = ea(t), Re(function(n) {
                                return Ne(n, t);
                            });
                        }, Ir.omit = Aa, Ir.omitBy = function(t, n) {
                            return Oa(t, Ao(qi(n)));
                        }, Ir.once = function(t) {
                            return go(2, t);
                        }, Ir.orderBy = function(t, n, r, e) {
                            return null == t ? [] : (ko(n) || (n = null == n ? [] : [
                                n
                            ]), ko(r = e ? void 0 : r) || (r = null == r ? [] : [
                                r
                            ]), Ee(t, n, r));
                        }, Ir.over = Ka, Ir.overArgs = So, Ir.overEvery = Xa, Ir.overSome = tf, Ir.partial = Oo, Ir.partialRight = Co, Ir.partition = ho, Ir.pick = Sa, Ir.pickBy = Oa, Ir.property = nf, Ir.propertyOf = function(t) {
                            return function(n) {
                                return null == t ? void 0 : se(t, n);
                            };
                        }, Ir.pull = Uu, Ir.pullAll = Wu, Ir.pullAllBy = function(t, n, r) {
                            return t && t.length && n && n.length ? ze(t, n, qi(r, 2)) : t;
                        }, Ir.pullAllWith = function(t, n, r) {
                            return t && t.length && n && n.length ? ze(t, n, void 0, r) : t;
                        }, Ir.pullAt = Pu, Ir.range = rf, Ir.rangeRight = ef, Ir.rearg = Io, Ir.reject = function(t, n) {
                            return (ko(t) ? sn : ie)(t, Ao(qi(n, 3)));
                        }, Ir.remove = function(t, n) {
                            var r = [];
                            if (!t || !t.length) return r;
                            var e = -1, i = [], u = t.length;
                            for(n = qi(n, 3); ++e < u;){
                                var o = t[e];
                                n(o, e, t) && (r.push(o), i.push(e));
                            }
                            return Le(t, i), r;
                        }, Ir.rest = function(t, n) {
                            if ("function" != typeof t) throw new _t(u);
                            return Re(t, n = void 0 === n ? n : ea(n));
                        }, Ir.reverse = Fu, Ir.sampleSize = function(t, n, r) {
                            return n = (r ? au(t, n, r) : void 0 === n) ? 1 : ea(n), (ko(t) ? Wr : We)(t, n);
                        }, Ir.set = function(t, n, r) {
                            return null == t ? t : Pe(t, n, r);
                        }, Ir.setWith = function(t, n, r, e) {
                            return e = "function" == typeof e ? e : void 0, null == t ? t : Pe(t, n, r, e);
                        }, Ir.shuffle = function(t) {
                            return (ko(t) ? Pr : Ze)(t);
                        }, Ir.slice = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            return e ? (r && "number" != typeof r && au(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : ea(n), r = void 0 === r ? e : ea(r)), $e(t, n, r)) : [];
                        }, Ir.sortBy = vo, Ir.sortedUniq = function(t) {
                            return t && t.length ? Qe(t) : [];
                        }, Ir.sortedUniqBy = function(t, n) {
                            return t && t.length ? Qe(t, qi(n, 2)) : [];
                        }, Ir.split = function(t, n, r) {
                            return r && "number" != typeof r && au(t, n, r) && (n = r = void 0), (r = void 0 === r ? 4294967295 : r >>> 0) ? (t = aa(t)) && ("string" == typeof n || null != n && !Jo(n)) && !(n = Ye(n)) && Wn(t) ? ci(Vn(t), 0, r) : t.split(n, r) : [];
                        }, Ir.spread = function(t, n) {
                            if ("function" != typeof t) throw new _t(u);
                            return n = null == n ? 0 : or(ea(n), 0), Re(function(r) {
                                var e = r[n], i = ci(r, 0, n);
                                return e && dn(i, e), on(t, this, i);
                            });
                        }, Ir.tail = function(t) {
                            var n = null == t ? 0 : t.length;
                            return n ? $e(t, 1, n) : [];
                        }, Ir.take = function(t, n, r) {
                            return t && t.length ? $e(t, 0, (n = r || void 0 === n ? 1 : ea(n)) < 0 ? 0 : n) : [];
                        }, Ir.takeRight = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            return e ? $e(t, (n = e - (n = r || void 0 === n ? 1 : ea(n))) < 0 ? 0 : n, e) : [];
                        }, Ir.takeRightWhile = function(t, n) {
                            return t && t.length ? ni(t, qi(n, 3), !1, !0) : [];
                        }, Ir.takeWhile = function(t, n) {
                            return t && t.length ? ni(t, qi(n, 3)) : [];
                        }, Ir.tap = function(t, n) {
                            return n(t), t;
                        }, Ir.throttle = function(t, n, r) {
                            var e = !0, i = !0;
                            if ("function" != typeof t) throw new _t(u);
                            return Ho(r) && (e = "leading" in r ? !!r.leading : e, i = "trailing" in r ? !!r.trailing : i), wo(t, n, {
                                leading: e,
                                maxWait: n,
                                trailing: i
                            });
                        }, Ir.thru = no, Ir.toArray = na, Ir.toPairs = Ca, Ir.toPairsIn = Ia, Ir.toPath = function(t) {
                            return ko(t) ? pn(t, Su) : Yo(t) ? [
                                t
                            ] : gi(Au(aa(t)));
                        }, Ir.toPlainObject = oa, Ir.transform = function(t, n, r) {
                            var e = ko(t), i = e || Bo(t) || Ko(t);
                            if (n = qi(n, 4), null == r) {
                                var u = t && t.constructor;
                                r = i ? e ? new u : [] : Ho(t) && Wo(u) ? Tr($t(t)) : {};
                            }
                            return (i ? fn : fe)(t, function(t, e, i) {
                                return n(r, t, e, i);
                            }), r;
                        }, Ir.unary = function(t) {
                            return yo(t, 1);
                        }, Ir.union = Hu, Ir.unionBy = Zu, Ir.unionWith = $u, Ir.uniq = function(t) {
                            return t && t.length ? Ke(t) : [];
                        }, Ir.uniqBy = function(t, n) {
                            return t && t.length ? Ke(t, qi(n, 2)) : [];
                        }, Ir.uniqWith = function(t, n) {
                            return n = "function" == typeof n ? n : void 0, t && t.length ? Ke(t, void 0, n) : [];
                        }, Ir.unset = function(t, n) {
                            return null == t || Xe(t, n);
                        }, Ir.unzip = Gu, Ir.unzipWith = Vu, Ir.update = function(t, n, r) {
                            return null == t ? t : ti(t, n, oi(r));
                        }, Ir.updateWith = function(t, n, r, e) {
                            return e = "function" == typeof e ? e : void 0, null == t ? t : ti(t, n, oi(r), e);
                        }, Ir.values = Ta, Ir.valuesIn = function(t) {
                            return null == t ? [] : En(t, ba(t));
                        }, Ir.without = Ju, Ir.words = Wa, Ir.wrap = function(t, n) {
                            return Oo(oi(n), t);
                        }, Ir.xor = Qu, Ir.xorBy = qu, Ir.xorWith = Yu, Ir.zip = Ku, Ir.zipObject = function(t, n) {
                            return ii(t || [], n || [], Hr);
                        }, Ir.zipObjectDeep = function(t, n) {
                            return ii(t || [], n || [], Pe);
                        }, Ir.zipWith = Xu, Ir.entries = Ca, Ir.entriesIn = Ia, Ir.extend = ca, Ir.extendWith = la, qa(Ir, Ir), Ir.add = af, Ir.attempt = Pa, Ir.camelCase = Ma, Ir.capitalize = Na, Ir.ceil = ff, Ir.clamp = function(t, n, r) {
                            return void 0 === r && (r = n, n = void 0), void 0 !== r && (r = (r = ua(r)) == r ? r : 0), void 0 !== n && (n = (n = ua(n)) == n ? n : 0), Qr(ua(t), n, r);
                        }, Ir.clone = function(t) {
                            return qr(t, 4);
                        }, Ir.cloneDeep = function(t) {
                            return qr(t, 5);
                        }, Ir.cloneDeepWith = function(t, n) {
                            return qr(t, 5, n = "function" == typeof n ? n : void 0);
                        }, Ir.cloneWith = function(t, n) {
                            return qr(t, 4, n = "function" == typeof n ? n : void 0);
                        }, Ir.conformsTo = function(t, n) {
                            return null == n || Yr(t, n, wa(n));
                        }, Ir.deburr = Ea, Ir.defaultTo = function(t, n) {
                            return null == t || t != t ? n : t;
                        }, Ir.divide = cf, Ir.endsWith = function(t, n, r) {
                            t = aa(t), n = Ye(n);
                            var e = t.length, i = r = void 0 === r ? e : Qr(ea(r), 0, e);
                            return (r -= n.length) >= 0 && t.slice(r, i) == n;
                        }, Ir.eq = To, Ir.escape = function(t) {
                            return (t = aa(t)) && U.test(t) ? t.replace(B, Rn) : t;
                        }, Ir.escapeRegExp = function(t) {
                            return (t = aa(t)) && V.test(t) ? t.replace(G, "\\$&") : t;
                        }, Ir.every = function(t, n, r) {
                            var e = ko(t) ? ln : re;
                            return r && au(t, n, r) && (n = void 0), e(t, qi(n, 3));
                        }, Ir.find = io, Ir.findIndex = Nu, Ir.findKey = function(t, n) {
                            return wn(t, qi(n, 3), fe);
                        }, Ir.findLast = uo, Ir.findLastIndex = Eu, Ir.findLastKey = function(t, n) {
                            return wn(t, qi(n, 3), ce);
                        }, Ir.floor = lf, Ir.forEach = oo, Ir.forEachRight = ao, Ir.forIn = function(t, n) {
                            return null == t ? t : oe(t, qi(n, 3), ba);
                        }, Ir.forInRight = function(t, n) {
                            return null == t ? t : ae(t, qi(n, 3), ba);
                        }, Ir.forOwn = function(t, n) {
                            return t && fe(t, qi(n, 3));
                        }, Ir.forOwnRight = function(t, n) {
                            return t && ce(t, qi(n, 3));
                        }, Ir.get = da, Ir.gt = Mo, Ir.gte = No, Ir.has = function(t, n) {
                            return null != t && eu(t, n, de);
                        }, Ir.hasIn = ya, Ir.head = zu, Ir.identity = Ga, Ir.includes = function(t, n, r, e) {
                            t = Lo(t) ? t : Ta(t), r = r && !e ? ea(r) : 0;
                            var i = t.length;
                            return r < 0 && (r = or(i + r, 0)), qo(t) ? r <= i && t.indexOf(n, r) > -1 : !!i && xn(t, n, r) > -1;
                        }, Ir.indexOf = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            if (!e) return -1;
                            var i = null == r ? 0 : ea(r);
                            return i < 0 && (i = or(e + i, 0)), xn(t, n, i);
                        }, Ir.inRange = function(t, n, r) {
                            return n = ra(n), void 0 === r ? (r = n, n = 0) : r = ra(r), function(t, n, r) {
                                return t >= ar(n, r) && t < or(n, r);
                            }(t = ua(t), n, r);
                        }, Ir.invoke = ma, Ir.isArguments = Eo, Ir.isArray = ko, Ir.isArrayBuffer = zo, Ir.isArrayLike = Lo, Ir.isArrayLikeObject = Do, Ir.isBoolean = function(t) {
                            return !0 === t || !1 === t || Zo(t) && ve(t) == l;
                        }, Ir.isBuffer = Bo, Ir.isDate = Ro, Ir.isElement = function(t) {
                            return Zo(t) && 1 === t.nodeType && !Vo(t);
                        }, Ir.isEmpty = function(t) {
                            if (null == t) return !0;
                            if (Lo(t) && (ko(t) || "string" == typeof t || "function" == typeof t.splice || Bo(t) || Ko(t) || Eo(t))) return !t.length;
                            var n = ru(t);
                            if (n == d || n == m) return !t.size;
                            if (su(t)) return !Ae(t).length;
                            for(var r in t)if (At.call(t, r)) return !1;
                            return !0;
                        }, Ir.isEqual = function(t, n) {
                            return we(t, n);
                        }, Ir.isEqualWith = function(t, n, r) {
                            var e = (r = "function" == typeof r ? r : void 0) ? r(t, n) : void 0;
                            return void 0 === e ? we(t, n, void 0, r) : !!e;
                        }, Ir.isError = Uo, Ir.isFinite = function(t) {
                            return "number" == typeof t && er(t);
                        }, Ir.isFunction = Wo, Ir.isInteger = Po, Ir.isLength = Fo, Ir.isMap = $o, Ir.isMatch = function(t, n) {
                            return t === n || be(t, n, Ki(n));
                        }, Ir.isMatchWith = function(t, n, r) {
                            return r = "function" == typeof r ? r : void 0, be(t, n, Ki(n), r);
                        }, Ir.isNaN = function(t) {
                            return Go(t) && t != +t;
                        }, Ir.isNative = function(t) {
                            if (lu(t)) throw new ht("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return xe(t);
                        }, Ir.isNil = function(t) {
                            return null == t;
                        }, Ir.isNull = function(t) {
                            return null === t;
                        }, Ir.isNumber = Go, Ir.isObject = Ho, Ir.isObjectLike = Zo, Ir.isPlainObject = Vo, Ir.isRegExp = Jo, Ir.isSafeInteger = function(t) {
                            return Po(t) && t >= -9007199254740991 && t <= 9007199254740991;
                        }, Ir.isSet = Qo, Ir.isString = qo, Ir.isSymbol = Yo, Ir.isTypedArray = Ko, Ir.isUndefined = function(t) {
                            return void 0 === t;
                        }, Ir.isWeakMap = function(t) {
                            return Zo(t) && ru(t) == x;
                        }, Ir.isWeakSet = function(t) {
                            return Zo(t) && "[object WeakSet]" == ve(t);
                        }, Ir.join = function(t, n) {
                            return null == t ? "" : ir.call(t, n);
                        }, Ir.kebabCase = ka, Ir.last = Ru, Ir.lastIndexOf = function(t, n, r) {
                            var e = null == t ? 0 : t.length;
                            if (!e) return -1;
                            var i = e;
                            return void 0 !== r && (i = (i = ea(r)) < 0 ? or(e + i, 0) : ar(i, e - 1)), n == n ? function(t, n, r) {
                                for(var e = r + 1; e--;)if (t[e] === n) return e;
                                return e;
                            }(t, n, i) : bn(t, An, i, !0);
                        }, Ir.lowerCase = za, Ir.lowerFirst = La, Ir.lt = Xo, Ir.lte = ta, Ir.max = function(t) {
                            return t && t.length ? ee(t, Ga, pe) : void 0;
                        }, Ir.maxBy = function(t, n) {
                            return t && t.length ? ee(t, qi(n, 2), pe) : void 0;
                        }, Ir.mean = function(t) {
                            return Sn(t, Ga);
                        }, Ir.meanBy = function(t, n) {
                            return Sn(t, qi(n, 2));
                        }, Ir.min = function(t) {
                            return t && t.length ? ee(t, Ga, Oe) : void 0;
                        }, Ir.minBy = function(t, n) {
                            return t && t.length ? ee(t, qi(n, 2), Oe) : void 0;
                        }, Ir.stubArray = uf, Ir.stubFalse = of, Ir.stubObject = function() {
                            return {};
                        }, Ir.stubString = function() {
                            return "";
                        }, Ir.stubTrue = function() {
                            return !0;
                        }, Ir.multiply = hf, Ir.nth = function(t, n) {
                            return t && t.length ? Ne(t, ea(n)) : void 0;
                        }, Ir.noConflict = function() {
                            return Vt._ === this && (Vt._ = Tt), this;
                        }, Ir.noop = Ya, Ir.now = po, Ir.pad = function(t, n, r) {
                            t = aa(t);
                            var e = (n = ea(n)) ? Gn(t) : 0;
                            if (!n || e >= n) return t;
                            var i = (n - e) / 2;
                            return Ei(tr(i), r) + t + Ei(Xn(i), r);
                        }, Ir.padEnd = function(t, n, r) {
                            t = aa(t);
                            var e = (n = ea(n)) ? Gn(t) : 0;
                            return n && e < n ? t + Ei(n - e, r) : t;
                        }, Ir.padStart = function(t, n, r) {
                            t = aa(t);
                            var e = (n = ea(n)) ? Gn(t) : 0;
                            return n && e < n ? Ei(n - e, r) + t : t;
                        }, Ir.parseInt = function(t, n, r) {
                            return r || null == n ? n = 0 : n && (n = +n), cr(aa(t).replace(Q, ""), n || 0);
                        }, Ir.random = function(t, n, r) {
                            if (r && "boolean" != typeof r && au(t, n, r) && (n = r = void 0), void 0 === r && ("boolean" == typeof n ? (r = n, n = void 0) : "boolean" == typeof t && (r = t, t = void 0)), void 0 === t && void 0 === n ? (t = 0, n = 1) : (t = ra(t), void 0 === n ? (n = t, t = 0) : n = ra(n)), t > n) {
                                var e = t;
                                t = n, n = e;
                            }
                            if (r || t % 1 || n % 1) {
                                var i = lr();
                                return ar(t + i * (n - t + Ht("1e-" + ((i + "").length - 1))), n);
                            }
                            return De(t, n);
                        }, Ir.reduce = function(t, n, r) {
                            var e = ko(t) ? yn : In, i = arguments.length < 3;
                            return e(t, qi(n, 4), r, i, te);
                        }, Ir.reduceRight = function(t, n, r) {
                            var e = ko(t) ? gn : In, i = arguments.length < 3;
                            return e(t, qi(n, 4), r, i, ne);
                        }, Ir.repeat = function(t, n, r) {
                            return n = (r ? au(t, n, r) : void 0 === n) ? 1 : ea(n), Be(aa(t), n);
                        }, Ir.replace = function() {
                            var t = arguments, n = aa(t[0]);
                            return t.length < 3 ? n : n.replace(t[1], t[2]);
                        }, Ir.result = function(t, n, r) {
                            var e = -1, i = (n = ai(n, t)).length;
                            for(i || (i = 1, t = void 0); ++e < i;){
                                var u = null == t ? void 0 : t[Su(n[e])];
                                void 0 === u && (e = i, u = r), t = Wo(u) ? u.call(t) : u;
                            }
                            return t;
                        }, Ir.round = vf, Ir.runInContext = t, Ir.sample = function(t) {
                            return (ko(t) ? Ur : Ue)(t);
                        }, Ir.size = function(t) {
                            if (null == t) return 0;
                            if (Lo(t)) return qo(t) ? Gn(t) : t.length;
                            var n = ru(t);
                            return n == d || n == m ? t.size : Ae(t).length;
                        }, Ir.snakeCase = Da, Ir.some = function(t, n, r) {
                            var e = ko(t) ? _n : Ge;
                            return r && au(t, n, r) && (n = void 0), e(t, qi(n, 3));
                        }, Ir.sortedIndex = function(t, n) {
                            return Ve(t, n);
                        }, Ir.sortedIndexBy = function(t, n, r) {
                            return Je(t, n, qi(r, 2));
                        }, Ir.sortedIndexOf = function(t, n) {
                            var r = null == t ? 0 : t.length;
                            if (r) {
                                var e = Ve(t, n);
                                if (e < r && To(t[e], n)) return e;
                            }
                            return -1;
                        }, Ir.sortedLastIndex = function(t, n) {
                            return Ve(t, n, !0);
                        }, Ir.sortedLastIndexBy = function(t, n, r) {
                            return Je(t, n, qi(r, 2), !0);
                        }, Ir.sortedLastIndexOf = function(t, n) {
                            if (null == t ? 0 : t.length) {
                                var r = Ve(t, n, !0) - 1;
                                if (To(t[r], n)) return r;
                            }
                            return -1;
                        }, Ir.startCase = Ba, Ir.startsWith = function(t, n, r) {
                            return t = aa(t), r = null == r ? 0 : Qr(ea(r), 0, t.length), n = Ye(n), t.slice(r, r + n.length) == n;
                        }, Ir.subtract = pf, Ir.sum = function(t) {
                            return t && t.length ? Tn(t, Ga) : 0;
                        }, Ir.sumBy = function(t, n) {
                            return t && t.length ? Tn(t, qi(n, 2)) : 0;
                        }, Ir.template = function(t, n, r) {
                            var e = Ir.templateSettings;
                            r && au(t, n, r) && (n = void 0), t = aa(t), n = la({}, n, e, Wi);
                            var i, u, o = la({}, n.imports, e.imports, Wi), a = wa(o), f = En(o, a), c = 0, l = n.interpolate || lt, s = "__p += '", h = yt((n.escape || lt).source + "|" + l.source + "|" + (l === F ? rt : lt).source + "|" + (n.evaluate || lt).source + "|$", "g"), v = "//# sourceURL=" + (At.call(n, "sourceURL") ? (n.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Ut + "]") + "\n";
                            t.replace(h, function(n, r, e, o, a, f) {
                                return e || (e = o), s += t.slice(c, f).replace(st, Un), r && (i = !0, s += "' +\n__e(" + r + ") +\n'"), a && (u = !0, s += "';\n" + a + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), c = f + n.length, n;
                            }), s += "';\n";
                            var p = At.call(n, "variable") && n.variable;
                            p || (s = "with (obj) {\n" + s + "\n}\n"), s = (u ? s.replace(k, "") : s).replace(z, "$1").replace(L, "$1;"), s = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
                            var d = Pa(function() {
                                return vt(a, v + "return " + s).apply(void 0, f);
                            });
                            if (d.source = s, Uo(d)) throw d;
                            return d;
                        }, Ir.times = function(t, n) {
                            if ((t = ea(t)) < 1 || t > 9007199254740991) return [];
                            var r = 4294967295, e = ar(t, 4294967295);
                            t -= 4294967295;
                            for(var i = Mn(e, n = qi(n)); ++r < t;)n(r);
                            return i;
                        }, Ir.toFinite = ra, Ir.toInteger = ea, Ir.toLength = ia, Ir.toLower = function(t) {
                            return aa(t).toLowerCase();
                        }, Ir.toNumber = ua, Ir.toSafeInteger = function(t) {
                            return t ? Qr(ea(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0;
                        }, Ir.toString = aa, Ir.toUpper = function(t) {
                            return aa(t).toUpperCase();
                        }, Ir.trim = function(t, n, r) {
                            if ((t = aa(t)) && (r || void 0 === n)) return t.replace(J, "");
                            if (!t || !(n = Ye(n))) return t;
                            var e = Vn(t), i = Vn(n);
                            return ci(e, zn(e, i), Ln(e, i) + 1).join("");
                        }, Ir.trimEnd = function(t, n, r) {
                            if ((t = aa(t)) && (r || void 0 === n)) return t.replace(q, "");
                            if (!t || !(n = Ye(n))) return t;
                            var e = Vn(t);
                            return ci(e, 0, Ln(e, Vn(n)) + 1).join("");
                        }, Ir.trimStart = function(t, n, r) {
                            if ((t = aa(t)) && (r || void 0 === n)) return t.replace(Q, "");
                            if (!t || !(n = Ye(n))) return t;
                            var e = Vn(t);
                            return ci(e, zn(e, Vn(n))).join("");
                        }, Ir.truncate = function(t, n) {
                            var r = 30, e = "...";
                            if (Ho(n)) {
                                var i = "separator" in n ? n.separator : i;
                                r = "length" in n ? ea(n.length) : r, e = "omission" in n ? Ye(n.omission) : e;
                            }
                            var u = (t = aa(t)).length;
                            if (Wn(t)) {
                                var o = Vn(t);
                                u = o.length;
                            }
                            if (r >= u) return t;
                            var a = r - Gn(e);
                            if (a < 1) return e;
                            var f = o ? ci(o, 0, a).join("") : t.slice(0, a);
                            if (void 0 === i) return f + e;
                            if (o && (a += f.length - a), Jo(i)) {
                                if (t.slice(a).search(i)) {
                                    var c, l = f;
                                    for(i.global || (i = yt(i.source, aa(et.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(l);)var s = c.index;
                                    f = f.slice(0, void 0 === s ? a : s);
                                }
                            } else if (t.indexOf(Ye(i), a) != a) {
                                var h = f.lastIndexOf(i);
                                h > -1 && (f = f.slice(0, h));
                            }
                            return f + e;
                        }, Ir.unescape = function(t) {
                            return (t = aa(t)) && R.test(t) ? t.replace(D, Jn) : t;
                        }, Ir.uniqueId = function(t) {
                            var n = ++St;
                            return aa(t) + n;
                        }, Ir.upperCase = Ra, Ir.upperFirst = Ua, Ir.each = oo, Ir.eachRight = ao, Ir.first = zu, qa(Ir, (sf = {}, fe(Ir, function(t, n) {
                            At.call(Ir.prototype, n) || (sf[n] = t);
                        }), sf), {
                            chain: !1
                        }), Ir.VERSION = "4.17.15", fn([
                            "bind",
                            "bindKey",
                            "curry",
                            "curryRight",
                            "partial",
                            "partialRight"
                        ], function(t) {
                            Ir[t].placeholder = Ir;
                        }), fn([
                            "drop",
                            "take"
                        ], function(t, n) {
                            Er.prototype[t] = function(r) {
                                r = void 0 === r ? 1 : or(ea(r), 0);
                                var e = this.__filtered__ && !n ? new Er(this) : this.clone();
                                return e.__filtered__ ? e.__takeCount__ = ar(r, e.__takeCount__) : e.__views__.push({
                                    size: ar(r, 4294967295),
                                    type: t + (e.__dir__ < 0 ? "Right" : "")
                                }), e;
                            }, Er.prototype[t + "Right"] = function(n) {
                                return this.reverse()[t](n).reverse();
                            };
                        }), fn([
                            "filter",
                            "map",
                            "takeWhile"
                        ], function(t, n) {
                            var r = n + 1, e = 1 == r || 3 == r;
                            Er.prototype[t] = function(t) {
                                var n = this.clone();
                                return n.__iteratees__.push({
                                    iteratee: qi(t, 3),
                                    type: r
                                }), n.__filtered__ = n.__filtered__ || e, n;
                            };
                        }), fn([
                            "head",
                            "last"
                        ], function(t, n) {
                            var r = "take" + (n ? "Right" : "");
                            Er.prototype[t] = function() {
                                return this[r](1).value()[0];
                            };
                        }), fn([
                            "initial",
                            "tail"
                        ], function(t, n) {
                            var r = "drop" + (n ? "" : "Right");
                            Er.prototype[t] = function() {
                                return this.__filtered__ ? new Er(this) : this[r](1);
                            };
                        }), Er.prototype.compact = function() {
                            return this.filter(Ga);
                        }, Er.prototype.find = function(t) {
                            return this.filter(t).head();
                        }, Er.prototype.findLast = function(t) {
                            return this.reverse().find(t);
                        }, Er.prototype.invokeMap = Re(function(t, n) {
                            return "function" == typeof t ? new Er(this) : this.map(function(r) {
                                return _e(r, t, n);
                            });
                        }), Er.prototype.reject = function(t) {
                            return this.filter(Ao(qi(t)));
                        }, Er.prototype.slice = function(t, n) {
                            t = ea(t);
                            var r = this;
                            return r.__filtered__ && (t > 0 || n < 0) ? new Er(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), void 0 !== n && (r = (n = ea(n)) < 0 ? r.dropRight(-n) : r.take(n - t)), r);
                        }, Er.prototype.takeRightWhile = function(t) {
                            return this.reverse().takeWhile(t).reverse();
                        }, Er.prototype.toArray = function() {
                            return this.take(4294967295);
                        }, fe(Er.prototype, function(t, n) {
                            var r = /^(?:filter|find|map|reject)|While$/.test(n), e = /^(?:head|last)$/.test(n), i = Ir[e ? "take" + ("last" == n ? "Right" : "") : n], u = e || /^find/.test(n);
                            i && (Ir.prototype[n] = function() {
                                var n = this.__wrapped__, o = e ? [
                                    1
                                ] : arguments, a = n instanceof Er, f = o[0], c = a || ko(n), l = function(t) {
                                    var n = i.apply(Ir, dn([
                                        t
                                    ], o));
                                    return e && s ? n[0] : n;
                                };
                                c && r && "function" == typeof f && 1 != f.length && (a = c = !1);
                                var s = this.__chain__, h = !!this.__actions__.length, v = u && !s, p = a && !h;
                                if (!u && c) {
                                    n = p ? n : new Er(this);
                                    var d = t.apply(n, o);
                                    return d.__actions__.push({
                                        func: no,
                                        args: [
                                            l
                                        ],
                                        thisArg: void 0
                                    }), new Nr(d, s);
                                }
                                return v && p ? t.apply(this, o) : (d = this.thru(l), v ? e ? d.value()[0] : d.value() : d);
                            });
                        }), fn([
                            "pop",
                            "push",
                            "shift",
                            "sort",
                            "splice",
                            "unshift"
                        ], function(t) {
                            var n = mt[t], r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(t);
                            Ir.prototype[t] = function() {
                                var t = arguments;
                                if (e && !this.__chain__) {
                                    var i = this.value();
                                    return n.apply(ko(i) ? i : [], t);
                                }
                                return this[r](function(r) {
                                    return n.apply(ko(r) ? r : [], t);
                                });
                            };
                        }), fe(Er.prototype, function(t, n) {
                            var r = Ir[n];
                            if (r) {
                                var e = r.name + "";
                                At.call(mr, e) || (mr[e] = []), mr[e].push({
                                    name: n,
                                    func: r
                                });
                            }
                        }), mr[Ii(void 0, 2).name] = [
                            {
                                name: "wrapper",
                                func: void 0
                            }
                        ], Er.prototype.clone = function() {
                            var t = new Er(this.__wrapped__);
                            return t.__actions__ = gi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = gi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = gi(this.__views__), t;
                        }, Er.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var t = new Er(this);
                                t.__dir__ = -1, t.__filtered__ = !0;
                            } else (t = this.clone()).__dir__ *= -1;
                            return t;
                        }, Er.prototype.value = function() {
                            var t = this.__wrapped__.value(), n = this.__dir__, r = ko(t), e = n < 0, i = r ? t.length : 0, u = function(t, n, r) {
                                var e = -1, i = r.length;
                                for(; ++e < i;){
                                    var u = r[e], o = u.size;
                                    switch(u.type){
                                        case "drop":
                                            t += o;
                                            break;
                                        case "dropRight":
                                            n -= o;
                                            break;
                                        case "take":
                                            n = ar(n, t + o);
                                            break;
                                        case "takeRight":
                                            t = or(t, n - o);
                                    }
                                }
                                return {
                                    start: t,
                                    end: n
                                };
                            }(0, i, this.__views__), o = u.start, a = u.end, f = a - o, c = e ? a : o - 1, l = this.__iteratees__, s = l.length, h = 0, v = ar(f, this.__takeCount__);
                            if (!r || !e && i == f && v == f) return ri(t, this.__actions__);
                            var p = [];
                            t: for(; (f--) && h < v;){
                                for(var d = -1, y = t[c += n]; ++d < s;){
                                    var g = l[d], _ = g.iteratee, m = g.type, w = _(y);
                                    if (2 == m) y = w;
                                    else if (!w) {
                                        if (1 == m) continue t;
                                        break t;
                                    }
                                }
                                p[h++] = y;
                            }
                            return p;
                        }, Ir.prototype.at = ro, Ir.prototype.chain = function() {
                            return to(this);
                        }, Ir.prototype.commit = function() {
                            return new Nr(this.value(), this.__chain__);
                        }, Ir.prototype.next = function() {
                            void 0 === this.__values__ && (this.__values__ = na(this.value()));
                            var t = this.__index__ >= this.__values__.length;
                            return {
                                done: t,
                                value: t ? void 0 : this.__values__[this.__index__++]
                            };
                        }, Ir.prototype.plant = function(t) {
                            for(var n, r = this; r instanceof Mr;){
                                var e = Cu(r);
                                e.__index__ = 0, e.__values__ = void 0, n ? i.__wrapped__ = e : n = e;
                                var i = e;
                                r = r.__wrapped__;
                            }
                            return i.__wrapped__ = t, n;
                        }, Ir.prototype.reverse = function() {
                            var t = this.__wrapped__;
                            if (t instanceof Er) {
                                var n = t;
                                return this.__actions__.length && (n = new Er(this)), (n = n.reverse()).__actions__.push({
                                    func: no,
                                    args: [
                                        Fu
                                    ],
                                    thisArg: void 0
                                }), new Nr(n, this.__chain__);
                            }
                            return this.thru(Fu);
                        }, Ir.prototype.toJSON = Ir.prototype.valueOf = Ir.prototype.value = function() {
                            return ri(this.__wrapped__, this.__actions__);
                        }, Ir.prototype.first = Ir.prototype.head, Kt && (Ir.prototype[Kt] = function() {
                            return this;
                        }), Ir;
                    }();
                    Vt._ = Qn, void 0 === (i = (function() {
                        return Qn;
                    }).call(n, r, n, e)) || (e.exports = i);
                }).call(this);
            }).call(this, r(1), r(2)(t));
        },
        function(t, n) {
            var r;
            r = function() {
                return this;
            }();
            try {
                r = r || new Function("return this")();
            } catch (t1) {
                "object" == typeof window && (r = window);
            }
            t.exports = r;
        },
        function(t, n) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l;
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i;
                    }
                }), t.webpackPolyfill = 1), t;
            };
        },
        function(t, n, r) {
            "use strict";
            r.r(n);
            var e, i = r(0), u = (e = function(t, n) {
                return (e = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, n) {
                    t.__proto__ = n;
                } || function(t, n) {
                    for(var r in n)n.hasOwnProperty(r) && (t[r] = n[r]);
                })(t, n);
            }, function(t, n) {
                function r() {
                    this.constructor = t;
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
            }), o = function() {
                return (o = Object.assign || function(t) {
                    for(var n, r = 1, e = arguments.length; r < e; r++)for(var i in n = arguments[r])Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    return t;
                }).apply(this, arguments);
            }, a = function(t) {
                function n(r, e, i, u) {
                    var o = t.call(this) || this;
                    return o.message = r, o.expected = e, o.found = i, o.location = u, o.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, n), o;
                }
                return u(n, t), n.buildMessage = function(t, n) {
                    function r(t) {
                        return t.charCodeAt(0).toString(16).toUpperCase();
                    }
                    function e(t) {
                        return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                            return "\\x0" + r(t);
                        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                            return "\\x" + r(t);
                        });
                    }
                    function i(t) {
                        return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                            return "\\x0" + r(t);
                        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                            return "\\x" + r(t);
                        });
                    }
                    function u(t) {
                        switch(t.type){
                            case "literal":
                                return '"' + e(t.text) + '"';
                            case "class":
                                var n = t.parts.map(function(t) {
                                    return Array.isArray(t) ? i(t[0]) + "-" + i(t[1]) : i(t);
                                });
                                return "[" + (t.inverted ? "^" : "") + n + "]";
                            case "any":
                                return "any character";
                            case "end":
                                return "end of input";
                            case "other":
                                return t.description;
                        }
                    }
                    var o;
                    return "Expected " + function(t) {
                        var n, r, e = t.map(u);
                        if (e.sort(), e.length > 0) {
                            for(n = 1, r = 1; n < e.length; n++)e[n - 1] !== e[n] && (e[r] = e[n], r++);
                            e.length = r;
                        }
                        switch(e.length){
                            case 1:
                                return e[0];
                            case 2:
                                return e[0] + " or " + e[1];
                            default:
                                return e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
                        }
                    }(t) + " but " + (((o = n) ? '"' + e(o) + '"' : "end of input") + " found.");
                }, n;
            }(Error);
            var f = function(t, n) {
                n = void 0 !== n ? n : {};
                var r, e = {}, i = {
                    DebugString: _t
                }, u = _t, f = st(":", !1), c = st("{}", !1), l = st("{ ", !1), s = st(" = ", !1), h = st(" }", !1), v = st(", ", !1), p = function(t, n, r, e) {
                    var i;
                    return (i = {})[r] = e, i;
                }, d = st("Dict.fromList ", !1), y = st("Set.fromList ", !1), g = st("Array.fromList ", !1), _ = st("()", !1), m = st("(", !1), w = st(",", !1), b = function(t, n) {
                    return n;
                }, x = st(")", !1), j = function(t, n) {
                    return n;
                }, A = /^[0-9.]/, S = ht([
                    [
                        "0",
                        "9"
                    ],
                    "."
                ], !1, !1), O = st("-", !1), C = st("NaN", !1), I = st("Infinity", !1), T = st("-Infinity", !1), M = st("True", !1), N = st("False", !1), E = st("<function>", !1), k = st("<internals>", !1), z = st("<", !1), L = /^[0-9]/, D = ht([
                    [
                        "0",
                        "9"
                    ]
                ], !1, !1), B = st(" bytes>", !1), R = st('"', !1), U = st("\\", !1), W = st(">", !1), P = {
                    type: "any"
                }, F = /^[a-zA-Z0-9_]/, H = ht([
                    [
                        "a",
                        "z"
                    ],
                    [
                        "A",
                        "Z"
                    ],
                    [
                        "0",
                        "9"
                    ],
                    "_"
                ], !1, !1), Z = /^[A-Z]/, $ = ht([
                    [
                        "A",
                        "Z"
                    ]
                ], !1, !1), G = st("'", !1), V = st("[]", !1), J = st("[", !1), Q = st("]", !1), q = function(t, n) {
                    return n;
                }, Y = st("b", !1), K = st("f", !1), X = st("n", !1), tt = st("r", !1), nt = st("t", !1), rt = st("v", !1), et = vt("whitespace"), it = /^[ \t\n\r]/, ut = ht([
                    " ",
                    "	",
                    "\n",
                    "\r"
                ], !1, !1), ot = 0, at = [
                    {
                        line: 1,
                        column: 1
                    }
                ], ft = 0, ct = [], lt = 0;
                if (void 0 !== n.startRule) {
                    if (!(n.startRule in i)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
                    u = i[n.startRule];
                }
                function st(t, n) {
                    return {
                        type: "literal",
                        text: t,
                        ignoreCase: n
                    };
                }
                function ht(t, n, r) {
                    return {
                        type: "class",
                        parts: t,
                        inverted: n,
                        ignoreCase: r
                    };
                }
                function vt(t) {
                    return {
                        type: "other",
                        description: t
                    };
                }
                function pt(n) {
                    var r, e = at[n];
                    if (e) return e;
                    for(r = n - 1; !at[r];)r--;
                    for(e = {
                        line: (e = at[r]).line,
                        column: e.column
                    }; r < n;)10 === t.charCodeAt(r) ? (e.line++, e.column = 1) : e.column++, r++;
                    return at[n] = e, e;
                }
                function dt(t, n) {
                    var r = pt(t), e = pt(n);
                    return {
                        start: {
                            offset: t,
                            line: r.line,
                            column: r.column
                        },
                        end: {
                            offset: n,
                            line: e.line,
                            column: e.column
                        }
                    };
                }
                function yt(t) {
                    ot < ft || (ot > ft && (ft = ot, ct = []), ct.push(t));
                }
                function gt(t, n, r) {
                    return new a(a.buildMessage(t, n), t, n, r);
                }
                function _t() {
                    var n, r, i, u, o, a;
                    if (n = ot, (r = function() {
                        var t, n, r;
                        if (t = ot, n = [], (r = Wt()) !== e) for(; r !== e;)n.push(r), r = Wt();
                        else n = e;
                        n !== e && (t, n = Ht(n));
                        return t = n;
                    }()) !== e) {
                        if (i = [], u = ot, 58 === t.charCodeAt(ot) ? (o = ":", ot++) : (o = e, 0 === lt && yt(f)), o !== e && (a = Ft()) !== e ? u = o = [
                            o,
                            a
                        ] : (ot = u, u = e), u !== e) for(; u !== e;)i.push(u), u = ot, 58 === t.charCodeAt(ot) ? (o = ":", ot++) : (o = e, 0 === lt && yt(f)), o !== e && (a = Ft()) !== e ? u = o = [
                            o,
                            a
                        ] : (ot = u, u = e);
                        else i = e;
                        i !== e && (u = mt()) !== e ? (n, n = r = {
                            type: "ElmDebug",
                            name: r,
                            value: u
                        }) : (ot = n, n = e);
                    } else ot = n, n = e;
                    return n === e && (n = ot, 58 === t.charCodeAt(ot) ? (r = ":", ot++) : (r = e, 0 === lt && yt(f)), r !== e && (i = Ft()) !== e && (u = mt()) !== e ? (n, n = r = function(t) {
                        return {
                            type: "ElmDebug",
                            name: "",
                            value: t
                        };
                    }(u)) : (ot = n, n = e)), n;
                }
                function mt() {
                    var t;
                    return (t = bt()) === e && (t = At()) === e && (t = jt()) === e && (t = xt()) === e && (t = It()) === e && (t = Ot()) === e && (t = Ct()) === e && (t = St()) === e && (t = Tt()) === e && (t = Mt()) === e && (t = Lt()) === e && (t = Nt()) === e && (t = Et()) === e && (t = kt()) === e && (t = Dt()), t;
                }
                function wt() {
                    var t;
                    return (t = bt()) === e && (t = At()) === e && (t = jt()) === e && (t = xt()) === e && (t = It()) === e && (t = Ot()) === e && (t = St()) === e && (t = Tt()) === e && (t = Mt()) === e && (t = Lt()) === e && (t = Nt()) === e && (t = Et()) === e && (t = kt()) === e && (t = Dt()), t;
                }
                function bt() {
                    var n, r, i, u, a, f, d, y, g, _, m, w, b;
                    if (n = ot, "{}" === t.substr(ot, 2) ? (r = "{}", ot += 2) : (r = e, 0 === lt && yt(c)), r !== e && (n, r = {
                        type: "Record",
                        value: {}
                    }), (n = r) === e && (n = ot, "{ " === t.substr(ot, 2) ? (r = "{ ", ot += 2) : (r = e, 0 === lt && yt(l)), r !== e && (i = zt()) !== e ? (" = " === t.substr(ot, 3) ? (u = " = ", ot += 3) : (u = e, 0 === lt && yt(s)), u !== e && (a = mt()) !== e ? (" }" === t.substr(ot, 2) ? (f = " }", ot += 2) : (f = e, 0 === lt && yt(h)), f !== e ? (n, w = a, n = r = {
                        type: "Record",
                        value: (b = {}, b[i] = w, b)
                    }) : (ot = n, n = e)) : (ot = n, n = e)) : (ot = n, n = e), n === e)) {
                        if (n = ot, "{ " === t.substr(ot, 2) ? (r = "{ ", ot += 2) : (r = e, 0 === lt && yt(l)), r !== e) {
                            if ((i = zt()) !== e) {
                                if (" = " === t.substr(ot, 3) ? (u = " = ", ot += 3) : (u = e, 0 === lt && yt(s)), u !== e) {
                                    if ((a = mt()) !== e) {
                                        for(f = [], d = ot, ", " === t.substr(ot, 2) ? (y = ", ", ot += 2) : (y = e, 0 === lt && yt(v)), y !== e && (g = zt()) !== e ? (" = " === t.substr(ot, 3) ? (_ = " = ", ot += 3) : (_ = e, 0 === lt && yt(s)), _ !== e && (m = mt()) !== e ? (d, d = y = p(0, 0, g, m)) : (ot = d, d = e)) : (ot = d, d = e); d !== e;)f.push(d), d = ot, ", " === t.substr(ot, 2) ? (y = ", ", ot += 2) : (y = e, 0 === lt && yt(v)), y !== e && (g = zt()) !== e ? (" = " === t.substr(ot, 3) ? (_ = " = ", ot += 3) : (_ = e, 0 === lt && yt(s)), _ !== e && (m = mt()) !== e ? (d, d = y = p(0, 0, g, m)) : (ot = d, d = e)) : (ot = d, d = e);
                                        f !== e ? (" }" === t.substr(ot, 2) ? (d = " }", ot += 2) : (d = e, 0 === lt && yt(h)), d !== e ? (n, n = r = function(t, n, r) {
                                            var e;
                                            return {
                                                type: "Record",
                                                value: [
                                                    (e = {}, e[t] = n, e)
                                                ].concat(r).reduce(function(t, n) {
                                                    return o({}, t, n);
                                                }, {})
                                            };
                                        }(i, a, f)) : (ot = n, n = e)) : (ot = n, n = e);
                                    } else ot = n, n = e;
                                } else ot = n, n = e;
                            } else ot = n, n = e;
                        } else ot = n, n = e;
                    }
                    return n;
                }
                function xt() {
                    var n, r, i;
                    return n = ot, "Dict.fromList " === t.substr(ot, 14) ? (r = "Dict.fromList ", ot += 14) : (r = e, 0 === lt && yt(d)), r !== e && (i = Bt()) !== e ? (n, n = r = {
                        type: "Dict",
                        value: i.map(function(t) {
                            return {
                                key: t.value[0],
                                value: t.value[1]
                            };
                        })
                    }) : (ot = n, n = e), n;
                }
                function jt() {
                    var n, r, i;
                    return n = ot, "Set.fromList " === t.substr(ot, 13) ? (r = "Set.fromList ", ot += 13) : (r = e, 0 === lt && yt(y)), r !== e && (i = Bt()) !== e ? (n, n = r = {
                        type: "Set",
                        value: i
                    }) : (ot = n, n = e), n;
                }
                function At() {
                    var n, r, i;
                    return n = ot, "Array.fromList " === t.substr(ot, 15) ? (r = "Array.fromList ", ot += 15) : (r = e, 0 === lt && yt(g)), r !== e && (i = Bt()) !== e ? (n, n = r = {
                        type: "Array",
                        value: i
                    }) : (ot = n, n = e), n;
                }
                function St() {
                    var n, r, i, u, o, a, f;
                    if (n = ot, "()" === t.substr(ot, 2) ? (r = "()", ot += 2) : (r = e, 0 === lt && yt(_)), r !== e && (n, r = {
                        type: "Unit"
                    }), (n = r) === e) {
                        if (n = ot, 40 === t.charCodeAt(ot) ? (r = "(", ot++) : (r = e, 0 === lt && yt(m)), r !== e) {
                            if ((i = mt()) !== e) {
                                if (u = [], o = ot, Ft() !== e ? (44 === t.charCodeAt(ot) ? (a = ",", ot++) : (a = e, 0 === lt && yt(w)), a !== e && Ft() !== e && (f = mt()) !== e ? (o, o = b(0, f)) : (ot = o, o = e)) : (ot = o, o = e), o !== e) for(; o !== e;)u.push(o), o = ot, Ft() !== e ? (44 === t.charCodeAt(ot) ? (a = ",", ot++) : (a = e, 0 === lt && yt(w)), a !== e && Ft() !== e && (f = mt()) !== e ? (o, o = b(0, f)) : (ot = o, o = e)) : (ot = o, o = e);
                                else u = e;
                                u !== e ? (41 === t.charCodeAt(ot) ? (o = ")", ot++) : (o = e, 0 === lt && yt(x)), o !== e ? (n, n = r = {
                                    type: "Tuple",
                                    value: [
                                        i
                                    ].concat(u)
                                }) : (ot = n, n = e)) : (ot = n, n = e);
                            } else ot = n, n = e;
                        } else ot = n, n = e;
                    }
                    return n;
                }
                function Ot() {
                    var n, r, i, u;
                    return n = ot, 40 === t.charCodeAt(ot) ? (r = "(", ot++) : (r = e, 0 === lt && yt(m)), r !== e && Ft() !== e && (i = Ct()) !== e && Ft() !== e ? (41 === t.charCodeAt(ot) ? (u = ")", ot++) : (u = e, 0 === lt && yt(x)), u !== e ? (n, n = r = i) : (ot = n, n = e)) : (ot = n, n = e), n;
                }
                function Ct() {
                    var t, n, r, i, u, o;
                    if (t = ot, (n = Lt()) !== e) {
                        if (r = [], i = ot, Ft() !== e && (u = wt()) !== e ? (i, i = j(0, u)) : (ot = i, i = e), i !== e) for(; i !== e;)r.push(i), i = ot, Ft() !== e && (u = wt()) !== e ? (i, i = j(0, u)) : (ot = i, i = e);
                        else r = e;
                        r !== e ? (t, o = r, t = n = {
                            type: "Custom",
                            name: n.name,
                            value: o
                        }) : (ot = t, t = e);
                    } else ot = t, t = e;
                    return t === e && (t = ot, (n = Lt()) !== e && (r = Ft()) !== e && (i = Ot()) !== e ? (t, t = n = function(t, n) {
                        return {
                            type: "Custom",
                            name: t.name,
                            value: n
                        };
                    }(n, i)) : (ot = t, t = e)), t;
                }
                function It() {
                    var t, n;
                    return t = ot, (n = Bt()) !== e && (t, n = {
                        type: "List",
                        value: n
                    }), t = n;
                }
                function Tt() {
                    var n, r, i, u, o;
                    if (n = ot, r = [], A.test(t.charAt(ot)) ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(S)), i !== e) for(; i !== e;)r.push(i), A.test(t.charAt(ot)) ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(S));
                    else r = e;
                    if (r !== e && (n, r = {
                        type: "Number",
                        value: parseFloat(Ht(r))
                    }), (n = r) === e) {
                        if (n = ot, 45 === t.charCodeAt(ot) ? (r = "-", ot++) : (r = e, 0 === lt && yt(O)), r !== e) {
                            if ((i = Ft()) !== e) {
                                if (u = [], A.test(t.charAt(ot)) ? (o = t.charAt(ot), ot++) : (o = e, 0 === lt && yt(S)), o !== e) for(; o !== e;)u.push(o), A.test(t.charAt(ot)) ? (o = t.charAt(ot), ot++) : (o = e, 0 === lt && yt(S));
                                else u = e;
                                u !== e ? (n, n = r = function(t) {
                                    return {
                                        type: "Number",
                                        value: parseFloat("-" + Ht(t))
                                    };
                                }(u)) : (ot = n, n = e);
                            } else ot = n, n = e;
                        } else ot = n, n = e;
                        n === e && (n = ot, "NaN" === t.substr(ot, 3) ? (r = "NaN", ot += 3) : (r = e, 0 === lt && yt(C)), r !== e && (n, r = {
                            type: "Number",
                            value: "NaN"
                        }), (n = r) === e && (n = ot, "Infinity" === t.substr(ot, 8) ? (r = "Infinity", ot += 8) : (r = e, 0 === lt && yt(I)), r !== e && (n, r = {
                            type: "Number",
                            value: "Infinity"
                        }), (n = r) === e && (n = ot, "-Infinity" === t.substr(ot, 9) ? (r = "-Infinity", ot += 9) : (r = e, 0 === lt && yt(T)), r !== e && (n, r = {
                            type: "Number",
                            value: "-Infinity"
                        }), n = r)));
                    }
                    return n;
                }
                function Mt() {
                    var n, r;
                    return n = ot, "True" === t.substr(ot, 4) ? (r = "True", ot += 4) : (r = e, 0 === lt && yt(M)), r !== e && (n, r = {
                        type: "Boolean",
                        value: !0
                    }), (n = r) === e && (n = ot, "False" === t.substr(ot, 5) ? (r = "False", ot += 5) : (r = e, 0 === lt && yt(N)), r !== e && (n, r = {
                        type: "Boolean",
                        value: !1
                    }), n = r), n;
                }
                function Nt() {
                    var n, r;
                    return n = ot, "<function>" === t.substr(ot, 10) ? (r = "<function>", ot += 10) : (r = e, 0 === lt && yt(E)), r !== e && (n, r = {
                        type: "Function"
                    }), (n = r) === e && (n = ot, "<internals>" === t.substr(ot, 11) ? (r = "<internals>", ot += 11) : (r = e, 0 === lt && yt(k)), r !== e && (n, r = {
                        type: "Internals"
                    }), n = r), n;
                }
                function Et() {
                    var n, r, i, u;
                    if (n = ot, 60 === t.charCodeAt(ot) ? (r = "<", ot++) : (r = e, 0 === lt && yt(z)), r !== e) {
                        if (i = [], L.test(t.charAt(ot)) ? (u = t.charAt(ot), ot++) : (u = e, 0 === lt && yt(D)), u !== e) for(; u !== e;)i.push(u), L.test(t.charAt(ot)) ? (u = t.charAt(ot), ot++) : (u = e, 0 === lt && yt(D));
                        else i = e;
                        i !== e ? (" bytes>" === t.substr(ot, 7) ? (u = " bytes>", ot += 7) : (u = e, 0 === lt && yt(B)), u !== e ? (n, n = r = {
                            type: "Bytes",
                            value: parseInt(Ht(i), 10)
                        }) : (ot = n, n = e)) : (ot = n, n = e);
                    } else ot = n, n = e;
                    return n;
                }
                function kt() {
                    var n, r, i, u, o, a;
                    if (n = ot, 60 === t.charCodeAt(ot) ? (r = "<", ot++) : (r = e, 0 === lt && yt(z)), r !== e) {
                        if (i = [], u = ot, o = ot, lt++, 34 === t.charCodeAt(ot) ? (a = '"', ot++) : (a = e, 0 === lt && yt(R)), a === e && (92 === t.charCodeAt(ot) ? (a = "\\", ot++) : (a = e, 0 === lt && yt(U)), a === e && (60 === t.charCodeAt(ot) ? (a = "<", ot++) : (a = e, 0 === lt && yt(z)), a === e && (62 === t.charCodeAt(ot) ? (a = ">", ot++) : (a = e, 0 === lt && yt(W))))), lt--, a === e ? o = void 0 : (ot = o, o = e), o !== e ? (t.length > ot ? (a = t.charAt(ot), ot++) : (a = e, 0 === lt && yt(P)), a !== e ? (u, u = o = a) : (ot = u, u = e)) : (ot = u, u = e), u !== e) for(; u !== e;)i.push(u), u = ot, o = ot, lt++, 34 === t.charCodeAt(ot) ? (a = '"', ot++) : (a = e, 0 === lt && yt(R)), a === e && (92 === t.charCodeAt(ot) ? (a = "\\", ot++) : (a = e, 0 === lt && yt(U)), a === e && (60 === t.charCodeAt(ot) ? (a = "<", ot++) : (a = e, 0 === lt && yt(z)), a === e && (62 === t.charCodeAt(ot) ? (a = ">", ot++) : (a = e, 0 === lt && yt(W))))), lt--, a === e ? o = void 0 : (ot = o, o = e), o !== e ? (t.length > ot ? (a = t.charAt(ot), ot++) : (a = e, 0 === lt && yt(P)), a !== e ? (u, u = o = a) : (ot = u, u = e)) : (ot = u, u = e);
                        else i = e;
                        i !== e ? (62 === t.charCodeAt(ot) ? (u = ">", ot++) : (u = e, 0 === lt && yt(W)), u !== e ? (n, n = r = {
                            type: "File",
                            value: i.join("")
                        }) : (ot = n, n = e)) : (ot = n, n = e);
                    } else ot = n, n = e;
                    return n;
                }
                function zt() {
                    var n, r, i;
                    if (n = ot, r = [], F.test(t.charAt(ot)) ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(H)), i !== e) for(; i !== e;)r.push(i), F.test(t.charAt(ot)) ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(H));
                    else r = e;
                    return r !== e && (n, r = Ht(r)), n = r;
                }
                function Lt() {
                    var n, r, i, u, o, a;
                    if (n = ot, r = ot, Z.test(t.charAt(ot)) ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt($)), i !== e) {
                        if (u = [], F.test(t.charAt(ot)) ? (o = t.charAt(ot), ot++) : (o = e, 0 === lt && yt(H)), o !== e) for(; o !== e;)u.push(o), F.test(t.charAt(ot)) ? (o = t.charAt(ot), ot++) : (o = e, 0 === lt && yt(H));
                        else u = e;
                        u !== e ? r = i = [
                            i,
                            u
                        ] : (ot = r, r = e);
                    } else ot = r, r = e;
                    return r !== e && (n, r = {
                        type: "Type",
                        name: Ht((a = r, a.reduce(function(t, n) {
                            return t.concat(n);
                        }, [])))
                    }), n = r;
                }
                function Dt() {
                    var n, r, i, u;
                    if (n = ot, 34 === t.charCodeAt(ot) ? (r = '"', ot++) : (r = e, 0 === lt && yt(R)), r !== e) {
                        for(i = [], u = Rt(); u !== e;)i.push(u), u = Rt();
                        i !== e ? (34 === t.charCodeAt(ot) ? (u = '"', ot++) : (u = e, 0 === lt && yt(R)), u !== e ? (n, n = r = {
                            type: "String",
                            value: i.join("")
                        }) : (ot = n, n = e)) : (ot = n, n = e);
                    } else ot = n, n = e;
                    if (n === e) {
                        if (n = ot, 39 === t.charCodeAt(ot) ? (r = "'", ot++) : (r = e, 0 === lt && yt(G)), r !== e) {
                            for(i = [], u = Ut(); u !== e;)i.push(u), u = Ut();
                            i !== e ? (39 === t.charCodeAt(ot) ? (u = "'", ot++) : (u = e, 0 === lt && yt(G)), u !== e ? (n, n = r = function(t) {
                                return {
                                    type: "String",
                                    value: t.join("")
                                };
                            }(i)) : (ot = n, n = e)) : (ot = n, n = e);
                        } else ot = n, n = e;
                    }
                    return n;
                }
                function Bt() {
                    var n, r, i, u, o, a, f;
                    if (n = ot, "[]" === t.substr(ot, 2) ? (r = "[]", ot += 2) : (r = e, 0 === lt && yt(V)), r !== e && (n, r = []), (n = r) === e && (n = ot, r = ot, 91 === t.charCodeAt(ot) ? (i = "[", ot++) : (i = e, 0 === lt && yt(J)), i !== e && (u = mt()) !== e ? (93 === t.charCodeAt(ot) ? (o = "]", ot++) : (o = e, 0 === lt && yt(Q)), o !== e ? (r, r = i = u) : (ot = r, r = e)) : (ot = r, r = e), r !== e && (n, r = [
                        r
                    ]), (n = r) === e)) {
                        if (n = ot, 91 === t.charCodeAt(ot) ? (r = "[", ot++) : (r = e, 0 === lt && yt(J)), r !== e) {
                            if ((i = mt()) !== e) {
                                if (u = [], o = ot, 44 === t.charCodeAt(ot) ? (a = ",", ot++) : (a = e, 0 === lt && yt(w)), a !== e && Ft() !== e && (f = mt()) !== e ? (o, o = a = q(0, f)) : (ot = o, o = e), o !== e) for(; o !== e;)u.push(o), o = ot, 44 === t.charCodeAt(ot) ? (a = ",", ot++) : (a = e, 0 === lt && yt(w)), a !== e && Ft() !== e && (f = mt()) !== e ? (o, o = a = q(0, f)) : (ot = o, o = e);
                                else u = e;
                                u !== e ? (93 === t.charCodeAt(ot) ? (o = "]", ot++) : (o = e, 0 === lt && yt(Q)), o !== e ? (n, n = r = [
                                    i
                                ].concat(u)) : (ot = n, n = e)) : (ot = n, n = e);
                            } else ot = n, n = e;
                        } else ot = n, n = e;
                    }
                    return n;
                }
                function Rt() {
                    var n, r, i;
                    return n = ot, r = ot, lt++, 34 === t.charCodeAt(ot) ? (i = '"', ot++) : (i = e, 0 === lt && yt(R)), i === e && (92 === t.charCodeAt(ot) ? (i = "\\", ot++) : (i = e, 0 === lt && yt(U))), lt--, i === e ? r = void 0 : (ot = r, r = e), r !== e ? (t.length > ot ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(P)), i !== e ? (n, n = r = i) : (ot = n, n = e)) : (ot = n, n = e), n === e && (n = ot, 92 === t.charCodeAt(ot) ? (r = "\\", ot++) : (r = e, 0 === lt && yt(U)), r !== e && (i = Pt()) !== e ? (n, n = r = i) : (ot = n, n = e)), n;
                }
                function Ut() {
                    var n, r, i;
                    return n = ot, r = ot, lt++, 39 === t.charCodeAt(ot) ? (i = "'", ot++) : (i = e, 0 === lt && yt(G)), i === e && (92 === t.charCodeAt(ot) ? (i = "\\", ot++) : (i = e, 0 === lt && yt(U))), lt--, i === e ? r = void 0 : (ot = r, r = e), r !== e ? (t.length > ot ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(P)), i !== e ? (n, n = r = i) : (ot = n, n = e)) : (ot = n, n = e), n === e && (n = ot, 92 === t.charCodeAt(ot) ? (r = "\\", ot++) : (r = e, 0 === lt && yt(U)), r !== e && (i = Pt()) !== e ? (n, n = r = i) : (ot = n, n = e)), n;
                }
                function Wt() {
                    var n, r, i;
                    return n = ot, r = ot, lt++, 58 === t.charCodeAt(ot) ? (i = ":", ot++) : (i = e, 0 === lt && yt(f)), lt--, i === e ? r = void 0 : (ot = r, r = e), r !== e ? (t.length > ot ? (i = t.charAt(ot), ot++) : (i = e, 0 === lt && yt(P)), i !== e ? (n, n = r = i) : (ot = n, n = e)) : (ot = n, n = e), n;
                }
                function Pt() {
                    var n, r;
                    return 39 === t.charCodeAt(ot) ? (n = "'", ot++) : (n = e, 0 === lt && yt(G)), n === e && (34 === t.charCodeAt(ot) ? (n = '"', ot++) : (n = e, 0 === lt && yt(R)), n === e && (92 === t.charCodeAt(ot) ? (n = "\\", ot++) : (n = e, 0 === lt && yt(U)), n === e && (n = ot, 98 === t.charCodeAt(ot) ? (r = "b", ot++) : (r = e, 0 === lt && yt(Y)), r !== e && (n, r = "\b"), (n = r) === e && (n = ot, 102 === t.charCodeAt(ot) ? (r = "f", ot++) : (r = e, 0 === lt && yt(K)), r !== e && (n, r = "\f"), (n = r) === e && (n = ot, 110 === t.charCodeAt(ot) ? (r = "n", ot++) : (r = e, 0 === lt && yt(X)), r !== e && (n, r = "\n"), (n = r) === e && (n = ot, 114 === t.charCodeAt(ot) ? (r = "r", ot++) : (r = e, 0 === lt && yt(tt)), r !== e && (n, r = "\r"), (n = r) === e && (n = ot, 116 === t.charCodeAt(ot) ? (r = "t", ot++) : (r = e, 0 === lt && yt(nt)), r !== e && (n, r = "	"), (n = r) === e && (n = ot, 118 === t.charCodeAt(ot) ? (r = "v", ot++) : (r = e, 0 === lt && yt(rt)), r !== e && (n, r = "\v"), n = r)))))))), n;
                }
                function Ft() {
                    var n, r;
                    for(lt++, n = [], it.test(t.charAt(ot)) ? (r = t.charAt(ot), ot++) : (r = e, 0 === lt && yt(ut)); r !== e;)n.push(r), it.test(t.charAt(ot)) ? (r = t.charAt(ot), ot++) : (r = e, 0 === lt && yt(ut));
                    return lt--, n === e && (r = e, 0 === lt && yt(et)), n;
                }
                function Ht(t) {
                    return t.join("");
                }
                if ((r = u()) !== e && ot === t.length) return r;
                throw r !== e && ot < t.length && yt({
                    type: "end"
                }), gt(ct, ft < t.length ? t.charAt(ft) : null, ft < t.length ? dt(ft, ft + 1) : dt(ft, ft));
            }, c = function() {
                return (c = Object.assign || function(t) {
                    for(var n, r = 1, e = arguments.length; r < e; r++)for(var i in n = arguments[r])Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    return t;
                }).apply(this, arguments);
            }, l = {
                booleanStyle: "color: #65b5ca; font-weight: normal;",
                bytesStyle: "color: #34495e; font-weight: normal;",
                customTypeNameStyle: "color: #70b53c; font-weight: bold;",
                dataStructureNameStyle: "color: #70b53c; font-weight: normal;",
                debugTagStyle: "color: grey; font-weight: normal;",
                elmLogoElementStyle: "width: 12px; height: 12px; display: inline-block; position: relative; top: 2px;background-size: contain; background-repeat: no-repeat; margin-right: 0.5em; background-position: center center; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cG9seWdvbiBmaWxsPSIjNUZCNENCIiBwb2ludHM9IjEyOCAxMzUuMDIyMDI5IDcuMDIyODIxMDUgMjU2IDI0OC45Nzc5NzEgMjU2Ij48L3BvbHlnb24+CgkJPHBvbHlnb24gZmlsbD0iI0VFQTQwMCIgcG9pbnRzPSIyMDIuMzMyMzEzIDE5NS4zMTEwNzUgMjU2IDI0OC45Nzk1NTQgMjU2IDE0MS42NDMzODgiPjwvcG9seWdvbj4KCQk8cG9seWdvbiBmaWxsPSIjNTk2Mjc3IiBwb2ludHM9IjEyMC45Nzc5NzEgMTI4IDAgNy4wMjIwMjkyMSAwIDI0OC45Nzk1NTQiPjwvcG9seWdvbj4KCQk8cG9seWdvbiBmaWxsPSIjNUZCNENCIiBwb2ludHM9IjI1NiAxMTMuODA2Mjg0IDI1NiAwIDE0Mi4xOTI5MjQgMCI+PC9wb2x5Z29uPgoJCTxwb2x5Z29uIGZpbGw9IiM4Q0Q2MzYiIHBvaW50cz0iMTk1LjU4MzUwNCA2Ny40MzQyMTU5IDI1NS44NzIzMTIgMTI3LjcyMzAyNCAxOTUuMzA4NTg5IDE4OC4yODY3NDggMTM1LjAxOTc4IDEyNy45OTc5NCI+PC9wb2x5Z29uPgoJCTxwb2x5Z29uIGZpbGw9IiM4Q0Q2MzYiIHBvaW50cz0iNy4wMjEyMzczNyAwIDYyLjc0NjEyMjggNTUuNzI1Njc3MiAxODMuODc1MzM1IDU1LjcyNTY3NzIgMTI4LjE0OTY1OCAwIj48L3BvbHlnb24+CgkJPHBvbHlnb24gZmlsbD0iI0VFQTQwMCIgcG9pbnRzPSIxMjggMTIwLjk3ODc2MyAxODMuMzIxODM5IDY1LjY1NjEzMTUgNzIuNjc3MzY4OSA2NS42NTYxMzE1Ij48L3BvbHlnb24+Cgk8L2c+Cjwvc3ZnPgo=);",
                expandableBorderStyle: "margin-left: 4px; padding-left: 11px; border-left: 1px solid grey;",
                greyedItalicsStyle: "color: grey; font-weight: normal; font-style: italic;",
                greyedStyle: "color: grey; font-weight: normal;",
                keyElementStyle: "color: #34495e; font-weight: normal; font-style: italic;",
                numberStyle: "color: #da9e26; font-weight: normal;",
                stringStyle: "color: #65b5ca; font-weight: normal;",
                typeNameStyle: "color: #70b53c; font-weight: bold;"
            }, s = c({}, l, {
                debugTagStyle: "color: white; font-weight: normal;",
                keyElementStyle: "color: #ed78e6; font-weight: normal; font-style: italic;"
            }), h = function() {
                function t(t) {
                    this.attributes = {}, this.jsonML = [
                        t,
                        this.attributes
                    ];
                }
                return t.prototype.toJSONML = function() {
                    return this.jsonML;
                }, t.prototype.withChild = function(t) {
                    return this.jsonML.push(t.toJSONML()), this;
                }, t.prototype.withChildren = function(t) {
                    var n = t.map(function(t) {
                        return t.toJSONML();
                    });
                    return this.jsonML = this.jsonML.concat(n), this;
                }, t.prototype.withObject = function(t, n, r) {
                    return void 0 === r && (r = {
                        elmFormat: !0,
                        level: 0
                    }), r.key = t, this.jsonML.push([
                        "object",
                        {
                            object: n,
                            config: r
                        }
                    ]), this;
                }, t.prototype.withStyle = function(t) {
                    return this.attributes.style = void 0 === this.attributes.style ? t : this.attributes.style + t, this;
                }, t.prototype.withAttribute = function(t, n) {
                    return this.attributes[t] = n, this;
                }, t.prototype.withText = function(t) {
                    return this.jsonML.push(t + ""), this;
                }, t.prototype.toStr = function() {
                    return this.toStrInner(this.jsonML);
                }, t.prototype.toStrInner = function(t) {
                    var n = this;
                    return t.map(function(t, r) {
                        return r < 2 ? "" : "string" == typeof t ? t : t instanceof Array ? n.toStrInner(t) : "";
                    }).join("");
                }, t;
            }();
            function v(t) {
                return void 0 !== t.type;
            }
            function p(t) {
                return "Custom" === t.type;
            }
            function d(t) {
                return "Record" === t.type;
            }
            function y(t) {
                return "List" === t.type || "Array" === t.type || "Set" === t.type || "Tuple" === t.type;
            }
            function g(t) {
                return "Number" === t.type;
            }
            function _(t) {
                return "Type" === t.type;
            }
            function m(t) {
                return "Dict" === t.type;
            }
            var w = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.booleanStyle).withText(this.elmObj.value ? "True" : "False");
                }, t;
            }(), b = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.bytesStyle).withText(this.elmObj.value + " B");
                }, t;
            }(), x = function() {
                function t() {}
                return t.prototype.header = function() {
                    return new h("span").withStyle("color: grey; font-weight: normal;").withText("…");
                }, t;
            }(), j = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function(t) {
                    var n = this;
                    if (void 0 === t && (t = {
                        elmFormat: !0,
                        level: 0
                    }), 0 === this.elmObj.value.length) return new h("span").withStyle(this.formatter.theme.customTypeNameStyle).withText(this.elmObj.name);
                    if (1 === this.elmObj.value.length) return this.wrappedHeader(new h("span").withStyle(this.formatter.theme.customTypeNameStyle).withText(this.elmObj.name + " ").withChild(this.formatter.handleHeader(this.elmObj.value[0], t)), t);
                    if (null !== t && t.level > 1) return this.wrappedHeader(new h("span").withText(this.elmObj.name + " ").withStyle(this.formatter.theme.customTypeNameStyle).withChild((new x).header()), t);
                    var r = this.elmObj.value.map(function(r) {
                        return {
                            child: r,
                            jsonml: new h("span").withChild(n.formatter.handleHeader(r, t))
                        };
                    }).reduce(function(t, n) {
                        return t.push(n.jsonml), t.push(new h("span").withText(" ")), t;
                    }, []);
                    return r.splice(-1, 1), this.wrappedHeader(new h("span").withText(this.elmObj.name + " ").withStyle(this.formatter.theme.customTypeNameStyle).withChildren(r), t);
                }, t.prototype.body = function() {
                    var t = this;
                    if (1 === this.elmObj.value.length && null === this.formatter.handleBody(this.elmObj.value[0])) return null;
                    var n = this.elmObj.value.map(function(n, r) {
                        var e = new h("span").withChild(new h("span").withStyle(t.formatter.theme.keyElementStyle).withText("" + r)).withText(": ");
                        return null === t.formatter.handleBody(n) && e.withStyle("margin-left: 13px;"), new h("div").withObject(e, n);
                    });
                    return new h("div").withStyle("margin-left: 15px;").withStyle(this.formatter.theme.expandableBorderStyle).withChildren(n);
                }, t.prototype.wrappedHeader = function(t, n) {
                    return null !== n && n.level > 1 ? new h("span").withText("( ").withChild(t).withText(" )") : t;
                }, t;
            }(), A = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n, this.elmLogoElement = new h("span").withStyle(this.formatter.theme.elmLogoElementStyle);
                }
                return t.prototype.header = function() {
                    return new h("span").withChild(this.elmLogoElement).withChild(new h("span").withChild(new h("span").withStyle(this.formatter.theme.debugTagStyle).withText(this.elmObj.name)).withText(": ")).withChild(this.formatter.handleHeader(this.elmObj.value));
                }, t.prototype.body = function() {
                    return this.formatter.handleBody(this.elmObj.value);
                }, t;
            }(), S = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return 0 === this.elmObj.value.length ? new h("span").withStyle(this.formatter.theme.greyedStyle).withText("Dict.empty") : new h("span").withStyle(this.formatter.theme.dataStructureNameStyle).withText("Dict").withChild(new h("span").withText("(" + this.elmObj.value.length + ")"));
                }, t.prototype.body = function(t) {
                    var n = this, r = this.elmObj.value.map(function(r) {
                        var e = n.formatter.handleHeader(r.key, t), i = new h("span").withChild(new h("span").withStyle(n.formatter.theme.keyElementStyle).withChild(e)).withText(": ");
                        return null === n.formatter.handleBody(r.value, t) && i.withStyle("margin-left: 13px;"), new h("div").withObject(i, r.value, t);
                    });
                    return new h("div").withStyle(this.formatter.theme.expandableBorderStyle).withChildren(r);
                }, t;
            }(), O = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.bytesStyle).withText(this.elmObj.value);
                }, t;
            }(), C = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    var t = "";
                    switch(this.elmObj){
                        case "Internals":
                            t = "<internals>";
                            break;
                        case "Function":
                            t = "<function>";
                            break;
                        case "Unit":
                            t = "()";
                    }
                    return new h("span").withStyle(this.formatter.theme.greyedItalicsStyle).withText(t);
                }, t;
            }(), I = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function(t) {
                    return 0 === this.elmObj.value.length ? new h("span").withStyle(this.formatter.theme.greyedStyle).withText("[]") : 1 === this.elmObj.value.length ? new h("span").withStyle(this.formatter.theme.greyedStyle).withText("[").withChild(new h("span").withChild(this.formatter.handleHeader(this.elmObj.value[0], t))).withText("]") : new h("span").withStyle(this.formatter.theme.dataStructureNameStyle).withText(this.elmObj.type).withChild(new h("span").withText("(" + this.elmObj.value.length + ")"));
                }, t.prototype.body = function(t) {
                    var n = this;
                    if (0 === this.elmObj.value.length) return null;
                    var r = this.elmObj.value.map(function(r, e) {
                        var i = new h("span").withChild(new h("span").withStyle(n.formatter.theme.keyElementStyle).withText("" + e)).withText(": ");
                        return null === n.formatter.handleBody(r, t) && i.withStyle("margin-left: 13px"), new h("div").withObject(i, r);
                    });
                    return new h("div").withStyle(this.formatter.theme.expandableBorderStyle).withChildren(r);
                }, t;
            }(), T = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.numberStyle).withText(this.elmObj.value);
                }, t;
            }(), M = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function(t) {
                    var n = this;
                    if (t && t.level > 2) return new h("span").withText("{ ").withChild((new x).header()).withText(" }");
                    var r = Object.keys(this.elmObj.value).map(function(r) {
                        return new h("span").withStyle(n.formatter.theme.keyElementStyle).withText(r + ": ").withChild(n.formatter.handleHeader(n.elmObj.value[r], t));
                    }).reduce(function(t, n) {
                        var r = t.size + n.toStr().length;
                        return t.hasEllipsis || (r < 50 ? (t.acc.push(n), t.size = r) : (t.acc.push((new x).header()), t.hasEllipsis = !0)), t;
                    }, {
                        acc: [],
                        size: 0,
                        hasEllipsis: !1
                    }).acc.reduce(function(t, n) {
                        return t.push(new h("span").withText(", ")), t.push(n), t;
                    }, []);
                    return r.splice(0, 1), new h("span").withText("{ ").withChildren(r).withText(" }");
                }, t.prototype.body = function(t) {
                    var n = this, r = Object.keys(this.elmObj.value).map(function(r) {
                        var e = new h("span").withStyle(n.formatter.theme.keyElementStyle).withText(r).withText(": ");
                        return null === n.formatter.handleBody(n.elmObj.value[r], t) && e.withStyle("margin-left: 13px;"), new h("div").withObject(e, n.elmObj.value[r]);
                    });
                    return new h("div").withStyle("margin-left: 15px;").withChildren(r);
                }, t;
            }(), N = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.stringStyle).withText('"' + this.elmObj.value + '"');
                }, t;
            }(), E = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function(t) {
                    var n = this;
                    if (t && t.level > 1) return new h("span").withText("( ").withChild(this.formatter.handleHeader(this.elmObj.value[0], t)).withChild(new h("span").withText(", ")).withChild((new x).header()).withText(" )");
                    var r = this.elmObj.value.map(function(r) {
                        return n.formatter.handleHeader(r, t);
                    }).reduce(function(t, n) {
                        return t.push(new h("span").withText(", ")), t.push(n), t;
                    }, []);
                    return r.splice(0, 1), new h("span").withText("( ").withChildren(r).withText(" )");
                }, t.prototype.body = function(t) {
                    var n = this;
                    if (this.elmObj.value.length <= 1) return null;
                    var r = this.elmObj.value.map(function(r, e) {
                        var i = new h("span").withChild(new h("span").withStyle(n.formatter.theme.keyElementStyle).withText("" + e)).withText(": ");
                        return null === n.formatter.handleBody(r, t) && i.withStyle("margin-left: 13px;"), new h("div").withObject(i, r);
                    });
                    return new h("div").withStyle(this.formatter.theme.expandableBorderStyle).withChildren(r);
                }, t;
            }(), k = function() {
                function t(t, n) {
                    this.elmObj = t, this.formatter = n;
                }
                return t.prototype.header = function() {
                    return new h("span").withStyle(this.formatter.theme.typeNameStyle).withText(this.elmObj.name);
                }, t;
            }();
            function z(t, n) {
                return "String" === t.type ? new N(t, n) : "Boolean" === t.type ? new w(t, n) : v(t) && "ElmDebug" === t.type ? new A(t, n) : g(t) ? new T(t, n) : _(t) ? new k(t, n) : p(t) ? new j(t, n) : m(t) ? new S(t, n) : y(t) ? "Tuple" === t.type ? new E(t, n) : new I(t, n) : d(t) ? new M(t, n) : "Function" === t.type || "Internals" === t.type || "Unit" === t.type ? new C(t.type, n) : "Bytes" === t.type ? new b(t, n) : "File" === t.type ? new O(t, n) : null;
            }
            var L = function() {
                function t(t) {
                    window.devtoolsFormatters = [
                        this
                    ], this.theme = t;
                }
                return t.prototype.format = function(t) {
                    return t;
                }, t.prototype.header = function(t, n) {
                    return n && n.elmFormat ? new h("div").withChild(n.key).withChild(this.handleHeader(t, n)).toJSONML() : t.type && "ElmDebug" === t.type ? new h("div").withChild(this.handleHeader(t)).toJSONML() : null;
                }, t.prototype.hasBody = function(t, n) {
                    var r = z(t, this);
                    return null !== r && void 0 !== r.body && null !== r.body();
                }, t.prototype.body = function(t, n) {
                    return null === this.handleBody(t) ? null : this.handleBody(t).toJSONML();
                }, t.prototype.handleHeader = function(t, n) {
                    void 0 === n && (n = {
                        elmFormat: !0,
                        level: 0
                    });
                    var r = i.clone(n), e = z(t, this);
                    return r.level = n.level + 1, e ? e.header(r) : new h("span").withText("UNPARSED: ").withText(t);
                }, t.prototype.handleBody = function(t, n) {
                    var r = z(t, this);
                    return void 0 !== r ? void 0 !== r.body ? r.body(n) : null : new h("div").withText("UNPARSED body: ").withText(t);
                }, t;
            }(), D = function() {
                function t() {}
                return t.prototype.format = function(t) {
                    var n;
                    return (n = {})[t.name] = this.formatValue(t.value), n;
                }, t.prototype.formatArray = function(t) {
                    var n = this;
                    return t.map(function(t) {
                        return n.formatValue(t);
                    });
                }, t.prototype.formatCustom = function(t) {
                    var n;
                    return (n = {})[t.name] = 1 === t.value.length ? this.formatValue(t.value[0]) : this.formatArray(t.value), n;
                }, t.prototype.formatValue = function(t) {
                    var n = this;
                    if (p(t)) return this.formatCustom(t);
                    if (d(t)) return Object(i.mapValues)(t.value, function(t) {
                        return n.formatValue(t);
                    });
                    if (y(t)) return this.formatArray(t.value);
                    if (m(t)) return t.value.reduce(function(t, r) {
                        var e;
                        return Object(i.defaults)(((e = {})[n.formatValue(r.key)] = n.formatValue(r.value), e), t);
                    }, {});
                    if (_(t)) return t.name;
                    if (g(t)) return t.value;
                    switch(t.type){
                        case "Function":
                            return "<function>";
                        case "Internals":
                            return "<internals>";
                        case "Bytes":
                            return t.value + " B";
                        case "File":
                            return t.value;
                        case "Unit":
                            return "()";
                        case "String":
                        case "Boolean":
                            return t.value;
                        default:
                            return void 0 !== t.value && v(t.value) ? this.formatValue(t.value) : t;
                    }
                }, t;
            }();
            r.d(n, "parse", function() {
                return R;
            }), r.d(n, "register", function() {
                return U;
            });
            var B = {
                active: !0,
                debug: !1,
                limit: 1e6,
                simple_mode: !1,
                theme: "light"
            };
            function R(t) {
                return f(t);
            }
            function U(t) {
                if (window.__ELM_DEBUG_TRANSFORM_OPTIONS__) return window.__ELM_DEBUG_TRANSFORM_OPTIONS__;
                var n = console.log;
                t && void 0 === t.theme && (t.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                var r = i.merge(B, t);
                return console.log = function() {
                    if (!arguments || arguments.length > 1) n.apply(console, arguments);
                    else {
                        var t = arguments[0];
                        if (!t || t.length > r.limit) n.call(console, t);
                        else if (t.length > r.limit) n.call(console, t);
                        else {
                            var e = "dark" === r.theme ? s : l, i = r.simple_mode || !window.chrome ? new D : new L(e);
                            try {
                                r.debug && n.call(console, "Original message:", t);
                                var u = R(t);
                                n.call(console, JSON.parse(JSON.stringify(i.format(u))));
                            } catch (e1) {
                                r.debug && console.error("Parsing error: " + e1), n.call(console, t);
                            }
                        }
                    }
                }, window.__ELM_DEBUG_TRANSFORM_OPTIONS__ = r, r;
            }
        }
    ]);
});


var $073d2c6cc6763899$exports = {};
(function(scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function(a) {
            return function(b) {
                return fun(a, b);
            };
        });
    }
    function F3(fun) {
        return F(3, fun, function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c);
                };
            };
        });
    }
    function F4(fun) {
        return F(4, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return fun(a, b, c, d, e, f, g);
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return function(i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
    // EQUALITY
    function _Utils_eq(x, y) {
        for(var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack));
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) return true;
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        /**/ if (x.$ === "Set_elm_builtin") {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
        }
        if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/ for(var key in x){
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) return false;
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
    });
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
        /**/ if (x instanceof String) {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
        }
        //*/
        /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/ /**/ if (x.$[0] === "#") return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        // traverse conses until end of a list or a mismatch
        for(; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b); // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
    });
    var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
    });
    var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
    });
    var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
    });
    var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    // COMMON VALUES
    var _Utils_Tuple0_UNUSED = 0;
    var _Utils_Tuple0 = {
        $: "#0"
    };
    function _Utils_Tuple2_UNUSED(a, b) {
        return {
            a: a,
            b: b
        };
    }
    function _Utils_Tuple2(a, b) {
        return {
            $: "#2",
            a: a,
            b: b
        };
    }
    function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_Tuple3(a, b, c) {
        return {
            $: "#3",
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_chr_UNUSED(c) {
        return c;
    }
    function _Utils_chr(c) {
        return new String(c);
    }
    // RECORDS
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for(var key in oldRecord)newRecord[key] = oldRecord[key];
        for(var key in updatedFields)newRecord[key] = updatedFields[key];
        return newRecord;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === "string") return xs + ys;
        // append Lists
        if (!xs.b) return ys;
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for(var curr = root; xs.b; xs = xs.b)curr = curr.b = _List_Cons(xs.a, ys);
        return root;
    }
    var _List_Nil_UNUSED = {
        $: 0
    };
    var _List_Nil = {
        $: "[]"
    };
    function _List_Cons_UNUSED(hd, tl) {
        return {
            $: 1,
            a: hd,
            b: tl
        };
    }
    function _List_Cons(hd, tl) {
        return {
            $: "::",
            a: hd,
            b: tl
        };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for(var i = arr.length; i--;)out = _List_Cons(arr[i], out);
        return out;
    }
    function _List_toArray(xs) {
        for(var out = []; xs.b; xs = xs.b)out.push(xs.a);
        return out;
    }
    var _List_map2 = F3(function(f, xs, ys) {
        for(var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b)arr.push(A2(f, xs.a, ys.a));
        return _List_fromArray(arr);
    });
    var _List_map3 = F4(function(f, xs, ys, zs) {
        for(var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A3(f, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for(var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for(var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    });
    var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    });
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [
            value
        ];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for(var i = 0; i < size; i++)result[i] = func(offset + i);
        return result;
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for(var i = 0; i < max && ls.b; i++){
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    });
    var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
    });
    var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[index] = value;
        return result;
    });
    var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[length] = value;
        return result;
    });
    var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for(var i = 0; i < length; i++)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
        for(var i = array.length - 1; i >= 0; i--)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = func(array[i]);
        return result;
    });
    var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = A2(func, offset + i, array[i]);
        return result;
    });
    var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
    });
    var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) itemsToCopy = source.length;
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for(var i = 0; i < destLen; i++)result[i] = dest[i];
        for(var i = 0; i < itemsToCopy; i++)result[i + destLen] = source[i];
        return result;
    });
    // LOG
    var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
    });
    var _Debug_log = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    });
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function(message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString_UNUSED(value) {
        return "<internals>";
    }
    function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") return _Debug_internalColor(ansi, "<function>");
        if (typeof value === "boolean") return _Debug_ctorColor(ansi, value ? "True" : "False");
        if (typeof value === "number") return _Debug_numberColor(ansi, value + "");
        if (value instanceof String) return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        if (typeof value === "string") return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") return _Debug_internalColor(ansi, "<internals>");
            if (tag[0] === "#") {
                var output = [];
                for(var k in value){
                    if (k === "$") continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            if (tag === "Array_elm_builtin") return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for(; value.b; value = value.b)output += "," + _Debug_toAnsiString(ansi, value.a);
                return output + "]";
            }
            var output = "";
            for(var i in value){
                if (i === "$") continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        if (typeof File !== "undefined" && value instanceof File) return _Debug_internalColor(ansi, "<" + value.name + ">");
        if (typeof value === "object") {
            var output = [];
            for(var key in value){
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) return "{}";
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) return s.replace(/\'/g, "\\'");
        else return s.replace(/\"/g, '\\"');
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\x1b[36m" + string + "\x1b[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    // CRASH
    function _Debug_crash_UNUSED(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch(identifier){
            case 0:
                throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) return "on line " + region.start.line;
        return "on lines " + region.start.line + " through " + region.end.line;
    }
    // MATH
    var _Basics_add = F2(function(a, b) {
        return a + b;
    });
    var _Basics_sub = F2(function(a, b) {
        return a - b;
    });
    var _Basics_mul = F2(function(a, b) {
        return a * b;
    });
    var _Basics_fdiv = F2(function(a, b) {
        return a / b;
    });
    var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
    });
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
    });
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    // MORE MATH
    function _Basics_toFloat(x) {
        return x;
    }
    function _Basics_truncate(n) {
        return n | 0;
    }
    function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) {
        return !bool;
    }
    var _Basics_and = F2(function(a, b) {
        return a && b;
    });
    var _Basics_or = F2(function(a, b) {
        return a || b;
    });
    var _Basics_xor = F2(function(a, b) {
        return a !== b;
    });
    var _String_cons = F2(function(chr, str) {
        return chr + str;
    });
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(0xD800 <= word && word <= 0xDBFF ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
    }
    var _String_append = F2(function(a, b) {
        return a + b;
    });
    function _String_length(str) {
        return str.length;
    }
    var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while(i < len){
            var word = string.charCodeAt(i);
            if (0xD800 <= word && word <= 0xDBFF) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    });
    var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while(i < len){
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (0xD800 <= word && word <= 0xDBFF) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) arr.push(char);
        }
        return arr.join("");
    });
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while(i < len){
            var word = str.charCodeAt(i);
            if (0xD800 <= word && word <= 0xDBFF) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            } else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while(i < len){
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (0xD800 <= word && word <= 0xDBFF) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_split = F2(function(sep, str) {
        return str.split(sep);
    });
    var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
    });
    var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
    });
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) return true;
        }
        return false;
    });
    var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (0xDC00 <= word && word <= 0xDFFF) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) return false;
        }
        return true;
    });
    var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
    });
    var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
    });
    var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
    });
    var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) return _List_Nil;
        var i = 0;
        var is = [];
        while((i = str.indexOf(sub, i)) > -1){
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    });
    // TO STRING
    function _String_fromNumber(number) {
        return number + "";
    }
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 0x2B /* + */  || code0 == 0x2D /* - */  ? 1 : 0;
        for(var i = start; i < str.length; ++i){
            var code = str.charCodeAt(i);
            if (code < 0x30 || 0x39 < code) return $elm$core$Maybe$Nothing;
            total = 10 * total + code - 0x30;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) return $elm$core$Maybe$Nothing;
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (0xD800 <= code && code <= 0xDBFF) return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000;
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 0x10FFFF < code ? "�" : code <= 0xFFFF ? String.fromCharCode(code) : (code -= 0x10000, String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**/ function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return {
            $: 2,
            b: decoder
        };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) {
        return {
            $: 3,
            b: decoder
        };
    }
    function _Json_decodeArray(decoder) {
        return {
            $: 4,
            b: decoder
        };
    }
    function _Json_decodeNull(value) {
        return {
            $: 5,
            c: value
        };
    }
    var _Json_decodeField = F2(function(field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    });
    var _Json_decodeIndex = F2(function(index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    });
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen = F2(function(callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    });
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [
            d1
        ]);
    });
    var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [
            d1,
            d2
        ]);
    });
    var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3
        ]);
    });
    var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4
        ]);
    });
    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5
        ]);
    });
    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6
        ]);
    });
    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7
        ]);
    });
    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7,
            d8
        ]);
    });
    // DECODE
    var _Json_runOnString = F2(function(decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        } catch (e) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    });
    var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    });
    function _Json_runHelp(decoder, value) {
        switch(decoder.$){
            case 2:
                return decoder.b(value);
            case 5:
                return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) return _Json_expecting("a LIST", value);
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) return _Json_expecting("an ARRAY", value);
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                var result = _Json_runHelp(decoder.b, value[field]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) return _Json_expecting("an ARRAY", value);
                if (index >= value.length) return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                var result = _Json_runHelp(decoder.b, value[index]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) return _Json_expecting("an OBJECT", value);
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for(var key in value)if (value.hasOwnProperty(key)) {
                    var result = _Json_runHelp(decoder.b, value[key]);
                    if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                    keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for(var i = 0; i < decoders.length; i++){
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) return result;
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for(var temp = decoder.g; temp.b; temp = temp.b){
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) return result;
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for(var i = 0; i < len; i++){
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
    }
    function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
            return array[i];
        });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
    }
    // EQUALITY
    function _Json_equality(x, y) {
        if (x === y) return true;
        if (x.$ !== y.$) return false;
        switch(x.$){
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) return false;
        for(var i = 0; i < len; i++){
            if (!_Json_equality(aDecoders[i], bDecoders[i])) return false;
        }
        return true;
    }
    // ENCODE
    var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    });
    function _Json_wrap(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Json_unwrap(value) {
        return value.a;
    }
    function _Json_wrap_UNUSED(value) {
        return value;
    }
    function _Json_unwrap_UNUSED(value) {
        return value;
    }
    function _Json_emptyArray() {
        return [];
    }
    function _Json_emptyObject() {
        return {};
    }
    var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    });
    function _Json_addEntry(func) {
        return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen = F2(function(callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    });
    var _Scheduler_onError = F2(function(callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    });
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) task.c();
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/ var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) return;
        _Scheduler_working = true;
        while(proc = _Scheduler_queue.shift())_Scheduler_step(proc);
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while(proc.f){
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while(proc.g && proc.g.$ !== rootTag)proc.g = proc.g.i;
                if (!proc.g) return;
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            } else if (rootTag === 2) {
                proc.f.c = proc.f.b(function(newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            } else if (rootTag === 5) {
                if (proc.h.length === 0) return;
                proc.f = proc.f.b(proc.h.shift());
            } else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function() {
                clearTimeout(id);
            };
        });
    }
    // PROGRAMS
    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function() {
            return function() {};
        });
    });
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**/ , _Json_errorToString(result.a));
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? {
            ports: ports
        } : {};
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for(var key in _Platform_effectManagers){
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
                var value = msg.a;
                if (msg.$ === 0) return A3(onSelfMsg, router, value, state);
                return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
        });
    });
    // BAGS
    function _Platform_leaf(home) {
        return function(value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map = F2(function(tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    });
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({
            p: managers,
            q: cmdBag,
            r: subBag
        });
        if (_Platform_effectsActive) return;
        _Platform_effectsActive = true;
        for(var fx; fx = _Platform_effectsQueue.shift();)_Platform_dispatchEffects(fx.p, fx.q, fx.r);
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for(var home in managers)_Scheduler_rawSend(managers[home], {
            $: "fx",
            a: effectsDict[home] || {
                i: _List_Nil,
                j: _List_Nil
            }
        });
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch(bag.$){
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for(var list = bag.m; list.b; list = list.b)_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for(var temp = taggers; temp; temp = temp.t)x = temp.s(x);
            return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) _Debug_crash(3, name);
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
    });
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for(; cmdList.b; cmdList = cmdList.b){
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for(var i = 0; i < currentSubs.length; i++)currentSubs[i](value);
            }
            return init;
        });
        // PUBLIC API
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) subs.splice(index, 1);
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
            return tagger(finalTagger(value));
        };
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for(var temp = subs; temp.b; temp = temp.b)sendToApp(temp.a(value));
        }
        return {
            send: send
        };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export_UNUSED(exports) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports) : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for(var name in exports)name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
    }
    function _Platform_export(exports) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports) : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for(var name in exports)name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name]) : obj[name] = exports[name];
    }
    // HELPERS
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args) {
        // NOTE: this function needs _Platform_export available to work
        /**_UNUSED/
	var node = args['node'];
	//*/ /**/ var node = args && args["node"] ? args["node"] : _Debug_crash(0);
        //*/
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function() {}), node);
        return {};
    });
    // TEXT
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    // NODE
    var _VirtualDom_nodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for(var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b){
                var kid = kidList.a;
                descendantsCount += kid.b || 0;
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    });
    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for(var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b){
                var kid = kidList.a;
                descendantsCount += kid.b.b || 0;
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    });
    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);
    // CUSTOM
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    // MAP
    var _VirtualDom_map = F2(function(tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    });
    // LAZY
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy = F2(function(func, a) {
        return _VirtualDom_thunk([
            func,
            a
        ], function() {
            return func(a);
        });
    });
    var _VirtualDom_lazy2 = F3(function(func, a, b) {
        return _VirtualDom_thunk([
            func,
            a,
            b
        ], function() {
            return A2(func, a, b);
        });
    });
    var _VirtualDom_lazy3 = F4(function(func, a, b, c) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c
        ], function() {
            return A3(func, a, b, c);
        });
    });
    var _VirtualDom_lazy4 = F5(function(func, a, b, c, d) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d
        ], function() {
            return A4(func, a, b, c, d);
        });
    });
    var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e
        ], function() {
            return A5(func, a, b, c, d, e);
        });
    });
    var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f
        ], function() {
            return A6(func, a, b, c, d, e, f);
        });
    });
    var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f,
            g
        ], function() {
            return A7(func, a, b, c, d, e, f, g);
        });
    });
    var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h
        ], function() {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    });
    // FACTS
    var _VirtualDom_on = F2(function(key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    });
    var _VirtualDom_style = F2(function(key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    });
    var _VirtualDom_property = F2(function(key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    });
    var _VirtualDom_attribute = F2(function(key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    });
    var _VirtualDom_attributeNS = F3(function(namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: {
                f: namespace,
                o: value
            }
        };
    });
    // XSS ATTACK VECTOR CHECKS
    //
    // For some reason, tabs can appear in href protocols and it still works.
    // So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
    // in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
    // so freaky.
    //
    // Pulling the regular expressions out to the top level gives a slight speed
    // boost in small benchmarks (4-10%) but hoisting values to reduce allocation
    // can be unpredictable in large programs where JIT may have a harder time with
    // functions are not fully self-contained. The benefit is more that the js and
    // js_html ones are so weird that I prefer to see them near each other.
    var _VirtualDom_RE_script = /^script$/i;
    var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
    var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
    var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
    function _VirtualDom_noScript(tag) {
        return _VirtualDom_RE_script.test(tag) ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return _VirtualDom_RE_js.test(value) ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
         : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return _VirtualDom_RE_js_html.test(value) ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
         : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlJson(value) {
        return typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value)) ? _Json_wrap(/**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
        ) : value;
    }
    // MAP FACTS
    var _VirtualDom_mapAttribute = F2(function(func, attr) {
        return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    });
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        // 0 = Normal
        // 1 = MayStopPropagation
        // 2 = MayPreventDefault
        // 3 = Custom
        return {
            $: handler.$,
            a: !tag ? A2($elm$json$Json$Decode$map, func, handler.a) : A3($elm$json$Json$Decode$map2, tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    });
    var _VirtualDom_mapEventRecord = F2(function(func, record) {
        return {
            message: func(record.message),
            stopPropagation: record.stopPropagation,
            preventDefault: record.preventDefault
        };
    });
    // ORGANIZE FACTS
    function _VirtualDom_organizeFacts(factList) {
        for(var facts = {}; factList.b; factList = factList.b){
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    // RENDER
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        if (tag === 0) return _VirtualDom_doc.createTextNode(vNode.a);
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while(subNode.$ === 4){
                typeof tagger !== "object" ? tagger = [
                    tagger,
                    subNode.j
                ] : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = {
                j: tagger,
                p: eventNode
            };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        // at this point `tag` must be 1 or 2
        var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for(var kids = vNode.e, i = 0; i < kids.length; i++)_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        return domNode;
    }
    // APPLY FACTS
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for(var key in facts){
            var value = facts[key];
            key === "a1" ? _VirtualDom_applyStyles(domNode, value) : key === "a0" ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === "a3" ? _VirtualDom_applyAttrs(domNode, value) : key === "a4" ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    // APPLY STYLES
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for(var key in styles)domNodeStyle[key] = styles[key];
    }
    // APPLY ATTRS
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for(var key in attrs){
            var value = attrs[key];
            typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
        }
    }
    // APPLY NAMESPACED ATTRS
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for(var key in nsAttrs){
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
        }
    }
    // APPLY EVENTS
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for(var key in events){
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported && {
                passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2
            });
            allCallbacks[key] = oldCallback;
        }
    }
    // PASSIVE EVENTS
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                _VirtualDom_passiveSupported = true;
            }
        }));
    } catch (e) {}
    // EVENT HANDLERS
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) return;
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            // 0 = Normal
            // 1 = MayStopPropagation
            // 2 = MayPreventDefault
            // 3 = Custom
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.message;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
            var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(), eventNode);
            var tagger;
            var i;
            while(tagger = currentEventNode.j){
                if (typeof tagger == "function") message = tagger(message);
                else for(var i = tagger.length; i--;)message = tagger[i](message);
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation); // stopPropagation implies isSync
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    // DIFF
    // TODO: Should we do patches like in iOS?
    //
    // type Patch
    //   = At Int Patch
    //   | Batch (List Patch)
    //   | Change ...
    //
    // How could it not be better?
    //
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) return;
        var xType = x.$;
        var yType = y.$;
        // Bail if you run into different types of nodes. Implies that the
        // structure has changed significantly and it's not worth a diff.
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            } else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        // Now we know that both nodes are the same $.
        switch(yType){
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while(same && i--)same = xRefs[i] === yRefs[i];
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                // gather nested taggers
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while(xSubNode.$ === 4){
                    nesting = true;
                    typeof xTaggers !== "object" ? xTaggers = [
                        xTaggers,
                        xSubNode.j
                    ] : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while(ySubNode.$ === 4){
                    nesting = true;
                    typeof yTaggers !== "object" ? yTaggers = [
                        yTaggers,
                        ySubNode.j
                    ] : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                // Just bail if different numbers of taggers. This implies the
                // structure of the virtual DOM has changed.
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                // check if taggers are "the same"
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                // diff everything below the taggers
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) _VirtualDom_pushPatch(patches, 3, index, y.a);
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    // assumes the incoming arrays are the same length
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for(var i = 0; i < as.length; i++){
            if (as[i] !== bs[i]) return false;
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        // Bail if obvious indicators have changed. Implies more serious
        // structural changes such that it's not worth it to diff.
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    // DIFF FACTS
    // TODO Instead of creating a new diff object, it's possible to just test if
    // there *is* a diff. During the actual patch, do the diff again and make the
    // modifications directly. This way, there's no new allocations. Worth it?
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        // look for changes and removals
        for(var xKey in x){
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            // remove if not in the new facts
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? undefined : {
                    f: x[xKey].f,
                    o: undefined
                };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            // reference equal, so don't worry about it
            if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) continue;
            diff = diff || {};
            diff[xKey] = yValue;
        }
        // add new stuff
        for(var yKey in y)if (!(yKey in x)) {
            diff = diff || {};
            diff[yKey] = y[yKey];
        }
        return diff;
    }
    // DIFF KIDS
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
        if (xLen > yLen) _VirtualDom_pushPatch(patches, 6, index, {
            v: yLen,
            i: xLen - yLen
        });
        else if (xLen < yLen) _VirtualDom_pushPatch(patches, 7, index, {
            v: xLen,
            e: yKids
        });
        // PAIRWISE DIFF EVERYTHING ELSE
        for(var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++){
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    // KEYED DIFF
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {}; // Dict String Entry
        var inserts = []; // Array { index : Int, entry : Entry }
        // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while(xIndex < xLen && yIndex < yLen){
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            // check if keys match
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            // look ahead 1 to detect insertions and removals.
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            // swap x and y
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            // insert y
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            // remove x
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            // remove x, insert y
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        // eat up any remaining nodes with removeNode and insertNode
        while(xIndex < xLen){
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while(yIndex < yLen){
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) _VirtualDom_pushPatch(patches, 8, rootIndex, {
            w: localPatches,
            x: inserts,
            y: endInserts
        });
    }
    // CHANGES FROM KEYED DIFF
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({
                r: yIndex,
                A: entry
            });
            changes[key] = entry;
            return;
        }
        // this key was removed earlier, a match!
        if (entry.c === 1) {
            inserts.push({
                r: yIndex,
                A: entry
            });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        // this key has already been inserted or moved, a duplicate!
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        // this key was inserted earlier, a match!
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        // this key has already been removed or moved, a duplicate!
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    // ADD DOM NODES
    //
    // Each DOM node has an "index" assigned in order of traversal. It is important
    // to minimize our crawl over the actual DOM, so these indexes (along with the
    // descendantsCount of virtual nodes) let us skip touching entire subtrees of
    // the DOM if we know there are no patches there.
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    // assumes `patches` is non-empty and indexes increase monotonically.
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while(index === low){
            var patchType = patch.$;
            if (patchType === 1) _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
            } else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            } else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) return i;
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while(subNode.$ === 4)subNode = subNode.k;
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        // tag must be 1 or 2 at this point
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for(var j = 0; j < vKids.length; j++){
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) return i;
            }
            low = nextLow;
        }
        return i;
    }
    // APPLY PATCHES
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) return rootDomNode;
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for(var i = 0; i < patches.length; i++){
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) rootDomNode = newNode;
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch(patch.$){
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) domNode.elm_event_node_ref.j = patch.s;
                else domNode.elm_event_node_ref = {
                    j: patch.s,
                    p: patch.u
                };
                return domNode;
            case 6:
                var data = patch.s;
                for(var i = 0; i < data.i; i++)domNode.removeChild(domNode.childNodes[data.v]);
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for(; i < kids.length; i++)domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== "undefined") domNode.parentNode.removeChild(domNode);
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10); // 'Ran into an unknown patch!'
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        if (parentNode && newNode !== domNode) parentNode.replaceChild(newNode, domNode);
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        // remove end inserts
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        // removals
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        // inserts
        var inserts = data.x;
        for(var i = 0; i < inserts.length; i++){
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        // add end inserts
        if (frag) _VirtualDom_appendChild(domNode, frag);
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) return;
        var frag = _VirtualDom_doc.createDocumentFragment();
        for(var i = 0; i < endInserts.length; i++){
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        // TEXT NODES
        if (node.nodeType === 3) return _VirtualDom_text(node.textContent);
        // WEIRD NODES
        if (node.nodeType !== 1) return _VirtualDom_text("");
        // ELEMENT NODES
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for(var i = attrs.length; i--;){
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for(var i = kids.length; i--;)kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for(var i = 0; i < len; i++)kids[i] = keyedKids[i].b;
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    // ELEMENT
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function(sendToApp, initialModel) {
            var view = impl.view;
            /**_UNUSED/
			var domNode = args['node'];
			//*/ /**/ var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
            //*/
            var currNode = _VirtualDom_virtualize(domNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
            });
        });
    });
    // DOCUMENT
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function(sendToApp, initialModel) {
            var divertHrefToApp = impl.setup && impl.setup(sendToApp);
            var view = impl.view;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.body);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
            });
        });
    });
    // ANIMATION
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined" ? cancelAnimationFrame : function(id) {
        clearTimeout(id);
    };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
        }
        return function(nextModel, isSync) {
            model = nextModel;
            isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), state = 2);
        };
    }
    // APPLICATION
    function _Browser_application(impl) {
        var onUrlChange = impl.onUrlChange;
        var onUrlRequest = impl.onUrlRequest;
        var key = function() {
            key.a(onUrlChange(_Browser_getUrl()));
        };
        return _Browser_document({
            setup: function(sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener("popstate", key);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
                return F2(function(domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = $elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest(next && curr.protocol === next.protocol && curr.host === next.host && curr.port_.a === next.port_.a ? $elm$browser$Browser$Internal(next) : $elm$browser$Browser$External(href)));
                    }
                });
            },
            init: function(flags) {
                return A3(impl.init, flags, _Browser_getUrl(), key);
            },
            view: impl.view,
            update: impl.update,
            subscriptions: impl.subscriptions
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go = F2(function(key, n) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            n && history.go(n);
            key();
        }));
    });
    var _Browser_pushUrl = F2(function(key, url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.pushState({}, "", url);
            key();
        }));
    });
    var _Browser_replaceUrl = F2(function(key, url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.replaceState({}, "", url);
            key();
        }));
    });
    // GLOBAL EVENTS
    var _Browser_fakeNode = {
        addEventListener: function() {},
        removeEventListener: function() {}
    };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on = F3(function(node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function(callback) {
            function handler(event) {
                _Scheduler_rawSpawn(sendToSelf(event));
            }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && {
                passive: true
            });
            return function() {
                node.removeEventListener(eventName, handler);
            };
        }));
    });
    var _Browser_decodeEvent = F2(function(decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    });
    // PAGE VISIBILITY
    function _Browser_visibilityInfo() {
        return typeof _VirtualDom_doc.hidden !== "undefined" ? {
            hidden: "hidden",
            change: "visibilitychange"
        } : typeof _VirtualDom_doc.mozHidden !== "undefined" ? {
            hidden: "mozHidden",
            change: "mozvisibilitychange"
        } : typeof _VirtualDom_doc.msHidden !== "undefined" ? {
            hidden: "msHidden",
            change: "msvisibilitychange"
        } : typeof _VirtualDom_doc.webkitHidden !== "undefined" ? {
            hidden: "webkitHidden",
            change: "webkitvisibilitychange"
        } : {
            hidden: "hidden",
            change: "visibilitychange"
        };
    }
    // ANIMATION FRAMES
    function _Browser_rAF() {
        return _Scheduler_binding(function(callback) {
            var id = _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(Date.now()));
            });
            return function() {
                _Browser_cancelAnimationFrame(id);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(Date.now()));
        });
    }
    // DOM STUFF
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                var node = document.getElementById(id);
                callback(node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
            });
        });
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(doStuff()));
            });
        });
    }
    // FOCUS and BLUR
    var _Browser_call = F2(function(functionName, id) {
        return _Browser_withNode(id, function(node) {
            node[functionName]();
            return _Utils_Tuple0;
        });
    });
    // WINDOW VIEWPORT
    function _Browser_getViewport() {
        return {
            scene: _Browser_getScene(),
            viewport: {
                x: _Browser_window.pageXOffset,
                y: _Browser_window.pageYOffset,
                width: _Browser_doc.documentElement.clientWidth,
                height: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport = F2(function(x, y) {
        return _Browser_withWindow(function() {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
        });
    });
    // ELEMENT VIEWPORT
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function(node) {
            return {
                scene: {
                    width: node.scrollWidth,
                    height: node.scrollHeight
                },
                viewport: {
                    x: node.scrollLeft,
                    y: node.scrollTop,
                    width: node.clientWidth,
                    height: node.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf = F3(function(id, x, y) {
        return _Browser_withNode(id, function(node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
        });
    });
    // ELEMENT
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function(node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                scene: _Browser_getScene(),
                viewport: {
                    x: x,
                    y: y,
                    width: _Browser_doc.documentElement.clientWidth,
                    height: _Browser_doc.documentElement.clientHeight
                },
                element: {
                    x: x + rect.left,
                    y: y + rect.top,
                    width: rect.width,
                    height: rect.height
                }
            };
        });
    }
    // LOAD and RELOAD
    function _Browser_reload(skipCache) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            _VirtualDom_doc.location.reload(skipCache);
        }));
    }
    function _Browser_load(url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            try {
                _Browser_window.location = url;
            } catch (err) {
                // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                // Other browsers reload the page, so let's be consistent about that.
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    // STRINGS
    var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for(var i = 0; isGood && i < smallLength;){
            var code = bigString.charCodeAt(offset);
            isGood = smallString[i++] === bigString[offset++] && (code === 0x000A /* \n */  ? (row++, col = 1) : (col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
    });
    // CHARS
    var _Parser_isSubChar = F3(function(predicate, offset, string) {
        return string.length <= offset ? -1 : (string.charCodeAt(offset) & 0xF800) === 0xD800 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === "\n" ? -2 : offset + 1 : -1;
    });
    var _Parser_isAsciiCode = F3(function(code, offset, string) {
        return string.charCodeAt(offset) === code;
    });
    // NUMBERS
    var _Parser_chompBase10 = F2(function(offset, string) {
        for(; offset < string.length; offset++){
            var code = string.charCodeAt(offset);
            if (code < 0x30 || 0x39 < code) return offset;
        }
        return offset;
    });
    var _Parser_consumeBase = F3(function(base, offset, string) {
        for(var total = 0; offset < string.length; offset++){
            var digit = string.charCodeAt(offset) - 0x30;
            if (digit < 0 || base <= digit) break;
            total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
    });
    var _Parser_consumeBase16 = F2(function(offset, string) {
        for(var total = 0; offset < string.length; offset++){
            var code = string.charCodeAt(offset);
            if (0x30 <= code && code <= 0x39) total = 16 * total + code - 0x30;
            else if (0x41 <= code && code <= 0x46) total = 16 * total + code - 55;
            else if (0x61 <= code && code <= 0x66) total = 16 * total + code - 87;
            else break;
        }
        return _Utils_Tuple2(offset, total);
    });
    // FIND STRING
    var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while(offset < target){
            var code = bigString.charCodeAt(offset++);
            code === 0x000A /* \n */  ? (col = 1, row++) : (col++, (code & 0xF800) === 0xD800 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
    });
    var _Bitwise_and = F2(function(a, b) {
        return a & b;
    });
    var _Bitwise_or = F2(function(a, b) {
        return a | b;
    });
    var _Bitwise_xor = F2(function(a, b) {
        return a ^ b;
    });
    function _Bitwise_complement(a) {
        return ~a;
    }
    var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset;
    });
    var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset;
    });
    var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset;
    });
    var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
    });
    var $elm$core$Basics$EQ = {
        $: "EQ"
    };
    var $elm$core$Basics$GT = {
        $: "GT"
    };
    var $elm$core$Basics$LT = {
        $: "LT"
    };
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr: while(true){
            if (t.$ === "RBEmpty_elm_builtin") return acc;
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    });
    var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
            return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
            return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
    };
    var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
            if (node.$ === "SubTree") {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
            } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
            }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
    });
    var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Result$Err = function(a) {
        return {
            $: "Err",
            a: a
        };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
            $: "Failure",
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
            $: "Field",
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
            $: "Index",
            a: a,
            b: b
        };
    });
    var $elm$core$Result$Ok = function(a) {
        return {
            $: "Ok",
            a: a
        };
    };
    var $elm$json$Json$Decode$OneOf = function(a) {
        return {
            $: "OneOf",
            a: a
        };
    };
    var $elm$core$Basics$False = {
        $: "False"
    };
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function(a) {
        return {
            $: "Just",
            a: a
        };
    };
    var $elm$core$Maybe$Nothing = {
        $: "Nothing"
    };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
    });
    var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
    });
    var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
    };
    var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl: while(true){
            if (!list.b) return acc;
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    });
    var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
            return i + 1;
        }), 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp: while(true){
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            } else return list;
        }
    });
    var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
    };
    var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
    };
    var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
    };
    var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    });
    var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp: while(true)switch(error.$){
            case "Field":
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                    var _v1 = $elm$core$String$uncons(f);
                    if (_v1.$ === "Nothing") return false;
                    else {
                        var _v2 = _v1.a;
                        var _char = _v2.a;
                        var rest = _v2.b;
                        return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                    }
                }();
                var fieldName = isSimple ? "." + f : "['" + (f + "']");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case "Index":
                var i = error.a;
                var err = error.b;
                var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case "OneOf":
                var errors = error.a;
                if (!errors.b) return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                    if (!context.b) return "!";
                    else return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }();
                else if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                } else {
                    var starter = function() {
                        if (!context.b) return "Json.Decode.oneOf";
                        else return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                    }();
                    var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                    return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                }
            default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                    if (!context.b) return "Problem with the given value:\n\n";
                    else return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
        }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
            $: "Array_elm_builtin",
            a: a,
            b: b,
            c: c,
            d: d
        };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
    });
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a) {
        return {
            $: "Leaf",
            a: a
        };
    };
    var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
    });
    var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
    });
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
    });
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function(a) {
        return {
            $: "SubTree",
            a: a
        };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) return $elm$core$List$reverse(newAcc);
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    });
    var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder: while(true){
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            else {
                var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        else {
            var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
            var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
            return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
    });
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while(true){
            if (fromIndex < 0) return A2($elm$core$Array$builderToArray, false, {
                nodeList: nodeList,
                nodeListSize: len / $elm$core$Array$branchFactor | 0,
                tail: tail
            });
            else {
                var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    });
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) return $elm$core$Array$empty;
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
    });
    var $elm$core$Basics$True = {
        $: "True"
    };
    var $elm$core$Result$isOk = function(result) {
        if (result.$ === "Ok") return true;
        else return false;
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
        switch(handler.$){
            case "Normal":
                return 0;
            case "MayStopPropagation":
                return 1;
            case "MayPreventDefault":
                return 2;
            default:
                return 3;
        }
    };
    var $elm$browser$Browser$External = function(a) {
        return {
            $: "External",
            a: a
        };
    };
    var $elm$browser$Browser$Internal = function(a) {
        return {
            $: "Internal",
            a: a
        };
    };
    var $elm$core$Basics$identity = function(x) {
        return x;
    };
    var $elm$browser$Browser$Dom$NotFound = function(a) {
        return {
            $: "NotFound",
            a: a
        };
    };
    var $elm$url$Url$Http = {
        $: "Http"
    };
    var $elm$url$Url$Https = {
        $: "Https"
    };
    var $elm$url$Url$Url = F6(function(protocol, host, port_, path, query, fragment) {
        return {
            fragment: fragment,
            host: host,
            path: path,
            port_: port_,
            protocol: protocol,
            query: query
        };
    });
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
    });
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function(string) {
        return string === "";
    };
    var $elm$core$String$left = F2(function(n, string) {
        return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
    });
    var $elm$core$String$toInt = _String_toInt;
    var $elm$url$Url$chompBeforePath = F5(function(protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, "@", str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, ":", str);
            if (!_v0.b) return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt(A2($elm$core$String$dropLeft, i + 1, str));
                    if (_v1.$ === "Nothing") return $elm$core$Maybe$Nothing;
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, A2($elm$core$String$left, i, str), port_, path, params, frag));
                    }
                } else return $elm$core$Maybe$Nothing;
            }
        }
    });
    var $elm$url$Url$chompBeforeQuery = F4(function(protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, "/", str);
            if (!_v0.b) return A5($elm$url$Url$chompBeforePath, protocol, "/", params, frag, str);
            else {
                var i = _v0.a;
                return A5($elm$url$Url$chompBeforePath, protocol, A2($elm$core$String$dropLeft, i, str), params, frag, A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$url$Url$chompBeforeFragment = F3(function(protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, "?", str);
            if (!_v0.b) return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
            else {
                var i = _v0.a;
                return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), frag, A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$url$Url$chompAfterProtocol = F2(function(protocol, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, "#", str);
            if (!_v0.b) return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
            else {
                var i = _v0.a;
                return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = function(str) {
        return A2($elm$core$String$startsWith, "http://", str) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Http, A2($elm$core$String$dropLeft, 7, str)) : A2($elm$core$String$startsWith, "https://", str) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Https, A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing;
    };
    var $elm$core$Basics$never = function(_v0) {
        never: while(true){
            var nvr = _v0.a;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Task$Perform = function(a) {
        return {
            $: "Perform",
            a: a
        };
    };
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
    var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) return acc;
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) return A2(fn, a, acc);
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) return A2(fn, a, A2(fn, b, acc));
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    });
    var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
    });
    var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
            return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
    });
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map = F2(function(func, taskA) {
        return A2($elm$core$Task$andThen, function(a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    });
    var $elm$core$Task$map2 = F3(function(func, taskA, taskB) {
        return A2($elm$core$Task$andThen, function(a) {
            return A2($elm$core$Task$andThen, function(b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    });
    var $elm$core$Task$sequence = function(tasks) {
        return A3($elm$core$List$foldr, $elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd = F2(function(router, _v0) {
        var task = _v0.a;
        return _Scheduler_spawn(A2($elm$core$Task$andThen, $elm$core$Platform$sendToApp(router), task));
    });
    var $elm$core$Task$onEffects = F3(function(router, commands, state) {
        return A2($elm$core$Task$map, function(_v0) {
            return _Utils_Tuple0;
        }, $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Task$spawnCmd(router), commands)));
    });
    var $elm$core$Task$onSelfMsg = F3(function(_v0, _v1, _v2) {
        return $elm$core$Task$succeed(_Utils_Tuple0);
    });
    var $elm$core$Task$cmdMap = F2(function(tagger, _v0) {
        var task = _v0.a;
        return $elm$core$Task$Perform(A2($elm$core$Task$map, tagger, task));
    });
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform = F2(function(toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$Perform(A2($elm$core$Task$map, toMessage, task)));
    });
    var $elm$browser$Browser$element = _Browser_element;
    var $klazuka$elm_json_tree_view$JsonTree$State = function(a) {
        return {
            $: "State",
            a: a
        };
    };
    var $elm$core$Set$Set_elm_builtin = function(a) {
        return {
            $: "Set_elm_builtin",
            a: a
        };
    };
    var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: "RBEmpty_elm_builtin"
    };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
    var $elm$core$Dict$Black = {
        $: "Black"
    };
    var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
            $: "RBNode_elm_builtin",
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $elm$core$Dict$Red = {
        $: "Red"
    };
    var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
        } else {
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
        }
    });
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = A2($elm$core$Basics$compare, key, nKey);
            switch(_v1.$){
                case "LT":
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
                case "EQ":
                    return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
                default:
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
            }
        }
    });
    var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $elm$core$Set$insert = F2(function(key, _v0) {
        var dict = _v0.a;
        return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
    });
    var $elm$core$Set$fromList = function(list) {
        return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $klazuka$elm_json_tree_view$JsonTree$stateFullyExpanded = $klazuka$elm_json_tree_view$JsonTree$State($elm$core$Set$fromList(_List_Nil));
    var $klazuka$elm_json_tree_view$JsonTree$defaultState = $klazuka$elm_json_tree_view$JsonTree$stateFullyExpanded;
    var $elm_community$result_extra$Result$Extra$extract = F2(function(f, x) {
        if (x.$ === "Ok") {
            var a = x.a;
            return a;
        } else {
            var e = x.a;
            return f(e);
        }
    });
    var $elm$core$Debug$log = _Debug_log;
    var $elm$core$Result$map = F2(function(func, ra) {
        if (ra.$ === "Ok") {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        } else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    });
    var $elm$core$Result$mapError = F2(function(f, result) {
        if (result.$ === "Ok") {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        } else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    });
    var $stil4m$elm_syntax$Elm$Parser$State$State = function(a) {
        return {
            $: "State",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$State$emptyState = $stil4m$elm_syntax$Elm$Parser$State$State({
        comments: _List_Nil,
        indents: _List_Nil
    });
    var $stil4m$elm_syntax$Elm$Syntax$File$File = F4(function(moduleDefinition, imports, declarations, comments) {
        return {
            comments: comments,
            declarations: declarations,
            imports: imports,
            moduleDefinition: moduleDefinition
        };
    });
    var $stil4m$elm_syntax$Combine$Parser = function(a) {
        return {
            $: "Parser",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Bad = F2(function(a, b) {
        return {
            $: "Bad",
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$Good = F3(function(a, b, c) {
        return {
            $: "Good",
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$parser$Parser$Advanced$Parser = function(a) {
        return {
            $: "Parser",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$andThen = F2(function(callback, _v0) {
        var parseA = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parseA(s0);
            if (_v1.$ === "Bad") {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p1 = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                var _v2 = callback(a);
                var parseB = _v2.a;
                var _v3 = parseB(s1);
                if (_v3.$ === "Bad") {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
                } else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
                }
            }
        });
    });
    var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
    var $elm$parser$Parser$Advanced$map = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === "Good") {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, p, func(a), s1);
            } else {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            }
        });
    });
    var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
    var $elm$core$Tuple$mapSecond = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    });
    var $stil4m$elm_syntax$Combine$andMap = F2(function(_v0, _v1) {
        var rp = _v0.a;
        var lp = _v1.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$andThen, function(_v2) {
                var newState = _v2.a;
                var a = _v2.b;
                return A2($elm$parser$Parser$map, $elm$core$Tuple$mapSecond(a), rp(newState));
            }, lp(state));
        });
    });
    var $stil4m$elm_syntax$Elm$Parser$State$getComments = function(_v0) {
        var s = _v0.a;
        return $elm$core$List$reverse(s.comments);
    };
    var $elm$parser$Parser$Advanced$succeed = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A3($elm$parser$Parser$Advanced$Good, false, a, s);
        });
    };
    var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
    var $stil4m$elm_syntax$Combine$succeed = function(res) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$succeed(_Utils_Tuple2(state, res));
        });
    };
    var $stil4m$elm_syntax$Combine$withState = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return function(_v0) {
                var p = _v0.a;
                return p(state);
            }(f(state));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$File$collectComments = $stil4m$elm_syntax$Combine$withState(A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$getComments, $stil4m$elm_syntax$Combine$succeed));
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function(a) {
        return {
            $: "AliasDeclaration",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function(a) {
        return {
            $: "CustomTypeDeclaration",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(function(a, b) {
        return {
            $: "Node",
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$Empty = {
        $: "Empty"
    };
    var $elm$parser$Parser$Advanced$Append = F2(function(a, b) {
        return {
            $: "Append",
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$oneOfHelp = F3(function(s0, bag, parsers) {
        oneOfHelp: while(true){
            if (!parsers.b) return A2($elm$parser$Parser$Advanced$Bad, false, bag);
            else {
                var parse = parsers.a.a;
                var remainingParsers = parsers.b;
                var _v1 = parse(s0);
                if (_v1.$ === "Good") {
                    var step = _v1;
                    return step;
                } else {
                    var step = _v1;
                    var p = step.a;
                    var x = step.b;
                    if (p) return step;
                    else {
                        var $temp$s0 = s0, $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x), $temp$parsers = remainingParsers;
                        s0 = $temp$s0;
                        bag = $temp$bag;
                        parsers = $temp$parsers;
                        continue oneOfHelp;
                    }
                }
            }
        }
    });
    var $elm$parser$Parser$Advanced$oneOf = function(parsers) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
        });
    };
    var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
    var $stil4m$elm_syntax$Combine$choice = function(xs) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$oneOf(A2($elm$core$List$map, function(_v0) {
                var x = _v0.a;
                return x(state);
            }, xs));
        });
    };
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(function(a, b) {
        return {
            $: "Destructuring",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(function(start, end) {
        return {
            end: end,
            start: start
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
        end: {
            column: 0,
            row: 0
        },
        start: {
            column: 0,
            row: 0
        }
    };
    var $elm$core$List$head = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        } else return $elm$core$Maybe$Nothing;
    };
    var $elm$core$Maybe$map2 = F3(function(func, ma, mb) {
        if (ma.$ === "Nothing") return $elm$core$Maybe$Nothing;
        else {
            var a = ma.a;
            if (mb.$ === "Nothing") return $elm$core$Maybe$Nothing;
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(A2(func, a, b));
            }
        }
    });
    var $stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(function(left, right) {
        return _Utils_cmp(left.row, right.row) < 0 ? $elm$core$Basics$LT : _Utils_cmp(left.row, right.row) > 0 ? $elm$core$Basics$GT : A2($elm$core$Basics$compare, left.column, right.column);
    });
    var $elm$core$List$sortWith = _List_sortWith;
    var $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
    var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === "Just") {
            var value = maybe.a;
            return value;
        } else return _default;
    });
    var $stil4m$elm_syntax$Elm$Syntax$Range$combine = function(ranges) {
        var starts = $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
            return $.start;
        }, ranges));
        var ends = $elm$core$List$reverse($stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(A2($elm$core$List$map, function($) {
            return $.end;
        }, ranges)));
        return A2($elm$core$Maybe$withDefault, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, A3($elm$core$Maybe$map2, $stil4m$elm_syntax$Elm$Syntax$Range$Range, $elm$core$List$head(starts), $elm$core$List$head(ends)));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(function(f, a, b) {
        var r1 = a.a;
        var r2 = b.a;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
            r1,
            r2
        ])), A2(f, a, b));
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function(a) {
        return {
            $: "Application",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(function(expression, cases) {
        return {
            cases: cases,
            expression: expression
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function(a) {
        return {
            $: "CaseExpression",
            a: a
        };
    };
    var $stil4m$elm_syntax$Combine$Done = function(a) {
        return {
            $: "Done",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(function(documentation, signature, declaration) {
        return {
            declaration: declaration,
            documentation: documentation,
            signature: signature
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(function(name, _arguments, expression) {
        return {
            _arguments: _arguments,
            expression: expression,
            name: name
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(function(a, b, c) {
        return {
            $: "IfBlock",
            a: a,
            b: b,
            c: c
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(function(args, expression) {
        return {
            args: args,
            expression: expression
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function(a) {
        return {
            $: "LambdaExpression",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(function(declarations, expression) {
        return {
            declarations: declarations,
            expression: expression
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(function(a, b) {
        return {
            $: "LetDestructuring",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function(a) {
        return {
            $: "LetExpression",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function(a) {
        return {
            $: "LetFunction",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function(a) {
        return {
            $: "ListExpr",
            a: a
        };
    };
    var $stil4m$elm_syntax$Combine$Loop = function(a) {
        return {
            $: "Loop",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function(a) {
        return {
            $: "Negation",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function(a) {
        return {
            $: "Operator",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function(a) {
        return {
            $: "ParenthesizedExpression",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function(a) {
        return {
            $: "PrefixOperator",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function(a) {
        return {
            $: "RecordExpr",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(function(a, b) {
        return {
            $: "RecordUpdateExpression",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function(a) {
        return {
            $: "TupledExpression",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {
        $: "UnitExpr"
    };
    var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
    });
    var $stil4m$elm_syntax$Combine$andThen = F2(function(f, _v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$andThen, function(_v1) {
                var s = _v1.a;
                var a = _v1.b;
                return function(_v2) {
                    var x = _v2.a;
                    return x(s);
                }(f(a));
            }, p(state));
        });
    });
    var $elm$parser$Parser$Advanced$backtrackable = function(_v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === "Bad") {
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, false, x);
            } else {
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
            }
        });
    };
    var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
    var $stil4m$elm_syntax$Combine$backtrackable = function(_v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$backtrackable(p(state));
        });
    };
    var $elm$parser$Parser$Advanced$mapChompedString = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === "Bad") {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, p, A2(func, A3($elm$core$String$slice, s0.offset, s1.offset, s0.src), a), s1);
            }
        });
    });
    var $elm$parser$Parser$Advanced$getChompedString = function(parser) {
        return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
    };
    var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
    var $elm$parser$Parser$Expecting = function(a) {
        return {
            $: "Expecting",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Token = F2(function(a, b) {
        return {
            $: "Token",
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$toToken = function(str) {
        return A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$Expecting(str));
    };
    var $elm$parser$Parser$Advanced$AddRight = F2(function(a, b) {
        return {
            $: "AddRight",
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$DeadEnd = F4(function(row, col, problem, contextStack) {
        return {
            col: col,
            contextStack: contextStack,
            problem: problem,
            row: row
        };
    });
    var $elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
    });
    var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
    var $elm$core$Basics$negate = function(n) {
        return -n;
    };
    var $elm$core$Basics$not = _Basics_not;
    var $elm$parser$Parser$Advanced$token = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$parser$Parser$token = function(str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$toToken(str));
    };
    var $stil4m$elm_syntax$Combine$string = function(s) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$map, function(x) {
                return _Utils_Tuple2(state, x);
            }, $elm$parser$Parser$getChompedString($elm$parser$Parser$token(s)));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = $stil4m$elm_syntax$Combine$string("case");
    var $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function(a) {
        return {
            $: "CharLiteral",
            a: a
        };
    };
    var $elm$parser$Parser$Problem = function(a) {
        return {
            $: "Problem",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$problem = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
    };
    var $elm$parser$Parser$problem = function(msg) {
        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(msg));
    };
    var $stil4m$elm_syntax$Combine$fail = function(m) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$map, function(x) {
                return _Utils_Tuple2(state, x);
            }, $elm$parser$Parser$problem(m));
        });
    };
    var $elm$core$Maybe$map = F2(function(f, maybe) {
        if (maybe.$ === "Just") {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$parser$Parser$UnexpectedChar = {
        $: "UnexpectedChar"
    };
    var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
    var $elm$parser$Parser$Advanced$chompIf = F2(function(isGood, expecting) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
            return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : _Utils_eq(newOffset, -2) ? A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
                col: 1,
                context: s.context,
                indent: s.indent,
                offset: s.offset + 1,
                row: s.row + 1,
                src: s.src
            }) : A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
                col: s.col + 1,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: s.row,
                src: s.src
            });
        });
    });
    var $elm$parser$Parser$chompIf = function(isGood) {
        return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
    };
    var $elm$parser$Parser$Advanced$map2 = F3(function(func, _v0, _v1) {
        var parseA = _v0.a;
        var parseB = _v1.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === "Bad") {
                var p = _v2.a;
                var x = _v2.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === "Bad") {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
                } else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return A3($elm$parser$Parser$Advanced$Good, p1 || p2, A2(func, a, b), s2);
                }
            }
        });
    });
    var $elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
    });
    var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
    var $stil4m$elm_syntax$Combine$fromCore = function(p) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(v) {
                return _Utils_Tuple2(state, v);
            }), p);
        });
    };
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function(string) {
        return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
    };
    var $stil4m$elm_syntax$Combine$Char$satisfy = function(pred) {
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$andThen, function(s) {
            var _v0 = $elm$core$String$toList(s);
            if (!_v0.b) return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
            else {
                var c = _v0.a;
                return $elm$parser$Parser$succeed($elm$core$Maybe$Just(c));
            }
        }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf(pred))));
    };
    var $stil4m$elm_syntax$Combine$Char$anyChar = A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected any character"))), $stil4m$elm_syntax$Combine$Char$satisfy($elm$core$Basics$always(true)));
    var $elm$core$String$fromList = _String_fromList;
    var $stil4m$elm_syntax$Combine$Char$char = function(c) {
        return A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected '" + ($elm$core$String$fromList(_List_fromArray([
            c
        ])) + "'")))), $stil4m$elm_syntax$Combine$Char$satisfy($elm$core$Basics$eq(c)));
    };
    var $stil4m$elm_syntax$Combine$map = F2(function(f, _v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$map, function(_v1) {
                var s = _v1.a;
                var a = _v1.b;
                return _Utils_Tuple2(s, f(a));
            }, p(state));
        });
    });
    var $stil4m$elm_syntax$Combine$continueWith = F2(function(target, dropped) {
        return A2($stil4m$elm_syntax$Combine$andMap, target, A2($stil4m$elm_syntax$Combine$map, F2(function(_v0, a) {
            return a;
        }), dropped));
    });
    var $stil4m$elm_syntax$Combine$ignore = F2(function(dropped, target) {
        return A2($stil4m$elm_syntax$Combine$andMap, dropped, A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always, target));
    });
    var $stil4m$elm_syntax$Combine$or = F2(function(_v0, _v1) {
        var lp = _v0.a;
        var rp = _v1.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                lp(state),
                rp(state)
            ]));
        });
    });
    var $elm$core$String$any = _String_any;
    var $elm$parser$Parser$Advanced$chompWhileHelp = F5(function(isGood, offset, row, col, s0) {
        chompWhileHelp: while(true){
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
            if (_Utils_eq(newOffset, -1)) return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s0.offset, offset) < 0, _Utils_Tuple0, {
                col: col,
                context: s0.context,
                indent: s0.indent,
                offset: offset,
                row: row,
                src: s0.src
            });
            else if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
            } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
            }
        }
    });
    var $elm$parser$Parser$Advanced$chompWhile = function(isGood) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
        });
    };
    var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, "");
    };
    var $elm$core$Basics$pow = _Basics_pow;
    var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(function(position, chars, accumulated) {
        fromStringHelp: while(true){
            if (!chars.b) return $elm$core$Result$Ok(accumulated);
            else {
                var _char = chars.a;
                var rest = chars.b;
                switch(_char.valueOf()){
                    case "0":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated;
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "1":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "2":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 2 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "3":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 3 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "4":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 4 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "5":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 5 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "6":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 6 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "7":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 7 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "8":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 8 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "9":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 9 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "a":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 10 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "b":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 11 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "c":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 12 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "d":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 13 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "e":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 14 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    case "f":
                        var $temp$position = position - 1, $temp$chars = rest, $temp$accumulated = accumulated + 15 * A2($elm$core$Basics$pow, 16, position);
                        position = $temp$position;
                        chars = $temp$chars;
                        accumulated = $temp$accumulated;
                        continue fromStringHelp;
                    default:
                        var nonHex = _char;
                        return $elm$core$Result$Err($elm$core$String$fromChar(nonHex) + " is not a valid hexadecimal character.");
                }
            }
        }
    });
    var $elm$core$List$tail = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(xs);
        } else return $elm$core$Maybe$Nothing;
    };
    var $rtfeldman$elm_hex$Hex$fromString = function(str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Result$Err("Empty strings are not valid hexadecimal strings.");
        else {
            var result = function() {
                if (A2($elm$core$String$startsWith, "-", str)) {
                    var list = A2($elm$core$Maybe$withDefault, _List_Nil, $elm$core$List$tail($elm$core$String$toList(str)));
                    return A2($elm$core$Result$map, $elm$core$Basics$negate, A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$List$length(list) - 1, list, 0));
                } else return A3($rtfeldman$elm_hex$Hex$fromStringHelp, $elm$core$String$length(str) - 1, $elm$core$String$toList(str), 0);
            }();
            var formatError = function(err) {
                return A2($elm$core$String$join, " ", _List_fromArray([
                    '"' + (str + '"'),
                    "is not a valid hexadecimal string because",
                    err
                ]));
            };
            return A2($elm$core$Result$mapError, formatError, result);
        }
    };
    var $elm$parser$Parser$Advanced$ignorer = F2(function(keepParser, ignoreParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
    });
    var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
    var $elm$parser$Parser$ExpectingSymbol = function(a) {
        return {
            $: "ExpectingSymbol",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
    var $elm$parser$Parser$symbol = function(str) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$ExpectingSymbol(str)));
    };
    var $elm$core$String$toLower = _String_toLower;
    var $elm$core$Result$withDefault = F2(function(def, result) {
        if (result.$ === "Ok") {
            var a = result.a;
            return a;
        } else return def;
    });
    var $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("'")), $elm$parser$Parser$symbol("'")),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr('"')), $elm$parser$Parser$symbol('"')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\n")), $elm$parser$Parser$symbol("n")),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("	")), $elm$parser$Parser$symbol("t")),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\r")), $elm$parser$Parser$symbol("r")),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_chr("\\")), $elm$parser$Parser$symbol("\\")),
        A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toLower, A2($elm$core$Basics$composeR, $rtfeldman$elm_hex$Hex$fromString, A2($elm$core$Basics$composeR, $elm$core$Result$withDefault(0), $elm$core$Char$fromCode)))), $elm$parser$Parser$symbol("u")), $elm$parser$Parser$symbol("{")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
            return A2($elm$core$String$any, $elm$core$Basics$eq(c), "0123456789ABCDEFabcdef");
        })), $elm$parser$Parser$symbol("}")))
    ]));
    var $elm$core$List$singleton = function(value) {
        return _List_fromArray([
            value
        ]);
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$String$toList, A2($elm$core$Basics$composeR, $elm$core$List$head, $elm$core$Maybe$withDefault(_Utils_chr(" "))))), $elm$parser$Parser$symbol("'")), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)), $elm$parser$Parser$symbol("\\")), $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue),
        $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf($elm$core$Basics$always(true)))
    ])), $elm$parser$Parser$symbol("'"))));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr("'")), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$Char$anyChar, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr("'")))));
    var $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
            column: column,
            row: line
        };
    };
    var $stil4m$elm_syntax$Combine$app = function(_v0) {
        var inner = _v0.a;
        return inner;
    };
    var $elm$parser$Parser$Advanced$getPosition = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple2(s.row, s.col), s);
    });
    var $elm$parser$Parser$getPosition = $elm$parser$Parser$Advanced$getPosition;
    var $stil4m$elm_syntax$Combine$withLocation = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$andThen, function(loc) {
                return A2($stil4m$elm_syntax$Combine$app, f(loc), state);
            }, A2($elm$parser$Parser$map, function(_v0) {
                var row = _v0.a;
                var col = _v0.b;
                return {
                    column: col,
                    line: row
                };
            }, $elm$parser$Parser$getPosition));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Node$parser = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
            return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$withLocation(function(end) {
                return $stil4m$elm_syntax$Combine$succeed({
                    end: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
                    start: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
                });
            }), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed(F2(function(v, r) {
                return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
            }))));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = $stil4m$elm_syntax$Combine$string("else");
    var $stil4m$elm_syntax$Elm$Parser$State$currentIndent = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$Maybe$withDefault, 0, $elm$core$List$head(indents));
    };
    var $stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$currentIndent, $elm$core$Basics$add(1));
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {
        $: "AllPattern"
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(function(a, b) {
        return {
            $: "AsPattern",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function(a) {
        return {
            $: "CharPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function(a) {
        return {
            $: "ListPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(function(a, b) {
        return {
            $: "NamedPattern",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function(a) {
        return {
            $: "ParenthesizedPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(function(moduleName, name) {
        return {
            moduleName: moduleName,
            name: name
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function(a) {
        return {
            $: "StringPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function(a) {
        return {
            $: "TuplePattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(function(a, b) {
        return {
            $: "UnConsPattern",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {
        $: "UnitPattern"
    };
    var $stil4m$elm_syntax$Combine$between = F3(function(lp, rp, p) {
        return A2($stil4m$elm_syntax$Combine$ignore, rp, A2($stil4m$elm_syntax$Combine$continueWith, p, lp));
    });
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $miniBill$elm_unicode$Unicode$isAlphaNum = function(c) {
        var code = $elm$core$Char$toCode(c);
        return code < 256 ? code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 170 || code >= 178 && code <= 179 || code === 181 || code >= 185 && code <= 186 || code >= 188 && code <= 190 || code >= 192 && code <= 214 || code >= 216 && code <= 246 || code >= 248 && code <= 255 : code < 42785 ? code < 4303 ? code < 2748 ? code < 1983 ? code < 1375 ? code < 894 ? code >= 256 && code <= 705 || code >= 710 && code <= 721 || code >= 736 && code <= 740 || code >= 880 && code <= 884 || code >= 886 && code <= 887 || code >= 890 && code <= 893 || !A2($elm$core$Basics$modBy, 2, code) && code >= 748 && code <= 750 : code === 895 || code === 902 || code >= 904 && code <= 1013 || code >= 1015 && code <= 1153 || code >= 1162 && code <= 1327 || code >= 1329 && code <= 1366 || code === 1369 : code < 1764 ? code >= 1376 && code <= 1416 || code >= 1488 && code <= 1522 || code >= 1568 && code <= 1610 || code >= 1632 && code <= 1641 || code >= 1646 && code <= 1647 || code >= 1649 && code <= 1747 || code === 1749 : code >= 1765 && code <= 1766 || code >= 1774 && code <= 1788 || code === 1791 || code === 1808 || code >= 1810 && code <= 1839 || code >= 1869 && code <= 1957 || code === 1969 : code < 2405 ? code < 2087 ? code >= 1984 && code <= 2026 || code >= 2036 && code <= 2037 || code === 2042 || code >= 2048 && code <= 2069 || code === 2074 || code === 2084 : code === 2088 || code >= 2112 && code <= 2136 || code >= 2144 && code <= 2247 || code >= 2308 && code <= 2361 || code === 2365 || code === 2384 || code >= 2392 && code <= 2401 : code < 2547 ? code >= 2406 && code <= 2415 || code >= 2417 && code <= 2432 || code >= 2437 && code <= 2489 || code === 2493 || code === 2510 || code >= 2524 && code <= 2529 || code >= 2534 && code <= 2545 : code >= 2548 && code <= 2553 || code === 2556 || code >= 2565 && code <= 2617 || code >= 2649 && code <= 2654 || code >= 2662 && code <= 2671 || code >= 2674 && code <= 2676 || code >= 2693 && code <= 2745 : code < 3429 ? code < 3159 ? code < 2907 ? code === 2749 || code >= 2768 && code <= 2785 || code >= 2790 && code <= 2799 || code === 2809 || code >= 2821 && code <= 2873 || code === 2877 : code >= 2908 && code <= 2913 || code >= 2918 && code <= 2927 || code >= 2929 && code <= 2935 || code >= 2947 && code <= 3001 || code === 3024 || code >= 3046 && code <= 3058 || code >= 3077 && code <= 3133 : code < 3301 ? code >= 3160 && code <= 3169 || code >= 3174 && code <= 3183 || code >= 3192 && code <= 3198 || code === 3200 || code >= 3205 && code <= 3257 || code === 3261 || code >= 3294 && code <= 3297 : code >= 3302 && code <= 3311 || code >= 3313 && code <= 3314 || code >= 3332 && code <= 3386 || code === 3389 || code === 3406 || code >= 3412 && code <= 3414 || code >= 3416 && code <= 3425 : code < 3871 ? code < 3663 ? code >= 3430 && code <= 3448 || code >= 3450 && code <= 3455 || code >= 3461 && code <= 3526 || code >= 3558 && code <= 3567 || code >= 3585 && code <= 3632 || code >= 3634 && code <= 3635 || code >= 3648 && code <= 3654 : code >= 3664 && code <= 3673 || code >= 3713 && code <= 3760 || code >= 3762 && code <= 3763 || code >= 3773 && code <= 3780 || code === 3782 || code >= 3792 && code <= 3801 || code >= 3804 && code <= 3840 : code < 4192 ? code >= 3872 && code <= 3891 || code >= 3904 && code <= 3948 || code >= 3976 && code <= 3980 || code >= 4096 && code <= 4138 || code >= 4159 && code <= 4169 || code >= 4176 && code <= 4181 || code >= 4186 && code <= 4189 : code === 4193 || code >= 4197 && code <= 4198 || code >= 4206 && code <= 4208 || code >= 4213 && code <= 4225 || code === 4238 || code >= 4240 && code <= 4249 || code >= 4256 && code <= 4301 : code < 8177 ? code < 6783 ? code < 5983 ? code < 5120 ? code >= 4304 && code <= 4346 || code >= 4348 && code <= 4954 || code >= 4969 && code <= 4988 || code >= 4992 && code <= 5007 || code >= 5024 && code <= 5109 || code >= 5112 && code <= 5117 : code >= 5121 && code <= 5740 || code >= 5743 && code <= 5759 || code >= 5761 && code <= 5786 || code >= 5792 && code <= 5866 || code >= 5870 && code <= 5905 || code >= 5920 && code <= 5937 || code >= 5952 && code <= 5969 : code < 6175 ? code >= 5984 && code <= 6000 || code >= 6016 && code <= 6067 || code === 6103 || code === 6108 || code >= 6112 && code <= 6121 || code >= 6128 && code <= 6137 || code >= 6160 && code <= 6169 : code >= 6176 && code <= 6276 || code >= 6279 && code <= 6312 || code >= 6314 && code <= 6430 || code >= 6470 && code <= 6601 || code >= 6608 && code <= 6618 || code >= 6656 && code <= 6678 || code >= 6688 && code <= 6740 : code < 7405 ? code < 7085 ? code >= 6784 && code <= 6809 || code === 6823 || code >= 6917 && code <= 6963 || code >= 6981 && code <= 6987 || code >= 6992 && code <= 7001 || code >= 7043 && code <= 7072 : code >= 7086 && code <= 7141 || code >= 7168 && code <= 7203 || code >= 7232 && code <= 7241 || code >= 7245 && code <= 7293 || code >= 7296 && code <= 7304 || code >= 7312 && code <= 7359 || code >= 7401 && code <= 7404 : code < 8007 ? code >= 7406 && code <= 7411 || code >= 7413 && code <= 7414 || code === 7418 || code >= 7424 && code <= 7615 || code >= 7680 && code <= 7957 || code >= 7960 && code <= 7965 || code >= 7968 && code <= 8005 : code >= 8008 && code <= 8013 || code >= 8016 && code <= 8023 || code >= 8025 && code <= 8124 || code === 8126 || code >= 8130 && code <= 8140 || code >= 8144 && code <= 8155 || code >= 8160 && code <= 8172 : code < 11630 ? code < 8516 ? code < 8454 ? code >= 8178 && code <= 8188 || code >= 8304 && code <= 8305 || code >= 8308 && code <= 8313 || code >= 8319 && code <= 8329 || code >= 8336 && code <= 8348 || code === 8450 : code === 8455 || code >= 8458 && code <= 8467 || code === 8469 || code >= 8473 && code <= 8477 || code >= 8490 && code <= 8493 || code >= 8495 && code <= 8505 || code >= 8508 && code <= 8511 || !A2($elm$core$Basics$modBy, 2, code) && code >= 8484 && code <= 8488 : code < 11311 ? code >= 8517 && code <= 8521 || code === 8526 || code >= 8528 && code <= 8585 || code >= 9312 && code <= 9371 || code >= 9450 && code <= 9471 || code >= 10102 && code <= 10131 || code >= 11264 && code <= 11310 : code >= 11312 && code <= 11358 || code >= 11360 && code <= 11492 || code >= 11499 && code <= 11502 || code >= 11506 && code <= 11507 || code === 11517 || code >= 11520 && code <= 11565 || code >= 11568 && code <= 11623 : code < 12831 ? code < 12352 ? code === 11631 || code >= 11648 && code <= 11742 || code === 11823 || code >= 12293 && code <= 12295 || code >= 12321 && code <= 12329 || code >= 12337 && code <= 12341 || code >= 12344 && code <= 12348 : code >= 12353 && code <= 12438 || code >= 12445 && code <= 12447 || code >= 12449 && code <= 12538 || code >= 12540 && code <= 12686 || code >= 12690 && code <= 12693 || code >= 12704 && code <= 12735 || code >= 12784 && code <= 12799 : code < 42191 ? code >= 12832 && code <= 12841 || code >= 12872 && code <= 12879 || code >= 12881 && code <= 12895 || code >= 12928 && code <= 12937 || code >= 12977 && code <= 12991 || code >= 13312 && code <= 19903 || code >= 19968 && code <= 42124 : code >= 42192 && code <= 42237 || code >= 42240 && code <= 42508 || code >= 42512 && code <= 42539 || code >= 42560 && code <= 42606 || code >= 42623 && code <= 42653 || code >= 42656 && code <= 42735 || code >= 42775 && code <= 42783 : code < 69958 ? code < 65855 ? code < 43696 ? code < 43260 ? code < 43019 ? code >= 42786 && code <= 42888 || code >= 42891 && code <= 42943 || code >= 42946 && code <= 42954 || code >= 42997 && code <= 43009 || code >= 43011 && code <= 43013 || code >= 43015 && code <= 43018 : code >= 43020 && code <= 43042 || code >= 43056 && code <= 43061 || code >= 43072 && code <= 43123 || code >= 43138 && code <= 43187 || code >= 43216 && code <= 43225 || code >= 43250 && code <= 43255 || code === 43259 : code < 43493 ? code >= 43261 && code <= 43262 || code >= 43264 && code <= 43301 || code >= 43312 && code <= 43334 || code >= 43360 && code <= 43388 || code >= 43396 && code <= 43442 || code >= 43471 && code <= 43481 || code >= 43488 && code <= 43492 : code >= 43494 && code <= 43560 || code >= 43584 && code <= 43586 || code >= 43588 && code <= 43595 || code >= 43600 && code <= 43609 || code >= 43616 && code <= 43638 || code === 43642 || code >= 43646 && code <= 43695 : code < 63743 ? code < 43761 ? code === 43697 || code >= 43701 && code <= 43702 || code >= 43705 && code <= 43709 || code === 43712 || code >= 43714 && code <= 43741 || code >= 43744 && code <= 43754 : code >= 43762 && code <= 43764 || code >= 43777 && code <= 43822 || code >= 43824 && code <= 43866 || code >= 43868 && code <= 43881 || code >= 43888 && code <= 44002 || code >= 44016 && code <= 44025 || code >= 44032 && code <= 55291 : code < 65135 ? code >= 63744 && code <= 64217 || code >= 64256 && code <= 64279 || code === 64285 || code >= 64287 && code <= 64296 || code >= 64298 && code <= 64433 || code >= 64467 && code <= 64829 || code >= 64848 && code <= 65019 : code >= 65136 && code <= 65276 || code >= 65296 && code <= 65305 || code >= 65313 && code <= 65338 || code >= 65345 && code <= 65370 || code >= 65382 && code <= 65500 || code >= 65536 && code <= 65786 || code >= 65799 && code <= 65843 : code < 68223 ? code < 66775 ? code < 66383 ? code >= 65856 && code <= 65912 || code >= 65930 && code <= 65931 || code >= 66176 && code <= 66256 || code >= 66273 && code <= 66299 || code >= 66304 && code <= 66339 || code >= 66349 && code <= 66378 : code >= 66384 && code <= 66421 || code >= 66432 && code <= 66461 || code >= 66464 && code <= 66511 || code >= 66513 && code <= 66517 || code >= 66560 && code <= 66717 || code >= 66720 && code <= 66729 || code >= 66736 && code <= 66771 : code < 67834 ? code >= 66776 && code <= 66811 || code >= 66816 && code <= 66915 || code >= 67072 && code <= 67669 || code >= 67672 && code <= 67702 || code >= 67705 && code <= 67742 || code >= 67751 && code <= 67759 || code >= 67808 && code <= 67829 : code >= 67835 && code <= 67867 || code >= 67872 && code <= 67897 || code >= 67968 && code <= 68023 || code >= 68028 && code <= 68096 || code >= 68112 && code <= 68149 || code >= 68160 && code <= 68168 || code >= 68192 && code <= 68222 : code < 69215 ? code < 68471 ? code >= 68224 && code <= 68255 || code >= 68288 && code <= 68295 || code >= 68297 && code <= 68324 || code >= 68331 && code <= 68335 || code >= 68352 && code <= 68405 || code >= 68416 && code <= 68437 || code >= 68440 && code <= 68466 : code >= 68472 && code <= 68497 || code >= 68521 && code <= 68527 || code >= 68608 && code <= 68680 || code >= 68736 && code <= 68786 || code >= 68800 && code <= 68850 || code >= 68858 && code <= 68899 || code >= 68912 && code <= 68921 : code < 69713 ? code >= 69216 && code <= 69246 || code >= 69248 && code <= 69289 || code >= 69296 && code <= 69445 || code >= 69457 && code <= 69460 || code >= 69552 && code <= 69579 || code >= 69600 && code <= 69622 || code >= 69635 && code <= 69687 : code >= 69714 && code <= 69743 || code >= 69763 && code <= 69807 || code >= 69840 && code <= 69864 || code >= 69872 && code <= 69881 || code >= 69891 && code <= 69926 || code >= 69942 && code <= 69951 || code === 69956 : code < 73647 ? code < 71295 ? code < 70479 ? code < 70112 ? code >= 69959 && code <= 70002 || code === 70006 || code >= 70019 && code <= 70066 || code >= 70081 && code <= 70084 || code >= 70096 && code <= 70106 || code === 70108 : code >= 70113 && code <= 70132 || code >= 70144 && code <= 70187 || code >= 70272 && code <= 70312 || code >= 70320 && code <= 70366 || code >= 70384 && code <= 70393 || code >= 70405 && code <= 70457 || code === 70461 : code < 70854 ? code === 70480 || code >= 70493 && code <= 70497 || code >= 70656 && code <= 70708 || code >= 70727 && code <= 70730 || code >= 70736 && code <= 70745 || code >= 70751 && code <= 70831 || code >= 70852 && code <= 70853 : code === 70855 || code >= 70864 && code <= 70873 || code >= 71040 && code <= 71086 || code >= 71128 && code <= 71131 || code >= 71168 && code <= 71215 || code === 71236 || code >= 71248 && code <= 71257 : code < 72271 ? code < 71839 ? code >= 71296 && code <= 71338 || code === 71352 || code >= 71360 && code <= 71369 || code >= 71424 && code <= 71450 || code >= 71472 && code <= 71483 || code >= 71680 && code <= 71723 : code >= 71840 && code <= 71922 || code >= 71935 && code <= 71983 || code >= 72016 && code <= 72025 || code >= 72096 && code <= 72144 || code === 72192 || code >= 72203 && code <= 72242 || code === 72250 || A2($elm$core$Basics$modBy, 2, code) === 1 && (code >= 71999 && code <= 72001 || code >= 72161 && code <= 72163) : code < 72959 ? code === 72272 || code >= 72284 && code <= 72329 || code === 72349 || code >= 72384 && code <= 72750 || code === 72768 || code >= 72784 && code <= 72812 || code >= 72818 && code <= 72847 : code >= 72960 && code <= 73008 || code === 73030 || code >= 73040 && code <= 73049 || code >= 73056 && code <= 73097 || code === 73112 || code >= 73120 && code <= 73129 || code >= 73440 && code <= 73458 : code < 120571 ? code < 93759 ? code < 92767 ? code === 73648 || code >= 73664 && code <= 73684 || code >= 73728 && code <= 74649 || code >= 74752 && code <= 74862 || code >= 74880 && code <= 78894 || code >= 82944 && code <= 92766 : code >= 92768 && code <= 92777 || code >= 92880 && code <= 92909 || code >= 92928 && code <= 92975 || code >= 92992 && code <= 92995 || code >= 93008 && code <= 93017 || code >= 93019 && code <= 93025 || code >= 93027 && code <= 93071 : code < 119647 ? code >= 93760 && code <= 93846 || code >= 93952 && code <= 94026 || code === 94032 || code >= 94099 && code <= 94177 || code === 94179 || code >= 94208 && code <= 113817 || code >= 119520 && code <= 119539 : code >= 119648 && code <= 119672 || code >= 119808 && code <= 120092 || code >= 120094 && code <= 120144 || code >= 120146 && code <= 120485 || code >= 120488 && code <= 120512 || code >= 120514 && code <= 120538 || code >= 120540 && code <= 120570 : code < 123631 ? code < 120771 ? code >= 120572 && code <= 120596 || code >= 120598 && code <= 120628 || code >= 120630 && code <= 120654 || code >= 120656 && code <= 120686 || code >= 120688 && code <= 120712 || code >= 120714 && code <= 120744 || code >= 120746 && code <= 120770 : code >= 120772 && code <= 120779 || code >= 120782 && code <= 120831 || code >= 123136 && code <= 123180 || code >= 123191 && code <= 123197 || code >= 123200 && code <= 123209 || code === 123214 || code >= 123584 && code <= 123627 : code < 126124 ? code >= 123632 && code <= 123641 || code >= 124928 && code <= 125124 || code >= 125127 && code <= 125135 || code >= 125184 && code <= 125251 || code === 125259 || code >= 125264 && code <= 125273 || code >= 126065 && code <= 126123 : code >= 126125 && code <= 126127 || code >= 126129 && code <= 126253 || code >= 126255 && code <= 126269 || code >= 126464 && code <= 126651 || code >= 127232 && code <= 127244 || code >= 130032 && code <= 130041 || code >= 131072 && code <= 201546;
    };
    var $miniBill$elm_unicode$Unicode$isLower = function(c) {
        var code = $elm$core$Char$toCode(c);
        return code < 256 ? code >= 97 && code <= 122 || code === 181 || code >= 223 && code <= 246 || code >= 248 && code <= 255 : code < 8457 ? code < 1006 ? code < 453 ? code < 408 ? code >= 311 && code <= 312 || code >= 328 && code <= 329 || code >= 382 && code <= 384 || code === 392 || code >= 396 && code <= 397 || code === 402 || code === 405 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 314 && code <= 326 || code >= 378 && code <= 380 : code >= 257 && code <= 309 || code >= 331 && code <= 375 || code >= 387 && code <= 389) : code >= 409 && code <= 411 || code === 414 || code === 424 || code >= 426 && code <= 427 || code === 429 || code === 432 || code >= 441 && code <= 442 || code >= 445 && code <= 447 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 436 && code <= 438 : code >= 417 && code <= 421) : code < 590 ? code === 454 || code === 457 || code >= 476 && code <= 477 || code >= 495 && code <= 496 || code >= 563 && code <= 569 || code === 572 || code >= 575 && code <= 576 || code === 578 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 460 && code <= 474 : code >= 479 && code <= 493 || code >= 499 && code <= 501 || code >= 505 && code <= 561 || code >= 583 && code <= 589) : code >= 591 && code <= 659 || code >= 661 && code <= 687 || code === 887 || code >= 891 && code <= 893 || code === 912 || code >= 940 && code <= 974 || code >= 976 && code <= 977 || code >= 981 && code <= 983 || A2($elm$core$Basics$modBy, 2, code) === 1 && (code >= 881 && code <= 883 || code >= 985 && code <= 1005) : code < 7934 ? code < 4303 ? code >= 1007 && code <= 1011 || code === 1013 || code === 1016 || code >= 1019 && code <= 1020 || code >= 1072 && code <= 1119 || code >= 1230 && code <= 1231 || code >= 1376 && code <= 1416 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 1218 && code <= 1228 : code >= 1121 && code <= 1153 || code >= 1163 && code <= 1215 || code >= 1233 && code <= 1327) : code >= 4304 && code <= 4346 || code >= 4349 && code <= 4351 || code >= 5112 && code <= 5117 || code >= 7296 && code <= 7304 || code >= 7424 && code <= 7467 || code >= 7531 && code <= 7543 || code >= 7545 && code <= 7578 || code >= 7829 && code <= 7837 || A2($elm$core$Basics$modBy, 2, code) === 1 && (code >= 7681 && code <= 7827 || code >= 7839 && code <= 7933) : code < 8079 ? code >= 7935 && code <= 7943 || code >= 7952 && code <= 7957 || code >= 7968 && code <= 7975 || code >= 7984 && code <= 7991 || code >= 8000 && code <= 8005 || code >= 8016 && code <= 8023 || code >= 8032 && code <= 8039 || code >= 8048 && code <= 8071 : code >= 8080 && code <= 8087 || code >= 8096 && code <= 8103 || code >= 8112 && code <= 8119 || code === 8126 || code >= 8130 && code <= 8135 || code >= 8144 && code <= 8151 || code >= 8160 && code <= 8167 || code >= 8178 && code <= 8183 : code < 65344 ? code < 11381 ? code < 8517 ? code === 8458 || code >= 8462 && code <= 8463 || code === 8467 || code === 8495 || code === 8500 || code === 8505 || code >= 8508 && code <= 8509 : code >= 8518 && code <= 8521 || code === 8526 || code === 8580 || code >= 11312 && code <= 11358 || code === 11361 || code >= 11365 && code <= 11366 || code === 11377 || code >= 11379 && code <= 11380 || !A2($elm$core$Basics$modBy, 2, code) && code >= 11368 && code <= 11372 : code < 42926 ? code >= 11382 && code <= 11387 || code >= 11491 && code <= 11492 || code === 11507 || code >= 11520 && code <= 11565 || code >= 42799 && code <= 42801 || code >= 42865 && code <= 42872 || code === 42897 || code >= 42899 && code <= 42901 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 11500 && code <= 11502 || code >= 42874 && code <= 42876 || code >= 42892 && code <= 42894 : code >= 11393 && code <= 11489 || code >= 42561 && code <= 42605 || code >= 42625 && code <= 42651 || code >= 42787 && code <= 42797 || code >= 42803 && code <= 42863 || code >= 42879 && code <= 42887 || code >= 42903 && code <= 42921) : code === 42927 || code === 42947 || code === 42998 || code === 43002 || code >= 43824 && code <= 43866 || code >= 43872 && code <= 43880 || code >= 43888 && code <= 43967 || code >= 64256 && code <= 64279 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 42952 && code <= 42954 : code >= 42933 && code <= 42943) : code < 120301 ? code < 119885 ? code >= 65345 && code <= 65370 || code >= 66600 && code <= 66639 || code >= 66776 && code <= 66811 || code >= 68800 && code <= 68850 || code >= 71872 && code <= 71903 || code >= 93792 && code <= 93823 || code >= 119834 && code <= 119859 : code >= 119886 && code <= 119911 || code >= 119938 && code <= 119963 || code >= 119990 && code <= 120015 || code >= 120042 && code <= 120067 || code >= 120094 && code <= 120119 || code >= 120146 && code <= 120171 || code >= 120198 && code <= 120223 || code >= 120250 && code <= 120275 : code < 120629 ? code >= 120302 && code <= 120327 || code >= 120354 && code <= 120379 || code >= 120406 && code <= 120431 || code >= 120458 && code <= 120485 || code >= 120514 && code <= 120538 || code >= 120540 && code <= 120545 || code >= 120572 && code <= 120596 || code >= 120598 && code <= 120603 : code >= 120630 && code <= 120654 || code >= 120656 && code <= 120661 || code >= 120688 && code <= 120712 || code >= 120714 && code <= 120719 || code >= 120746 && code <= 120770 || code >= 120772 && code <= 120777 || code === 120779 || code >= 125218 && code <= 125251;
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray([
        "module",
        "exposing",
        "import",
        "as",
        "if",
        "then",
        "else",
        "let",
        "in",
        "case",
        "of",
        "port",
        "type",
        "where"
    ]);
    var $elm$parser$Parser$ExpectingVariable = {
        $: "ExpectingVariable"
    };
    var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get: while(true){
            if (dict.$ === "RBEmpty_elm_builtin") return $elm$core$Maybe$Nothing;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                switch(_v1.$){
                    case "LT":
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case "EQ":
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    });
    var $elm$core$Dict$member = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$get, key, dict);
        if (_v0.$ === "Just") return true;
        else return false;
    });
    var $elm$core$Set$member = F2(function(key, _v0) {
        var dict = _v0.a;
        return A2($elm$core$Dict$member, key, dict);
    });
    var $elm$parser$Parser$Advanced$varHelp = F7(function(isGood, offset, row, col, src, indent, context) {
        varHelp: while(true){
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
            if (_Utils_eq(newOffset, -1)) return {
                col: col,
                context: context,
                indent: indent,
                offset: offset,
                row: row,
                src: src
            };
            else if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
            } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
            }
        }
    });
    var $elm$parser$Parser$Advanced$variable = function(i) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
            if (_Utils_eq(firstOffset, -1)) return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
            else {
                var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
                var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
                return A2($elm$core$Set$member, name, i.reserved) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
            }
        });
    };
    var $elm$parser$Parser$variable = function(i) {
        return $elm$parser$Parser$Advanced$variable({
            expecting: $elm$parser$Parser$ExpectingVariable,
            inner: i.inner,
            reserved: i.reserved,
            start: i.start
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$functionName = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
            return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
        start: $miniBill$elm_unicode$Unicode$isLower
    }));
    var $elm$parser$Parser$ExpectingKeyword = function(a) {
        return {
            $: "ExpectingKeyword",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$keyword = function(_v0) {
        var kwd = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(kwd);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) || 0 <= A3($elm$parser$Parser$Advanced$isSubChar, function(c) {
                return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
            }, newOffset, s.src) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$parser$Parser$keyword = function(kwd) {
        return $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, kwd, $elm$parser$Parser$ExpectingKeyword(kwd)));
    };
    var $elm$parser$Parser$Advanced$lazy = function(thunk) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v0 = thunk(_Utils_Tuple0);
            var parse = _v0.a;
            return parse(s);
        });
    };
    var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
    var $stil4m$elm_syntax$Combine$lazy = function(t) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$lazy(function(_v0) {
                return function(_v1) {
                    var t_ = _v1.a;
                    return t_(state);
                }(t(_Utils_Tuple0));
            });
        });
    };
    var $elm$parser$Parser$Nestable = {
        $: "Nestable"
    };
    var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
    var $elm$parser$Parser$Advanced$fromInfo = F4(function(row, col, x, context) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
    });
    var $elm$parser$Parser$Advanced$chompUntil = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s.offset, newOffset) < 0, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$parser$Parser$Advanced$isChar = function(_char) {
        return true;
    };
    var $elm$parser$Parser$Advanced$revAlways = F2(function(_v0, b) {
        return b;
    });
    var $elm$parser$Parser$Advanced$skip = F2(function(iParser, kParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
    });
    var $elm$parser$Parser$Advanced$nestableHelp = F5(function(isNotRelevant, open, close, expectingClose, nestLevel) {
        return A2($elm$parser$Parser$Advanced$skip, $elm$parser$Parser$Advanced$chompWhile(isNotRelevant), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            nestLevel === 1 ? close : A2($elm$parser$Parser$Advanced$andThen, function(_v0) {
                return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
            }, close),
            A2($elm$parser$Parser$Advanced$andThen, function(_v1) {
                return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
            }, open),
            A2($elm$parser$Parser$Advanced$andThen, function(_v2) {
                return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
            }, A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
        ])));
    });
    var $elm$parser$Parser$Advanced$nestableComment = F2(function(open, close) {
        var oStr = open.a;
        var oX = open.b;
        var cStr = close.a;
        var cX = close.b;
        var _v0 = $elm$core$String$uncons(oStr);
        if (_v0.$ === "Nothing") return $elm$parser$Parser$Advanced$problem(oX);
        else {
            var _v1 = _v0.a;
            var openChar = _v1.a;
            var _v2 = $elm$core$String$uncons(cStr);
            if (_v2.$ === "Nothing") return $elm$parser$Parser$Advanced$problem(cX);
            else {
                var _v3 = _v2.a;
                var closeChar = _v3.a;
                var isNotRelevant = function(_char) {
                    return !_Utils_eq(_char, openChar) && !_Utils_eq(_char, closeChar);
                };
                var chompOpen = $elm$parser$Parser$Advanced$token(open);
                return A2($elm$parser$Parser$Advanced$ignorer, chompOpen, A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, chompOpen, $elm$parser$Parser$Advanced$token(close), cX, 1));
            }
        }
    });
    var $elm$parser$Parser$Advanced$multiComment = F3(function(open, close, nestable) {
        if (nestable.$ === "NotNestable") return A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$token(open), $elm$parser$Parser$Advanced$chompUntil(close));
        else return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
    });
    var $elm$parser$Parser$Advanced$Nestable = {
        $: "Nestable"
    };
    var $elm$parser$Parser$Advanced$NotNestable = {
        $: "NotNestable"
    };
    var $elm$parser$Parser$toAdvancedNestable = function(nestable) {
        if (nestable.$ === "NotNestable") return $elm$parser$Parser$Advanced$NotNestable;
        else return $elm$parser$Parser$Advanced$Nestable;
    };
    var $elm$parser$Parser$multiComment = F3(function(open, close, nestable) {
        return A3($elm$parser$Parser$Advanced$multiComment, $elm$parser$Parser$toToken(open), $elm$parser$Parser$toToken(close), $elm$parser$Parser$toAdvancedNestable(nestable));
    });
    var $stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, "{-", "-}", $elm$parser$Parser$Nestable)));
    var $stil4m$elm_syntax$Elm$Parser$State$addComment = F2(function(pair, _v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
            comments: A2($elm$core$List$cons, pair, s.comments)
        }));
    });
    var $stil4m$elm_syntax$Combine$modifyState = function(f) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$succeed(_Utils_Tuple2(f(state), _Utils_Tuple0));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function(p) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(pair) {
            return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0), $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
        }, p);
    };
    var $stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function(commentParser) {
        return $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState($stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
    };
    var $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Comments$parseComment($stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
    });
    var $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
        return !_Utils_eq(c, _Utils_chr("\r")) && !_Utils_eq(c, _Utils_chr("\n"));
    })));
    var $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = $stil4m$elm_syntax$Elm$Parser$Comments$parseComment(A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$string("--"), $stil4m$elm_syntax$Combine$succeed($elm$core$Basics$append))));
    var $stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
    var $elm$parser$Parser$Done = function(a) {
        return {
            $: "Done",
            a: a
        };
    };
    var $elm$parser$Parser$Loop = function(a) {
        return {
            $: "Loop",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$loopHelp = F4(function(p, state, callback, s0) {
        loopHelp: while(true){
            var _v0 = callback(state);
            var parse = _v0.a;
            var _v1 = parse(s0);
            if (_v1.$ === "Good") {
                var p1 = _v1.a;
                var step = _v1.b;
                var s1 = _v1.c;
                if (step.$ === "Loop") {
                    var newState = step.a;
                    var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                    p = $temp$p;
                    state = $temp$state;
                    callback = $temp$callback;
                    s0 = $temp$s0;
                    continue loopHelp;
                } else {
                    var result = step.a;
                    return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
                }
            } else {
                var p1 = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
            }
        }
    });
    var $elm$parser$Parser$Advanced$loop = F2(function(state, callback) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
        });
    });
    var $elm$parser$Parser$Advanced$Done = function(a) {
        return {
            $: "Done",
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Loop = function(a) {
        return {
            $: "Loop",
            a: a
        };
    };
    var $elm$parser$Parser$toAdvancedStep = function(step) {
        if (step.$ === "Loop") {
            var s = step.a;
            return $elm$parser$Parser$Advanced$Loop(s);
        } else {
            var a = step.a;
            return $elm$parser$Parser$Advanced$Done(a);
        }
    };
    var $elm$parser$Parser$loop = F2(function(state, callback) {
        return A2($elm$parser$Parser$Advanced$loop, state, function(s) {
            return A2($elm$parser$Parser$map, $elm$parser$Parser$toAdvancedStep, callback(s));
        });
    });
    var $stil4m$elm_syntax$Combine$many = function(p) {
        var helper = function(_v2) {
            var oldState = _v2.a;
            var items = _v2.b;
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(_v0) {
                    var newState = _v0.a;
                    var item = _v0.b;
                    return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, A2($elm$core$List$cons, item, items)));
                }), A2($stil4m$elm_syntax$Combine$app, p, oldState)),
                A2($elm$parser$Parser$map, function(_v1) {
                    return $elm$parser$Parser$Done(_Utils_Tuple2(oldState, $elm$core$List$reverse(items)));
                }, $elm$parser$Parser$succeed(_Utils_Tuple0))
            ]));
        };
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, _List_Nil), helper);
        });
    };
    var $stil4m$elm_syntax$Combine$many1 = function(p) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(p), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
    };
    var $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$ignorer, $elm$parser$Parser$token(" "), $elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
    })));
    var $stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(_Utils_Tuple0), $elm$parser$Parser$oneOf(_List_fromArray([
        $elm$parser$Parser$chompIf($elm$core$Basics$eq(_Utils_chr("\r"))),
        $elm$parser$Parser$succeed(_Utils_Tuple0)
    ]))), $elm$parser$Parser$symbol("\n"))));
    var $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function(f) {
        return $stil4m$elm_syntax$Combine$withState(function(s) {
            return $stil4m$elm_syntax$Combine$withLocation(function(l) {
                return A2(f, $stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s), l.column) ? $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0) : $stil4m$elm_syntax$Combine$fail("Expected higher indent than " + $elm$core$String$fromInt(l.column));
            });
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Layout$layout = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_cmp(stateIndent, current) < 0;
    })), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$choice(_List_fromArray([
        $stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
        A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
            $stil4m$elm_syntax$Elm$Parser$Layout$anyComment
        ])), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
        $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
    ]))));
    var $stil4m$elm_syntax$Combine$maybe = function(_v0) {
        var p = _v0.a;
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, function(_v1) {
                    var c = _v1.a;
                    var v = _v1.b;
                    return _Utils_Tuple2(c, $elm$core$Maybe$Just(v));
                }, p(state)),
                $elm$parser$Parser$succeed(_Utils_Tuple2(state, $elm$core$Maybe$Nothing))
            ]));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function(x) {
        return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, x, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function(a) {
        return {
            $: "FloatPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function(a) {
        return {
            $: "HexPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function(a) {
        return {
            $: "IntPattern",
            a: a
        };
    };
    var $elm$parser$Parser$ExpectingBinary = {
        $: "ExpectingBinary"
    };
    var $elm$parser$Parser$ExpectingFloat = {
        $: "ExpectingFloat"
    };
    var $elm$parser$Parser$ExpectingHex = {
        $: "ExpectingHex"
    };
    var $elm$parser$Parser$ExpectingInt = {
        $: "ExpectingInt"
    };
    var $elm$parser$Parser$ExpectingNumber = {
        $: "ExpectingNumber"
    };
    var $elm$parser$Parser$ExpectingOctal = {
        $: "ExpectingOctal"
    };
    var $elm$core$Result$fromMaybe = F2(function(err, maybe) {
        if (maybe.$ === "Just") {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        } else return $elm$core$Result$Err(err);
    });
    var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
    var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
    var $elm$parser$Parser$Advanced$bumpOffset = F2(function(newOffset, s) {
        return {
            col: s.col + (newOffset - s.offset),
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: s.row,
            src: s.src
        };
    });
    var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
    var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
    var $elm$parser$Parser$Advanced$consumeExp = F2(function(offset, src) {
        if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
            var eOffset = offset + 1;
            var expOffset = A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src) ? eOffset + 1 : eOffset;
            var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
            return _Utils_eq(expOffset, newOffset) ? -newOffset : newOffset;
        } else return offset;
    });
    var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(function(offset, src) {
        return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2($elm$parser$Parser$Advanced$consumeExp, A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src), src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
    });
    var $elm$parser$Parser$Advanced$finalizeInt = F5(function(invalid, handler, startOffset, _v0, s) {
        var endOffset = _v0.a;
        var n = _v0.b;
        if (handler.$ === "Err") {
            var x = handler.a;
            return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, x));
        } else {
            var toValue = handler.a;
            return _Utils_eq(startOffset, endOffset) ? A2($elm$parser$Parser$Advanced$Bad, _Utils_cmp(s.offset, startOffset) < 0, A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
        }
    });
    var $elm$core$String$toFloat = _String_toFloat;
    var $elm$parser$Parser$Advanced$finalizeFloat = F6(function(invalid, expecting, intSettings, floatSettings, intPair, s) {
        var intOffset = intPair.a;
        var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
        if (floatOffset < 0) return A2($elm$parser$Parser$Advanced$Bad, true, A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
        else {
            if (_Utils_eq(s.offset, floatOffset)) return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting));
            else {
                if (_Utils_eq(intOffset, floatOffset)) return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
                else if (floatSettings.$ === "Err") {
                    var x = floatSettings.a;
                    return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                } else {
                    var toValue = floatSettings.a;
                    var _v1 = $elm$core$String$toFloat(A3($elm$core$String$slice, s.offset, floatOffset, s.src));
                    if (_v1.$ === "Nothing") return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                    else {
                        var n = _v1.a;
                        return A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
                    }
                }
            }
        }
    });
    var $elm$parser$Parser$Advanced$number = function(c) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
                var zeroOffset = s.offset + 1;
                var baseOffset = zeroOffset + 1;
                return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.hex, baseOffset, A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.octal, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.binary, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src), s) : A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, _Utils_Tuple2(zeroOffset, 0), s);
            } else return A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src), s);
        });
    };
    var $elm$parser$Parser$number = function(i) {
        return $elm$parser$Parser$Advanced$number({
            binary: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.binary),
            expecting: $elm$parser$Parser$ExpectingNumber,
            _float: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i._float),
            hex: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.hex),
            _int: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i._int),
            invalid: $elm$parser$Parser$ExpectingNumber,
            octal: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.octal)
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(function(floatf, intf, hexf) {
        return $elm$parser$Parser$number({
            binary: $elm$core$Maybe$Nothing,
            _float: $elm$core$Maybe$Just(floatf),
            hex: $elm$core$Maybe$Just(hexf),
            _int: $elm$core$Maybe$Just(intf),
            octal: $elm$core$Maybe$Nothing
        });
    });
    var $stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(function(floatf, intf, hexf) {
        return $stil4m$elm_syntax$Combine$fromCore(A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
    });
    var $stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3($stil4m$elm_syntax$Elm$Parser$Numbers$number, $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
    var $stil4m$elm_syntax$Combine$parens = A2($stil4m$elm_syntax$Combine$between, $stil4m$elm_syntax$Combine$string("("), $stil4m$elm_syntax$Combine$string(")"));
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function(a) {
        return {
            $: "RecordPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Combine$sepBy1 = F2(function(sep, p) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$continueWith, p, sep)), A2($stil4m$elm_syntax$Combine$andMap, p, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
    });
    var $stil4m$elm_syntax$Combine$sepBy = F2(function(sep, p) {
        return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$sepBy1, sep, p), $stil4m$elm_syntax$Combine$succeed(_List_Nil));
    });
    var $stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern, A3($stil4m$elm_syntax$Combine$between, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{")), $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
    });
    var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, "", strings);
    };
    var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
    });
    var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
    var $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function() {
        var helper = function(s) {
            return s.escaped ? A2($elm$parser$Parser$map, function(v) {
                return $elm$parser$Parser$Loop({
                    escaped: false,
                    parts: A2($elm$core$List$cons, $elm$core$String$fromList(_List_fromArray([
                        v
                    ])), s.parts)
                });
            }, $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, function(_v0) {
                    return $elm$parser$Parser$Done($elm$core$String$concat($elm$core$List$reverse(s.parts)));
                }, $elm$parser$Parser$symbol('"')),
                A2($elm$parser$Parser$map, function(_v1) {
                    return $elm$parser$Parser$Loop({
                        escaped: true,
                        parts: s.parts
                    });
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))),
                A2($elm$parser$Parser$andThen, function(_v2) {
                    var start = _v2.a;
                    var value = _v2.b;
                    var end = _v2.c;
                    return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop({
                        escaped: s.escaped,
                        parts: A2($elm$core$List$cons, value, s.parts)
                    }));
                }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
                    return _Utils_Tuple3(start, value, end);
                })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
                    return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
                }))), $elm$parser$Parser$getOffset))
            ]));
        };
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"')), A2($elm$parser$Parser$loop, {
            escaped: false,
            parts: _List_Nil
        }, helper)));
    }();
    var $miniBill$elm_unicode$Unicode$isUpper = function(c) {
        var code = $elm$core$Char$toCode(c);
        return code < 256 ? code >= 65 && code <= 90 || code >= 192 && code <= 214 || code >= 216 && code <= 222 : code < 8167 ? code < 578 ? code < 429 ? code < 402 ? code >= 376 && code <= 377 || code >= 385 && code <= 386 || code === 388 || code >= 390 && code <= 391 || code >= 393 && code <= 395 || code >= 398 && code <= 401 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 256 && code <= 310 || code >= 330 && code <= 374 : code >= 313 && code <= 327 || code >= 379 && code <= 381) : code >= 403 && code <= 404 || code >= 406 && code <= 408 || code >= 412 && code <= 413 || code >= 415 && code <= 416 || code >= 422 && code <= 423 || code === 425 || code === 428 || !A2($elm$core$Basics$modBy, 2, code) && code >= 418 && code <= 420 : code < 457 ? code >= 430 && code <= 431 || code >= 433 && code <= 435 || code === 437 || code >= 439 && code <= 440 || code === 444 || code === 452 || code === 455 : code === 458 || code === 497 || code === 500 || code >= 502 && code <= 504 || code >= 570 && code <= 571 || code >= 573 && code <= 574 || code === 577 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 478 && code <= 494 || code >= 506 && code <= 562 : code >= 461 && code <= 475) : code < 1328 ? code < 974 ? code >= 579 && code <= 582 || code === 886 || code === 895 || code === 902 || code >= 904 && code <= 911 || code >= 913 && code <= 939 || !A2($elm$core$Basics$modBy, 2, code) && (code >= 584 && code <= 590 || code >= 880 && code <= 882) : code === 975 || code >= 978 && code <= 980 || code === 1012 || code === 1015 || code >= 1017 && code <= 1018 || code >= 1021 && code <= 1071 || code >= 1216 && code <= 1217 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 984 && code <= 1006 || code >= 1120 && code <= 1152 || code >= 1162 && code <= 1214 || code >= 1232 && code <= 1326 : code >= 1219 && code <= 1229) : code < 7991 ? code >= 1329 && code <= 1366 || code >= 4256 && code <= 4301 || code >= 5024 && code <= 5109 || code >= 7312 && code <= 7359 || code >= 7944 && code <= 7951 || code >= 7960 && code <= 7965 || code >= 7976 && code <= 7983 || !A2($elm$core$Basics$modBy, 2, code) && (code >= 7680 && code <= 7828 || code >= 7838 && code <= 7934) : code >= 7992 && code <= 7999 || code >= 8008 && code <= 8013 || code >= 8025 && code <= 8031 || code >= 8040 && code <= 8047 || code >= 8120 && code <= 8123 || code >= 8136 && code <= 8139 || code >= 8152 && code <= 8155 : code < 42996 ? code < 11263 ? code < 8468 ? code >= 8168 && code <= 8172 || code >= 8184 && code <= 8187 || code === 8450 || code === 8455 || code >= 8459 && code <= 8461 || code >= 8464 && code <= 8466 : code === 8469 || code >= 8473 && code <= 8477 || code >= 8490 && code <= 8493 || code >= 8496 && code <= 8499 || code >= 8510 && code <= 8511 || code === 8517 || code === 8579 || !A2($elm$core$Basics$modBy, 2, code) && code >= 8484 && code <= 8488 : code < 11505 ? code >= 11264 && code <= 11310 || code === 11360 || code >= 11362 && code <= 11364 || code >= 11373 && code <= 11376 || code === 11378 || code === 11381 || code >= 11390 && code <= 11392 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 11394 && code <= 11490 : code >= 11367 && code <= 11371 || code >= 11499 && code <= 11501) : code === 11506 || code >= 42877 && code <= 42878 || code >= 42922 && code <= 42926 || code >= 42928 && code <= 42932 || code === 42946 || code >= 42948 && code <= 42951 || code === 42953 || (!A2($elm$core$Basics$modBy, 2, code) ? code >= 42560 && code <= 42604 || code >= 42624 && code <= 42650 || code >= 42786 && code <= 42798 || code >= 42802 && code <= 42862 || code >= 42880 && code <= 42886 || code >= 42896 && code <= 42898 || code >= 42902 && code <= 42920 || code >= 42934 && code <= 42942 : code >= 42873 && code <= 42875 || code >= 42891 && code <= 42893) : code < 120119 ? code < 93759 ? code === 42997 || code >= 65313 && code <= 65338 || code >= 66560 && code <= 66599 || code >= 66736 && code <= 66771 || code >= 68736 && code <= 68786 || code >= 71840 && code <= 71871 : code >= 93760 && code <= 93791 || code >= 119808 && code <= 119833 || code >= 119860 && code <= 119885 || code >= 119912 && code <= 119937 || code >= 119964 && code <= 119989 || code >= 120016 && code <= 120041 || code >= 120068 && code <= 120092 : code < 120487 ? code >= 120120 && code <= 120144 || code >= 120172 && code <= 120197 || code >= 120224 && code <= 120249 || code >= 120276 && code <= 120301 || code >= 120328 && code <= 120353 || code >= 120380 && code <= 120405 || code >= 120432 && code <= 120457 : code >= 120488 && code <= 120512 || code >= 120546 && code <= 120570 || code >= 120604 && code <= 120628 || code >= 120662 && code <= 120686 || code >= 120720 && code <= 120744 || code === 120778 || code >= 125184 && code <= 125217;
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$typeName = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$variable({
        inner: function(c) {
            return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
        },
        reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
        start: $miniBill$elm_unicode$Unicode$isUpper
    }));
    var $stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function() {
        var helper = function(_v0) {
            var n = _v0.a;
            var xs = _v0.b;
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$andThen, function(t) {
                    return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
                }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName, $stil4m$elm_syntax$Combine$string("."))),
                $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple2(n, xs))
            ]));
        };
        return A2($stil4m$elm_syntax$Combine$map, function(_v1) {
            var t = _v1.a;
            var xs = _v1.b;
            return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($stil4m$elm_syntax$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, _List_Nil));
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
    }();
    var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function(a) {
        return {
            $: "VarPattern",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
    var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function(consumeArgs) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(_v0) {
            var range = _v0.a;
            var _v1 = _v0.b;
            var mod = _v1.a;
            var name = _v1.b;
            return A2($stil4m$elm_syntax$Combine$map, function(args) {
                return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, function(_v2) {
                    var r = _v2.a;
                    return r;
                }, args))), A2($stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern, A2($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name), args));
            }, consumeArgs ? $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $stil4m$elm_syntax$Combine$succeed(_List_Nil));
        }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
    };
    var $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function(x) {
        return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            A2($stil4m$elm_syntax$Combine$map, function(y) {
                return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
            }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("as"))))),
            A2($stil4m$elm_syntax$Combine$map, function(y) {
                return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
            }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("::"))))),
            $stil4m$elm_syntax$Combine$succeed(x)
        ])), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout));
    };
    function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
        return A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose, $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
    }
    function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
            $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
            $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("()")))),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("_")))),
            $stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
            $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
            $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
        ]));
    }
    function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
            $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
            $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("()")))),
            $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("_")))),
            $stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
            $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
            $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
        ]));
    }
    function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v5) {
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A3($stil4m$elm_syntax$Combine$between, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("[")), $stil4m$elm_syntax$Combine$string("]"), A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern, A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v3) {
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, function(c) {
                if (c.b && !c.b.b) {
                    var x = c.a;
                    return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
                } else return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
            }, $stil4m$elm_syntax$Combine$parens(A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
        });
    }
    try {
        var $stil4m$elm_syntax$Elm$Parser$Patterns$pattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function() {
            return $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function() {
            return $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function() {
            return $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function() {
            return $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
        };
        var $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
        $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function() {
            return $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
        };
    } catch ($) {
        throw "Some top-level definitions from `Elm.Parser.Patterns` are causing infinite recursion:\n\n  ┌─────┐\n  │    pattern\n  │     ↓\n  │    composablePattern\n  │     ↓\n  │    qualifiedPatternArg\n  │     ↓\n  │    listPattern\n  │     ↓\n  │    parensPattern\n  │     ↓\n  │    qualifiedPattern\n  │     ↓\n  │    tryToCompose\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
    var $stil4m$elm_syntax$Elm$Syntax$Node$range = function(_v0) {
        var r = _v0.a;
        return r;
    };
    var $stil4m$elm_syntax$Elm$Syntax$Node$value = function(_v0) {
        var v = _v0.b;
        return v;
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function(_function) {
        return $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
            function() {
                var _v0 = _function.documentation;
                if (_v0.$ === "Just") {
                    var documentation = _v0.a;
                    return $stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
                } else return A2($elm$core$Maybe$withDefault, function(_v3) {
                    var r = _v3.a;
                    return r;
                }($stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).name), A2($elm$core$Maybe$map, function(_v1) {
                    var value = _v1.b;
                    var _v2 = value.name;
                    var r = _v2.a;
                    return r;
                }, _function.signature));
            }(),
            function(_v4) {
                var r = _v4.a;
                return r;
            }($stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression)
        ]));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(function(name, typeAnnotation) {
        return {
            name: name,
            typeAnnotation: typeAnnotation
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = {
        $: "Eager"
    };
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(function(a, b) {
        return {
            $: "FunctionTypeAnnotation",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(function(a, b) {
        return {
            $: "GenericRecord",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = {
        $: "Lazy"
    };
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function(a) {
        return {
            $: "Record",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(function(a, b) {
        return {
            $: "Typed",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {
        $: "Unit"
    };
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function(a) {
        return {
            $: "Tupled",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(function(x, xs) {
        var value = x.b;
        if (!xs.b) return value;
        else return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(A2($elm$core$List$cons, x, xs));
    });
    var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function(a) {
        return {
            $: "GenericType",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
    });
    var $stil4m$elm_syntax$Elm$Parser$Layout$Indented = {
        $: "Indented"
    };
    var $stil4m$elm_syntax$Elm$Parser$Layout$Strict = {
        $: "Strict"
    };
    var $elm$core$List$any = F2(function(isOkay, list) {
        any: while(true){
            if (!list.b) return false;
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) return true;
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    });
    var $elm$core$List$member = F2(function(x, xs) {
        return A2($elm$core$List$any, function(a) {
            return _Utils_eq(a, x);
        }, xs);
    });
    var $stil4m$elm_syntax$Elm$Parser$State$storedColumns = function(_v0) {
        var indents = _v0.a.indents;
        return A2($elm$core$List$map, $elm$core$Basics$add(1), indents);
    };
    var $stil4m$elm_syntax$Elm$Parser$Layout$compute = $stil4m$elm_syntax$Combine$withState(function(s) {
        return $stil4m$elm_syntax$Combine$withLocation(function(l) {
            var known = A2($elm$core$List$cons, 1, $stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
            return A2($elm$core$List$member, l.column, known) ? $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Strict) : $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Indented);
        });
    });
    var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$compute, $stil4m$elm_syntax$Combine$many($stil4m$elm_syntax$Combine$choice(_List_fromArray([
        $stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
        A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
            $stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
            $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)
        ])), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
        $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
    ]))));
    var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(function(onStrict, onIndented) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(ind) {
            if (ind.$ === "Strict") return onStrict(_Utils_Tuple0);
            else return onIndented(_Utils_Tuple0);
        }, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
    });
    var $elm$core$Tuple$pair = F2(function(a, b) {
        return _Utils_Tuple2(a, b);
    });
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function(mode) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v7) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(),
                $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode),
                $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
                $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()
            ]));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function(mode) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
            var nodeRanges = $elm$core$List$map(function(_v6) {
                var r = _v6.a;
                return r;
            });
            var genericHelper = function(items) {
                return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, function(next) {
                    return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v1) {
                        return $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, next, items)));
                    }, function(_v2) {
                        return genericHelper(A2($elm$core$List$cons, next, items));
                    }));
                }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy)), $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(items)));
            };
            return A2($stil4m$elm_syntax$Combine$andThen, function(original) {
                var tir = original.a;
                return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v3) {
                    return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, tir, A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
                }, function(_v4) {
                    if (mode.$ === "Eager") return A2($stil4m$elm_syntax$Combine$map, function(args) {
                        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, tir, nodeRanges(args))), A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
                    }, genericHelper(_List_Nil));
                    else return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, tir, A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
                });
            }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
        });
    };
    function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v14) {
            var commaSep = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))));
            var nested = A2($stil4m$elm_syntax$Combine$andMap, commaSep, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit), $stil4m$elm_syntax$Combine$string(")")),
                A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(")"), nested)
            ])), $stil4m$elm_syntax$Combine$string("(")));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v13) {
            return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string(":"), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)))), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)), $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v12) {
            return A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v11) {
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)), $stil4m$elm_syntax$Combine$string("}")),
                A2($stil4m$elm_syntax$Combine$andThen, function(fname) {
                    return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                        A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("|"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))),
                        A2($stil4m$elm_syntax$Combine$andThen, function(ta) {
                            return A2($stil4m$elm_syntax$Combine$map, function(rest) {
                                return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(A2($elm$core$List$cons, A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta), rest));
                            }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                                A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation(), $stil4m$elm_syntax$Combine$string(",")),
                                $stil4m$elm_syntax$Combine$succeed(_List_Nil)
                            ]))));
                        }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(":")))))
                    ]));
                }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))
            ])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{"))));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v8) {
            return A2($stil4m$elm_syntax$Combine$andThen, function(typeRef) {
                return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v9) {
                    return $stil4m$elm_syntax$Combine$succeed(typeRef);
                }, function(_v10) {
                    return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$map, function(ta) {
                        return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
                    }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("->")))), $stil4m$elm_syntax$Combine$succeed(typeRef));
                });
            }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager));
        });
    }
    try {
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function() {
            return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function() {
            return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function() {
            return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function() {
            return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
        };
        var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function() {
            return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
        };
    } catch ($1) {
        throw "Some top-level definitions from `Elm.Parser.TypeAnnotation` are causing infinite recursion:\n\n  ┌─────┐\n  │    parensTypeAnnotation\n  │     ↓\n  │    recordFieldDefinition\n  │     ↓\n  │    recordFieldsTypeAnnotation\n  │     ↓\n  │    recordTypeAnnotation\n  │     ↓\n  │    typeAnnotation\n  │     ↓\n  │    typeAnnotationNoFn\n  │     ↓\n  │    typedTypeAnnotation\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function(varPointer) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(":"), $stil4m$elm_syntax$Combine$succeed(function(ta) {
            return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
        }))));
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function(a) {
        return {
            $: "GLSLExpression",
            a: a
        };
    };
    var $elm$parser$Parser$NotNestable = {
        $: "NotNestable"
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function() {
        var start = "[glsl|";
        var end = "|]";
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string(end), A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$String$dropLeft($elm$core$String$length(start)), $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$getChompedString(A3($elm$parser$Parser$multiComment, start, end, $elm$parser$Parser$NotNestable))))));
    }();
    var $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = $stil4m$elm_syntax$Combine$string("if");
    var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray([
        _Utils_chr("+"),
        _Utils_chr("-"),
        _Utils_chr(":"),
        _Utils_chr("/"),
        _Utils_chr("*"),
        _Utils_chr(">"),
        _Utils_chr("<"),
        _Utils_chr("="),
        _Utils_chr("/"),
        _Utils_chr("&"),
        _Utils_chr("^"),
        _Utils_chr("%"),
        _Utils_chr("|"),
        _Utils_chr("!"),
        _Utils_chr("."),
        _Utils_chr("#"),
        _Utils_chr("$"),
        _Utils_chr("≡"),
        _Utils_chr("~"),
        _Utils_chr("?"),
        _Utils_chr("@")
    ]);
    var $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray([
        ":",
        "->",
        "--",
        "="
    ]);
    var $stil4m$elm_syntax$Combine$Char$oneOf = function(cs) {
        return A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed), $elm$core$Maybe$withDefault($stil4m$elm_syntax$Combine$fail("expected one of '" + ($elm$core$String$fromList(cs) + "'")))), $stil4m$elm_syntax$Combine$Char$satisfy(function(a) {
            return A2($elm$core$List$member, a, cs);
        }));
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function(allowedChars) {
        return A2($stil4m$elm_syntax$Combine$andThen, function(m) {
            return A2($elm$core$List$member, m, $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? $stil4m$elm_syntax$Combine$fail("operator is not allowed") : $stil4m$elm_syntax$Combine$succeed(m);
        }, A2($stil4m$elm_syntax$Combine$map, $elm$core$String$fromList, $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
    var $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(F2(function(stateIndent, current) {
        return _Utils_eq(stateIndent, current);
    })), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Combine$choice(_List_fromArray([
        $stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
        A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0), $stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
        $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
    ]))));
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(function(a, b) {
        return {
            $: "RecordAccess",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function(e) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
            return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, A2($stil4m$elm_syntax$Combine$map, function(f) {
                return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess, e, f);
            }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$string(".")))), $stil4m$elm_syntax$Combine$succeed(e));
        });
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function(a) {
        return {
            $: "Literal",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function() {
        var helper = function(s) {
            return s.escaped ? A2($elm$parser$Parser$map, function(v) {
                return $elm$parser$Parser$Loop({
                    counter: s.counter,
                    escaped: false,
                    parts: A2($elm$core$List$cons, $elm$core$String$fromChar(v), s.parts)
                });
            }, $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, function(_v0) {
                    return $elm$parser$Parser$Done($elm$core$String$concat($elm$core$List$reverse(s.parts)));
                }, $elm$parser$Parser$symbol('"""')),
                A2($elm$parser$Parser$map, function(v) {
                    return $elm$parser$Parser$Loop({
                        counter: s.counter + 1,
                        escaped: s.escaped,
                        parts: A2($elm$core$List$cons, v, s.parts)
                    });
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol('"'))),
                A2($elm$parser$Parser$map, function(_v1) {
                    return $elm$parser$Parser$Loop({
                        counter: s.counter + 1,
                        escaped: true,
                        parts: s.parts
                    });
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$symbol("\\"))),
                A2($elm$parser$Parser$andThen, function(_v2) {
                    var start = _v2.a;
                    var value = _v2.b;
                    var end = _v2.c;
                    return _Utils_eq(start, end) ? $elm$parser$Parser$problem("Expected a string character or a triple double quote") : $elm$parser$Parser$succeed($elm$parser$Parser$Loop({
                        counter: s.counter + 1,
                        escaped: s.escaped,
                        parts: A2($elm$core$List$cons, value, s.parts)
                    }));
                }, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(start, value, end) {
                    return _Utils_Tuple3(start, value, end);
                })), $elm$parser$Parser$getOffset), $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function(c) {
                    return !_Utils_eq(c, _Utils_chr('"')) && !_Utils_eq(c, _Utils_chr("\\"));
                }))), $elm$parser$Parser$getOffset))
            ]));
        };
        return $stil4m$elm_syntax$Combine$fromCore(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('"""')), A2($elm$parser$Parser$loop, {
            counter: 0,
            escaped: false,
            parts: _List_Nil
        }, helper)));
    }();
    var $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Literal, A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
    });
    var $stil4m$elm_syntax$Combine$loop = F2(function(init, stepper) {
        var wrapper = function(_v3) {
            var oldState = _v3.a;
            var v = _v3.b;
            var _v0 = stepper(v);
            var p = _v0.a;
            return A2($elm$parser$Parser$map, function(_v1) {
                var newState = _v1.a;
                var r = _v1.b;
                if (r.$ === "Loop") {
                    var l = r.a;
                    return $elm$parser$Parser$Loop(_Utils_Tuple2(newState, l));
                } else {
                    var d = r.a;
                    return $elm$parser$Parser$Done(_Utils_Tuple2(newState, d));
                }
            }, p(oldState));
        };
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$loop, _Utils_Tuple2(state, init), wrapper);
        });
    });
    var $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" "));
    }));
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function(a) {
        return {
            $: "Floatable",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function(a) {
        return {
            $: "Hex",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function(a) {
        return {
            $: "Integer",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(function(floatf, intf, hexf) {
        return $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$backtrackable(A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
    });
    var $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A3($stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, $stil4m$elm_syntax$Elm$Syntax$Expression$Integer, $stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = $stil4m$elm_syntax$Combine$string("of");
    var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2($elm$core$List$cons, _Utils_chr(","), $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
    var $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
    var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function(a) {
        return {
            $: "RecordAccessFunction",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Basics$append("."), $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName, $stil4m$elm_syntax$Combine$string("."))));
    var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(function(a, b) {
        return {
            $: "FunctionOrValue",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$Declarations$reference = function() {
        var justFunction = A2($stil4m$elm_syntax$Combine$map, function(v) {
            return _Utils_Tuple2(_List_Nil, v);
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
        var helper = function(_v0) {
            var n = _v0.a;
            var xs = _v0.b;
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                    A2($stil4m$elm_syntax$Combine$andThen, function(t) {
                        return helper(_Utils_Tuple2(t, A2($elm$core$List$cons, n, xs)));
                    }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
                    A2($stil4m$elm_syntax$Combine$map, function(t) {
                        return _Utils_Tuple2(t, A2($elm$core$List$cons, n, xs));
                    }, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName)
                ])), $stil4m$elm_syntax$Combine$string(".")),
                $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple2(n, xs))
            ]));
        };
        var recurring = A2($stil4m$elm_syntax$Combine$map, function(_v1) {
            var t = _v1.a;
            var xs = _v1.b;
            return _Utils_Tuple2($elm$core$List$reverse(xs), t);
        }, A2($stil4m$elm_syntax$Combine$andThen, function(t) {
            return helper(_Utils_Tuple2(t, _List_Nil));
        }, $stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            recurring,
            justFunction
        ]));
    }();
    var $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, function(_v0) {
        var xs = _v0.a;
        var x = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
    }, $stil4m$elm_syntax$Elm$Parser$Declarations$reference));
    var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = $stil4m$elm_syntax$Combine$string("then");
    var $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function(_v0) {
        var line = _v0.line;
        var column = _v0.column;
        return {
            column: column,
            row: line
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
            var k = $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
            return p({
                end: k,
                start: k
            });
        });
    };
    var $elm$core$List$drop = F2(function(n, list) {
        drop: while(true){
            if (n <= 0) return list;
            else {
                if (!list.b) return list;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    });
    var $stil4m$elm_syntax$Elm$Parser$State$popIndent = function(_v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
            indents: A2($elm$core$List$drop, 1, s.indents)
        }));
    };
    var $stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(function(x, _v0) {
        var s = _v0.a;
        return $stil4m$elm_syntax$Elm$Parser$State$State(_Utils_update(s, {
            indents: A2($elm$core$List$cons, x, s.indents)
        }));
    });
    var $stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(function(col, state) {
        return A2($stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
    });
    var $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(location) {
            return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$popIndent), A2($stil4m$elm_syntax$Combine$continueWith, p, $stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.column))));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function(pointer) {
        var functionImplementationFromVarPointer = function(varPointer) {
            return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)), $stil4m$elm_syntax$Combine$succeed(F2(function(args, expr) {
                return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                    $stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer),
                    $stil4m$elm_syntax$Elm$Syntax$Node$range(expr)
                ])), A3($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
            }))))));
        };
        var functionWithoutSignature = function(varPointer) {
            return A2($stil4m$elm_syntax$Combine$map, A2($stil4m$elm_syntax$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing), functionImplementationFromVarPointer(varPointer));
        };
        var fromParts = F2(function(sig, decl) {
            return {
                declaration: decl,
                documentation: $elm$core$Maybe$Nothing,
                signature: $elm$core$Maybe$Just(sig)
            };
        });
        var functionWithSignature = function(varPointer) {
            return A2($stil4m$elm_syntax$Combine$andThen, function(sig) {
                return A2($stil4m$elm_syntax$Combine$map, fromParts(sig), A2($stil4m$elm_syntax$Combine$andThen, functionImplementationFromVarPointer, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
            }, $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
        };
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            functionWithSignature(pointer),
            functionWithoutSignature(pointer)
        ]));
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function(p) {
        return $stil4m$elm_syntax$Combine$lazy(function(_v7) {
            return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
        });
    };
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v28) {
            return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v26) {
            return A2($stil4m$elm_syntax$Combine$andThen, function(_v27) {
                var start = _v27.a;
                return A2($stil4m$elm_syntax$Combine$map, function(cb) {
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $stil4m$elm_syntax$Elm$Syntax$Node$range), cb.cases))), $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
                }, A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState($stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()), $stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
            }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v25) {
            return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string("->"), $stil4m$elm_syntax$Combine$maybe(A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern, $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v24) {
            var helper = function(last) {
                return $stil4m$elm_syntax$Combine$withState(function(s) {
                    return $stil4m$elm_syntax$Combine$withLocation(function(l) {
                        return _Utils_eq($stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s), l.column) ? $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                            A2($stil4m$elm_syntax$Combine$map, function(c) {
                                return $stil4m$elm_syntax$Combine$Loop(A2($elm$core$List$cons, c, last));
                            }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()),
                            $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Combine$Done($elm$core$List$reverse(last)))
                        ])) : $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Combine$Done($elm$core$List$reverse(last)));
                    });
                });
            };
            return A2($stil4m$elm_syntax$Combine$andThen, function(v) {
                return A2($stil4m$elm_syntax$Combine$loop, v, helper);
            }, A2($stil4m$elm_syntax$Combine$map, $elm$core$List$singleton, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v18) {
            return A2($stil4m$elm_syntax$Combine$andThen, function(first) {
                var complete = function(rest) {
                    if (!rest.b) return $stil4m$elm_syntax$Combine$succeed(first);
                    else {
                        if (rest.a.b.$ === "Operator") {
                            var _v23 = rest.a;
                            return $stil4m$elm_syntax$Combine$fail("Expression should not end with an operator");
                        } else return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, $stil4m$elm_syntax$Elm$Syntax$Node$range(first), A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, rest))), $stil4m$elm_syntax$Elm$Syntax$Expression$Application(A2($elm$core$List$cons, first, $elm$core$List$reverse(rest)))));
                    }
                };
                var promoter = function(rest) {
                    return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v19) {
                        return complete(rest);
                    }, function(_v20) {
                        return A2($stil4m$elm_syntax$Combine$or, A2($stil4m$elm_syntax$Combine$andThen, function(next) {
                            return promoter(A2($elm$core$List$cons, next, rest));
                        }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()), complete(rest));
                    });
                };
                if (first.b.$ === "Operator") return $stil4m$elm_syntax$Combine$fail("Expression should not start with an operator");
                else return promoter(_List_Nil);
            }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v17) {
            return A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(),
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()
            ])));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
        return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
            return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$lazy(function(_v16) {
                return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed(F3(function(condition, ifTrue, ifFalse) {
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, {
                        end: $stil4m$elm_syntax$Elm$Syntax$Node$range(ifFalse).end,
                        start: current.start
                    }, A3($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock, condition, ifTrue, ifFalse));
                }))))))))));
            }), $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken);
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v15) {
            return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
                return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("->"))), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("\\"), $stil4m$elm_syntax$Combine$succeed(F2(function(args, expr) {
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, {
                        end: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).end,
                        start: current.start
                    }, $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(A2($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr)));
                }))))));
            });
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v14) {
            return A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$string("in"), $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                $stil4m$elm_syntax$Elm$Parser$Layout$layout,
                $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces
            ]))), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState($stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("let"))));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v8) {
            var blockElement = A2($stil4m$elm_syntax$Combine$andThen, function(_v12) {
                var r = _v12.a;
                var p = _v12.b;
                if (p.$ === "VarPattern") {
                    var v = p.a;
                    return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction, $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
                } else return $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
            }, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
            var addRange = function(letDeclaration) {
                return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, function() {
                    if (letDeclaration.$ === "LetFunction") {
                        var letFunction = letDeclaration.a;
                        return $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(letFunction);
                    } else {
                        var _v10 = letDeclaration.a;
                        var patternRange = _v10.a;
                        var _v11 = letDeclaration.b;
                        var expressionRange = _v11.a;
                        return $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                            patternRange,
                            expressionRange
                        ]));
                    }
                }(), letDeclaration);
            };
            return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$map, addRange, blockElement))), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$map, addRange, blockElement), $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v6) {
            return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
                return A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(), $stil4m$elm_syntax$Combine$succeed(F2(function(decls, expr) {
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, {
                        end: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).end,
                        start: current.start
                    }, $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(A2($stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock, decls, expr)));
                }))));
            });
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v5) {
            var innerExpressions = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)))));
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)), $stil4m$elm_syntax$Combine$string("]")),
                A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("]"), innerExpressions)
            ])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("["))));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
        var negationExpression = $stil4m$elm_syntax$Combine$lazy(function(_v4) {
            return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Negation, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
                $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()
            ]))));
        });
        return $stil4m$elm_syntax$Combine$lazy(function(_v3) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                    negationExpression,
                    A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$Operator("-")))
                ])), $stil4m$elm_syntax$Combine$string("-"))),
                $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Operator, $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))
            ]));
        });
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$lazy(function(_v2) {
            var recordField = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)))))));
            var recordFields = A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, recordField, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(","))))), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, recordField, $stil4m$elm_syntax$Combine$succeed($elm$core$List$cons))));
            var recordUpdateSyntaxParser = function(fname) {
                return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$map, function(e) {
                    return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
                }, A2($stil4m$elm_syntax$Combine$continueWith, recordFields, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("|")))));
            };
            var recordContents = A2($stil4m$elm_syntax$Combine$andThen, function(fname) {
                return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                    recordUpdateSyntaxParser(fname),
                    A2($stil4m$elm_syntax$Combine$andThen, function(fieldUpdate) {
                        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                            A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_fromArray([
                                fieldUpdate
                            ]))), $stil4m$elm_syntax$Combine$string("}")),
                            A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$map, function(fieldUpdates) {
                                return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
                            }, A2($stil4m$elm_syntax$Combine$continueWith, recordFields, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))))
                        ]));
                    }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, A2($stil4m$elm_syntax$Combine$map, function(e) {
                        return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
                    }, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("=")))))
                ]));
            }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
            return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)), $stil4m$elm_syntax$Combine$string("}")),
                recordContents
            ])), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("{")));
        }));
    }
    function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
        return $stil4m$elm_syntax$Combine$lazy(function(_v0) {
            var commaSep = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string(",")))));
            var closingParen = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol(")"));
            var asExpression = F2(function(x, xs) {
                if (!xs.b) return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
                else return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(A2($elm$core$List$cons, x, xs));
            });
            var nested = A2($stil4m$elm_syntax$Combine$andMap, commaSep, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$succeed(asExpression)))));
            return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr), closingParen),
                $stil4m$elm_syntax$Combine$backtrackable(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator, A2($stil4m$elm_syntax$Combine$ignore, closingParen, $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))),
                A2($stil4m$elm_syntax$Combine$ignore, closingParen, nested)
            ])), $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$symbol("("))));
        });
    }
    try {
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$expression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$expression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letBody = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
        };
        var $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
        $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function() {
            return $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
        };
    } catch ($2) {
        throw "Some top-level definitions from `Elm.Parser.Declarations` are causing infinite recursion:\n\n  ┌─────┐\n  │    caseBlock\n  │     ↓\n  │    caseExpression\n  │     ↓\n  │    caseStatement\n  │     ↓\n  │    caseStatements\n  │     ↓\n  │    expression\n  │     ↓\n  │    expressionNotApplication\n  │     ↓\n  │    functionWithNameNode\n  │     ↓\n  │    ifBlockExpression\n  │     ↓\n  │    lambdaExpression\n  │     ↓\n  │    letBlock\n  │     ↓\n  │    letBody\n  │     ↓\n  │    letDestructuringDeclarationWithPattern\n  │     ↓\n  │    letExpression\n  │     ↓\n  │    listExpression\n  │     ↓\n  │    operatorExpression\n  │     ↓\n  │    recordExpression\n  │     ↓\n  │    tupledExpression\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Declarations$expression, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Patterns$pattern, $stil4m$elm_syntax$Combine$succeed(F2(function(x, y) {
            return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
        }))))));
    });
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function(a) {
        return {
            $: "FunctionDeclaration",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Declarations$function = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return A2($stil4m$elm_syntax$Combine$map, function(f) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f), $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
        }, A2($stil4m$elm_syntax$Combine$andThen, $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
    });
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function(a) {
        return {
            $: "InfixDeclaration",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(function(direction, precedence, operator, _function) {
        return {
            direction: direction,
            _function: _function,
            operator: operator,
            precedence: precedence
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = {
        $: "Left"
    };
    var $stil4m$elm_syntax$Elm$Syntax$Infix$Non = {
        $: "Non"
    };
    var $stil4m$elm_syntax$Elm$Syntax$Infix$Right = {
        $: "Right"
    };
    var $stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = $stil4m$elm_syntax$Combine$choice(_List_fromArray([
        A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("right"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Right)),
        A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("left"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Left)),
        A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("non"), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Non))
    ]));
    var $elm$parser$Parser$Advanced$int = F2(function(expecting, invalid) {
        return $elm$parser$Parser$Advanced$number({
            binary: $elm$core$Result$Err(invalid),
            expecting: expecting,
            _float: $elm$core$Result$Err(invalid),
            hex: $elm$core$Result$Err(invalid),
            _int: $elm$core$Result$Ok($elm$core$Basics$identity),
            invalid: invalid,
            octal: $elm$core$Result$Err(invalid)
        });
    });
    var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
    var $stil4m$elm_syntax$Combine$Num$int = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$int);
    var $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$Num$int), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Infix$infixDirection), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("infix")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
    var $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($stil4m$elm_syntax$Combine$map, function(inf) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                current,
                $stil4m$elm_syntax$Elm$Syntax$Node$range(inf._function)
            ])), $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
        }, $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
    });
    var $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function(a) {
        return {
            $: "PortDeclaration",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Tokens$portToken = $stil4m$elm_syntax$Combine$string("port");
    var $stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string(":")))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
    var $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(current) {
        return A2($stil4m$elm_syntax$Combine$map, function(sig) {
            return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                current,
                function(_v0) {
                    var r = _v0.a;
                    return r;
                }(sig.typeAnnotation)
            ])), $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
        }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Declarations$signature, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
    });
    var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(function(a, b) {
        return {
            $: "DefinedAlias",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(function(a, b) {
        return {
            $: "DefinedType",
            a: a,
            b: b
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(function(documentation, name, generics, constructors) {
        return {
            constructors: constructors,
            documentation: documentation,
            generics: generics,
            name: name
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(function(documentation, name, generics, typeAnnotation) {
        return {
            documentation: documentation,
            generics: generics,
            name: name,
            typeAnnotation: typeAnnotation
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$Typings$genericList = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
    var $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("type"));
    var $stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(function(name, _arguments) {
        return {
            _arguments: _arguments,
            name: name
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $stil4m$elm_syntax$Combine$choice(_List_fromArray([
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation,
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy),
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
        $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation
    ]));
    var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2($stil4m$elm_syntax$Combine$andThen, function(tnn) {
        var range = tnn.a;
        var complete = function(args) {
            return $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, range, A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, args))), A2($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
        };
        var argHelper = function(xs) {
            return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$andThen, function(ta) {
                    return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v0) {
                        return $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(A2($elm$core$List$cons, ta, xs)));
                    }, function(_v1) {
                        return argHelper(A2($elm$core$List$cons, ta, xs));
                    });
                }, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy),
                $stil4m$elm_syntax$Combine$succeed($elm$core$List$reverse(xs))
            ])), $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0));
        };
        return A2($stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith, function(_v2) {
            return complete(_List_Nil);
        }, function(_v3) {
            return A2($stil4m$elm_syntax$Combine$andThen, complete, argHelper(_List_Nil));
        });
    }, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
    var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = A2($stil4m$elm_syntax$Combine$sepBy1, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("|")), $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor);
    var $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(function(start) {
        return A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            A2($stil4m$elm_syntax$Combine$map, function(typeAlias) {
                return A2($stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                    start,
                    $stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.typeAnnotation)
                ])), typeAlias);
            }, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("="), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$genericList, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)), A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("alias")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing)))))))))),
            A2($stil4m$elm_syntax$Combine$map, function(tipe) {
                return A2($stil4m$elm_syntax$Elm$Parser$Typings$DefinedType, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$cons, start, A2($elm$core$List$map, function(_v0) {
                    var r = _v0.a;
                    return r;
                }, tipe.constructors))), tipe);
            }, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors, A2($stil4m$elm_syntax$Combine$ignore, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Combine$string("=")), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Typings$genericList, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))
        ])), $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
    });
    var $stil4m$elm_syntax$Elm$Parser$Declarations$declaration = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration,
            $stil4m$elm_syntax$Elm$Parser$Declarations$function,
            A2($stil4m$elm_syntax$Combine$map, function(v) {
                if (v.$ === "DefinedType") {
                    var r = v.a;
                    var t = v.b;
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
                } else {
                    var r = v.a;
                    var a = v.b;
                    return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
                }
            }, $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition),
            $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration,
            $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration
        ]));
    });
    var $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), $stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
    var $stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(function(moduleName, moduleAlias, exposingList) {
        return {
            exposingList: exposingList,
            moduleAlias: moduleAlias,
            moduleName: moduleName
        };
    });
    var $stil4m$elm_syntax$Elm$Parser$Tokens$asToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("as"));
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function(a) {
        return {
            $: "All",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function(a) {
        return {
            $: "Explicit",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function(a) {
        return {
            $: "FunctionExpose",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function(a) {
        return {
            $: "InfixExpose",
            a: a
        };
    };
    var $stil4m$elm_syntax$Combine$while = function(pred) {
        return $stil4m$elm_syntax$Combine$Parser(function(state) {
            return A2($elm$parser$Parser$map, function(x) {
                return _Utils_Tuple2(state, x);
            }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(pred)));
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Elm$Parser$Node$parser(A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose, $stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Combine$while($elm$core$Basics$neq(_Utils_chr(")"))))));
    });
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(function(name, open) {
        return {
            name: name,
            open: open
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function(a) {
        return {
            $: "TypeExpose",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function(a) {
        return {
            $: "TypeOrAliasExpose",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(function(f, _v0) {
        var r = _v0.a;
        var a = _v0.b;
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, f(a));
    });
    var $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = A2($stil4m$elm_syntax$Combine$andThen, function(tipe) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            A2($stil4m$elm_syntax$Combine$map, function(openRange) {
                return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(_List_fromArray([
                    $stil4m$elm_syntax$Elm$Syntax$Node$range(tipe),
                    openRange
                ])), $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, $stil4m$elm_syntax$Elm$Syntax$Node$value(tipe), $elm$core$Maybe$Just(openRange))));
            }, A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("..")))))),
            $stil4m$elm_syntax$Combine$succeed(A2($stil4m$elm_syntax$Elm$Syntax$Node$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose, tipe))
        ]));
    }, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)));
    var $stil4m$elm_syntax$Elm$Parser$Expose$exposable = $stil4m$elm_syntax$Combine$lazy(function(_v0) {
        return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
            $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose,
            $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose,
            $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose
        ]));
    });
    var $stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function(p) {
        return $stil4m$elm_syntax$Combine$withLocation(function(start) {
            return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$withLocation(function(end) {
                return $stil4m$elm_syntax$Combine$succeed({
                    end: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
                    start: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
                });
            }), p);
        });
    };
    var $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Ranges$withRange(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("..")), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$All))), A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit, A2($stil4m$elm_syntax$Combine$sepBy, $stil4m$elm_syntax$Combine$Char$char(_Utils_chr(",")), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
    var $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = $stil4m$elm_syntax$Combine$parens(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = $stil4m$elm_syntax$Combine$string("exposing");
    var $stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout), $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$importToken = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$keyword("import"));
    var $stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string("."), $stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
    var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === "Just") {
            var x = _v0.a;
            return A2($elm$core$List$cons, x, xs);
        } else return xs;
    });
    var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
    });
    var $stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(function(start, imp) {
        var allRanges = _List_fromArray([
            $elm$core$Maybe$Just(start),
            $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Node$range(imp.moduleName)),
            A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.exposingList),
            A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.moduleAlias)
        ]);
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$combine(A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)), imp);
    });
    var $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function() {
        var parseExposingDefinition = F2(function(mod, asDef) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$map, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, A2($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)), $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)),
                $stil4m$elm_syntax$Combine$succeed(A3($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))
            ]));
        });
        var importAndModuleName = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
        var asDefinition = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
        var parseAsDefinition = function(mod) {
            return $stil4m$elm_syntax$Combine$choice(_List_fromArray([
                A2($stil4m$elm_syntax$Combine$andThen, A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, parseExposingDefinition(mod)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)),
                A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)
            ]));
        };
        return A2($stil4m$elm_syntax$Combine$andThen, function(_v0) {
            var start = _v0.a;
            return A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start), A2($stil4m$elm_syntax$Combine$andThen, parseAsDefinition, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
        }, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
    }();
    var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function(a) {
        return {
            $: "EffectModule",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2($stil4m$elm_syntax$Combine$andMap, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Combine$string("="))), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName, $stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
    var $elm$core$List$filter = F2(function(isGood, list) {
        return A3($elm$core$List$foldr, F2(function(x, xs) {
            return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }), _List_Nil, list);
    });
    var $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2($stil4m$elm_syntax$Combine$map, function(pairs) {
        return {
            command: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("command")), pairs))),
            subscription: A2($elm$core$Maybe$map, $elm$core$Tuple$second, $elm$core$List$head(A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq("subscription")), pairs)))
        };
    }, A3($stil4m$elm_syntax$Combine$between, $stil4m$elm_syntax$Combine$string("{"), $stil4m$elm_syntax$Combine$string("}"), A2($stil4m$elm_syntax$Combine$sepBy1, $stil4m$elm_syntax$Combine$string(","), $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
    var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock, A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Combine$string("where")));
    var $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = $stil4m$elm_syntax$Combine$string("module");
    var $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function() {
        var createEffectModule = F3(function(name, whereClauses, exp) {
            return $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule({
                command: whereClauses.command,
                exposingList: exp,
                moduleName: name,
                subscription: whereClauses.subscription
            });
        });
        return A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$string("effect"), $stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
    }();
    var $stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(function(moduleName, exposingList) {
        return {
            exposingList: exposingList,
            moduleName: moduleName
        };
    });
    var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function(a) {
        return {
            $: "NormalModule",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
    var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function(a) {
        return {
            $: "PortModule",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Module$PortModule, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken, $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
    var $stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = $stil4m$elm_syntax$Combine$choice(_List_fromArray([
        $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition,
        $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition,
        $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition
    ]));
    var $stil4m$elm_syntax$Elm$Parser$File$file = A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$File$collectComments, A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations, A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Combine$many(A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), A2($stil4m$elm_syntax$Combine$andMap, $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition), A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict), $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
    var $stil4m$elm_syntax$Elm$Internal$RawFile$Raw = function(a) {
        return {
            $: "Raw",
            a: a
        };
    };
    var $stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = $stil4m$elm_syntax$Elm$Internal$RawFile$Raw;
    var $elm$parser$Parser$DeadEnd = F3(function(row, col, problem) {
        return {
            col: col,
            problem: problem,
            row: row
        };
    });
    var $elm$parser$Parser$problemToDeadEnd = function(p) {
        return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
    };
    var $elm$parser$Parser$Advanced$bagToList = F2(function(bag, list) {
        bagToList: while(true)switch(bag.$){
            case "Empty":
                return list;
            case "AddRight":
                var bag1 = bag.a;
                var x = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$core$List$cons, x, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
            default:
                var bag1 = bag.a;
                var bag2 = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
        }
    });
    var $elm$parser$Parser$Advanced$run = F2(function(_v0, src) {
        var parse = _v0.a;
        var _v1 = parse({
            col: 1,
            context: _List_Nil,
            indent: 1,
            offset: 0,
            row: 1,
            src: src
        });
        if (_v1.$ === "Good") {
            var value = _v1.b;
            return $elm$core$Result$Ok(value);
        } else {
            var bag = _v1.b;
            return $elm$core$Result$Err(A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
        }
    });
    var $elm$parser$Parser$run = F2(function(parser, source) {
        var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
        if (_v0.$ === "Ok") {
            var a = _v0.a;
            return $elm$core$Result$Ok(a);
        } else {
            var problems = _v0.a;
            return $elm$core$Result$Err(A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
        }
    });
    var $stil4m$elm_syntax$Combine$runParser = F3(function(_v0, st, s) {
        var p = _v0.a;
        return A2($elm$parser$Parser$run, p(st), s);
    });
    var $elm$parser$Parser$ExpectingEnd = {
        $: "ExpectingEnd"
    };
    var $elm$parser$Parser$Advanced$end = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return _Utils_eq($elm$core$String$length(s.src), s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
    };
    var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
    var $stil4m$elm_syntax$Combine$end = $stil4m$elm_syntax$Combine$Parser(function(state) {
        return A2($elm$parser$Parser$map, function(x) {
            return _Utils_Tuple2(state, x);
        }, $elm$parser$Parser$end);
    });
    var $stil4m$elm_syntax$Elm$Parser$withEnd = function(p) {
        return A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Combine$withLocation(function(_v0) {
            return $stil4m$elm_syntax$Combine$end;
        }), p);
    };
    var $stil4m$elm_syntax$Elm$Parser$parse = function(input) {
        var _v0 = A3($stil4m$elm_syntax$Combine$runParser, $stil4m$elm_syntax$Elm$Parser$withEnd($stil4m$elm_syntax$Elm$Parser$File$file), $stil4m$elm_syntax$Elm$Parser$State$emptyState, input + "\n");
        if (_v0.$ === "Ok") {
            var _v1 = _v0.a;
            var r = _v1.b;
            return $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
        } else {
            var s = _v0.a;
            return $elm$core$Result$Err(s);
        }
    };
    var $author$project$Main$tagFailure = "Failure";
    var $author$project$Main$tagSuccess = "Success";
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Main$toJS = _Platform_outgoingPort("toJS", $elm$json$Json$Encode$string);
    var $elm$core$Debug$toString = _Debug_toString;
    var $author$project$Main$parse = function() {
        var addTag = function(tag) {
            return A2($elm$core$Basics$composeR, $elm$core$Debug$toString, A2($elm$core$Basics$composeR, $elm$core$Basics$append(": "), $elm$core$Basics$append(tag)));
        };
        return A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$parse, A2($elm$core$Basics$composeR, $elm$core$Result$map($elm$core$Debug$log($author$project$Main$tagSuccess)), A2($elm$core$Basics$composeR, $elm$core$Result$mapError($elm$core$Debug$log($author$project$Main$tagFailure)), A2($elm$core$Basics$composeR, $elm$core$Result$map(addTag($author$project$Main$tagSuccess)), A2($elm$core$Basics$composeR, $elm_community$result_extra$Result$Extra$extract(addTag($author$project$Main$tagFailure)), $author$project$Main$toJS)))));
    }();
    var $author$project$Main$init = function(_v0) {
        var input = "module Foo exposing(foo)\n\nfoo = 1\n";
        return _Utils_Tuple2({
            input: input,
            parsed: $elm$core$Result$Err("Waiting for input..."),
            treeState: $klazuka$elm_json_tree_view$JsonTree$defaultState
        }, $author$project$Main$parse(input));
    };
    var $author$project$Main$OnValueFromJS = function(a) {
        return {
            $: "OnValueFromJS",
            a: a
        };
    };
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $author$project$Main$fromJS = _Platform_incomingPort("fromJS", $elm$json$Json$Decode$value);
    var $author$project$Main$subscriptions = function(_v0) {
        return $author$project$Main$fromJS($author$project$Main$OnValueFromJS);
    };
    var $robinheghan$murmur3$Murmur3$HashData = F4(function(shift, seed, hash, charsProcessed) {
        return {
            charsProcessed: charsProcessed,
            hash: hash,
            seed: seed,
            shift: shift
        };
    });
    var $robinheghan$murmur3$Murmur3$c1 = 3432918353;
    var $robinheghan$murmur3$Murmur3$c2 = 461845907;
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $robinheghan$murmur3$Murmur3$multiplyBy = F2(function(b, a) {
        return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16);
    });
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $robinheghan$murmur3$Murmur3$rotlBy = F2(function(b, a) {
        return a << b | a >>> 32 - b;
    });
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $robinheghan$murmur3$Murmur3$finalize = function(data) {
        var acc = !!data.hash ? data.seed ^ A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c2, A2($robinheghan$murmur3$Murmur3$rotlBy, 15, A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, data.hash))) : data.seed;
        var h0 = acc ^ data.charsProcessed;
        var h1 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ h0 >>> 16);
        var h2 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ h1 >>> 13);
        return (h2 ^ h2 >>> 16) >>> 0;
    };
    var $elm$core$String$foldl = _String_foldl;
    var $robinheghan$murmur3$Murmur3$mix = F2(function(h1, k1) {
        return A2($robinheghan$murmur3$Murmur3$multiplyBy, 5, A2($robinheghan$murmur3$Murmur3$rotlBy, 13, h1 ^ A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c2, A2($robinheghan$murmur3$Murmur3$rotlBy, 15, A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, k1))))) + 3864292196;
    });
    var $robinheghan$murmur3$Murmur3$hashFold = F2(function(c, data) {
        var res = data.hash | (255 & $elm$core$Char$toCode(c)) << data.shift;
        var _v0 = data.shift;
        if (_v0 === 24) return {
            charsProcessed: data.charsProcessed + 1,
            hash: 0,
            seed: A2($robinheghan$murmur3$Murmur3$mix, data.seed, res),
            shift: 0
        };
        else return {
            charsProcessed: data.charsProcessed + 1,
            hash: res,
            seed: data.seed,
            shift: data.shift + 8
        };
    });
    var $robinheghan$murmur3$Murmur3$hashString = F2(function(seed, str) {
        return $robinheghan$murmur3$Murmur3$finalize(A3($elm$core$String$foldl, $robinheghan$murmur3$Murmur3$hashFold, A4($robinheghan$murmur3$Murmur3$HashData, 0, seed, 0, 0), str));
    });
    var $rtfeldman$elm_css$Hash$initialSeed = 15739;
    var $rtfeldman$elm_hex$Hex$unsafeToDigit = function(num) {
        unsafeToDigit: while(true)switch(num){
            case 0:
                return _Utils_chr("0");
            case 1:
                return _Utils_chr("1");
            case 2:
                return _Utils_chr("2");
            case 3:
                return _Utils_chr("3");
            case 4:
                return _Utils_chr("4");
            case 5:
                return _Utils_chr("5");
            case 6:
                return _Utils_chr("6");
            case 7:
                return _Utils_chr("7");
            case 8:
                return _Utils_chr("8");
            case 9:
                return _Utils_chr("9");
            case 10:
                return _Utils_chr("a");
            case 11:
                return _Utils_chr("b");
            case 12:
                return _Utils_chr("c");
            case 13:
                return _Utils_chr("d");
            case 14:
                return _Utils_chr("e");
            case 15:
                return _Utils_chr("f");
            default:
                var $temp$num = num;
                num = $temp$num;
                continue unsafeToDigit;
        }
    };
    var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(function(digits, num) {
        unsafePositiveToDigits: while(true){
            if (num < 16) return A2($elm$core$List$cons, $rtfeldman$elm_hex$Hex$unsafeToDigit(num), digits);
            else {
                var $temp$digits = A2($elm$core$List$cons, $rtfeldman$elm_hex$Hex$unsafeToDigit(A2($elm$core$Basics$modBy, 16, num)), digits), $temp$num = num / 16 | 0;
                digits = $temp$digits;
                num = $temp$num;
                continue unsafePositiveToDigits;
            }
        }
    });
    var $rtfeldman$elm_hex$Hex$toString = function(num) {
        return $elm$core$String$fromList(num < 0 ? A2($elm$core$List$cons, _Utils_chr("-"), A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
    };
    var $rtfeldman$elm_css$Hash$fromString = function(str) {
        return A2($elm$core$String$cons, _Utils_chr("_"), $rtfeldman$elm_hex$Hex$toString(A2($robinheghan$murmur3$Murmur3$hashString, $rtfeldman$elm_css$Hash$initialSeed, str)));
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(function(_v0, styles) {
        var isCssStyles = _v0.b;
        var cssTemplate = _v0.c;
        if (isCssStyles) {
            var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
            if (_v1.$ === "Just") return styles;
            else return A3($elm$core$Dict$insert, cssTemplate, $rtfeldman$elm_css$Hash$fromString(cssTemplate), styles);
        } else return styles;
    });
    var $elm$virtual_dom$VirtualDom$property = F2(function(key, value) {
        return A2(_VirtualDom_property, _VirtualDom_noInnerHtmlOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlJson(value));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = F2(function(styles, _v0) {
        var val = _v0.a;
        var isCssStyles = _v0.b;
        var cssTemplate = _v0.c;
        if (isCssStyles) {
            var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
            if (_v1.$ === "Just") {
                var classname = _v1.a;
                return A2($elm$virtual_dom$VirtualDom$property, "className", $elm$json$Json$Encode$string(classname));
            } else return A2($elm$virtual_dom$VirtualDom$property, "className", $elm$json$Json$Encode$string("_unstyled"));
        } else return val;
    });
    var $elm$virtual_dom$VirtualDom$attribute = F2(function(key, value) {
        return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS = F2(function(styles, _v0) {
        var val = _v0.a;
        var isCssStyles = _v0.b;
        var cssTemplate = _v0.c;
        if (isCssStyles) {
            var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
            if (_v1.$ === "Just") {
                var classname = _v1.a;
                return A2($elm$virtual_dom$VirtualDom$attribute, "class", classname);
            } else return A2($elm$virtual_dom$VirtualDom$attribute, "class", "_unstyled");
        } else return val;
    });
    var $elm$virtual_dom$VirtualDom$keyedNode = function(tag) {
        return _VirtualDom_keyedNode(_VirtualDom_noScript(tag));
    };
    var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(function(namespace, tag) {
        return A2(_VirtualDom_keyedNodeNS, namespace, _VirtualDom_noScript(tag));
    });
    var $elm$virtual_dom$VirtualDom$node = function(tag) {
        return _VirtualDom_node(_VirtualDom_noScript(tag));
    };
    var $elm$virtual_dom$VirtualDom$nodeNS = F2(function(namespace, tag) {
        return A2(_VirtualDom_nodeNS, namespace, _VirtualDom_noScript(tag));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(function(_v6, _v7) {
        var key = _v6.a;
        var html = _v6.b;
        var pairs = _v7.a;
        var styles = _v7.b;
        switch(html.$){
            case "Unstyled":
                var vdom = html.a;
                return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key, vdom), pairs), styles);
            case "Node":
                var elemType = html.a;
                var properties = html.b;
                var children = html.c;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v9 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v9.a;
                var finalStyles = _v9.b;
                var vdom = A3($elm$virtual_dom$VirtualDom$node, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key, vdom), pairs), finalStyles);
            case "NodeNS":
                var ns = html.a;
                var elemType = html.b;
                var properties = html.c;
                var children = html.d;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v10 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v10.a;
                var finalStyles = _v10.b;
                var vdom = A4($elm$virtual_dom$VirtualDom$nodeNS, ns, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key, vdom), pairs), finalStyles);
            case "KeyedNode":
                var elemType = html.a;
                var properties = html.b;
                var children = html.c;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v11 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v11.a;
                var finalStyles = _v11.b;
                var vdom = A3($elm$virtual_dom$VirtualDom$keyedNode, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key, vdom), pairs), finalStyles);
            default:
                var ns = html.a;
                var elemType = html.b;
                var properties = html.c;
                var children = html.d;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v12 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v12.a;
                var finalStyles = _v12.b;
                var vdom = A4($elm$virtual_dom$VirtualDom$keyedNodeNS, ns, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, _Utils_Tuple2(key, vdom), pairs), finalStyles);
        }
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(function(html, _v0) {
        var nodes = _v0.a;
        var styles = _v0.b;
        switch(html.$){
            case "Unstyled":
                var vdomNode = html.a;
                return _Utils_Tuple2(A2($elm$core$List$cons, vdomNode, nodes), styles);
            case "Node":
                var elemType = html.a;
                var properties = html.b;
                var children = html.c;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v2 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v2.a;
                var finalStyles = _v2.b;
                var vdomNode = A3($elm$virtual_dom$VirtualDom$node, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, vdomNode, nodes), finalStyles);
            case "NodeNS":
                var ns = html.a;
                var elemType = html.b;
                var properties = html.c;
                var children = html.d;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v3 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v3.a;
                var finalStyles = _v3.b;
                var vdomNode = A4($elm$virtual_dom$VirtualDom$nodeNS, ns, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, vdomNode, nodes), finalStyles);
            case "KeyedNode":
                var elemType = html.a;
                var properties = html.b;
                var children = html.c;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v4 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v4.a;
                var finalStyles = _v4.b;
                var vdomNode = A3($elm$virtual_dom$VirtualDom$keyedNode, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, vdomNode, nodes), finalStyles);
            default:
                var ns = html.a;
                var elemType = html.b;
                var properties = html.c;
                var children = html.d;
                var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
                var _v5 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, combinedStyles), children);
                var childNodes = _v5.a;
                var finalStyles = _v5.b;
                var vdomNode = A4($elm$virtual_dom$VirtualDom$keyedNodeNS, ns, elemType, A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles), properties), $elm$core$List$reverse(childNodes));
                return _Utils_Tuple2(A2($elm$core$List$cons, vdomNode, nodes), finalStyles);
        }
    });
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$core$Dict$foldl = F3(function(func, acc, dict) {
        foldl: while(true){
            if (dict.$ === "RBEmpty_elm_builtin") return acc;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldl, func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin = "\x07";
    var $elm$core$String$replace = F3(function(before, after, string) {
        return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration = F3(function(template, classname, declaration) {
        return declaration + ("\n" + A3($elm$core$String$replace, $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin, classname, template));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function(dict) {
        return A3($elm$core$Dict$foldl, $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration, "", dict);
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = F2(function(maybeNonce, styles) {
        return A3($elm$virtual_dom$VirtualDom$node, "span", _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, "style", "display: none;"),
            A2($elm$virtual_dom$VirtualDom$attribute, "class", "elm-css-style-wrapper")
        ]), _List_fromArray([
            A3($elm$virtual_dom$VirtualDom$node, "style", function() {
                if (maybeNonce.$ === "Just") {
                    var nonce = maybeNonce.a.a;
                    return _List_fromArray([
                        A2($elm$virtual_dom$VirtualDom$attribute, "nonce", nonce)
                    ]);
                } else return _List_Nil;
            }(), $elm$core$List$singleton($elm$virtual_dom$VirtualDom$text($rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))))
        ]));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F4(function(maybeNonce, elemType, properties, children) {
        var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
        var _v0 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, initialStyles), children);
        var childNodes = _v0.a;
        var styles = _v0.b;
        var styleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toStyleNode, maybeNonce, styles);
        var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles), properties);
        return A3($elm$virtual_dom$VirtualDom$node, elemType, unstyledProperties, A2($elm$core$List$cons, styleNode, $elm$core$List$reverse(childNodes)));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(function(key, pairs) {
        containsKey: while(true){
            if (!pairs.b) return false;
            else {
                var _v1 = pairs.a;
                var str = _v1.a;
                var rest = pairs.b;
                if (_Utils_eq(key, str)) return true;
                else {
                    var $temp$key = key, $temp$pairs = rest;
                    key = $temp$key;
                    pairs = $temp$pairs;
                    continue containsKey;
                }
            }
        }
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(function(_default, pairs) {
        getUnusedKey: while(true){
            if (!pairs.b) return _default;
            else {
                var _v1 = pairs.a;
                var firstKey = _v1.a;
                var rest = pairs.b;
                var newKey = "_" + firstKey;
                if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
                    var $temp$default = newKey, $temp$pairs = rest;
                    _default = $temp$default;
                    pairs = $temp$pairs;
                    continue getUnusedKey;
                } else return newKey;
            }
        }
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F3(function(maybeNonce, allStyles, keyedChildNodes) {
        var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, "_", keyedChildNodes);
        var finalNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toStyleNode, maybeNonce, allStyles);
        return _Utils_Tuple2(styleNodeKey, finalNode);
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F4(function(maybeNonce, elemType, properties, keyedChildren) {
        var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
        var _v0 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, initialStyles), keyedChildren);
        var keyedChildNodes = _v0.a;
        var styles = _v0.b;
        var keyedStyleNode = A3($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, maybeNonce, styles, keyedChildNodes);
        var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles), properties);
        return A3($elm$virtual_dom$VirtualDom$keyedNode, elemType, unstyledProperties, A2($elm$core$List$cons, keyedStyleNode, $elm$core$List$reverse(keyedChildNodes)));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F5(function(maybeNonce, ns, elemType, properties, keyedChildren) {
        var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
        var _v0 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml, _Utils_Tuple2(_List_Nil, initialStyles), keyedChildren);
        var keyedChildNodes = _v0.a;
        var styles = _v0.b;
        var keyedStyleNode = A3($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, maybeNonce, styles, keyedChildNodes);
        var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles), properties);
        return A4($elm$virtual_dom$VirtualDom$keyedNodeNS, ns, elemType, unstyledProperties, A2($elm$core$List$cons, keyedStyleNode, $elm$core$List$reverse(keyedChildNodes)));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F5(function(maybeNonce, ns, elemType, properties, children) {
        var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
        var _v0 = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml, _Utils_Tuple2(_List_Nil, initialStyles), children);
        var childNodes = _v0.a;
        var styles = _v0.b;
        var styleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toStyleNode, maybeNonce, styles);
        var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles), properties);
        return A4($elm$virtual_dom$VirtualDom$nodeNS, ns, elemType, unstyledProperties, A2($elm$core$List$cons, styleNode, $elm$core$List$reverse(childNodes)));
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function(vdom) {
        switch(vdom.$){
            case "Unstyled":
                var plainNode = vdom.a;
                return plainNode;
            case "Node":
                var elemType = vdom.a;
                var properties = vdom.b;
                var children = vdom.c;
                return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyle, $elm$core$Maybe$Nothing, elemType, properties, children);
            case "NodeNS":
                var ns = vdom.a;
                var elemType = vdom.b;
                var properties = vdom.c;
                var children = vdom.d;
                return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
            case "KeyedNode":
                var elemType = vdom.a;
                var properties = vdom.b;
                var children = vdom.c;
                return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, $elm$core$Maybe$Nothing, elemType, properties, children);
            default:
                var ns = vdom.a;
                var elemType = vdom.b;
                var properties = vdom.c;
                var children = vdom.d;
                return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
        }
    };
    var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $klazuka$elm_json_tree_view$JsonTree$TDict = function(a) {
        return {
            $: "TDict",
            a: a
        };
    };
    var $klazuka$elm_json_tree_view$JsonTree$TList = function(a) {
        return {
            $: "TList",
            a: a
        };
    };
    var $elm$core$Dict$map = F2(function(func, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, A2(func, key, value), A2($elm$core$Dict$map, func, left), A2($elm$core$Dict$map, func, right));
        }
    });
    var $klazuka$elm_json_tree_view$JsonTree$annotate = F2(function(pathSoFar, node) {
        var annotateList = F2(function(index, val) {
            return A2($klazuka$elm_json_tree_view$JsonTree$annotate, pathSoFar + ("[" + ($elm$core$String$fromInt(index) + "]")), val);
        });
        var annotateDict = F2(function(fieldName, val) {
            return A2($klazuka$elm_json_tree_view$JsonTree$annotate, pathSoFar + ("." + fieldName), val);
        });
        var _v0 = node.value;
        switch(_v0.$){
            case "TString":
                return _Utils_update(node, {
                    keyPath: pathSoFar
                });
            case "TFloat":
                return _Utils_update(node, {
                    keyPath: pathSoFar
                });
            case "TBool":
                return _Utils_update(node, {
                    keyPath: pathSoFar
                });
            case "TNull":
                return _Utils_update(node, {
                    keyPath: pathSoFar
                });
            case "TList":
                var children = _v0.a;
                return _Utils_update(node, {
                    keyPath: pathSoFar,
                    value: $klazuka$elm_json_tree_view$JsonTree$TList(A2($elm$core$List$indexedMap, annotateList, children))
                });
            default:
                var dict = _v0.a;
                return _Utils_update(node, {
                    keyPath: pathSoFar,
                    value: $klazuka$elm_json_tree_view$JsonTree$TDict(A2($elm$core$Dict$map, annotateDict, dict))
                });
        }
    });
    var $klazuka$elm_json_tree_view$JsonTree$TBool = function(a) {
        return {
            $: "TBool",
            a: a
        };
    };
    var $klazuka$elm_json_tree_view$JsonTree$TFloat = function(a) {
        return {
            $: "TFloat",
            a: a
        };
    };
    var $klazuka$elm_json_tree_view$JsonTree$TNull = {
        $: "TNull"
    };
    var $klazuka$elm_json_tree_view$JsonTree$TString = function(a) {
        return {
            $: "TString",
            a: a
        };
    };
    var $elm$json$Json$Decode$bool = _Json_decodeBool;
    var $elm$core$Basics$composeL = F3(function(g, f, x) {
        return g(f(x));
    });
    var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$dict = function(decoder) {
        return A2($elm$json$Json$Decode$map, $elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
    };
    var $elm$json$Json$Decode$float = _Json_decodeFloat;
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$lazy = function(thunk) {
        return A2($elm$json$Json$Decode$andThen, thunk, $elm$json$Json$Decode$succeed(_Utils_Tuple0));
    };
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $elm$json$Json$Decode$null = _Json_decodeNull;
    var $elm$json$Json$Decode$oneOf = _Json_oneOf;
    var $elm$json$Json$Decode$string = _Json_decodeString;
    function $klazuka$elm_json_tree_view$JsonTree$cyclic$coreDecoder() {
        var makeNode = function(v) {
            return {
                keyPath: "",
                value: v
            };
        };
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeL, makeNode, $klazuka$elm_json_tree_view$JsonTree$TString), $elm$json$Json$Decode$string),
            A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeL, makeNode, $klazuka$elm_json_tree_view$JsonTree$TFloat), $elm$json$Json$Decode$float),
            A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeL, makeNode, $klazuka$elm_json_tree_view$JsonTree$TBool), $elm$json$Json$Decode$bool),
            A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeL, makeNode, $klazuka$elm_json_tree_view$JsonTree$TList), $elm$json$Json$Decode$list($elm$json$Json$Decode$lazy(function(_v0) {
                return $klazuka$elm_json_tree_view$JsonTree$cyclic$coreDecoder();
            }))),
            A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeL, makeNode, $klazuka$elm_json_tree_view$JsonTree$TDict), $elm$json$Json$Decode$dict($elm$json$Json$Decode$lazy(function(_v1) {
                return $klazuka$elm_json_tree_view$JsonTree$cyclic$coreDecoder();
            }))),
            $elm$json$Json$Decode$null(makeNode($klazuka$elm_json_tree_view$JsonTree$TNull))
        ]));
    }
    try {
        var $klazuka$elm_json_tree_view$JsonTree$coreDecoder = $klazuka$elm_json_tree_view$JsonTree$cyclic$coreDecoder();
        $klazuka$elm_json_tree_view$JsonTree$cyclic$coreDecoder = function() {
            return $klazuka$elm_json_tree_view$JsonTree$coreDecoder;
        };
    } catch ($3) {
        throw "Some top-level definitions from `JsonTree` are causing infinite recursion:\n\n  ┌─────┐\n  │    coreDecoder\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
    }
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $klazuka$elm_json_tree_view$JsonTree$parseValue = function(json) {
        var rootKeyPath = "";
        var decoder = A2($elm$json$Json$Decode$map, $klazuka$elm_json_tree_view$JsonTree$annotate(rootKeyPath), $klazuka$elm_json_tree_view$JsonTree$coreDecoder);
        return A2($elm$json$Json$Decode$decodeValue, decoder, json);
    };
    var $author$project$Main$update = F2(function(msg, model) {
        switch(msg.$){
            case "OnValueFromJS":
                var value = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    parsed: A2($elm$core$Result$mapError, $elm$json$Json$Decode$errorToString, $klazuka$elm_json_tree_view$JsonTree$parseValue(value))
                }), $elm$core$Platform$Cmd$none);
            case "OnInput":
                var input = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    input: input
                }), $elm$core$Platform$Cmd$none);
            case "OnParse":
                return _Utils_Tuple2(model, $author$project$Main$parse(model.input));
            default:
                var treeState = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    treeState: treeState
                }), $elm$core$Platform$Cmd$none);
        }
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(function(a, b, c) {
        return {
            $: "Node",
            a: a,
            b: b,
            c: c
        };
    });
    var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
    var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
    var $rtfeldman$elm_css$Html$Styled$a = $rtfeldman$elm_css$Html$Styled$node("a");
    var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(function(a, b, c) {
        return {
            $: "Attribute",
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$core$List$all = F2(function(isOkay, list) {
        return !A2($elm$core$List$any, A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay), list);
    });
    var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) return true;
        else return false;
    };
    var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(function(declaration, _v0) {
        var keyframesByName = _v0.a;
        var declarations = _v0.b;
        switch(declaration.$){
            case "StyleBlockDeclaration":
                var _v2 = declaration.a;
                var properties = _v2.c;
                return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "MediaRule":
                var styleBlocks = declaration.b;
                return A2($elm$core$List$all, function(_v3) {
                    var properties = _v3.c;
                    return $elm$core$List$isEmpty(properties);
                }, styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "SupportsRule":
                var otherDeclarations = declaration.b;
                return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "DocumentRule":
                return _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "PageRule":
                var properties = declaration.a;
                return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "FontFace":
                var properties = declaration.a;
                return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "Keyframes":
                var record = declaration.a;
                return $elm$core$String$isEmpty(record.declaration) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(A3($elm$core$Dict$insert, record.name, record.declaration, keyframesByName), declarations);
            case "Viewport":
                var properties = declaration.a;
                return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            case "CounterStyle":
                var properties = declaration.a;
                return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
            default:
                var tuples = declaration.a;
                return A2($elm$core$List$all, function(_v4) {
                    var properties = _v4.b;
                    return $elm$core$List$isEmpty(properties);
                }, tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(keyframesByName, A2($elm$core$List$cons, declaration, declarations));
        }
    });
    var $rtfeldman$elm_css$Css$Structure$Keyframes = function(a) {
        return {
            $: "Keyframes",
            a: a
        };
    };
    var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) return xs;
        else return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    });
    var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(function(keyframesByName, compactedDeclarations) {
        return A2($elm$core$List$append, A2($elm$core$List$map, function(_v0) {
            var name = _v0.a;
            var decl = _v0.b;
            return $rtfeldman$elm_css$Css$Structure$Keyframes({
                declaration: decl,
                name: name
            });
        }, $elm$core$Dict$toList(keyframesByName)), compactedDeclarations);
    });
    var $rtfeldman$elm_css$Css$Structure$compactDeclarations = function(declarations) {
        var _v0 = A3($elm$core$List$foldr, $rtfeldman$elm_css$Css$Structure$compactHelp, _Utils_Tuple2($elm$core$Dict$empty, _List_Nil), declarations);
        var keyframesByName = _v0.a;
        var compactedDeclarations = _v0.b;
        return A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
    };
    var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function(_v0) {
        var charset = _v0.charset;
        var imports = _v0.imports;
        var namespaces = _v0.namespaces;
        var declarations = _v0.declarations;
        return {
            charset: charset,
            declarations: $rtfeldman$elm_css$Css$Structure$compactDeclarations(declarations),
            imports: imports,
            namespaces: namespaces
        };
    };
    var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function(charset) {
        return A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$map, function(str) {
            return '@charset "' + (str + '"');
        }, charset));
    };
    var $rtfeldman$elm_css$Css$String$mapJoinHelp = F4(function(map, sep, strs, result) {
        mapJoinHelp: while(true){
            if (!strs.b) return result;
            else if (!strs.b.b) {
                var first = strs.a;
                return result + (map(first) + "");
            } else {
                var first = strs.a;
                var rest = strs.b;
                var $temp$map = map, $temp$sep = sep, $temp$strs = rest, $temp$result = result + (map(first) + (sep + ""));
                map = $temp$map;
                sep = $temp$sep;
                strs = $temp$strs;
                result = $temp$result;
                continue mapJoinHelp;
            }
        }
    });
    var $rtfeldman$elm_css$Css$String$mapJoin = F3(function(map, sep, strs) {
        return A4($rtfeldman$elm_css$Css$String$mapJoinHelp, map, sep, strs, "");
    });
    var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function(expression) {
        return "(" + (expression.feature + (A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$map, $elm$core$Basics$append(": "), expression.value)) + ")"));
    };
    var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function(mediaType) {
        switch(mediaType.$){
            case "Print":
                return "print";
            case "Screen":
                return "screen";
            default:
                return "speech";
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function(mediaQuery) {
        var prefixWith = F3(function(str, mediaType, expressions) {
            return str + (" " + A2($elm$core$String$join, " and ", A2($elm$core$List$cons, $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType), A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
        });
        switch(mediaQuery.$){
            case "AllQuery":
                var expressions = mediaQuery.a;
                return A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, " and ", expressions);
            case "OnlyQuery":
                var mediaType = mediaQuery.a;
                var expressions = mediaQuery.b;
                return A3(prefixWith, "only", mediaType, expressions);
            case "NotQuery":
                var mediaType = mediaQuery.a;
                var expressions = mediaQuery.b;
                return A3(prefixWith, "not", mediaType, expressions);
            default:
                var str = mediaQuery.a;
                return str;
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(function(name, mediaQuery) {
        return '@import "' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '"'));
    });
    var $rtfeldman$elm_css$Css$Structure$Output$importToString = function(_v0) {
        var name = _v0.a;
        var mediaQueries = _v0.b;
        return A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name), "\n", mediaQueries);
    };
    var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function(_v0) {
        var prefix = _v0.a;
        var str = _v0.b;
        return "@namespace " + (prefix + ('"' + (str + '"')));
    };
    var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function(properties) {
        return A3($rtfeldman$elm_css$Css$String$mapJoin, function(_v0) {
            var prop = _v0.a;
            return prop + ";";
        }, "", properties);
    };
    var $elm$core$String$append = _String_append;
    var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function(_v0) {
        var str = _v0.a;
        return "::" + str;
    };
    var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function(combinator) {
        switch(combinator.$){
            case "AdjacentSibling":
                return "+";
            case "GeneralSibling":
                return "~";
            case "Child":
                return ">";
            default:
                return "";
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function(repeatableSimpleSelector) {
        switch(repeatableSimpleSelector.$){
            case "ClassSelector":
                var str = repeatableSimpleSelector.a;
                return "." + str;
            case "IdSelector":
                var str = repeatableSimpleSelector.a;
                return "#" + str;
            case "PseudoClassSelector":
                var str = repeatableSimpleSelector.a;
                return ":" + str;
            default:
                var str = repeatableSimpleSelector.a;
                return "[" + (str + "]");
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function(simpleSelectorSequence) {
        switch(simpleSelectorSequence.$){
            case "TypeSelectorSequence":
                var str = simpleSelectorSequence.a.a;
                var repeatableSimpleSelectors = simpleSelectorSequence.b;
                return _Utils_ap(str, A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, "", repeatableSimpleSelectors));
            case "UniversalSelectorSequence":
                var repeatableSimpleSelectors = simpleSelectorSequence.a;
                return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? "*" : A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, "", repeatableSimpleSelectors);
            default:
                var str = simpleSelectorSequence.a;
                var repeatableSimpleSelectors = simpleSelectorSequence.b;
                return _Utils_ap(str, A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, "", repeatableSimpleSelectors));
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function(_v0) {
        var combinator = _v0.a;
        var sequence = _v0.b;
        return $rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator) + (" " + $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence));
    };
    var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function(_v0) {
        var simpleSelectorSequence = _v0.a;
        var chain = _v0.b;
        var pseudoElement = _v0.c;
        var segments = A2($elm$core$List$cons, $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence), A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
        var pseudoElementsString = A2($elm$core$Maybe$withDefault, "", A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement));
        return A2($elm$core$String$append, A2($elm$core$String$join, " ", segments), pseudoElementsString);
    };
    var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = function(_v0) {
        var firstSelector = _v0.a;
        var otherSelectors = _v0.b;
        var properties = _v0.c;
        var selectorStr = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$selectorToString, ",", A2($elm$core$List$cons, firstSelector, otherSelectors));
        return selectorStr + ("{" + ($rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties) + "}"));
    };
    var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function(decl) {
        switch(decl.$){
            case "StyleBlockDeclaration":
                var styleBlock = decl.a;
                return $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(styleBlock);
            case "MediaRule":
                var mediaQueries = decl.a;
                var styleBlocks = decl.b;
                var query = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, ", ", mediaQueries);
                var blocks = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, "\n", styleBlocks);
                return "@media " + (query + ("{" + (blocks + "}")));
            case "SupportsRule":
                return "TODO";
            case "DocumentRule":
                return "TODO";
            case "PageRule":
                return "TODO";
            case "FontFace":
                return "TODO";
            case "Keyframes":
                var name = decl.a.name;
                var declaration = decl.a.declaration;
                return "@keyframes " + (name + ("{" + (declaration + "}")));
            case "Viewport":
                return "TODO";
            case "CounterStyle":
                return "TODO";
            default:
                return "TODO";
        }
    };
    var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function(_v0) {
        var charset = _v0.charset;
        var imports = _v0.imports;
        var namespaces = _v0.namespaces;
        var declarations = _v0.declarations;
        return $rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$importToString, "\n", imports) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, "\n", namespaces) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, "\n", declarations) + "")));
    };
    var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
    });
    var $rtfeldman$elm_css$Css$Structure$CounterStyle = function(a) {
        return {
            $: "CounterStyle",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$FontFace = function(a) {
        return {
            $: "FontFace",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$PageRule = function(a) {
        return {
            $: "PageRule",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$Property = function(a) {
        return {
            $: "Property",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$Selector = F3(function(a, b, c) {
        return {
            $: "Selector",
            a: a,
            b: b,
            c: c
        };
    });
    var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(function(a, b, c) {
        return {
            $: "StyleBlock",
            a: a,
            b: b,
            c: c
        };
    });
    var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function(a) {
        return {
            $: "StyleBlockDeclaration",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(function(a, b) {
        return {
            $: "SupportsRule",
            a: a,
            b: b
        };
    });
    var $rtfeldman$elm_css$Css$Structure$Viewport = function(a) {
        return {
            $: "Viewport",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(function(a, b) {
        return {
            $: "MediaRule",
            a: a,
            b: b
        };
    });
    var $rtfeldman$elm_css$Css$Structure$mapLast = F2(function(update, list) {
        if (!list.b) return list;
        else if (!list.b.b) {
            var only = list.a;
            return _List_fromArray([
                update(only)
            ]);
        } else {
            var first = list.a;
            var rest = list.b;
            return A2($elm$core$List$cons, first, A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
        }
    });
    var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(function(property, _v0) {
        var firstSelector = _v0.a;
        var otherSelectors = _v0.b;
        var properties = _v0.c;
        return A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _Utils_ap(properties, _List_fromArray([
            property
        ])));
    });
    var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(function(property, declarations) {
        if (!declarations.b) return declarations;
        else if (!declarations.b.b) switch(declarations.a.$){
            case "StyleBlockDeclaration":
                var styleBlock = declarations.a.a;
                return _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
                ]);
            case "MediaRule":
                var _v1 = declarations.a;
                var mediaQueries = _v1.a;
                var styleBlocks = _v1.b;
                return _List_fromArray([
                    A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, A2($rtfeldman$elm_css$Css$Structure$mapLast, $rtfeldman$elm_css$Css$Structure$withPropertyAppended(property), styleBlocks))
                ]);
            default:
                return declarations;
        }
        else {
            var first = declarations.a;
            var rest = declarations.b;
            return A2($elm$core$List$cons, first, A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
        }
    });
    var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(function(f, styleBlock) {
        if (!styleBlock.b.b) {
            var only = styleBlock.a;
            var properties = styleBlock.c;
            return _List_fromArray([
                A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
                A3($rtfeldman$elm_css$Css$Structure$StyleBlock, f(only), _List_Nil, _List_Nil)
            ]);
        } else {
            var first = styleBlock.a;
            var rest = styleBlock.b;
            var properties = styleBlock.c;
            var newRest = A2($elm$core$List$map, f, rest);
            var newFirst = f(first);
            return _List_fromArray([
                A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
                A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
            ]);
        }
    });
    var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(function(pseudo, _v0) {
        var sequence = _v0.a;
        var selectors = _v0.b;
        return A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, selectors, $elm$core$Maybe$Just(pseudo));
    });
    var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(function(pseudo, styleBlock) {
        return A2($rtfeldman$elm_css$Css$Structure$appendToLastSelector, $rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo), styleBlock);
    });
    var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(function(a, b) {
        return {
            $: "CustomSelector",
            a: a,
            b: b
        };
    });
    var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(function(a, b) {
        return {
            $: "TypeSelectorSequence",
            a: a,
            b: b
        };
    });
    var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function(a) {
        return {
            $: "UniversalSelectorSequence",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(function(selector, sequence) {
        switch(sequence.$){
            case "TypeSelectorSequence":
                var typeSelector = sequence.a;
                var list = sequence.b;
                return A2($rtfeldman$elm_css$Css$Structure$TypeSelectorSequence, typeSelector, _Utils_ap(list, _List_fromArray([
                    selector
                ])));
            case "UniversalSelectorSequence":
                var list = sequence.a;
                return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_Utils_ap(list, _List_fromArray([
                    selector
                ])));
            default:
                var str = sequence.a;
                var list = sequence.b;
                return A2($rtfeldman$elm_css$Css$Structure$CustomSelector, str, _Utils_ap(list, _List_fromArray([
                    selector
                ])));
        }
    });
    var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(function(selector, list) {
        if (!list.b) return _List_Nil;
        else if (!list.b.b) {
            var _v1 = list.a;
            var combinator = _v1.a;
            var sequence = _v1.b;
            return _List_fromArray([
                _Utils_Tuple2(combinator, A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
            ]);
        } else {
            var first = list.a;
            var rest = list.b;
            return A2($elm$core$List$cons, first, A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
        }
    });
    var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(function(repeatableSimpleSelector, selector) {
        if (!selector.b.b) {
            var sequence = selector.a;
            var pseudoElement = selector.c;
            return A3($rtfeldman$elm_css$Css$Structure$Selector, A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence), _List_Nil, pseudoElement);
        } else {
            var firstSelector = selector.a;
            var tuples = selector.b;
            var pseudoElement = selector.c;
            return A3($rtfeldman$elm_css$Css$Structure$Selector, firstSelector, A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples), pseudoElement);
        }
    });
    var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(function(selector, styleBlock) {
        return A2($rtfeldman$elm_css$Css$Structure$appendToLastSelector, $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector), styleBlock);
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function(declarations) {
        collectSelectors: while(true){
            if (!declarations.b) return _List_Nil;
            else if (declarations.a.$ === "StyleBlockDeclaration") {
                var _v1 = declarations.a.a;
                var firstSelector = _v1.a;
                var otherSelectors = _v1.b;
                var rest = declarations.b;
                return _Utils_ap(A2($elm$core$List$cons, firstSelector, otherSelectors), $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
            } else {
                var rest = declarations.b;
                var $temp$declarations = rest;
                declarations = $temp$declarations;
                continue collectSelectors;
            }
        }
    };
    var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(function(a, b, c, d, e) {
        return {
            $: "DocumentRule",
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(function(update, declarations) {
        _v0$12: while(true){
            if (!declarations.b) return declarations;
            else {
                if (!declarations.b.b) switch(declarations.a.$){
                    case "StyleBlockDeclaration":
                        var styleBlock = declarations.a.a;
                        return A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration, update(styleBlock));
                    case "MediaRule":
                        if (declarations.a.b.b) {
                            if (!declarations.a.b.b.b) {
                                var _v1 = declarations.a;
                                var mediaQueries = _v1.a;
                                var _v2 = _v1.b;
                                var styleBlock = _v2.a;
                                return _List_fromArray([
                                    A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, update(styleBlock))
                                ]);
                            } else {
                                var _v3 = declarations.a;
                                var mediaQueries = _v3.a;
                                var _v4 = _v3.b;
                                var first = _v4.a;
                                var rest = _v4.b;
                                var _v5 = A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, _List_fromArray([
                                    A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
                                ]));
                                if (_v5.b && _v5.a.$ === "MediaRule" && !_v5.b.b) {
                                    var _v6 = _v5.a;
                                    var newMediaQueries = _v6.a;
                                    var newStyleBlocks = _v6.b;
                                    return _List_fromArray([
                                        A2($rtfeldman$elm_css$Css$Structure$MediaRule, newMediaQueries, A2($elm$core$List$cons, first, newStyleBlocks))
                                    ]);
                                } else {
                                    var newDeclarations = _v5;
                                    return newDeclarations;
                                }
                            }
                        } else break _v0$12;
                    case "SupportsRule":
                        var _v7 = declarations.a;
                        var str = _v7.a;
                        var nestedDeclarations = _v7.b;
                        return _List_fromArray([
                            A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
                        ]);
                    case "DocumentRule":
                        var _v8 = declarations.a;
                        var str1 = _v8.a;
                        var str2 = _v8.b;
                        var str3 = _v8.c;
                        var str4 = _v8.d;
                        var styleBlock = _v8.e;
                        return A2($elm$core$List$map, A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4), update(styleBlock));
                    case "PageRule":
                        return declarations;
                    case "FontFace":
                        return declarations;
                    case "Keyframes":
                        return declarations;
                    case "Viewport":
                        return declarations;
                    case "CounterStyle":
                        return declarations;
                    default:
                        return declarations;
                }
                else break _v0$12;
            }
        }
        var first = declarations.a;
        var rest = declarations.b;
        return A2($elm$core$List$cons, first, A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function(list) {
        last: while(true){
            if (!list.b) return $elm$core$Maybe$Nothing;
            else if (!list.b.b) {
                var singleton = list.a;
                return $elm$core$Maybe$Just(singleton);
            } else {
                var rest = list.b;
                var $temp$list = rest;
                list = $temp$list;
                continue last;
            }
        }
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function(declarations) {
        lastDeclaration: while(true){
            if (!declarations.b) return $elm$core$Maybe$Nothing;
            else if (!declarations.b.b) {
                var x = declarations.a;
                return $elm$core$Maybe$Just(_List_fromArray([
                    x
                ]));
            } else {
                var xs = declarations.b;
                var $temp$declarations = xs;
                declarations = $temp$declarations;
                continue lastDeclaration;
            }
        }
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function(maybes) {
        oneOf: while(true){
            if (!maybes.b) return $elm$core$Maybe$Nothing;
            else {
                var maybe = maybes.a;
                var rest = maybes.b;
                if (maybe.$ === "Nothing") {
                    var $temp$maybes = rest;
                    maybes = $temp$maybes;
                    continue oneOf;
                } else return maybe;
            }
        }
    };
    var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function(a) {
        return {
            $: "FontFeatureValues",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function(tuples) {
        var expandTuples = function(tuplesToExpand) {
            if (!tuplesToExpand.b) return _List_Nil;
            else {
                var properties = tuplesToExpand.a;
                var rest = tuplesToExpand.b;
                return A2($elm$core$List$cons, properties, expandTuples(rest));
            }
        };
        var newTuples = expandTuples(tuples);
        return _List_fromArray([
            $rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
        ]);
    };
    var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(function(mediaQueries, declaration) {
        if (declaration.$ === "StyleBlockDeclaration") {
            var styleBlock = declaration.a;
            return A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, _List_fromArray([
                styleBlock
            ]));
        } else return declaration;
    });
    var $elm$core$List$takeReverse = F3(function(n, list, kept) {
        takeReverse: while(true){
            if (n <= 0) return kept;
            else {
                if (!list.b) return kept;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = A2($elm$core$List$cons, x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    });
    var $elm$core$List$takeTailRec = F2(function(n, list) {
        return $elm$core$List$reverse(A3($elm$core$List$takeReverse, n, list, _List_Nil));
    });
    var $elm$core$List$takeFast = F3(function(ctr, n, list) {
        if (n <= 0) return _List_Nil;
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while(true){
                _v0$5: while(true){
                    if (!_v0.b.b) return list;
                    else if (_v0.b.b.b) switch(_v0.a){
                        case 1:
                            break _v0$1;
                        case 2:
                            var _v2 = _v0.b;
                            var x = _v2.a;
                            var _v3 = _v2.b;
                            var y = _v3.a;
                            return _List_fromArray([
                                x,
                                y
                            ]);
                        case 3:
                            if (_v0.b.b.b.b) {
                                var _v4 = _v0.b;
                                var x = _v4.a;
                                var _v5 = _v4.b;
                                var y = _v5.a;
                                var _v6 = _v5.b;
                                var z = _v6.a;
                                return _List_fromArray([
                                    x,
                                    y,
                                    z
                                ]);
                            } else break _v0$5;
                        default:
                            if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                                var _v7 = _v0.b;
                                var x = _v7.a;
                                var _v8 = _v7.b;
                                var y = _v8.a;
                                var _v9 = _v8.b;
                                var z = _v9.a;
                                var _v10 = _v9.b;
                                var w = _v10.a;
                                var tl = _v10.b;
                                return ctr > 1000 ? A2($elm$core$List$cons, x, A2($elm$core$List$cons, y, A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2($elm$core$List$cons, x, A2($elm$core$List$cons, y, A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
                            } else break _v0$5;
                    }
                    else {
                        if (_v0.a === 1) break _v0$1;
                        else break _v0$5;
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray([
                x
            ]);
        }
    });
    var $elm$core$List$take = F2(function(n, list) {
        return A3($elm$core$List$takeFast, 0, n, list);
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(function(str1, str2, str3, str4, declaration) {
        if (declaration.$ === "StyleBlockDeclaration") {
            var structureStyleBlock = declaration.a;
            return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
        } else return declaration;
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(function(mediaQueries, declaration) {
        switch(declaration.$){
            case "StyleBlockDeclaration":
                var structureStyleBlock = declaration.a;
                return A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, _List_fromArray([
                    structureStyleBlock
                ]));
            case "MediaRule":
                var newMediaQueries = declaration.a;
                var structureStyleBlocks = declaration.b;
                return A2($rtfeldman$elm_css$Css$Structure$MediaRule, _Utils_ap(mediaQueries, newMediaQueries), structureStyleBlocks);
            case "SupportsRule":
                var str = declaration.a;
                var declarations = declaration.b;
                return A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries), declarations));
            case "DocumentRule":
                var str1 = declaration.a;
                var str2 = declaration.b;
                var str3 = declaration.c;
                var str4 = declaration.d;
                var structureStyleBlock = declaration.e;
                return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
            case "PageRule":
                return declaration;
            case "FontFace":
                return declaration;
            case "Keyframes":
                return declaration;
            case "Viewport":
                return declaration;
            case "CounterStyle":
                return declaration;
            default:
                return declaration;
        }
    });
    var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function(_v0) {
        var declarations = _v0.a;
        return declarations;
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(function(nestedStyles, rest, f, declarations) {
        var withoutParent = function(decls) {
            return A2($elm$core$Maybe$withDefault, _List_Nil, $elm$core$List$tail(decls));
        };
        var nextResult = A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, A2($elm$core$Maybe$withDefault, _List_Nil, $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
        var newDeclarations = function() {
            var _v14 = _Utils_Tuple2($elm$core$List$head(nextResult), $rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
            if (_v14.a.$ === "Just" && _v14.b.$ === "Just") {
                var nextResultParent = _v14.a.a;
                var originalParent = _v14.b.a;
                return _Utils_ap(A2($elm$core$List$take, $elm$core$List$length(declarations) - 1, declarations), _List_fromArray([
                    !_Utils_eq(originalParent, nextResultParent) ? nextResultParent : originalParent
                ]));
            } else return declarations;
        }();
        var insertStylesToNestedDecl = function(lastDecl) {
            return $elm$core$List$concat(A2($rtfeldman$elm_css$Css$Structure$mapLast, $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles), A2($elm$core$List$map, $elm$core$List$singleton, A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
        };
        var initialResult = A2($elm$core$Maybe$withDefault, _List_Nil, A2($elm$core$Maybe$map, insertStylesToNestedDecl, $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
        return _Utils_ap(newDeclarations, _Utils_ap(withoutParent(initialResult), withoutParent(nextResult)));
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(function(styles, declarations) {
        if (!styles.b) return declarations;
        else switch(styles.a.$){
            case "AppendProperty":
                var property = styles.a.a;
                var rest = styles.b;
                return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
            case "ExtendSelector":
                var _v4 = styles.a;
                var selector = _v4.a;
                var nestedStyles = _v4.b;
                var rest = styles.b;
                return A4($rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast, nestedStyles, rest, $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector), declarations);
            case "NestSnippet":
                var _v5 = styles.a;
                var selectorCombinator = _v5.a;
                var snippets = _v5.b;
                var rest = styles.b;
                var chain = F2(function(_v9, _v10) {
                    var originalSequence = _v9.a;
                    var originalTuples = _v9.b;
                    var originalPseudoElement = _v9.c;
                    var newSequence = _v10.a;
                    var newTuples = _v10.b;
                    var newPseudoElement = _v10.c;
                    return A3($rtfeldman$elm_css$Css$Structure$Selector, originalSequence, _Utils_ap(originalTuples, A2($elm$core$List$cons, _Utils_Tuple2(selectorCombinator, newSequence), newTuples)), $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(_List_fromArray([
                        newPseudoElement,
                        originalPseudoElement
                    ])));
                });
                var expandDeclaration = function(declaration) {
                    switch(declaration.$){
                        case "StyleBlockDeclaration":
                            var _v7 = declaration.a;
                            var firstSelector = _v7.a;
                            var otherSelectors = _v7.b;
                            var nestedStyles = _v7.c;
                            var newSelectors = A2($elm$core$List$concatMap, function(originalSelector) {
                                return A2($elm$core$List$map, chain(originalSelector), A2($elm$core$List$cons, firstSelector, otherSelectors));
                            }, $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
                            var newDeclarations = function() {
                                if (!newSelectors.b) return _List_Nil;
                                else {
                                    var first = newSelectors.a;
                                    var remainder = newSelectors.b;
                                    return _List_fromArray([
                                        $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
                                    ]);
                                }
                            }();
                            return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
                        case "MediaRule":
                            var mediaQueries = declaration.a;
                            var styleBlocks = declaration.b;
                            return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
                        case "SupportsRule":
                            var str = declaration.a;
                            var otherSnippets = declaration.b;
                            return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
                        case "DocumentRule":
                            var str1 = declaration.a;
                            var str2 = declaration.b;
                            var str3 = declaration.c;
                            var str4 = declaration.d;
                            var styleBlock = declaration.e;
                            return A2($elm$core$List$map, A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4), $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
                        case "PageRule":
                            var properties = declaration.a;
                            return _List_fromArray([
                                $rtfeldman$elm_css$Css$Structure$PageRule(properties)
                            ]);
                        case "FontFace":
                            var properties = declaration.a;
                            return _List_fromArray([
                                $rtfeldman$elm_css$Css$Structure$FontFace(properties)
                            ]);
                        case "Viewport":
                            var properties = declaration.a;
                            return _List_fromArray([
                                $rtfeldman$elm_css$Css$Structure$Viewport(properties)
                            ]);
                        case "CounterStyle":
                            var properties = declaration.a;
                            return _List_fromArray([
                                $rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
                            ]);
                        default:
                            var tuples = declaration.a;
                            return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
                    }
                };
                return $elm$core$List$concat(_Utils_ap(_List_fromArray([
                    A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
                ]), A2($elm$core$List$map, expandDeclaration, A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
            case "WithPseudoElement":
                var _v11 = styles.a;
                var pseudoElement = _v11.a;
                var nestedStyles = _v11.b;
                var rest = styles.b;
                return A4($rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast, nestedStyles, rest, $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement), declarations);
            case "WithKeyframes":
                var str = styles.a.a;
                var rest = styles.b;
                var name = $rtfeldman$elm_css$Hash$fromString(str);
                var newProperty = $rtfeldman$elm_css$Css$Structure$Property("animation-name:" + name);
                var newDeclarations = A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
                return A2($elm$core$List$append, newDeclarations, _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$Keyframes({
                        declaration: str,
                        name: name
                    })
                ]));
            case "WithMedia":
                var _v12 = styles.a;
                var mediaQueries = _v12.a;
                var nestedStyles = _v12.b;
                var rest = styles.b;
                var extraDeclarations = function() {
                    var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
                    if (!_v13.b) return _List_Nil;
                    else {
                        var firstSelector = _v13.a;
                        var otherSelectors = _v13.b;
                        return A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries), A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, $elm$core$List$singleton($rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
                    }
                }();
                return _Utils_ap(A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations), extraDeclarations);
            default:
                var otherStyles = styles.a.a;
                var rest = styles.b;
                return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, _Utils_ap(otherStyles, rest), declarations);
        }
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function(_v2) {
        var firstSelector = _v2.a;
        var otherSelectors = _v2.b;
        var styles = _v2.c;
        return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, styles, _List_fromArray([
            $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
        ]));
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function(snippetDeclarations) {
        if (!snippetDeclarations.b) return _List_Nil;
        else {
            var first = snippetDeclarations.a;
            var rest = snippetDeclarations.b;
            return _Utils_ap($rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first), $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
        }
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(function(mediaQueries, styleBlocks) {
        var handleStyleBlock = function(styleBlock) {
            return A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries), $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
        };
        return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(function(str, snippets) {
        var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
        return _List_fromArray([
            A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
        ]);
    });
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function(snippetDeclaration) {
        switch(snippetDeclaration.$){
            case "StyleBlockDeclaration":
                var styleBlock = snippetDeclaration.a;
                return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
            case "MediaRule":
                var mediaQueries = snippetDeclaration.a;
                var styleBlocks = snippetDeclaration.b;
                return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
            case "SupportsRule":
                var str = snippetDeclaration.a;
                var snippets = snippetDeclaration.b;
                return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
            case "DocumentRule":
                var str1 = snippetDeclaration.a;
                var str2 = snippetDeclaration.b;
                var str3 = snippetDeclaration.c;
                var str4 = snippetDeclaration.d;
                var styleBlock = snippetDeclaration.e;
                return A2($elm$core$List$map, A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4), $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
            case "PageRule":
                var properties = snippetDeclaration.a;
                return _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$PageRule(properties)
                ]);
            case "FontFace":
                var properties = snippetDeclaration.a;
                return _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$FontFace(properties)
                ]);
            case "Viewport":
                var properties = snippetDeclaration.a;
                return _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$Viewport(properties)
                ]);
            case "CounterStyle":
                var properties = snippetDeclaration.a;
                return _List_fromArray([
                    $rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
                ]);
            default:
                var tuples = snippetDeclaration.a;
                return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
        }
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function(_v0) {
        var charset = _v0.charset;
        var imports = _v0.imports;
        var namespaces = _v0.namespaces;
        var snippets = _v0.snippets;
        var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
        return {
            charset: charset,
            declarations: declarations,
            imports: imports,
            namespaces: namespaces
        };
    };
    var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function(sheet) {
        return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint($rtfeldman$elm_css$Css$Structure$compactStylesheet($rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
    };
    var $rtfeldman$elm_css$Css$Preprocess$Snippet = function(a) {
        return {
            $: "Snippet",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(function(a, b, c) {
        return {
            $: "StyleBlock",
            a: a,
            b: b,
            c: c
        };
    });
    var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function(a) {
        return {
            $: "StyleBlockDeclaration",
            a: a
        };
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(function(styles, sequence) {
        var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
        return $rtfeldman$elm_css$Css$Preprocess$Snippet(_List_fromArray([
            $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
        ]));
    });
    var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function(snippets) {
        return {
            charset: $elm$core$Maybe$Nothing,
            imports: _List_Nil,
            namespaces: _List_Nil,
            snippets: snippets
        };
    };
    var $rtfeldman$elm_css$Css$Structure$ClassSelector = function(a) {
        return {
            $: "ClassSelector",
            a: a
        };
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$templateSelector = $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_fromArray([
        $rtfeldman$elm_css$Css$Structure$ClassSelector($rtfeldman$elm_css$VirtualDom$Styled$classnameStandin)
    ]));
    var $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate = function(styles) {
        if (!styles.b) return "";
        else {
            var otherwise = styles;
            return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile($rtfeldman$elm_css$Css$Preprocess$stylesheet(_List_fromArray([
                A2($rtfeldman$elm_css$VirtualDom$Styled$makeSnippet, styles, $rtfeldman$elm_css$VirtualDom$Styled$templateSelector)
            ])));
        }
    };
    var $rtfeldman$elm_css$Html$Styled$Internal$css = function(styles) {
        var cssTemplate = $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate(styles);
        var classProperty = A2($elm$virtual_dom$VirtualDom$attribute, "", "");
        return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, true, cssTemplate);
    };
    var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
    var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node("div");
    var $rtfeldman$elm_css$Html$Styled$h3 = $rtfeldman$elm_css$Html$Styled$node("h3");
    var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(function(key, value) {
        return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, A2($elm$virtual_dom$VirtualDom$property, key, value), false, "");
    });
    var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(function(key, string) {
        return A2($rtfeldman$elm_css$VirtualDom$Styled$property, key, $elm$json$Json$Encode$string(string));
    });
    var $rtfeldman$elm_css$Html$Styled$Attributes$href = function(url) {
        return A2($rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, "href", url);
    };
    var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function(a) {
        return {
            $: "AppendProperty",
            a: a
        };
    };
    var $rtfeldman$elm_css$Css$property = F2(function(key, value) {
        return $rtfeldman$elm_css$Css$Preprocess$AppendProperty($rtfeldman$elm_css$Css$Structure$Property(key + (":" + value)));
    });
    var $rtfeldman$elm_css$Css$prop1 = F2(function(key, arg) {
        return A2($rtfeldman$elm_css$Css$property, key, arg.value);
    });
    var $rtfeldman$elm_css$Css$marginTop = $rtfeldman$elm_css$Css$prop1("margin-top");
    var $rtfeldman$elm_css$Css$PxUnits = {
        $: "PxUnits"
    };
    var $rtfeldman$elm_css$Css$Structure$Compatible = {
        $: "Compatible"
    };
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(function(units, unitLabel, numericValue) {
        return {
            absoluteLength: $rtfeldman$elm_css$Css$Structure$Compatible,
            calc: $rtfeldman$elm_css$Css$Structure$Compatible,
            flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible,
            fontSize: $rtfeldman$elm_css$Css$Structure$Compatible,
            length: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible,
            lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible,
            numericValue: numericValue,
            textIndent: $rtfeldman$elm_css$Css$Structure$Compatible,
            unitLabel: unitLabel,
            units: units,
            value: _Utils_ap($elm$core$String$fromFloat(numericValue), unitLabel)
        };
    });
    var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PxUnits, "px");
    var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function(a) {
        return {
            $: "Unstyled",
            a: a
        };
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$text = function(str) {
        return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled($elm$virtual_dom$VirtualDom$text(str));
    };
    var $rtfeldman$elm_css$Html$Styled$text = $rtfeldman$elm_css$VirtualDom$Styled$text;
    var $author$project$Main$OnInput = function(a) {
        return {
            $: "OnInput",
            a: a
        };
    };
    var $author$project$Main$OnParse = {
        $: "OnParse"
    };
    var $rtfeldman$elm_css$Html$Styled$button = $rtfeldman$elm_css$Html$Styled$node("button");
    var $rtfeldman$elm_css$Css$fontSize = $rtfeldman$elm_css$Css$prop1("font-size");
    var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1("height");
    var $elm$virtual_dom$VirtualDom$Normal = function(a) {
        return {
            $: "Normal",
            a: a
        };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $rtfeldman$elm_css$VirtualDom$Styled$on = F2(function(eventName, handler) {
        return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, A2($elm$virtual_dom$VirtualDom$on, eventName, handler), false, "");
    });
    var $rtfeldman$elm_css$Html$Styled$Events$on = F2(function(event, decoder) {
        return A2($rtfeldman$elm_css$VirtualDom$Styled$on, event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    });
    var $rtfeldman$elm_css$Html$Styled$Events$onClick = function(msg) {
        return A2($rtfeldman$elm_css$Html$Styled$Events$on, "click", $elm$json$Json$Decode$succeed(msg));
    };
    var $rtfeldman$elm_css$Html$Styled$Events$alwaysStop = function(x) {
        return _Utils_Tuple2(x, true);
    };
    var $elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
        return {
            $: "MayStopPropagation",
            a: a
        };
    };
    var $rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn = F2(function(event, decoder) {
        return A2($rtfeldman$elm_css$VirtualDom$Styled$on, event, $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
    });
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$at = F2(function(fields, decoder) {
        return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
    });
    var $rtfeldman$elm_css$Html$Styled$Events$targetValue = A2($elm$json$Json$Decode$at, _List_fromArray([
        "target",
        "value"
    ]), $elm$json$Json$Decode$string);
    var $rtfeldman$elm_css$Html$Styled$Events$onInput = function(tagger) {
        return A2($rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn, "input", A2($elm$json$Json$Decode$map, $rtfeldman$elm_css$Html$Styled$Events$alwaysStop, A2($elm$json$Json$Decode$map, tagger, $rtfeldman$elm_css$Html$Styled$Events$targetValue)));
    };
    var $rtfeldman$elm_css$Html$Styled$textarea = $rtfeldman$elm_css$Html$Styled$node("textarea");
    var $rtfeldman$elm_css$Html$Styled$Attributes$value = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty("value");
    var $rtfeldman$elm_css$Css$width = $rtfeldman$elm_css$Css$prop1("width");
    var $author$project$Main$viewInputArea = function(_v0) {
        var input = _v0.input;
        return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_fromArray([
            A2($rtfeldman$elm_css$Html$Styled$h3, _List_Nil, _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$text("Elm source code")
            ])),
            A2($rtfeldman$elm_css$Html$Styled$textarea, _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$Attributes$value(input),
                $rtfeldman$elm_css$Html$Styled$Events$onInput($author$project$Main$OnInput),
                $rtfeldman$elm_css$Html$Styled$Attributes$css(_List_fromArray([
                    $rtfeldman$elm_css$Css$width($rtfeldman$elm_css$Css$px(400)),
                    $rtfeldman$elm_css$Css$height($rtfeldman$elm_css$Css$px(200)),
                    $rtfeldman$elm_css$Css$fontSize($rtfeldman$elm_css$Css$px(14))
                ]))
            ]), _List_Nil),
            A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_fromArray([
                A2($rtfeldman$elm_css$Html$Styled$button, _List_fromArray([
                    $rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Main$OnParse)
                ]), _List_fromArray([
                    $rtfeldman$elm_css$Html$Styled$text("Parse")
                ]))
            ]))
        ]));
    };
    var $author$project$Main$OnJsonTreeState = function(a) {
        return {
            $: "OnJsonTreeState",
            a: a
        };
    };
    var $elm$core$Maybe$andThen = F2(function(callback, maybeValue) {
        if (maybeValue.$ === "Just") {
            var value = maybeValue.a;
            return callback(value);
        } else return $elm$core$Maybe$Nothing;
    });
    var $rtfeldman$elm_css$Css$backgroundColor = function(c) {
        return A2($rtfeldman$elm_css$Css$property, "background-color", c.value);
    };
    var $klazuka$elm_json_tree_view$JsonTree$defaultColors = {
        bool: "firebrick",
        _null: "gray",
        number: "blue",
        selectable: "#fafad2",
        string: "green"
    };
    var $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode = $rtfeldman$elm_css$VirtualDom$Styled$Unstyled;
    var $rtfeldman$elm_css$Html$Styled$fromUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode;
    var $rtfeldman$elm_css$Html$Styled$pre = $rtfeldman$elm_css$Html$Styled$node("pre");
    var $rtfeldman$elm_css$Css$cssFunction = F2(function(funcName, args) {
        return funcName + ("(" + (A2($elm$core$String$join, ",", args) + ")"));
    });
    var $rtfeldman$elm_css$Css$rgb = F3(function(r, g, b) {
        return {
            alpha: 1,
            blue: b,
            color: $rtfeldman$elm_css$Css$Structure$Compatible,
            green: g,
            red: r,
            value: A2($rtfeldman$elm_css$Css$cssFunction, "rgb", A2($elm$core$List$map, $elm$core$String$fromInt, _List_fromArray([
                r,
                g,
                b
            ])))
        };
    });
    var $elm$core$Result$toMaybe = function(result) {
        if (result.$ === "Ok") {
            var v = result.a;
            return $elm$core$Maybe$Just(v);
        } else return $elm$core$Maybe$Nothing;
    };
    var $klazuka$elm_json_tree_view$JsonTree$css = {
        bool: function(colors) {
            return _List_fromArray([
                _Utils_Tuple2("color", colors.bool)
            ]);
        },
        collapser: _List_fromArray([
            _Utils_Tuple2("position", "absolute"),
            _Utils_Tuple2("cursor", "pointer"),
            _Utils_Tuple2("top", "1px"),
            _Utils_Tuple2("left", "-15px")
        ]),
        fieldName: _List_fromArray([
            _Utils_Tuple2("font-weight", "bold")
        ]),
        li: _List_fromArray([
            _Utils_Tuple2("position", "relative")
        ]),
        _null: function(colors) {
            return _List_fromArray([
                _Utils_Tuple2("color", colors._null)
            ]);
        },
        number: function(colors) {
            return _List_fromArray([
                _Utils_Tuple2("color", colors.number)
            ]);
        },
        root: _List_fromArray([
            _Utils_Tuple2("font-family", "monospace"),
            _Utils_Tuple2("white-space", "pre")
        ]),
        selectable: function(colors) {
            return _List_fromArray([
                _Utils_Tuple2("background-color", colors.selectable),
                _Utils_Tuple2("cursor", "pointer")
            ]);
        },
        string: function(colors) {
            return _List_fromArray([
                _Utils_Tuple2("color", colors.string)
            ]);
        },
        ul: _List_fromArray([
            _Utils_Tuple2("list-style-type", "none"),
            _Utils_Tuple2("margin-left", "26px"),
            _Utils_Tuple2("padding-left", "0px")
        ])
    };
    var $elm$html$Html$div = _VirtualDom_node("div");
    var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
    var $klazuka$elm_json_tree_view$JsonTree$selectableNodeClass = "selectableJsonTreeNode";
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $klazuka$elm_json_tree_view$JsonTree$hoverStyles = function(config) {
        var selectableStyleString = A2($elm$core$String$join, "\n", A2($elm$core$List$map, function(_v0) {
            var name = _v0.a;
            var value = _v0.b;
            return name + (": " + (value + ";"));
        }, $klazuka$elm_json_tree_view$JsonTree$css.selectable(config.colors)));
        var styleBody = "." + ($klazuka$elm_json_tree_view$JsonTree$selectableNodeClass + (":hover {\n" + (selectableStyleString + "\n}\n")));
        return A3($elm$html$Html$node, "style", _List_Nil, _List_fromArray([
            $elm$html$Html$text(styleBody)
        ]));
    };
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $klazuka$elm_json_tree_view$JsonTree$styleList = function(styles) {
        return A2($elm$core$List$map, function(_v0) {
            var name = _v0.a;
            var value = _v0.b;
            return A2($elm$html$Html$Attributes$style, name, value);
        }, styles);
    };
    var $klazuka$elm_json_tree_view$JsonTree$isCollapsed = F2(function(keyPath, state) {
        var hiddenPaths = state.a;
        return A2($elm$core$Set$member, keyPath, hiddenPaths);
    });
    var $elm$core$Dict$isEmpty = function(dict) {
        if (dict.$ === "RBEmpty_elm_builtin") return true;
        else return false;
    };
    var $elm$html$Html$li = _VirtualDom_node("li");
    var $elm$html$Html$span = _VirtualDom_node("span");
    var $elm$html$Html$ul = _VirtualDom_node("ul");
    var $klazuka$elm_json_tree_view$JsonTree$collapse = F2(function(keyPath, state) {
        var hiddenPaths = state.a;
        return $klazuka$elm_json_tree_view$JsonTree$State(A2($elm$core$Set$insert, keyPath, hiddenPaths));
    });
    var $elm$html$Html$Events$on = F2(function(event, decoder) {
        return A2($elm$virtual_dom$VirtualDom$on, event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    });
    var $klazuka$elm_json_tree_view$JsonTree$lazyStateChangeOnClick = F2(function(newStateThunk, toMsg) {
        var force = function(thunk) {
            return thunk(_Utils_Tuple0);
        };
        return A2($elm$html$Html$Events$on, "click", A2($elm$json$Json$Decode$map, A2($elm$core$Basics$composeR, force, toMsg), $elm$json$Json$Decode$succeed(newStateThunk)));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewCollapser = F4(function(depth, config, newStateThunk, displayText) {
        return !depth ? $elm$html$Html$text("") : A2($elm$html$Html$span, A2($elm$core$List$cons, A2($klazuka$elm_json_tree_view$JsonTree$lazyStateChangeOnClick, newStateThunk, config.toMsg), $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.collapser)), _List_fromArray([
            $elm$html$Html$text(displayText)
        ]));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewCollapseButton = F4(function(depth, keyPath, config, state) {
        return A4($klazuka$elm_json_tree_view$JsonTree$viewCollapser, depth, config, function(_v0) {
            return A2($klazuka$elm_json_tree_view$JsonTree$collapse, keyPath, state);
        }, "-");
    });
    var $elm$core$Dict$getMin = function(dict) {
        getMin: while(true){
            if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            } else return dict;
        }
    };
    var $elm$core$Dict$moveRedLeft = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
            if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rlK, rlV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), rlL), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
            } else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr.$ === "Black") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
        } else return dict;
    };
    var $elm$core$Dict$moveRedRight = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
            if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, lRight, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
            } else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr.$ === "Black") return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
        } else return dict;
    };
    var $elm$core$Dict$removeHelpPrepEQGT = F7(function(targetKey, dict, color, key, value, left, right) {
        if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, lK, lV, lLeft, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
        } else {
            _v2$2: while(true){
                if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
                    if (right.d.$ === "RBNode_elm_builtin") {
                        if (right.d.a.$ === "Black") {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        } else break _v2$2;
                    } else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                } else break _v2$2;
            }
            return dict;
        }
    });
    var $elm$core$Dict$removeMin = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor.$ === "Black") {
                if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                    var _v3 = lLeft.a;
                    return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
                } else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === "RBNode_elm_builtin") {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    } else return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    };
    var $elm$core$Dict$removeHelp = F2(function(targetKey, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                        var _v6 = lLeft.a;
                        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
                    } else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === "RBNode_elm_builtin") {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return A5($elm$core$Dict$balance, nColor, nKey, nValue, A2($elm$core$Dict$removeHelp, targetKey, nLeft), nRight);
                        } else return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
            } else return A2($elm$core$Dict$removeHelpEQGT, targetKey, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
        }
    });
    var $elm$core$Dict$removeHelpEQGT = F2(function(targetKey, dict) {
        if (dict.$ === "RBNode_elm_builtin") {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === "RBNode_elm_builtin") {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return A5($elm$core$Dict$balance, color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                } else return $elm$core$Dict$RBEmpty_elm_builtin;
            } else return A5($elm$core$Dict$balance, color, key, value, left, A2($elm$core$Dict$removeHelp, targetKey, right));
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    });
    var $elm$core$Dict$remove = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $elm$core$Set$remove = F2(function(key, _v0) {
        var dict = _v0.a;
        return $elm$core$Set$Set_elm_builtin(A2($elm$core$Dict$remove, key, dict));
    });
    var $klazuka$elm_json_tree_view$JsonTree$expand = F2(function(keyPath, state) {
        var hiddenPaths = state.a;
        return $klazuka$elm_json_tree_view$JsonTree$State(A2($elm$core$Set$remove, keyPath, hiddenPaths));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewExpandButton = F4(function(depth, keyPath, config, state) {
        return A4($klazuka$elm_json_tree_view$JsonTree$viewCollapser, depth, config, function(_v0) {
            return A2($klazuka$elm_json_tree_view$JsonTree$expand, keyPath, state);
        }, "+");
    });
    var $elm$html$Html$Attributes$stringProperty = F2(function(key, string) {
        return A2(_VirtualDom_property, key, $elm$json$Json$Encode$string(string));
    });
    var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty("className");
    var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty("id");
    var $elm$html$Html$Events$onClick = function(msg) {
        return A2($elm$html$Html$Events$on, "click", $elm$json$Json$Decode$succeed(msg));
    };
    var $klazuka$elm_json_tree_view$JsonTree$viewScalar = F4(function(someCss, str, node, config) {
        return $elm$core$List$singleton(A2($elm$html$Html$span, _Utils_ap(_List_fromArray([
            $elm$html$Html$Attributes$id(node.keyPath)
        ]), _Utils_ap($klazuka$elm_json_tree_view$JsonTree$styleList(someCss), function() {
            var _v0 = config.onSelect;
            if (_v0.$ === "Just") {
                var onSelect = _v0.a;
                return _List_fromArray([
                    $elm$html$Html$Events$onClick(onSelect(node.keyPath)),
                    $elm$html$Html$Attributes$class($klazuka$elm_json_tree_view$JsonTree$selectableNodeClass)
                ]);
            } else return _List_Nil;
        }())), _List_fromArray([
            $elm$html$Html$text(str)
        ])));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewArray = F5(function(depth, nodes, keyPath, config, state) {
        var viewListItem = function(node) {
            return A2($elm$html$Html$li, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.li), A2($elm$core$List$append, A4($klazuka$elm_json_tree_view$JsonTree$viewNodeInternal, depth + 1, config, node, state), _List_fromArray([
                $elm$html$Html$text(",")
            ])));
        };
        var innerContent = $elm$core$List$isEmpty(nodes) ? _List_Nil : A2($klazuka$elm_json_tree_view$JsonTree$isCollapsed, keyPath, state) ? _List_fromArray([
            A4($klazuka$elm_json_tree_view$JsonTree$viewExpandButton, depth, keyPath, config, state),
            $elm$html$Html$text("…")
        ]) : _List_fromArray([
            A4($klazuka$elm_json_tree_view$JsonTree$viewCollapseButton, depth, keyPath, config, state),
            A2($elm$html$Html$ul, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.ul), A2($elm$core$List$map, viewListItem, nodes))
        ]);
        return _Utils_ap(_List_fromArray([
            $elm$html$Html$text("[")
        ]), _Utils_ap(innerContent, _List_fromArray([
            $elm$html$Html$text("]")
        ])));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewDict = F5(function(depth, dict, keyPath, config, state) {
        var viewListItem = function(_v1) {
            var fieldName = _v1.a;
            var node = _v1.b;
            return A2($elm$html$Html$li, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.li), _Utils_ap(_List_fromArray([
                A2($elm$html$Html$span, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.fieldName), _List_fromArray([
                    $elm$html$Html$text(fieldName)
                ])),
                $elm$html$Html$text(": ")
            ]), _Utils_ap(A4($klazuka$elm_json_tree_view$JsonTree$viewNodeInternal, depth + 1, config, node, state), _List_fromArray([
                $elm$html$Html$text(",")
            ]))));
        };
        var innerContent = $elm$core$Dict$isEmpty(dict) ? _List_Nil : A2($klazuka$elm_json_tree_view$JsonTree$isCollapsed, keyPath, state) ? _List_fromArray([
            A4($klazuka$elm_json_tree_view$JsonTree$viewExpandButton, depth, keyPath, config, state),
            $elm$html$Html$text("…")
        ]) : _List_fromArray([
            A4($klazuka$elm_json_tree_view$JsonTree$viewCollapseButton, depth, keyPath, config, state),
            A2($elm$html$Html$ul, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.ul), A2($elm$core$List$map, viewListItem, $elm$core$Dict$toList(dict)))
        ]);
        return _Utils_ap(_List_fromArray([
            $elm$html$Html$text("{")
        ]), _Utils_ap(innerContent, _List_fromArray([
            $elm$html$Html$text("}")
        ])));
    });
    var $klazuka$elm_json_tree_view$JsonTree$viewNodeInternal = F4(function(depth, config, node, state) {
        var colors = config.colors;
        var boolToString = function(bool) {
            return bool ? "true" : "false";
        };
        var _v0 = node.value;
        switch(_v0.$){
            case "TString":
                var str = _v0.a;
                return A4($klazuka$elm_json_tree_view$JsonTree$viewScalar, $klazuka$elm_json_tree_view$JsonTree$css.string(colors), '"' + (str + '"'), node, config);
            case "TFloat":
                var x = _v0.a;
                return A4($klazuka$elm_json_tree_view$JsonTree$viewScalar, $klazuka$elm_json_tree_view$JsonTree$css.number(colors), $elm$core$String$fromFloat(x), node, config);
            case "TBool":
                var bool = _v0.a;
                return A4($klazuka$elm_json_tree_view$JsonTree$viewScalar, $klazuka$elm_json_tree_view$JsonTree$css.bool(colors), boolToString(bool), node, config);
            case "TNull":
                return A4($klazuka$elm_json_tree_view$JsonTree$viewScalar, $klazuka$elm_json_tree_view$JsonTree$css._null(colors), "null", node, config);
            case "TList":
                var nodes = _v0.a;
                return A5($klazuka$elm_json_tree_view$JsonTree$viewArray, depth, nodes, node.keyPath, config, state);
            default:
                var dict = _v0.a;
                return A5($klazuka$elm_json_tree_view$JsonTree$viewDict, depth, dict, node.keyPath, config, state);
        }
    });
    var $klazuka$elm_json_tree_view$JsonTree$view = F3(function(node, config, state) {
        return A2($elm$html$Html$div, $klazuka$elm_json_tree_view$JsonTree$styleList($klazuka$elm_json_tree_view$JsonTree$css.root), A2($elm$core$List$cons, $klazuka$elm_json_tree_view$JsonTree$hoverStyles(config), A4($klazuka$elm_json_tree_view$JsonTree$viewNodeInternal, 0, config, node, state)));
    });
    var $author$project$Main$viewJsonTree = function(model) {
        var backgroundColor = function(succeed) {
            return succeed ? _List_Nil : _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$Attributes$css(_List_fromArray([
                    $rtfeldman$elm_css$Css$backgroundColor(A3($rtfeldman$elm_css$Css$rgb, 232, 188, 206))
                ]))
            ]);
        }(A2($elm$core$Maybe$withDefault, false, A2($elm$core$Maybe$andThen, function(node) {
            var _v1 = node.value;
            if (_v1.$ === "TDict") {
                var dict = _v1.a;
                return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, function($) {
                    return $.value;
                }, $elm$core$Basics$eq($klazuka$elm_json_tree_view$JsonTree$TString($author$project$Main$tagSuccess))), A2($elm$core$Dict$get, "name", dict));
            } else return $elm$core$Maybe$Nothing;
        }, $elm$core$Result$toMaybe(model.parsed))));
        return A2($rtfeldman$elm_css$Html$Styled$div, _Utils_ap(_List_Nil, backgroundColor), _List_fromArray([
            A2($rtfeldman$elm_css$Html$Styled$h3, _List_Nil, _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$text("JSON Tree View")
            ])),
            function() {
                var _v0 = model.parsed;
                if (_v0.$ === "Ok") {
                    var rootNode = _v0.a;
                    return $rtfeldman$elm_css$Html$Styled$fromUnstyled(A3($klazuka$elm_json_tree_view$JsonTree$view, rootNode, {
                        colors: $klazuka$elm_json_tree_view$JsonTree$defaultColors,
                        onSelect: $elm$core$Maybe$Nothing,
                        toMsg: $author$project$Main$OnJsonTreeState
                    }, model.treeState));
                } else {
                    var e = _v0.a;
                    return A2($rtfeldman$elm_css$Html$Styled$pre, _List_Nil, _List_fromArray([
                        $rtfeldman$elm_css$Html$Styled$text("Invalid JSON: " + e)
                    ]));
                }
            }()
        ]));
    };
    var $author$project$Main$view = function(model) {
        return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_fromArray([
            A2($rtfeldman$elm_css$Html$Styled$h3, _List_Nil, _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$text("Write some elm code to be parsed by elm-syntax")
            ])),
            $author$project$Main$viewInputArea(model),
            A2($rtfeldman$elm_css$Html$Styled$div, _List_fromArray([
                $rtfeldman$elm_css$Html$Styled$Attributes$css(_List_fromArray([
                    $rtfeldman$elm_css$Css$marginTop($rtfeldman$elm_css$Css$px(12))
                ]))
            ]), _List_fromArray([
                A2($rtfeldman$elm_css$Html$Styled$a, _List_fromArray([
                    $rtfeldman$elm_css$Html$Styled$Attributes$href("https://github.com/kraklin/elm-debug-transformer#enable-custom-formatters-in-chrome-dev-tools")
                ]), _List_fromArray([
                    $rtfeldman$elm_css$Html$Styled$text("Hint: Consider use chrome and enable custom console formatter and then check output in console.")
                ]))
            ])),
            $author$project$Main$viewJsonTree(model)
        ]));
    };
    var $author$project$Main$main = $elm$browser$Browser$element({
        init: $author$project$Main$init,
        subscriptions: $author$project$Main$subscriptions,
        update: $author$project$Main$update,
        view: A2($elm$core$Basics$composeR, $author$project$Main$view, $rtfeldman$elm_css$Html$Styled$toUnstyled)
    });
    _Platform_export({
        "Main": {
            "init": $author$project$Main$main($elm$json$Json$Decode$succeed({}))(0)
        }
    });
})($073d2c6cc6763899$exports);


(0, $f216bbbdc8ee4728$exports.register)({
    simple_mode: false,
    debug: false,
    limit: 10000
});
const $3da87ddc4a220fcd$var$app = (0, $073d2c6cc6763899$exports.Elm).Main.init({
    node: document.getElementById("root")
});
$3da87ddc4a220fcd$var$app.ports.toJS.subscribe(function(source_code) {
    $3da87ddc4a220fcd$var$app.ports.fromJS.send((0, $f216bbbdc8ee4728$exports.parse)(source_code));
});



