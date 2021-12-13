import React from "react";
import { useParams } from "react-router-dom";
import { filter } from "../utility/Search";
import ProductsResult from "./ProductsResult";

function Searched({ data, getProductInfo }) {
  let { search } = useParams();
  if (!data) {
    return null;
  }
  let filtered = filter(data, search);
  return (
    <React.Fragment>
      <ProductsResult filtered={filtered} getProductInfo={getProductInfo}/>
    </React.Fragment>
  );
}

export default Searched;
