import React from 'react';
import logo from './../../assets/Logo.jpg';
import upsideIcon from './../../assets/Frame 2570.png';
import group from "./../../assets/Group.png";
import group1 from "./../../assets/Group(1).png";
import vector from "./../../assets/Vector.png";
import "./style.css";

const ChatSection = () => {
  return (
    <div className="chat-container">
      
      <div className="chat-header">
        <img src={logo} className="logo" alt="Logo" />
        <p>hey i am xzayogn</p>
      </div>

      <div className="message-section">
        <input type="text" placeholder="Message xzayogn" className="input" />
        <img src={upsideIcon} alt="Send Icon" className="send-icon" />
      </div>

      <div className="options">
        <div className="prompts">
          <img src={group} alt="Jobs Icon" />
          <p>Jobs in the gaming industry</p>
        </div>
        <div className="prompts">
          <img src={group1} alt="Visa Jobs Icon" />
          <p>Visa-sponsored jobs in UK?</p>
        </div>
        <div className="prompts">
          <img src={vector} alt="LLM Jobs Icon" />
          <p>LLM jobs posted in 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;





