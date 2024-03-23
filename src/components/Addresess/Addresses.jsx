import React from 'react';
import AddAddressModal from './AddAddressModel/AddAddressModal';
import { useSelector } from 'react-redux';

export default function Addresses() {
  const addresses = useSelector(state => state.User.user?.UserInformation);

  return (
    <div className="flex flex-col items-center justify-center w-full  border-2 rounded-md p-4">
      <div className="border-0.5 border-black p-4 mb-4 rounded-lg w-full ">
        <div>
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            Your Addresses
          </h1>
          <hr className="mb-5" />
        </div>
        <div>
          {addresses && addresses.length > 0 ? (
            addresses.map((address, index) => (
              <label
                htmlFor={`address-${index}`}
                key={index}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row items-center mb-4 border-2 p-2 border-yellow-100 rounded-md bg-[#fcf5ee]">
                  <input
                    type="radio"
                    name="address"
                    id={`address-${index}`}
                    className="mr-2"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold">
                      {address.fullName}
                    </h1>
                    <span>
                      {address.country} {address.address.streetAddress},
                      {address.address.city}, {address.address.state},
                      {address.address.zip}
                    </span>
                  </div>
                </div>
              </label>
            ))
          ) : (
            <h1 className="text-lg font-semibold text-center">No Addresses</h1>
          )}
        </div>
        <AddAddressModal />
      </div>
    </div>
  );
}
