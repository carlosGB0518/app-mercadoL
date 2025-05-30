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
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/televisores">Televisores</Link>
        <Link to="/carros">Carros</Link>
        <Link to="/consolas">Consolas</Link>
        <Link to="/computacion">Computacion</Link>
        <Link to="/celulares">Celulares</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/login">Ingresar</Link>
        
        
      </nav>
    </header>
  );
};

export default Encabezado;
