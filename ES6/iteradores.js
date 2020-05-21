function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);

/* console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
 */


function* crearGenerador() {
    yield 1;
    yield 'Nombre';
    yield 3 + 3;
    yield true;
}

//const iterador = crearGenerador();

/* console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value); */

/* Primer ejemplo con Yield */

function* nuevoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

let iterador = nuevoGenerador(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next.done);
console.log(iterador.next());
console.log(iterador.next());