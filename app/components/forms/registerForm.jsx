"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signup } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email format").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm Password is required")
});

const RegisterForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const togglePassword = () => { setShowPassword((prev) => !prev); }
    const togglePasswordConfirm = () => { setShowPasswordConfirm((prev) => !prev); }

    const onSubmit = async (data) => {
        try {
            const response = await signup(data);
            toast.success(response.message);
            router.push('/login')
            console.log(response.message);
        } catch (err) {
            toast.error(err.response?.data?.message || 'Something went wrong');
            console.log("Error:", err);
        }
    };

    return (
        <div className='w-full'>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full min-w-full">
                <input
                    name='fullName'
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName")}
                    onBlur={() => trigger('fullName')}
                    className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
                    required
                />
                {errors.fullName && <p className="w-max text-xs text-red-600 -translate-y-3 text-left ">{errors.fullName.message}</p>}
                
                <input
                    name='email'
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                    className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
                />
                {errors.email && <p className="w-full text-xs text-red-600 -translate-y-3 text-left ">{errors.email.message}</p>}
                
                <div className='relative'>
                    <input
                        name='password'
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("password")}
                        onBlur={() => trigger('email')}
                        className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
                    />
                    <Image
                        src={showPassword ? "/images/eye-open.svg" : "/images/eye-close.svg"}
                        alt="email"
                        width={20}
                        height={20}
                        onClick={togglePassword}
                        onBlur={() => trigger('password')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                    {errors.password && <p className="w-full text-xs text-red-600 -translate-y-3 text-left ">{errors.password.message}</p>}
                </div>
                <div className='relative'>
                    <input
                        name='confirmPassword'
                        type={showPasswordConfirm ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...register("confirmPassword")}
                        onBlur={() => trigger('confirmPassword')}
                        className="border border-[#D3D3D3] w-full h-[54px] pl-4 mb-3"
                    />
                    <Image
                        src={showPasswordConfirm ? "/images/eye-open.svg" : "/images/eye-close.svg"}
                        alt="email"
                        width={20}
                        height={20}
                        onClick={togglePasswordConfirm}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                    {errors.confirmPassword && <p className="w-full text-xs text-red-600 -translate-y-3 text-left ">{errors.confirmPassword.message}</p>}
                </div>
                <p className="text-[#5C5C5C] text-end">Forgot password?</p>
                <button type='submit' className="w-full shop-btn-dark-flat mt-6">CREATE AN ACCOUNT</button>
            </form>
        </div>
    )
}

export default RegisterForm;
