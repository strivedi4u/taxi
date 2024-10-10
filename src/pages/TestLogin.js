import React,{useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../assets/css/profile.css';
import '../assets/css/login.css';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function TestLogin() {

    const [UserName, setUserName] = useState();
    const [UserPassword, setUserPassword] = useState();
    const API = 'https://swifttest.maruti.co.in/hrassist/api/login';
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post(API, {
            UserName: UserName,
            Password: UserPassword
        }, {
            headers: {
                "x-api-key": 'C4C4F44C-4714-4956-BA6A-BE49903CF6AB'
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    swal("Good job!", "Successfully saved", "success");
                    // setInterval(redirect, 2000);
                } else {
                    swal("Unfortunatilly!", "Unsuccessfully saved", "error");
                }
            })
            .catch((error) => {
                console.log(error);
                swal("Unfortunatilly!", error.response.data.error, "error");
            });
    }




    return (<>
        <div className="login-form">
            <form onSubmit={handleFormSubmit} method='post'>
                <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
                <h4 className="modal-title">Login to Your Account</h4>
                <div className="form-group">
                    <input type="text" defaultValue='smhbh5gi+31RtAIWeQ94Pg==' className="form-control" onChange={e => setUserName(e.target.value)} placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" defaultValue='krZHvq3VTKD2vhIppfQrvQ==' className="form-control" onChange={e => setUserPassword(e.target.value)} placeholder="Password" required="required" />
                </div>
                {/* <div className="form-group small clearfix">
            <label className="checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" className="forgot-link">Forgot Password?</a>
        </div>  */}
                <input type="submit"  className="btn btn-primary btn-block btn-lg" value="Login" />
            </form>
            {/* <div className="text-center small">Don't have an account? <a href="#">Sign up</a></div> */}
        </div>
    </>
    );
}

export default TestLogin;
