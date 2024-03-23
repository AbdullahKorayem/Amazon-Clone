'use client';
import { Badge } from 'flowbite-react';
function HandlePrice({ discountPercentage, price, prePrice }) {
  return (
    <div className="mt-1">
      <div className=" w-full h-0.5 bg-gray-200 my-4"></div>
      {discountPercentage > 0 && (
        <Badge
          color="failure"
          className=" w-fit bg-red-700 text-white"
          size="sm"
        >
          Deals
        </Badge>
      )}
      <div className="mt-4 text-4xl">
        {discountPercentage > 0 && (
          <span className="text-3xl text-red-600">-{discountPercentage}% </span>
        )}
        ${price}
        {discountPercentage > 0 && (
          <p className="text-sm text-gray-400 line-through">${prePrice}</p>
        )}
        <div className="mt-3">
          <p className=" text-sm text-black">All prices include VAT</p>
        </div>
      </div>
      <div className=" container mx-4 flex flex-row mt-3">
        <div className="w-20">
          <img
            src="amazon-icon/cash-icon.png"
            srcSet="../amazon-icon/cash-icon.png"
          ></img>
          <span className="text-xs flex flex-wrap">Cash on Delivery</span>
        </div>
        <div className="w-20">
          <img
            src="amazon-icon/returnable-icon.png"
            srcSet="../amazon-icon/returnable-icon.png"
          ></img>
          <span className="text-xs flex flex-wrap">15 days Returnable</span>
        </div>
        <div className="w-20">
          <img
            src="amazon-icon/deliverd-icon.png"
            srcSet="../amazon-icon/deliverd-icon.png"
          ></img>
          <span className="text-xs flex flex-wrap">Delivered by Amazon</span>
        </div>
        <div className="w-20">
          <img
            src="amazon-icon/secure-icon.png"
            srcSet="../amazon-icon/secure-icon.png"
          ></img>
          <span className="text-xs flex flex-wrap">Secure transaction</span>
        </div>
      </div>
    </div>
  );
}

export default HandlePrice;
