(function (win, doc) {
    if (!win.addEventListener) return;
    var html = document.documentElement;
    function setFont() {
        var w = html.clientWidth,
            h = html.clientHeight;
        html.style.fontSize = w > h ? w / 1920 * 100 + "px" : w / 1100 * 100 + "px";
        // 1rem = 100px
        setTimeout(function () {
            document.getElementsByTagName("body")[0].style.opacity = "1";
        }, 50);
    }
    win.addEventListener('resize', setFont, false);
    // resize 重置窗口事件
    doc.addEventListener('DOMContentLoaded', setFont, false);

})(window, document);