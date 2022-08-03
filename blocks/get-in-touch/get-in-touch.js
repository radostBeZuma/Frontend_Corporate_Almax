document.addEventListener('DOMContentLoaded', () => {

	const block = 'get-in-touch';

	const contactForm = document.getElementById('contact-form');

	let elementForm = {
		name: document.getElementById('contact-name'),
		email: document.getElementById('contact-email'),
		question: document.getElementById('contact-question'),
		sketch: document.getElementById('contact-sketch'),
		sketchName: document.querySelector(`.${block}__name-upload-file`),
		submit: document.querySelector(`.${block}__form-send-btn`),
		get file() {
			return this.sketch.files[0];
		},
		get sketchNameFirst() {
			return this.sketchName.innerHTML;
		},
	};

	function msgClear(e) {

		const btn = elementForm.submit;

		if (e.target.closest(`.${block}__form-input-n-msg`)) {
			let parent = e.target.closest(`.${block}__form-input-n-msg`);

			if (e.target.classList.contains('_input-mistake')) {
				e.target.classList.remove('_input-mistake');
			}

			let msg = parent.querySelector(`.${block}__form-msg`);
			msg.innerText = '';

			btn.removeAttribute('disabled');
		}

	}

	function checkField(target, regular, field) {
		const targetValue = target.value;
		const nextEl = field.nextElementSibling;
		const btn = elementForm.submit;

		const regTextLatin = /^[a-zA-Z\s]*$/;
		const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (targetValue === '') {
			field.classList.add('_input-mistake');
			nextEl.innerText = 'The field is empty';
			btn.setAttribute('disabled', 'disabled');
		}
		else if (regular === 'email') {
			if (!regEmail.test(targetValue)) {
				field.classList.add('_input-mistake');
				nextEl.innerText = 'The field has an incorrect email';
				btn.setAttribute('disabled', 'disabled');
			}
		} else if (regular === 'text') {
			if (!regTextLatin.test(targetValue)) {
				field.classList.add('_input-mistake');
				nextEl.innerText = 'The field must contain latin letters';
				btn.setAttribute('disabled', 'disabled');
			}
		} else if (regular === 'testAllText') {

			const badWords = ['fuck', 'shit', 'ass'];

			// очистка от знаков препинания

			var punctuationless = targetValue.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
			var finalString = punctuationless.replace(/\s{2,}/g, " ");

			let rule = /\s{1,}/g;
			let stringParts = finalString.split(rule);

			let hasWord = [];
			stringParts.forEach(word => {
				if (badWords.includes(word))
					hasWord.push(word);
			});

			if (!hasWord.length == 0) {
				let str = hasWord.join(', ')

				field.classList.add('_input-mistake');
				nextEl.innerText = 'The field contains the data forbidden words: ' + str;
				btn.setAttribute('disabled', 'disabled');
			}


		}
	}

	elementForm.name.addEventListener("focus", msgClear);
	elementForm.name.addEventListener("blur", (e) => {
		checkField(e.target,
			'text',
			elementForm.name)
	});

	elementForm.email.addEventListener("focus", msgClear);
	elementForm.email.addEventListener("blur", (e) => {
		checkField(
			e.target,
			'email',
			elementForm.email
		)
	});

	elementForm.question.addEventListener("focus", msgClear);
	elementForm.question.addEventListener("blur", (e) => {
		checkField(
			e.target,
			'testAllText',
			elementForm.question
		)
	});

	let skecthNameFirst = elementForm.sketchNameFirst;

	elementForm.sketch.addEventListener("change", () => {

		if (elementForm.file) {
			elementForm.sketchName.innerText = elementForm.file.name;
		} else {
			elementForm.sketchName.innerText = skecthNameFirst;
		}

	});

	// console.log(elementForm.email.validity);

	// function checkEmptField(target) {

	// 	let pref = 'js-form';
	// 	let jsClass = [`${pref}-text`, `${pref}-textarea`, `${pref}-file`, `${pref}-checkbox`];


	// }


	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();

		// text, textarea, file, checkbox 

		for (const elem of contactForm) {

			console.dir(elem);

			const { type } = elem;
			console.log(type);

			if (elem.tagName != "BUTTON") {


			}


		}

	});







	// let str = 'пока    показ     пивет';



	// let hasWord = [];
	// stringParts.forEach(word => {
	// 	if (badWords.includes(word))
	// 		hasWord.push(word);
	// });

	// console.log(hasWord);

	// elementForm.email.addEventListener("blur", emailCheck);


	// elementForm.sketch.addEventListener('change', () => {
	// 	let nameFile = document.querySelector(`.${block}__name-upload-file`);

	// 	let file = elementForm.sketch.files['0'];

	// 	nameFile.innerHTML = file.name;


	// 	console.log('da');
	// });


	// myForm.addEventListener('submit', (e) => {
	// 	e.preventDefault();


	// 	fetch('/nedo-server/server.php', {
	// 		method: 'POST',
	// 		body: new FormData(myForm)
	// 	})
	// 		.then((response) => {
	// 			console.log(response.text);
	// 			//do something awesome that makes the world a better place
	// 		});
	// });


});