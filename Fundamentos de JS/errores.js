try {
    algo();
} catch (error) {
    console.log(error);
} finally {
    console.log('No le importa , ejecuta de todos modos');
}

obtenerClientes();

function obtenerClientes() {
    console.log('Descargando...');
    setTimeout(() => {
        console.log('Complento');
    }, 3000);
}