"use client";
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { RiStarSFill } from 'react-icons/ri';
import { addReview } from '../../api';
import { uploadToCloudinary } from '../../utils/cloudinary';


const ReviewModal = ({ isOpen, onClose, productId, onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      setUploading(true);

      // Upload images to Cloudinary and collect their URLs
      const uploadedImageUrls = await Promise.all(
        images.map(async (image) => {
          const formData = new FormData();
          formData.append('file', image);
          formData.append('upload_preset', 'reviewimage'); // Replace with your Cloudinary preset
          formData.append('folder', 'reviews'); // Optional folder structure
          const response = await uploadToCloudinary(formData);
          return response.url;
        })
      );

      const payload = { pid: productId, rating, review: reviewText, images: uploadedImageUrls };
      await addReview(payload);

      onReviewSubmit(payload); // Notify parent
      onClose(); // Close the modal
    } catch (error) {
      console.log('Error submitting review:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleRating = (index) => setRating(index + 1);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 lg:w-1/3 w-[90%]">
        <div className="flex justify-end">
          <RxCross1 className="w-5 h-5 cursor-pointer" onClick={onClose} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-base mb-2">Rating</label>
          <ul className="flex gap-2 text-gray-500 text-3xl">
            {[...Array(5)].map((_, index) => (
              <li key={index} onClick={() => handleRating(index)}>
                <RiStarSFill className={index < rating ? 'text-yellow-500' : ''} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-base mb-2">Write a Review</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            rows="5"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="py-1 px-4 lg:px-8 rounded-full border-[2px] cursor-pointer">
            Add Photo
          </label>
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="bg-black text-white py-1 px-4 lg:px-8 rounded-full"
          >
            {uploading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;


// "use client";
// import React, { useState } from 'react';
// import { RxCross1 } from 'react-icons/rx';
// import { RiStarSFill } from 'react-icons/ri';
// import { addReview } from '../../api';

// const ReviewModal = ({ isOpen, onClose, productId, onReviewSubmit }) => {
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [images, setImages] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   if (!isOpen) return null;

//   const handleSubmit = async () => {
//     if (!rating || !reviewText.trim()) {
//       setErrorMessage('Please provide a rating and a review.');
//       return;
//     }

//     setIsSubmitting(true);
//     setErrorMessage('');
//     try {
//       const payload = { pid: productId, rating, review: reviewText, images };
//       const response = await addReview(payload);
//       onReviewSubmit(response.data);
//       onClose();
//     } catch (error) {
//       setErrorMessage('Failed to submit review. Please try again.');
//       console.error('Error submitting review:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleRating = (index) => {
//     setRating(index + 1);
//   };

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
//       <div className="bg-white p-6 lg:w-1/3 w-[90%]">
//         <div className="flex justify-end">
//           <RxCross1 className="w-5 h-5 cursor-pointer" onClick={onClose} />
//         </div>
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-base mb-2" htmlFor="rating">Rating</label>
//           <ul className="flex gap-2 text-gray-500 text-3xl">
//             {[...Array(5)].map((star, index) => (
//               <li key={index} onClick={() => handleRating(index)}>
//                 <RiStarSFill className={index < rating ? 'text-yellow-500' : ''} />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-base mb-2" htmlFor="review">Write a Review</label>
//           <textarea
//             id="review"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             rows="5"
//             value={reviewText}
//             onChange={(e) => setReviewText(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-4 flex gap-2">
//           {images.map((file, index) => (
//             <img
//               key={index}
//               src={URL.createObjectURL(file)}
//               alt={`Selected ${index}`}
//               className="w-16 h-16 object-cover rounded-md"
//             />
//           ))}
//         </div>
//         <div className="flex justify-end gap-5">
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleFileUpload}
//             className="hidden"
//             id="fileUpload"
//           />
//           <label htmlFor="fileUpload" className="py-1 px-8 rounded-full border-[2px] cursor-pointer">Add Photo</label>
//           <button
//             onClick={handleSubmit}
//             className="bg-black text-white py-1 px-8 rounded-full"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewModal;

//////////////////////////////////////////////////////////////////////
// "use client";
// import React, { useState } from 'react';
// import { RxCross1 } from 'react-icons/rx';
// import { RiStarSFill } from 'react-icons/ri';
// import { addReview } from '../../api';
// import { uploadImageToCloudinary } from '../../utils/cloudinary'; // Adjust the path as needed

// const ReviewModal = ({ isOpen, onClose, productId, onReviewSubmit }) => {
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleSubmit = async () => {
//     setLoading(true);
//     let imageUrl = '';

//     // Upload image if selected
//     if (imageFile) {
//       try {
//         imageUrl = await uploadImageToCloudinary(imageFile);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//         setLoading(false);
//         return;
//       }
//     }

//     const payload = { pid: productId, rating, review: reviewText, image: imageUrl };
//     console.log('Submitting review payload:', payload);
//     try {
//       const response = await addReview(payload);
//       onReviewSubmit(response.data); // Pass the new review back to the parent component
//       onClose(); // Close the modal
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }

//     setLoading(false);
//   };

//   const handleRating = (index) => {
//     setRating(index + 1);
//   };

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
//       <div className="bg-white p-6 lg:w-1/3 w-[90%]">
//         <div className="flex justify-end">
//           <RxCross1 className="w-5 h-5 cursor-pointer" onClick={onClose} />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-base mb-2" htmlFor="rating">Rating</label>
//           <ul className="flex gap-2 text-gray-500 text-3xl">
//             {[...Array(5)].map((_, index) => (
//               <li key={index} onClick={() => handleRating(index)}>
//                 <RiStarSFill className={index < rating ? 'text-yellow-500' : ''} />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-base mb-2" htmlFor="review">Write a Review</label>
//           <textarea
//             id="review"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             rows="5"
//             value={reviewText}
//             onChange={(e) => setReviewText(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-base mb-2" htmlFor="image">Upload Image</label>
//           <input type="file" onChange={handleFileChange} />
//         </div>
//         <div className="flex justify-end gap-5">
//           <button
//             onClick={handleSubmit}
//             className="bg-black text-white py-1 px-8 rounded-full"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewModal;

