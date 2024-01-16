import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../Data/products.json"

const ProductItems = () => {

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {productsData?.length > 0 &&
        productsData.map((item) => <ProductCard key={item.id} data={item} />)}
    </div>
  );
};

export default ProductItems;
