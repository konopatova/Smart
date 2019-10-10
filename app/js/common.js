$(document).ready(function () {

	$("#tel").mask("+7 (999) 99-99-999");


	var orderBtn = document.querySelector('#order');
	var closeBtn = document.querySelector('#close');
	var form = document.querySelector('.form__section');
	var overlay = document.querySelector('.overlay');
	var checkbox = document.querySelector('.checkbox');
	var submitBtn = document.querySelector('#submit');

	orderBtn.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.toggle('open');
		form.style.animation = "modalOpen 0.3s ease-in-out";
		overlay.classList.toggle('open');
	});
	closeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.remove('open');
		overlay.classList.remove('open');
	});
	overlay.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.remove('open');
		overlay.classList.remove('open');
	});
	checkbox.addEventListener('change', function () {
		form.onsubmit = function (clickSubmit) {
			if (checkbox.checked == false) {
				clickSubmit.preventDefault();
				submitBtn.disabled = true;
			} else {
				submitBtn.disabled = false;
				return true;
			}
		}
	});



});