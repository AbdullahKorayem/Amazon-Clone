import React, { useEffect, useState } from 'react';
import AddAddressModal from './AddAddressModel/AddAddressModal';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Addresses({ setInfo, info, change, setChange }) {
  const addresses = useSelector(state => state.User.user?.UserInformation);
  const { i18n, t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-full  border-2 rounded-md p-4">
      <div className="border-0.5 border-black p-4 mb-4 rounded-lg w-full ">
        <div>
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            {t('your_addresses')}
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
                    className="mx-2"
                    onClick={() => {
                      setInfo(info => {
                        return {
                          ...info,
                          shippingAddress: address,
                        };
                      });
                    }}
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
            <h1 className="text-lg font-semibold text-center">
              {t('no_addresses')}
            </h1>
          )}
        </div>
        <AddAddressModal change={change} setChange={setChange} />
      </div>
    </div>
  );
}
