import React, { useState } from 'react';

interface WelcomeProps {
  onStart: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Quiz de Front-End e Back-End!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4 w-64 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Começar o Quiz
        </button>
      </form>
    </div>
  );
};

export default Welcome;

