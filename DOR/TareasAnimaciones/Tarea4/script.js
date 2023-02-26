const pelota = document.querySelector('#pelota');
const boton = document.querySelector('#boton');

pelota.addEventListener('animationend', function () {
    pelota.style.animation = 'none';
});
boton.addEventListener('click', function () {
    pelota.style.animation = 'caida 9.4s forwards cubic-bezier(0.68, 0.18, 0.21, 0.95)';

});
