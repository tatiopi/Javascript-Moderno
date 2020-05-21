/************************************************
 *  Reemplazando elementos con JavaScript
 ************************************************/

const nuevoEncabezado = document.createElement('h2');

// agregar un encabezado
nuevoEncabezado.id = 'encabezado';
// agregar un nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// Elemento anterior (sera reemplezado)
const anterior = document.querySelector('#encabezado');

// Elemento padre
const elPadre = document.querySelector('#lista-cursos');

// reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);

/************************************************
 *  Agregando y quitando clases y otros atributos
 ************************************************/

const enlaces = document.querySelectorAll('.enlace');

enlaces[0].remove();

const navegacion = document.querySelector('#principal');
try {
    navegacion.removeChild(enlaces[0]);
} catch (err) {
    console.log(err);
}

const primerLi = document.querySelector('.enlace');

let elemento;

// Obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// leer atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
elemento = primerLi;

/******************************************
 * Creando elementos con Javascript
 ******************************************/

const enlace = document.createElement('a');

// agregamos una clase
enlace.className = 'nuevo-id';
enlace.setAttribute('href', '#');
enlace.setAttribute('data-id', 20);
enlace.textContent = 'Nuevo Enlace';

document.querySelector('#secundaria').appendChild(enlace);
elemento = primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id');

console.log(elemento);