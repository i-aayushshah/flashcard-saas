// /components/decks/Deck.js
import React from 'react';

const Deck = ({ deck }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 transition-transform transform hover:scale-105">
      <div className="text-xl font-semibold text-gray-800">
        {deck.name}
      </div>
      <div className="mt-2 text-gray-600">
        {deck.description}
      </div>
    </div>
  );
};

export default Deck;
