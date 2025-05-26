import { Link } from 'react-router-dom';

const Encabezado = () => {
  return (
    <header className="bg-yellow-400 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        MercadoLibre
      </Link>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full md:w-1/2 p-2 rounded border border-gray-300"
      />
      <nav className="flex gap-4 text-gray-800">
        <Link to="/carrito" className="hover:underline">Carrito</Link>
        <Link to="/login" className="hover:underline">Ingresar</Link>
      </nav>
    </header>
  );
};

export default Encabezado;
