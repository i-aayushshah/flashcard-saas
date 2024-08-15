// /pages/collaboration/editor.js
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Input } from '../../components/ui';

const RealTimeEditor = () => {
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Establish WebSocket or other real-time connection
    const socket = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket URL

    socket.onopen = () => {
      console.log('Connected to WebSocket');
    };

    socket.onmessage = (message) => {
      setContent(message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSave = () => {
    // Send content to server
    fetch('/api/collaborativeFlashcards', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Real-Time Collaborative Editor</h1>
        <textarea
          rows="10"
          cols="50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing..."
          style={{ width: '100%', padding: '10px' }}
        />
        <div>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default RealTimeEditor;
