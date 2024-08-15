// /components/decks/DeckList.js
import React from 'react';
import Deck from './Deck';

const DeckList = ({ decks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <Deck key={deck.id} deck={deck} />
      ))}
    </div>
  );
};

export default DeckList;
