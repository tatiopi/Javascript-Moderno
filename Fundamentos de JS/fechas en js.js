const diaHoy = new Date();

let valor;

// Mes 
valor = diaHoy.getMonth();
// Dia
valor = diaHoy.getDay();
valor = diaHoy.getDate();
// Obtener el año
valor = diaHoy.getFullYear();
// Minutos
valor = diaHoy.getMinutes();
// Horas
valor = diaHoy.getHours();

// Milisegundos desde 1978
valor = diaHoy.getTime();


valor = diaHoy.getFullYear();
// set , para indicarle que fecha debe ponerle
valor = diaHoy.setFullYear(2016);