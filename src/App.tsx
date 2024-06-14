import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import ChatPage from './pages/ChatPage';
import { requestFirebaseNotificationPermission, onMessageListener } from './firebaseConfig';

const App: React.FC = () => {
  useEffect(() => {
    requestFirebaseNotificationPermission();
    
    onMessageListener().then(payload => {
      console.log('Received foreground message: ', payload);
      // Optionally display a notification to the user here
    }).catch(err => console.log('Failed to receive foreground message: ', err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
