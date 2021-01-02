import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQEunKx76GYVJJjk-XEI_tl50qJR4AGxo",
    authDomain: "fir-react-a2c7c.firebaseapp.com",
    projectId: "fir-react-a2c7c",
    storageBucket: "fir-react-a2c7c.appspot.com",
    messagingSenderId: "730853180210",
    appId: "1:730853180210:web:719136d30a023fb7c8cd2b",
    measurementId: "G-QCLCQV65RK"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
export { storage, firebase as default };