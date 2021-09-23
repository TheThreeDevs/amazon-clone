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
          Jewelry
        </div>
        <div className='productsCard'>
          Electronics
        </div>
      </div>
    </div>
  )
}

export default ProductsHome;