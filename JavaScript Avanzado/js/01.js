// Implicit binding

const usuario = {
    nombre: 'Juan',
    edad: 20,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} tengo ${this.edad}`);
    }
}

usuario.presentacion();