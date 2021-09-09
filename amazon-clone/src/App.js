// import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/basket">
            <NavBar />
            <h1>Basket </h1>
          </Route>
          <Route path="/">
            <NavBar />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
