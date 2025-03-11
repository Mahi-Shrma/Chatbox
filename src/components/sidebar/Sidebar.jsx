import React from 'react';
import './style.css';
import sidebarIcon from './../../assets/Frame 2756.png';
import logoIcon from './../../assets/Frame 2280.png';
import add from './../../assets/add.png';
import ideaIcon from './../../assets/Frame 2551.png';
import briefcase from './../../assets/briefcase.png'

const Sidebar = ({ isOpen, onClose }) => {
    return (
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
       
        <div className='top'>
          <img src={logoIcon} alt="Logo" className='logo-icon' />
          <button className="close-btn" onClick={onClose}>
            <img src={sidebarIcon} alt="Close" />
          </button>
        </div>
  

          <div className='grp1'>
            <div className='box'>
                <p>Upcoming</p>
                <img src={ideaIcon} className='ideaicon'/>
            </div>
            <div className='box'>
            <p>New Chat</p>
            <img src={add} className='img1'/>
            </div>
          </div>

          <div className='grp2'>
            <div className='box2'>
                <p>My Jobs</p>
                <img src={briefcase} className='img1'/>
            </div>
            </div>

            <div className='grp3'>
                <p className='para-head'>Today</p>
            <div className='box3'>
                <p>Career Switch advice?...</p>
            </div>
            </div>


      </div>
    );
  };
  
  export default Sidebar;
  