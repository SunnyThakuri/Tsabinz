import React from "react";
import { RxCross1 } from "react-icons/rx";


const QuestionModal = ({ isOpen, onClose }) => { 
    if (!isOpen) return null; 
    
    return ( 
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"> 
        <div className="bg-white p-6  lg:w-1/3 w-[90%]"> 
          <div className="flex justify-end">
            <RxCross1 className="w-5 h-5 cursor-pointer" onClick={onClose} />
          </div>
            <div className="mb-4"> 
              <label className="block text-gray-700 text-sm mb-2" htmlFor="review">Write Your Question</label> 
              <textarea id="review" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5"></textarea> 
            </div> 
            <div className="flex justify-end gap-5"> 
              <button onClick={onClose} className=" bg-black text-white py-1 px-8 rounded-full"> Submit </button> 
            </div> 
          </div> 
        </div> 
          ); 
        };

export default QuestionModal;