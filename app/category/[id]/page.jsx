"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCategoryProducts } from "../../api";
import ProductCard from "../../components/card/productCard"


const Category = () =>{
    const [products,setProducts]=useState([])
    // const param=useParams();

    // useEffect(()=>{
    //     const fetchproduct = async () =>{
    //         try{
    //           const data= await getCategoryProducts(param.id.toLowerCase())
    //           setProducts(data.data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //       }
    
    //     fetchproduct()
    //   },[])

    return(
        <div className="px-4 mb-8">
            <div className="text-2xl text-center my-4 uppercase">{param.id}</div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8">
                {/* {products.length > 0 ? (
                products.map((product, index) => (
                    <ProductCard key={index} item={product} />
                ))
                ) : (
                <p>Loading...</p>
                )} */}
            </div>
        </div>
    )
}

export default Category;