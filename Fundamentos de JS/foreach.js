const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender', 'JavaScript'];

// si le añades la palabra index (o nombre que quieras) , ese sera el indice del foreach
pendientes.forEach(function(pendiente, index) {
    console.log(`${index} ${pendiente}`);
});

// Map

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitarra' },
    { id: 4, producto: 'Disco' },
];

console.log(carrito);

const nombreProducto = carrito.map(x => {
    console.log(x.producto);
});

const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anyo: 1969,
    marca: 'Chevrolet'
};

// con la clausula IN recorrer los keys de un objeto
for (let auto in automovil) {
    console.log(auto);
    console.log(`${auto} : ${automovil[auto]}`);
}