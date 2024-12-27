import { sales } from '../../constant/constant'
import Image from 'next/image'
import React from 'react'

const Sales = () => {
  return (
    <div className="w-full pt-5 px-8 lg:px-[96px] pb-[120px] bg-[#FCFCFC] ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 mt-[32px]">
        {/* Item 1 */}
        {sales.map((item) => (
          <div key={item.id} className="relative">
            <Image
              src={item.image}
              alt="new-arrival-1"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute top-3 right-3 cursor-pointer">
              <Image
                src="/images/love.svg"
                alt="new-arrival-1"
                width={36}
                height={36}
              />
            </div>
            <div className='py-1 px-1 md:px-3 bg-white absolute top-3 left-3 cursor-pointer rounded-sm text-xs md:text-base'>SALES</div>
            <div>
              <div className="flex items-center justify-between ">
                <p className="my-3 truncate text-sm md:txt-base">{item.text}</p>
                <Image
                  src="/images/bin.svg"
                  alt="new-arrival-1"
                  width={20}
                  height={20}
                />
              </div>
              <p className='text-sm md:txt-base'>{item.price}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Sales