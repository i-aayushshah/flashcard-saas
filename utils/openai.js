import axios from 'axios';

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';
const OPENAI_API_URL = 'https://api.openai.com/v1/';

export const generateFlashcards = async (prompt) => {
  try {
    const response = await axios.post(
      `${OPENAI_API_URL}completions`,
      {
        prompt,
        model: 'text-davinci-003',
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating flashcards:', error);
    throw error;
  }
};
