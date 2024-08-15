// /pages/api/generateFlashcard.js
import { OpenAI } from 'openai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    res.status(200).json({ flashcards: response.data.choices[0].text });
  } catch (error) {
    console.error('Error generating flashcard:', error);
    res.status(500).json({ error: 'Failed to generate flashcard' });
  }
};
