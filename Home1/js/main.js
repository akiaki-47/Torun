
$(document).ready(function () {

    var owl = $(".testimonial-active");

    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: false,
        navText: ['<div class="owl-prev"><i class="fa fa-long-arrow-left"></i></div>',
            '<div class="owl-next"><i class="fa fa-long-arrow-right"></i></div>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                nav: false,
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }

    });

    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })

});

$('.brand-active').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});


/* project-acive */
$('.js-project-active').owlCarousel({
    stagePadding: 300,
    loop: true,
    center: true,
    nav: true,
    dots: true,
    autoplay: false,
    items: 1,
    navText: ['<div class="owl-prev"><i class="fa fa-long-arrow-left"></i></div>',
        '<div class="owl-next"><i class="fa fa-long-arrow-right"></i></div>'],
    responsive: {
        0: {
            stagePadding: 0,
            items: 1,
            nav: false,
        },
        768: {
            items: 2,
            stagePadding: 0,

        },
        992: {
            items: 2,
            stagePadding: 0,

        },
        1200: {
            stagePadding: 380,
        },
        1500: {
            stagePadding: 430,
        }
    }
});
/* counter-area-start */

$('.counter-single').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 1500,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });

});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
    type: 'iframe'
});

/*Google Map*/
