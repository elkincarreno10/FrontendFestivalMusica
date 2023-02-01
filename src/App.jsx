import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import LayoutPrincipal from './layout/LayoutPrincipal';

// Paginas
import Principal from './paginas/Principal';
import Evento from './paginas/Evento';
import Precios from './paginas/Precios';
import Comentarios from './paginas/Comentarios';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import Recuperar from './paginas/Recuperar';
import Confirmar from './paginas/Confirmar';
import OlvidePassword from './paginas/OlvidePassword';

import { ComentariosProvider } from './context/ComentariosProvider';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ComentariosProvider>
          <Routes>
            <Route path="/" element={<LayoutPrincipal/>}>
              <Route index element={<Principal />} />
              <Route path="evento" element={<Evento />} />
              <Route path="precios" element={<Precios />} />
              <Route path="comentarios" element={<Comentarios />} />
              <Route path="login" element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="recuperar" element={<Recuperar />} />
              <Route path="confirmar/:token" element={<Confirmar />} />
              <Route path="olvide-password/:token" element={<OlvidePassword />} />
            </Route>
          </Routes>
        </ComentariosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
