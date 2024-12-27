import React, { useState } from "react";
import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Payment = () =>{

    return(
        <div className="w-full lg:w-1/2 pl-4 pr-4 md:pr-0 lg:pl-16 pt-5 lg:pt-12 ">
            <div className="w-full bg-[#F1F1F1] flex justify-between p-4 rounded-lg text-[#767676]">
                <p>Logged in as johndoe123@gmail.com</p>
                <p className=" underline cursor-pointer">Logout</p>
            </div>
            <div className="mt-8 flex">
                <div className="md:flex flex-col  items-center hidden  ">
                    <p className=" text-[#B3B3B3] text-6xl -mt-4">•</p>
                    <div className="h-44  w-0.5 bg-[#B3B3B3] "></div>
                    <p className="text-3xl text-[#B3B3B3]">○</p>
                </div>

                <div className="w-full pl-4">
                    <div className="flex justify-between">
                        <p className="text-xl text-[#B3B3B3] ">Delivery Details</p>
                        <p className=" underline text-sm cursor-pointer">Change</p>
                    </div>
                    <div className="text-[#767676] my-8">
                        <p>John Doe</p>
                        <p>johndoe123@gmail.com</p>
                        <p>123 Main Street, Springfield, CA 94103, United States</p>
                        <p>(309) 555-0173</p>
                    </div>

                    {/* horizontal line */}
                    <div className="border-[1px]  w-[90%]"></div>

                    <p className=" text-[#B3B3B3] my-8  text-xl">Payment</p>

                    <form className="border-[1px]">

                        <div className="flex flex-col">
                            <div className="border-[1px] border-black px-4 py-4  ">
                                <div className="flex justify-between">
                                    <p>Credit Card</p>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <Image src="/images/checkout/visa.svg" alt="visa" width={50} height={50} />
                                        </div>
                                        <div>
                                            <Image src="/images/checkout/master.svg" alt="master" width={50} height={50} />
                                        </div>
                                        <div>
                                            <Image src="/images/checkout/discover.svg" alt="discover" width={50} height={50} />
                                        </div>
                                        <div>
                                            <Image src="/images/checkout/3.svg" alt="3+" width={50} height={50} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="p-4">
                            
                                <input className=" mt-3 border-[1px] w-full px-4 py-3 inline-flex justify-between" placeholder="Card Number" />
                                <div className="flex flex-col md:flex-row gap-4 my-2">
                                    <input className="mt-3 w-full border-[1px] px-4 py-3"  placeholder="Expiration date(MM/YY)"/>
                                    <input className="mt-3 w-full border-[1px] px-4 py-3" placeholder="Security code"/>
                                </div>
                                <input className="mt-3 w-full border-[1px] px-4 py-3" placeholder="Name on Card"/>
                            </div>
                            <div className=" flex flex-col items-center gap-4 pb-4">
                                <button className=" shop-btn-dark w-60" >Pay</button>
                            
                            </div>
                            
                        
                        
                        
                    </form>

                </div>
            </div>
                
        </div>
    )
}

export default Payment;