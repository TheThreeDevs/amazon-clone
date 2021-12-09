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
          <Link to={{pathname: '/products', state: {category: `men's clothing`}}}>
            {/* image */}
            <div className='productsImg' />
            <div className='productsDiv'>Take a look</div>
          </Link>
        </div>
        <div className='productsCard'>
          <h2>Jewelery</h2>
          <Link to={{pathname: '/products', state: {category: 'jewelery'}}}>
            <div className='productsImgTwo'/>
            <div className='productsDiv'>Take a look</div>
          </Link>
        </div>
        <div className='productsCard'>
          <h2>Electronics</h2>
          <Link to={{pathname: '/products', state: {category: 'electronics'}}}>
            <div className='productsImgThree'/>
            <div className='productsDiv'>Take a look</div>
          </Link>
        </div>
        <div className='productsCard'>
          <h2>Women's Clothing</h2>
          <Link to={{pathname: '/products', state: {category: `women's clothing`}}}>
            <div className='productsImgFour'/>
            <div className='productsDiv'>Take a look</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductsHome;