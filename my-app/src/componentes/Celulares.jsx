import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css'; // Asegúrate de importar el CSS aquí

const productos = [
  {
    id: 1,
    imagen: 'https://i.ibb.co/rKGDKBXs/image.png',
    precio: 1000,
    descripcion: 'Este es un producto de excelente calidad con características únicas.',
  },
  {
    id: 2,
    imagen: 'https://i.ibb.co/nqz7zKMS/image.png',
    
    precio: 1500,
    descripcion: 'Otro gran producto con características impresionantes.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/chBSnmWy/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/235GVMqB/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/bj5fyzmk/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  }
];

const ListaProductos = ({ agregarAlCarrito }) => {
  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </section>
  );
};

export default ListaProductos;
