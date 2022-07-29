import ReactDOM from "react-dom";
import "./Portal.css";
import correct from "../Components/Images/correct.png";

function MyPortal() {
  return ReactDOM.createPortal(
    <div className="myPortal">
      <div className="cart">
      <span>Added to Cart!</span>
      <img src={correct} alt="added to cart" width="18" height="18" />
      </div>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
