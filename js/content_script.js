'use strict';
if (-1 < location.hostname.indexOf('youtube.com')) {
    function a(a, b) {
        if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
    }

    var _createClass = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        StyleSwitcher = function () {
            function b() {
                a(this, b), this.head = document.getElementsByTagName('head')[0], this.link = document.createElement('link'), this.link.id = 'dark-youtube-styles', this.link.rel = 'stylesheet', this.link.type = 'text/css', this.link.href = this.styleURL(), this.link.media = 'screen', this.active = !1
            }

            return _createClass(b, [{
                key: 'activate',
                value: function () {
                    this.active || (this.active = !0, this.head.appendChild(this.link))
                }
            }, {
                key: 'deactivate',
                value: function () {
                    this.active && (this.active = !1, this.head.removeChild(this.link))
                }
            }, {
                key: 'switch',
                value: function (a) {
                    a ? this.activate() : this.deactivate()
                }
            }, {
                key: 'styleURL',
                value: function () {
                    return chrome.extension.getURL('styles/styles.css')
                }
            }]), b
        }(),
        port = chrome.runtime.connect({
            name: 'dark-youtube'
        }),
        interval = setInterval(function () {
            if (document.querySelector('body > *')) try {
                var a = new StyleSwitcher;
                port.onMessage.addListener(function (b) {
                    'undefined' != typeof b.active && a.switch(b.active)
                }), port.postMessage({
                    method: 'notifyActiveStatus',
                    args: {}
                })
            } finally {
                clearInterval(interval)
            }
        }, 100)
} else ;