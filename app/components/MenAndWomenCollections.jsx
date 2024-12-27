import Link from "next/link";
import React from "react";

const MenAndWomenCollections = () => {
  return (
    <div className="flex flex-col lg:flex-row  h-[800px] text-[36px]">
      <div
        className="flex-1 bg-cover flex justify-center items-center relative"
        style={{ backgroundImage: "url('/images/menscollections.jpg')" }}
      >
        <p className="text-white">MEN&apos;S COLLECTIONS</p>
        <Link href="/menSections" className="shop-btn absolute bottom-[84px]">SHOP</Link>
      </div>

      <div
        className="flex-1 bg-cover flex justify-center items-center relative"
        style={{ backgroundImage: "url('/images/womenscollections.jpg')" }}
      >
        <p className="text-white">WOMEN&apos;S COLLECTIONS</p>
        <Link href={"/womenSections"} className="shop-btn absolute bottom-[84px]">SHOP</Link>
      </div>
    </div>
  );
};

export default MenAndWomenCollections;
