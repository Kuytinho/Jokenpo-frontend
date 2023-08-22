import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <div>
        <h1>Bem-vindo à página inicial!</h1>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastre-se</Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default Home;
