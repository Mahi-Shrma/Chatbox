// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZglJuXyCtwTv7PfT7X_dM4q0zrIBMNA",
  authDomain: "chatbox-3d845.firebaseapp.com",
  projectId: "chatbox-3d845",
  storageBucket: "chatbox-3d845.firebasestorage.app",
  messagingSenderId: "934465247077",
  appId: "1:934465247077:web:0ffa6497ec6bbac3dcb38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
