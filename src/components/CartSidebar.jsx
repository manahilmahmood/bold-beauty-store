import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity
} from "../store/slice/counterSlice";

function CartSidebar({ isOpen, toggleCart }) {
  const { product } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

const subtotal = product.reduce((acc, item) => {
  const price = typeof item.price === "string" ? parseFloat(item.price.replace("Rs", "")) : item.price;
  return acc + item.quantity * price;
}, 0);


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={toggleCart}>
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-9rem)]">
          {product.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            product.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded mr-2"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.price} x {item.quantity}
                  </p>

                  {/* Quantity Control */}
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => dispatch(decrementQuantity(item))}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => dispatch(incrementQuantity(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-gray-800 hover:text-black"
                  onClick={() => dispatch(removeProduct(item))}
                >
                  <i className="fa-solid fa-xmark text-md"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Subtotal and Checkout */}
        {product.length > 0 && (
          <div className="p-4 border-t absolute bottom-0 w-full bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">Subtotal:</span>
              <span className="text-pink-500 font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
