const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI() {
    const xhr = new XMLHttpRequest();

    // Abrir conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Cargar datos
    xhr.onload = function() {
        if (xhr.status === 200) {
            const respuesta = JSON.parse(this.responseText);

            let contenido = '';
            respuesta.forEach(function(post) {
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    };

    xhr.send();
}