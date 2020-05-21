document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    const xhr = new XMLHttpRequest();

    // abrir conexion
    xhr.open('GET', 'datos.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.response}</h1>`;
        }
    }

    xhr.send();

}