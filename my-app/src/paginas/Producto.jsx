import React from 'react';
import './Producto.css';

const Producto = ({ imagen, nombre, precio, descripcion }) => {
  return (
    <div className="producto-container">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="producto-detalles">
        <h1 className="producto-titulo">{nombre}</h1>
        <p className="producto-precio">${precio.toLocaleString()}</p>
        <p className="producto-descripcion">{descripcion}</p>
        <button className="producto-comprar">Comprar ahora</button>
        <button className="producto-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Producto;
