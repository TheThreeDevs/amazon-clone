import "./ProductsList.css";
import { useLocation, useHistory } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function ProductsList({ data, getProductInfo }) {
  //to get the state from the Link
  const history = useHistory();
  const location = useLocation();
  if (!location.state) {
    history.replace("/");
    return <div><h2>Loading...</h2></div>;
  }
  const { category } = location.state;
  // const [width, setWidth] =  useState();
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  //here is the products for the specific category
  // const [products, setProducts] = useState([]);
  if (!data) {
    return null;
  }

  let products = data.filter((product) => product.category === category);

  return (
    <div>
      <div className="productsList">
        <h1 className="productsHeader"> {category.toUpperCase()} </h1>
        {products.map((product, i) => {
          return (
            <SingleProduct
              key={i}
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
              description={product.description}
              getProductInfo={getProductInfo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
