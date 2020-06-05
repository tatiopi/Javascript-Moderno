// converte un array con arrays dentro en uno plano
const edades = [8, 10, 9, 11, [13, 18, 20, [18, 20, 21]]];

// Aqui le indicamos manualmente la cantidad que quieres que "aplane"
console.log(edades.flat(2));

console.log(edades.flat(Infinity));