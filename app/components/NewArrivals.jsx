"use client"
import React, { useEffect, useState } from 'react'
import Carousel from "./carousel/carousel"
import { getStatusProducts } from '../api';

const NewArrivals = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchproduct = async () =>{
        try{
          const data= await getStatusProducts('new')
          setProducts(data.data)
        }catch(err){
            console.log(err)
        }
      }
    fetchproduct()
  },[])

  return (
    <div className='my-[140px] px-4 md:px-10  relative'>
      <h1 className='text-center text-[22px]'>NEW ARRIVALS</h1>
      <Carousel items={products} />
      <div className='flex justify-center md:mt-16'>   
        <button className='shop-btn-dark'>SHOP</button>
      </div>
    </div>
  );
}


export default NewArrivals;
