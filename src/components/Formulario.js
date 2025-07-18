import React from 'react';

function Formulario() {
  const [nombre, setNombre] = React.useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(`Formulario enviado con nombre: ${nombre}`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h1>Formulario</h1>
      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        placeholder="Ingrese su nombre"
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
