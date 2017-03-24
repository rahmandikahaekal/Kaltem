//===============================
// WOW Plugin triggres animate
//==============================
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
        
        //Magnific Popup
        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();
        
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