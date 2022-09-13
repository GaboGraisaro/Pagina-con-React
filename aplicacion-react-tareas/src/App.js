
import './App.css';
import Homero from './imagenes/homero.jpg';
import tareaFormulario from './componentes/tareaFormulario';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
       <img 
       src ={Homero}
       className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-princial'>
      <h1>Mis Tareas</h1>
      <tareaFormulario />
      </div>
    </div>
   );
  }

export default App;
