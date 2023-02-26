const input = document.querySelector('#input');

input.addEventListener('focus', function() {
	input.classList.add('focus');
});

input.addEventListener('blur', function() {
	input.classList.remove('focus');
});
