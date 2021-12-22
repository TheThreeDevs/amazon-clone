import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./UserInfoChange.css";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

function UserInfoChange() {
  // const { updateTheProfile, updateTheEmail, updateThePassword, deleteTheUser } =
  //   useAuth();
  //change email, change password, delete account, these require reauthentication.
  // async function handleSecuritySensitive() {
  //try to do the change
  //catch the error that requires reauthentication, require log in!
  // }

  const [show, setShow] = useState(false);
  const [form, setForm] = useState(null);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("This is input: ", input);
  }

  function handleExit() {
    setInput("");
  }

  const nameForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Update Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );

  const emailForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Update Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );

  const passwordForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Update Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );

  function handleOpenName() {
    setShow(true);
    setForm("name");
  }

  function handleOpenEmail() {
    setShow(true);
    setForm("email");
  }

  function handleOpenPassword() {
    setShow(true);
    setForm("password");
  }

  function handleClose() {
    setShow(false);
  }

  //pass the functions as props
  if (form === "name") {
    var formCalled = nameForm;
  } else if (form === "email") {
    formCalled = emailForm;
  } else if (form === "password") {
    formCalled = passwordForm;
  }

  return (
    <>
      <h3 className="loginTitle"> Login & security</h3>
      <div className="updateInfoContainer">
        {/* 6 divs for the specific change */}
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Name:</b>
            <div>Daniel</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={handleOpenName}>
              Edit
            </button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Email:</b>
            <div>Daniel</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={handleOpenEmail}>
              Edit
            </button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Mobile Phone Number:</b>
            {/* <a href='google.com'>Why add a mobile number?</a> */}
            {/* <div>Why add a mobile number?</div> */}
          </div>
          <div className="insideButton">
            <button className="editButton">Add</button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Password:</b>
            <div>Daniel</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={handleOpenPassword}>
              Edit
            </button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Two-Step Verification:</b>
            <div>
              For extra security, require a one-time password at sign-in
            </div>
          </div>
          <div className="insideButton">
            <button className="editButton">Edit</button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Secure Your Account:</b>
            <div>
              If you think your Amazon account has been compromised, follow
              these steps to make your account more secure.
            </div>
          </div>
          <div className="insideButton">
            <button className="editButton">Edit</button>
          </div>
        </div>
      </div>
      <Link to="/account">
        <button className="doneButton">Done</button>
      </Link>

      {/* Modal for when the use{r clicks to modify information */}
      <Modal show={show} onHide={handleClose} onExit={handleExit}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        {/* Here goes the appropriate form needed, depending on the state */}
        <Modal.Body>{formCalled}</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserInfoChange;
