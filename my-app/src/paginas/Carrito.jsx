import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carrito.css';

const Carrito = ({ carrito }) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState(carrito || []);
  const navigate = useNavigate();

  const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);

  const continuarCompra = () => {
    navigate('/pago');
  };

  return (
    <div className="carrito-contenedor">
      <h1 className="carrito-titulo">Carrito de compras</h1>
      {productosEnCarrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-lista">
            {productosEnCarrito.map((producto, index) => (
              <div key={index} className="carrito-producto">
                <img src={producto.imagen} alt={producto.nombre} className="carrito-imagen" />
                <div className="carrito-info">
                  <h2 className="carrito-nombre">{producto.nombre}</h2>
                  <p className="carrito-precio">${producto.precio.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <p>Total: <strong>${total.toLocaleString()}</strong></p>
            <button className="carrito-comprar" onClick={continuarCompra}>
              Continuar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
