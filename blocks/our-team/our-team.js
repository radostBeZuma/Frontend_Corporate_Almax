import Swiper from 'swiper/bundle';

document.addEventListener("DOMContentLoaded", () => {

	const swiper = new Swiper('.our-team__box-slider', {
		// Navigation arrows

		speed: 1000,
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},

		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},



	});
});

