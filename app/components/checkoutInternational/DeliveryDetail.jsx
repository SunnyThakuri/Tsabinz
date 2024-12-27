import React from "react";

const DeliveryDetail = ({onClose}) =>{
    return(
        <div className="w-full lg:w-1/2 pl-4 pr-4 lg:pr-0 lg:pl-16 pt-5 lg:pt-12 ">
            <div className="w-full bg-[#F1F1F1] flex justify-between p-4 rounded-lg text-[#767676]">
                <p>Logged in as johndoe123@gmail.com</p>
                <p className=" underline cursor-pointer">Logout</p>
            </div>
            <div className="mt-8 flex">
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-black text-6xl -mt-3">•</p>
                    <div className="h-full  w-0.5 bg-[#B3B3B3] "></div>
                    <p className="text-3xl text-[#B3B3B3]">○</p>
                </div>
                <div className="w-full lg:pl-4">
                    <h1 className=" text-[22px] mb-4  ">Delivery Details</h1>
                    <form className="text-[#767676] flex flex-col gap-6 ">
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> First Name*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> Last Name*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> Phone*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> Country/Region*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs">Street Address*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> city*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> State / Province*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> Zip / Postal code*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className=" text-xs"> Alternate Number*</p>
                            <input className=" w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg"/> 
                        </div>
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4" />
                            <p className=" text-black">Set as default</p>
                        </div>
                        <div className=" flex justify-center p-4">
                            <button className=" shop-btn-dark" onClick={onClose} >Save & Continue</button>
                        </div>
                    </form>
                    {/* horizontal line */}
                    <div className="border-[1px] mt-8  w-[90%]"></div> 
                    {/* <p className=" text-[#B3B3B3] my-8  text-xl">Payment</p> */}
                </div>
                </div>
            
        </div>
    )
}

export default DeliveryDetail