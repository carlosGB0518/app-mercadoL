
import './Registro.css';

function Registro() {
  return (
    <div className="formulario-contenedor">
      <h2>Crear cuenta</h2>
      <form className="formulario">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </div>
  );
}

export default Registro;