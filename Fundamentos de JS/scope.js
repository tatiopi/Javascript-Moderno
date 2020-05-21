var a = 'a';
let b = 'b';
const c = 'c';

// Scope de la funcion
function fucnionScope() {
    var a = 'A';
    var b = 'B';
    const c = 'C';
    console.log('FUNCION:' + a, b, c);
}

fucnionScope();

console.log('GLOBALES:' + a, b, c);

// Scope de bloque 
if (true) {
    // !! reescribe la variable global :O
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE', a, b, c);
}

console.log('GLOBALES:' + a, b, c);