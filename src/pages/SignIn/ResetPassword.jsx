import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { resetYourPassword } from '../../firestore/firestore';

function ResetPassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const localEmail = sessionStorage.getItem('email');
  const [email, setEmail] = useState(localEmail || '');
  const reg = new RegExp('^[a-zA-Z0-9._%+-]{10,}@[^.]{5,}.[a-zA-Z]{2,}$');
  reg.test(email);
  const onSubmit = async e => {
    e.preventDefault();
    if (reg.test(email)) {
      try {
        const res = await resetYourPassword(email);
        console.log(email);
        toast.success('email sent Successful');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } catch (error) {
        toast.error('incorrect email or password');
      }
    } else {
      toast.error('please enter vaild email');
    }
  };
  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <section className="flex flex-col items-center">
          {/* Amazon Logo */}
          <Link to="/">
            <img
              src="amazon-icon/Amazon_logo_dark.webp"
              className="mt-5 w-28"
              alt="Amazon Logo"
            />
          </Link>

          {/* Form Container */}
          <div className="flex flex-col border border-slate border-0.5 rounded-md p-10  max-w-sm mt-8 w-full ">
            <h1 className="mb-2 text-2xl font-semibold">
              {t('password_assistance')}
            </h1>
            <div className="mb-5 text-sm">{t('reset_description')}</div>
            {/* Email or Phone Input */}
            <label htmlFor="emailOrPhone" className="mb-2">
              {t('Email or mobile phone number')}
            </label>
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="w-full px-2 py-1 mb-4 border rounded-md outline-none border-slate-500 focus:ring-blue-700 focus:ring-1"
              placeholder={t('Email or mobile phone number')}
            />
            <Toaster position="top-center" richColors />
            {/* Continue Button */}
            <button className="bg-[#ffd814] hover:bg-[#ffc300] px-20 border-none mb-4">
              {t('Continue')}
            </button>
          </div>
          <div className="flex flex-col max-w-sm mt-4 w-full ">
            <div className="font-semibold">{t('reset_page_qes')}</div>
            {t('reset_page_description')}
          </div>
        </section>
      </form>
    </>
  );
}

export default ResetPassword;
