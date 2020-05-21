class EventBrite {
    constructor() {
        this.token_auth = 'TJNKCNR5HJRDYJ6OGMIU';
        this.ordenar = 'date';
    }

    async obtenerCategorias() {
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        const categorias = await respuestaCategorias.json();
        return {
            categorias
        }
    }

    async obtenerEventos(evento, categoria) {
        const peticion = `https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`;
        console.log(peticion);
        //const respuesta = await fetch(peticion);
        //const eventos = respuesta.json();
        //return eventos;
    }
}

// https://www.eventbriteapi.com/v3/categories/?token=TJNKCNR5HJRDYJ6OGMIU