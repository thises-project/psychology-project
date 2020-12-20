import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Switch, Route } from  "react-router-dom";
import Doctors from "./components/doctors";
import Articles from "./components/articles"
import Questions from "./components/questions"
import Login from "./components/login"
import Home from "./components/home"
import Signup from "./components/SignUp"
import "bootstrap/dist/css/bootstrap.min.css";
// allows to dispatch an action 
import { useDispatch}  from 'react-redux';
import {Adduser} from './actions/adduser';


function App() {

  const dispatch = useDispatch();

  // its is like componentDidMount but used for updates
  // useEffect(()=>{
  //      dispatch(Adduser())
  // })


  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/doctors" component={Doctors}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/questions" component={Questions}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
