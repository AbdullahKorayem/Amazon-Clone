import React, { useRef } from 'react';

export default function Payment({ setInfo, info }) {
  return (
    <div className="w-full ">
      <div className="border-2 rounded-md p-4 mb-4">
        <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
          Payment Methods
        </h1>
        <div className="flex flex-col w-full">
          <hr className="mb-5" />
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            <input
              type="radio"
              value="Cash On Delivery"
              name="card"
              className="mr-2 outline-none"
              onClick={() => {
                setInfo({ ...info, paymentMethod: 'cash' });
              }}
            />
            Cash On Delivery
          </h1>
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            <input
              type="radio"
              value="Payment Card"
              name="card"
              className="mr-2 outline-none"
              onClick={() => {
                setInfo({ ...info, paymentMethod: 'card' });
              }}
            />
            Payment Card
          </h1>
          <hr className="mb-5" />
          {/* <div className="ms-3"><PaymentCards /></div> */}
        </div>
      </div>
    </div>
  );
}
