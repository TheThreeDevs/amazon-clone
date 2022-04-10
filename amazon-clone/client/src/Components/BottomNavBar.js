import React, { useState, useEffect, Fragment } from "react";
import "./BottomNavBar.css";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

function BottomNavBar(props) {
  //inner width property i guess gives you viewport size
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    console.log("New width: ", width);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mainDiv">
      <div className="leftNavBar">
        <FormatListBulletedIcon />
        <span className="leftChild">All</span>
      </div>
      <div className="middle">
        <a href="/" className="link">
          Customer Service
        </a>
        <a href="/" className="link">
          Prime
        </a>
        {width > breakpoint ? (
          <Fragment>
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
          </Fragment>
        ) : null}
      </div>
      <div className="rightNavBar">
        {width > breakpoint ? (
          <span className="rightChild">Shop Holiday Gifts</span>
        ) : (
          <span className="rightChild">Shop</span>
        )}
      </div>
    </div>
  );
}

export default BottomNavBar;
