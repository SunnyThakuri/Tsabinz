
// import { allInsights } from "@/constant/constant";

import { allInsights } from "../../constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div className="pt-6 px-8 md:px-16 lg:px-[94px] pb-[120px] bg-[#FCFCFC] w-full">
      {/* top */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="lg:w-[320px] w-full">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/clock.svg" alt="clock" width={20} height={20} />
            <p className="text-[12px] text-[#919191]">24th June, 2024</p>
          </div>
          <h1 className="text-[22px] mb-6">
            Style Stories: Your Guide to Effortless Fashion
          </h1>
          <p className="text-[#767676]  md:mb-[146px]">
            Discover the latest trends, timeless tips, and insider fashion
            secrets to elevate your wardrobe.
          </p>
          <div
            className="flex items-center gap-2 mt-[40px] mb-8 md:mb-0"
            style={{ color: "#919191" }}
          >
            <p className="text-[12px] ">READ MORE</p>
            <Image
              src={"/images/arrow-learn-more.svg"}
              alt="quote"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="lg:w-[720px] lg:h-[640px]  w-full h-96  relative">
          <Image
            src="/images/refined-style-2.jpg"
            alt="blog"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="mt-12">
        <h1 className="text-[22px] mb-8">All Insights</h1>
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-3 md:gap-y-8">
          {allInsights.map((item, i) => (
            <Link href={`/blog/${item.id}`} key={item.id} className="col-span-1">
              <div className="relative w-full  h-64 md:h-[260px]">
                <Image
                  src={item.img}
                  alt="blog"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-2xl"
                />
              </div>
              <div className="mt-3">
                <div className="mb-2 flex items-center gap-3">
                  <Image
                    src="/images/clock.svg"
                    alt="clock"
                    width={20}
                    height={20}
                  />
                  <p className="text-[12px] text-[#919191]">{item.time}</p>
                </div>
                <p>{item.story}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
