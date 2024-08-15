// /pages/api/getAIRecommendations.js
import { OpenAI } from 'openai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  const { userPreferences } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate deck recommendations based on: ${userPreferences}`,
      max_tokens: 150,
    });

    res.status(200).json({ recommendations: response.data.choices[0].text });
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    res.status(500).json({ error: 'Failed to get AI recommendations' });
  }
};
