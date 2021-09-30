import './ProductsHome.css';

function ProductsHome () {
  return (
    <div className='productsHome'>
      <div className='productsContainer'>
        <div className='productsCard'>
          {/* title */}
          <h2>Men's Clothing</h2>
          {/* image */}
          <div className='productsImg' />
          {/* link to see products */}
          <a href='amazon.com'>Take a look</a>
        </div>
        <div className='productsCard'>
          <h2>Jewelry</h2>
          <div className='productsImgTwo'/>
          <a href='amazon.com'>Take a look</a>
        </div>
        <div className='productsCard'>
          <h2>Electronics</h2>
          <div className='productsImgThree'/>
          <a href='amazon.com'>Shop now</a>
        </div>
        <div className='productsCard'>
          <h2>Women's Clothing</h2>
          <div className='productsImgFour'/>
          <a href='amazon.com'>Shop now</a>
        </div>
      </div>
    </div>
  )
}

export default ProductsHome;