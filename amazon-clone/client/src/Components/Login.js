import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

function Login(props) {
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState()
  const [emailValid, setEmailValid] = useState(false)
  const [email, setEmail] = useState('')
  const passwordRef = useRef()
  const history = useHistory()
  const { signIn } = useAuth()
  const emailRegex = /\S+@\S+\.\S+/
  const location = useLocation()
  let reauthentication = location.pathname.split('/')[2] === 'reauthentication'
  let deleteAccount = location.pathname.split('/')[2] === 'deleteaccount'
  let errorColor = reauthentication || deleteAccount ? '#3399ff' : '#ff0000'

  useEffect(() => {
    if (reauthentication && !deleteAccount) {
      setError('Requires recent-login to change sensitive information.')
    } else if (deleteAccount) {
      setError('Requires recent-login to delete account.')
    }
  }, [reauthentication, deleteAccount])

  function emailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmitEmail(e) {
    e.preventDefault()
    if (emailRegex.test(email)) {
      setEmailValid(true)
      return
    } else {
      setEmailValid(true)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setDisabled(true)
    try {
      await signIn(email, passwordRef.current.value).then(() => {
        setError('')
        setDisabled(false)
        console.log('Sucessfully signed-in!')
        props.setLocalState()
        //move to home page
        if (reauthentication) {
          history.push('/userinfo')
        } else if (deleteAccount) {
          history.push('/delete-account')
        } else {
          history.push('/')
        }
      })
    } catch (err) {
      if (err.message === 'auth/wrong-password') {
        setError('Wrong password.')
        setDisabled(false)
      } else {
        setError(err.message)
        setDisabled(false)
      }
    }
  }

  function beforeValidEmail() {
    return (
      <div className="loginFormContainer">
        <h1 className="title">Sign-In</h1>
        {error && (
          <p
            style={{
              color: errorColor,
              textAlign: "center"
            }}
          >
            {error}
          </p>
        )}
        <form className="theSignForm" onSubmit={handleSubmitEmail}>
          <h5>Email or mobile phone number</h5>
          <div className='justDiv'>
           <input className="inputTop" type="email" value={email} onChange={emailChange} />
          </div>
          <div className='justDiv'>
          <button className="theContinueSubmit">Continue</button>
          </div>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
      </div>
    )
  }

  function afterValidEmail() {
    return (
      <div className="loginFormContainer">
        <h1 className="title">Sign-In</h1>
        {error && (
          <p
            style={{
              color: errorColor,
              textAlign: "center"
            }}
          >
            {error}
          </p>
        )}

        <form className="theSignForm" onSubmit={handleSubmit}>
        <div className='justDiv'>
          <input className="inputTop" type="email" value={email} onChange={emailChange} />
        </div>
          <h5>Password</h5>
          <div className='justDiv'>
            <input className="inputTop" type="password" ref={passwordRef} />
          </div>
          <div className='justDiv'>
          <button className="theContinueSubmit" disabled={disabled}>Submit</button>
          </div>
          <p>
            Forgot <Link to="/forgot-password">password?</Link>
          </p>
          <p>
            Create an <Link to="/signup">account?</Link>
          </p>
        </form>
      </div>
    )
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="amazonLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      {!emailValid ? beforeValidEmail() : afterValidEmail()}
      {emailValid ? null : (
          <button className="signUpButton">
            <Link
              to="/signup"
              style={{
                textDecoration: 'none',
                color: 'black',
                alignSelf: 'center',
                textAlign: "center"
              }}
            >
              Create Your Amazon Account
            </Link>
          </button>
      )}
    </div>
  )
}

export default Login