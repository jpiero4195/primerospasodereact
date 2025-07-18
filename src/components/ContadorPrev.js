import React, { useState } from 'react';
import '../website.css';

function ContadorPrev() {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
        if (contador < 20) {
            const nuevoValor = contador + 1;
            setContador(nuevoValor);
            console.log(`Contador incrementado: ${nuevoValor}`);
        } else {
            alert('ERROR: No puedes incrementar más de 20');
        }
    };

    const handleDecrementar = () => {
        if (contador > -10) {
            const nuevoValor = contador - 1;
            setContador(nuevoValor);
            console.log(`Contador decrementado: ${nuevoValor}`);
        } else {
            alert('ERROR: No puedes decrementar menos de -10');
        }
    };

    return (
        <div className="contador-container">
            <h1>Contador</h1>
            <p>Valor actual: {contador}</p>
            <button onClick={handleIncrementar}>+</button>
            <button onClick={handleDecrementar}>-</button>
        </div>
    );
}

export default ContadorPrev;
