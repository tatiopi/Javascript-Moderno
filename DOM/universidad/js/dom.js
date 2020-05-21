// Coge el raiz 
let elemento = document;

// devuelve todo como un HTMLCollection
elemento = document.all;
elemento = document.body;
// dame el src de la  imagen nº 3 del array de imagenes 
document.images[2].getAttribute('src');

document.forms[0].id;
elemento = document.characterSet;

// scripts
elemento = document.scripts;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

/***************************************************************
 * GETELEMENTBYID
 **************************************************************/

elemento = document.getElementById('hero');
// console.log(elemento.innerText);
// console.log(elemento.textContent);

let encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';

/***************************************************************
 * QUERYSELECTOR
 **************************************************************/

// si quierisera por una clase seria con .
// Solo devuelve un solo elemento , el primero que encuenrta en el DOM
encabezado = document.querySelector('#encabezado');

encabezado.style.background = '#333';

// seleccionar una combinacion
encabezado = document.querySelector('.card img');

// usar css3 con queryselector
encabezado = document.querySelector('#principal a:first-child');
encabezado = document.querySelector('#principal a:nth-child(3)');

// console.log(encabezado);

/****************************************************************
 * getElementsByClassName
 ****************************************************************/

const enlaces = document.getElementsByClassName('enlace');
const enlaces_3 = document.getElementsByClassName('enlace')[3];


// console.log(enlaces);

/*************************************************
 * Mezclar getElementsByClassName y getElementById
 *************************************************/

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
//console.log(listaEnlaces);

const link = document.getElementsByTagName('a')[0];
//console.log(link);

/******************************************
 * Traversing en JavaScript (Padre al Hijo)
 ******************************************/

let navegacion = document.querySelector('#principal');

/**
 * Children : es una propiedad de un elemento , solo los elementos tienen .children , y todos esos hijos son del tipo elemento
 * ChildNodes : es una propiedad de Node .childNodes contiene  cualquier nodo
 * let el = document.createElement('div');
 * el.textContent = 'foo';
 * el.childrenNodes.length === 1 // Contiene un nodo text hijo
 * el.children.length === 0 // No tiene elementos hijos
 */

// ! ojo childNodes devuelve tambien los esapcios en blanco
//console.log(navegacion.children[0].nodeName); // devuelve 'A' `por que es un enlace

//console.log(navegacion.children[0].nodeType);
// 1 - Elementos
// 2 - Atributos
// 3 - Texto Node
// 8 - comentarios
// 9 - Documentos
// 10 - Doctype


let cursos = document.querySelectorAll('.card');
//console.log(cursos[0].childElementCount);

/******************************************
 * Traversing en JavaScript (Hijo al Padre)
 ******************************************/

let enlaces_ = document.querySelectorAll('.enlace');
//console.log(enlaces[0].parentElement);

const cursos_ = document.querySelectorAll('.card');
console.log(cursos_[0].parentElement.parentElement.parentElement.children[0].textContent);

let enlaces_2 = document.querySelector('.enlace');

// Aqui tenemos los tipos de navegacion
// nextElementSibling
// previousElementSibling
// parentElement
// closest