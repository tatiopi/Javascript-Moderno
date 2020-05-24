import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener del formulario
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        UI.divMensajes.innerHTML = 'Error...todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    } else {
        // El formulario esta completo , realizar consulta a la API
        const api = new API(artista, cancion);
        const respuesta = api.consultarAPI().then(data => {
            if (data.respuesta.lyrics) {
                const letra = data.respuesta.lyrics;
                UI.divResultado.textContent = letra;
            } else {
                UI.divMensajes.innerHTML = 'La cancion no existe , prueba con otra busqueda';
                UI.divMensajes.classList.add('error');
                setTimeout(() => {
                    UI.divMensajes.innerHTML = '';
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBuscar.reset();
                }, 3000);
            }
        });
    }
})