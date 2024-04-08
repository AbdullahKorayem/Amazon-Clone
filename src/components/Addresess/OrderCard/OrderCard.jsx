import React from 'react';

import OrderCardItems from './OrderCardItems';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { addOrder, deleteItemFromCart } from '../../../firestore/firestore';
import { useTranslation } from 'react-i18next';

export default function OrderCard({ totalQuantity, totalPrice, info }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const orderSummary = [
    { label: 'Items', value: totalQuantity },
    { label: 'shipping_handling', value: 'Free' },
  ];

  let checkoutItem = JSON.parse(sessionStorage.getItem('checkout'));
  const checkItems = checkoutItem.map(item => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    };
  });
  const cashMethod = async () => {
    const res = await addOrder(info);
    info.item.forEach(async ele => {
      const res = await deleteItemFromCart(ele.id);
    });
    sessionStorage.removeItem('checkout');
    sessionStorage.removeItem('order');

    navigate('/orders');
  };

  const checkout = async () => {
    sessionStorage.setItem('order', JSON.stringify(info));
    try {
      const res = await fetch('http://localhost:8000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          items: checkItems,
        }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {}
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center border-2 rounded-md">
        <div className="flex-col border-0.5 border-black p-4 mb-4 rounded-lg w-full">
          {info.paymentMethod === 'cash' && (
            <Button
              disabled={!info.shippingAddress.fullName}
              onClick={cashMethod}
              color="white"
              className="mx-auto w-full mb-4 bg-[#ffd814] hover:bg-[#ffc300] border-none "
            >
              {t('Place your order')}
            </Button>
          )}
          {info.paymentMethod === 'card' && (
            <Button
              disabled={!info.shippingAddress.fullName}
              onClick={checkout}
              color="white"
              className="mx-auto w-full mb-4 bg-[#ffd814] hover:bg-[#ffc300] border-none "
            >
              {t('Use this payment method')}
            </Button>
          )}
          {info.paymentMethod === '' && (
            <Button
              disabled
              color="white"
              className="mx-auto w-full mb-4 bg-[#ffd814] hover:bg-[#ffc300] border-none "
            >
              {t('Use this payment method')}
            </Button>
          )}
          <p className="text-sm font-semibold text-center ">
            {t('oredr_card_description')}
          </p>
        </div>
        <hr />
        <section className="flex-col w-11/12">
          <h1 className="mb-5 text-xl font-medium text-gray-900 dark:text-white ">
            {t('order_summary')}
          </h1>
          <hr />
          <ul className="border-b-2">
            <OrderCardItems items={orderSummary} />
          </ul>
        </section>
        <h1 className="mb-5 text-xl font-medium  dark:text-white   text-[#b12704]">
          {t('order_total')}: {totalPrice.toFixed(2)}
        </h1>
      </section>
    </>
  );
}
