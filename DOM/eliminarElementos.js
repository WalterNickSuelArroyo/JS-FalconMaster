/*
	📌 Eliminar elementos del DOM
*/
const eliminarCaja = () => {
    const cajaEliminar = document.querySelector('#contenedor1 .caja');
    if (cajaEliminar) {
        const padre = cajaEliminar.parentElement;
        padre.removeChild(cajaEliminar);
    }
}