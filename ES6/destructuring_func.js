function reservacion(completo, {
    metodoPago = 'efectivo',
    cantidad = 0,
    dias = 0
} = {}) {
    //opciones = opciones || {};

    // Forma antigua
    // let metodo = opciones.metodoPago,
    //     cantidad = opciones.cantidad,
    //     dias = opciones.dias;

    // Moderno
    //let { metodo, cantidad, dias } = opciones;


}

reservacion(false, {
    metodoPago: 'tarjeta',
    cantidad: 2000,
    dias: 3
});