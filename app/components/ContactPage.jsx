import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <>
        <div
      className="h-[800px] flex justify-center items-center"
      style={{
        backgroundImage: "url('/images/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[596px] bg-white/60 p-12 rounded-3xl backdrop-blur-md">
        <h1 className="text-[22px] text-center">Contact Us</h1>
        <form className=" flex flex-col gap-4 mt-3">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-b-[1px] border-[#B3B3B3] w-full h-[54px] bg-transparent pl-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-b-[1px] border-[#B3B3B3] w-full h-[54px] bg-transparent pl-2 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="border-b-[1px] border-[#B3B3B3] w-full h-[54px] bg-transparent pl-2 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact"
              className="border-b-[1px] border-[#B3B3B3] w-full h-[54px] bg-transparent pl-2 focus:outline-none"
            />
          </div>
          <div>
            <textarea
            rows={4}
              placeholder="Message"
              className="border-b-[1px] border-[#B3B3B3] w-full bg-transparent pl-2 pt-2 focus:outline-none resize-none"
            />
          </div>
          <button className="shop-btn-dark self-center">Submit</button>
        </form>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between md:items-center py-16 md:py-[155px] px-4 md:px-16 lg:px-[127px]">
        <div className="flex-1">
            <div className="md:max-w-[240px] w-full">
                <h1 className="text-lg md:text-2xl font-bold mb-6">Fashion Assistance 
                    at Your Fingertips</h1>
                <p className="text-[#585858]">Have questions? Our team is here to help with style advice and order support.</p>
            </div>
        </div>
        
        <div className="flex-1 flex flex-col items-start gap-12">
            <div className="flex justify-center items-center gap-2 md:gap-[43px]">
                <Image src={"/images/telephone.svg"} className='h-8 md:h-auto' alt="logo" width={58} height={58}/>
                <h1 className="text-sm md:text-[18px] text-[#585858]">XXX XXX XXX</h1>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-[43px]">
                <Image src={"/images/location.svg"} className='h-8 md:h-auto' alt="logo" width={58} height={58}/>
                <h1 className="text-sm md:text-[18px] text-[#585858]">Kathmandu, Nepal</h1>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-[43px]">
                <Image src={"/images/mail.svg"} className='h-8 md:h-auto' alt="logo" width={58} height={58}/>
                <h1 className="text-sm md:text-[18px] text-[#585858]">xyz@gmail.com</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage