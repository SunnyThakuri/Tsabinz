import Image from "next/image";
import React from "react";
import FashionInsights from "../../components/FashionInsights";

const page = ({ params }) => {
  return (
    <div className="bg-[#FCFCFC] pt-[58px]">
        {/* top */}
      <div className="flex flex-col md:flex-row">
        <div
          className="md:w-1/2 w-full bg-[#181818] py-12 lg:py-[200px] lg:px-[104px] px-8"
          style={{ boxSizing: "border-box" }}
        >
          <h1
            className=" text-4xl md:text-[54px] text-white leading-[62px] mb-6"
            style={{ fontFamily: 'Times, "Times New Roman", serif' }}
          >
            Inspire Your Look: Fashion Tips, Trends, and More
          </h1>
          <p className="text-[#B3B2B2]">
            Discover expert styling tips, in-depth trend forecasts, and
            comprehensive fashion advice, all designed to keep you effortlessly
            chic and ahead of the curve.
          </p>
        </div>
        <div className="md:w-1/2 w-full p-4 h-96 md:h-auto relative">
          <Image
            src="/images/womenscollections.jpg"
            alt="blog"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

        {/* mid */}
      <div className="w-full p-8 md:px-40 lg:px-72 mx-auto mt-[64px]">
        <p>
          In the ever-evolving world of fashion, staying ahead of the curve can
          feel like a full-time job. But with the right insights and a few
          timeless tips, you can navigate trends effortlessly while maintaining
          a look that’s uniquely your own. Whether you’re updating your wardrobe
          or refining your style, we’ve got you covered with expert advice and
          trend predictions that will have you stepping out with confidence.
        </p>

        <div className="text-[#313131] flex flex-col gap-10">
          <h1 className="font-bold mt-12">
            1. Styling Tips to Elevate Your Everyday Look
          </h1>
          <p className="">
            A great outfit starts with the basics, but it’s how you style those
            pieces that truly sets you apart. Here are a few expert-approved
            tips to take your look to the next level:
          </p>
          <ul className="flex flex-col gap-8 pl-6" style={{listStyleType: "disc"}}>
            <li>
              Layer Like a Pro: Master the art of layering to add depth and
              interest to your outfits. Pair a structured blazer over a delicate
              dress or a cozy sweater with a crisp button-down shirt for
              contrast.
            </li>
            <li>
              Accessories Matter: Don’t underestimate the power of
              accessories. A statement necklace, bold earrings, or a chic belt
              can completely transform a simple outfit into something
              extraordinary.
            </li>
            <li>
              Mix Textures and Fabrics: Pair contrasting materials like silk
              with leather or denim with cashmere for a rich, dynamic look. This
              subtle detail adds sophistication and dimension to any outfit.
            </li>
            <li>
              Fit is Key: No matter the trend, ensuring your clothes fit well
              is the foundation of a polished appearance. Tailored pieces
              instantly elevate your style, so don’t be afraid to get your
              favorite items altered to perfection.
            </li>
          </ul>

        </div>

        <div className="text-[#313131] flex flex-col gap-10">
          <h1 className="font-bold mt-12">2. Trend Forecasts: What to Watch This Season</h1>
          <p>
            While classic style never fades, keeping an eye on emerging trends
            is key to maintaining a modern wardrobe. Here’s what’s hot right
            now, and how you can incorporate these trends into your look:
          </p>
          <ul className="flex flex-col gap-8 pl-6" style={{listStyleType: "disc"}}>
          <li>
            Oversized Everything: From coats to shirts, oversized silhouettes
            are having a major moment. The key to pulling off this trend?
            Balance the proportions with more fitted pieces like skinny jeans or
            structured pants.
          </li>
          <li>
            Bold Colors and Prints: Vibrant hues and eye-catching prints are
            taking over this season. Whether it’s a head-to-toe bold color or a
            pop of print in accessories, don’t be afraid to embrace the drama.
          </li>
          <li>
            Sustainable Fashion: The move toward eco-conscious clothing is not
            just a trend—it’s a shift in the way we think about fashion. Look
            for high-quality, timeless pieces that you’ll wear for years, and
            invest in brands that prioritize sustainability.
          </li>
          <li>
            90s Revival: From slip dresses to chunky shoes, the 90s are making
            a big comeback. Incorporate this nostalgic trend with a modern
            twist—try pairing a slip dress with a tailored blazer or rock
            high-waisted mom jeans with a sleek crop top.
          </li>
          </ul>
        </div>

        <div className="mt-12 w-full h-[500px] relative">
            <Image src="/images/blog.jpg" alt="blog" layout="fill" objectFit="cover" objectPosition="top" className="rounded-xl"/>
        </div>

        <div className="text-[#313131] flex flex-col gap-10">
          <h1 className="font-bold mt-12">
            3. Building a Timeless Wardrobe: Essentials You Can’t Live Without
          </h1>
          <p className="">
          While trends come and go, having a solid foundation of wardrobe essentials will always keep you looking chic. These are the timeless pieces that never go out of style:
          </p>
          <ul className="flex flex-col gap-8 pl-6" style={{listStyleType: "disc"}}>
            <li>
              Layer Like a Pro: Master the art of layering to add depth and
              interest to your outfits. Pair a structured blazer over a delicate
              dress or a cozy sweater with a crisp button-down shirt for
              contrast.
            </li>
            <li>
              Accessories Matter: Don’t underestimate the power of
              accessories. A statement necklace, bold earrings, or a chic belt
              can completely transform a simple outfit into something
              extraordinary.
            </li>
            <li>
              Mix Textures and Fabrics: Pair contrasting materials like silk
              with leather or denim with cashmere for a rich, dynamic look. This
              subtle detail adds sophistication and dimension to any outfit.
            </li>
            <li>
              Fit is Key: No matter the trend, ensuring your clothes fit well
              is the foundation of a polished appearance. Tailored pieces
              instantly elevate your style, so don’t be afraid to get your
              favorite items altered to perfection.
            </li>
          </ul>

        </div>
        <div className="text-[#313131] flex flex-col gap-10">
          <h1 className="font-bold mt-12">
          4. Stay Confident, Stay Authentic
          </h1>
          <p>Fashion is a form of self-expression, and the most important rule is to wear what makes you feel confident. While trends are fun to experiment with, staying true to your personal style is what will always keep you looking chic and put-together. Whether you&apos;re mixing new trends with your favorite staples or stepping out in a completely bold look, your confidence is the best accessory.</p>
          </div>
        <div className="text-[#313131] flex flex-col gap-10">
          <h1 className="font-bold mt-12">
          Final Thoughts
          </h1>
          <p>With these expert styling tips, trend insights, and essential wardrobe pieces, you&apos;ll be ready to take on each season with style and ease. Remember, fashion is about having fun and expressing yourself, so don’t be afraid to take risks and embrace the trends that resonate with you. Now go ahead—stay chic, stay stylish, and most importantly, stay true to yourself!</p>
          <p></p>
          </div>
          <div>
            <p>This blog post offers practical advice while staying engaging and informative, perfectly matching the professional tone you&apos;re aiming for.</p>
          </div>
          <div className="flex gap-3 mt-8">
            <div className="w-1/2">
                <Image src="/images/express-1.jpg" alt="" width={500} height={500} className='rounded-xl'/>
            </div>
            <div className="w-1/2 relative">
                <Image src="/images/y2k-1.jpg" alt="" width={500} height={500} className='rounded-xl'/>
            </div>
          </div>
      </div>

      {/* bottom */}
      <FashionInsights/>

      {/* <h1 className="text-center mb-8 text-[22px]">OTHER INSIGHTS</h1>
      <div className="h-[364px] flex gap-3 mb-[120px] relative">
        <div className="flex-1 flex rounded-lg overflow-hidden">
          <div className="w-1/2 relative">
            <Image
              src="/images/fashion-insights-1.jpg"
              alt="fashioninsights"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          
          <div className="w-1/2 py-8 px-6 flex flex-col gap-6" style={{ backgroundColor: "#F1F1F1" }}>
            <div className="flex items-center gap-2">
              <Image src={"/images/clock.svg"} alt="quote" width={20} height={20} />
              <p className="text-[12px]" style={{color: "#919191"}}>24th June, 2024</p>
            </div>
            <h1 className="text-[18px]" style={{color: "#191919"}}>Style Stories: Your Guide to Effortless Fashion</h1>
            <p style={{color: "#525252"}}>Discover the latest trends, timeless tips, and insider fashion secrets to elevate 
            your wardrobe.</p>
            <div className="flex items-center gap-2 mt-[40px]" style={{color: "#919191"}}>
                <p className="text-[12px]">READ MORE</p>
                <Image src={"/images/arrow-learn-more.svg"} alt="quote" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3">
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <Image
              src="/images/fashion-insights-2.jpg"
              alt="fashioninsights"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="flex-1 relative rounded-lg overflow-hidden">
            <Image
              src="/images/fashion-insights-3.jpg"
              alt="fashioninsights"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>

        <div className='absolute top-1/2 -left-6 -translate-y-1/2 cursor-pointer'>
            <Image 
            src="/images/arrow-left.svg"
            alt="arrow-left"
            width={10}
            height={20}

            />
        </div>
        <div className='absolute top-1/2 -right-6 -translate-y-1/2 cursor-pointer'>
            <Image 
            src="/images/arrow-right.svg"
            alt="arrow-left"
            width={10}
            height={20}

            />
        </div>
      </div> */}
    </div>
  );
};

export default page;
