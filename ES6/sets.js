let carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// No acepta elementos repetidos!!!
let numeros = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

//console.log(numeros);
//console.log('Tamaño del Set ', numeros.size);

// recorrer con forEach

// Convertir Set en Arreglo
const arregloCarrito = [...carrito];
//console.log(arregloCarrito);

carrito.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);
});

// comprobar que un elemento existe
// console.log(carrito.has('Camisa'));

// eliminar algo del set 
carrito.delete('Camisa');

// vaciar
carrito.clear();