import React, { useState, useContext } from 'react';
//import { getDatabase, ref, push } from 'firebase/database';

import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
//import {useHistory} from 'react-router-dom';
import firebaseApp from '../../firebase/config';
//import Firebase from '../../firebase/config';



export default function Signup() {
   // const history = useHistory()
    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const firebaseApp = useContext(FirebaseContext);

   

    const handleSubmit = (e)=>{
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            return result.user.updateProfile({
                displayName: Username
            // }).then(()=>{
            //   firebaseApp.firestore().collection('users').add({
            //     id: result.Username,
            //     username: Username,
            //     phone:phone

            //   }).then(()=>{
            //     history.push('/login')
            //   })


            })
        })
        .then(() => {
            console.log('User display name updated successfully.');
        })
        .catch((error) => {
            console.error('Error creating user:', error.message);
        });
};
  return (
    <div>
      <div className="signupParentDiv">
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
};
