// /components/flashcards/CollaborativeFlashcards.js
import React, { useEffect, useState } from 'react';
import { firestore } from '../../utils/firebase'; // Adjust the import according to your setup

const CollaborativeFlashcards = ({ flashcardId }) => {
  const [flashcard, setFlashcard] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('flashcards')
      .doc(flashcardId)
      .onSnapshot((doc) => {
        setFlashcard(doc.data());
      });

    return () => unsubscribe();
  }, [flashcardId]);

  const handleEdit = (field, value) => {
    firestore
      .collection('flashcards')
      .doc(flashcardId)
      .update({ [field]: value });
  };

  return flashcard ? (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Collaborative Flashcard</h2>
      <div className="mt-2 text-gray-600">
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          value={flashcard.question}
          onChange={(e) => handleEdit('question', e.target.value)}
        />
      </div>
      <div className="mt-2 text-gray-600">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          value={flashcard.answer}
          onChange={(e) => handleEdit('answer', e.target.value)}
        ></textarea>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default CollaborativeFlashcards;
