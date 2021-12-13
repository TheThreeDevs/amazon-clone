import React from 'react';
import './Account.css';
import OrdersPic from './Images/Orders.png';
import SecurityPic from './Images/Security.png';
import PrimePic from './Images/Prime.png';
import GiftCardPic from './Images/GiftCard.png';
import PaymentsPic from './Images/Payments.png';
import ProfilesPic from './Images/Profiles.png';
import DigitalPic from './Images/Digital.png';
import MessagesPic from './Images/Messages.jpg';
import ArchievedPic from './Images/Archived.png';
import ListPic from './Images/Lists.png';

function Account () {
  return (
    <div className='accountContainer'>
      <h2 className='accountTitle'>Your account</h2>
      <div className='accountBox'>
        {/* Here I need to make four rows with three containers  */}
        <div className='accountRow'>
          {/* Need to create three cards in the row */}
          <div className='accountCard'>
              <img src={OrdersPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={SecurityPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={PrimePic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
        </div>
        <div className='accountRow'>
        <div className='accountCard'>
              <img src={GiftCardPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={PaymentsPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={ProfilesPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
        </div>
        <div className='accountRow'>
        <div className='accountCard'>
              <img src={DigitalPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={MessagesPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
          <div className='accountCard'>
              <img src={ArchievedPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
        </div>
        <div className='accountRow'>
        <div className='accountCard'>
              <img src={ListPic} alt='orders' className='cardImg'/>
            <div className='cardColumn'>
              <div className='cardTitle'> Your Orders </div>
              <div className='cardParagraph'>Track, return, or buy things again</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Account;

