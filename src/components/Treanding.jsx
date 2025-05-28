import React from 'react'
import {trendingProduct} from '../utli/objectData/trendingdata'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slice/counterSlice';
import { addToWishlist } from '../store/slice/counterSlice';




function Trending() {
    const dispatch = useDispatch();
  return (
    <div className='m-3'>
  <div className='flex justify-center items-center text-center my-9 mx-7'>
    <h1 className="text-[2rem] font-bold  text-gray-900">TRENDING NOW</h1>
  </div>

  <div className='flex flex-wrap gap-6 ml-4 relative'>
    {trendingProduct.map((item) => (
      <div key={item.id} className='w-[23%]  bg-white relative'>

        {/* Wishlist Icon */}
        <button
        onClick={() => dispatch(addToWishlist(item))}>
        <i className="fa-regular fa-heart absolute mt-7 top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-pink-500 cursor-pointer"></i> </button>

        {/* Sale Badge */}
        {item.flash && (
          <p className="absolute mt-7 top-2 left-2 text-xs bg-pink-100 text-black w-[3rem] h-[1.5rem] rounded-xl text-center pt-1">Sale!</p>
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
          className='w-full h-auto object-cover mb-3'
        />

        {/* Title + Description */}
        <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
        <p className='text-xs text-gray-500'>{item.description}</p>

        {/* Price */}
        <div className='flex justify-between items-center mt-2'>
          <span className='text-md font-bold text-black-600'>Rs {item.price}</span>
          {item.oldPrice && (
            <span className=' mr-5 text-md line-through text-gray-400'>Rs {item.oldPrice}</span>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Trending;