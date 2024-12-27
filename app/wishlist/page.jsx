"use client"
import { wishlist } from "../../constant/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {getWishlist} from "../api"
import WishlistHeartButton from "../components/wishlistButton";
import { useRouter } from "next/navigation";
import ProductCard from "../components/card/productCard";

const Wishlist = () => {
  const [products,setProducts]=useState([])
  const router = useRouter()

  useEffect(()=>{
    const fetchproducts = async () =>{
        try{
          const data= await getWishlist()
          setProducts(data.data)
        }catch(err){
            console.log(err)
        }
      }

    fetchproducts()
  },[])

  return (
    <div className=" w-full pt-5 px-8 lg:px-[96px] pb-[120px] bg-[#FCFCFC]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 mt-[32px]">
        {/* Item 1 */}
        {products.length > 0 ? (
            products.map((item,index) => (
              <ProductCard key={index} item={item} />
            ))
        ):(
          <div>No products</div>
        ) }
      </div>
    </div>
  );
};

export default Wishlist;
