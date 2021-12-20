import React from "react";
import "./BottomNavBar.css";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

function BottomNavBar(props) {
  return (
    <div className="mainDiv">
      <div className="leftNavBar">
      <FormatListBulletedIcon/>
        <span className="leftChild">All</span>
      </div>
      <div className="middle">
        <a href="https://www.amazon.com" className="link">
          Customer Service
        </a>
        <a href="https://www.amazon.com" className="link">
          Prime
        </a>
        <a href="https://www.amazon.com" className="link">
          Shopper Toolkit
        </a>
        <a href="https://www.amazon.com" className="link">
          Gift Cards
        </a>
        <a href="https://www.amazon.com" className="link">
          Sports & Fitness
        </a>
        <a href="https://www.amazon.com" className="link">
          Coupons
        </a>
      </div>
      <div className="rightNavBar">
        <span className="rightChild">Shop Holiday Gifts Now</span>
      </div>
    </div>
  );
}

export default BottomNavBar;
