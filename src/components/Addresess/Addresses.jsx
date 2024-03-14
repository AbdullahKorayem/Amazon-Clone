import React, { useState } from 'react';
import AddAddressModal from './AddAddressModel/AddAddressModal';

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  console.log(addresses);

  return (
    <>
      <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
        1 - Shipping Address
      </h1>
      <section className="flex flex-col items-center justify-center w-2/4 border-2 rounded-md">
        {/* Adjusted width to 2/3 */}
        <div className="border-0.5 border-black p-4 mb-4 rounded-lg w-full">
          <div>
            <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Your Addresses
            </h1>
            <hr className="mb-5 " />
          </div>
          <div>
            {addresses.map((address, index) => (
              <label htmlFor={`address-${index}`}>
                <div
                  key={index}
                  className="flex items-center mb-4 border-2 p-2 border-yellow-100 rounded-md bg-[#fcf5ee]"
                >
                  <input
                    type="radio"
                    name="address"
                    id={`address-${index}`}
                    className="mr-2"
                  />
                  <h1 className="inline-block text-lg font-semibold">
                    {address.fullName}{' '}
                  </h1>{' '}
                  <span>
                    {address.country}
                    {address.address.streetAddress},{address.address.city},
                    {address.address.state},{address.address.zip}
                  </span>
                </div>
              </label>
            ))}
          </div>
          <AddAddressModal setAddresses={setAddresses} />
        </div>
      </section>
    </>
  );
}
