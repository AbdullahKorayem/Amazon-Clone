import React, { useState } from 'react';
import NeedHelp from '../SignIn/NeedHelp';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

export default function CreateAcc() {


    const [working, setWorking] = useState(false);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const toggleWorking = () => {
        setWorking(!working);
    };
    const onSubmit = (data) => {
   
        if (data != 0) {
            toast.success("Sign In Successful")
            
        }
    }

    const PasswordValidation = (ConfirmPassword) => {
        console.log(ConfirmPassword)
        const firstPass = getValues('Password');
        console.log(firstPass)

        if (firstPass !== ConfirmPassword) {
            return false

        } else {
            return true;

        }
    }

    return (
        <>






            <form onSubmit={handleSubmit(onSubmit)} >

                <section className='flex flex-col items-center shadow-md'>
                    {/* Amazon Logo */}
                    <img src="/Amazon_logo.svg.webp" className='w-28 mt-5' alt="Amazon Logo" />

                    {/* Form Container */}

                    <div className='flex flex-col border border-slate border-0.5 rounded-md p-10 max-w-xs mt-8 w-full '>
                        <h1 className='font-semibold  text-2xl  mb-5'>Create Account</h1>
                        {/* UserName */}
                        <label htmlFor="UserName" className='mb-2'>Your Name</label>
                        <input {...register("UserName",
                            {
                                required: true,
                                pattern: /([a-zA-Z]+\s*)+/,
                                minLength: {
                                    value: 5,
                                }
                            })}
                            id="UserName"
                            name="UserName"
                            type="text"
                            className='border border-slate-500 rounded-md outline-none focus:ring-blue-700 focus:ring-1 px-2 py-1 mb-4 w-full'
                            placeholder='Email or mobile phone number' />
                        {errors.UserName && errors.UserName.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                        {errors.UserName && errors.UserName.type === 'minLength' && (<p className="text-red-500 text-xs italic">The Min Length is 10....</p>)}

                        {/* Email or Phone Input */}

                        <label htmlFor="emailOrPhone" className='mb-2'>Email or mobile phone number</label>
                        <input {...register("emailOrPhone", { required: true, pattern: /^\S+@\S+$/i })} id="emailOrPhone" name="emailOrPhone" type="text" className='border border-slate-500 rounded-md outline-none focus:ring-blue-700 focus:ring-1 px-2 py-1 mb-4 w-full' placeholder='Email or mobile phone number' />
                        {errors.emailOrPhone && errors.emailOrPhone.type === 'required' && (<p className="text-red-500 text-xs italic">This is Required</p>)}
                        {errors.emailOrPhone && errors.emailOrPhone.type === 'pattern' && (<p className="text-red-500 text-xs italic">It Must contains @ character ....</p>)}



                        {/*  */}


                        <label htmlFor="Password" className='mb-2'>Password</label>
                        <input {...register("Password", { required: true, pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/ })} id="Password" name="Password" type="password" className='border border-slate-500 rounded-md outline-none focus:ring-blue-700 focus:ring-1 px-2 py-1 mb-4 w-full' placeholder='Password' />
                        {errors.Password && errors.Password.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                        {errors.Password && errors.Password.type === 'validate' && (<p className="text-red-500 text-xs italic">Password Must Match Contains 8 Characters And One Special Character</p>)}


                        {/* ReEnter Password */}


                        <label htmlFor="ConfirmPassword" className='mb-2'> Re-Enter Password</label>
                        <input {...register("ConfirmPassword",
                            {
                                required: true
                                , validate: PasswordValidation,

                            })}
                            id="ConfirmPassword"
                            name="ConfirmPassword"
                            type="password"
                            className='border border-slate-500 rounded-md outline-none focus:ring-blue-700 focus:ring-1 px-2 py-1 mb-4 w-full'
                            placeholder='Password' />
                        {errors.ConfirmPassword && errors.ConfirmPassword.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                        {errors.ConfirmPassword && errors.ConfirmPassword.type === 'validate' && (<p className="text-red-500 text-xs italic">Password Must Match The Password U Provide</p>)}

                        <button className='btn'>Continue</button>

                        {/* Additional Options */}
                        <div className='text-xs'>
                            <p className='font-200 text-xs'>By continuing, you agree to Amazon's <a href="https://www.amazon.com/conditions" target="_blank" className='Links'>Conditions of Use</a> and <a href="https://www.amazon.com/privacy" target="_blank" className='Links'>Privacy Notice</a>.</p>

                            {/* Need Help Section */}
                            <NeedHelp working={working} toggleWorking={toggleWorking} />

                            <hr className='my-4' />

                            {/* Buying for Work Section */}
                            <div>
                                <h5 className=' font-semibold'>Buying for work?</h5>
                                <p><a href="https://www.amazon.com/business" target="_blank" className='Links'>Shop on Amazon Business</a></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col items-center mt-5'>
                    <p className=' text-[#767676] text-sm mb-2'>New to Amazon ?</p>
                    <button type='button' className=' p-1 shadow-lg w-64 bg-white text-sm hover:bg-[#f7fafa] rounded-md duration-300'>Create Your Amazon Account</button>
                    <Toaster position='top-center' richColors />
                </section>
            </form >




        </>
    )
}

