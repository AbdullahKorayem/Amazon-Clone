import React, { useEffect, useState } from 'react';
import PaymentCards from './PaymentCards/PaymentCards';

import { useSelector  } from 'react-redux';
export default function Payment() {

  const userUid = sessionStorage.getItem('UserUid')


  const UserPaymentArray = useSelector((state) => state.User.user?.PaymentCards);


  return (
    <div className="w-2/4">
      <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
        2 - Payment Methods
      </h1>

      <section className="flex flex-col items-center justify-center w-full border-2 rounded-md">
        <div className="border-0.5 border-black p-4 mb-4 rounded-lg w-full">
          {/* Header with aligned titles */}
          <article className="flex flex-wrap justify-between">
            <h1 className="inline-block mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Card Number
            </h1>
            <h1 className="inline-block mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Name on Card
            </h1>
            <h1 className="inline-block mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Expiry Date
            </h1>
          </article>

          {/* Loop through cards and display aligned content */}
          {  UserPaymentArray !== 0 ?  UserPaymentArray.map((card, index) => (


            <label htmlFor={`card-${index}`} key={index}>
              <section className="  w-full mb-4 border-2 p-2 border-yellow-100 rounded-md bg-[#fcf5ee]">
                <input
                  type="radio"
                  name="card"
                  id={`card-${index}`}
                  className="inline mr-2"
                />

                <div className="flex flex-wrap justify-between">
                  <h1 className="inline-block text-lg font-semibold">
                    {' '}
                    💳 Visa ending in: {card.cardNumber.slice(-4)}
                  </h1>
                  <p>{card.cardName} </p>
                  <h1 className="inline-block text-lg font-semibold">
                    {card.expiryDate.month} / {card.expiryDate.year}
                  </h1>
                </div>
              </section>
            </label>
          )) : <h1 className="text-lg font-semibold text-center">No Cards</h1> }
          <hr className="mb-5" />
          <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
            {' '}
            <input
              type="radio"
              name="card"
              className="inline mr-2 outline-none"
            />{' '}
            Cash On Delivery
          </h1>
          <hr className="mb-5" />
          <div>
            <PaymentCards />
          </div>
        </div>
      </section>
    </div>
  );
}
