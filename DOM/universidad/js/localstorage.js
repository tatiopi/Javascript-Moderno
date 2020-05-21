// agregar a localstorare
localStorage.setItem('nombre', 'Juan');

// agregar a session storage ( se borra al cerrar el navegador)
sessionStorage.setItem('nombre', 'Juan');

// Eliminar del localstorage
localStorage.removeItem('nombre');

// recuperar
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// limpiar
localStorage.clear();