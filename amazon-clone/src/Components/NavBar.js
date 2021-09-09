import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function NavBar() {
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
          <input  type="text" className="SearchInput"/>
          <SearchIcon  className="SearchIcon"/>
        </div>

        {/* Div Container containing two links and the basket , STILL HAVE TO WRAP THESE INTO LINKS */}

        <div className="NavBarHeader">
          <div className="NavBarOption">
            <span className="NavBarOptionOne">Hello,</span>
            <span className="NavBarOptionTwo">Sign In</span>
          </div>

          <div className="NavBarOption">
            <span className="NavBarOptionOne">Returns</span>
            <span className="NavBarOptionTwo">& Orders</span>
          </div>

          {/* Basket and the number of items in the cart */}
          <div className="NavBarOptionBasket">
            <ShoppingBasketIcon />
            <span className="NavBarOptionTwo NavBarBasketCount">0</span>
          </div>

        </div>

    </nav>
  );

}

export default NavBar;