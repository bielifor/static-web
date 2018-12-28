// banner 图 lunbo 
$('.banner').hover(function () {
  // 1.1 鼠标经过 显示箭头
  $('.arr').show();
}, function () {
  // 1.2 鼠标离开， 隐藏箭头
  $('.arr').hide();
});

$('.screen').jcarousel({
  wrap: 'circular'   // 开启无限轮播
}).jcarouselAutoscroll({ 
  interval: 3000
});
$('#banner_left').jcarouselControl({
  target: '+=1'
});
$('#banner_right').jcarouselControl({
    target: '-=1'
  });




// 外景 切换 
$('.wjxtu > li').mouseover(function (){
    var index = $(this).index();
    console.log (index);
    $('.wjtu > li')
      .eq(index).css('display', 'block').siblings().css('display', 'none');
});

