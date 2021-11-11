import './SingleProduct.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function SingleProduct ({image, title, rating, price, description, getProductInfo}) {
  return (
    <div className='singleContainer'>
      {/* title */}
      <h4 className='containerTitle'>{title}</h4>
      {/* image */}
      <div className='containsImgDes'>
        <div className='containerImage'>
          <img src={image} alt='product' className='productImage'/>
        </div>
        <div className='containerDescription'>{description}</div>
      </div>
      {/* rating */}
      {/* <div className='containerRating'>{rating.rate}</div> */}
      <div className='containerRating'>
        <Stack spacing={1}>
          <Rating defaultValue={rating.rate} precision={0.5} readOnly />
        </Stack>
      </div>
      {/* price */}
      <div className='containerPrice'> Price: ${price}</div>
      <div className='containerButtons'>
        {/* Add a onClick event to this button to send back the product info to App.js */}
        {/* Get all the product information we need and put it inside an object */}
        <button className='containerButtonOne' onClick={() => {getProductInfo(title)}}>Add to Cart</button>
        <button className='containerButtonTwo'>Buy Now</button>
       </div>

    </div>
  )

}

export default SingleProduct;
