import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import BottomCarousel from "./Components/BottomCarousel";
import ProductsList from "./Components/ProductsList";
import ProductsHome from "./Components/ProductsHome";
import ForgotPassword from "./Components/ForgotPassword";
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
      basket: [],
      subtotal: 0
    };
    this.getInfo = this.getInfo.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.subtotalSum = this.subtotalSum.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // this.setState({ data: res.data });
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
    this.setState({basket: [...this.state.basket , product]}, () => {
      this.subtotalSum();
    });
  }

  //fumction to remove the items from the shopping cart
  removeProduct (productTitle) {
    var array  = this.state.basket;
    let index = array.findIndex(i => i.title === productTitle);

    if (index > -1) {
      array.splice(index, 1);
      this.setState({basket: array}, () => {
        this.subtotalSum();
      });
    }
  };

  //function to get the subtotal of the basket items
  //figure out when to call this function and also make it work in the basket and also will be used basketSubtotal.js

  subtotalSum () {
    var subtotal = 0;
    for (var i = 0; i < this.state.basket.length; i++) {
      subtotal += this.state.basket[i].price;
    }

    this.setState({subtotal: subtotal});
    return subtotal;
  };

  //A logged in user component: <PrivateRoute exact path="/" component={Dashboard}/>
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
                <NavBar productAmount={this.state.basket.length}/>
                <Basket productAmount={this.state.basket.length} basket={this.state.basket} subtotal={this.state.subtotal} removeProduct={this.removeProduct}/>
              </Route>
              <Route  path="/products">
                <NavBar productAmount={this.state.basket.length}/>
                <ProductsList data={this.state.data} getProductInfo={this.getProductInfo}/>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/">
                <NavBar productAmount={this.state.basket.length}/>
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
