import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAvm8vAD9Oey3DhhgosxVFvSfL47vy4wRA",
    authDomain: "project-71-78d39.firebaseapp.com",
    projectId: "project-71-78d39",
    storageBucket: "project-71-78d39.appspot.com",
    messagingSenderId: "115921046873",
    appId: "1:115921046873:web:7dc6ab9eec7561fe441048"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
