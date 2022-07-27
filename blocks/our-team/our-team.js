import Swiper from 'swiper/bundle';

document.addEventListener("DOMContentLoaded", () => {
	const block = 'our-team';

	// =====> slider

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

	// =====> cards

	/* (по логике здесь необходимо сделать так чтобы высота задавалась при Resize,
	а также throttle сделать для того, чтобы не вызывался Resize на каждом пикселе) */

	/* Если от той высоты, которую занимает блок (самый большой) при том, когда он hidden, 
	сделать быстрый просмотр его высоты, когда он открыт и откусить это расстояние от него, 
	то выстоу можно будет задать ту, которую он займет (пока это лучшее что смог придумать) */

	const arrowBtn = document.querySelectorAll(`.${block}__el-card-btn`);

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


	//slide

	let slideDown = (target, duration = 500) => {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;

		if (display === 'none')
			display = 'block';

		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.boxSizing = 'border-box';
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
		}, duration);
	}

	let slideUp = (target, duration = 500) => {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.boxSizing = 'border-box';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
		}, duration);
	}

	// slide end

	// =====> switch hidden and active

	let checkAnimate = true;

	function hand(e) {
		let btn = e.currentTarget;
		btn.classList.toggle('_active');

		if (checkAnimate) {
			slideDown(document.querySelector(`.${block}__box-menu`));
			checkAnimate = false;
		} else {
			slideUp(document.querySelector(`.${block}__box-menu`));
			checkAnimate = true;
		}
	}

	const switchRegular = () => {

		const menu = document.querySelector(`.${block}__menu`);

		if (window.innerWidth <= 1020) {

			menu.addEventListener('click', hand);

		} else {

			menu.removeEventListener('click', hand);
			document.querySelector(`.${block}__box-menu`).style.removeProperty("display");
		}

		// default

		const menuBtns = document.querySelectorAll(`.${block}__menu-btn`);
		const allTeams = document.querySelectorAll(`.${block}__box-team`);

		const nameService = document.querySelector(`.${block}__name-services`);
		nameService.innerHTML = document.querySelector(`.${block}__menu-btn._active`).querySelector(`.${block}__menu-btn-text`).innerHTML;

		// let idForOn;

		menuBtns.forEach(element => {
			element.addEventListener('click', e => {

				const btn = e.currentTarget;

				const activeBtn = document.querySelector(`.${block}__menu-btn._active`);
				const activeTeam = document.querySelector(`.${block}__box-team._active`);

				if (btn != activeBtn) {

					allTeams.forEach(el => {
						if (el.getAttribute('data-id') === btn.getAttribute('data-id')) {

							el.classList.add('_active');
							activeTeam.classList.remove('_active');

							let text = btn.querySelector(`.${block}__menu-btn-text`);
							nameService.innerHTML = text.innerHTML;

						}
					});

					btn.classList.add('_active');
					activeBtn.classList.remove('_active');

				}
			});
		});
	}

	switchRegular();

	let flag = false;

	window.addEventListener('resize', () => {

		if (!flag) {
			flag = true;
			setTimeout(() => {

				flag = false;
				switchRegular();

			}, 500);
		}

	});

	// switch hidden and active end

});


window.onload = () => {
	const block = 'our-team';

	const box = document.querySelector(`.${block}__box-cards`);

	function staticHeight() {
		const mainBox = document.querySelector(`.${block}__box-team[data-id='0']`);

		let display = window.getComputedStyle(mainBox).display;

		// resize

		if (display === 'none') {
			display = 'block';
			mainBox.style.display = display;

			const h = mainBox.clientHeight;

			mainBox.style.overflow = 'hidden';
			mainBox.style.height = 0;

			window.setTimeout(() => {
				mainBox.style.removeProperty('display');
				mainBox.style.removeProperty('height');
				mainBox.style.removeProperty('overflow');
			}, 1);

			box.style.height = h + 'px';
		} else {

			const hS = mainBox.clientHeight;
			console.log(hS);
			box.style.height = hS + 'px';

		}
	}

	staticHeight();

	// недо throttle

	let flag = false;

	window.addEventListener('resize', () => {

		if (flag === false) {
			flag = true;
			setTimeout(() => {

				flag = false;
				staticHeight();

			}, 250);
		}

	});
}

