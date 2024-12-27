import React, { useEffect, useState } from "react";
import { getProfile } from "../../api";
import CheckOutForm from "../forms/checkoutForm";

const DeliveryDetail = ({ onClose, onSubmit }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUserData(response.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="w-full lg:w-1/2 pl-4 pr-4 lg:pr-0 lg:pl-16 pt-5 lg:pt-12 ">
      <div className="w-full bg-[#F1F1F1] flex justify-between p-4 rounded-lg text-[#767676]">
        <p>Logged in as {userData.email}</p>
        <p className="underline cursor-pointer">Logout</p>
      </div>
      <div className="mt-8 flex">
        <div className="md:flex flex-col items-center hidden">
          <p className="text-black text-6xl -mt-3">•</p>
          <div className="h-[89%] w-0.5 bg-[#B3B3B3] "></div>
          <p className="text-3xl text-[#B3B3B3]">○</p>
        </div>
        <div className="w-full md:pl-4">
          <h1 className="text-[22px] mb-4">Delivery Details</h1>
          <CheckOutForm onClose={onClose} onSubmit={onSubmit} />

          {/* horizontal line */}
          <div className="border-[1px] mt-8 w-[90%]"></div>
          <p className="text-[#B3B3B3] my-8 text-xl">Payment</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetail;
