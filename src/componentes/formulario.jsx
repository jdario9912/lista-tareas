import React from 'react';
import '../estilos/formulario.css'

function Formulario({}) {
  return (
    <div>
      <form className='tarea-formulario'>
        <input 
					className='tarea-input'
					type='text'
					placeholder='Escribe una tarea'
					name='texto'
        />
				<button
					className='tarea-boton'	
				>agregar tarea</button>
      </form>
    </div>
  )
}

export default Formulario
