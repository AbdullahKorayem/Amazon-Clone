import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  document.title = 'Amazon : Your Profile';
  return (
    <>
      <div className="text-2xl xl:text-3xl text-center mt-4 -mb-5">
        Your Account
      </div>
      <div className="flex flex-col items-center ">
        <div className="grid  lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 md:gap-x-6 pt-4 items-center">
          <Link to="/orders">
            <div className="relative flex items-center mt-6 cursor-pointer hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
              <img
                src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/order._CB657847415_.png"
                className="w-[20%]"
              />
              <div className="flex pl-1 flex-col">
                <div className="">
                  <p>
                    <strong>Your orders</strong>
                  </p>
                </div>
                <div>
                  <span>
                    track, return, cancel an order, download invoice or buy
                    again
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/security._CB657836742_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>login& Security</strong>
                </p>
              </div>
              <div>
                <span>
                  Manage Password,email,mobile number,and security settings
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB608110998_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>prime</strong>
                </p>
              </div>
              <div>
                <span>
                  Manage your memberShip,view benefits,and payment Setting
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex  mt-6 text-gray-700 cursor-pointer  hover:bg-gray-200 bg-white  shadow-sm border rounded-xl w-80 p-4 h-[121.6px]">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/gift_card._CB657847415_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Gift Cards</strong>
                </p>
              </div>
              <div>
                <span>View balance or redeem a card</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/payment._CB657847415_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Your Payments</strong>
                </p>
              </div>
              <div>
                <span>
                  Manage or add your Payment methods and view your transactions
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4 h-[121.6px]">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/YA_icon_Help_1._CB657836742_.png"
              className="w-[66.21px] h-[66.21px]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Pre-order Questions</strong>
                </p>
              </div>
              <div>
                <span>
                  Leran more about refund,cash on delivery and warranty
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/FS_Message_Centre._CB647329578_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Your Messages</strong>
                </p>
              </div>
              <div>
                <span>
                  View or respond to messages from amazon,sellers and Buyers
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657836742_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Your Addresses</strong>
                </p>
              </div>
              <div>
                <span>Edit,remove or set default address</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/Gateway_icon_YA_Installment_Plan_01._CB628728316_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>installment plan</strong>
                </p>
              </div>
              <div className=" mb-2">
                <span>View installment plans offers</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 h-[101.6px] p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/mobileapp._CB668209870_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Amazon Mobile APP</strong>
                </p>
              </div>
              <div>
                <span>Download the Amazon App</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB608110873_.png"
              className="w-[20%]"
            />
            <div className="flex pl-1 flex-col">
              <div className="">
                <p>
                  <strong>Your Lists</strong>
                </p>
              </div>
              <div>
                <span>View,Modify and Share Your Lists or create new ones</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-6 cursor-pointer  hover:bg-gray-200 text-gray-700 bg-white  shadow-sm border rounded-xl w-80 p-4">
            <img
              src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/contact_us._CB665051409_.png"
              className="w-[20%]"
            />
            <div className="flex flex-col">
              <div className="">
                <p>
                  <strong>Contact us</strong>
                </p>
              </div>
              <div>
                <span>
                  Browse Self Service options help articales or contact us
                </span>
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
                  <strong>Ordering and shopping preferences</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Your Addresses
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Your Payments
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Your transactions
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Manage your profiles
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Profile
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Archived orders
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Language settings
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Tax registration number
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
                  <strong>Email alerts and messages</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Advertising preferences
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Communication preferences
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Your Messages
                    </a>
                  </li>{' '}
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-500 hover:underline">
                      Shipment updates via text
                    </a>
                  </li>{' '}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center   text-gray-700 bg-white shadow-sm border rounded-xl w-80 p-4">
            <div className="flex h-[235px]  flex-col">
              <div className="">
                <p>
                  <strong>Digital content and devices</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Digital and device forum
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
                  <strong>Other accounts</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Amazon Web Services
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Seller
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Twitch account settings
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
                  <strong>Subscriptions</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Email
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Memberships & Subscriptions
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
                  <strong>Manage your data</strong>
                </p>
              </div>
              <div>
                <ul>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Request your data
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Close Your Amazon Account
                    </a>
                  </li>
                  <li style={{ color: '#007185' }}>
                    <a href="#" className="hover:text-red-600 hover:underline">
                      Privacy Notice
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
