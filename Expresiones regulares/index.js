const exp1 = new RegExp('/abc/')
const exp2 = /abc/;

let valor, expReg;

expReg = /[0-9]/;
valor = 1992;

// buscar una fecha
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

// hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';

// hora 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 AM';

// Simplificar
expReg = /\d+/;
valor = '123455677889323323';

// negar la expresion , solo caracteres
expReg = /[^0-9]/;
valor = '12344';

// La sintaxis con llaves
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018'

// letras o numeros
expReg = /\w+/;
valor = 'Mensaje de prueba';

// Revisar que sean solo numeros
// Los paresentesis son para agrupar varios caracteres y afectarlos por un caracter especial
expReg = /([0-9])\w+/;
valor = 12344;
valor = 'Hola Mundo';

expReg = /([a-z])\w+/;
valor = 'Hola Mundo';
valor = 1234;
valor = 'hola mundo';



console.log(expReg.test(valor));