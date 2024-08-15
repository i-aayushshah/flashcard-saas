// /pages/api/collaborativeFlashcards.js
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

export default async (req, res) => {
  const { flashcardId, update } = req.body;

  try {
    await db.collection('flashcards').doc(flashcardId).update(update);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ error: 'Failed to update flashcard' });
  }
};
