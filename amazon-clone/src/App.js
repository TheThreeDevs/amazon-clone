import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Basket from './Components/Basket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/basket">
            <NavBar />
            <Basket />
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
