import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import './ListaProductos.css'; // Asegúrate de importar el CSS aquí


  const productos = [
  {
    id: 1,
    nombre: 'Toyota Corolla 2021',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 85000000,
    descripcion: 'Eficiente, confiable y económico.'
  },
  {
    id: 2,
    nombre: 'Mazda 3 Touring 2022',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 105000000,
    descripcion: 'Diseño moderno y gran rendimiento.'
  },
  {
    id: 3,
    nombre: 'Kia Sportage 2021',
    imagen: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 99000000,
    descripcion: 'SUV espaciosa ideal para la familia.'
  },
  {
    id: 4,
    nombre: 'Chevrolet Tracker 2023',
    imagen: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 115000000,
    descripcion: 'Compacto, potente y versátil.'
  },
  {
    id: 5,
    nombre: 'BMW Serie 3',
    imagen: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 178000000,
    descripcion: 'Tecnología de punta y alto desempeño.'
  },
  {
    id: 6,
    nombre: 'Audi A4 2022',
    imagen: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 165000000,
    descripcion: 'Elegancia y potencia en un solo vehículo.'
  },
  {
    id: 7,
    nombre: 'Mercedes-Benz C-Class',
    imagen: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 210000000,
    descripcion: 'Lujo y confort al máximo nivel.'
  },
  {
    id: 8,
    nombre: 'Renault Logan 2020',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 75000000,
    descripcion: 'Ideal para ciudad y bajo consumo.'
  },
  {
    id: 9,
    nombre: 'Hyundai Tucson',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 118000000,
    descripcion: 'SUV con diseño renovado y moderno.'
  },
  {
    id: 10,
    nombre: 'Nissan Sentra',
    imagen: 'https://images.pexels.com/photos/1402788/pexels-photo-1402788.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 98000000,
    descripcion: 'Sedán confiable, seguro y espacioso.'
  },
  {
    id: 11,
    nombre: 'Volkswagen Jetta',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 89000000,
    descripcion: 'Buen desempeño y excelente diseño.'
  },
  {
    id: 12,
    nombre: 'Jeep Renegade',
    imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    precio: 160000000,
    descripcion: 'Aventura con estilo y tracción total.'
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
