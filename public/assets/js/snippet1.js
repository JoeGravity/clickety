var i = n(0)
            , l = n.n(i)
            , u = n(28)
            , s = n(34)
            , c = n(37)
            , f = n(40)
            , p = n(43)
            , d = n(46)
            , h = n.n(d)
            , m = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                }
            }()
            , g = function (e) {
                function t() {
                    var e, n, a, i;
                    r(this, t);
                    for (var l = arguments.length, u = Array(l), s = 0; s < l; s++)
                        u[s] = arguments[s];
                    return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))),
                        a.state = {
                            data: h.a,
                            score: 0,
                            topScore: 0
                        },
                        a.handleCorrectGuess = function (e) {
                            var t = a.state
                                , n = t.topScore
                                , r = t.score
                                , o = r + 1
                                , i = o > n ? o : n;
                            a.setState({
                                data: a.shuffleData(e),
                                score: o,
                                topScore: i
                            })
                        }
                        ,
                        a.handleIncorrectGuess = function (e) {
                            a.setState({
                                data: a.resetData(e),
                                score: 0
                            })
                        }
                        ,
                        a.resetData = function (e) {
                            var t = e.map(function (e) {
                                return Object.assign({}, e, {
                                    clicked: !1
                                })
                            });
                            return a.shuffleData(t)
                        }
                        ,
                        a.shuffleData = function (e) {
                            for (var t = e.length - 1; t > 0;) {
                                var n = Math.floor(Math.random() * (t + 1))
                                    , r = e[t];
                                e[t] = e[n],
                                    e[n] = r,
                                    t--
                            }
                            return e
                        }
                        ,
                        a.handleItemClick = function (e) {
                            var t = !1
                                , n = a.state.data.map(function (n) {
                                    var r = Object.assign({}, n);
                                    return r.id === e && (r.clicked || (r.clicked = !0,
                                        t = !0)),
                                        r
                                });
                            t ? a.handleCorrectGuess(n) : a.handleIncorrectGuess(n)
                        }
                        ,
                        i = n,
                        o(a, i)
                }
                return a(t, e),
                    m(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.setState({
                                data: this.shuffleData(this.state.data)
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this;
                            return l.a.createElement("div", null, l.a.createElement(u.a, {
                                score: this.state.score,
                                topScore: this.state.topScore
                            }), l.a.createElement(s.a, null), l.a.createElement(c.a, null, this.state.data.map(function (t) {
                                return l.a.createElement(f.a, {
                                    key: t.id,
                                    id: t.id,
                                    shake: !e.state.score && e.state.topScore,
                                    handleClick: e.handleItemClick,
                                    image: t.image
                                })
                            })), l.a.createElement(p.a, null))
                        }
                    }]),
                    t
            }(i.Component);
        t.a = g
    }
    , function (e, t, n) {
        "use strict";
        var r = n(29);
        n.d(t, "a", function () {
            return r.a
        })
    }
    , function (e, t, n) {
        "use strict";
        var r = n(0)
            , o = n.n(r)
            , a = n(30)
            , i = n(33)
            , l = (n.n(i),
                function (e) {
                    return o.a.createElement("nav", {
                        className: "navbar"
                    }, o.a.createElement("ul", null, o.a.createElement("li", {
                        className: "brand"
                    }, o.a.createElement("a", {
                        href: "/"
                    }, "Clicky Game")), o.a.createElement(a.a, {
                        score: e.score,
                        topScore: e.topScore
                    }), o.a.createElement("li", null, "Score: ", e.score, " | Top Score: ", e.topScore)))
                }
            );
        t.a = l
    }