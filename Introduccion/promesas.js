/* 
Las promesas en JavaScript son una forma de manejar operaciones que tardan en completarse, como solicitudes de datos o temporizadores. Imagina que pides una pizza; el pizzero te promete que llegará en 30 minutos. Durante esos 30 minutos, puedes hacer otras cosas en lugar de quedarte esperando por la puerta. La promesa en JavaScript funciona de manera similar: te permite continuar ejecutando otras tareas mientras espera que algo (como la carga de datos) se complete.

let promesaDePizza = new Promise(function(resolve, reject) {
    let pizzaEstaLista = true; // Cambia esto a false para ver cómo manejar errores

    if (pizzaEstaLista) {
        resolve("¡Tu pizza está lista!");
    } else {
        reject("Ocurrió un problema, la pizza se quemó.");
    }
});

promesaDePizza.then(function(resultado) {
    console.log(resultado); // Se ejecuta si todo sale bien
}).catch(function(error) {
    console.log(error); // Se ejecuta si hay un error
});

- Promise es un objeto que representa la eventual finalización o fracaso de una operación asíncrona.
- resolve se llama si la operación fue exitosa (en este caso, la pizza está lista).
- reject se llama si algo sale mal (por ejemplo, la pizza se quemó).
- then es un método que se ejecuta cuando la promesa se cumple exitosamente.
- catch es un método que maneja el caso cuando la promesa falla.


*/
const promesa = new Promise((resolve, reject) => {
    // Accion que se ejecutará
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('La operacion tuvo exito');
        } else {
            reject('La operacion no tuvo exito');
        }
    }, 4000)
});

promesa.then((mensaje) => {
    alert(mensaje);
})

promesa.catch((mensaje) => {
    alert(mensaje);
})