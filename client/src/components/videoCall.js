import React, { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
// import './App.css';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;


      function VideoCall () {

       const [yourID, setYourID] = useState("");
       const [peers, setPeers] = useState({});
       const [stream, setStream] = useState();
       const [receivingCall, setReceivingCall] = useState(false);
       const [caller, setCaller] = useState("");
       const [callerSignal, setCallerSignal] = useState();
       const [callAccepted, setCallAccepted] = useState(false);

       const userVideo = useRef();
       const partnerVideo = useRef();
       const socket = useRef();
    


       useEffect (() => {
        socket.current = io.connect('/');
        console.log("connected")
        
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then( stream => { // method prompts the user for permission to use a media input which produces a MediaStream
            setStream(stream);
            if(userVideo.current){
                userVideo.current.srcObject = stream;
            }
        })
        socket.current.on("yourID", (id) => {
          //console.log(id)
            setYourID(id);
        }) 
        
        socket.current.on("allUsers", (peers) => {
          // console.log(peers, "3rd")
            setPeers(peers)
          })
          
        socket.current.on("hey", (data) => {
            console.log(data)
            setReceivingCall(true);
            setCaller(data.from);
            setCallerSignal(data.signal);
        })
       

}, []);

function callPeer(id){
    console.log("walaaaaa")
    const peer = new Peer({
        initiator: true,
        trickle: false,
      //   config: {

      //       iceServers: [
      //         {
      //           urls: "stun:numb.viagenie.ca",
      //           username: "sultan1640@gmail.com",
      //           credential: "98376683"
      //         },
      //         {
      //           urls: "turn:numb.viagenie.ca",
      //           username: "sultan1640@gmail.com",
      //           credential: "98376683" 
      //         }
      //     ]
      // },

      stream: stream,
    })

    peer.on("signal", data => {
    //console.log(data)
        socket.current.emit("callUser", { userTocall: id, signalData: data, from: yourID })
        //console.log({ userTocall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
        if (partnerVideo.current) {
            partnerVideo.current.srcObject = stream;
        }
    });

    // socket.current.on("callAccepted", signal => {
    //     setCallAccepted(true);
    //     peer.signal(signal);
    // })

  }

  function acceptCall() {
    setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
        });
        peer.on("signal", data => {
            socket.current.emit("acceptCall", { signal: data, to: caller })
        })

        peer.on("stream", stream => {
          partnerVideo.current.srcObject = stream;

        });
        peer.signal(callerSignal);
    }

    let UserVideo;
    if(stream) {
        UserVideo = (
            <Video playsInline muted ref={userVideo} autoPlay />

        );
    }

    let PartnerVideo;
    if (callAccepted) {
        PartnerVideo = (
            <Video playsInline ref={partnerVideo} autoPlay />
        );
    }

    let incomingCall;
  if (receivingCall) {
        incomingCall = (
            <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>  
        )
    }

    return (
        <Container>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
        {Object.keys(peers).map((id, index) => {
          if (id === yourID) {
            return null;
          }
          return (
            <button key={index} onClick={() => callPeer(id)}>Call {id}</button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
        {/* <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>  */}

      </Row>
    </Container>

    );


}



export default VideoCall;

//hiiii






// import React, { Component } from 'react'

// import { ZoomMtg } from "@zoomus/websdk";

// // Add this, never use it client side in production
// const API_KEY = '';
// // Add this, never use it client side in production
// const API_SECRET = '';
// // This can be your Personal Meeting ID
// const MEETING_NUMBER = 1234567890;

// const meetConfig = {
//     apiKey: API_KEY,
//     apiSecret: API_SECRET,
//     meetingNumber: MEETING_NUMBER,
//     userName: 'test user',
//     passWord: '',
//     leaveUrl: 'https://zoom.us',
//     role: 0
// };

// export default class Zoom extends Component {
//     state = {
//         meetingLaunched: false,
//     }

//     launchMeeting = () => {
        
//         // change state of meeting
//         this.setState({ meetingLaunched: !this.state.meetingLaunched })

//         // generateSignature should only be used in development
//         ZoomMtg.generateSignature({
//             meetingNumber: meetConfig.meetingNumber,
//             apiKey: meetConfig.apiKey,
//             apiSecret: meetConfig.apiSecret,
//             role: meetConfig.role,
//             success(res) {
//                 console.log('signature', res.result);
//                 ZoomMtg.init({
//                     leaveUrl: 'http://www.zoom.us',
//                     success() {
//                         ZoomMtg.join(
//                             {
//                                 meetingNumber: meetConfig.meetingNumber,
//                                 userName: meetConfig.userName,
//                                 signature: res.result,
//                                 apiKey: meetConfig.apiKey,
//                                 userEmail: 'email@gmail.com',
//                                 passWord: meetConfig.passWord,
//                                 success() {
//                                     console.log('join meeting success');
//                                 },
//                                 error(res) {
//                                     console.log(res);
//                                 }
//                             }
//                         );
//                     },
//                     error(res) {
//                         console.log(res);
//                     }
//                 });
//             }
//         });
//     }
    
//     componentDidMount() {
//         ZoomMtg.setZoomJSLib("https://source.zoom.us/1.7.0/lib", "/av");
//         ZoomMtg.preLoadWasm();
//         ZoomMtg.prepareJssdk();
//     }

//     render() {
//         const { meetingLaunched} = this.state;
//         // Displays a button to launch the meeting when the meetingLaunched state is false
//         return (
//             <>
//                 {!meetingLaunched ? 
//                     <button className="launchButton" onClick={this.launchMeeting}>Launch Meeting</button> 
//                 : 
//                     <></>
//                 }
//             </>
//         )
//     }
// }