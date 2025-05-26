import React from 'react';
import banner1 from '../assets/images/bannar1.webp'; // update path as needed

const Bannar = () => {
  return (
    <div className='m-3'>
    <div
      className="w-full h-[500px] bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="max-w-xl text-white">
        <p className="uppercase text-sm tracking-widest mb-2">New In Town</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          The New Beauty <br /> Collection
        </h1>
        <p className="text-lg mb-6">
          This new collection brings with it the<br/>most exciting lorem ipsum dolor sit amet.
        </p>
        <button className="bg-white text-black px-5 py-2 rounded hover:bg-black hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default Bannar;
