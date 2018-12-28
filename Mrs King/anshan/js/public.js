// 设置 顶部微信 微博图片隐藏
function s(selector) {
    var rel = [];
    document.querySelectorAll (selector).forEach(function (v) {
        rel.push (v);
    })
    return rel;
}

var img1 = s ('.img1')[0];
var img2 = s('.img2')[0];
var wx = s('.wx')[0];
var wb = s('.wb')[0];

img1.style.display = 'none';
wx.onmouseover = function () {
    img1.style.display = '';
}
wx.onmouseout = function () {
    img1.style.display = 'none';
}
img2.style.display = 'none';
wb.onmouseover = function () {
    img2.style.display = '';
}
wb.onmouseout = function () {
    img2.style.display = 'none';
}

//   设置底部评价框
$('.pingjia').click(function () {
    $('.pingjia').toggle(500);
    $('.pj').toggle(1000);
    var wjx_k = '☆';
    var wjx_s = '★';
    // 把鼠标放在li上
    $('.comment li').hover(function () {
        $(this)
            .text(wjx_s)
            .prevAll()  // 当前元素之前的所有兄弟
            .text(wjx_s)
            .end()
            .nextAll()
            .text(wjx_k);
    }, function () {
        $('.comment li').text(wjx_k);
        $('li.now')
            .text(wjx_s)
            .prevAll()
            .text(wjx_s);
    });
    // 当点击时  记录下当前的li  其他li 为空
    $('.comment li').click(function () {
        $(this)
            .addClass('now')
            .siblings()
            .removeClass('now');
    });
});
$('.pj').click(function (){
    $('.pj').toggle(500);            
    $('.pingjia').toggle(1000);
});


// 设置 图片 高量
$('.picture  ul  li img').mouseover(function () {
    $(this).css('opacity', 1).parent().parent().siblings().find('img').css('opacity', 0.5);
    $(this).parent().parent().parent().siblings().children().find('img').css('opacity', 0.5);
});

$('.picture ul li img').mouseout(function () {
    $('.picture img').css('opacity', 1);
});