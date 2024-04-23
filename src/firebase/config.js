import { initializeApp } from 'firebase/app';
//import firebase from 'firebase';
//import { getAuth } from 'firebase/auth';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaN2KWlLWmJn9H7DhTARbAJql5_4NEnq0",
    authDomain: "todo-c5933.firebaseapp.com",
    projectId: "todo-c5933",
    storageBucket: "todo-c5933.appspot.com",
    messagingSenderId: "448084239867",
    appId: "1:448084239867:web:ee2116e92fbc9fadb8575e",
    measurementId: "G-9SHRPD6F84"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp;
  //const auth = getAuth(app);





