import React, { useState } from "react";
import "./BottomCarousel.css";
import Halloween from "./Images/Halloween.jpg";
import HolidayPrep from "./Images/HolidayPrep.jpg";
import HolidayToyList from "./Images/HolidayToyList.jpg";
import ElectronicGifts from "./Images/ElectronicGifts.jpg";
import FashionGifts from "./Images/FashionGifts.jpg";
import BeautyGifts from "./Images/BeautyGifts.jpg";
import HomeGifts from "./Images/HomeGifts.jpg";
import Grocery from "./Images/GroceryDelivery.jpg";
import AllGifts from "./Images/AllGifts.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function BottomCarousel() {
  const [option, setOption] = useState(true);

  //conditional rendering for the carousel
  if (option) {
    var products = (
      <div className="center">
        <div className="center_container">
          <img src={Halloween} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img src={HolidayPrep} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img src={HolidayToyList} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img
            src={ElectronicGifts}
            alt="computer"
            className="carousel_image"
          />
        </div>
        <div className="center_container">
          <img src={FashionGifts} alt="computer" className="carousel_image" />
        </div>
      </div>
    );
  } else {
    products = (
      <div className="center">
        <div className="center_container">
          <img src={BeautyGifts} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img src={HomeGifts} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img src={Grocery} alt="computer" className="carousel_image" />
        </div>
        <div className="center_container">
          <img src={AllGifts} alt="computer" className="carousel_image" />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {products}
      <div className="container_inner">
        {/* {for the left arrow} */}
        <div className="left">
          <button disabled={option}>
            <ArrowBackIosIcon onClick={() => setOption(true)} />
          </button>
        </div>
        {/* for the images of the carousel */}
        {/* for the right arrow */}
        <div className="right">
          <button disabled={!option}>
            <ArrowForwardIosIcon onClick={() => setOption(false)} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomCarousel;
