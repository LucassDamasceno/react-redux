export function enviar(nome, sobrenome) {
    return {
        type: 'SEND_FORM',
        nome,
        sobrenome
    }
}