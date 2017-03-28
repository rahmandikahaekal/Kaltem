// ======================
// Wow Plugin triggres
// ======================
new WOW().init();

(function ($) {
    'use strict';
    
    jQuery(document).ready(function () {
        
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