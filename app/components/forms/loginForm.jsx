"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login as loginUser } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const LoginForm = () => {
    const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'  
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      toast.success(response.message);
      console.log(response.message);
      Cookie.set('user-token',response.token,{priority:'High'})
      router.push('/')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
      console.log("Error:", err);
    }
  };

  return (
    <div className='w-full'>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <input
          name='email'
          type="text"
          placeholder="Email"
          {...register("email")}
          onBlur={() => trigger('email')}
          className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
        />
        {errors.email && <p className="w-full text-xs text-red-600 -translate-y-3 text-left ">{errors.email.message}</p>}

        <div className='relative'>
          <input
            name='password'
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            onBlur={() => trigger('password')}
            className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
          />
          <Image
            src={showPassword ? "/images/eye-open.svg" : "/images/eye-close.svg"}
            alt="toggle password visibility"
            width={20}
            height={20}
            onClick={togglePassword}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
          {errors.password && <p className="w-full text-xs text-red-600 -translate-y-3 text-left ">{errors.password.message}</p>}
        </div>

        <p className="text-[#5C5C5C] text-end">Forgot password?</p>
        <button type='submit' className="w-full shop-btn-dark-flat mt-6">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginForm;
