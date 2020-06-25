const { createStore } = require("redux")

const INITIAL_STATE = {
    nome: null,
    sobrenome: null
}

export default function formulario(state = INITIAL_STATE, action) {
    if (action.type === 'SEND_FORM') {
        return {
            nome: action.nome,
            sobrenome: action.sobrenome
        }
    }
    return state;
}

const store = createStore((formulario))