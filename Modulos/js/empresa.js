// exportar variables
export const nombreEmpresa = 'Juan';
export let ahorro = 200000000;
export const categoria = 'Aprendizaje';

// exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente ${nombre} - Ahorro ${ahorro} - Categoria : ${categoria}`
}

// importar clases
import { Cliente } from './cliente.js';

// extender la clase cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    muestraInformacion() {
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}