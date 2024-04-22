import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Payment({ setInfo, info }) {
  const { t } = useTranslation();

  return (
    <div className="w-full ">
      <div className="border-2 rounded-md p-4 mb-4">
        <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
          {t('payment_methods')}
        </h1>
        <div className="flex flex-col w-full">
          <hr className="mb-5" />
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            <input
              type="radio"
              id="cash"
              value="Cash On Delivery"
              name="card"
              className="mx-2 outline-none"
              onClick={() => {
                setInfo({ ...info, paymentMethod: 'cash' });
              }}
            />
            {t('COD')}
            <label htmlFor="cash">
              <div className="text-sm ms-10">
                {t('COD_description')}
                <span className="text-sky-800">{t('learn_more')}</span>
              </div>
            </label>
          </h1>
          <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-5">
            <input
              type="radio"
              value="Payment Card"
              name="card"
              id="card"
              className="mx-2 outline-none"
              onClick={() => {
                setInfo({ ...info, paymentMethod: 'card' });
              }}
            />
            <label htmlFor="card">
              {t('payment_card')}
              <div className="text-sm ms-10">
                {t('payment_card_description')}
              </div>
            </label>
          </h1>
          <hr className="mb-5" />
          {/* <div className="ms-3"><PaymentCards /></div> */}
        </div>
      </div>
    </div>
  );
}
