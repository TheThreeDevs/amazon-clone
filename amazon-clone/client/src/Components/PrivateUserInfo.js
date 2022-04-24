import React from 'react';
import NavBar from './NavBar';
import UserInfoChange from './UserInfoChange';
import BottomNavBar from './BottomNavBar';

function PrivateUserInfo({productAmount}) {
  return (
    <React.Fragment>
      <NavBar productAmount={productAmount}/>
      <BottomNavBar/>
      <UserInfoChange/>
    </React.Fragment>
  );
}

export default PrivateUserInfo;