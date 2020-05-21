function saludar(nombre = 'Visitante') {
    return `Hola ${nombre};`
}

console.log(saludar());

// IIEF

(function(tecnologia) {
    console.log(`aprendiendo ${tecnologia}`);
})('Javascript');

// Metodos de propiedad

const musica = {
    reproducir: function(id) {
        console.log(`reproduciendo cancion ${id} `);
    }
};

// los metodos pueden crear fuera

musica.borrar = function(id) {
    console.log(`borrando la cancion con ${id} `);
}

musica.reproducir(30);
musica.borrar(30);