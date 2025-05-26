import React from 'react';
import { NavLink } from 'react-router-dom';
import { navbar } from '../utli/tailwind/style';
import logo from '../assets/images/logo-retina.png';

function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-800 pt-10">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b">
        <h2 className="text-xl font-medium mb-4 md:mb-0">Subscribe to our newsletter</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-3">
          <input
            type="email"
            placeholder="Your email address..."
            className="px-4 py-2 w-full sm:w-[20rem] rounded border outline-none"
          />
          <button className="bg-black text-white px-6 py-2 uppercase tracking-wide">
            Subscribe
          </button>
        </div>
      </div>

      {/* NavLinks & Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row flex-wrap gap-10">
        {/* Logo */}
        <div className="w-52 px-4 space-y-6
        ">
          <img src={logo} alt="logo" />

          {/* Socials & Email */}
        <div className="flex flex-col space-y-4 ">
          <h2 className="text-md">customercare@gmail.com</h2>
          <div className="space-x-4">
              <i className="fa-brands fa-facebook text-xl"></i>
              <i className="fa-brands fa-twitter text-xl"></i>
              <i className="fa-brands fa-instagram text-xl"></i>
          </div>
        </div>
        </div>

       <div className='flex justify-between ml-[10rem] space-x-12'>
         {/* Shop All */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Shop All</h2>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/HairCare" className={navbar.navLink}>Hair Care</NavLink></li>
            <li><NavLink to="/SkinCare" className={navbar.navLink}>Skin Care</NavLink></li>
            <li><NavLink to="/Makeup" className={navbar.navLink}>Makeup</NavLink></li>
            <li><NavLink to="/PersonalCare" className={navbar.navLink}>Personal Care</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/FAQ" className={navbar.navLink}>FAQ</NavLink></li>
            <li><NavLink to="/Return" className={navbar.navLink}>Return & Exchange</NavLink></li>
            <li><NavLink to="/Delivery" className={navbar.navLink}>Delivery</NavLink></li>
            <li><NavLink to="/ContactUs" className={navbar.navLink}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              House: 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216
            </li>
            <li>
              <i className="fa-solid fa-envelope mr-2"></i>
              info@inilabs.net
            </li>
            <li>
              <i className="fa-solid fa-phone-volume mr-2"></i>
              +8801333384628
            </li>
          </ul>
        </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-sm text-gray-700 text-center py-6 border-t">
        Copyright © 2025 Be Bold | Powered by Be Bold
      </div>
    </footer>
  );
}

export default Footer;
