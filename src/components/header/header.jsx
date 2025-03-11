import React, { useState } from "react";
import user from "./../../assets/Logo.png";
import sidebarIcon from "./../../assets/Frame 2756.png";
import Sidebar from "../sidebar/Sidebar"; 
import Popup from "../popup/popup";
import "./style.css";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // New state for popup
  
    return (
      <>
        <div className="header">
          <div className="sidebar-icon" onClick={() => setIsSidebarOpen(true)}>
            <img src={sidebarIcon} alt="Sidebar Menu" />
          </div>
  
          <div className="right-corner" onClick={() => setIsPopupOpen(true)}> 
            <img src={user} alt="User Profile" />
          </div>
        </div>
  
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
  
        {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />} 
      </>
    );
  };
  
  export default Header;