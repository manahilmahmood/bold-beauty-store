import React , { useState }  from 'react'
import { skincareData } from '../utli/objectData/skincaredata';
import { sortProducts } from "../utli/sort";
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slice/counterSlice';
import { addToWishlist } from '../store/slice/counterSlice';
import skincare from "../assets/images/skin-care.jpg";

  

const PRODUCTS_PER_PAGE = 8;

function Skincare() {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("latest");

  // Pagination logic
  const totalPages = Math.ceil(skincareData .length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const sortedProducts = sortProducts(skincareData , sortBy);
const paginatedProducts = sortedProducts.slice(start, end);

const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center m-5'>
     <div
                className="w-full h-[20rem] bg-cover bg-center flex items-center px-10 rounded-xl flex-col justify-center text-gray-800"
                style={{ backgroundImage: `url(${skincare})` }}
              >
             <h4 className='text-md font-serif animate-slideDownFade'>BeBold</h4>
             <h1 className='text-3xl font-serif font-extrabold animate-slideDownFade delay-300'>Skin Care</h1>
           </div>
      <div className="p-4">
      <div className="flex justify-between items-center mt-8 mb-2">
        <span>
          Showing {start + 1}-{Math.min(end, skincareData .length)} of {skincareData .length} results
        </span>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="latest">Sort by Latest</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>

          <button className="text-xl">Filter</button>
        </div>
      </div>

      <div className='flex flex-wrap gap-6 ml-4 relative'>
          {paginatedProducts.map((item) => (
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
                    className='w-full h-[20rem] object-cover mb-3'
                  />
          
                  {/* Title + Description */}
                  <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
                  <p className='text-xs text-gray-500'>{item.description}</p>
          
                  {/* Price */}
                  <div className='flex justify-between items-center mt-2'>
                    <span className='text-md font-bold text-black-600'>Rs {item.price}</span>
                    {item.oldPrice && (
                      <span className='mr-8 text-md line-through text-gray-500'>Rs {item.oldPrice}</span>
                    )}
                  </div>
                </div>

        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2 items-center">
  {/* Previous Arrow */}
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`px-3 py-1 border rounded ${
      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
  <i class="fa-solid fa-arrow-left"></i>
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      className={`px-3 py-1 border rounded ${
        currentPage === i + 1 ? "bg-black text-white" : ""
      }`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  {/* Next Arrow */}
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className={`px-3 py-1 border rounded ${
      currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
   <i class="fa-solid fa-arrow-right"></i>
  </button>
</div>

    </div>
    </div>
    
  )
}

export default Skincare