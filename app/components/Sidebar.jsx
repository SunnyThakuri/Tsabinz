import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { getAllCategories } from "../api";

const Sidebar = ({sidebarOpen, closeSidebar}) =>{


const [categories,setCategories] = useState([])

  useEffect(()=>{
    const fetchCategories = async () =>{
      try{
        const data= await getAllCategories()
        setCategories(data.data)
      }catch(err){
          console.log(err)
      }
    } 
    fetchCategories()
  },[])

    return(
        <div className={`fixed top-0 left-0 w-full md:w-80 z-50 bg-white h-full transition-transform transform duration-700 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg`}> 
        <div className="p-6"> 
          <div className="w-full flex justify-end ">
            <RxCross1 className="w-5 h-5 text-[#767676] cursor-pointer " onClick={closeSidebar} />
          </div>
          <div className="flex flex-col pt-8 pl-8 text-[#767676] md:pt-20 md:pl-16 gap-8" onClick={closeSidebar}>
            {categories.length>0 ? (
                <div className="flex flex-col gap-8">
                  {categories.map((category,index) =>(
                    <div key={index}>
                      <Link className=" uppercase" href={`/category/${category.slug}`}>{category.name}</Link>  
                    </div>
                  ))}
                </div>
            ): (
              <div>

              </div>
            )} 
            <Link href="/menSections">Men</Link>
            <Link href="/womenSections">Women</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/about">ABOUT</Link>
          </div> 
        </div> 
      </div>
    )
}

export default Sidebar;