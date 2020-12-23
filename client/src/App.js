// import React from 'react';
// import router from '../../server/app/routes/user';
// import React, { useEffect } from 'react';

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctors from "./components/doctors";
import Articles from "./components/articles";
import Questions from "./components/questions";
import Login from "./components/login";
import Home from "./components/home";
import AddQuestion from "./components/askQuestions";
import Signup from "./components/SignUp";
import DoctorProfile from "./components/doctorProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/userProfile";
import UpdateDoctor from "./components/updateDoctor";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/articles" component={Articles} />
          <Route path="/questions" component={Questions} />
          <Route path="/doctorProfile/:id" exact component={DoctorProfile} />
          <Route path="/login" component={Login} />
          <Route path="/askQuestions" component={AddQuestion} />
          <Route path="/userPro/:id" component={UserProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/updateDoctor/:id" component={UpdateDoctor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
