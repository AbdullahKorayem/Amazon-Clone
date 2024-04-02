import React, { useEffect, useState } from 'react';
import Addresses from '../../components/Addresess/Addresses';
import Payment from '../../components/Addresess/PaymentComponent/Payment';
import OrderCard from './../../components/Addresess/OrderCard/OrderCard';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  let checkoutItem = JSON.parse(sessionStorage.getItem('checkout'));
  let userId = localStorage.getItem('UserUid');
  const totalPrice = checkoutItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const totalQuantity = checkoutItem.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [change, setChange] = useState(false);
  const [info, setInfo] = useState({
    shippingAddress: {},
    paymentMethod: '',
    totalPrice,
    totalQuantity,
    item: checkoutItem,
    status: 'pending',
    userId,
    orderDate: Date.now(),
  });
  console.log(info);
  useEffect(() => {
    document.title = 'Amazon : Checkout';
    dispatch(fetchUser());
  }, [change]);

  return (
    <>
      <div className="bg-[#f3f3f3] justify-around h-20 grid grid-cols-2 md:grid-cols-10 items-center">
        <div className="col-span-1 md:col-span-4">
          <Link to="/">
            <img
              src="amazon-icon/Amazon_logo_dark.webp"
              alt=""
              className="ml-4 md:ml-20 w-20 md:w-28"
            />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-6">
          <h1 className="text-xl md:text-4xl text-center md:text-left">
            Checkout(
            <span className="text-[#007185]">{totalQuantity} item</span>)
          </h1>
        </div>
      </div>

      <div className=" mx-auto sm:grid sm:grid-cols-12  p-4 ">
        <div className=" md:col-span-6 sm:col-span-6">
          <div className="md:mb-6">
            <Addresses
              setInfo={setInfo}
              info={info}
              setChange={setChange}
              change={change}
            />
          </div>
          <div>
            <Payment setInfo={setInfo} info={info} />
          </div>
        </div>
        <div className=" md:col-span-1 sm:col-span-0"></div>
        <div className="lg:col-span-4 md:col-span-5 sm:col-span-5">
          <OrderCard
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            checkoutItem={checkoutItem}
            info={info}
          />
        </div>
      </div>
    </>
  );
}
