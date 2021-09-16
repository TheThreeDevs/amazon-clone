import './Carousel.css';
import React, { useState } from 'react';
import FirstImg from './amazonImg.jpg';
import SecondImg from './amazonImg2.jpg';
import ThirdImg from './amazonImg3.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Carousel () {

  var images = [FirstImg, SecondImg, ThirdImg];

  const [currImg, setCurrImg] = useState(0);

  //have setCurrImg set to an interval where it increases the position
  setInterval(() => {
    if(currImg < 2) {
      setCurrImg(currImg + 1);
    } else {
      setCurrImg(0)
    }
  }, 40000);

  return (
    <div className='carousel'>
      <div className='carouselInner' style={{backgroundImage: `url(${images[currImg]})`}}>
        <div className='left'> <ArrowBackIosIcon className='carouselArrow' onClick={() => {currImg > 0 && setCurrImg(currImg - 1)}}/> </div>
        <div className='center'></div>
        <div className='right'> <ArrowForwardIosIcon className='carouselArrow' onClick={() => {currImg < images.length - 1 &&  setCurrImg(currImg + 1)}}/> </div>
      </div>
    </div>
  )
};

export default Carousel;