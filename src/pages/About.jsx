import React from 'react'
import bannar7 from "../assets/images/bannar7.jpg"
import ceo from "../assets/images/Ceo.jpg"

function About() {
  return (
    <div className='flex flex-col items-center m-5'>

      {/* Banner Section */}
      <div className="relative w-full h-[20rem] rounded-xl overflow-hidden flex items-center justify-center text-gray-800 px-10 text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannar7})` }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h4 className='text-md font-serif animate-slideDownFade'>BeBold</h4>
          <h1 className='text-3xl font-serif font-extrabold animate-slideDownFade delay-300'>About Us</h1>
          <p className='text-md font-serif animate-slideDownFade mt-2 px-8'>
            BeBold Beauty was co-founded by Sarah & Fatima in 2020, with a goal to provide effective skincare products 
            formulated with the purest and the most nutrient-rich ingredients nature has to offer. Our brand marries 
            traditional skin concoctions with modern, ingredient-focused formulas.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center m-20 px-6 gap-8 max-w-6xl">

        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={ceo} alt="Founders" className="h-90 w-auto rounded-lg shadow-md object-cover" />
        </div>

        {/* Text + Icons */}
        <div className="md:w-1/2 w-full text-gray-700 space-y-4 flex flex-col justify-center">
          <p className="text-base leading-relaxed">
            Our skin care & hair care brand revolves around sustainability. As our products do not contain any harmful 
            chemicals like parabens, phthalates and sulphates. We source our raw materials in an ethically sound manner 
            from small farms and suppliers. These rich ingredients are skillfully incorporated into our products using 
            our precise manufacturing techniques, bringing together the delicate balance of powerful active ingredients 
            with exceptional functionality. Our motto is to prepare products in small batches, in order to stay fresh.
          </p>

          {/* Icons Row */}
          <div className="flex gap-8 flex-wrap pt-2">
            <img src="https://organiclabpk.com/wp-content/uploads/2022/12/Untitled-5-01-2.png" alt="Preservatives Free" className="h-20" />
            <img src="https://organiclabpk.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-10-21-at-4.50.02-PM-3.jpeg.webp" alt="Made with Love" className="h-20" />
            <img src="https://organiclabpk.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-10-21-at-4.50.02-PM-2.jpeg.webp" alt="Cruelty Free" className="h-20" />
            <img src="https://organiclabpk.com/wp-content/uploads/2022/12/sfses-01.png.webp" alt="Natural Product" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
