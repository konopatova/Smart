$(document).ready(function () {

	$("#tel").mask("+7 (999) 99-99-999");


	var orderBtn = document.querySelector('#order');
	var closeBtn = document.querySelector('#close');
	var form = document.querySelector('.form__section');
	var overlay = document.querySelector('.overlay');

	orderBtn.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.toggle('open')
		overlay.classList.toggle('open')
	});
	closeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.remove('open')
		overlay.classList.remove('open')
	});
	overlay.addEventListener('click', (e) => {
		e.preventDefault();
		form.classList.remove('open')
		overlay.classList.remove('open')
	});
	form.addEventListener('submit', function (clickSubmit) {
		clickSubmit.preventDefault();
	})



});