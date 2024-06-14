import React from 'react';
import WebSocketChat from '../components/WebSocketChat';

const ChatPage: React.FC = () => {
  return (
    <div>
      <h1>Chat Page</h1>
      <WebSocketChat />
    </div>
  );
};

export default ChatPage;
