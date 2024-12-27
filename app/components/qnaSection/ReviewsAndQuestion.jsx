"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import QuestionModal from "./askquestion"
import ReviewModal from "./givereview"
import { useParams } from "next/navigation";
import { getProductReviews } from "../../api";
import { getProfileById } from "../../api";
import {uploadToCloudinary} from "../../utils/cloudinary"


const ReviewsAndQuestion = ({product,reviews}) => {
  const param=useParams();
  // const [reviews, setReviews] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [reviewIsOpen,setReviewIsOpen]=useState(false);
  const [askQuestionIsOpen,setaskQuestionIsOpen]=useState(false);
  const [questionsIsOpen,setQiestionIsOpen]=useState(false)

  const handleReviewSubmit = async (newReview) => {
    try {
      // Upload images to Cloudinary
      const uploadedImageUrls = await Promise.all(
        newReview.images.map((file) => uploadToCloudinary(file))
      );
  
      const reviewPayload = {
        pid: newReview.pid,
        rating: newReview.rating,
        review: newReview.review,
        images: uploadedImageUrls,
      };
  
      
      console.log("Review Payload:", reviewPayload); // Add this
      // Send the payload to the backend
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewPayload),
      });
  
      if (!response.ok) {
        console.log("Response status:", response.status);
        console.log("Response message:", await response.text());
      }
    } catch (error) {
      console.log("Error submitting review:", error);
    }
  };

    useEffect(()=>{
      const fetchUserData = async () =>{
        try{
          const userDetailPromises = reviews.map(async (review) => { 
            const userData = await getProfileById(review.user._id);
            return { [review.user._id]: userData };
          });
            const userDetailArray = await Promise.all(userDetailPromises);
            const userDetailMap = Object.assign({}, ...userDetailArray);  
            setUserDetails(userDetailMap);
        }catch(error){
          console.log('Error fetching reviews:', error);
        }
      }
      fetchUserData()
    },[reviews])

  return (

    <div className="flex  flex-col mt-12 mx-8 md:mx-[104px]">
      <div className="flex gap-6">
        <h1 onClick={()=> setQiestionIsOpen(false)} className={`cursor-pointer ${!questionsIsOpen ? 'border-b-2 border-black' : 'text-gray-400'}`} >REVIEWS(3)</h1>
        <h1 onClick={()=> setQiestionIsOpen(true)} className={`cursor-pointer ${questionsIsOpen ? 'border-b-2 border-black' : 'text-gray-400'}`} >Questions(2)</h1>
      </div>
      <div className="md:self-end flex items-center gap-2 mt-4 md:mt-0">
        <Image
          src="/images/sortby.svg"
          alt="sortby"
          width={20}
          height={20}
          className=""
        />
        <p>Sort by</p>
        <button className="bg-[#F1F1F1] flex justify-between p-1 px-4 rounded-full items-center gap-6">
          <p>Newest</p>
          <IoIosArrowDown />
        </button>
      </div>
      {/* ASK Questions Section */}
      { questionsIsOpen ? (<>
        <div className="w-full">
          {/* Question 1 */}
          <div className="mt-6 pt-10 px-4 md:px-10 flex flex-col gap-8">
            <div className="flex justify-between ">
              <div>
              <div className="flex items-center gap-4">
                {/* Profile pic and name */}
              <div className="rounded-full overflow-hidden w-[36px] h-[36px]">
                <Image
                  src="/images/y2k-1.jpg"
                  width={80}
                  height={80}
                  alt="avatar image"
                  className="object-cover"
                />
              </div>
              <p className="text-[14px] text-gray-500">Sarah Jackson</p>
            </div>
              </div>
              <p className="text-gray-300">7 months ago</p>
            </div>
            <div>
              <p className="">
              How do I find the right size?
              </p>
            </div>
            <div className=" text-[#484848] flex">
              <div className="border border-[#A9A9A9] w-[2px] h-auto ml-8" ></div>
              <div className="flex flex-col pl-4 gap-4">
                <p>TSABINZ</p>
                <p>{`Check our size chart on each product page. If you're unsure, send us your measurements, and we'll guide you`}!</p>
              </div>
            </div>
            
            <div className="border-b border-gray-200 w-full"></div>
          </div>

          {/* Question 2 */}
          <div className="mt-6 pt-10 px-4 md:px-10 flex flex-col gap-8">
            <div className="flex justify-between ">
              <div>
              <div className="flex items-center gap-4">
                {/* Profile pic and name */}
              <div className="rounded-full overflow-hidden w-[36px] h-[36px]">
                <Image
                  src="/images/y2k-2.jpg"
                  width={80}
                  height={80}
                  alt="avatar image"
                  className="object-cover"
                />
              </div>
              <p className="text-[14px] text-gray-500">Sarah Jackson</p>
            </div>
              </div>
              <p className="text-gray-300">7 months ago</p>
            </div>
            <div>
              <p className="">
              Will the color match what I see online?
              </p>
            </div>
            <div className=" text-[#484848] flex">
              <div className="border border-[#A9A9A9] w-[2px] h-auto ml-8" ></div>
              <div className="flex flex-col pl-4 gap-4">
                <p>TSABINZ</p>
                <p>We do our best to show accurate colors, but slight variations can happen due to screen settings.</p>
              </div>
            </div>
            
            <div className="border-b border-gray-200 w-full"></div>

            {/* <div className=" items-center w-full"> */}
              <button className="bg-gray-200 flex w-auto mx-auto px-7 justify-center gap-4 items-center py-2 rounded-full mb-8"
                onClick={()=>setaskQuestionIsOpen(true)}>
                <CiLock />
                <p>Write a Question</p>
              </button>
            {/* </div> */}
            <QuestionModal isOpen={askQuestionIsOpen} onClose={() => setaskQuestionIsOpen(false)} />
          </div>
        </div>
        </>):(  
        <>
        <div>
        {/* Display existing reviews */} 
        <div className="mt-6 pt-10 px-4 md:px-10 flex flex-col gap-8"> 
          {reviews.map(review => ( 
            <div key={review._id} className="flex flex-col gap-8"> 
            <div className="flex justify-between"> 
              <ul className="flex gap-2 text-yellow-500 text-3xl"> 
                {[...Array(5)].map((_, index) => (
                   <li key={index}> 
                      <RiStarSFill className={index < review.rating ? 'text-yellow-500' : 'text-gray-300'} /> 
                    </li> 
                  ))} 
              </ul> 
              <p className="text-gray-300">{new Date(review.createdAt).toLocaleDateString()}</p> 
                  </div> 
                  <div> 
                    <p>{review.review}</p> 
                    </div> 
                    <div className=" w-full h-auto">
                      {review.images.map((image, index) => {
                        const imageUrl = image.url.replace('http://', 'https://'); // Ensure it's HTTPS
                        return (
                          <Image
                            key={index}
                            src={imageUrl} // Use the corrected URL
                            alt={`review product ${index}`}
                            width={145}
                            height={220}
                            className="w-auto h-auto object-cover"
                          />
                        );
                      })}
                    </div>
                     
                       <div className="flex items-center gap-4"> 
                        <div className="rounded-full overflow-hidden w-[36px] h-[36px]"> 
                          <Image src={userDetails[review.user._id]?.photo || '/images/fashion-insights-1.jpg'}
                          // Default for now
                          width={80} height={80} alt="avatar image" className="object-cover" 
                          /> 
                          </div> 
                          <p className="text-[14px] text-gray-500">{userDetails[review.user._id]?.fullName || 'Anonymous'}</p>
                           </div> 
              <div className="border-b border-gray-200 w-full"></div> 
            </div> ))}
        
          <button className="bg-gray-200 flex mx-auto px-7 justify-center gap-4 items-center py-2 rounded-full"
            onClick={()=>setReviewIsOpen(true)}>
            <CiLock />
            <p>Write a review</p>
          </button>
        </div>
      </div>
        </>)}

       {/* Review Modal */} 
       <ReviewModal 
          onReviewSubmit={handleReviewSubmit} 
          isOpen={reviewIsOpen} 
          productId={param.id} 
          onClose={() => setReviewIsOpen(false)} />
    </div>
  );
};

export default ReviewsAndQuestion;
