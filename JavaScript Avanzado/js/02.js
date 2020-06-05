/** this con Explitcit Binding */

function persona(e1, e2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${e1} y el ${e2}`);
}

const informacion = {
    nombre: 'Juan',
    trabajo: 'Programador'
}

const generosMusicales = ['Heavy Metal', 'Rock']

persona.call(informacion, generosMusicales[0], generosMusicales[1]);
persona.apply(informacion, generosMusicales);
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
console.log(nuevaFn());