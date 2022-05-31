import './ProductsList.css';
import SingleProduct from './SingleProduct';

function ProductsResult({search, filtered, getProductInfo}) {
  return (
    <div>
      <div className='productsList'>
        <h1 className='productsHeader'>{`${filtered.length} search results for: ${search}`}</h1>
        {filtered.map((product, i) => {
          return <SingleProduct  key={i} image={product.image} title={product.title} rating={product.rating} price={product.price} description={product.description} getProductInfo={getProductInfo}/>
        })}

      </div>

    </div>
  )
}

export default ProductsResult;