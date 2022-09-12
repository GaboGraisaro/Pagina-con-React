import React from 'react'
import '../Stylesheet/boton.css';
 
function boton (props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }; 
    return (
     <div    //plantillas literales ``
      className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : null} ` .trimEnd()} > 
        {props.children} 
     </div>
    );
}

export default boton;