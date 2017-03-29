// =============================
// WOW Plugin triggres animate
// =============================
new WOW().init();

(function ($) {
    'use strict';
    
    jQuery(document).ready(function () {
        //Menu Javascript
        $(".toggle-btn").on("click", function () {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
        });
        
        //Navigation Change' Color
        
    })
})(jQuery);