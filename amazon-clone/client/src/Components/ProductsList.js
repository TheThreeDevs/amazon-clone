import "./ProductsList.css";
import { useLocation, useHistory } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useAuth } from "../contexts/AuthContext";
import { useRef, useEffect } from "react";

function ProductsList({ data, getProductInfo }) {
  //to get the state from the Link
  const history = useHistory();
  const location = useLocation();
  const { addToCart, showCart } = useAuth();
  const cartRef = useRef();

  useEffect(() => {
    //do something every time addToCart is toggled!!
    cartRef.current = showCart;
    console.log("show cart changed");
  }, [showCart]);

  if (!location.state) {
    history.replace("/");
    return (
      <div className="productsListWaiter">
        <div className="spinner">
          <div></div>
          <div></div>
          <span>Loading..</span>
        </div>
      </div>
    );
  }
  const { category } = location.state;
  // const [width, setWidth] =  useState();
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);
  function handleAddProduct() {
    console.log("Adding to product...");
    addToCart(true);
    setTimeout(() => {
      addToCart(false);
    }, 1000);
  }
  //here is the products for the specific category
  // const [products, setProducts] = useState([]);
  if (!data) {
    return (
      <div className="productsListWaiter">
        <div className="spinner">
          <div></div>
          <div></div>
          <span>Loading..</span>
        </div>
      </div>
    );
  }
  let products = data.filter((product) => product.category === category);

  return (
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
            handleAddProduct={handleAddProduct}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;
