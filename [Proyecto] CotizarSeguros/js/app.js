// Cotizador

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(informacion) {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europe 1,35
    */
    let cantidad
    const base = 2000;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
    }

    const diferencia = new Date().getFullYear() - this.anio;
    // cada año de diferencia hay que reducir el 3% del valor del seguro
    cantidad -= (diferencia * 3) * cantidad / 100;
    if (this.tipo == 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    console.log(cantidad);

    return cantidad;
}

// todo lo que se muestra en la interfaz ( spinner 
function Interfaz() {

}

Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error', 'mensaje');
    } else {
        div.classList.add('correcto', 'mensaje');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function() {
        document.querySelector('.mensaje').remove()
    }, 1000);
}

Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }

    const div = document.createElement('div');
    div.innerHTML = `
        <p class='Header'>Tu Resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Ano: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${total}</p>
    `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 1000);


}

// eventlistener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // leer la marca seleccionada del select 
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // leer el anio seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    // leer el radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear instancia de interfaz 
    const interfaz = new Interfaz();

    if (marcaSeleccionada == '' || anioSeleccionado == '' || tipo == '') {
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else {
        const resultado = document.querySelector('#resultado div');
        if (resultado != null) {
            resultado.remove();
        }
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        const cantidad = seguro.cotizarSeguro(seguro);
        // Mostrar el resultado
        console.log(cantidad);
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');
    }


});

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnyos = document.getElementById('anio');

for (let i = max; i >= min; i--) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerHTML = i;
    selectAnyos.appendChild(opcion);
}