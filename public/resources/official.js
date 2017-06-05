/**
 * Created by karl on 2017/3/13.
 */

// 场景

$('#scene-slider').owlCarousel({
    loop:true,
    // margin:10,
    nav:false,
    dots:false,
    // touchDrag:false,
    // pullDrag:false,
    autoplay:true,
    URLhashListener:true,
    autoplayHoverPause:false,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#header-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(document).ready(function () {

    // 固定导航菜单
    $("#mission").waypoint(function() {
        $("#navbar-transparent").fadeOut();
        $("#navbar-white").fadeIn();
    }, { offset: '100' });

    // 固定导航菜单
    $("#mission").waypoint(function() {
        $("#navbar-transparent").fadeIn();
        $("#navbar-white").fadeOut();

    }, { offset: '300' });

    $(".xs-menu-btn").click(function () {
        $("#xs-menu").fadeIn();
    });

    $("#xs-menu").click(function () {
        $(this).fadeOut();
    });


});