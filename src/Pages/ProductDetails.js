import React, { useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useSelector, useDispatch } from "react-redux";
import productsJsonData from "../Data/products.json";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const productsData = useSelector((store) => store.products.products);
  const cartsData = useSelector((store) => store.cart.items);

  let productDetails;
  // if (productsData === undefined) {
    console.log(productsData);
    productDetails = productsJsonData.find((item) => item.id == id);
  // } else {
  //   productDetails = productsData.find((item) => item.id == id);
  // }

  const {
    title,
    description,
    price,
    brand,
    discountPercentage,
    rating,
    stock,
    thumbnail,
  } = productDetails;
  const discountedPrice = price - price * (discountPercentage / 100);

  const quantityReducer = (state, action) => {
    switch (action) {
      case "INCREASE":
        return state + 1;
      case "DECREASE":
        return state - 1;
      default:
        return state;
    }
  };

  const [quantityState, quantityDispatch] = useReducer(quantityReducer, 1);

  const useCartReducer = useCart();
  const { cartState, cartDispatch } = useCartReducer;

  // const isPresentInCart = cartsData?.find((item) => item.id == id);
  const isPresentInCart = false;

  const addCartHandler = () => {
    const itemObj = { ...productDetails, qty: quantityState };
    dispatch(addToCart(itemObj));
  };

  return (
    <section className="w-11/12 mx-auto mb-4">
      <h1 className="text-xl mx-auto w-fit border-b-2 pb-2 my-4 font-semibold border-base-content">
        Details
      </h1>
      <div className="flex flex-wrap justify-between gap-4 md:gap-0">
        <figure className="w-full md:w-[45%]">
          <img src={thumbnail} alt={title} className="w-full" />
        </figure>
        <div className="w-full md:w-6/12 flex flex-col justify-between ">
          <div className="mb-4 ">
            <h2 className="max-w-xl mb-4 text-2xl font-bold  md:text-4xl">
              {title}
            </h2>
            <p className="mb-2 text-sm mt-2">
              Brand:
              <span className=" text-red-300 "> {brand}</span>
            </p>
            <div className="flex items-center mb-6">
              <ul className="flex mr-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 mr-1 text-red-500  bi bi-star "
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </li>
              </ul>
              <p className="text-xs  ">(29 customer reviews)</p>
            </div>
            <p className="max-w-md mb-8 ">{description}</p>
            <div className="inline-block mb-4 text-4xl font-bold   ">
              <span>${price}</span>
              <span className="ml-3 text-base font-normal text-gray-500 line-through ">
                ${discountedPrice.toFixed(2)}
              </span>
              <p className="text-sm mt-2 text-red-200">
                {discountPercentage}% Off
              </p>
            </div>
            <p className="text-success">{stock} in stock</p>
          </div>

          {isPresentInCart.length > 0 ? (
            <Link to="/cart">
              <button className="btn btn-primary w-full md:w-56">
                View in Cart
              </button>
            </Link>
          ) : (
            <>
              <div>
                <label htmlFor="" className="w-full text-lg font-semibold  ">
                  Quantity
                </label>
                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button
                    className={`join-item btn btn-sm text-lg btn-primary ${
                      quantityState === 1 ? "disabled:bg-neutral" : ""
                    }`}
                    onClick={() => quantityDispatch("DECREASE")}
                    disabled={quantityState === 1}
                  >
                    -
                  </button>
                  <button className="join-item btn btn-sm">
                    {quantityState}
                  </button>
                  <button
                    className={`join-item btn btn-sm text-lg btn-primary ${
                      quantityState === stock ? "disabled:bg-neutral" : ""
                    }`}
                    onClick={() => quantityDispatch("INCREASE")}
                    disabled={quantityState === stock}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="btn btn-primary w-full md:w-56"
                onClick={addCartHandler}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
