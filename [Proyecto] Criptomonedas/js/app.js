const formulario = document.querySelector('#formulario');

const cotizador = new API('cc4e8668e51da737526540a50e4f3860e6edc1d1522ba20e9a2cb66d2a4932ab');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();

ui.mostrarMensaje('texto', 'clase');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer la moneda 
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer la criptomoneda
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        const resultado = cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }

});