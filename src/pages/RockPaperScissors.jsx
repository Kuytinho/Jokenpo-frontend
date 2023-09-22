import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate do React Router
import Footer from '../components/Footer';
import playerLogo from '../logos/playerNormal.png';
import computerLogo from '../logos/compuNormal.png';
import playerLose from '../logos/playerLose.png';
import computerLose from '../logos/compuLose.png';
import '../css/RockPaperScissors.css'; // Importe o arquivo de estilos CSS

const options = ['Pedra ✊', 'Papel 🤚', 'Tesoura ✌'];

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameTitle, setGameTitle] = useState('Faça sua jogada');
  const [modoNoturno, setModoNoturno] = useState(false);
  const [playerImage, setPlayerImage] = useState(playerLogo);
  const [computerImage, setComputerImage] = useState(computerLogo);
  const [playerImageClass, setPlayerImageClass] = useState('');
  const [computerImageClass, setComputerImageClass] = useState('');

  const navigate = useNavigate(); // Use o hook useNavigate para navegar para outra rota

  const ativarModoNoturno = () => {
    setModoNoturno(true);
  };

  const desativarModoNoturno = () => {
    setModoNoturno(false);
  };

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
      setGameTitle('Boa jogada!');
      return 'Você venceu!';
    } else {
      setComputerScore(computerScore + 1);
      setGameTitle('Poxa vida!');
      return 'Máquina venceu!';
    }
  };

  const handlePlayerChoice = (choice) => {
    const computer = generateComputerChoice();
    const winner = determineWinner(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(winner);

    if (playerScore === 10) {
      localStorage.setItem('winner', 'player'); // Armazene 'player' no localStorage
      navigate('/winner'); // Navegue para a rota "/winner"
    } else if (computerScore === 10) {
      localStorage.setItem('winner', 'computer'); // Armazene 'computer' no localStorage
      navigate('/winner'); // Navegue para a rota "/winner"
    }
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setGameTitle('Faça sua jogada');
    setPlayerImageClass('');
    setComputerImageClass('');
  };

  useEffect(() => {
    if (playerScore > computerScore) {
      setComputerImage(computerLose);
      setPlayerImageClass('moveUp');
      setComputerImageClass('moveDown');
    } else if (computerScore > playerScore) {
      setPlayerImage(playerLose);
      setPlayerImageClass('moveDown');
      setComputerImageClass('moveUp');
    } else {
      setPlayerImage(playerLogo);
      setComputerImage(computerLogo);
    }
  }, [playerScore, computerScore]);

  return (
    <div className={`container mt-5 ${modoNoturno ? 'bg-dark text-light' : ''}`}>
      <div className="text-center">
        <button onClick={ativarModoNoturno} className="btn btn-dark mr-2">
          Ativar Modo Noturno
        </button>
        <button onClick={desativarModoNoturno} className="btn btn-light">
          Desativar Modo Noturno
        </button>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className={`text-center ${playerImageClass}`}>
            <h2>Jogador</h2>
            <p>Placar: {playerScore}</p>
            <img src={playerImage} alt="Logo do Jogador" />
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="text-center mb-4">{gameTitle}</h1>
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
            <div className={`text-center result mt-4 ${modoNoturno ? 'bg-dark text-light' : ''}`}>
              <div className="card">
                <div className={`card-body ${modoNoturno ? 'bg-dark text-light' : ''}`}>
                  <h4 className="card-title">Resultados:</h4>
                  <div className={`row justify-content-center ${modoNoturno ? 'bg-dark text-light' : ''}`}>
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
          <div className={`text-center ${computerImageClass}`}>
            <h2>Máquina</h2>
            <p>Placar: {computerScore}</p>
            <img src={computerImage} alt="Logo da Máquina" />
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
