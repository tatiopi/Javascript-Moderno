const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    console.log(buscador.value.length);
    if (buscador.value.length >= 5) {
        ui.obtenerSugerencias(buscador.value)
    } else {
        ui.mostrarEstablecimientos();
    }
})