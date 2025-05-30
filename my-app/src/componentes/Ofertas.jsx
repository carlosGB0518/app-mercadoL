// src/pages/Ofertas.jsx
import React from 'react';
import TarjetaProducto from '../componentes/TarjetaProducto';
import './ListaProductos.css';

const productos = [
  {
    id: 1,
    imagen: 'https://i.ibb.co/qMDn7rKH/image.png',
    precio: 1000,
    precioOriginal: 1500,
    descripcion: 'Televisor HD de 32 pulgadas.',
  },
  {
    id: 2,
    imagen: 'https://i.ibb.co/dJsX3kWn/image.png',
    precio: 1200,
    precioOriginal: 1800,
    descripcion: 'Carro eléctrico de juguete para niños.',
  },
  {
    id: 3,
    imagen: 'https://i.ibb.co/s93QHdZz/image.png',
    precio: 800,
    precioOriginal: 1000,
    descripcion: 'Reproductor multimedia con WiFi.',
  },
  {
    id: 4,
    imagen: 'https://i.ibb.co/Fb19Xczp/image.png',
    precio: 1500,
    precioOriginal: 2000,
    descripcion: 'Laptop 14 pulgadas con SSD.',
  },
  {
    id: 5,
    imagen: 'https://i.ibb.co/0yCcLh0s/image.png',
    precio: 500,
    precioOriginal: 900,
    descripcion: 'Auriculares inalámbricos con micrófono.',
  },
  {
    id: 6,
    imagen: 'https://i.ibb.co/tMXDZbqJ/image.png',
    precio: 750,
    precioOriginal: 950,
    descripcion: 'Teclado mecánico retroiluminado.',
  },
  {
    id: 7,
    imagen: 'https://i.ibb.co/BHF623bb/image.png',
    precio: 600,
    precioOriginal: 1000,
    descripcion: 'Parlante portátil Bluetooth resistente al agua.',
  },
  {
    id: 8,
    imagen: 'https://i.ibb.co/chBSnmWy/image.png',
    precio: 1300,
    precioOriginal: 1600,
    descripcion: 'Tablet 10 pulgadas con Android.',
  },
  {
    id: 9,
    imagen: 'https://i.ibb.co/p6B7nRWQ/image.png',
    precio: 900,
    precioOriginal: 1100,
    descripcion: 'Cámara web Full HD para videollamadas.',
  },
  {
    id: 10,
    imagen: 'https://i.ibb.co/4Rcdy58r/image.png',
    precio: 650,
    precioOriginal: 950,
    descripcion: 'Mouse ergonómico con DPI ajustable.',
  },
  {
    id: 11,
    imagen: 'https://i.ibb.co/CxGXt5P/image.png',
    precio: 1450,
    precioOriginal: 1900,
    descripcion: 'Smartwatch resistente al agua.',
  },
  {
    id: 12,
    imagen: 'https://i.ibb.co/Y7Vgdg45/image.png',
    precio: 1100,
    precioOriginal: 1600,
    descripcion: 'Silla gamer con soporte lumbar.',
  }
];

const Ofertas = ({ agregarAlCarrito }) => {
  return (
    <section className="lista-productos">
      {productos.map((producto, index) => (
        <TarjetaProducto
          key={`${producto.id}-${index}`}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </section>
  );
};

export default Ofertas;
