document.addEventListener("DOMContentLoaded", () => {

	const block = "our-services";

	let wrapBtns = document.querySelector(`.${block}__box-menu`);
	let allServices = document.querySelectorAll(`.${block}__el-content`);

	let menu = document.querySelector(".our-services__services-now");
	let nameService = document.querySelector(".our-services__name-services");

	let activeSer = wrapBtns.querySelector(".our-services__menu-btn._active");
	let nameActiveSer = activeSer.querySelector(`.${block}__menu-btn-text`);

	nameService.innerHTML = nameActiveSer.innerHTML;

	wrapBtns.addEventListener("click", e => {

		let allBtns = wrapBtns.children;

		for (let i = 0; i < allBtns.length; i++) {
			const el = allBtns[i];

			if (el.classList.contains("_active")) {
				activeBtn = el;
			}
		}

		let btn = e.target.closest(".our-services__menu-btn");

		if (btn) {

			let btnId = btn.getAttribute("data-id");

			let service, activeEl;

			for (let i = 0; i < allServices.length; i++) {
				const el = allServices[i];

				if (el.getAttribute("data-id") == btnId) {
					service = el;
				}

				if (el.getAttribute("data-state") == "active") {
					activeEl = el;
				}
			}

			if (activeEl != service) {
				service.setAttribute("data-state", "active");
				activeEl.removeAttribute("data-state");
				btn.classList.add('_active');
				activeBtn.classList.remove('_active');


				let text = btn.querySelector(`.${block}__menu-btn-text`);
				nameService.innerHTML = text.innerHTML;

				if (window.innerWidth <= 1020) {
					menu.classList.remove("active");
				}
			}
		}
	});

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

	let checkAnimate = true;

	// max-width: 1020px
	if (window.innerWidth <= 1020) {

		menu.addEventListener("click", e => {

			if (e.target.closest(".our-services__services-now")) {
				menu.classList.toggle("active");

				if (checkAnimate === true) {
					slideDown(document.querySelector(".our-services__box-menu"));
					checkAnimate = false;
				} else {
					slideUp(document.querySelector(".our-services__box-menu"));
					checkAnimate = true;
				}
			}
		});

	}

	window.addEventListener("resize", () => {

		if (window.innerWidth <= 1020) {

			menu.addEventListener("click", e => {

				if (e.target.closest(".our-services__services-now")) {
					menu.classList.toggle("active");
				}
			});

		}

		if (window.innerWidth > 1020) {
			document.querySelector(".our-services__box-menu").style.removeProperty("display");
		}
	});

});
