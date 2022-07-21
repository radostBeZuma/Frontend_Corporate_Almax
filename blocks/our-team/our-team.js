import Swiper from 'swiper/bundle';


document.addEventListener("DOMContentLoaded", () => {

	const sliderMin = new Swiper('.our-team__slider-min', {
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	const sliderText = new Swiper('.our-team__text-slider', {
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});


	const sliderLarge = new Swiper('.our-team__box-slider-large', {
		speed: 1000,
		navigation: {
			prevEl: '.our-team__box-btn--prev',
			nextEl: '.our-team__box-btn--next',
			disabledClass: '_btn-hide',
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	const swipeAllSliders = (index) => {
		sliderLarge.slideTo(index);
		sliderMin.slideTo(index);
		sliderText.slideTo(index);
	}

	sliderLarge.on('slideChange', () => swipeAllSliders(sliderLarge.activeIndex));
	sliderMin.on('slideChange', () => swipeAllSliders(sliderMin.activeIndex));
	sliderText.on('slideChange', () => swipeAllSliders(sliderText.activeIndex));

	sliderMin.on('click', function (e) {
		if (e.isEnd === true) {
			sliderLarge.slideTo(0);
		} else {
			sliderLarge.slideNext();
		}
	});
});

