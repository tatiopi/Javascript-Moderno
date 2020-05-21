const simbolo = Symbol();
const simbolo2 = Symbol('Descripcion aqui');

console.log(simbolo);

let nombre = Symbol();
let apellido = Symbol();

let persona = {}

// Si queremos agregar el simbolo comp parte del objeto , usamos los corchetes
persona.nombre = 'Juan'
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.saldo = 100;
persona.tipoCliente = 'Normal'

// no es lo mismo este nombre que el simboolo nombre , esto es una propiedad
persona.nombre = 'Juan';

//console.log(persona.nombre);

// para devolver el valor del symbol
//console.log(persona[nombre]);

for (let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}

// El for anterior saca nombre saldo y tipo cliente preo no los symbols , ya que no son propiedades