import React from 'react';
import Addresses from '../../components/Addresess/Addresses';
import Payment from '../../components/Addresess/PaymentComponent/Payment';
import OrderCard from './../../components/Addresess/OrderCard/OrderCard';
import ItemAndShipping from '../../components/Addresess/ItemAndShipping/ItemAndShipping';

export default function CheckoutPage() {
  return (
    <>
      <div className="bg-[#f3f3f3]  justify-around h-20 grid grid-cols-10  items-center">
        <div className="col-span-4">
          <img
            src="amazon-icon/Amazon_logo_dark.webp"
            alt=""
            className="ml-20 w-28"
          />
        </div>
        <div className="col-span-6 ">
          <h1 className="text-4xl">
            Checkout(<span className="text-[#007185]">1 item</span>)
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between w-3/4 mx-auto md:flex-row">
        <div className="flex flex-col w-full h-screen ">
          <Addresses />

          <Payment />

          <ItemAndShipping />
        </div>
        <div className="fixed right-0 flex justify-center inset-x-200">
          <OrderCard />
        </div>
      </div>
    </>
  );
}
