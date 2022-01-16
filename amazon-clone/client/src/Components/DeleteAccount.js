import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import { Alert, Button } from "react-bootstrap";
import { database } from "../firebase";

function DeleteAccount() {
  const { deleteTheUser, currentUser } = useAuth();
  const history = useHistory();
  const [reason, setReason] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let userUid = currentUser.uid;
      await database.collection("users").doc(userUid).delete()
      .then(() => {
        deleteTheUser()
        history.push("/");
      })
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/requires-recent-login") {
        history.push("/login/deleteaccount");
      }
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="w-75 mt-5">Close Your Amazon Account</h2>
      <h4 className="w-75 mt-3">Please read this carefully</h4>
      <p className="w-75 text-baseline">
        You are about to submit a request for us to permanently close your
        Amazon account and delete your data. Once your account is closed all of
        the products and services accessed through your account will no longer
        be available to you, across any Amazon sites globally.
      </p>
      <p className="w-75">
        If you proceed with this request you will not be able to access products
        and services associated with your closed account, including:
      </p>
      <ListGroup className="w-75">
        <ListGroup.Item>Amazon Store</ListGroup.Item>
        <ListGroup.Item>Amazon Web Services (AWS)</ListGroup.Item>
        <ListGroup.Item>Amazon Prime</ListGroup.Item>
        <ListGroup.Item>Whole Foods</ListGroup.Item>
        <ListGroup.Item>Audible</ListGroup.Item>
        <ListGroup.Item>Amazon Alexa</ListGroup.Item>
      </ListGroup>
      <Alert variant="warning" className="w-75 mt-3">
        <Alert.Heading style={{ color: "black" }}>
          Account Closure Is A Permanent Action
        </Alert.Heading>
        <p>
          Please note account closure is a permanent action and once your
          account is closed it will no longer be available to you and cannot be
          restored. If you decide later that you want to start ordering from us
          again, or if you would like to use products and services that require
          an account, you will need to create a new account.
        </p>
      </Alert>
      <h6 className="w-75">
        Please select the main reason for closing your Amazon account (Optional)
      </h6>
      <Dropdown
        className="w-75"
        style={{ backgroundColor: "white" }}
        onSelect={(e) => setReason(e)}
      >
        <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }}>
          {reason ? reason : "Choose Reason"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="I am not using this account anymore">
            I am not using this account anymore
          </Dropdown.Item>
          <Dropdown.Item eventKey="I have another account">
            I have another account
          </Dropdown.Item>
          <Dropdown.Item eventKey="I want to create a new account">
            I want to create a new account
          </Dropdown.Item>
          <Dropdown.Item eventKey="I have open issues with Amazon">
            I have open issues with Amazon
          </Dropdown.Item>
          <Dropdown.Item eventKey="Privacy concerns">
            Privacy concerns
          </Dropdown.Item>
          <Dropdown.Item eventKey="I don't want to provide a reason">
            I don't want to provide a reason
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="m-3 w-75">
      <Button variant="warning" onClick={handleSubmit}>Close My Account</Button>
      </div>
      <p className="w-75 mb-5">
        Please be advised that Amazon is legally required or entitled to retain
        some types of data, such as order history. We do this in line with
        applicable laws including for tax and accounting and fraud prevention
        purposes.
      </p>
    </div>
  );
}

export default DeleteAccount;