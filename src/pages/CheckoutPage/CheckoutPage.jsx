import React, { useEffect } from 'react';
import Addresses from '../../components/Addresess/Addresses';
import Payment from '../../components/Addresess/PaymentComponent/Payment';
import OrderCard from './../../components/Addresess/OrderCard/OrderCard';
import ItemAndShipping from '../../components/Addresess/ItemAndShipping/ItemAndShipping';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <div className="bg-[#f3f3f3]  justify-around h-20 grid grid-cols-10  items-center  ">
        <div className="col-span-4">
          <Link to="/">
            <img
              src="amazon-icon/Amazon_logo_dark.webp"
              alt=""
              className="ml-20 w-28"
            />
          </Link>
        </div>
        <div className="col-span-6 ">
          <h1 className="text-4xl">
            Checkout(<span className="text-[#007185]">1 item</span>)
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between w-3/4 mx-auto md:grid-cols-12:w-full">
        <div className="flex flex-col w-full h-screen ">
          <Addresses />

          <Payment />

          <ItemAndShipping />
        </div>
        <div className="fixed right-0 flex justify-center inset-x-200 md:block">
          <OrderCard />
        </div>
      </div>
    </>
  );
}
