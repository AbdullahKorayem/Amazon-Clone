import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { AddUserData } from '../../../../firestore/firestore';
import { useSelector } from 'react-redux';

function PaymentCards() {
  const [openModal, setOpenModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const userUid = sessionStorage.getItem('UserUid');

  const UserPaymentArray = useSelector(state => state.User.user?.PaymentCards);

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

    console.log('Form Data:', data);

    const thePaymentCard = {
      cardName: data.fullName,
      cardNumber: data.CreditCard,
      expiryDate: data.ExpireDate,
    };

    const updatedUserPaymentArray = Array.isArray(UserPaymentArray)
      ? [...UserPaymentArray]
      : [];

    updatedUserPaymentArray.push(thePaymentCard);

    try {
      const result = await AddUserData(
        userUid,
        'PaymentCards',
        updatedUserPaymentArray
      );
      console.log('AddUserData Result:', result);
      if (result.success) {
        toast.success('Your Card Added Successfully');
        setOpenModal(false);
      } else {
        toast.error(`Failed to add Credit Card: ${result.error}`);
      }
    } catch (error) {
      console.error('Error adding Payment Card:', error);
      toast.error('An Error Occurred While Adding The Payment Card');
    }
  };

  function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const futureYear = 2040;
    const options = [];

    for (let year = currentYear; year <= futureYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return options;
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        color="white"
        className="bg-[#ffd814] hover:bg-[#ffc300] border-none "
      >
        Add New Payment
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
              Enter a new Payment Cards
            </h3>
          </section>
          <section className="block w-full mb-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-4"
            >
              <h1 className="text-xl font-medium">Add a new Payment Cards</h1>

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
                <label htmlFor="CreditCard" className="ModalLabel">
                  Your credit and debit cards{' '}
                </label>
                <input
                  type="text"
                  id="CreditCard"
                  placeholder="Enter your Card number"
                  {...register('CreditCard', {
                    required: true,
                    pattern: /^\d{16}$/,
                  })}
                  className="ModalInput"
                />
                {errors.CreditCard && errors.CreditCard.type === 'pattern' && (
                  <p className="text-xs italic text-red-500">
                    It Must contains 16 Number ....
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="ExpireDate" className="block ModalLabel">
                  Expire Date
                </label>
              </div>
              <div className="flex flex-row items-center justify-center w-2/6">
                <select
                  id="ExpireMonth"
                  {...register('ExpireDate.month', { required: true })}
                  className="mx-3 ModalInput"
                >
                  <option disabled defaultValue={true}>
                    Month
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  id="ExpireYear"
                  {...register('ExpireDate.year', { required: true })}
                  className=" ModalInput"
                >
                  <option disabled value="">
                    Year
                  </option>
                  {generateYearOptions()}
                </select>
              </div>

              <Button
                color="white"
                className="bg-[#ffd814]   hover:bg-[#ffc300] border-none"
                type="submit"
              >
                Add Card
              </Button>
            </form>
          </section>
        </Modal.Body>
      </Modal>
      <Toaster position="top-center" richColors />
    </>
  );
}

export default PaymentCards;
