import React, { useState } from 'react';
import '../assets/css/navbar.css'; // Include your custom styles here
import logo from '../assets/images/logo.jpg';
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <span><img src={logo} /></span><span>&nbsp;&nbsp;&nbsp;Taxi Rental<b> System</b></span>
        </a>
        <button 
          type="button" 
          data-target="#navbarCollapse" 
          data-toggle="collapse" 
          className="navbar-toggle" 
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div id="navbarCollapse" className={`collapse navbar-collapse ${!isCollapsed ? 'in' : ''}`}>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Guest Booking</a></li>
          <li><a href="#">MSIL Booking</a></li>
          <li><a href="#">View Request</a></li>
          <li><a href="#">User Manuals</a></li>
          {/* <li className="dropdown">
            <a 
              data-toggle="dropdown" 
              className="dropdown-toggle" 
              href="#"
            >
              MSIL Booking <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#"></a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li> */}
        </ul>

        {/* <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input 
              type="text" 
              id="search" 
              className="form-control" 
              placeholder="Search by Name" 
            />
            <span className="input-group-addon">
              <i className="material-icons">&#xE8B6;</i>
            </span>
          </div>
        </form> */}

        <ul className="nav navbar-nav navbar-right">
          {/* <li>
            <a href="#" className="notifications">
              <i className="fa fa-bell-o"></i>
              <span className="badge">1</span>
            </a>
          </li>
          <li>
            <a href="#" className="messages">
              <i className="fa fa-envelope-o"></i>
              <span className="badge">10</span>
            </a>
          </li> */}
          <li className="dropdown">
            <a 
              href="#" 
              data-toggle="dropdown" 
              className="dropdown-toggle user-action"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/81739538?v=4" 
                className="avatar" 
                alt="Avatar"
              /> 
              Shashank Trivedi <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#"><i className="fa fa-user-o"></i> Profile</a></li>
              {/* <li><a href="#"><i className="fa fa-calendar-o"></i> Calendar</a></li>
              <li><a href="#"><i className="fa fa-sliders"></i> Settings</a></li> */}
              <li className="divider"></li>
              <li><a href="#"><i className="material-icons">&#xE8AC;</i> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
