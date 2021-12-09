import React, { useState, useEffect } from "react";
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

function App() {
  let [data, setData] = useState("");
  let [basket, setBasket] = useState([]);
  let [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    getInfo();
  }, []); //mandatory array so its called only once!!

  function getInfo() {
    if (!data) {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // this.setState({ data: res.data });
        setData(res.data);
        console.log("The data:", res.data);
      })
      .catch((err) => {
        console.log("This is the error that occurred", err);
      });
    }
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
  function getProductInfo(product) {
    setBasket([...basket, product]);
    subtotalSum();
  }

  //fumction to remove the items from the shopping cart
  function removeProduct(productTitle) {
    var array = basket;
    let index = array.findIndex((i) => i.title === productTitle);
    if (index > -1) {
      array.splice(index, 1);
      setBasket(array);
      subtotalSum();
    }
  }

  //function to get the subtotal of the basket items
  //figure out when to call this function and also make it work in the basket and also will be used basketSubtotal.js

  function subtotalSum() {
    var subtotal = 0;
    for (var i = 0; i < basket.length; i++) {
      subtotal += basket[i].price;
    }
    setSubtotal(subtotal);
    return subtotal;
  }

  //A logged in user component: <PrivateRoute exact path="/" component={Dashboard}/>
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/basket">
              <NavBar productAmount={basket.length} />
              <Basket
                productAmount={basket.length}
                basket={basket}
                subtotal={subtotal}
                removeProduct={removeProduct}
              />
            </Route>
            <Route path="/products">
              <NavBar productAmount={basket.length} />
              <ProductsList data={data} getProductInfo={getProductInfo} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/">
              <NavBar productAmount={basket.length} />
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

export default App;
