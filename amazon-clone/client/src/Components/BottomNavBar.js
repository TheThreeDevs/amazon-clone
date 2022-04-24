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
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mainDiv">
      <div className="leftNavBar">
        <FormatListBulletedIcon />
        <span className="leftChild">All</span>
      </div>
      <div className="middle">
        <span className="link">
          Customer Service
        </span>
        <span className="link">
          Prime
        </span>
        {width > breakpoint ? (
          <Fragment>
            <span  className="link">
              Shopper Toolkit
            </span>
            <span  className="link">
              Gift Cards
            </span>
            <span  className="link">
              Sports & Fitness
            </span>
            <span  className="link">
              Coupons
            </span>
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
