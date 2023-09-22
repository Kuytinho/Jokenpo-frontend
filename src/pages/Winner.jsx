import React, { useEffect, useState } from 'react';

function Winner() {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Acesse o localStorage para obter o vencedor
    const storedWinner = localStorage.getItem('winner');
    setWinner(storedWinner);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Ja vi o bastante...</h1>
      {winner === 'player' && (
        <div className="text-center">
          <h2>O jogador venceu!</h2>
          {/* Adicione qualquer conteúdo adicional que você queira mostrar */}
        </div>
      )}
      {winner === 'computer' && (
        <div className="text-center">
          <h2>A máquina venceu!</h2>
          {/* Adicione qualquer conteúdo adicional que você queira mostrar */}
        </div>
      )}
      {!winner && (
        <div className="text-center">
          <h2>Não há vencedor ainda.</h2>
          {/* Adicione qualquer conteúdo adicional que você queira mostrar */}
        </div>
      )}
    </div>
  );
}

export default Winner;
