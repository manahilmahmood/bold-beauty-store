// src/components/MobileMenu.js
import { NavLink } from 'react-router-dom';
import { navbar } from '../utli/tailwind/style';
import NavMenu from '../navigation/NavMenu';

function MobileMenu({ showDropdown, toggleDropdown, closeMenu }) {
  return (
    <div className="flex flex-col absolute space-y-4 w-40% h-50 px-6 py-4 bg-white shadow-md">
      <NavLink to="/" className={navbar.navLink} onClick={closeMenu}>Home</NavLink>
      <NavLink to="/ShopAll" className={navbar.navLink} onClick={closeMenu}>Shop All</NavLink>
      <div onClick={toggleDropdown} className="cursor-pointer">
        <span className="text-black hover:text-pink-600">Products</span>
        {showDropdown && <NavMenu />}
      </div>
      <NavLink to="/About" className={navbar.navLink} onClick={closeMenu}>About</NavLink>
      <NavLink to="/Contact" className={navbar.navLink} onClick={closeMenu}>Contact</NavLink>
    </div>
  );
}

export default MobileMenu;
