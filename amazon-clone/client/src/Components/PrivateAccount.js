import NavBar from './NavBar';
import Account from './Account';
import DeleteAccount from "../Components/DeleteAccount";
import BottomNavBar from './BottomNavBar';

function PrivateAccount({productAmount, deleteAccount}) {
  return (
    <>
    <NavBar productAmount={productAmount}/>
    <BottomNavBar/>
    {deleteAccount? <DeleteAccount/> : <Account/>}
    </>
  );
}

export default PrivateAccount;