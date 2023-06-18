import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  console.log(params);

  return <div>Product</div>;
}

export default Product;
