import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="text-center">
            <h1>Bem-vindo à página inicial!</h1>
            <p>Escolha uma opção:</p>
            <Link to="/login" className="btn btn-primary m-2">Login</Link>
            <Link to="/cadastro" className="btn btn-secondary m-2">Cadastre-se</Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
