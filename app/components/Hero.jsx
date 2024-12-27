// "use client"
// import React from "react";
// import { useState } from "react";
// import Image from "next/image";

// const Hero = () => {

//   const [isHovered, setIsHovered] = useState(false);
//   const [shopItems, setshopItems] = useState([
//     {
//         image: '/images/y2k-2.jpg',
//         title: 'Summer',
//         id:'1',
//       },
//       {
//         image: '/images/order-2.jpg',
//         title: 'Winter',
//         id:'2',
//       },
//       {
//         image: '/images/y2k-1.jpg',
//         title: 'Swimsuit',
//         id:'3',
//       },
//       {
//         image: '/images/y2k-2.jpg',
//         title: 'Gown',
//         id:'4',
//       },
//       {
//         image: '/images/order-2.jpg',
//         title: 'y2k',
//         id:'5',
//       }
// ])

//   return (
//     <>
//     <div className="hidden sm:block w-full">
//       <div className={`fixed transition-transform duration-1000 ${isHovered ? 'transform translate-y-0' : 'transform -translate-y-full'} top-0 w-full h-full`}>
//         <div className="flex gap-4 md:px-12 lg:px-24 absolute py-12 bg-white " 
//           onMouseEnter={() => setIsHovered(true)} 
//           onMouseLeave={() => setIsHovered(false)}>
//           {shopItems.map((items)=>(
//             <div key={items.id} className="">
//               <div className="lg:w-60 lg:h-80 md:w-32 md:h-40">
//               <Image src={items.image} alt={items.title} width={300} height={200} className="w-full h-full"/>
//               </div>
//               <p className="pt-2">{items.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//       <div
//         className=" h-[754px] bg-cover bg-center flex justify-center items-center"
//         style={{
//           backgroundImage:
//             "url('https://s3-alpha-sig.figma.com/img/e1d9/5e12/1db89f49f6d82b387f0161f06aebb2f4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCIwLbRL4FOeEDL9gp7clALQfuVrJ~75YpTpq4nh5lKDqkSH2wx6AGi~Do7-bCKZa4aE95lv1FL5bG4OEux4EzSmxLx0YN9aOhNHAgO6cSWBkVkvvV~woUHFYwSE4rt1mYR5avLHP-ASDi56XVPSwHPzqHEw3DT3CdWjKQEDYfZOKZb8wvPddL07x7sfzGf4Xx44ZL0SsO~zu80-sLtAvAiCpr9qjb1bVJv~CJSqGyAMmbPEe5toLhQN5Eh6jpbZN3~bjOZlKcsv0e-JbhsLHZnnNIDuTWoVbfTn-7Gsv9xbwjLe29LSIcra3avdqcTlzYsSO05kFcGv3cndFSWLEw__)",
//         }}
//       >
        
//         <div className="text-center">
//           <h1 className="text-[84px] text-white mb-[82px] hero-font">TIMELESS EDGE</h1>
//           <button className="shop-btn"
//            onMouseEnter={() => setIsHovered(true)} 
//            onMouseLeave={() => setIsHovered(false)}>SHOP</button>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Hero;


"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shopItems, setshopItems] = useState([
    {
        image: '/images/y2k-2.jpg',
        title: 'Summer',
        id: '1',
      },
      {
        image: '/images/order-2.jpg',
        title: 'Winter',
        id: '2',
      },
      {
        image: '/images/y2k-1.jpg',
        title: 'Swimsuit',
        id: '3',
      },
      {
        image: '/images/y2k-2.jpg',
        title: 'Gown',
        id: '4',
      },
      {
        image: '/images/order-2.jpg',
        title: 'y2k',
        id: '5',
      }
  ]);

  return (
    <>
      <div className="hidden sm:block w-full">
        <div className={`fixed transition-transform duration-1000 ${isHovered ? 'transform translate-y-0' : 'transform -translate-y-full'} top-0 w-full h-full`}>
          <div className="flex gap-4 md:px-12 lg:px-24 absolute py-12 bg-white" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            {shopItems.map((items) => (
              <div key={items.id} className="">
                <div className="lg:w-60 lg:h-80 md:w-32 md:h-40">
                  <Image src={items.image} alt={items.title} width={300} height={200} className="w-full h-full" />
                </div>
                <p className="pt-2">{items.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="h-[754px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/hero.gif')",
        }}
      >
        <div className="text-center">
          <h1 className="text-[84px] text-white mb-[82px] hero-font">TIMELESS EDGE</h1>
          <button className="shop-btn"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>SHOP</button>
        </div>
      </div>
    </>
  );
};

export default Hero;


