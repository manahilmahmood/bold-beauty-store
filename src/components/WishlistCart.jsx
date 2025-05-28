// components/WishlistCart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/slice/counterSlice';

const WishlistCart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.counter.wishlist || []);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Wishlist</h2>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark w-6 h-6"></i>
        </button>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="p-4 text-center text-gray-500">Your wishlist is empty.</div>
      ) : (
        <ul className="p-4 space-y-4">
          {wishlistItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded mr-2"
              />
              <div className="flex-1 ml-2">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-sm text-gray-600">
                  Rs {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(item))}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <i className="fa-solid fa-xmark w-5 h-5"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistCart;
