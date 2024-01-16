import React from "react";

const CartItem = ({ data,cartDispatch}) => {
    const {id, title, brand, thumbnail, price, qty, stock } = data;
    const quantityHandler = (value) => {
        const obj = { id: id, qty: value };
        cartDispatch({ type: "UPDATE_QUANTITY", payload: obj });
    }
  return (
    <div className="flex items-center p-2 shadow- ">
      <div className="flex w-2/5 items-center">
        <div className="w-32">
          <img className="object-contain" src={thumbnail} alt="" />
        </div>
        <div className="flex flex-col h-full ml-4">
          <span className="font-bold text-base">{title}</span>
          <span className="text-xs mt-2 text-red-300">{brand}</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <div className="join">
          <button
            className="join-item btn btn-sm text-lg btn-neutral disabled:bg-neutral"
            onClick={() => quantityHandler(qty - 1)}
            disabled={qty === 1}
          >
            -
          </button>
          <button className="join-item btn btn-sm">{qty}</button>
          <button
            className="join-item btn btn-sm text-lg btn-neutral disabled:bg-neutral"
            onClick={() => quantityHandler(qty + 1)}
            disabled={qty == stock}
          >
            +
          </button>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${price * qty}
      </span>
    </div>
  );
};

export default CartItem;
