// /components/flashcards/FlashcardQuiz.js
import React, { useState } from 'react';

const FlashcardQuiz = ({ flashcards }) => {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Quiz Mode</h2>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {flashcards[current].question}
      </div>
      {showAnswer && (
        <div className="mt-2 text-gray-600">{flashcards[current].answer}</div>
      )}
      <button
        className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      <button
        className="mt-4 w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700"
        onClick={handleNext}
      >
        Next Question
      </button>
    </div>
  );
};

export default FlashcardQuiz;
