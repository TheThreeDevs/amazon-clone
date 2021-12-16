import React from 'react';
import NavBar from './NavBar';
import Account from './Account';
import BottomNavBar from './BottomNavBar';

function PrivateAccount({productAmount}) {
  return (
    <>
    <NavBar productAmount={productAmount}/>
    <BottomNavBar/>
    <Account />
    </>
  );
}

export default PrivateAccount;