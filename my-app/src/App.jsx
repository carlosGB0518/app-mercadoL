import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Inicio from './paginas/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Otras rutas irán aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
