import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Contador from './Contador';
import ContadorPersonalizado from './ContadorPersonalizado';
import Formulario from './Formulario';
import Registro from './Registro';

// Página de Inicio
function Inicio() {
  return (
    <div className="centered">
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Esta es la página principal de la App.</p>
    </div>
  );
}

// Página Acerca De
function AcercaDe() {
  return (
    <div className="centered">
      <h1>Acerca de</h1>
      <p>Desarrollado por Jean Valencia - TSDS</p>
    </div>
  );
}

// Navegación principal
function Navegacion() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/contador">Contador</Link> |{" "}
        <Link to="/contadorpersonalizado">Contador Personalizado</Link> |{" "}
        <Link to="/formulario">Usuario</Link> |{" "}
        <Link to="/registro">Registro</Link> |{" "}
        <Link to="/acercade">Acerca de</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/contadorpersonalizado" element={<ContadorPersonalizado valorInicial={10} />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acercade" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default Navegacion;
