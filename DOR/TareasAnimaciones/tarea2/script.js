const texto = document.querySelector('.texto');

texto.addEventListener('mouseover', function() {
	texto.style.fontSize = '30px';
});

texto.addEventListener('mouseout', function() {
	texto.style.fontSize = '12px';
});
