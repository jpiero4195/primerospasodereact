import React from 'react';

function Registro(props) {
    // Estado del formulario
    const [formulario, setFormulario] = React.useState({
        nombre: '',
        email: ''
    });

    // Maneja cambios en los campos del formulario
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Maneja el envío del formulario
    const manejarEnvio = (e) => {
        e.preventDefault(); // Previene la recarga de la página
        console.log('Datos del formulario:', formulario);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Registro</h1>
            <form onSubmit={manejarEnvio}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingrese su email"
                    value={formulario.email}
                    onChange={manejarCambio}
                    required
                />
                <br />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Registro;