import React, { useState } from 'react';

function Header() {
  const [isShow, setIsShow] = useState(true);

  if (!isShow) return null;

  return (
    <div className="relative bg-black text-white py-2 px-4 ">
      <h1 className="text-center text-sm md:text-base">
        Free Shipping on orders above Rs 3000
      </h1>

      <button
        onClick={() => setIsShow(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Close"
      >
        <i className="fa-solid fa-xmark text-white text-lg"></i>
      </button>
    </div>
  );
}

export default Header;
