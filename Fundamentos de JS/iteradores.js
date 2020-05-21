const ciudades = ['Londres', 'New york', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

/***
 * Entries : Nos devuelve llave y valor
 * Values  : Nos devuelve solo el valor
 */

// Entries iterador
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

// Entries para las ordenes
for (let entradas of ordenes.entries()) {
    console.log(entradas);
}

// Entries para el map
for (let entradas of datos.entries()) {
    console.log(entradas);
}

// values para las ciudaes
for (let entradas of ciudades.values()) {
    console.log(entradas);
}

// values para las ciudaes
for (let entradas of datos.values()) {
    console.log(entradas);
}

// Keys iterator
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

// por defectos nos imprime los valores

for (let entrada of ciudades) {
    console.log(entrada);
}

/*************************
 * ITERANDO POR UNA CADENA
 *************************/

const mensaje = 'Aprendiendo javascript'

for (let letra of mensaje) {
    console.log(letra);
}

/*************************
 * Iterar por un NodeList
 *************************/

const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlaces.href);
}