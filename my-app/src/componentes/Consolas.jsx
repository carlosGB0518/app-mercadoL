import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css'; // Asegúrate de importar el CSS aquí

const productos = [
  {
    id: 1,
    imagen: 'https://i.ibb.co/8LSmR9qd/image.png',
    precio: 1000,
    descripcion: 'Este es un producto de excelente calidad con características únicas.',
  },
  {
    id: 2,
    imagen: 'https://i.ibb.co/s9YyMH12/image.png',
    
    precio: 1500,
    descripcion: 'Otro gran producto con características impresionantes.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/4Z78MYVq/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/rKw36J93/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/23NsQhKg/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/rRPFd8H5/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/Y7Vgdg45/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/PsBTbttP/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/7J1Zq9L4/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/CxGXt5P/image.png',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: '',
    
    precio: 1200,
    descripcion: 'Un producto esencial con un excelente rendimiento.',
  },
  {
    id: 3,
    imagen: '',
    
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
