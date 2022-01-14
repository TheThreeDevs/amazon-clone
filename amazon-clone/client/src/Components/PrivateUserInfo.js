import React from 'react';
import NavBar from './NavBar';
import UserInfoChange from './UserInfoChange';
import BottomNavBar from './BottomNavBar';

function PrivateUserInfo({productAmount}) {
  console.log("props in private user info", productAmount);
  return (
    <>
      <NavBar productAmount={"f"}/>
      <BottomNavBar/>
      <UserInfoChange/>
    </>
  );
}

export default PrivateUserInfo;