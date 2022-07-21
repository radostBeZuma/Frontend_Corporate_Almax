import Swiper from 'swiper/bundle';

document.addEventListener("DOMContentLoaded", () => {

	const ad = new Swiper('.our-team__box-slider-min', {
		speed: 2000,

	});

	const swiper = new Swiper('.our-team__box-slider', {
		speed: 2000,
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},

	});

	swiper.controller.control = ad;
	ad.controller.control = swiper;
	// swiper[0].controller.control = swiperMin;

});

