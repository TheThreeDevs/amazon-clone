import "./App.css";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Basket from "./Components/Basket";
import Carousel from "./Components/Carousel";
import ProductsHome from "./Components/ProductsHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import SignUp from "./Components/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.data);
      })
      .catch((err) => {
        console.log("This is the error that occurred", err);
      });
    axios
      .get("/home")
      .then((res) => {
        console.log("Front end + back end", res.data);
      })
      .catch((err) => {
        console.log("Found this error: ", err);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
<<<<<<< HEAD
          <AuthProvider>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/basket">
                <NavBar />
                <Basket />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/">
                <NavBar />
                <Carousel />
                <ProductsHome />
              </Route>
            </Switch>
          </AuthProvider>
=======
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
              <Carousel />
              <ProductsHome />
              <BottomCarousel />
            </Route>
          </Switch>
>>>>>>> master
        </div>
      </Router>
    );
  }
}

export default App;
