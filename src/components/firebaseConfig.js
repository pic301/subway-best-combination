import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAMB2t5ywjNpGC7ty-4kKTSBgh2mfMvTcA",
    authDomain: "subway-best-combination.firebaseapp.com",
    databaseURL: "https://subway-best-combination.firebaseio.com",
    projectId: "subway-best-combination",
    storageBucket: "subway-best-combination.appspot.com",
    messagingSenderId: "227034148893",
    appId: "1:227034148893:web:9de2abbff19b26404556f4",
    measurementId: "G-Z4BBW5LLW8"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()

export default fire;
