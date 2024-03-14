import React, { useState } from 'react';
import PaymentCards from './PaymentCards/PaymentCards';

export default function Payment() {
  const [paymentCards, setPaymentCards] = useState([]);

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
          {paymentCards.map((card, index) => (
            <label htmlFor={`card-${index}`} key={index}>
              <section className=" w-full mb-4 border-2 p-2 border-yellow-100 rounded-md bg-[#fcf5ee]">
                <input
                  type="radio"
                  name="card"
                  id={`card-${index}`}
                  className="inline mr-2"
                />

                <div className="flex flex-wrap justify-between">
                  <h1 className="inline-block text-lg font-semibold">
                    {' '}
                    Vist ending in: {card.CreditCard.slice(-4)}
                  </h1>
                  <p>{card.fullName} </p>
                  <h1 className="inline-block text-lg font-semibold">
                    {card.ExpireDate.month} / {card.ExpireDate.year}
                  </h1>
                </div>
              </section>
            </label>
          ))}
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
            <PaymentCards setPaymentCards={setPaymentCards} />
          </div>
        </div>
      </section>
    </div>
  );
}
