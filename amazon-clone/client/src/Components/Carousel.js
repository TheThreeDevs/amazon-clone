import './Carousel.css';
import React, { useState, useEffect } from 'react';
import FirstImg from './Images/amazonImg.jpg';
import SecondImg from './Images/amazonImg2.jpg';
import ThirdImg from './Images/amazonImg3.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Carousel () {

  var images = [FirstImg, SecondImg, ThirdImg];
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(currImg < 2) {
        setCurrImg(currImg + 1);
      } else {
        setCurrImg(0)
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currImg]);

  return (
    <div className='d-flex carousel'>
      <div className='d-flex carouselInner' style={{backgroundImage: `url(${images[currImg]})`}}>
        <div className='left'> <ArrowBackIosIcon className='carouselArrow' onClick={() => {currImg > 0 && setCurrImg(currImg - 1)}}/> </div>
        <div className='center'></div>
        <div className='right'> <ArrowForwardIosIcon className='carouselArrow' onClick={() => {currImg < images.length - 1 &&  setCurrImg(currImg + 1)}}/> </div>
      </div>
    </div>
  )
};

export default Carousel;