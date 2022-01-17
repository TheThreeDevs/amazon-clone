import React from "react";
import "./BottomNavBar.css";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

function BottomNavBar(props) {
  return (
    <div className="d-flex column mainDiv">
      <div className="leftNavBar">
      <FormatListBulletedIcon/>
        <span className="leftChild">All</span>
      </div>
      <div className="middle">
        <a href="/" className="link">
          Customer Service
        </a>
        <a href="/" className="link">
          Prime
        </a>
        <a href="/" className="link">
          Shopper Toolkit
        </a>
        <a href="/" className="link">
          Gift Cards
        </a>
        <a href="/" className="link">
          Sports & Fitness
        </a>
        <a href="/" className="link">
          Coupons
        </a>
      </div>
      <div className="rightNavBar">
        <span className="rightChild">Shop Holiday Gifts</span>
      </div>
    </div>
  );
}

export default BottomNavBar;
