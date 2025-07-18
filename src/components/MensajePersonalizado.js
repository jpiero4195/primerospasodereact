import React from 'react';
import '../estilos.css';

function MensajePersonalizado(props) {
    return (
        <div className="mensaje-personalizado">
            <p>Hola, {props.nombre} {props.apellido}</p>
        </div>
    );
}

export default MensajePersonalizado;
