import React from 'react';

function CartCard() {
  return (
    <>
      <div className="w-full border-t-2 border-slate-300 rounded-md p-4 flex  justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="w-40 mr-10 ml-10"
              src="https://m.media-amazon.com/images/I/81za0uiwWOL._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold w-[90%]">
              12th Intel Core i7-1255U 10-Cores, 16GB RAM, 512GB SSD, NVIDIA
              GeForce MX550 with 2GB GDDR6 Graphics, 15.6" FHD (1920 x 1080)
            </h3>

            <p className="text-green-800 text-xs">In Stock</p>
            <p className="text-gray-500 text-xs">Eligible for FREE delivery</p>
            <div className="flex items-center">
              <select
                className="bg-gray-200 border-none outline-none py-1 rounded-xl mr-2"
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
              <p className="mx-2 text-sm  text-sky-800 cursor-pointer">
                Delete
              </p>
              <div className="border-r border-gray-400 mx-2 h-4"></div>
              <p className="mx-2 text-sky-800 text-sm  cursor-pointer">
                Save for Later
              </p>
              <div className="border-r  border-gray-400 mx-2 h-4"></div>
              <p className="mx-2 text-sm text-sky-800  cursor-pointer">Share</p>
            </div>
          </div>
        </div>
        <div className=" font-semibold">$976.8</div>
      </div>
    </>
  );
}

export default CartCard;
