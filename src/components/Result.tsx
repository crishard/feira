import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface ResultProps {
  playerName: string;
  score: number;
  totalQuestions: number;
}

const Result: React.FC<ResultProps> = ({ playerName, score, totalQuestions }) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Parabéns, {playerName}!</h2>
      <p className="text-xl mb-4">Você completou o quiz!</p>
      <p className="text-2xl font-semibold mb-4">
        Seu placar final: {score} acerto{score !== 1 ? 's' : ''} de {totalQuestions} perguntas
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Jogar Novamente
      </button>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default Result;

