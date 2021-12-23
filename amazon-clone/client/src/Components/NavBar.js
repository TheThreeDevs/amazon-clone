import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";
import { useAuth } from "../contexts/AuthContext";

function NavBar({ productAmount }) {
  const { currentUser, signOut } = useAuth();
  const [search, setSearch] = useState("");
  const history = useHistory();
  //If logged in, Nav Bar will have an extra button that says
  //Hello, "name" Account & lists etc
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h6" style={{backgroundColor: "white"}}>Your Account</Popover.Title>
      <Popover.Content>
        <ListGroup variant="flush" style={{ textDecoration: 'none'}}>
          <Link to='/account' className='NavBarAccount'>
            <ListGroup.Item action>Account</ListGroup.Item>
          </Link>
          <ListGroup.Item action>Orders</ListGroup.Item>
          <ListGroup.Item action>Recommendations</ListGroup.Item>
          <ListGroup.Item action>Prime Membership</ListGroup.Item>
          <ListGroup.Item action>Start a Selling Account</ListGroup.Item>
          <ListGroup.Item action>Register for a Business Account</ListGroup.Item>
          <ListGroup.Item action onClick={() => signOut()}>Sign Out</ListGroup.Item>
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

  function handleSearch(e) {
    e.preventDefault();
    history.push(`/search/${search}`);
  }

  return (
    <nav className="NavBar">
      {/* Logo to the left */}
      <Link to="/" onClick={() => setSearch("")}>
        <img
          className="NavBar_Logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* Search Bar and button */}
      <div className="NavBarSearch">
        <form className="NavBarSearch" onSubmit={handleSearch}>
        <input type="text" className="SearchInput" value={search} onChange={e => setSearch(e.target.value)}/>
        <SearchIcon className="SearchIcon ml-2" onClick={handleSearch}/>
        </form>
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
