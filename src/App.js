// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Crie o componente Login
import Cadastro from './pages/Cadastro'; // Crie o componente Cadastro
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o arquivo CSS do Bootstrap


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;