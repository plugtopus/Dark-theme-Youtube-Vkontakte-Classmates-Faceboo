(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})("undefined" == typeof window ? this : window, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e
    }

    function a(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function (e, a) {
            return !!t.call(e, a, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function (e) {
            return -1 < Z.call(t, e) !== n
        })
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function i(e) {
        var t = {};
        return ie.each(e.match(Te) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), ie.ready()
    }

    function r() {
        this.expando = ie.expando + r.uid++
    }

    function d(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType) if (a = "data-" + t.replace(De, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? ie.parseJSON(n) : n)
            } catch (t) {
            }
            Se.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l(e, t, n, a) {
        var o = 1, i = 20, s = a ? function () {
                return a.cur()
            } : function () {
                return ie.css(e, t, "")
            }, r = s(), d = n && n[3] || (ie.cssNumber[t] ? "" : "px"),
            l = (ie.cssNumber[t] || "px" !== d && +r) && Ae.exec(ie.css(e, t)), p;
        if (l && l[3] !== d) {
            d = d || l[3], n = n || [], l = +r || 1;
            do o = o || ".5", l /= o, ie.style(e, t, l + d); while (o != (o = s() / r) && 1 != o && --i)
        }
        return n && (l = +l || +r || 0, p = n[1] ? l + (n[1] + 1) * n[2] : +n[2], a && (a.unit = d, a.start = l, a.end = p)), p
    }

    function p(e, t) {
        var n = "undefined" == typeof e.getElementsByTagName ? "undefined" == typeof e.querySelectorAll ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*");
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n
    }

    function c(e, t) {
        for (var n = 0, a = e.length; n < a; n++) ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
    }

    function u(e, t, n, a, o) {
        for (var s = t.createDocumentFragment(), r = [], d = 0, i = e.length, l, u, h, m, g, f; d < i; d++) if (l = e[d], l || 0 === l) if ("object" === ie.type(l)) ie.merge(r, l.nodeType ? [l] : l); else if (!Ie.test(l)) r.push(t.createTextNode(l)); else {
            for (u = u || s.appendChild(t.createElement("div")), h = (Oe.exec(l) || ["", ""])[1].toLowerCase(), m = Fe[h] || Fe._default, u.innerHTML = m[1] + ie.htmlPrefilter(l) + m[2], f = m[0]; f--;) u = u.lastChild;
            ie.merge(r, u.childNodes), u = s.firstChild, u.textContent = ""
        }
        for (s.textContent = "", d = 0; l = r[d++];) {
            if (a && -1 < ie.inArray(l, a)) {
                o && o.push(l);
                continue
            }
            if (g = ie.contains(l.ownerDocument, l), u = p(s.appendChild(l), "script"), g && c(u), n) for (f = 0; l = u[f++];) Pe.test(l.type || "") && n.push(l)
        }
        return s
    }

    function h() {
        return !0
    }

    function m() {
        return !1
    }

    function g() {
        try {
            return G.activeElement
        } catch (e) {
        }
    }

    function f(e, t, n, a, o, i) {
        var s, r;
        if ("object" == typeof t) {
            for (r in"string" != typeof n && (a = a || n, n = void 0), t) f(e, r, n, a, t[r], i);
            return e
        }
        if (null == a && null == o ? (o = n, a = n = void 0) : null == o && ("string" == typeof n ? (o = a, a = void 0) : (o = a, a = n, n = void 0)), !1 === o) o = m; else if (!o) return e;
        return 1 === i && (s = o, o = function (e) {
            return ie().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ie.guid++)), e.each(function () {
            ie.event.add(this, t, o, a, n)
        })
    }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 === t.nodeType ? t.firstChild : t, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        var n, a, o, i, s, r, d, l;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (i = ke.access(e), s = ke.set(t, i), l = i.events, l)) for (o in delete s.handle, s.events = {}, l) for (n = 0, a = l[o].length; n < a; n++) ie.event.add(t, o, l[o][n]);
            Se.hasData(e) && (r = Se.access(e), d = ie.extend({}, r), Se.set(t, d))
        }
    }

    function T(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && He.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(e, t, n, a) {
        t = J.apply([], t);
        var o = 0, i = e.length, s = t[0], r = ie.isFunction(s), d, l, c, h, m, g;
        if (r || 1 < i && "string" == typeof s && !ae.checkClone && Xe.test(s)) return e.each(function (o) {
            var i = e.eq(o);
            r && (t[0] = s.call(this, o, i.html())), w(i, t, n, a)
        });
        if (i && (d = u(t, e[0].ownerDocument, !1, e, a), l = d.firstChild, 1 === d.childNodes.length && (d = l), l || a)) {
            for (c = ie.map(p(d, "script"), x), h = c.length; o < i; o++) m = d, o != i - 1 && (m = ie.clone(m, !0, !0), h && ie.merge(c, p(m, "script"))), n.call(e[o], m, o);
            if (h) for (g = c[c.length - 1].ownerDocument, ie.map(c, b), o = 0; o < h; o++) m = c[o], Pe.test(m.type || "") && !ke.access(m, "globalEval") && ie.contains(g, m) && (m.src ? ie._evalUrl && ie._evalUrl(m.src) : ie.globalEval(m.textContent.replace($e, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var a = t ? ie.filter(t, e) : e, o = 0, i; null != (i = a[o]); o++) n || 1 !== i.nodeType || ie.cleanData(p(i)), i.parentNode && (n && ie.contains(i.ownerDocument, i) && c(p(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t) {
        var n = ie(t.createElement(e)).appendTo(t.body), a = ie.css(n[0], "display");
        return n.detach(), a
    }

    function k(e) {
        var t = G, n = Ue[e];
        return n || (n = N(e, t), ("none" === n || !n) && (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ke[0].contentDocument, t.write(), t.close(), n = N(e, t), Ke.detach()), Ue[e] = n), n
    }

    function S(e, t, n) {
        var a = e.style, o, i, s, r;
        return n = n || Ge(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== r && void 0 !== r || ie.contains(e.ownerDocument, e) || (r = ie.style(e, t)), n && !ae.pixelMarginRight() && Ye.test(r) && Ve.test(t) && (o = a.width, i = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = o, a.minWidth = i, a.maxWidth = s), void 0 === r ? r : r + ""
    }

    function j(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in at) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if (e = nt[n] + t, e in at) return e
    }

    function E(e, t, n) {
        var a = Ae.exec(t);
        return a ? V(0, a[2] - (n || 0)) + (a[3] || "px") : t
    }

    function A(e, t, n, a, o) {
        for (var s = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > s; s += 2) "margin" === n && (i += ie.css(e, n + Le[s], !0, o)), a ? ("content" === n && (i -= ie.css(e, "padding" + Le[s], !0, o)), "margin" !== n && (i -= ie.css(e, "border" + Le[s] + "Width", !0, o))) : (i += ie.css(e, "padding" + Le[s], !0, o), "padding" !== n && (i += ie.css(e, "border" + Le[s] + "Width", !0, o)));
        return i
    }

    function L(e, t, n) {
        var a = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = Ge(e),
            s = "border-box" === ie.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = S(e, t, i), (0 > o || null == o) && (o = e.style[t]), Ye.test(o)) return o;
            a = s && (ae.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + A(e, t, n || (s ? "border" : "content"), a, i) + "px"
    }

    function q(e, t) {
        for (var n = [], a = 0, o = e.length, i, s, r; a < o; a++) (s = e[a], !!s.style) && (n[a] = ke.get(s, "olddisplay"), i = s.style.display, t ? (!n[a] && "none" === i && (s.style.display = ""), "" === s.style.display && qe(s) && (n[a] = ke.access(s, "olddisplay", k(s.nodeName)))) : (r = qe(s), ("none" !== i || !r) && ke.set(s, "olddisplay", r ? i : ie.css(s, "display"))));
        for (a = 0; a < o; a++) (s = e[a], !!s.style) && (t && "none" !== s.style.display && "" !== s.style.display || (s.style.display = t ? n[a] || "" : "none"));
        return e
    }

    function H(e, t, n, a, o) {
        return new H.prototype.init(e, t, n, a, o)
    }

    function O() {
        return e.setTimeout(function () {
            st = void 0
        }), st = ie.now()
    }

    function P(e, t) {
        var n = 0, a = {height: e}, o;
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) o = Le[n], a["margin" + o] = a["padding" + o] = e;
        return t && (a.opacity = a.width = e), a
    }

    function F(e, t, n) {
        for (var a = (M.tweeners[t] || []).concat(M.tweeners["*"]), o = 0, i = a.length, s; o < i; o++) if (s = a[o].call(n, t, e)) return s
    }

    function I(e, t) {
        var n, a, o, i, s;
        for (n in e) if (a = ie.camelCase(n), o = t[a], i = e[n], ie.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== a && (e[a] = i, delete e[n]), s = ie.cssHooks[a], s && "expand" in s) for (n in i = s.expand(i), delete e[a], i) n in e || (e[n] = i[n], t[n] = o); else t[a] = o
    }

    function M(e, t, n) {
        var a = 0, o = M.prefilters.length, i = ie.Deferred().always(function () {
            delete s.elem
        }), s = function () {
            if (p) return !1;
            for (var t = st || O(), n = V(0, r.startTime + r.duration - t), a = n / r.duration || 0, o = 1 - a, s = 0, d = r.tweens.length; s < d; s++) r.tweens[s].run(o);
            return i.notifyWith(e, [r, o, n]), 1 > o && d ? n : (i.resolveWith(e, [r]), !1)
        }, r = i.promise({
            elem: e,
            props: ie.extend({}, t),
            opts: ie.extend(!0, {specialEasing: {}, easing: ie.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: st || O(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var a = ie.Tween(e, r.opts, t, n, r.opts.specialEasing[t] || r.opts.easing);
                return r.tweens.push(a), a
            },
            stop: function (t) {
                var n = 0, a = t ? r.tweens.length : 0;
                if (p) return this;
                for (p = !0; n < a; n++) r.tweens[n].run(1);
                return t ? (i.notifyWith(e, [r, 1, 0]), i.resolveWith(e, [r, t])) : i.rejectWith(e, [r, t]), this
            }
        }), d = r.props, l, p;
        for (I(d, r.opts.specialEasing); a < o; a++) if (l = M.prefilters[a].call(r, e, d, r.opts), l) return ie.isFunction(l.stop) && (ie._queueHooks(r.elem, r.opts.queue).stop = ie.proxy(l.stop, l)), l;
        return ie.map(d, F, r), ie.isFunction(r.opts.start) && r.opts.start.call(e, r), ie.fx.timer(ie.extend(s, {
            elem: e,
            anim: r,
            queue: r.opts.queue
        })), r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
    }

    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function R(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var a = 0, o = t.toLowerCase().match(Te) || [], i;
            if (ie.isFunction(n)) for (; i = o[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function B(e, t, n, a) {
        function o(r) {
            var d;
            return i[r] = !0, ie.each(e[r] || [], function (e, r) {
                var l = r(t, n, a);
                return "string" != typeof l || s || i[l] ? s ? !(d = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
            }), d
        }

        var i = {}, s = e === St;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function _(e, t) {
        var n = ie.ajaxSettings.flatOptions || {}, a, o;
        for (a in t) void 0 !== t[a] && ((n[a] ? e : o || (o = {}))[a] = t[a]);
        return o && ie.extend(!0, e, o), e
    }

    function X(e, t, n) {
        for (var a = e.contents, o = e.dataTypes, i, s, r, d; "*" === o[0];) o.shift(), void 0 == i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
            o.unshift(s);
            break
        }
        if (o[0] in n) r = o[0]; else {
            for (s in n) {
                if (!o[0] || e.converters[s + " " + o[0]]) {
                    r = s;
                    break
                }
                d || (d = s)
            }
            r = r || d
        }
        return r ? (r !== o[0] && o.unshift(r), n[r]) : void 0
    }

    function z(e, t, n, a) {
        var o = {}, i = e.dataTypes.slice(), s, r, d, l, p;
        if (i[1]) for (d in e.converters) o[d.toLowerCase()] = e.converters[d];
        for (r = i.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !p && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = r, r = i.shift(), r) if ("*" === r) r = p; else if ("*" !== p && p !== r) {
            if (d = o[p + " " + r] || o["* " + r], !d) for (s in o) if (l = s.split(" "), l[1] === r && (d = o[p + " " + l[0]] || o["* " + l[0]], d)) {
                !0 === d ? d = o[s] : !0 !== o[s] && (r = l[0], i.unshift(l[1]));
                break
            }
            if (!0 !== d) if (d && e.throws) t = d(t); else try {
                t = d(t)
            } catch (t) {
                return {state: "parsererror", error: d ? t : "No conversion from " + p + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, a) {
        if (ie.isArray(t)) ie.each(t, function (t, o) {
            n || At.test(e) ? a(e, o) : $(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, a)
        }); else if (!n && "object" === ie.type(t)) for (var o in t) $(e + "[" + o + "]", t[o], n, a); else a(e, t)
    }

    function U(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var V = Math.max, Y = [], G = e.document, Q = Y.slice, J = Y.concat, K = Y.push, Z = Y.indexOf, ee = {},
        te = ee.toString, ne = ee.hasOwnProperty, ae = {}, oe = "2.2.4", ie = function (e, t) {
            return new ie.fn.init(e, t)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^-ms-/, de = /-([\da-z])/gi, le = function (e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: oe, constructor: ie, selector: "", length: 0, toArray: function () {
            return Q.call(this)
        }, get: function (e) {
            return null == e ? Q.call(this) : 0 > e ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return ie.each(this, e)
        }, map: function (e) {
            return this.pushStack(ie.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: K, sort: Y.sort, splice: Y.splice
    }, ie.extend = ie.fn.extend = function () {
        var e = arguments[0] || {}, t = 1, n = arguments.length, a = !1, o, i, s, r, d, l;
        for ("boolean" == typeof e && (a = e, e = arguments[t] || {}, t++), "object" == typeof e || ie.isFunction(e) || (e = {}), t === n && (e = this, t--); t < n; t++) if (null != (o = arguments[t])) for (i in o) (s = e[i], r = o[i], e !== r) && (a && r && (ie.isPlainObject(r) || (d = ie.isArray(r))) ? (d ? (d = !1, l = s && ie.isArray(s) ? s : []) : l = s && ie.isPlainObject(s) ? s : {}, e[i] = ie.extend(a, l, r)) : void 0 !== r && (e[i] = r));
        return e
    }, ie.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === ie.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !ie.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isPlainObject: function (e) {
            if ("object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (var t in e) ;
            return void 0 == t || ne.call(e, t)
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t = eval, n;
            e = ie.trim(e), e && (1 === e.indexOf("use strict") ? (n = G.createElement("script"), n.text = e, G.head.appendChild(n).parentNode.removeChild(n)) : t(e))
        }, camelCase: function (e) {
            return e.replace(re, "ms-").replace(de, le)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var a = 0, o;
            if (n(e)) for (o = e.length; a < o && !1 !== t.call(e[a], a, e[a]); a++) ; else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(se, "")
        }, makeArray: function (e, t) {
            var a = t || [];
            return null != e && (n(Object(e)) ? ie.merge(a, "string" == typeof e ? [e] : e) : K.call(a, e)), a
        }, inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, a = 0, o = e.length; a < n; a++) e[o++] = t[a];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var a = [], o = 0, i = e.length, s; o < i; o++) s = !t(e[o], o), s !== !n && a.push(e[o]);
            return a
        }, map: function (e, t, a) {
            var o = 0, i = [], s, r;
            if (n(e)) for (s = e.length; o < s; o++) r = t(e[o], o, a), null != r && i.push(r); else for (o in e) r = t(e[o], o, a), null != r && i.push(r);
            return J.apply([], i)
        }, guid: 1, proxy: function (e, t) {
            var n, a, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), !!ie.isFunction(e)) return a = Q.call(arguments, 2), o = function () {
                return e.apply(t || this, a.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || ie.guid++, o
        }, now: Date.now, support: ae
    }), "function" == typeof Symbol && (ie.fn[Symbol.iterator] = Y[Symbol.iterator]), ie.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = function (e) {
        function t(e, t, n, a) {
            var o = t && t.ownerDocument, s = t ? t.nodeType : 9, r, d, i, l, p, u, m, g;
            if (n = n || [], "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!a && ((t ? t.ownerDocument || t : w) !== me && he(t), t = t || me, fe)) {
                if (11 !== s && (u = J.exec(e))) if (!(r = u[1])) {
                    if (u[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && oe.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
                } else if (9 === s) {
                    if (!(i = t.getElementById(r))) return n;
                    if (i.id === r) return n.push(i), n
                } else if (o && (i = o.getElementById(r)) && ve(t, i) && i.id === r) return n.push(i), n;
                if (oe.qsa && !j[e + " "] && (!ye || !ye.test(e))) {
                    if (1 !== s) o = t, g = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((l = t.getAttribute("id")) ? l = l.replace(Z, "\\$&") : t.setAttribute("id", l = T), m = re(e), d = m.length, p = U.test(l) ? "#" + l : "[id='" + l + "']"; d--;) m[d] = p + " " + h(m[d]);
                        g = m.join(","), o = K.test(e) && c(t.parentNode) || t
                    }
                    if (g) try {
                        return O.apply(n, o.querySelectorAll(g)), n
                    } catch (e) {
                    } finally {
                        l === T && t.removeAttribute("id")
                    }
                }
            }
            return le(e.replace(B, "$1"), t, n, a)
        }

        function n() {
            function e(n, a) {
                return t.push(n + " ") > ie.cacheLength && delete e[t.shift()], e[n + " "] = a
            }

            var t = [];
            return e
        }

        function a(e) {
            return e[T] = !0, e
        }

        function o(e) {
            var t = me.createElement("div");
            try {
                return !!e(t)
            } catch (t) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var n = e.split("|"), a = n.length; a--;) ie.attrHandle[n[a]] = t
        }

        function r(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || E) - (~e.sourceIndex || E);
            if (a) return a;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function d(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function p(e) {
            return a(function (t) {
                return t = +t, a(function (n, a) {
                    for (var o = e([], n.length, t), s = o.length, i; s--;) n[i = o[s]] && (n[i] = !(a[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {
        }

        function h(e) {
            for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
            return a
        }

        function m(e, t, n) {
            var a = t.dir, o = n && "parentNode" === a, i = N++;
            return t.first ? function (t, n, i) {
                for (; t = t[a];) if (1 === t.nodeType || o) return e(t, n, i)
            } : function (t, n, s) {
                var r = [C, i], d, l, p;
                if (s) {
                    for (; t = t[a];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                } else for (; t = t[a];) if (1 === t.nodeType || o) {
                    if (p = t[T] || (t[T] = {}), l = p[t.uniqueID] || (p[t.uniqueID] = {}), (d = l[a]) && d[0] === C && d[1] === i) return r[2] = d[2];
                    if (l[a] = r, r[2] = e(t, n, s)) return !0
                }
            }
        }

        function g(e) {
            return 1 < e.length ? function (t, n, a) {
                for (var o = e.length; o--;) if (!e[o](t, n, a)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, a) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], a);
            return a
        }

        function y(e, t, n, a, o) {
            for (var s = [], r = 0, i = e.length, d; r < i; r++) (d = e[r]) && (!n || n(d, a, o)) && (s.push(d), null != t && t.push(r));
            return s
        }

        function x(e, t, n, o, s, i) {
            return o && !o[T] && (o = x(o)), s && !s[T] && (s = x(s, i)), a(function (a, r, d, l) {
                var p = [], c = [], u = r.length, h = a || f(t || "*", d.nodeType ? [d] : d, []),
                    m = e && (a || !t) ? y(h, p, e, d, l) : h, g = n ? s || (a ? e : u || o) ? [] : r : m, x, b, i;
                if (n && n(m, g, d, l), o) for (x = y(g, c), o(x, [], d, l), b = x.length; b--;) (i = x[b]) && (g[c[b]] = !(m[c[b]] = i));
                if (!a) g = y(g === r ? g.splice(u, g.length) : g), s ? s(null, r, g, l) : O.apply(r, g); else if (s || e) {
                    if (s) {
                        for (x = [], b = g.length; b--;) (i = g[b]) && x.push(m[b] = i);
                        s(null, g = [], x, l)
                    }
                    for (b = g.length; b--;) (i = g[b]) && -1 < (x = s ? F(a, i) : p[b]) && (a[x] = !(r[x] = i))
                }
            })
        }

        function b(e) {
            for (var t = e.length, n = ie.relative[e[0].type], a = n || ie.relative[" "], o = n ? 1 : 0, i = m(function (e) {
                return e === d
            }, a, !0), s = m(function (e) {
                return -1 < F(d, e)
            }, a, !0), r = [function (e, t, a) {
                var o = !n && (a || t !== pe) || ((d = t).nodeType ? i(e, t, a) : s(e, t, a));
                return d = null, o
            }], d, l, p; o < t; o++) if (l = ie.relative[e[o].type]) r = [m(g(r), l)]; else {
                if (l = ie.filter[e[o].type].apply(null, e[o].matches), l[T]) {
                    for (p = ++o; p < t && !ie.relative[e[p].type]; p++) ;
                    return x(1 < o && g(r), 1 < o && h(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(B, "$1"), l, o < p && b(e.slice(o, p)), p < t && b(e = e.slice(p)), p < t && h(e))
                }
                r.push(l)
            }
            return g(r)
        }

        function v(e, n) {
            var o = 0 < n.length, s = 0 < e.length, i = function (a, r, d, l, p) {
                var c = 0, u = "0", i = a && [], h = [], m = pe, g = a || s && ie.find.TAG("*", p),
                    f = C += null == m ? 1 : Math.random() || 0.1, x = g.length, b, v, T;
                for (p && (pe = r === me || r || p); u !== x && null != (b = g[u]); u++) {
                    if (s && b) {
                        for (v = 0, r || b.ownerDocument === me || (he(b), d = !fe); T = e[v++];) if (T(b, r || me, d)) {
                            l.push(b);
                            break
                        }
                        p && (C = f)
                    }
                    o && ((b = !T && b) && c--, a && i.push(b))
                }
                if (c += u, o && u !== c) {
                    for (v = 0; T = n[v++];) T(i, h, r, d);
                    if (a) {
                        if (0 < c) for (; u--;) i[u] || h[u] || (h[u] = q.call(l));
                        h = y(h)
                    }
                    O.apply(l, h), p && !a && 0 < h.length && 1 < c + n.length && t.uniqueSort(l)
                }
                return p && (C = f, pe = m), i
            };
            return o ? a(i) : i
        }

        var T = "sizzle" + 1 * new Date, w = e.document, C = 0, N = 0, k = n(), S = n(), j = n(), D = function (e, t) {
                return e === t && (ue = !0), 0
            }, E = -2147483648, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, P = L.slice,
            F = function (e, t) {
                for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = /[\x20\t\r\n\f]+/g,
            B = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, _ = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            X = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            z = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            $ = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            U = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, V = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, Y = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = /'|\\/g,
            ee = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, te = function (e, t, n) {
                var a = String.fromCharCode, o = "0x" + t - 65536;
                return o != o || n ? t : 0 > o ? a(o + 65536) : a(55296 | o >> 10, 56320 | 1023 & o)
            }, ne = function () {
                he()
            }, ae, oe, ie, se, i, re, de, le, pe, ce, ue, he, me, ge, fe, ye, xe, be, ve;
        try {
            O.apply(L = P.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (t) {
            O = {
                apply: L.length ? function (e, t) {
                    H.apply(e, P.call(t))
                } : function (e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++];) ;
                    e.length = n - 1
                }
            }
        }
        for (ae in oe = t.support = {}, i = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, he = t.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : w, n, a;
            return t !== me && 9 === t.nodeType && t.documentElement ? (me = t, ge = me.documentElement, fe = !i(me), (a = me.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ne, !1) : a.attachEvent && a.attachEvent("onunload", ne)), oe.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), oe.getElementsByTagName = o(function (e) {
                return e.appendChild(me.createComment("")), !e.getElementsByTagName("*").length
            }), oe.getElementsByClassName = Q.test(me.getElementsByClassName), oe.getById = o(function (e) {
                return ge.appendChild(e).id = T, !me.getElementsByName || !me.getElementsByName(T).length
            }), oe.getById ? (ie.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && fe) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, ie.filter.ID = function (e) {
                var t = e.replace(ee, te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete ie.find.ID, ie.filter.ID = function (e) {
                var t = e.replace(ee, te);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), ie.find.TAG = oe.getElementsByTagName ? function (e, t) {
                return "undefined" == typeof t.getElementsByTagName ? oe.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e)
            } : function (e, t) {
                var n = [], a = 0, o = t.getElementsByTagName(e), i;
                if ("*" === e) {
                    for (; i = o[a++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, ie.find.CLASS = oe.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && fe) return t.getElementsByClassName(e)
            }, xe = [], ye = [], (oe.qsa = Q.test(me.querySelectorAll)) && (o(function (e) {
                ge.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && ye.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || ye.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + T + "-]").length || ye.push("~="), e.querySelectorAll(":checked").length || ye.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || ye.push(".#.+[+~]")
            }), o(function (e) {
                var t = me.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && ye.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || ye.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), ye.push(",.*:")
            })), (oe.matchesSelector = Q.test(be = ge.matches || ge.webkitMatchesSelector || ge.mozMatchesSelector || ge.oMatchesSelector || ge.msMatchesSelector)) && o(function (e) {
                oe.disconnectedMatch = be.call(e, "div"), be.call(e, "[s!='']:x"), xe.push("!=", ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + M + "*(" + W + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + M + "*\\]") + ")*)|.*)\\)|)")
            }), ye = ye.length && new RegExp(ye.join("|")), xe = xe.length && new RegExp(xe.join("|")), n = Q.test(ge.compareDocumentPosition), ve = n || Q.test(ge.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
                return e === a || !!(a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, D = n ? function (e, t) {
                if (e === t) return ue = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !oe.sortDetached && t.compareDocumentPosition(e) === n ? e === me || e.ownerDocument === w && ve(w, e) ? -1 : t === me || t.ownerDocument === w && ve(w, t) ? 1 : ce ? F(ce, e) - F(ce, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return ue = !0, 0;
                var n = 0, a = e.parentNode, o = t.parentNode, i = [e], s = [t], d;
                if (!a || !o) return e === me ? -1 : t === me ? 1 : a ? -1 : o ? 1 : ce ? F(ce, e) - F(ce, t) : 0;
                if (a === o) return r(e, t);
                for (d = e; d = d.parentNode;) i.unshift(d);
                for (d = t; d = d.parentNode;) s.unshift(d);
                for (; i[n] === s[n];) n++;
                return n ? r(i[n], s[n]) : i[n] === w ? -1 : s[n] === w ? 1 : 0
            }, me) : me
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== me && he(e), n = n.replace(z, "='$1']"), oe.matchesSelector && fe && !j[n + " "] && (!xe || !xe.test(n)) && (!ye || !ye.test(n))) try {
                var a = be.call(e, n);
                if (a || oe.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
            } catch (t) {
            }
            return 0 < t(n, me, null, [e]).length
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== me && he(e), ve(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== me && he(e);
            var n = ie.attrHandle[t.toLowerCase()],
                a = n && A.call(ie.attrHandle, t.toLowerCase()) ? n(e, t, !fe) : void 0;
            return void 0 === a ? oe.attributes || !fe ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t = [], n = 0, a = 0, o;
            if (ue = !oe.detectDuplicates, ce = !oe.sortStable && e.slice(0), e.sort(D), ue) {
                for (; o = e[a++];) o === e[a] && (n = t.push(a));
                for (; n--;) e.splice(t[n], 1)
            }
            return ce = null, e
        }, se = t.getText = function (e) {
            var t = "", n = 0, a = e.nodeType, o;
            if (!a) for (; o = e[n++];) t += se(o); else if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) t += se(e)
            } else if (3 === a || 4 === a) return e.nodeValue;
            return t
        }, ie = t.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t = !e[6] && e[2], n;
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && $.test(t) && (n = re(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, a) {
                    return function (o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && -1 < i.indexOf(a) : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? -1 < (" " + i.replace(R, " ") + " ").indexOf(a) : "|=" === n && (i === a || i.slice(0, a.length + 1) === a + "-"))
                    }
                }, CHILD: function (e, t, n, a, o) {
                    var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), r = "of-type" === t;
                    return 1 === a && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, d) {
                        var l = i == s ? "previousSibling" : "nextSibling", p = t.parentNode,
                            c = r && t.nodeName.toLowerCase(), u = !d && !r, h = !1, m, g, f, y, x, b;
                        if (p) {
                            if (i) {
                                for (; l;) {
                                    for (y = t; y = y[l];) if (r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) return !1;
                                    b = l = "only" === e && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [s ? p.firstChild : p.lastChild], s && u) {
                                for (y = p, f = y[T] || (y[T] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), m = g[e] || [], x = m[0] === C && m[1], h = x && m[2], y = x && p.childNodes[x]; y = ++x && y && y[l] || (h = x = 0) || b.pop();) if (1 === y.nodeType && ++h && y === t) {
                                    g[e] = [C, x, h];
                                    break
                                }
                            } else if (u && (y = t, f = y[T] || (y[T] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), m = g[e] || [], x = m[0] === C && m[1], h = x), !1 === h) for (; (y = ++x && y && y[l] || (h = x = 0) || b.pop()) && !((r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) && ++h && (u && (f = y[T] || (y[T] = {}), g = f[y.uniqueID] || (f[y.uniqueID] = {}), g[e] = [C, h]), y === t));) ;
                            return h -= o, h === a || 0 == h % a && 0 <= h / a
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var o = ie.pseudos[e] || ie.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e), i;
                    return o[T] ? o(n) : 1 < o.length ? (i = [e, e, "", n], ie.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) {
                        for (var a = o(e, n), s = a.length, i; s--;) i = F(e, a[s]), e[i] = !(t[i] = a[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: a(function (e) {
                    var t = [], n = [], o = de(e.replace(B, "$1"));
                    return o[T] ? a(function (e, t, n, a) {
                        for (var s = o(e, null, a, []), r = e.length, i; r--;) (i = s[r]) && (e[r] = !(t[r] = i))
                    }) : function (e, a, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }), has: a(function (e) {
                    return function (n) {
                        return 0 < t(e, n).length
                    }
                }), contains: a(function (e) {
                    return e = e.replace(ee, te), function (t) {
                        return -1 < (t.textContent || t.innerText || se(t)).indexOf(e)
                    }
                }), lang: a(function (e) {
                    return U.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(), function (t) {
                        var n;
                        do if (n = fe ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === ge
                }, focus: function (e) {
                    return e === me.activeElement && (!me.hasFocus || me.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (6 > e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !ie.pseudos.empty(e)
                }, header: function (e) {
                    return G.test(e.nodeName)
                }, input: function (e) {
                    return Y.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: p(function () {
                    return [0]
                }), last: p(function (e, t) {
                    return [t - 1]
                }), eq: p(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: p(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: p(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: p(function (e, t, n) {
                    for (var a = 0 > n ? n + t : n; 0 <= --a;) e.push(a);
                    return e
                }), gt: p(function (e, t, n) {
                    for (var a = 0 > n ? n + t : n; ++a < t;) e.push(a);
                    return e
                })
            }
        }, ie.pseudos.nth = ie.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) ie.pseudos[ae] = d(ae);
        for (ae in{submit: !0, reset: !0}) ie.pseudos[ae] = l(ae);
        return u.prototype = ie.filters = ie.pseudos, ie.setFilters = new u, re = t.tokenize = function (e, n) {
            var a = S[e + " "], o, i, s, r, d, l, p;
            if (a) return n ? 0 : a.slice(0);
            for (d = e, l = [], p = ie.preFilter; d;) {
                for (r in(!o || (i = _.exec(d))) && (i && (d = d.slice(i[0].length) || d), l.push(s = [])), o = !1, (i = X.exec(d)) && (o = i.shift(), s.push({
                    value: o,
                    type: i[0].replace(B, " ")
                }), d = d.slice(o.length)), ie.filter) (i = V[r].exec(d)) && (!p[r] || (i = p[r](i))) && (o = i.shift(), s.push({
                    value: o,
                    type: r,
                    matches: i
                }), d = d.slice(o.length));
                if (!o) break
            }
            return n ? d.length : d ? t.error(e) : S(e, l).slice(0)
        }, de = t.compile = function (e, t) {
            var n = [], a = [], o = j[e + " "], s;
            if (!o) {
                for (t || (t = re(e)), s = t.length; s--;) o = b(t[s]), o[T] ? n.push(o) : a.push(o);
                o = j(e, v(a, n)), o.selector = e
            }
            return o
        }, le = t.select = function (e, t, n, a) {
            var o = "function" == typeof e && e, s = !a && re(e = o.selector || e), r, i, d, l, p;
            if (n = n || [], 1 === s.length) {
                if (i = s[0] = s[0].slice(0), 2 < i.length && "ID" === (d = i[0]).type && oe.getById && 9 === t.nodeType && fe && ie.relative[i[1].type]) {
                    if (t = (ie.find.ID(d.matches[0].replace(ee, te), t) || [])[0], !t) return n;
                    o && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : i.length; r-- && (d = i[r], !ie.relative[l = d.type]);) if ((p = ie.find[l]) && (a = p(d.matches[0].replace(ee, te), K.test(i[0].type) && c(t.parentNode) || t))) {
                    if (i.splice(r, 1), e = a.length && h(i), !e) return O.apply(n, a), n;
                    break
                }
            }
            return (o || de(e, s))(a, t, !fe, n, !t || K.test(e) && c(t.parentNode) || t), n
        }, oe.sortStable = T.split("").sort(D).join("") === T, oe.detectDuplicates = !!ue, he(), oe.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(me.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), oe.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(I, function (e, t, n) {
            var a;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }), t
    }(e);
    ie.find = pe, ie.expr = pe.selectors, ie.expr[":"] = ie.expr.pseudos, ie.uniqueSort = ie.unique = pe.uniqueSort, ie.text = pe.getText, ie.isXMLDoc = pe.isXML, ie.contains = pe.contains;
    var ce = function (e, t, n) {
        for (var a = []; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (void 0 !== n && ie(e).is(n)) break;
            a.push(e)
        }
        return a
    }, ue = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, he = ie.expr.match.needsContext, me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ge = /^.[^:#\[\.,]*$/;
    ie.filter = function (e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? ie.find.matchesSelector(a, e) ? [a] : [] : ie.find.matches(e, ie.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function (e) {
            var t = this.length, n = [], a = this, o;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
                for (o = 0; o < t; o++) if (ie.contains(a[o], this)) return !0
            }));
            for (o = 0; o < t; o++) ie.find(e, a[o], n);
            return n = this.pushStack(1 < t ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(a(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(a(this, e || [], !0))
        }, is: function (e) {
            return !!a(this, "string" == typeof e && he.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = ie.fn.init = function (e, t, n) {
        var a, o;
        if (!e) return this;
        if (n = n || xe, "string" == typeof e) {
            if (a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : fe.exec(e), a && (a[1] || !t)) {
                if (a[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), me.test(a[1]) && ie.isPlainObject(t)) for (a in t) ie.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return o = G.getElementById(a[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
            }
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 === n.ready ? e(ie) : n.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
    }, xe;
    ye.prototype = ie.fn, xe = ie(G);
    var be = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
    ie.fn.extend({
        has: function (e) {
            var t = ie(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (ie.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n = 0, a = this.length, o = [], i = he.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0, s; n < a; n++) for (s = this[n]; s && s !== t; s = s.parentNode) if (11 > s.nodeType && (i ? -1 < i.index(s) : 1 === s.nodeType && ie.find.matchesSelector(s, e))) {
                o.push(s);
                break
            }
            return this.pushStack(1 < o.length ? ie.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? Z.call(ie(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(ie.uniqueSort(ie.merge(this.get(), ie(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ce(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ce(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return ce(e, "nextSibling")
        }, prevAll: function (e) {
            return ce(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ce(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ce(e, "previousSibling", n)
        }, siblings: function (e) {
            return ue((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ue(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || ie.merge([], e.childNodes)
        }
    }, function (e, t) {
        ie.fn[e] = function (n, a) {
            var o = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (o = ie.filter(a, o)), 1 < this.length && (!ve[e] && ie.uniqueSort(o), be.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Te = /\S+/g;
    ie.Callbacks = function (e) {
        e = "string" == typeof e ? i(e) : ie.extend({}, e);
        var t = [], n = [], a = -1, o = function () {
            for (p = e.once, l = r = !0; n.length; a = -1) for (d = n.shift(); ++a < t.length;) !1 === t[a].apply(d[0], d[1]) && e.stopOnFalse && (a = t.length, d = !1);
            e.memory || (d = !1), r = !1, p && (d ? t = [] : t = "")
        }, s = {
            add: function () {
                return t && (d && !r && (a = t.length - 1, n.push(d)), function n(a) {
                    ie.each(a, function (a, o) {
                        ie.isFunction(o) ? (!e.unique || !s.has(o)) && t.push(o) : o && o.length && "string" !== ie.type(o) && n(o)
                    })
                }(arguments), d && !r && o()), this
            }, remove: function () {
                return ie.each(arguments, function (e, n) {
                    for (var o; -1 < (o = ie.inArray(n, t, o));) t.splice(o, 1), o <= a && a--
                }), this
            }, has: function (e) {
                return e ? -1 < ie.inArray(e, t) : 0 < t.length
            }, empty: function () {
                return t && (t = []), this
            }, disable: function () {
                return p = n = [], t = d = "", this
            }, disabled: function () {
                return !t
            }, lock: function () {
                return p = n = [], d || (t = d = ""), this
            }, locked: function () {
                return !!p
            }, fireWith: function (e, t) {
                return p || (t = t || [], t = [e, t.slice ? t.slice() : t], n.push(t), !r && o()), this
            }, fire: function () {
                return s.fireWith(this, arguments), this
            }, fired: function () {
                return !!l
            }
        }, r, d, l, p;
        return s
    }, ie.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
                n = "pending", a = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ie.Deferred(function (n) {
                            ie.each(t, function (t, i) {
                                var s = ie.isFunction(e[t]) && e[t];
                                o[i[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === a ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null == e ? a : ie.extend(e, a)
                    }
                }, o = {};
            return a.pipe = a.then, ie.each(t, function (e, i) {
                var s = i[2], r = i[3];
                a[i[1]] = s.add, r && s.add(function () {
                    n = r
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
                    return o[i[0] + "With"](this === o ? a : this, arguments), this
                }, o[i[0] + "With"] = s.fireWith
            }), a.promise(o), e && e.call(o, o), o
        }, when: function (e) {
            var t = 0, n = Q.call(arguments), a = n.length, o = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                s = 1 === o ? e : ie.Deferred(), i = function (e, t, n) {
                    return function (a) {
                        t[e] = this, n[e] = 1 < arguments.length ? Q.call(arguments) : a, n === r ? s.notifyWith(t, n) : !--o && s.resolveWith(t, n)
                    }
                }, r, d, l;
            if (1 < a) for (r = Array(a), d = Array(a), l = Array(a); t < a; t++) n[t] && ie.isFunction(n[t].promise) ? n[t].promise().progress(i(t, d, r)).done(i(t, l, n)).fail(s.reject) : --o;
            return o || s.resolveWith(l, n), s.promise()
        }
    });
    var we;
    ie.fn.ready = function (e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ie.readyWait++ : ie.ready(!0)
        }, ready: function (e) {
            (!0 === e ? !--ie.readyWait : !ie.isReady) && (ie.isReady = !0, !0 !== e && 0 < --ie.readyWait || (we.resolveWith(G, [ie]), ie.fn.triggerHandler && (ie(G).triggerHandler("ready"), ie(G).off("ready"))))
        }
    }), ie.ready.promise = function (t) {
        return we || (we = ie.Deferred(), "complete" !== G.readyState && ("loading" === G.readyState || G.documentElement.doScroll) ? (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s)) : e.setTimeout(ie.ready)), we.promise(t)
    }, ie.ready.promise();
    var Ce = function (e, t, n, a, o, s, r) {
        var d = 0, i = e.length, l = null == n;
        if ("object" === ie.type(n)) for (d in o = !0, n) Ce(e, t, d, n[d], !0, s, r); else if (void 0 !== a && (o = !0, ie.isFunction(a) || (r = !0), l && (r ? (t.call(e, a), t = null) : (l = t, t = function (e, t, n) {
            return l.call(ie(e), n)
        })), t)) for (; d < i; d++) t(e[d], n, r ? a : a.call(e[d], d, t(e[d], n)));
        return o ? e : l ? t.call(e) : i ? t(e[0], n) : s
    }, Ne = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    r.uid = 1, r.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        }, cache: function (e) {
            if (!Ne(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var a = this.cache(e), o;
            if ("string" == typeof t) a[t] = n; else for (o in t) a[o] = t[o];
            return a
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var a;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (a = this.get(e, t), void 0 === a ? this.get(e, ie.camelCase(t)) : a) : (this.set(e, t, n), void 0 === n ? t : n)
        }, remove: function (e, t) {
            var n = e[this.expando], a, o, i;
            if (void 0 !== n) {
                if (void 0 === t) this.register(e); else for (ie.isArray(t) ? o = t.concat(t.map(ie.camelCase)) : (i = ie.camelCase(t), (t in n) ? o = [t, i] : (o = i, o = (o in n) ? [o] : o.match(Te) || [])), a = o.length; a--;) delete n[o[a]];
                (void 0 === t || ie.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ie.isEmptyObject(t)
        }
    };
    var ke = new r, Se = new r, je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, De = /[A-Z]/g;
    ie.extend({
        hasData: function (e) {
            return Se.hasData(e) || ke.hasData(e)
        }, data: function (e, t, n) {
            return Se.access(e, t, n)
        }, removeData: function (e, t) {
            Se.remove(e, t)
        }, _data: function (e, t, n) {
            return ke.access(e, t, n)
        }, _removeData: function (e, t) {
            ke.remove(e, t)
        }
    }), ie.fn.extend({
        data: function (e, t) {
            var n = this[0], a = n && n.attributes, o, i, s;
            if (void 0 === e) {
                if (this.length && (s = Se.get(n), 1 === n.nodeType && !ke.get(n, "hasDataAttrs"))) {
                    for (o = a.length; o--;) a[o] && (i = a[o].name, 0 === i.indexOf("data-") && (i = ie.camelCase(i.slice(5)), d(n, i, s[i])));
                    ke.set(n, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                Se.set(this, e)
            }) : Ce(this, function (t) {
                var a, o;
                return n && void 0 === t ? (a = Se.get(n, e) || Se.get(n, e.replace(De, "-$&").toLowerCase()), void 0 !== a) ? a : (o = ie.camelCase(e), a = Se.get(n, o), void 0 !== a) ? a : (a = d(n, o, void 0), void 0 === a ? void 0 : a) : void(o = ie.camelCase(e), this.each(function () {
                    var n = Se.get(this, o);
                    Se.set(this, o, t), -1 < e.indexOf("-") && void 0 !== n && Se.set(this, e, t)
                }))
            }, null, t, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Se.remove(this, e)
            })
        }
    }), ie.extend({
        queue: function (e, t, n) {
            var a;
            if (e) return t = (t || "fx") + "queue", a = ke.get(e, t), n && (!a || ie.isArray(n) ? a = ke.access(e, t, ie.makeArray(n)) : a.push(n)), a || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ie.queue(e, t), a = n.length, o = n.shift(), i = ie._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), a--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                ie.dequeue(e, t)
            }, i)), !a && i && i.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ke.get(e, n) || ke.access(e, n, {
                empty: ie.Callbacks("once memory").add(function () {
                    ke.remove(e, [t + "queue", n])
                })
            })
        }
    }), ie.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ie.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n = 1, a = ie.Deferred(), o = this, s = this.length, i = function () {
                --n || a.resolveWith(o, [o])
            }, r;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) r = ke.get(o[s], e + "queueHooks"), r && r.empty && (n++, r.empty.add(i));
            return i(), a.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ae = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"], qe = function (e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        }, He = /^(?:checkbox|radio)$/i, Oe = /<([\w:-]+)/, Pe = /^$|\/(?:java|ecma)script/i, Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
    var Ie = /<|&#?\w+;/;
    (function () {
        var e = G.createDocumentFragment(), t = e.appendChild(G.createElement("div")), n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    })();
    var Me = /^key/, We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Re = /^([^.]*)(?:\.(.+)|)/;
    ie.event = {
        global: {},
        add: function (n, e, a, o, i) {
            var s = ke.get(n), r, d, l, p, c, t, u, h, m, g, f;
            if (s) for (a.handler && (r = a, a = r.handler, i = r.selector), a.guid || (a.guid = ie.guid++), (p = s.events) || (p = s.events = {}), (d = s.handle) || (d = s.handle = function (t) {
                return "undefined" != typeof ie && ie.event.triggered !== t.type ? ie.event.dispatch.apply(n, arguments) : void 0
            }), e = (e || "").match(Te) || [""], c = e.length; c--;) (l = Re.exec(e[c]) || [], m = f = l[1], g = (l[2] || "").split(".").sort(), !!m) && (u = ie.event.special[m] || {}, m = (i ? u.delegateType : u.bindType) || m, u = ie.event.special[m] || {}, t = ie.extend({
                type: m,
                origType: f,
                data: o,
                handler: a,
                guid: a.guid,
                selector: i,
                needsContext: i && ie.expr.match.needsContext.test(i),
                namespace: g.join(".")
            }, r), (h = p[m]) || (h = p[m] = [], h.delegateCount = 0, (!u.setup || !1 === u.setup.call(n, o, g, d)) && n.addEventListener && n.addEventListener(m, d)), u.add && (u.add.call(n, t), !t.handler.guid && (t.handler.guid = a.guid)), i ? h.splice(h.delegateCount++, 0, t) : h.push(t), ie.event.global[m] = !0)
        },
        remove: function (e, n, a, o, i) {
            var s = ke.hasData(e) && ke.get(e), r, d, l, p, c, t, u, h, m, g, f;
            if (s && (p = s.events)) {
                for (n = (n || "").match(Te) || [""], c = n.length; c--;) {
                    if (l = Re.exec(n[c]) || [], m = f = l[1], g = (l[2] || "").split(".").sort(), !m) {
                        for (m in p) ie.event.remove(e, m + n[c], a, o, !0);
                        continue
                    }
                    for (u = ie.event.special[m] || {}, m = (o ? u.delegateType : u.bindType) || m, h = p[m] || [], l = l[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = r = h.length; r--;) t = h[r], (i || f === t.origType) && (!a || a.guid === t.guid) && (!l || l.test(t.namespace)) && (!o || o === t.selector || "**" === o && t.selector) && (h.splice(r, 1), t.selector && h.delegateCount--, u.remove && u.remove.call(e, t));
                    d && !h.length && ((!u.teardown || !1 === u.teardown.call(e, g, s.handle)) && ie.removeEvent(e, m, s.handle), delete p[m])
                }
                ie.isEmptyObject(p) && ke.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = ie.event.fix(e);
            var t = [], n = Q.call(arguments), a = (ke.get(this, "events") || {})[e.type] || [],
                o = ie.event.special[e.type] || {}, s, i, r, d, l;
            if (n[0] = e, e.delegateTarget = this, !(o.preDispatch && !1 === o.preDispatch.call(this, e))) {
                for (t = ie.event.handlers.call(this, e, a), s = 0; (d = t[s++]) && !e.isPropagationStopped();) for (e.currentTarget = d.elem, i = 0; (l = d.handlers[i++]) && !e.isImmediatePropagationStopped();) (!e.rnamespace || e.rnamespace.test(l.namespace)) && (e.handleObj = l, e.data = l.data, r = ((ie.event.special[l.origType] || {}).handle || l.handler).apply(d.elem, n), void 0 !== r && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n = [], a = t.delegateCount, o = e.target, s, i, r, d;
            if (a && o.nodeType && ("click" !== e.type || isNaN(e.button) || 1 > e.button)) for (; o !== this; o = o.parentNode || this) if (1 === o.nodeType && (!0 !== o.disabled || "click" !== e.type)) {
                for (i = [], s = 0; s < a; s++) d = t[s], r = d.selector + " ", void 0 === i[r] && (i[r] = d.needsContext ? -1 < ie(r, this).index(o) : ie.find(r, this, null, [o]).length), i[r] && i.push(d);
                i.length && n.push({elem: o, handlers: i})
            }
            return a < t.length && n.push({elem: this, handlers: t.slice(a)}), n
        },
        props: ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "detail", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "view", "which"],
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (e, t) {
                return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e
            }
        },
        mouseHooks: {
            props: ["button", "buttons", "clientX", "clientY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"],
            filter: function (e, t) {
                var n = t.button, a, o, i;
                return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || G, o = a.documentElement, i = a.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), e.which || void 0 === n || (e.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[ie.expando]) return e;
            var t = e.type, n = e, a = this.fixHooks[t], o, i, s;
            for (a || (this.fixHooks[t] = a = We.test(t) ? this.mouseHooks : Me.test(t) ? this.keyHooks : {}), s = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(n), o = s.length; o--;) i = s[o], e[i] = n[i];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, n) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== g() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === g() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && ie.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return ie.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ie.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ie.Event = function (e, t) {
        return this instanceof ie.Event ? void(e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : m) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), this[ie.expando] = !0) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        constructor: ie.Event,
        isDefaultPrevented: m,
        isPropagationStopped: m,
        isImmediatePropagationStopped: m,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        ie.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n = this, a = e.relatedTarget, o = e.handleObj, i;
                return a && (a === n || ie.contains(n, a)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ie.fn.extend({
        on: function (e, t, n, a) {
            return f(this, e, t, n, a)
        }, one: function (e, t, n, a) {
            return f(this, e, t, n, a, 1)
        }, off: function (e, t, n) {
            var a, o;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, ie(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = m), this.each(function () {
                ie.event.remove(this, e, n, t)
            })
        }
    });
    var Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, _e = /<script|<style|<link/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i, ze = /^true\/(.*)/, $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ie.extend({
        htmlPrefilter: function (e) {
            return e.replace(Be, "<$1></$2>")
        }, clone: function (e, t, n) {
            var a = e.cloneNode(!0), o = ie.contains(e.ownerDocument, e), s, i, r, d;
            if (!ae.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !ie.isXMLDoc(e)) for (d = p(a), r = p(e), (s = 0, i = r.length); s < i; s++) T(r[s], d[s]);
            if (t) if (n) for (r = r || p(e), d = d || p(a), (s = 0, i = r.length); s < i; s++) v(r[s], d[s]); else v(e, a);
            return d = p(a, "script"), 0 < d.length && c(d, !o && p(e, "script")), a
        }, cleanData: function (e) {
            for (var t = ie.event.special, n = 0, a, o, i; void 0 !== (o = e[n]); n++) if (Ne(o)) {
                if (a = o[ke.expando]) {
                    if (a.events) for (i in a.events) t[i] ? ie.event.remove(o, i) : ie.removeEvent(o, i, a.handle);
                    o[ke.expando] = void 0
                }
                o[Se.expando] && (o[Se.expando] = void 0)
            }
        }
    }), ie.fn.extend({
        domManip: w, detach: function (e) {
            return C(this, e, !0)
        }, remove: function (e) {
            return C(this, e)
        }, text: function (e) {
            return Ce(this, function (e) {
                return void 0 === e ? ie.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return w(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return w(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return w(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return w(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e = 0, t; null != (t = this[e]); e++) 1 === t.nodeType && (ie.cleanData(p(t, !1)), t.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ie.clone(this, e, t)
            })
        }, html: function (e) {
            return Ce(this, function (e) {
                var t = this[0] || {}, n = 0, a = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !_e.test(e) && !Fe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ie.htmlPrefilter(e);
                    try {
                        for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (t) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return w(this, arguments, function (t) {
                var n = this.parentNode;
                0 > ie.inArray(this, e) && (ie.cleanData(p(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ie.fn[e] = function (e) {
            for (var n = [], a = ie(e), o = a.length - 1, s = 0, i; s <= o; s++) i = s == o ? this : this.clone(!0), ie(a[s])[t](i), K.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ue = {HTML: "block", BODY: "block"}, Ve = /^margin/, Ye = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        Ge = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, Qe = function (e, t, n, a) {
            var o = {}, i, s;
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            for (s in i = n.apply(e, a || []), t) e.style[s] = o[s];
            return i
        }, Je = G.documentElement, Ke;
    (function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(n);
            var t = e.getComputedStyle(a);
            o = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", s = "4px" === t.marginRight, Je.removeChild(n)
        }

        var n = G.createElement("div"), a = G.createElement("div"), o, i, s, r;
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === a.style.backgroundClip, n.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", n.appendChild(a), ie.extend(ae, {
            pixelPosition: function () {
                return t(), o
            }, boxSizingReliable: function () {
                return null == i && t(), i
            }, pixelMarginRight: function () {
                return null == i && t(), s
            }, reliableMarginLeft: function () {
                return null == i && t(), r
            }, reliableMarginRight: function () {
                var t = a.appendChild(G.createElement("div")), o;
                return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", Je.appendChild(n), o = !parseFloat(e.getComputedStyle(t).marginRight), Je.removeChild(n), a.removeChild(t), o
            }
        }))
    })();
    var Ze = /^(none|table(?!-c[ea]).+)/, et = {position: "absolute", visibility: "hidden", display: "block"},
        tt = {letterSpacing: "0", fontWeight: "400"}, nt = ["Webkit", "O", "Moz", "ms"],
        at = G.createElement("div").style;
    ie.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o = ie.camelCase(t), i = e.style, s, r, d;
                if (t = ie.cssProps[o] || (ie.cssProps[o] = D(o) || o), d = ie.cssHooks[t] || ie.cssHooks[o], void 0 !== n) {
                    if (r = typeof n, "string" === r && (s = Ae.exec(n)) && s[1] && (n = l(e, t, s), r = "number"), null == n || n !== n) return;
                    "number" === r && (n += s && s[3] || (ie.cssNumber[o] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (i[t] = "inherit"), d && "set" in d && void 0 === (n = d.set(e, n, a)) || (i[t] = n)
                } else return d && "get" in d && void 0 !== (s = d.get(e, !1, a)) ? s : i[t]
            }
        },
        css: function (e, t, n, a) {
            var o = ie.camelCase(t), i, s, r;
            return t = ie.cssProps[o] || (ie.cssProps[o] = D(o) || o), r = ie.cssHooks[t] || ie.cssHooks[o], r && "get" in r && (i = r.get(e, !0, n)), void 0 === i && (i = S(e, t, a)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (s = parseFloat(i), !0 === n || isFinite(s) ? s || 0 : i) : i
        }
    }), ie.each(["height", "width"], function (e, t) {
        ie.cssHooks[t] = {
            get: function (e, n, a) {
                if (n) return Ze.test(ie.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function () {
                    return L(e, t, a)
                }) : L(e, t, a)
            }, set: function (e, n, a) {
                var o = a && Ge(e), i = a && A(e, t, a, "border-box" === ie.css(e, "boxSizing", !1, o), o), s;
                return i && (s = Ae.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = ie.css(e, t)), E(e, n, i)
            }
        }
    }), ie.cssHooks.marginLeft = j(ae.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ie.cssHooks.marginRight = j(ae.reliableMarginRight, function (e, t) {
        if (t) return Qe(e, {display: "inline-block"}, S, [e, "marginRight"])
    }), ie.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ie.cssHooks[e + t] = {
            expand: function (n) {
                for (var a = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++) o[e + Le[a] + t] = i[a] || i[a - 2] || i[0];
                return o
            }
        }, Ve.test(e) || (ie.cssHooks[e + t].set = E)
    }), ie.fn.extend({
        css: function (e, t) {
            return Ce(this, function (e, t, n) {
                var a = {}, o = 0, i, s;
                if (ie.isArray(t)) {
                    for (i = Ge(e), s = t.length; o < s; o++) a[t[o]] = ie.css(e, t[o], !1, i);
                    return a
                }
                return void 0 === n ? ie.css(e, t) : ie.style(e, t, n)
            }, e, t, 1 < arguments.length)
        }, show: function () {
            return q(this, !0)
        }, hide: function () {
            return q(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = H, H.prototype = {
        constructor: H, init: function (e, t, n, a, o, i) {
            this.elem = e, this.prop = n, this.easing = o || ie.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (ie.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        }, run: function (e) {
            var t = H.propHooks[this.prop], n;
            return this.pos = this.options.duration ? n = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, ie.fx = H.prototype.init, ie.fx.step = {};
    var ot = /^(?:toggle|show|hide)$/, it = /queueHooks$/, st, rt;
    ie.Animation = ie.extend(M, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return l(n.elem, e, Ae.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Te);
            for (var n = 0, a = e.length, o; n < a; n++) o = e[n], M.tweeners[o] = M.tweeners[o] || [], M.tweeners[o].unshift(t)
        }, prefilters: [function (e, t, n) {
            var a = this, o = {}, i = e.style, s = e.nodeType && qe(e), r = ke.get(e, "fxshow"), d, l, p, c, u, h, m, g;
            for (d in n.queue || (u = ie._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function () {
                u.unqueued || h()
            }), u.unqueued++, a.always(function () {
                a.always(function () {
                    u.unqueued--, ie.queue(e, "fx").length || u.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [i.overflow, i.overflowX, i.overflowY], m = ie.css(e, "display"), g = "none" === m ? ke.get(e, "olddisplay") || k(e.nodeName) : m, "inline" === g && "none" === ie.css(e, "float") && (i.display = "inline-block")), n.overflow && (i.overflow = "hidden", a.always(function () {
                i.overflow = n.overflow[0], i.overflowX = n.overflow[1], i.overflowY = n.overflow[2]
            })), t) if (l = t[d], ot.exec(l)) {
                if (delete t[d], p = p || "toggle" === l, l === (s ? "hide" : "show")) if ("show" === l && r && void 0 !== r[d]) s = !0; else continue;
                o[d] = r && r[d] || ie.style(e, d)
            } else m = void 0;
            if (!ie.isEmptyObject(o)) for (d in r ? "hidden" in r && (s = r.hidden) : r = ke.access(e, "fxshow", {}), p && (r.hidden = !s), s ? ie(e).show() : a.done(function () {
                ie(e).hide()
            }), a.done(function () {
                for (var t in ke.remove(e, "fxshow"), o) ie.style(e, t, o[t])
            }), o) c = F(s ? r[d] : 0, d, a), d in r || (r[d] = c.start, s && (c.end = c.start, c.start = "width" === d || "height" === d ? 1 : 0)); else "inline" === ("none" === m ? k(e.nodeName) : m) && (i.display = m)
        }], prefilter: function (e, t) {
            t ? M.prefilters.unshift(e) : M.prefilters.push(e)
        }
    }), ie.speed = function (e, t, n) {
        var a = e && "object" == typeof e ? ie.extend({}, e) : {
            complete: n || !n && t || ie.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ie.isFunction(t) && t
        };
        return a.duration = ie.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in ie.fx.speeds ? ie.fx.speeds[a.duration] : ie.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = "fx"), a.old = a.complete, a.complete = function () {
            ie.isFunction(a.old) && a.old.call(this), a.queue && ie.dequeue(this, a.queue)
        }, a
    }, ie.fn.extend({
        fadeTo: function (e, t, n, a) {
            return this.filter(qe).css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
        }, animate: function (e, t, n, a) {
            var o = ie.isEmptyObject(e), i = ie.speed(t, n, a), s = function () {
                var t = M(this, ie.extend({}, e), i);
                (o || ke.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
        }, stop: function (e, t, n) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", i = ie.timers, s = ke.get(this);
                if (o) s[o] && s[o].stop && a(s[o]); else for (o in s) s[o] && s[o].stop && it.test(o) && a(s[o]);
                for (o = i.length; o--;) i[o].elem === this && (null == e || i[o].queue === e) && (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                (t || !n) && ie.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t = ke.get(this), n = t[e + "queue"], a = t[e + "queueHooks"], o = ie.timers, i = n ? n.length : 0,
                    s;
                for (t.finish = !0, ie.queue(this, e, []), a && a.stop && a.stop.call(this, !0), s = o.length; s--;) o[s].elem === this && o[s].queue === e && (o[s].anim.stop(!0), o.splice(s, 1));
                for (s = 0; s < i; s++) n[s] && n[s].finish && n[s].finish.call(this);
                delete t.finish
            })
        }
    }), ie.each(["toggle", "show", "hide"], function (e, t) {
        var n = ie.fn[t];
        ie.fn[t] = function (e, a, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, a, o)
        }
    }), ie.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ie.fn[e] = function (e, n, a) {
            return this.animate(t, e, n, a)
        }
    }), ie.timers = [], ie.fx.tick = function () {
        var e = 0, t = ie.timers, n;
        for (st = ie.now(); e < t.length; e++) n = t[e], n() || t[e] !== n || t.splice(e--, 1);
        t.length || ie.fx.stop(), st = void 0
    }, ie.fx.timer = function (e) {
        ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
    }, ie.fx.interval = 13, ie.fx.start = function () {
        rt || (rt = e.setInterval(ie.fx.tick, ie.fx.interval))
    }, ie.fx.stop = function () {
        e.clearInterval(rt), rt = null
    }, ie.fx.speeds = {slow: 600, fast: 200, _default: 400}, ie.fn.delay = function (t, n) {
        return t = ie.fx ? ie.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, a) {
            var o = e.setTimeout(n, t);
            a.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, function () {
        var e = G.createElement("input"), t = G.createElement("select"), n = t.appendChild(G.createElement("option"));
        e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = n.selected, t.disabled = !0, ae.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ae.radioValue = "t" === e.value
    }();
    var dt = ie.expr.attrHandle, lt;
    ie.fn.extend({
        attr: function (e, t) {
            return Ce(this, ie.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function (e, t, n) {
            var a = e.nodeType, o, i;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ie.prop(e, t, n) : (1 === a && ie.isXMLDoc(e) || (t = t.toLowerCase(), i = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n) ? null === n ? void ie.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ie.find.attr(e, t), null == o ? void 0 : o)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ae.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n = 0, a = t && t.match(Te), o, i;
            if (a && 1 === e.nodeType) for (; o = a[n++];) i = ie.propFix[o] || o, ie.expr.match.bool.test(o) && (e[i] = !1), e.removeAttribute(o)
        }
    }), lt = {
        set: function (e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = dt[t] || ie.find.attr;
        dt[t] = function (e, t, a) {
            var o, i;
            return a || (i = dt[t], dt[t] = o, o = null == n(e, t, a) ? null : t.toLowerCase(), dt[t] = i), o
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i, ct = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function (e, t) {
            return Ce(this, ie.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[ie.propFix[e] || e]
            })
        }
    }), ie.extend({
        prop: function (e, t, n) {
            var a = e.nodeType, o, i;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ie.isXMLDoc(e) || (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t] : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), ae.optSelected || (ie.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ie.propFix[this.toLowerCase()] = this
    });
    var ut = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function (e) {
            var t = 0, n, a, o, i, s, r, d;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e) for (n = e.match(Te) || []; a = this[t++];) if (i = W(a), o = 1 === a.nodeType && (" " + i + " ").replace(ut, " "), o) {
                for (r = 0; s = n[r++];) 0 > o.indexOf(" " + s + " ") && (o += s + " ");
                d = ie.trim(o), i !== d && a.setAttribute("class", d)
            }
            return this
        }, removeClass: function (e) {
            var t = 0, n, a, o, i, s, r, d;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (n = e.match(Te) || []; a = this[t++];) if (i = W(a), o = 1 === a.nodeType && (" " + i + " ").replace(ut, " "), o) {
                for (r = 0; s = n[r++];) for (; -1 < o.indexOf(" " + s + " ");) o = o.replace(" " + s + " ", " ");
                d = ie.trim(o), i !== d && a.setAttribute("class", d)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" == n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function (n) {
                ie(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function () {
                var t, a, o, i;
                if ("string" == n) for (a = 0, o = ie(this), i = e.match(Te) || []; t = i[a++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (void 0 === e || "boolean" == n) && (t = W(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ke.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t = 0, n, a;
            for (n = " " + e + " "; a = this[t++];) if (1 === a.nodeType && -1 < (" " + W(a) + " ").replace(ut, " ").indexOf(n)) return !0;
            return !1
        }
    });
    var ht = /\r/g, mt = /[\x20\t\r\n\f]+/g;
    ie.fn.extend({
        val: function (e) {
            var t = this[0], n, a, o;
            return arguments.length ? (o = ie.isFunction(e), this.each(function (t) {
                var a;
                1 !== this.nodeType || (a = o ? e.call(this, t, ie(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ie.isArray(a) && (a = ie.map(a, function (e) {
                    return null == e ? "" : e + ""
                })), n = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], (!n || !("set" in n) || void 0 === n.set(this, a, "value")) && (this.value = a))
            })) : t ? (n = ie.valHooks[t.type] || ie.valHooks[t.nodeName.toLowerCase()], n && "get" in n && void 0 !== (a = n.get(t, "value"))) ? a : (a = t.value, "string" == typeof a ? a.replace(ht, "") : null == a ? "" : a) : void 0
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ie.find.attr(e, "value");
                    return null == t ? ie.trim(ie.text(e)).replace(mt, " ") : t
                }
            }, select: {
                get: function (e) {
                    for (var t = e.options, n = e.selectedIndex, a = "select-one" === e.type || 0 > n, o = a ? null : [], s = a ? n + 1 : t.length, r = 0 > n ? s : a ? n : 0, i, d; r < s; r++) if (d = t[r], (d.selected || r === n) && (ae.optDisabled ? !d.disabled : null === d.getAttribute("disabled")) && (!d.parentNode.disabled || !ie.nodeName(d.parentNode, "optgroup"))) {
                        if (i = ie(d).val(), a) return i;
                        o.push(i)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n = e.options, a = ie.makeArray(t), o = n.length, i, s; o--;) s = n[o], (s.selected = -1 < ie.inArray(ie.valHooks.option.get(s), a)) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function () {
        ie.valHooks[this] = {
            set: function (e, t) {
                if (ie.isArray(t)) return e.checked = -1 < ie.inArray(ie(e).val(), t)
            }
        }, ae.checkOn || (ie.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    ie.extend(ie.event, {
        trigger: function (t, n, a, o) {
            var s = [a || G], r = ne.call(t, "type") ? t.type : t,
                d = ne.call(t, "namespace") ? t.namespace.split(".") : [], l, i, p, c, u, h, m;
            if ((i = p = a = a || G, 3 !== a.nodeType && 8 !== a.nodeType) && !gt.test(r + ie.event.triggered) && (-1 < r.indexOf(".") && (d = r.split("."), r = d.shift(), d.sort()), u = 0 > r.indexOf(":") && "on" + r, t = t[ie.expando] ? t : new ie.Event(r, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : ie.makeArray(n, [t]), m = ie.event.special[r] || {}, o || !m.trigger || !1 !== m.trigger.apply(a, n))) {
                if (!o && !m.noBubble && !ie.isWindow(a)) {
                    for (c = m.delegateType || r, gt.test(c + r) || (i = i.parentNode); i; i = i.parentNode) s.push(i), p = i;
                    p === (a.ownerDocument || G) && s.push(p.defaultView || p.parentWindow || e)
                }
                for (l = 0; (i = s[l++]) && !t.isPropagationStopped();) t.type = 1 < l ? c : m.bindType || r, h = (ke.get(i, "events") || {})[t.type] && ke.get(i, "handle"), h && h.apply(i, n), h = u && i[u], h && h.apply && Ne(i) && (t.result = h.apply(i, n), !1 === t.result && t.preventDefault());
                return t.type = r, o || t.isDefaultPrevented() || m._default && !1 !== m._default.apply(s.pop(), n) || !Ne(a) || !u || !ie.isFunction(a[r]) || ie.isWindow(a) || (p = a[u], p && (a[u] = null), ie.event.triggered = r, a[r](), ie.event.triggered = void 0, p && (a[u] = p)), t.result
            }
        }, simulate: function (t, n, a) {
            var o = ie.extend(new ie.Event, a, {type: t, isSimulated: !0});
            ie.event.trigger(o, null, n)
        }
    }), ie.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ie.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ie.event.trigger(e, t, n, !0)
        }
    }), ie.each(["blur", "focus", "focusin", "focusout", "load", "resize", "scroll", "unload", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "error", "contextmenu"], function (e, t) {
        ie.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ae.focusin = "onfocusin" in e, ae.focusin || ie.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            ie.event.simulate(t, e.target, ie.event.fix(e))
        };
        ie.event.special[t] = {
            setup: function () {
                var a = this.ownerDocument || this, o = ke.access(a, t);
                o || a.addEventListener(e, n, !0), ke.access(a, t, (o || 0) + 1)
            }, teardown: function () {
                var a = this.ownerDocument || this, o = ke.access(a, t) - 1;
                o ? ke.access(a, t, o) : (a.removeEventListener(e, n, !0), ke.remove(a, t))
            }
        }
    });
    var ft = e.location, yt = ie.now(), xt = /\?/;
    ie.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, ie.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ie.error("Invalid XML: " + t), n
    };
    var bt = /#.*$/, vt = /([?&])_=[^&]*/, Tt = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ct = /^(?:GET|HEAD)$/, Nt = /^\/\//, kt = {},
        St = {}, jt = "*/".concat("*"), Dt = G.createElement("a");
    Dt.href = ft.href, ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: wt.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? _(_(e, ie.ajaxSettings), t) : _(ie.ajaxSettings, e)
        },
        ajaxPrefilter: R(kt),
        ajaxTransport: R(St),
        ajax: function (t, n) {
            function a(t, n, a, i) {
                var c = n, u, m, b, T, C;
                2 == h || (h = 2, v && e.clearTimeout(v), f = void 0, x = i || "", g.readyState = 0 < t ? 4 : 0, u = 200 <= t && 300 > t || 304 === t, a && (T = X(o, g, a)), T = z(o, T, g, u), u ? (o.ifModified && (C = g.getResponseHeader("Last-Modified"), C && (ie.lastModified[y] = C), C = g.getResponseHeader("etag"), C && (ie.etag[y] = C)), 204 === t || "HEAD" === o.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = T.state, m = T.data, b = T.error, u = !b)) : (b = c, (t || !c) && (c = "error", 0 > t && (t = 0))), g.status = t, g.statusText = (n || c) + "", u ? d.resolveWith(s, [m, c, g]) : d.rejectWith(s, [g, c, b]), g.statusCode(p), p = void 0, w && r.trigger(u ? "ajaxSuccess" : "ajaxError", [g, o, u ? m : b]), l.fireWith(s, [g, c]), w && (r.trigger("ajaxComplete", [g, o]), !--ie.active && ie.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o = ie.ajaxSetup({}, n), s = o.context || o,
                r = o.context && (s.nodeType || s.jquery) ? ie(s) : ie.event, d = ie.Deferred(),
                l = ie.Callbacks("once memory"), p = o.statusCode || {}, c = {}, u = {}, h = 0, m = "canceled", g = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 == h) {
                            if (!b) for (b = {}; t = Tt.exec(x);) b[t[1].toLowerCase()] = t[2];
                            t = b[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 == h ? x : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return h || (e = u[n] = u[n] || e, c[e] = t), this
                    }, overrideMimeType: function (e) {
                        return h || (o.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (2 > h) for (var t in e) p[t] = [p[t], e[t]]; else g.always(e[g.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || m;
                        return f && f.abort(t), a(0, t), this
                    }
                }, f, y, x, b, v, T, w, C;
            if (d.promise(g).complete = l.add, g.success = g.done, g.error = g.fail, o.url = ((t || o.url || ft.href) + "").replace(bt, "").replace(Nt, ft.protocol + "//"), o.type = n.method || n.type || o.method || o.type, o.dataTypes = ie.trim(o.dataType || "*").toLowerCase().match(Te) || [""], null == o.crossDomain) {
                T = G.createElement("a");
                try {
                    T.href = o.url, T.href = T.href, o.crossDomain = Dt.protocol + "//" + Dt.host != T.protocol + "//" + T.host
                } catch (t) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = ie.param(o.data, o.traditional)), B(kt, o, n, g), 2 == h) return g;
            for (C in w = ie.event && o.global, w && 0 == ie.active++ && ie.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Ct.test(o.type), y = o.url, o.hasContent || (o.data && (y = o.url += (xt.test(y) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (o.url = vt.test(y) ? y.replace(vt, "$1_=" + yt++) : y + (xt.test(y) ? "&" : "?") + "_=" + yt++)), o.ifModified && (ie.lastModified[y] && g.setRequestHeader("If-Modified-Since", ie.lastModified[y]), ie.etag[y] && g.setRequestHeader("If-None-Match", ie.etag[y])), (o.data && o.hasContent && !1 !== o.contentType || n.contentType) && g.setRequestHeader("Content-Type", o.contentType), g.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" === o.dataTypes[0] ? "" : ", " + jt + "; q=0.01") : o.accepts["*"]), o.headers) g.setRequestHeader(C, o.headers[C]);
            if (o.beforeSend && (!1 === o.beforeSend.call(s, g, o) || 2 == h)) return g.abort();
            for (C in m = "abort", {success: 1, error: 1, complete: 1}) g[C](o[C]);
            if (f = B(St, o, n, g), !f) a(-1, "No Transport"); else {
                if (g.readyState = 1, w && r.trigger("ajaxSend", [g, o]), 2 == h) return g;
                o.async && 0 < o.timeout && (v = e.setTimeout(function () {
                    g.abort("timeout")
                }, o.timeout));
                try {
                    h = 1, f.send(c, a)
                } catch (t) {
                    if (2 > h) a(-1, t); else throw t
                }
            }
            return g
        },
        getJSON: function (e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function (e, t) {
        ie[t] = function (e, n, a, o) {
            return ie.isFunction(n) && (o = o || a, a = n, n = void 0), ie.ajax(ie.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: a
            }, ie.isPlainObject(e) && e))
        }
    }), ie._evalUrl = function (e) {
        return ie.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, ie.fn.extend({
        wrapAll: function (e) {
            var t;
            return ie.isFunction(e) ? this.each(function (t) {
                ie(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return ie.isFunction(e) ? this.each(function (t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ie(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ie.isFunction(e);
            return this.each(function (n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function (e) {
        return !ie.expr.filters.visible(e)
    }, ie.expr.filters.visible = function (e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Et = /%20/g, At = /\[\]$/, Lt = /\r?\n/g, qt = /^(?:submit|button|image|reset|file)$/i,
        Ht = /^(?:input|select|textarea|keygen)/i;
    ie.param = function (e, t) {
        var n = [], a = function (e, t) {
            t = ie.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }, o;
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
            a(this.name, this.value)
        }); else for (o in e) $(o, e[o], t, a);
        return n.join("&").replace(Et, "+")
    }, ie.fn.extend({
        serialize: function () {
            return ie.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Ht.test(this.nodeName) && !qt.test(e) && (this.checked || !He.test(e))
            }).map(function (e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
                    return {name: t.name, value: e.replace(Lt, "\r\n")}
                }) : {name: t.name, value: n.replace(Lt, "\r\n")}
            }).get()
        }
    }), ie.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ot = {0: 200, 1223: 204}, Pt = ie.ajaxSettings.xhr();
    ae.cors = !!Pt && "withCredentials" in Pt, ae.ajax = Pt = !!Pt, ie.ajaxTransport(function (t) {
        var n, a;
        if (ae.cors || Pt && !t.crossDomain) return {
            send: function (o, s) {
                var r = t.xhr(), d;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (d in t.xhrFields) r[d] = t.xhrFields[d];
                for (d in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) r.setRequestHeader(d, o[d]);
                n = function (e) {
                    return function () {
                        n && (n = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" == typeof r.status ? s(r.status, r.statusText) : s(0, "error") : s(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = n(), a = r.onerror = n("error"), void 0 === r.onabort ? r.onreadystatechange = function () {
                    4 === r.readyState && e.setTimeout(function () {
                        n && a()
                    })
                } : r.onabort = a, n = n("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (t) {
                    if (n) throw t
                }
            }, abort: function () {
                n && n()
            }
        }
    }), ie.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ie.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (a, o) {
                    t = ie("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ft = [], It = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ft.pop() || ie.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function (t, n, a) {
        var o = !1 !== t.jsonp && (It.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(t.data) && "data"),
            i, s, r;
        if (o || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(It, "$1" + i) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return r || ie.error(i + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function () {
            r = arguments
        }, a.always(function () {
            void 0 === s ? ie(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, Ft.push(i)), r && ie.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), ie.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var a = me.exec(e), o = !n && [];
        return a ? [t.createElement(a[1])] : (a = u([e], t, o), o && o.length && ie(o).remove(), ie.merge([], a.childNodes))
    };
    var Mt = ie.fn.load;
    ie.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var a = this, o = e.indexOf(" "), i, s, r;
        return -1 < o && (i = ie.trim(e.slice(o)), e = e.slice(0, o)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < a.length && ie.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? ie("<div>").append(ie.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ie.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function (e) {
        return ie.grep(ie.timers, function (t) {
            return e === t.elem
        }).length
    }, ie.offset = {
        setOffset: function (e, t, n) {
            var a = ie.css(e, "position"), o = ie(e), i = {}, s, r, d, l, p, c, u;
            "static" === a && (e.style.position = "relative"), p = o.offset(), d = ie.css(e, "top"), c = ie.css(e, "left"), u = ("absolute" === a || "fixed" === a) && -1 < (d + c).indexOf("auto"), u ? (s = o.position(), l = s.top, r = s.left) : (l = parseFloat(d) || 0, r = parseFloat(c) || 0), ie.isFunction(t) && (t = t.call(e, n, ie.extend({}, p))), null != t.top && (i.top = t.top - p.top + l), null != t.left && (i.left = t.left - p.left + r), "using" in t ? t.using.call(e, i) : o.css(i)
        }
    }, ie.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ie.offset.setOffset(this, e, t)
            });
            var t = this[0], n = {top: 0, left: 0}, a = t && t.ownerDocument, o, i;
            if (a) return (o = a.documentElement, !ie.contains(o, t)) ? n : (n = t.getBoundingClientRect(), i = U(a), {
                top: n.top + i.pageYOffset - o.clientTop,
                left: n.left + i.pageXOffset - o.clientLeft
            })
        }, position: function () {
            if (this[0]) {
                var e = this[0], t = {top: 0, left: 0}, n, a;
                return "fixed" === ie.css(e, "position") ? a = e.getBoundingClientRect() : (n = this.offsetParent(), a = this.offset(), !ie.nodeName(n[0], "html") && (t = n.offset()), t.top += ie.css(n[0], "borderTopWidth", !0), t.left += ie.css(n[0], "borderLeftWidth", !0)), {
                    top: a.top - t.top - ie.css(e, "marginTop", !0),
                    left: a.left - t.left - ie.css(e, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), ie.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        ie.fn[e] = function (a) {
            return Ce(this, function (e, a, o) {
                var i = U(e);
                return void 0 === o ? i ? i[t] : e[a] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[a] = o)
            }, e, a, arguments.length)
        }
    }), ie.each(["top", "left"], function (e, t) {
        ie.cssHooks[t] = j(ae.pixelPosition, function (e, n) {
            if (n) return n = S(e, t), Ye.test(n) ? ie(e).position()[t] + "px" : n
        })
    }), ie.each({Height: "height", Width: "width"}, function (e, t) {
        ie.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, a) {
            ie.fn[a] = function (a, o) {
                var i = arguments.length && (n || "boolean" != typeof a),
                    s = n || (!0 === a || !0 === o ? "margin" : "border");
                return Ce(this, function (t, n, a) {
                    var o;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, V(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === a ? ie.css(t, n, s) : ie.style(t, n, a, s)
                }, t, i ? a : void 0, i, null)
            }
        })
    }), ie.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, a) {
            return this.on(t, e, n, a)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }), ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ie
    });
    var Wt = e.jQuery, Rt = e.$;
    return ie.noConflict = function (t) {
        return e.$ === ie && (e.$ = Rt), t && e.jQuery === ie && (e.jQuery = Wt), ie
    }, t || (e.jQuery = e.$ = ie), ie
});