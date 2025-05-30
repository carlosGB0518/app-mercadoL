import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css'; // Asegúrate de importar el CSS aquí

const productos = [
  {
    id: 1,
    imagen: 'https://i.ibb.co/LzysCntt/image.png',
    precio: 1000,
    descripcion: 'Este es un producto de excelente calidad con características únicas.',
  },
  {
    id: 2,
    imagen: 'https://i.ibb.co/21qRjPpK/image.png',
    
    precio: 1500,
    descripcion: 'Otro gran producto con características impresionantes.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/XfX3g50b/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/BHF623bb/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/4wC95W29/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/KY5VDhB/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/ntFKHM3/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/8L0nw3n0/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/9k5K4zFd/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/9k5K4zFd/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/XfX3g50b/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/4wC95W29/image.png',
    
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
