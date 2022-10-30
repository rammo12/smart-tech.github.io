// Pre Loader Start **/
function preloader() {
    $('#preloader').delay(1000).fadeOut();
};

$(window).on('load', function () {
    preloader(),
    wowanimation();
});
// Pre Loader End **/

/**== Navabar script related(header-area) */
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.header').addClass('fixed');
    } 
    else {
        $('.header').removeClass('fixed');
    }
});
// End Navabar script related(header-area)

/* main slider 3-banner */
// main-slider
$('.ontime-project-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
})
/*== /main slider 3-banner ==*/

/*== TOP RATED PRODUCTS carousel ==*/
// owl carasoul slide top rated ===//
$('.project-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 2
    },
    767:{
    items:2
    },
    991:{
    items:4
    },
    1000:{
    items:6
    }
    }
})
// owl carasoul slide top rated ===//
/*== /TOP RATED PRODUCTS carousel ==*/

/*== BRAND & CLIENTS start ==*/
// owl carasoul slide BRAND & CLIENTS ===//
$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 2
    },
    767:{
    items:2
    },
    991:{
    items:3
    },
    1000:{
    items:6
    }
    }
})
/*== BRAND & CLIENTS end ==*/
// owl carasoul slide BRAND & CLIENTS ===//

