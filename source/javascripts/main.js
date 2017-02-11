;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas, .js-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-nav-toggle').removeClass('active');
	    	}
	    }
		});
	};

	var scrollNavBar = function() {
		if ( $(window).scrollTop() > 50)  {
			$('body').addClass('scrolled');
			$('.js-nav-toggle').removeClass('nav-white');
		} else {
			$('body').removeClass('scrolled');
			$('.js-nav-toggle').addClass('nav-white');
		}

		$(window).scroll(function(){
			if ( $(window).scrollTop() > 50)  {
				$('body').addClass('scrolled');
				$('.js-nav-toggle').removeClass('nav-white');
			} else {
				$('body').removeClass('scrolled');
				$('.js-nav-toggle').addClass('nav-white');
			}
		});
	};

	var offcanvasMenu = function() {
		$('#page').prepend('<div id="offcanvas" />');
		$('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
		var clone1 = $('.menu > ul').clone();
		$('#offcanvas').append(clone1);

		$(window).resize(function(){
			if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-nav-toggle').removeClass('active');
	    	}
		});
	};

	var burgerMenu = function() {
		$('body').on('click', '.js-nav-toggle', function(event){
			var $this = $(this);
			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			return false;
		});

		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});
	};

	// Loading page
	var loaderPage = function() {
		$(".loader").fadeOut("slow");
	};

	$(function(){
		mobileMenuOutsideClick();
		scrollNavBar();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		goToTop();
		loaderPage();
	});
}());
