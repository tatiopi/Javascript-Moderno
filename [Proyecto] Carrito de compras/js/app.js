// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listacursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

// Listeners
function cargarEventListeners() {
    // Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    // Cuando se eliminar un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

// Funciones

function leerLocalStorage(e) {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}"></td>
            <td> ${curso.titulo}</td>
            <td> ${curso.precio}</td>
            <td> <a href='#' class="borrar-curso" data-id="${curso.id}"</td> X</a>
        `;

        listacursos.appendChild(row);

    });

}

function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // Enviamos el curso seleccionado para tomar su datos
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
    guardarCursoLocalStorage(infoCurso);

}

function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${curso.imagen}"></td>
        <td> ${curso.titulo}</td>
        <td> ${curso.precio}</td>
        <td> <a href='#' class="borrar-curso" data-id="${curso.id}"</td> X</a>
    `;

    listacursos.appendChild(row);
}

function eliminarCurso(e) {
    e.preventDefault();
    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            debugger;
            cursosLS.splice(index, 1);
        }
    });

    // JSON.stringify() convietrte un arrego en un string
    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}

function vaciarCarrito(e) {
    e.preventDefault();
    // Forma 1
    //carrito.innerHTML = '';

    // Forma 2
    // RECOMENDADA , + rapida
    while (listacursos.firstChild) {
        listacursos.removeChild(listacursos.firstChild);
    }

    vaciarLocalStorage();

    // para que no haga el salto
    return false;
}

function vaciarLocalStorage() {
    localStorage.clear();
}

function guardarCursoLocalStorage(curso) {
    let cursos;
    cursos = obtenerCursosLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage() {
    let cursosLs;
    if (localStorage.getItem('cursos') === null) {
        cursosLs = [];
    } else {
        cursosLs = JSON.parse(localStorage.getItem('cursos'));
        console.log(cursosLs);
    }

    return cursosLs;
}