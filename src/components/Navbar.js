import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.jpg';
import axios from 'axios';
const Navbar = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };
    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log('API URL:', apiUrl);
            try {
                const response = await axios.post(
                    process.env.REACT_APP_API_URL + '/hrassist/api/Services/GetEmplyeeProfile',
                    // Replace with your API endpoint
                    {
                        body: localStorage.getItem('UserName'),  // This is the body parameter you're passing
                    },
                    {
                        headers: {
                            'Authorization': localStorage.getItem('authToken'),  // Authorization header with token
                            'Content-Type': 'application/json',  // Adjust headers as needed
                        },
                    }
                );
                console.log(response.data);
            } catch (err) {
                console.error("API call error:", err);
            }
        };

        // Only call fetchData if the parameter is available
        //   if (parameter) {
        fetchData();
        //   }
    }, []);



    return (

        <nav className="navbar wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
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
                    <li className={props.home}><a href="/">Home</a></li>

                    <li className="dropdown">
                        <a
                            data-toggle="dropdown"
                            className="dropdown-toggle"
                            href="#"
                        >
                            Booking <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                            <li className={props.mbooking}><a href="/mbook">Self Booking</a></li>
                            <li className={props.gbooking}><a href="/gbook">On Behalf Booking</a></li>
                            <li className={props.gbooking}><a href="/gbook">Guest Booking</a></li>
                        </ul>
                    </li>
                    <li className={props.vrequest}><a href="/vrequest">View Request</a></li>
                    <li className={props.uManuals}><a href="/">User Manuals</a></li>

                    {/* <li><a href="#">Blog</a></li>
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
                    <li>
                        <a href="#" className="notifications">
                            <i className="fa fa-bell-o"></i>
                            <span className="badge">1</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className="messages">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge">10</span>
                        </a>
                    </li> */}
                    <li className={`${props.profile} dropdown`}>
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
                            <li><a href="/profile"><i className="fa fa-user-o"></i> Profile</a></li>
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
