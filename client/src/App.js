import React, { useState } from 'react';
import Navbar from './components/thenavbar';
import { BrowserRouter as Router , Switch, Route } from  "react-router-dom";
import Doctors from "./components/doctors";
import Articles from "./components/articles"
import Questions from "./components/questions"
import Login from "./components/login"
import Home from "./components/home"
import Signup from "./components/SignUp"
import UserProfile  from "./components/userProfile"
import EditUser from './components/editUserProfile'
import DoctorProfile  from "./components/doctorProfile"
import UpdateDoctor from "./components/updateDoctor"
import DoctorQuestions from "./components/doctorQuestions"
import AddQuestion from "./components/askQuestions";
import PrivateRoute from "./components/privateRoute";
import ZoomComponent from './components/videoCall';

import UserQuestionAnswers from './components/userQuestionAnswers'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import VideoCall from './components/videoCall';


function App() {

  const [currentId, setCurrentId] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
          {/* public components  */}
          <Route path="/" exact component={Home}/>
          <Route path="/HomePage" exact component={Home} />
          <Route path="/doctors" component={Doctors}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/questions" component={Questions}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/video" component={ZoomComponent}/> 
          {/* user private components */}

      <PrivateRoute path="/userPro" component={UserProfile} currentId={currentId} setCurrentId={setCurrentId}/>
      <PrivateRoute path="/edit/:id" component={EditUser} currentId={currentId} setCurrentId={setCurrentId}/>
      <PrivateRoute path="/askQuestions" component = {AddQuestion}/>
      <Route path = "/UserQuestionsAnswers/:id" currentId={currentId} setCurrentId={setCurrentId}  component={UserQuestionAnswers}/>
          {/* doctor private components */}

          {/* doctor private components */}
          <PrivateRoute path="/doctorProfile/:id" exact component={DoctorProfile} currentId={currentId} setCurrentId={setCurrentId}/>
          <PrivateRoute path="/updateDoctor/:id" component={UpdateDoctor} currentId={currentId} setCurrentId={setCurrentId} />
          <PrivateRoute path="/doctorQuestions" component={DoctorQuestions} currentId={currentId} setCurrentId={setCurrentId}/>
          
          </Switch>
      </div>
    </Router>
  );
}

export default App;


// import React, { useEffect, useState, useRef } from 'react';
// import './App.css';
// import io from "socket.io-client";
// import Peer from "simple-peer";
// import styled from "styled-components";

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const Row = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Video = styled.video`
//   border: 1px solid blue;
//   width: 50%;
//   height: 50%;
// `;

// function App() {
//   const [yourID, setYourID] = useState("");
//   const [peers, setPeers] = useState({});
//   const [stream, setStream] = useState();
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState("");
//   const [callerSignal, setCallerSignal] = useState();
//   const [callAccepted, setCallAccepted] = useState(false);

//   const userVideo = useRef();
//   const partnerVideo = useRef();
//   const socket = useRef();

//   useEffect(() => {
//     socket.current = io.connect("/");
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
//       setStream(stream);
//       if (userVideo.current) {
//         userVideo.current.srcObject = stream;
//       }
//     })

//     socket.current.on("yourID", (id) => {
//       // console.log(id)
//       setYourID(id);
//     })
//     socket.current.on("allUsers", (peers) => {
//       setPeers(peers);
//     })

//     socket.current.on("hey", (data) => {
//       setReceivingCall(true);
//       setCaller(data.from);
//       setCallerSignal(data.signal);
//     })
//   }, []);

//   function callPeer(id) {
//     console.log("walaaaaa")
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       config: {

//         iceServers: [
//             {
//                 urls: "stun:numb.viagenie.ca",
//                 username: "sultan1640@gmail.com",
//                 credential: "98376683"
//             },
//             {
//                 urls: "turn:numb.viagenie.ca",
//                 username: "sultan1640@gmail.com",
//                 credential: "98376683"
//             }
//         ]
//     },
//       stream: stream,
//     });
//     console.log(peer)

//     peer.on("signal", data => {
//       console.log(data)
//       socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
//       console.log(id)
//     })

//     peer.on("stream", stream => {
//       if (partnerVideo.current) {
//         partnerVideo.current.srcObject = stream;
//       }
//     });

//     socket.current.on("callAccepted", signal => {
//       setCallAccepted(true);
//       peer.signal(signal);
//     })

//   }

//   function acceptCall() {
//     console.log("jjjjjjjjjj")
//     setCallAccepted(true);
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream,
//     });
//     peer.on("signal", data => {
//       console.log(data)
//       socket.current.emit("acceptCall", { signal: data, to: caller })
//     })

//     peer.on("stream", stream => {
//       partnerVideo.current.srcObject = stream;
//     });

//     peer.signal(callerSignal);
//   }

//   let UserVideo;
//   if (stream) {
//     UserVideo = (
//       <Video playsInline muted ref={userVideo} autoPlay />
//     );
//   }

//   let PartnerVideo;
//   if (callAccepted) {
//     PartnerVideo = (
//       <Video playsInline ref={partnerVideo} autoPlay />
//     );
//   }

//   let incomingCall;
//   if (receivingCall) {
//     incomingCall = (
//       <div>
//         <h1>{caller} is calling you</h1>
//         <button onClick={acceptCall}>Accept</button>
//       </div>
//     )
//   }
//   return (
//     <Container>
//       <Row>
//         {UserVideo}
//         {PartnerVideo}
//       </Row>
//       <Row>
//         {Object.keys(peers).map(key => {
//           if (key === yourID) {
//             return null;
//           }
//           return (
//             <button onClick={() => callPeer(key)}>Call {key}</button>
//           );
//         })}
//       </Row>
//       <Row>
//         {incomingCall}
//       </Row>
//     </Container>
//   );
// }

// export default App;
