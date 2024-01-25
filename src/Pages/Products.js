import React from "react";
import ProductItems from "../components/Products/ProductItems";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../features/products/productsSlice";
import productsData from "../Data/products.json";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products.products);
  if (data.length === 0) {
    dispatch(setProducts(productsData));
  }
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-xl w-fit border-b-2 border-primary mx-auto mb-4">
        Products
      </h2>
      <ProductItems />
    </div>
  );
};

export default Products;
