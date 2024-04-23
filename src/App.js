
import './App.css';
import {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import  firebase  from './firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Signup from './components/Signup/Signup';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  const [toDos, setTodos]= useState([])
  const [toDo,setTodo]= useState('')
  return (
    <div className="todo-app">
     <Router>
      <Routes>
      <Route path="/" element={<TodoList />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

         </Routes>
         


      </Router>


    
  </div>
  );
}

export default App;
