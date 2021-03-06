$(function () {
	"use strict";

	// Navbar Fixed dll

	$('#owl-projects').owlCarousel({
	    autoplay: true,
	    autoplayHoverMouse: true,
	    items:4,
	    loop:true,
	    nav: true,
	    responsive: {
	    	0 : {
	    		items : 1,
	    		dots: true
	    	},
	    	600 : {
	    		items : 2,
	    		dots: true
	    	},
	    	768 : {
	    		items : 2,
	    		dots: true
	    	},
	    	1000 : {
	    		items: 4,
	    		dots: true
	    	}
	    },
	    navText: [
	    	'<i class="fa fa-angle-left testimonials-left-icon" aria-hidden="true"></i>',
	    	'<i class="fa fa-angle-right testimonials-right-icon" aria-hidden="true"></i>'
	    ]
	});
	$('#owl-testimonials').owlCarousel({
		autoplay: true,
	    autoplayHoverMouse: true,
	    items:2,
	    loop:true,
	    nav: true,
	    responsive: {
	    	0 : {
	    		items : 1,
	    		dots: true
	    	},
	    	600 : {
	    		items : 2,
	    		dots: true
	    	}
	    },
	    navText: [
	    	'<i class="fa fa-angle-left testimonials-left-icon" aria-hidden="true"></i>',
	    	'<i class="fa fa-angle-right testimonials-right-icon" aria-hidden="true"></i>'
	    ]
	});
	$('#owl-clients').owlCarousel({
		autoplay: true,
		autoplayHoverMouse: true,
	    items: 5,
	    loop: true,
	    nav: true,
	    responsive: {
	    	0 : {
	    		items : 1,
	    		dots: false
	    	},
	    	600 : {
	    		items : 5,
	    		dots: false
	    	}
	    },
	    navText: [
	    	'<i class="fa fa-angle-left testimonials-left-icon" aria-hidden="true"></i>',
	    	'<i class="fa fa-angle-right testimonials-right-icon" aria-hidden="true"></i>'
	    ]
	});

	// $('.owl-carousel').find('.owl-nav').removeClass('disabled');
	// $('.owl-carousel').on('changed.owl-carousel', function (event) {
	// 	$(this).find('owl-nav').removeClass('disabled');
	// });
});