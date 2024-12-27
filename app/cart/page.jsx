"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Cart = () =>{
    const [cartItems, setCartItems] = useState([])
    const Router = useRouter()
    
    useEffect(() => { 
        const cart = JSON.parse(localStorage.getItem('cart')) || []; setCartItems(cart); 
    }, []); 
    
      const handleIncrement = (pid, setCartItems) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.pid === pid);
      
        if (item) {
          item.quantity += 1;
        }
      
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart);
      };
      
      const handleDecrement = (pid, setCartItems) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.pid === pid);
      
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart);
      };
      

      const handleRemoveFromCart = (pid, setCartItems) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.pid !== pid);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart);
      };
      
    
      const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (
    <div className="flex w-full flex-col md:flex-row p-4 md:p-0 md:pl-4 lg:pl-24   justify-between">
        {/* Left Section */}
        <div className="w-full md:w-[60%] pt-5">
            <div className="flex justify-between font-normal py-1">
                <h1 className="text-xl">Cart</h1>
                <p className="text-xs text-[#767676] pr-4 md:pr-7">{cartItems.length} items</p>
            </div>
            {/* Items Heading */}
            <div className="mt-4 md:mt-12">
                <div className="flex flex-col">
                    <div className="hidden sm:block">
                        <div className="flex font-normal text-xs text-[#767676] mb-1 md:mb-8 ">
                            <p className="md:w-[56%] ">Item</p>
                            <p className="w-[100px] text-left ">Quantity</p>
                            <p className="w-[100px] text-center">Price</p>
                            <p className="w-[50px]"></p>
                        </div>
                    </div>
                    {/* Items */}
                    <div className="flex flex-col mb-8 gap-6">
                        {cartItems.length > 0 ? (cartItems.map((item,index) => (
                            <div
                                key={index}
                                className="flex sm:flex-row items-center md:gap-1 lg:gap-4 sm:gap-6 lg:pr-8 "
                            >
                                {/* Image */}
                                <div className="w-[86px] h-[108px]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Details */}
                                <div className="flex flex-col sm:flex-row w-full items-center gap-4  lg:gap-12">
                                    <p className="md:w-[45%]  text-center sm:text-start text-xs lg:text-base ">{item.name}</p>
                                    <div className="flex items-center gap-1 text-xs lg:text-base">
                                        <button
                                            className="h-8 w-8 rounded-full border flex items-center justify-center"
                                            onClick={() => handleDecrement(item.pid, setCartItems)}
                                        >
                                            -
                                        </button>
                                        <p className="px-2">{item.quantity}</p>
                                        <button
                                            className="h-8 w-8 rounded-full border flex items-center justify-center"
                                            onClick={() => handleIncrement(item.pid, setCartItems)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="w-[100px] text-center md:text-start text-xs lg:text-base">Nrs. {item.price}</p>
                                </div>
                                {/* Remove item Icon */}
                                <div className="text-start w-[50px]">
                                    <RxCross1
                                        className="cursor-pointer w-5 h-5"
                                        onClick={() => handleRemoveFromCart(item.pid, setCartItems)}
                                    />
                                </div>
                            </div>
                        ))):(
                            <p>No items in cart</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Right Section */}
        <div className="w-full p-4 lg:p-6 md:w-[40%] bg-[#F1F1F1] lg:h-[650px]">
            <div className="flex justify-end">
                {/* <RxCross1 /> */}
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="pt-10 px-4 lg:px-16">
                    <h1 className="mb-14 text-lg">Summary</h1>
                    <div className="flex justify-between text-base">
                        <p>Subtotal</p>
                        <p>NRs. {subtotal}</p>
                    </div>
                    <div className="flex justify-between my-4">
                        <p>Delivery</p>
                        <p>NRs. 200</p>
                    </div>
                    <div className="flex gap-3 pt-8 lg:pt-0">
                        <input
                            className="rounded-lg lg:rounded-full w-full p-2 border"
                            placeholder="Discount Code"
                        />
                        <button className="bg-black text-white rounded-lg lg:rounded-full w-[30%] md:w-fit md:px-4 sm:px-2 ">Apply</button>
                    </div>
                </div>
                <div className="pb-8 px-4 lg:px-16">
                    <div className="flex justify-between mb-6 mt-4 lg:mt-0">
                        <p>Total Amount</p>
                        <p className="text-lg font-bold">{subtotal + 200}</p>
                    </div>
                    <button className="bg-black text-white rounded-full w-full p-3" onClick={()=> Router.push('/checkout')}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Cart





// const Cart = () => {
//   // Sample products data
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Y2K ChromeWave Tube Top",
//       price: 1050,
//       quantity: 1,
//       image: "/images/y2k-2.jpg", // Replace with actual image paths
//     },
//     {
//       id: 2,
//       name: "Elisa Backless Dress",
//       price: 1050,
//       quantity: 1,
//       image: "/images/y2k-2.jpg", // Replace with actual image paths
//     },
//     {
//       id: 3,
//       name: "Y2K Cosmic Dream Wrap Skirt",
//       price: 1050,
//       quantity: 1,
//       image: "/images/y2k-2.jpg", // Replace with actual image paths
//     },
//   ]);

//   const handleQuantityChange = (id, type) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//         };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col px-10">
//       {/* Header */}
//       <header className="py-4 flex justify-between items-center border-b">
//         <h1 className="text-2xl font-medium">Cart</h1>
//         <p className="text-gray-500">{cartItems.length} Items</p>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row mt-10 gap-10">
//         {/* Cart Items */}
//         <div className="flex-auto">
//           <table className="w-full text-left">
//             <thead className="border-b">
//               <tr>
//                 <th className="py-2">Item</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.id} className="border-b">
//                   <td className="flex items-center gap-4 py-4">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={60}
//                       height={60}
//                       className="rounded"
//                     />
//                     <p>{item.name}</p>
//                   </td>
//                   <td className="py-4">
//                     <div className="flex items-center border rounded px-2">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, "decrease")}
//                         className="px-2 text-gray-600"
//                       >
//                         -
//                       </button>
//                       <span className="px-2">{item.quantity}</span>
//                       <button
//                         onClick={() => handleQuantityChange(item.id, "increase")}
//                         className="px-2 text-gray-600"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="py-4">NRs. {item.price * item.quantity}</td>
//                   <td className="py-4">
//                     <button
//                       onClick={() => handleRemoveItem(item.id)}
//                       className="text-red-500"
//                     >
//                       &times;
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Summary Section */}
//         <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg">
//           <h2 className="text-lg font-medium mb-4">Summary</h2>
//           <div className="flex justify-between mb-4">
//             <p>Subtotal</p>
//             <p>NRs. {subtotal}</p>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p>Delivery</p>
//             <p>NRs. 4674</p>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Discount code"
//               className="w-full border rounded px-4 py-2"
//             />
//             <button className="mt-2 w-full bg-black text-white rounded py-2">Apply</button>
//           </div>
//           <div className="flex justify-between font-medium text-lg">
//             <p>Total Amount</p>
//             <p>NRs. {subtotal + 4674}</p>
//           </div>
//           <button className="mt-6 w-full bg-black text-white rounded py-2">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
