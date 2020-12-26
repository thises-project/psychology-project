

 import React, { useState, useEffect } from 'react';

import Navbar from './components/navbar';
import { BrowserRouter as Router , Switch, Route } from  "react-router-dom";
import "./App.css";
import Doctors from "./components/doctors";
import Articles from "./components/articles";
import QuestionsList from "./components/questions";
import Login from "./components/login";
import Home from "./components/home";
import AddQuestion from "./components/askQuestions";
import Signup from "./components/SignUp";
import DoctorProfile from "./components/doctorProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from './components/userProfile'
import EditUser from './components/editUserProfile'
// allows to dispatch an action 
 import { useDispatch}  from 'react-redux';
import {updateUser} from './actions/adduser';
import UpdateDoctor from "./components/updateDoctor";

import DoctorQuestions from './components/doctorQuestions';
// import PrivateRoute from "./components/privateRoute";

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [currentId, dispatch]);
// var id = window.localStorage.userId;  //{"/userPro/:" + id} 


  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/HomePage" exact component={Home} />


      <Route path="/doctors" component={Doctors}/>
      <Route path="/doctorProfile/:id" exact component={DoctorProfile} />
      <Route path="/updateDoctor/:id" component={UpdateDoctor} />
      <Route path="/doctorQuestions" component={DoctorQuestions} />


      <Route path="/articles" component={Articles}/>


      {/* <Route path="/questions" component={Questions}/> */}
      <Route path="/askQuestions" component = {AddQuestion}/>
      <Route path="/questions" component={QuestionsList} />


      <Route path="/userPro/:id" component={UserProfile} setCurrentId={setCurrentId}/>
      <Route path="/edit/:id" component={EditUser} currentId={currentId} setCurrentId={setCurrentId}/>

      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login}/>

      

      </Switch>
    </div>
     
          
          

    </Router>
  );
}

export default App;
