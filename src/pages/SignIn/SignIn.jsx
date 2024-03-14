import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import NeedHelp from './NeedHelp';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleWorking = () => {
    setWorking(!working);
  };

  const onSubmit = data => {
    if (data.emailOrPhone != 0) {
      toast.success('Sign In Successful');
      console.log(data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col items-center ">
          {/* Amazon Logo */}
          <img
            src="amazon-icon/Amazon_logo_dark.webp"
            className="w-28 mt-5"
            alt="Amazon Logo"
          />

          {/* Form Container */}
          <div className="flex flex-col border border-slate border-0.5 rounded-md p-10 max-w-xs mt-8 w-full ">
            <h1 className="font-semibold  text-2xl  mb-5">Sign In</h1>
            {/* Email or Phone Input */}
            <label htmlFor="emailOrPhone" className="mb-2">
              Email or mobile phone number
            </label>
            <input
              {...register('emailOrPhone', {
                required: true,
                pattern: /^\S+@\S+$/i,
                minLength: {
                  value: 5,
                  message:
                    'Email or mobile phone number must be at least 5 characters',
                },
              })}
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              className="border border-slate-500 rounded-md outline-none focus:ring-blue-700 focus:ring-1 px-2 py-1 mb-4 w-full"
              placeholder="Email or mobile phone number"
            />
            <Toaster position="top-center" richColors />
            {/* Continue Button */}
            <button className="bg-[#ffd814]   hover:bg-[#ffc300] px-20 border-none mb-4">
              Continue
            </button>

            {/* Additional Options */}
            <div className="text-xs">
              <p className="font-200 text-xs">
                By continuing, you agree to Amazon's{' '}
                <a
                  href="https://www.amazon.com/conditions"
                  target="_blank"
                  className="Links"
                >
                  Conditions of Use
                </a>{' '}
                and{' '}
                <a
                  href="https://www.amazon.com/privacy"
                  target="_blank"
                  className="Links"
                >
                  Privacy Notice
                </a>
                .
              </p>

              {/* Need Help Section */}
              <NeedHelp working={working} toggleWorking={toggleWorking} />

              <hr className="my-4" />

              {/* Buying for Work Section */}
              <div>
                <h5 className=" font-semibold">Buying for work?</h5>
                <p>
                  <a
                    href="https://www.amazon.com/business"
                    target="_blank"
                    className="Links"
                  >
                    Shop on Amazon Business
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-5">
          <p className=" text-[#767676] text-sm mb-2">New to Amazon ?</p>
          <button
            onClick={() => {
              navigate('/register');
            }}
            type="button"
            className=" p-1 shadow-lg w-64 bg-white text-sm hover:bg-[#f7fafa] rounded-md duration-300
            "
          >
            Create Your Amazon Account
          </button>
        </section>
      </form>
    </>
  );
}
