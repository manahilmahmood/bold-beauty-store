import React from 'react'
import bannar5 from "../assets/images/bannar5.jpg"
import bannar6 from "../assets/images/bannar6.jpg"

function ProCards() {
  return (
    <div className="flex justify-center gap-6 px-6 py-10">
      <div className="w-[50%] h-[30rem] overflow-hidden rounded-md shadow-xl">
        <img 
          src={bannar5} 
          alt="Makeup Kit" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-[50%] h-[30rem] overflow-hidden rounded-md shadow-xl">
        <img 
          src={bannar6} 
          alt="Skincare Regime" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  )
}

export default ProCards
