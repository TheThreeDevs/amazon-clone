import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Basket from './Components/Basket';
import Carousel from './Components/Carousel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        this.setState({data: res.data})
        console.log(this.data);
      })
      .catch(err => {
        console.log('This is the error that occurred', err)
      })
  }

  render() {
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
              <Carousel />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
