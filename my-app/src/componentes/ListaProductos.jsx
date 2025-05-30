import React, { useEffect, useState } from 'react';
import TarjetaProducto from './TarjetaProducto';
import { supabase } from '../supabaseClient';
import './ListaProductos.css';

const ListaProductos = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const { data, error } = await supabase.from('productos').select('*');

      if (error) {
        console.error('Error al obtener productos:', error);
        return;
      }

      setProductos(data);
    };

    obtenerProductos();
  }, []);

  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </section>
  );
};

export default ListaProductos;