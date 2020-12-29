import React, { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";


function videoCall () {

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
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => { // method prompts the user for permission to use a media input which produces a MediaStream
            setStream(stream);
            if(userVideo.current){
                userVideo.current.srcObject = stream;
            }
        })
        socket.current.on("yourID", (id) => {
            setYourID(id);
        })
        socket.current.on("allPeers", (peers) => {
            setPeers(peers)
        })
        socket.current.on("hello", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setCallerSignal(data.signal)
        })

}, [])
}



export default videoCall