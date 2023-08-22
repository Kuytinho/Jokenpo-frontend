import React, { useState } from 'react';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para verificar se o email é válido
  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para verificar se a senha tem pelo menos 6 caracteres
  const isPasswordValid = () => {
    return password.length >= 6;
  };

  return (
   <div>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className={`form-control ${isEmailValid() ? '' : 'is-invalid'}`}
                    id="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Exibir uma mensagem de erro se o email for inválido */}
                  {!isEmailValid() && (
                    <div className="invalid-feedback">E-mail inválido.</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    className={`form-control ${isPasswordValid() ? '' : 'is-invalid'}`}
                    id="senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Exibir uma mensagem de erro se a senha for muito curta */}
                  {!isPasswordValid() && (
                    <div className="invalid-feedback">A senha deve ter pelo menos 6 caracteres.</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isEmailValid() || !isPasswordValid()}>
                  Entrar
                </button>
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

export default Login;
