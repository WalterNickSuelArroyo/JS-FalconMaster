/*
	📌 Eliminar eventos de un elemento
*/
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');

const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
};

//Click en boton 1
boton1.addEventListener('click', (e) => {
    primeraCaja.addEventListener('click', toggleClase);
});

//Click en boton 2
boton2.addEventListener('click', (e) => {
    primeraCaja.removeEventListener('click', toggleClase);
});
