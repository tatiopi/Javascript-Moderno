// Composicion
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = (info) => ({
    email(email) {
        console.log(`guardando email en ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Correo : ${info.email}`);
    }
});



function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(info, obtenerNombre(info), guardarEmail(info), obtenerNombre(info), obtenerEmail(info));
}

function Empleado(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(info, obtenerNombre(info), guardarEmail(info), obtenerNombre(info), obtenerEmail(info));
}

const cliente = Cliente('Juan');
cliente.mostrarNombre();
cliente.email('cliente@cliente.com');
cliente.mostrarEmail();

const empleado = Empleado('Pedro');
empleado.mostrarNombre();
empleado.email('cliente@cliente.com');
empleado.mostrarEmail();