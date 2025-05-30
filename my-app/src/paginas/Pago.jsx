import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pago.css';

const Pago = () => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState('');
  const [formulario, setFormulario] = useState({});
  const [error, setError] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const navigate = useNavigate();

  const seleccionarMetodo = (metodo) => {
    setMetodoSeleccionado(metodo);
    setFormulario({});
    setError('');
    setConfirmado(false);
  };

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const validarCampos = () => {
    if (metodoSeleccionado === 'Tarjeta') {
      const { numero, nombre, vencimiento, cvv } = formulario;
      return numero && nombre && vencimiento && cvv;
    }

    if (metodoSeleccionado === 'Nequi') {
      return formulario.celular && formulario.celular.length >= 10;
    }

    if (metodoSeleccionado === 'PSE') {
      return formulario.banco;
    }

    return false;
  };

  const confirmarPago = () => {
    if (validarCampos()) {
      setError('');
      setConfirmado(true);
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirige después de 2 segundos
    } else {
      setError('Por favor completa todos los campos requeridos.');
    }
  };

  return (
    <div className="pago-contenedor">
      <h1 className="pago-titulo">Selecciona un método de pago</h1>

      {!metodoSeleccionado ? (
        <div className="pago-opciones">
          <button className="pago-boton pse" onClick={() => seleccionarMetodo('PSE')}>PSE</button>
          <button className="pago-boton nequi" onClick={() => seleccionarMetodo('Nequi')}>Nequi</button>
          <button className="pago-boton tarjeta" onClick={() => seleccionarMetodo('Tarjeta')}>Tarjeta de crédito</button>
        </div>
      ) : !confirmado ? (
        <div className="pago-formulario">
          <p className="pago-subtitulo">Has elegido: <strong>{metodoSeleccionado}</strong></p>

          {error && <p className="pago-error">{error}</p>}

          {metodoSeleccionado === 'Tarjeta' && (
            <>
              <input name="numero" type="text" placeholder="Número de tarjeta" className="pago-input" onChange={manejarCambio} />
              <input name="nombre" type="text" placeholder="Nombre en la tarjeta" className="pago-input" onChange={manejarCambio} />
              <input name="vencimiento" type="text" placeholder="Fecha de vencimiento (MM/AA)" className="pago-input" onChange={manejarCambio} />
              <input name="cvv" type="text" placeholder="CVV" className="pago-input" onChange={manejarCambio} />
            </>
          )}

          {metodoSeleccionado === 'Nequi' && (
            <input name="celular" type="text" placeholder="Número de celular" className="pago-input" onChange={manejarCambio} />
          )}

          {metodoSeleccionado === 'PSE' && (
            <select name="banco" className="pago-input" onChange={manejarCambio}>
              <option value="">Selecciona tu banco</option>
              <option value="bancolombia">Bancolombia</option>
              <option value="davivienda">Davivienda</option>
              <option value="nequi">Nequi</option>
            </select>
          )}

          <button className="pago-confirmar" onClick={confirmarPago}>Confirmar pago</button>
        </div>
      ) : (
        <div className="pago-exito">
          <h2>✅ ¡Pago exitoso con {metodoSeleccionado}!</h2>
          <p>Redirigiendo al inicio...</p>
        </div>
      )}
    </div>
  );
};

export default Pago;
