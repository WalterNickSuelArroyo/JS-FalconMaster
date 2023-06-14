/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

const nombre = 'Carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = false;

// Ejemplo #1
// const permitirAcceso = edad > 18 && tieneEntrada; // true
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #2 - OR
// const permitirAcceso = (edad > 18 && tieneEntrada) || (tieneEntrada && tienePermiso);
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #3 - !
// Retorna true si un valor es negativo
const variable = true;
console.log(!variable); // false