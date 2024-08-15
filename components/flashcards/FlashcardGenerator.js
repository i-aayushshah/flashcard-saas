// /components/flashcards/FlashcardGenerator.js
import React, { useState } from 'react';
import { generateFlashcard } from '../../utils/openai'; // Implement this utility function for AI-powered generation

const FlashcardGenerator = ({ onGenerate }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    const flashcard = await generateFlashcard(input); // Use OpenAI to generate a flashcard based on the input
    setIsLoading(false);
    onGenerate(flashcard);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Generate Flashcard</h2>
      <textarea
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter topic or text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        onClick={handleGenerate}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Flashcard'}
      </button>
    </div>
  );
};

export default FlashcardGenerator;
