import React from 'react';
import { Question } from '../data/questions';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
  score,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Pergunta {currentQuestion} de {totalQuestions}</h2>
      <p className="text-lg mb-4">{question.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option === question.correctAnswer)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-lg font-semibold">
        Placar: {score} acerto{score !== 1 ? 's' : ''} ✅ / {currentQuestion - 1} erro{currentQuestion - 1 !== 1 ? 's' : ''} ❌
      </p>
    </div>
  );
};

export default QuizQuestion;

