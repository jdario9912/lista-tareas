import React from 'react'
import '../estilos/tarea.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return (
    <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div className='tarea-texto'>
            { texto }
        </div>
				<div className='tarea-contenedor-iconos'>
					<AiTwotoneCloseCircle className='tarea-icono' />
				</div>
    </div>
  )
}

export default Tarea
