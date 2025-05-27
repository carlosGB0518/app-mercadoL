import React from 'react';
import './Producto.css';

const Producto = () => {
  return (
    <div className="producto-container">
      <div className="producto-imagen">
        <img src="https://via.placeholder.com/300" alt="Producto" />
      </div>
      <div className="producto-detalles">
        <h1 className="producto-titulo">Nombre del Producto</h1>
        <p className="producto-precio">$299.900</p>
        <p className="producto-descripcion">
          Este es un producto de excelente calidad con características únicas.
        </p>
        <button className="producto-comprar">Comprar ahora</button>
        <button className="producto-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Producto;
