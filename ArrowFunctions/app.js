let aprendiendo;

aprendiendo = function() {
    console.log('aprendiendo js');
}

aprendiendo = () => console.log('aprendiendo js');
aprendiendo();

aprendiendo = () => 'aprendiendo js';
console.log(aprendiendo());

// devolviendo un objeto 
aprendiendo = () => ({ 'aprendiendo': 'js' });
console.log(aprendiendo());

// pasandole un parametro
aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('javascript');

// sin parentesis
aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('es7');

const productos = ['Disco', 'Camisa', 'Guitarra'];

const letrasPorProducto = productos.map(function(producto) {
    return producto.length;
});

const letrasProducto = productos.map(producto => producto.length);

console.log(letrasProducto);