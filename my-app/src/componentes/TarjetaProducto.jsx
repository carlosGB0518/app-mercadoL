const TarjetaProducto = ({ producto }) => {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition">
      <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="font-semibold text-lg">{producto.nombre}</h3>
      <p className="text-green-600 font-bold">${producto.precio}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
        Comprar
      </button>
    </div>
  );
};

export default TarjetaProducto;
