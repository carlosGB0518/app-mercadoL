import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './Admin.css';

function Admin() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    imagen: '',
  });

  // Cargar productos
  const obtenerProductos = async () => {
    const { data, error } = await supabase.from('productos').select('*');
    if (error) console.error(error);
    else setProductos(data);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  // Eliminar producto
  const eliminarProducto = async (id) => {
    await supabase.from('productos').delete().eq('id', id);
    obtenerProductos();
  };

  // Agregar producto
  const agregarProducto = async (e) => {
    e.preventDefault();
    await supabase.from('productos').insert([nuevoProducto]);
    setNuevoProducto({ nombre: '', precio: '', imagen: '' });
    obtenerProductos();
  };

  return (
    <div className="admin-container">
      <h2>Panel Administrativo</h2>

      <form onSubmit={agregarProducto} className="form-agregar">
        <input placeholder="Nombre" value={nuevoProducto.nombre}
               onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })} required />
        <input placeholder="Precio" type="number" value={nuevoProducto.precio}
               onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })} required />
        <input placeholder="URL de imagen" value={nuevoProducto.imagen}
               onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })} required />
        <button type="submit">Agregar producto</button>
      </form>

      <div className="productos-lista">
        {productos.map((p) => (
          <div key={p.id} className="producto-admin">
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p><strong>${p.precio}</strong></p>
            <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;