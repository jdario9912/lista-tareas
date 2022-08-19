import React from 'react';
import '../estilos/logo.css';
import logo from '../imagenes/freecodecamp-logo.png';

const Logo = () => {
    return (
        <div className='freecodecamp-logo-contenedor'>
					<img 
						src={ logo }
						className='freecodecamp-logo'
						alt='Logo de FreeCodeCamp'
					/>            
        </div>
    );
}

export default Logo;
