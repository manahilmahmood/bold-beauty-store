import React from 'react'

function ChooseUs() {
  return (
    <div className="flex items-start py-10 px-10 bg-white gap-x-14">
      {/* Left Heading */}
      <div className="min-w-[180px]">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          WHY CHOOSE US
        </h2>
        <div className="border-b-[1px] w-20 border-rose-300 mt-2"></div>
      </div>

      {/* Right Cards */}
      <div className="flex justify-between gap-12">
        {/* Card 1 */}
        <div className="flex items-start space-x-4 max-w-xs">
          <div className="bg-rose-200 rounded-full p-3">
            <i className="fa-solid fa-truck-fast text-xl text-pink-700"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
             Get your products delivered quickly and securely right to your doorstep. We prioritize speed without compromising on care.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-x-4 max-w-xs">
          <div className="bg-rose-200 rounded-full p-3">
            <i className="fa-solid fa-cart-shopping text-xl text-pink-700"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Free Shipping</h3>
            <p className="text-gray-600 text-sm">
             Enjoy free shipping on all your orders—no minimum purchase required. Shop more, worry less about delivery fees.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start space-x-4 max-w-xs">
          <div className="bg-rose-200 rounded-full p-3">
            <i className="fa-solid fa-arrow-left text-xl text-pink-700"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Easy Returns</h3>
            <p className="text-gray-600 text-sm">
             Not satisfied? No problem. Our hassle-free return policy ensures you can shop with confidence and peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
