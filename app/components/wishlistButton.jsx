"use client";
import React, { useState, useEffect } from "react";
import { createWishlist } from "../api";
import { toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { getWishlist } from "../api";
import { GoHeart } from "react-icons/go";

const WishlistHeartButton = ({ productId }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);


  useEffect(() => { 
    const checkWishlistStatus = async () => { 
      try {
         const data = await getWishlist();
          const isInWishlist = data.data.some((item) => item._id === productId);
           setIsInWishlist(isInWishlist); 
          } catch (err) { 
            console.log('Error fetching wishlist:', err); 
          } 
        }; 
        checkWishlistStatus(); 
      }, [productId]);

   const handleWishlistToggle = async (e) => {
    e.stopPropagation();
    // try {
    //   const response = await createWishlist(productId);
    //   if (response.type === "pushed") {
    //     setIsInWishlist(true);
    //     toast.success(response.message);
    //   } else {
    //     setIsInWishlist(false);
    //     toast.warn(response.message);
    //   }
    // } catch (err) {
    //   toast.error("Error updating wishlist");
    //   console.log("Error:", err);
    // }
    toast.success("Added Successfully");

  };

  return (
    <div
      onClick={handleWishlistToggle}
      // className={` ${isInWishlist ? "" : ""}`}
    >
      <div className="absolute top-1 right-1 lg:top-3 lg:right-3 cursor-pointer">
        <GoHeart
          width={50}
          height={50}
          // className={`rounded-full bg-white p-2 w-9 h-9 ${isInWishlist ? " text-red-600 " : ""}`}
          className={"rounded-full bg-white p-2 w-9 h-9 "}

        />
      </div>
    </div>
  );
};

export const WishlistButton = ({productId}) =>{
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => { 
    const checkWishlistStatus = async () => { 
      try {
         const data = await getWishlist();
          const isInWishlist = data.data.some((item) => item._id === productId);
           setIsInWishlist(isInWishlist); 
          } catch (err) { 
            console.log('Error fetching wishlist:', err); 
          } 
        }; 
        checkWishlistStatus(); 
      }, [productId]);


   const handleWishlistToggle = async () => {
    // try {
    //   const response = await createWishlist(productId);
    //   if (response.type === "pushed") {
    //     setIsInWishlist(true);
    //     toast.success(response.message);
    //   } else {
    //     setIsInWishlist(false);
    //     toast.success(response.message);
    //   }
    // } catch (err) {
    //   toast.error("Error updating wishlist");
    //   console.log("Error:", err);
    // }
     toast.success(added);

  };

  return (
    // <div
    //   onClick={handleWishlistToggle}
    //   className={` ${isInWishlist ? "border border-red-800" : "border border-black"} shop-btn text-center  cursor-pointer`}
    // >
    //   {isInWishlist ? "Added to Wishlist" : "Add to WishList"}

    // </div>
    <div className= "border border-black shop-btn text-center  cursor-pointer">
        Add to WishList
    </div>
  );
}

export default WishlistHeartButton;
