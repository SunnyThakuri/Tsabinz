"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronRight ,HiOutlineChevronLeft } from "react-icons/hi2";
import WishlistHeartButton from '../wishlistButton';
import { useRouter } from 'next/navigation';

const arrival = [
  {
    name: "Y2K ChromeWave Tube Top",
    image: "/images/order-1.jpg",
    placedOn: "2024-11-21",
    orderId: "#12345",
    price: "$150.00",
  },
  {
    name: "RelaxFit Lounge Pants",
    image: "/images/order-2.jpg",
    placedOn: "2024-11-21",
    orderId: "#12346",
    price: "$200.00",
  },
  {
    name: "Y2K Cosmic Dream Wrap Skirt",
    image: "/images/instagram-2.png",
    placedOn: "2024-11-21",
    orderId: "#12346",
    price: "$200.00",
  },
];


const Carousel = ({items}) => {
  const router = useRouter()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
        <div className='hidden sm:block'>
            <ul className="flex justify-center space-x-0.5">{dots}</ul>
        </div>
    ),
    customPaging: i => (
        <div className="w-2 h-2 mt-8 bg-[#D9D9D9] rounded-full hidden sm:block"></div>
    )
  };
  return (
    
      <Slider {...settings}>
        {arrival.map((item, index) => (
          <div key={index} className='w-full px-2 pb-4 mt-8 relative cursor-pointer' 
                // onClick={()=> router.push(`/productdetail/${item._id}`)}>
                onClick={()=> router.push(`/productdetail/1`)}>
              <div className='lg:h-[550px] md:h-350px h-96 w-full'>
                <Image
                  // src={item.image.url}
                  src={item.image}
                  alt="item"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            
            <div className='absolute right-2 top-0'>
              <WishlistHeartButton productId={item._id}/>
            </div>
            <div>
              <p className='my-3 truncate'>{item.name}</p>
              <p>NRs. {item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
  );
}

const NextArrow = (props) => {
  const {  onClick } = props;
  return(
    <div
    className="absolute text-black hidden sm:block bottom-1/2  -translate-x-[30px] sm:-right-16  md:flex items-center justify-center size-[50px] cursor-pointer"
    onClick={onClick}
    >
      <HiOutlineChevronRight  size={30}/>
     </div>
  )
};

const PrevArrow = (props) => {
  const {  onClick } = props;

  return(
    <div
    className="z-50 text-black hidden sm:block absolute bottom-1/2 -left-10 sm:-left-8 md:flex items-center justify-center size-[50px] cursor-pointer"
    onClick={onClick}
    >
      <HiOutlineChevronLeft size={30}/>
     </div>
  )
};

export default Carousel;
