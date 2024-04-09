import React, { useState } from 'react';
import NeedHelp from '../SignIn/NeedHelp';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { createUSer, db } from '../../firestore/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function Register() {
  document.title = 'Amazon : Sign Up';
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [working, setWorking] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [show, setShow] = useState(false);

  const toggleWorking = () => {
    setWorking(!working);
  };

  const onSubmit = async data => {
    try {
      const userCredential = await createUSer(
        data.emailOrPhone,
        data.ConfirmPassword
      );
      toast.success('Sign Up Successful');

      await setDoc(doc(db, 'Users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        UserName: data.UserName,
        UserInformation: [],
        PaymentCards: [],
      });

      navigate('/login');
    } catch (error) {
      if (error.code) {
        const errorMessage = handleFirebaseError(error.code);
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  function handleFirebaseError(errorCode) {
    switch (errorCode) {
      case 'auth/weak-password':
        return 'Password is too weak. Please choose a stronger password.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account.';
      default:
        return 'An unknown error occurred.';
    }
  }

  const PasswordValidation = ConfirmPassword => {
    const firstPass = getValues('Password');
    return firstPass === ConfirmPassword;
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
            <h1 className="mb-5 text-2xl font-semibold">
              {t('create_account')}
            </h1>
            {/* UserName */}
            <label htmlFor="UserName" className="mb-2">
              {t('your_name')}
            </label>
            <input
              {...register('UserName', {
                required: true,
                pattern: /([a-zA-Z]+\s*)+/,
                minLength: {
                  value: 5,
                },
              })}
              id="UserName"
              name="UserName"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder="Your Name" // Corrected placeholder
            />
            {/* Error messages for UserName corrected according to validation rules */}
            {errors.UserName && errors.UserName.type === 'required' && (
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            )}
            {errors.UserName && errors.UserName.type === 'minLength' && (
              <p className="text-xs italic text-red-500">
                The minimum length is 5.
              </p>
            )}
            <Toaster position="top-center" richColors />

            {/* Email or Phone Input */}
            <label htmlFor="emailOrPhone" className="mb-2">
              {t('Email or mobile phone number')}
            </label>
            <input
              {...register('emailOrPhone', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder={t('Email or mobile phone number')}
            />
            {errors.emailOrPhone && errors.emailOrPhone.type === 'required' && (
              <p className="text-xs italic text-red-500">This is Required</p>
            )}
            {errors.emailOrPhone && errors.emailOrPhone.type === 'pattern' && (
              <p className="text-xs italic text-red-500">
                It Must contains @ character ....
              </p>
            )}

            {/*  */}
            <div className="relative">
              <label htmlFor="Password" className="mb-2">
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
                  required: true,
                  pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/,
                })}
                id="Password"
                name="Password"
                type={!show ? 'password' : 'text'}
                className="w-full px-2 mt-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
                placeholder={t('Password')}
              />
              {errors.emailOrPhone &&
                errors.emailOrPhone.type === 'required' && (
                  <p className="text-xs italic text-red-500">
                    This is required.
                  </p>
                )}
              {errors.emailOrPhone &&
                errors.emailOrPhone.type === 'pattern' && (
                  <p className="text-xs italic text-red-500">
                    Please enter a valid email or mobile phone number.
                  </p>
                )}
            </div>
            {/* ReEnter Password */}
            <div className="relative">
              <label htmlFor="ConfirmPassword" className="mb-2">
                {t('Re-Enter Password')}
              </label>
              <div className=" cursor-pointer absolute end-3 top-10">
                {!show ? (
                  <FaEye onClick={() => setShow(true)} />
                ) : (
                  <FaEyeSlash onClick={() => setShow(false)} />
                )}
              </div>
              <input
                {...register('ConfirmPassword', {
                  required: true,
                  validate: PasswordValidation,
                })}
                id="ConfirmPassword"
                name="ConfirmPassword"
                type={!show ? 'password' : 'text'}
                className="w-full px-2 mt-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
                placeholder={t('Re-Enter Password')}
              />
              {errors.ConfirmPassword &&
                errors.ConfirmPassword.type === 'required' && (
                  <p className="text-xs italic text-red-500">
                    Please fill out this field.
                  </p>
                )}
              {errors.ConfirmPassword &&
                errors.ConfirmPassword.type === 'validate' && (
                  <p className="text-xs italic text-red-500">
                    Passwords must match.
                  </p>
                )}
            </div>
            <button
              className="bg-[#ffd814] hover:bg-[#ffc300] px-20 border-none mb-4"
              type="submit"
              disabled={working}
            >
              {t('Continue')}
            </button>
            <div className="text-sm mb-3">
              already have an account
              <Link
                to="/login"
                className="ms-2 text-blue-700 hover:underline hover:text-red-800"
              >
                Sign In
              </Link>
            </div>
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
      </form>
    </>
  );
}
