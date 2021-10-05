import './Login.css';
import { Link } from 'react-router-dom'

function Login() {

  return (
    <div className="Login">
      <Link to="/">
        <img
          className="LoginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="LoginContainer">
        <h1>Sign-In</h1>
        <form>
        <h5>Email or mobile phone number</h5>
        <input type="text" />
        <button>Continue</button>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <p>Need Help?</p>
        </form>
      </div>

      <div className="LoginButton">
        <button>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;


// NEED TO FIGURE OUT HOW TO MAKE THE REST OF THE PAGE WHITE