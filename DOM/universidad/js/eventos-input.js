const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);
// busqueda.addEventListener('blur', obtenerEvento);
// busqueda.addEventListener('cut', obtenerEvento); // cuando alguien corta el texto (al portatpales)
// busqueda.addEventListener('copy', obtenerEvento); // cuando alguien copia el texto (al portatpales)
// busqueda.addEventListener('paste', obtenerEvento); // cuando alguien pega  el texto (al portatpales)
// busqueda.addEventListener('input', obtenerEvento); // revisa todos los anteriores
// busqueda.addEventListener('change', obtenerEvento); // selects

function obtenerEvento(e) {
    console.log(busqueda.value);
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO ${e.type}`);
}