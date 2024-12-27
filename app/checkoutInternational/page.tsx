"use client"
import React, { useState } from "react";
import Image from "next/image";
import DeliveryDetail from '../components/checkoutInternational/DeliveryDetail'
import Payment from '../components/checkoutInternational/payment'


const CheckoutInternational = () =>{

    const [paymentIsOpen,setPaymentIsOpen]= useState(false)
   
    return(
        <>
            <div className=" flex flex-col lg:flex-row gap-12 mb-12 md:mb-28">
               {
                paymentIsOpen ? ( <Payment /> ): ( <DeliveryDetail onClose={() =>setPaymentIsOpen(true)}/>)
               }
                
                
                {/* Right side */}
                <div className=" lg:w-[570px] bg-[#F1F1F1] p-4 md:p-8 rounded-lg my-12 h-fit">
                    {/* products 1*/}
                    <div className=" flex flex-col gap-6">
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center">
                                <div className=" w-20 h-24">
                                    <Image src="/images/y2k-1.jpg" width={300} height={400} alt="image" />
                                </div>
                                <div className="flex  flex-col">
                                    <p className="text-sm md:text-base text-wrap">Y2K Cosmic Dream Wrap Top</p>
                                    <p className=" text-sm text-[#6C6B6B]">xs</p> 
                                </div>
                            </div>

                            <div className="flex items-center text-sm md:text-base">
                                <p>Nrs. 2310</p>
                            </div>

                        </div>
                    </div>

                    {/* products 2*/}
                    <div className=" flex flex-col gap-6 mt-6">
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center">
                                <div className=" w-20 h-24">
                                    <Image src="/images/y2k-1.jpg" width={300} height={400} alt="image" />
                                </div>
                                <div className="flex  flex-col">
                                    <p className="text-sm md:text-base text-wrap" >Zip-Zap Pant</p>
                                    <p className=" text-sm text-[#6C6B6B]">L</p> 
                                </div>
                            </div>
                            <div className="flex items-center text-sm md:text-base">
                                <p>Nrs. 2310</p>
                            </div>
                        </div>
                    </div>
                    {/* horizontal line */}
                    <div className="border-[1px] mt-8   w-[90%]"></div> 
                    {/* Total details */}
                    <div className="flex flex-col gap-4 pt-8">
                        <div className=" w-full flex justify-between">
                            <p>Subtotal</p>
                            <p>NRs. 5000</p>
                        </div>
                        <div className="  w-full flex justify-between">
                            <p>Delivery</p>
                            <p>NRs. 200</p>
                        </div>
                        <div className="  w-full flex justify-between">
                            <p>Tax</p>
                            <p>NRs. 115</p>
                        </div>
                    </div>

                    {/* horizontal line */}
                    <div className="border-[1px] my-8  w-[90%]"></div>

                    <div className="w-full flex justify-between text-lg font-bold">
                        <p>Total</p>
                        <p>NRs. 5250</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CheckoutInternational