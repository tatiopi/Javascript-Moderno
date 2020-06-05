const productos = [
    { nombre: 'Producto 1', precio: 20 },
    { nombre: 'Producto 2', precio: 30 },
    { nombre: 'Producto 3', precio: 40 }
];

const resultado = productos.map(producto => [producto.nombre, producto.precio]);
console.log(resultado.flat(1));

// FlatMap hace lo mismo que las 2 lineas anteriores en un solo paso
const resultadoFlatMap = productos.flatMap(producto => [producto.nombre, producto.precio]);
console.log(resultadoFlatMap);