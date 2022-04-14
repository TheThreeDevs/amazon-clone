import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import OrdersPic from "./Images/Orders.png";
import SecurityPic from "./Images/Security.png";
import PrimePic from "./Images/Prime.png";
import GiftCardPic from "./Images/GiftCard.png";
import PaymentsPic from "./Images/Payments.png";
import ProfilesPic from "./Images/Profiles.png";
import DigitalPic from "./Images/Digital.png";
import MessagesPic from "./Images/Messages.jpg";
import ArchievedPic from "./Images/Archived.png";
import ListPic from "./Images/Lists.png";

function Account() {
  return (
    <div className="accountContainer">
      <div className="titleBox">
        <h2 className="accountTitle">Your Account</h2>
      </div>
      <div className="accountBox">
        {/* Here I need to make four rows with three containers  */}
        {/* Need to create three cards in the row */}
        <div className="accountCard">
          <img src={OrdersPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Your Orders </div>
            <div className="cardParagraph">
              Track, return, or buy things again
            </div>
          </div>
        </div>
        <Link to="/userInfo" className="loginSecurity">
          <div className="accountCard">
            <img src={SecurityPic} alt="orders" className="cardImg" />
            <div className="cardColumn">
              <div className="cardTitle"> Login & security </div>
              <div className="cardParagraph">
                Edit login, name, and mobile number
              </div>
            </div>
          </div>
        </Link>
        <div className="accountCard">
          <img src={PrimePic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Prime </div>
            <div className="cardParagraph">
              View benefits and payment settings
            </div>
          </div>
        </div>
        <div className="accountCard">
          <img src={GiftCardPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Gift cards </div>
            <div className="cardParagraph">
              View balance, redeem, or reload cards
            </div>
          </div>
        </div>
        <div className="accountCard">
          <img src={PaymentsPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Your Payments </div>
            <div className="cardParagraph">
              Manage payments methods and settings, view all transactions
            </div>
          </div>
        </div>
        <div className="accountCard">
          <img src={ProfilesPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Your Profiles </div>
            <div className="cardParagraph">
              Manage, add, or remove user profiles
            </div>
          </div>
        </div>
        <div className="accountCard">
          <img src={DigitalPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle">Digital Issues</div>
            <div className="cardParagraph">Troubleshoot device issues</div>
          </div>
        </div>
        <div className="accountCard">
          <img src={MessagesPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Your Messages </div>
            <div className="cardParagraph">
              View messages to and from Amazon, sellers, and buyers
            </div>
          </div>
        </div>
        <div className="accountCard">
          <img src={ArchievedPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Archived orders </div>
            <div className="cardParagraph">View and manage archived orders</div>
          </div>
        </div>
        <div className="accountCard">
          <img src={ListPic} alt="orders" className="cardImg" />
          <div className="cardColumn">
            <div className="cardTitle"> Your Lists </div>
            <div className="cardParagraph">
              View, modify, and share your lists, or create new ones
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
