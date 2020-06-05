class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos;
        let campo;
        switch (tipo) {
            case "text":
                campo = new InputText(texto);
                break;
            case "email":
                campo = new InputEmail(texto);
                break;
            case "button":
                campo = new Boton(texto);
                break;
            default:
                throw new Error('Tipo no valido ' + tipo);
        }

        campos.push(campo);
    }
}

// Inputs
class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
    }
}

// instancia formulario

const formulario = new Formulario();