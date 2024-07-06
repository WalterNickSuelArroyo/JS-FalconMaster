/*
    Named imports
*/

// import {nombre, obtenerPost} from './namedExports';
/*
Puedo generar un alias cuando importo
import {nombre as nombreImportado, obtenerPost} from './namedExports';
*/
// console.log('Mi nombre es: ' + nombre);
// console.log(obtenerPost());


/*
    Namespace imports
*/
// import * as datos from './namedExports';
// console.log(datos.nombre);
// console.log(datos.obtenerPost());

/*
    Default Imports
    La ventaja de aqui es que a la hora de importar puedo ponerle el nombre que yo quiera
*/
// import obtenerUsuario from './defaultExports';
// console.log(obtenerUsuario());



/*
    Empty Imports
    Carga todo el codigo pero sin hacer ningun objeto
*/
import './emptyExport';
import {correo} from './emptyExport';
console.log(correo);