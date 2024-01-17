import React from "react";

const OrderSummary = ({ data }) => {
  const totalQuantity = data.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const totalPrice = data.reduce((total, item) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;
    return total + discountedPrice * item.qty;
  }, 0);
  return (
    <div id="summary" className="w-full px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-4">Order Summary</h1>
      <div className="flex justify-between my-5">
        <span className="font-semibold text-sm uppercase">{`Items ${totalQuantity}`}</span>
        <span className="font-semibold text-sm">{`$${totalPrice.toFixed(
          2
        )}`}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-2 text-sm uppercase">
          Shipping
        </label>
        <select className="select select-sm select-bordered outline-none w-full">
          <option>Standard shipping - $10.00</option>
          <option>Normal shipping - $2.00</option>
        </select>
      </div>
      <div className="py-5">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-2 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="input outline-none input-bordered input-sm text-sm w-full"
        />
      </div>
      <button className="btn btn-error  btn-sm  uppercase">Apply</button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{`$${totalPrice}`}</span>
        </div>
        <button className="btn btn-primary uppercase font-bold tracking-widest w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
