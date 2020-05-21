let cliente = new Map();
cliente.set('nombre', 'karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

// acceder a los valores

console.log(cliente);

console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('sañdo'));

// Metodos para los Maps
// Tamaño del Map
console.log(cliente.size);
// Si existe
console.log(cliente.has('tipo')); // true or false;
// Borrar una propiedad
cliente.delete('nombre');
// limpiar el map
cliente.clear();
// Propiedaes por default;


/* ELIMINAR DUPLICADO'!!!!! */
const paciente = new Map([
    ['nombre', 'paciente'],
    ['habitacion', 'No definido']
]);
paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 400);

console.log(paciente);