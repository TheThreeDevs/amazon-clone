import "./SingleProduct.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function SingleProduct({
  image,
  title,
  rating,
  price,
  description,
  getProductInfo,
  width
}) {
  // const breakpoint = 480;
  // if (width < breakpoint) {
  //   console.log("I am phone width.");
  // } else {
  //   console.log("Computer width");
  // }
  return (
    <div className="singleContainer">
      {/* title */}
      <h4 className="containerTitle">{title}</h4>
      {/* image */}
      <div className="containsImgDes">
        <div className="containerImage">
          <img src={image} alt="product" className="productImage" />
        </div>
        <div className="containerDescription">
        <p>{description.length > 500
          ? `${description.substring(0, 450)}...`
          : description}</p>
        </div>
      </div>
      {/* rating */}
      {/* <div className='containerRating'>{rating.rate}</div> */}
      <div className="pricerating">
      <div className="containerRating">
      <Stack spacing={1}>
      <Rating value={rating.rate} precision={0.5} readOnly />
      </Stack>
      </div>
      {/* price */}
      <div className="containerPrice"> Price: ${price}</div>
      </div>
      <div className="containerButtons">
        {/* Add a onClick event to this button to send back the product info to App.js */}
        {/* Get all the product information we need and put it inside an object */}
        <button
          className="containerButtonOne"
          onClick={() => {
            getProductInfo({ title: title, image: image, price: price });
          }}
        >
          Add to Cart
        </button>
        <Link to="/basket">
          <button
            className="containerButtonTwo"
            onClick={() => {
              getProductInfo({ title: title, image: image, price: price });
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SingleProduct;
