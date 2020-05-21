// Event Bubling 
// cuando tienes un elemento  y das click en el , otros elementos son seleccionados

const card = document.querySelector('.card');
const info = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', (e) => {
    debugger;
    e.stopPropagation();
    e.preventDefault();
    console.log('Click en card');
});

info.addEventListener('click', (e) => {
    debugger;
    e.preventDefault();
    e.stopPropagation();
    console.log('Click en info curso');
});

info.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Click en  agregarCarrito');
});

/***
 * al hacer click en el boton agregar al carrito se lanzaron los 3 eventos , el evento 
 * se propaga hacia arriba , ejecutando el codigo de los 3 , en cambio si le doy por ejemplo a card 
 * no pasaria esto.
 * Para detenerlo usamos : e.stopPropagation();
 ***/