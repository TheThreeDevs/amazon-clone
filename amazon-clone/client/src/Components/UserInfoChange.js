import React, { useState } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import './UserInfoChange.css'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function UserInfoChange() {
  const {
    currentUser,
    updateProfileName,
    updateTheEmail,
    updateThePassword,
  } = useAuth()
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
  const [form, setForm] = useState(null)
  const [message, setMessage] = useState('')
  const history = useHistory()
  let theForm
  //change email, change password, delete account, these require reauthentication.
  function determineForm(form) {
    setForm(form)
    setShow(true)
  }

  async function handleSubmit(e, action) {
    e.preventDefault()
    if (action === 'password' && input.length < 6) {
      return
    }
    const functionToCall = {
      name: updateProfileName,
      email: updateTheEmail,
      password: updateThePassword,
    }
    try {
      let theFunction = functionToCall[action]
      await theFunction(input).then(() => {
        setMessage('Success account info changed!')
        handleClose()
      })
    } catch (err) {
      console.log('Error:', err.code)
      if (err.code === 'auth/requires-recent-login') {
        history.push('/login/reauthentication')
      }
    }
  }

  const nameForm = (
    <Form onSubmit={(e) => handleSubmit(e, 'name')}>
      <Form.Group>
        <Form.Label>Update Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          onChange={(e) => setInput(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  )

  const emailForm = (
    <Form onSubmit={(e) => handleSubmit(e, 'email')}>
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
  )

  const passwordForm = (
    <Form onSubmit={(e) => handleSubmit(e, 'password')}>
      <Form.Group>
        <Form.Label>Update Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new Password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Form.Control>
        <Form.Text>Password must be minimum 6 characters long.</Form.Text>
      </Form.Group>
    </Form>
  )

  function handleClose() {
    setShow(false)
    setInput('')
    setForm(null)
  }

  if (form === 'name') {
    theForm = nameForm
  } else if (form === 'email') {
    theForm = emailForm
  } else if (form === 'password') {
    theForm = passwordForm
  }

  return (
    <div className="container">
      <div className="divContainer">
        <h3 className="title"> Login & security</h3>
        {message ? (
          <Alert
            variant="success"
            style={{ width: '100%' }}
            className="flex align-self-center text-center"
          >
            <p>{message}</p>
          </Alert>
        ) : null}
        {/* 6 divs for the specific change */}
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Name:</b>
            <div>{currentUser.displayName}</div>
          </div>
          <div className="insideButton">
            <button
              className="editButton"
              onClick={() => determineForm('name')}
            >
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
            <button
              className="editButton"
              onClick={() => determineForm('email')}
            >
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
            <div>Secured & Hidden</div>
          </div>
          <div className="insideButton">
            <button
              className="editButton"
              onClick={() => determineForm('password')}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="insideContainer">
          <div className="insideCategory">
            <b>Delete Account Permanently:</b>
            <div>You will be asked to reauthenticate to proceed.</div>
          </div>
          <div className="insideButton">
            <button
              className="editButton"
              onClick={() => history.push('/delete-account')}
            >
              Delete
            </button>
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
        <Link to="/account" className="align-self-start">
          <button className="mb-2 mt-2 doneButton">Done</button>
        </Link>
      </div>

      {/* Modal for when the use{r clicks to modify information */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>

        {/* Here goes the appropriate form needed, depending on the state */}
        <Modal.Body>{theForm}</Modal.Body>

        <Modal.Footer>
          {form === 'password' && input.length <= 5 ? (
            <Button
              variant="primary"
              disabled
              type="submit"
              onClick={(e) => handleSubmit(e, form)}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e, form)}
            >
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UserInfoChange
