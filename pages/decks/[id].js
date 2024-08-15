// /pages/decks/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DeckDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchDeck = async () => {
        try {
          const response = await axios.get(`/api/decks/${id}`);
          setDeck(response.data);
        } catch (err) {
          setError('Failed to load deck details');
        } finally {
          setLoading(false);
        }
      };

      fetchDeck();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      {deck ? (
        <>
          <h1>{deck.title}</h1>
          <p>{deck.description}</p>
          {/* Render additional deck details as needed */}
        </>
      ) : (
        <p>No deck found</p>
      )}
    </div>
  );
};

export default DeckDetail;
