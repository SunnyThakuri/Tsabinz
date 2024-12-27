"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "../components/forms/loginForm";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { googleSignupUser } from '../api';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const responseGoogle = async (response) => {
    try {
      const id_token = response.credential;
      const { data } = await googleSignupUser(id_token);

      if (data?.token) {
        Cookies.set("user-token", data.token,{priority:'High'});
        toast.success("Signed in successfully");
        router.push("/");
      } else {
        toast.error("Login failed: Missing token");
      }
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div className="flex">
      <div className="md:w-[56%] w-full">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "1024px",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/videos/login.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="md:w-[44%] w-full py-[119px] px-4 lg:px-[98px] absolute md:relative">
        <div className="flex flex-col items-center text-center gap-12">
          <div>
            <h1 className="text-[22px]">LOGIN</h1>
            <p className="text-[14px] text-[#717171] mt-3">
              Please enter your e-mail and password:
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center border border-[#D3D3D3] w-full h-12 cursor-pointer">
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
              <GoogleLogin 
                onSuccess={responseGoogle} 
                onError={() => console.log('Login failed')} 
              />
            </GoogleOAuthProvider>
          </div>
          <div className="w-full relative">
            <div className="border-b-[1px] border-[#D3D3D3]"></div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white text-[#A0A0A0]">
              or
            </p>
          </div>
          <LoginForm/>
          
          <p><span className="text-[#717171]">Don&apos;t have an account?</span><Link href={"/register"} className="cursor-pointer"> Create one</Link></p>
        </div>

        <Link href={"/"} className="absolute left-[45px] top-[38px]">
            <div className="p-[10px]" style={{boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)"}}>
                <Image src="/images/back-arrow.svg" alt="logo" width={18} height={18} />
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
