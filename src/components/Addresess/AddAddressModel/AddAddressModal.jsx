import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AddUserData } from './../../../firestore/firestore';

export default function AddAddressModal({ setIsRender }) {
  const navigate = useNavigate();

  const [country, setCountry] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const UserInfoArray = useSelector(state => state.User.user?.UserInformation);
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
    setIsRender(false);
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

    updatedUserInfoArray.push(userData);

    try {
      await AddUserData(userUid, 'UserInformation', updatedUserInfoArray);
      toast.success('Your Address Added Successfully');
      setOpenModal(false);
      navigate('/checkout');
      setIsRender(true);
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
        className="bg-[#ffd814]   hover:bg-[#ffc300] border-none"
        onClick={() => setOpenModal(true)}
      >
        Add New Address
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
              Enter a new shipping address
            </h3>
          </section>
          <section className="block w-full mb-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-4"
            >
              <h1 className="text-xl font-medium">Add a new address</h1>

              <div>
                <label htmlFor="Country" className="ModalLabel">
                  Country
                </label>
                <select
                  name="Country"
                  id="country"
                  {...register('country', { required: true })}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="-" defaultValue={true}>
                    Select Your Country
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
                  Full name
                </label>
                <input
                  type="text"
                  id="Full-name"
                  placeholder="Enter your full name"
                  {...register('fullName', { required: true })}
                  className="ModalInput"
                />
              </div>

              <div>
                <label htmlFor="Phone" className="ModalLabel">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="Phone"
                  placeholder="Enter your phone number"
                  {...register('phoneNumber', { required: true })}
                  className="ModalInput"
                />
              </div>

              <div>
                <label htmlFor="StreetAddress" className="ModalLabel">
                  Street address
                </label>
                <input
                  type="text"
                  id="StreetAddress"
                  placeholder="Enter your address"
                  {...register('streetAddress', { required: true })}
                  className="ModalInput"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  {...register('apartment', { required: true })}
                  className="ModalInput"
                />
              </div>

              <section className="flex flex-row justify-between">
                <div>
                  <label htmlFor="City" className="ModalLabel">
                    City
                  </label>
                  <input
                    type="text"
                    id="City"
                    placeholder="Enter your city"
                    {...register('city', { required: true })}
                    className="ModalInput"
                  />
                </div>
                <div>
                  <label htmlFor="State" className="ModalLabel">
                    State
                  </label>
                  <input
                    type="text"
                    id="State"
                    placeholder="Enter your state"
                    {...register('state', { required: true })}
                    className="ModalInput"
                  />
                </div>
                <div>
                  <label htmlFor="Zip" className="ModalLabel">
                    Zip
                  </label>
                  <input
                    type="text"
                    id="Zip"
                    placeholder="Enter your zip"
                    {...register('zip', { required: true })}
                    className="ModalInput"
                  />
                </div>
              </section>

              <div>
                <input
                  type="checkbox"
                  className="rounded-md outline-none"
                  {...register('useAsDefault')}
                />
                <label htmlFor="">Use as my default address.</label>
              </div>

              <p className="text-xs">May be used to assist delivery</p>

              <Button
                color="white"
                className="bg-[#ffd814]   hover:bg-[#ffc300] border-none"
                type="submit"
              >
                Add Address
              </Button>
              <Toaster position="top-center" richColors />
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
