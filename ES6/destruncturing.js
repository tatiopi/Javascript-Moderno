const cliente = {
    tipo: 'Premium',
    nombre: 'Antonio',
    datos: {
        ubicacion: {
            pais: 'España',
            provincia: 'Alicante',
            ciudades: [
                'Alicante',
                'Valencia',
                'Castellon'
            ]
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

let { datos: { ubicacion: { pais } } } = cliente;

// console.log(pais);

const cliente2 = {
    nombre: 'Pedro',
    tipo: 'Premium'
}

let { nombre, tipo, saldo = 0 } = cliente2;

// console.log(saldo);

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
    idioma: 'Ingles'
}];

/**
 * Desestructurando Arreglos
 */

const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

// console.log(primeraCiudad);
// console.log(segundaCiudad);

const [, , , ciudad] = ciudades;
// console.log(ciudad);

// primer elemento del arreglo
[idioma] = ciudades;

// console.log(idioma);

const cliente3 = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2018']
}

let {
    datos: { residencia: { ciudad: ciudad2 } },
    movimientos: [uno]
} = cliente3;

console.log(uno);