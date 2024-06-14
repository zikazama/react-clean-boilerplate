importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');
importScripts('/env.js'); // Load the env.js script

const firebaseConfig = {
  apiKey: window.env.VITE_FIREBASE_API_KEY,
  authDomain: window.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: window.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: window.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: window.env.VITE_FIREBASE_APP_ID,
  measurementId: window.env.VITE_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
