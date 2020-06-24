import React from 'react';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import { Provider } from 'react-redux'
import store from './store'
import Formulario from './components/Formulario/Formulario';
import Resultado from './components/Resultado/Resultado';
function App() {

  return (
    <div className='app'>
      {/* <Provider store={store}>
        <Sidebar />
        <Video />
      </Provider> */}

      <Formulario></Formulario>
      <Resultado></Resultado>

    </div>
  );
}

export default App;
