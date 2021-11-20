import './ProductsList.css';
import { useLocation } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import NavBar from './NavBar';
// import {useState} from 'react';

function ProductsList ({data, getProductInfo}) {

  //to get the state from the Link
  const location = useLocation();
  const {category} = location.state;

  //here is the products for the specific category
  // const [products, setProducts] = useState([]);

  var products = data.filter(product => product.category === category);
  console.log(products);

  return (
    <div>
      <NavBar />
      <div className='productsList'>
        <h1 className='productsHeader'> {category} </h1>
        {products.map((product, i) => {
          return <SingleProduct  key={i} image={product.image} title={product.title} rating={product.rating} price={product.price} description={product.description} getProductInfo={getProductInfo}/>
        })}

      </div>

    </div>
  )
}

export default ProductsList;

//when they click on the product image on the home screen, that should add a state
  //here then we can filter the API product array, from what category they have chosen
    //Then we will display the information with the title, image, description and price

    //function to filter the array

    // function filterInfo (arr, cat) {
    //   return arr.filter(item => item.category === cat);
    // }


    // var array =
    // [{
    //   id: 1,
    //   title: 'one',
    //   price: '2.99',
    //   category: 'horror',
    //   description: 'this is one of the best films',
    //   image: 'pic1'
    // },
    // {
    //   id: 2,
    //   title: 'two',
    //   price: '5.99',
    //   category: 'comedy',
    //   description: 'this is a very funny movie',
    //   image: 'pic2'
    // }
    // ];

    // var category = 'comedy';

    // console.log(filterInfo(array, category));