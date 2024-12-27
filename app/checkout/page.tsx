"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DeliveryDetail from '../components/checkout/DeliveryDetail';
import Payment from '../components/checkout/payment';
import { placeOrder, getProfile } from '../api'; 
import { useRouter } from "next/navigation";

const Checkout = () => {
    const Router = useRouter()
  const [cartItems, setCartItems] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);
  const [userData, setUserData] = useState({})

  //cart item
  useEffect(() => {
     const fetchCartAndUserData = async () => {
         const cart = JSON.parse(localStorage.getItem('cart')) || []; setCartItems(cart);
          try { const { data } = await getProfile();
           setUserData(data); 
        } catch (error) {
             console.log("Error fetching user data:", error); 
            }
         };
          fetchCartAndUserData(); 
        }, []);


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDeliverySubmit = (data) => {
    setDeliveryDetails(data);
    setPaymentIsOpen(true);
  };

  const handlePlaceOrder = async () => {
    try {
        const total = subtotal + 200 + 115;
        const orderData = {
        items: cartItems.map(item => ({ 
            productId: item.pid,
            quantity: item.quantity,
            name: item.name,
            color: item.color,
            size: item.size })),
            user: {
                ...deliveryDetails,
                ...userData

            },
        paymentMethod: 'COD', // Only handling "Cash on Delivery" for now
        paymentId: null,
        couponCode: null, // Assuming no coupon for simplicity
        totalItems: cartItems.length,
        shipping: 200, // Example shipping cost
        subTotal: subtotal,
        total,
        tax: 115 // Example tax amount
      };
      
      console.log("Order Data:", orderData);
      
      const response = await placeOrder(orderData);
      localStorage.clear();
      Router.push('/')
      
      console.log("Order Response:", response);
      // Redirect to order confirmation page
    } catch (error) {
      console.log('Order creation failed:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 mb-12 md:mb-28">
      {paymentIsOpen ? (
        <Payment onClose={() => setPaymentIsOpen(false)} deliveryDetails={deliveryDetails} onPlaceOrder={handlePlaceOrder} />
      ) : (
        <DeliveryDetail onClose={() => setPaymentIsOpen(true)} onSubmit={handleDeliverySubmit} />
      )}
      {/* Right side */}
      <div className="lg:w-[570px] bg-[#F1F1F1] p-4 md:p-8 rounded-lg my-12 h-fit">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.pid} className="flex flex-col gap-6 mb-2">
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="w-20 h-24">
                    <Image
                      src={item.image}
                      width={300}
                      height={400}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm md:text-base text-wrap">{item.name}</p>
                    <p className="text-sm text-[#6C6B6B]">{item.size}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm md:text-base">
                  <p>Nrs. {item.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Products available....</div>
        )}

        {/* horizontal line */}
        <div className="border-[1px] mt-8 w-[90%]"></div>
        {/* Total details */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="w-full flex justify-between">
            <p>Subtotal</p>
            <p>NRs. {subtotal}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Delivery</p>
            <p>NRs. 200</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Tax</p>
            <p>NRs. 115</p>
          </div>
        </div>

        {/* horizontal line */}
        <div className="border-[1px] my-8 w-[90%]"></div>

        <div className="w-full flex justify-between text-lg font-bold">
          <p>Total</p>
          <p>NRs. {subtotal + 200 + 115}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
