document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e) {
    e.preventDefault();
    let elemento;
    // el que mas vamos a usar es el target
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;

    console.log(elemento);
};

document.querySelector('.contenido-hero').addEventListener('click', function(e) {
    console.log(e.target.innerText);
});