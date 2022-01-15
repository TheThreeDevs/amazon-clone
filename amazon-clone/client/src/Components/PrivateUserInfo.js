import React from 'react';
import NavBar from './NavBar';
import UserInfoChange from './UserInfoChange';
import BottomNavBar from './BottomNavBar';

function PrivateUserInfo({productAmount}) {
  return (
    <div>
      <NavBar productAmount={productAmount}/>
      <BottomNavBar/>
      <UserInfoChange/>
    </div>
  );
}

export default PrivateUserInfo;