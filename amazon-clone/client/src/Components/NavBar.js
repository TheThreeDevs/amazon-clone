import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";
import { useAuth } from "../contexts/AuthContext";

function NavBar({ productAmount }) {
  const { currentUser, signOut } = useAuth();
  //If logged in, Nav Bar will have an extra button that says
  //Hello, "name" Account & lists etc
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h6">Your Account</Popover.Title>
      <Popover.Content>
        <ListGroup variant="flush">
          <ListGroup.Item>Account</ListGroup.Item>
          <ListGroup.Item>Orders</ListGroup.Item>
          <ListGroup.Item>Recommendations</ListGroup.Item>
          <ListGroup.Item>Prime Membership</ListGroup.Item>
          <ListGroup.Item>Start a Selling Account</ListGroup.Item>
          <ListGroup.Item>Register for a Business Account</ListGroup.Item>
          <ListGroup.Item onClick={() => signOut()}>Log Out</ListGroup.Item>
        </ListGroup>
      </Popover.Content>
    </Popover>
  );

  const defineUserExperience = () => {
    if (currentUser) {
      return (
        <OverlayTrigger placement="bottom" overlay={popover} trigger="click">
          {currentUser.displayName ? (
            <div className="NavBarOption">
              <span className="NavBarOptionOne">Hello,</span>
              <span className="NavBarOptionTwo">{currentUser.displayName}</span>
            </div>
          ) : (
            <div className="NavBarOption">
              <span className="NavBarOptionOne">Hello,</span>
              <span className="NavBarOptionTwo">New User!</span>
            </div>
          )}
        </OverlayTrigger>
      );
    } else {
      return (
        <Link to="/login" className="NavBarLink">
          <OverlayTrigger placement="bottom" overlay={popover} trigger="click">
            <div className="NavBarOption">
              <span className="NavBarOptionOne">Hello,</span>
              <span className="NavBarOptionTwo">Sign In</span>
            </div>
          </OverlayTrigger>
        </Link>
      );
    }
  };

  return (
    <nav className="NavBar">
      {/* Logo to the left */}
      <Link to="/">
        <img
          className="NavBar_Logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* Search Bar and button */}
      <div className="NavBarSearch">
        <input type="text" className="SearchInput" />
        <SearchIcon className="SearchIcon" />
      </div>

      {/* Div Container containing two links and the basket , STILL HAVE TO WRAP THESE INTO LINKS */}
      <div className="NavBarHeader">
        {defineUserExperience()}

        <div className="NavBarOption">
          <span className="NavBarOptionOne">Returns</span>
          <span className="NavBarOptionTwo">& Orders</span>
        </div>

        {/* Basket and the number of items in the cart */}
        <Link to="/basket" className="NavBarLink">
          <div className="NavBarOptionBasket">
            <ShoppingBasketIcon />
            <span className="NavBarOptionTwo NavBarBasketCount">
              {productAmount}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
