import React from 'react';
import './UserInfoChange.css';
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

function UserInfoChange () {
  // const { resetPassword } = useAuth();
  //change display name
  //change email
  //change password
  //delete account

  return (
    <div>
      <h3 className='loginTitle'> Login & security</h3>
      <div className='updateInfoContainer'>
        {/* 6 divs for the specific change */}
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Name:</b>
            <div>Daniel</div>
          </div>
          <div className='insideButton'>
            <button className='editButton'>Edit</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Email:</b>
            <div>Daniel</div>
          </div>
          <div className='insideButton'>
            <button className='editButton'>Edit</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Mobile Phone Number:</b>
            {/* <a href='google.com'>Why add a mobile number?</a> */}
            {/* <div>Why add a mobile number?</div> */}
          </div>
          <div className='insideButton'>
            <button className='editButton'>Add</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Password:</b>
            <div>Daniel</div>
          </div>
          <div className='insideButton'>
            <button className='editButton'>Edit</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Two-Step Verification:</b>
            <div>For extra security, require a one-time password at sign-in</div>
          </div>
          <div className='insideButton'>
            <button className='editButton'>Edit</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Secure Your Account:</b>
            <div>If you think your Amazon account has been compromised, follow these steps to make your account more secure.</div>
          </div>
          <div className='insideButton'>
            <button className='editButton'>Edit</button>
          </div>
        </div>
      </div>
      <Link to='/account'>
        <button className='doneButton'>Done</button>
      </Link>
    </div>
  )
}

export default UserInfoChange;