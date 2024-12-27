import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' w-full pt-[80px] px-4 lg:px-[105px] text-[14px] pb-10' style={{backgroundColor: "#131313", color:"#AEAEAE"}}>
        <div className='flex flex-col gap-6 lg:flex-row justify-between text-center lg:text-left'>
            <div>
                <h1 className='text-white text-[16px] mb-6'>COMPANY</h1>
                <div className='flex flex-col gap-3'>
                <Link href={"/about"}>
                    <p>INSIGHTS</p>
                </Link>
                
                <Link href={"/about"}>
                    <p>ABOUT TSABINZ</p>
                </Link>
                <Link href={"/contact"}>
                    <p>CONTACT US</p>
                </Link>
                
                </div>
            </div>
            <div>
                <h1 className='text-white text-[16px] mb-6'>USEFUL LINKS</h1>
                <div className='flex flex-col gap-3'>
                <Link href={"/contact"}>
                    <p>RETURN POLICY</p>
                </Link>
                <Link href={"/contact"}>
                    <p>SHIPPING INFO</p>
                </Link>
                <Link href={"/contact"}>
                    <p>SIZE GUIDE</p>
                </Link>

                </div>
            </div>
            <div>
                <h1 className='text-white text-[16px] mb-6'>LEGAL LINKS</h1>
                <div className='flex flex-col gap-3'>
                <Link href={"/contact"}>
                    <p>PRIVACY POLICY</p>
                </Link>
                <Link href={"/contact"}>
                    <p>TERMS & CONDITIONS</p>
                </Link>
                
                
                </div>
            </div>
            <div>
                <h1 className='text-white lg:text-[16px] mb-6'>Subscribe to our Newsletter</h1>
                <div className='relative'>
                    <input type="email" placeholder='Your email address' className='w-full lg:w-[320px] h-[44px] p-4 rounded-full placeholder-white' style={{backgroundColor: "#5C5C5C"}} />
                    <button className='absolute right-[7px] top-[50%] -translate-y-[50%] bg-black text-white px-3 py-[6px] rounded-full'>Sign Up</button>
                    
                </div>
                <div className='flex gap-2 mt-12 justify-center lg:justify-normal'>
                    <a className='h-5 w-5 cursor-pointer'>
                        <Image src="/images/facebook.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
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
        <div className='border-t-[1px] border-[#AEAEAE] mt-3 lg:mt-[104px]'></div>
        <p className='text-center mt-8'>&copy; TSABINZ LLC. All rights reserved</p>
    </div>
  )
}

export default Footer