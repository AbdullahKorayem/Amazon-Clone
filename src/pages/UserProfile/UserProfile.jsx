import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { t } = useTranslation();
  document.title = 'Amazon : Your Profile';
  return (
    <>
      <div className="text-2xl xl:text-3xl text-center mt-4 -mb-5">
        {t('your_account')}
      </div>
      <div className="flex flex-col items-center ">
        <div className="grid  lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 md:gap-x-6 pt-4 items-center">
          <Link to="/orders">
            <div className="relative flex items-center mt-6 cursor-pointer hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
              <img
                src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/order._CB657847415_.png"
                className="w-[20%]"
              />
              <div className="flex ps-1 flex-col">
                <div className="">
                  <p>
                    <strong> {t('your_order')}</strong>
                  </p>
                </div>
                <div>
                  <span>{t('order_description')}</span>
                </div>
              </div>
            </div>
          </Link>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/security._CB657836742_.png"
              className="w-[20%]"
            />
            <Link to="/editProfile" className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('login_Security')}</strong>
                </p>
              </div>
              <div>
                <span>{t('login_Security_description')}</span>
              </div>
            </Link>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB608110998_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('prime')}</strong>
                </p>
              </div>
              <div>
                <span>{t('prime_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex  mt-6 text-gray-700 cursor-pointer  hover:bg-gray-200 bg-white  shadow-sm border rounded-xl w-80 p-4 h-[121.6px]">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/gift_card._CB657847415_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('gift_cards')}</strong>
                </p>
              </div>
              <div>
                <span>{t('gift_cards_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/payment._CB657847415_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('your_payments')}</strong>
                </p>
              </div>
              <div>
                <span>{t('your_payments_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4 h-[121.6px]">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/YA_icon_Help_1._CB657836742_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('Pre_order')}</strong>
                </p>
              </div>
              <div>
                <span>{t('Pre_order_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/FS_Message_Centre._CB647329578_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('your_messages')}</strong>
                </p>
              </div>
              <div>
                <span>{t('your_messages_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657836742_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('your_addresses')}</strong>
                </p>
              </div>
              <div>
                <span>{t('your_addresses_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/Gateway_icon_YA_Installment_Plan_01._CB628728316_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('installment_plan')}</strong>
                </p>
              </div>
              <div className=" mb-2">
                <span>{t('installment_plan_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 h-[101.6px] p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/mobileapp._CB668209870_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('mobile_app')}</strong>
                </p>
              </div>
              <div>
                <span>{t('mobile_app_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB608110873_.png"
              className="w-[20%]"
            />
            <div className="flex ps-1 flex-col">
              <div className="">
                <p>
                  <strong>{t('your_lists')}</strong>
                </p>
              </div>
              <div>
                <span>{t('your_lists_description')}</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/contact_us._CB665051409_.png"
              className="w-[20%]"
            />
            <div className="flex flex-col ps-1">
              <div className="">
                <p>
                  <strong>{t('contact_us')}</strong>
                </p>
              </div>
              <div>
                <span>{t('contact_us_description')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 w-[60%] mt-2"></div>
        <div className="grid   lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  gap-x-6  gap-y-6 items-center mt-5  mb-3">
          <div className="relative flex items-center   text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex h-[235px] flex-col">
              <div className="">
                <p>
                  <strong>{t('Ordering and shopping preferences')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('your_addresses')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('your_payments')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('your_transactions')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('Manage your profiles')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('profile')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('archived_orders')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('language_settings')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('Tax registration number')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center   text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex h-[235px]  flex-col">
              <div className="">
                <p>
                  <strong>{t('Email alerts and messages')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('advertising_preferences')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('communication_preferences')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('your_messages')}
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      {t('Shipment updates via text')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center   text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex h-[235px]  flex-col">
              <div className="">
                <p>
                  <strong>{t('Digital content and devices')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Digital and device forum')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center   text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex h-32 flex-col">
              <div className="">
                <p>
                  <strong>{t('other_accounts')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Amazon Web Services')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('seller')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Twitch account settings')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center  text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex   h-32  flex-col">
              <div className="">
                <p>
                  <strong>{t('subscriptions')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('email')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Memberships & Subscriptions')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center  text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex   h-32  flex-col">
              <div className="">
                <p>
                  <strong>{t('Manage your data')}</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Request your data')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('Close Your Amazon Accoun')}
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      {t('privacy_notice')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
