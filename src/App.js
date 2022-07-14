import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { UsuarioProvider } from "./contexts/UsuarioContext/UsuarioProvider";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AlterarSenha from './pages/AlterarSenha';

import './App.css';

function App() {

  return (
    <UsuarioProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastrar" element={<Cadastro />}></Route>
            <Route path="/alterar-senha" element={<AlterarSenha />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UsuarioProvider>
  );
}

export default App;