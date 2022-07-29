import ReactDOM from "react-dom";
import "./Portal.css";
import correct from "../Components/Images/correct.png";

function MyPortal() {
  return ReactDOM.createPortal(
    <div className="myPortal">
      <div className="cart">
        <img src={correct} alt="added to cart" width="12" height="12" />
        <span>Added to Cart!</span>
      </div>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
