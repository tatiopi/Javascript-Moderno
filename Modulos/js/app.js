//1º forma de importar
import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
import {
    nombreEmpresa,
    ahorro as ahorroEmresa,
    categoria,
    mostrarInformacion as informacionEmpresa,
    Empresa
} from './empresa.js';

console.log(nombreCliente);
console.log(nombreEmpresa);

console.log(ahorro);
console.log(ahorroEmresa);
console.log(categoria);

let empresa = new Empresa(nombreEmpresa, ahorroEmresa, categoria);
console.log(empresa.muestraInformacion());


/****************
 * **************
 * CLASE ANTERIOR
 * ****************
 ******************/
//2º forma de importar
//import * as cliente from './cliente.js';

// const info = mostrarInformacion(nombreCliente, ahorro);
// let cliente = new Cliente(nombreCliente, ahorro);