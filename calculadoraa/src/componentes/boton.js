import React from 'react'
import '../Stylesheet/boton.css'
 
function boton (props) {
  const esOperador = valor => {
    // eslint-disable-next-line
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }; 
    return (
     <div    //plantillas literales ``
      className={`boton-cont ${esOperador(props.children) ? 'operador' : null} ` } > 
        {props.children} 
     </div>
    );
}

export default boton;