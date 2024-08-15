// /components/flashcards/FlashcardAIAnalyzer.js
import React, { useState, useEffect } from 'react';
import { analyzePerformance } from '../../utils/openai'; // Implement this utility function for AI analysis

const FlashcardAIAnalyzer = ({ flashcards, progress }) => {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const performAnalysis = async () => {
      const result = await analyzePerformance(flashcards, progress); // Use OpenAI to analyze performance
      setAnalysis(result);
    };

    performAnalysis();
  }, [flashcards, progress]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">AI Performance Analysis</h2>
      {analysis ? (
        <div className="mt-4 text-gray-600">{analysis}</div>
      ) : (
        <div className="text-gray-600">Analyzing performance...</div>
      )}
    </div>
  );
};

export default FlashcardAIAnalyzer;
