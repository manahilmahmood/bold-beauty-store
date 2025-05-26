import React from 'react';
import { FaStar } from 'react-icons/fa';
import { reviewData } from '../utli/objectData/reviewdata';

const Reviews = () => {
  const stars = Array(5).fill(<FaStar className="text-yellow-500" />);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <p className="text-gray-700 text-sm mb-2 uppercase mt-10">Jane Oliver</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-snug mb-4">
           Where innovation meets sophistication. A product built to impress and perform...
          </h2>
          <hr className="w-16 border-pink-300 mt-4" />
        </div>

        {/* Right side*/}
        <div className="flex flex-col gap-10 mt-20">
         {reviewData.map((item, index) => (
      <div key={index} className="mb-8">
      <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`text-yellow-500 ${i < parseFloat(item.Rating) ? '' : 'opacity-30'}`} />
      ))}
    </div>
    <p className="text-gray-700 mb-2">{item.Review}</p>
    <p className="text-sm uppercase text-gray-500">{item.Name}</p>
    <hr className="w-16 border-pink-300 mt-2" />
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
