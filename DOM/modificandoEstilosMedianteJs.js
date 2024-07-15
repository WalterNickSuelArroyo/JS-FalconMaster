/*
	📌 Podemos modificar los estilos CSS de un elemento de dos formas:
	- Agregando y quitando clases CSS
	- Modificando los estilos "inline" de cada elemento.
*/

/*
	📌 Modificar estilos CSS mediante "inline styles".
*/
/*
	Los estilos inline se aplican arriba de los estilos que podamos tener en archivos CSS.
	Estos estilos se agregan en el atributo style del elemento.
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff'

/*
	📌 La ventaja de trabajar con estilos inline es que podemos modificar los estilos de forma dinamica.
*/
const cajas = document.querySelectorAll('.caja');
let tamano = 24;
const incrementarFuente = () => {
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamano + 1}px`;
        tamano++;
    });
}

const disminuirFuente = () => {
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamano - 1}px`;
        tamano--;
    });
}