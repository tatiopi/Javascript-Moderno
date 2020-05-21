const persona = {
    nombre: 'Alejandro',
    apellido: 'Ramos',
    profesion: 'Diseñador grafico',
    email: 'alexramos820@gmail.com',
    edad: 36,
    hogar: {
        ciudad: ' Alicante'
    },
    fechaCumple: function() {
        return new Date().getFullYear() - this.edad
    }
}

console.log(persona['hogar']);
console.log(persona.fechaCumple());

// Arreglo de objetos

const autos = [{
    modelo: 'Mustang',
    motor: 6.2
}, {
    modelo: 'Camaro',
    motor: 6.1
}];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor} `);
}

autos[0].modelo = 'Audi';

console.log(autos);