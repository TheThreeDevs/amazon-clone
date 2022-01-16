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
  let errorColor = reauthentication ? '#3399ff' : '#ff0000'

  useEffect(() => {
    if (reauthentication) {
      setError('Requires recent-login to change sensitive information.')
    }
  }, [reauthentication])

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
      <div className="LoginContainer">
        <h1 className="mb-2 mt-1">Sign-In</h1>
        {error && (
          <p
            style={{
              fontSize: '13px',
              paddingLeft: '6%',
              paddingRight: '6%',
              color: errorColor,
              marginBottom: '-5px',
            }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleSubmitEmail}>
          <h5>Email or mobile phone number</h5>
          <input type="email" value={email} onChange={emailChange} />
          <button>Continue</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p>
            Forgot <Link to="/forgot-password">Password?</Link>
          </p>
        </form>
      </div>
    )
  }

  function afterValidEmail() {
    return (
      <div className="LoginContainer">
        <h1 className="mb-2 mt-1">Sign-In</h1>
        {error && (
          <p
            style={{
              fontSize: '13px',
              paddingLeft: '6%',
              paddingRight: '6%',
              color: errorColor,
              marginBottom: '-5px',
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={emailChange} />
          <h5>Password</h5>
          <input type="password" ref={passwordRef} />
          <button disabled={disabled}>Submit</button>
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
    <div className="Login">
      <Link to="/">
        <img
          className="LoginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      {!emailValid ? beforeValidEmail() : afterValidEmail()}
      {emailValid ? null : (
        <div className="LoginButton">
          <button>
            <Link
              to="/signup"
              style={{
                textDecoration: 'none',
                color: 'black',
                alignSelf: 'center',
              }}
            >
              Create Your Amazon Account
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default Login

// NEED TO FIGURE OUT HOW TO MAKE THE REST OF THE PAGE WHITE
