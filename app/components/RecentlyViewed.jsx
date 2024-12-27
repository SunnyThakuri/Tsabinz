import Image from 'next/image'
import React from 'react'

const RecentlyViewed = () => {
  return (
    // <div className='mt-[48px] relative'>
    //     <h1 className='text-[22px]'>NEW ARRIVALS</h1>
    //     <div className='flex items-center gap-3 mt-[32px]'>
    //         <div className='flex-1 relative'>
    //             <Image 
    //             src="/images/recently-viewed-1.jpg"
    //             alt="new-arrival-1"
    //             width={400}
    //             height={400}
    //             layout="responsive"
    //             objectFit="cover"
    //             />
    //             <div className='absolute top-3 right-3 cursor-pointer'>
    //                 <Image 
    //                 src="/images/love.svg"
    //                 alt="new-arrival-1"
    //                 width={36}
    //                 height={36}
    //                 />
    //             </div>
    //             <div>
    //                 <p className='my-3'>Y2K ChromeWave Tube Top</p>
    //                 <p>NRs. 1500</p>
    //             </div>
    //         </div>
    //         <div className='flex-1 relative'>
    //             <Image 
    //             src="/images/recently-viewed-2.jpg"
    //             alt="new-arrival-1"
    //             width={400}
    //             height={400}
    //             layout="responsive"
    //             objectFit="cover"
    //             />
    //             <div className='absolute top-3 right-3 cursor-pointer'>
    //                 <Image 
    //                 src="/images/love.svg"
    //                 alt="new-arrival-1"
    //                 width={36}
    //                 height={36}
    //                 />
    //             </div>
    //             <div>
    //                 <p className='my-3'>RelaxFit Lounge Pants</p>
    //                 <p>NRs. 1500</p>
    //             </div>
    //         </div>
    //         <div className='flex-1 relative'>
    //             <Image 
    //             src="/images/recently-viewed-3.jpg"
    //             alt="new-arrival-1"
    //             width={400}
    //             height={400}
    //             layout="responsive"
    //             objectFit="cover"
    //             />
    //             <div className='absolute top-3 right-3 cursor-pointer'>
    //                 <Image 
    //                 src="/images/love.svg"
    //                 alt="new-arrival-1"
    //                 width={36}
    //                 height={36}
    //                 />
    //             </div>
    //             <div>
    //                 <p className='my-3'>Y2K Cosmic Dream Wrap Skirt</p>
    //                 <p>NRs. 1500</p>
    //             </div>
    //         </div>
            
    //     </div>
        

      

    //     <div className='flex justify-center mt-12'>   
    //         <button className='shop-btn-dark rounded-none'>VIEW ALL</button>
    //     </div>
    // </div>
    <div className="mt-[48px] relative">
      <h1 className="text-[22px]">NEW ARRIVALS</h1>
      <div className="flex flex-col w-full md:flex-row md:items-center gap-3 mt-[32px]">
        {/* Product 1 */}
        <div className="flex-1">
          <div className="relative w-full h-[550px]">
            <Image
              src="/images/recently-viewed-1.jpg"
              alt="new-arrival-1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-3 right-3 cursor-pointer">
              <Image
                src="/images/love.svg"
                alt="like-icon"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="my-1">Y2K ChromeWave Tube Top</p>
            <p>NRs. 1500</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex-1">
          <div className="relative w-full h-[550px]">
            <Image
              src="/images/recently-viewed-2.jpg"
              alt="new-arrival-2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-3 right-3 cursor-pointer">
              <Image
                src="/images/love.svg"
                alt="like-icon"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="my-1">RelaxFit Lounge Pants</p>
            <p>NRs. 1500</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex-1">
          <div className="relative w-full h-[550px]">
            <Image
              src="/images/recently-viewed-3.jpg"
              alt="new-arrival-3"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-3 right-3 cursor-pointer">
              <Image
                src="/images/love.svg"
                alt="like-icon"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="my-1">Y2K Cosmic Dream Wrap Skirt</p>
            <p>NRs. 1500</p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="shop-btn-dark-flat">VIEW ALL</button>
      </div>
    </div>
  )
}

export default RecentlyViewed