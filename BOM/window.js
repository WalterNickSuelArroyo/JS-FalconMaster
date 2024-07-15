/*
	📌 El Browser Object Model nos permite poder acceder a propiedades y metodos del navegador web.
	Ejemplos de cosas que nos permite hacer:
	- Acceder a la ventana para conocer su tamaño
	- Trabajar con la barra de direcciones
	- Mostrar alertas
	- etc
	BOM (Browser Object Model): El BOM es una colección de objetos proporcionados por el navegador para interactuar con elementos fuera del contenido web, como la ventana del navegador, los cuadros de diálogo, y la barra de navegación. Incluye objetos como window, navigator, screen, history, location, entre otros. Estos objetos permiten controlar y manipular aspectos del navegador y de la ventana del navegador misma.
*/

/*
	📌 Window Object
	Representa la ventana del navegador.
	Las variables y funciones globales son parte del objeto de window
*/


// console.log(window);

//window.alert('Hola');

console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

/*
	📌 Trabajar con ventanas
	Con el BOM podemos:
	- Abrir y cerrar ventanas.
	- Mover ventanas.
	- Cambiar el tamaño de ventanas.
*/

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/
let ventana
const abrirVentana = () => {
    ventana = window.open('', 'Mi nueva ventana', 'width=500, height=500');
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!</h1>');
};

const cerrarVentana = () => {
    ventana.close();
}

/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/

console.log('Ancho de pantalla: ', window.screen.width);
console.log('Alto de pantalla: ', window.screen.height);

// Alto y ancho de pantalla sin contar la barra de windows
console.log('Ancho de pantalla sin barra de Windows:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de windows:', window.screen.availHeight);