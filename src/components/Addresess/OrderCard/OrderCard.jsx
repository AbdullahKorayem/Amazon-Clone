import React, { useState } from 'react';

import OrderCardItems from './OrderCardItems';
import { Button } from 'flowbite-react';

export default function OrderCard({ totalQuantity, totalPrice }) {
  const orderSummary = [
    { label: 'Items', value: totalQuantity },
    { label: 'Shipping & handling', value: 'Free' },
    { label: 'Total before tax', value: totalPrice.toFixed(2) },
    { label: 'Estimated tax to be collected', value: totalPrice.toFixed(2) },
  ];

  let checkoutItem = JSON.parse(sessionStorage.getItem('checkout'));
  console.log(checkoutItem);
  const checkout = async () => {
    try {
      const res = await fetch('http://localhost:8000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          items: checkoutItem,
        }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center border-2 rounded-md">
        <div className="flex-col border-0.5 border-black p-4 mb-4 rounded-lg w-full">
          <Button
            // disabled
            onClick={checkout}
            color="white"
            className="mx-auto w-full mb-4 bg-[#ffd814] hover:bg-[#ffc300] border-none "
          >
            Add New Payment
          </Button>
          <p className="text-sm font-semibold text-center ">
            Choose a payment method to continue checking out. You'll still have
            a chance to review and edit your order before it's final.
          </p>
        </div>
        <hr />
        <section className="flex-col">
          <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
            Order Summary
          </h1>
          <hr />
          <ul>
            <OrderCardItems items={orderSummary} />
          </ul>
        </section>
        <hr />
        <h1 className="mb-5 text-xl font-medium  dark:text-white text-[#b12704]">
          Order total: {totalPrice.toFixed(2)}
        </h1>
      </section>
    </>
  );
}
