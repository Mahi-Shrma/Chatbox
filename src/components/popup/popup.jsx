import React from "react";
import "./popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome</h2>
        <input
          type="email"
          placeholder="Email address or phone number*"
          className="email-input"
        />
        <button className="continue-btn">Continue</button>
        <p className="signup-text">
          Don't have an account? <a href="#"> Sign Up</a>
        </p>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="google-btn">Continue with Google</button>
      </div>
    </div>
  );
};

export default Popup;
