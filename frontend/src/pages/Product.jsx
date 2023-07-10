import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      Product
      <div>{params.productId}</div>
      <div>Increment</div>
    </div>
  );
}

export default Product;
