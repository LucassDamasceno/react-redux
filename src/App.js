import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Formulario from './components/Formulario/Formulario';
import Resultado from './components/Resultado/Resultado';
import './App.css'
function App() {

  return (
    <div className='app'>
      <Provider store={store}>
        <Formulario></Formulario>
        <Resultado></Resultado>
      </Provider>
    </div>
  );
}

export default App;
