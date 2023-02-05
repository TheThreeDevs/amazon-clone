import MyPortal from "./Portal";
import { useAuth } from "../contexts/AuthContext";

function Wrapper({ children }) {
  const { showCart } = useAuth();

  return (
    <div>
      {showCart && <MyPortal />}
      {children}
    </div>
  );
}

export default Wrapper;
