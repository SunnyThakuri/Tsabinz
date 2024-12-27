"use client"
import React, { useEffect, useState } from "react";
import ItemDetails from '../../components/qnaSection/ItemDetails'
import StarsAndRating from '../../components/qnaSection/StarsAndRating'
import ReviewsAndQuestion from '../../components/qnaSection/ReviewsAndQuestion'
import NewArrivals from '../../components/NewArrivals'
import BestSellers from '../../components/BestSellers'
// import { getProductReviews } from "../../api";
// import { useParams } from "next/navigation";


const QNAsection = () => {
  // const [reviews, setReviews] = useState([]);
  // const param=useParams();

  // useEffect(()=>{
  //   const fetchReviews = async () =>{
  //     try{
  //       const data=await getProductReviews(param.id)
  //       setReviews(data.reviews)
  //     }catch(error){
  //       console.error('Error fetching reviews:', error);
  //     }
  //   }
  //   fetchReviews()
  // },[])

  return (
    <div>
        {/* <ItemDetails reviews={reviews} />
        <StarsAndRating reviews={reviews}/>
        <ReviewsAndQuestion reviews={reviews}/>
        <BestSellers/>
        <NewArrivals/> */}
        <ItemDetails  />
        {/* <StarsAndRating /> */}
        {/* <ReviewsAndQuestion /> */}
        <BestSellers/>
        <NewArrivals/>
    </div>
  )
}

export default QNAsection