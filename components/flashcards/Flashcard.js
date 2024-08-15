// /components/flashcards/Flashcard.js
import React from 'react';

const Flashcard = ({ flashcard }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 transition-transform transform hover:scale-105">
      <div className="text-lg font-semibold text-gray-800">
        {flashcard.question}
      </div>
      <div className="mt-2 text-gray-600">
        {flashcard.answer}
      </div>
    </div>
  );
};

export default Flashcard;
