import './ProductsHome.css';
import { Link } from 'react-router-dom';

function ProductsHome () {
    //when they click on the tags it should change the state to send them to productsList with the correct products
  return (
    <div className='productsHome'>
      <div className='productsContainer'>
        <div className='productsCard'>
          {/* title */}
          <h2>Men's Clothing</h2>
          {/* image */}
          <div className='productsImg' />
          {/* link to see products */}
          {/* <Link to="/products" state={{message: 'this is the message that was passed'}}>Take a look</Link> */}
          <Link to={{pathname: '/products', state: {category: 'mens clothing'}}}>Take a look</Link>
        </div>
        <div className='productsCard'>
          <h2>Jewelry</h2>
          <div className='productsImgTwo'/>
          <Link to={{pathname: '/products', state: {category: 'jewelry'}}}>Take a look</Link>
        </div>
        <div className='productsCard'>
          <h2>Electronics</h2>
          <div className='productsImgThree'/>
          <Link to={{pathname: '/products', state: {category: 'electronics'}}}>Take a look</Link>
        </div>
        <div className='productsCard'>
          <h2>Women's Clothing</h2>
          <div className='productsImgFour'/>
          <Link to={{pathname: '/products', state: {category: 'womens clothing'}}}>Take a look</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsHome;