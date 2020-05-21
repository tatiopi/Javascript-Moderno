const esperando = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Se ejecuto');
    }, 5000);
});

esperando.then(function(mensaje) {
    console.log(mensaje);
});

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(console.log).catch(console.log)