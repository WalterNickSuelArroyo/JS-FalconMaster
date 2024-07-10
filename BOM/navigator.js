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