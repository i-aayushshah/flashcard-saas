// /components/collaboration/RealTimeEditor.js
import React, { useEffect, useState } from 'react';
import { realtimeEditorInit } from '../../utils/collaboration';

const RealTimeEditor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const editor = realtimeEditorInit((newContent) => {
      setContent(newContent);
    });

    return () => {
      editor.cleanup();
    };
  }, []);

  return (
    <div className="real-time-editor">
      <h1>Collaborative Editor</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Edit your flashcard content here..."
      />
    </div>
  );
};

export default RealTimeEditor;
