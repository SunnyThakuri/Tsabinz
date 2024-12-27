import Image from "next/image";
import React from "react";

const Y2kAesthetic = () => {
  return (
    <div className="lg:my-[140px] px-6 md:px-12  lg:mx-[96px] h-[720px] flex flex-col md:flex-row gap-3">
      <div className="w-full lg:w-[28%] relative h-full overflow-hidden flex flex-col justify-center">
        <div className="w-full lg:w-[286px]">
          <p>
            Explore our curated Y2K-inspired collection that blends nostalgia
            with modern flair, celebrating individuality and playful style.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="shop-btn-white mt-8 lg:mt-[64px]">SHOP</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[28%] relative h-full overflow-hidden">
        <h1 className="against-font text-[32px] py-3 lg:py-[34px] text-center lg:text-end">
          Y2K Aesthetic <br /> Redefined
        </h1>
        <div className="h-full lg:h-[561px] relative">
          <Image
            src="/images/y2k-1.jpg"
            alt="y2kaesthetic"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
      <div className="w-full lg:w-[44%] relative h-full overflow-hidden">
        <Image
          src="/images/y2k-2.jpg"
          alt="y2kaesthetic"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
    </div>
  );
};

export default Y2kAesthetic;
