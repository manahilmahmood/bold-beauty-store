import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountDropdown = ({ onClose }) => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "Guest";
  const email = user.email || "N/A";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (onClose) onClose(); // close dropdown if open
    navigate("/");
    window.location.reload(); // force navbar re-render
  };

  const menuItems = [
    {
      label: "Profile",
      icon: "fas fa-user",
      to: "/accountinfo",
    },
    {
      label: "Order History",
      icon: "fas fa-box",
      to: "/orderhistory",
    },
    {
      label: "Change Password",
      icon: "fas fa-key",
      to: "/change-password",
    },
    {
      label: "Track Order",
      icon: "fas fa-map-marker-alt",
      to: "/trackorder",
    },
    {
      label: "Logout",
      icon: "fas fa-sign-out-alt",
      action: "logout",
    },
  ];

  return (
    <div className="absolute top-8 right-1 mt-2 w-[12rem] bg-white border border-zinc-300 rounded-md shadow-md py-3 px-2 z-50">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-5 border-b pb-4">
        <img
          src="https://demo.storeking.xyz/images/required/profile.png"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-md">{userName}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 text-sm text-gray-700">
        {menuItems.map((item) =>
          item.action === "logout" ? (
            <button
              key={item.label}
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-green-600 w-full text-left"
            >
              <i className={`${item.icon} w-4 text-gray-400`}></i>
              <span>{item.label}</span>
            </button>
          ) : (
            <Link
              to={item.to}
              key={item.label}
              className="flex items-center gap-2 hover:text-green-600"
              onClick={onClose}
            >
              <i className={`${item.icon} w-4 text-gray-400`}></i>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
