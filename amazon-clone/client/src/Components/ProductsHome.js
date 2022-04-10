import "./ProductsHome.css";
import { Link } from "react-router-dom";

function ProductsHome() {
  //when they click on the tags it should change the state to send them to productsList with the correct products
  return (
      <div className="productsHome">
        <div className="productCard one">
          <h2>Men's Clothing</h2>
          <Link
            className="url"
            to={{
              pathname: "/products",
              state: { category: `men's clothing` },
            }}
          >
            <div className="productsImg" />
            <div className="takeLook">Take a look</div>
          </Link>
        </div>
        <div className="productCard two">
          <h2>Jewelery</h2>
          <Link
            className="url"
            to={{ pathname: "/products", state: { category: "jewelery" } }}
          >
            <div className="productsImgTwo" />
            <div className="takeLook">Take a look</div>
          </Link>
        </div>
        <div className="productCard three">
          <h2>Electronics</h2>
          <Link
            className="url"
            to={{ pathname: "/products", state: { category: "electronics" } }}
          >
            <div className="productsImgThree" />
            <div className="takeLook">Take a look</div>
          </Link>
        </div>
        <div className="productCard four">
          <h2>Women's Clothing</h2>
          <Link
            className="url"
            to={{
              pathname: "/products",
              state: { category: `women's clothing` },
            }}
          >
            <div className="productsImgFour" />
            <div className="takeLook">Take a look</div>
          </Link>
        </div>
      </div>
  );
}

export default ProductsHome;
