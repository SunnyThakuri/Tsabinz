import Image from "next/image";
import React from "react";

const SpecialOutfit = () => {
  return (
    <div className="my-12 lg:my-[140px] lg:mx-[96px] mx-4">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Left Section */}
        <div className="lg:flex-[1]  w-full lg:w-[240px] ">
          <div className=" flex flex-col items-center lg:items-start">
            <h1 className="text-[22px] text-center lg:text-start">SPECIAL OUTFITS</h1>
            <p className="text-gray-600 mb-6 w-full text-center lg:text-start lg:w-[240px]" style={{color: "#303030"}}>
              Step into Luxury: Handpicked Attire for Unforgettable Days and
              Timeless Elegance
            </p>
            
            <button className="shop-btn-dark lg:mt-[64px]">
              SHOP SPECIAL OUTFITS
            </button>
          </div>
        </div>

        {/* Right Section: Two Images */}
        <div className="flex h-64 lg:h-auto w-full  lg:flex-[2] gap-3 relative">
          {/* First Image */}
          <div className="relative w-full  lg:h-[580px]">
            <Image
              src="/images/special-outfit-1.png"
              alt="Special Outfit 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full   lg:h-[580px]">
            <Image
              src="/images/special-outfit-2.png"
              alt="Special Outfit 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer h-8 w-8 md:h-auto md:w-auto">
            <Image
              src="/images/arrow-right-2.svg"
              alt="Special Outfit 2"
              width={48}
              height={48}
            />
            </div>
            <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer h-8 w-8 md:h-auto md:w-auto">
            <Image
              src="/images/arrow-left-2.svg"
              alt="Special Outfit 2"
              width={48}
              height={48}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOutfit;
