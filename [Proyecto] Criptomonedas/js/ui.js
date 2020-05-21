class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.constuirSelect();
    }

    constuirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {

                const select = document.querySelector('#criptomoneda');

                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            });
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // seleccionar mensajes
        const diVMensajes = document.querySelector('.mensajes')
        diVMensajes.appendChild(div);
        // mostrar contenidos

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // Mostra cotizacion

    mostrarResultado(resultado, moneda, crypto) {
        const datosMoneda = resultado[crypto][moneda];

        let precio = datosMoneda.PRICE.toFixed(2);
        let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');

        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda € ${datosMoneda.TOSYMBOL} es de 
                        ${precio}
                    </p>
                    <p>Variación último dia % ${porcentaje}</p>
                    <p>Ultima actualizacion ${actualizado}</p>
                </div>
            </div>
        `;

        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}