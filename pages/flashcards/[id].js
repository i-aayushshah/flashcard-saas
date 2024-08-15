// /pages/flashcards/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FlashcardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [flashcard, setFlashcard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchFlashcard = async () => {
        try {
          const response = await axios.get(`/api/flashcards/${id}`);
          setFlashcard(response.data);
        } catch (err) {
          setError('Failed to load flashcard details');
        } finally {
          setLoading(false);
        }
      };

      fetchFlashcard();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      {flashcard ? (
        <>
          <h1>{flashcard.question}</h1>
          <p>{flashcard.answer}</p>
          {/* Render additional flashcard details as needed */}
        </>
      ) : (
        <p>No flashcard found</p>
      )}
    </div>
  );
};

export default FlashcardDetail;
