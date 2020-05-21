// Object literal 
const cliente = {
    nombre: 'Alejandro',
    saldo: 1200,
    tipoCliente: function() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        }

        return tipo;
    }
};

console.log(cliente.tipoCliente());

// Metodo alternativo (antes de ECMASCRIPT 6)

function cliente1(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

const persona = new cliente1('Pedro', 20000);
const persona2 = new cliente1('Alejandro', 3000);
console.log(persona2);

//Funciones
const funcion1 = function(a, b) {
    return a + b;
}

const funcion2 = new Function('a', 'b', 'return a + b');

console.log(funcion1(2, 3));
console.log(funcion2(1, 3));

//Objectos
const persona1 = {
    nombre: 'Juan'
}

const persona3 = new Object({ nombre: 'Juan' });

console.log(persona1);
console.log(persona3);

// arreglos 
const arreglo1 = [1, 3, 4, 5];
const arreglo2 = new Array(1, 3, 4, 5, 6);


// Prototype

function Cliente3(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente3.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else {
        tipo = 'Normal';
    }
    return tipo;
};

Cliente3.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre} , tu saldo es de ${this.saldo},Tipo Cliente ${this.tipoCliente()}
     `;
}

const cliente4 = new Cliente3('Alejandro', 10000);
console.log(cliente4.nombreClienteSaldo());

// Retirar saldo
Cliente3.prototype.retirarSaldo = function(retiro) {
    this.saldo -= retiro;
}

console.log(cliente4);

/**
 * Heredar prototipos
 */


function Empresa(nombre, saldo, telefono, tipo) {
    // es como llamar al constructor de la clase 
    // "padre"
    Cliente3.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}


// se hereda las variables pero por ejemplo
// no se ha heredado las funciones (el proto)
// como lo hacemos?

Empresa.prototype = Object.create(Cliente3.prototype);
const empresa = new Empresa('Udemy', 1000000, 1234543, 'educacion');