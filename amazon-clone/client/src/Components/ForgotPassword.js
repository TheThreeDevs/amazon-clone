import React, { useState, useRef } from "react";
import { Card, Form, Container, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function ForgotPassword(props) {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setDisabled(true);
      await resetPassword(emailRef.current.value);
      setMessage("Success! Check your email inbox for further instructions");
      setDisabled(false);
      setTimeout(() => {
        history.push("/login");
      }, 5000);
    } catch (err) {
      setAlert(err.message);
      setDisabled(false);
    }
  }

  return (
    <Container
      className="d-flex align-items-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-80" style={{ minWidth: "280px", maxWidth: "350px" }}>
        <Link to="/">
          <img
            className="amazonLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
        <Card className="d-flex " style={{ minWidth: "300px" }}>
          <Card.Body>
            <h2>Password assistance</h2>
            {alert && <Alert variant="danger">{alert}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Text>
                  Enter the email address associated with your Amazon account to
                  reset your password.
                </Form.Text>
                <Form.Label className="d-flex">Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button
                disabled={disabled}
                style={{ backgroundColor: "#cd9042", color: "black" }}
                className="w-100 mt-3"
                type="submit"
              >
                Continue
              </Button>

              <p className="mt-3">
                Remembered password?{" "}
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

export default ForgotPassword;
