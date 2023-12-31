import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para verificar se o email é válido
  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para verificar se a senha tem pelo menos 6 caracteres
  const isPasswordValid = () => {
    return senha.length >= 6;
  };

  // Função para verificar se o nome não está em branco
  const isNomeValid = () => {
    return nome.trim() !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNomeValid() || !isEmailValid() || !isPasswordValid()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const data = { nome, email, senha };

    try {
      const response = await fetch('https://expressjs-prisma-production-18bf.up.railway.app/cadastros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        // Você pode redirecionar o usuário para outra página ou executar ações adicionais aqui.
      } else {
        alert('Erro ao cadastrar. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h4>Cadastre-se</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className={`form-group ${!isNomeValid() ? 'has-error' : ''}`}>
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className={`form-control ${!isNomeValid() ? 'is-invalid' : ''}`}
                      id="nome"
                      placeholder="Digite seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                    {/* Exibir mensagem de erro se o nome estiver em branco */}
                    {!isNomeValid() && (
                      <div className="invalid-feedback">Nome não pode estar em branco.</div>
                    )}
                  </div>
                  <div className={`form-group ${!isEmailValid() ? 'has-error' : ''}`}>
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      className={`form-control ${!isEmailValid() ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="Digite seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* Exibir mensagem de erro se o email for inválido */}
                    {!isEmailValid() && (
                      <div className="invalid-feedback">E-mail inválido.</div>
                    )}
                  </div>
                  <div className={`form-group ${!isPasswordValid() ? 'has-error' : ''}`}>
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      className={`form-control ${!isPasswordValid() ? 'is-invalid' : ''}`}
                      id="senha"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                    {/* Exibir mensagem de erro se a senha for muito curta */}
                    {!isPasswordValid() && (
                      <div className="invalid-feedback">A senha deve ter pelo menos 6 caracteres.</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isNomeValid() || !isEmailValid() || !isPasswordValid()}
                  >
                    Cadastrar
                  </button>
                  <Link to="/login" className="btn btn-primary">Login</Link>
                  <Link to="/" className="btn btn-secondary">Voltar</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
