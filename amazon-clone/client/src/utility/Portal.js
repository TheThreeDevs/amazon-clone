import ReactDOM from "react-dom";
import "./Portal.css";

function MyPortal() {
  
  return ReactDOM.createPortal(
    <div className="myPortal">
      <div className="cart">
        <span>Adding to Cart!</span>
      </div>
    </div>,
    document.getElementById("myPortal")
  );
}

export default MyPortal;
