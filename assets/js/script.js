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
	    	767 : {
	    		items : 2,
	    		dots: true,
	    		margin: 20
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
	    	767 : {
	    		items : 1,
	    		dots: true
	    	},
	    	768 : {
	    		items: 2,
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

	const menuButton = document.querySelector('.navbar-toggler');
	let menuOpen = false;
	menuButton.addEventListener('click', () => {
		if (!menuOpen) {
			menuButton.classList.add('open');
			menuOpen = true;
		} else {
			menuButton.classList.remove('open');
			menuOpen = false;
		}
	});

	// Init Aosnya
	AOS.init();

	// Show btn whatsapp & to top
	let buttonToTop = document.querySelector('.btn-to-top');
	let navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', function () {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			buttonToTop.classList.add('show');
			buttonToTop.classList.remove('hide');
		} else {
			buttonToTop.classList.add('hide');
			buttonToTop.classList.remove('show');
		}
		navbar.classList.toggle('navbar-scroll', window.scrollY > 500);
	});
});