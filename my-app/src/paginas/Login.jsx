
import './Login.css';

function Login() {
  return (
    <div className="formulario-contenedor">
      <h2>Iniciar sesión</h2>
      <form className="formulario">
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
    </div>
  );
}

export default Login;
