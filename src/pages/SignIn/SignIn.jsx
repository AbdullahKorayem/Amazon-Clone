import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import NeedHelp from './NeedHelp';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithE_PW } from '../../firestore/firestore';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
export default function SignIn() {
  document.title = 'Amazon : Sign In';
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const stateUser = useSelector(state => state.User.User);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleWorking = () => {
    setWorking(!working);
  };

  const onSubmit = async data => {
    if (data.emailOrPhone) {
      try {
        const userCredential = await signInWithE_PW(
          data.emailOrPhone,
          data.Password
        );
        toast.success('Sign In Successful');
        navigate('/');
        localStorage.setItem('UserUid', userCredential.user.uid);
      } catch (error) {
        toast.error('incorrect email or password');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col items-center ">
          {/* Amazon Logo */}
          <Link to="/">
            <img
              src="amazon-icon/Amazon_logo_dark.webp"
              className="mt-5 w-28"
              alt="Amazon Logo"
            />
          </Link>

          {/* Form Container */}
          <div className="flex flex-col border border-slate border-0.5 rounded-md p-10 max-w-sm mt-8 w-full ">
            <h1 className="mb-5 text-2xl font-semibold">{t('sign_in')}</h1>
            {/* Email or Phone Input */}
            <label htmlFor="emailOrPhone" className="mb-2">
              {t('Email or mobile phone number')}
            </label>
            <input
              {...register('emailOrPhone', {
                required: 'Email or mobile phone number is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
                minLength: {
                  value: 5,
                  message:
                    'Email or mobile phone number must be at least 5 characters',
                },
              })}
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder={t('Email or mobile phone number')}
            />
            <Toaster position="top-center" richColors />
            {errors.emailOrPhone && (
              <p className="text-xs italic text-red-500">
                {errors.emailOrPhone.message}
              </p>
            )}

            {/* Password */}
            <div className=" relative">
              <label htmlFor="Password" className="mb-2 ">
                {t('Password')}
              </label>
              <div className=" cursor-pointer absolute end-3 top-10">
                {!show ? (
                  <FaEye onClick={() => setShow(true)} />
                ) : (
                  <FaEyeSlash onClick={() => setShow(false)} />
                )}
              </div>
              <input
                {...register('Password', {
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/,
                    message:
                      'Password must contain 8 characters and one special character',
                  },
                })}
                id="Password"
                name="Password"
                type={!show ? 'password' : 'text'}
                className="w-full px-2 py-1 mt-2 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
                placeholder={t('Password')}
              />
              {errors.Password && (
                <p className="text-xs italic text-red-500">
                  {errors.Password.message}
                </p>
              )}
            </div>
            <Link
              to="/reset"
              className="text-sm mb-3 text-end hover:underline hover:text-red-800 text-blue-700"
            >
              {t('forgot_password')}
            </Link>

            {/* Continue Button */}
            <button className="bg-[#ffd814] hover:bg-[#ffc300] px-20 border-none mb-4">
              {t('Continue')}
            </button>

            {/* Additional Options */}
            <div className="text-xs">
              <p className="text-xs font-200">
                {t('By continuing, you agree to')}
                <a
                  href="https://www.amazon.com/conditions"
                  target="_blank"
                  className="Links"
                >
                  {t('Conditions of Use')}
                </a>
                {t('and')}
                <a
                  href="https://www.amazon.com/privacy"
                  target="_blank"
                  className="Links"
                >
                  {t('Privacy Notice')}
                </a>
                .
              </p>

              {/* Need Help Section */}
              <NeedHelp working={working} toggleWorking={toggleWorking} />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center my-5">
          <p className="text-[#767676] text-sm mb-2">{t('new_to_amazon')}</p>
          <button
            onClick={() => {
              navigate('/register');
            }}
            type="button"
            className="p-1 shadow-lg w-64 bg-white text-sm hover:bg-[#f7fafa] rounded-md duration-300"
          >
            {t('Create Your Amazon Account')}
          </button>
        </section>
      </form>
    </>
  );
}
