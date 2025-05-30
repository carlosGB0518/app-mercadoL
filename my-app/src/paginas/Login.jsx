import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const navigate = useNavigate();

  const manejarLogin = async (e) => {
    e.preventDefault();
    setMensajeError('');

    // 1. Iniciar sesión
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error al iniciar sesión:', error.message);
      setMensajeError(`❌ ${error.message}`);
      return;
    }

    const userId = data.user?.id;

    // 2. Obtener datos del usuario desde tabla personalizada
    const { data: usuario, error: errorUsuario } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', userId)
      .single();

    if (errorUsuario) {
      console.error('Error al obtener datos del usuario:', errorUsuario.message);
      setMensajeError('❌ No se pudo obtener la información del usuario.');
      return;
    }

    console.log('Datos del usuario:', usuario);

    // 3. Redirigir a la página principal
    navigate('/');
  };

  return (
    <div className="formulario-contenedor">
      <h2>Iniciar sesión</h2>
      <form className="formulario" onSubmit={manejarLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>

      {mensajeError && <p className="mensaje-error">{mensajeError}</p>}

      <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
    </div>
  );
}

export default Login;
