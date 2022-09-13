
import './App.css';
import Homero from './imagenes/homero.jpg';
import Tarea from './componentes/tareas.jsx';

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
      <Tarea texto='aprender React'/>
      </div>
    </div>
   );
  }

export default App;
