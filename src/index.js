import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Offline service worker magic 🪄💘
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/customServiceWorker.js') // this file should be in the public folder!
      .then(reg => {
        console.log('[😍SW] Custom service worker registered!', reg);
      })
      .catch(err => {
        console.error('[😭SW] Error registering service worker:', err);
      });
  });
}

// Optional: track performance, baby 🧠
reportWebVitals();
