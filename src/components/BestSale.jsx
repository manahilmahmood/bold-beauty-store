import React from 'react'
import {bestSale} from '../utli/objectData/bestsale'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slice/counterSlice';
import { addToWishlist } from '../store/slice/counterSlice';

function BestSale() {
   const dispatch = useDispatch();
  return (
    <div className=''>
  <div className='flex justify-center items-center text-center my-9 mx-7'>
    <h1 className="text-[2rem] font-bold mt-10 text-gray-900">BEST SELLING</h1>
  </div>

  <div className='flex flex-wrap gap-6 ml-4'>
    {bestSale.map((item) => (
      <div key={item.id} className='w-[23%] bg-white p-4 relative'>

        {/* Wishlist Icon */}
        <button onClick={() => dispatch(addToWishlist(item))}>
        <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-pink-500 cursor-pointer"></i></button>

        {/* Sale Badge */}
        {item.flash && (
          <p className="absolute top-2 left-2 text-xs bg-pink-100 text-black w-[3rem] h-[1.5rem] rounded-xl text-center pt-1">Sale!</p>
        )}

        {/* Add to Cart Icon */}
        <button
         onClick={() => dispatch(addProduct(item))}
         className="absolute bottom-28 left-2 bg-pink-200 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <i className="fa-solid fa-bag-shopping"></i>
        </button>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className='w-[200px] h-[300px] justify-center items-center object-cover mb-3'
        />

        {/* Title + Description */}
        <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
        <p className='text-xs text-gray-500'>{item.description}</p>

        {/* Price */}
        <div className='flex justify-between items-center mt-2'>
          <span className='text-md font-bold text-black'>Rs {item.price}</span>
          {item.oldPrice && (
            <span className='text-sm line-through text-gray-400'>Rs {item.oldPrice}</span>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default BestSale;