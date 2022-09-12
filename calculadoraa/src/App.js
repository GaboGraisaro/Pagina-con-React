import './App.css';
import boton from './componentes/boton.js'

import FreeCodeCampLogo from './imagenes/FreeCodeCampLogo.png'
function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={FreeCodeCampLogo}
        className = 'freecodecamp-logo' 
        alt='Logo de freecodecamp'/>
        <div className='contenedor-calculadora'>
        <div className='fila'>
          <boton>1</boton>
          <boton>+</boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
