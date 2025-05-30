import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css';

const productos = [
  {
    id: 1,
    nombre: "Samsung Crystal UHD 55\"",
    precio: 2899000,
    imagen: "https://m.media-amazon.com/images/I/71Wmeb3QexL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    nombre: "LG 4K Smart TV 50\"",
    precio: 1799000,
    imagen: "https://m.media-amazon.com/images/I/71RYvTgnTbL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    nombre: "Sony Bravia 65\" OLED",
    precio: 5499000,
    imagen: "https://m.media-amazon.com/images/I/61ZfGWR3XhL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    nombre: "TCL Roku TV 50\"",
    precio: 1599000,
    imagen: "https://m.media-amazon.com/images/I/81FDGIb4hdL._AC_SL1500_.jpg"
  },
  {
    id: 5,
    nombre: "Hisense 4K ULED 55\"",
    precio: 1899000,
    imagen: "https://m.media-amazon.com/images/I/71rY4BkYuKL._AC_SL1500_.jpg"
  },
  {
    id: 6,
    nombre: "Samsung QLED 75\"",
    precio: 7399000,
    imagen: "https://m.media-amazon.com/images/I/91DJMLjYjDL._AC_SL1500_.jpg"
  },
  {
    id: 7,
    nombre: "Philips Smart TV 43\"",
    precio: 1299000,
    imagen: "https://m.media-amazon.com/images/I/81bS9-p-0yL._AC_SL1500_.jpg"
  },
  {
    id: 8,
    nombre: "Xiaomi Mi TV P1 55\"",
    precio: 1699000,
    imagen: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SL1500_.jpg"
  },
  {
    id: 9,
    nombre: "LG NanoCell 65\"",
    precio: 3799000,
    imagen: "https://m.media-amazon.com/images/I/91CPbI6XJ6L._AC_SL1500_.jpg"
  },
  {
    id: 10,
    nombre: "Toshiba Android TV 55\"",
    precio: 1449000,
    imagen: "https://m.media-amazon.com/images/I/71PaPgoDRnL._AC_SL1500_.jpg"
  },
  {
    id: 11,
    nombre: "Panasonic 4K 58\"",
    precio: 1599000,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flat_screen_TV.jpg/640px-Flat_screen_TV.jpg"
  },
  {
    id: 12,
    nombre: "Sony LED 50\"",
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
