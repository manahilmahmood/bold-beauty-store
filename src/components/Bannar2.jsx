import React from 'react';
import banner4 from '../assets/images/bannar4.jpg'; // update path as needed

const Bannar2 = () => {
  return (
    <div className='m-3'>
    <div
      className="w-full h-[500px] mt-10 bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${banner4})` }}
    >
      <div className="max-w-xl text-black">
        <p className="uppercase text-sm tracking-widest mb-2">New Collection</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          The beauty collection <br/> that makes all <br/> the difference!
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

export default Bannar2;
