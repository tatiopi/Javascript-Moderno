const edad = 18;

if (edad === 18) {
    console.log('si puedes entrar');
} else {
    console.log('No puedes enrtar');
}

// comprobar que un valor tiene valor

const puntuaje = 1000;

// iniramos
//if (puntuaje) {
if (typeof puntuaje != 'undefined') {
    // finramos
    console.log(`el puntuaje fue de ${puntuaje}`);
} else {
    console.log('No hay puntuaje');
}

console.log(puntuaje);

// **********************************************
// SWITCH
// **********************************************

const metodoPago = 'efectivo'

switch (metodoPago) {
    case "efectivo":
        console.log(`El usuario pago con ${metodoPago}`);
    case "cheque":
        console.log(`El usuario pago con ${metodoPago}`);
    case "tarjeta":
        console.log(`El usuario pago con ${metodoPago}`);
    default:
        console.log('Metodo de pago no soportado');
}