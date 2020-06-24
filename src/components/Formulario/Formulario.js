import React from 'react';
import './Formulario.css'
import { InputGroup, Input, Card } from 'reactstrap';

const Formulario = () => (
    <div className="formulario">
        <div className="compTitulo"><span>Componente 1</span></div>
        <div className='divCard'>
            <Card className="card">
                <h1>Formulário</h1>
                <Input placeholder='Nome'></Input>
                <Input placeholder='Sobrenome'></Input>
            </Card>
        </div>

    </div>
)

export default Formulario;