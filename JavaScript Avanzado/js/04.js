// Windows Binding

function obtenerAuto() {
    console.log(`Mi auto es color ${this.color}`);
}

const color = 'negro';
window.color = 'negro';

obtenerAuto();