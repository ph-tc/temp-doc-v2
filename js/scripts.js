//PRELOADER 
$(window).on('load', function () {
    $('.content').css("display", "block");
    $('.preloader').delay(350).fadeOut('slow');
});

// animate
(function () {
    var anim = $('[data-animate]');
    if (anim.length) {
        var wnd = $(window);
        var screenBlocks = [];
        anim.each(function () {
            var _this = $(this);
            wnd.scroll(function () {
                animateBlocks();
            });
            // animation for visble blocks
            var posTop = _this.offset().top,
                posScroll = wnd.scrollTop(),
                wndHeight = wnd.height();
            if (posScroll + wndHeight >= posTop) {
                screenBlocks.push(_this);
            };

            function animateBlocks() {
                var posTop = _this.offset().top,
                    posScroll = wnd.scrollTop(),
                    wndHeight = wnd.height(),
                    delayTime = 200;
                var delay = 0,
                    dataAnimate = _this.data('animate');
                if (dataAnimate != '') {
                    delay = (dataAnimate + 1) * delayTime;
                } else {
                    dataAnimate = 1;
                    delay = dataAnimate * delayTime;
                }

                setTimeout(function () {
                    if (posScroll + wndHeight >= posTop) {
                        _this.addClass('animated');

                        setTimeout(function () {
                            _this.addClass('done');
                        }, 1000);
                    };
                }, delay);
            }
        });

        setTimeout(function () {
            var count = 0;
            var intrvl = setInterval(function () {
                if (count < screenBlocks.length) {
                    screenBlocks[count].addClass('animated');
                    count++;
                } else {
                    clearInterval(intrvl);
                }
            }, 100);
        }, 400);
    }
})();

//FUNCTIONS
function showreg() {
    $('.modal').fadeOut(200);
    $('body').addClass('modal-opened');
    $('#regmodal').fadeIn();
    event.preventDefault();
    $(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".modal-content");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $('.modal').fadeOut();
                $('body').removeClass('modal-opened');
            }
        });
    });
}

function showenter() {
    $('.modal').fadeOut(200);
    $('body').addClass('modal-opened');
    $('#entermodal').fadeIn();
    event.preventDefault();
    $(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".modal-content");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                $('.modal').fadeOut();
                $('body').removeClass('modal-opened');
            }
        });
    });
}

$('.modal-content .head .close').on('click', function () {
    $('body').removeClass('modal-opened');
    $('.modal').fadeOut()
})

function scrolltohow() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.howitworks').offset().top
    }, 800);
    event.preventDefault();
};


function scrolltowhy() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.whycosts').offset().top
    }, 800);
    event.preventDefault();
};

function scrolltotraff() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.traff').offset().top
    }, 800);
    event.preventDefault();
};

function scrolltopartners() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.partners').offset().top
    }, 800);
    event.preventDefault();
};

function scrolltoaboutus() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.writes').offset().top
    }, 800);
    event.preventDefault();
};

function scrolltocontacts() {
    $('.menubtn').removeClass('is-active');
    $('body').removeClass('menu-opened');
    $('html, body').animate({
        scrollTop: $('.contacts').offset().top
    }, 800);
    event.preventDefault();
};

function showmenu(e) {
    e.preventDefault();
    var offset = window.pageYOffset;
    $('.menubtn').toggleClass('is-active');
    $('body').toggleClass('menu-opened');
}

document.querySelector('.menubtn').addEventListener('click', function(e) {
    e.preventDefault();
    var offset = window.pageYOffset;
    $('.menubtn').toggleClass('is-active');
    $('body').toggleClass('menu-opened');
})

//FULL PAGE SCROLL PROPERTIES
// if ($(window).width() > 1350 && $(window).height() > 650) {
//     $("main").onepage_scroll({
//         sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
//         easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//         animationTime: 800, // AnimationTime let you define how long each section takes to animate
//         pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
//         updateURL: true, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//         beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
//         afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
//         loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//         keyboard: true, // You can activate the keyboard controls
//         responsiveFallback: 1350, // You can fallback to normal page scroll by defining the width of the browser in which
//         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//         // the browser's width is less than 600, the fallback will kick in.
//         direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
//     });
// }

$('header nav li').on('click', function () {
    var dot = $(this).attr('dot');
    if (dot == 2) {
        $('.onepage-pagination li a[data-index="2"]').click()
    }
    if (dot == 3) {
        $('.onepage-pagination li a[data-index="3"]').click()
    }
    if (dot == 4) {
        $('.onepage-pagination li a[data-index="4"]').click()
    }
    if (dot == 5) {
        $('.onepage-pagination li a[data-index="5"]').click()
    }
    if (dot == 7) {
        $('.onepage-pagination li a[data-index="7"]').click()
    }
    if (dot == 8) {
        $('.onepage-pagination li a[data-index="8"]').click()
    }
});

function showHiddenElements() {

    var elems = document.querySelectorAll('.hidden');
    var windowHeight = document.documentElement.clientHeight;

    for ( var i = 0; i < elems.length; i++ ) {
        if ( elems[i].getBoundingClientRect().bottom > 0 && elems[i].getBoundingClientRect().top <= windowHeight + 50) {
            elems[i].classList.add('shown');
        }
    }
}

showHiddenElements();
window.onscroll = showHiddenElements;

//slider
$(document).ready(function(){
    var slickSlider = $(".slider");
    slickSlider.slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    slickSlider.mousewheel(function(e) {
        if (e.deltaY < 0) {
            if($(this).slick('slickCurrentSlide') == $(this).find('.box50').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if($(this).slick('slickCurrentSlide') == 0) {
                return
            }

            e.preventDefault()
            $(this).slick('slickPrev')
        }
    });
});