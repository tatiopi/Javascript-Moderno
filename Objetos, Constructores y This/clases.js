class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} , tu saldo es de ${this.saldo}`;
    }

    static bienvenido() {
        return `Bienvenido al cajero`;
    }

    // clase Creando una Clase
    /*tipoCliente() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'gold'
        } else if (this.saldo > 5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro;
    }

    static bienvenido() {
        return `Bienvenido al cajero`;
    }*/


}

// const maria = new Cliente('Maria', 'Perez', 10000);
// const saldo = maria.imprimirSaldo();
// console.log(maria.tipoCliente());
// maria.retirarSaldo(3000);
// console.log(maria.imprimirSaldo());
// console.log(Cliente.bienvenido());

class Empresa extends Cliente {
    constructor(nombre, apellido, saldo, telefono, tipo) {
        super(nombre, apellido, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    // para reescribir volvemos a definir la funcion
    static bienvenido() {
        return `Bienvenido al cajero para empresas`;
    }
}

const empresa = new Empresa('Empresa1', "Empresita", 10000, 966363781, 'Construccion');

console.log(empresa.imprimirSaldo());