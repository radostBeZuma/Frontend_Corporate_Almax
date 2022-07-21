import Swiper from 'swiper/bundle';


document.addEventListener("DOMContentLoaded", () => {

	const ad = new Swiper('.our-team__box-slider-min', {
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

	});

	const swiper = new Swiper('.our-team__box-slider', {
		speed: 1000,
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	swiper.controller.control = ad;
	ad.controller.control = swiper;
});

