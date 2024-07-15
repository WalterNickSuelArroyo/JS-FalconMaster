# SECCION 4: DOCUMENT OBJECT MODEL

## 61. Introduccion al Document Object Model

DOM (Document Object Model): El DOM es una representación estructurada y jerárquica de un documento HTML (o XML) que está siendo mostrado en un navegador. Esencialmente, el DOM convierte cada elemento del documento (como etiquetas HTML) en objetos que JavaScript puede manipular. Esto permite modificar el contenido, la estructura y los estilos de una página web de manera dinámica mediante el uso de métodos y propiedades proporcionados por el DOM.

## 62. Creando los archivos de la seccion

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="estilos.css" />
		<script defer src="./creandoElementos.js"></script>
		<title>Document Object Model</title>
	</head>
	<body>
		<div class="contenedor-principal">
			<div class="contenedor" id="contenedor1">
				<div class="caja">Caja 1</div>
				<div class="caja">Caja 2</div>
				<div class="caja">Caja 3</div>
			</div>
			<div class="contenedor" id="contenedor2">
				<div class="caja">Caja 1</div>
				<div class="caja">Caja 2</div>
				<div class="caja">Caja 3</div>
			</div>
		</div>
	</body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Poppins', sans-serif;
	min-height: 100vh;
	width: 100%;
	background: #eaeaea;
	color: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.contenedor-principal {
	width: 90%;
	max-width: 1000px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;
}

.contenedor {
	display: grid;
	gap: 40px;
	padding: 40px;
	border: 2px solid #000;
}

.caja {
	background: #fcfcfc;
	padding: 40px;
	font-size: 24px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.caja.activa {
	background: #2553df;
	color: #fff;
}

button {
	border: none;
	background: #2553df;
	font-family: 'Poppins', sans-serif;
	font-size: 22px;
	cursor: pointer;
	border-radius: 10px;
	color: #fff;
	padding: 14px 28px;
	margin-bottom: 20px;
}

button:hover {
	background: #1942be;
}
```


## 63. Seleccionando elementos del DOM (parte 1)


## 64. Seleccionando elementos del DOM (parte 2)

```js
/*
	📌 El Document Object Model nos da metodos que podemos utilizar
	para poder obtener elementos de la página web.
	- getElementById
	- children
	- parentElement
	- getElementsByTagName
	- getElementsByClassName
	- querySelectorAll
	- querySelector
	- closest
	- matches
*/

/*
	📌 getElementById
	Nos permite obtener un elemento en base a su atributo id
*/
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

/* 
	📌 children
	Nos permite obtener los elementos hijo
*/
console.log(contenedor1.children);

/*
	📌 parentElement
	Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);

/*
	📌 getElementsByTagName
	Nos permite obtener una colección de elementos en base a la etiqueta.
	Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
const divs = document.getElementsByTagName('div');
console.log(divs);

// Las colecciones incluyen algunas propiedades especiales como length
console.log(`Tenemos ${divs.length} divs en la página`);

/*
	📌 getElementsByClassName
	Nos permite obtener una colección de elementos en base a su clase CSS.
	Nota: Devuelve una colección HTML.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

/*
	📌 querySelector
	Nos devuelve el primer elemento que coincida con un selector estilo CSS.
	Nota: Devuelve un nodelist.
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja);

/*
	📌 querySelectorAll
	Nos permite obtener una colección de elementos en base a un selector estilo CSS.
	Nota: Devuelve un nodelist. 
*/
const cajas = document.querySelectorAll('.contenedor-principal .caja');
console.log(cajas);

// nodelist tiene un metodo de tipo foreach para recorrer los elementos.
cajas.forEach((caja) => {
	console.log(caja.innerHTML);
});

/* 
	📌 closest
	Nos permite buscar de adentro hacia afuera en busca de un elemento
*/
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja.closest('.contenedor-principal'));

/* 
	📌 Podemos encadenar todos los metodos para obtener elementos.
*/
/* 
	Muchas veces con querySelector resolvemos casi cualquier caso.
	Pero aun asi tendremos situaciones donde tendremos que encadenar selectores.
*/
const contenedor2 = document.getElementById('contenedor2');
const contenedor2Caja2 = contenedor2.querySelector('.caja');
console.log(contenedor2Caja2);
```


## 65. Modificando elementos del DOM

```js
/*
	📌 A los elementos del DOM que obtenemos, Javascript les
	 agrega metodos y propiedades que nos permitiran modificarlos.
*/

