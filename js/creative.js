$(function() {
    var $item = $(".carousel .carousel-item");
    var $wHeight = $(window).height();
    $item.height($wHeight);
    $item.addClass("full-screen");

    $(".carousel img").each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
        });
        $(this).remove();
    });

    /*
    //下方自動加入控制圓鈕
    var total = $(".carousel .carousel-inner div.carousel-item").size();
    append_li();

    function append_li() {
        var li = "";
        var get_ac = $(".carousel .active");
        var ac = $(".carousel .carousel-inner div").index(get_ac);

        for (var i = 0; i <= total - 1; i++) {
            if (i == (ac) / 2) {
                li += '<li data-target="#fullcarousel" data-slide-to="' + i + '" class="active"></li>';
            } else {
                li += '<li data-target="#fullcarousel" data-slide-to="' + i + '" class=""></li>';
            }
        }
        $(".carousel-indicators").append(li);
    }
    //單則隱藏控制鈕
        if ($(".carousel .carousel-inner div.carousel-item").length < 2 ) { 
            $(".carousel-indicators, .carousel-control-prev, .carousel-control-next").hide();
        }
    */
    //縮放視窗調整視窗高度
    $(window).on('resize', function() {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    //輪播秒數與滑入停止
    $(".carousel").carousel({
        interval: 5000,
        pause: false,
        wrap: true,
    });
    // 滾差效果
    $('.about').parallax("50%", 0.2);
    $('.dgfgdsg').parallax("50%", 0.3);
});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 51
    });

})(jQuery);