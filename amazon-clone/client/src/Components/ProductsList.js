import './ProductsHome.css';
import { useLocation } from 'react-router-dom';

function ProductsList () {

  const location = useLocation();
  const {category} = location.state;

  console.log(category, 'this is the cat');


  return (
    <h1>These are the products that we have for sale</h1>
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