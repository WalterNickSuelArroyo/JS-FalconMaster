# SECCION 3

## 54 y 55. Introduccion al Browser Object Model y Objeto Window

```js
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
```

## 56. Objeto Location y History

```js
/*
	📌 window.location
	Nos permite obtener la url de la barra de direcciones y cargar nuevos documentos.
	Recordar que podemos acceder a location directamente.
*/

// href - Retorna la URL de la página actual
console.log(location.href);

// hostname - Retorna el host de la página actual
// Abriendo el archivo local nos retorna undefined pero podemos probar desde la consola en otra pagina.
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);

// assign - Nos permite cargar un nuevo documento
const cargarDocumento = () => {
	location.assign('https://google.com');
};

/*
	📌 window.history
	Contiene el historial de la pestaña de nuestro navegador.
	Nos permite regresar o ir adelante.
*/

const regresar = () => {
	history.back();
	// history.forward();
};
```

## 57. Objeto Navigator

```js
/*
	📌 window.navigator
	Contiene informacion del navegador web del usuario
*/

// Comprobar si las cookies estan activadas
/*
Las cookies son pequeños archivos que los sitios web guardan en tu navegador. Sirven para recordar información sobre ti, como tus preferencias de sitio, inicio de sesión o carrito de compras. Esto permite una experiencia personalizada y eficiente cuando vuelves al sitio.
*/
console.log('Cookies activadas:', navigator.cookieEnabled);

//Obtener el encabezado que el navegador envia.
/* 
	Nota: No utilizarlo para detectar el navegador del usuario:
	- Ya que varios navegadores pueden usar el mismo encabezado
	- Y se puede editar manualmente

    El código console.log(navigator.userAgent); se utiliza en JavaScript para mostrar información sobre el navegador y el dispositivo que está accediendo a la página web. Al ejecutarlo, verás en la consola del navegador detalles como el nombre del navegador, la versión, el sistema operativo y a veces incluso información sobre el dispositivo, como el tipo de dispositivo y la plataforma.
*/
console.log(navigator.userAgent);

// Obtener el lenguaje o idioma del navegador web del usuario
console.log(navigator.language);

// Obtener si el navegador web esta conectado a internet
console.log(navigator.onLine);
```

## 58. Alertas

```js
/*
	📌 Ventanas de Alerta
	El navegador web puede mostrar 3 ventanas de alerta mediante javascript
*/

/*
	📌 Alerta
	Para informarle al usuario de algo.
*/
// window.alert('Hola usuario!');

/*
	📌 Ventana de confirmación(confirm())
	Una ventana donde el usuario puede aceptar o cancelar.
	Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/

const ingresar = () => {
	const accesoPermitido = confirm('¿Eres mayor de edad?');
	if (accesoPermitido) {
		alert('Bienvenido!');
	} else {
		alert('Le vamos a decir a tus padres!');
	}
};

/*
	📌 Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/

const saludo = () => {
	const nombre = prompt('Escribe tu nombre');
	alert(`Bienvenido ${nombre}`);
};
```

## 59. Funciones de tiempo

```js
/*
	📌 Eventos de Tiempo
	El Browser Object Model tambien nos da acceso a eventos de tiempo que nos permitiran
	ejecutar código cada cierto tiempo.

	Tenemos 2 metodos disponibles para trabajar con tiempo:
	- setTimeOut
	- setInterval
*/

/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

// const saludo = () => {
// 	console.log('Hola!');
// };

// const iniciar = () => {
// 	console.log('Iniciando Timer');
// 	setTimeout(saludo, 5000);
// };

/*
	setTimeout nos devuelve un un id para identificar el temporizador.
	Podemos guardar ese id y luego utilizarlo para limpiar el temporizador.
*/
// let id;
// const iniciar = () => {
// 	console.log('Iniciamos el timeout');
// 	id = setTimeout(() => {
// 		console.log('Hola!');
// 	}, 5000);

// 	// Podemos acortarlo:
// 	// setTimeout(() => console.log('Saludos Carlos!'), 1000);
// };

// const parar = () => {
// 	console.log('Paramos la ejecución del timeout');
// 	clearTimeout(id);
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/
let cuenta = 0;
let id;

const iniciar = () => {
	id = setInterval(() => {
		cuenta++;
		console.log(cuenta);
	}, 1000);
};

const parar = () => {
	console.log('Paramos la cuenta');
	clearInterval(id);
};
```

## 60. Cookies

```js
/*
	📌 Cookies
	Las cookies son pequeños archivos de texto que se guardan en la computadora del usuario.
	Estos archivos o cookies se utilizan para guardar información y que no se pierda al refrescar la página.
	
	Usos:
	- Guardar informacion del usuario que no queremos guardar en la base de datos.
	- Guardar preferencias o configuración del usuario.

	Las cookies se escriben como las variables:
	identificador=valor

	Otro uso de las cookies es cuando un navegador web va a mandar hacer un peticion a un servidor,
	las cookies que pertenecen a esa pagina son enviadas en la petición.
	De esta forma la información se guarda en la computadora del usuario pero el servidor puede acceder a ella.

	Con Javascript podemos, crear, editar y borrar cookies.
*/

/*
	Crear una cookie
	Al crear la cookie podemos tambien especificar cuando expira la cookie.
	Nota: Si no usamos la extension de Live Server no funcionara correctamente.
*/
const crearCookie = () => {
	document.cookie = 'nombre=Carlos';

	// Con expiración:
	// document.cookie = 'nombre=Carlos; expires=1 Jan 2023 01:00:00 UTC';
};

const iniciarSesion = () => {
	const usuario = prompt('Usuario:');
	document.cookie = `usuario=${usuario};expires=1 Dec 2022 01:00:00 UTC`;
	alert('Sesión Iniciada');
};

/*
	Leer cookies
*/
// const cookies = document.cookie;
// console.log(cookies);


/*
	Forma para obtener el usuario de las cookies.
*/
// Definimos la variable donde guardaremos el usuario
let usuario;

// Transformamos las cookies en un arreglo.
const cookies = document.cookie.split(';');

// Recorremos las cookies.
cookies.forEach((cookie) => {
	// Por cada cookie obtenemos su propiedad.
	const propiedad = cookie.split('=')[0];
	// Si la propiedad es usuario.
	if (propiedad === 'usuario') {
		// Tomamos el valor y lo guardamos en la variable.
		usuario = cookie.split('=')[1];
	}
});

// Comprobamos si hay un usuario;
if (usuario) {
	console.log('Hola ' + usuario);
} else {
	console.log('Por favor inicia sesión');
}

/*
	📌 Modificar cookies
	Para modificar una cookie basta con sobreescribir la anterior.
	Por ejemplo si iniciamos sesión con otro nombre.
*/

/*
	📌 Borrar cookies
	Para borrar una cookie tenemos que poner la fecha de expiración en el pasado.
	El navegador detectara que la cookie ya expiro y al reiniciar el navegador se borrara.
*/
const cerrarSesion = () => {
	document.cookie = 'usuario=; expires=01 Jan 2000 00:00:00 UTC';
	console.log('Hasta luego!');
};
```