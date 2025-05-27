import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Inicio from './paginas/Inicio';
import Registro from './paginas/Registro';
import Login from './paginas/Login';
import Carrito from './paginas/Carrito';

function App() {
  return (
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
