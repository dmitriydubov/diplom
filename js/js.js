$(function(){

	/*White-button's function and modal window*/

	$('#header__callback, #footer__callback, #pre-order').on('click', function(){
		$('#layout-order').show(400).css('display', 'flex') && $('.main').addClass('main_order-mod') && $('#layout-complete').hide();
		$('.page').addClass('page_lock');
	});

	$('.layout__close, .layout__successfull').on('click', function(){
		$('#layout-order, #layout-complete').hide(400) && $('.page').removeClass('page_lock') && $('.main').removeClass('main_order-mod');
		$('.layout__form').css('padding', '30px') && $('.layout__alert').hide();
	});

	/*Order form*/

	$('#order').on('click', function(){
		let inputName = $('#name').val();
		let inputEmail = $('#email').val();
		let inputPhone = $('#phone').val();
		if (inputName.length > 0 && inputEmail.length > 0 && inputPhone.length > 0) {

			let formData = $('.layout__form').serializeArray();
			let request = {};
			for(i in formData) {
				request[formData[i].name] = formData[i].value;
			}
			$.post('../api/api.php', request, function(response){
				if(response === "All-right!") {
					$('#layout-order').hide(400);
					$('#layout-complete').show(400).css('display', 'flex');
				}
			});

			$('.layout__form')[0].reset();
			return false;
		}	

		else {
			$('.layout__form').css('padding', '80px 30px 30px') && $('.layout__alert').show(400);
			return false;
		}
	});

	/*Flow elements*/

	$(document).ready(function(){
		$('.flow-box__brace').addClass('flow-box__brace_animated') && $('.flow-box__pound').addClass('flow-box__pound_animated') &&
		$('.flow-box__tag-left').addClass('flow-box__tag-left_animated') && $('.flow-box__tag-right').addClass('flow-box__tag-right_animated') &&
		$('.flow-box__div-left').addClass('flow-box__div-left_animated') && $('.flow-box__div-right').addClass('flow-box__div-right_animated');
		$('.header__burger').click(function(){
			$('.header__nav').toggleClass('header__nav_active', 3900) && $('.header__burger').toggleClass('active') && 
			$('.page').toggleClass('page_lock') && $('');
		});
	});

	/*Swiper*/

	$("body").on('click', '[href*="#"]', function(e){
	  let fixed_offset = 100;
	  $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 400);
	  e.preventDefault();
	});

	let slider = document.querySelector('.swiper-container');

	let mySwiper = new Swiper(slider, {

		spaceBetween: 30,
		loop: true,
		speed: 400,

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
});
