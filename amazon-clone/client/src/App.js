import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomCarousel from './Components/BottomCarousel';
import ProductsList from './Components/ProductsList';
import ProductsHome from "./Components/ProductsHome";
import ForgotPassword from "./Components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Basket from "./Components/Basket";
import Carousel from "./Components/Carousel";
import SignUp from "./Components/SignUp";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      basket: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
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

  //function to get the product's info from SingleProduct.js
  getProductInfo(product) {
    this.setState({basket: [...this.state.basket , product]});
  }



  render() {
    return (
      <Router>
        <div className="App">
          <AuthProvider>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/basket">
                <NavBar />
                <Basket />
              </Route>
              <Route  path="/products">
                <ProductsList data={this.state.data} getProductInfo={this.getProductInfo}/>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/">
                <NavBar />
                <Carousel />
                <ProductsHome />
                <BottomCarousel />
              </Route>
            </Switch>
          </AuthProvider>

        </div>
      </Router>
    );
  }
}

export default App;
