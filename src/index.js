import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebaseApp from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    
    <FirebaseContext.Provider value={firebaseApp}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,

  
);



