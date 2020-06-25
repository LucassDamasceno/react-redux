import React from 'react';
import './Resultado.css'
import { connect } from 'react-redux';

const Resultado = ({ form }) => (
    <div className='resultado'>
        <div className="compTitulo"><span>Componente 2</span></div>
        <h1 className='titulo'>Resultado</h1>
        {
            form.nome && form.sobrenome ?
                <div>
                    <span >Nome completo: </span>
                    <span>{form.nome} {form.sobrenome}</span>
                    <span></span>
                </div> : null
        }

    </div>
)

export default connect(state => ({
    form: state.formulario
}))(Resultado);