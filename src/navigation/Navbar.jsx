import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo-retina.png";
import { NavLink } from 'react-router-dom';
import { navbar } from '../utli/tailwind/style';
import NavMenu from './NavMenu';
import { useSelector } from 'react-redux';
import CartSidebar from "../components/CartSidebar";
import WishlistCart from '../components/WishlistCart';
import AccountDropdown from '../components/AccountDropdown';

function Navbar() {
  const { product, wishlist } = useSelector((state) => state.counter);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [token, setToken] = useState(null);

  // Get token from localStorage on mount
  useEffect(() => {
    const accToken = localStorage.getItem("token");
    setToken(accToken);
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);
  const toggleProductDropdown = () => setShowProductDropdown(!showProductDropdown);
  const toggleAccountDropdown = () => setShowAccountDropdown(!showAccountDropdown);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white py-4 flex items-center w-full">
        
        {/* Navigation Links */}
        <div>
          <ul className="ml-10 flex space-x-6 items-center">
            <li>
              <NavLink to="/" className={navbar.navLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/ShopAll" className={navbar.navLink}>Shop All</NavLink>
            </li>

            {/* Products with Dropdown */}
            <li className="relative" onClick={toggleProductDropdown}>
              <span className="text-black hover:text-pink-600 cursor-pointer">
                Products <i className="fa-solid fa-angle-down"></i>
              </span>
              {showProductDropdown && <NavMenu />}
            </li>

            <li>
              <NavLink to="/About" className={navbar.navLink}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={navbar.navLink}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Logo Centered */}
        <div className='ml-[9rem]'>
          <div className="w-36 px-4">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Right-side Controls */}
        <div className="flex ml-auto px-4 space-x-5 items-center">
          
          {/* Search Bar */}
          <div className="flex bg-slate-50 rounded-2xl border w-[13rem] h-[2.5rem]">
            <i className="fa-solid fa-magnifying-glass self-center text-base text-gray-600 px-4"></i>
            <input
              className="bg-transparent outline-none border-none text-black text-base w-full"
              placeholder="Search..."
            />
          </div>

          {/* Wishlist */}
          <button onClick={toggleWishlist} className="flex items-center space-x-1">
            <i className="fa-solid fa-heart text-black"></i>
            <p>WishList ({wishlist?.length || 0})</p>
          </button>

          {/* Cart */}
          <button className="flex items-center space-x-1" onClick={toggleCart}>
            <i className="fa-solid fa-bag-shopping text-black"></i>
            <p>({product?.length || 0})</p>
          </button>

          {/* Account */}
          {token ? (
            <button
              onClick={toggleAccountDropdown}
              className="relative flex items-center space-x-1"
            >
              <i className="fa-solid fa-user text-black"></i>
              <p>Account</p>
              <i className="fa-solid fa-angle-down text-sm ml-1 text-zinc-800"></i>

              {showAccountDropdown && (
                <div className="absolute right-0 top-full mt-2 z-50">
                  <AccountDropdown onClose={() => setShowAccountDropdown(false)} />
                </div>
              )}
            </button>
          ) : (
            <NavLink to="/Login">
              <button className="flex items-center space-x-1">
                <i className="fa-solid fa-user text-black"></i>
                <p>Account</p>
              </button>
            </NavLink>
          )}
        </div>
      </div>

      {/* Wishlist Sidebar */}
      <WishlistCart isOpen={isWishlistOpen} onClose={toggleWishlist} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
}

export default Navbar;
