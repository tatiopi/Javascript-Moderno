const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// CLICK
// boton.addEventListener('click', obtenerEvento);
// DOBLECLICK
//boton.addEventListener('dblclick', obtenerEvento);
// MOUSE ENTER
//boton.addEventListener('mouseenter', obtenerEvento);
// MOUSE LEAVE
//boton.addEventListener('mouseleave', obtenerEvento);
// MOUSE OVER
//boton.addEventListener('mouseover', obtenerEvento);
// MOUSE OUT
//boton.addEventListener('mouseout', obtenerEvento);
// MOUSE DOWN
// boton.addEventListener('mousedown', obtenerEvento);
// MOUSE UP
// boton.addEventListener('mouseup', obtenerEvento);

function obtenerEvento(e) {
    //e.preventDefault();
    console.log(`EVENTO ${e.type}`);
}