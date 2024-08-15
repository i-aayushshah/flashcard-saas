// /components/decks/DeckAIRecommendation.js
import React, { useState, useEffect } from 'react';
import { getAIRecommendations } from '../../utils/openai'; // Implement this utility function for AI-powered recommendations

const DeckAIRecommendation = ({ onRecommend }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      const recs = await getAIRecommendations(); // Use OpenAI to get recommendations
      setRecommendations(recs);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">AI-Recommended Decks</h2>
      {isLoading ? (
        <div className="text-gray-600">Loading recommendations...</div>
      ) : (
        <ul className="mt-2 text-gray-600">
          {recommendations.map((rec, index) => (
            <li key={index} className="mt-2">
              <button
                className="text-indigo-600 hover:text-indigo-800"
                onClick={() => onRecommend(rec)}
              >
                {rec.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeckAIRecommendation;
