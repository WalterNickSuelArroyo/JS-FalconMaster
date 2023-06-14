// Los operadores nos permiten asignar elementos, hacer cálculos básicos y comparaciones.

/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	++	Aumento
	--	Disminución
*/

const resultado = 10 % 3;
//console.log(resultado);

let numero = 1;
numero = numero + 1;    //numero++;
//console.log(numero);

/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Multiplicar un numero al valor de una variable.
	/=	Dividir un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

let numero2 = 10;
numero2 += 5;
//console.log(numero2)

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y typo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

const resultado3 = 5 > 1;
console.log(resultado3);

const resultado4 = 10 > 10;
console.log(resultado4);

const resultado5 = 10 == 10;
console.log(resultado5);

const resultado6 = 10 == '10';  //true
console.log(resultado6);

const resultado7 = 10 === '10';  //false
console.log(resultado7);

const resultado8 = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';  //false
console.log(resultado8);