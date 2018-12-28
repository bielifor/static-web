//获取页面可视宽度
var w = $(window).width();

var h = $(window).height();

//设置body的宽高
$("body").width(w);
$("body").height(h);



// -----------------------------------
$(".xian-top").animate({
    left: 0
}, 700, function () {
    $(".shuRu div").text("金");
    $(".shuRu a").text("连");
    setTimeout(function () {
        $(".shuRu div").text($(".shuRu div").text() + "夫");


    }, 300);
    setTimeout(function () {
        $(".shuRu div").text($(".shuRu div").text() + "人");
        $(".shuRu a").text($(".shuRu a").text() + "线");
    }, 600);
});


$(".xian-bottom").animate({
    right: 0
}, 700, function () {
    $(".shuRu").css("box-shadow", "0 0 10px #fff")
});

$(".xian-left").animate({
    top: 0
}, 700);

$(".xian-right").animate({
    top: 0
}, 700);


$(".li-left").animate({
    bottom: 0
}, 700);
$(".li-right").animate({
    bottom: 0
}, 700);

//-----------------------------------
var obj = {

    "bj": {
        top: 300,
        left: 715,
        href: "./beijing/index.html"
    },
    "as": {
        top: 250,
        left: 845,
        href: "./anshan/index.html"
    },
    "lz": {
        top: 385,
        left: 500,
        href: "./lanzhou/index.html"
    },
    "lj": {
        top: 600,
        left: 405,
        href: "./lijiang/index.html"
    },
    "hz": {
        top: 520,
        left: 770,
        href: "./hangzhou/index.html"
    }

};
$(".shuRu a").click(function () {
    $(".map>div").show();
    $(".map>a").show();
    var $val = $(".shuRu input").val();
    $(".map>a").html("<p></p>" + $val);
    switch ($val) {

        case "北京":
            weiZhi("bj");

            break;

        case "鞍山":
            weiZhi("as");
            break;

        case "兰州":
            weiZhi("lz");
            break;

        case "丽江":
            weiZhi("lj");
            break;

        case "杭州":
            weiZhi("hz");
            break;
        default:
            alert('未实现');
            break;
        //如果输入的不是这几个就要给弹出框
    }
    $(".shuRu input").val("");
});

function weiZhi(cs) {

    var $t = obj[cs].top;

    var $l = obj[cs].left;
    console.log(obj[cs].href)

    $(".map>a").attr("href", obj[cs].href);

    $(".map>div").css({

        top: $t,

        left: $l
    });

    if ($(".map>a").position().left + 35 > $l) {
        var $ss = $l + 12;
        var $w = Math.abs($l - ($(".map>a").position().left + 35)) - 10;
    } else {
        var $ss = $(".map>a").position().left + 35;
        var $w = Math.abs($l - ($(".map>a").position().left + 35)) + 10;
    }

    $(".map>p").css({
        top: $t + 10,
        left: $ss + 1
    });

    $(".map>a>p").css({
        height: $t - 70
    }).slideDown(1000, function () {
        $(".map>p")
            .animate({
                width: $w
            }, 1000);
    });
}

$(".shuRu input").focus(function () {
    $(".map>p")
        .animate({
            width: 0
        }, 600, function () {
            $(".map>a>p").slideUp(600, function () {
                $(".map>a>p").css({
                    height: 0
                })
            })
        });
    // $(".map>a").html("<p></p>");
    $(".map>div").hide();
})













