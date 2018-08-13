$(function () {
    function changeMode(mode) {
        localStorage.mode = mode;
        chrome.storage.local.set({
            mode: mode
        });
    }

    if (!localStorage.mode) changeMode('dark');

    function a(a) {
        var b = localStorage.getItem(a + '_skin');
        return !(null !== b) || JSON.parse(b).active
    }

    function b(a, b) {
        null === a || !0 === a ? ($('#' + b + '-btn-white').removeClass('enabled'), $('#' + b + '-btn-black').addClass('enabled')) : ($('#' + b + '-btn-white').addClass('enabled'), $('#' + b + '-btn-black').removeClass('enabled'))
    }

    function c(a, b) {
        chrome.runtime.sendMessage({
            [b + '_skin']: a,
            [b + '_click']: [b + '_click']
        }, function (a) {
            localStorage = a
        })
    }

    var d = a('youtube'),
        e = a('facebook'),
        f = a('vk'),
        g = a('ok');
    b(d, 'youtube'), b(e, 'facebook'), b(f, 'vk'), b(g, 'ok'),
        $('#youtube-btn-black').click(function () {
            b(!0, 'youtube'), c(!0, 'youtube')
        }), $('#youtube-btn-white').click(function () {
        b(!1, 'youtube'), c(!1, 'youtube')
    }), $('#facebook-btn-black').click(function () {
        b(!0, 'facebook'), c(!0, 'facebook')
    }), $('#facebook-btn-white').click(function () {
        b(!1, 'facebook'), c(!1, 'facebook')
    }), $('#vk-btn-black').click(function () {
        changeMode('dark'), b(!0, 'vk'), c(!0, 'vk')
    }), $('#vk-btn-white').click(function () {
        changeMode('light'), b(!1, 'vk'), c(!1, 'vk')
    }), $('#ok-btn-black').click(function () {
        changeMode('dark'), b(!0, 'ok'), c(!0, 'ok')
    }), $('#ok-btn-white').click(function () {
        changeMode('light'), b(!1, 'ok'), c(!1, 'ok')
    })
});
