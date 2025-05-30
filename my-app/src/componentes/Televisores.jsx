import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css';

const productos = [
  {
    id: 1,
    
    precio: 2899000,
    imagen: "https://i.ibb.co/JD0S1Tw/image.png"
  },
  {
    id: 2,
    
    precio: 1799000,
    imagen: "https://i.ibb.co/397hH0LB/image.png"
  },
  {
    id: 3,
    
    precio: 5499000,
    imagen: "https://i.ibb.co/rRhCF5f5/image.png"
  },
  {
    id: 4,
    
    precio: 1599000,
    imagen: "https://i.ibb.co/397hH0LB/image.png"
  },

  {
    id: 5,
    
    precio: 1899000,
    imagen: "https://i.ibb.co/5WG1StR8/image.png"
    },
  {
    id: 6,
    
    precio: 7399000,
    imagen: "https://i.ibb.co/M5kWr4xp/image.png"
  },
  {
    id: 7,
    
    precio: 1299000,
    imagen: "https://i.ibb.co/JD0S1Tw/image.png"
  },
  {
    id: 8,
    
    precio: 1699000,
    imagen: "https://i.ibb.co/6JqzLybY/image.png"
  },
  {
    id: 9,
   
    precio: 3799000,
    imagen: "https://i.ibb.co/rRhCF5f5/image.png"
  },
  {
    id: 10,
    
    precio: 1449000,
    imagen: "https://i.ibb.co/M5kWr4xp/image.png"
  },
  {
    id: 11,
   
    precio: 1599000,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flat_screen_TV.jpg/640px-Flat_screen_TV.jpg"
  },
  {
    id: 12,
    
    precio: 1999000,
    imagen: "https://m.media-amazon.com/images/I/91ZfG9oU4SL._AC_SL1500_.jpg"
  }
];

const Televisores = ({ agregarAlCarrito }) => {
  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </section>
  );
};

export default Televisores;
