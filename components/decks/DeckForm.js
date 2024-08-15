// /components/decks/DeckForm.js
import React, { useState } from 'react';

const DeckForm = ({ onSubmit, deck }) => {
  const [name, setName] = useState(deck ? deck.name : '');
  const [description, setDescription] = useState(deck ? deck.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <form className="bg-white shadow-lg rounded-lg p-4 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Deck Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
      >
        {deck ? 'Update Deck' : 'Create Deck'}
      </button>
    </form>
  );
};

export default DeckForm;
