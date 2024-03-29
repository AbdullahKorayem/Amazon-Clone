import React, { useEffect } from 'react';
import PaymentCards from './PaymentCards/PaymentCards';
import { useSelector } from 'react-redux';

export default function Payment({ isRender, setIsRender }) {
  const userPaymentArray = useSelector(state => state.User.user?.PaymentCards);
  useEffect(() => {
    setIsRender(!isRender);
  }, [userPaymentArray]);
  return (
    <div className="w-full ">
      <div className="border-2 rounded-md p-4 mb-4">
        <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
          Payment Methods
        </h1>
        <div className="flex flex-col w-full">
          {userPaymentArray && userPaymentArray.length > 0 ? (
            userPaymentArray.map((card, index) => (
              <label htmlFor={`card-${index}`} key={index} className="w-full">
                <div className="border-2 p-2 mb-4 border-yellow-100 rounded-md bg-[#fcf5ee]">
                  <input
                    type="radio"
                    name="card"
                    id={`card-${index}`}
                    className="mr-2"
                  />
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-lg font-semibold">
                      💳 Visa ending in: {card.cardNumber.slice(-4)}
                    </h1>
                    <p>{card.cardName}</p>
                    <h1 className="text-lg font-semibold">
                      {card.expiryDate.month} / {card.expiryDate.year}
                    </h1>
                  </div>
                </div>
              </label>
            ))
          ) : (
            <h1 className="text-lg font-semibold text-center">No Cards</h1>
          )}
          <hr className="mb-5" />
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            <input type="radio" name="card" className="mr-2 outline-none" />{' '}
            Cash On Delivery
          </h1>
          <hr className="mb-5" />
          <div className="ms-3">{/* <PaymentCards /> */}</div>
        </div>
      </div>
    </div>
  );
}
