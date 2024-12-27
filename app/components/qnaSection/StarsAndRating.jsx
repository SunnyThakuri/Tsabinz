import React, { useMemo } from 'react';
import { RiStarSFill } from "react-icons/ri";

// const StarsAndRating = ({ reviews }) => {
const StarsAndRating = () => {

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

  return (
    <div className='pb-10 w-full'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[110px] mt-8 md:mt-[120px] mx-4 lg:mx-[104px]'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[32px] text-center md:text-left'>{averageRating}</h1>
          <ul className='flex gap-2 text-yellow-500'>
            {/* {[...Array(5)].map((_, index) => (
              <li key={index} className={index < averageRating ? 'text-yellow-500' : 'text-gray-300'}>
                <RiStarSFill  className='w-8 h-8'/>
              </li>
            ))} */}
              <li key={index} className= 'text-yellow-500'>
                <RiStarSFill  className='w-8 h-8'/>
              </li>
          </ul>
          <p className=' text-gray-400 text-center md:text-left'> {reviews.length} ratings</p>
        </div>
        <div className='w-36 h-1 md:w-1 md:h-[148px] border-l'></div>
        <div>
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={index} className='flex justify-between items-center gap-6'>
              <ul className='flex gap-2 text-yellow-500'>
                {/* {[...Array(rating)].map((_, i) => (
                  <li key={i}><RiStarSFill className='w-8 h-8' /></li>
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <li key={i} className='text-gray-300'><RiStarSFill className='w-8 h-8' /></li>
                ))} */}
                <li key={i}><RiStarSFill className='w-8 h-8' /></li>
              </ul>
              <div className='w-[100px] h-1 bg-gray-300 rounded-full'>
                <div className='bg-yellow-400' style={{ width: `${(ratingCounts[rating] / reviews.length) * 100}%`, height: '100%' }}></div>
              </div>
              <p>{ratingCounts[rating]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full h-1 border-b mt-8 mx-[104px]'></div>
      </div>
    </div>
  );
};

export default StarsAndRating;
