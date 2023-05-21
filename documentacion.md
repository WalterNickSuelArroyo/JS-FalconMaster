# SECCION 1

## 1. Introduccion al curso

![](img/1.PNG)

## 2. ¿Que necesitas para seguir el curso?

## 3. Descarga de recursos del curso

https://github.com/falconmasters/curso_javascript-

## 4. Que es Javascript

## 5. Iniciando la estructura del curso

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Mi primera pagina web con Javascript</title>
</head>

<body>
    <h1>Hola Mundo!</h1>
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

h1 {
	font-size: 80px;
}

h2 {
	font-size: 40px;
	font-weight: normal;
	margin-bottom: 40px;
	color: #848484;
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

## 6. Hola Mundo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Mi primera pagina web con Javascript</title>
    <!-- Forma #2 - Etiqueta Script en head-->
    <script defer>  //  Con defer esperamos que primero se cargue todo el contenido html
        alert('Se ejecuta desde el head');
    </script>

    <!-- Forma #3 - Archivo externo-->
    <script defer src="./holaMundo.js"></script>
</head>

<body>
    <h1>Hola Mundo!</h1>

    <!-- Forma #1 - Etiqueta Script -->
    <script>
        // Notas importantes:
        // - Javascript es sensible a mayusculas y minusculas.
        // - Respetar la sintaxis de tipo camel case. getElementById
        // - Punto y como al final de cada sentencia.

        //Comentarios de tipo linea
        /*
            Comentatios de vatias lineas
            (tipo bloque)
        */
       //El codigo comentado no se ejecuta
       //alert('Este codigo no se ejecuta');
        document.write("Hola Mundo");
        document.write("<h2>Como estas</h2>");
        alert("Soy una alerta");
        console.log('Hola, desde la consola');
    </script>
</body>

</html>
```

```js
alert('Hola mundo desde archivo externo');
```

## 7. Preparando los archivos de la seccion

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./estilos.css">
    <script defer src="./variables.js"></script>
    <title>Curso de Javascript</title>
</head>
<body>
    <h1>Curso de Javascript</h1>
    <h2>Competo, Practico y desde cero</h2>
</body>
</html>
```

## 8. Variables

```js
/*
	📌 Qué son las variables:
	- Espacios en memoria donde podemos guardar informacion, normalmente son valores pequeños que nuestro sitio web o aplicacion utilizarán.
*/

/* 📌 Reglas de las variables:
	- Todas las variables deben tener nombres únicos.
	- Deben empezar por al menos una letra.
	- También pueden empezar por el simbolo $ y _ pero es muy poco común.
	- No se pueden usar palabras reservadas como nombre. (ejemplo: for)
*/

/* 📌 Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

var edad;
//console.log(edad);

let nombre = 'Carlos';
nombre = 'Juan';
//console.log(nombre);

const correo = 'correo@correo.com';
//correo = 'correo2@gmail.com'

let telefono, pais, id;
telefono = 123456789;
//console.log(telefono);

const resultado = 4 + 4;
//console.log(resultado);

const nombre1 = 'Carlos ';
const nombre2 = 'Arturo';
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

let miVariable = 'texto';
miVariable = 7;
```

## 9. Tipos de datos (cadenas de texto y numeros)

```js
/* 📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

//Cadena de texto
const nombre = 'Carlos';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
//const parrafo3 = 'Este es un \'parrafo\'';

// Numero
const numero = 4;
const numero2 = -4.123;

// Booleano
const usuarioConectado = false;
const mayorQue = 10 > 2;
console.log(mayorQue);
```

## 10. Tipos de datos (arreglos, objetos y funciones)

```js
// Arrays - Arreglos
const arreglos = ['texto', 456, true, {propiedad : 'valor'}, [1, 2, 3]];

//Objeto
const persona = {
    nombre : 'Carlos',
    edad : 27,
    carro : {
        marca : 'toyota',
        color : 'negro',
    },
};
//console.log(persona.carro.color);

//Function
function hola() {
    console.log('Hola');
}
hola();

// Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.

//Undefined
//Undefined se usa para indicarnos que un valor no esta definido
```