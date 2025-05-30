import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Encabezado from './componentes/Encabezado';
import Inicio from './paginas/Inicio';
import Registro from './paginas/Registro';
import Login from './paginas/Login';
import Carrito from './paginas/Carrito';
import Pago from './paginas/Pago';
import ListaProductos from './componentes/ListaProductos';
import Celulares from './componentes/Celulares';
import Computacion from './componentes/Computacion';
import Televisores from './componentes/Televisores';
import Carros from './componentes/Carros';
import Consolas from './componentes/Consolas';
import Ofertas from './componentes/Ofertas';
import Admin from './paginas/Admin';


function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  return (
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<ListaProductos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/celulares" element={<Celulares agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/televisores" element={<Televisores agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carros" element={<Carros agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/consolas" element={<Consolas agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/ofertas" element={<Ofertas agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/computacion" element={<Computacion agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
