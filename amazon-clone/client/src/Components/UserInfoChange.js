import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./UserInfoChange.css";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function UserInfoChange() {
  const { currentUser, updateProfileName, updateTheEmail, updateThePassword } = useAuth();
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(null);
  const history = useHistory();
  let theForm;
  //change email, change password, delete account, these require reauthentication.  
  function determineForm(form) {
    setForm(form);
    setShow(true);
  }
  
  async function handleSubmit(e, action) {
    e.preventDefault();
    const functionToCall = {
      "name" : updateProfileName,
      "email" : updateTheEmail,
      "password" : updateThePassword
    };
    try {
      let theFunction = functionToCall[action];
      await theFunction(input)
      .then(() => {
        console.log("Sucess account info changed.")
        handleClose();
      })
    } catch (err) {
      console.log("Error:", err.code);
      if (err.code === "auth/requires-recent-login") {
        history.push("/login/reauthentication")
      }
    }
  }

  const nameForm = (
    <Form onSubmit={(e) => handleSubmit(e, "name")}>
      <Form.Group>
        <Form.Label>Update Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          onChange={(e) => setInput(e.target.value) }
        ></Form.Control>
      </Form.Group>
    </Form>
  );

  const emailForm = (
    <Form onSubmit={(e) => handleSubmit(e, "email")}>
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
    <Form onSubmit={(e) => handleSubmit(e, "password")}>
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

  function handleClose() {
    console.log("resetting now...");
    setShow(false);
    setInput("")
    setForm(null);
  }

  if (form === "name") {
    theForm = nameForm;
  } else if (form === "email") {
    theForm = emailForm;
  } else if (form === "password") {
    theForm = passwordForm;
  }

  return (
    <>
      <h3 className="loginTitle"> Login & security</h3>
      <div className="updateInfoContainer">
        {/* 6 divs for the specific change */}
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Name:</b>
            <div>{currentUser.displayName}</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={() => determineForm("name")}>
              Edit
            </button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Email:</b>
            <div>{currentUser.email}</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={() => determineForm("email")}>
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
            <div>secured & hidden</div>
          </div>
          <div className="insideButton">
            <button className="editButton" onClick={() => determineForm("password")}>
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
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Title></Modal.Title>
        <Modal.Header closeButton>
        </Modal.Header>

        {/* Here goes the appropriate form needed, depending on the state */}
        <Modal.Body>{theForm}</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e, form)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserInfoChange;