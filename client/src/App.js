import React from 'react';
// import router from '../../server/app/routes/user';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";



import Signup from './components/askQuestions';




function App() {
  return (
    <Router>
    <div >
    <Route path = "/askQuestions" component = { Signup } />
    </div>
      </Router>
  );
}

export default App;
