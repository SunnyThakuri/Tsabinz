import Image from 'next/image'
import React from 'react'

const ExpressYourIdentity = () => {
  return (

    <div className=' w-full mt-4 lg:mt-[80px] h-[500px] lg:h-[800px] flex flex-col justify-center items-center relative'>
        <h1 className='lg:w-[623px] w-full lg:text-[56px]  text-center font-[275] mt-8 lg:mt-[293px] z-10 '>We Provide The Best<br/>Outfit to Help You<br/>Express Your Identity</h1>
        <button className='shop-btn-dark mt-12 lg:mt-[144px]'>SHOP</button>

        <div className='md:w-[190px] w-20 md:h-28 h-[234px] overflow-hidden absolute left-0 top-0 md:left-[10%] md:top-[7%] -rotate-[17deg]'>
            <Image src="/images/express-1.jpg" alt="expressyouridentity" layout='fill' objectFit='cover' className='rounded-lg'/>
        </div>
        <div className='md:w-[190px] w-20 md:h-28 h-[234px] overflow-hidden absolute right-8 bottom-0  md:right-[10%] md:bottom-[6%] rotate-[15deg]'>
            <Image src="/images/express-2.jpg" alt="expressyouridentity" layout='fill' objectFit='cover' className='rounded-lg'/>
        </div> 
        <div className='w-[80px] hidden sm:block md:hidden lg:block  h-[90px] bg-black absolute left-[14%] bottom-[8%] rounded-lg -rotate-[28deg]'></div>
        <div className='w-[80px] hidden sm:block md:hidden lg:block h-[90px] bg-black absolute top-[9%] right-[13%] rounded-lg rotate-[37deg]'></div>
    </div>
  )
}

export default ExpressYourIdentity