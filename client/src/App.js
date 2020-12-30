import React, { useState } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Switch, Route } from  "react-router-dom";
import Doctors from "./components/doctors";
import Articles from "./components/articles";
import Questions from "./components/questions";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/SignUp";
import UserProfile from "./components/userProfile";
import EditUser from "./components/editUserProfile";
import DoctorProfile from "./components/doctorProfile";
import UpdateDoctor from "./components/updateDoctor";
import DoctorQuestions from "./components/doctorQuestions";
import AddQuestion from "./components/askQuestions";
import PrivateRoute from "./components/privateRoute";
import UserQuestionAnswers from "./components/userQuestionAnswers";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import VideoCall from './components/videoCall';

import RateDoctor from "./components/rateDoctor";

function App() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* public components  */}
          <Route path="/" exact component={Home} />
          <Route path="/HomePage" exact component={Home} />
<<<<<<< HEAD
          <Route path="/doctors" component={Doctors} />
          <Route path="/articles" component={Articles} />
          <Route path="/questions" component={Questions} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

=======
          <Route path="/doctors" component={Doctors}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/questions" component={Questions}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/video" component={VideoCall}/> 
>>>>>>> 17f3cde8efa8d74979ec2f301152023d94438f01
          {/* user private components */}

          <PrivateRoute
            path="/userPro"
            component={UserProfile}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
          <PrivateRoute
            path="/edit/:id"
            component={EditUser}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
          <PrivateRoute path="/askQuestions" component={AddQuestion} />
          <Route
            path="/UserQuestionsAnswers/:id"
            currentId={currentId}
            setCurrentId={setCurrentId}
            component={UserQuestionAnswers}
          />
          {/* doctor private components */}

          {/* doctor private components */}
<<<<<<< HEAD
          <Route path="/doctorProfile/:id" exact component={DoctorProfile} />
          <Route path="/updateDoctor/:id" component={UpdateDoctor} />
          <Route path="/doctorQuestions" component={DoctorQuestions} />
          <Route path="/rateDoctor" component={RateDoctor} />
        </Switch>
=======
          <PrivateRoute path="/doctorProfile/:id" exact component={DoctorProfile} currentId={currentId} setCurrentId={setCurrentId}/>
          <PrivateRoute path="/updateDoctor/:id" component={UpdateDoctor} currentId={currentId} setCurrentId={setCurrentId} />
          <PrivateRoute path="/doctorQuestions" component={DoctorQuestions} currentId={currentId} setCurrentId={setCurrentId}/>
          
          </Switch>
>>>>>>> 17f3cde8efa8d74979ec2f301152023d94438f01
      </div>
    </Router>
  );
}

export default App;
