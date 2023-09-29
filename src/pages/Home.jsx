import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import jokenpoImage from '../logos/jokenpo1.png'; // Importe a imagem

function Home() {
  return (
    <div className="container mt-5">
      <Header />
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 text-center">
          <h2>O que é Jokenpo?</h2>
          <p>
            Jokenpo é um jogo de mão muito popular, também conhecido como Pedra,
            Papel e Tesoura. No jogo, os jogadores escolhem entre três opções:
            pedra, papel ou tesoura, e o vencedor é determinado com base em
            regras simples: a pedra quebra a tesoura, a tesoura corta o papel e
            o papel embrulha a pedra.
          </p>
          <img
            src={jokenpoImage}
            alt="Ilustração de Pedra, Papel e Tesoura"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;