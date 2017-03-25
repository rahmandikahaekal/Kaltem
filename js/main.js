//===============================
// WOW Plugin triggres animate
//==============================
new WOW().init();

(function ($) {
    'use strict';
    
    jQuery(document).ready(function () {
        
        //Carousel 
        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 1, //1 item above 1000px browser width
            itemsDesktop: [1000, 1], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });
        
        //Menu JS
        $(".toggle-btn").on("click", function () {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
        });
        
        //Change Color
       $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.header-top-area').addClass('menu-bg');
                jQuery("#logo-dark").css({"display": "inline"});
                jQuery("#logo-white").css({"display": "none"});
            } else {""
                $('.header-top-area').removeClass('menu-bg');
                jQuery("#logo-dark").css({"display": "none"});
                jQuery("#logo-white").css({"display": "inline"})
            }
        });
        
        //Smoothscroll
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        
        //Mixitup
        var portfolioContent = $('.portfolio');

        portfolioContent.mixItUp();
        
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });
        
        //Extra JS
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
    });
})(jQuery);