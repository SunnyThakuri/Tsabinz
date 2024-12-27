import React from 'react'

const ClassicFit = () => {
  return (
    <div className='lg:h-[811px]  w-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url('/images/classicfit.gif')"}}>
        <div className='text-center'>
            <h1 className='text-[84px] h-[300px] text-white mb-[82px] hero-font'>CLASSIC FIT</h1>
            <button className='shop-btn mb-20 lg:mb-0 '>SHOP</button>
        </div>
    </div>
  )
}

export default ClassicFit