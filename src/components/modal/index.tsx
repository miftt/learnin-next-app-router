"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter} from 'next/navigation';
import {Toaster, toast} from 'sonner'

import Input from '../Input';
import Label from '../Label';



interface LogRegProps {
  type: 'login' | 'register';
  searchParams: any;
  // Add any additional props needed for Login and Register components
  // For example:
  // fullname?: string;
  // email?: string;
  // password?: string;
}

const LogReg: React.FC<LogRegProps> = ({type, searchParams}) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(type === 'login' ? 'Logging in' : 'Registering');

  const callBackUrl = searchParams.callbackUrl || '/';
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevLoadingText) => {
        return prevLoadingText.includes('...') ? `${type === 'login' ? 'Logging in' : 'Registering'}` : `${prevLoadingText}.`;
      });
    }, 500); // Set interval to 1000ms

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [type]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callBackUrl
      })
      if (!res?.error) {
        setIsLoading(false);
        push(callBackUrl);
      } else {
        setIsLoading(false);
        if (res.status === 401) {
          e.target.reset();
          toast.error('Wrong email or password');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch('api/auth/register',{
      method: 'POST',
      body: JSON.stringify({
        fullname: e.currentTarget.fullname.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
      })
    })
    if(res.status === 200){
      e.target.reset();
      setIsLoading(false);
      toast.success("Register success");
      push("/login");
    }else {
      toast.error("Email has already been exist");
      setIsLoading(false)
    }
  }
  return (
    <div className="
    h-screen
    w-100 
    flex 
    justify-center 
    items-center
    flex-col
    "
    >
    <Toaster position="top-center" richColors/>
      <div className="
        bg-white 
        shadow-md 
        border 
        border-gray-200 
        rounded-lg 
        w-96
        p-4 sm:p-6 
        lg:p-8 
        dark:bg-gray-800 
        dark:border-gray-700
        "
      >
        <form className="space-y-6" onSubmit={(e) => {type === "login" ? handleLogin(e) : handleRegister(e)}}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {type === 'login' ? 'Login' : 'Sign up'} 
            {" "} to our platform
          </h3>
          {type === 'register' && (
            <div>
              <Label htmlFor="fullname">
                Your fullname
              </Label>
              <Input type="text" name="fullname" id="fullname" placeholder="John Konto" required/>
            </div>
          )}
          <div>
            <Label htmlFor="email">
              Your email
            </Label>
            <Input type="email" name="email" id="email" placeholder="example@business.com" required />
          </div>
          <div>
           <Label htmlFor="password">
             Your password
           </Label>
            <Input type="password" name="password" id="password" placeholder="••••••••••••••••" required />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="
              w-full 
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
              focus:ring-4 
              focus:ring-blue-300 
              font-medium 
              rounded-lg 
              text-sm 
              px-5 
              py-2.5 
              text-center 
              dark:bg-blue-600 
              dark:hover:bg-blue-700 
              dark:focus:ring-blue-800
              "
          >
            {isLoading ? loadingText : 'Loading...' && type === 'login' ? 'Login' : 'Sign Up'}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {type === 'login' ? 'Not registered yet?' : 'Have registered?'}{' '}
            <Link
              href={type === 'login' ? '/register' : '/login'}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              {type === 'login' ? 'Sign up here' : 'Sign in here'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogReg;
