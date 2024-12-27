import Image from "next/image";
import React from "react";

const SwimWear = () => {
  return (
    <div className="my-12 md:my-24 lg:my-[140px] mx-4 md:mx-[96px] md:h-[720px] h-full flex flex-col md:flex-row gap-3">
      {/* left */}
      <div className="md:w-[45%] w-full   relative h-64 md:h-full overflow-hidden">
        <Image
          src="/images/swim-wear.jpg"
          alt="swimwear"
          layout="fill"
          objectFit="cover"
          className=" "
          style={{transform: "scale(1.2)"}}
        />
      </div>


      {/* right */}
      <div className="lg:w-[55%] w-full flex flex-col justify-between ">
        <div className=" md:px-7 lg:px-[44px] md:py-[42px] px-4 py-4  ">
          <h1 className="against-font text-[30px]">
            Designer-Tailored Swimwear: Dive into Luxury
          </h1>
          <p className="mt-[24px] mb-[48px]">
            Discover our exclusive collection of meticulously crafted,
            designer-tailored swimsuits. Each piece is a blend of sophistication
            and perfect fit, designed to flatter every curve and make a bold
            statement by the pool or beach. Elevate your swimwear style with
            unparalleled elegance and comfort.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className=" shop-btn-white">SHOP</button>
          </div>
        </div>

        {/* bottom */}
        <div className="flex gap-3 h-[340px]">
        <div className="relative flex-1 h-64 md:h-full">
          <Image
            src="/images/swim-wear-1.png"
            alt="swimwear"
            layout="fill"
            objectFit="cover" // Ensures the image fills the container
            className="rounded-sm"
          />
        </div>
        <div className="relative flex-1 h-64 md:h-full">
          <Image
            src="/images/swim-wear-2.png"
            alt="swimwear"
            layout="fill"
            objectFit="cover" // Ensures the image fills the container
            className="rounded-sm"
          />
        </div>
        <div className="relative flex-1 h-64 md:h-full">
          <Image
            src="/images/swim-wear-3.png"
            alt="swimwear"
            layout="fill"
            objectFit="cover" // Ensures the image fills the container
            className="rounded-sm"
          />
        </div>
      </div>

        
      </div>
    </div>
  );
};

export default SwimWear;
