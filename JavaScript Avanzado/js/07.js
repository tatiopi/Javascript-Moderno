// herencia via prototype

function PlayList(nombre) {
    this.nombre = nombre;
}

PlayList.prototype.play = function() {
    console.log(`Reproduciendo la playList ${this.nombre}`);
}

PlayList.prototype.eliminar = function() {
    console.log(`Reproduciendo la playList ${this.nombre}`);
}

function Cancion(nombre, genero) {
    PlayList.call(this, nombre);
    this.genero = genero;
}

Cancion.prototype = Object.create(PlayList.prototype);

const cancion = new Cancion('Nothing Else Matters', 'Heavy Metal');
cancion.play();