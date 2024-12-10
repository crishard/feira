import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Quiz from './components/Quiz';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const startQuiz = (name: string) => {
    setPlayerName(name);
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
        {!quizStarted ? (
          <Welcome onStart={startQuiz} />
        ) : (
          <Quiz playerName={playerName} />
        )}
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default App;

