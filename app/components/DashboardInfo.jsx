"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DashboardDrawer from "./DashboardDrawer";
import DashboardInfoEdit from "./DashboardInfoedit";
import { getProfile } from "../api";
// import { IoCloseOutline } from "react-icons/io5";

const DashboardInfo = () => {
  const [userData,setUserData]=useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerEditOpen, setIsDrawerEditOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const toggleEditDrawer = () => {
    setIsDrawerEditOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      } catch (error) {
        console.log("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(()=>{
    const fetchProfile = async () =>{
      try {
        const response = await getProfile();
        setUserData(response.data)
      } catch (err) {
        console.log("Error:", err);
      }

    }
    fetchProfile()
  },[])

  
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="w-full lg:w-[540px]">
        <h1 className="text-[22px] mb-8 font-bold">Contact Details</h1>
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <p className="text-[12px]">Your Name</p>
              <div className="flex justify-between">
                <p>{userData.fullName}</p>
                <Image
                  src="/images/edit.svg"
                  alt="line"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300"></div>
          <div>
            <p>Email Address</p>
            <p>{userData.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-12">
          <Image src="/images/sign-out.svg" alt="line" width={16} height={16} />
          <p>Reset your password</p>
        </div>
        <div className="mt-[64px] flex justify-between items-center mb-8">
          <h1 className="text-[24px] font-bold">Addresses</h1>
          <p
            onClick={toggleDrawer}
            className="border-b border-gray-300 text-[12px] cursor-pointer"
            style={{ color: "#767676" }}
          >
            Add new
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold">
              {userData.fullName  }
              <span
                className="py-1 px-3 ml-4 font-normal text-[12px]"
                style={{ backgroundColor: "#E0E0E0" }}
              >
                Default
              </span> 
            </p>
          </div>
          <p>123 Main Street</p>
          <div className="flex justify-between items-center">
            <p>Apartment 4B</p>

            {/* edit */} 
            <Image src="/images/edit.svg" alt="line" onClick={toggleEditDrawer} width={16} height={16} className="cursor-pointer" />
          </div>
          <p>Springfield, CA 94103</p>
          <p>United States</p>
        </div>
        <div className="border-t-[1px] border-gray-300 mt-4"></div>
      </div>

      {/* Drawer */}
      <DashboardDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
      <DashboardInfoEdit isDrawerEditOpen={isDrawerEditOpen} toggleEditDrawer={toggleEditDrawer} countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
    </div>
  );
};

export default DashboardInfo;
