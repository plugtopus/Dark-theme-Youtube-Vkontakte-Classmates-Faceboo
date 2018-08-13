var _createClass = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
    }
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var ConfigStore = function() {
    function a() {
        _classCallCheck(this, a)
    }
    return _createClass(a, [{
        key: 'defaults',
        value: function() {
            return {
                active: !0
            }
        }
    }, {
        key: 'get',
        value: function() {
            var a;
            return 'ok_click' === localStorage.getItem('click') ? a = localStorage.getItem('ok_click') : 'vk_click' === localStorage.getItem('click') ? a = localStorage.getItem('vk_click') : 'youtube_click' === localStorage.getItem('click') ? a = localStorage.getItem('youtube_skin') : 'facebook_click' === localStorage.getItem('click') && (a = localStorage.getItem('facebook_skin')), a ? JSON.parse(a) : this.defaults()
        }
    }, {
        key: 'set',
        value: function(a) {
            null === localStorage.getItem('youtube_skin') && localStorage.setItem('youtube_skin', JSON.stringify({
                active: !0
            })), null === localStorage.getItem('facebook_skin') && localStorage.setItem('facebook_skin', JSON.stringify({
                active: !0
            })), null === localStorage.getItem('vk_click') && localStorage.setItem('vk_click', JSON.stringify({
                active: !0
            })), null === localStorage.getItem('ok_click') && localStorage.setItem('ok_click', JSON.stringify({
                active: !0
            }));
            var b = this.get();
            Object.keys(a).forEach(function(c) {
                b[c] = a[c]
            })
        }
    }]), a
}();
var _createClass = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
    }
}();

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c
    }
    return Array.from(a)
}

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var Controller = function() {
    function a(b) {
        var c = this;
        _classCallCheck(this, a), this.config = b, this.listener = function() {}, this.accessibleMethods = {
            notifyActiveStatus: function() {
                return c.listener(c.config.get())
            }
        }
    }
    return _createClass(a, [{
        key: 'callMethod',
        value: function(a, b) {
            var c;
            return this.accessibleMethods[a] ? (c = this.accessibleMethods)[a].apply(c, _toConsumableArray(b)) : void 0
        }
    }, {
        key: 'onUpdate',
        value: function(a) {
            this.listener = a, this.listener(this.config.get())
        }
    }, {
        key: 'isActive',
        value: function() {
            return this.config.get().active
        }
    }, {
        key: 'updateActive',
        value: function(a) {
            this.config.set({
                active: a
            }), this.listener(this.config.get())
        }
    }, {
        key: 'toggleActive',
        value: function() {
            this.updateActive(this.isActive())
        }
    }]), a
}();
var _createClass = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
    }
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var Messenger = function() {
        function a(b) {
            var c = this;
            _classCallCheck(this, a), this.runtime = b, this.listener = function() {}, this.ports = [], this.runtime.onConnect.addListener(function(a) {
                return c.handleConnect(a)
            })
        }
        return _createClass(a, [{
            key: 'onMessage',
            value: function(a) {
                this.listener = a
            }
        }, {
            key: 'handleConnect',
            value: function(a) {
                var b = this;
                this.ports.push(a), a.onMessage.addListener(function(a) {
                    return b.listener(a)
                }), a.onDisconnect.addListener(function() {
                    return b.removePort(a)
                })
            }
        }, {
            key: 'removePort',
            value: function(a) {
                this.ports.splice(this.ports.indexOf(a), 1)
            }
        }, {
            key: 'notify',
            value: function() {
                this.ports.forEach(function(a) {
                    try {
                        'dark-youtube' === a.name ? null === localStorage.getItem('youtube_skin') ? a.postMessage({
                            active: !0
                        }) : a.postMessage(JSON.parse(localStorage.getItem('youtube_skin'))) : 'dark-facebook' === a.name && (null === localStorage.getItem('youtube_skin') ? a.postMessage({
                            active: !0
                        }) : a.postMessage(JSON.parse(localStorage.getItem('facebook_skin'))))
                    } catch (a) {}
                })
            }
        }]), a
    }(),
    configStore = new ConfigStore,
    messenger = new Messenger(chrome.runtime),
    controller = new Controller(configStore, messenger);
messenger.onMessage(function(a) {
    controller.callMethod(a.method, a.arguments || {}, a.url)
}), chrome.runtime.onMessage.addListener(function(a, b, c) {
    return !0 === a.youtube_skin ? localStorage.setItem('youtube_skin', JSON.stringify({
        active: !0
    })) : !1 === a.youtube_skin && localStorage.setItem('youtube_skin', JSON.stringify({
        active: !1
    })), !0 === a.facebook_skin ? localStorage.setItem('facebook_skin', JSON.stringify({
        active: !0
    })) : !1 === a.facebook_skin && localStorage.setItem('facebook_skin', JSON.stringify({
        active: !1
    })), !0 === a.vk_skin ? localStorage.setItem('vk_skin', JSON.stringify({
        active: !0
    })) : !1 === a.vk_skin && localStorage.setItem('vk_skin', JSON.stringify({
        active: !1
    })), !0 === a.ok_skin ? localStorage.setItem('ok_skin', JSON.stringify({
        active: !0
    })) : !1 === a.ok_skin && localStorage.setItem('ok_skin', JSON.stringify({
        active: !1
    })), a.youtube_click ? localStorage.setItem('click', a.youtube_click) : a.facebook_click ? localStorage.setItem('click', a.facebook_click) : localStorage.setItem('click', a.vk_click), c({
        storage: localStorage
    }), controller.toggleActive()
}), controller.onUpdate(function() {
    messenger.notify({
        active: controller.isActive()
    })
});