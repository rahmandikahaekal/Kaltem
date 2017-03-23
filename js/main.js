$(document).ready(function(){
	$('#carousel').slick({
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		customPaging : function(slider, i) {
			var pagination = $(slider.$slides[i]).data('pagination');
			return pagination;
		},
	});
});