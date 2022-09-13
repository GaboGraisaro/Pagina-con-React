import './App.css';
import './componentes/boton.js'

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
          <boton>2</boton>
          <boton>3</boton>
          <boton>+</boton>
        </div>
        <div className='fila'></div>
          <boton>4</boton>
          <boton>5</boton>
          <boton>6</boton>
          <boton>-</boton>
        <div className='fila'></div>
          <boton>7</boton>
          <boton>8</boton>
          <boton>9</boton>
          <boton>*</boton>
        <div className='fila'></div>
          <boton>=</boton>
          <boton>0</boton>
          <boton>*</boton>
          <boton>/</boton>
        <div className='fila'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
