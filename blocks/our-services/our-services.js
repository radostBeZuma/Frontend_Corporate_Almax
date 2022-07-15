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

	// max-width: 1020px
	if (window.innerWidth <= 1020) {

		menu.addEventListener("click", e => {

			if (e.target.closest(".our-services__services-now")) {
				menu.classList.toggle("active");
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

	});
});