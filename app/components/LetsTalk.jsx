import Image from 'next/image'
import React from 'react'

const LetsTalk = () => {
  return (
    <div className='w-full py-12 md:py-[120px] px-8 md:px-[60px] lg:px-[105px] bg-[#F1F1F1] flex flex-col lg:flex-row gap-4  lg:gap-[90px]'>
        <div className='max-h-[778px] flex md:flex-col justify-between gap-14'>
            <div className='md:w-[313px] w-full flex flex-col gap-3'>
                <h1 className='text-base md:text-[22px] font-bold'>Redefining Sophistication</h1>
                <p className=' text-sm md:text-base'>A Fusion of Timeless Style and Masterful Craft</p>
                <Image src="/images/signature.svg" alt="" width={145} height={58} className='md:self-end self-start '/>
            </div>
            <div className='hidden sm:block'>
                <button className='shop-btn-dark'>LET&apos;S TALK</button>
            </div>
            <div>
                <div className='w-[26px] md:flex flex-col md:flex-row lg:flex-col justify-center items-center gap-6 hidden'>
                        <a className='h-5 w-5 cursor-pointer'>
                            <Image src="/images/facebook.svg" alt="instagram" width={24} height={20} className='w-full  h-full'/>
                        </a>
                        <a className='h-5 w-5 cursor-pointer'>
                            <Image src="/images/twitter.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                        </a>
                        <a className='h-5 w-5 cursor-pointer'>
                            <Image src="/images/instagram.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                        </a>
                        <a className='h-5 w-8 cursor-pointer'>
                            <Image src="/images/youtube.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                        </a>
                        <a className='h-5 w-8 cursor-pointer'>
                            <Image src="/images/github.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                        </a>
                    </div>
            </div>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-8 mx-auto items-center'>
            <div className='relative  w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'>
                <Image src="/images/lets-talk-1.jpg" alt="" height={400} width={500} className='w-full h-full'/>
            </div>
            <div className='relative  w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'>
                <Image src="/images/lets-talk-2.jpg" alt=""  height={400} width={500} 
                    className='w-full h-full object-cover'/>
            </div>
            <div className='relative w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'> 
                <Image src="/images/lets-talk-3.jpg" alt=""  height={400} width={500} className='w-full  h-full object-cover'/>
            </div>
            <div className='relative w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'>
                <Image src="/images/lets-talk-4.jpg" alt=""  height={400} width={500} className='w-full  h-full object-cover'/>
            </div>
            <div className='w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'>
                <Image src="/images/lets-talk-5.jpg" alt=""  height={400} width={500} className='w-full  h-full object-cover'/>
            </div>
            <div className='w-full h-full md:w-[408px] md:h-[620px] max-w-[350px] lg:max-w-[408px]'>
                <Image src="/images/lets-talk-6.jpg" alt=""  height={400} width={500} className='w-full  h-full object-cover'/>
            </div>

        </div>
    </div>
    
  )
}

export default LetsTalk