import React, { useState, useRef } from "react";
import { Card, Form, Container, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { database } from "../firebase";

function SignUp(props) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, updateProfileName } = useAuth();
  const regexPassword = new RegExp("(?=.*[0-9a-zA-Z]).{6,}");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (!regexPassword.test(passwordRef.current.value)) {
      return setError(
        "Password must be 6 characters long and include valid characters"
      );
    }
    try {
      setDisabled(true);
      await signUp(emailRef.current.value, passwordRef.current.value)
        .then(() => {
          auth.onAuthStateChanged((user) => {
            if (user) {
              updateProfileName(user, nameRef.current.value);
              //create a document in userd with userUID and set name property
              database
                .collection("users")
                .doc(user.uid)
                .set({
                  name: nameRef.current.value,
                  basket: [],
                  subtotal: 0,
                  address: "",
                });
            }
          });
        })
        .then(() => {
          setDisabled(false);
          setError("");
          history.push("/");
        });
    } catch (err) {
      setError(err.message);
      setDisabled(false);
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-80" style={{ minWidth: "280px", maxWidth: "350px" }}>
        <Link to="/">
          <img
            className="LoginLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
        <Card className="d-flex " style={{ minWidth: "300px" }}>
          <Card.Body>
            <h2>Create account</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label className="mb-0">Your name</Form.Label>
                <Form.Control type="text" ref={nameRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label className="mb-0">Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="mb-0">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="At least 6 characters"
                  ref={passwordRef}
                  required
                />
                <Form.Text>Passwords must be atleast 6 characters</Form.Text>
              </Form.Group>
              <Form.Group id="passwordCofirm" className="mt-1">
                <Form.Label className="mb-0">Re-enter password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>

              <Button
                disabled={disabled}
                style={{ backgroundColor: "#cd9042", color: "black" }}
                className="w-100 mt-3"
                type="submit"
              >
                Create Your Amazon Account
              </Button>
              <p className="mt-1" style={{ fontSize: "10px" }}>
                {" "}
                By creating an account, you agree to Amazon's{" "}
                <a href="/">Conditions of Use</a> and{" "}
                <a href="/">Privacy Notice.</a>
              </p>

              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Sign-In
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default SignUp;
