import React, { useState } from 'react';
import Footer from '../components/Footer';

const options = ['Pedra ✊', 'Papel 🤚', 'Tesoura ✌'];

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameTitle, setGameTitle] = useState('Faça sua jogada'); // Defina o título inicial

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'Empate!';
    } else if (
      (player === 'Pedra ✊' && computer === 'Tesoura ✌') ||
      (player === 'Papel 🤚' && computer === 'Pedra ✊') ||
      (player === 'Tesoura ✌' && computer === 'Papel 🤚')
    ) {
      setPlayerScore(playerScore + 1);
      setGameTitle('Boa jogada!'); // Altera o título para "Boa jogada!"
      return 'Você venceu!';
    } else {
      setComputerScore(computerScore + 1);
      setGameTitle('Poxa vida!'); // Altera o título para "Poxa vida!"
      return 'Máquina venceu!';
    }
  };

  const handlePlayerChoice = (choice) => {
    const computer = generateComputerChoice();
    const winner = determineWinner(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(winner);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setGameTitle('Faça sua jogada'); // Retorna o título para "Faça sua jogada"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="text-center">
            <h2>Jogador</h2>
            <p>Placar: {playerScore}</p>
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="text-center mb-4">{gameTitle}</h1> {/* Título dinâmico */}
          <div className="text-center options">
            {options.map((option) => (
              <button
                key={option}
                className="btn btn-primary mx-2"
                onClick={() => handlePlayerChoice(option)}
                disabled={playerChoice}
              >
                {option}
              </button>
            ))}
          </div>
          {playerChoice && (
            <div className="text-center result mt-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Resultados:</h4>
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p className="card-text">Você: {playerChoice}</p>
                      <p className="card-text">Máquina: {computerChoice}</p>
                      <p className="card-text">Resultado: {result}</p>
                    </div>
                  </div>
                  <button
                    className="btn btn-success mt-3"
                    onClick={handlePlayAgain}
                  >
                    Jogar Outra Partida
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Máquina</h2>
            <p>Placar: {computerScore}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default RockPaperScissors;
