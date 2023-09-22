// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';
import RockPaperScissors from './pages/RockPaperScissors';
import Winner from './pages/Winner';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/game" element={<RockPaperScissors />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </div>
  );
}

export default App;