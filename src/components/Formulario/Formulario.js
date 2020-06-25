import React, { useState } from 'react';
import './Formulario.css'
import { Input, Card, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FormActions from '../../store/actions/formulario'

const Formulario = ({ state, enviar }) => {
    const [nome, setNome] = useState('Marcos')
    const [sobrenome, setSobrenome] = useState('Sousa')

    return (
        <div className="formulario">
            <div className="compTitulo"><span>Componente 1</span></div>
            <div className='divCard'>
                <Card className="card">
                    <h1 className="titulo">Formulário</h1>
                    <Input  
                        placeholder='Nome'
                        className="input"
                        value={nome}
                        onChange={event => setNome(event.target.value)}>
                    </Input>
                    <Input
                        placeholder='Sobrenome'
                        className="input"
                        value={sobrenome}
                        onChange={event => setSobrenome(event.target.value)}>
                    </Input>
                    <Button className="mt-4" onClick={() => enviar(nome, sobrenome)}>Enviar</Button>
                </Card>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    state: state.formulario
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(FormActions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);