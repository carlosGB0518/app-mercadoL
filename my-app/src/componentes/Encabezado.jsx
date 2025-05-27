import { Link } from 'react-router-dom';
import './Encabezado.css';

const Encabezado = () => {
  return (
    <header className="encabezado">
      <Link to="/" className="logo">
        MercadoLibre
      </Link>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="buscador"
      />
      <nav className="navegacion">
        <Link to="/carrito">Carrito</Link>
        <Link to="/login">Ingresar</Link>
      </nav>
    </header>
  );
};

export default Encabezado;
