$(document).ready(function(){
	$('.flow__brace').addClass('flow__brace_animated') && $('.flow__pound').addClass('flow__pound_animated') &&
	$('.flow__tag-left').addClass('flow__tag-left_animated') && $('.flow__tag-right').addClass('flow__tag-right_animated') &&
	$('.flow__div-left').addClass('flow__div-left_animated') && $('.flow__div-right').addClass('flow__div-right_animated');
	$('.header__burger').click(function(){
		$('.header__nav').toggleClass('header__nav_active') && $('.header__burger').toggleClass('active') && 
		$('.page').toggleClass('page_lock');
	});
});

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {

	spaceBetween: 30,
	loop: true,
	speed: 1600,

	pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
	    clickable: true,
  	},

  	 navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	},

  	autoplay: {
  		delay: 5000,
  	},

  	breakpoints: {

  		320: {
  			slidesPerView: 1,
  		},

  		620: {
  			slidesPerView: 2,	
  		},

  		1025: {
  			slidesPerView: 3,
  		},
  	},
});


