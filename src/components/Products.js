import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  const item = products.map((product) => {
    return product
  })
  return (
    <>
      <Product product={item} key={Math.random()}/>
    </>
  );
};

export default Products;
