// /utils/collaboration.js

let socket = null;

// Initialize WebSocket connection
export const initializeCollaboration = (url) => {
  if (socket) {
    console.warn('Already connected');
    return;
  }

  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('Connected to collaboration room');
  };

  socket.onmessage = (event) => {
    // Handle incoming messages
    console.log('Received message:', event.data);
  };

  socket.onclose = () => {
    console.log('Disconnected from collaboration room');
    socket = null;
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
};

// Send data to the collaboration room
export const sendCollaborationData = (data) => {
  if (!socket) {
    console.error('Not connected');
    return;
  }

  socket.send(JSON.stringify(data));
  console.log('Sent data:', data);
};

// Example usage for real-time content update
export const updateCollaborativeContent = (content) => {
  sendCollaborationData({ type: 'update', content });
};
