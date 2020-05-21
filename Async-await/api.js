async function leerTodos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    const datos = await respuesta.json();

    return datos;
}

leerTodos().then(datos => {
    console.log(datos);
})