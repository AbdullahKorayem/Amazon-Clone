import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import NeedHelp from './NeedHelp';
import { useNavigate } from 'react-router-dom';
import { signInWithE_PW } from '../../firestore/firestore';
import { useDispatch, useSelector } from 'react-redux';
// import { ChangeUser } from '../../redux/slices/User';
export default function SignIn() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);

  
  const stateUser = useSelector((state) => state.User.User);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleWorking = () => {
    setWorking(!working);
  };

  const onSubmit = async (data) => {
    if (data.emailOrPhone) {
      try {
        const userCredential = await signInWithE_PW(data.emailOrPhone, data.Password);
        toast.success('Sign In Successful');
        navigate('/');
        // console.log(userCredential.user.uid);
   
        sessionStorage.setItem('UserUid', userCredential.user.uid);
      } catch (error) {
        if (error.code) {
          const errorMessage = handleFirebaseError(error.code);
          toast.error(errorMessage);
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col items-center">
          {/* Amazon Logo */}
          <img src="amazon-icon/Amazon_logo_dark.webp" className="mt-5 w-28" alt="Amazon Logo" />

          {/* Form Container */}
          <div className="flex flex-col border border-slate border-0.5 rounded-md p-10 max-w-xs mt-8 w-full ">
            <h1 className="mb-5 text-2xl font-semibold">Sign In</h1>
            {/* Email or Phone Input */}
            <label htmlFor="emailOrPhone" className="mb-2">
              Email or mobile phone number
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
                  message: 'Email or mobile phone number must be at least 5 characters',
                },
              })}
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Email or mobile phone number"
            />
            <Toaster position="top-center" richColors />
            {errors.emailOrPhone && <p className="text-xs italic text-red-500">{errors.emailOrPhone.message}</p>}

            {/* Password */}
            <label htmlFor="Password" className="mb-2">
              Password
            </label>
            <input
              {...register('Password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/,
                  message: 'Password must contain 8 characters and one special character',
                },
              })}
              id="Password"
              name="Password"
              type="password"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Password"
            />
            {errors.Password && <p className="text-xs italic text-red-500">{errors.Password.message}</p>}

            {/* Continue Button */}
            <button className="bg-[#ffd814] hover:bg-[#ffc300] px-20 border-none mb-4">Continue</button>

            {/* Additional Options */}
            <div className="text-xs">
              <p className="text-xs font-200">
                By continuing, you agree to Amazon's{' '}
                <a href="https://www.amazon.com/conditions" target="_blank" className="Links">
                  Conditions of Use
                </a>{' '}
                and{' '}
                <a href="https://www.amazon.com/privacy" target="_blank" className="Links">
                  Privacy Notice
                </a>
                .
              </p>

              {/* Need Help Section */}
              <NeedHelp working={working} toggleWorking={toggleWorking} />

              <hr className="my-4" />

              {/* Buying for Work Section */}
              <div>
                <h5 className="font-semibold ">Buying for work?</h5>
                <p>
                  <a href="https://www.amazon.com/business" target="_blank" className="Links">
                    Shop on Amazon Business
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-5">
          <p className="text-[#767676] text-sm mb-2">New to Amazon ?</p>
          <button
            onClick={() => {
              navigate('/register');
            }}
            type="button"
            className="p-1 shadow-lg w-64 bg-white text-sm hover:bg-[#f7fafa] rounded-md duration-300"
          >
            Create Your Amazon Account
          </button>
        </section>
      </form>
    </>
  );
}
