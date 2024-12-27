"use client"
import React, { useState, useEffect } from 'react'
import Carousel4 from "./carousel/carousel4"
import { getCategoryProducts } from '../api';


const Recommendation = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchproduct = async () =>{
        try{
          const data= await getCategoryProducts('winter')
          setProducts(data.data)
          console.log(data.data)
        }catch(err){
            console.log(err)
        }
      }
    fetchproduct()
  },[])
  
  return (
    <div className='my-[140px] mx-6 lg:mx-[96px] relative'>
        <h1 className='text-center text-[22px]'>RECOMMENDATION FOR YOU</h1>
        <Carousel4 items={products} />
    </div>
    
  )
}

export default Recommendation