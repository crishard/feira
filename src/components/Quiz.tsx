import React, { useState } from 'react';
import toast from 'react-hot-toast';
import questions from '../data/questions';
import QuizQuestion from './QuizQuestion';
import Result from './Result';

interface QuizProps {
  playerName: string;
}

const Quiz: React.FC<QuizProps> = ({ playerName }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      toast.success('Resposta correta!', { duration: 1500 });
    } else {
      toast.error('Resposta incorreta!', { duration: 1500 });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result playerName={playerName} score={score} totalQuestions={questions.length} />;
  }

  return (
    <QuizQuestion
      question={questions[currentQuestion]}
      onAnswer={handleAnswer}
      currentQuestion={currentQuestion + 1}
      totalQuestions={questions.length}
      score={score}
    />
  );
};

export default Quiz;

