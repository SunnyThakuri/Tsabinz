// "use client"
// import Image from "next/image";
// import React, { useState,useEffect } from "react";
// import { FaFilter } from "react-icons/fa";
// import { getProducts } from "../api";
// import { useRouter } from "next/navigation";
// import WishlistHeartButton from "../components/wishlistButton";

// const page = () => {
//   const Router=useRouter()
//   const [IsFiliterOpen,setIsFilterOpen] = useState(false)
//   const [products,setProducts]=useState([])

//   useEffect(()=>{
//     const fetchproducts = async () =>{
//         try{
//           const data= await getProducts()
//           setProducts(data.data)
//         }catch(err){
//             console.log(err)
//         }
//       }

//     fetchproducts()
//   },[])

//   return (
//     <div className="py-8 px-8 lg:px-[94px] flex flex-col md:flex-row gap-8 w-full">
//       {/* left */}
//         <div className="md:w-[224px] h-auto md:h-[224px] bg-[#F5F5F5] p-4 md:py-[48px] px-8 flex flex-col  gap-5">
//           <div className=" md:hidden">
//             <div className=" flex justify-between">
//               <h1 className=" text-lg">Mens Section</h1>
//               <FaFilter className="h-6 w-6 cursor-pointer" onClick={()=> setIsFilterOpen(!IsFiliterOpen)}/>
//             </div>
//           </div>
//           <div className={`${IsFiliterOpen? `sm:flex-col`: 'hidden sm:block' }   md:flex-col  `}>
//           <h1 className="text-[18px]">Filter By</h1>
//           <div className="border-t-[1px] border-[#B3B3B3]"></div>

//           <div className="flex items-center mt-4">
//             <input
//               type="checkbox"
//               id="tops"
//               className="w-5 h-5 appearance-none border-2 border-black rounded-sm checked:bg-black"
//             />
//             <label htmlFor="tops" className="ml-2 text-[14px] text-[#303030]">
//               Tops
//             </label>
//           </div>
//           <div className="flex items-center mt-4">
//             <input
//               type="checkbox"
//               id="tops"
//               className="w-5 h-5 appearance-none border-2 border-black rounded-sm checked:bg-black"
//             />
//             <label htmlFor="tops" className="ml-2 text-[14px] text-[#303030]">
//               Bottoms
//             </label>
//             </div>
//           </div>
//       </div>
      
//       {/* right */}
//       <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
//         {products.length > 0 ? (
//           products.map((product, index) => (
//             <div key={index}className="" onClick={()=> Router.push(`productdetail/${product._id}`)}>
//               <div className="relative w-full h-52 md:h-72 lg:h-[450px]"  > 
//                 <Image
//                   src={product.image.url}
//                   alt={product.name}
//                   width={400}
//                   height={500}
//                   objectFit="cover"
//                   className="w-full h-full cursor-pointer"
//                 />
//                   <WishlistHeartButton productId={product._id}/>
//               </div>
//               <div className="mt-3 cursor-pointer"  >
//                 <p className="truncate">{product.name}</p>
//                 <p>{product.price}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>

//   );
// };

// export default page;

"use client"
import Image from "next/image";
import React, {  useState } from "react";
import { FaFilter } from "react-icons/fa";
// import { getCategory } from "../api";

const products = [
    {
      id: 1,
      image: "/images/order-1.jpg",
      alt: "new-arrival-1",
      name: "Y2K ChromeWave Tube Top",
      price: "NRs. 1500",
    },
    {
      id: 2,
      image: "/images/new-arrival-2.jpg",
      alt: "new-arrival-2",
      name: "RelaxFit Lounge Pants",
      price: "NRs. 1500",
    },
    {
      id: 3,
      image: "/images/new-arrival-3.jpg",
      alt: "new-arrival-3",
      name: "Y2K Cosmic Dream Wrap Skirt",
      price: "NRs. 1500",
    },
    {
      id: 4,
      image: "/images/order-1.jpg",
      alt: "new-arrival-4",
      name: "Y2K Cosmic Dream Wrap Skirt",
      price: "NRs. 1500",
    },
    {
      id: 5,
      image: "/images/new-arrival-3.jpg",
      alt: "new-arrival-5",
      name: "Y2K Cosmic Dream Wrap Skirt",
      price: "NRs. 1500",
    },
  ];
const Page = () => {
  // const [products,setProducts] = useState([])
  const [IsFiliterOpen,setIsFilterOpen] = useState(false)

  // useEffect(()=>{
  //   const fetchProducts = async () =>{
  //     try{
  //       const data= await getAllCategories()
  //       setProducts(data.data)
  //     }catch(err){
  //         console.log(err)
  //     }
  //   } 
  //   fetchProducts()
  // },[])

  return (
    <div className="py-8 px-8 lg:px-[94px] flex flex-col md:flex-row gap-8 w-full">
      {/* left */}
      
        <div className="md:w-[224px] h-auto md:h-[224px] bg-[#F5F5F5] p-4 md:py-[48px] px-8 flex flex-col  gap-5">
          <div className=" md:hidden">
            <div className=" flex justify-between">
              <h1 className=" text-lg">Mens Section</h1>
              <FaFilter className="h-6 w-6 cursor-pointer"  onClick={()=> setIsFilterOpen(!IsFiliterOpen)}/>
            </div>
          </div>
          <div className={`${IsFiliterOpen? `sm:flex-col`: 'hidden sm:block' }   md:flex-col  `}>
          <h1 className="text-[18px]">Filter By</h1>
          <div className="border-t-[1px] border-[#B3B3B3]"></div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="tops"
              className="w-5 h-5 appearance-none border-2 border-black rounded-sm checked:bg-black"
            />
            <label htmlFor="tops" className="ml-2 text-[14px] text-[#303030]">
              Tops
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="tops"
              className="w-5 h-5 appearance-none border-2 border-black rounded-sm checked:bg-black"
            />
            <label htmlFor="tops" className="ml-2 text-[14px] text-[#303030]">
              Bottoms
            </label>
            </div>
          </div>
      </div>
   
      {/* right */}
      
      <div className="w-full  grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
      {products.map((product) => (
        <div className="relative" key={product.id}>
          <Image
            src={product.image}
            alt={product.alt}
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <div className="absolute top-3 right-3 cursor-pointer">
            <Image src="/images/love.svg" alt="favorite-icon" width={36} height={36} />
          </div>
          <div>
            <p className="my-3">{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;

