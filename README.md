# React Clean Boilerplate

This project is a ReactJS application using TypeScript and Vite. It includes CRUD operations, authentication, WebSocket functionality, and push notifications using Firebase Cloud Messaging (FCM).

## Features

- User Authentication (Login, Register)
- CRUD Operations for Users
- WebSocket Integration for Real-time Messaging
- Push Notifications using Firebase Cloud Messaging
- Clean Architecture

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/zikazama/react-clean-boilerplate 
    cd your-repo
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Install server dependencies**

    ```bash
    npm install express ws body-parser firebase-admin dotenv
    ```

## Configuration

1. **Create a `.env` file in the root directory and add the following variables:**

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
    VITE_FIREBASE_VAPID_KEY=your_vapid_key
    ```

2. **Firebase Setup**

    - Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and add a web app to your project.
    - Download the `serviceAccountKey.json` file and place it in your project root (for server-side notifications).

3. **Create `public/env.js`**

    ```javascript
    window.env = {
      VITE_FIREBASE_API_KEY: "your_api_key",
      VITE_FIREBASE_AUTH_DOMAIN: "your_auth_domain",
      VITE_FIREBASE_PROJECT_ID: "your_project_id",
      VITE_FIREBASE_STORAGE_BUCKET: "your_storage_bucket",
      VITE_FIREBASE_MESSAGING_SENDER_ID: "your_messaging_sender_id",
      VITE_FIREBASE_APP_ID: "your_app_id",
      VITE_FIREBASE_MEASUREMENT_ID: "your_measurement_id"
    };
    ```

## Running the Project

1. **Start the WebSocket server**

    ```bash
    node server.js
    ```

2. **Start the Vite development server**

    ```bash
    npm run dev
    ```

3. **Register the service worker**

    The service worker should automatically be registered when you start the app. Ensure the following code is in `src/main.tsx`:

    ```typescript
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((err) => {
          console.log('Service Worker registration failed:', err);
        });
    }
    ```

## Project Structure

src/
|-- api/
| |-- auth.ts
| |-- user.ts
|-- components/
| |-- Auth/
| | |-- Login.tsx
| | |-- Register.tsx
| |-- User/
| |-- UserList.tsx
| |-- UserForm.tsx
|-- hooks/
| |-- useAuth.ts
| |-- useWebSocket.ts
|-- models/
| |-- User.ts
|-- pages/
| |-- Home.tsx
| |-- LoginPage.tsx
| |-- RegisterPage.tsx
| |-- UserPage.tsx
| |-- ChatPage.tsx
|-- services/
| |-- AuthService.ts
| |-- UserService.ts
|-- store/
| |-- useAuthStore.ts
|-- firebaseConfig.ts
|-- App.tsx
|-- main.tsx
public/
|-- firebase-messaging-sw.js
|-- env.js


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
- **WebSocket**: A protocol for full-duplex communication channels over a single TCP connection.
- **Zustand**: A small, fast and scalable bearbones state-management solution.

## Additional Notes

- Ensure that your Firebase configuration details are correct in the `.env` file and `env.js`.
- For security reasons, never expose your private keys or sensitive information in your client-side code. Use environment variables and server-side configurations.

---

This `README.md` provides a comprehensive guide for setting up and running your project. Adjust the content to fit your specific project details and ensure that all instructions are clear and accurate.

