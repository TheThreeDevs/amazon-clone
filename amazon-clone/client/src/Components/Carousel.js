import "./Carousel.css";
import React, { useState, useEffect } from "react";
import FirstImg from "./Images/amazonImg.jpg";
import SecondImg from "./Images/amazonImg2.jpg";
import ThirdImg from "./Images/amazonImg3.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  var images = [FirstImg, SecondImg, ThirdImg];
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currImg < 2) {
        setCurrImg(currImg + 1);
      } else {
        setCurrImg(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currImg]);

  const next = () => {
    if (currImg !== 2) {
      setCurrImg(currImg + 1);
    } else {
      setCurrImg(0);
    }
  };
  const prev = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    } else {
      setCurrImg(2);
    }
  };

  return (
    <div className="carouselOuter">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg]})` }}
      >
        <div className="left">
          {" "}
          <ArrowBackIosIcon className="carouselArrow" onClick={prev} />{" "}
        </div>
        <div className="center"></div>
        <div className="right">
          {" "}
          <ArrowForwardIosIcon className="carouselArrow" onClick={next} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
