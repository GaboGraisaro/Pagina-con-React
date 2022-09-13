import React from "react";
import "../stylesheet/estilo-tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
function Tarea({texto, completada}) {
    return (
     <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
			<div className="tarea-texto">
				{texto}
				</div>
				<div className="tarea-contenedor-iconos">
					<AiOutlineCloseCircle className='tarea-icono' />			
			   Eliminar
			</div>
		 </div>
		);
};

export default Tarea; 