$(function(){

	/*button's function and modal window*/

	$(document).ready(function(){
		$('.white-button').on('click', function(){
			$('#layout-call').show(400).css('display', 'flex') && $('#layout-complete').hide();
			$('.page').addClass('page_lock') && $('.header').addClass('header_form-active');
		});

		$('#pre-order').on('click', function(){
			$('#layout-order').show(400).css('display', 'flex') && $('#layout-complete').hide();
			$('.page').addClass('page_lock') && $('.header').addClass('header_form-active');
		});

		$('.close, .layout__successfull').on('click', function(){
			$('#layout-call, #layout-order, #order-complete, #callback-complete').hide(400) && $('.page').removeClass('page_lock');
			$('.layout__form').css('padding', '30px') && $('.layout__alert').hide() && $('.header').removeClass('header_form-active');
			return false;
		});
	});
	

	/*Callback form*/

	$(document).ready(function(){
		$('#callback').on('click', function(){
			const callbackName = $('#name-callback').val();
			const callbackPhone = $('#phone-callback').val();

			if (callbackName.length > 0 && callbackPhone.length > 0) {

				const formData = $('#callback-form').serializeArray();
				const request = {};
				for(i in formData) {
					request[formData[i].name] = formData[i].value;
				}
				$.post('../api/callback.php', request, function(response){
					if(response === "phone received!") {
						$('#layout-call').hide(400);
						$('#callback-complete').show(400).css('display', 'flex');
					}
				});

				$('#callback-form')[0].reset();
				return false;
			}	

			else {
				$('.layout__form').css('padding', '80px 30px 30px') && $('.layout__alert').show(400);
				return false;
			}
		});
	});


	/*Order form*/

	$(document).ready(function(){
		$('#order').on('click', function(){
			const orderName = $('#name-order').val();
			const orderEmail = $('#email-order').val();
			const orderPhone = $('#phone-order').val();
			const orderMessage = $('#message-order').val();

			if (orderName.length > 0 && orderEmail.length > 0 && orderPhone.length > 0 && orderMessage.length > 0) {

				const formData = $('#order-form').serializeArray();
				const request = {};
				for(i in formData) {
					request[formData[i].name] = formData[i].value;
				}
				$.post('../api/order.php', request, function(response){
					if(response === "order received!") {
						$('#layout-order').hide(400);
						$('#order-complete').show(400).css('display', 'flex');
					}
				});

				$('#order-form')[0].reset();
				return false;
			}	

			else {
				$('.layout__form').css('padding', '80px 30px 30px') && $('.layout__alert').show(400);
				return false;
			}
		});
	});
	
	/*Burger-menu*/

	$(document).ready(function(){
		$('.header__burger').click(function(){
			$('.header__nav').toggleClass('header__nav_active', 3900) && $('.header__burger').toggleClass('active') && 
			$('.page').toggleClass('page_lock') && $('');
		});
	});

	/*anchor*/
	
	$('.list__link').on("click", function(e){
	    e.preventDefault();
	    const anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	        scrollTop: $(anchor).offset().top - 100
	    }, 400);
	});

	/*Swiper*/

	$(document).ready(function(){

		let slider = document.querySelector('.swiper-container');

		let mySwiper = new Swiper(slider, {

			spaceBetween: 30,
			loop: true,
			speed: 400,
			slidesPerView: 1,
			centeredSlides: true,

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
});
