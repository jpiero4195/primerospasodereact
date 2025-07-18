import React from 'react';

function Saludo(props){
    return(
        <h1>Bienvenido al sistema, {props.nombre}</h1>
    )
}

function CompPadreHijo(props) {
    return (
        <div style={{textAlign: 'center'}}>
            <Saludo nombre="Jean"/>
            <h2>PUCE-SE</h2>
        </div>
    );
}

export default CompPadreHijo;