/* 📌 elemento.innerHTML
	Nos permite cambiar el contenido HTML de un elemento
*/
const primeraCaja = document.querySelectorAll('.caja')[0];
primeraCaja.innerHTML = '<b>Hola!</b>';

/* 📌 elemento.attribute
	Nos permite acceder y cambiar atributos del elemento.
*/
primeraCaja.id = 'nuevoId';

/* 📌 elemento.setAttribute()
	Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', 1);
console.log(primeraCaja);

/* 📌 elemento.style.property
	Nos permite cambiar los estilos css de un elemento
*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';
```

## 66. Creando y agregando nodos al DOM

```js
/*
	📌 Agregando elementos al DOM
	
	Pasos a seguir:
	1. Crear un elemento del DOM
	2. Agregarle texto y atributos
	3. Insertar el elemento dentro del DOM
*/
const agregarCaja = () => {
    /*
		📌 1. Creamos el elemento
		createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
	*/
    const nuevaCaja = document.createElement('div');

    /*
		📌 2. Agregamos texto y atributos
	*/
    nuevaCaja.innerText = 'Nueva Caja !';
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa')

    /*
		📌 3. Agregamos el elemento al DOM
	*/
    const contenedor = document.getElementById('contenedor1');

    // .appendChild() - Agrega un elemento al final
    //contenedor.appendChild(nuevaCaja);

    /* .insertAdjacentElement() - Nos permite agregar un elemento 
	Valores:
		afterbegin - como primer elemento
		beforebegin - antes del elemento padre
		beforeend - como ultimo elemento
		afterend -  despues del elemento padre
	*/
    //contenedor.insertAdjacentElement("afterend", nuevaCaja);

    // .replaceWith() - Nos permite remplazar el elemento por otro
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
}
```

## 67. Eliminando elementos del DOM

```js
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
```

## 68. Modificando los estilos de los elementos del DOM con CSS

```js

/*
	📌 Podemos modificar los estilos CSS de un elemento de dos formas:
	- Agregando y quitando clases CSS
	- Modificando los estilos "inline" de cada elemento.
*/

/*
	📌 Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');

// classList - Nos permite obtener una lista de las clases del elemento
console.log(primeraCaja.classList);

// classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () => {
	primeraCaja.classList.add('activa');
};

// classList.remove() - Nos permite eliminar clases de un elemento
const eliminarClase = () => {
	primeraCaja.classList.remove('activa');
};

// classList.toggle() - Nos permite alternar clases de un elemento
const toggleClase = () => {
	primeraCaja.classList.toggle('activa');
};

// classList.contains() - Nos permite comprobar si el elemento contiene una clase
const comprobarClase = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase "activa"');
    } else {
        console.log('La caja no tiene la clase "activa"');
    }

    console.log('y contiene las siguientes clases');
    // classList.forEach() - Nos permite iterar sobre cada clase
    primeraCaja.classList.forEach(clase => {
        console.log(clase);
    });
}
```

## 69. Modificando los estilos de los elementos del DOM con Javascript

```js
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
```

## 70. Que son los eventos

En JavaScript, los eventos son acciones o sucesos que ocurren en el navegador y que pueden ser detectados para ejecutar código en respuesta a ellos. Estos eventos pueden ser provocados por el usuario (como hacer clic en un botón o mover el ratón), por el navegador (como la carga completa de una página) o por otros scripts que modifican el contenido de la página.

Algunos ejemplos comunes de eventos en JavaScript incluyen:

1. Eventos de Interacción del Usuario:

- click: Se dispara cuando se hace clic en un elemento.
- mouseover y mouseout: Se disparan cuando el puntero del ratón se mueve dentro y fuera de un elemento.
- keydown, keyup y keypress: Se disparan cuando se presionan o sueltan teclas en el teclado.

2. Eventos de Navegación y Carga:

- load: Se dispara cuando se completa la carga de todos los recursos de una página web.
- DOMContentLoaded: Se dispara cuando se completa la carga inicial del documento HTML, sin esperar a que se carguen hojas de estilo, imágenes y subframes.

3. Eventos de Formulario:

- submit: Se dispara cuando se envía un formulario.
- change: Se dispara cuando el valor de un campo de formulario cambia (útil en campos de entrada, selectores, etc.).

Para capturar estos eventos y responder a ellos, se utiliza el modelo de eventos de JavaScript, donde se asigna una función (llamada "handler" o "listener") a un evento específico en un elemento del DOM. Esto permite que el código JavaScript responda dinámicamente a las acciones del usuario o a cambios en el estado de la página.

## 71. Como agregar eventos

```js
/*
	📌 Eventos
	Los eventos en Javascript nos permiten reaccionar a cosas que ocurren en la página web
	Como por ejemplo reaccionar cuando:
	- la página termina de cargar
	- el usuario da click a un boton
	- pasa el mouse arriba de un elemento
	- escribe en un campo de texto
	- envia un formulario
	- etc.

	Hay cientos de eventos a los que podemos reaccionar:
	https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
*/

