const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

meses[4] = 'Mayo';
meses.push('Junio');

//Añadir al principio del arreglo
meses.unshift('Mes 0');

// Eliminar elemento del arreglo (por el final)
meses.pop();

// Eliminar elemento del arreglo (por el principio)
meses.shift();

// quitar un rango
meses.splice(2, 1);

// reviertir
meses.reverse();

// unir 1 o mas arreglos
let arreglo1 = [1, 2, 3];
let arreglo2 = [5, 6, 7];

console.log(arreglo1.concat(arreglo2));

console.log(meses);

// Ordenar un arreglo

const frutas = ['Platano', 'Manzano', 'Fresa', 'Naranja'];
frutas.sort();

console.log(frutas);

// ordenar numeros

arreglo1 = [3, 9, 91, 93, 24, 25, 78, 221, 214];
arreglo1.sort(); // Ordena como el culo

arreglo1.sort((a, b) => {
    return a - b;
});

console.log(arreglo1);