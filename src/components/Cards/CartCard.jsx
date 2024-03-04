import React from 'react';

function CartCard() {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-4">Shopping Cart</h1>
      <div className="w-full border border-slate-300 rounded-md p-4 flex  justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="w-40 mr-10 ml-10"
              src="../../../public/Amazon_logo.svg.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl mb-3">Title of the product</h3>
            <div>
              <span className="bg-yellow-100 text-yellow-500 mb-3 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                Yellow
              </span>
            </div>
            <p className="text-green-400">In Stock</p>
            <p className="text-gray-400">Eligible for Free Delivery</p>
            <div className="flex items-center">
              <select
                className="bg-gray-200 outline-none rounded-md mr-2"
                name="Quantity"
                id=""
              >
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div className="border-r border-gray-400 mx-2 h-4"></div>
              <p className="mx-2  text-[#80a4ad] cursor-pointer">Delete</p>
              <div className="border-r border-gray-400 mx-2 h-4"></div>
              <p className="mx-2 text-[#80a4ad] cursor-pointer">
                Save for Later
              </p>
              <div className="border-r border-gray-400 mx-2 h-4"></div>
              <p className="mx-2 text-[#80a4ad] cursor-pointer">Share</p>
            </div>
          </div>
        </div>
        <div className=" font-semibold">Price: $10</div>
      </div>
    </>
  );
}

export default CartCard;