/*
	📌 Eventos como atributo de elementos HTML
	Podemos agregar algunos eventos como atributo de un elemento HTML
	Ejemplo:
	
	<button onClick="toggleClase()">Toggle Clase</button>
*/

// const toggleClase = () => {
// 	const caja = document.querySelector('.caja');
// 	caja.classList.toggle('activa');
// };

/*
	📌 Event Listener
	Una mejor forma de trabajar con eventos es agregando un listener.
	Un listener nos permitira vigilar cuando se ejecute un evento sin tener que ensuciar el código HTML.
*/
const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');
boton1.addEventListener('click', () => {
    primeraCaja.classList.toggle('activa')
})

/*
	📌 Agregando el evento a multiples elementos
	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
	Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.
*/
// const cajas = document.querySelectorAll('.caja');
// cajas.forEach((caja) => {
// 	caja.addEventListener('click', () => {
// 		console.log('Haz hecho click en una caja');
// 	});
// });

/*
	📌 Accediendo a información del evento
	Cuando trabajamos con eventListener, la funcion que le pasamos puede recibir como parametro el propio evento
	Este objeto contendra mucha informacion del evento.
*/
// const segundaCaja = document.querySelectorAll('.caja')[1];
// segundaCaja.addEventListener('click', (evento) => {
// 	console.log(evento);
// 	console.log(evento.target.innerText);
// });

// Ejemplo con todas las cajas
// const cajas = document.querySelectorAll('.caja');
// cajas.forEach((caja) => {
// 	caja.addEventListener('click', (e) => {
// 		console.log(`Haz hecho click en ${e.target.innerText}`);
// 	});
// });
```

## 72. Propagacion de eventos

```js
/*
	📌 Propagación de eventos
	Nota importante:
	Cuando agregamos un evento a un elemento, todos los elementos que esten dentro del que recibio el evento
	tambien recibiran el mismo evento.

	Es decir que si le aplicamos un evento a un contenedor padre, todos los hijos tendran tambien el evento.
*/
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('Hiciste click en el contenedor');
})

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    // Podemos evitar la propagación:
    e.stopPropagation();
    console.log('Hiciste click en la caja1');
})
```

## 73. Tipos de propagacion

```js
/*
	📌 	Cuando agregamos un evento a un elemento ese evento se propaga a los elementos hijo.
*/
/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
// document.querySelector('.contenedor').addEventListener('click', (e) => {
//     console.log('Click en el contenedor');
// }, false); // Solo es necesario ponerlo en el elemento padre.

// document.querySelector('.caja').addEventListener('click', () => {
// 	console.log('Click en la caja');
// });

/*
	📌 Capturing
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
document.querySelector('.contenedor').addEventListener('click', () => {
		console.log('Click en el contenedor');
	}, true);

document.querySelector('.caja').addEventListener('click', () => {
    console.log('Click en la caja');
});
```

## 74. Como eliminar eventos del DOM

```js
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

```

## 75. Delegacion de eventos

Sumado al tema de los eventos en mi canal de youtube tengo un video adicional en la que puedes aprender que es la delegación de eventos y como utilizarla para optimizar tu código.

Video:

https://youtu.be/GUTt0qKUDyU