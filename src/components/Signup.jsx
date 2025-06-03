import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannar3 from '../assets/images/bannar3.png';
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utli/url";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = { name, email, password };
      const res = await postWithoutToken(endPoint.register, data);

      if (res?.accesstoken && res?.content) {
        localStorage.setItem("token", res.accesstoken);
        localStorage.setItem("user", JSON.stringify(res.content));
        localStorage.setItem("role", res.content.role);

        // Redirect to login or home based on your flow
        window.location.href = "/Login";
      } else {
        alert("Signup failed.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong during signup.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      const user = JSON.parse(userData);
      if (user?.role === 'user') {
        window.location.href = "/";
      } else if (user?.role === 'admin') {
        window.location.href = "/dashboard";
      }
    }
  }, []);

  return (
    <div className="bg-slate-50 flex justify-center items-center min-h-screen">
      <div className="flex w-4/6 h-auto my-8 border rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Image Section */}
        <div className="w-2/4 relative">
          <img src={bannar3} alt="signup" className="w-full h-full object-cover" />
        </div>

        {/* Right Form Section */}
        <div className="w-2/4 p-10 flex flex-col justify-center items-center">
          <h1 className="text-pink-500 font-bold text-[1.8rem]">Sign Up</h1>
          <p className="text-md text-gray-700 mb-6">Sign up to continue shopping</p>

          <form className="w-full" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="w-full mb-4">
              <label className="text-sm font-medium text-gray-800 mb-1 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-pink-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="w-full mb-4">
              <label className="text-sm font-medium text-gray-800 mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border border-pink-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="w-full mb-4">
              <label className="text-sm font-medium text-gray-800 mb-1 block">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-full font-bold text-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Already Have Account Link */}
          <p className="mt-5 text-sm">
            Already have an account?{' '}
            <Link to="/Login" className="text-pink-400 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
