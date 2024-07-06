/*Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que se complete una operacion asincrónica o algún otro tipo de evento. Esto es fundamental porque permite que ciertas operaciones se ejecuten una vez que otras operaciones mas lentas se completen, sin bloquear el hilo principal de ejecucion.

La asincronia se refiere a la capacidad de ejecutar multiples tareas independientes en paralelo o en un orden no predefinido. En terminos simples, es la capacidad de realizar operaciones sin tener que esperar a que una operacion anterior termine antes de comenzar la siguiente.

El setTimeout es una función en JavaScript que se utiliza para ejecutar una función o evaluar una expresión después de que haya transcurrido un tiempo especificado, medido en milisegundos. Es una manera de introducir una pausa o retraso en la ejecución de cierto código, lo que es útil para simular operaciones asincrónicas, animaciones, o para manejar situaciones donde se necesita un retardo antes de realizar alguna acción.

setTimeout(función, tiempo_en_milisegundos);

función: Es la función que se ejecutará después de que transcurra el tiempo especificado.
tiempo_en_milisegundos: Es el tiempo en milisegundos que debe pasar antes de que se ejecute la función.

*/

// EJEMPLO 1

const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    setTimeout(() => {
        let posts = ['Post1', 'Post2', 'Post3'];
        callback(posts);
    }, 2000);
};

obtenerPostDeUsuario('carlos', (posts) => {
    console.log(posts);
});

// EJEMPLO 2

function getUserData(userId, callback) {
    // Simulando una llamada asincronica
    setTimeout(() => {
        const user = {
            id: userId,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
        callback(user);
    }, 1000) // Simular un retardo de 1 segundo
}

// Llamamos a la funcion getUserData pasando un callback
getUserData(123, function(user) {
    console.log('Datos del usuario: ', user);
});