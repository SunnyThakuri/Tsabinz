"use client"
import React, { useState, useEffect } from 'react'
import Carousel from "./carousel/carousel4"
import { getBestSellerProducts } from '../api';

const BestSellers = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchproduct = async () =>{
        try{
          const data= await getBestSellerProducts()
          setProducts(data.data)
        }catch(err){
            console.log(err)
        }
      }
    fetchproduct()
  },[])

  return (
    <div className='my-[140px] px-4 md:px-10 w-full  relative'>
      <h1 className='text-center text-[22px]'>BEST SELLERS</h1>
      <Carousel items={products} />
      <div className='flex justify-center md:mt-16'>   
        <button className='shop-btn-dark'>SHOP</button>
      </div>
    </div>
  );
}


export default BestSellers;
