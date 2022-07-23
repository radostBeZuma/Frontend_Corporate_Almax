import Swiper from 'swiper/bundle';


document.addEventListener("DOMContentLoaded", () => {

	const block = 'our-team';

	// slider

	const sliderMin = new Swiper(`.${block}__slider-min`, {
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	const sliderText = new Swiper(`.${block}__text-slider`, {
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	const sliderLarge = new Swiper(`.${block}__box-slider-large`, {
		speed: 1000,
		navigation: {
			prevEl: `.${block}__box-btn--prev`,
			nextEl: `.${block}__box-btn--next`,
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

	// slider end

	// cards

	/* (по логике здесь необходимо сделать так чтобы высота задавалась при Resize,
	а также throttle сделать для того, чтобы не вызывался Resize на каждом пикселе) */

	/*Если от той высоты, которую занимает блок (самый большой) при том, когда он hidden, 
	сделать быстрый просмотр его высоты, когда он открыт и откусить это расстояние от него, 
	то выстоу можно будет задать ту, которую он займет (пока это лучшее что смог придумать)*/

	const arrowBtn = document.querySelectorAll(`.${block}__el-card-btn`);

	const cards = document.querySelectorAll(`.${block}__box-card`);

	let lastHeight = 0;

	const box = document.querySelector(`.${block}__box-cards`);

	cards.forEach(element => {

		if (element.scrollHeight > lastHeight) {

			lastHeight = element.scrollHeight;
		}

	});

	box.style.height = lastHeight + 'px';

	arrowBtn.forEach(element => {
		element.addEventListener('click', () => {

			const activeCard = document.querySelector(`.${block}__box-card._active`);
			const parent = element.closest(`.${block}__box-card`);

			if (parent != activeCard) {
				parent.classList.add('_active');
				activeCard.classList.remove('_active');
			}
		});
	});

	// cards end



});

