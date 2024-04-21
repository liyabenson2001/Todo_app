import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebase, { app } from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <FirebaseContext.Provider value={{app}}>
  <App />
</FirebaseContext.Provider>,
    

  
);



