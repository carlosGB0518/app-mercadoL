import TarjetaProducto from './TarjetaProducto';

const productosSimulados = [
  {
    id: 1,
    nombre: 'Auriculares Bluetooth',
    precio: 120000,
    imagen: 'https://via.placeholder.com/300x200?text=Auriculares',
  },
  {
    id: 2,
    nombre: 'Celular Xiaomi Redmi',
    precio: 950000,
    imagen: 'https://via.placeholder.com/300x200?text=Celular',
  },
  {
    id: 3,
    nombre: 'Laptop Lenovo 15"',
    precio: 2300000,
    imagen: 'https://via.placeholder.com/300x200?text=Laptop',
  },
];

const ListaProductos = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {productosSimulados.map(producto => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </section>
  );
};

export default ListaProductos;
