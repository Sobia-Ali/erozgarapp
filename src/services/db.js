// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs9hRuFqxhM6iQ4Ercm7ROIMXz0OXjgPw",
  authDomain: "erozgarapp-96a54.firebaseapp.com",
  projectId: "erozgarapp-96a54",
  storageBucket: "erozgarapp-96a54.appspot.com",
  messagingSenderId: "87728457035",
  appId: "1:87728457035:web:532072e5221fa9cbadd4ce",
  measurementId: "G-EEMQFK4JLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // this will attafch my keys with my firestore

export { auth, firestore };
