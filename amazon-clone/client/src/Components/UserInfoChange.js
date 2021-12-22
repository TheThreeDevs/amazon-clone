import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import NameForm from './NameForm';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import './UserInfoChange.css';
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

function UserInfoChange () {
  // const { resetPassword } = useAuth();
  //change display name
  //change email
  //change password
  //delete account

  const [show, setShow] = useState(false);
  const [form, setForm] = useState(null);

  function handleOpenName () {
    setShow(true);
    setForm('name');
  }

  function handleOpenEmail () {
    setShow(true);
    setForm('email');
  }

  function handleOpenPassword () {
    setShow(true);
    setForm('password');
  }

  function handleClose () {
    setShow(false);
  }

  //pass the functions as props
  if (form === 'name') {
     var formCalled = <NameForm />
  } else if (form === 'email') {
    formCalled = <EmailForm />
  } else if (form === 'password') {
    formCalled = <PasswordForm />
  };

  return (
    <>
      <h3 className='loginTitle'> Login & security</h3>
      <div className='updateInfoContainer'>
        {/* 6 divs for the specific change */}
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Name:</b>
            <div>Daniel</div>
          </div>
          <div className='insideButton'>
            <button className='editButton' onClick={handleOpenName}>Edit</button>
          </div>
        </div>
        <div className='insideContainer'>
          <div className='insideCategory'>
            <b>Email:</b>
            <div>Daniel</div>
          </div>
          <div className='insideButton'>
            <button className='editButton' onClick={handleOpenEmail}>Edit</button>
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
            <button className='editButton' onClick={handleOpenPassword}>Edit</button>
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

      {/* Modal for when the use{r clicks to modify information */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        {/* Here goes the appropriate form needed, depending on the state */}
        <Modal.Body>
          {formCalled}
        </Modal.Body>

        <Modal.Footer>
          <Button variant='primary' type='submit' onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserInfoChange;