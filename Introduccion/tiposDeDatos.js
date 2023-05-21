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
//console.log(mayorQue);

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
