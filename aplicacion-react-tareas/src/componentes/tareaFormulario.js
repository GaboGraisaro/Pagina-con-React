import React from 'react';
import '../stylesheet/tareaFormulario.css'

function tareaFormulario (props) {
    return (
      <form className='tarea-formulario'>
        <input 
         className='tarea-input'
         type='text'
         placeholder='Escribe una Tarea'
         name='texto'
         />
       <button className='tarea-boton'>
        Agregar Tarea
       </button>
      </form>
    )
};

export default tareaFormulario;