import React from 'react';
import './Account.css';

function Account () {
  return (
    <div className='accountContainer'>
      <h2 className='accountTitle'>Your account</h2>
      <div className='accountBox'>
        {/* Here I need to make four rows with three containers  */}
        <div className='accountRow'>
          {/* Need to create three cards in the row */}
          <div className='accountCard'>Your Orders
            {/* image */}
            {/* paragraph */}
            <p>Track, return, or buy things again</p>
          </div>
          <div className='accountCard'>Login & security
            <p>Edit login, name, and mobile number</p>
          </div>
          <div className='accountCard'>Prime
            <p>View benefits and payment settings</p>
          </div>
        </div>
        <div className='accountRow'>
          <div className='accountCard'>Gift cards
            <p>View balance, redeem, or reload cards</p>
          </div>
          <div className='accountCard'>Your Payments
            <p>Manage payment methods and settings, view all transactions</p>
          </div>
          <div className='accountCard'>Your Profiles
            <p>Manage, add, or remove user profiles for personalized experiences</p>
          </div>
        </div>
        <div className='accountRow'>
          <div className='accountCard'>Digital Services and Device Support
            <p>Troubleshoot device issues</p>
          </div>
          <div className='accountCard'>Your Messages
            <p>View messages to and from Amazon, sellers, and buyers</p>
          </div>
          <div className='accountCard'>Archived orders
            <p>View and manage archived orders</p>
          </div>
        </div>
        <div className='accountRow'>
          <div className='accountCard'>Your Lists
            <p>View, modify, and share your lists, or create new ones</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Account;

