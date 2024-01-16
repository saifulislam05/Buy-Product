import React from "react";
import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Cart/OrderSummary";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { items } = cartState;

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="w-fit mx-auto text-xl font-semibold border-b-2 pb-2">
        Cart
      </h1>
      {items.length > 0 ? (
        <div className="flex flex-wrap">
          <div className="w-full  md:w-3/4 px-10 py-10">
            {items.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  data={item}
                  cartDispatch={cartDispatch}
                />
              );
            })}

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div className="w-full md:w-1/4 shadow-xl">
            <OrderSummary totalItems={3} totalPrice={600} />
          </div>
        </div>
      ) : (
        <p className="text-center text-md mt-8">No Products added to cart !</p>
      )}
    </div>
  );
};

export default Cart;
