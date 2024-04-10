import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { updateUserInformationAtIndex } from '../../firestore/firestore';
import { useTranslation } from 'react-i18next';
import { BiPlus } from 'react-icons/bi';

export default function EditAddress({ change, setChange, index }) {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [country, setCountry] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const UserInfoArray = useSelector(state => state.User.user?.UserInformation);
  const selectedAddress = UserInfoArray[0];
  const [
    { phoneNumber, fullName, city, streetAddress, apartment, state, zip },
    setAddressDate,
  ] = useState({
    phoneNumber: selectedAddress.phoneNumber,
    fullName: selectedAddress.fullName,
    city: selectedAddress.address.city,
    streetAddress: selectedAddress.address.streetAddress,
    apartment: selectedAddress.address.apartment,
    state: selectedAddress.address.state,
    zip: selectedAddress.address.zip,
  });

  async function toGetAllCountries() {
    try {
      const res = await axios.get(
        'https://countriesnow.space/api/v0.1/countries'
      );
      const countriesData = res.data.data;
      const countryNames = countriesData.map(c => c.country);
      setCountry(countryNames);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const userUid = localStorage.getItem('UserUid');

  const onSubmit = async data => {
    if (!userUid) {
      toast.error('Please Login First');
      setTimeout(() => {
        toast.error('You will be redirected to the login page in 2 seconds');
      }, 1000);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    const theAddress = {
      country: data.country,
      streetAddress: data.streetAddress,
      apartment: data.apartment,
      city: data.city,
      state: data.state,
      zip: data.zip,
    };

    const updatedUserInfoArray = Array.isArray(UserInfoArray)
      ? [...UserInfoArray]
      : [];

    const userData = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      address: theAddress,
      useAsDefault: data.useAsDefault || false,
    };

    try {
      await updateUserInformationAtIndex(userUid, index, userData);
      toast.success('Your Address Added Successfully');
      setOpenModal(false);
      // navigate('/checkout');
      setChange(!change);
    } catch (error) {
      console.error('Error adding address:', error);
      toast.error('An error occurred while adding the address');
    }
  };

  useEffect(() => {
    toGetAllCountries();
  }, []);

  return (
    <>
      <Button
        color="white"
        className="text-sm border-none text-sky-800 cursor-pointer px-0 font-normal"
        onClick={() => setOpenModal(true)}
      >
        {t('edit')}
      </Button>
      <Modal
        show={openModal}
        size="5xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body className="w-full">
          <section className="flex flex-col items-center justify-center h-5 p-10 mb-5 bg-gray-200 rounded-md">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {t('Enter a new shipping address')}
            </h3>
          </section>
          <section className="block w-full mb-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-4"
            >
              <h1 className="text-xl font-medium">{t('add_new_address')}</h1>

              <div>
                <label htmlFor="Country" className="ModalLabel">
                  {t('Country')}
                </label>
                <select
                  name="Country"
                  id="country"
                  {...register('country', { required: true })}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    value={selectedAddress.address.country}
                    defaultValue={true}
                  >
                    {selectedAddress.address.country}
                  </option>
                  {country.map((c, i) => (
                    <option value={c} key={i}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="Full-name" className="ModalLabel">
                  {t('full_name')}
                </label>
                <input
                  type="text"
                  id="Full-name"
                  placeholder="Enter your full name"
                  {...register('fullName', { required: true })}
                  className="ModalInput"
                  value={fullName}
                  onChange={e => {
                    console.log(e.target.value);
                    setAddressDate(data => {
                      return {
                        ...data,
                        fullName: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="Phone" className="ModalLabel">
                  {t('phone_number')}
                </label>
                <input
                  type="text"
                  id="Phone"
                  placeholder="Enter your phone number"
                  {...register('phoneNumber', { required: true })}
                  className="ModalInput"
                  value={phoneNumber}
                  onChange={e => {
                    console.log(e.target.value);
                    setAddressDate(data => {
                      return {
                        ...data,
                        phoneNumber: e.target.value,
                      };
                    });
                  }}
                />
              </div>

              <div>
                <label htmlFor="StreetAddress" className="ModalLabel">
                  {t('street_address')}
                </label>
                <input
                  type="text"
                  id="StreetAddress"
                  placeholder="Enter your address"
                  {...register('streetAddress', { required: true })}
                  className="ModalInput"
                  value={streetAddress}
                  onChange={e =>
                    setAddressDate(data => {
                      return {
                        ...data,
                        streetAddress: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  {...register('apartment', { required: true })}
                  className="ModalInput"
                  value={apartment}
                  onChange={e =>
                    setAddressDate(data => {
                      return {
                        ...data,
                        apartment: e.target.value,
                      };
                    })
                  }
                />
              </div>

              <section className="flex flex-row justify-between">
                <div>
                  <label htmlFor="City" className="ModalLabel">
                    {t('City')}
                  </label>
                  <input
                    type="text"
                    id="City"
                    placeholder="Enter your city"
                    {...register('city', { required: true })}
                    className="ModalInput"
                    value={city}
                    onChange={e =>
                      setAddressDate(data => {
                        return {
                          ...data,
                          city: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="State" className="ModalLabel">
                    {t('State')}
                  </label>
                  <input
                    type="text"
                    id="State"
                    placeholder="Enter your state"
                    {...register('state', { required: true })}
                    className="ModalInput"
                    value={state}
                    onChange={e =>
                      setAddressDate(data => {
                        return {
                          ...data,
                          state: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="Zip" className="ModalLabel">
                    {t('Zip')}
                  </label>
                  <input
                    type="text"
                    id="Zip"
                    placeholder="Enter your zip"
                    {...register('zip', { required: true })}
                    className="ModalInput"
                    value={zip}
                    onChange={e =>
                      setAddressDate(data => {
                        return {
                          ...data,
                          zip: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </section>

              <div>
                <input
                  type="checkbox"
                  className="rounded-md outline-none"
                  {...register('useAsDefault')}
                />
                <label htmlFor="">{t('Use as my default address')}.</label>
              </div>

              <p className="text-xs">{t('May be used to assist delivery')}</p>

              <Button
                color="white"
                className="bg-[#ffd814]   hover:bg-[#ffc300] border-none"
                type="submit"
              >
                {t('add_address')}
              </Button>
              <Toaster position="top-center" richColors />
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
