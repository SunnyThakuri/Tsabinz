import React, { useState } from "react";

const Payment = ({ onClose, onPlaceOrder, deliveryDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [otpIsOpen, setOtpIsOpen] = useState(false);

  const handlePaymentMethodChange = (event) => {
    const { value } = event.target;
    setPaymentMethod(value);
    setOtpIsOpen(false); // Reset OTP form when changing payment method
  };
  console.log(deliveryDetails)

  return (
    <div className="w-full lg:w-1/2 pl-4 pr-4 md:pr-0 lg:pl-16 pt-5 lg:pt-12 ">
      <div className="w-full bg-[#F1F1F1] flex justify-between p-4 rounded-lg text-[#767676]">
        <p>Logged in as {deliveryDetails.email}</p>
        <p className="underline cursor-pointer">Logout</p>
      </div>
      <div className="mt-8 flex">

        <div className="md:flex flex-col items-center hidden">
          <p className="text-[#B3B3B3] text-6xl -mt-4">•</p>
          <div className="h-44 w-0.5 bg-[#B3B3B3] "></div>
          <p className="text-3xl text-[#B3B3B3]">○</p>
        </div>

        <div className="w-full pl-4">
          <div className="flex justify-between">
            <p className="text-xl text-[#B3B3B3]">Delivery Details</p>
            <p className="underline text-sm cursor-pointer">Change</p>
          </div>
          <div className="text-[#767676] my-8">
            <p>{deliveryDetails.firstName} {deliveryDetails.lastName}</p>
            <p>{deliveryDetails.email}</p>
            <p>{deliveryDetails.address}, {deliveryDetails.landmark}, {deliveryDetails.country}</p>
            <p>{deliveryDetails.phone}</p>
          </div>

          {/* horizontal line */}
          <div className="border-[1px] w-[90%]"></div>

          <p className="text-[#B3B3B3] my-8 text-xl">Payment</p>

          <form className="border-[1px]">

            <div className="flex flex-col">
              <div className="border-[1px] px-4 py-4">
                <input 
                  id="cash" 
                  type="radio" 
                  name="payment" 
                  value="cash" 
                  className="cursor-pointer"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="cash" className="ml-3 cursor-pointer">Cash on Delivery</label>
              </div>
              <div className="border-[1px] px-4 py-4">
                <input 
                  type="radio" 
                  id="esewa"  
                  className="cursor-pointer" 
                  name="payment"
                  value="esewa"
                  checked={paymentMethod === 'esewa'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="esewa" id="esewa" className="ml-3 cursor-pointer">eSewa</label>
              </div>
            </div>

            {otpIsOpen ? (
              <div>
                <div className="p-4">
                  <p>Enter OTP sent to your number:</p>
                  <p className="mt-4 text-[#767676] text-xs">OTP</p>
                  <input className="mt-3 w-full border-[1px] px-4 py-3 text-center" placeholder="_ _ _ _ _ _ _"/>
                </div>
                <div className="flex flex-col items-center gap-4 pb-4">
                  <button className="shop-btn-dark w-60">Pay</button>
                  <button className="shop-btn-white w-60" onClick={(e) => {e.preventDefault(); setOtpIsOpen(false);}}>Back</button>
                </div>
              </div>
            ) : (
              <>
                {paymentMethod === 'esewa' && (
                  <div>
                    <div className="p-4">
                      <p>Provide login details:</p>
                      <p className="mt-4 text-[#767676] text-xs">eSewa ID:</p>
                      <input className="mt-3 border-[1px] w-full px-4 py-3" placeholder="Email / Mobile Number"/>
                      <p className="mt-4 text-[#767676] text-xs">Password</p>
                      <input className="mt-3 w-full border-[1px] px-4 py-3" placeholder="Password"/>
                    </div>
                    <div className="flex flex-col items-center gap-4 pb-4">
                      <button 
                        className="shop-btn-dark w-60" 
                        onClick={(e) => {
                          e.preventDefault();
                          setOtpIsOpen(true);
                        }}
                      >
                        Login
                      </button>
                      <button className="shop-btn-white w-60" onClick={onClose}>Cancel</button>
                    </div>
                  </div>
                )}
                {paymentMethod === 'cash' && (
                  <div className="flex flex-col items-center gap-4 pb-4 mt-8">
                    <button 
                      className="shop-btn-dark w-60"
                      onClick={(e) => {
                        e.preventDefault();
                        onPlaceOrder(); // Trigger the place order function
                      }}
                    >
                      Order
                    </button>
                    <button className="shop-btn-white w-60" onClick={onClose}>Cancel</button>
                  </div>
                )}
              </>
            )}

          </form>
        </div>

      </div>

    </div>
  );
}

export default Payment;
