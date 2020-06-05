let DB;

// selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#adminisrta');

// Esperar por el DOMReady
document.addEventListener('DOMContentLoaded', () => {
    // en la version siempre le ponemos un numero entero
    let crearDB = window.indexedDB.open('citas', 1);

    // si hay un error , enviarlo a la consola
    crearDB.onerror = function() {
            console.log('hubo un error');
        }
        // Si todo sale bien entonces mostrar en consola
    crearDB.onsuccess = function() {
        console.log('todo listo!!');

        // asignar a la base de datos
        DB = crearDB.result;
        console.log(DB);
    }

    // este metodo solo se ejecuta una vez , es ideal para crear el schema de la BD
    crearDB.onupgradeneeded = function(e) {
        // en evento en la misma base de datos
        let db = e.target.result;

        // definir el object store , toma 2 parametros nombre de la bd y las opciones
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        // crear los indices y campos de la base de dato, createIndex : nombre , keypath , y ociones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'mascota', { unique: false });
        objectStore.createIndex('telefono', 'mascota', { unique: false });
        objectStore.createIndex('fecha', 'mascota', { unique: false });
        objectStore.createIndex('hora', 'mascota', { unique: false });
        objectStore.createIndex('sintomas', 'mascota', { unique: false });
    }

    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();
        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        };

        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(nuevaCita);

        peticion.onsuccess = () => {
            form.reset();
            mostrarCitas();
        }

        transaction.oncomplete = () => {
            console.log('Cita agregada');
            mostrarCitas();
        }

        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    function mostrarCitas() {
        // limpair citas anteriores
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        let objectStore = DB.transaction('citas').objectStore('citas');

        // esto retorna una peticion
        objectStore.openCursor().onsuccess = function(e) {
            let cursor = e.target.result;
            if (cursor) {
                let citaHTML = document.createElement('li');
                // para ponerle un id unico
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                <p class="font-weight-bold"> Mascota <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold"> Cliente <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold"> Telefono <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold"> Fecha <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold"> Hora <span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold"> Sintomas <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;

                // añadir al padre
                citas.appendChild(citaHTML);

                // Consultar mas registros
                cursor.continue();
            } else {
                if (!citas.firstChild) {
                    headingAdministra.textContent = 'Agregar citas para comenzar';
                    let listdao = document.createElement('p');
                    listdao.classList('text-center');
                    listdao.textContent = 'No hay registros';
                }
            }
        }
    }
})