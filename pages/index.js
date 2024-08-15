import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Button, Card, FeatureCard } from '../components/ui';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a data fetch or setup here if needed
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the Flashcard App</h1>
        <p>
          Discover an efficient way to study and memorize information with our powerful flashcard application.
          Whether you're preparing for exams, learning a new language, or just brushing up on your knowledge,
          our app offers the tools and features to enhance your learning experience.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <FeatureCard
            title="Generate Flashcards"
            description="Create custom flashcards easily with AI assistance."
            icon="🔄" // Placeholder for an icon
          />
          <FeatureCard
            title="Real-Time Collaboration"
            description="Work together on flashcards and decks in real-time."
            icon="🤝" // Placeholder for an icon
          />
          <FeatureCard
            title="Track Progress"
            description="Monitor your learning progress and get personalized insights."
            icon="📈" // Placeholder for an icon
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Button href="/flashcards">Get Started</Button>
          <Button href="/pricing" style={{ marginLeft: '10px' }}>View Pricing</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
