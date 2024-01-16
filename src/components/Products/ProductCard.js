import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { id, title, price, discountPercentage, thumbnail } = data;
  // Calculate discounted price
  const discountedPrice = price - price * (discountPercentage / 100);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <Link to={`/productDetails/${id}`}>
        <figure className="px-2 pt-4 h-48">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-xl w-full h-full object-contain"
          />
        </figure>
        <div className="card-body h-fit mt-auto items-center justify-end text-center">
          <h2 className="card-title">{title}</h2>
          <div className="">
            price : <span className="line-through">${price}</span>{" "}
            <span className="text-success ">${discountedPrice.toFixed(2)}</span>
            <p className="text-orange-100 text-xs mt-2">
              {discountPercentage}% Off
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
