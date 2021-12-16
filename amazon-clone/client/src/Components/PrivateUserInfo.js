import React from 'react';
import NavBar from './NavBar';
import UserInfoChange from './UserInfoChange';
import BottomNavBar from './BottomNavBar';

function PrivateUserInfo({productAmount}) {
  return (
    <>
      <NavBar productAmount={productAmount}/>
      <BottomNavBar/>
      <UserInfoChange/>
    </>
  );
}

export default PrivateUserInfo;