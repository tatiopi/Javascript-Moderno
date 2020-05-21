const eventbrite = new EventBrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const textoBuscador = document.getElementById('evento').value;

    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    console.log(textoBuscador);
    console.log(categoriaSeleccionada);

    // r
    if (textoBuscador !== '') {
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada);
    } else {
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }

})