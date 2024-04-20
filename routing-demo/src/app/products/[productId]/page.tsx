import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h2>Details about product {params.productId}</h2>;
};

export default ProductDetails;
