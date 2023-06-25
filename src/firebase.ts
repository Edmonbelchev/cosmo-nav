import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyATA2qOqdgy3-jop8SsDI6lM0cuUs2EKaQ",
    authDomain: "cosmonav-da72f.firebaseapp.com",
    projectId: "cosmonav-da72f",
    storageBucket: "cosmonav-da72f.appspot.com",
    messagingSenderId: "152795157329",
    appId: "1:152795157329:web:fc1886f3a1e91e977a3970",
    measurementId: "G-073151V246"
  };
  

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore()

export { auth, db }