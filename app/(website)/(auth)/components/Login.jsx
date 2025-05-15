"use client"
import { Eye, EyeSlash, Key, Sms } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const LoginForm = () => {
    const [hide, setHide] = useState(true);
    const eyeClass = "cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 stroke-gray-400";

    return (
        <form className="mx-auto w-[33.5rem] flex flex-col justify-start">
            <div className="flex flex-col">
                <h2 className='text-4xl text-red-700 font-bold'>Welcome to SeilaMunty !</h2>
                <h1 className='text-2xl font-bold pt-2'>Login</h1>
            </div>
            <fieldset className="flex flex-col gap-8 mt-5 relative z-10">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="font-medium">Email Address</label>
                    <div className="relative w-full">
                        <Sms size={18} className="absolute top-1/2 left-2 -translate-y-1/2 stroke-gray-400" />
                        <input type="text" name="email" id="email" placeholder="Email Address" className="bg-white w-full px-9 py-2.5 outline-0 border rounded-md border-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <div className="relative w-full">
                        <Key size={18} className="absolute top-1/2 left-2 -translate-y-1/2 stroke-gray-400" />
                        {hide ?
                            (
                                <EyeSlash onClick={() => setHide(false)} size={18} className={eyeClass} />
                            ) : (
                                <Eye onClick={() => setHide(true)} size={18} className={eyeClass} />
                            )
                        }
                        <input type={hide ? "password" : "text"} name="password" id="password" placeholder="Password" className="bg-white w-full px-9 py-2.5 outline-0 border rounded-md border-gray-400" />
                    </div>
                    <Link href={"#"} className="self-end text-red-700 hover:underline">Forgot password?</Link>
                </div>
                <button type="submit" className="py-2.5 px-4 text-white text-center rounded-md bg-red-700 cursor-pointer">Login</button>
                <div className="flex flex-col w-full gap-5">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-900">Don't have an account?</span>
                        <Link href={"#"} className="text-red-700 hover:underline">Register</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-center">Or continue with</p>
                        <button type="button" className="flex items-center justify-center gap-2 bg-white rounded-md border border-gray-400 px-4 py-2.5">
                            <Image src={"/auth/google.png"} width={29} height={23} alt="Google" />
                            <span className="font-medium text-gray-900">Sign up with Google</span>
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}
