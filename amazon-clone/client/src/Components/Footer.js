import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  //logo, english, united states
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerDiv">
          <Link to="/">
            <img
              className="footerLogo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
          <div>English</div>
          <div>United States</div>
        </div>
      </div>
      <div className="footerTerms">
        <div className="footerTermsDiv">
          <h5>Terms and Conditions</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
