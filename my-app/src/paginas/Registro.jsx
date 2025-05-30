import { useState } from 'react';
import { supabase } from './supabaseClient';
import './Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const manejarRegistro = async (e) => {
    e.preventDefault();
    setMensajeExito('');
    setMensajeError('');

    // Paso 1: Registrar usuario en auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre },
      },
    });

    if (error) {
      console.error('Error al registrar:', error.message);
      setMensajeError(`❌ ${error.message}`);
      return;
    }

    const userId = data.user?.id;

    // Paso 2: Insertar en tabla usuarios
    if (userId) {
      const { error: insertError } = await supabase
        .from('usuarios')
        .insert([
          {
            id: userId, // Usa el mismo ID que auth.users
            nombre,
            correo: email,
          },
        ]);

      if (insertError) {
        console.error('Error al guardar en la tabla usuarios:', insertError.message);
        setMensajeError(`❌ ${insertError.message}`);
        return;
      }

      // Éxito
      setMensajeExito('✅ Registro exitoso');
      setNombre('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="formulario-contenedor">
      <h2>Crear cuenta</h2>
      <form className="formulario" onSubmit={manejarRegistro}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>

      {/* Mensajes */}
      {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
      {mensajeError && <p className="mensaje-error">{mensajeError}</p>}

      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </div>
  );
}

export default Registro;
