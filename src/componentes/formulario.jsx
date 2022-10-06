import React, { useState } from 'react';
import '../estilos/formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id : uuidv4(),
      texto : input,
      completada : false
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <div>
      <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>

        <input 
					className='tarea-input'
					type='text'
					placeholder='Escribe una tarea'
					name='texto'
          onChange = { manejarCambio }
        />

				<button
					className='tarea-boton'	
				>agregar tarea</button>

      </form>
    </div>
  )
}

export default Formulario;