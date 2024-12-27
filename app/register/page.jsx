"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import RegisterForm from "../components/forms/registerForm"

const Register = () => {

  return (
    <div className="flex flex-col md:flex-row">
      {/* left */}
     
      <div className="w-full md:w-[56%] relative">
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

      {/* right */}

        <div className="w-full md:w-[44%] py-[119px] px-4 lg:px-[98px] absolute md:relative">
          <div className="flex flex-col items-center text-center gap-12">
            <div>
              <h1 className="text-[22px]">Register</h1>
              <p className="text-[14px] text-[#717171] mt-3">
                Please enter your e-mail and password:
              </p>
            </div>
            <div className="flex gap-3 justify-center items-center border border-[#D3D3D3] w-full h-12 cursor-pointer">
              <div>
                <Image
                  src="/images/google.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
              </div>
              <p>CONTINUE WITH GOOGLE</p>
            </div>
            <div className="w-full relative">
              <div className="border-b-[1px] border-[#D3D3D3]"></div>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white text-[#A0A0A0]">
                or
              </p>
            </div>
            <RegisterForm/>
            <p><span className="text-[#717171]">Already have an account?</span> <Link href="/login"> Login</Link></p>
          </div>

          <Link href={"/"} className="absolute left-[45px] top-[38px]">
              <div className="p-[10px]" style={{boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)"}}>
                  <Image src="/images/back-arrow.svg" alt="logo" width={18} height={18} />
              </div>
          </Link>
        </div>
      </div>
  )
}

export default Register