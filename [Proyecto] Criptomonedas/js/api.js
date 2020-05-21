class API {
    constructor(apikey) {
        this.apikey = apikey;
    }

    async obtenerMonedasAPI() {
        // https://min-api.cryptocompare.com/all/coinlist?api_key=
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=c${this.apikey}`;

        // fetchURL
        const urlObtenerMonedas = await fetch(url);

        // 
        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
        }

    }



}