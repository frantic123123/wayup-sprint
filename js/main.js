$(function () {
    $('.preloader, .overlay').fadeOut();

    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    });

    let $page = $('html, body');
    $('a[href*="#finish"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

// Подключение счетчика

    var current_date = new Date();// текущая дата
        current_date.setDate(current_date.getDate())
        curDay = current_date.getDate(),
        curMonth = current_date.getMonth(),
        curYear = current_date.getFullYear();


    $('#counter1').countMe(curYear, curMonth, curDay+3, '#counter1');


// Parallax mouse

    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.circle',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    } else {
        // change functionality for larger screens
    }


// Animation Init

    $(window).scroll(function() {
        $('.timer').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('.finish-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+750) {
                $(this).addClass("animate__fadeInUp");
            }
        });
    });

    // Sticky Nav *** Липкая Шапка

    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('nav').addClass("sticky");
        }
        else {
            $('nav').removeClass("sticky");
        }
    });


    // $(window).on('load', function () {
    //     var $preloader = $('#page-preloader'),
    //         $spinner   = $preloader.find('.windows8');
    //     $spinner.fadeOut();
    //     $preloader.delay(350).fadeOut('slow');
    // });


/// Articmodal init  Modal Window
    $('.parallax-btn').click(function (e) {
        e.preventDefault ();
        $('#exampleModal').arcticmodal();
    })

// Slick slider

    $('.big-slider').slick({
        //settings
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        dots: true
    });

// Carousel Slider

    // $('.car-slider').slick({
    //     //settings
    //     arrows: true,
    //     nextArrow: '<button type="button" class="slick-next"><i class="fa fa-circle-right"></i></i></button>',
    //     prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-circle-left"></i></i></button>',
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // });

    $('.car-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-circle-right"></i></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-circle-left"></i></i></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

});
