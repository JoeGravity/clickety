c = function (e) {
    function t() {
        var e, n, a, i;
        r(this, t);
        for (var l = arguments.length, u = Array(l), s = 0; s < l; s++)
            u[s] = arguments[s];
        return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))),
            a.state = {
                message: "",
                animating: !1
            },
            a.renderMessage = function () {
                switch (a.state.message) {
                    case "correct":
                        return "You guessed correctly!";
                    case "incorrect":
                        return "You guessed incorrectly!";
                    default:
                        return "Click an image to begin!"
                }
            }
            ,
            i = n,
            o(a, i)
    }
    return a(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function (e) {
                var t = this
                    , n = e.score
                    , r = e.topScore
                    , o = {
                        animating: !0
                    };
                o.message = 0 === n && 0 === r ? "" : 0 === n && r > 0 ? "incorrect" : "correct",
                    this.setState(o, function () {
                        return setTimeout(function () {
                            return t.setState({
                                animating: !1
                            })
                        }, 500)
                    })
            }
        }, {
            key: "render",
            value: function () {
                return l.a.createElement("li", {
                    className: this.state.animating ? this.state.message : ""
                }, this.renderMessage())
            }
        }]),
        t
}(i.Component);
t.a = c
}
, function (e, t) { }
, function (e, t) { }
, function (e, t, n) {
"use strict";
var r = n(35);
n.d(t, "a", function () {
return r.a
})
}
, function (e, t, n) {
"use strict";
var r = n(0)
, o = n.n(r)
, a = n(36)
, i = (n.n(a),
    function (e) {
        return o.a.createElement("header", {
            className: "header"
        }, o.a.createElement("h1", null, "Clicky Game!"), o.a.createElement("h2", null, "Click on an image to earn points, but don't click on any more than once!"))
    }
);
t.a = i
}