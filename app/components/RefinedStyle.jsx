"use client"
// import Image from "next/image";
// import React from "react";

// const RefinedStyle = () => {
//   return (
//     <div>
//       <div className="lg:mx-[96px] px-4  flex flex-col lg:flex-row justify-between items-center">
//         <h1 className="against-font text-[36px]">
//           Refined Style
//           <br />
//           for Every Day
//         </h1>
//         <p className="max-w-[500px] text-center lg:text-start">
//           Discover timeless pieces that bring modern elegance to your everyday
//           routine. Elevate your look with effortless, polished essentials made
//           for the professional lifestyle.
//         </p>
//       </div>

//       {/* images */}
//       <div className="flex flex-col lg:flex-row p-4 gap-4 lg:p-0 lg:gap-0 mt-8">

//       <div className="relative flex-1 group">
//           <div className="relative w-full h-[540px] group-hover:flex-1 transition-all duration-300 ease-in-out hover:w-[200%]">
//             <Image
//               src="/images/refined-style-1.jpg"
//               alt="refinedstyle"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>

//         {/* Image Container 2 */}
//         <div className="relative flex-1 group">
//           <div className="relative w-full h-[540px] group-hover:flex-1  transition-all duration-300 ease-in-out hover:w-[200%] ">
//             <Image
//               src="/images/refined-style-2.jpg"
//               alt="refinedstyle"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>

//         {/* Image Container 3 */}
//         <div className="relative flex-1 group">
//           <div className="relative w-full h-[540px] group-hover:flex-1 transition-all duration-300 ease-in-out hover:w-[200%]">
//             <Image
//               src="/images/refined-style-3.png"
//               alt="refinedstyle"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>

//         {/* Image Container 4 */}
//         <div className="relative flex-1 group">
//           <div className="relative w-full h-[540px] group-hover:flex-1 transition-all duration-300 ease-in-out hover:w-[200%]">
//             <Image
//               src="/images/refined-style-4.png"
//               alt="refinedstyle"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default RefinedStyle;


import Image from "next/image";
import React, { useState } from "react";

const RefinedStyle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="lg:mx-[96px] px-4 flex flex-col lg:flex-row justify-between items-center">
        <h1 className="against-font text-[36px]">
          Refined Style
          <br />
          for Every Day
        </h1>
        <p className="max-w-[500px] text-center lg:text-start">
          Discover timeless pieces that bring modern elegance to your everyday
          routine. Elevate your look with effortless, polished essentials made
          for the professional lifestyle.
        </p>
      </div>

      {/* images */}
      <div className="flex flex-col lg:flex-row p-4 gap-4 lg:p-0 lg:gap-0 mt-8">
        {["/images/refined-style-1.jpg", "/images/refined-style-2.jpg", "/images/refined-style-3.png", "/images/refined-style-4.png"].map((src, index) => (
          <div
            key={index}
            className={`relative flex-1 transition-all duration-300 ease-in-out ${hoveredIndex === index ? "flex-grow-[2]" : "flex-shrink"} group`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-[540px]">
              <Image
                src={src}
                alt={`refinedstyle-${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              {hoveredIndex === index && (
                <div className="hidden sm:block">    
                  <p className="absolute text-center top-1/2 md:left-[30%] lg:left-[20%] text-white text-2xl">Get  This Wardrobe Essential</p>            
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  text-white py-2 px-4 rounded">
                    <button className="shop-btn-dark">Shop Now</button> 
                  </div> 
                </div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefinedStyle;

