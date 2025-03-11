import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import googleicon from "./../../assets/icons8-google-48.png";
import "./popup.css";

const Popup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // Function for signing in
  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      toast.success("Logged in successfully!");
      onClose();
    } catch (error) {
      console.error("Error signing in:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("User doesn't exist. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.");
      } else {
        toast.error(error.message);
      }
    }
  };

  // signing up
  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      toast.success("Account created successfully!");
      onClose();
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error(error.message);
    }
  };

  // Google sign-in
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google:", result.user);
      //   toast.success("Signed in with Google!");
      if (result._tokenResponse.isNewUser) {
        toast.success("Welcome! Your Google account has been registered.");
      } else {
        toast.success("Welcome back! You have successfully signed in.");
      }
      onClose();
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h2>{isSignUp ? "Create an Account" : "Welcome Back"}</h2>

        <input
          type="email"
          placeholder="Email address*"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password*"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="continue-btn"
          onClick={isSignUp ? handleEmailSignUp : handleEmailLogin}
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </button>

        <p className="signup-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? " Log In" : " Sign Up"}
          </a>
        </p>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src={googleicon} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Popup;
