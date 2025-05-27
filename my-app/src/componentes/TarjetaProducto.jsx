import './TarjetaProducto.css';
import { Link } from 'react-router-dom';

const TarjetaProducto = ({ producto }) => {
  return (
    <div className="tarjeta-producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio}</p>
      <Link to="/registro">
        <button className="boton-comprar">Comprar</button>
      </Link>
    </div>
  );
};

export default TarjetaProducto;

