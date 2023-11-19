import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCjKSNsKydAWkiO2GyHEP687-7wFTx7YUI",
    authDomain: "olx-clone-30bd7.firebaseapp.com",
    projectId: "olx-clone-30bd7",
    storageBucket: "olx-clone-30bd7.appspot.com",
    messagingSenderId: "279205940727",
    appId: "1:279205940727:web:b72e68bfc89174bcba72f2"
  };
  
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig)