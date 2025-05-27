// src/pages/Carrito.jsx
import { Link } from "react-router-dom";
import "./Carrito.css"; // Importamos los estilos

function Carrito() {
  const productos = [
    {
      id: 1,
      nombre: "Celular Samsung Galaxy A54 5G",
      precio: 1200000,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_658579-MLU72636871232_112023-F.webp",
    },
    {
      id: 2,
      nombre: "Audífonos Inalámbricos Xiaomi Redmi Buds",
      precio: 90000,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_738775-MLU72735871385_112023-F.webp",
    },
  ];

  const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="carrito-contenedor">
      <h1 className="carrito-titulo">Carrito de compras</h1>

      {productos.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-lista">
          {productos.map((producto) => (
            <div key={producto.id} className="carrito-producto">
              <img src={producto.imagen} alt={producto.nombre} className="carrito-imagen" />
              <div className="carrito-info">
                <h2 className="carrito-nombre">{producto.nombre}</h2>
                <p className="carrito-precio">${producto.precio.toLocaleString()}</p>
              </div>
              <button className="carrito-eliminar">Eliminar</button>
            </div>
          ))}

          <div className="carrito-total">
            <p>Total: <strong>${total.toLocaleString()}</strong></p>
            <Link to="/checkout">
              <button className="carrito-comprar">Continuar compra</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
