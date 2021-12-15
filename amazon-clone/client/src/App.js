import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import BottomCarousel from "./Components/BottomCarousel";
import ProductsList from "./Components/ProductsList";
import ProductsHome from "./Components/ProductsHome";
import ForgotPassword from "./Components/ForgotPassword";
import Searched from "./Components/Searched";
import NavBar from "./Components/NavBar";
import Account from './Components/Account';
import Login from "./Components/Login";
import Basket from "./Components/Basket";
import Carousel from "./Components/Carousel";
import SignUp from "./Components/SignUp";
import UserInfoChange from './Components/UserInfoChange';
import { database } from "./firebase";
import axios from "axios";

class App extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: "",
      basket: [],
      subtotal: 0,
    };
    this.getInfo = this.getInfo.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.subtotalSum = this.subtotalSum.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
  }

  componentDidMount() {
    this.getInfo();
    if (this.context.currentUser) {
      console.log("Setting user");
      this.setLocalState();
    }
  }

  getInfo() {
    if (!this.state.data) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          this.setState({ data: res.data });
          console.log("Recieving products data..");
        })
        .catch((err) => {
          console.log("This is the error that occurred", err);
        });
      axios
        .get("/home")
        .then((res) => {
          console.log("Backend live", res.data);
        })
        .catch((err) => {
          console.log("Found this error: ", err);
        });
    }
  }

  //function to get the product's info from SingleProduct.js
  getProductInfo(product) {
    this.setState({ basket: [...this.state.basket, product] }, () => {
      let basket = this.state.basket;
      let total = this.subtotalSum(basket);
      if (this.context.currentUser) {
        this.updateDatabase(basket, total);
      }
    });
  }

  //fumction to remove the items from the shopping cart
  removeProduct(productTitle) {
    var array = this.state.basket;
    let index = array.findIndex((i) => i.title === productTitle);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({ basket: array }, () => {
        let basket = this.state.basket;
        let total = this.subtotalSum(basket);
        if (this.context.currentUser) {
          this.updateDatabase(basket, total);
        }
      });
    }
  }

  //function to get the subtotal of the basket items
  //figure out when to call this function and also make it work in the basket and also will be used basketSubtotal.js

  subtotalSum(basket) {
    var subtotal = 0;
    for (var i = 0; i < basket.length; i++) {
      subtotal += basket[i].price;
    }
    this.setState({ subtotal: subtotal });
    return subtotal;
  }

  async setLocalState() {
    try {
      const db = database.collection("users").doc(this.context.currentUser.uid);
      const doc = await db.get();
      if (doc) {
        let {basket, subtotal, name} = doc.data();
        this.setState({basket, subtotal, name});
      }
    } catch (err) {
      console.log("Err", JSON.stringify(err));
    }
  }

  async updateDatabase(basket, total) {
    try {
      let db = database.collection("users").doc(this.context.currentUser.uid);
      await db.update({ basket: basket, subtotal: total });
    } catch (err) {
      console.log("Err updating db...", JSON.stringify(err));
    }
  }

  //A logged in user component: <PrivateRoute exact path="/" component={Dashboard}/>
  render() {
    const { data, basket, subtotal } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login setLocalState={this.setLocalState}/>
            </Route>
            <Route path="/basket">
              <NavBar productAmount={basket.length} />
              <Basket
                productAmount={basket.length}
                basket={basket}
                subtotal={subtotal}
                removeProduct={this.removeProduct}
              />
            </Route>
            <Route path="/products">
              <NavBar productAmount={basket.length} />
              <ProductsList
                data={data}
                getProductInfo={this.getProductInfo}
              />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/search/:search">
              <NavBar productAmount={basket.length}/>
              <Searched data={data} getProductInfo={this.getProductInfo}/>
            </Route>
            <Route path='/account'>
              <NavBar productAmount={basket.length}/>
              <Account />
            </Route>
            <Route path='/userInfo'>
              <NavBar productAmount={basket.length} />
              <UserInfoChange />
            </Route>
            <Route path="/">
              <NavBar productAmount={basket.length} />
              <Carousel />
              <ProductsHome />
              <BottomCarousel />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;