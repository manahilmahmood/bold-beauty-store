import React from 'react';
import contactus from "../assets/images/contactus.avif";

function Contact() {
  return (
    <div className="m-5">
      {/* Banner Section */}
      <div className="relative w-full h-[28rem] rounded-xl overflow-hidden text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactus})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Text Content */}
        <div className="relative z-20 text-center px-4">
          <h4 className="text-md font-serif text-pink-200">Get In Touch</h4>
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold">Message Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 overflow-hidden">
        {/* Contact Info */}
        <div className="p-10">
          <h2 className="text-4xl font-serif font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We’re just a message away. Contact us for quick support or inquiries.
          </p>

          <div className="space-y-6 text-gray-800 text-base">
            <div className="flex items-start space-x-4">
              <i className="fa-solid fa-location-dot text-xl mt-1 text-pink-500"></i>
              <p>123 Fifth Avenue, New York, NY 10160</p>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fa-solid fa-envelope text-xl mt-1 text-pink-500"></i>
              <p>contact@info.com</p>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fa-solid fa-phone text-xl mt-1 text-pink-500"></i>
              <p>9-334-7565-9787</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10  bg-pink-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 invisible">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
