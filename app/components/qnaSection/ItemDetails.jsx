"use client";
import Image from "next/image";
import React, { useState, useEffect,useMemo } from "react";
import { RiStarSFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "next/navigation";
import { getProductBySlug } from "../../api";
import { WishlistButton } from "../wishlistButton";
import AddToCart from "../cart/addtoCart"



const product = [
  {
    name: "Y2K ChromeWave Tube Top",
    image: "/images/order-1.jpg",
    placedOn: "2024-11-21",
    orderId: "#12345",
    price: "$150.00",
    colors:["blue,black"]
  },
  
];

const ItemDetails = ({reviews}) => {
  // const [product,setProduct]=useState([{
  //   name: "Y2K ChromeWave Tube Top",
  //   image: "/images/order-1.jpg",
  //   placedOn: "2024-11-21",
  //   orderId: "#12345",
  //   price: "$150.00",
  //   sizes:["small","large"]
  // }])
  // const param=useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [quantity,setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(''); 
  const [selectedColor, setSelectedColor] = useState('select a Color');

  const handleSizeClick = (size) =>{
    setSelectedSize(size);
  }

  const handleColorClick = (color) =>{
    setSelectedColor(color);
  }

  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDecrement = () => { 
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
   }; 
  
  const handleIncrement = () => {
     setQuantity((prevQuantity) => Math.min(prevQuantity + 1, product.available)); 
    };

  // useEffect(() => { 
  //    if (product.sizes && product.sizes.length > 0) 
  //     { 
  //       setSelectedSize(product.sizes[0].value); 
  //       setSelectedColor(product.colors[0].name);
  //     } 
  //   }, [product.sizes]);

  // useEffect(()=>{
  //   const fetchproduct = async () =>{
  //       try{
  //         const data= await getProductBySlug(param.id)
  //         setProduct(data.data)
  //       }catch(err){
  //           console.log(err)
  //       }
  //     }

  //   fetchproduct()
  // },[])

  // Calculate average rating and ratings distribution
  // const { averageRating, ratingCounts } = useMemo(() => {
  //   const totalRatings = reviews.length;
  //   const ratingSum = reviews.reduce((acc, review) => acc + review.rating, 0);
  //   const averageRating = totalRatings ? (ratingSum / totalRatings).toFixed(1) : 0;

  //   const ratingCounts = [1, 2, 3, 4, 5].reduce((acc, rating) => {
  //     acc[rating] = reviews.filter(review => review.rating === rating).length;
  //     return acc;
  //   }, {});

  //   return { averageRating, ratingCounts };
  // }, [reviews]);

  // if(!product){
  //   return<div>loading..</div>
  // }

 

  return (
    <div className="flex flex-col md:flex-row w-full ">
      <div className="w-full md:w-[55%]">
      {/* {product.images && product.images.length > 0 && ( */}
        <div>
          <Image
            // src={product.images[0].url}
            src="/images/order-1.jpg"
            alt="product"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      {/* )} */}
      </div>
      <div className="w-full md:w-[45%] px-8 lg:px-[46px] py-8 md:py-0">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="text-[22px] font-bold mb-3">{product.name}</h1>
          <div className="flex justify-between">
            <p className="text-[18px] self-end ">NRs. 7500</p>
            <ul className='flex  text-yellow-500 items-center'>
              {[...Array(5)].map((_, index) => (
                <li key={index} className={index < 4 ? 'text-yellow-500' : 'text-gray-300'}>
                  <RiStarSFill  className='w-8 h-8'/>
                </li>
              ))}
              {/* {[...Array(5)].map((_, index) => (
                <li key={index} className={index < averageRating ? 'text-yellow-500' : 'text-gray-300'}>
                  <RiStarSFill  className='w-8 h-8'/>
                </li>
              ))} */}
               
              {/* <p className=" text-black self-center">({averageRating})</p> */}
              <p className=" text-black self-center">24</p>

            </ul>
          </div>
          <div>
            <p className="text-gray-600 mb-3">Color: {selectedColor}</p>
            <div className="flex gap-3">
              {/* {product.colors ? product.colors.map((color,index) =>(
                <div key={index} onClick={()=> handleColorClick(color.name)} style={{ backgroundColor: color.value }} className={`w-6 h-6 border-2 rounded-full cursor-pointer ${selectedColor === color.name ? 'border-1 border-black transform scale-110' : ''}`}></div>
              )):<p>No Colors Available</p>} */}
                <div   style={{ backgroundColor: "#000000" }} className={`w-6 h-6 border-2 rounded-full cursor-pointer`}></div>
                <div   style={{ backgroundColor: "blue" }} className={`w-6 h-6 border-2 rounded-full cursor-pointer`}></div>

            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <p>Size: {selectedSize}</p>
              <p className="underline cursor-pointer">View size guide</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              
                {/* {product.sizes ? product.sizes.map((size,index)=>(
                    <p key={index} onClick={()=> handleSizeClick(size.value)} className={`border rounded-full text-center cursor-pointer p-2 lg:py-3 ${selectedSize === size.value ? 'border-1 border-black transform scale-110' : ''}`}>{size.label}</p>
                )):<p>No sizes available</p>} */}
                <p  onClick={()=> handleSizeClick(size.value)} className={`border rounded-full text-center cursor-pointer p-2 lg:py-3 `}>small</p>
                <p  onClick={()=> handleSizeClick(size.value)} className={`border rounded-full text-center cursor-pointer p-2 lg:py-3 `}>Large</p>


             
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[14px] text-[#525252] mb-3">
              <p>Quantity: {quantity}</p>
              <p>Only {product.available} pieces in stock</p>
            </div>
            <div className="w-full h-12 px-6 py-5 border rounded-full flex justify-between items-center">
              <div className="text-2xl cursor-pointer">
                <FiMinus onClick={handleDecrement} />
              </div>
              <p>{quantity}</p>
              <div className="text-2xl  cursor-pointer">
                <IoAdd onClick={handleIncrement} />
              </div>
            </div>
          </div>
          <div className="">
            <AddToCart product={product} quantity={quantity} color={selectedColor} size={selectedSize} />
            <WishlistButton productId={product._id} />
          </div>

          {/* ***************************** */}

          <div>
              <button
                onClick={toggleDetails}
                className="w-full text-left text-lg font-bold pb-1 flex justify-between items-center"
              >
                Product Detail
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown/>
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 w-full">
                  <p className="mb-4 leading-7 tracking-wide">
                    {/* {product.productDetails.description} */}
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                  <ul className="list-disc pl-6">
                    {/* <li>Materials: {product.productDetails.materials}</li> */}
                    <li>Materials: Cotton Fabric</li>

                    {/* <li>
                      Length from high point shoulder: Approx {product.productDetails.length}
                    </li>
                    <li>Stretch Factor: {product.productDetails.stretchFactor}</li>
                    <li>Clean: {product.productDetails.care}</li>
                    <li>Model Is Wearing A Size {product.productDetails.modelDetails.size} (US-2)</li>
                    <li>Model Is {product.productDetails.modelDetails.height}</li> */}
                    <li>
                      Length from high point shoulder: Approx 24 Inch
                    </li>
                    <li>Stretch Factor: High Stretch</li>
                    <li>Clean:Hand Wash Only</li>
                    <li>Model Is Wearing A Size XS (US-2)</li>
                    <li>{`Model Is 5'2`}</li>
                  </ul>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
