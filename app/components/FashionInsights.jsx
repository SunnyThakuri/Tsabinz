import Image from "next/image";
import React from "react";

const FashionInsights = () => {
  return (
    <div className="md:my-[140px] mb-12 px-4 md:px-[96px] py-[64px] flex flex-col">
  
  <h1 className="text-center mb-8 text-[18px] md:text-[22px]">FASHION INSIGHTS</h1>

  {/* Content Section */}
  <div className="flex flex-col gap-6 lg:flex-row">
    
    {/* Left Section */}
    <div className="flex lg:flex-row w-full lg:w-1/2 rounded-lg overflow-hidden">
      {/* Image */}
      <div className="flex-1 relative rounded-tl-lg rounded-bl-lg h-[240px] md:h-[364px]">
        <Image
          src="/images/fashion-insights-1.jpg"
          alt="fashioninsights"
          layout="fill"
          objectFit="cover"
          className="rounded-tl-lg rounded-bl-l"
        />
      </div>

      {/* Text Content */}
      <div
        className="flex flex-1 flex-col justify-between py-6 h-[240px] md:h-[364px] px-4 md:py-8 md:px-6 gap-4"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="flex items-center gap-2">
          <Image src="/images/clock.svg" alt="clock" width={20} height={20} />
          <p className="text-[10px] md:text-[12px]" style={{ color: "#919191" }}>
            24th June, 2024
          </p>
        </div>
        <h1
          className="text-[14px] md:text-[18px] font-semibold"
          style={{ color: "#191919" }}
        >
          Style Stories: Your Guide to Effortless Fashion
        </h1>
        <p
          className="text-[11px] md:text-[14px]"
          style={{ color: "#525252" }}
        >
          Discover the latest trends, timeless tips, and insider fashion
          secrets to elevate your wardrobe.
        </p>
        <div className="flex items-center gap-2 mt-auto" style={{ color: "#919191" }}>
          <p className="text-[10px] md:text-[12px]">READ MORE</p>
          <Image src="/images/arrow-learn-more.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex w-full lg:w-1/2 gap-3">
      {/* Image 2 */}
      <div className="flex-1 relative h-[240px] md:h-[364px] rounded-lg overflow-hidden">
        <Image
          src="/images/fashion-insights-2.jpg"
          alt="fashioninsights"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Image 3 */}
      <div className="flex-1 relative h-[240px] md:h-[364px] rounded-lg overflow-hidden">
        <Image
          src="/images/fashion-insights-3.jpg"
          alt="fashioninsights"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-center mt-8">
    <button className="shop-btn-dark px-6 py-3 text-[14px] md:text-[16px]">
      VIEW ALL
    </button>
  </div>
</div>

  );
};

export default FashionInsights;
