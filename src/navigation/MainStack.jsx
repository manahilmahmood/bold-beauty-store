import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ShopAll from "../pages/ShopAll";
import Contact from "../pages/Contact";
import Bannar from "../components/Bannar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Makeup from "../pages/Makeup";
import Skincare from "../pages/Skincare";
import Haircare from "../pages/Haircare";
// import NavMenu from "../components/NavMenu"; // Uncomment and fix if you have this component

const MainStack = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/ShopAll" element={<ShopAll />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/NavMenu" element={<NavMenu />} /> */}
      <Route path="/Bannar" element={<Bannar />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Makeup" element={<Makeup />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/Haircare" element={<Haircare />} />



    </Routes>
  );
};

export default MainStack;
