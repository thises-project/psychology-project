import React from "react";
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
import UserProfile from './components/userProfile';
import DoctorQuestions from './components/doctorQuestions';
import PrivateRoute from "./components/privateRoute";

var id = window.localStorage.userId;  //{"/userPro/:" + id} 

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/HomePage" exact component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/articles" component={Articles} />
          <Route path="/questions" component={QuestionsList} />
          <Route path="/doctorProfile/:id" exact component={DoctorProfile} />
          <Route path="/login" component={Login} />
          <Route path="/askQuestions" component={AddQuestion} />
          <Route path="/userPro/:id" component={UserProfile} />

          < Route path="/doctorQuestions" component={DoctorQuestions} />
          <Route path="/signup" component={Signup} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
