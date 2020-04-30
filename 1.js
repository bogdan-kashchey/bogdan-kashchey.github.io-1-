var images = document.querySelectorAll('#slyde img');
var current = 0;

function sliderS() {
	for (var i = 0; i < images.length; i++) {
		images[i].classList.add('oppacity0');
	}
	images[current].classList.remove('oppacity0')
}


sliderS();
document.querySelector('.up').onclick = function () {
	if (current - 1 == -1) {
		current = images.length - 1;

	}

	else {
		current--;
	}
	sliderS();
};
document.querySelector('.down').onclick = function () {
	if (current + 1 == images.length) {
		current = 0;

	}

	else {
		current++;
	}
	sliderS();
};



let checkboxDark = document.querySelector('#dark'),
	labelDark = document.querySelector('.label-mod');
let darkcs;

labelDark.addEventListener('click', () => {
	if (!checkboxDark.checked) {
		darkcss = document.createElement('link');
		darkcss.rel = 'stylesheet';
		darkcss.href = 'style2.css';
		let head = document.querySelector('head');
		head.append(darkcss);
		console.log(darkcss);
	}
	else {
		darkcss.remove();
	}
})