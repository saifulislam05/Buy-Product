import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductItems = () => {
  // const [productsData, setProductsData] = useState([]);
  const data = useSelector((store) => {
    return store.products.products;
  });

  // useEffect(() => {
  //   setProductsData(data);
  // }, [data]);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.length > 0 &&
        data.map((item) => <ProductCard key={item.id} data={item} />)}
    </div>
  );
};

export default ProductItems;
