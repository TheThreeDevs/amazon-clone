import React from "react";
import { useParams } from "react-router-dom";
import { filter } from "../utility/Search";
import ProductsResult from "./ProductsResult";
import "./Searched.css";

function Searched({ data, getProductInfo }) {
  let { search } = useParams();
  if (!data) {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <div></div>
          <div></div>
          <span>Loading..</span>
        </div>
      </div>
    );
  }
  let filtered = filter(data, search);
  return (
    <div>
      <ProductsResult
        filtered={filtered}
        getProductInfo={getProductInfo}
        search={search}
      />
    </div>
  );
}

export default Searched;
