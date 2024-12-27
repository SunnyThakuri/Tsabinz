import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const DashboardDrawer = ({isDrawerOpen,toggleDrawer, countries, selectedCountry, setSelectedCountry}) => {
  return (
    <div>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleDrawer}
        ></div>
      )}

<div
        className={`fixed top-0 right-0 h-full w-full lg:w-[600px] bg-white z-20 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="pt-[72px] px-6 md:px-[48px] relative">
          <h2 className="text-[22px] mb-12">Add Address</h2>
          <form className="flex flex-col gap-3">
            <div className="mb-2">
              <select
                className="w-full p-2 border border-gray-300 h-[46px]"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="" disabled>
                  Country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className=" flex justify-between gap-3">
              <div className="mb-2 flex-1">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 h-[46px]"
                />
              </div>
              <div className="mb-2 flex-1">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 h-[46px]"
                />
              </div>
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full p-2 border border-gray-300 h-[46px]"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="city"
                placeholder="City"
                className="w-full p-2 border border-gray-300 h-[46px]"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="city"
                placeholder="Zip / Postal Code"
                className="w-full p-2 border border-gray-300 h-[46px]"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-400 after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-200 "></div>
              </label>
              <h1>Set as default</h1>
            </div>

            <button
              type="button"
              className="shop-btn-dark-flat text-white px-4 py-2 h-[46px] mt-8"
              onClick={toggleDrawer}
            >
              Add Address
            </button>
          </form>
          <div
            className="absolute top-6 right-6 cursor-pointer text-3xl"
            onClick={toggleDrawer}
          >
            <IoCloseOutline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardDrawer