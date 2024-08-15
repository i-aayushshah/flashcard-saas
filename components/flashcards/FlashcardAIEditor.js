// /components/flashcards/FlashcardAIEditor.js
import React, { useState } from 'react';
import { editFlashcard } from '../../utils/openai'; // Implement this utility function for AI-powered editing

const FlashcardAIEditor = ({ flashcard, onEdit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async () => {
    setIsLoading(true);
    const editedFlashcard = await editFlashcard(flashcard); // Use OpenAI to edit the flashcard
    setIsLoading(false);
    onEdit(editedFlashcard);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">AI-Edit Flashcard</h2>
      <div className="mt-2 text-gray-600">{flashcard.question}</div>
      <div className="mt-2 text-gray-600">{flashcard.answer}</div>
      <button
        className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        onClick={handleEdit}
        disabled={isLoading}
      >
        {isLoading ? 'Editing...' : 'Edit Flashcard with AI'}
      </button>
    </div>
  );
};

export default FlashcardAIEditor;
