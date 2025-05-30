import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto, agregarAlCarrito }) => {
  const navigate = useNavigate();

  const manejarCompra = () => {
    if (producto) {
      agregarAlCarrito(producto);
      navigate('/carrito');
    }
  };

  const descuento =
    producto.precioOriginal && producto.precioOriginal > producto.precio
      ? Math.round(100 - (producto.precio / producto.precioOriginal) * 100)
      : null;

  return (
    <div className="tarjeta-producto">
      {descuento && <span className="etiqueta-oferta">Oferta</span>}
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <div className="precios">
        {producto.precioOriginal && (
          <span className="precio-original">${producto.precioOriginal.toLocaleString()}</span>
        )}
        <span className="producto-precio">${producto.precio.toLocaleString()}</span>
        {descuento && <span className="descuento">{descuento}% OFF</span>}
      </div>
      <button className="boton-comprar" onClick={manejarCompra}>Comprar</button>
    </div>
  );
};

export default TarjetaProducto;
